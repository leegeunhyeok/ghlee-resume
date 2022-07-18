(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],[,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),i=(a(13),a(1)),l=(a(14),a(7)),s=a(6),u=a(3),d=function e(t,a,n){Object(u.a)(this,e),this.id=t,this.message=a,this.done=n},m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"todo";Object(u.a)(this,e),this._key=t;var a=localStorage.getItem(t);if(a)try{this._data=JSON.parse(a)}catch(n){this._data=[]}else this._data=[],this._save()}return Object(s.a)(e,[{key:"_save",value:function(){try{localStorage.setItem(this._key,JSON.stringify(this._data))}catch(e){}}},{key:"select",value:function(){return Object(l.a)(this._data)}},{key:"insert",value:function(e){var t=new d(+new Date,e,!1);this._data.unshift(t),this._save()}},{key:"update",value:function(e,t,a){var n=!0,o=!1,c=void 0;try{for(var r,i=this._data[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var l=r.value;if(l.id===e){l.message=t,l.done=a;break}}}catch(s){o=!0,c=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}this._save()}},{key:"delete",value:function(e){for(var t=0;t<this._data.length;t++)if(this._data[t].id===e){this._data.splice(t,1);break}this._save()}}]),e}();a(2),a(15);var f=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],l=function(){c?(e.addTodoItem({message:c}),r("")):alert("To-Do item cannot be empty")};return o.a.createElement("div",{className:"todo__header"},o.a.createElement("input",{placeholder:"To-Do item..",onChange:function(e){return r(e.target.value)},onKeyDown:function(e){13===e.keyCode&&l()},value:c}),o.a.createElement("button",{className:"button accent",onClick:l},"Add"))};a(16);var _=function(e){var t=e.id,a=e.message,c=e.done,r=Object(n.useState)(a),l=Object(i.a)(r,2),s=l[0],u=l[1],d=Object(n.useState)(!1),m=Object(i.a)(d,2),f=m[0],_=m[1],v=function(a){a.currentTarget.contains(a.relatedTarget)||(_(!1),e.update({id:t,message:s,done:c}))};return o.a.createElement("div",{className:"todo__item"},o.a.createElement("div",{className:"todo__item__control--left"},o.a.createElement("button",{className:c?"toggle--active":"toggle",onClick:function(){e.update({id:t,message:a,done:!c})}})),f?o.a.createElement("input",{className:"todo__item__edit",onChange:function(e){return u(e.target.value)},onKeyDown:function(e){return 13===e.keyCode&&v()},onBlur:v,value:s}):o.a.createElement("b",{style:{textDecoration:c?"line-through":"none"},onClick:function(){return _(!0)}},s),o.a.createElement("div",{className:"todo__item__control--right"},o.a.createElement("button",{className:"button red",onClick:function(){return e.delete({id:t})}},"X")))},v=(a(17),{ALL_ITEM:"ALL_ITEM",DONE_ITEM:"DONE_ITEM",PENDING_ITEM:"PENDING_ITEM"});var E=function(e){var t=e.isAllDone,a=e.toggleAllItems,n=e.filterType,c=e.updateFilter,r=e.deleteCheckedItems;return o.a.createElement("div",{className:"todo__footer"},o.a.createElement("div",{className:"todo__footer__panel"},o.a.createElement("div",{className:"todo__footer__item"},o.a.createElement("button",{className:t?"toggle--active":"toggle",style:{display:n===v.ALL_ITEM?"block":"none"},onClick:a})),o.a.createElement("div",{className:"todo__footer__item"},o.a.createElement("button",{className:n===v.ALL_ITEM?"button--active":"button",onClick:function(){return c(v.ALL_ITEM)}},"All")),o.a.createElement("div",{className:"todo__footer__item"},o.a.createElement("button",{className:n===v.DONE_ITEM?"button--active":"button",onClick:function(){return c(v.DONE_ITEM)}},"Done")),o.a.createElement("div",{className:"todo__footer__item"},o.a.createElement("button",{className:n===v.PENDING_ITEM?"button--active":"button",onClick:function(){return c(v.PENDING_ITEM)}},"Pending")),o.a.createElement("div",{className:"todo__footer__item"},o.a.createElement("button",{className:"button red",onClick:r},"Delete"))))};var h=function(){var e=new m("react-todo_v1"),t=Object(n.useState)(e.select()),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(v.ALL_ITEM),s=Object(i.a)(l,2),u=s[0],d=s[1],h=function(){return!!c.length&&c.every((function(e){return e.done}))},g=function(){r(e.select())},N=function(t){var a=t.id,n=t.message,o=t.done;e.update(a,n,o),g()},b=function(t){var a=t.id;e.delete(a),g()};return o.a.createElement("div",{className:"app"},o.a.createElement(f,{addTodoItem:function(t){var a=t.message;e.insert(a),g()}}),o.a.createElement("div",{className:"todo"},function(){var e;switch(u){case v.ALL_ITEM:e=c;break;case v.DONE_ITEM:e=c.filter((function(e){return e.done}));break;case v.PENDING_ITEM:e=c.filter((function(e){return!e.done}));break;default:e=c}return 0===e.length?o.a.createElement("div",{className:"todo--empty"},"To-Do Item is empty.."):e.map((function(e){return o.a.createElement(_,{id:e.id,message:e.message,done:e.done,key:e.id,update:N,delete:b})}))}()),o.a.createElement(E,{isAllDone:h(),toggleAllItems:function(){var t=!h();c.forEach((function(a){e.update(a.id,a.message,t),g()}))},filterType:u,updateFilter:function(e){d(e)},deleteCheckedItems:function(){window.confirm("Are you sure?")&&c.filter((function(e){return e.done})).forEach((function(t){e.delete(t.id),g()}))}}),o.a.createElement("div",{className:"source-code"},o.a.createElement("h6",null,"Using React"),o.a.createElement("a",{href:"https://github.com/leegeunhyeok/react-todo"},"Source Code")),o.a.createElement("div",{className:"checkout"},o.a.createElement("a",{className:"react active",href:"https://docs.geundung.dev/pages/react-todo"},"React"),o.a.createElement("a",{className:"vue",href:"https://docs.geundung.dev/pages/vue-todo"},"Vue"),o.a.createElement("a",{className:"angular",href:"./?"},"Angluar")))};r.a.render(o.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.7ebc18a5.chunk.js.map