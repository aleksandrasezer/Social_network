(this.webpackJsonpsocial_network_ts=this.webpackJsonpsocial_network_ts||[]).push([[0],{12:function(e,t,n){e.exports={navbar:"Navbar_navbar__30T44",item:"Navbar_item__1pQ3u",activeLink:"Navbar_activeLink__3A5tg"}},14:function(e,t,n){e.exports={profilePic:"Users_profilePic__3SX5H",infoContainer:"Users_infoContainer__2u4WO",userBody:"Users_userBody__8XT8n",avatarAndFollow:"Users_avatarAndFollow__2eif0",nameSurname:"Users_nameSurname__3DK8k",cityCountry:"Users_cityCountry__1zE35",center:"Users_center__3ctC_",selectedPage:"Users_selectedPage__3yibB",pageNumbers:"Users_pageNumbers__2H6Ht"}},21:function(e,t,n){e.exports={post:"Post_post__1TuW0",postBody:"Post_postBody__37jfN",postText:"Post_postText__1kRe1",likeArea:"Post_likeArea__6q2go"}},25:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3laYm",dialogsItems:"Dialogs_dialogsItems__3j9ay",messages:"Dialogs_messages__12P48"}},30:function(e,t,n){e.exports={header:"Header_header__15MjQ",loginBlock:"Header_loginBlock__3cBlQ"}},31:function(e,t,n){e.exports={dialog:"Dialog_dialog__1spPm",activeDialog:"Dialog_activeDialog__1Mhux"}},32:function(e,t,n){},42:function(e,t,n){e.exports={profile:"Profile_profile__1pk1s"}},43:function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__3MZRw"}},44:function(e,t,n){e.exports={ldsCircle:"Preload_ldsCircle__3haJ3"}},45:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__5LJIW"}},46:function(e,t,n){e.exports={buttonStyle:"Button_buttonStyle__3AyUI"}},47:function(e,t,n){e.exports={input:"ControlledTextarea_input__mXEL2"}},48:function(e,t,n){e.exports={messages:"Messages_messages__3dJpS",message:"Messages_message__149OS"}},49:function(e,t,n){e.exports={message:"Message_message__15u9B"}},57:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);n(32);var s=n(1),a=n.n(s),r=n(23),i=n.n(r),c=(n(57),n(12)),o=n.n(c),A=n(8),l=n(0);var u=function(){return Object(l.jsxs)("div",{className:o.a.navbar,children:[Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(A.b,{activeClassName:o.a.activeLink,to:"/profile",children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(A.b,{activeClassName:o.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(A.b,{activeClassName:o.a.activeLink,to:"/users",children:"Users"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)("a",{href:"/feed",children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)("a",{href:"/music",children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)("a",{href:"/settings",children:"Settings"})})]})},d=n(4),j=n(17),b=n(18),p=n(20),O=n(19),f=n(5),g=n(2),h=n(41),m=n.n(h).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fd7ee122-ff59-4cee-b5b0-6226ee5b433c"}}),v=function(e){return m.get("profile/".concat(e)).then((function(e){return e.data}))},x=function(e,t){return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},P=function(){return m.get("auth/me").then((function(e){return e.data}))},T=function(e){return m.post("follow/".concat(e)).then((function(e){return e.data}))},N=function(e){return m.delete("follow/".concat(e)).then((function(e){return e.data}))},k="SET_USER_DATA",_={userId:null,login:null,email:null,isAuth:!1},w=n(30),y=n.n(w);var V=function(e){return Object(l.jsxs)("div",{className:y.a.header,children:[Object(l.jsx)("img",{src:"https://www.clipartkey.com/mpngs/m/67-676200_clip-art-pinterest-rick-and-morty-png.png",alt:"logo"}),Object(l.jsx)("div",{className:y.a.loginBlock,children:e.data.isAuth?e.data.login:Object(l.jsx)(A.b,{to:"/login",children:"Login"})})]})},C=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.setAuthLogin()}},{key:"render",value:function(){return Object(l.jsx)(V,{data:this.props.data})}}]),n}(a.a.Component),S=Object(f.b)((function(e){return{data:e.auth}}),{setAuthLogin:function(){return function(e){P().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,a=n.login,r=n.email;e(function(e,t,n){return{type:k,data:{userId:e,login:t,email:n}}}(s,a,r))}}))}}})(C),q=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Sign in here"})})},U=n(15),X=n(83),E="REMOVE_POST",F="ADD_POST",R="UPDATE_NEW_POST_TEXT",I="SET_PROFILE",M={posts:[{id:Object(X.a)(),postText:"Hello there",likesCount:8},{id:Object(X.a)(),postText:"It's cold in here",likesCount:12},{id:Object(X.a)(),postText:"I miss my mom",likesCount:35}],newPostText:"write something..",profile:null},H=function(e){return{type:R,newText:e}},L=n(42),W=n.n(L),D=n(43),z=n.n(D),K=n(44),B=n.n(K),J=function(){return Object(l.jsx)("div",{className:B.a.ldsCircle,children:Object(l.jsx)("div",{})})},Y="data:image/jpeg;base64,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";var G=function(e){return Object(l.jsx)(l.Fragment,{children:e.profile?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.profile.photos.large||Y,alt:"profile_avatar"})}),Object(l.jsxs)("div",{className:z.a.profileInfo,children:[e.profile.fullName," ",Object(l.jsx)("br",{}),e.profile.aboutMe]})]}):Object(l.jsx)(J,{})})},Q=n(45),Z=n.n(Q),$=n(21),ee=n.n($),te=n(46),ne=n.n(te);function se(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:ne.a.buttonStyle,disabled:e.disabled,onClick:e.onClick,children:e.children})})}var ae=function(e){return Object(l.jsxs)("div",{className:ee.a.post,children:[Object(l.jsxs)("div",{className:ee.a.postBody,children:[Object(l.jsx)("div",{className:ee.a.postAvatar,children:Object(l.jsx)("img",{src:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg",alt:"avatar"})}),Object(l.jsx)("div",{className:ee.a.postText,children:e.postText})]}),Object(l.jsxs)("div",{className:ee.a.likeArea,children:[Object(l.jsxs)("span",{children:["likesCount = ",e.likesCount]}),Object(l.jsx)(se,{onClick:function(){return e.removePost(e.id)},disabled:!1,children:" Remove "})]})]})},re=n(47),ie=n.n(re);function ce(e){return Object(l.jsx)("div",{className:ie.a.input,children:Object(l.jsx)("textarea",{onChange:function(t){if(t.currentTarget){var n=t.currentTarget.value;e.onPostChange(n)}},value:e.value,onClick:e.onTextClick,autoFocus:!0})})}var oe=function(e){var t=e.posts.map((function(t){return Object(l.jsx)(ae,{id:t.id,postText:t.postText,likesCount:t.likesCount,removePost:e.removePost},t.id)}));return Object(l.jsxs)("div",{className:Z.a.myPosts,children:["My posts",Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(ce,{onPostChange:function(t){return e.onPostChange(t)},value:e.newPostText,onTextClick:function(){return e.onTextClickHandler()}}),Object(l.jsx)(se,{onClick:function(){return e.addPost()},disabled:!1,children:"Add post"})]})}),Object(l.jsx)("div",{children:t})]})},Ae=Object(f.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{removePost:function(t){return e(function(e){return{type:E,id:e}}(t))},addPost:function(){return e({type:F})},onPostChange:function(t){return e(H(t))},onTextClickHandler:function(){return e(H(""))}}}))(oe);var le=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:W.a.profile,children:Object(l.jsx)(G,{profile:e.profile})}),Object(l.jsx)("div",{children:Object(l.jsx)(Ae,{})})]})},ue=n(13),de=n(51),je=function(e){return{isAuth:e.auth.isAuth}};function be(e){return Object(f.b)(je)((function(t){var n=t.isAuth,s=Object(de.a)(t,["isAuth"]);return n?Object(l.jsx)(e,Object(g.a)({},s)):Object(l.jsx)(d.a,{to:"/login"})}))}var pe=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId||"2";this.props.setUserProfileInfo(e)}},{key:"render",value:function(){return Object(l.jsx)(le,Object(g.a)(Object(g.a)({},this.props),{},{profile:this.props.profile}))}}]),n}(a.a.Component),Oe=Object(ue.c)(d.f,Object(f.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfileInfo:function(e){return function(t){v(e).then((function(e){t({type:I,profile:e})}))}}}),be)(pe),fe="FOLLOW",ge="UNFOLLOW",he="SET_USERS",me="SET_CURRENT_PAGE",ve="SET_TOTAL_USERS_COUNT",xe="SET_IS_FETCHING",Pe="SET_FOLLOWING_PROGRESS",Te={users:[],currentPage:1,totalUsersCount:0,pageSize:100,isFetching:!1,followingInProgress:[]},Ne=function(e){return{type:xe,isFetching:e}},ke=function(e,t){return{type:Pe,inProgress:e,userId:t}},_e=n(14),we=n.n(_e),ye=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:we.a.pageNumbers,children:e.pages.map((function(t){return Object(l.jsxs)("span",{className:e.currentPage===t?we.a.selectedPage:"",onClick:function(){return e.onPageChanged(t)},children:[" ",t," "]},t)}))}),e.users.map((function(t){return Object(l.jsxs)("div",{className:we.a.userBody,children:[Object(l.jsxs)("div",{className:we.a.avatarAndFollow,children:[Object(l.jsx)("div",{children:Object(l.jsx)(A.b,{to:"/profile/".concat(t.id),children:Object(l.jsx)("img",{src:t.photos.small||Y,className:we.a.profilePic,alt:"avatar"})})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)(se,{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(l.jsx)(se,{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(l.jsxs)("div",{className:we.a.infoContainer,children:[Object(l.jsx)("span",{className:we.a.nameSurname,children:t.name}),Object(l.jsxs)("span",{className:we.a.cityCountry,children:["u.city",", ","u.country"]})]})]},t.id)}))]})},Ve=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setUsersFromServer(t,e.props.pageSize)},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.setUsersFromServer(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){for(var e=[],t=Math.ceil(this.props.totalUsersCount/this.props.pageSize),n=1;n<=t;n++)e.push(n);return Object(l.jsxs)(l.Fragment,{children:[this.props.isFetching&&Object(l.jsx)(J,{}),Object(l.jsx)(ye,{users:this.props.users,pages:e,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.followUser,unfollow:this.props.unfollowUser,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching})]})}}]),n}(a.a.Component),Ce=Object(ue.c)(Object(f.b)((function(e){return{users:e.usersPage.users,currentPage:e.usersPage.currentPage,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{unfollowUser:function(e){return function(t){t(Ne(!0)),t(ke(!0,e)),N(e).then((function(n){0===n.resultCode&&t({type:ge,id:e}),t(ke(!1,e)),t(Ne(!1))}))}},followUser:function(e){return function(t){t(Ne(!0)),t(ke(!0,e)),T(e).then((function(n){0===n.resultCode&&t({type:fe,id:e}),t(ke(!1,e)),t(Ne(!1))}))}},setCurrentPage:function(e){return{type:me,pageNumber:e}},setUsersFromServer:function(e,t){return function(n){Ne(!0),x(e,t).then((function(e){var t,s;n((t=e.items,{type:he,users:t})),n((s=e.totalCount,{type:ve,totalUsers:s})),n(Ne(!1))}))}}}),be)(Ve),Se=n(25),qe=n.n(Se),Ue=n(48),Xe=n.n(Ue),Ee=n(49),Fe=n.n(Ee);var Re=function(e){return Object(l.jsx)("div",{className:Fe.a.message,children:e.message})};var Ie=function(e){var t=e.messages.map((function(e){return Object(l.jsx)(Re,{id:e.id,message:e.messageText},e.id)}));return console.log(e.messages),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:Xe.a.messages,children:t}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(ce,{onPostChange:function(t){return e.onMessageChangeHandler(t)},value:e.newMessageText,onTextClick:function(){return e.onTextClickHandler()}})}),Object(l.jsx)("div",{children:Object(l.jsx)(se,{onClick:function(){return e.addNewMessage()},disabled:!1,children:" Send"})})]})]})},Me=n(31),He=n.n(Me);var Le=function(e){return Object(l.jsx)("div",{className:He.a.dialog,children:Object(l.jsx)(A.b,{activeClassName:He.a.activeDialog,to:"/dialogs/".concat(e.id),children:e.name})})};var We=function(e){var t=e.dialogs.map((function(e){return Object(l.jsx)(Le,{id:e.id,name:e.name},e.id)}));return Object(l.jsxs)("div",{className:qe.a.dialogs,children:[Object(l.jsx)("div",{className:qe.a.dialogsItems,children:t}),Object(l.jsx)("div",{className:qe.a.messages,children:Object(l.jsx)(Ie,{messages:e.messages,newMessageText:e.newMessageText,addNewMessage:e.addNewMessage,onMessageChangeHandler:e.onMessageChangeHandler,onTextClickHandler:e.onTextClickHandler})})]})},De={messages:[{id:Object(X.a)(),messageText:"Hi, how are you?"},{id:Object(X.a)(),messageText:"Summer is coming!"},{id:Object(X.a)(),messageText:"Yo"},{id:Object(X.a)(),messageText:"Yoyo"}],dialogs:[{id:Object(X.a)(),name:"Tatiana"},{id:Object(X.a)(),name:"Dasha"},{id:Object(X.a)(),name:"Victor"},{id:Object(X.a)(),name:"Ergun"}],newMessageBody:"write something:)"},ze=function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",newMessageText:e}},Ke=Object(ue.c)(Object(f.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageBody}}),(function(e){return{addNewMessage:function(){return e({type:"ADD-MESSAGE"})},onMessageChangeHandler:function(t){return e(ze(t))},onTextClickHandler:function(){return e(ze(""))}}})),be)(We);var Be=function(){return Object(l.jsx)(A.a,{children:Object(l.jsxs)("div",{className:"app_wrapper",children:[Object(l.jsx)(S,{}),Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"app_wrapper_content",children:[Object(l.jsx)(d.b,{path:"/dialogs",render:function(){return Object(l.jsx)(Ke,{})}}),Object(l.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(Oe,{})}}),Object(l.jsx)(d.b,{path:"/users",render:function(){return Object(l.jsx)(Ce,{})}}),Object(l.jsx)(d.b,{path:"/login",render:function(){return Object(l.jsx)(q,{})}})]})]})})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))},Ye=n(50),Ge=Object(ue.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(g.a)(Object(g.a)({},e),{},{posts:Object(U.a)(e.posts).filter((function(e){return e.id!==t.id}))});case F:return Object(g.a)(Object(g.a)({},e),{},{posts:[{id:Object(X.a)(),postText:e.newPostText,likesCount:0}].concat(Object(U.a)(e.posts)),newPostText:""});case R:return Object(g.a)(Object(g.a)({},e),{},{newPostText:t.newText});case I:return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});default:return Object(g.a)({},e)}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(g.a)(Object(g.a)({},e),{},{newMessageBody:t.newMessageText});case"ADD-MESSAGE":return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(U.a)(e.messages),[{id:Object(X.a)(),messageText:e.newMessageBody}]),newMessageBody:""});default:return Object(g.a)({},e)}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case ge:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case he:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case me:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.pageNumber});case ve:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsers});case xe:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case Pe:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.inProgress?[].concat(Object(U.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return Object(g.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(g.a)(Object(g.a)(Object(g.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),Qe=Object(ue.d)(Ge,Object(ue.a)(Ye.a));window.store=Qe,i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(f.a,{store:Qe,children:Object(l.jsx)(Be,{})})}),document.getElementById("root")),Je()}},[[82,1,2]]]);
//# sourceMappingURL=main.36395e45.chunk.js.map