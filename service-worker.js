const VERSION = 'v2'
const CACHE_NAME = 'ghlee-portfolio-cache_' + VERSION

// 앱 셸 구성요소
const IMMUTABLE_APPSHELL = [
  '/favicon.ico',
  'https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap'
]

// 자주 변동되는 데이터
const MUTABLE_APPSHELL = [
  '/',
  '/manifest.json',
  '/service-worker.js',
  '/data/activity.json',
  '/data/project.json'
]

// 동적 캐싱을 위한 정규표현식
const DYNAMIC_RESOURCE = /\.(js|css|png|jpg|jpeg)/i

const CACHE_LIST = [...IMMUTABLE_APPSHELL, ...MUTABLE_APPSHELL]

self.addEventListener('install', () => {
  self.skipWaiting()
  // 캐시 추가
  caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(CACHE_LIST)
  })
})

self.addEventListener('activate', (event) => {
  // 이전 캐시 삭제
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key)
        }
      }))
    })
  )
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  // 자주 변동되는 데이터 (선 캐시 후 네트워크) + 캐시에 없으면 네트워크에서 가져온 후 캐싱
  if (MUTABLE_APPSHELL.includes(url.pathname) ||
    DYNAMIC_RESOURCE.test(url.pathname)
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request)
          .then(cacheResponse => {
            const fetchPromise = fetch(event.request)
              .then(response => {
                cache.put(event.request, response.clone())
                return response
              })

            return cacheResponse || fetchPromise
          })
      })
    )
  } else if (IMMUTABLE_APPSHELL.includes(url.pathname)) {
    // 선 캐시 후 네트워크 (캐시가 없을 경우 네트워크에서 가져오기)
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request)
      })
    )
  }
})
