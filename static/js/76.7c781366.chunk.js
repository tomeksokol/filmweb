"use strict";(self.webpackChunkfilmweb=self.webpackChunkfilmweb||[]).push([[76],{8076:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var a=e(885),r=e(2791),c=e(6871),o=e(9173),s=e(4270),i="Cast_cast__LybwB",u="Cast_item__-bqS6",f="Cast_photo__B5bJ1",p="Cast_name__7BXUS",l="Cast_character__N8T-k",d=e(1651),h=e(1608),m=e(7093),E=e(184),A=function(){var n=(0,c.UO)().id,t=(0,r.useState)(null),e=(0,a.Z)(t,2),A=e[0],v=e[1],x=(0,r.useState)(d.Q_.IDLE),b=(0,a.Z)(x,2),g=b[0],N=b[1],w=(0,r.useState)(null),j=(0,a.Z)(w,2),R=j[0],_=j[1];return(0,r.useEffect)((function(){N(d.Q_.PENDING),(0,o.M1)(n).then((function(n){var t=n.cast;_(t),N(d.Q_.RESOLVED)})).catch((function(n){console.log(n),v("Co\u015b posz\u0142o nie tak, spr\xf3buj ponownie."),N(d.Q_.REJECTED)}))}),[n]),(0,E.jsxs)(E.Fragment,{children:[g===d.Q_.PENDING&&(0,E.jsx)(h.Z,{}),g===d.Q_.REJECTED&&(0,E.jsx)(m.Z,{message:A}),g===d.Q_.RESOLVED&&(0,E.jsx)("ul",{className:i,children:R.length<1?(0,E.jsx)("p",{children:"Przepraszamy, brak opisu"}):R.map((function(n){var t=n.character,e=n.id,a=n.name,r=n.profile_path;return(0,E.jsxs)("li",{className:u,children:[null===r?(0,E.jsx)("img",{src:s,alt:"Zdj\u0119cie jest niedost\u0119pne",className:f}):(0,E.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:"".concat(a),className:f}),(0,E.jsxs)("h4",{className:p,children:["Aktor: ",a]}),(0,E.jsxs)("p",{className:l,children:["Rola: ",t]})]},e)}))})]})}},7093:function(n,t,e){e.d(t,{Z:function(){return i}});var a=e(7369),r="ErrorView_wrapper__2QkYq",c="ErrorView_img__w4F5u",o="ErrorView_text__6IWo-",s=e(184);var i=function(n){var t=n.message;return(0,s.jsxs)("div",{role:"alert",className:r,children:[(0,s.jsx)("p",{text:t,className:o,children:t}),(0,s.jsx)("img",{src:a,width:"650",alt:"sadcat",className:c})]})}},9173:function(n,t,e){e.d(t,{Hg:function(){return u},z1:function(){return f},TP:function(){return p},M1:function(){return l},tx:function(){return d}});var a=e(5861),r=e(7757),c=e.n(r),o=e(1651);function s(){return i.apply(this,arguments)}function i(){return i=(0,a.Z)(c().mark((function n(){var t,e,a,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(t,e);case 4:if(!(a=n.sent).ok){n.next=11;break}return n.next=8,a.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Informacja, kt\xf3rej szukasz, nie zosta\u0142a znaleziona."));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),i.apply(this,arguments)}function u(n){return s("".concat(o._n,"/trending/movie/day?api_key=").concat(o.$h,"&language=").concat(o.ad,"&page=").concat(n))}function f(n,t){return s("".concat(o._n,"/search/movie?api_key=").concat(o.$h,"&language=").concat(o.ad,"&query=").concat(n,"&page=").concat(t))}function p(n,t){return s("".concat(o._n,"/movie/").concat(n,"?api_key=").concat(o.$h,"&language=").concat(o.ad))}function l(n,t){return s("".concat(o._n,"/movie/").concat(n,"/credits?api_key=").concat(o.$h,"&language=").concat(o.ad))}function d(n,t){return s("".concat(o._n,"/movie/").concat(n,"/reviews?api_key=").concat(o.$h,"&language=en-US"))}},1651:function(n,t,e){e.d(t,{_n:function(){return a},$h:function(){return r},Q_:function(){return o},ad:function(){return c}});var a="https://api.themoviedb.org/3",r="75815181ea441a6e2021750ae525d2f4",c="pl-PL",o={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4270:function(n){n.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAPFBMVEX29vawsLD5+fm6urqtra3CwsKysrLy8vLi4uLe3t7m5uaxsbHp6enFxcXNzc3s7OzT09O9vb3Q0NDZ2dlO/F6aAAAFFUlEQVR4nO2dyXarMAxAQQYzT+H///UZkjRNHyHEtmyJ6C66aLvgHnmQDZaTRBAEQRAEQRCEO3An9oMEY3Et2nKeR8Nc1UPyBfYAQ9VPOvtNqrqxTk7sDkndq0X0L+Z3TT4Xp1Q3ke71hvMv96lKzmYOUE470nf35lKcyhxK9d56NU/785hDOx2SvrX3yzlaOxT9cevVXJcnEIdSf6a9mHfsQw4fBvse8pq1OBTKRnsxnxmLQ/t5G/8R79mKQ2ltvYjnsZ/fEqhctI34FNvACldtpuJujZytOLTu2stEzm1wK7QHbSM+8hKHDzLyfXFWOStcPGkbitgyx4Han3aWMwq48qbNKWP12coXcS4tffCqzWYyg86vd5q1sZUO4SVjefJmMbRB7tubR8A99+7Vm0HAvffuVXyIrfUeBG0Gmy8wY3inOrbXO2DC0DbLk9hibyhQwk2+oSM1c/INHWU0X6A+hfvZZtnwpr3xgpC03LxJpy7ue8cv0aS9rd4CHoL0KhxyLO00q2PL7QBYwxr17SY0bdoDOlK2tnpTztjQpjHiu2zet5h+eU+EvT2+L/gP8aYHojfpdo7Yv1PKCfq3juffOn9/a74GPl8A//GuKHt/63rM75vvJ2/S6+8v3W9B3F+jPI0liPuppLcdEPfPab8RRevgKrbZGwocbdrZWoLylcfqTXn2XkBq6NSbeYKTopNOzq+gvDIhnazdwPieiXjSsoIwhROfvG94DziLcCP0cB7h9p67kM9Z7nj+uKeJ7XMYsD0NuwWnkzWDR20eg9oVjy1dM0hZHnibxDNuB+D9dHHi2ywbeDkoyWYKewCtB21OY9od90ODtL9RfAnUrtqxDSyBtnEIOcO+fce+jAmLLZY9LLcZs5Ty688D2GVumRp4axvx4eO2nmUX7tYr47Haa49gt6fQNsNbd9w80+xS09dAmx+st6dn9iXInoC2T9+ZZ5k6mfUCFPNekUXzp64+ZSXRpZTonDcbBVTNr1Rfni/UD0xA67lT+qlc7tRXw5nr5d64Fkiuy8pQ1kPxDfWRH3xbOWxBEARBYAvsEfvhELhqLbdYjH2XT0oprXXTNOanVmrKu36cy7q4/+MZMCJFW43dpNOfjHxjXXJFT91YtQVz+UV5WYWkm7KvlqO3iz24yhvncr21w2o/dV2ZVtxu9jCP246TnfKTvLrUfFblAOv1LE7OD3fNY0MCYLjsXc9ip94Sb/CQVAeuZ7FQJ73hCMVoX9f/nbqmepUNJO93ip3MSV5lA8UF1Xo1z8iZw4zWwp/M05FSP4fW54eZ++aKzAdtpmOHsl7NexohDxjsmziJS3zQKirumRP4LgDrQOi++BR3YHf5YMlNXMf8AAaGILPXNvE6uc/rGz4n2jmEuNrRKnz4uYnHSTxGxMHjGRJr8Qh93NMFRG40wU/UebuAyI3Q58IRC8R+ROATCT4uVfND2IM3RRPb94eQh2bRqrRYELD+IJ1WvhCwpeNVWbMh1BUAMVbcewRbjVPIWJ4IcnSWWrhDBRyxxrk1IbRJDeZXQgzpSIWn3AgwhyMVGnMDP2lDrBzpAP6hSkop6i/wGzrB0XwBewpHrHjtAnY9PprdG38mg5GoN/IheSr7S/+BXAqCZNayoMQbxzu24Ask3uIt3uIt3uIt3uIt3uJNEfEWb/EWb/EWb/EWb/EWb4qIt3iLt3iLt3gz9s6wvXtFE+wrIHYricUEV1sQBEEQBEEQgvAP11lefkObcB4AAAAASUVORK5CYII="},7369:function(n,t,e){n.exports=e.p+"static/media/error.svg.718ab7fc50feafa4ccb8.png"}}]);
//# sourceMappingURL=76.7c781366.chunk.js.map