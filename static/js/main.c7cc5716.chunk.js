(this.webpackJsonpsocial_network_ts=this.webpackJsonpsocial_network_ts||[]).push([[0],[,,,,,,,function(e,s,t){e.exports={navbar:"Navbar_navbar__2u2Yx",item:"Navbar_item__1nEI7",activeLink:"Navbar_activeLink__3ePDo"}},,,function(e,s,t){e.exports={post:"Post_post__ev8Uz",postBody:"Post_postBody__1zq20",postAvatar:"Post_postAvatar__3h6-Q",postText:"Post_postText__3WMa9"}},,function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2B8uW",dialogsItems:"Dialogs_dialogsItems__1_8kw",messages:"Dialogs_messages__3eMQ4"}},,,,,function(e,s,t){e.exports={dialog:"Dialog_dialog__VVj-X",activeDialog:"Dialog_activeDialog__35LJb"}},function(e,s,t){},,,function(e,s,t){e.exports={header:"Header_header__jfPv8"}},,function(e,s,t){e.exports={profile:"Profile_profile__33M3z"}},function(e,s,t){e.exports={myPosts:"MyPosts_myPosts__2wOLj"}},function(e,s,t){e.exports={profileInfo:"ProfileInfo_profileInfo__1Bljo"}},function(e,s,t){e.exports={messages:"Messages_messages__3K0tN",message:"Messages_message__3xkcK"}},function(e,s,t){e.exports={message:"Message_message__1W3KS"}},,,,,function(e,s,t){},,,,,,,function(e,s,t){"use strict";t.r(s);t(18);var a=t(1),i=t.n(a),n=t(20),o=t.n(n),c=(t(32),t(21)),r=t.n(c),d=t(0);var l=function(){return Object(d.jsx)("div",{className:r.a.header,children:Object(d.jsx)("img",{src:"https://www.clipartkey.com/mpngs/m/67-676200_clip-art-pinterest-rick-and-morty-png.png",alt:"logo"})})},j=t(7),m=t.n(j),x=t(8);var g=function(){return Object(d.jsxs)("div",{className:m.a.navbar,children:[Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(x.b,{activeClassName:m.a.activeLink,to:"/profile",children:"Profile"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(x.b,{activeClassName:m.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)("a",{href:"/feed",children:"News"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)("a",{href:"/music",children:"Music"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)("a",{href:"/settings",children:"Settings"})})]})},p=t(23),u=t.n(p),b=t(24),v=t.n(b),_=t(10),h=t.n(_);var f=function(e){return Object(d.jsxs)("div",{className:h.a.post,children:[Object(d.jsxs)("div",{className:h.a.postBody,children:[Object(d.jsx)("div",{className:h.a.postAvatar,children:Object(d.jsx)("img",{src:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg"})}),Object(d.jsx)("div",{className:h.a.postText,children:e.postText})]}),Object(d.jsxs)("div",{className:h.a.likeArea,children:[Object(d.jsxs)("span",{children:["likesCount = ",e.likesCount]}),Object(d.jsx)("button",{children:"Remove"})]})]})};var O=function(e){var s=e.posts.map((function(e){return Object(d.jsx)(f,{id:e.id,postText:e.postText,likesCount:e.likesCount})}));return Object(d.jsxs)("div",{className:v.a.myPosts,children:["My posts",Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"New post"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("textarea",{onChange:function(s){if(s.currentTarget){var t=s.currentTarget.value;e.updateNewPostText(t)}},value:e.newPostText}),Object(d.jsx)("button",{onClick:function(){e.addPost(e.newPostText)},children:"Add post"})]})]}),Object(d.jsx)("div",{children:s})]})},P=t(25),N=t.n(P);var T=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.img,alt:"my_profile_avatar"})}),Object(d.jsxs)("div",{className:N.a.profileInfo,children:[e.name," ",Object(d.jsx)("br",{}),e.age," y.o.",Object(d.jsx)("br",{}),e.aboutMe]})]})};var w=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:u.a.profile,children:Object(d.jsx)(T,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GXs_w8JLLJc_P90Kojd2Pzj649nHhjymWA&usqp=CAU",name:"Aleksandra",age:28,aboutMe:"Assigned cool at birth"})}),Object(d.jsx)("div",{children:Object(d.jsx)(O,{posts:e.posts,addPost:e.addPost,newPostText:e.newPostText,updateNewPostText:e.updateNewPostText})})]})},k=t(12),y=t.n(k),C=t(26),M=t.n(C),I=t(27),D=t.n(I);var A=function(e){return Object(d.jsx)("div",{className:D.a.message,children:e.message})};var L=function(e){var s=e.messages.map((function(e){return Object(d.jsx)(A,{id:e.id,message:e.messageText})}));return console.log(e.messages),Object(d.jsx)("div",{className:M.a.messages,children:s})},B=t(17),J=t.n(B);var S=function(e){return Object(d.jsx)("div",{className:J.a.dialog,children:Object(d.jsx)(x.b,{activeClassName:J.a.activeDialog,to:"/dialogs/".concat(e.id),children:e.name})})};var z=function(e){var s=e.dialogs.map((function(e){return Object(d.jsx)(S,{id:e.id,name:e.name})}));return Object(d.jsxs)("div",{className:y.a.dialogs,children:[Object(d.jsx)("div",{className:y.a.dialogsItems,children:s}),Object(d.jsx)("div",{className:y.a.messages,children:Object(d.jsx)(L,{messages:e.messages})})]})},F=t(2);var H=function(e){return Object(d.jsx)(x.a,{children:Object(d.jsxs)("div",{className:"app_wrapper",children:[Object(d.jsx)(l,{}),Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"app_wrapper_content",children:[Object(d.jsx)(F.a,{path:"/dialogs",render:function(){return Object(d.jsx)(z,{dialogs:e.state.dialogsPage.dialogs,messages:e.state.dialogsPage.messages})}}),Object(d.jsx)(F.a,{path:"/profile",render:function(){return Object(d.jsx)(w,{posts:e.state.profilePage.posts,addPost:e.addPost,newPostText:e.state.profilePage.newPostText,updateNewPostText:e.updateNewPostText})}})]})]})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,o=s.getTTFB;t(e),a(e),i(e),n(e),o(e)}))},W=function(){},q={profilePage:{posts:[{id:1,postText:"Hello there",likesCount:8},{id:2,postText:"It's cold in here",likesCount:12},{id:3,postText:"I miss my mom",likesCount:35}],newPostText:"write something.."},dialogsPage:{messages:[{id:1,messageText:"Hi, how are you?"},{id:2,messageText:"Summer is coming!"},{id:3,messageText:"Yo"},{id:4,messageText:"Yoyo"}],dialogs:[{id:1,name:"Tatiana"},{id:2,name:"Dasha"},{id:3,name:"Victor"},{id:4,name:"Ergun"}]}},E=function(e){q.profilePage.newPostText=e,console.log("post is changing.."),W()},V=function(){var e={id:5,postText:q.profilePage.newPostText,likesCount:0};q.profilePage.posts.push(e),q.profilePage.newPostText="",W()},Y=q,G=function(){o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(H,{state:Y,addPost:V,updateNewPostText:E})}),document.getElementById("root"))};G(),W=G,K()}],[[39,1,2]]]);
//# sourceMappingURL=main.c7cc5716.chunk.js.map