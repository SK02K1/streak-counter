!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).streakCounter={})}(this,function(t){function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}function r(t){return t.toLocaleDateString("en-US")}function n(t,n){return e({},{currentCount:1,startDate:r(t),lastLoginDate:r(t)},n)}function a(t,e){t.setItem("streak",JSON.stringify(e))}t.streakCounter=function(t,e){var o,i,s=t.getItem("streak");if(s)try{var u=JSON.parse(s),f=(o=u.lastLoginDate,1==(i=e.getDate()-parseInt(o.split("/")[1]))?"increment":0===i?"none":"reset"),c="reset"===f;if("increment"===f){var l=n(e,{startDate:u.startDate,currentCount:u.currentCount+1,lastLoginDate:r(e)});return a(t,l),l}if(c){var p=n(e);return a(t,p),p}return u}catch(t){console.error("Failed to parse streak from localStorage")}var g=n(e);return a(t,g),g}});
//# sourceMappingURL=index.umd.js.map
