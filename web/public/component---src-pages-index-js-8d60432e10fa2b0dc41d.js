(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{409:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(38),o=(r(9),r(32)),l=r(406),i=r(414),c=r.n(i);function d(e){return n.a.createElement("div",{className:c.a.root},e.title&&n.a.createElement("h2",{className:c.a.headline},e.title),n.a.createElement("ul",{className:c.a.grid},e.nodes&&e.nodes.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(l.a,Object.assign({},e,{isInList:!0})))}))),e.browseMoreHref&&n.a.createElement("div",{className:c.a.browseMoreNav},n.a.createElement(o.a,{to:e.browseMoreHref},"Browse more")))}d.defaultProps={title:"",nodes:[],browseMoreHref:""};var m=d,u=r(402),f=r(404),w=r(403),p=r(405);r.d(t,"query",(function(){return E}));var E="1233413505";t.default=function(e){var t=e.data,r=e.errors;if(r)return n.a.createElement(p.a,null,n.a.createElement(f.a,{errors:r}));var a=(t||{}).site,o=(t||{}).posts?Object(s.f)(t.posts).filter(s.d).filter(s.c):[];if(!a)throw new Error('Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.');return n.a.createElement(p.a,null,n.a.createElement(w.a,{title:a.title,description:a.description,keywords:a.keywords}),n.a.createElement(u.a,null,n.a.createElement("h1",{hidden:!0},"Welcome to ",a.title),o&&n.a.createElement(m,{title:"Latest blog posts",nodes:o,browseMoreHref:"/archive/"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8d60432e10fa2b0dc41d.js.map