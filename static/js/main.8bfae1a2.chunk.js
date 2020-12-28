(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(0),s=n.n(c),r=n(10),o=n.n(r),i=(n(45),n(36));n(46);var l=function(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(a.jsx)("button",{className:"navbar-toggler",onClick:function(){return r(!n)},type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:Object(a.jsx)("i",{className:"fas ".concat(n?"fa-times":"fa-bars")})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"#",children:"Features"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link",href:"#",children:"Pricing"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link disabled",href:"#",tabIndex:"-1","aria-disabled":"true",children:"Disabled"})})]})})]})})})};n(47);var u=function(){return Object(a.jsxs)("div",{className:"hero",children:[Object(a.jsx)("video",{src:"./assets/Hero-video.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(a.jsxs)("div",{className:"hero-content",children:[Object(a.jsx)("h1",{children:"Welcome to our website"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}),Object(a.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"Start Trial"})]})]})},j=n(25),b=n(26),d=n(39),p=n(37),h=(n(48),n(7)),m=n(13),O=n.n(m),x=n(28),f=n(29),v=n.n(f),g=function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPhotos()}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"gallery",children:[Object(a.jsx)("div",{className:"gallery-column",children:this.props.photos.map((function(e,n){return n<=4?Object(a.jsx)("img",{src:e.urls.small,alt:e.alt_description,onClick:function(){return t.props.openPhoto(e)}},n):null}))}),Object(a.jsx)("div",{className:"gallery-column",children:this.props.photos.map((function(e,n){return n>4&&n<=8?Object(a.jsx)("img",{src:e.urls.small,alt:e.alt_description,onClick:function(){return t.props.openPhoto(e)}},n):null}))}),Object(a.jsx)("div",{className:"gallery-column",children:this.props.photos.map((function(e,n){return n>8&&n<=12?Object(a.jsx)("img",{src:e.urls.small,alt:e.alt_description,onClick:function(){return t.props.openPhoto(e)}},n):null}))})]})}}]),n}(c.Component),N=Object(h.b)((function(t){return{photos:t.photos}}),{fetchPhotos:function(){return function(){var t=Object(x.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://api.unsplash.com/photos/random",{params:{count:12},headers:{Authorization:"Client-ID enJlGjf6NGftgeCT-05BkxfCOTvbpCMecPKUDR2bO8w"}});case 2:n=t.sent,e({type:"FETCH_PHOTOS",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},openPhoto:function(t){return{type:"OPEN_PHOTO",payload:{statu:!0,photo:t}}}})(g);n(71);var w=Object(h.b)((function(t){return{openedPhoto:t.openedPhoto}}),{closePhoto:function(){return{type:"CLOSE_PHOTO",payload:{statu:!1,photo:null}}}})((function(t){return Object(a.jsx)(s.a.Fragment,{children:t.openedPhoto.statu?Object(a.jsx)("div",{className:"modal-container",onClick:function(){return t.closePhoto()},children:Object(a.jsx)("div",{className:"modal-img",onClick:function(t){return t.stopPropagation()},children:Object(a.jsx)("img",{src:t.openedPhoto.photo.urls.regular})})}):null})})),P=n(38);var y=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(P.a,{itemsToShow:2,children:[Object(a.jsx)("img",{src:"https://images.unsplash.com/photo-1601758124331-9410bf99002f?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(a.jsx)("img",{src:"https://images.unsplash.com/photo-1608834585341-b7b319e799ec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(a.jsx)("img",{src:"https://images.unsplash.com/photo-1606851280869-8325b6268cd0?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"})]})})};var H=function(){return Object(a.jsxs)("div",{style:{height:"2000px"},children:[Object(a.jsx)(l,{}),Object(a.jsx)(u,{}),Object(a.jsx)(N,{}),Object(a.jsx)(w,{}),Object(a.jsx)(y,{})]})},k=n(5),C=n(35),_=n(9),D=Object(k.c)({photos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_PHOTOS":return e.payload;default:return t}},openedPhoto:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{statu:!1,photo:null},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"OPEN_PHOTO":case"CLOSE_PHOTO":return Object(_.a)(Object(_.a)({},t),e.payload);default:return t}}}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,T=Object(k.e)(D,M(Object(k.a)(C.a)));o.a.render(Object(a.jsx)(h.a,{store:T,children:Object(a.jsx)(H,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.8bfae1a2.chunk.js.map