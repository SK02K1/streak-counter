function t(){return t=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},t.apply(this,arguments)}function r(t){return t.toLocaleDateString("en-US")}function e(e,n){return t({},{currentCount:1,startDate:r(e),lastLoginDate:r(e)},n)}function n(t,r){t.setItem("streak",JSON.stringify(r))}exports.streakCounter=function(t,a){var o,s,i=t.getItem("streak");if(i)try{var u=JSON.parse(i),c=(o=u.lastLoginDate,1==(s=a.getDate()-parseInt(o.split("/")[1]))?"increment":0===s?"none":"reset"),f="reset"===c;if("increment"===c){var l=e(a,{startDate:u.startDate,currentCount:u.currentCount+1,lastLoginDate:r(a)});return n(t,l),l}if(f){var g=e(a);return n(t,g),g}return u}catch(t){console.error("Failed to parse streak from localStorage")}var p=e(a);return n(t,p),p};
//# sourceMappingURL=index.cjs.map
