!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(){for(var e=document.querySelectorAll(".gameboard__cell"),t=e[Math.round(e.length*Math.random())];!t;)t=e[Math.round(e.length*Math.random())];return t}function o(){for(var e=document.querySelector(".gameboard__cell_active"),t=r();e===t;)t=r();e.classList.remove("gameboard__cell_active"),t.classList.add("gameboard__cell_active")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=new(function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.board=t,this.winCounter=n,this.looseCounter=r}var t,n,u;return t=e,(n=[{key:"startGame",value:function(){r().classList.add("gameboard__cell_active"),setInterval(o,1e3)}},{key:"clearCounters",value:function(){this.winCounter.innerText=0,this.looseCounter.innerText=0}},{key:"createCounters",value:function(){var e=this;this.board.addEventListener("click",(function(t){t.target.classList.contains("gameboard__cell_active")?(e.winCounter.innerText=+e.winCounter.innerText+1,o()):(e.looseCounter.innerText=+e.looseCounter.innerText+1,o()),5==+e.looseCounter.innerText&&(e.clearCounters(),alert("Вы проиграли"))}))}}])&&a(t.prototype,n),u&&a(t,u),e}())(document.querySelector(".gameboard"),document.querySelector(".counter__number_win"),document.querySelector(".counter__number_loose"));u.createCounters(),u.startGame()}]);