(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>b});var s=n(645),o=n.n(s),i=n(667),l=n.n(i),r=n(888),d=n(371),a=n(424),c=o()((function(t){return t[1]})),p=l()(r.Z),u=l()(d.Z),m=l()(a.Z);c.push([t.id,".navbar {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n  height: 5vh;\n  padding: 0rem 1rem;\n  background-color: #333333;\n  color: #FFFFFF;\n}\n.navbar-hamburger {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.navbar-hamburger-lign {\n  background-color: #FFFFFF;\n  width: 100%;\n  height: 0.2rem;\n}\n.navbar-home {\n  font-size: 20px;\n  cursor: pointer;\n}\n.navbar-searchbar {\n  display: flex;\n  align-items: center;\n}\n.navbar-searchbar-input {\n  padding: 0.5rem;\n  border-radius: 0.2rem;\n  cursor: not-allowed;\n}\n\n.main-dot {\n  width: 0.75rem;\n  height: 0.75rem;\n  background: url("+p+");\n}\n.main-plus {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url("+u+");\n  width: 1rem;\n  height: 1rem;\n  cursor: pointer;\n}\n.main-plus > span:first-child {\n  width: 1rem;\n  height: 0.2rem;\n  background-color: #FFFFFF;\n}\n.main-plus > span:last-child {\n  position: absolute;\n  height: 1rem;\n  width: 0.2rem;\n  background-color: #FFFFFF;\n}\n\n.list-container {\n  width: 100%;\n  height: 100%;\n  background-color: #1F1F1F;\n  color: #FFFFFF;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2rem;\n}\n.list-title {\n  align-self: flex-start;\n}\n.list-list {\n  width: 100%;\n  margin-top: 1rem;\n}\n.list-list-task {\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.list-list-task:not(:first-child) {\n  margin-top: 1rem;\n}\n.list-list-task > li {\n  font-size: 20px;\n}\n.list-list-task-dots {\n  position: absolute;\n  right: 0.2rem;\n  background: url("+m+");\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  height: 0.5rem;\n  width: 2rem;\n  cursor: pointer;\n  z-index: 1;\n}\n.list-list-task-text {\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n}\n.list-list-task-text-title {\n  margin-left: 1rem;\n}\n.list-list-task-text-title-done {\n  color: #333333;\n  text-decoration: line-through;\n}\n.list-list-task-text-title-overdue {\n  color: #C82929;\n}\n.list-list-task-dropdown {\n  z-index: 2;\n  position: absolute;\n  display: none;\n  flex-direction: column;\n  top: 0;\n  right: 0;\n  width: 11rem;\n  overflow: hidden;\n  background-color: #4D4D4D;\n  font-size: 20px;\n  border: solid 0.1rem #FFFFFF;\n}\n.list-list-task-dropdown-active {\n  display: flex;\n}\n.list-list-task-dropdown-bar {\n  display: flex;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.list-list-task-dropdown-bar:hover {\n  background-color: #1F1F1F;\n}\n.list-list-task-dropdown-bar-button {\n  background-color: #333333;\n  border: none;\n  width: 20%;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.list-list-task-dropdown-bar-button:active {\n  background-color: #FFFFFF;\n  color: #1F1F1F;\n}\n.list-list-task-dropdown-project-inactive {\n  display: none;\n}\n.list-list-task-dropdown-project-input {\n  display: none;\n}\n.list-list-task-dropdown-project-input-active {\n  display: flex;\n}\n.list-list-task-dropdown-project-input-input {\n  background-color: #1F1F1F;\n  width: 11rem;\n  display: flex;\n  justify-content: space-between;\n  border: none;\n  border-bottom: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #FFFFFF;\n  font-size: 20px;\n}\n.list-list-task-dropdown-date-inactive {\n  display: none;\n}\n.list-list-task-dropdown-date-input {\n  display: none;\n  width: 100%;\n  height: 2.55rem;\n}\n.list-list-task-dropdown-date-input-active {\n  display: flex;\n}\n.list-list-task-dropdown-date-input-date {\n  background-color: #1F1F1F;\n  color: #FFFFFF;\n  padding: 0.5rem 0rem;\n  width: 11rem;\n  text-indent: 0.5rem;\n}\n.list-list-task-dropdown-delete {\n  display: flex;\n}\n.list-list-lign {\n  display: flex;\n  width: 100%;\n  height: 0.1rem;\n  background-color: #FFFFFF;\n}\n.list-list-date {\n  position: absolute;\n  font-size: 15px;\n  right: 3rem;\n}\n.list-add {\n  display: flex;\n  width: 100%;\n  margin-top: 2rem;\n  height: 2.5rem;\n  font-size: 20px;\n  align-self: flex-start;\n  cursor: pointer;\n}\n.list-add-inactive {\n  display: none;\n}\n.list-add:hover {\n  text-decoration: underline;\n}\n.list-add-add {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n}\n.list-add-task, .sidebar-projects-add-project {\n  display: none;\n  width: 100%;\n  height: 2.5rem;\n  margin-top: 2rem;\n  z-index: 2;\n}\n.list-add-task-input, .sidebar-projects-add-project-input {\n  padding: 0.5rem;\n  background-color: #1F1F1F;\n  border: solid 0.1rem #333333;\n  border-right: none;\n  color: #FFFFFF;\n  font-size: 20px;\n  width: 90%;\n}\n.list-add-task-active {\n  display: flex;\n}\n.list-add-task > button, .sidebar-projects-add-project > button {\n  width: 10%;\n  color: #FFFFFF;\n  background-color: #333333;\n  font-size: 20px;\n  border: none;\n  cursor: pointer;\n}\n.list-add-task > button:hover, .sidebar-projects-add-project > button:hover {\n  background-color: #4D4D4D;\n  color: #1F1F1F;\n  border: solid 0.1rem #333333;\n}\n.list-add-task > button:first-of-type, .sidebar-projects-add-project > button:first-of-type {\n  border-right: none;\n}\n.list-add-task > button:last-of-type, .sidebar-projects-add-project > button:last-of-type {\n  border-left: none;\n}\n\n.sidebar {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 20rem;\n  height: 100%;\n  background-color: #4D4D4D;\n  color: #FFFFFF;\n}\n.sidebar-closed {\n  display: none;\n}\n.sidebar-list {\n  padding: 2rem;\n}\n.sidebar-list-title {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  width: 15rem;\n  cursor: pointer;\n}\n.sidebar-list-title:hover {\n  background-color: #1F1F1F;\n}\n.sidebar-list-title > li {\n  font-size: 20px;\n  cursor: pointer;\n}\n.sidebar-list-title:not(:last-of-type) {\n  margin-bottom: 0.2rem;\n}\n.sidebar-projects {\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  padding: 0rem 2rem;\n  padding-bottom: 0.5rem;\n}\n.sidebar-projects-title {\n  font-size: 20px;\n  margin: 0;\n}\n.sidebar-projects-title:not(:last-of-type) {\n  margin-bottom: 1rem;\n}\n.sidebar-projects-add {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  cursor: pointer;\n}\n.sidebar-projects-add-inactive {\n  display: none;\n}\n.sidebar-projects-add:hover {\n  text-decoration: underline;\n}\n.sidebar-projects-add-title {\n  margin-left: 0.5rem;\n}\n.sidebar-projects-add-project {\n  height: auto;\n  z-index: 2;\n  margin-top: 0.55rem;\n}\n.sidebar-projects-add-project-active {\n  display: flex;\n}\n.sidebar-projects-add-project > button {\n  width: 20%;\n  color: #FFFFFF;\n  background-color: #333333;\n  font-size: 20px;\n  border: none;\n  cursor: pointer;\n}\n.sidebar-projects-add-project > button:hover {\n  background-color: #4D4D4D;\n  color: #1F1F1F;\n  border: solid 0.1rem #333333;\n}\n.sidebar-projects-list {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 2rem;\n  padding-top: 0;\n  font-size: 20px;\n  width: 80%;\n}\n.sidebar-projects-list-project {\n  position: relative;\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  width: 15rem;\n  cursor: pointer;\n}\n.sidebar-projects-list-project:hover {\n  background-color: #1F1F1F;\n}\n.sidebar-projects-list-project:hover > .sidebar-projects-list-project-delete {\n  display: flex;\n}\n.sidebar-projects-list-project:not(:last-child) {\n  margin-bottom: 0.2rem;\n}\n.sidebar-projects-list-project-title {\n  cursor: pointer;\n}\n.sidebar-projects-list-project-delete {\n  position: absolute;\n  right: 0.7rem;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background: url("+u+");\n  transform: rotate(45deg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 0.5rem;\n  z-index: 2;\n  cursor: pointer;\n}\n\n.dot-text {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.michel {\n  position: absolute;\n  bottom: 0.5rem;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n}\n.michel > a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 9rem;\n  height: 2rem;\n  border: solid 0.2rem #1F1F1F;\n  border-radius: 0.8rem;\n  background-color: #1F1F1F;\n}\n.michel > a:hover {\n  background-color: #333333;\n}\n\nbody {\n  margin: 0;\n  height: 100%;\n  font-family: Arial, sans-serif;\n  font-size: 30px;\n}\n\nmain {\n  display: flex;\n  height: 95vh;\n  width: 100%;\n}\n\ninput {\n  border: none;\n  box-shadow: none;\n  appearance: none;\n  outline: none;\n}\n\nul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.overlay-active {\n  display: flex;\n}",""]);const b=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,s){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(s)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var r=0;r<t.length;r++){var d=[].concat(t[r]);s&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},888:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"./img/dot.svg"},424:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"./img/dots.svg"},371:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"./img/plus.svg"},379:(t,e,n)=>{var s,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function l(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function r(t,e){for(var n={},s=[],o=0;o<t.length;o++){var r=t[o],d=e.base?r[0]+e.base:r[0],a=n[d]||0,c="".concat(d," ").concat(a);n[d]=a+1;var p=l(c),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:c,updater:g(u,e),references:1}),s.push(c)}return s}function d(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var i=n.nc;i&&(s.nonce=i)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var l=o(t.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}return e}var a,c=(a=[],function(t,e){return a[t]=e,a.filter(Boolean).join("\n")});function p(t,e,n,s){var o=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=c(e,o);else{var i=document.createTextNode(o),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(i,l[e]):t.appendChild(i)}}function u(t,e,n){var s=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var m=null,b=0;function g(t,e){var n,s,o;if(e.singleton){var i=b++;n=m||(m=d(e)),s=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=d(e),s=u.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s));var n=r(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<n.length;s++){var o=l(n[s]);i[o].references--}for(var d=r(t,e),a=0;a<n.length;a++){var c=l(n[a]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=d}}}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={id:s,exports:{}};return t[s](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})();var s={};(()=>{n.d(s,{a:()=>y});let t=[],e=[];const o=()=>{localStorage.setItem("taskArray",JSON.stringify(t)),localStorage.setItem("projectArray",JSON.stringify(e))},i=function(){let n=JSON.parse(localStorage.getItem("taskArray")),s=JSON.parse(localStorage.getItem("projectArray"));n!=t&&(t=[],t.push(...n)),s&&(e=[],e.push(...s))},l=document.getElementById("list-list"),r=document.getElementById("list-title"),d=(()=>{const n=document.getElementById("list-add"),s=document.getElementById("list-add-task"),i=document.getElementById("list-add-task-input"),a=document.getElementById("list-add-task-input-add"),c=document.getElementById("list-add-task-input-cancel"),p=(t,e,n,s)=>({title:t,project:e,date:n,done:s}),u=()=>{if(g(),"Inbox"===r.textContent){for(let e=0;e<t.length;e++)null===t[e].project&&m(t[e].title,t[e].project,t[e].date,t[e].done);d.setAttributesTasks()}else if("Overdue"===r.textContent){for(let e=0;e<t.length;e++)null!==t[e].date&&t[e].date.valueOf()<(new Date).toISOString().slice(0,10)&&m(t[e].title,t[e].project,t[e].date,t[e].done);d.setAttributesTasks()}else if("Today"===r.textContent){for(let e=0;e<t.length;e++)t[e].date==(new Date).toISOString().slice(0,10)&&m(t[e].title,t[e].project,t[e].date,t[e].done);d.setAttributesTasks()}else{for(let e=0;e<t.length;e++)t[e].project==r.textContent&&m(t[e].title,t[e].project,t[e].date,t[e].done);d.setAttributesTasks()}for(let e=0;e<t.length;e++)for(let n=0;n<document.querySelectorAll(".list-list-task-text-title").length;n++)t[e].title==document.querySelectorAll(".list-list-task-text-title")[n].textContent&&1==t[e].done&&document.querySelectorAll(".list-list-task-text-title")[n].classList.add("list-list-task-text-title-done"),t[e].title==document.querySelectorAll(".list-list-task-text-title")[n].textContent&&null!==t[e].date&&(new Date).toISOString().slice(0,10)>t[e].date.valueOf()&&document.querySelectorAll(".list-list-task-text-title")[n].classList.add("list-list-task-text-title-overdue")},m=(t,n,s,o)=>{let i=document.createElement("div");i.classList.add("list-list-task"),l.appendChild(i);let d=document.createElement("div");d.classList.add("list-list-task-text"),i.appendChild(d);let a=document.createElement("div");a.textContent=s,a.classList.add("list-list-date"),i.appendChild(a);let c=document.createElement("div");c.classList.add("main-dot"),c.classList.add("done-dot"),d.appendChild(c);let p=document.createElement("li");p.classList.add("list-list-task-text-title"),null!==n&&"Today"==r.textContent||null!==n&&"Overdue"==r.textContent?p.textContent=t+" ("+n+")":p.textContent=t,d.appendChild(p);let u=document.createElement("div");u.classList.add("list-list-task-dots"),i.appendChild(u);let m=document.createElement("ul");m.classList.add("list-list-task-dropdown"),i.appendChild(m);let b=document.createElement("li");b.classList.add("list-list-task-dropdown-project"),b.classList.add("list-list-task-dropdown-bar"),b.textContent="Project",m.appendChild(b);let g=document.createElement("li");g.classList.add("list-list-task-dropdown-project-input"),m.appendChild(g);let y=document.createElement("select");y.classList.add("list-list-task-dropdown-project-input-input"),g.appendChild(y);let h=document.createElement("option");h.textContent="No Project",h.value="No Project",y.appendChild(h);for(let t=0;t<e.length;t++){let n=document.createElement("option");n.textContent=e[t],n.value=e[t],y.appendChild(n)}let v=document.createElement("button");v.classList.add("list-list-task-dropdown-project-input-button"),v.classList.add("list-list-task-dropdown-bar-button"),v.textContent="OK",g.appendChild(v);let f=document.createElement("li");f.classList.add("list-list-task-dropdown-date"),f.classList.add("list-list-task-dropdown-bar"),f.textContent="Date",m.appendChild(f);let k=document.createElement("li");k.classList.add("list-list-task-dropdown-date-input");let j=document.createElement("input");j.type="date",j.value=s,j.classList.add("list-list-task-dropdown-date-input-date"),k.appendChild(j);let x=document.createElement("button");x.classList.add("list-list-task-dropdown-date-input-button"),x.classList.add("list-list-task-dropdown-bar-button"),x.textContent="OK",k.appendChild(x),m.appendChild(k);let w=document.createElement("li");w.classList.add("list-list-task-dropdown-delete"),w.classList.add("list-list-task-dropdown-bar"),w.textContent="Delete",m.appendChild(w);let F=document.createElement("span");F.classList.add("list-list-lign"),l.appendChild(F)},b=()=>{let t=document.querySelectorAll(".list-list-task"),e=document.querySelectorAll(".list-list-lign"),n=document.querySelectorAll(".list-list-task-dots"),s=document.querySelectorAll(".done-dot"),o=document.querySelectorAll(".list-list-task-text-title"),i=document.querySelectorAll(".list-list-task-dropdown"),l=document.querySelectorAll(".list-list-task-dropdown-delete"),r=document.querySelectorAll(".list-list-task-dropdown-project"),d=document.querySelectorAll(".list-list-task-dropdown-date"),a=document.querySelectorAll(".list-list-task-dropdown-date-input"),c=document.querySelectorAll(".list-list-task-dropdown-date-input-button"),p=(document.querySelectorAll(".list-list-task-dropdown-date-input-date"),document.querySelectorAll(".list-list-task-dropdown-project-input-input")),u=document.querySelectorAll(".list-list-task-dropdown-project-input-button");for(let m=0;m<t.length;m++)t[0]&&(t[m].dataset.number=m,e[m].dataset.number=m,n[m].dataset.number=m,s[m].dataset.number=m,o[m].dataset.number=m,i[m].dataset.number=m,r[m].dataset.number=m,l[m].dataset.number=m,d[m].dataset.number=m,a[m].dataset.number=m,c[m].dataset.number=m,p[m].dataset.number=m,u[m].dataset.number=m)},g=()=>{for(;l.firstChild;)l.removeChild(l.firstChild)},h=()=>{let t=document.querySelectorAll(".list-list-task-dropdown"),e=document.querySelectorAll(".list-list-task-dropdown-date"),o=document.querySelectorAll(".list-list-task-dropdown-date-input"),i=document.querySelectorAll(".list-list-task-dropdown-project"),l=document.querySelectorAll(".list-list-task-dropdown-project-input");overlay.classList.remove("overlay-active"),n.classList.remove("list-add-inactive"),s.classList.remove("list-add-task-active");for(let n=0;n<t.length;n++)e[n].classList.remove("list-list-task-dropdown-date-inactive"),o[n].classList.remove("list-list-task-dropdown-date-input-active"),t[n].classList.remove("list-list-task-dropdown-active"),i[n].classList.remove("list-list-task-dropdown-project-inactive"),l[n].classList.remove("list-list-task-dropdown-project-input-active")};return n.addEventListener("click",(()=>{n.classList.toggle("list-add-inactive"),s.classList.toggle("list-add-task-active"),overlay.classList.add("overlay-active"),i.focus()})),c.addEventListener("click",(()=>{n.classList.toggle("list-add-inactive"),s.classList.toggle("list-add-task-active"),overlay.classList.remove("overlay-active")})),a.addEventListener("click",(()=>{if(""!==i.value){let e,n=i.value;if("Today"==r.textContent){let t=(new Date).toISOString().slice(0,10);e=p(n,null,t,!1)}else e="Today"!==r.textContent&&"Inbox"!==r.textContent?p(n,r.textContent,null,!1):p(n,null,null,!1);t.push(e),o(),g(),y(),u(),b()}else i.placeholder="Please enter something"})),document.addEventListener("keydown",(t=>{"Enter"===t.key&&document.getElementById("list-add-task").classList.contains("list-add-task-active")?(document.getElementById("list-add-task-input-add").click(),overlay.classList.remove("overlay-active"),h()):"Enter"===t.key&&document.getElementById("sidebar-projects-add-project").classList.contains("sidebar-projects-add-project-active")&&(document.getElementById("list-projects-add-project-add").click(),overlay.classList.remove("overlay-active"),h())})),{displayTasks:u,clearTasks:g,setAttributesTasks:b,resetTask:h}})(),a=document.getElementById("list-title"),c=()=>{a.textContent="Inbox",i(),d.displayTasks()},p=document.getElementById("list-title"),u=(()=>{const t=document.getElementById("navbar-hamburger"),n=document.getElementById("sidebar"),s=document.getElementById("sidebar-projects-add"),l=document.getElementById("list-projects-add-project-add"),r=document.getElementById("list-projects-add-project-cancel"),u=document.getElementById("sidebar-projects-add-project"),m=document.getElementById("sidebar-projects-add-project-input"),b=document.getElementById("sidebar-projects-list"),g=document.getElementById("sidebar-projects-title"),h=document.getElementById("inbox"),v=document.getElementById("today"),f=document.getElementById("overdue");t.addEventListener("click",(()=>{n.classList.toggle("sidebar-closed")})),h.addEventListener("click",(()=>{"Inbox"!==p.textContent&&c()})),v.addEventListener("click",(()=>{"Today"!==p.textContent&&(a.textContent="Today",i(),d.displayTasks())})),f.addEventListener("click",(()=>{"Overdue"!==p.textContent&&(a.textContent="Overdue",i(),d.displayTasks())})),s.addEventListener("click",(()=>{overlay.classList.add("overlay-active"),s.classList.add("sidebar-projects-add-inactive"),u.classList.add("sidebar-projects-add-project-active"),m.focus()})),r.addEventListener("click",(()=>{s.classList.remove("sidebar-projects-add-inactive"),u.classList.remove("sidebar-projects-add-project-active")})),l.addEventListener("click",(()=>{""!==m.value?(e.push(m.value),x(),y(),o(),i(),k(),d.displayTasks()):m.placeholder="Please enter something"}));const k=()=>{x();for(let t=0;t<e.length;t++){let n=document.createElement("div");n.classList.add("sidebar-projects-list-project"),b.appendChild(n);let o=document.createElement("div");o.classList.add("main-dot"),o.classList.add("sidebar-projects-dot"),n.appendChild(o);let i=document.createElement("div");i.classList.add("sidebar-projects-list-project-title"),i.textContent=e[t],n.appendChild(i);let l=document.createElement("div");l.classList.add("sidebar-projects-list-project-delete"),n.appendChild(l),s.classList.remove("sidebar-projects-add-inactive"),u.classList.remove("sidebar-projects-add-project-active")}j(),w()},j=()=>{g.textContent=`Projects: ${e.length}`},x=()=>{for(;b.firstChild;)b.removeChild(b.firstChild)},w=()=>{let t=document.querySelectorAll(".sidebar-projects-list-project"),e=document.querySelectorAll(".sidebar-projects-dot"),n=document.querySelectorAll(".sidebar-projects-list-project-title"),s=document.querySelectorAll(".sidebar-projects-list-project-delete");for(let o=0;o<t.length;o++)t[o].dataset.number=o,e[o].dataset.number=o,n[o].dataset.number=o,s[o].dataset.number=o};return{displayProjects:k,clearProjects:x,resetProject:()=>{const t=document.querySelectorAll(".sidebar-projects-list-project-dropdown");s.classList.remove("sidebar-projects-add-inactive"),u.classList.remove("sidebar-projects-add-project-active");for(let e=0;e<t.length;e++)t[e].classList.remove("sidebar-projects-list-project-dropdown-active"),overlay.classList.remove("overlay-active")},setAttributeProjects:w,updateProjectNumber:j}})();(()=>{const n=document.getElementById("sidebar-projects-list"),s=(document.getElementById("sidebar-projects-title"),document.getElementById("list-list")),l=document.getElementById("list-title");n.addEventListener("click",(n=>{let s=n.target,r=n.target.dataset.number;if(s==document.querySelectorAll(".sidebar-projects-list-project-dots")[r])document.querySelectorAll(".sidebar-projects-list-project-dropdown")[r].classList.add("sidebar-projects-list-project-dropdown-active"),overlay.classList.add("overlay-active");else if(s==document.querySelectorAll(".sidebar-projects-list-project-delete")[r]){for(let e=0;e<t.length;e++)t[e].project==document.querySelectorAll(".sidebar-projects-list-project-title")[r].textContent&&t.splice(e,1);document.querySelectorAll(".sidebar-projects-list-project-title")[r].textContent==l.textContent&&c(),e.splice(r,1),o(),u.displayProjects(),d.displayTasks()}else s!=document.querySelectorAll(".sidebar-projects-list-project")[r]&&s!=document.querySelectorAll(".sidebar-projects-list-project-title")[r]&&s!=document.querySelectorAll(".sidebar-projects-dot")[r]||l.textContent!=e[r]&&(p=e[r],a.textContent=`${p}`,i(),d.displayTasks());var p})),s.addEventListener("click",(e=>{let n=e.target,s=e.target.dataset.number;if(n==document.querySelectorAll(".done-dot")[s])for(let e=0;e<t.length;e++)document.querySelectorAll(".list-list-task-text-title")[s].textContent==t[e].title&&(1==t[e].done?t[e].done=!1:t[e].done=!0,o(),d.displayTasks());if(n==document.querySelectorAll(".list-list-task-dots")[s])document.querySelectorAll(".list-list-task-dropdown")[s].classList.add("list-list-task-dropdown-active"),overlay.classList.add("overlay-active");else if(n==document.querySelectorAll(".list-list-task-dropdown-project")[s])document.querySelectorAll(".list-list-task-dropdown-project")[s].classList.add("list-list-task-dropdown-project-inactive"),document.querySelectorAll(".list-list-task-dropdown-project-input")[s].classList.add("list-list-task-dropdown-project-input-active");else if(n==document.querySelectorAll(".list-list-task-dropdown-project-input-button")[s]){for(let e=0;e<t.length;e++)t[e].title==document.querySelectorAll(".list-list-task-text-title")[s].textContent&&("No Project"==document.querySelectorAll(".list-list-task-dropdown-project-input-input")[s].value?t[e].project=null:t[e].project=document.querySelectorAll(".list-list-task-dropdown-project-input-input")[s].value);o(),d.displayTasks()}else if(n==document.querySelectorAll(".list-list-task-dropdown-date")[s])document.querySelectorAll(".list-list-task-dropdown-date")[s].classList.add("list-list-task-dropdown-date-inactive"),document.querySelectorAll(".list-list-task-dropdown-date-input")[e.target.dataset.number].classList.add("list-list-task-dropdown-date-input-active");else if(n==document.querySelectorAll(".list-list-task-dropdown-date-input-button")[s]){for(let e=0;e<t.length;e++)t[e].title==document.querySelectorAll(".list-list-task-text-title")[s].textContent&&(t[e].date=document.querySelectorAll(".list-list-task-dropdown-date-input-date")[s].value);o(),d.displayTasks()}else if(n==document.querySelectorAll(".list-list-task-dropdown-delete")[s])if("Today"==l.textContent)for(let e=0;e<t.length;e++)t[e].title==document.querySelectorAll(".list-list-task-text-title")[s].textContent&&t[e].date==document.querySelectorAll(".list-list-task-dropdown-date-input-date")[s].value&&(t.splice(e,1),o(),d.displayTasks(),d.setAttributesTasks());else t.splice(e.target.dataset.number,1),o(),d.displayTasks(),d.setAttributesTasks()}))})();var m=n(379),b=n.n(m),g=n(426);b()(g.Z,{insert:"head",singleton:!1}),g.Z.locals,document.getElementById("overlay").addEventListener("click",(()=>{u.resetProject(),d.resetTask()}));const y=()=>{const t=document.getElementById("list-add-task-input"),e=document.getElementById("sidebar-projects-add-project-input");t.value="",e.value=""};document.getElementById("list-title").textContent||(c(),u.displayProjects())})()})();