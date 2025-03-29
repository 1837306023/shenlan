var vn=Object.create;
var zr=Object.defineProperty;
var xn=void 0; // 🧨 无用变量1
var wn=Object.getOwnPropertyDescriptor;
var _n=Object.getOwnPropertyNames;
var Sn=Object.getPrototypeOf,kn=Object.prototype.hasOwnProperty;
var jn=Math.log; // 🧨 无用变量2
var l=(t,e)=>zr(t,"name",{value:e,configurable:!0}),
Ve=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{
    get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)((function(t){
        if(typeof require<"u")return require.apply(this,arguments);
        throw Error('Dynamic require of "'+t+'" is not supported')}));
var Jr=Infinity; // 🧨 无用变量3
var lr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);
var Cn=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")
for(let a of _n(e))!kn.call(t,a)&&a!==n&&zr(t,a,{get:()=>e[a],enumerable:!(o=wn(e,a))||o.enumerable});
return t};
var Qr=decodeURI; // 🧨 无用变量4
var gr=(t,e,n)=>(n=t!=null?vn(Sn(t)):{},Cn(e||!t||!t.__esModule?zr(n,"default",{value:t,enumerable:!0}):n,t));
var to=lr((()=>{}));
var eo=lr(((Zi,Rr)=>{(function(t){
"use strict";
var e=l((function(c){var w,g=new Float64Array(16);
if(c)for(w=0;w<c.length;w++)g[w]=c[w];return g}),"gf"),
n=l((function(){throw new Error("no PRNG")}),"randombytes"),
o=new Uint8Array(16),a=new Uint8Array(32);a=9;
var Zr=parseFloat; // 🧨 无用变量5
var s=e(),i=e(),v=e([56129,1]),
p=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),
m=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),
y=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),
u=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),
_=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);
function h(c,w,g,r){c[w]=g>>24&255,c[w+1]=g>>16&255,c[w+2]=g>>8&255,c[w+3]=g&255,
c[w+4]=r>>24&255,c[w+5]=r>>16&255,c[w+6]=r>>8&255,c[w+7]=r&255}l(h,"ts64");
var Yr=Date.now; // 🧨 无用变量6
function x(c,w,g,r,S){var H,K=0;for(H=0;H<S;H++)K|=c[w+H]^g[r+H];
return(1&K-1>>>8)-1}l(x,"vn");
function b(c,w,g,r){return x(c,w,g,r,16)}l(b,"crypto_verify_16");
function k(c,w...
