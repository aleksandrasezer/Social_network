(this.webpackJsonpsocial_network_ts=this.webpackJsonpsocial_network_ts||[]).push([[0],[,,,,,,,function(e,s,t){e.exports={navbar:"Navbar_navbar__2u2Yx",item:"Navbar_item__1nEI7",activeLink:"Navbar_activeLink__3ePDo"}},,,function(e,s,t){e.exports={post:"Post_post__ev8Uz",postBody:"Post_postBody__1zq20",postAvatar:"Post_postAvatar__3h6-Q",postText:"Post_postText__3WMa9"}},,function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2B8uW",dialogsItems:"Dialogs_dialogsItems__1_8kw",messages:"Dialogs_messages__3eMQ4"}},,,,,function(e,s,t){e.exports={dialog:"Dialog_dialog__VVj-X",activeDialog:"Dialog_activeDialog__35LJb"}},function(e,s,t){},,,function(e,s,t){e.exports={header:"Header_header__jfPv8"}},,function(e,s,t){e.exports={profile:"Profile_profile__33M3z"}},function(e,s,t){e.exports={myPosts:"MyPosts_myPosts__2wOLj"}},function(e,s,t){e.exports={input:"ControlledTextarea_input__UzrWz"}},function(e,s,t){e.exports={profileInfo:"ProfileInfo_profileInfo__1Bljo"}},function(e,s,t){e.exports={messages:"Messages_messages__3K0tN",message:"Messages_message__3xkcK"}},function(e,s,t){e.exports={message:"Message_message__1W3KS"}},,,,,,function(e,s,t){},,,,,,,function(e,s,t){"use strict";t.r(s);t(18);var a=t(1),n=t.n(a),i=t(20),c=t.n(i),o=(t(34),t(21)),r=t.n(o),d=t(0);var l=function(){return Object(d.jsx)("div",{className:r.a.header,children:Object(d.jsx)("img",{src:"https://www.clipartkey.com/mpngs/m/67-676200_clip-art-pinterest-rick-and-morty-png.png",alt:"logo"})})},j=t(7),g=t.n(j),u=t(8);var x=function(){return Object(d.jsxs)("div",{className:g.a.navbar,children:[Object(d.jsx)("div",{className:g.a.item,children:Object(d.jsx)(u.b,{activeClassName:g.a.activeLink,to:"/profile",children:"Profile"})}),Object(d.jsx)("div",{className:g.a.item,children:Object(d.jsx)(u.b,{activeClassName:g.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(d.jsx)("div",{className:g.a.item,children:Object(d.jsx)("a",{href:"/feed",children:"News"})}),Object(d.jsx)("div",{className:g.a.item,children:Object(d.jsx)("a",{href:"/music",children:"Music"})}),Object(d.jsx)("div",{className:g.a.item,children:Object(d.jsx)("a",{href:"/settings",children:"Settings"})})]})},p=t(23),m=t.n(p),b=t(24),h=t.n(b),v=t(10),O=t.n(v);var f=function(e){return Object(d.jsxs)("div",{className:O.a.post,children:[Object(d.jsxs)("div",{className:O.a.postBody,children:[Object(d.jsx)("div",{className:O.a.postAvatar,children:Object(d.jsx)("img",{src:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"})}),Object(d.jsx)("div",{className:O.a.postText,children:e.postText})]}),Object(d.jsxs)("div",{className:O.a.likeArea,children:[Object(d.jsxs)("span",{children:["likesCount = ",e.likesCount]}),Object(d.jsx)("button",{children:"Remove"})]})]})},_=t(25),T=t.n(_);function P(e){return Object(d.jsx)("div",{className:T.a.input,children:Object(d.jsx)("textarea",{onChange:function(s){if(s.currentTarget){var t=s.currentTarget.value;e.onPostChange(t)}},value:e.value,onClick:e.onTextClick})})}var w=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}};var N=function(e){var s=e.posts.map((function(e){return Object(d.jsx)(f,{id:e.id,postText:e.postText,likesCount:e.likesCount})}));return Object(d.jsxs)("div",{className:h.a.myPosts,children:["My posts",Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"New post"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{onPostChange:function(s){e.dispatch(w(s))},value:e.newPostText,onTextClick:function(){return e.dispatch(w(""))}}),Object(d.jsx)("button",{onClick:function(){e.dispatch({type:"ADD-POST"})},children:"Add post"})]})]}),Object(d.jsx)("div",{children:s})]})},y=t(26),k=t.n(y);var M=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.img,alt:"my_profile_avatar"})}),Object(d.jsxs)("div",{className:k.a.profileInfo,children:[e.name," ",Object(d.jsx)("br",{}),e.age," y.o.",Object(d.jsx)("br",{}),e.aboutMe]})]})};var C=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:m.a.profile,children:Object(d.jsx)(M,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GXs_w8JLLJc_P90Kojd2Pzj649nHhjymWA&usqp=CAU",name:"Aleksandra",age:28,aboutMe:"Assigned cool at birth"})}),Object(d.jsx)("div",{children:Object(d.jsx)(N,{posts:e.posts,dispatch:e.dispatch,newPostText:e.newPostText})})]})},D=t(12),A=t.n(D),E=t(27),S=t.n(E),B=t(28),I=t.n(B);var L=function(e){return Object(d.jsx)("div",{className:I.a.message,children:e.message})},W=t(42),U=function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",newMessageText:e}};var z=function(e){var s=e.messages.map((function(e){return Object(d.jsx)(L,{id:e.id,message:e.messageText})}));return console.log(e.messages),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:S.a.messages,children:s}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(P,{onPostChange:function(s){e.dispatch(U(s))},value:e.newMessageBody,onTextClick:function(){return e.dispatch(U(""))}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){return e.dispatch({type:"ADD-MESSAGE"})},children:" Send"})})]})]})},G=t(17),J=t.n(G);var Y=function(e){return Object(d.jsx)("div",{className:J.a.dialog,children:Object(d.jsx)(u.b,{activeClassName:J.a.activeDialog,to:"/dialogs/".concat(e.id),children:e.name})})};var F=function(e){var s=e.dialogs.map((function(e){return Object(d.jsx)(Y,{id:e.id,name:e.name})}));return Object(d.jsxs)("div",{className:A.a.dialogs,children:[Object(d.jsx)("div",{className:A.a.dialogsItems,children:s}),Object(d.jsx)("div",{className:A.a.messages,children:Object(d.jsx)(z,{messages:e.messages,newMessageBody:e.newMessageBody,dispatch:e.dispatch})})]})},H=t(2);var K=function(e){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"app_wrapper",children:[Object(d.jsx)(l,{}),Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"app_wrapper_content",children:[Object(d.jsx)(H.a,{path:"/dialogs",render:function(){return Object(d.jsx)(F,{dialogs:e.state.dialogsPage.dialogs,messages:e.state.dialogsPage.messages,dispatch:e.dispatch,newMessageBody:e.state.dialogsPage.newMessageBody})}}),Object(d.jsx)(H.a,{path:"/profile",render:function(){return Object(d.jsx)(C,{posts:e.state.profilePage.posts,dispatch:e.dispatch,newPostText:e.state.profilePage.newPostText})}})]})]})})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),a(e),n(e),i(e),c(e)}))},q={_state:{profilePage:{posts:[{id:1,postText:"Hello there",likesCount:8},{id:2,postText:"It's cold in here",likesCount:12},{id:3,postText:"I miss my mom",likesCount:35}],newPostText:"write something.."},dialogsPage:{messages:[{id:Object(W.a)(),messageText:"Hi, how are you?"},{id:Object(W.a)(),messageText:"Summer is coming!"},{id:Object(W.a)(),messageText:"Yo"},{id:Object(W.a)(),messageText:"Yoyo"}],dialogs:[{id:Object(W.a)(),name:"Tatiana"},{id:Object(W.a)(),name:"Dasha"},{id:Object(W.a)(),name:"Victor"},{id:Object(W.a)(),name:"Ergun"}],newMessageBody:"write something:)"}},dispatch:function(e){this._state.dialogsPage=function(e,s){switch(s.type){case"UPDATE-NEW-MESSAGE-BODY":return e.newMessageBody=s.newMessageText,console.log("message is changing.."),e;case"ADD-MESSAGE":var t={id:Object(W.a)(),messageText:e.newMessageBody};return e.messages.push(t),e.newMessageBody="",e;default:return e}}(this._state.dialogsPage,e),this._state.profilePage=function(e,s){switch(s.type){case"ADD-POST":var t={id:5,postText:e.newPostText,likesCount:0};return e.posts.push(t),e.newPostText="",e;case"UPDATE-NEW-POST-TEXT":return e.newPostText=s.newText,console.log("post is changing.."),e;default:return e}}(this._state.profilePage,e),this.renderTree()},renderTree:function(){console.log("state changed")},subscriber:function(e){this.renderTree=e},getState:function(){return this._state}},V=function(){c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(K,{state:q.getState(),dispatch:q.dispatch.bind(q)})}),document.getElementById("root"))};V(),q.subscriber(V),X()}],[[41,1,2]]]);
//# sourceMappingURL=main.e482a5ab.chunk.js.map