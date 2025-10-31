var jo=Object.defineProperty;var Zo=(r,t,e)=>t in r?jo(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var dn=(r,t,e)=>Zo(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="160",Pn={ROTATE:0,DOLLY:1,PAN:2},Dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ko=0,Ss=1,$o=2,ro=1,so=2,je=3,un=0,Me=1,Ze=2,on=0,Jn=1,ys=2,Ms=3,Es=4,Jo=5,xn=100,Qo=101,tl=102,bs=103,Ts=104,el=200,nl=201,il=202,rl=203,Zr=204,Kr=205,sl=206,al=207,ol=208,ll=209,cl=210,ul=211,hl=212,fl=213,dl=214,pl=0,ml=1,_l=2,Qi=3,gl=4,vl=5,xl=6,Sl=7,ao=0,yl=1,Ml=2,ln=0,El=1,bl=2,Tl=3,wl=4,Al=5,Rl=6,oo=300,ti=301,ei=302,$r=303,Jr=304,ar=306,Qr=1e3,Be=1001,ts=1002,xe=1003,ws=1004,_r=1005,Le=1006,Cl=1007,gi=1008,cn=1009,Ll=1010,Pl=1011,os=1012,lo=1013,sn=1014,an=1015,vi=1016,co=1017,uo=1018,yn=1020,Dl=1021,ze=1023,Il=1024,Ul=1025,Mn=1026,ni=1027,Nl=1028,ho=1029,Ol=1030,fo=1031,po=1033,gr=33776,vr=33777,xr=33778,Sr=33779,As=35840,Rs=35841,Cs=35842,Ls=35843,mo=36196,Ps=37492,Ds=37496,Is=37808,Us=37809,Ns=37810,Os=37811,Fs=37812,Bs=37813,zs=37814,ks=37815,Gs=37816,Hs=37817,Vs=37818,Ws=37819,Xs=37820,qs=37821,yr=36492,Ys=36494,js=36495,Fl=36283,Zs=36284,Ks=36285,$s=36286,_o=3e3,En=3001,Bl=3200,zl=3201,go=0,kl=1,De="",fe="srgb",$e="srgb-linear",ls="display-p3",or="display-p3-linear",tr="linear",$t="srgb",er="rec709",nr="p3",In=7680,Js=519,Gl=512,Hl=513,Vl=514,vo=515,Wl=516,Xl=517,ql=518,Yl=519,Qs=35044,ta="300 es",es=1035,Ke=2e3,ir=2001;class An{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$i=Math.PI/180,ns=180/Math.PI;function xi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[r&255]+me[r>>8&255]+me[r>>16&255]+me[r>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function Se(r,t,e){return Math.max(t,Math.min(e,r))}function jl(r,t){return(r%t+t)%t}function Mr(r,t,e){return(1-e)*r+e*t}function ea(r){return(r&r-1)===0&&r!==0}function is(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function oi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ye(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Zl={DEG2RAD:$i};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,s,o,a,l,u){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,u)}set(t,e,n,i,s,o,a,l,u){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],d=n[4],p=n[7],m=n[2],f=n[5],g=n[8],_=i[0],h=i[3],c=i[6],y=i[1],S=i[4],T=i[7],A=i[2],L=i[5],w=i[8];return s[0]=o*_+a*y+l*A,s[3]=o*h+a*S+l*L,s[6]=o*c+a*T+l*w,s[1]=u*_+d*y+p*A,s[4]=u*h+d*S+p*L,s[7]=u*c+d*T+p*w,s[2]=m*_+f*y+g*A,s[5]=m*h+f*S+g*L,s[8]=m*c+f*T+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8];return e*o*d-e*a*u-n*s*d+n*a*l+i*s*u-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8],p=d*o-a*u,m=a*l-d*s,f=u*s-o*l,g=e*p+n*m+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=p*_,t[1]=(i*u-d*n)*_,t[2]=(a*n-i*o)*_,t[3]=m*_,t[4]=(d*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-u*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+t,-i*u,i*l,-i*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Wt;function xo(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kl(){const r=rr("canvas");return r.style.display="block",r}const na={};function _i(r){r in na||(na[r]=!0,console.warn(r))}const ia=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ra=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mi={[$e]:{transfer:tr,primaries:er,toReference:r=>r,fromReference:r=>r},[fe]:{transfer:$t,primaries:er,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[or]:{transfer:tr,primaries:nr,toReference:r=>r.applyMatrix3(ra),fromReference:r=>r.applyMatrix3(ia)},[ls]:{transfer:$t,primaries:nr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ra),fromReference:r=>r.applyMatrix3(ia).convertLinearToSRGB()}},$l=new Set([$e,or]),Kt={enabled:!0,_workingColorSpace:$e,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$l.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Mi[t].toReference,i=Mi[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Mi[r].primaries},getTransfer:function(r){return r===De?tr:Mi[r].transfer}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Un;class So{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=rr("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jl=0;class yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=xi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tr(i[o].image)):s.push(Tr(i[o]))}else s=Tr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Tr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?So.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ql=0;class we extends An{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Be,i=Be,s=Le,o=gi,a=ze,l=cn,u=we.DEFAULT_ANISOTROPY,d=De){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=xi(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===En?fe:De),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Be:t.x=t.x<0?0:1;break;case ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Be:t.y=t.y<0?0:1;break;case ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?En:_o}set encoding(t){_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===En?fe:De}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=oo;we.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,u=l[0],d=l[4],p=l[8],m=l[1],f=l[5],g=l[9],_=l[2],h=l[6],c=l[10];if(Math.abs(d-m)<.01&&Math.abs(p-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+_)<.1&&Math.abs(g+h)<.1&&Math.abs(u+f+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(u+1)/2,T=(f+1)/2,A=(c+1)/2,L=(d+m)/4,w=(p+_)/4,H=(g+h)/4;return S>T&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=L/n,s=w/n):T>A?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=L/i,s=H/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=H/s),this.set(n,i,s,e),this}let y=Math.sqrt((h-g)*(h-g)+(p-_)*(p-_)+(m-d)*(m-d));return Math.abs(y)<.001&&(y=1),this.x=(h-g)/y,this.y=(p-_)/y,this.z=(m-d)/y,this.w=Math.acos((u+f+c-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tc extends An{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(_i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===En?fe:De),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends tc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mo extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],u=n[i+1],d=n[i+2],p=n[i+3];const m=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=d,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==m||u!==f||d!==g){let h=1-a;const c=l*m+u*f+d*g+p*_,y=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const A=Math.sqrt(S),L=Math.atan2(A,c*y);h=Math.sin(h*L)/A,a=Math.sin(a*L)/A}const T=a*y;if(l=l*h+m*T,u=u*h+f*T,d=d*h+g*T,p=p*h+_*T,h===1-a){const A=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=A,u*=A,d*=A,p*=A}}t[e]=l,t[e+1]=u,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],u=n[i+2],d=n[i+3],p=s[o],m=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+d*p+l*f-u*m,t[e+1]=l*g+d*m+u*p-a*f,t[e+2]=u*g+d*f+a*m-l*p,t[e+3]=d*g-a*p-l*m-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(n/2),d=a(i/2),p=a(s/2),m=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=m*d*p+u*f*g,this._y=u*f*p-m*d*g,this._z=u*d*g+m*f*p,this._w=u*d*p-m*f*g;break;case"YXZ":this._x=m*d*p+u*f*g,this._y=u*f*p-m*d*g,this._z=u*d*g-m*f*p,this._w=u*d*p+m*f*g;break;case"ZXY":this._x=m*d*p-u*f*g,this._y=u*f*p+m*d*g,this._z=u*d*g+m*f*p,this._w=u*d*p-m*f*g;break;case"ZYX":this._x=m*d*p-u*f*g,this._y=u*f*p+m*d*g,this._z=u*d*g-m*f*p,this._w=u*d*p+m*f*g;break;case"YZX":this._x=m*d*p+u*f*g,this._y=u*f*p+m*d*g,this._z=u*d*g-m*f*p,this._w=u*d*p-m*f*g;break;case"XZY":this._x=m*d*p-u*f*g,this._y=u*f*p-m*d*g,this._z=u*d*g+m*f*p,this._w=u*d*p+m*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],d=e[6],p=e[10],m=n+a+p;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-u)*f,this._z=(o-i)*f}else if(n>a&&n>p){const f=2*Math.sqrt(1+n-a-p);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+u)/f}else if(a>p){const f=2*Math.sqrt(1+a-n-p);this._w=(s-u)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+p-n-a);this._w=(o-i)/f,this._x=(s+u)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,d=e._w;return this._x=n*d+o*a+i*u-s*l,this._y=i*d+o*l+s*a-n*u,this._z=s*d+o*u+n*l-i*a,this._w=o*d-n*a-i*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),p=Math.sin((1-e)*d)/u,m=Math.sin(e*d)/u;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*i-a*n),d=2*(a*e-s*i),p=2*(s*n-o*e);return this.x=e+l*u+o*p-a*d,this.y=n+l*d+a*u-s*p,this.z=i+l*p+s*d-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new K,sa=new Tn;class Rn{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ue.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ue.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ue.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ue):Ue.fromBufferAttribute(s,o),Ue.applyMatrix4(t.matrixWorld),this.expandByPoint(Ue);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ei.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ei.copy(n.boundingBox)),Ei.applyMatrix4(t.matrixWorld),this.union(Ei)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ue),Ue.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(li),bi.subVectors(this.max,li),Nn.subVectors(t.a,li),On.subVectors(t.b,li),Fn.subVectors(t.c,li),Je.subVectors(On,Nn),Qe.subVectors(Fn,On),pn.subVectors(Nn,Fn);let e=[0,-Je.z,Je.y,0,-Qe.z,Qe.y,0,-pn.z,pn.y,Je.z,0,-Je.x,Qe.z,0,-Qe.x,pn.z,0,-pn.x,-Je.y,Je.x,0,-Qe.y,Qe.x,0,-pn.y,pn.x,0];return!Ar(e,Nn,On,Fn,bi)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,Nn,On,Fn,bi))?!1:(Ti.crossVectors(Je,Qe),e=[Ti.x,Ti.y,Ti.z],Ar(e,Nn,On,Fn,bi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ue).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ue).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ve[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ve[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ve[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ve[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ve[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ve[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ve[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ve[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ve),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ve=[new K,new K,new K,new K,new K,new K,new K,new K],Ue=new K,Ei=new Rn,Nn=new K,On=new K,Fn=new K,Je=new K,Qe=new K,pn=new K,li=new K,bi=new K,Ti=new K,mn=new K;function Ar(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mn.fromArray(r,s);const a=i.x*Math.abs(mn.x)+i.y*Math.abs(mn.y)+i.z*Math.abs(mn.z),l=t.dot(mn),u=e.dot(mn),d=n.dot(mn);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const nc=new Rn,ci=new K,Rr=new K;class Cn{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ci.subVectors(t,this.center);const e=ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ci,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ci.copy(t.center).add(Rr)),this.expandByPoint(ci.copy(t.center).sub(Rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new K,Cr=new K,wi=new K,tn=new K,Lr=new K,Ai=new K,Pr=new K;class lr{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Cr.copy(t).add(e).multiplyScalar(.5),wi.copy(e).sub(t).normalize(),tn.copy(this.origin).sub(Cr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(wi),a=tn.dot(this.direction),l=-tn.dot(wi),u=tn.lengthSq(),d=Math.abs(1-o*o);let p,m,f,g;if(d>0)if(p=o*l-a,m=o*a-l,g=s*d,p>=0)if(m>=-g)if(m<=g){const _=1/d;p*=_,m*=_,f=p*(p+o*m+2*a)+m*(o*p+m+2*l)+u}else m=s,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*l)+u;else m=-s,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*l)+u;else m<=-g?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+m*(m+2*l)+u):m<=g?(p=0,m=Math.min(Math.max(-s,-l),s),f=m*(m+2*l)+u):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+m*(m+2*l)+u);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),f=-p*p+m*(m+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Cr).addScaledVector(wi,m),f}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),i=We.dot(We)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(t.min.x-m.x)*u,i=(t.max.x-m.x)*u):(n=(t.max.x-m.x)*u,i=(t.min.x-m.x)*u),d>=0?(s=(t.min.y-m.y)*d,o=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,o=(t.min.y-m.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(a=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,i,s){Lr.subVectors(e,t),Ai.subVectors(n,t),Pr.crossVectors(Lr,Ai);let o=this.direction.dot(Pr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tn.subVectors(this.origin,t);const l=a*this.direction.dot(Ai.crossVectors(tn,Ai));if(l<0)return null;const u=a*this.direction.dot(Lr.cross(tn));if(u<0||l+u>o)return null;const d=-a*tn.dot(Pr);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,i,s,o,a,l,u,d,p,m,f,g,_,h){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,u,d,p,m,f,g,_,h)}set(t,e,n,i,s,o,a,l,u,d,p,m,f,g,_,h){const c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=i,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=p,c[14]=m,c[3]=f,c[7]=g,c[11]=_,c[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bn.setFromMatrixColumn(t,0).length(),s=1/Bn.setFromMatrixColumn(t,1).length(),o=1/Bn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const m=o*d,f=o*p,g=a*d,_=a*p;e[0]=l*d,e[4]=-l*p,e[8]=u,e[1]=f+g*u,e[5]=m-_*u,e[9]=-a*l,e[2]=_-m*u,e[6]=g+f*u,e[10]=o*l}else if(t.order==="YXZ"){const m=l*d,f=l*p,g=u*d,_=u*p;e[0]=m+_*a,e[4]=g*a-f,e[8]=o*u,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=f*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*d,f=l*p,g=u*d,_=u*p;e[0]=m-_*a,e[4]=-o*p,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*d,e[9]=_-m*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*d,f=o*p,g=a*d,_=a*p;e[0]=l*d,e[4]=g*u-f,e[8]=m*u+_,e[1]=l*p,e[5]=_*u+m,e[9]=f*u-g,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,f=o*u,g=a*l,_=a*u;e[0]=l*d,e[4]=_-m*p,e[8]=g*p+f,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-u*d,e[6]=f*p+g,e[10]=m-_*p}else if(t.order==="XZY"){const m=o*l,f=o*u,g=a*l,_=a*u;e[0]=l*d,e[4]=-p,e[8]=u*d,e[1]=m*p+_,e[5]=o*d,e[9]=f*p-g,e[2]=g*p-f,e[6]=a*d,e[10]=_*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ic,t,rc)}lookAt(t,e,n){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),en.crossVectors(n,be),en.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),en.crossVectors(n,be)),en.normalize(),Ri.crossVectors(be,en),i[0]=en.x,i[4]=Ri.x,i[8]=be.x,i[1]=en.y,i[5]=Ri.y,i[9]=be.y,i[2]=en.z,i[6]=Ri.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],d=n[1],p=n[5],m=n[9],f=n[13],g=n[2],_=n[6],h=n[10],c=n[14],y=n[3],S=n[7],T=n[11],A=n[15],L=i[0],w=i[4],H=i[8],b=i[12],R=i[1],Y=i[5],C=i[9],k=i[13],v=i[2],N=i[6],Z=i[10],V=i[14],rt=i[3],W=i[7],nt=i[11],z=i[15];return s[0]=o*L+a*R+l*v+u*rt,s[4]=o*w+a*Y+l*N+u*W,s[8]=o*H+a*C+l*Z+u*nt,s[12]=o*b+a*k+l*V+u*z,s[1]=d*L+p*R+m*v+f*rt,s[5]=d*w+p*Y+m*N+f*W,s[9]=d*H+p*C+m*Z+f*nt,s[13]=d*b+p*k+m*V+f*z,s[2]=g*L+_*R+h*v+c*rt,s[6]=g*w+_*Y+h*N+c*W,s[10]=g*H+_*C+h*Z+c*nt,s[14]=g*b+_*k+h*V+c*z,s[3]=y*L+S*R+T*v+A*rt,s[7]=y*w+S*Y+T*N+A*W,s[11]=y*H+S*C+T*Z+A*nt,s[15]=y*b+S*k+T*V+A*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],d=t[2],p=t[6],m=t[10],f=t[14],g=t[3],_=t[7],h=t[11],c=t[15];return g*(+s*l*p-i*u*p-s*a*m+n*u*m+i*a*f-n*l*f)+_*(+e*l*f-e*u*m+s*o*m-i*o*f+i*u*d-s*l*d)+h*(+e*u*p-e*a*f-s*o*p+n*o*f+s*a*d-n*u*d)+c*(-i*a*d-e*l*p+e*a*m+i*o*p-n*o*m+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],d=t[8],p=t[9],m=t[10],f=t[11],g=t[12],_=t[13],h=t[14],c=t[15],y=p*h*u-_*m*u+_*l*f-a*h*f-p*l*c+a*m*c,S=g*m*u-d*h*u-g*l*f+o*h*f+d*l*c-o*m*c,T=d*_*u-g*p*u+g*a*f-o*_*f-d*a*c+o*p*c,A=g*p*l-d*_*l-g*a*m+o*_*m+d*a*h-o*p*h,L=e*y+n*S+i*T+s*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return t[0]=y*w,t[1]=(_*m*s-p*h*s-_*i*f+n*h*f+p*i*c-n*m*c)*w,t[2]=(a*h*s-_*l*s+_*i*u-n*h*u-a*i*c+n*l*c)*w,t[3]=(p*l*s-a*m*s-p*i*u+n*m*u+a*i*f-n*l*f)*w,t[4]=S*w,t[5]=(d*h*s-g*m*s+g*i*f-e*h*f-d*i*c+e*m*c)*w,t[6]=(g*l*s-o*h*s-g*i*u+e*h*u+o*i*c-e*l*c)*w,t[7]=(o*m*s-d*l*s+d*i*u-e*m*u-o*i*f+e*l*f)*w,t[8]=T*w,t[9]=(g*p*s-d*_*s-g*n*f+e*_*f+d*n*c-e*p*c)*w,t[10]=(o*_*s-g*a*s+g*n*u-e*_*u-o*n*c+e*a*c)*w,t[11]=(d*a*s-o*p*s-d*n*u+e*p*u+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(d*_*i-g*p*i+g*n*m-e*_*m-d*n*h+e*p*h)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*h-e*a*h)*w,t[15]=(o*p*i-d*a*i+d*n*l-e*p*l-o*n*m+e*a*m)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,u=s*o,d=s*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,d*a+n,d*l-i*o,0,u*l-i*a,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,d=o+o,p=a+a,m=s*u,f=s*d,g=s*p,_=o*d,h=o*p,c=a*p,y=l*u,S=l*d,T=l*p,A=n.x,L=n.y,w=n.z;return i[0]=(1-(_+c))*A,i[1]=(f+T)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(f-T)*L,i[5]=(1-(m+c))*L,i[6]=(h+y)*L,i[7]=0,i[8]=(g+S)*w,i[9]=(h-y)*w,i[10]=(1-(m+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Bn.set(i[0],i[1],i[2]).length();const o=Bn.set(i[4],i[5],i[6]).length(),a=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ne.copy(this);const u=1/s,d=1/o,p=1/a;return Ne.elements[0]*=u,Ne.elements[1]*=u,Ne.elements[2]*=u,Ne.elements[4]*=d,Ne.elements[5]*=d,Ne.elements[6]*=d,Ne.elements[8]*=p,Ne.elements[9]*=p,Ne.elements[10]*=p,e.setFromRotationMatrix(Ne),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ke){const l=this.elements,u=2*s/(e-t),d=2*s/(n-i),p=(e+t)/(e-t),m=(n+i)/(n-i);let f,g;if(a===Ke)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ir)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ke){const l=this.elements,u=1/(e-t),d=1/(n-i),p=1/(o-s),m=(e+t)*u,f=(n+i)*d;let g,_;if(a===Ke)g=(o+s)*p,_=-2*p;else if(a===ir)g=s*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bn=new K,Ne=new Jt,ic=new K(0,0,0),rc=new K(1,1,1),en=new K,Ri=new K,be=new K,aa=new Jt,oa=new Tn;class cr{constructor(t=0,e=0,n=0,i=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],u=i[5],d=i[9],p=i[2],m=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oa.setFromEuler(this),this.setFromQuaternion(oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sc=0;const la=new K,zn=new Tn,Xe=new Jt,Ci=new K,ui=new K,ac=new K,oc=new Tn,ca=new K(1,0,0),ua=new K(0,1,0),ha=new K(0,0,1),lc={type:"added"},cc={type:"removed"};class ae extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new K,e=new cr,n=new Tn,i=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Wt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(ua,t)}rotateZ(t){return this.rotateOnAxis(ha,t)}translateOnAxis(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(ua,t)}translateZ(t){return this.translateOnAxis(ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ci.copy(t):Ci.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(ui,Ci,this.up):Xe.lookAt(Ci,ui,this.up),this.quaternion.setFromRotationMatrix(Xe),i&&(Xe.extractRotation(i.matrixWorld),zn.setFromRotationMatrix(Xe),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,t,ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ui,oc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),d=o(t.images),p=o(t.shapes),m=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ae.DEFAULT_UP=new K(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new K,qe=new K,Dr=new K,Ye=new K,kn=new K,Gn=new K,fa=new K,Ir=new K,Ur=new K,Nr=new K;let Li=!1;class Fe{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Oe.subVectors(i,e),qe.subVectors(n,e),Dr.subVectors(t,e);const o=Oe.dot(Oe),a=Oe.dot(qe),l=Oe.dot(Dr),u=qe.dot(qe),d=qe.dot(Dr),p=o*u-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,f=(u*l-a*d)*m,g=(o*d-a*l)*m;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ye)===null?!1:Ye.x>=0&&Ye.y>=0&&Ye.x+Ye.y<=1}static getUV(t,e,n,i,s,o,a,l){return Li===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Li=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ye)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ye.x),l.addScaledVector(o,Ye.y),l.addScaledVector(a,Ye.z),l)}static isFrontFacing(t,e,n,i){return Oe.subVectors(n,e),qe.subVectors(t,e),Oe.cross(qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Oe.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Li===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Li=!0),Fe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Fe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Fe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;kn.subVectors(i,n),Gn.subVectors(s,n),Ir.subVectors(t,n);const l=kn.dot(Ir),u=Gn.dot(Ir);if(l<=0&&u<=0)return e.copy(n);Ur.subVectors(t,i);const d=kn.dot(Ur),p=Gn.dot(Ur);if(d>=0&&p<=d)return e.copy(i);const m=l*p-d*u;if(m<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(kn,o);Nr.subVectors(t,s);const f=kn.dot(Nr),g=Gn.dot(Nr);if(g>=0&&f<=g)return e.copy(s);const _=f*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(Gn,a);const h=d*g-f*p;if(h<=0&&p-d>=0&&f-g>=0)return fa.subVectors(s,i),a=(p-d)/(p-d+(f-g)),e.copy(i).addScaledVector(fa,a);const c=1/(h+_+m);return o=_*c,a=m*c,e.copy(n).addScaledVector(kn,o).addScaledVector(Gn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Or(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=jl(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Or(o,s,t+1/3),this.g=Or(o,s,t),this.b=Or(o,s,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const n=bo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return Kt.fromWorkingColorSpace(_e.copy(this),t),Math.round(Se(_e.r*255,0,255))*65536+Math.round(Se(_e.g*255,0,255))*256+Math.round(Se(_e.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,i=_e.g,s=_e.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=d<=.5?p/(o+a):p/(2-o-a),o){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return t.h=l,t.s=u,t.l=d,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=fe){Kt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,i=_e.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(nn),this.setHSL(nn.h+t,nn.s+e,nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Pi);const n=Mr(nn.h,Pi.h,e),i=Mr(nn.s,Pi.s,e),s=Mr(nn.l,Pi.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Xt;Xt.NAMES=bo;let uc=0;class Ln extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Jn,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Kr,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Js,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Js&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==In&&(n.stencilFail=this.stencilFail),this.stencilZFail!==In&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==In&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class To extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new K,Di=new Ft;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Di.fromBufferAttribute(this,e),Di.applyMatrix3(t),this.setXY(e,Di.x,Di.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qs&&(t.usage=this.usage),t}}class wo extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ao extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hc=0;const Ce=new Jt,Fr=new ae,Hn=new K,Te=new Rn,hi=new Rn,ue=new K;class Ae extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xo(t)?Ao:wo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ce.makeRotationFromQuaternion(t),this.applyMatrix4(Ce),this}rotateX(t){return Ce.makeRotationX(t),this.applyMatrix4(Ce),this}rotateY(t){return Ce.makeRotationY(t),this.applyMatrix4(Ce),this}rotateZ(t){return Ce.makeRotationZ(t),this.applyMatrix4(Ce),this}translate(t,e,n){return Ce.makeTranslation(t,e,n),this.applyMatrix4(Ce),this}scale(t,e,n){return Ce.makeScale(t,e,n),this.applyMatrix4(Ce),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Te.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(Te.min,hi.min),Te.expandByPoint(ue),ue.addVectors(Te.max,hi.max),Te.expandByPoint(ue)):(Te.expandByPoint(hi.min),Te.expandByPoint(hi.max))}Te.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ue));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)ue.fromBufferAttribute(a,u),l&&(Hn.fromBufferAttribute(t,u),ue.add(Hn)),i=Math.max(i,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let R=0;R<a;R++)u[R]=new K,d[R]=new K;const p=new K,m=new K,f=new K,g=new Ft,_=new Ft,h=new Ft,c=new K,y=new K;function S(R,Y,C){p.fromArray(i,R*3),m.fromArray(i,Y*3),f.fromArray(i,C*3),g.fromArray(o,R*2),_.fromArray(o,Y*2),h.fromArray(o,C*2),m.sub(p),f.sub(p),_.sub(g),h.sub(g);const k=1/(_.x*h.y-h.x*_.y);isFinite(k)&&(c.copy(m).multiplyScalar(h.y).addScaledVector(f,-_.y).multiplyScalar(k),y.copy(f).multiplyScalar(_.x).addScaledVector(m,-h.x).multiplyScalar(k),u[R].add(c),u[Y].add(c),u[C].add(c),d[R].add(y),d[Y].add(y),d[C].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let R=0,Y=T.length;R<Y;++R){const C=T[R],k=C.start,v=C.count;for(let N=k,Z=k+v;N<Z;N+=3)S(n[N+0],n[N+1],n[N+2])}const A=new K,L=new K,w=new K,H=new K;function b(R){w.fromArray(s,R*3),H.copy(w);const Y=u[R];A.copy(Y),A.sub(w.multiplyScalar(w.dot(Y))).normalize(),L.crossVectors(H,Y);const k=L.dot(d[R])<0?-1:1;l[R*4]=A.x,l[R*4+1]=A.y,l[R*4+2]=A.z,l[R*4+3]=k}for(let R=0,Y=T.length;R<Y;++R){const C=T[R],k=C.start,v=C.count;for(let N=k,Z=k+v;N<Z;N+=3)b(n[N+0]),b(n[N+1]),b(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,f=n.count;m<f;m++)n.setXYZ(m,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,u=new K,d=new K,p=new K;if(t)for(let m=0,f=t.count;m<f;m+=3){const g=t.getX(m+0),_=t.getX(m+1),h=t.getX(m+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,h),d.subVectors(o,s),p.subVectors(i,s),d.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,h),a.add(d),l.add(d),u.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let m=0,f=e.count;m<f;m+=3)i.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),d.subVectors(o,s),p.subVectors(i,s),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,l){const u=a.array,d=a.itemSize,p=a.normalized,m=new u.constructor(l.length*d);let f=0,g=0;for(let _=0,h=l.length;_<h;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let c=0;c<d;c++)m[g++]=u[f++]}return new Ie(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=t(l,n);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,p=u.length;d<p;d++){const m=u[d],f=t(m,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,m=u.length;p<m;p++){const f=u[p];d.push(f.toJSON(t.data))}d.length>0&&(i[l]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const u in i){const d=i[u];this.setAttribute(u,d.clone(e))}const s=t.morphAttributes;for(const u in s){const d=[],p=s[u];for(let m=0,f=p.length;m<f;m++)d.push(p[m].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,d=o.length;u<d;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new Jt,_n=new lr,Ii=new Cn,pa=new K,Vn=new K,Wn=new K,Xn=new K,Br=new K,Ui=new K,Ni=new Ft,Oi=new Ft,Fi=new Ft,ma=new K,_a=new K,ga=new K,Bi=new K,zi=new K;class ge extends ae{constructor(t=new Ae,e=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ui.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],p=s[l];d!==0&&(Br.fromBufferAttribute(p,t),o?Ui.addScaledVector(Br,d):Ui.addScaledVector(Br.sub(e),d))}e.add(Ui)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(s),_n.copy(t.ray).recast(t.near),!(Ii.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Ii,pa)===null||_n.origin.distanceToSquared(pa)>(t.far-t.near)**2))&&(da.copy(s).invert(),_n.copy(t.ray).applyMatrix4(da),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_n)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,m=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const h=m[g],c=o[h.materialIndex],y=Math.max(h.start,f.start),S=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let T=y,A=S;T<A;T+=3){const L=a.getX(T),w=a.getX(T+1),H=a.getX(T+2);i=ki(this,c,t,n,u,d,p,L,w,H),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=h.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let h=g,c=_;h<c;h+=3){const y=a.getX(h),S=a.getX(h+1),T=a.getX(h+2);i=ki(this,o,t,n,u,d,p,y,S,T),i&&(i.faceIndex=Math.floor(h/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){const h=m[g],c=o[h.materialIndex],y=Math.max(h.start,f.start),S=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let T=y,A=S;T<A;T+=3){const L=T,w=T+1,H=T+2;i=ki(this,c,t,n,u,d,p,L,w,H),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=h.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let h=g,c=_;h<c;h+=3){const y=h,S=h+1,T=h+2;i=ki(this,o,t,n,u,d,p,y,S,T),i&&(i.faceIndex=Math.floor(h/3),e.push(i))}}}}function fc(r,t,e,n,i,s,o,a){let l;if(t.side===Me?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===un,a),l===null)return null;zi.copy(a),zi.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(zi);return u<e.near||u>e.far?null:{distance:u,point:zi.clone(),object:r}}function ki(r,t,e,n,i,s,o,a,l,u){r.getVertexPosition(a,Vn),r.getVertexPosition(l,Wn),r.getVertexPosition(u,Xn);const d=fc(r,t,e,n,Vn,Wn,Xn,Bi);if(d){i&&(Ni.fromBufferAttribute(i,a),Oi.fromBufferAttribute(i,l),Fi.fromBufferAttribute(i,u),d.uv=Fe.getInterpolation(Bi,Vn,Wn,Xn,Ni,Oi,Fi,new Ft)),s&&(Ni.fromBufferAttribute(s,a),Oi.fromBufferAttribute(s,l),Fi.fromBufferAttribute(s,u),d.uv1=Fe.getInterpolation(Bi,Vn,Wn,Xn,Ni,Oi,Fi,new Ft),d.uv2=d.uv1),o&&(ma.fromBufferAttribute(o,a),_a.fromBufferAttribute(o,l),ga.fromBufferAttribute(o,u),d.normal=Fe.getInterpolation(Bi,Vn,Wn,Xn,ma,_a,ga,new K),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c:u,normal:new K,materialIndex:0};Fe.getNormal(Vn,Wn,Xn,p.normal),d.face=p}return d}class ri extends Ae{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],p=[];let m=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function g(_,h,c,y,S,T,A,L,w,H,b){const R=T/w,Y=A/H,C=T/2,k=A/2,v=L/2,N=w+1,Z=H+1;let V=0,rt=0;const W=new K;for(let nt=0;nt<Z;nt++){const z=nt*Y-k;for(let B=0;B<N;B++){const j=B*R-C;W[_]=j*y,W[h]=z*S,W[c]=v,u.push(W.x,W.y,W.z),W[_]=0,W[h]=0,W[c]=L>0?1:-1,d.push(W.x,W.y,W.z),p.push(B/w),p.push(1-nt/H),V+=1}}for(let nt=0;nt<H;nt++)for(let z=0;z<w;z++){const B=m+z+N*nt,j=m+z+N*(nt+1),$=m+(z+1)+N*(nt+1),it=m+(z+1)+N*nt;l.push(B,j,it),l.push(j,$,it),rt+=6}a.addGroup(f,rt,b),f+=rt,m+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ii(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ve(r){const t={};for(let e=0;e<r.length;e++){const n=ii(r[e]);for(const i in n)t[i]=n[i]}return t}function dc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ro(r){return r.getRenderTarget()===null?r.outputColorSpace:Kt.workingColorSpace}const pc={clone:ii,merge:ve};var mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mc,this.fragmentShader=_c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ii(t.uniforms),this.uniformsGroups=dc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Co extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pe extends Co{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($i*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qn=-90,Yn=1;class gc extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pe(qn,Yn,t,e);i.layers=this.layers,this.add(i);const s=new Pe(qn,Yn,t,e);s.layers=this.layers,this.add(s);const o=new Pe(qn,Yn,t,e);o.layers=this.layers,this.add(o);const a=new Pe(qn,Yn,t,e);a.layers=this.layers,this.add(a);const l=new Pe(qn,Yn,t,e);l.layers=this.layers,this.add(l);const u=new Pe(qn,Yn,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(p,m,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lo extends we{constructor(t,e,n,i,s,o,a,l,u,d){t=t!==void 0?t:[],e=e!==void 0?e:ti,super(t,e,n,i,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vc extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(_i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===En?fe:De),this.texture=new Lo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ri(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:on});s.uniforms.tEquirect.value=e;const o=new ge(i,s),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=Le),new gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const zr=new K,xc=new K,Sc=new Wt;class rn{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zr.subVectors(n,e).cross(xc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sc.getNormalMatrix(t),i=this.coplanarPoint(zr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gn=new Cn,Gi=new K;class cs{constructor(t=new rn,e=new rn,n=new rn,i=new rn,s=new rn,o=new rn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],u=i[4],d=i[5],p=i[6],m=i[7],f=i[8],g=i[9],_=i[10],h=i[11],c=i[12],y=i[13],S=i[14],T=i[15];if(n[0].setComponents(l-s,m-u,h-f,T-c).normalize(),n[1].setComponents(l+s,m+u,h+f,T+c).normalize(),n[2].setComponents(l+o,m+d,h+g,T+y).normalize(),n[3].setComponents(l-o,m-d,h-g,T-y).normalize(),n[4].setComponents(l-a,m-p,h-_,T-S).normalize(),e===Ke)n[5].setComponents(l+a,m+p,h+_,T+S).normalize();else if(e===ir)n[5].setComponents(a,p,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(t){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Gi.x=i.normal.x>0?t.max.x:t.min.x,Gi.y=i.normal.y>0?t.max.y:t.min.y,Gi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Po(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function yc(r,t){const e=t.isWebGL2,n=new WeakMap;function i(u,d){const p=u.array,m=u.usage,f=p.byteLength,g=r.createBuffer();r.bindBuffer(d,g),r.bufferData(d,p,m),u.onUploadCallback();let _;if(p instanceof Float32Array)_=r.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=r.SHORT;else if(p instanceof Uint32Array)_=r.UNSIGNED_INT;else if(p instanceof Int32Array)_=r.INT;else if(p instanceof Int8Array)_=r.BYTE;else if(p instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:f}}function s(u,d,p){const m=d.array,f=d._updateRange,g=d.updateRanges;if(r.bindBuffer(p,u),f.count===-1&&g.length===0&&r.bufferSubData(p,0,m),g.length!==0){for(let _=0,h=g.length;_<h;_++){const c=g[_];e?r.bufferSubData(p,c.start*m.BYTES_PER_ELEMENT,m,c.start,c.count):r.bufferSubData(p,c.start*m.BYTES_PER_ELEMENT,m.subarray(c.start,c.start+c.count))}d.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(p,f.offset*m.BYTES_PER_ELEMENT,m,f.offset,f.count):r.bufferSubData(p,f.offset*m.BYTES_PER_ELEMENT,m.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(r.deleteBuffer(d.buffer),n.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const m=n.get(u);(!m||m.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);if(p===void 0)n.set(u,i(u,d));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,u,d),p.version=u.version}}return{get:o,remove:a,update:l}}class us extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),u=a+1,d=l+1,p=t/a,m=e/l,f=[],g=[],_=[],h=[];for(let c=0;c<d;c++){const y=c*m-o;for(let S=0;S<u;S++){const T=S*p-s;g.push(T,-y,0),_.push(0,0,1),h.push(S/a),h.push(1-c/l)}}for(let c=0;c<l;c++)for(let y=0;y<a;y++){const S=y+u*c,T=y+u*(c+1),A=y+1+u*(c+1),L=y+1+u*c;f.push(S,T,L),f.push(T,A,L)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ec=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ac=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ic=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$c=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,th=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_h=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ah=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ch=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Mc,alphahash_pars_fragment:Ec,alphamap_fragment:bc,alphamap_pars_fragment:Tc,alphatest_fragment:wc,alphatest_pars_fragment:Ac,aomap_fragment:Rc,aomap_pars_fragment:Cc,batching_pars_vertex:Lc,batching_vertex:Pc,begin_vertex:Dc,beginnormal_vertex:Ic,bsdfs:Uc,iridescence_fragment:Nc,bumpmap_pars_fragment:Oc,clipping_planes_fragment:Fc,clipping_planes_pars_fragment:Bc,clipping_planes_pars_vertex:zc,clipping_planes_vertex:kc,color_fragment:Gc,color_pars_fragment:Hc,color_pars_vertex:Vc,color_vertex:Wc,common:Xc,cube_uv_reflection_fragment:qc,defaultnormal_vertex:Yc,displacementmap_pars_vertex:jc,displacementmap_vertex:Zc,emissivemap_fragment:Kc,emissivemap_pars_fragment:$c,colorspace_fragment:Jc,colorspace_pars_fragment:Qc,envmap_fragment:tu,envmap_common_pars_fragment:eu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:su,fog_pars_vertex:au,fog_fragment:ou,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_fragment:uu,lightmap_pars_fragment:hu,lights_lambert_fragment:fu,lights_lambert_pars_fragment:du,lights_pars_begin:pu,lights_toon_fragment:_u,lights_toon_pars_fragment:gu,lights_phong_fragment:vu,lights_phong_pars_fragment:xu,lights_physical_fragment:Su,lights_physical_pars_fragment:yu,lights_fragment_begin:Mu,lights_fragment_maps:Eu,lights_fragment_end:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Lu,map_particle_fragment:Pu,map_particle_pars_fragment:Du,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Uu,morphcolor_vertex:Nu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Fu,morphtarget_vertex:Bu,normal_fragment_begin:zu,normal_fragment_maps:ku,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:Vu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:ju,opaque_fragment:Zu,packing:Ku,premultiplied_alpha_fragment:$u,project_vertex:Ju,dithering_fragment:Qu,dithering_pars_fragment:th,roughnessmap_fragment:eh,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:sh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:hh,specularmap_pars_fragment:fh,tonemapping_fragment:dh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:_h,uv_pars_fragment:gh,uv_pars_vertex:vh,uv_vertex:xh,worldpos_vertex:Sh,background_vert:yh,background_frag:Mh,backgroundCube_vert:Eh,backgroundCube_frag:bh,cube_vert:Th,cube_frag:wh,depth_vert:Ah,depth_frag:Rh,distanceRGBA_vert:Ch,distanceRGBA_frag:Lh,equirect_vert:Ph,equirect_frag:Dh,linedashed_vert:Ih,linedashed_frag:Uh,meshbasic_vert:Nh,meshbasic_frag:Oh,meshlambert_vert:Fh,meshlambert_frag:Bh,meshmatcap_vert:zh,meshmatcap_frag:kh,meshnormal_vert:Gh,meshnormal_frag:Hh,meshphong_vert:Vh,meshphong_frag:Wh,meshphysical_vert:Xh,meshphysical_frag:qh,meshtoon_vert:Yh,meshtoon_frag:jh,points_vert:Zh,points_frag:Kh,shadow_vert:$h,shadow_frag:Jh,sprite_vert:Qh,sprite_frag:tf},gt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Ge={basic:{uniforms:ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ve([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ve([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ve([gt.points,gt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ve([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ve([gt.common,gt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ve([gt.sprite,gt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ve([gt.common,gt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ve([gt.lights,gt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Ge.physical={uniforms:ve([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Hi={r:0,b:0,g:0};function ef(r,t,e,n,i,s,o){const a=new Xt(0);let l=s===!0?0:1,u,d,p=null,m=0,f=null;function g(h,c){let y=!1,S=c.isScene===!0?c.background:null;S&&S.isTexture&&(S=(c.backgroundBlurriness>0?e:t).get(S)),S===null?_(a,l):S&&S.isColor&&(_(S,1),y=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ar)?(d===void 0&&(d=new ge(new ri(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:ii(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=Kt.getTransfer(S.colorSpace)!==$t,(p!==S||m!==S.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,p=S,m=S.version,f=r.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new ge(new us(2,2),new wn({name:"BackgroundMaterial",uniforms:ii(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Kt.getTransfer(S.colorSpace)!==$t,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||m!==S.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,p=S,m=S.version,f=r.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function _(h,c){h.getRGB(Hi,Ro(r)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(h,c=1){a.set(h),l=c,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,_(a,l)},render:g}}function nf(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=h(null);let u=l,d=!1;function p(v,N,Z,V,rt){let W=!1;if(o){const nt=_(V,Z,N);u!==nt&&(u=nt,f(u.object)),W=c(v,V,Z,rt),W&&y(v,V,Z,rt)}else{const nt=N.wireframe===!0;(u.geometry!==V.id||u.program!==Z.id||u.wireframe!==nt)&&(u.geometry=V.id,u.program=Z.id,u.wireframe=nt,W=!0)}rt!==null&&e.update(rt,r.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,H(v,N,Z,V),rt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(rt).buffer))}function m(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(v){return n.isWebGL2?r.bindVertexArray(v):s.bindVertexArrayOES(v)}function g(v){return n.isWebGL2?r.deleteVertexArray(v):s.deleteVertexArrayOES(v)}function _(v,N,Z){const V=Z.wireframe===!0;let rt=a[v.id];rt===void 0&&(rt={},a[v.id]=rt);let W=rt[N.id];W===void 0&&(W={},rt[N.id]=W);let nt=W[V];return nt===void 0&&(nt=h(m()),W[V]=nt),nt}function h(v){const N=[],Z=[],V=[];for(let rt=0;rt<i;rt++)N[rt]=0,Z[rt]=0,V[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:V,object:v,attributes:{},index:null}}function c(v,N,Z,V){const rt=u.attributes,W=N.attributes;let nt=0;const z=Z.getAttributes();for(const B in z)if(z[B].location>=0){const $=rt[B];let it=W[B];if(it===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),$===void 0||$.attribute!==it||it&&$.data!==it.data)return!0;nt++}return u.attributesNum!==nt||u.index!==V}function y(v,N,Z,V){const rt={},W=N.attributes;let nt=0;const z=Z.getAttributes();for(const B in z)if(z[B].location>=0){let $=W[B];$===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const it={};it.attribute=$,$&&$.data&&(it.data=$.data),rt[B]=it,nt++}u.attributes=rt,u.attributesNum=nt,u.index=V}function S(){const v=u.newAttributes;for(let N=0,Z=v.length;N<Z;N++)v[N]=0}function T(v){A(v,0)}function A(v,N){const Z=u.newAttributes,V=u.enabledAttributes,rt=u.attributeDivisors;Z[v]=1,V[v]===0&&(r.enableVertexAttribArray(v),V[v]=1),rt[v]!==N&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](v,N),rt[v]=N)}function L(){const v=u.newAttributes,N=u.enabledAttributes;for(let Z=0,V=N.length;Z<V;Z++)N[Z]!==v[Z]&&(r.disableVertexAttribArray(Z),N[Z]=0)}function w(v,N,Z,V,rt,W,nt){nt===!0?r.vertexAttribIPointer(v,N,Z,rt,W):r.vertexAttribPointer(v,N,Z,V,rt,W)}function H(v,N,Z,V){if(n.isWebGL2===!1&&(v.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const rt=V.attributes,W=Z.getAttributes(),nt=N.defaultAttributeValues;for(const z in W){const B=W[z];if(B.location>=0){let j=rt[z];if(j===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const $=j.normalized,it=j.itemSize,xt=e.get(j);if(xt===void 0)continue;const yt=xt.buffer,vt=xt.type,St=xt.bytesPerElement,Et=n.isWebGL2===!0&&(vt===r.INT||vt===r.UNSIGNED_INT||j.gpuType===lo);if(j.isInterleavedBufferAttribute){const Rt=j.data,et=Rt.stride,Zt=j.offset;if(Rt.isInstancedInterleavedBuffer){for(let x=0;x<B.locationSize;x++)A(B.location+x,Rt.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let x=0;x<B.locationSize;x++)T(B.location+x);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let x=0;x<B.locationSize;x++)w(B.location+x,it/B.locationSize,vt,$,et*St,(Zt+it/B.locationSize*x)*St,Et)}else{if(j.isInstancedBufferAttribute){for(let Rt=0;Rt<B.locationSize;Rt++)A(B.location+Rt,j.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Rt=0;Rt<B.locationSize;Rt++)T(B.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Rt=0;Rt<B.locationSize;Rt++)w(B.location+Rt,it/B.locationSize,vt,$,it*St,it/B.locationSize*Rt*St,Et)}}else if(nt!==void 0){const $=nt[z];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(B.location,$);break;case 3:r.vertexAttrib3fv(B.location,$);break;case 4:r.vertexAttrib4fv(B.location,$);break;default:r.vertexAttrib1fv(B.location,$)}}}}L()}function b(){C();for(const v in a){const N=a[v];for(const Z in N){const V=N[Z];for(const rt in V)g(V[rt].object),delete V[rt];delete N[Z]}delete a[v]}}function R(v){if(a[v.id]===void 0)return;const N=a[v.id];for(const Z in N){const V=N[Z];for(const rt in V)g(V[rt].object),delete V[rt];delete N[Z]}delete a[v.id]}function Y(v){for(const N in a){const Z=a[N];if(Z[v.id]===void 0)continue;const V=Z[v.id];for(const rt in V)g(V[rt].object),delete V[rt];delete Z[v.id]}}function C(){k(),d=!0,u!==l&&(u=l,f(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:C,resetDefaultState:k,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:S,enableAttribute:T,disableUnusedAttributes:L}}function rf(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}function a(d,p){r.drawArrays(s,d,p),e.update(p,s,1)}function l(d,p,m){if(m===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,d,p,m),e.update(p,s,m)}function u(d,p,m){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<m;g++)this.render(d[g],p[g]);else{f.multiDrawArraysWEBGL(s,d,0,p,0,m);let g=0;for(let _=0;_<m;_++)g+=p[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function sf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),h=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),c=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,T=o||t.has("OES_texture_float"),A=S&&T,L=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:h,maxVaryings:c,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:L}}function af(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new rn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const f=p.length!==0||m||n!==0||i;return i=m,n=p.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){e=d(p,m,0)},this.setState=function(p,m,f){const g=p.clippingPlanes,_=p.clipIntersection,h=p.clipShadows,c=r.get(p);if(!i||g===null||g.length===0||s&&!h)s?d(null):u();else{const y=s?0:n,S=y*4;let T=c.clippingState||null;l.value=T,T=d(g,m,S,f);for(let A=0;A!==S;++A)T[A]=e[A];c.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,m,f,g){const _=p!==null?p.length:0;let h=null;if(_!==0){if(h=l.value,g!==!0||h===null){const c=f+_*4,y=m.matrixWorldInverse;a.getNormalMatrix(y),(h===null||h.length<c)&&(h=new Float32Array(c));for(let S=0,T=f;S!==_;++S,T+=4)o.copy(p[S]).applyMatrix4(y,a),o.normal.toArray(h,T),h[T+3]=o.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,h}}function of(r){let t=new WeakMap;function e(o,a){return a===$r?o.mapping=ti:a===Jr&&(o.mapping=ei),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$r||a===Jr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new vc(l.height/2);return u.fromEquirectangularTexture(r,o),t.set(o,u),o.addEventListener("dispose",i),e(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Do extends Co{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Kn=4,va=[.125,.215,.35,.446,.526,.582],Sn=20,kr=new Do,xa=new Xt;let Gr=null,Hr=0,Vr=0;const vn=(1+Math.sqrt(5))/2,jn=1/vn,Sa=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,vn,jn),new K(0,vn,-jn),new K(jn,0,vn),new K(-jn,0,vn),new K(vn,jn,0),new K(-vn,jn,0)];class ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Gr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gr,Hr,Vr),t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:vi,format:ze,colorSpace:$e,depthBuffer:!1},i=Ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(s)),this._blurMaterial=cf(s,t,e)}return i}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,i){const a=new Pe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(xa),d.toneMapping=ln,d.autoClear=!1;const f=new To({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new ge(new ri,f);let _=!1;const h=t.background;h?h.isColor&&(f.color.copy(h),t.background=null,_=!0):(f.color.copy(xa),_=!0);for(let c=0;c<6;c++){const y=c%3;y===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):y===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const S=this._cubeSize;Vi(i,y*S,c>2?S:0,S,S),d.setRenderTarget(i),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=h}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ti||t.mapping===ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Vi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Sa[(i-1)%Sa.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new ge(this._lodPlanes[i],u),m=u.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Sn-1),_=s/g,h=isFinite(s)?1+Math.floor(d*_):Sn;h>Sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Sn}`);const c=[];let y=0;for(let w=0;w<Sn;++w){const H=w/_,b=Math.exp(-H*H/2);c.push(b),w===0?y+=b:w<h&&(y+=2*b)}for(let w=0;w<c.length;w++)c[w]=c[w]/y;m.envMap.value=t.texture,m.samples.value=h,m.weights.value=c,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:S}=this;m.dTheta.value=g,m.mipInt.value=S-n;const T=this._sizeLods[i],A=3*T*(i>S-Kn?i-S+Kn:0),L=4*(this._cubeSize-T);Vi(e,A,L,3*T,2*T),l.setRenderTarget(e),l.render(p,kr)}}function lf(r){const t=[],e=[],n=[];let i=r;const s=r-Kn+1+va.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Kn?l=va[o-r+Kn-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),d=-u,p=1+u,m=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,g=6,_=3,h=2,c=1,y=new Float32Array(_*g*f),S=new Float32Array(h*g*f),T=new Float32Array(c*g*f);for(let L=0;L<f;L++){const w=L%3*2/3-1,H=L>2?0:-1,b=[w,H,0,w+2/3,H,0,w+2/3,H+1,0,w,H,0,w+2/3,H+1,0,w,H+1,0];y.set(b,_*g*L),S.set(m,h*g*L);const R=[L,L,L,L,L,L];T.set(R,c*g*L)}const A=new Ae;A.setAttribute("position",new Ie(y,_)),A.setAttribute("uv",new Ie(S,h)),A.setAttribute("faceIndex",new Ie(T,c)),t.push(A),i>Kn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ma(r,t,e){const n=new bn(r,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function cf(r,t,e){const n=new Float32Array(Sn),i=new K(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ea(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function ba(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uf(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===$r||l===Jr,d=l===ti||l===ei;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=t.get(a);return e===null&&(e=new ya(r)),p=u?e.fromEquirectangular(a,p):e.fromCubemap(a,p),t.set(a,p),p.texture}else{if(t.has(a))return t.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||d&&p&&i(p)){e===null&&(e=new ya(r));const m=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,m),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ff(r,t,e,n){const i={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const _=m.morphAttributes[g];for(let h=0,c=_.length;h<c;h++)t.remove(_[h])}m.removeEventListener("dispose",o),delete i[m.id];const f=s.get(m);f&&(t.remove(f),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,e.memory.geometries++),m}function l(p){const m=p.attributes;for(const g in m)t.update(m[g],r.ARRAY_BUFFER);const f=p.morphAttributes;for(const g in f){const _=f[g];for(let h=0,c=_.length;h<c;h++)t.update(_[h],r.ARRAY_BUFFER)}}function u(p){const m=[],f=p.index,g=p.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let S=0,T=y.length;S<T;S+=3){const A=y[S+0],L=y[S+1],w=y[S+2];m.push(A,L,L,w,w,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,T=y.length/3-1;S<T;S+=3){const A=S+0,L=S+1,w=S+2;m.push(A,L,L,w,w,A)}}else return;const h=new(xo(m)?Ao:wo)(m,1);h.version=_;const c=s.get(p);c&&t.remove(c),s.set(p,h)}function d(p){const m=s.get(p);if(m){const f=p.index;f!==null&&m.version<f.version&&u(p)}else u(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function df(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function d(f,g){r.drawElements(s,g,a,f*l),e.update(g,s,1)}function p(f,g,_){if(_===0)return;let h,c;if(i)h=r,c="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[c](s,g,a,f*l,_),e.update(g,s,_)}function m(f,g,_){if(_===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<_;c++)this.render(f[c]/l,g[c]);else{h.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let c=0;for(let y=0;y<_;y++)c+=g[y];e.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=p,this.renderMultiDraw=m}function pf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mf(r,t){return r[0]-t[0]}function _f(r,t){return Math.abs(t[1])-Math.abs(r[1])}function gf(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new he,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,p){const m=u.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let h=s.get(d);if(h===void 0||h.count!==_){let N=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",N)};var f=N;h!==void 0&&h.texture.dispose();const S=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],H=d.morphAttributes.color||[];let b=0;S===!0&&(b=1),T===!0&&(b=2),A===!0&&(b=3);let R=d.attributes.position.count*b,Y=1;R>t.maxTextureSize&&(Y=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*Y*4*_),k=new Mo(C,R,Y,_);k.type=an,k.needsUpdate=!0;const v=b*4;for(let Z=0;Z<_;Z++){const V=L[Z],rt=w[Z],W=H[Z],nt=R*Y*4*Z;for(let z=0;z<V.count;z++){const B=z*v;S===!0&&(o.fromBufferAttribute(V,z),C[nt+B+0]=o.x,C[nt+B+1]=o.y,C[nt+B+2]=o.z,C[nt+B+3]=0),T===!0&&(o.fromBufferAttribute(rt,z),C[nt+B+4]=o.x,C[nt+B+5]=o.y,C[nt+B+6]=o.z,C[nt+B+7]=0),A===!0&&(o.fromBufferAttribute(W,z),C[nt+B+8]=o.x,C[nt+B+9]=o.y,C[nt+B+10]=o.z,C[nt+B+11]=W.itemSize===4?o.w:1)}}h={count:_,texture:k,size:new Ft(R,Y)},s.set(d,h),d.addEventListener("dispose",N)}let c=0;for(let S=0;S<m.length;S++)c+=m[S];const y=d.morphTargetsRelative?1:1-c;p.getUniforms().setValue(r,"morphTargetBaseInfluence",y),p.getUniforms().setValue(r,"morphTargetInfluences",m),p.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),p.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}else{const g=m===void 0?0:m.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];n[d.id]=_}for(let T=0;T<g;T++){const A=_[T];A[0]=T,A[1]=m[T]}_.sort(_f);for(let T=0;T<8;T++)T<g&&_[T][1]?(a[T][0]=_[T][0],a[T][1]=_[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(mf);const h=d.morphAttributes.position,c=d.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const A=a[T],L=A[0],w=A[1];L!==Number.MAX_SAFE_INTEGER&&w?(h&&d.getAttribute("morphTarget"+T)!==h[L]&&d.setAttribute("morphTarget"+T,h[L]),c&&d.getAttribute("morphNormal"+T)!==c[L]&&d.setAttribute("morphNormal"+T,c[L]),i[T]=w,y+=w):(h&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),c&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),i[T]=0)}const S=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",S),p.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function vf(r,t,e,n){let i=new WeakMap;function s(l){const u=n.render.frame,d=l.geometry,p=t.get(l,d);if(i.get(p)!==u&&(t.update(p),i.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;i.get(m)!==u&&(m.update(),i.set(m,u))}return p}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}class Io extends we{constructor(t,e,n,i,s,o,a,l,u,d){if(d=d!==void 0?d:Mn,d!==Mn&&d!==ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Mn&&(n=sn),n===void 0&&d===ni&&(n=yn),super(null,i,s,o,a,l,d,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xe,this.minFilter=l!==void 0?l:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uo=new we,No=new Io(1,1);No.compareFunction=vo;const Oo=new Mo,Fo=new ec,Bo=new Lo,Ta=[],wa=[],Aa=new Float32Array(16),Ra=new Float32Array(9),Ca=new Float32Array(4);function si(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ta[i];if(s===void 0&&(s=new Float32Array(i),Ta[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function oe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ur(r,t){let e=wa[t];e===void 0&&(e=new Int32Array(t),wa[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function xf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Sf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;r.uniform2fv(this.addr,t),le(e,t)}}function yf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;r.uniform3fv(this.addr,t),le(e,t)}}function Mf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;r.uniform4fv(this.addr,t),le(e,t)}}function Ef(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Ca.set(n),r.uniformMatrix2fv(this.addr,!1,Ca),le(e,n)}}function bf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Ra.set(n),r.uniformMatrix3fv(this.addr,!1,Ra),le(e,n)}}function Tf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Aa.set(n),r.uniformMatrix4fv(this.addr,!1,Aa),le(e,n)}}function wf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Af(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;r.uniform2iv(this.addr,t),le(e,t)}}function Rf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;r.uniform3iv(this.addr,t),le(e,t)}}function Cf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;r.uniform4iv(this.addr,t),le(e,t)}}function Lf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Pf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;r.uniform2uiv(this.addr,t),le(e,t)}}function Df(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;r.uniform3uiv(this.addr,t),le(e,t)}}function If(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;r.uniform4uiv(this.addr,t),le(e,t)}}function Uf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?No:Uo;e.setTexture2D(t||s,i)}function Nf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fo,i)}function Of(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bo,i)}function Ff(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oo,i)}function Bf(r){switch(r){case 5126:return xf;case 35664:return Sf;case 35665:return yf;case 35666:return Mf;case 35674:return Ef;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return wf;case 35667:case 35671:return Af;case 35668:case 35672:return Rf;case 35669:case 35673:return Cf;case 5125:return Lf;case 36294:return Pf;case 36295:return Df;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}function zf(r,t){r.uniform1fv(this.addr,t)}function kf(r,t){const e=si(t,this.size,2);r.uniform2fv(this.addr,e)}function Gf(r,t){const e=si(t,this.size,3);r.uniform3fv(this.addr,e)}function Hf(r,t){const e=si(t,this.size,4);r.uniform4fv(this.addr,e)}function Vf(r,t){const e=si(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Wf(r,t){const e=si(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Xf(r,t){const e=si(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function qf(r,t){r.uniform1iv(this.addr,t)}function Yf(r,t){r.uniform2iv(this.addr,t)}function jf(r,t){r.uniform3iv(this.addr,t)}function Zf(r,t){r.uniform4iv(this.addr,t)}function Kf(r,t){r.uniform1uiv(this.addr,t)}function $f(r,t){r.uniform2uiv(this.addr,t)}function Jf(r,t){r.uniform3uiv(this.addr,t)}function Qf(r,t){r.uniform4uiv(this.addr,t)}function td(r,t,e){const n=this.cache,i=t.length,s=ur(e,i);oe(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Uo,s[o])}function ed(r,t,e){const n=this.cache,i=t.length,s=ur(e,i);oe(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Fo,s[o])}function nd(r,t,e){const n=this.cache,i=t.length,s=ur(e,i);oe(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Bo,s[o])}function id(r,t,e){const n=this.cache,i=t.length,s=ur(e,i);oe(n,s)||(r.uniform1iv(this.addr,s),le(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Oo,s[o])}function rd(r){switch(r){case 5126:return zf;case 35664:return kf;case 35665:return Gf;case 35666:return Hf;case 35674:return Vf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return jf;case 35669:case 35673:return Zf;case 5125:return Kf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return td;case 35679:case 36299:case 36307:return ed;case 35680:case 36300:case 36308:case 36293:return nd;case 36289:case 36303:case 36311:case 36292:return id}}class sd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bf(e.type)}}class ad{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rd(e.type)}}class od{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function La(r,t){r.seq.push(t),r.map[t.id]=t}function ld(r,t,e){const n=r.name,i=n.length;for(Wr.lastIndex=0;;){const s=Wr.exec(n),o=Wr.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){La(e,u===void 0?new sd(a,r,t):new ad(a,r,t));break}else{let p=e.map[a];p===void 0&&(p=new od(a),La(e,p)),e=p}}}class Ji{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ld(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Pa(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const cd=37297;let ud=0;function hd(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function fd(r){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(r);let n;switch(t===e?n="":t===nr&&e===er?n="LinearDisplayP3ToLinearSRGB":t===er&&e===nr&&(n="LinearSRGBToLinearDisplayP3"),r){case $e:case or:return[n,"LinearTransferOETF"];case fe:case ls:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Da(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+hd(r.getShaderSource(t),o)}else return i}function dd(r,t){const e=fd(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function pd(r,t){let e;switch(t){case El:e="Linear";break;case bl:e="Reinhard";break;case Tl:e="OptimizedCineon";break;case wl:e="ACESFilmic";break;case Rl:e="AgX";break;case Al:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function md(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($n).join(`
`)}function _d(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($n).join(`
`)}function gd(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vd(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function $n(r){return r!==""}function Ia(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ua(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xd=/^[ \t]*#include +<([\w\d./]+)>/gm;function rs(r){return r.replace(xd,yd)}const Sd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yd(r,t){let e=Gt[t];if(e===void 0){const n=Sd.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rs(e)}const Md=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(r){return r.replace(Md,Ed)}function Ed(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oa(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bd(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ro?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===so?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function Td(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ti:case ei:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wd(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Ad(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ao:t="ENVMAP_BLENDING_MULTIPLY";break;case yl:t="ENVMAP_BLENDING_MIX";break;case Ml:t="ENVMAP_BLENDING_ADD";break}return t}function Rd(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cd(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bd(e),u=Td(e),d=wd(e),p=Ad(e),m=Rd(e),f=e.isWebGL2?"":md(e),g=_d(e),_=gd(s),h=i.createProgram();let c,y,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($n).join(`
`),c.length>0&&(c+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter($n).join(`
`),y.length>0&&(y+=`
`)):(c=[Oa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),y=[f,Oa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ln?pd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,dd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($n).join(`
`)),o=rs(o),o=Ia(o,e),o=Ua(o,e),a=rs(a),a=Ia(a,e),a=Ua(a,e),o=Na(o),a=Na(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,c=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=S+c+o,A=S+y+a,L=Pa(i,i.VERTEX_SHADER,T),w=Pa(i,i.FRAGMENT_SHADER,A);i.attachShader(h,L),i.attachShader(h,w),e.index0AttributeName!==void 0?i.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h);function H(C){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(h).trim(),v=i.getShaderInfoLog(L).trim(),N=i.getShaderInfoLog(w).trim();let Z=!0,V=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,h,L,w);else{const rt=Da(i,L,"vertex"),W=Da(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+rt+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(v===""||N==="")&&(V=!1);V&&(C.diagnostics={runnable:Z,programLog:k,vertexShader:{log:v,prefix:c},fragmentShader:{log:N,prefix:y}})}i.deleteShader(L),i.deleteShader(w),b=new Ji(i,h),R=vd(i,h)}let b;this.getUniforms=function(){return b===void 0&&H(this),b};let R;this.getAttributes=function(){return R===void 0&&H(this),R};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=i.getProgramParameter(h,cd)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ud++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=L,this.fragmentShader=w,this}let Ld=0;class Pd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dd(t),e.set(t,n)),n}}class Dd{constructor(t){this.id=Ld++,this.code=t,this.usedTimes=0}}function Id(r,t,e,n,i,s,o){const a=new Eo,l=new Pd,u=[],d=i.isWebGL2,p=i.logarithmicDepthBuffer,m=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function h(b,R,Y,C,k){const v=C.fog,N=k.geometry,Z=b.isMeshStandardMaterial?C.environment:null,V=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),rt=V&&V.mapping===ar?V.image.height:null,W=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const nt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,z=nt!==void 0?nt.length:0;let B=0;N.morphAttributes.position!==void 0&&(B=1),N.morphAttributes.normal!==void 0&&(B=2),N.morphAttributes.color!==void 0&&(B=3);let j,$,it,xt;if(W){const ne=Ge[W];j=ne.vertexShader,$=ne.fragmentShader}else j=b.vertexShader,$=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);const yt=r.getRenderTarget(),vt=k.isInstancedMesh===!0,St=k.isBatchedMesh===!0,Et=!!b.map,Rt=!!b.matcap,et=!!V,Zt=!!b.aoMap,x=!!b.lightMap,Q=!!b.bumpMap,X=!!b.normalMap,I=!!b.displacementMap,P=!!b.emissiveMap,M=!!b.metalnessMap,E=!!b.roughnessMap,O=b.anisotropy>0,F=b.clearcoat>0,q=b.iridescence>0,tt=b.sheen>0,st=b.transmission>0,ct=O&&!!b.anisotropyMap,dt=F&&!!b.clearcoatMap,mt=F&&!!b.clearcoatNormalMap,Pt=F&&!!b.clearcoatRoughnessMap,ut=q&&!!b.iridescenceMap,Bt=q&&!!b.iridescenceThicknessMap,Nt=tt&&!!b.sheenColorMap,bt=tt&&!!b.sheenRoughnessMap,At=!!b.specularMap,Mt=!!b.specularColorMap,U=!!b.specularIntensityMap,pt=st&&!!b.transmissionMap,Ct=st&&!!b.thicknessMap,Tt=!!b.gradientMap,ht=!!b.alphaMap,G=b.alphaTest>0,ft=!!b.alphaHash,_t=!!b.extensions,It=!!N.attributes.uv1,Dt=!!N.attributes.uv2,qt=!!N.attributes.uv3;let Yt=ln;return b.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Yt=r.toneMapping),{isWebGL2:d,shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:$,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:St,instancing:vt,instancingColor:vt&&k.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:$e,map:Et,matcap:Rt,envMap:et,envMapMode:et&&V.mapping,envMapCubeUVHeight:rt,aoMap:Zt,lightMap:x,bumpMap:Q,normalMap:X,displacementMap:m&&I,emissiveMap:P,normalMapObjectSpace:X&&b.normalMapType===kl,normalMapTangentSpace:X&&b.normalMapType===go,metalnessMap:M,roughnessMap:E,anisotropy:O,anisotropyMap:ct,clearcoat:F,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Pt,iridescence:q,iridescenceMap:ut,iridescenceThicknessMap:Bt,sheen:tt,sheenColorMap:Nt,sheenRoughnessMap:bt,specularMap:At,specularColorMap:Mt,specularIntensityMap:U,transmission:st,transmissionMap:pt,thicknessMap:Ct,gradientMap:Tt,opaque:b.transparent===!1&&b.blending===Jn,alphaMap:ht,alphaTest:G,alphaHash:ft,combine:b.combine,mapUv:Et&&_(b.map.channel),aoMapUv:Zt&&_(b.aoMap.channel),lightMapUv:x&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:X&&_(b.normalMap.channel),displacementMapUv:I&&_(b.displacementMap.channel),emissiveMapUv:P&&_(b.emissiveMap.channel),metalnessMapUv:M&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:dt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(b.sheenRoughnessMap.channel),specularMapUv:At&&_(b.specularMap.channel),specularColorMapUv:Mt&&_(b.specularColorMap.channel),specularIntensityMapUv:U&&_(b.specularIntensityMap.channel),transmissionMapUv:pt&&_(b.transmissionMap.channel),thicknessMapUv:Ct&&_(b.thicknessMap.channel),alphaMapUv:ht&&_(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(X||O),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Dt,vertexUv3s:qt,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(Et||ht),fog:!!v,useFog:b.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:B,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Yt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Et&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ze,flipSided:b.side===Me,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:_t&&b.extensions.derivatives===!0,extensionFragDepth:_t&&b.extensions.fragDepth===!0,extensionDrawBuffers:_t&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function c(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)R.push(Y),R.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(y(R,b),S(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function y(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function S(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),b.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function T(b){const R=g[b.type];let Y;if(R){const C=Ge[R];Y=pc.clone(C.uniforms)}else Y=b.uniforms;return Y}function A(b,R){let Y;for(let C=0,k=u.length;C<k;C++){const v=u[C];if(v.cacheKey===R){Y=v,++Y.usedTimes;break}}return Y===void 0&&(Y=new Cd(r,R,b,s),u.push(Y)),Y}function L(b){if(--b.usedTimes===0){const R=u.indexOf(b);u[R]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function H(){l.dispose()}return{getParameters:h,getProgramCacheKey:c,getUniforms:T,acquireProgram:A,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:H}}function Ud(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Nd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fa(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ba(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(p,m,f,g,_,h){let c=r[t];return c===void 0?(c={id:p.id,object:p,geometry:m,material:f,groupOrder:g,renderOrder:p.renderOrder,z:_,group:h},r[t]=c):(c.id=p.id,c.object=p,c.geometry=m,c.material=f,c.groupOrder=g,c.renderOrder=p.renderOrder,c.z=_,c.group=h),t++,c}function a(p,m,f,g,_,h){const c=o(p,m,f,g,_,h);f.transmission>0?n.push(c):f.transparent===!0?i.push(c):e.push(c)}function l(p,m,f,g,_,h){const c=o(p,m,f,g,_,h);f.transmission>0?n.unshift(c):f.transparent===!0?i.unshift(c):e.unshift(c)}function u(p,m){e.length>1&&e.sort(p||Nd),n.length>1&&n.sort(m||Fa),i.length>1&&i.sort(m||Fa)}function d(){for(let p=t,m=r.length;p<m;p++){const f=r[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:u}}function Od(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ba,r.set(n,[o])):i>=s.length?(o=new Ba,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Fd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Xt};break;case"SpotLight":e={position:new K,direction:new K,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=e,e}}}function Bd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let zd=0;function kd(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Gd(r,t){const e=new Fd,n=Bd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new K);const s=new K,o=new Jt,a=new Jt;function l(d,p){let m=0,f=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let _=0,h=0,c=0,y=0,S=0,T=0,A=0,L=0,w=0,H=0,b=0;d.sort(kd);const R=p===!0?Math.PI:1;for(let C=0,k=d.length;C<k;C++){const v=d[C],N=v.color,Z=v.intensity,V=v.distance,rt=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)m+=N.r*Z*R,f+=N.g*Z*R,g+=N.b*Z*R;else if(v.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(v.sh.coefficients[W],Z);b++}else if(v.isDirectionalLight){const W=e.get(v);if(W.color.copy(v.color).multiplyScalar(v.intensity*R),v.castShadow){const nt=v.shadow,z=n.get(v);z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,i.directionalShadow[_]=z,i.directionalShadowMap[_]=rt,i.directionalShadowMatrix[_]=v.shadow.matrix,T++}i.directional[_]=W,_++}else if(v.isSpotLight){const W=e.get(v);W.position.setFromMatrixPosition(v.matrixWorld),W.color.copy(N).multiplyScalar(Z*R),W.distance=V,W.coneCos=Math.cos(v.angle),W.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),W.decay=v.decay,i.spot[c]=W;const nt=v.shadow;if(v.map&&(i.spotLightMap[w]=v.map,w++,nt.updateMatrices(v),v.castShadow&&H++),i.spotLightMatrix[c]=nt.matrix,v.castShadow){const z=n.get(v);z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,i.spotShadow[c]=z,i.spotShadowMap[c]=rt,L++}c++}else if(v.isRectAreaLight){const W=e.get(v);W.color.copy(N).multiplyScalar(Z),W.halfWidth.set(v.width*.5,0,0),W.halfHeight.set(0,v.height*.5,0),i.rectArea[y]=W,y++}else if(v.isPointLight){const W=e.get(v);if(W.color.copy(v.color).multiplyScalar(v.intensity*R),W.distance=v.distance,W.decay=v.decay,v.castShadow){const nt=v.shadow,z=n.get(v);z.shadowBias=nt.bias,z.shadowNormalBias=nt.normalBias,z.shadowRadius=nt.radius,z.shadowMapSize=nt.mapSize,z.shadowCameraNear=nt.camera.near,z.shadowCameraFar=nt.camera.far,i.pointShadow[h]=z,i.pointShadowMap[h]=rt,i.pointShadowMatrix[h]=v.shadow.matrix,A++}i.point[h]=W,h++}else if(v.isHemisphereLight){const W=e.get(v);W.skyColor.copy(v.color).multiplyScalar(Z*R),W.groundColor.copy(v.groundColor).multiplyScalar(Z*R),i.hemi[S]=W,S++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=f,i.ambient[2]=g;const Y=i.hash;(Y.directionalLength!==_||Y.pointLength!==h||Y.spotLength!==c||Y.rectAreaLength!==y||Y.hemiLength!==S||Y.numDirectionalShadows!==T||Y.numPointShadows!==A||Y.numSpotShadows!==L||Y.numSpotMaps!==w||Y.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=c,i.rectArea.length=y,i.point.length=h,i.hemi.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=L+w-H,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=H,i.numLightProbes=b,Y.directionalLength=_,Y.pointLength=h,Y.spotLength=c,Y.rectAreaLength=y,Y.hemiLength=S,Y.numDirectionalShadows=T,Y.numPointShadows=A,Y.numSpotShadows=L,Y.numSpotMaps=w,Y.numLightProbes=b,i.version=zd++)}function u(d,p){let m=0,f=0,g=0,_=0,h=0;const c=p.matrixWorldInverse;for(let y=0,S=d.length;y<S;y++){const T=d[y];if(T.isDirectionalLight){const A=i.directional[m];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),m++}else if(T.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(c),g++}else if(T.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(c),a.identity(),o.copy(T.matrixWorld),o.premultiply(c),a.extractRotation(o),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(c),f++}else if(T.isHemisphereLight){const A=i.hemi[h];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(c),h++}}}return{setup:l,setupView:u,state:i}}function za(r,t){const e=new Gd(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(p){n.push(p)}function a(p){i.push(p)}function l(p){e.setup(n,p)}function u(p){e.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Hd(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new za(r,t),e.set(s,[l])):o>=a.length?(l=new za(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Vd extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wd extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yd(r,t,e){let n=new cs;const i=new Ft,s=new Ft,o=new he,a=new Vd({depthPacking:zl}),l=new Wd,u={},d=e.maxTextureSize,p={[un]:Me,[Me]:un,[Ze]:Ze},m=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Xd,fragmentShader:qd}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ge(g,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let c=this.type;this.render=function(L,w,H){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||L.length===0)return;const b=r.getRenderTarget(),R=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),C=r.state;C.setBlending(on),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const k=c!==je&&this.type===je,v=c===je&&this.type!==je;for(let N=0,Z=L.length;N<Z;N++){const V=L[N],rt=V.shadow;if(rt===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;i.copy(rt.mapSize);const W=rt.getFrameExtents();if(i.multiply(W),s.copy(rt.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/W.x),i.x=s.x*W.x,rt.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/W.y),i.y=s.y*W.y,rt.mapSize.y=s.y)),rt.map===null||k===!0||v===!0){const z=this.type!==je?{minFilter:xe,magFilter:xe}:{};rt.map!==null&&rt.map.dispose(),rt.map=new bn(i.x,i.y,z),rt.map.texture.name=V.name+".shadowMap",rt.camera.updateProjectionMatrix()}r.setRenderTarget(rt.map),r.clear();const nt=rt.getViewportCount();for(let z=0;z<nt;z++){const B=rt.getViewport(z);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),C.viewport(o),rt.updateMatrices(V,z),n=rt.getFrustum(),T(w,H,rt.camera,V,this.type)}rt.isPointLightShadow!==!0&&this.type===je&&y(rt,H),rt.needsUpdate=!1}c=this.type,h.needsUpdate=!1,r.setRenderTarget(b,R,Y)};function y(L,w){const H=t.update(_);m.defines.VSM_SAMPLES!==L.blurSamples&&(m.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bn(i.x,i.y)),m.uniforms.shadow_pass.value=L.map.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(w,null,H,m,_,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(w,null,H,f,_,null)}function S(L,w,H,b){let R=null;const Y=H.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Y!==void 0)R=Y;else if(R=H.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const C=R.uuid,k=w.uuid;let v=u[C];v===void 0&&(v={},u[C]=v);let N=v[k];N===void 0&&(N=R.clone(),v[k]=N,w.addEventListener("dispose",A)),R=N}if(R.visible=w.visible,R.wireframe=w.wireframe,b===je?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const C=r.properties.get(R);C.light=H}return R}function T(L,w,H,b,R){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===je)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,L.matrixWorld);const k=t.update(L),v=L.material;if(Array.isArray(v)){const N=k.groups;for(let Z=0,V=N.length;Z<V;Z++){const rt=N[Z],W=v[rt.materialIndex];if(W&&W.visible){const nt=S(L,W,b,R);L.onBeforeShadow(r,L,w,H,k,nt,rt),r.renderBufferDirect(H,null,k,nt,L,rt),L.onAfterShadow(r,L,w,H,k,nt,rt)}}}else if(v.visible){const N=S(L,v,b,R);L.onBeforeShadow(r,L,w,H,k,N,null),r.renderBufferDirect(H,null,k,N,L,null),L.onAfterShadow(r,L,w,H,k,N,null)}}const C=L.children;for(let k=0,v=C.length;k<v;k++)T(C[k],w,H,b,R)}function A(L){L.target.removeEventListener("dispose",A);for(const H in u){const b=u[H],R=L.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function jd(r,t,e){const n=e.isWebGL2;function i(){let G=!1;const ft=new he;let _t=null;const It=new he(0,0,0,0);return{setMask:function(Dt){_t!==Dt&&!G&&(r.colorMask(Dt,Dt,Dt,Dt),_t=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,qt,Yt,te,ne){ne===!0&&(Dt*=te,qt*=te,Yt*=te),ft.set(Dt,qt,Yt,te),It.equals(ft)===!1&&(r.clearColor(Dt,qt,Yt,te),It.copy(ft))},reset:function(){G=!1,_t=null,It.set(-1,0,0,0)}}}function s(){let G=!1,ft=null,_t=null,It=null;return{setTest:function(Dt){Dt?St(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(Dt){ft!==Dt&&!G&&(r.depthMask(Dt),ft=Dt)},setFunc:function(Dt){if(_t!==Dt){switch(Dt){case pl:r.depthFunc(r.NEVER);break;case ml:r.depthFunc(r.ALWAYS);break;case _l:r.depthFunc(r.LESS);break;case Qi:r.depthFunc(r.LEQUAL);break;case gl:r.depthFunc(r.EQUAL);break;case vl:r.depthFunc(r.GEQUAL);break;case xl:r.depthFunc(r.GREATER);break;case Sl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Dt}},setLocked:function(Dt){G=Dt},setClear:function(Dt){It!==Dt&&(r.clearDepth(Dt),It=Dt)},reset:function(){G=!1,ft=null,_t=null,It=null}}}function o(){let G=!1,ft=null,_t=null,It=null,Dt=null,qt=null,Yt=null,te=null,ne=null;return{setTest:function(jt){G||(jt?St(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(jt){ft!==jt&&!G&&(r.stencilMask(jt),ft=jt)},setFunc:function(jt,re,ke){(_t!==jt||It!==re||Dt!==ke)&&(r.stencilFunc(jt,re,ke),_t=jt,It=re,Dt=ke)},setOp:function(jt,re,ke){(qt!==jt||Yt!==re||te!==ke)&&(r.stencilOp(jt,re,ke),qt=jt,Yt=re,te=ke)},setLocked:function(jt){G=jt},setClear:function(jt){ne!==jt&&(r.clearStencil(jt),ne=jt)},reset:function(){G=!1,ft=null,_t=null,It=null,Dt=null,qt=null,Yt=null,te=null,ne=null}}}const a=new i,l=new s,u=new o,d=new WeakMap,p=new WeakMap;let m={},f={},g=new WeakMap,_=[],h=null,c=!1,y=null,S=null,T=null,A=null,L=null,w=null,H=null,b=new Xt(0,0,0),R=0,Y=!1,C=null,k=null,v=null,N=null,Z=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,W=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(nt)[1]),rt=W>=1):nt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),rt=W>=2);let z=null,B={};const j=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),it=new he().fromArray(j),xt=new he().fromArray($);function yt(G,ft,_t,It){const Dt=new Uint8Array(4),qt=r.createTexture();r.bindTexture(G,qt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<_t;Yt++)n&&(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(ft+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return qt}const vt={};vt[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(vt[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),St(r.DEPTH_TEST),l.setFunc(Qi),P(!1),M(Ss),St(r.CULL_FACE),X(on);function St(G){m[G]!==!0&&(r.enable(G),m[G]=!0)}function Et(G){m[G]!==!1&&(r.disable(G),m[G]=!1)}function Rt(G,ft){return f[G]!==ft?(r.bindFramebuffer(G,ft),f[G]=ft,n&&(G===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ft),G===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function et(G,ft){let _t=_,It=!1;if(G)if(_t=g.get(ft),_t===void 0&&(_t=[],g.set(ft,_t)),G.isWebGLMultipleRenderTargets){const Dt=G.texture;if(_t.length!==Dt.length||_t[0]!==r.COLOR_ATTACHMENT0){for(let qt=0,Yt=Dt.length;qt<Yt;qt++)_t[qt]=r.COLOR_ATTACHMENT0+qt;_t.length=Dt.length,It=!0}}else _t[0]!==r.COLOR_ATTACHMENT0&&(_t[0]=r.COLOR_ATTACHMENT0,It=!0);else _t[0]!==r.BACK&&(_t[0]=r.BACK,It=!0);It&&(e.isWebGL2?r.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function Zt(G){return h!==G?(r.useProgram(G),h=G,!0):!1}const x={[xn]:r.FUNC_ADD,[Qo]:r.FUNC_SUBTRACT,[tl]:r.FUNC_REVERSE_SUBTRACT};if(n)x[bs]=r.MIN,x[Ts]=r.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(x[bs]=G.MIN_EXT,x[Ts]=G.MAX_EXT)}const Q={[el]:r.ZERO,[nl]:r.ONE,[il]:r.SRC_COLOR,[Zr]:r.SRC_ALPHA,[cl]:r.SRC_ALPHA_SATURATE,[ol]:r.DST_COLOR,[sl]:r.DST_ALPHA,[rl]:r.ONE_MINUS_SRC_COLOR,[Kr]:r.ONE_MINUS_SRC_ALPHA,[ll]:r.ONE_MINUS_DST_COLOR,[al]:r.ONE_MINUS_DST_ALPHA,[ul]:r.CONSTANT_COLOR,[hl]:r.ONE_MINUS_CONSTANT_COLOR,[fl]:r.CONSTANT_ALPHA,[dl]:r.ONE_MINUS_CONSTANT_ALPHA};function X(G,ft,_t,It,Dt,qt,Yt,te,ne,jt){if(G===on){c===!0&&(Et(r.BLEND),c=!1);return}if(c===!1&&(St(r.BLEND),c=!0),G!==Jo){if(G!==y||jt!==Y){if((S!==xn||L!==xn)&&(r.blendEquation(r.FUNC_ADD),S=xn,L=xn),jt)switch(G){case Jn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ys:r.blendFunc(r.ONE,r.ONE);break;case Ms:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Es:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Jn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ys:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ms:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Es:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}T=null,A=null,w=null,H=null,b.set(0,0,0),R=0,y=G,Y=jt}return}Dt=Dt||ft,qt=qt||_t,Yt=Yt||It,(ft!==S||Dt!==L)&&(r.blendEquationSeparate(x[ft],x[Dt]),S=ft,L=Dt),(_t!==T||It!==A||qt!==w||Yt!==H)&&(r.blendFuncSeparate(Q[_t],Q[It],Q[qt],Q[Yt]),T=_t,A=It,w=qt,H=Yt),(te.equals(b)===!1||ne!==R)&&(r.blendColor(te.r,te.g,te.b,ne),b.copy(te),R=ne),y=G,Y=!1}function I(G,ft){G.side===Ze?Et(r.CULL_FACE):St(r.CULL_FACE);let _t=G.side===Me;ft&&(_t=!_t),P(_t),G.blending===Jn&&G.transparent===!1?X(on):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const It=G.stencilWrite;u.setTest(It),It&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),O(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function P(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function M(G){G!==Ko?(St(r.CULL_FACE),G!==k&&(G===Ss?r.cullFace(r.BACK):G===$o?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),k=G}function E(G){G!==v&&(rt&&r.lineWidth(G),v=G)}function O(G,ft,_t){G?(St(r.POLYGON_OFFSET_FILL),(N!==ft||Z!==_t)&&(r.polygonOffset(ft,_t),N=ft,Z=_t)):Et(r.POLYGON_OFFSET_FILL)}function F(G){G?St(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function q(G){G===void 0&&(G=r.TEXTURE0+V-1),z!==G&&(r.activeTexture(G),z=G)}function tt(G,ft,_t){_t===void 0&&(z===null?_t=r.TEXTURE0+V-1:_t=z);let It=B[_t];It===void 0&&(It={type:void 0,texture:void 0},B[_t]=It),(It.type!==G||It.texture!==ft)&&(z!==_t&&(r.activeTexture(_t),z=_t),r.bindTexture(G,ft||vt[G]),It.type=G,It.texture=ft)}function st(){const G=B[z];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ct(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(G){it.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),it.copy(G))}function pt(G){xt.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),xt.copy(G))}function Ct(G,ft){let _t=p.get(ft);_t===void 0&&(_t=new WeakMap,p.set(ft,_t));let It=_t.get(G);It===void 0&&(It=r.getUniformBlockIndex(ft,G.name),_t.set(G,It))}function Tt(G,ft){const It=p.get(ft).get(G);d.get(ft)!==It&&(r.uniformBlockBinding(ft,It,G.__bindingPointIndex),d.set(ft,It))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},z=null,B={},f={},g=new WeakMap,_=[],h=null,c=!1,y=null,S=null,T=null,A=null,L=null,w=null,H=null,b=new Xt(0,0,0),R=0,Y=!1,C=null,k=null,v=null,N=null,Z=null,it.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:St,disable:Et,bindFramebuffer:Rt,drawBuffers:et,useProgram:Zt,setBlending:X,setMaterial:I,setFlipSided:P,setCullFace:M,setLineWidth:E,setPolygonOffset:O,setScissorTest:F,activeTexture:q,bindTexture:tt,unbindTexture:st,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:At,texImage3D:Mt,updateUBOMapping:Ct,uniformBlockBinding:Tt,texStorage2D:Nt,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:Pt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Bt,scissor:U,viewport:pt,reset:ht}}function Zd(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,E){return f?new OffscreenCanvas(M,E):rr("canvas")}function _(M,E,O,F){let q=1;if((M.width>F||M.height>F)&&(q=F/Math.max(M.width,M.height)),q<1||E===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const tt=E?is:Math.floor,st=tt(q*M.width),ct=tt(q*M.height);p===void 0&&(p=g(st,ct));const dt=O?g(st,ct):p;return dt.width=st,dt.height=ct,dt.getContext("2d").drawImage(M,0,0,st,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+st+"x"+ct+")."),dt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function h(M){return ea(M.width)&&ea(M.height)}function c(M){return a?!1:M.wrapS!==Be||M.wrapT!==Be||M.minFilter!==xe&&M.minFilter!==Le}function y(M,E){return M.generateMipmaps&&E&&M.minFilter!==xe&&M.minFilter!==Le}function S(M){r.generateMipmap(M)}function T(M,E,O,F,q=!1){if(a===!1)return E;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let tt=E;if(E===r.RED&&(O===r.FLOAT&&(tt=r.R32F),O===r.HALF_FLOAT&&(tt=r.R16F),O===r.UNSIGNED_BYTE&&(tt=r.R8)),E===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(tt=r.R8UI),O===r.UNSIGNED_SHORT&&(tt=r.R16UI),O===r.UNSIGNED_INT&&(tt=r.R32UI),O===r.BYTE&&(tt=r.R8I),O===r.SHORT&&(tt=r.R16I),O===r.INT&&(tt=r.R32I)),E===r.RG&&(O===r.FLOAT&&(tt=r.RG32F),O===r.HALF_FLOAT&&(tt=r.RG16F),O===r.UNSIGNED_BYTE&&(tt=r.RG8)),E===r.RGBA){const st=q?tr:Kt.getTransfer(F);O===r.FLOAT&&(tt=r.RGBA32F),O===r.HALF_FLOAT&&(tt=r.RGBA16F),O===r.UNSIGNED_BYTE&&(tt=st===$t?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(M,E,O){return y(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==xe&&M.minFilter!==Le?Math.log2(Math.max(E.width,E.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?E.mipmaps.length:1}function L(M){return M===xe||M===ws||M===_r?r.NEAREST:r.LINEAR}function w(M){const E=M.target;E.removeEventListener("dispose",w),b(E),E.isVideoTexture&&d.delete(E)}function H(M){const E=M.target;E.removeEventListener("dispose",H),Y(E)}function b(M){const E=n.get(M);if(E.__webglInit===void 0)return;const O=M.source,F=m.get(O);if(F){const q=F[E.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(M),Object.keys(F).length===0&&m.delete(O)}n.remove(M)}function R(M){const E=n.get(M);r.deleteTexture(E.__webglTexture);const O=M.source,F=m.get(O);delete F[E.__cacheKey],o.memory.textures--}function Y(M){const E=M.texture,O=n.get(M),F=n.get(E);if(F.__webglTexture!==void 0&&(r.deleteTexture(F.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(O.__webglFramebuffer[q]))for(let tt=0;tt<O.__webglFramebuffer[q].length;tt++)r.deleteFramebuffer(O.__webglFramebuffer[q][tt]);else r.deleteFramebuffer(O.__webglFramebuffer[q]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[q])}else{if(Array.isArray(O.__webglFramebuffer))for(let q=0;q<O.__webglFramebuffer.length;q++)r.deleteFramebuffer(O.__webglFramebuffer[q]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let q=0;q<O.__webglColorRenderbuffer.length;q++)O.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[q]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let q=0,tt=E.length;q<tt;q++){const st=n.get(E[q]);st.__webglTexture&&(r.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(E[q])}n.remove(E),n.remove(M)}let C=0;function k(){C=0}function v(){const M=C;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),C+=1,M}function N(M){const E=[];return E.push(M.wrapS),E.push(M.wrapT),E.push(M.wrapR||0),E.push(M.magFilter),E.push(M.minFilter),E.push(M.anisotropy),E.push(M.internalFormat),E.push(M.format),E.push(M.type),E.push(M.generateMipmaps),E.push(M.premultiplyAlpha),E.push(M.flipY),E.push(M.unpackAlignment),E.push(M.colorSpace),E.join()}function Z(M,E){const O=n.get(M);if(M.isVideoTexture&&I(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(O,M,E);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+E)}function V(M,E){const O=n.get(M);if(M.version>0&&O.__version!==M.version){it(O,M,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+E)}function rt(M,E){const O=n.get(M);if(M.version>0&&O.__version!==M.version){it(O,M,E);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+E)}function W(M,E){const O=n.get(M);if(M.version>0&&O.__version!==M.version){xt(O,M,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+E)}const nt={[Qr]:r.REPEAT,[Be]:r.CLAMP_TO_EDGE,[ts]:r.MIRRORED_REPEAT},z={[xe]:r.NEAREST,[ws]:r.NEAREST_MIPMAP_NEAREST,[_r]:r.NEAREST_MIPMAP_LINEAR,[Le]:r.LINEAR,[Cl]:r.LINEAR_MIPMAP_NEAREST,[gi]:r.LINEAR_MIPMAP_LINEAR},B={[Gl]:r.NEVER,[Yl]:r.ALWAYS,[Hl]:r.LESS,[vo]:r.LEQUAL,[Vl]:r.EQUAL,[ql]:r.GEQUAL,[Wl]:r.GREATER,[Xl]:r.NOTEQUAL};function j(M,E,O){if(O?(r.texParameteri(M,r.TEXTURE_WRAP_S,nt[E.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,nt[E.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,nt[E.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,z[E.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,z[E.minFilter])):(r.texParameteri(M,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(M,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==Be||E.wrapT!==Be)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,r.TEXTURE_MAG_FILTER,L(E.magFilter)),r.texParameteri(M,r.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==xe&&E.minFilter!==Le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===xe||E.minFilter!==_r&&E.minFilter!==gi||E.type===an&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===vi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function $(M,E){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,E.addEventListener("dispose",w));const F=E.source;let q=m.get(F);q===void 0&&(q={},m.set(F,q));const tt=N(E);if(tt!==M.__cacheKey){q[tt]===void 0&&(q[tt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),q[tt].usedTimes++;const st=q[M.__cacheKey];st!==void 0&&(q[M.__cacheKey].usedTimes--,st.usedTimes===0&&R(E)),M.__cacheKey=tt,M.__webglTexture=q[tt].texture}return O}function it(M,E,O){let F=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(F=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(F=r.TEXTURE_3D);const q=$(M,E),tt=E.source;e.bindTexture(F,M.__webglTexture,r.TEXTURE0+O);const st=n.get(tt);if(tt.version!==st.__version||q===!0){e.activeTexture(r.TEXTURE0+O);const ct=Kt.getPrimaries(Kt.workingColorSpace),dt=E.colorSpace===De?null:Kt.getPrimaries(E.colorSpace),mt=E.colorSpace===De||ct===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Pt=c(E)&&h(E.image)===!1;let ut=_(E.image,Pt,!1,i.maxTextureSize);ut=P(E,ut);const Bt=h(ut)||a,Nt=s.convert(E.format,E.colorSpace);let bt=s.convert(E.type),At=T(E.internalFormat,Nt,bt,E.colorSpace,E.isVideoTexture);j(F,E,Bt);let Mt;const U=E.mipmaps,pt=a&&E.isVideoTexture!==!0&&At!==mo,Ct=st.__version===void 0||q===!0,Tt=A(E,ut,Bt);if(E.isDepthTexture)At=r.DEPTH_COMPONENT,a?E.type===an?At=r.DEPTH_COMPONENT32F:E.type===sn?At=r.DEPTH_COMPONENT24:E.type===yn?At=r.DEPTH24_STENCIL8:At=r.DEPTH_COMPONENT16:E.type===an&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Mn&&At===r.DEPTH_COMPONENT&&E.type!==os&&E.type!==sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=sn,bt=s.convert(E.type)),E.format===ni&&At===r.DEPTH_COMPONENT&&(At=r.DEPTH_STENCIL,E.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=yn,bt=s.convert(E.type))),Ct&&(pt?e.texStorage2D(r.TEXTURE_2D,1,At,ut.width,ut.height):e.texImage2D(r.TEXTURE_2D,0,At,ut.width,ut.height,0,Nt,bt,null));else if(E.isDataTexture)if(U.length>0&&Bt){pt&&Ct&&e.texStorage2D(r.TEXTURE_2D,Tt,At,U[0].width,U[0].height);for(let ht=0,G=U.length;ht<G;ht++)Mt=U[ht],pt?e.texSubImage2D(r.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,Nt,bt,Mt.data):e.texImage2D(r.TEXTURE_2D,ht,At,Mt.width,Mt.height,0,Nt,bt,Mt.data);E.generateMipmaps=!1}else pt?(Ct&&e.texStorage2D(r.TEXTURE_2D,Tt,At,ut.width,ut.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut.width,ut.height,Nt,bt,ut.data)):e.texImage2D(r.TEXTURE_2D,0,At,ut.width,ut.height,0,Nt,bt,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pt&&Ct&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,At,U[0].width,U[0].height,ut.depth);for(let ht=0,G=U.length;ht<G;ht++)Mt=U[ht],E.format!==ze?Nt!==null?pt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ut.depth,Nt,Mt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ht,At,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ut.depth,Nt,bt,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ht,At,Mt.width,Mt.height,ut.depth,0,Nt,bt,Mt.data)}else{pt&&Ct&&e.texStorage2D(r.TEXTURE_2D,Tt,At,U[0].width,U[0].height);for(let ht=0,G=U.length;ht<G;ht++)Mt=U[ht],E.format!==ze?Nt!==null?pt?e.compressedTexSubImage2D(r.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,Nt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,ht,At,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(r.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,Nt,bt,Mt.data):e.texImage2D(r.TEXTURE_2D,ht,At,Mt.width,Mt.height,0,Nt,bt,Mt.data)}else if(E.isDataArrayTexture)pt?(Ct&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,At,ut.width,ut.height,ut.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Nt,bt,ut.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,ut.width,ut.height,ut.depth,0,Nt,bt,ut.data);else if(E.isData3DTexture)pt?(Ct&&e.texStorage3D(r.TEXTURE_3D,Tt,At,ut.width,ut.height,ut.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Nt,bt,ut.data)):e.texImage3D(r.TEXTURE_3D,0,At,ut.width,ut.height,ut.depth,0,Nt,bt,ut.data);else if(E.isFramebufferTexture){if(Ct)if(pt)e.texStorage2D(r.TEXTURE_2D,Tt,At,ut.width,ut.height);else{let ht=ut.width,G=ut.height;for(let ft=0;ft<Tt;ft++)e.texImage2D(r.TEXTURE_2D,ft,At,ht,G,0,Nt,bt,null),ht>>=1,G>>=1}}else if(U.length>0&&Bt){pt&&Ct&&e.texStorage2D(r.TEXTURE_2D,Tt,At,U[0].width,U[0].height);for(let ht=0,G=U.length;ht<G;ht++)Mt=U[ht],pt?e.texSubImage2D(r.TEXTURE_2D,ht,0,0,Nt,bt,Mt):e.texImage2D(r.TEXTURE_2D,ht,At,Nt,bt,Mt);E.generateMipmaps=!1}else pt?(Ct&&e.texStorage2D(r.TEXTURE_2D,Tt,At,ut.width,ut.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Nt,bt,ut)):e.texImage2D(r.TEXTURE_2D,0,At,Nt,bt,ut);y(E,Bt)&&S(F),st.__version=tt.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function xt(M,E,O){if(E.image.length!==6)return;const F=$(M,E),q=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+O);const tt=n.get(q);if(q.version!==tt.__version||F===!0){e.activeTexture(r.TEXTURE0+O);const st=Kt.getPrimaries(Kt.workingColorSpace),ct=E.colorSpace===De?null:Kt.getPrimaries(E.colorSpace),dt=E.colorSpace===De||st===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const mt=E.isCompressedTexture||E.image[0].isCompressedTexture,Pt=E.image[0]&&E.image[0].isDataTexture,ut=[];for(let ht=0;ht<6;ht++)!mt&&!Pt?ut[ht]=_(E.image[ht],!1,!0,i.maxCubemapSize):ut[ht]=Pt?E.image[ht].image:E.image[ht],ut[ht]=P(E,ut[ht]);const Bt=ut[0],Nt=h(Bt)||a,bt=s.convert(E.format,E.colorSpace),At=s.convert(E.type),Mt=T(E.internalFormat,bt,At,E.colorSpace),U=a&&E.isVideoTexture!==!0,pt=tt.__version===void 0||F===!0;let Ct=A(E,Bt,Nt);j(r.TEXTURE_CUBE_MAP,E,Nt);let Tt;if(mt){U&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,Mt,Bt.width,Bt.height);for(let ht=0;ht<6;ht++){Tt=ut[ht].mipmaps;for(let G=0;G<Tt.length;G++){const ft=Tt[G];E.format!==ze?bt!==null?U?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,0,0,ft.width,ft.height,bt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,Mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,0,0,ft.width,ft.height,bt,At,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,Mt,ft.width,ft.height,0,bt,At,ft.data)}}}else{Tt=E.mipmaps,U&&pt&&(Tt.length>0&&Ct++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,Mt,ut[0].width,ut[0].height));for(let ht=0;ht<6;ht++)if(Pt){U?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ut[ht].width,ut[ht].height,bt,At,ut[ht].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Mt,ut[ht].width,ut[ht].height,0,bt,At,ut[ht].data);for(let G=0;G<Tt.length;G++){const _t=Tt[G].image[ht].image;U?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,0,0,_t.width,_t.height,bt,At,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,Mt,_t.width,_t.height,0,bt,At,_t.data)}}else{U?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,bt,At,ut[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Mt,bt,At,ut[ht]);for(let G=0;G<Tt.length;G++){const ft=Tt[G];U?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,0,0,bt,At,ft.image[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,Mt,bt,At,ft.image[ht])}}}y(E,Nt)&&S(r.TEXTURE_CUBE_MAP),tt.__version=q.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function yt(M,E,O,F,q,tt){const st=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),dt=T(O.internalFormat,st,ct,O.colorSpace);if(!n.get(E).__hasExternalTextures){const Pt=Math.max(1,E.width>>tt),ut=Math.max(1,E.height>>tt);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?e.texImage3D(q,tt,dt,Pt,ut,E.depth,0,st,ct,null):e.texImage2D(q,tt,dt,Pt,ut,0,st,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,M),X(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,F,q,n.get(O).__webglTexture,0,Q(E)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,F,q,n.get(O).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(M,E,O){if(r.bindRenderbuffer(r.RENDERBUFFER,M),E.depthBuffer&&!E.stencilBuffer){let F=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||X(E)){const q=E.depthTexture;q&&q.isDepthTexture&&(q.type===an?F=r.DEPTH_COMPONENT32F:q.type===sn&&(F=r.DEPTH_COMPONENT24));const tt=Q(E);X(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,F,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,F,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,F,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(E.depthBuffer&&E.stencilBuffer){const F=Q(E);O&&X(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,r.DEPTH24_STENCIL8,E.width,E.height):X(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{const F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let q=0;q<F.length;q++){const tt=F[q],st=s.convert(tt.format,tt.colorSpace),ct=s.convert(tt.type),dt=T(tt.internalFormat,st,ct,tt.colorSpace),mt=Q(E);O&&X(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,dt,E.width,E.height):X(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(M,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,M),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const F=n.get(E.depthTexture).__webglTexture,q=Q(E);if(E.depthTexture.format===Mn)X(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,F,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,F,0);else if(E.depthTexture.format===ni)X(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,F,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Et(M){const E=n.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");St(E.__webglFramebuffer,M)}else if(O){E.__webglDepthbuffer=[];for(let F=0;F<6;F++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[F]),E.__webglDepthbuffer[F]=r.createRenderbuffer(),vt(E.__webglDepthbuffer[F],M,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),vt(E.__webglDepthbuffer,M,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(M,E,O){const F=n.get(M);E!==void 0&&yt(F.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Et(M)}function et(M){const E=M.texture,O=n.get(M),F=n.get(E);M.addEventListener("dispose",H),M.isWebGLMultipleRenderTargets!==!0&&(F.__webglTexture===void 0&&(F.__webglTexture=r.createTexture()),F.__version=E.version,o.memory.textures++);const q=M.isWebGLCubeRenderTarget===!0,tt=M.isWebGLMultipleRenderTargets===!0,st=h(M)||a;if(q){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let dt=0;dt<E.mipmaps.length;dt++)O.__webglFramebuffer[ct][dt]=r.createFramebuffer()}else O.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)O.__webglFramebuffer[ct]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){const ct=M.texture;for(let dt=0,mt=ct.length;dt<mt;dt++){const Pt=n.get(ct[dt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&X(M)===!1){const ct=tt?E:[E];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<ct.length;dt++){const mt=ct[dt];O.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const Pt=s.convert(mt.format,mt.colorSpace),ut=s.convert(mt.type),Bt=T(mt.internalFormat,Pt,ut,mt.colorSpace,M.isXRRenderTarget===!0),Nt=Q(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,Bt,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture),j(r.TEXTURE_CUBE_MAP,E,st);for(let ct=0;ct<6;ct++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)yt(O.__webglFramebuffer[ct][dt],M,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else yt(O.__webglFramebuffer[ct],M,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(E,st)&&S(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const ct=M.texture;for(let dt=0,mt=ct.length;dt<mt;dt++){const Pt=ct[dt],ut=n.get(Pt);e.bindTexture(r.TEXTURE_2D,ut.__webglTexture),j(r.TEXTURE_2D,Pt,st),yt(O.__webglFramebuffer,M,Pt,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),y(Pt,st)&&S(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ct=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,F.__webglTexture),j(ct,E,st),a&&E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)yt(O.__webglFramebuffer[dt],M,E,r.COLOR_ATTACHMENT0,ct,dt);else yt(O.__webglFramebuffer,M,E,r.COLOR_ATTACHMENT0,ct,0);y(E,st)&&S(ct),e.unbindTexture()}M.depthBuffer&&Et(M)}function Zt(M){const E=h(M)||a,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let F=0,q=O.length;F<q;F++){const tt=O[F];if(y(tt,E)){const st=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ct=n.get(tt).__webglTexture;e.bindTexture(st,ct),S(st),e.unbindTexture()}}}function x(M){if(a&&M.samples>0&&X(M)===!1){const E=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,F=M.height;let q=r.COLOR_BUFFER_BIT;const tt=[],st=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=n.get(M),dt=M.isWebGLMultipleRenderTargets===!0;if(dt)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){tt.push(r.COLOR_ATTACHMENT0+mt),M.depthBuffer&&tt.push(st);const Pt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Pt===!1&&(M.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),dt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[mt]),Pt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[st]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[st])),dt){const ut=n.get(E[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,O,F,0,0,O,F,q,r.NEAREST),u&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,ct.__webglColorRenderbuffer[mt]);const Pt=n.get(E[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Pt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Q(M){return Math.min(i.maxSamples,M.samples)}function X(M){const E=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function I(M){const E=o.render.frame;d.get(M)!==E&&(d.set(M,E),M.update())}function P(M,E){const O=M.colorSpace,F=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===es||O!==$e&&O!==De&&(Kt.getTransfer(O)===$t?a===!1?t.has("EXT_sRGB")===!0&&F===ze?(M.format=es,M.minFilter=Le,M.generateMipmaps=!1):E=So.sRGBToLinear(E):(F!==ze||q!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=v,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=W,this.rebindTextures=Rt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=x,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=X}function Kd(r,t,e){const n=e.isWebGL2;function i(s,o=De){let a;const l=Kt.getTransfer(o);if(s===cn)return r.UNSIGNED_BYTE;if(s===co)return r.UNSIGNED_SHORT_4_4_4_4;if(s===uo)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ll)return r.BYTE;if(s===Pl)return r.SHORT;if(s===os)return r.UNSIGNED_SHORT;if(s===lo)return r.INT;if(s===sn)return r.UNSIGNED_INT;if(s===an)return r.FLOAT;if(s===vi)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dl)return r.ALPHA;if(s===ze)return r.RGBA;if(s===Il)return r.LUMINANCE;if(s===Ul)return r.LUMINANCE_ALPHA;if(s===Mn)return r.DEPTH_COMPONENT;if(s===ni)return r.DEPTH_STENCIL;if(s===es)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nl)return r.RED;if(s===ho)return r.RED_INTEGER;if(s===Ol)return r.RG;if(s===fo)return r.RG_INTEGER;if(s===po)return r.RGBA_INTEGER;if(s===gr||s===vr||s===xr||s===Sr)if(l===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===As||s===Rs||s===Cs||s===Ls)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===As)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ls)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mo)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ps||s===Ds)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ps)return l===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ds)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Is||s===Us||s===Ns||s===Os||s===Fs||s===Bs||s===zs||s===ks||s===Gs||s===Hs||s===Vs||s===Ws||s===Xs||s===qs)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Is)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Us)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ns)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Os)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ks)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ws)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qs)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yr||s===Ys||s===js)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===yr)return l===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ys)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===js)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fl||s===Zs||s===Ks||s===$s)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===yr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ks)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$s)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yn?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class $d extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mi extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const h=e.getJointPose(_,n),c=this._getHandJoint(u,_);h!==null&&(c.matrix.fromArray(h.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=h.radius),c.visible=h!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=d.position.distanceTo(p.position),f=.02,g=.005;u.inputState.pinching&&m>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&m<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qd extends An{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,p=null,m=null,f=null,g=null;const _=e.getContextAttributes();let h=null,c=null;const y=[],S=[],T=new Ft;let A=null;const L=new Pe;L.layers.enable(1),L.viewport=new he;const w=new Pe;w.layers.enable(2),w.viewport=new he;const H=[L,w],b=new $d;b.layers.enable(1),b.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let $=y[j];return $===void 0&&($=new Xr,y[j]=$),$.getTargetRaySpace()},this.getControllerGrip=function(j){let $=y[j];return $===void 0&&($=new Xr,y[j]=$),$.getGripSpace()},this.getHand=function(j){let $=y[j];return $===void 0&&($=new Xr,y[j]=$),$.getHandSpace()};function C(j){const $=S.indexOf(j.inputSource);if($===-1)return;const it=y[$];it!==void 0&&(it.update(j.inputSource,j.frame,u||o),it.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",v);for(let j=0;j<y.length;j++){const $=S[j];$!==null&&(S[j]=null,y[j].disconnect($))}R=null,Y=null,t.setRenderTarget(h),f=null,m=null,p=null,i=null,c=null,B.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(h=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",k),i.addEventListener("inputsourceschange",v),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),c=new bn(f.framebufferWidth,f.framebufferHeight,{format:ze,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,it=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?ni:Mn,it=_.stencil?yn:sn);const yt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};p=new XRWebGLBinding(i,e),m=p.createProjectionLayer(yt),i.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),c=new bn(m.textureWidth,m.textureHeight,{format:ze,type:cn,depthTexture:new Io(m.textureWidth,m.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const vt=t.properties.get(c);vt.__ignoreDepthValues=m.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function v(j){for(let $=0;$<j.removed.length;$++){const it=j.removed[$],xt=S.indexOf(it);xt>=0&&(S[xt]=null,y[xt].disconnect(it))}for(let $=0;$<j.added.length;$++){const it=j.added[$];let xt=S.indexOf(it);if(xt===-1){for(let vt=0;vt<y.length;vt++)if(vt>=S.length){S.push(it),xt=vt;break}else if(S[vt]===null){S[vt]=it,xt=vt;break}if(xt===-1)break}const yt=y[xt];yt&&yt.connect(it)}}const N=new K,Z=new K;function V(j,$,it){N.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(it.matrixWorld);const xt=N.distanceTo(Z),yt=$.projectionMatrix.elements,vt=it.projectionMatrix.elements,St=yt[14]/(yt[10]-1),Et=yt[14]/(yt[10]+1),Rt=(yt[9]+1)/yt[5],et=(yt[9]-1)/yt[5],Zt=(yt[8]-1)/yt[0],x=(vt[8]+1)/vt[0],Q=St*Zt,X=St*x,I=xt/(-Zt+x),P=I*-Zt;$.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(P),j.translateZ(I),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const M=St+I,E=Et+I,O=Q-P,F=X+(xt-P),q=Rt*Et/E*M,tt=et*Et/E*M;j.projectionMatrix.makePerspective(O,F,q,tt,M,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function rt(j,$){$===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices($.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=w.near=L.near=j.near,b.far=w.far=L.far=j.far,(R!==b.near||Y!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,Y=b.far);const $=j.parent,it=b.cameras;rt(b,$);for(let xt=0;xt<it.length;xt++)rt(it[xt],$);it.length===2?V(b,L,w):b.projectionMatrix.copy(L.projectionMatrix),W(j,b,$)};function W(j,$,it){it===null?j.matrix.copy($.matrixWorld):(j.matrix.copy(it.matrixWorld),j.matrix.invert(),j.matrix.multiply($.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy($.projectionMatrix),j.projectionMatrixInverse.copy($.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ns*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function(j){l=j,m!==null&&(m.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let nt=null;function z(j,$){if(d=$.getViewerPose(u||o),g=$,d!==null){const it=d.views;f!==null&&(t.setRenderTargetFramebuffer(c,f.framebuffer),t.setRenderTarget(c));let xt=!1;it.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let yt=0;yt<it.length;yt++){const vt=it[yt];let St=null;if(f!==null)St=f.getViewport(vt);else{const Rt=p.getViewSubImage(m,vt);St=Rt.viewport,yt===0&&(t.setRenderTargetTextures(c,Rt.colorTexture,m.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(c))}let Et=H[yt];Et===void 0&&(Et=new Pe,Et.layers.enable(yt),Et.viewport=new he,H[yt]=Et),Et.matrix.fromArray(vt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(vt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(St.x,St.y,St.width,St.height),yt===0&&(b.matrix.copy(Et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(Et)}}for(let it=0;it<y.length;it++){const xt=S[it],yt=y[it];xt!==null&&yt!==void 0&&yt.update(xt,$,u||o)}nt&&nt(j,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const B=new Po;B.setAnimationLoop(z),this.setAnimationLoop=function(j){nt=j},this.dispose=function(){}}}function tp(r,t){function e(h,c){h.matrixAutoUpdate===!0&&h.updateMatrix(),c.value.copy(h.matrix)}function n(h,c){c.color.getRGB(h.fogColor.value,Ro(r)),c.isFog?(h.fogNear.value=c.near,h.fogFar.value=c.far):c.isFogExp2&&(h.fogDensity.value=c.density)}function i(h,c,y,S,T){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(h,c):c.isMeshToonMaterial?(s(h,c),p(h,c)):c.isMeshPhongMaterial?(s(h,c),d(h,c)):c.isMeshStandardMaterial?(s(h,c),m(h,c),c.isMeshPhysicalMaterial&&f(h,c,T)):c.isMeshMatcapMaterial?(s(h,c),g(h,c)):c.isMeshDepthMaterial?s(h,c):c.isMeshDistanceMaterial?(s(h,c),_(h,c)):c.isMeshNormalMaterial?s(h,c):c.isLineBasicMaterial?(o(h,c),c.isLineDashedMaterial&&a(h,c)):c.isPointsMaterial?l(h,c,y,S):c.isSpriteMaterial?u(h,c):c.isShadowMaterial?(h.color.value.copy(c.color),h.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(h,c){h.opacity.value=c.opacity,c.color&&h.diffuse.value.copy(c.color),c.emissive&&h.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(h.map.value=c.map,e(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,e(c.alphaMap,h.alphaMapTransform)),c.bumpMap&&(h.bumpMap.value=c.bumpMap,e(c.bumpMap,h.bumpMapTransform),h.bumpScale.value=c.bumpScale,c.side===Me&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,e(c.normalMap,h.normalMapTransform),h.normalScale.value.copy(c.normalScale),c.side===Me&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,e(c.displacementMap,h.displacementMapTransform),h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,h.emissiveMapTransform)),c.specularMap&&(h.specularMap.value=c.specularMap,e(c.specularMap,h.specularMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest);const y=t.get(c).envMap;if(y&&(h.envMap.value=y,h.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=c.reflectivity,h.ior.value=c.ior,h.refractionRatio.value=c.refractionRatio),c.lightMap){h.lightMap.value=c.lightMap;const S=r._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=c.lightMapIntensity*S,e(c.lightMap,h.lightMapTransform)}c.aoMap&&(h.aoMap.value=c.aoMap,h.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,h.aoMapTransform))}function o(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,e(c.map,h.mapTransform))}function a(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}function l(h,c,y,S){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*y,h.scale.value=S*.5,c.map&&(h.map.value=c.map,e(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,e(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}function u(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,e(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,e(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}function d(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}function p(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}function m(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,h.roughnessMapTransform)),t.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}function f(h,c,y){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Me&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=y.texture,h.transmissionSamplerSize.value.set(y.width,y.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,c){c.matcap&&(h.matcap.value=c.matcap)}function _(h,c){const y=t.get(c).light;h.referencePosition.value.setFromMatrixPosition(y.matrixWorld),h.nearDistance.value=y.shadow.camera.near,h.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ep(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,S){const T=S.program;n.uniformBlockBinding(y,T)}function u(y,S){let T=i[y.id];T===void 0&&(g(y),T=d(y),i[y.id]=T,y.addEventListener("dispose",h));const A=S.program;n.updateUBOMapping(y,A);const L=t.render.frame;s[y.id]!==L&&(m(y),s[y.id]=L)}function d(y){const S=p();y.__bindingPointIndex=S;const T=r.createBuffer(),A=y.__size,L=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,A,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,T),T}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(y){const S=i[y.id],T=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let L=0,w=T.length;L<w;L++){const H=Array.isArray(T[L])?T[L]:[T[L]];for(let b=0,R=H.length;b<R;b++){const Y=H[b];if(f(Y,L,b,A)===!0){const C=Y.__offset,k=Array.isArray(Y.value)?Y.value:[Y.value];let v=0;for(let N=0;N<k.length;N++){const Z=k[N],V=_(Z);typeof Z=="number"||typeof Z=="boolean"?(Y.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,C+v,Y.__data)):Z.isMatrix3?(Y.__data[0]=Z.elements[0],Y.__data[1]=Z.elements[1],Y.__data[2]=Z.elements[2],Y.__data[3]=0,Y.__data[4]=Z.elements[3],Y.__data[5]=Z.elements[4],Y.__data[6]=Z.elements[5],Y.__data[7]=0,Y.__data[8]=Z.elements[6],Y.__data[9]=Z.elements[7],Y.__data[10]=Z.elements[8],Y.__data[11]=0):(Z.toArray(Y.__data,v),v+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,C,Y.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,T,A){const L=y.value,w=S+"_"+T;if(A[w]===void 0)return typeof L=="number"||typeof L=="boolean"?A[w]=L:A[w]=L.clone(),!0;{const H=A[w];if(typeof L=="number"||typeof L=="boolean"){if(H!==L)return A[w]=L,!0}else if(H.equals(L)===!1)return H.copy(L),!0}return!1}function g(y){const S=y.uniforms;let T=0;const A=16;for(let w=0,H=S.length;w<H;w++){const b=Array.isArray(S[w])?S[w]:[S[w]];for(let R=0,Y=b.length;R<Y;R++){const C=b[R],k=Array.isArray(C.value)?C.value:[C.value];for(let v=0,N=k.length;v<N;v++){const Z=k[v],V=_(Z),rt=T%A;rt!==0&&A-rt<V.boundary&&(T+=A-rt),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=V.storage}}}const L=T%A;return L>0&&(T+=A-L),y.__size=T,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function h(y){const S=y.target;S.removeEventListener("dispose",h);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function c(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:u,dispose:c}}class zo{constructor(t={}){const{canvas:e=Kl(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=t;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const c=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=ln,this.toneMappingExposure=1;const S=this;let T=!1,A=0,L=0,w=null,H=-1,b=null;const R=new he,Y=new he;let C=null;const k=new Xt(0);let v=0,N=e.width,Z=e.height,V=1,rt=null,W=null;const nt=new he(0,0,N,Z),z=new he(0,0,N,Z);let B=!1;const j=new cs;let $=!1,it=!1,xt=null;const yt=new Jt,vt=new Ft,St=new K,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return w===null?V:1}let et=n;function Zt(D,J){for(let ot=0;ot<D.length;ot++){const lt=D[ot],at=e.getContext(lt,J);if(at!==null)return at}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${as}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",ft,!1),et===null){const J=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&J.shift(),et=Zt(J,D),et===null)throw Zt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&et instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),et.getShaderPrecisionFormat===void 0&&(et.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let x,Q,X,I,P,M,E,O,F,q,tt,st,ct,dt,mt,Pt,ut,Bt,Nt,bt,At,Mt,U,pt;function Ct(){x=new hf(et),Q=new sf(et,x,t),x.init(Q),Mt=new Kd(et,x,Q),X=new jd(et,x,Q),I=new pf(et),P=new Ud,M=new Zd(et,x,X,P,Q,Mt,I),E=new of(S),O=new uf(S),F=new yc(et,Q),U=new nf(et,x,F,Q),q=new ff(et,F,I,U),tt=new vf(et,q,F,I),Nt=new gf(et,Q,M),Pt=new af(P),st=new Id(S,E,O,x,Q,U,Pt),ct=new tp(S,P),dt=new Od,mt=new Hd(x,Q),Bt=new ef(S,E,O,X,tt,m,l),ut=new Yd(S,tt,Q),pt=new ep(et,I,Q,X),bt=new rf(et,x,I,Q),At=new df(et,x,I,Q),I.programs=st.programs,S.capabilities=Q,S.extensions=x,S.properties=P,S.renderLists=dt,S.shadowMap=ut,S.state=X,S.info=I}Ct();const Tt=new Qd(S,et);this.xr=Tt,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){const D=x.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=x.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(N,Z,!1))},this.getSize=function(D){return D.set(N,Z)},this.setSize=function(D,J,ot=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=D,Z=J,e.width=Math.floor(D*V),e.height=Math.floor(J*V),ot===!0&&(e.style.width=D+"px",e.style.height=J+"px"),this.setViewport(0,0,D,J)},this.getDrawingBufferSize=function(D){return D.set(N*V,Z*V).floor()},this.setDrawingBufferSize=function(D,J,ot){N=D,Z=J,V=ot,e.width=Math.floor(D*ot),e.height=Math.floor(J*ot),this.setViewport(0,0,D,J)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(nt)},this.setViewport=function(D,J,ot,lt){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,J,ot,lt),X.viewport(R.copy(nt).multiplyScalar(V).floor())},this.getScissor=function(D){return D.copy(z)},this.setScissor=function(D,J,ot,lt){D.isVector4?z.set(D.x,D.y,D.z,D.w):z.set(D,J,ot,lt),X.scissor(Y.copy(z).multiplyScalar(V).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(D){X.setScissorTest(B=D)},this.setOpaqueSort=function(D){rt=D},this.setTransparentSort=function(D){W=D},this.getClearColor=function(D){return D.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(D=!0,J=!0,ot=!0){let lt=0;if(D){let at=!1;if(w!==null){const wt=w.texture.format;at=wt===po||wt===fo||wt===ho}if(at){const wt=w.texture.type,Lt=wt===cn||wt===sn||wt===os||wt===yn||wt===co||wt===uo,Ut=Bt.getClearColor(),Ot=Bt.getClearAlpha(),Ht=Ut.r,zt=Ut.g,kt=Ut.b;Lt?(f[0]=Ht,f[1]=zt,f[2]=kt,f[3]=Ot,et.clearBufferuiv(et.COLOR,0,f)):(g[0]=Ht,g[1]=zt,g[2]=kt,g[3]=Ot,et.clearBufferiv(et.COLOR,0,g))}else lt|=et.COLOR_BUFFER_BIT}J&&(lt|=et.DEPTH_BUFFER_BIT),ot&&(lt|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),dt.dispose(),mt.dispose(),P.dispose(),E.dispose(),O.dispose(),tt.dispose(),U.dispose(),pt.dispose(),st.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ne),Tt.removeEventListener("sessionend",jt),xt&&(xt.dispose(),xt=null),re.stop()};function ht(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=I.autoReset,J=ut.enabled,ot=ut.autoUpdate,lt=ut.needsUpdate,at=ut.type;Ct(),I.autoReset=D,ut.enabled=J,ut.autoUpdate=ot,ut.needsUpdate=lt,ut.type=at}function ft(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function _t(D){const J=D.target;J.removeEventListener("dispose",_t),It(J)}function It(D){Dt(D),P.remove(D)}function Dt(D){const J=P.get(D).programs;J!==void 0&&(J.forEach(function(ot){st.releaseProgram(ot)}),D.isShaderMaterial&&st.releaseShaderCache(D))}this.renderBufferDirect=function(D,J,ot,lt,at,wt){J===null&&(J=Et);const Lt=at.isMesh&&at.matrixWorld.determinant()<0,Ut=Wo(D,J,ot,lt,at);X.setMaterial(lt,Lt);let Ot=ot.index,Ht=1;if(lt.wireframe===!0){if(Ot=q.getWireframeAttribute(ot),Ot===void 0)return;Ht=2}const zt=ot.drawRange,kt=ot.attributes.position;let ie=zt.start*Ht,Ee=(zt.start+zt.count)*Ht;wt!==null&&(ie=Math.max(ie,wt.start*Ht),Ee=Math.min(Ee,(wt.start+wt.count)*Ht)),Ot!==null?(ie=Math.max(ie,0),Ee=Math.min(Ee,Ot.count)):kt!=null&&(ie=Math.max(ie,0),Ee=Math.min(Ee,kt.count));const ce=Ee-ie;if(ce<0||ce===1/0)return;U.setup(at,lt,Ut,ot,Ot);let He,Qt=bt;if(Ot!==null&&(He=F.get(Ot),Qt=At,Qt.setIndex(He)),at.isMesh)lt.wireframe===!0?(X.setLineWidth(lt.wireframeLinewidth*Rt()),Qt.setMode(et.LINES)):Qt.setMode(et.TRIANGLES);else if(at.isLine){let Vt=lt.linewidth;Vt===void 0&&(Vt=1),X.setLineWidth(Vt*Rt()),at.isLineSegments?Qt.setMode(et.LINES):at.isLineLoop?Qt.setMode(et.LINE_LOOP):Qt.setMode(et.LINE_STRIP)}else at.isPoints?Qt.setMode(et.POINTS):at.isSprite&&Qt.setMode(et.TRIANGLES);if(at.isBatchedMesh)Qt.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)Qt.renderInstances(ie,ce,at.count);else if(ot.isInstancedBufferGeometry){const Vt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,fr=Math.min(ot.instanceCount,Vt);Qt.renderInstances(ie,ce,fr)}else Qt.render(ie,ce)};function qt(D,J,ot){D.transparent===!0&&D.side===Ze&&D.forceSinglePass===!1?(D.side=Me,D.needsUpdate=!0,yi(D,J,ot),D.side=un,D.needsUpdate=!0,yi(D,J,ot),D.side=Ze):yi(D,J,ot)}this.compile=function(D,J,ot=null){ot===null&&(ot=D),h=mt.get(ot),h.init(),y.push(h),ot.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),D!==ot&&D.traverseVisible(function(at){at.isLight&&at.layers.test(J.layers)&&(h.pushLight(at),at.castShadow&&h.pushShadow(at))}),h.setupLights(S._useLegacyLights);const lt=new Set;return D.traverse(function(at){const wt=at.material;if(wt)if(Array.isArray(wt))for(let Lt=0;Lt<wt.length;Lt++){const Ut=wt[Lt];qt(Ut,ot,at),lt.add(Ut)}else qt(wt,ot,at),lt.add(wt)}),y.pop(),h=null,lt},this.compileAsync=function(D,J,ot=null){const lt=this.compile(D,J,ot);return new Promise(at=>{function wt(){if(lt.forEach(function(Lt){P.get(Lt).currentProgram.isReady()&&lt.delete(Lt)}),lt.size===0){at(D);return}setTimeout(wt,10)}x.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Yt=null;function te(D){Yt&&Yt(D)}function ne(){re.stop()}function jt(){re.start()}const re=new Po;re.setAnimationLoop(te),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(D){Yt=D,Tt.setAnimationLoop(D),D===null?re.stop():re.start()},Tt.addEventListener("sessionstart",ne),Tt.addEventListener("sessionend",jt),this.render=function(D,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(J),J=Tt.getCamera()),D.isScene===!0&&D.onBeforeRender(S,D,J,w),h=mt.get(D,y.length),h.init(),y.push(h),yt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),j.setFromProjectionMatrix(yt),it=this.localClippingEnabled,$=Pt.init(this.clippingPlanes,it),_=dt.get(D,c.length),_.init(),c.push(_),ke(D,J,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(rt,W),this.info.render.frame++,$===!0&&Pt.beginShadows();const ot=h.state.shadowsArray;if(ut.render(ot,D,J),$===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Bt.render(_,D),h.setupLights(S._useLegacyLights),J.isArrayCamera){const lt=J.cameras;for(let at=0,wt=lt.length;at<wt;at++){const Lt=lt[at];ps(_,D,Lt,Lt.viewport)}}else ps(_,D,J);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),D.isScene===!0&&D.onAfterRender(S,D,J),U.resetDefaultState(),H=-1,b=null,y.pop(),y.length>0?h=y[y.length-1]:h=null,c.pop(),c.length>0?_=c[c.length-1]:_=null};function ke(D,J,ot,lt){if(D.visible===!1)return;if(D.layers.test(J.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(J);else if(D.isLight)h.pushLight(D),D.castShadow&&h.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||j.intersectsSprite(D)){lt&&St.setFromMatrixPosition(D.matrixWorld).applyMatrix4(yt);const Lt=tt.update(D),Ut=D.material;Ut.visible&&_.push(D,Lt,Ut,ot,St.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||j.intersectsObject(D))){const Lt=tt.update(D),Ut=D.material;if(lt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),St.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),St.copy(Lt.boundingSphere.center)),St.applyMatrix4(D.matrixWorld).applyMatrix4(yt)),Array.isArray(Ut)){const Ot=Lt.groups;for(let Ht=0,zt=Ot.length;Ht<zt;Ht++){const kt=Ot[Ht],ie=Ut[kt.materialIndex];ie&&ie.visible&&_.push(D,Lt,ie,ot,St.z,kt)}}else Ut.visible&&_.push(D,Lt,Ut,ot,St.z,null)}}const wt=D.children;for(let Lt=0,Ut=wt.length;Lt<Ut;Lt++)ke(wt[Lt],J,ot,lt)}function ps(D,J,ot,lt){const at=D.opaque,wt=D.transmissive,Lt=D.transparent;h.setupLightsView(ot),$===!0&&Pt.setGlobalState(S.clippingPlanes,ot),wt.length>0&&Vo(at,wt,J,ot),lt&&X.viewport(R.copy(lt)),at.length>0&&Si(at,J,ot),wt.length>0&&Si(wt,J,ot),Lt.length>0&&Si(Lt,J,ot),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Vo(D,J,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;const wt=Q.isWebGL2;xt===null&&(xt=new bn(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")?vi:cn,minFilter:gi,samples:wt?4:0})),S.getDrawingBufferSize(vt),wt?xt.setSize(vt.x,vt.y):xt.setSize(is(vt.x),is(vt.y));const Lt=S.getRenderTarget();S.setRenderTarget(xt),S.getClearColor(k),v=S.getClearAlpha(),v<1&&S.setClearColor(16777215,.5),S.clear();const Ut=S.toneMapping;S.toneMapping=ln,Si(D,ot,lt),M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt);let Ot=!1;for(let Ht=0,zt=J.length;Ht<zt;Ht++){const kt=J[Ht],ie=kt.object,Ee=kt.geometry,ce=kt.material,He=kt.group;if(ce.side===Ze&&ie.layers.test(lt.layers)){const Qt=ce.side;ce.side=Me,ce.needsUpdate=!0,ms(ie,ot,lt,Ee,ce,He),ce.side=Qt,ce.needsUpdate=!0,Ot=!0}}Ot===!0&&(M.updateMultisampleRenderTarget(xt),M.updateRenderTargetMipmap(xt)),S.setRenderTarget(Lt),S.setClearColor(k,v),S.toneMapping=Ut}function Si(D,J,ot){const lt=J.isScene===!0?J.overrideMaterial:null;for(let at=0,wt=D.length;at<wt;at++){const Lt=D[at],Ut=Lt.object,Ot=Lt.geometry,Ht=lt===null?Lt.material:lt,zt=Lt.group;Ut.layers.test(ot.layers)&&ms(Ut,J,ot,Ot,Ht,zt)}}function ms(D,J,ot,lt,at,wt){D.onBeforeRender(S,J,ot,lt,at,wt),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),at.onBeforeRender(S,J,ot,lt,D,wt),at.transparent===!0&&at.side===Ze&&at.forceSinglePass===!1?(at.side=Me,at.needsUpdate=!0,S.renderBufferDirect(ot,J,lt,at,D,wt),at.side=un,at.needsUpdate=!0,S.renderBufferDirect(ot,J,lt,at,D,wt),at.side=Ze):S.renderBufferDirect(ot,J,lt,at,D,wt),D.onAfterRender(S,J,ot,lt,at,wt)}function yi(D,J,ot){J.isScene!==!0&&(J=Et);const lt=P.get(D),at=h.state.lights,wt=h.state.shadowsArray,Lt=at.state.version,Ut=st.getParameters(D,at.state,wt,J,ot),Ot=st.getProgramCacheKey(Ut);let Ht=lt.programs;lt.environment=D.isMeshStandardMaterial?J.environment:null,lt.fog=J.fog,lt.envMap=(D.isMeshStandardMaterial?O:E).get(D.envMap||lt.environment),Ht===void 0&&(D.addEventListener("dispose",_t),Ht=new Map,lt.programs=Ht);let zt=Ht.get(Ot);if(zt!==void 0){if(lt.currentProgram===zt&&lt.lightsStateVersion===Lt)return gs(D,Ut),zt}else Ut.uniforms=st.getUniforms(D),D.onBuild(ot,Ut,S),D.onBeforeCompile(Ut,S),zt=st.acquireProgram(Ut,Ot),Ht.set(Ot,zt),lt.uniforms=Ut.uniforms;const kt=lt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(kt.clippingPlanes=Pt.uniform),gs(D,Ut),lt.needsLights=qo(D),lt.lightsStateVersion=Lt,lt.needsLights&&(kt.ambientLightColor.value=at.state.ambient,kt.lightProbe.value=at.state.probe,kt.directionalLights.value=at.state.directional,kt.directionalLightShadows.value=at.state.directionalShadow,kt.spotLights.value=at.state.spot,kt.spotLightShadows.value=at.state.spotShadow,kt.rectAreaLights.value=at.state.rectArea,kt.ltc_1.value=at.state.rectAreaLTC1,kt.ltc_2.value=at.state.rectAreaLTC2,kt.pointLights.value=at.state.point,kt.pointLightShadows.value=at.state.pointShadow,kt.hemisphereLights.value=at.state.hemi,kt.directionalShadowMap.value=at.state.directionalShadowMap,kt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,kt.spotShadowMap.value=at.state.spotShadowMap,kt.spotLightMatrix.value=at.state.spotLightMatrix,kt.spotLightMap.value=at.state.spotLightMap,kt.pointShadowMap.value=at.state.pointShadowMap,kt.pointShadowMatrix.value=at.state.pointShadowMatrix),lt.currentProgram=zt,lt.uniformsList=null,zt}function _s(D){if(D.uniformsList===null){const J=D.currentProgram.getUniforms();D.uniformsList=Ji.seqWithValue(J.seq,D.uniforms)}return D.uniformsList}function gs(D,J){const ot=P.get(D);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Wo(D,J,ot,lt,at){J.isScene!==!0&&(J=Et),M.resetTextureUnits();const wt=J.fog,Lt=lt.isMeshStandardMaterial?J.environment:null,Ut=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$e,Ot=(lt.isMeshStandardMaterial?O:E).get(lt.envMap||Lt),Ht=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,zt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),kt=!!ot.morphAttributes.position,ie=!!ot.morphAttributes.normal,Ee=!!ot.morphAttributes.color;let ce=ln;lt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ce=S.toneMapping);const He=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Qt=He!==void 0?He.length:0,Vt=P.get(lt),fr=h.state.lights;if($===!0&&(it===!0||D!==b)){const Re=D===b&&lt.id===H;Pt.setState(lt,D,Re)}let ee=!1;lt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==fr.state.version||Vt.outputColorSpace!==Ut||at.isBatchedMesh&&Vt.batching===!1||!at.isBatchedMesh&&Vt.batching===!0||at.isInstancedMesh&&Vt.instancing===!1||!at.isInstancedMesh&&Vt.instancing===!0||at.isSkinnedMesh&&Vt.skinning===!1||!at.isSkinnedMesh&&Vt.skinning===!0||at.isInstancedMesh&&Vt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Vt.instancingColor===!1&&at.instanceColor!==null||Vt.envMap!==Ot||lt.fog===!0&&Vt.fog!==wt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Pt.numPlanes||Vt.numIntersection!==Pt.numIntersection)||Vt.vertexAlphas!==Ht||Vt.vertexTangents!==zt||Vt.morphTargets!==kt||Vt.morphNormals!==ie||Vt.morphColors!==Ee||Vt.toneMapping!==ce||Q.isWebGL2===!0&&Vt.morphTargetsCount!==Qt)&&(ee=!0):(ee=!0,Vt.__version=lt.version);let hn=Vt.currentProgram;ee===!0&&(hn=yi(lt,J,at));let vs=!1,ai=!1,dr=!1;const pe=hn.getUniforms(),fn=Vt.uniforms;if(X.useProgram(hn.program)&&(vs=!0,ai=!0,dr=!0),lt.id!==H&&(H=lt.id,ai=!0),vs||b!==D){pe.setValue(et,"projectionMatrix",D.projectionMatrix),pe.setValue(et,"viewMatrix",D.matrixWorldInverse);const Re=pe.map.cameraPosition;Re!==void 0&&Re.setValue(et,St.setFromMatrixPosition(D.matrixWorld)),Q.logarithmicDepthBuffer&&pe.setValue(et,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&pe.setValue(et,"isOrthographic",D.isOrthographicCamera===!0),b!==D&&(b=D,ai=!0,dr=!0)}if(at.isSkinnedMesh){pe.setOptional(et,at,"bindMatrix"),pe.setOptional(et,at,"bindMatrixInverse");const Re=at.skeleton;Re&&(Q.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),pe.setValue(et,"boneTexture",Re.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}at.isBatchedMesh&&(pe.setOptional(et,at,"batchingTexture"),pe.setValue(et,"batchingTexture",at._matricesTexture,M));const pr=ot.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&Q.isWebGL2===!0)&&Nt.update(at,ot,hn),(ai||Vt.receiveShadow!==at.receiveShadow)&&(Vt.receiveShadow=at.receiveShadow,pe.setValue(et,"receiveShadow",at.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(fn.envMap.value=Ot,fn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ai&&(pe.setValue(et,"toneMappingExposure",S.toneMappingExposure),Vt.needsLights&&Xo(fn,dr),wt&&lt.fog===!0&&ct.refreshFogUniforms(fn,wt),ct.refreshMaterialUniforms(fn,lt,V,Z,xt),Ji.upload(et,_s(Vt),fn,M)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ji.upload(et,_s(Vt),fn,M),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&pe.setValue(et,"center",at.center),pe.setValue(et,"modelViewMatrix",at.modelViewMatrix),pe.setValue(et,"normalMatrix",at.normalMatrix),pe.setValue(et,"modelMatrix",at.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Re=lt.uniformsGroups;for(let mr=0,Yo=Re.length;mr<Yo;mr++)if(Q.isWebGL2){const xs=Re[mr];pt.update(xs,hn),pt.bind(xs,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function Xo(D,J){D.ambientLightColor.needsUpdate=J,D.lightProbe.needsUpdate=J,D.directionalLights.needsUpdate=J,D.directionalLightShadows.needsUpdate=J,D.pointLights.needsUpdate=J,D.pointLightShadows.needsUpdate=J,D.spotLights.needsUpdate=J,D.spotLightShadows.needsUpdate=J,D.rectAreaLights.needsUpdate=J,D.hemisphereLights.needsUpdate=J}function qo(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(D,J,ot){P.get(D.texture).__webglTexture=J,P.get(D.depthTexture).__webglTexture=ot;const lt=P.get(D);lt.__hasExternalTextures=!0,lt.__hasExternalTextures&&(lt.__autoAllocateDepthBuffer=ot===void 0,lt.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,J){const ot=P.get(D);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(D,J=0,ot=0){w=D,A=J,L=ot;let lt=!0,at=null,wt=!1,Lt=!1;if(D){const Ot=P.get(D);Ot.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(et.FRAMEBUFFER,null),lt=!1):Ot.__webglFramebuffer===void 0?M.setupRenderTarget(D):Ot.__hasExternalTextures&&M.rebindTextures(D,P.get(D.texture).__webglTexture,P.get(D.depthTexture).__webglTexture);const Ht=D.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Lt=!0);const zt=P.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(zt[J])?at=zt[J][ot]:at=zt[J],wt=!0):Q.isWebGL2&&D.samples>0&&M.useMultisampledRTT(D)===!1?at=P.get(D).__webglMultisampledFramebuffer:Array.isArray(zt)?at=zt[ot]:at=zt,R.copy(D.viewport),Y.copy(D.scissor),C=D.scissorTest}else R.copy(nt).multiplyScalar(V).floor(),Y.copy(z).multiplyScalar(V).floor(),C=B;if(X.bindFramebuffer(et.FRAMEBUFFER,at)&&Q.drawBuffers&&lt&&X.drawBuffers(D,at),X.viewport(R),X.scissor(Y),X.setScissorTest(C),wt){const Ot=P.get(D.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ot.__webglTexture,ot)}else if(Lt){const Ot=P.get(D.texture),Ht=J||0;et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,Ot.__webglTexture,ot||0,Ht)}H=-1},this.readRenderTargetPixels=function(D,J,ot,lt,at,wt,Lt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){X.bindFramebuffer(et.FRAMEBUFFER,Ut);try{const Ot=D.texture,Ht=Ot.format,zt=Ot.type;if(Ht!==ze&&Mt.convert(Ht)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=zt===vi&&(x.has("EXT_color_buffer_half_float")||Q.isWebGL2&&x.has("EXT_color_buffer_float"));if(zt!==cn&&Mt.convert(zt)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===an&&(Q.isWebGL2||x.has("OES_texture_float")||x.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=D.width-lt&&ot>=0&&ot<=D.height-at&&et.readPixels(J,ot,lt,at,Mt.convert(Ht),Mt.convert(zt),wt)}finally{const Ot=w!==null?P.get(w).__webglFramebuffer:null;X.bindFramebuffer(et.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(D,J,ot=0){const lt=Math.pow(2,-ot),at=Math.floor(J.image.width*lt),wt=Math.floor(J.image.height*lt);M.setTexture2D(J,0),et.copyTexSubImage2D(et.TEXTURE_2D,ot,0,0,D.x,D.y,at,wt),X.unbindTexture()},this.copyTextureToTexture=function(D,J,ot,lt=0){const at=J.image.width,wt=J.image.height,Lt=Mt.convert(ot.format),Ut=Mt.convert(ot.type);M.setTexture2D(ot,0),et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,ot.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,ot.unpackAlignment),J.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,lt,D.x,D.y,at,wt,Lt,Ut,J.image.data):J.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,lt,D.x,D.y,J.mipmaps[0].width,J.mipmaps[0].height,Lt,J.mipmaps[0].data):et.texSubImage2D(et.TEXTURE_2D,lt,D.x,D.y,Lt,Ut,J.image),lt===0&&ot.generateMipmaps&&et.generateMipmap(et.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(D,J,ot,lt,at=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=D.max.x-D.min.x+1,Lt=D.max.y-D.min.y+1,Ut=D.max.z-D.min.z+1,Ot=Mt.convert(lt.format),Ht=Mt.convert(lt.type);let zt;if(lt.isData3DTexture)M.setTexture3D(lt,0),zt=et.TEXTURE_3D;else if(lt.isDataArrayTexture||lt.isCompressedArrayTexture)M.setTexture2DArray(lt,0),zt=et.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,lt.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,lt.unpackAlignment);const kt=et.getParameter(et.UNPACK_ROW_LENGTH),ie=et.getParameter(et.UNPACK_IMAGE_HEIGHT),Ee=et.getParameter(et.UNPACK_SKIP_PIXELS),ce=et.getParameter(et.UNPACK_SKIP_ROWS),He=et.getParameter(et.UNPACK_SKIP_IMAGES),Qt=ot.isCompressedTexture?ot.mipmaps[at]:ot.image;et.pixelStorei(et.UNPACK_ROW_LENGTH,Qt.width),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Qt.height),et.pixelStorei(et.UNPACK_SKIP_PIXELS,D.min.x),et.pixelStorei(et.UNPACK_SKIP_ROWS,D.min.y),et.pixelStorei(et.UNPACK_SKIP_IMAGES,D.min.z),ot.isDataTexture||ot.isData3DTexture?et.texSubImage3D(zt,at,J.x,J.y,J.z,wt,Lt,Ut,Ot,Ht,Qt.data):ot.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),et.compressedTexSubImage3D(zt,at,J.x,J.y,J.z,wt,Lt,Ut,Ot,Qt.data)):et.texSubImage3D(zt,at,J.x,J.y,J.z,wt,Lt,Ut,Ot,Ht,Qt),et.pixelStorei(et.UNPACK_ROW_LENGTH,kt),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,ie),et.pixelStorei(et.UNPACK_SKIP_PIXELS,Ee),et.pixelStorei(et.UNPACK_SKIP_ROWS,ce),et.pixelStorei(et.UNPACK_SKIP_IMAGES,He),at===0&&lt.generateMipmaps&&et.generateMipmap(zt),X.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?M.setTextureCube(D,0):D.isData3DTexture?M.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?M.setTexture2DArray(D,0):M.setTexture2D(D,0),X.unbindTexture()},this.resetState=function(){A=0,L=0,w=null,X.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ls?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===or?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?En:_o}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===En?fe:$e}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class np extends zo{}np.prototype.isWebGL1Renderer=!0;class ip extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ka extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zn=new Jt,Ga=new Jt,Wi=[],Ha=new Rn,rp=new Jt,fi=new ge,di=new Cn;class Va extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zn),Ha.copy(t.boundingBox).applyMatrix4(Zn),this.boundingBox.union(Ha)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zn),di.copy(t.boundingSphere).applyMatrix4(Zn),this.boundingSphere.union(di)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),di.copy(this.boundingSphere),di.applyMatrix4(n),t.ray.intersectsSphere(di)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zn),Ga.multiplyMatrices(n,Zn),fi.matrixWorld=Ga,fi.raycast(t,Wi);for(let o=0,a=Wi.length;o<a;o++){const l=Wi[o];l.instanceId=s,l.object=this,e.push(l)}Wi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ko extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wa=new K,Xa=new K,qa=new Jt,qr=new lr,Xi=new Cn;class sp extends ae{constructor(t=new Ae,e=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Wa.fromBufferAttribute(e,i-1),Xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(i),Xi.radius+=s,t.ray.intersectsSphere(Xi)===!1)return;qa.copy(i).invert(),qr.copy(t.ray).applyMatrix4(qa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new K,d=new K,p=new K,m=new K,f=this.isLineSegments?2:1,g=n.index,h=n.attributes.position;if(g!==null){const c=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let S=c,T=y-1;S<T;S+=f){const A=g.getX(S),L=g.getX(S+1);if(u.fromBufferAttribute(h,A),d.fromBufferAttribute(h,L),qr.distanceSqToSegment(u,d,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(m);H<t.near||H>t.far||e.push({distance:H,point:p.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),y=Math.min(h.count,o.start+o.count);for(let S=c,T=y-1;S<T;S+=f){if(u.fromBufferAttribute(h,S),d.fromBufferAttribute(h,S+1),qr.distanceSqToSegment(u,d,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(m);L<t.near||L>t.far||e.push({distance:L,point:p.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ya=new K,ja=new K;class ap extends sp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Ya.fromBufferAttribute(e,i),ja.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ya.distanceTo(ja);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Go extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Za=new Jt,ss=new lr,qi=new Cn,Yi=new K;class op extends ae{constructor(t=new Ae,e=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(i),qi.radius+=s,t.ray.intersectsSphere(qi)===!1)return;Za.copy(i).invert(),ss.copy(t.ray).applyMatrix4(Za);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=m,_=f;g<_;g++){const h=u.getX(g);Yi.fromBufferAttribute(p,h),Ka(Yi,h,l,i,t,e,this)}}else{const m=Math.max(0,o.start),f=Math.min(p.count,o.start+o.count);for(let g=m,_=f;g<_;g++)Yi.fromBufferAttribute(p,g),Ka(Yi,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ka(r,t,e,n,i,s,o){const a=ss.distanceSqToPoint(r);if(a<e){const l=new K;ss.closestPointToPoint(r,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class hr extends Ae{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),s=Math.floor(s);const d=[],p=[],m=[],f=[];let g=0;const _=[],h=n/2;let c=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(m,3)),this.setAttribute("uv",new de(f,2));function y(){const T=new K,A=new K;let L=0;const w=(e-t)/n;for(let H=0;H<=s;H++){const b=[],R=H/s,Y=R*(e-t)+t;for(let C=0;C<=i;C++){const k=C/i,v=k*l+a,N=Math.sin(v),Z=Math.cos(v);A.x=Y*N,A.y=-R*n+h,A.z=Y*Z,p.push(A.x,A.y,A.z),T.set(N,w,Z).normalize(),m.push(T.x,T.y,T.z),f.push(k,1-R),b.push(g++)}_.push(b)}for(let H=0;H<i;H++)for(let b=0;b<s;b++){const R=_[b][H],Y=_[b+1][H],C=_[b+1][H+1],k=_[b][H+1];d.push(R,Y,k),d.push(Y,C,k),L+=6}u.addGroup(c,L,0),c+=L}function S(T){const A=g,L=new Ft,w=new K;let H=0;const b=T===!0?t:e,R=T===!0?1:-1;for(let C=1;C<=i;C++)p.push(0,h*R,0),m.push(0,R,0),f.push(.5,.5),g++;const Y=g;for(let C=0;C<=i;C++){const v=C/i*l+a,N=Math.cos(v),Z=Math.sin(v);w.x=b*Z,w.y=h*R,w.z=b*N,p.push(w.x,w.y,w.z),m.push(0,R,0),L.x=N*.5+.5,L.y=Z*.5*R+.5,f.push(L.x,L.y),g++}for(let C=0;C<i;C++){const k=A+C,v=Y+C;T===!0?d.push(v,v+1,k):d.push(v+1,v,k),H+=3}u.addGroup(c,H,T===!0?1:2),c+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fs extends hr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new fs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sr extends Ae{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const d=[],p=new K,m=new K,f=[],g=[],_=[],h=[];for(let c=0;c<=n;c++){const y=[],S=c/n;let T=0;c===0&&o===0?T=.5/e:c===n&&l===Math.PI&&(T=-.5/e);for(let A=0;A<=e;A++){const L=A/e;p.x=-t*Math.cos(i+L*s)*Math.sin(o+S*a),p.y=t*Math.cos(o+S*a),p.z=t*Math.sin(i+L*s)*Math.sin(o+S*a),g.push(p.x,p.y,p.z),m.copy(p).normalize(),_.push(m.x,m.y,m.z),h.push(L+T,1-S),y.push(u++)}d.push(y)}for(let c=0;c<n;c++)for(let y=0;y<e;y++){const S=d[c][y+1],T=d[c][y],A=d[c+1][y],L=d[c+1][y+1];(c!==0||o>0)&&f.push(S,T,L),(c!==n-1||l<Math.PI)&&f.push(T,A,L)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pi extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ds extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class lp extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new Jt,$a=new K,Ja=new K;class cp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$a.setFromMatrixPosition(t.matrixWorld),e.position.copy($a),Ja.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ja),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class up extends cp{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new up}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fp extends ds{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dp extends ap{constructor(t=10,e=10,n=4473924,i=8947848){n=new Xt(n),i=new Xt(i);const s=e/2,o=t/e,a=t/2,l=[],u=[];for(let m=0,f=0,g=-a;m<=e;m++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=m===s?n:i;_.toArray(u,f),f+=3,_.toArray(u,f),f+=3,_.toArray(u,f),f+=3,_.toArray(u,f),f+=3}const d=new Ae;d.setAttribute("position",new de(l,3)),d.setAttribute("color",new de(u,3));const p=new ko({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const to={type:"change"},jr={type:"start"},eo={type:"end"},ji=new lr,no=new rn,pp=Math.cos(70*Zl.DEG2RAD);class mp extends An{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pn.ROTATE,MIDDLE:Pn.DOLLY,RIGHT:Pn.PAN},this.touches={ONE:Dn.ROTATE,TWO:Dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",mt),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",mt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(to),n.update(),s=i.NONE},this.update=function(){const U=new K,pt=new Tn().setFromUnitVectors(t.up,new K(0,1,0)),Ct=pt.clone().invert(),Tt=new K,ht=new Tn,G=new K,ft=2*Math.PI;return function(It=null){const Dt=n.object.position;U.copy(Dt).sub(n.target),U.applyQuaternion(pt),a.setFromVector3(U),n.autoRotate&&s===i.NONE&&C(R(It)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qt=n.minAzimuthAngle,Yt=n.maxAzimuthAngle;isFinite(qt)&&isFinite(Yt)&&(qt<-Math.PI?qt+=ft:qt>Math.PI&&(qt-=ft),Yt<-Math.PI?Yt+=ft:Yt>Math.PI&&(Yt-=ft),qt<=Yt?a.theta=Math.max(qt,Math.min(Yt,a.theta)):a.theta=a.theta>(qt+Yt)/2?Math.max(qt,a.theta):Math.min(Yt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&L||n.object.isOrthographicCamera?a.radius=nt(a.radius):a.radius=nt(a.radius*u),U.setFromSpherical(a),U.applyQuaternion(Ct),Dt.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let te=!1;if(n.zoomToCursor&&L){let ne=null;if(n.object.isPerspectiveCamera){const jt=U.length();ne=nt(jt*u);const re=jt-ne;n.object.position.addScaledVector(T,re),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const jt=new K(A.x,A.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),te=!0;const re=new K(A.x,A.y,0);re.unproject(n.object),n.object.position.sub(re).add(jt),n.object.updateMatrixWorld(),ne=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ne).add(n.object.position):(ji.origin.copy(n.object.position),ji.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ji.direction))<pp?t.lookAt(n.target):(no.setFromNormalAndCoplanarPoint(n.object.up,n.target),ji.intersectPlane(no,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),te=!0);return u=1,L=!1,te||Tt.distanceToSquared(n.object.position)>o||8*(1-ht.dot(n.object.quaternion))>o||G.distanceToSquared(n.target)>0?(n.dispatchEvent(to),Tt.copy(n.object.position),ht.copy(n.object.quaternion),G.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Bt),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",tt),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",mt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Qa,l=new Qa;let u=1;const d=new K,p=new Ft,m=new Ft,f=new Ft,g=new Ft,_=new Ft,h=new Ft,c=new Ft,y=new Ft,S=new Ft,T=new K,A=new Ft;let L=!1;const w=[],H={};let b=!1;function R(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function Y(U){const pt=Math.abs(U*.01);return Math.pow(.95,n.zoomSpeed*pt)}function C(U){l.theta-=U}function k(U){l.phi-=U}const v=function(){const U=new K;return function(Ct,Tt){U.setFromMatrixColumn(Tt,0),U.multiplyScalar(-Ct),d.add(U)}}(),N=function(){const U=new K;return function(Ct,Tt){n.screenSpacePanning===!0?U.setFromMatrixColumn(Tt,1):(U.setFromMatrixColumn(Tt,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ct),d.add(U)}}(),Z=function(){const U=new K;return function(Ct,Tt){const ht=n.domElement;if(n.object.isPerspectiveCamera){const G=n.object.position;U.copy(G).sub(n.target);let ft=U.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),v(2*Ct*ft/ht.clientHeight,n.object.matrix),N(2*Tt*ft/ht.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(v(Ct*(n.object.right-n.object.left)/n.object.zoom/ht.clientWidth,n.object.matrix),N(Tt*(n.object.top-n.object.bottom)/n.object.zoom/ht.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function rt(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(U,pt){if(!n.zoomToCursor)return;L=!0;const Ct=n.domElement.getBoundingClientRect(),Tt=U-Ct.left,ht=pt-Ct.top,G=Ct.width,ft=Ct.height;A.x=Tt/G*2-1,A.y=-(ht/ft)*2+1,T.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function nt(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function z(U){p.set(U.clientX,U.clientY)}function B(U){W(U.clientX,U.clientX),c.set(U.clientX,U.clientY)}function j(U){g.set(U.clientX,U.clientY)}function $(U){m.set(U.clientX,U.clientY),f.subVectors(m,p).multiplyScalar(n.rotateSpeed);const pt=n.domElement;C(2*Math.PI*f.x/pt.clientHeight),k(2*Math.PI*f.y/pt.clientHeight),p.copy(m),n.update()}function it(U){y.set(U.clientX,U.clientY),S.subVectors(y,c),S.y>0?V(Y(S.y)):S.y<0&&rt(Y(S.y)),c.copy(y),n.update()}function xt(U){_.set(U.clientX,U.clientY),h.subVectors(_,g).multiplyScalar(n.panSpeed),Z(h.x,h.y),g.copy(_),n.update()}function yt(U){W(U.clientX,U.clientY),U.deltaY<0?rt(Y(U.deltaY)):U.deltaY>0&&V(Y(U.deltaY)),n.update()}function vt(U){let pt=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),pt=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),pt=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),pt=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),pt=!0;break}pt&&(U.preventDefault(),n.update())}function St(U){if(w.length===1)p.set(U.pageX,U.pageY);else{const pt=Mt(U),Ct=.5*(U.pageX+pt.x),Tt=.5*(U.pageY+pt.y);p.set(Ct,Tt)}}function Et(U){if(w.length===1)g.set(U.pageX,U.pageY);else{const pt=Mt(U),Ct=.5*(U.pageX+pt.x),Tt=.5*(U.pageY+pt.y);g.set(Ct,Tt)}}function Rt(U){const pt=Mt(U),Ct=U.pageX-pt.x,Tt=U.pageY-pt.y,ht=Math.sqrt(Ct*Ct+Tt*Tt);c.set(0,ht)}function et(U){n.enableZoom&&Rt(U),n.enablePan&&Et(U)}function Zt(U){n.enableZoom&&Rt(U),n.enableRotate&&St(U)}function x(U){if(w.length==1)m.set(U.pageX,U.pageY);else{const Ct=Mt(U),Tt=.5*(U.pageX+Ct.x),ht=.5*(U.pageY+Ct.y);m.set(Tt,ht)}f.subVectors(m,p).multiplyScalar(n.rotateSpeed);const pt=n.domElement;C(2*Math.PI*f.x/pt.clientHeight),k(2*Math.PI*f.y/pt.clientHeight),p.copy(m)}function Q(U){if(w.length===1)_.set(U.pageX,U.pageY);else{const pt=Mt(U),Ct=.5*(U.pageX+pt.x),Tt=.5*(U.pageY+pt.y);_.set(Ct,Tt)}h.subVectors(_,g).multiplyScalar(n.panSpeed),Z(h.x,h.y),g.copy(_)}function X(U){const pt=Mt(U),Ct=U.pageX-pt.x,Tt=U.pageY-pt.y,ht=Math.sqrt(Ct*Ct+Tt*Tt);y.set(0,ht),S.set(0,Math.pow(y.y/c.y,n.zoomSpeed)),V(S.y),c.copy(y);const G=(U.pageX+pt.x)*.5,ft=(U.pageY+pt.y)*.5;W(G,ft)}function I(U){n.enableZoom&&X(U),n.enablePan&&Q(U)}function P(U){n.enableZoom&&X(U),n.enableRotate&&x(U)}function M(U){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",O)),Nt(U),U.pointerType==="touch"?Pt(U):F(U))}function E(U){n.enabled!==!1&&(U.pointerType==="touch"?ut(U):q(U))}function O(U){bt(U),w.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",O)),n.dispatchEvent(eo),s=i.NONE}function F(U){let pt;switch(U.button){case 0:pt=n.mouseButtons.LEFT;break;case 1:pt=n.mouseButtons.MIDDLE;break;case 2:pt=n.mouseButtons.RIGHT;break;default:pt=-1}switch(pt){case Pn.DOLLY:if(n.enableZoom===!1)return;B(U),s=i.DOLLY;break;case Pn.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;j(U),s=i.PAN}else{if(n.enableRotate===!1)return;z(U),s=i.ROTATE}break;case Pn.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;z(U),s=i.ROTATE}else{if(n.enablePan===!1)return;j(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(jr)}function q(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(U);break;case i.DOLLY:if(n.enableZoom===!1)return;it(U);break;case i.PAN:if(n.enablePan===!1)return;xt(U);break}}function tt(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(jr),yt(st(U)),n.dispatchEvent(eo))}function st(U){const pt=U.deltaMode,Ct={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(pt){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return U.ctrlKey&&!b&&(Ct.deltaY*=10),Ct}function ct(U){U.key==="Control"&&(b=!0,document.addEventListener("keyup",dt,{passive:!0,capture:!0}))}function dt(U){U.key==="Control"&&(b=!1,document.removeEventListener("keyup",dt,{passive:!0,capture:!0}))}function mt(U){n.enabled===!1||n.enablePan===!1||vt(U)}function Pt(U){switch(At(U),w.length){case 1:switch(n.touches.ONE){case Dn.ROTATE:if(n.enableRotate===!1)return;St(U),s=i.TOUCH_ROTATE;break;case Dn.PAN:if(n.enablePan===!1)return;Et(U),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;et(U),s=i.TOUCH_DOLLY_PAN;break;case Dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Zt(U),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(jr)}function ut(U){switch(At(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;x(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Q(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(U),n.update();break;default:s=i.NONE}}function Bt(U){n.enabled!==!1&&U.preventDefault()}function Nt(U){w.push(U.pointerId)}function bt(U){delete H[U.pointerId];for(let pt=0;pt<w.length;pt++)if(w[pt]==U.pointerId){w.splice(pt,1);return}}function At(U){let pt=H[U.pointerId];pt===void 0&&(pt=new Ft,H[U.pointerId]=pt),pt.set(U.pageX,U.pageY)}function Mt(U){const pt=U.pointerId===w[0]?w[1]:w[0];return H[pt]}n.domElement.addEventListener("contextmenu",Bt),n.domElement.addEventListener("pointerdown",M),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",tt,{passive:!1}),document.addEventListener("keydown",ct,{passive:!0,capture:!0}),this.update()}}class _p{constructor(t){dn(this,"scene");dn(this,"camera");dn(this,"renderer");dn(this,"controls");dn(this,"container");dn(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)});console.log("🎨 Initializing TerrainRenderer..."),this.container=t,this.scene=new ip,this.scene.background=new Xt(8900331),console.log("✓ Scene created"),this.camera=new Pe(60,t.clientWidth/t.clientHeight,.1,1e3),this.camera.position.set(50,50,50),console.log("✓ Camera created at position:",this.camera.position),this.renderer=new zo({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=so,t.appendChild(this.renderer.domElement),console.log("✓ WebGL renderer created"),this.controls=new mp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=10,this.controls.maxDistance=500,console.log("✓ Orbit controls initialized"),this.setupLights(),console.log("✓ Lights added");const e=new dp(200,50,4473924,2236962);this.scene.add(e),console.log("✓ Grid helper added"),window.addEventListener("resize",()=>this.onWindowResize()),this.animate(),console.log("✓ Animation loop started"),console.log("🎨 TerrainRenderer initialization complete!")}setupLights(){const t=new fp(16777215,.5);this.scene.add(t);const e=new hp(16777215,.8);e.position.set(50,100,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,this.scene.add(e);const n=new lp(8900331,9139029,.3);this.scene.add(n)}loadTerrain(t){console.log("🌍 Loading terrain...",t),console.log(`  Map size: ${t.mapSize.x}×${t.mapSize.y}`),console.log(`  Terrain blocks: ${t.terrainBlocks.length}`),console.log(`  Water sources: ${t.waterSources.length}`),console.log(`  Trees: ${t.trees.length}`),console.log(`  Bushes: ${t.bushes.length}`),console.log("  Clearing existing terrain..."),this.clearTerrain(),console.log("  Rendering terrain blocks..."),this.renderTerrainBlocks(t.terrainBlocks),console.log("  Rendering water sources..."),this.renderWaterSources(t.waterSources),console.log("  Rendering trees..."),this.renderTrees(t.trees),console.log("  Rendering bushes..."),this.renderBushes(t.bushes);const e=t.mapSize.x/2,n=t.mapSize.y/2;console.log(`  Centering camera at: (${e}, 10, ${n})`),this.controls.target.set(e,10,n),this.camera.position.set(e+50,50,n+50),this.controls.update(),console.log("✓ Terrain loaded successfully!")}clearTerrain(){const t=[];this.scene.traverse(e=>{(e instanceof ge||e instanceof Va)&&t.push(e)}),t.forEach(e=>this.scene.remove(e))}renderTerrainBlocks(t){if(t.length===0)return;const e=new ri(1,1,1),n=new pi({color:9139029,roughness:.8,metalness:.2}),i=new Va(e,n,t.length);i.castShadow=!0,i.receiveShadow=!0;const s=new Jt;t.forEach((o,a)=>{s.setPosition(o.X,o.Y,o.Z),i.setMatrixAt(a,s)}),i.instanceMatrix.needsUpdate=!0,this.scene.add(i)}renderWaterSources(t){const e=new sr(.5,16,16),n=new pi({color:2003199,emissive:2003199,emissiveIntensity:.5,transparent:!0,opacity:.8});t.forEach(({coords:i,strength:s})=>{const o=new ge(e,n);o.position.set(i.X,i.Y,i.Z);const a=.5+s*.2;o.scale.setScalar(a),this.scene.add(o),this.addWaterParticles(i,s)})}addWaterParticles(t,e){const n=Math.floor(e*10),i=new Ae,s=new Float32Array(n*3);for(let l=0;l<n;l++)s[l*3]=t.X+(Math.random()-.5)*2,s[l*3+1]=t.Y+Math.random()*2,s[l*3+2]=t.Z+(Math.random()-.5)*2;i.setAttribute("position",new Ie(s,3));const o=new Go({color:5099745,size:.1,transparent:!0,opacity:.6}),a=new op(i,o);this.scene.add(a)}renderTrees(t){t.forEach(({coords:e,type:n})=>{const i=this.createTree(n);i.position.set(e.X,e.Y,e.Z),this.scene.add(i)})}createTree(t){const e=new mi,n=new hr(.15,.2,2,8),i=new pi({color:4863784}),s=new ge(n,i);s.position.y=1,s.castShadow=!0,e.add(s);const o=this.getTreeColor(t),a=new fs(.8,1.5,8),l=new pi({color:o}),u=new ge(a,l);u.position.y=2.5,u.castShadow=!0,e.add(u);const d=new ge(a,l);return d.position.y=3,d.scale.setScalar(.7),d.castShadow=!0,e.add(d),e}getTreeColor(t){return{Pine:2263842,Birch:9498256,Maple:16737095,ChestnutTree:3329330,MangroveTree:3050327}[t]||2263842}renderBushes(t){t.forEach(({coords:e,type:n})=>{const i=this.createBush(n);i.position.set(e.X,e.Y,e.Z),this.scene.add(i)})}createBush(t){const e=new sr(.3,8,8),n=t==="BlueberryBush"?4286945:16766720,i=new pi({color:n}),s=new ge(e,i);return s.castShadow=!0,s}onWindowResize(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)}dispose(){this.controls.dispose(),this.renderer.dispose(),window.removeEventListener("resize",()=>this.onWindowResize())}}var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Ki(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ho={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(r,t){(function(e){r.exports=e()})(function(){return function e(n,i,s){function o(u,d){if(!i[u]){if(!n[u]){var p=typeof Ki=="function"&&Ki;if(!d&&p)return p(u,!0);if(a)return a(u,!0);var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m}var f=i[u]={exports:{}};n[u][0].call(f.exports,function(g){var _=n[u][1][g];return o(_||g)},f,f.exports,e,n,i,s)}return i[u].exports}for(var a=typeof Ki=="function"&&Ki,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,i){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var u,d,p,m,f,g,_,h=[],c=0,y=l.length,S=y,T=s.getTypeOf(l)!=="string";c<l.length;)S=y-c,p=T?(u=l[c++],d=c<y?l[c++]:0,c<y?l[c++]:0):(u=l.charCodeAt(c++),d=c<y?l.charCodeAt(c++):0,c<y?l.charCodeAt(c++):0),m=u>>2,f=(3&u)<<4|d>>4,g=1<S?(15&d)<<2|p>>6:64,_=2<S?63&p:64,h.push(a.charAt(m)+a.charAt(f)+a.charAt(g)+a.charAt(_));return h.join("")},i.decode=function(l){var u,d,p,m,f,g,_=0,h=0,c="data:";if(l.substr(0,c.length)===c)throw new Error("Invalid base64 input, it looks like a data url.");var y,S=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&S--,l.charAt(l.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|S):new Array(0|S);_<l.length;)u=a.indexOf(l.charAt(_++))<<2|(m=a.indexOf(l.charAt(_++)))>>4,d=(15&m)<<4|(f=a.indexOf(l.charAt(_++)))>>2,p=(3&f)<<6|(g=a.indexOf(l.charAt(_++))),y[h++]=u,f!==64&&(y[h++]=d),g!==64&&(y[h++]=p);return y}},{"./support":30,"./utils":32}],2:[function(e,n,i){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(d,p,m,f,g){this.compressedSize=d,this.uncompressedSize=p,this.crc32=m,this.compression=f,this.compressedContent=g}u.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return d.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(d,p,m){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(p.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},n.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,i){var s=e("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,i){var s=e("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,d,p,m){var f=o,g=m+p;u^=-1;for(var _=m;_<g;_++)u=u>>>8^f[255&(u^d[_])];return-1^u}(0|l,a,a.length,0):function(u,d,p,m){var f=o,g=m+p;u^=-1;for(var _=m;_<g;_++)u=u>>>8^f[255&(u^d.charCodeAt(_))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(e,n,i){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function d(p,m){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=m,this.meta={}}i.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,p.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(m){p.push({data:m,meta:p.meta})}},i.compressWorker=function(p){return new d("Deflate",p)},i.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,i){function s(f,g){var _,h="";for(_=0;_<g;_++)h+=String.fromCharCode(255&f),f>>>=8;return h}function o(f,g,_,h,c,y){var S,T,A=f.file,L=f.compression,w=y!==u.utf8encode,H=a.transformTo("string",y(A.name)),b=a.transformTo("string",u.utf8encode(A.name)),R=A.comment,Y=a.transformTo("string",y(R)),C=a.transformTo("string",u.utf8encode(R)),k=b.length!==A.name.length,v=C.length!==R.length,N="",Z="",V="",rt=A.dir,W=A.date,nt={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(nt.crc32=f.crc32,nt.compressedSize=f.compressedSize,nt.uncompressedSize=f.uncompressedSize);var z=0;g&&(z|=8),w||!k&&!v||(z|=2048);var B=0,j=0;rt&&(B|=16),c==="UNIX"?(j=798,B|=function(it,xt){var yt=it;return it||(yt=xt?16893:33204),(65535&yt)<<16}(A.unixPermissions,rt)):(j=20,B|=function(it){return 63&(it||0)}(A.dosPermissions)),S=W.getUTCHours(),S<<=6,S|=W.getUTCMinutes(),S<<=5,S|=W.getUTCSeconds()/2,T=W.getUTCFullYear()-1980,T<<=4,T|=W.getUTCMonth()+1,T<<=5,T|=W.getUTCDate(),k&&(Z=s(1,1)+s(d(H),4)+b,N+="up"+s(Z.length,2)+Z),v&&(V=s(1,1)+s(d(Y),4)+C,N+="uc"+s(V.length,2)+V);var $="";return $+=`
\0`,$+=s(z,2),$+=L.magic,$+=s(S,2),$+=s(T,2),$+=s(nt.crc32,4),$+=s(nt.compressedSize,4),$+=s(nt.uncompressedSize,4),$+=s(H.length,2),$+=s(N.length,2),{fileRecord:p.LOCAL_FILE_HEADER+$+H+N,dirRecord:p.CENTRAL_FILE_HEADER+s(j,2)+$+s(Y.length,2)+"\0\0\0\0"+s(B,4)+s(h,4)+H+N+Y}}var a=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),d=e("../crc32"),p=e("../signature");function m(f,g,_,h){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=h,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(f){var g=f.meta.percent||0,_=this.entriesCount,h=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-h-1))/_:100}}))},m.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var _=o(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,_=o(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:function(h){return p.DATA_DESCRIPTOR+s(h.crc32,4)+s(h.compressedSize,4)+s(h.uncompressedSize,4)}(f),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-f,h=function(c,y,S,T,A){var L=a.transformTo("string",A(T));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(c,2)+s(c,2)+s(y,4)+s(S,4)+s(L.length,2)+L}(this.dirRecords.length,_,f,this.zipComment,this.encodeFileName);this.push({data:h,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(_){g.processChunk(_)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(_){g.error(_)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(f){var g=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var _=0;_<g.length;_++)try{g[_].error(f)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,i){var s=e("../compressions"),o=e("./ZipFileWorker");i.generateWorker=function(a,l,u){var d=new o(l.streamFiles,u,l.platform,l.encodeFileName),p=0;try{a.forEach(function(m,f){p++;var g=function(y,S){var T=y||S,A=s[T];if(!A)throw new Error(T+" is not a valid compression method !");return A}(f.options.compression,l.compression),_=f.options.compressionOptions||l.compressionOptions||{},h=f.dir,c=f.date;f._compressWorker(g,_).withStreamInfo("file",{name:m,dir:h,date:c,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=p}catch(m){d.error(m)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,i){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function p(m){return new o.Promise(function(f,g){var _=m.decompressed.getContentWorker().pipe(new u);_.on("error",function(h){g(h)}).on("end",function(){_.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(m,f){var g=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,f.optimizedBinaryString,f.base64).then(function(_){var h=new l(f);return h.load(_),h}).then(function(_){var h=[o.Promise.resolve(_)],c=_.files;if(f.checkCRC32)for(var y=0;y<c.length;y++)h.push(p(c[y]));return o.Promise.all(h)}).then(function(_){for(var h=_.shift(),c=h.files,y=0;y<c.length;y++){var S=c[y],T=S.fileNameStr,A=s.resolve(S.fileNameStr);g.file(A,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:f.createFolders}),S.dir||(g.file(A).unsafeOriginalName=T)}return h.zipComment.length&&(g.comment=h.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,i){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(d){u.push({data:d,meta:{percent:0}})}).on("error",function(d){u.isPaused?this.generatedError=d:u.error(d)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,i){var s=e("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var d=this;a.on("data",function(p,m){d.push(p)||d._helper.pause(),u&&u(m)}).on("error",function(p){d.emit("error",p)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,i){function s(A,L,w){var H,b=a.getTypeOf(L),R=a.extend(w||{},d);R.date=R.date||new Date,R.compression!==null&&(R.compression=R.compression.toUpperCase()),typeof R.unixPermissions=="string"&&(R.unixPermissions=parseInt(R.unixPermissions,8)),R.unixPermissions&&16384&R.unixPermissions&&(R.dir=!0),R.dosPermissions&&16&R.dosPermissions&&(R.dir=!0),R.dir&&(A=c(A)),R.createFolders&&(H=h(A))&&y.call(this,H,!0);var Y=b==="string"&&R.binary===!1&&R.base64===!1;w&&w.binary!==void 0||(R.binary=!Y),(L instanceof p&&L.uncompressedSize===0||R.dir||!L||L.length===0)&&(R.base64=!1,R.binary=!0,L="",R.compression="STORE",b="string");var C=null;C=L instanceof p||L instanceof l?L:g.isNode&&g.isStream(L)?new _(A,L):a.prepareContent(A,L,R.binary,R.optimizedBinaryString,R.base64);var k=new m(A,C,R);this.files[A]=k}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),d=e("./defaults"),p=e("./compressedObject"),m=e("./zipObject"),f=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),h=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var L=A.lastIndexOf("/");return 0<L?A.substring(0,L):""},c=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},y=function(A,L){return L=L!==void 0?L:d.createFolders,A=c(A),this.files[A]||s.call(this,A,null,{dir:!0,createFolders:L}),this.files[A]};function S(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var L,w,H;for(L in this.files)H=this.files[L],(w=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&A(w,H)},filter:function(A){var L=[];return this.forEach(function(w,H){A(w,H)&&L.push(H)}),L},file:function(A,L,w){if(arguments.length!==1)return A=this.root+A,s.call(this,A,L,w),this;if(S(A)){var H=A;return this.filter(function(R,Y){return!Y.dir&&H.test(R)})}var b=this.files[this.root+A];return b&&!b.dir?b:null},folder:function(A){if(!A)return this;if(S(A))return this.filter(function(b,R){return R.dir&&A.test(b)});var L=this.root+A,w=y.call(this,L),H=this.clone();return H.root=w.name,H},remove:function(A){A=this.root+A;var L=this.files[A];if(L||(A.slice(-1)!=="/"&&(A+="/"),L=this.files[A]),L&&!L.dir)delete this.files[A];else for(var w=this.filter(function(b,R){return R.name.slice(0,A.length)===A}),H=0;H<w.length;H++)delete this.files[w[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var L,w={};try{if((w=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=w.type.toLowerCase(),w.compression=w.compression.toUpperCase(),w.type==="binarystring"&&(w.type="string"),!w.type)throw new Error("No output type specified.");a.checkSupport(w.type),w.platform!=="darwin"&&w.platform!=="freebsd"&&w.platform!=="linux"&&w.platform!=="sunos"||(w.platform="UNIX"),w.platform==="win32"&&(w.platform="DOS");var H=w.comment||this.comment||"";L=f.generateWorker(this,w,H)}catch(b){(L=new l("error")).error(b)}return new u(L,w.type||"string",w.mimeType)},generateAsync:function(A,L){return this.generateInternalStream(A).accumulate(L)},generateNodeStream:function(A,L){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(L)}};n.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,i){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,i){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),d=a.charCodeAt(2),p=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===u&&this.data[m+2]===d&&this.data[m+3]===p)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),d=a.charCodeAt(2),p=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&u===m[1]&&d===m[2]&&p===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,i){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,i){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,i){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,i){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,i){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(p){var m=s.getTypeOf(p);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new u(p):o.uint8array?new d(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,i){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,i){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,i){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,i){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){u.dataIsReady=!0,u.data=d,u.max=d&&d.length||0,u.type=s.getTypeOf(d),u.isPaused||u._tickAndRepeat()},function(d){u.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,i){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),u=e("../support"),d=e("../external"),p=null;if(u.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,_){return new d.Promise(function(h,c){var y=[],S=g._internalType,T=g._outputType,A=g._mimeType;g.on("data",function(L,w){y.push(L),_&&_(w)}).on("error",function(L){y=[],c(L)}).on("end",function(){try{var L=function(w,H,b){switch(w){case"blob":return s.newBlob(s.transformTo("arraybuffer",H),b);case"base64":return l.encode(H);default:return s.transformTo(w,H)}}(T,function(w,H){var b,R=0,Y=null,C=0;for(b=0;b<H.length;b++)C+=H[b].length;switch(w){case"string":return H.join("");case"array":return Array.prototype.concat.apply([],H);case"uint8array":for(Y=new Uint8Array(C),b=0;b<H.length;b++)Y.set(H[b],R),R+=H[b].length;return Y;case"nodebuffer":return Buffer.concat(H);default:throw new Error("concat : unsupported type '"+w+"'")}}(S,y),A);h(L)}catch(w){c(w)}y=[]}).resume()})}function f(g,_,h){var c=_;switch(_){case"blob":case"arraybuffer":c="uint8array";break;case"base64":c="string"}try{this._internalType=c,this._outputType=_,this._mimeType=h,s.checkSupport(c),this._worker=g.pipe(new o(c)),g.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}f.prototype={accumulate:function(g){return m(this,g)},on:function(g,_){var h=this;return g==="data"?this._worker.on(g,function(c){_.call(h,c.data,c.meta)}):this._worker.on(g,function(){s.delay(_,arguments,h)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!e("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,i){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),d=0;d<256;d++)u[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;u[254]=u[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}i.utf8encode=function(f){return o.nodebuffer?a.newBufferFrom(f,"utf-8"):function(g){var _,h,c,y,S,T=g.length,A=0;for(y=0;y<T;y++)(64512&(h=g.charCodeAt(y)))==55296&&y+1<T&&(64512&(c=g.charCodeAt(y+1)))==56320&&(h=65536+(h-55296<<10)+(c-56320),y++),A+=h<128?1:h<2048?2:h<65536?3:4;for(_=o.uint8array?new Uint8Array(A):new Array(A),y=S=0;S<A;y++)(64512&(h=g.charCodeAt(y)))==55296&&y+1<T&&(64512&(c=g.charCodeAt(y+1)))==56320&&(h=65536+(h-55296<<10)+(c-56320),y++),h<128?_[S++]=h:(h<2048?_[S++]=192|h>>>6:(h<65536?_[S++]=224|h>>>12:(_[S++]=240|h>>>18,_[S++]=128|h>>>12&63),_[S++]=128|h>>>6&63),_[S++]=128|63&h);return _}(f)},i.utf8decode=function(f){return o.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):function(g){var _,h,c,y,S=g.length,T=new Array(2*S);for(_=h=0;_<S;)if((c=g[_++])<128)T[h++]=c;else if(4<(y=u[c]))T[h++]=65533,_+=y-1;else{for(c&=y===2?31:y===3?15:7;1<y&&_<S;)c=c<<6|63&g[_++],y--;1<y?T[h++]=65533:c<65536?T[h++]=c:(c-=65536,T[h++]=55296|c>>10&1023,T[h++]=56320|1023&c)}return T.length!==h&&(T.subarray?T=T.subarray(0,h):T.length=h),s.applyFromCharCode(T)}(f=s.transformTo(o.uint8array?"uint8array":"array",f))},s.inherits(p,l),p.prototype.processChunk=function(f){var g=s.transformTo(o.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var h=function(y,S){var T;for((S=S||y.length)>y.length&&(S=y.length),T=S-1;0<=T&&(192&y[T])==128;)T--;return T<0||T===0?S:T+u[y[T]]>S?T:S}(g),c=g;h!==g.length&&(o.uint8array?(c=g.subarray(0,h),this.leftOver=g.subarray(h,g.length)):(c=g.slice(0,h),this.leftOver=g.slice(h,g.length))),this.push({data:i.utf8decode(c),meta:f.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=p,s.inherits(m,l),m.prototype.processChunk=function(f){this.push({data:i.utf8encode(f.data),meta:f.meta})},i.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,i){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function u(_){return _}function d(_,h){for(var c=0;c<_.length;++c)h[c]=255&_.charCodeAt(c);return h}e("setimmediate"),i.newBlob=function(_,h){i.checkSupport("blob");try{return new Blob([_],{type:h})}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return c.append(_),c.getBlob(h)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(_,h,c){var y=[],S=0,T=_.length;if(T<=c)return String.fromCharCode.apply(null,_);for(;S<T;)h==="array"||h==="nodebuffer"?y.push(String.fromCharCode.apply(null,_.slice(S,Math.min(S+c,T)))):y.push(String.fromCharCode.apply(null,_.subarray(S,Math.min(S+c,T)))),S+=c;return y.join("")},stringifyByChar:function(_){for(var h="",c=0;c<_.length;c++)h+=String.fromCharCode(_[c]);return h},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(_){var h=65536,c=i.getTypeOf(_),y=!0;if(c==="uint8array"?y=p.applyCanBeUsed.uint8array:c==="nodebuffer"&&(y=p.applyCanBeUsed.nodebuffer),y)for(;1<h;)try{return p.stringifyByChunk(_,c,h)}catch{h=Math.floor(h/2)}return p.stringifyByChar(_)}function f(_,h){for(var c=0;c<_.length;c++)h[c]=_[c];return h}i.applyFromCharCode=m;var g={};g.string={string:u,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return d(_,new Uint8Array(_.length))},nodebuffer:function(_){return d(_,a.allocBuffer(_.length))}},g.array={string:m,array:u,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(_)}},g.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return f(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:u,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:m,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:u,nodebuffer:function(_){return a.newBufferFrom(_)}},g.nodebuffer={string:m,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return f(_,new Uint8Array(_.length))},nodebuffer:u},i.transformTo=function(_,h){if(h=h||"",!_)return h;i.checkSupport(_);var c=i.getTypeOf(h);return g[c][_](h)},i.resolve=function(_){for(var h=_.split("/"),c=[],y=0;y<h.length;y++){var S=h[y];S==="."||S===""&&y!==0&&y!==h.length-1||(S===".."?c.pop():c.push(S))}return c.join("/")},i.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(_){var h,c,y="";for(c=0;c<(_||"").length;c++)y+="\\x"+((h=_.charCodeAt(c))<16?"0":"")+h.toString(16).toUpperCase();return y},i.delay=function(_,h,c){setImmediate(function(){_.apply(c||null,h||[])})},i.inherits=function(_,h){function c(){}c.prototype=h.prototype,_.prototype=new c},i.extend=function(){var _,h,c={};for(_=0;_<arguments.length;_++)for(h in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],h)&&c[h]===void 0&&(c[h]=arguments[_][h]);return c},i.prepareContent=function(_,h,c,y,S){return l.Promise.resolve(h).then(function(T){return s.blob&&(T instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(T))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,L){var w=new FileReader;w.onload=function(H){A(H.target.result)},w.onerror=function(H){L(H.target.error)},w.readAsArrayBuffer(T)}):T}).then(function(T){var A=i.getTypeOf(T);return A?(A==="arraybuffer"?T=i.transformTo("uint8array",T):A==="string"&&(S?T=o.decode(T):c&&y!==!0&&(T=function(L){return d(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))}(T))),T):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,i){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),u=e("./support");function d(p){this.files=[],this.loadOptions=p}d.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(p)+")")}},isSignature:function(p,m){var f=this.reader.index;this.reader.setIndex(p);var g=this.reader.readString(4)===m;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),m=u.uint8array?"uint8array":"array",f=o.transformTo(m,p);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,m,f,g=this.zip64EndOfCentralSize-44;0<g;)p=this.reader.readInt(2),m=this.reader.readInt(4),f=this.reader.readData(m),this.zip64ExtensibleData[p]={id:p,length:m,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,m;for(p=0;p<this.files.length;p++)m=this.files[p],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var m=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=m-f;if(0<g)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,i){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),d=e("./compressions"),p=e("./support");function m(f,g){this.options=f,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,_;if(f.skip(22),this.fileNameLength=f.readInt(2),_=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(h){for(var c in d)if(Object.prototype.hasOwnProperty.call(d,c)&&d[c].magic===h)return d[c];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,_,h,c=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<c;)g=f.readInt(2),_=f.readInt(2),h=f.readData(_),this.extraFields[g]={id:g,length:_,value:h};f.setIndex(c)},handleUTF8:function(){var f=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=o.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var h=this.findExtraFieldUnicodeComment();if(h!==null)this.fileCommentStr=h;else{var c=o.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(c)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=s(f.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:u.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=s(f.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:u.utf8decode(g.readData(f.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,i){function s(g,_,h){this.name=g,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=_,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,h="string";try{if(!g)throw new Error("No output type specified.");var c=(h=g.toLowerCase())==="string"||h==="text";h!=="binarystring"&&h!=="text"||(h="string"),_=this._decompressWorker();var y=!this._dataBinary;y&&!c&&(_=_.pipe(new l.Utf8EncodeWorker)),!y&&c&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(S){(_=new d("error")).error(S)}return new o(_,h,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof u&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(h,g,_)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<p.length;f++)s.prototype[p[f]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,d=new l(g),p=s.document.createTextNode("");d.observe(p,{characterData:!0}),o=function(){p.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var m=new s.MessageChannel;m.port1.onmessage=g,o=function(){m.port2.postMessage(0)}}var f=[];function g(){var _,h;a=!0;for(var c=f.length;c;){for(h=f,f=[],_=-1;++_<c;)h[_]();c=f.length}a=!1}n.exports=function(_){f.push(_)!==1||a||o()}}).call(this,typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,i){var s=e("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],d=["PENDING"];function p(c){if(typeof c!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,c!==o&&_(this,c)}function m(c,y,S){this.promise=c,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function f(c,y,S){s(function(){var T;try{T=y(S)}catch(A){return a.reject(c,A)}T===c?a.reject(c,new TypeError("Cannot resolve promise with itself")):a.resolve(c,T)})}function g(c){var y=c&&c.then;if(c&&(typeof c=="object"||typeof c=="function")&&typeof y=="function")return function(){y.apply(c,arguments)}}function _(c,y){var S=!1;function T(w){S||(S=!0,a.reject(c,w))}function A(w){S||(S=!0,a.resolve(c,w))}var L=h(function(){y(A,T)});L.status==="error"&&T(L.value)}function h(c,y){var S={};try{S.value=c(y),S.status="success"}catch(T){S.status="error",S.value=T}return S}(n.exports=p).prototype.finally=function(c){if(typeof c!="function")return this;var y=this.constructor;return this.then(function(S){return y.resolve(c()).then(function(){return S})},function(S){return y.resolve(c()).then(function(){throw S})})},p.prototype.catch=function(c){return this.then(null,c)},p.prototype.then=function(c,y){if(typeof c!="function"&&this.state===u||typeof y!="function"&&this.state===l)return this;var S=new this.constructor(o);return this.state!==d?f(S,this.state===u?c:y,this.outcome):this.queue.push(new m(S,c,y)),S},m.prototype.callFulfilled=function(c){a.resolve(this.promise,c)},m.prototype.otherCallFulfilled=function(c){f(this.promise,this.onFulfilled,c)},m.prototype.callRejected=function(c){a.reject(this.promise,c)},m.prototype.otherCallRejected=function(c){f(this.promise,this.onRejected,c)},a.resolve=function(c,y){var S=h(g,y);if(S.status==="error")return a.reject(c,S.value);var T=S.value;if(T)_(c,T);else{c.state=u,c.outcome=y;for(var A=-1,L=c.queue.length;++A<L;)c.queue[A].callFulfilled(y)}return c},a.reject=function(c,y){c.state=l,c.outcome=y;for(var S=-1,T=c.queue.length;++S<T;)c.queue[S].callRejected(y);return c},p.resolve=function(c){return c instanceof this?c:a.resolve(new this(o),c)},p.reject=function(c){var y=new this(o);return a.reject(y,c)},p.all=function(c){var y=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=c.length,T=!1;if(!S)return this.resolve([]);for(var A=new Array(S),L=0,w=-1,H=new this(o);++w<S;)b(c[w],w);return H;function b(R,Y){y.resolve(R).then(function(C){A[Y]=C,++L!==S||T||(T=!0,a.resolve(H,A))},function(C){T||(T=!0,a.reject(H,C))})}},p.race=function(c){var y=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=c.length,T=!1;if(!S)return this.resolve([]);for(var A=-1,L=new this(o);++A<S;)w=c[A],y.resolve(w).then(function(H){T||(T=!0,a.resolve(L,H))},function(H){T||(T=!0,a.reject(L,H))});var w;return L}},{immediate:36}],38:[function(e,n,i){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,i){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),d=Object.prototype.toString,p=0,m=-1,f=0,g=8;function _(c){if(!(this instanceof _))return new _(c);this.options=o.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},c||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var S=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(S!==p)throw new Error(l[S]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var T;if(T=typeof y.dictionary=="string"?a.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(S=s.deflateSetDictionary(this.strm,T))!==p)throw new Error(l[S]);this._dict_set=!0}}function h(c,y){var S=new _(y);if(S.push(c,!0),S.err)throw S.msg||l[S.err];return S.result}_.prototype.push=function(c,y){var S,T,A=this.strm,L=this.options.chunkSize;if(this.ended)return!1;T=y===~~y?y:y===!0?4:0,typeof c=="string"?A.input=a.string2buf(c):d.call(c)==="[object ArrayBuffer]"?A.input=new Uint8Array(c):A.input=c,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(L),A.next_out=0,A.avail_out=L),(S=s.deflate(A,T))!==1&&S!==p)return this.onEnd(S),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&S!==1);return T===4?(S=s.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===p):T!==2||(this.onEnd(p),!(A.avail_out=0))},_.prototype.onData=function(c){this.chunks.push(c)},_.prototype.onEnd=function(c){c===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},i.Deflate=_,i.deflate=h,i.deflateRaw=function(c,y){return(y=y||{}).raw=!0,h(c,y)},i.gzip=function(c,y){return(y=y||{}).gzip=!0,h(c,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,i){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),d=e("./zlib/zstream"),p=e("./zlib/gzheader"),m=Object.prototype.toString;function f(_){if(!(this instanceof f))return new f(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var h=this.options;h.raw&&0<=h.windowBits&&h.windowBits<16&&(h.windowBits=-h.windowBits,h.windowBits===0&&(h.windowBits=-15)),!(0<=h.windowBits&&h.windowBits<16)||_&&_.windowBits||(h.windowBits+=32),15<h.windowBits&&h.windowBits<48&&!(15&h.windowBits)&&(h.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var c=s.inflateInit2(this.strm,h.windowBits);if(c!==l.Z_OK)throw new Error(u[c]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function g(_,h){var c=new f(h);if(c.push(_,!0),c.err)throw c.msg||u[c.err];return c.result}f.prototype.push=function(_,h){var c,y,S,T,A,L,w=this.strm,H=this.options.chunkSize,b=this.options.dictionary,R=!1;if(this.ended)return!1;y=h===~~h?h:h===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?w.input=a.binstring2buf(_):m.call(_)==="[object ArrayBuffer]"?w.input=new Uint8Array(_):w.input=_,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(H),w.next_out=0,w.avail_out=H),(c=s.inflate(w,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&b&&(L=typeof b=="string"?a.string2buf(b):m.call(b)==="[object ArrayBuffer]"?new Uint8Array(b):b,c=s.inflateSetDictionary(this.strm,L)),c===l.Z_BUF_ERROR&&R===!0&&(c=l.Z_OK,R=!1),c!==l.Z_STREAM_END&&c!==l.Z_OK)return this.onEnd(c),!(this.ended=!0);w.next_out&&(w.avail_out!==0&&c!==l.Z_STREAM_END&&(w.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(w.output,w.next_out),T=w.next_out-S,A=a.buf2string(w.output,S),w.next_out=T,w.avail_out=H-T,T&&o.arraySet(w.output,w.output,S,T,0),this.onData(A)):this.onData(o.shrinkBuf(w.output,w.next_out)))),w.avail_in===0&&w.avail_out===0&&(R=!0)}while((0<w.avail_in||w.avail_out===0)&&c!==l.Z_STREAM_END);return c===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(c=s.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(w.avail_out=0))},f.prototype.onData=function(_){this.chunks.push(_)},f.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},i.Inflate=f,i.inflate=g,i.inflateRaw=function(_,h){return(h=h||{}).raw=!0,g(_,h)},i.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var d=u.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var p in d)d.hasOwnProperty(p)&&(l[p]=d[p])}}return l},i.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,d,p,m){if(u.subarray&&l.subarray)l.set(u.subarray(d,d+p),m);else for(var f=0;f<p;f++)l[m+f]=u[d+f]},flattenChunks:function(l){var u,d,p,m,f,g;for(u=p=0,d=l.length;u<d;u++)p+=l[u].length;for(g=new Uint8Array(p),u=m=0,d=l.length;u<d;u++)f=l[u],g.set(f,m),m+=f.length;return g}},a={arraySet:function(l,u,d,p,m){for(var f=0;f<p;f++)l[m+f]=u[d+f]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(e,n,i){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function d(p,m){if(m<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,m));for(var f="",g=0;g<m;g++)f+=String.fromCharCode(p[g]);return f}l[254]=l[254]=1,i.string2buf=function(p){var m,f,g,_,h,c=p.length,y=0;for(_=0;_<c;_++)(64512&(f=p.charCodeAt(_)))==55296&&_+1<c&&(64512&(g=p.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),_++),y+=f<128?1:f<2048?2:f<65536?3:4;for(m=new s.Buf8(y),_=h=0;h<y;_++)(64512&(f=p.charCodeAt(_)))==55296&&_+1<c&&(64512&(g=p.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),_++),f<128?m[h++]=f:(f<2048?m[h++]=192|f>>>6:(f<65536?m[h++]=224|f>>>12:(m[h++]=240|f>>>18,m[h++]=128|f>>>12&63),m[h++]=128|f>>>6&63),m[h++]=128|63&f);return m},i.buf2binstring=function(p){return d(p,p.length)},i.binstring2buf=function(p){for(var m=new s.Buf8(p.length),f=0,g=m.length;f<g;f++)m[f]=p.charCodeAt(f);return m},i.buf2string=function(p,m){var f,g,_,h,c=m||p.length,y=new Array(2*c);for(f=g=0;f<c;)if((_=p[f++])<128)y[g++]=_;else if(4<(h=l[_]))y[g++]=65533,f+=h-1;else{for(_&=h===2?31:h===3?15:7;1<h&&f<c;)_=_<<6|63&p[f++],h--;1<h?y[g++]=65533:_<65536?y[g++]=_:(_-=65536,y[g++]=55296|_>>10&1023,y[g++]=56320|1023&_)}return d(y,g)},i.utf8border=function(p,m){var f;for((m=m||p.length)>p.length&&(m=p.length),f=m-1;0<=f&&(192&p[f])==128;)f--;return f<0||f===0?m:f+l[p[f]]>m?f:m}},{"./common":41}],43:[function(e,n,i){n.exports=function(s,o,a,l){for(var u=65535&s|0,d=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;d=d+(u=u+o[l++]|0)|0,--p;);u%=65521,d%=65521}return u|d<<16|0}},{}],44:[function(e,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,i){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,u){var d=s,p=u+l;o^=-1;for(var m=u;m<p;m++)o=o>>>8^d[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,i){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),u=e("./crc32"),d=e("./messages"),p=0,m=4,f=0,g=-2,_=-1,h=4,c=2,y=8,S=9,T=286,A=30,L=19,w=2*T+1,H=15,b=3,R=258,Y=R+b+1,C=42,k=113,v=1,N=2,Z=3,V=4;function rt(x,Q){return x.msg=d[Q],Q}function W(x){return(x<<1)-(4<x?9:0)}function nt(x){for(var Q=x.length;0<=--Q;)x[Q]=0}function z(x){var Q=x.state,X=Q.pending;X>x.avail_out&&(X=x.avail_out),X!==0&&(o.arraySet(x.output,Q.pending_buf,Q.pending_out,X,x.next_out),x.next_out+=X,Q.pending_out+=X,x.total_out+=X,x.avail_out-=X,Q.pending-=X,Q.pending===0&&(Q.pending_out=0))}function B(x,Q){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,Q),x.block_start=x.strstart,z(x.strm)}function j(x,Q){x.pending_buf[x.pending++]=Q}function $(x,Q){x.pending_buf[x.pending++]=Q>>>8&255,x.pending_buf[x.pending++]=255&Q}function it(x,Q){var X,I,P=x.max_chain_length,M=x.strstart,E=x.prev_length,O=x.nice_match,F=x.strstart>x.w_size-Y?x.strstart-(x.w_size-Y):0,q=x.window,tt=x.w_mask,st=x.prev,ct=x.strstart+R,dt=q[M+E-1],mt=q[M+E];x.prev_length>=x.good_match&&(P>>=2),O>x.lookahead&&(O=x.lookahead);do if(q[(X=Q)+E]===mt&&q[X+E-1]===dt&&q[X]===q[M]&&q[++X]===q[M+1]){M+=2,X++;do;while(q[++M]===q[++X]&&q[++M]===q[++X]&&q[++M]===q[++X]&&q[++M]===q[++X]&&q[++M]===q[++X]&&q[++M]===q[++X]&&q[++M]===q[++X]&&q[++M]===q[++X]&&M<ct);if(I=R-(ct-M),M=ct-R,E<I){if(x.match_start=Q,O<=(E=I))break;dt=q[M+E-1],mt=q[M+E]}}while((Q=st[Q&tt])>F&&--P!=0);return E<=x.lookahead?E:x.lookahead}function xt(x){var Q,X,I,P,M,E,O,F,q,tt,st=x.w_size;do{if(P=x.window_size-x.lookahead-x.strstart,x.strstart>=st+(st-Y)){for(o.arraySet(x.window,x.window,st,st,0),x.match_start-=st,x.strstart-=st,x.block_start-=st,Q=X=x.hash_size;I=x.head[--Q],x.head[Q]=st<=I?I-st:0,--X;);for(Q=X=st;I=x.prev[--Q],x.prev[Q]=st<=I?I-st:0,--X;);P+=st}if(x.strm.avail_in===0)break;if(E=x.strm,O=x.window,F=x.strstart+x.lookahead,q=P,tt=void 0,tt=E.avail_in,q<tt&&(tt=q),X=tt===0?0:(E.avail_in-=tt,o.arraySet(O,E.input,E.next_in,tt,F),E.state.wrap===1?E.adler=l(E.adler,O,tt,F):E.state.wrap===2&&(E.adler=u(E.adler,O,tt,F)),E.next_in+=tt,E.total_in+=tt,tt),x.lookahead+=X,x.lookahead+x.insert>=b)for(M=x.strstart-x.insert,x.ins_h=x.window[M],x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[M+b-1])&x.hash_mask,x.prev[M&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=M,M++,x.insert--,!(x.lookahead+x.insert<b)););}while(x.lookahead<Y&&x.strm.avail_in!==0)}function yt(x,Q){for(var X,I;;){if(x.lookahead<Y){if(xt(x),x.lookahead<Y&&Q===p)return v;if(x.lookahead===0)break}if(X=0,x.lookahead>=b&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+b-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),X!==0&&x.strstart-X<=x.w_size-Y&&(x.match_length=it(x,X)),x.match_length>=b)if(I=a._tr_tally(x,x.strstart-x.match_start,x.match_length-b),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=b){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+b-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else I=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(I&&(B(x,!1),x.strm.avail_out===0))return v}return x.insert=x.strstart<b-1?x.strstart:b-1,Q===m?(B(x,!0),x.strm.avail_out===0?Z:V):x.last_lit&&(B(x,!1),x.strm.avail_out===0)?v:N}function vt(x,Q){for(var X,I,P;;){if(x.lookahead<Y){if(xt(x),x.lookahead<Y&&Q===p)return v;if(x.lookahead===0)break}if(X=0,x.lookahead>=b&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+b-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=b-1,X!==0&&x.prev_length<x.max_lazy_match&&x.strstart-X<=x.w_size-Y&&(x.match_length=it(x,X),x.match_length<=5&&(x.strategy===1||x.match_length===b&&4096<x.strstart-x.match_start)&&(x.match_length=b-1)),x.prev_length>=b&&x.match_length<=x.prev_length){for(P=x.strstart+x.lookahead-b,I=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-b),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=P&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+b-1])&x.hash_mask,X=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=b-1,x.strstart++,I&&(B(x,!1),x.strm.avail_out===0))return v}else if(x.match_available){if((I=a._tr_tally(x,0,x.window[x.strstart-1]))&&B(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return v}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(I=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<b-1?x.strstart:b-1,Q===m?(B(x,!0),x.strm.avail_out===0?Z:V):x.last_lit&&(B(x,!1),x.strm.avail_out===0)?v:N}function St(x,Q,X,I,P){this.good_length=x,this.max_lazy=Q,this.nice_length=X,this.max_chain=I,this.func=P}function Et(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*w),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),nt(this.dyn_ltree),nt(this.dyn_dtree),nt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(H+1),this.heap=new o.Buf16(2*T+1),nt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*T+1),nt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Rt(x){var Q;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=c,(Q=x.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?C:k,x.adler=Q.wrap===2?0:1,Q.last_flush=p,a._tr_init(Q),f):rt(x,g)}function et(x){var Q=Rt(x);return Q===f&&function(X){X.window_size=2*X.w_size,nt(X.head),X.max_lazy_match=s[X.level].max_lazy,X.good_match=s[X.level].good_length,X.nice_match=s[X.level].nice_length,X.max_chain_length=s[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=b-1,X.match_available=0,X.ins_h=0}(x.state),Q}function Zt(x,Q,X,I,P,M){if(!x)return g;var E=1;if(Q===_&&(Q=6),I<0?(E=0,I=-I):15<I&&(E=2,I-=16),P<1||S<P||X!==y||I<8||15<I||Q<0||9<Q||M<0||h<M)return rt(x,g);I===8&&(I=9);var O=new Et;return(x.state=O).strm=x,O.wrap=E,O.gzhead=null,O.w_bits=I,O.w_size=1<<O.w_bits,O.w_mask=O.w_size-1,O.hash_bits=P+7,O.hash_size=1<<O.hash_bits,O.hash_mask=O.hash_size-1,O.hash_shift=~~((O.hash_bits+b-1)/b),O.window=new o.Buf8(2*O.w_size),O.head=new o.Buf16(O.hash_size),O.prev=new o.Buf16(O.w_size),O.lit_bufsize=1<<P+6,O.pending_buf_size=4*O.lit_bufsize,O.pending_buf=new o.Buf8(O.pending_buf_size),O.d_buf=1*O.lit_bufsize,O.l_buf=3*O.lit_bufsize,O.level=Q,O.strategy=M,O.method=X,et(x)}s=[new St(0,0,0,0,function(x,Q){var X=65535;for(X>x.pending_buf_size-5&&(X=x.pending_buf_size-5);;){if(x.lookahead<=1){if(xt(x),x.lookahead===0&&Q===p)return v;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var I=x.block_start+X;if((x.strstart===0||x.strstart>=I)&&(x.lookahead=x.strstart-I,x.strstart=I,B(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-Y&&(B(x,!1),x.strm.avail_out===0))return v}return x.insert=0,Q===m?(B(x,!0),x.strm.avail_out===0?Z:V):(x.strstart>x.block_start&&(B(x,!1),x.strm.avail_out),v)}),new St(4,4,8,4,yt),new St(4,5,16,8,yt),new St(4,6,32,32,yt),new St(4,4,16,16,vt),new St(8,16,32,32,vt),new St(8,16,128,128,vt),new St(8,32,128,256,vt),new St(32,128,258,1024,vt),new St(32,258,258,4096,vt)],i.deflateInit=function(x,Q){return Zt(x,Q,y,15,8,0)},i.deflateInit2=Zt,i.deflateReset=et,i.deflateResetKeep=Rt,i.deflateSetHeader=function(x,Q){return x&&x.state?x.state.wrap!==2?g:(x.state.gzhead=Q,f):g},i.deflate=function(x,Q){var X,I,P,M;if(!x||!x.state||5<Q||Q<0)return x?rt(x,g):g;if(I=x.state,!x.output||!x.input&&x.avail_in!==0||I.status===666&&Q!==m)return rt(x,x.avail_out===0?-5:g);if(I.strm=x,X=I.last_flush,I.last_flush=Q,I.status===C)if(I.wrap===2)x.adler=0,j(I,31),j(I,139),j(I,8),I.gzhead?(j(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),j(I,255&I.gzhead.time),j(I,I.gzhead.time>>8&255),j(I,I.gzhead.time>>16&255),j(I,I.gzhead.time>>24&255),j(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),j(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(j(I,255&I.gzhead.extra.length),j(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(x.adler=u(x.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(j(I,0),j(I,0),j(I,0),j(I,0),j(I,0),j(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),j(I,3),I.status=k);else{var E=y+(I.w_bits-8<<4)<<8;E|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(E|=32),E+=31-E%31,I.status=k,$(I,E),I.strstart!==0&&($(I,x.adler>>>16),$(I,65535&x.adler)),x.adler=1}if(I.status===69)if(I.gzhead.extra){for(P=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>P&&(x.adler=u(x.adler,I.pending_buf,I.pending-P,P)),z(x),P=I.pending,I.pending!==I.pending_buf_size));)j(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>P&&(x.adler=u(x.adler,I.pending_buf,I.pending-P,P)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){P=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>P&&(x.adler=u(x.adler,I.pending_buf,I.pending-P,P)),z(x),P=I.pending,I.pending===I.pending_buf_size)){M=1;break}M=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,j(I,M)}while(M!==0);I.gzhead.hcrc&&I.pending>P&&(x.adler=u(x.adler,I.pending_buf,I.pending-P,P)),M===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){P=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>P&&(x.adler=u(x.adler,I.pending_buf,I.pending-P,P)),z(x),P=I.pending,I.pending===I.pending_buf_size)){M=1;break}M=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,j(I,M)}while(M!==0);I.gzhead.hcrc&&I.pending>P&&(x.adler=u(x.adler,I.pending_buf,I.pending-P,P)),M===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&z(x),I.pending+2<=I.pending_buf_size&&(j(I,255&x.adler),j(I,x.adler>>8&255),x.adler=0,I.status=k)):I.status=k),I.pending!==0){if(z(x),x.avail_out===0)return I.last_flush=-1,f}else if(x.avail_in===0&&W(Q)<=W(X)&&Q!==m)return rt(x,-5);if(I.status===666&&x.avail_in!==0)return rt(x,-5);if(x.avail_in!==0||I.lookahead!==0||Q!==p&&I.status!==666){var O=I.strategy===2?function(F,q){for(var tt;;){if(F.lookahead===0&&(xt(F),F.lookahead===0)){if(q===p)return v;break}if(F.match_length=0,tt=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,tt&&(B(F,!1),F.strm.avail_out===0))return v}return F.insert=0,q===m?(B(F,!0),F.strm.avail_out===0?Z:V):F.last_lit&&(B(F,!1),F.strm.avail_out===0)?v:N}(I,Q):I.strategy===3?function(F,q){for(var tt,st,ct,dt,mt=F.window;;){if(F.lookahead<=R){if(xt(F),F.lookahead<=R&&q===p)return v;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=b&&0<F.strstart&&(st=mt[ct=F.strstart-1])===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]){dt=F.strstart+R;do;while(st===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]&&st===mt[++ct]&&ct<dt);F.match_length=R-(dt-ct),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=b?(tt=a._tr_tally(F,1,F.match_length-b),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(tt=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),tt&&(B(F,!1),F.strm.avail_out===0))return v}return F.insert=0,q===m?(B(F,!0),F.strm.avail_out===0?Z:V):F.last_lit&&(B(F,!1),F.strm.avail_out===0)?v:N}(I,Q):s[I.level].func(I,Q);if(O!==Z&&O!==V||(I.status=666),O===v||O===Z)return x.avail_out===0&&(I.last_flush=-1),f;if(O===N&&(Q===1?a._tr_align(I):Q!==5&&(a._tr_stored_block(I,0,0,!1),Q===3&&(nt(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),z(x),x.avail_out===0))return I.last_flush=-1,f}return Q!==m?f:I.wrap<=0?1:(I.wrap===2?(j(I,255&x.adler),j(I,x.adler>>8&255),j(I,x.adler>>16&255),j(I,x.adler>>24&255),j(I,255&x.total_in),j(I,x.total_in>>8&255),j(I,x.total_in>>16&255),j(I,x.total_in>>24&255)):($(I,x.adler>>>16),$(I,65535&x.adler)),z(x),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?f:1)},i.deflateEnd=function(x){var Q;return x&&x.state?(Q=x.state.status)!==C&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==k&&Q!==666?rt(x,g):(x.state=null,Q===k?rt(x,-3):f):g},i.deflateSetDictionary=function(x,Q){var X,I,P,M,E,O,F,q,tt=Q.length;if(!x||!x.state||(M=(X=x.state).wrap)===2||M===1&&X.status!==C||X.lookahead)return g;for(M===1&&(x.adler=l(x.adler,Q,tt,0)),X.wrap=0,tt>=X.w_size&&(M===0&&(nt(X.head),X.strstart=0,X.block_start=0,X.insert=0),q=new o.Buf8(X.w_size),o.arraySet(q,Q,tt-X.w_size,X.w_size,0),Q=q,tt=X.w_size),E=x.avail_in,O=x.next_in,F=x.input,x.avail_in=tt,x.next_in=0,x.input=Q,xt(X);X.lookahead>=b;){for(I=X.strstart,P=X.lookahead-(b-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[I+b-1])&X.hash_mask,X.prev[I&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=I,I++,--P;);X.strstart=I,X.lookahead=b-1,xt(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=b-1,X.match_available=0,x.next_in=O,x.input=F,x.avail_in=E,X.wrap=M,f},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,i){n.exports=function(s,o){var a,l,u,d,p,m,f,g,_,h,c,y,S,T,A,L,w,H,b,R,Y,C,k,v,N;a=s.state,l=s.next_in,v=s.input,u=l+(s.avail_in-5),d=s.next_out,N=s.output,p=d-(o-s.avail_out),m=d+(s.avail_out-257),f=a.dmax,g=a.wsize,_=a.whave,h=a.wnext,c=a.window,y=a.hold,S=a.bits,T=a.lencode,A=a.distcode,L=(1<<a.lenbits)-1,w=(1<<a.distbits)-1;t:do{S<15&&(y+=v[l++]<<S,S+=8,y+=v[l++]<<S,S+=8),H=T[y&L];e:for(;;){if(y>>>=b=H>>>24,S-=b,(b=H>>>16&255)===0)N[d++]=65535&H;else{if(!(16&b)){if(!(64&b)){H=T[(65535&H)+(y&(1<<b)-1)];continue e}if(32&b){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}R=65535&H,(b&=15)&&(S<b&&(y+=v[l++]<<S,S+=8),R+=y&(1<<b)-1,y>>>=b,S-=b),S<15&&(y+=v[l++]<<S,S+=8,y+=v[l++]<<S,S+=8),H=A[y&w];n:for(;;){if(y>>>=b=H>>>24,S-=b,!(16&(b=H>>>16&255))){if(!(64&b)){H=A[(65535&H)+(y&(1<<b)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(Y=65535&H,S<(b&=15)&&(y+=v[l++]<<S,(S+=8)<b&&(y+=v[l++]<<S,S+=8)),f<(Y+=y&(1<<b)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=b,S-=b,(b=d-p)<Y){if(_<(b=Y-b)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(k=c,(C=0)===h){if(C+=g-b,b<R){for(R-=b;N[d++]=c[C++],--b;);C=d-Y,k=N}}else if(h<b){if(C+=g+h-b,(b-=h)<R){for(R-=b;N[d++]=c[C++],--b;);if(C=0,h<R){for(R-=b=h;N[d++]=c[C++],--b;);C=d-Y,k=N}}}else if(C+=h-b,b<R){for(R-=b;N[d++]=c[C++],--b;);C=d-Y,k=N}for(;2<R;)N[d++]=k[C++],N[d++]=k[C++],N[d++]=k[C++],R-=3;R&&(N[d++]=k[C++],1<R&&(N[d++]=k[C++]))}else{for(C=d-Y;N[d++]=N[C++],N[d++]=N[C++],N[d++]=N[C++],2<(R-=3););R&&(N[d++]=N[C++],1<R&&(N[d++]=N[C++]))}break}}break}}while(l<u&&d<m);l-=R=S>>3,y&=(1<<(S-=R<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=d<m?m-d+257:257-(d-m),a.hold=y,a.bits=S}},{}],49:[function(e,n,i){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),d=1,p=2,m=0,f=-2,g=1,_=852,h=592;function c(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(C){var k;return C&&C.state?(k=C.state,C.total_in=C.total_out=k.total=0,C.msg="",k.wrap&&(C.adler=1&k.wrap),k.mode=g,k.last=0,k.havedict=0,k.dmax=32768,k.head=null,k.hold=0,k.bits=0,k.lencode=k.lendyn=new s.Buf32(_),k.distcode=k.distdyn=new s.Buf32(h),k.sane=1,k.back=-1,m):f}function T(C){var k;return C&&C.state?((k=C.state).wsize=0,k.whave=0,k.wnext=0,S(C)):f}function A(C,k){var v,N;return C&&C.state?(N=C.state,k<0?(v=0,k=-k):(v=1+(k>>4),k<48&&(k&=15)),k&&(k<8||15<k)?f:(N.window!==null&&N.wbits!==k&&(N.window=null),N.wrap=v,N.wbits=k,T(C))):f}function L(C,k){var v,N;return C?(N=new y,(C.state=N).window=null,(v=A(C,k))!==m&&(C.state=null),v):f}var w,H,b=!0;function R(C){if(b){var k;for(w=new s.Buf32(512),H=new s.Buf32(32),k=0;k<144;)C.lens[k++]=8;for(;k<256;)C.lens[k++]=9;for(;k<280;)C.lens[k++]=7;for(;k<288;)C.lens[k++]=8;for(u(d,C.lens,0,288,w,0,C.work,{bits:9}),k=0;k<32;)C.lens[k++]=5;u(p,C.lens,0,32,H,0,C.work,{bits:5}),b=!1}C.lencode=w,C.lenbits=9,C.distcode=H,C.distbits=5}function Y(C,k,v,N){var Z,V=C.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new s.Buf8(V.wsize)),N>=V.wsize?(s.arraySet(V.window,k,v-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(N<(Z=V.wsize-V.wnext)&&(Z=N),s.arraySet(V.window,k,v-N,Z,V.wnext),(N-=Z)?(s.arraySet(V.window,k,v-N,N,0),V.wnext=N,V.whave=V.wsize):(V.wnext+=Z,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=Z))),0}i.inflateReset=T,i.inflateReset2=A,i.inflateResetKeep=S,i.inflateInit=function(C){return L(C,15)},i.inflateInit2=L,i.inflate=function(C,k){var v,N,Z,V,rt,W,nt,z,B,j,$,it,xt,yt,vt,St,Et,Rt,et,Zt,x,Q,X,I,P=0,M=new s.Buf8(4),E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(v=C.state).mode===12&&(v.mode=13),rt=C.next_out,Z=C.output,nt=C.avail_out,V=C.next_in,N=C.input,W=C.avail_in,z=v.hold,B=v.bits,j=W,$=nt,Q=m;t:for(;;)switch(v.mode){case g:if(v.wrap===0){v.mode=13;break}for(;B<16;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(2&v.wrap&&z===35615){M[v.check=0]=255&z,M[1]=z>>>8&255,v.check=a(v.check,M,2,0),B=z=0,v.mode=2;break}if(v.flags=0,v.head&&(v.head.done=!1),!(1&v.wrap)||(((255&z)<<8)+(z>>8))%31){C.msg="incorrect header check",v.mode=30;break}if((15&z)!=8){C.msg="unknown compression method",v.mode=30;break}if(B-=4,x=8+(15&(z>>>=4)),v.wbits===0)v.wbits=x;else if(x>v.wbits){C.msg="invalid window size",v.mode=30;break}v.dmax=1<<x,C.adler=v.check=1,v.mode=512&z?10:12,B=z=0;break;case 2:for(;B<16;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(v.flags=z,(255&v.flags)!=8){C.msg="unknown compression method",v.mode=30;break}if(57344&v.flags){C.msg="unknown header flags set",v.mode=30;break}v.head&&(v.head.text=z>>8&1),512&v.flags&&(M[0]=255&z,M[1]=z>>>8&255,v.check=a(v.check,M,2,0)),B=z=0,v.mode=3;case 3:for(;B<32;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}v.head&&(v.head.time=z),512&v.flags&&(M[0]=255&z,M[1]=z>>>8&255,M[2]=z>>>16&255,M[3]=z>>>24&255,v.check=a(v.check,M,4,0)),B=z=0,v.mode=4;case 4:for(;B<16;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}v.head&&(v.head.xflags=255&z,v.head.os=z>>8),512&v.flags&&(M[0]=255&z,M[1]=z>>>8&255,v.check=a(v.check,M,2,0)),B=z=0,v.mode=5;case 5:if(1024&v.flags){for(;B<16;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}v.length=z,v.head&&(v.head.extra_len=z),512&v.flags&&(M[0]=255&z,M[1]=z>>>8&255,v.check=a(v.check,M,2,0)),B=z=0}else v.head&&(v.head.extra=null);v.mode=6;case 6:if(1024&v.flags&&(W<(it=v.length)&&(it=W),it&&(v.head&&(x=v.head.extra_len-v.length,v.head.extra||(v.head.extra=new Array(v.head.extra_len)),s.arraySet(v.head.extra,N,V,it,x)),512&v.flags&&(v.check=a(v.check,N,it,V)),W-=it,V+=it,v.length-=it),v.length))break t;v.length=0,v.mode=7;case 7:if(2048&v.flags){if(W===0)break t;for(it=0;x=N[V+it++],v.head&&x&&v.length<65536&&(v.head.name+=String.fromCharCode(x)),x&&it<W;);if(512&v.flags&&(v.check=a(v.check,N,it,V)),W-=it,V+=it,x)break t}else v.head&&(v.head.name=null);v.length=0,v.mode=8;case 8:if(4096&v.flags){if(W===0)break t;for(it=0;x=N[V+it++],v.head&&x&&v.length<65536&&(v.head.comment+=String.fromCharCode(x)),x&&it<W;);if(512&v.flags&&(v.check=a(v.check,N,it,V)),W-=it,V+=it,x)break t}else v.head&&(v.head.comment=null);v.mode=9;case 9:if(512&v.flags){for(;B<16;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(z!==(65535&v.check)){C.msg="header crc mismatch",v.mode=30;break}B=z=0}v.head&&(v.head.hcrc=v.flags>>9&1,v.head.done=!0),C.adler=v.check=0,v.mode=12;break;case 10:for(;B<32;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}C.adler=v.check=c(z),B=z=0,v.mode=11;case 11:if(v.havedict===0)return C.next_out=rt,C.avail_out=nt,C.next_in=V,C.avail_in=W,v.hold=z,v.bits=B,2;C.adler=v.check=1,v.mode=12;case 12:if(k===5||k===6)break t;case 13:if(v.last){z>>>=7&B,B-=7&B,v.mode=27;break}for(;B<3;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}switch(v.last=1&z,B-=1,3&(z>>>=1)){case 0:v.mode=14;break;case 1:if(R(v),v.mode=20,k!==6)break;z>>>=2,B-=2;break t;case 2:v.mode=17;break;case 3:C.msg="invalid block type",v.mode=30}z>>>=2,B-=2;break;case 14:for(z>>>=7&B,B-=7&B;B<32;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if((65535&z)!=(z>>>16^65535)){C.msg="invalid stored block lengths",v.mode=30;break}if(v.length=65535&z,B=z=0,v.mode=15,k===6)break t;case 15:v.mode=16;case 16:if(it=v.length){if(W<it&&(it=W),nt<it&&(it=nt),it===0)break t;s.arraySet(Z,N,V,it,rt),W-=it,V+=it,nt-=it,rt+=it,v.length-=it;break}v.mode=12;break;case 17:for(;B<14;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(v.nlen=257+(31&z),z>>>=5,B-=5,v.ndist=1+(31&z),z>>>=5,B-=5,v.ncode=4+(15&z),z>>>=4,B-=4,286<v.nlen||30<v.ndist){C.msg="too many length or distance symbols",v.mode=30;break}v.have=0,v.mode=18;case 18:for(;v.have<v.ncode;){for(;B<3;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}v.lens[E[v.have++]]=7&z,z>>>=3,B-=3}for(;v.have<19;)v.lens[E[v.have++]]=0;if(v.lencode=v.lendyn,v.lenbits=7,X={bits:v.lenbits},Q=u(0,v.lens,0,19,v.lencode,0,v.work,X),v.lenbits=X.bits,Q){C.msg="invalid code lengths set",v.mode=30;break}v.have=0,v.mode=19;case 19:for(;v.have<v.nlen+v.ndist;){for(;St=(P=v.lencode[z&(1<<v.lenbits)-1])>>>16&255,Et=65535&P,!((vt=P>>>24)<=B);){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(Et<16)z>>>=vt,B-=vt,v.lens[v.have++]=Et;else{if(Et===16){for(I=vt+2;B<I;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(z>>>=vt,B-=vt,v.have===0){C.msg="invalid bit length repeat",v.mode=30;break}x=v.lens[v.have-1],it=3+(3&z),z>>>=2,B-=2}else if(Et===17){for(I=vt+3;B<I;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}B-=vt,x=0,it=3+(7&(z>>>=vt)),z>>>=3,B-=3}else{for(I=vt+7;B<I;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}B-=vt,x=0,it=11+(127&(z>>>=vt)),z>>>=7,B-=7}if(v.have+it>v.nlen+v.ndist){C.msg="invalid bit length repeat",v.mode=30;break}for(;it--;)v.lens[v.have++]=x}}if(v.mode===30)break;if(v.lens[256]===0){C.msg="invalid code -- missing end-of-block",v.mode=30;break}if(v.lenbits=9,X={bits:v.lenbits},Q=u(d,v.lens,0,v.nlen,v.lencode,0,v.work,X),v.lenbits=X.bits,Q){C.msg="invalid literal/lengths set",v.mode=30;break}if(v.distbits=6,v.distcode=v.distdyn,X={bits:v.distbits},Q=u(p,v.lens,v.nlen,v.ndist,v.distcode,0,v.work,X),v.distbits=X.bits,Q){C.msg="invalid distances set",v.mode=30;break}if(v.mode=20,k===6)break t;case 20:v.mode=21;case 21:if(6<=W&&258<=nt){C.next_out=rt,C.avail_out=nt,C.next_in=V,C.avail_in=W,v.hold=z,v.bits=B,l(C,$),rt=C.next_out,Z=C.output,nt=C.avail_out,V=C.next_in,N=C.input,W=C.avail_in,z=v.hold,B=v.bits,v.mode===12&&(v.back=-1);break}for(v.back=0;St=(P=v.lencode[z&(1<<v.lenbits)-1])>>>16&255,Et=65535&P,!((vt=P>>>24)<=B);){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(St&&!(240&St)){for(Rt=vt,et=St,Zt=Et;St=(P=v.lencode[Zt+((z&(1<<Rt+et)-1)>>Rt)])>>>16&255,Et=65535&P,!(Rt+(vt=P>>>24)<=B);){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}z>>>=Rt,B-=Rt,v.back+=Rt}if(z>>>=vt,B-=vt,v.back+=vt,v.length=Et,St===0){v.mode=26;break}if(32&St){v.back=-1,v.mode=12;break}if(64&St){C.msg="invalid literal/length code",v.mode=30;break}v.extra=15&St,v.mode=22;case 22:if(v.extra){for(I=v.extra;B<I;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}v.length+=z&(1<<v.extra)-1,z>>>=v.extra,B-=v.extra,v.back+=v.extra}v.was=v.length,v.mode=23;case 23:for(;St=(P=v.distcode[z&(1<<v.distbits)-1])>>>16&255,Et=65535&P,!((vt=P>>>24)<=B);){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(!(240&St)){for(Rt=vt,et=St,Zt=Et;St=(P=v.distcode[Zt+((z&(1<<Rt+et)-1)>>Rt)])>>>16&255,Et=65535&P,!(Rt+(vt=P>>>24)<=B);){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}z>>>=Rt,B-=Rt,v.back+=Rt}if(z>>>=vt,B-=vt,v.back+=vt,64&St){C.msg="invalid distance code",v.mode=30;break}v.offset=Et,v.extra=15&St,v.mode=24;case 24:if(v.extra){for(I=v.extra;B<I;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}v.offset+=z&(1<<v.extra)-1,z>>>=v.extra,B-=v.extra,v.back+=v.extra}if(v.offset>v.dmax){C.msg="invalid distance too far back",v.mode=30;break}v.mode=25;case 25:if(nt===0)break t;if(it=$-nt,v.offset>it){if((it=v.offset-it)>v.whave&&v.sane){C.msg="invalid distance too far back",v.mode=30;break}xt=it>v.wnext?(it-=v.wnext,v.wsize-it):v.wnext-it,it>v.length&&(it=v.length),yt=v.window}else yt=Z,xt=rt-v.offset,it=v.length;for(nt<it&&(it=nt),nt-=it,v.length-=it;Z[rt++]=yt[xt++],--it;);v.length===0&&(v.mode=21);break;case 26:if(nt===0)break t;Z[rt++]=v.length,nt--,v.mode=21;break;case 27:if(v.wrap){for(;B<32;){if(W===0)break t;W--,z|=N[V++]<<B,B+=8}if($-=nt,C.total_out+=$,v.total+=$,$&&(C.adler=v.check=v.flags?a(v.check,Z,$,rt-$):o(v.check,Z,$,rt-$)),$=nt,(v.flags?z:c(z))!==v.check){C.msg="incorrect data check",v.mode=30;break}B=z=0}v.mode=28;case 28:if(v.wrap&&v.flags){for(;B<32;){if(W===0)break t;W--,z+=N[V++]<<B,B+=8}if(z!==(4294967295&v.total)){C.msg="incorrect length check",v.mode=30;break}B=z=0}v.mode=29;case 29:Q=1;break t;case 30:Q=-3;break t;case 31:return-4;case 32:default:return f}return C.next_out=rt,C.avail_out=nt,C.next_in=V,C.avail_in=W,v.hold=z,v.bits=B,(v.wsize||$!==C.avail_out&&v.mode<30&&(v.mode<27||k!==4))&&Y(C,C.output,C.next_out,$-C.avail_out)?(v.mode=31,-4):(j-=C.avail_in,$-=C.avail_out,C.total_in+=j,C.total_out+=$,v.total+=$,v.wrap&&$&&(C.adler=v.check=v.flags?a(v.check,Z,$,C.next_out-$):o(v.check,Z,$,C.next_out-$)),C.data_type=v.bits+(v.last?64:0)+(v.mode===12?128:0)+(v.mode===20||v.mode===15?256:0),(j==0&&$===0||k===4)&&Q===m&&(Q=-5),Q)},i.inflateEnd=function(C){if(!C||!C.state)return f;var k=C.state;return k.window&&(k.window=null),C.state=null,m},i.inflateGetHeader=function(C,k){var v;return C&&C.state&&2&(v=C.state).wrap?((v.head=k).done=!1,m):f},i.inflateSetDictionary=function(C,k){var v,N=k.length;return C&&C.state?(v=C.state).wrap!==0&&v.mode!==11?f:v.mode===11&&o(1,k,N,0)!==v.check?-3:Y(C,k,N,N)?(v.mode=31,-4):(v.havedict=1,m):f},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,i){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,p,m,f,g,_,h,c){var y,S,T,A,L,w,H,b,R,Y=c.bits,C=0,k=0,v=0,N=0,Z=0,V=0,rt=0,W=0,nt=0,z=0,B=null,j=0,$=new s.Buf16(16),it=new s.Buf16(16),xt=null,yt=0;for(C=0;C<=15;C++)$[C]=0;for(k=0;k<f;k++)$[p[m+k]]++;for(Z=Y,N=15;1<=N&&$[N]===0;N--);if(N<Z&&(Z=N),N===0)return g[_++]=20971520,g[_++]=20971520,c.bits=1,0;for(v=1;v<N&&$[v]===0;v++);for(Z<v&&(Z=v),C=W=1;C<=15;C++)if(W<<=1,(W-=$[C])<0)return-1;if(0<W&&(d===0||N!==1))return-1;for(it[1]=0,C=1;C<15;C++)it[C+1]=it[C]+$[C];for(k=0;k<f;k++)p[m+k]!==0&&(h[it[p[m+k]]++]=k);if(w=d===0?(B=xt=h,19):d===1?(B=o,j-=257,xt=a,yt-=257,256):(B=l,xt=u,-1),C=v,L=_,rt=k=z=0,T=-1,A=(nt=1<<(V=Z))-1,d===1&&852<nt||d===2&&592<nt)return 1;for(;;){for(H=C-rt,R=h[k]<w?(b=0,h[k]):h[k]>w?(b=xt[yt+h[k]],B[j+h[k]]):(b=96,0),y=1<<C-rt,v=S=1<<V;g[L+(z>>rt)+(S-=y)]=H<<24|b<<16|R|0,S!==0;);for(y=1<<C-1;z&y;)y>>=1;if(y!==0?(z&=y-1,z+=y):z=0,k++,--$[C]==0){if(C===N)break;C=p[m+h[k]]}if(Z<C&&(z&A)!==T){for(rt===0&&(rt=Z),L+=v,W=1<<(V=C-rt);V+rt<N&&!((W-=$[V+rt])<=0);)V++,W<<=1;if(nt+=1<<V,d===1&&852<nt||d===2&&592<nt)return 1;g[T=z&A]=Z<<24|V<<16|L-_|0}}return z!==0&&(g[L+z]=C-rt<<24|64<<16|0),c.bits=Z,0}},{"../utils/common":41}],51:[function(e,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,i){var s=e("../utils/common"),o=0,a=1;function l(P){for(var M=P.length;0<=--M;)P[M]=0}var u=0,d=29,p=256,m=p+1+d,f=30,g=19,_=2*m+1,h=15,c=16,y=7,S=256,T=16,A=17,L=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],H=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Y=new Array(2*(m+2));l(Y);var C=new Array(2*f);l(C);var k=new Array(512);l(k);var v=new Array(256);l(v);var N=new Array(d);l(N);var Z,V,rt,W=new Array(f);function nt(P,M,E,O,F){this.static_tree=P,this.extra_bits=M,this.extra_base=E,this.elems=O,this.max_length=F,this.has_stree=P&&P.length}function z(P,M){this.dyn_tree=P,this.max_code=0,this.stat_desc=M}function B(P){return P<256?k[P]:k[256+(P>>>7)]}function j(P,M){P.pending_buf[P.pending++]=255&M,P.pending_buf[P.pending++]=M>>>8&255}function $(P,M,E){P.bi_valid>c-E?(P.bi_buf|=M<<P.bi_valid&65535,j(P,P.bi_buf),P.bi_buf=M>>c-P.bi_valid,P.bi_valid+=E-c):(P.bi_buf|=M<<P.bi_valid&65535,P.bi_valid+=E)}function it(P,M,E){$(P,E[2*M],E[2*M+1])}function xt(P,M){for(var E=0;E|=1&P,P>>>=1,E<<=1,0<--M;);return E>>>1}function yt(P,M,E){var O,F,q=new Array(h+1),tt=0;for(O=1;O<=h;O++)q[O]=tt=tt+E[O-1]<<1;for(F=0;F<=M;F++){var st=P[2*F+1];st!==0&&(P[2*F]=xt(q[st]++,st))}}function vt(P){var M;for(M=0;M<m;M++)P.dyn_ltree[2*M]=0;for(M=0;M<f;M++)P.dyn_dtree[2*M]=0;for(M=0;M<g;M++)P.bl_tree[2*M]=0;P.dyn_ltree[2*S]=1,P.opt_len=P.static_len=0,P.last_lit=P.matches=0}function St(P){8<P.bi_valid?j(P,P.bi_buf):0<P.bi_valid&&(P.pending_buf[P.pending++]=P.bi_buf),P.bi_buf=0,P.bi_valid=0}function Et(P,M,E,O){var F=2*M,q=2*E;return P[F]<P[q]||P[F]===P[q]&&O[M]<=O[E]}function Rt(P,M,E){for(var O=P.heap[E],F=E<<1;F<=P.heap_len&&(F<P.heap_len&&Et(M,P.heap[F+1],P.heap[F],P.depth)&&F++,!Et(M,O,P.heap[F],P.depth));)P.heap[E]=P.heap[F],E=F,F<<=1;P.heap[E]=O}function et(P,M,E){var O,F,q,tt,st=0;if(P.last_lit!==0)for(;O=P.pending_buf[P.d_buf+2*st]<<8|P.pending_buf[P.d_buf+2*st+1],F=P.pending_buf[P.l_buf+st],st++,O===0?it(P,F,M):(it(P,(q=v[F])+p+1,M),(tt=w[q])!==0&&$(P,F-=N[q],tt),it(P,q=B(--O),E),(tt=H[q])!==0&&$(P,O-=W[q],tt)),st<P.last_lit;);it(P,S,M)}function Zt(P,M){var E,O,F,q=M.dyn_tree,tt=M.stat_desc.static_tree,st=M.stat_desc.has_stree,ct=M.stat_desc.elems,dt=-1;for(P.heap_len=0,P.heap_max=_,E=0;E<ct;E++)q[2*E]!==0?(P.heap[++P.heap_len]=dt=E,P.depth[E]=0):q[2*E+1]=0;for(;P.heap_len<2;)q[2*(F=P.heap[++P.heap_len]=dt<2?++dt:0)]=1,P.depth[F]=0,P.opt_len--,st&&(P.static_len-=tt[2*F+1]);for(M.max_code=dt,E=P.heap_len>>1;1<=E;E--)Rt(P,q,E);for(F=ct;E=P.heap[1],P.heap[1]=P.heap[P.heap_len--],Rt(P,q,1),O=P.heap[1],P.heap[--P.heap_max]=E,P.heap[--P.heap_max]=O,q[2*F]=q[2*E]+q[2*O],P.depth[F]=(P.depth[E]>=P.depth[O]?P.depth[E]:P.depth[O])+1,q[2*E+1]=q[2*O+1]=F,P.heap[1]=F++,Rt(P,q,1),2<=P.heap_len;);P.heap[--P.heap_max]=P.heap[1],function(mt,Pt){var ut,Bt,Nt,bt,At,Mt,U=Pt.dyn_tree,pt=Pt.max_code,Ct=Pt.stat_desc.static_tree,Tt=Pt.stat_desc.has_stree,ht=Pt.stat_desc.extra_bits,G=Pt.stat_desc.extra_base,ft=Pt.stat_desc.max_length,_t=0;for(bt=0;bt<=h;bt++)mt.bl_count[bt]=0;for(U[2*mt.heap[mt.heap_max]+1]=0,ut=mt.heap_max+1;ut<_;ut++)ft<(bt=U[2*U[2*(Bt=mt.heap[ut])+1]+1]+1)&&(bt=ft,_t++),U[2*Bt+1]=bt,pt<Bt||(mt.bl_count[bt]++,At=0,G<=Bt&&(At=ht[Bt-G]),Mt=U[2*Bt],mt.opt_len+=Mt*(bt+At),Tt&&(mt.static_len+=Mt*(Ct[2*Bt+1]+At)));if(_t!==0){do{for(bt=ft-1;mt.bl_count[bt]===0;)bt--;mt.bl_count[bt]--,mt.bl_count[bt+1]+=2,mt.bl_count[ft]--,_t-=2}while(0<_t);for(bt=ft;bt!==0;bt--)for(Bt=mt.bl_count[bt];Bt!==0;)pt<(Nt=mt.heap[--ut])||(U[2*Nt+1]!==bt&&(mt.opt_len+=(bt-U[2*Nt+1])*U[2*Nt],U[2*Nt+1]=bt),Bt--)}}(P,M),yt(q,dt,P.bl_count)}function x(P,M,E){var O,F,q=-1,tt=M[1],st=0,ct=7,dt=4;for(tt===0&&(ct=138,dt=3),M[2*(E+1)+1]=65535,O=0;O<=E;O++)F=tt,tt=M[2*(O+1)+1],++st<ct&&F===tt||(st<dt?P.bl_tree[2*F]+=st:F!==0?(F!==q&&P.bl_tree[2*F]++,P.bl_tree[2*T]++):st<=10?P.bl_tree[2*A]++:P.bl_tree[2*L]++,q=F,dt=(st=0)===tt?(ct=138,3):F===tt?(ct=6,3):(ct=7,4))}function Q(P,M,E){var O,F,q=-1,tt=M[1],st=0,ct=7,dt=4;for(tt===0&&(ct=138,dt=3),O=0;O<=E;O++)if(F=tt,tt=M[2*(O+1)+1],!(++st<ct&&F===tt)){if(st<dt)for(;it(P,F,P.bl_tree),--st!=0;);else F!==0?(F!==q&&(it(P,F,P.bl_tree),st--),it(P,T,P.bl_tree),$(P,st-3,2)):st<=10?(it(P,A,P.bl_tree),$(P,st-3,3)):(it(P,L,P.bl_tree),$(P,st-11,7));q=F,dt=(st=0)===tt?(ct=138,3):F===tt?(ct=6,3):(ct=7,4)}}l(W);var X=!1;function I(P,M,E,O){$(P,(u<<1)+(O?1:0),3),function(F,q,tt,st){St(F),j(F,tt),j(F,~tt),s.arraySet(F.pending_buf,F.window,q,tt,F.pending),F.pending+=tt}(P,M,E)}i._tr_init=function(P){X||(function(){var M,E,O,F,q,tt=new Array(h+1);for(F=O=0;F<d-1;F++)for(N[F]=O,M=0;M<1<<w[F];M++)v[O++]=F;for(v[O-1]=F,F=q=0;F<16;F++)for(W[F]=q,M=0;M<1<<H[F];M++)k[q++]=F;for(q>>=7;F<f;F++)for(W[F]=q<<7,M=0;M<1<<H[F]-7;M++)k[256+q++]=F;for(E=0;E<=h;E++)tt[E]=0;for(M=0;M<=143;)Y[2*M+1]=8,M++,tt[8]++;for(;M<=255;)Y[2*M+1]=9,M++,tt[9]++;for(;M<=279;)Y[2*M+1]=7,M++,tt[7]++;for(;M<=287;)Y[2*M+1]=8,M++,tt[8]++;for(yt(Y,m+1,tt),M=0;M<f;M++)C[2*M+1]=5,C[2*M]=xt(M,5);Z=new nt(Y,w,p+1,m,h),V=new nt(C,H,0,f,h),rt=new nt(new Array(0),b,0,g,y)}(),X=!0),P.l_desc=new z(P.dyn_ltree,Z),P.d_desc=new z(P.dyn_dtree,V),P.bl_desc=new z(P.bl_tree,rt),P.bi_buf=0,P.bi_valid=0,vt(P)},i._tr_stored_block=I,i._tr_flush_block=function(P,M,E,O){var F,q,tt=0;0<P.level?(P.strm.data_type===2&&(P.strm.data_type=function(st){var ct,dt=4093624447;for(ct=0;ct<=31;ct++,dt>>>=1)if(1&dt&&st.dyn_ltree[2*ct]!==0)return o;if(st.dyn_ltree[18]!==0||st.dyn_ltree[20]!==0||st.dyn_ltree[26]!==0)return a;for(ct=32;ct<p;ct++)if(st.dyn_ltree[2*ct]!==0)return a;return o}(P)),Zt(P,P.l_desc),Zt(P,P.d_desc),tt=function(st){var ct;for(x(st,st.dyn_ltree,st.l_desc.max_code),x(st,st.dyn_dtree,st.d_desc.max_code),Zt(st,st.bl_desc),ct=g-1;3<=ct&&st.bl_tree[2*R[ct]+1]===0;ct--);return st.opt_len+=3*(ct+1)+5+5+4,ct}(P),F=P.opt_len+3+7>>>3,(q=P.static_len+3+7>>>3)<=F&&(F=q)):F=q=E+5,E+4<=F&&M!==-1?I(P,M,E,O):P.strategy===4||q===F?($(P,2+(O?1:0),3),et(P,Y,C)):($(P,4+(O?1:0),3),function(st,ct,dt,mt){var Pt;for($(st,ct-257,5),$(st,dt-1,5),$(st,mt-4,4),Pt=0;Pt<mt;Pt++)$(st,st.bl_tree[2*R[Pt]+1],3);Q(st,st.dyn_ltree,ct-1),Q(st,st.dyn_dtree,dt-1)}(P,P.l_desc.max_code+1,P.d_desc.max_code+1,tt+1),et(P,P.dyn_ltree,P.dyn_dtree)),vt(P),O&&St(P)},i._tr_tally=function(P,M,E){return P.pending_buf[P.d_buf+2*P.last_lit]=M>>>8&255,P.pending_buf[P.d_buf+2*P.last_lit+1]=255&M,P.pending_buf[P.l_buf+P.last_lit]=255&E,P.last_lit++,M===0?P.dyn_ltree[2*E]++:(P.matches++,M--,P.dyn_ltree[2*(v[E]+p+1)]++,P.dyn_dtree[2*B(M)]++),P.last_lit===P.lit_bufsize-1},i._tr_align=function(P){$(P,2,3),it(P,S,Y),function(M){M.bi_valid===16?(j(M,M.bi_buf),M.bi_buf=0,M.bi_valid=0):8<=M.bi_valid&&(M.pending_buf[M.pending++]=255&M.bi_buf,M.bi_buf>>=8,M.bi_valid-=8)}(P)}},{"../utils/common":41}],53:[function(e,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,i){(function(s){(function(o,a){if(!o.setImmediate){var l,u,d,p,m=1,f={},g=!1,_=o.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(o);h=h&&h.setTimeout?h:o,l={}.toString.call(o.process)==="[object process]"?function(T){process.nextTick(function(){y(T)})}:function(){if(o.postMessage&&!o.importScripts){var T=!0,A=o.onmessage;return o.onmessage=function(){T=!1},o.postMessage("","*"),o.onmessage=A,T}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(T){o.postMessage(p+T,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(T){y(T.data)},function(T){d.port2.postMessage(T)}):_&&"onreadystatechange"in _.createElement("script")?(u=_.documentElement,function(T){var A=_.createElement("script");A.onreadystatechange=function(){y(T),A.onreadystatechange=null,u.removeChild(A),A=null},u.appendChild(A)}):function(T){setTimeout(y,0,T)},h.setImmediate=function(T){typeof T!="function"&&(T=new Function(""+T));for(var A=new Array(arguments.length-1),L=0;L<A.length;L++)A[L]=arguments[L+1];var w={callback:T,args:A};return f[m]=w,l(m),m++},h.clearImmediate=c}function c(T){delete f[T]}function y(T){if(g)setTimeout(y,0,T);else{var A=f[T];if(A){g=!0;try{(function(L){var w=L.callback,H=L.args;switch(H.length){case 0:w();break;case 1:w(H[0]);break;case 2:w(H[0],H[1]);break;case 3:w(H[0],H[1],H[2]);break;default:w.apply(a,H)}})(A)}finally{c(T),g=!1}}}}function S(T){T.source===o&&typeof T.data=="string"&&T.data.indexOf(p)===0&&y(+T.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Ho);var vp=Ho.exports;const xp=gp(vp);async function Sp(r){console.log("📦 Loading .timber file:",r.name,`(${(r.size/1024/1024).toFixed(2)} MB)`),console.log("  Unzipping file...");const e=await new xp().loadAsync(r);console.log("  ✓ ZIP loaded, files:",Object.keys(e.files));const n=e.file("world.json");if(!n)throw console.error("  ✗ world.json not found in ZIP!"),new Error("world.json not found in .timber file");console.log("  Extracting world.json...");const i=await n.async("text");console.log(`  ✓ world.json extracted (${(i.length/1024/1024).toFixed(2)} MB)`),console.log("  Parsing JSON...");const s=JSON.parse(i);console.log("  ✓ JSON parsed successfully"),console.log("    Game version:",s.GameVersion),console.log("    Map size:",s.Singletons.MapSize.Size),console.log("    Total entities:",s.Entities.length),console.log("  Processing entities...");const o=yp(s);return console.log("  ✓ Data parsed successfully"),o}function yp(r){const t=[],e=[],n=[],i=[],s=new Set(["Pine","Birch","Maple","ChestnutTree","MangroveTree"]),o=new Set(["BlueberryBush","Dandelion"]);for(const a of r.Entities){const l=Mp(a);if(l)if(a.Template==="TerrainBlock")t.push(l);else if(a.Template==="WaterSource"){const u=Ep(a);e.push({coords:l,strength:u})}else s.has(a.Template)?n.push({coords:l,type:a.Template}):o.has(a.Template)&&i.push({coords:l,type:a.Template})}return{mapSize:{x:r.Singletons.MapSize.Size.X,y:r.Singletons.MapSize.Size.Y},terrainBlocks:t,waterSources:e,trees:n,bushes:i,stats:{terrainBlocks:t.length,waterSources:e.length,trees:n.length,bushes:i.length}}}function Mp(r){for(const t of r.Components)if("BlockObject"in t)return t.BlockObject.Coordinates;return null}function Ep(r){for(const t of r.Components)if("WaterSource"in t)return t.WaterSource.SpecifiedStrength;return 1}const bp=document.getElementById("file-input"),Tp=document.getElementById("info"),io=document.getElementById("loading"),wp=document.getElementById("canvas-container"),Ap=document.getElementById("map-size"),Rp=document.getElementById("terrain-blocks"),Cp=document.getElementById("water-sources"),Lp=document.getElementById("trees"),Pp=document.getElementById("bushes"),Dp=new _p(wp);bp.addEventListener("change",async r=>{var n;const e=(n=r.target.files)==null?void 0:n[0];if(e)try{io.classList.add("active"),console.log("Loading file:",e.name);const i=await Sp(e);console.log("Map data loaded:",i),Ip(i),Dp.loadTerrain(i),Tp.style.display="block",console.log("Terrain rendered successfully")}catch(i){console.error("Error loading terrain:",i),alert(`Failed to load terrain: ${i instanceof Error?i.message:"Unknown error"}`)}finally{io.classList.remove("active")}});function Ip(r){Ap.textContent=`${r.mapSize.x} × ${r.mapSize.y}`,Rp.textContent=r.stats.terrainBlocks.toLocaleString(),Cp.textContent=r.stats.waterSources.toString(),Lp.textContent=r.stats.trees.toLocaleString(),Pp.textContent=r.stats.bushes.toLocaleString()}console.log("🌲 Timberborn Viewer initialized");console.log("Please load a .timber file to view the terrain");document.addEventListener("keydown",r=>{if(r.key==="h"||r.key==="H"){const t=document.getElementById("instructions");t&&(t.style.display=t.style.display==="none"?"block":"none")}});
