"use strict";(self.webpackChunkfilmweb=self.webpackChunkfilmweb||[]).push([[895],{7093:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7369),o="ErrorView_wrapper__2QkYq",a="ErrorView_img__w4F5u",c="ErrorView_text__6IWo-",s=n(184);var i=function(e){var t=e.message;return(0,s.jsxs)("div",{role:"alert",className:o,children:[(0,s.jsx)("p",{text:t,className:c,children:t}),(0,s.jsx)("img",{src:r,width:"650",alt:"sadcat",className:a})]})}},3895:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,o,a=n(885),c=n(2791),s=n(6871),i=n(9173),u=n(1651),l=n(1608),f=n(7093),p="Reviews_item__ejI6V",h="Reviews_author__gmQjr",d="Reviews_content__HvQxR";var g=(o=r=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return r.shouldTruncateString=function(e){return e.length>parseInt(r.props.length)},r.truncatedString=function(e){return e.slice(0,r.props.length).split(" ").slice(0,-1).join(" ")},r.toggleShowMore=function(e){e&&e.preventDefault&&e.preventDefault(),r.setState((function(e){return{showMore:!e.showMore}}))},r.state={showMore:!1},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.state.showMore,t=this.props,n=t.text,r=t.enabled,o=t.className,a=t.style,s=t.ellipsis,i=t.showMoreLabel,u=t.showLessLabel,l=this.props.tag;return r&&this.shouldTruncateString(n)?c.createElement(c.Fragment,null,!e&&""+this.truncatedString(n)+s,e&&n,c.createElement(l,{className:o,onClick:this.toggleShowMore,style:a},e?u:i)):c.createElement(c.Fragment,null,n)},t}(c.Component),r.defaultProps={enabled:!0,length:170,className:"",tag:"span",style:{cursor:"pointer",color:"#007bff"},ellipsis:"...",showMoreLabel:" Show more",showLessLabel:" Show less"},o);g.propTypes={};var w=g,_=n(184),m=function(){var e=(0,s.UO)().id,t=(0,c.useState)([]),n=(0,a.Z)(t,2),r=n[0],o=n[1],g=(0,c.useState)(null),m=(0,a.Z)(g,2),v=m[0],b=m[1],E=(0,c.useState)(u.Q_.IDLE),j=(0,a.Z)(E,2),x=j[0],y=j[1];return(0,c.useEffect)((function(){y(u.Q_.PENDING),(0,i.tx)(e).then((function(e){var t=e.results;o(t),y(u.Q_.RESOLVED)})).catch((function(e){console.log(e),b("Co\u015b posz\u0142o nie tak, spr\xf3buj ponownie."),y(u.Q_.REJECTED)}))}),[e]),(0,_.jsxs)(_.Fragment,{children:[x===u.Q_.PENDING&&(0,_.jsx)(l.Z,{}),x===u.Q_.REJECTED&&(0,_.jsx)(f.Z,{message:v}),x===u.Q_.RESOLVED&&(0,_.jsx)("ul",{children:r.length<1?(0,_.jsx)("p",{children:"Przepraszamy, brak recenzji dla tego filmu"}):r.map((function(e){return(0,_.jsxs)("li",{className:p,children:[(0,_.jsxs)("h3",{className:h,children:["Autor: ",e.author]}),(0,_.jsx)("p",{className:d,children:(0,_.jsx)(w,{text:e.content,length:700,showMoreLabel:" Rozwi\u0144 >>",showLessLabel:" Schowaj <<",style:{cursor:"pointer",color:"#fa7584",fontWeight:"bold"}})})]},e.id)}))})]})}},9173:function(e,t,n){n.d(t,{Hg:function(){return u},z1:function(){return l},TP:function(){return f},M1:function(){return p},tx:function(){return h}});var r=n(5861),o=n(7757),a=n.n(o),c=n(1651);function s(){return i.apply(this,arguments)}function i(){return i=(0,r.Z)(a().mark((function e(){var t,n,r,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Informacja, kt\xf3rej szukasz, nie zosta\u0142a znaleziona."));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function u(e){return s("".concat(c._n,"/trending/movie/day?api_key=").concat(c.$h,"&language=").concat(c.ad,"&page=").concat(e))}function l(e,t){return s("".concat(c._n,"/search/movie?api_key=").concat(c.$h,"&language=").concat(c.ad,"&query=").concat(e,"&page=").concat(t))}function f(e,t){return s("".concat(c._n,"/movie/").concat(e,"?api_key=").concat(c.$h,"&language=").concat(c.ad))}function p(e,t){return s("".concat(c._n,"/movie/").concat(e,"/credits?api_key=").concat(c.$h,"&language=").concat(c.ad))}function h(e,t){return s("".concat(c._n,"/movie/").concat(e,"/reviews?api_key=").concat(c.$h,"&language=en-US"))}},1651:function(e,t,n){n.d(t,{_n:function(){return r},$h:function(){return o},Q_:function(){return c},ad:function(){return a}});var r="https://api.themoviedb.org/3",o="75815181ea441a6e2021750ae525d2f4",a="pl-PL",c={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},7369:function(e,t,n){e.exports=n.p+"static/media/error.svg.718ab7fc50feafa4ccb8.png"}}]);
//# sourceMappingURL=895.adadc7b0.chunk.js.map