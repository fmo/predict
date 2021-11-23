(()=>{"use strict";var e,a,t,n,o,r,s,i,c,u,p,l,d,m,f,v,h,g,y={499:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(81),o=t.n(n),r=t(645),s=t.n(r)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato);"]),s.push([e.id,'body{font-family:"Lato",sans-serif;color:#333;line-height:1.6;font-size:16px;margin:0}a{text-decoration:none;color:#333}.navbar{background-color:#047aed;color:#fff}.navbar .container{width:90%;margin:auto;overflow:hidden}.navbar a{text-decoration:none;color:#fff}.games{margin:30px auto;max-width:56%;font-size:38px}.game{display:flex;margin:0 0 40px 0;padding:10px;box-shadow:20px 10px 20px #a8a8a8}.teams-label{margin:0 0 0 30px;flex:1}.score{padding:0 0 10px 0}.home-team{flex:1}.away-team{flex:1}input[type=text]{font-size:24px;width:30px;padding:5px}.new-game-form input[type=text]{display:block;width:100%;padding:3px;margin:10px 0 10px 0;color:#333}.button{background-color:#47a3ff;color:#fff;padding:10px 15px;border:none;border-radius:10px}.button:hover{background-color:#1e83f7;color:#fff;cursor:pointer;border-radius:10px}@media(max-width: 1000px){.games{max-width:80%;align-content:center;font-size:18px}}@media(max-width: 1200px){.games{font-size:30px}}',""]);const i=s},645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t="",n=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),n&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=e(a),n&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(e,t,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);n&&s[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),a.push(p))}},a}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var a=[];function t(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function n(e,n){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],p=r[u]||0,l="".concat(u," ").concat(p);r[u]=p+1;var d=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)a[d].references++,a[d].updater(m);else{var f=o(m,n);n.byIndex=i,a.splice(i,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function o(e,a){var t=a.domAPI(a);return t.update(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap&&a.supports===e.supports&&a.layer===e.layer)return;t.update(e=a)}else t.remove()}}e.exports=function(e,o){var r=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=t(r[s]);a[i].references--}for(var c=n(e,o),u=0;u<r.length;u++){var p=t(r[u]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}r=c}}},569:e=>{var a={};e.exports=function(e,t){var n=function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var a=document.createElement("style");return e.setAttributes(a,e.attributes),e.insert(a,e.options),a}},565:(e,a,t)=>{e.exports=function(e){var a=t.nc;a&&e.setAttribute("nonce",a)}},795:e=>{e.exports=function(e){var a=e.insertStyleElement(e);return{update:function(t){!function(e,a,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),a.styleTagTransform(n,e,a.options)}(a,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)}}}},589:e=>{e.exports=function(e,a){if(a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}}},x={};function w(e){var a=x[e];if(void 0!==a)return a.exports;var t=x[e]={id:e,exports:{}};return y[e](t,t.exports,w),t.exports}w.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return w.d(a,{a}),a},w.d=(e,a)=>{for(var t in a)w.o(a,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},w.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),e=[{id:1,homeTeam:"Fenerbahce",awayTeam:"Galatasaray",homeTeamGuess:"",awayTeamGuess:""},{id:2,homeTeam:"Besiktas",awayTeam:"Trabzonspor",homeTeamGuess:"",awayTeamGuess:""},{id:3,homeTeam:"Arsenal",awayTeam:"Liverpool",homeTeamGuess:"",awayTeamGuess:""},{id:4,homeTeam:"Sevilla",awayTeam:"Real Madrid",homeTeamGuess:"",awayTeamGuess:""}],a=new(function(){function a(){}return a.prototype.getGameId=function(e){var a=e.split("-");return parseInt(a[1])},a.prototype.populateGames=function(){localStorage.getItem("games")||localStorage.setItem("games",JSON.stringify(e));var a=JSON.parse(localStorage.getItem("games")),t="";a.forEach((function(e){var a=null!==e.homeTeamGuess?e.homeTeamGuess:"",n=null!==e.awayTeamGuess?e.awayTeamGuess:"";t+='\n            <div id="game-'.concat(e.id,'" class="game">\n                <div class="teams-label">').concat(e.homeTeam," - ").concat(e.awayTeam,'</div>\n                <div class="score">\n                    <input type="text" value="').concat(a,'" class="home-team"> \n                    <span> - </span>\n                    <input type="text" value="').concat(n,'" class="away-team"> \n                </div>\n            </div>')})),document.querySelector(".games").innerHTML=t},a}()),t=function(){return t=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var o in a=arguments[t])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e},t.apply(this,arguments)},n=new(function(){function e(){}return e.prototype.updateGames=function(e,a,n){var o=[];JSON.parse(localStorage.getItem("games")).forEach((function(r){r.id===n&&(r=t(t({},r),"home-team"===a?{homeTeamGuess:e}:{awayTeamGuess:e})),o.push(r)})),localStorage.setItem("games",JSON.stringify(o))},e}()),o=w(379),r=w.n(o),s=w(795),i=w.n(s),c=w(569),u=w.n(c),p=w(565),l=w.n(p),d=w(216),m=w.n(d),f=w(589),v=w.n(f),h=w(499),(g={}).styleTagTransform=v(),g.setAttributes=l(),g.insert=u().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals,window.addEventListener("load",a.populateGames),document.querySelector(".games").addEventListener("focusout",(function(e){var t=a.getGameId(e.target.parentNode.parentNode.id),o=e.target.value;!function(e){return!(!/^[0-9]{1,2}$/.test(e)||e>15||e<0)}(o)?e.target.classList.add("is-invalid"):(e.target.classList.contains("home-team")&&n.updateGames(o,"home-team",t),e.target.classList.contains("away-team")&&n.updateGames(o,"away-team",t),a.populateGames())}))})();