(()=>{"use strict";var e={811:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),o=t.n(a),r=t(645),s=t.n(r)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato);"]),s.push([e.id,"/* * {\n    Use this section to reset all elements\n    Add border and padding sizes to the total\n    box-sizing: border-box;\n} */\n\n\n/* Main Elements */\n\nbody {\n    font-family: 'Lato', sans-serif;\n    color: #333;\n    line-height: 1.6;\n    font-size: 16px;\n    margin: 0;\n}\n\na {\n    text-decoration: none;\n    color: #333;\n}\n\n\n/* Navbar */\n.navbar {\n    background-color: #047aed;\n    color: #fff;\n}\n\n.navbar .container {\n    width: 90%;\n    margin: auto;\n    overflow: hidden;\n}\n\n.navbar a {\n    text-decoration: none;\n    color: #fff;\n}\n\n\n/* Game Section */\n\n.games {\n    margin: 30px auto;\n    max-width: 56%;\n    font-size: 38px;\n}\n\n.game {\n    display: flex;\n    margin: 0 0 40px 0;\n    padding: 10px;\n    box-shadow: 20px 10px 20px rgb(168 168 168)\n}\n\n.teams-label {\n    margin: 0 0 0 30px;\n    flex: 1;\n}\n\n.score {\n    padding: 0 0 10px 0;\n}\n\n.home-team {\n    flex: 1;\n}\n\n.away-team {\n    flex: 1;\n}\n\n/* Form elements */\n\ninput[type='text'] { \n    font-size: 24px; \n    width: 30px; \n    padding: 5px;\n}\n\n.new-game-form input[type='text'] {\n    display: block;\n    width: 100%;\n    padding: 3px;\n    margin: 10px 0 10px 0;\n    color: #333;\n}\n\n.button { \n    background-color: #47a3ff;\n    color: #fff;\n    padding: 10px 15px;\n    border: none;\n    border-radius: 10px;\n}\n\n.button:hover {\n    background-color:rgb(30, 131, 247);\n    color: #fff;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n@media(max-width: 1000px) {\n    .games {\n        max-width: 80%;\n        align-content: center;\n        font-size: 18px;\n    }\n}\n\n@media(max-width: 1200px) {\n    .games {\n        font-size: 30px;\n    }\n}\n",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);a&&s[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],l=a.base?c[0]+a.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var m=t(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,a);a.byIndex=i,n.splice(i,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=t(r[s]);n[i].references--}for(var c=a(e,o),l=0;l<r.length;l++){var u=t(r[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{let e=[{id:1,homeTeam:"Fenerbahce",awayTeam:"Galatasaray",homeTeamGuess:"",awayTeamGuess:""},{id:2,homeTeam:"Besiktas",awayTeam:"Trabzonspor",homeTeamGuess:"",awayTeamGuess:""},{id:3,homeTeam:"Arsenal",awayTeam:"Liverpool",homeTeamGuess:"",awayTeamGuess:""},{id:3,homeTeam:"Sevilla",awayTeam:"Real Madrid",homeTeamGuess:"",awayTeamGuess:""}];const n=new class{constructor(){}getGameId(e){const n=e.split("-");return parseInt(n[1])}createButton(e,n){let t=document.createElement("input");t.type="button",t.value=e,t.className=n;const a=document.getElementById("add-new-game-parent"),o=document.getElementById("add-game");a.insertBefore(t,o)}populateGames(e){let n="";return e.forEach((function(e){let t=null!==e.homeTeamGuess?e.homeTeamGuess:"",a=null!==e.awayTeamGuess?e.awayTeamGuess:"";n+=`\n            <div id="game-${e.id}" class="game">\n                <div class="teams-label">${e.homeTeam} - ${e.awayTeam}</div>\n                <div class="score">\n                    <input type="text" value="${t}" class="home-team"> \n                    <span> - </span>\n                    <input type="text" value="${a}" class="away-team"> \n                </div>\n            </div>`})),n}};new class{constructor(){}addGame(n,t,a="games"){let o=JSON.parse(localStorage.getItem(a)),r={};r.id=o.length+1,r.homeTeam=n,r.awayTeam=t,r.homeTeamGuess="",r.awayTeamGuess="",e.push(r),localStorage.setItem(a,JSON.stringify(e))}};var a=t(379),o=t.n(a),r=t(795),s=t.n(r),i=t(569),c=t.n(i),l=t(565),u=t.n(l),d=t(216),m=t.n(d),p=t(589),f=t.n(p),g=t(811),h={};function v(n,t,a){let o=[];return e.forEach((function(e){e.id===a&&(e="home-team"===t?{...e,homeTeamGuess:n}:{...e,awayTeamGuess:n}),o.push(e)})),o}function y(){localStorage.getItem("games")?e=JSON.parse(localStorage.getItem("games")):localStorage.setItem("games",JSON.stringify(e));let t=n.populateGames(e);document.querySelector(".games").innerHTML=t}h.styleTagTransform=f(),h.setAttributes=u(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=m(),o()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals,window.addEventListener("load",y),document.querySelector(".games").addEventListener("focusout",(function(e){const t=n.getGameId(e.target.parentNode.parentNode.id),a=e.target.value;if(!function(e){return!(e<0)&&!(!/^[0-9]{1,2}$/.test(e)||e>15)}(a))return void e.target.classList.add("is-invalid");let o=[];e.target.classList.contains("home-team")&&(o=v(a,"home-team",t)),e.target.classList.contains("away-team")&&(o=v(a,"away-team",t)),localStorage.setItem("games",JSON.stringify(o)),y()}))})()})();