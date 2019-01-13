!function(t){var e=window.webpackJsonp;window.webpackJsonp=function(n,o,a){for(var i,c,s=0,u=[];s<n.length;s++)c=n[s],r[c]&&u.push(r[c][0]),r[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);for(e&&e(n,o,a);u.length;)u.shift()()};var n={},r={5:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=r[t];if(0===e)return new Promise(function(t){t()});if(e)return e[2];var n=new Promise(function(n,o){e=r[t]=[n,o]});e[2]=n;var a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.timeout=12e4,o.nc&&i.setAttribute("nonce",o.nc),i.src=o.p+"js/"+({0:"code"}[t]||t)+".bundle.js?v="+{0:"1afb16f2"}[t];var c=setTimeout(s,12e4);function s(){i.onerror=i.onload=null,clearTimeout(c);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}return i.onerror=i.onload=s,a.appendChild(i),n},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/assets/",o.oe=function(t){throw console.error(t),t},o(o.s=41)}({1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){var e=r(t,2)[1];Prism.languages.kirbytext=Prism.languages.extend("markdown",{}),Prism.languages.insertBefore("kirbytext","prolog",{kirbytag:{pattern:/\([a-z0-9_-]+:.*?\)/i,inside:{"kirbytag-bracket":/^\(|\)$/,"kirbytag-name":{pattern:/^[a-z0-9_-]+:/i},"kirbytag-attr":{pattern:/([^:]\s+)[a-z0-9_-]+:/i,lookbehind:!0}}}}),Prism.languages.kirbycontent={delimiter:/\n----\s*\n*/,property:{pattern:/(^\n*|\n----\s*\n*)[a-zA-Z0-9_\-\u0020]+:/,lookbehind:!0}},Prism.plugins.customClass.prefix("code-"),Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var n=document.createElement("a");n.classList.add("link-reset"),n.insertAdjacentHTML("beforeend",'<svg viewBox="0 0 16 16" width="16" height="16" class="icon"><path d="M10,4H2C1.4,4,1,4.4,1,5v10c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1V5C11,4.4,10.6,4,10,4z"></path> <path data-color="color-2" d="M14,0H4v2h9v11h2V1C15,0.4,14.6,0,14,0z"></path></svg>');var r,o=document.createElement("span");function a(){setTimeout(function(){o.textContent="Copy"},5e3)}return o.textContent="Copy",n.appendChild(o),(r=new e(n,{text:function(){return t.code}})).on("success",function(){o.textContent="Copied!",a()}),r.on("error",function(){o.textContent="Press Ctrl+C/⌘+C to copy",a()}),n})};e.default=function(){var t=document.querySelectorAll('pre code[class^="language-"], pre code[class*=" language-"], pre.code > code'),e=/(?:^| )language(-[a-z])( |$)*/i;if(t.length>0){for(var r,a=0,i=t.length;a<i&&(r=t[a]);a++)e.test(r.className)||r.classList.add("language-plaintext");Promise.all([n.e(0).then(n.bind(null,5)),n.e(0).then(n.bind(null,6))]).then(o)}}},41:function(t,e,n){t.exports=n(42)},42:function(t,e,n){"use strict";var r,o=n(43),a=n(1);(r=a)&&r.__esModule;var i=(0,o.$)(".cheatsheet"),c=function(){(0,o.$$)(".cheatsheet-panel-header button").forEach(function(t){t.addEventListener("click",function(e){var n=t.getAttribute("data-show");i.setAttribute("data-show",n)})})},s=function(t){i.classList.add("is-loading"),fetch(t.href+"?plain=true").then(function(t){return t.text()}).then(function(e){(0,o.$)(".cheatsheet-article").innerHTML=e,(0,o.$)(".cheatsheet-entries a[aria-current]").removeAttribute("aria-current"),t.setAttribute("aria-current","page"),i.classList.remove("is-loading"),i.removeAttribute("data-show");var n=t.getAttribute("data-title");document.title=n+" | Kirby",Prism.highlightAll(),c()})};window.addEventListener("popstate",function(t){if(t.state&&t.state.slug){var e=(0,o.$)("a[data-slug='"+t.state.slug+"']");e&&s(e)}}),(0,o.$$)(".cheatsheet-entries a").forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),s(t),history.pushState({link:t.href,slug:t.getAttribute("data-slug")},"",t.href)},!0)}),c();var u=(0,o.$)(".cheatsheet-sections a[aria-current]"),l=(0,o.$)(".cheatsheet-entries a[aria-current]");u&&u.scrollIntoView&&u.scrollIntoView(),l&&l.scrollIntoView&&l.scrollIntoView()},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.$=function(t){return document.querySelector(t)},e.$$=function(t){return[].slice.call(document.querySelectorAll(t))}}});
//# sourceMappingURL=cheatsheet.js.map