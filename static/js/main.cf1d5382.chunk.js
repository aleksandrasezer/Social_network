(this.webpackJsonpsocial_network_ts=this.webpackJsonpsocial_network_ts||[]).push([[0],{113:function(e,t,s){e.exports={buttonStyle:"Button_buttonStyle__3AyUI"}},115:function(e,t,s){e.exports={profile:"Profile_profile__1pk1s"}},116:function(e,t,s){e.exports={profileInfo:"ProfileInfo_profileInfo__3MZRw"}},117:function(e,t,s){e.exports={ldsCircle:"Preload_ldsCircle__3haJ3"}},118:function(e,t,s){e.exports={myPosts:"MyPosts_myPosts__5LJIW"}},119:function(e,t,s){e.exports={messages:"Messages_messages__3dJpS",message:"Messages_message__149OS"}},120:function(e,t,s){e.exports={message:"Message_message__15u9B"}},128:function(e,t,s){},19:function(e,t,s){e.exports={navbar:"Navbar_navbar__30T44",item:"Navbar_item__1pQ3u",activeLink:"Navbar_activeLink__3A5tg"}},22:function(e,t,s){e.exports={profilePic:"Users_profilePic__3SX5H",infoContainer:"Users_infoContainer__2u4WO",userBody:"Users_userBody__8XT8n",avatarAndFollow:"Users_avatarAndFollow__2eif0",nameSurname:"Users_nameSurname__3DK8k",cityCountry:"Users_cityCountry__1zE35",center:"Users_center__3ctC_",selectedPage:"Users_selectedPage__3yibB",pageNumbers:"Users_pageNumbers__2H6Ht"}},251:function(e,t,s){"use strict";s.r(t);s(82);var n=s(1),r=s.n(n),a=s(53),i=s.n(a),c=(s(128),s(19)),o=s.n(c),A=s(14),u=s(0);var l=function(){return Object(u.jsxs)("div",{className:o.a.navbar,children:[Object(u.jsx)("div",{className:o.a.item,children:Object(u.jsx)(A.b,{activeClassName:o.a.activeLink,to:"/profile",children:"Profile"})}),Object(u.jsx)("div",{className:o.a.item,children:Object(u.jsx)(A.b,{activeClassName:o.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(u.jsx)("div",{className:o.a.item,children:Object(u.jsx)(A.b,{activeClassName:o.a.activeLink,to:"/users",children:"Users"})}),Object(u.jsx)("div",{className:o.a.item,children:Object(u.jsx)("a",{href:"/feed",children:"News"})}),Object(u.jsx)("div",{className:o.a.item,children:Object(u.jsx)("a",{href:"/music",children:"Music"})}),Object(u.jsx)("div",{className:o.a.item,children:Object(u.jsx)("a",{href:"/settings",children:"Settings"})})]})},j=s(9),d=s(30),b=s(31),p=s(36),O=s(34),f=s(10),g=s(4),h=s(112),m=s.n(h).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fd7ee122-ff59-4cee-b5b0-6226ee5b433c"}}),v=function(e){return m.get("profile/".concat(e)).then((function(e){return e.data}))},x=function(e){return m.get("/profile/status/".concat(e))},P=function(e){return m.put("profile/status",{status:e})},S=function(e,t){return m.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},y=function(){return m.get("auth/me").then((function(e){return e.data}))},N=function(e){return m.post("follow/".concat(e)).then((function(e){return e.data}))},k=function(e){return m.delete("follow/".concat(e)).then((function(e){return e.data}))},T="SET_USER_DATA",_={userId:null,login:null,email:null,isAuth:!1},V=s(77),w=s.n(V);var q=function(e){return Object(u.jsxs)("div",{className:w.a.header,children:[Object(u.jsx)("img",{src:"https://www.clipartkey.com/mpngs/m/67-676200_clip-art-pinterest-rick-and-morty-png.png",alt:"logo"}),Object(u.jsx)("div",{className:w.a.loginBlock,children:e.data.isAuth?e.data.login:Object(u.jsx)(A.b,{to:"/login",children:"Login"})})]})},U=function(e){Object(p.a)(s,e);var t=Object(O.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.props.setAuthLogin()}},{key:"render",value:function(){return Object(u.jsx)(q,{data:this.props.data})}}]),s}(r.a.Component),X=Object(f.b)((function(e){return{data:e.auth}}),{setAuthLogin:function(){return function(e){y().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,r=s.login,a=s.email;e(function(e,t,s){return{type:T,data:{userId:e,login:t,email:s}}}(n,r,a))}}))}}})(U),R=s(253),F=s(252),I=s(113),C=s.n(I);function E(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:C.a.buttonStyle,disabled:e.disabled,onClick:e.onClick,children:e.children})})}var L=Object(F.a)({form:"login"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(R.a,{placeholder:"login",name:"login",component:"input"})}),Object(u.jsx)("div",{children:Object(u.jsx)(R.a,{placeholder:"password",name:"password",component:"input"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(R.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(u.jsx)("div",{children:Object(u.jsx)(E,{onClick:function(){},disabled:!1,children:"Login"})})]})})),M=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Sign in here"}),Object(u.jsx)(L,{onSubmit:function(e){console.log(e)}})]})},z=s(35),H=s(254),K="REMOVE_POST",W="SET_PROFILE",B="SET_USERS_STATUS",J={posts:[{id:Object(H.a)(),postText:"Hello there",likesCount:8},{id:Object(H.a)(),postText:"It's cold in here",likesCount:12},{id:Object(H.a)(),postText:"I miss my mom",likesCount:35}],newPostText:"write something..",profile:null,userStatus:""},D=function(e){return{type:B,status:e}},Y=s(115),G=s.n(Y),Q=s(116),Z=s.n(Q),$=s(117),ee=s.n($),te=function(){return Object(u.jsx)("div",{className:ee.a.ldsCircle,children:Object(u.jsx)("div",{})})},se="data:image/jpeg;base64,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",ne=s(81),re=function(e){var t=Object(n.useState)(!1),s=Object(ne.a)(t,2),r=s[0],a=s[1],i=Object(n.useState)(e.userStatus),c=Object(ne.a)(i,2),o=c[0],A=c[1];return x("2").then((function(e){return console.log(e)})),Object(n.useEffect)((function(){A(e.userStatus)}),[e.userStatus]),Object(u.jsx)("div",{children:r?Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("input",{onBlur:function(){a(!1),e.setMyStatus(o)},onChange:function(e){A(e.currentTarget.value)},autoFocus:!0,value:o})})}):Object(u.jsx)("div",{children:Object(u.jsx)("span",{onDoubleClick:function(){return a(!0)},children:e.userStatus||"---"})})})};var ae=function(e){return Object(u.jsx)(u.Fragment,{children:e.profile?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:e.profile.photos.large||se,alt:"profile_avatar"})}),Object(u.jsx)(re,{userStatus:e.userStatus,setMyStatus:e.setMyStatus}),Object(u.jsxs)("div",{className:Z.a.profileInfo,children:[e.profile.fullName," ",Object(u.jsx)("br",{}),e.profile.aboutMe]})]}):Object(u.jsx)(te,{})})},ie=s(118),ce=s.n(ie),oe=s(37),Ae=s.n(oe);var ue=function(e){return Object(u.jsxs)("div",{className:Ae.a.post,children:[Object(u.jsxs)("div",{className:Ae.a.postBody,children:[Object(u.jsx)("div",{className:Ae.a.postAvatar,children:Object(u.jsx)("img",{src:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/10/10a06adc92c1746b48b842c031199d692b1ba623_full.jpg",alt:"avatar"})}),Object(u.jsx)("div",{className:Ae.a.postText,children:e.postText})]}),Object(u.jsxs)("div",{className:Ae.a.likeArea,children:[Object(u.jsxs)("span",{children:["likesCount = ",e.likesCount]}),Object(u.jsx)(E,{onClick:function(){return e.removePost(e.id)},disabled:!1,children:" Remove "})]})]})},le=Object(F.a)({form:"newPost"})((function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(R.a,{placeholder:"how do you feel",name:"newPost",component:"input"})}),Object(u.jsx)("div",{children:Object(u.jsx)(E,{children:"Post"})})]})})}));var je=function(e){var t=e.posts.map((function(t){return Object(u.jsx)(ue,{id:t.id,postText:t.postText,likesCount:t.likesCount,removePost:e.removePost},t.id)}));return Object(u.jsxs)("div",{className:ce.a.myPosts,children:["My posts",Object(u.jsx)(le,{onSubmit:function(e){console.log(e)}}),Object(u.jsx)("div",{children:t})]})},de=Object(f.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{removePost:function(t){return e(function(e){return{type:K,id:e}}(t))}}}))(je);var be=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:G.a.profile,children:Object(u.jsx)(ae,{profile:e.profile,userStatus:e.userStatus,setMyStatus:e.setMyStatus})}),Object(u.jsx)("div",{children:Object(u.jsx)(de,{})})]})},pe=s(8),Oe=function(e){Object(p.a)(s,e);var t=Object(O.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId||"17229";this.props.setUserProfileInfo(e),this.props.setUserStatus(e)}},{key:"render",value:function(){return Object(u.jsx)(be,Object(g.a)(Object(g.a)({},this.props),{},{profile:this.props.profile,userStatus:this.props.userStatus,setMyStatus:this.props.setMyStatus}))}}]),s}(r.a.Component),fe=Object(pe.d)(j.f,Object(f.b)((function(e){return{profile:e.profilePage.profile,userStatus:e.profilePage.userStatus}}),{setUserProfileInfo:function(e){return function(t){return v(e).then((function(e){t({type:W,profile:e})}))}},setUserStatus:function(e){return function(t){return x(e).then((function(e){200===e.status&&t(D(e.data))}))}},setMyStatus:function(e){return function(t){return P(e).then((function(s){200===s.status&&t(D(e))}))}}}))(Oe),ge="FOLLOW",he="UNFOLLOW",me="SET_USERS",ve="SET_CURRENT_PAGE",xe="SET_TOTAL_USERS_COUNT",Pe="SET_IS_FETCHING",Se="SET_FOLLOWING_PROGRESS",ye={users:[],currentPage:1,totalUsersCount:0,pageSize:100,isFetching:!1,followingInProgress:[]},Ne=function(e){return{type:Pe,isFetching:e}},ke=function(e,t){return{type:Se,inProgress:e,userId:t}},Te=s(22),_e=s.n(Te),Ve=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:_e.a.pageNumbers,children:e.pages.map((function(t){return Object(u.jsxs)("span",{className:e.currentPage===t?_e.a.selectedPage:"",onClick:function(){return e.onPageChanged(t)},children:[" ",t," "]},t)}))}),e.users.map((function(t){return Object(u.jsxs)("div",{className:_e.a.userBody,children:[Object(u.jsxs)("div",{className:_e.a.avatarAndFollow,children:[Object(u.jsx)("div",{children:Object(u.jsx)(A.b,{to:"/profile/".concat(t.id),children:Object(u.jsx)("img",{src:t.photos.small||se,className:_e.a.profilePic,alt:"avatar"})})}),Object(u.jsx)("div",{children:t.followed?Object(u.jsx)(E,{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(u.jsx)(E,{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(u.jsxs)("div",{className:_e.a.infoContainer,children:[Object(u.jsx)("span",{className:_e.a.nameSurname,children:t.name}),Object(u.jsxs)("span",{className:_e.a.cityCountry,children:["u.city",", ","u.country"]})]})]},t.id)}))]})},we=s(122),qe=function(e){return{isAuth:e.auth.isAuth}};function Ue(e){return Object(f.b)(qe)((function(t){var s=t.isAuth,n=Object(we.a)(t,["isAuth"]);return s?Object(u.jsx)(e,Object(g.a)({},n)):Object(u.jsx)(j.a,{to:"/login"})}))}var Xe=function(e){Object(p.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setUsersFromServer(t,e.props.pageSize)},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.props.setUsersFromServer(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){for(var e=[],t=Math.ceil(this.props.totalUsersCount/this.props.pageSize),s=1;s<=t;s++)e.push(s);return Object(u.jsxs)(u.Fragment,{children:[this.props.isFetching&&Object(u.jsx)(te,{}),Object(u.jsx)(Ve,{users:this.props.users,pages:e,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.followUser,unfollow:this.props.unfollowUser,followingInProgress:this.props.followingInProgress,isFetching:this.props.isFetching})]})}}]),s}(r.a.Component),Re=Object(pe.d)(Object(f.b)((function(e){return{users:e.usersPage.users,currentPage:e.usersPage.currentPage,totalUsersCount:e.usersPage.totalUsersCount,pageSize:e.usersPage.pageSize,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{unfollowUser:function(e){return function(t){t(Ne(!0)),t(ke(!0,e)),k(e).then((function(s){0===s.resultCode&&t({type:he,id:e}),t(ke(!1,e)),t(Ne(!1))}))}},followUser:function(e){return function(t){t(Ne(!0)),t(ke(!0,e)),N(e).then((function(s){0===s.resultCode&&t({type:ge,id:e}),t(ke(!1,e)),t(Ne(!1))}))}},setCurrentPage:function(e){return{type:ve,pageNumber:e}},setUsersFromServer:function(e,t){return function(s){Ne(!0),S(e,t).then((function(e){var t,n;s((t=e.items,{type:me,users:t})),s((n=e.totalCount,{type:xe,totalUsers:n})),s(Ne(!1))}))}}}),Ue)(Xe),Fe=s(57),Ie=s.n(Fe),Ce=s(119),Ee=s.n(Ce),Le=s(120),Me=s.n(Le);var ze=function(e){return Object(u.jsx)("div",{className:Me.a.message,children:e.message})},He=Object(F.a)({form:"message"})((function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(R.a,{placeholder:"message",name:"message",component:"input"})}),Object(u.jsx)("div",{children:Object(u.jsx)(E,{children:"Send"})})]})})}));var Ke=function(e){var t=e.messages.map((function(e){return Object(u.jsx)(ze,{id:e.id,message:e.messageText},e.id)}));return console.log(e.messages),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:Ee.a.messages,children:t}),Object(u.jsx)(He,{onSubmit:function(e){console.log(e)}})]})},We=s(80),Be=s.n(We);var Je=function(e){return Object(u.jsx)("div",{className:Be.a.dialog,children:Object(u.jsx)(A.b,{activeClassName:Be.a.activeDialog,to:"/dialogs/".concat(e.id),children:e.name})})};var De=function(e){var t=e.dialogs.map((function(e){return Object(u.jsx)(Je,{id:e.id,name:e.name},e.id)}));return Object(u.jsxs)("div",{className:Ie.a.dialogs,children:[Object(u.jsx)("div",{className:Ie.a.dialogsItems,children:t}),Object(u.jsx)("div",{className:Ie.a.messages,children:Object(u.jsx)(Ke,{messages:e.messages,newMessageText:e.newMessageText})})]})},Ye=Object(pe.d)(Object(f.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageBody}}),(function(e){return{}})),Ue)(De);var Ge=function(){return Object(u.jsx)(A.a,{children:Object(u.jsxs)("div",{className:"app_wrapper",children:[Object(u.jsx)(X,{}),Object(u.jsx)(l,{}),Object(u.jsxs)("div",{className:"app_wrapper_content",children:[Object(u.jsx)(j.b,{path:"/dialogs",render:function(){return Object(u.jsx)(Ye,{})}}),Object(u.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(u.jsx)(fe,{})}}),Object(u.jsx)(j.b,{path:"/users",render:function(){return Object(u.jsx)(Re,{})}}),Object(u.jsx)(j.b,{path:"/login",render:function(){return Object(u.jsx)(M,{})}})]})]})})},Qe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,256)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),r(e),a(e),i(e)}))},Ze={messages:[{id:Object(H.a)(),messageText:"Hi, how are you?"},{id:Object(H.a)(),messageText:"Summer is coming!"},{id:Object(H.a)(),messageText:"Yo"},{id:Object(H.a)(),messageText:"Yoyo"}],dialogs:[{id:Object(H.a)(),name:"Tatiana"},{id:Object(H.a)(),name:"Dasha"},{id:Object(H.a)(),name:"Victor"},{id:Object(H.a)(),name:"Ergun"}],newMessageBody:"write something:)"},$e=s(121),et=s(255),tt=Object(pe.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(g.a)(Object(g.a)({},e),{},{posts:Object(z.a)(e.posts).filter((function(e){return e.id!==t.id}))});case W:return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});case B:return Object(g.a)(Object(g.a)({},e),{},{userStatus:t.status});default:return Object(g.a)({},e)}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(z.a)(e.messages),[{id:Object(H.a)(),messageText:e.newMessageBody}]),newMessageBody:""});default:return Object(g.a)({},e)}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case he:return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case me:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case ve:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.pageNumber});case xe:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsers});case Pe:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case Se:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.inProgress?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return Object(g.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(g.a)(Object(g.a)(Object(g.a)({},e),t.data),{},{isAuth:!0});default:return e}},form:et.a}),st=Object(pe.e)(tt,Object(pe.a)($e.a));window.store=st,i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f.a,{store:st,children:Object(u.jsx)(Ge,{})})}),document.getElementById("root")),Qe()},37:function(e,t,s){e.exports={post:"Post_post__1TuW0",postBody:"Post_postBody__37jfN",postText:"Post_postText__1kRe1",likeArea:"Post_likeArea__6q2go"}},57:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3laYm",dialogsItems:"Dialogs_dialogsItems__3j9ay",messages:"Dialogs_messages__12P48"}},77:function(e,t,s){e.exports={header:"Header_header__15MjQ",loginBlock:"Header_loginBlock__3cBlQ"}},80:function(e,t,s){e.exports={dialog:"Dialog_dialog__1spPm",activeDialog:"Dialog_activeDialog__1Mhux"}},82:function(e,t,s){}},[[251,1,2]]]);
//# sourceMappingURL=main.cf1d5382.chunk.js.map