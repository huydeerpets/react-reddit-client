(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(t,n,e){t.exports=e(417)},417:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e.n(c),a=e(36),i=e.n(a),o=e(27),u=e(5),s=e(1),b=e(19),l=e(422),d=e(72),O=e.n(d),f=e(73),j=e.n(f),m=e(10),p=e(51),v=e.n(p),h=e(118),g=e.n(h),w=e(120),E=e.n(w);function x(){var t=Object(u.a)(["\n    color: ",";\n  "]);return x=function(){return t},t}function y(){var t=Object(u.a)(["\n    ",";\n    color: ",";\n  "]);return y=function(){return t},t}function k(){var t=Object(u.a)(["\n  padding: 7px 0;\n"]);return k=function(){return t},t}function N(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin: auto 4% auto 0;\n"]);return N=function(){return t},t}var T="#FF8b60",C="#9494FF",V=Object(s.b)(N()),_=Object(s.b)(k()),S={UPVOTE:1,NO_VOTE:0,DOWNVOTE:-1};var R=function(t){var n=Object(c.useState)(S.NO_VOTE),e=Object(o.a)(n,2),r=e[0],a=e[1],i=function(t){return function(){a(t===r?S.NO_VOTE:t)}},u=function(t){switch(t){case S.UPVOTE:return T;case S.DOWNVOTE:return C;default:return"inherit"}}(r),b=function(t){return Object(s.b)(y(),_,r===t?u:"inherit")},l=b(S.UPVOTE),d=b(S.DOWNVOTE),O=Object(s.b)(x(),u);return Object(s.c)("div",{css:V},Object(s.c)(m.e,{css:l,"aria-label":"Upvote",onClick:i(S.UPVOTE)},Object(s.c)(E.a,null)),Object(s.c)(m.f,{variant:"h5",css:O},t.votes+r),Object(s.c)(m.e,{css:d,"aria-label":"Downvote",onClick:i(S.DOWNVOTE)},Object(s.c)(v.a,null)))},B=e(121),I=e.n(B);function W(){var t=Object(u.a)(["\n  margin-bottom: 1em;\n"]);return W=function(){return t},t}function L(){var t=Object(u.a)(["\n  margin: auto 0;\n  h4 {\n    font-size: 12pt;\n  }\n"]);return L=function(){return t},t}var P=Object(s.b)(L()),D=Object(s.b)(W());var F=function(t){var n=t.post,e="https://www.reddit.com".concat(n.permalink);return Object(s.c)("div",{css:P},Object(s.c)(m.f,{variant:"h5",css:D},Object(s.c)("a",{href:e,target:"_blank",rel:"noopener noreferrer"},I.a.decode(n.title))),Object(s.c)("div",null,Object(s.c)(m.f,{variant:"h4"},n.subreddit_name_prefixed)))};function U(){var t=Object(u.a)(["\n  margin: auto 4% auto 0;\n  width: auto;\n  max-height: 7em;\n  padding: 1em 0;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return U=function(){return t},t}var z=Object(s.b)(U());var G=function(t){return Object(s.c)("img",Object.assign({alt:"thumbnail",css:z},t))};function J(){var t=Object(u.a)(["\n  max-height: 30em;\n"]);return J=function(){return t},t}var M=Object(s.b)(J());var H=function(t){var n=t.src;return Object(s.c)("video",{muted:!0,loop:!0,poster:!0,autoPlay:!0,controls:!0,css:M},Object(s.c)("source",{src:n}))};function q(){var t=Object(u.a)(["\n  padding: 1em 2em;\n"]);return q=function(){return t},t}function A(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return A=function(){return t},t}function K(){var t=Object(u.a)(["\n  height: fit-content;\n  margin: auto 0 auto auto;\n"]);return K=function(){return t},t}function Q(){var t=Object(u.a)(["\n  max-height: 30em;\n  margin: auto 0;\n  display: block;\n"]);return Q=function(){return t},t}function X(){var t=Object(u.a)(["\n  display: flex;\n  padding: 0.5em 3%;\n"]);return X=function(){return t},t}function Y(){var t=Object(u.a)(["\n  min-width: 275px;\n  margin: 1em auto;\n"]);return Y=function(){return t},t}function Z(){var t=Object(u.a)(["\n  h5 {\n    font-size: 13pt;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"]);return Z=function(){return t},t}var $=Object(s.b)(Z()),tt=Object(s.b)(Y()),nt=Object(s.b)(X()),et=Object(s.b)(Q()),ct=Object(s.b)(K()),rt=Object(s.b)(A()),at=Object(s.b)(q());var it=function(t){var n=t.post,e=Object(c.useState)(!1),r=Object(o.a)(e,2),a=r[0],i=r[1],u=function(){return i(!a)},b=n.thumbnail.startsWith("http"),l=[".jpg",".gif",".png"].some(function(t){return n.url.endsWith(t)}),d=n.selftext&&n.selftext.length>0,O=n.media&&n.media.reddit_video&&n.media.reddit_video.fallback_url,f=l||d||O;return Object(s.c)(m.d,{in:!0,css:$,timeout:800},Object(s.c)(m.a,{css:tt},Object(s.c)("div",{css:nt},Object(s.c)(R,{votes:n.ups}),b&&Object(s.c)(G,{src:n.thumbnail,height:n.thumbnail_height,onClick:u}),Object(s.c)(F,{post:n}),f&&Object(s.c)(m.e,{css:ct,onClick:u,"aria-expanded":a},Object(s.c)(v.a,null))),Object(s.c)(m.c,{in:a,timeout:"auto",unmountOnExit:!0,css:rt},l&&Object(s.c)("img",{src:n.url,alt:"source",css:et}),O&&Object(s.c)(H,{src:n.media.reddit_video.fallback_url}),Object(s.c)("div",{css:at},d&&Object(s.c)(m.f,{variant:"h5"},Object(s.c)(g.a,{source:n.selftext}))))))},ot="https://www.reddit.com";function ut(){var t=Object(u.a)(["\n  ",";\n  width: 8em !important;\n  height: 8em !important;\n  margin-top: 3em;\n"]);return ut=function(){return t},t}function st(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n"]);return st=function(){return t},t}function bt(){var t=Object(u.a)(["\n  margin: 2em 7%;\n"]);return bt=function(){return t},t}var lt=Object(s.b)(bt()),dt=Object(s.b)(st()),Ot=Object(s.b)(ut(),dt),ft=function(t){return Object(s.c)(m.f,{variant:"h3",gutterBottom:!0},"Error Occured: ",t.error.message)};var jt=function(t){var n=Object(c.useState)(null),e=Object(o.a)(n,2),r=e[0],a=e[1],i=Object(c.useState)(!1),u=Object(o.a)(i,2),b=u[0],l=u[1],d=Object(c.useState)(null),O=Object(o.a)(d,2),f=O[0],p=O[1],v=Object(c.useState)(null),h=Object(o.a)(v,2),g=h[0],w=h[1],E=Object(c.useState)(!1),x=Object(o.a)(E,2),y=x[0],k=x[1],N="".concat(ot,"/r/").concat(t.subreddit,"/").concat("top",".json"),T=function(t){return t.data.data.children.map(function(t){return t.data})};return Object(c.useEffect)(function(){l(!0),j.a.get(N).then(function(t){var n=T(t);l(!1),p(t.data.data),w(null),a(n)}).catch(function(t){l(!1),w(t),a(null)})},[t.subreddit,N]),Object(c.useEffect)(function(){if(y&&!b&&f.after){var t=f.after;j.a.get(N+"?after="+t).then(function(t){var n=T(t);a(function(t){return t&&t.concat(n)}),p(t.data.data),k(!1)}).catch(function(){k(!1)})}else k(!1)},[y,f,b,N]),Object(c.useEffect)(function(){function t(){var t=document.getElementById("root");!y&&t.getBoundingClientRect().bottom<=window.innerHeight&&k(!0)}return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[y]),Object(s.c)("div",{css:lt},Object(s.c)(m.f,{variant:"h2",gutterBottom:!0},"/r/".concat(t.subreddit)),b&&Object(s.c)(m.b,{css:Ot}),r&&r.map(function(t){return Object(s.c)(it,{post:t,key:t.id})}),g&&Object(s.c)(ft,{error:g}),y&&Object(s.c)(m.b,{css:dt}))},mt=e(52),pt=e(47),vt=e.n(pt),ht=e(48),gt=e.n(ht),wt=e(45),Et=e.n(wt),xt=e(46),yt=e.n(xt),kt=e(49),Nt=e.n(kt),Tt=e(37),Ct=e(122),Vt=e.n(Ct),_t=e(123),St=e.n(_t);var Rt=Object(b.withStyles)(function(t){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(mt.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(mt.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(Tt.fade)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(Tt.fade)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing.unit,width:"auto"}),searchIcon:{width:9*t.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(mt.a)({paddingTop:t.spacing.unit,paddingRight:t.spacing.unit,paddingBottom:t.spacing.unit,paddingLeft:10*t.spacing.unit,transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}})(function(t){var n=t.classes;return r.a.createElement("div",{className:n.root},r.a.createElement(vt.a,{position:"fixed"},r.a.createElement(gt.a,null,r.a.createElement(Et.a,{className:n.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(Vt.a,null)),r.a.createElement(yt.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"React Reddit Client"),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(St.a,null)),r.a.createElement(Nt.a,{placeholder:"Go to subreddit",classes:{root:n.inputRoot,input:n.inputInput},onChange:t.onSubredditChange})))))});function Bt(){var t=Object(u.a)(["\n  body {\n    margin: 0\n  }\n"]);return Bt=function(){return t},t}function It(){var t=Object(u.a)(["\n  margin-top: 5em;\n"]);return It=function(){return t},t}var Wt=Object(b.createMuiTheme)({palette:{primary:{main:O.a[800]}},typography:{useNextVariants:!0}}),Lt=Object(s.b)(It()),Pt=Object(s.b)(Bt());var Dt=function(){var t=Object(c.useState)("all"),n=Object(o.a)(t,2),e=n[0],r=n[1];return Object(s.c)(l.a,{injectFirst:!0},Object(s.c)(b.MuiThemeProvider,{theme:Wt},Object(s.c)(s.a,{styles:Pt}),Object(s.c)(Rt,{onSubredditChange:function(t){r(t.target.value)}}),Object(s.c)("div",{css:Lt},Object(s.c)(jt,{subreddit:e}))))};i.a.render(r.a.createElement(Dt,null),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.58fa509d.chunk.js.map