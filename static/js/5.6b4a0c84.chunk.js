(this.webpackJsonpsocial_network_ts=this.webpackJsonpsocial_network_ts||[]).push([[5],{308:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(107);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],s=!0,a=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(s=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);s=!0);}catch(o){a=!0,r=o}finally{try{s||null==i.return||i.return()}finally{if(a)throw r}}return n}}(e,t)||Object(s.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},309:function(e,t,n){"use strict";var s=n(69),a=(n(0),n(139)),r=n(140),c=n(85),i=n(30),o=n(310),u=n.n(o),l=n(1),j=Object(s.a)(5e3);t.a=Object(r.a)({form:"message"})((function(e){return Object(l.jsx)("div",{className:u.a.newMessageForm,children:Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(a.a,{placeholder:"message",name:"message",component:c.b,validate:[s.b,j]})}),Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:"Send"})})]})})}))},310:function(e,t,n){e.exports={newMessageForm:"NewMessage_newMessageForm__3B_Fo"}},321:function(e,t,n){e.exports={chatContainer:"Chat_chatContainer__j8DXm",messages:"Chat_messages__1eilr"}},322:function(e,t,n){e.exports={message:"ChatMessage_message__2elaH"}},326:function(e,t,n){"use strict";n.r(t);var s=n(36),a=n(308),r=n(0),c=n(321),i=n.n(c),o=n(309),u=n(106),l=n(322),j=n.n(l),b=n(1),d=function(e){var t;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:j.a.message,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:null!==(t=e.photo)&&void 0!==t?t:u.a,alt:"profile-picture"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:e.userName}),Object(b.jsx)("br",{}),e.message]})]}),Object(b.jsx)("hr",{})]})},m=null;t.default=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){return function(){var e;null===(e=m)||void 0===e||e.close(),(m=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")).addEventListener("message",(function(e){c((function(t){return[].concat(Object(s.a)(t),Object(s.a)(JSON.parse(e.data)))}))}))}()}),[]);var u=n.map((function(e){return Object(b.jsx)(d,{photo:e.photo,userName:e.userName,message:e.message},e.userId)}));return Object(b.jsxs)("div",{className:i.a.chatContainer,children:[Object(b.jsx)("div",{className:i.a.messages,children:u}),Object(b.jsx)(o.a,{onSubmit:function(e){var t;e&&(null===(t=m)||void 0===t||t.send(e.message))}})]})}}}]);
//# sourceMappingURL=5.6b4a0c84.chunk.js.map