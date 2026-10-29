(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="170",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Id=0,mc=1,Ed=2,Dp=3,Lp=0,Rc=1,Uc=2,An=3,Zn=0,Bt=1,Cn=2,_n=0,zi=1,Wo=2,gc=3,yc=4,Dd=5,ci=100,Ld=101,Rd=102,Ud=103,Nd=104,Fd=200,Od=201,Bd=202,kd=203,Ho=204,Xo=205,zd=206,Gd=207,Vd=208,Wd=209,Hd=210,Xd=211,qd=212,Yd=213,$d=214,qo=0,Yo=1,$o=2,Hi=3,Zo=4,Jo=5,Ko=6,jo=7,Rr=0,Zd=1,Jd=2,In=0,Na=1,Fa=2,Oa=3,Ur=4,Kd=5,Ba=6,ka=7,vc="attached",jd="detached",za=300,Jn=301,hi=302,Ts=303,gr=304,Us=306,Ps=1e3,dn=1001,yr=1002,Ct=1003,Nc=1004,Rp=1004,bs=1005,Up=1005,wt=1006,or=1007,Np=1007,Tn=1008,Fp=1008,Rn=1009,Fc=1010,Oc=1011,Is=1012,Ga=1013,Kn=1014,en=1015,xn=1016,Va=1017,Wa=1018,Xi=1020,Bc=35902,kc=1021,zc=1022,qt=1023,Gc=1024,Vc=1025,Gi=1026,qi=1027,Ha=1028,Nr=1029,Wc=1030,Xa=1031,Op=1032,qa=1033,ar=33776,lr=33777,cr=33778,hr=33779,Qo=35840,ea=35841,ta=35842,na=35843,ia=36196,sa=37492,ra=37496,oa=37808,aa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,ya=37819,va=37820,_a=37821,ur=36492,xa=36494,Ma=36495,Hc=36283,ba=36284,Sa=36285,wa=36286,Qd=2200,ef=2201,tf=2202,vr=2300,Aa=2301,Go=2302,Ui=2400,Ni=2401,_r=2402,Ya=2500,Xc=2501,Bp=0,kp=1,zp=2,nf=3200,qc=3201,Gp=3202,Vp=3203,di=0,sf=1,Xn="",Ot="srgb",Ji="srgb-linear",Fr="linear",rt="srgb",Wp=0,Ii=7680,Hp=7681,Xp=7682,qp=7683,Yp=34055,$p=34056,Zp=5386,Jp=512,Kp=513,jp=514,Qp=515,em=516,tm=517,nm=518,_c=519,rf=512,of=513,af=514,Yc=515,lf=516,cf=517,hf=518,uf=519,xr=35044,im=35048,sm=35040,rm=35045,om=35049,am=35041,lm=35046,cm=35050,hm=35042,um="100",xc="300 es",Pn=2e3,Mr=2001;class Un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const Vi=Math.PI/180,Es=180/Math.PI;function on(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function dm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fm(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function pm(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function mm(i,e=1){return e-Math.abs($c(i,e*2)-e)}function gm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _m(i,e){return i+Math.random()*(e-i)}function xm(i){return i*(.5-Math.random())}function Mm(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bm(i){return i*Vi}function Sm(i){return i*Es}function wm(i){return(i&i-1)===0&&i!==0}function Am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const df={DEG2RAD:Vi,RAD2DEG:Es,generateUUID:on,clamp:yt,euclideanModulo:$c,mapLinear:dm,inverseLerp:fm,lerp:dr,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:ym,randInt:vm,randFloat:_m,randFloatSpread:xm,seededRandom:Mm,degToRad:bm,radToDeg:Sm,isPowerOfTwo:wm,ceilPowerOfTwo:Am,floorPowerOfTwo:Cm,setQuaternionFromProperEuler:Tm,normalize:We,denormalize:Xt};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,s,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],y=s[0],g=s[3],p=s[6],x=s[1],_=s[4],v=s[7],T=s[2],w=s[5],S=s[8];return r[0]=o*y+a*x+l*T,r[3]=o*g+a*_+l*w,r[6]=o*p+a*v+l*S,r[1]=c*y+h*x+f*T,r[4]=c*g+h*_+f*w,r[7]=c*p+h*v+f*S,r[2]=u*y+d*x+m*T,r[5]=u*g+d*_+m*w,r[8]=u*p+d*v+m*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=f*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new Ve;function ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Pm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ss(i,e){return new Pm[i](e)}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){const i=br("canvas");return i.style.display="block",i}const Oh={};function nr(i){i in Oh||(Oh[i]=!0,console.warn(i))}function Im(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Em(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?Fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bh=[.64,.33,.3,.6,.15,.06],kh=[.2126,.7152,.0722],zh=[.3127,.329],Gh=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Ji]:{primaries:Bh,whitePoint:zh,transfer:Fr,toXYZ:Gh,fromXYZ:Vh,luminanceCoefficients:kh,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Bh,whitePoint:zh,transfer:rt,toXYZ:Gh,fromXYZ:Vh,luminanceCoefficients:kh,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let is;class mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=br("canvas")),is.width=e.width,is.height=e.height;const n=is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lm=0;class Fi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bl(s[o].image)):r.push(bl(s[o]))}else r=bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class vt extends Un{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=dn,s=dn,r=wt,o=Tn,a=qt,l=Rn,c=vt.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=on(),this.name="",this.source=new Fi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==za)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=za;vt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(d+1)/2,T=(p+1)/2,w=(h+u)/4,S=(f+y)/4,P=(m+g)/4;return _>v&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=S/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=S/r,s=P/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-y)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends Un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $a extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Um extends kt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new $a(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Zc extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nm extends kt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Zc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class zt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=y;return}if(f!==y||l!==u||c!==d||h!==m){let g=1-a;const p=l*u+c*d+h*m+f*y,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const T=Math.sqrt(_),w=Math.atan2(T,p*x);g=Math.sin(g*w)/T,a=Math.sin(a*w)/T}const v=a*x;if(l=l*g+u*v,c=c*g+d*v,h=h*g+m*v,f=f*g+y*v,g===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-a*d,e[t+2]=c*m+h*d+a*u-l*f,e[t+3]=h*m-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new E,Wh=new zt;class Yt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Zr.subVectors(this.max,zs),ss.subVectors(e.a,zs),rs.subVectors(e.b,zs),os.subVectors(e.c,zs),ni.subVectors(rs,ss),ii.subVectors(os,rs),gi.subVectors(ss,os);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-gi.z,gi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,gi.z,0,-gi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-gi.y,gi.x,0];return!wl(t,ss,rs,os,Zr)||(t=[1,0,0,0,1,0,0,0,1],!wl(t,ss,rs,os,Zr))?!1:(Jr.crossVectors(ni,ii),t=[Jr.x,Jr.y,Jr.z],wl(t,ss,rs,os,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new E,new E,new E,new E,new E,new E,new E,new E],mn=new E,$r=new Yt,ss=new E,rs=new E,os=new E,ni=new E,ii=new E,gi=new E,zs=new E,Zr=new E,Jr=new E,yi=new E;function wl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){yi.fromArray(i,r);const a=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fm=new Yt,Gs=new E,Al=new E;class Gt{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const t=Gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Al)),this.expandByPoint(Gs.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new E,Cl=new E,Kr=new E,si=new E,Tl=new E,jr=new E,Pl=new E;class Ki{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cl.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Cl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=si.dot(this.direction),l=-si.dot(Kr),c=si.lengthSq(),h=Math.abs(1-o*o);let f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const y=1/h;f*=y,u*=y,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cl).addScaledVector(Kr,u),d}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){Tl.subVectors(t,e),jr.subVectors(n,e),Pl.crossVectors(Tl,jr);let o=this.direction.dot(Pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(jr.crossVectors(si,jr));if(l<0)return null;const c=a*this.direction.dot(Tl.cross(si));if(c<0||l+c>o)return null;const h=-a*si.dot(Pl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,s,r,o,a,l,c,h,f,u,d,m,y,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,u,d,m,y,g)}set(e,t,n,s,r,o,a,l,c,h,f,u,d,m,y,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,d=o*f,m=a*h,y=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,y=c*f;t[0]=u+y*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,y=c*f;t[0]=u-y*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,d=o*f,m=a*h,y=a*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,d=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=y-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-y*f}else if(e.order==="XZY"){const u=o*l,d=o*c,m=a*l,y=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,Bm)}lookAt(e,t,n){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ri.crossVectors(n,sn),ri.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ri.crossVectors(n,sn)),ri.normalize(),Qr.crossVectors(sn,ri),s[0]=ri.x,s[4]=Qr.x,s[8]=sn.x,s[1]=ri.y,s[5]=Qr.y,s[9]=sn.y,s[2]=ri.z,s[6]=Qr.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],y=n[6],g=n[10],p=n[14],x=n[3],_=n[7],v=n[11],T=n[15],w=s[0],S=s[4],P=s[8],b=s[12],M=s[1],I=s[5],N=s[9],R=s[13],O=s[2],G=s[6],B=s[10],k=s[14],z=s[3],j=s[7],ce=s[11],U=s[15];return r[0]=o*w+a*M+l*O+c*z,r[4]=o*S+a*I+l*G+c*j,r[8]=o*P+a*N+l*B+c*ce,r[12]=o*b+a*R+l*k+c*U,r[1]=h*w+f*M+u*O+d*z,r[5]=h*S+f*I+u*G+d*j,r[9]=h*P+f*N+u*B+d*ce,r[13]=h*b+f*R+u*k+d*U,r[2]=m*w+y*M+g*O+p*z,r[6]=m*S+y*I+g*G+p*j,r[10]=m*P+y*N+g*B+p*ce,r[14]=m*b+y*R+g*k+p*U,r[3]=x*w+_*M+v*O+T*z,r[7]=x*S+_*I+v*G+T*j,r[11]=x*P+_*N+v*B+T*ce,r[15]=x*b+_*R+v*k+T*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],y=e[7],g=e[11],p=e[15];return m*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*d-n*l*d)+y*(+t*l*d-t*c*u+r*o*u-s*o*d+s*c*h-r*l*h)+g*(+t*c*f-t*a*d-r*o*f+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*f+t*a*u+s*o*f-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],y=e[13],g=e[14],p=e[15],x=f*g*c-y*u*c+y*l*d-a*g*d-f*l*p+a*u*p,_=m*u*c-h*g*c-m*l*d+o*g*d+h*l*p-o*u*p,v=h*y*c-m*f*c+m*a*d-o*y*d-h*a*p+o*f*p,T=m*f*l-h*y*l-m*a*u+o*y*u+h*a*g-o*f*g,w=t*x+n*_+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=x*S,e[1]=(y*u*r-f*g*r-y*s*d+n*g*d+f*s*p-n*u*p)*S,e[2]=(a*g*r-y*l*r+y*s*c-n*g*c-a*s*p+n*l*p)*S,e[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*d-n*l*d)*S,e[4]=_*S,e[5]=(h*g*r-m*u*r+m*s*d-t*g*d-h*s*p+t*u*p)*S,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*S,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*d+t*l*d)*S,e[8]=v*S,e[9]=(m*f*r-h*y*r-m*n*d+t*y*d+h*n*p-t*f*p)*S,e[10]=(o*y*r-m*a*r+m*n*c-t*y*c-o*n*p+t*a*p)*S,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*d-t*a*d)*S,e[12]=T*S,e[13]=(h*y*s-m*f*s+m*n*u-t*y*u-h*n*g+t*f*g)*S,e[14]=(m*a*s-o*y*s-m*n*l+t*y*l+o*n*g-t*a*g)*S,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*u+t*a*u)*S,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,m=r*f,y=o*h,g=o*f,p=a*f,x=l*c,_=l*h,v=l*f,T=n.x,w=n.y,S=n.z;return s[0]=(1-(y+p))*T,s[1]=(d+v)*T,s[2]=(m-_)*T,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(u+p))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+_)*S,s[9]=(g-x)*S,s[10]=(1-(u+y))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=as.set(s[0],s[1],s[2]).length();const o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const c=1/r,h=1/o,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Pn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s);let d,m;if(a===Pn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Mr)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pn){const l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),u=(t+e)*c,d=(n+s)*h;let m,y;if(a===Pn)m=(o+r)*f,y=-2*f;else if(a===Mr)m=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new E,gn=new ke,Om=new E(0,0,0),Bm=new E(1,1,1),ri=new E,Qr=new E,sn=new E,Hh=new ke,Xh=new zt;class an{constructor(e=0,t=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let km=0;const qh=new E,ls=new zt,zn=new ke,eo=new E,Vs=new E,zm=new E,Gm=new zt,Yh=new E(1,0,0),$h=new E(0,1,0),Zh=new E(0,0,1),Jh={type:"added"},Vm={type:"removed"},cs={type:"childadded",child:null},Il={type:"childremoved",child:null};class tt extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DEFAULT_UP.clone();const e=new E,t=new an,n=new zt,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ve}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Vs,eo,this.up):zn.lookAt(eo,Vs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(zn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vm),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}tt.DEFAULT_UP=new E(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new E,Gn=new E,El=new E,Vn=new E,hs=new E,us=new E,Kh=new E,Dl=new E,Ll=new E,Rl=new E,Ul=new et,Nl=new et,Fl=new et;class Qt{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Gn.subVectors(n,t),El.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(Gn),l=yn.dot(El),c=Gn.dot(Gn),h=Gn.dot(El),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ul.setScalar(0),Nl.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ul,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Fl,r.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;hs.subVectors(s,n),us.subVectors(r,n),Dl.subVectors(e,n);const l=hs.dot(Dl),c=us.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,s);const h=hs.dot(Ll),f=us.dot(Ll);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(hs,o);Rl.subVectors(e,r);const d=hs.dot(Rl),m=us.dot(Rl);if(m>=0&&d<=m)return t.copy(r);const y=d*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(us,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Kh.subVectors(r,s),a=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(Kh,a);const p=1/(g+y+u);return o=y*p,a=u*p,t.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=$c(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ol(o,r,e+1/3),this.g=Ol(o,r,e),this.b=Ol(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.fromWorkingColorSpace(Nt.copy(this),e),Math.round(yt(Nt.r*255,0,255))*65536+Math.round(yt(Nt.g*255,0,255))*256+Math.round(yt(Nt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ot){Ke.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,s=Nt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(to);const n=dr(oi.h,to.h,t),s=dr(oi.s,to.s,t),r=dr(oi.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new ve;ve.NAMES=yf;let Wm=0;class Vt extends Un{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=on(),this.name="",this.blending=zi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Xo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ln extends Vt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qn=Hm();function Hm(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function jt(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=yt(i,-65504,65504),qn.floatView[0]=i;const e=qn.uint32View[0],t=e>>23&511;return qn.baseTable[t]+((e&8388607)>>qn.shiftTable[t])}function ir(i){const e=i>>10;return qn.uint32View[0]=qn.mantissaTable[qn.offsetTable[e]+(i&1023)]+qn.exponentTable[e],qn.floatView[0]}const Xm={toHalfFloat:jt,fromHalfFloat:ir},Mt=new E,no=new ee;class lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xr,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=We(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xr&&(e.usage=this.usage),e}}class qm extends lt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class Ym extends lt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class $m extends lt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class Zm extends lt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Jc extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jm extends lt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Kc extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Km extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ir(this.array[e*this.itemSize]);return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=jt(t),this}getY(e){let t=ir(this.array[e*this.itemSize+1]);return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=jt(t),this}getZ(e){let t=ir(this.array[e*this.itemSize+2]);return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=jt(t),this}getW(e){let t=ir(this.array[e*this.itemSize+3]);return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=jt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=jt(t),this.array[e+1]=jt(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[e+0]=jt(t),this.array[e+1]=jt(n),this.array[e+2]=jt(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[e+0]=jt(t),this.array[e+1]=jt(n),this.array[e+2]=jt(s),this.array[e+3]=jt(r),this}}class Le extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jm=0;const hn=new ke,Bl=new tt,ds=new E,rn=new Yt,Ws=new Yt,It=new E;class He extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?Kc:Jc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(rn.min,Ws.min),rn.expandByPoint(It),It.addVectors(rn.max,Ws.max),rn.expandByPoint(It)):(rn.expandByPoint(Ws.min),rn.expandByPoint(Ws.max))}rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),It.add(ds)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new E,l[P]=new E;const c=new E,h=new E,f=new E,u=new ee,d=new ee,m=new ee,y=new E,g=new E;function p(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),a[P].add(y),a[b].add(y),a[M].add(y),l[P].add(g),l[b].add(g),l[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,N=M.count;for(let R=I,O=I+N;R<O;R+=3)p(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const _=new E,v=new E,T=new E,w=new E;function S(P){T.fromBufferAttribute(s,P),w.copy(T);const b=a[P];_.copy(b),_.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,I)}for(let P=0,b=x.length;P<b;++P){const M=x[P],I=M.start,N=M.count;for(let R=I,O=I+N;R<O;R+=3)S(e.getX(R+0)),S(e.getX(R+1)),S(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,f=new E;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),y=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new lt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new He,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new ke,vi=new Ki,io=new Gt,Qh=new E,so=new E,ro=new E,oo=new E,kl=new E,ao=new E,eu=new E,lo=new E;class ut extends tt{constructor(e=new He,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(kl.fromBufferAttribute(f,e),o?ao.addScaledVector(kl,h):ao.addScaledVector(kl.sub(t),h))}t.add(ao)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(io.containsPoint(vi.origin)===!1&&(vi.intersectSphere(io,Qh)===null||vi.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(jh.copy(r).invert(),vi.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,T=_;v<T;v+=3){const w=a.getX(v),S=a.getX(v+1),P=a.getX(v+2);s=co(this,p,e,n,c,h,f,w,S,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){const x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=co(this,o,e,n,c,h,f,x,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){const g=u[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,T=_;v<T;v+=3){const w=v,S=v+1,P=v+2;s=co(this,p,e,n,c,h,f,w,S,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=m,p=y;g<p;g+=3){const x=g,_=g+1,v=g+2;s=co(this,o,e,n,c,h,f,x,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Qm(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Zn,a),l===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:i}}function co(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,so),i.getVertexPosition(l,ro),i.getVertexPosition(c,oo);const h=Qm(i,e,t,n,so,ro,oo,eu);if(h){const f=new E;Qt.getBarycoord(eu,so,ro,oo,f),s&&(h.uv=Qt.getInterpolatedAttribute(s,a,l,c,f,new ee)),r&&(h.uv1=Qt.getInterpolatedAttribute(r,a,l,c,f,new ee)),o&&(h.normal=Qt.getInterpolatedAttribute(o,a,l,c,f,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new E,materialIndex:0};Qt.getNormal(so,ro,oo,u.normal),h.face=u,h.barycoord=f}return h}class Qn extends He{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function m(y,g,p,x,_,v,T,w,S,P,b){const M=v/S,I=T/P,N=v/2,R=T/2,O=w/2,G=S+1,B=P+1;let k=0,z=0;const j=new E;for(let ce=0;ce<B;ce++){const U=ce*I-R;for(let re=0;re<G;re++){const ge=re*M-N;j[y]=ge*x,j[g]=U*_,j[p]=O,c.push(j.x,j.y,j.z),j[y]=0,j[g]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),f.push(re/S),f.push(1-ce/P),k+=1}}for(let ce=0;ce<P;ce++)for(let U=0;U<S;U++){const re=u+U+G*ce,ge=u+U+G*(ce+1),$=u+(U+1)+G*(ce+1),he=u+(U+1)+G*ce;l.push(re,ge,he),l.push(ge,$,he),z+=6}a.addGroup(d,z,b),d+=z,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function e0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Yi={clone:Ds,merge:Ht};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends Vt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ja extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new E,tu=new ee,nu=new ee;class Lt extends Ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,tu,nu),t.subVectors(nu,tu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class _f extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Lt(fs,ps,e,t);s.layers=this.layers,this.add(s);const r=new Lt(fs,ps,e,t);r.layers=this.layers,this.add(r);const o=new Lt(fs,ps,e,t);o.layers=this.layers,this.add(o);const a=new Lt(fs,ps,e,t);a.layers=this.layers,this.add(a);const l=new Lt(fs,ps,e,t);l.layers=this.layers,this.add(l);const c=new Lt(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Or extends vt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Jn,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xf extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:_n});r.uniforms.tEquirect.value=t;const o=new ut(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=wt),new _f(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const zl=new E,i0=new E,s0=new Ve;class Hn{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=zl.subVectors(n,t).cross(i0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||s0.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Gt,ho=new E;class Br{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],y=s[10],g=s[11],p=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,g-d,v-p).normalize(),n[1].setComponents(l+r,u+c,g+d,v+p).normalize(),n[2].setComponents(l+o,u+h,g+m,v+x).normalize(),n[3].setComponents(l-o,u-h,g-m,v-x).normalize(),n[4].setComponents(l-a,u-f,g-y,v-_).normalize(),t===Pn)n[5].setComponents(l+a,u+f,g+y,v+_).normalize();else if(t===Mr)n[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function r0(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ns extends He{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,d=[],m=[],y=[],g=[];for(let p=0;p<h;p++){const x=p*u-o;for(let _=0;_<c;_++){const v=_*f-r;m.push(v,-x,0),y.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,v=x+c*(p+1),T=x+1+c*(p+1),w=x+1+c*p;d.push(_,v,w),d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var o0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a0=`#ifdef USE_ALPHAHASH
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
#endif`,l0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,f0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,m0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,j0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ig=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,rg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mg=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ey=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,dy=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fy=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,py=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,My=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,by=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sy=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,wy=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ay=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Cy=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ty=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Py=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Iy=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Ey=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Dy=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Ly=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ry=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Uy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Fy=`uniform vec3 color;
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
}`,Oy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,By=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ye={alphahash_fragment:o0,alphahash_pars_fragment:a0,alphamap_fragment:l0,alphamap_pars_fragment:c0,alphatest_fragment:h0,alphatest_pars_fragment:u0,aomap_fragment:d0,aomap_pars_fragment:f0,batching_pars_vertex:p0,batching_vertex:m0,begin_vertex:g0,beginnormal_vertex:y0,bsdfs:v0,iridescence_fragment:_0,bumpmap_pars_fragment:x0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:w0,color_fragment:A0,color_pars_fragment:C0,color_pars_vertex:T0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:D0,displacementmap_pars_vertex:L0,displacementmap_vertex:R0,emissivemap_fragment:U0,emissivemap_pars_fragment:N0,colorspace_fragment:F0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:k0,envmap_pars_fragment:z0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:j0,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:H0,fog_fragment:X0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:$0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:J0,lights_pars_begin:K0,lights_toon_fragment:Q0,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:sg,lights_fragment_begin:rg,lights_fragment_maps:og,lights_fragment_end:ag,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:ug,map_fragment:dg,map_pars_fragment:fg,map_particle_fragment:pg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:yg,morphinstance_vertex:vg,morphcolor_vertex:_g,morphnormal_vertex:xg,morphtarget_pars_vertex:Mg,morphtarget_vertex:bg,normal_fragment_begin:Sg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Tg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Lg,opaque_fragment:Rg,packing:Ug,premultiplied_alpha_fragment:Ng,project_vertex:Fg,dithering_fragment:Og,dithering_pars_fragment:Bg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Hg,skinbase_vertex:Xg,skinning_pars_vertex:qg,skinning_vertex:Yg,skinnormal_vertex:$g,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:Kg,tonemapping_pars_fragment:jg,transmission_fragment:Qg,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:sy,background_vert:ry,background_frag:oy,backgroundCube_vert:ay,backgroundCube_frag:ly,cube_vert:cy,cube_frag:hy,depth_vert:uy,depth_frag:dy,distanceRGBA_vert:fy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:yy,linedashed_frag:vy,meshbasic_vert:_y,meshbasic_frag:xy,meshlambert_vert:My,meshlambert_frag:by,meshmatcap_vert:Sy,meshmatcap_frag:wy,meshnormal_vert:Ay,meshnormal_frag:Cy,meshphong_vert:Ty,meshphong_frag:Py,meshphysical_vert:Iy,meshphysical_frag:Ey,meshtoon_vert:Dy,meshtoon_frag:Ly,points_vert:Ry,points_frag:Uy,shadow_vert:Ny,shadow_frag:Fy,sprite_vert:Oy,sprite_frag:By},be={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vn={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};vn.physical={uniforms:Ht([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const uo={r:0,b:0,g:0},xi=new an,ky=new ke;function zy(i,e,t,n,s,r,o){const a=new ve(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function y(x){let _=!1;const v=m(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){const v=m(_);v&&(v.isCubeTexture||v.mapping===Us)?(h===void 0&&(h=new ut(new Qn(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ds(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(_.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ky.makeRotationFromEuler(xi)),h.material.toneMapped=Ke.getTransfer(v.colorSpace)!==rt,(f!==v||u!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ut(new Ns(2,2),new At({name:"BackgroundMaterial",uniforms:Ds(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(uo,vf(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:y,addToRenderList:g}}function Gy(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(M,I,N,R,O){let G=!1;const B=f(R,N,I);r!==B&&(r=B,c(r.object)),G=d(M,R,N,O),G&&m(M,R,N,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(M,I,N,R),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,I,N){const R=N.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let G=O[I.id];G===void 0&&(G={},O[I.id]=G);let B=G[R];return B===void 0&&(B=u(l()),G[R]=B),B}function u(M){const I=[],N=[],R=[];for(let O=0;O<t;O++)I[O]=0,N[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:R,object:M,attributes:{},index:null}}function d(M,I,N,R){const O=r.attributes,G=I.attributes;let B=0;const k=N.getAttributes();for(const z in k)if(k[z].location>=0){const ce=O[z];let U=G[z];if(U===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(U=M.instanceColor)),ce===void 0||ce.attribute!==U||U&&ce.data!==U.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function m(M,I,N,R){const O={},G=I.attributes;let B=0;const k=N.getAttributes();for(const z in k)if(k[z].location>=0){let ce=G[z];ce===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const U={};U.attribute=ce,ce&&ce.data&&(U.data=ce.data),O[z]=U,B++}r.attributes=O,r.attributesNum=B,r.index=R}function y(){const M=r.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const N=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;N[M]=1,R[M]===0&&(i.enableVertexAttribArray(M),R[M]=1),O[M]!==I&&(i.vertexAttribDivisor(M,I),O[M]=I)}function x(){const M=r.newAttributes,I=r.enabledAttributes;for(let N=0,R=I.length;N<R;N++)I[N]!==M[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function _(M,I,N,R,O,G,B){B===!0?i.vertexAttribIPointer(M,I,N,O,G):i.vertexAttribPointer(M,I,N,R,O,G)}function v(M,I,N,R){y();const O=R.attributes,G=N.getAttributes(),B=I.defaultAttributeValues;for(const k in G){const z=G[k];if(z.location>=0){let j=O[k];if(j===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const ce=j.normalized,U=j.itemSize,re=e.get(j);if(re===void 0)continue;const ge=re.buffer,$=re.type,he=re.bytesPerElement,ne=$===i.INT||$===i.UNSIGNED_INT||j.gpuType===Ga;if(j.isInterleavedBufferAttribute){const Q=j.data,me=Q.stride,_e=j.offset;if(Q.isInstancedInterleavedBuffer){for(let X=0;X<z.locationSize;X++)p(z.location+X,Q.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let X=0;X<z.locationSize;X++)g(z.location+X);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let X=0;X<z.locationSize;X++)_(z.location+X,U/z.locationSize,$,ce,me*he,(_e+U/z.locationSize*X)*he,ne)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)p(z.location+Q,j.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<z.locationSize;Q++)g(z.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Q=0;Q<z.locationSize;Q++)_(z.location+Q,U/z.locationSize,$,ce,U*he,U/z.locationSize*Q*he,ne)}}else if(B!==void 0){const ce=B[k];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(z.location,ce);break;case 3:i.vertexAttrib3fv(z.location,ce);break;case 4:i.vertexAttrib4fv(z.location,ce);break;default:i.vertexAttrib1fv(z.location,ce)}}}}x()}function T(){P();for(const M in n){const I=n[M];for(const N in I){const R=I[N];for(const O in R)h(R[O].object),delete R[O];delete I[N]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const N in I){const R=I[N];for(const O in R)h(R[O].object),delete R[O];delete I[N]}delete n[M.id]}function S(M){for(const I in n){const N=n[I];if(N[M.id]===void 0)continue;const R=N[M.id];for(const O in R)h(R[O].object),delete R[O];delete N[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:g,disableUnusedAttributes:x}}function Vy(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let m=0;for(let y=0;y<f;y++)m+=h[y]*u[y];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==qt&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const P=S===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Rn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==en&&!P)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function Hy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Hn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,_=x*4;let v=p.clippingState||null;l.value=v,v=h(m,u,_,d);for(let T=0;T!==_;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const p=d+y*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==y;++_,v+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Xy(i){let e=new WeakMap;function t(o,a){return a===Ts?o.mapping=Jn:a===gr&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ts||a===gr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class kr extends Ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,iu=[.125,.215,.35,.446,.526,.582],Di=20,Gl=new kr,su=new ve;let Vl=null,Wl=0,Hl=0,Xl=!1;const Ei=(1+Math.sqrt(5))/2,ms=1/Ei,ru=[new E(-Ei,ms,0),new E(Ei,ms,0),new E(-ms,0,Ei),new E(ms,0,Ei),new E(0,Ei,-ms),new E(0,Ei,ms),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Wl,Hl),this._renderer.xr.enabled=Xl,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:xn,format:qt,colorSpace:Ji,depthBuffer:!1},s=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(r)),this._blurMaterial=Yy(r,e,t)}return s}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,n,s){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(su),h.toneMapping=In,h.autoClear=!1;const d=new ln({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),m=new ut(new Qn,d);let y=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,y=!0):(d.color.copy(su),y=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;fo(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jn||e.mapping===hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ru[(s-r-1)%ru.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new ut(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Di-1),y=r/m,g=isFinite(r)?1+Math.floor(h*y):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);const p=[];let x=0;for(let S=0;S<Di;++S){const P=S/y,b=Math.exp(-P*P/2);p.push(b),S===0?x+=b:S<g&&(x+=2*b)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;const v=this._sizeLods[s],T=3*v*(s>_-ws?s-_+ws:0),w=4*(this._cubeSize-v);fo(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Gl)}}function qy(i){const e=[],t=[],n=[];let s=i;const r=i-ws+1+iu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ws?l=iu[o-i+ws-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,y=3,g=2,p=1,x=new Float32Array(y*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,P=w>2?0:-1,b=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];x.set(b,y*m*w),_.set(u,g*m*w);const M=[w,w,w,w,w,w];v.set(M,p*m*w)}const T=new He;T.setAttribute("position",new lt(x,y)),T.setAttribute("uv",new lt(_,g)),T.setAttribute("faceIndex",new lt(v,p)),e.push(T),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ou(i,e,t){const n=new kt(i,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yy(i,e,t){const n=new Float32Array(Di),s=new E(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function au(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function lu(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function $y(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ts||l===gr,h=l===Jn||l===hi;if(c||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ca(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ca(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jy(i,e,t,n){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const y=u.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)e.remove(y[g])}u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const y=d[m];for(let g=0,p=y.length;g<p;g++)e.update(y[g],i.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,m=f.attributes.position;let y=0;if(d!==null){const x=d.array;y=d.version;for(let _=0,v=x.length;_<v;_+=3){const T=x[_+0],w=x[_+1],S=x[_+2];u.push(T,w,w,S,S,T)}}else if(m!==void 0){const x=m.array;y=m.version;for(let _=0,v=x.length/3-1;_<v;_+=3){const T=_+0,w=_+1,S=_+2;u.push(T,w,w,S,S,T)}}else return;const g=new(ff(u)?Kc:Jc)(u,1);g.version=y;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ky(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,u*o,m),t.update(d,n,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function f(u,d,m,y){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,y,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*y[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function jy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qy(i,e,t){const n=new WeakMap,s=new et;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),y===!0&&(v=2),g===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const S=new Float32Array(T*w*4*f),P=new $a(S,T,w,f);P.type=en,P.needsUpdate=!0;const b=v*4;for(let I=0;I<f;I++){const N=p[I],R=x[I],O=_[I],G=T*w*4*I;for(let B=0;B<N.count;B++){const k=B*b;m===!0&&(s.fromBufferAttribute(N,B),S[G+k+0]=s.x,S[G+k+1]=s.y,S[G+k+2]=s.z,S[G+k+3]=0),y===!0&&(s.fromBufferAttribute(R,B),S[G+k+4]=s.x,S[G+k+5]=s.y,S[G+k+6]=s.z,S[G+k+7]=0),g===!0&&(s.fromBufferAttribute(O,B),S[G+k+8]=s.x,S[G+k+9]=s.y,S[G+k+10]=s.z,S[G+k+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new ee(T,w)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ev(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Qc extends vt{constructor(e,t,n,s,r,o,a,l,c,h=Gi){if(h!==Gi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=Kn),n===void 0&&h===qi&&(n=Xi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bf=new vt,cu=new Qc(1,1),Sf=new $a,wf=new Zc,Af=new Or,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Tt(t,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),Pt(t,n)}}function ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Tt(t,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),Pt(t,n)}}function av(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Tt(t,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),Pt(t,n)}}function lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function dv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function gv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cu.compareFunction=Yc,r=cu):r=bf,t.setTexture2D(e||r,s)}function yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function vv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Af,s)}function _v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sf,s)}function xv(i){switch(i){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function Mv(i,e){i.uniform1fv(this.addr,e)}function bv(i,e){const t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function Sv(i,e){const t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function wv(i,e){const t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function Av(i,e){const t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cv(i,e){const t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tv(i,e){const t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pv(i,e){i.uniform1iv(this.addr,e)}function Iv(i,e){i.uniform2iv(this.addr,e)}function Ev(i,e){i.uniform3iv(this.addr,e)}function Dv(i,e){i.uniform4iv(this.addr,e)}function Lv(i,e){i.uniform1uiv(this.addr,e)}function Rv(i,e){i.uniform2uiv(this.addr,e)}function Uv(i,e){i.uniform3uiv(this.addr,e)}function Nv(i,e){i.uniform4uiv(this.addr,e)}function Fv(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||bf,r[o])}function Ov(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function Bv(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Af,r[o])}function kv(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sf,r[o])}function zv(i){switch(i){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return wv;case 35674:return Av;case 35675:return Cv;case 35676:return Tv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Ev;case 35669:case 35673:return Dv;case 5125:return Lv;case 36294:return Rv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return kv}}class Gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}}class Vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zv(t.type)}}class Wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function mu(i,e){i.seq.push(e),i.map[e.id]=e}function Hv(i,e,t){const n=i.name,s=n.length;for(ql.lastIndex=0;;){const r=ql.exec(n),o=ql.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mu(t,c===void 0?new Gv(a,i,e):new Vv(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Wv(a),mu(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Hv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xv=37297;let qv=0;function Yv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yu=new Ve;function $v(i){Ke._getMatrix(yu,Ke.workingColorSpace,i);const e=`mat3( ${yu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yv(i.getShaderSource(e),o)}else return s}function Zv(i,e){const t=$v(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jv(i,e){let t;switch(e){case Na:t="Linear";break;case Fa:t="Reinhard";break;case Oa:t="Cineon";break;case Ur:t="ACESFilmic";break;case Ba:t="AgX";break;case ka:t="Neutral";break;case Kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new E;function Kv(){Ke.getLuminanceCoefficients(po);const i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function Qv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sr(i){return i!==""}function _u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(t_,i_)}const n_=new Map;function i_(i,e){let t=Ye[e];if(t===void 0){const n=n_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(s_,r_)}function r_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jn:case hi:e="ENVMAP_TYPE_CUBE";break;case Us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rr:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case Jd:e="ENVMAP_BLENDING_ADD";break}return e}function h_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function u_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=o_(t),c=a_(t),h=l_(t),f=c_(t),u=h_(t),d=jv(t),m=Qv(r),y=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(g=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ye.tonemapping_pars_fragment:"",t.toneMapping!==In?Jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Zv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Mc(o),o=_u(o,t),o=xu(o,t),a=Mc(a),a=_u(a,t),a=xu(a,t),o=Mu(o),a=Mu(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+g+o,v=x+p+a,T=gu(s,s.VERTEX_SHADER,_),w=gu(s,s.FRAGMENT_SHADER,v);s.attachShader(y,T),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function S(I){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(y).trim(),R=s.getShaderInfoLog(T).trim(),O=s.getShaderInfoLog(w).trim();let G=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,w);else{const k=vu(s,T,"vertex"),z=vu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+k+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||O==="")&&(B=!1);B&&(I.diagnostics={runnable:G,programLog:N,vertexShader:{log:R,prefix:g},fragmentShader:{log:O,prefix:p}})}s.deleteShader(T),s.deleteShader(w),P=new Vo(s,y),b=e_(s,y)}let P;this.getUniforms=function(){return P===void 0&&S(this),P};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Xv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=w,this}let d_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p_(e),t.set(e,n)),n}}class p_{constructor(e){this.id=d_++,this.code=e,this.usedTimes=0}}function m_(i,e,t,n,s,r,o){const a=new Za,l=new f_,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,N,R){const O=N.fog,G=R.geometry,B=b.isMeshStandardMaterial?N.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),z=k&&k.mapping===Us?k.image.height:null,j=m[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ce=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,U=ce!==void 0?ce.length:0;let re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let ge,$,he,ne;if(j){const ot=vn[j];ge=ot.vertexShader,$=ot.fragmentShader}else ge=b.vertexShader,$=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),ne=l.getFragmentShaderID(b);const Q=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),_e=R.isInstancedMesh===!0,X=R.isBatchedMesh===!0,de=!!b.map,F=!!b.matcap,Z=!!k,L=!!b.aoMap,xe=!!b.lightMap,q=!!b.bumpMap,ie=!!b.normalMap,se=!!b.displacementMap,Ae=!!b.emissiveMap,Me=!!b.metalnessMap,D=!!b.roughnessMap,A=b.anisotropy>0,Y=b.clearcoat>0,oe=b.dispersion>0,fe=b.iridescence>0,ae=b.sheen>0,Re=b.transmission>0,Se=A&&!!b.anisotropyMap,Ie=Y&&!!b.clearcoatMap,Je=Y&&!!b.clearcoatNormalMap,pe=Y&&!!b.clearcoatRoughnessMap,Ee=fe&&!!b.iridescenceMap,Be=fe&&!!b.iridescenceThicknessMap,ze=ae&&!!b.sheenColorMap,De=ae&&!!b.sheenRoughnessMap,je=!!b.specularMap,$e=!!b.specularColorMap,ct=!!b.specularIntensityMap,V=Re&&!!b.transmissionMap,we=Re&&!!b.thicknessMap,te=!!b.gradientMap,ue=!!b.alphaMap,Pe=b.alphaTest>0,Ce=!!b.alphaHash,Xe=!!b.extensions;let mt=In;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(mt=i.toneMapping);const Rt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:$,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:X,batchingColor:X&&R._colorsTexture!==null,instancing:_e,instancingColor:_e&&R.instanceColor!==null,instancingMorph:_e&&R.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ji,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:F,envMap:Z,envMapMode:Z&&k.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:xe,bumpMap:q,normalMap:ie,displacementMap:u&&se,emissiveMap:Ae,normalMapObjectSpace:ie&&b.normalMapType===sf,normalMapTangentSpace:ie&&b.normalMapType===di,metalnessMap:Me,roughnessMap:D,anisotropy:A,anisotropyMap:Se,clearcoat:Y,clearcoatMap:Ie,clearcoatNormalMap:Je,clearcoatRoughnessMap:pe,dispersion:oe,iridescence:fe,iridescenceMap:Ee,iridescenceThicknessMap:Be,sheen:ae,sheenColorMap:ze,sheenRoughnessMap:De,specularMap:je,specularColorMap:$e,specularIntensityMap:ct,transmission:Re,transmissionMap:V,thicknessMap:we,gradientMap:te,opaque:b.transparent===!1&&b.blending===zi&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:Pe,alphaHash:Ce,combine:b.combine,mapUv:de&&y(b.map.channel),aoMapUv:L&&y(b.aoMap.channel),lightMapUv:xe&&y(b.lightMap.channel),bumpMapUv:q&&y(b.bumpMap.channel),normalMapUv:ie&&y(b.normalMap.channel),displacementMapUv:se&&y(b.displacementMap.channel),emissiveMapUv:Ae&&y(b.emissiveMap.channel),metalnessMapUv:Me&&y(b.metalnessMap.channel),roughnessMapUv:D&&y(b.roughnessMap.channel),anisotropyMapUv:Se&&y(b.anisotropyMap.channel),clearcoatMapUv:Ie&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Je&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(b.sheenRoughnessMap.channel),specularMapUv:je&&y(b.specularMap.channel),specularColorMapUv:$e&&y(b.specularColorMap.channel),specularIntensityMapUv:ct&&y(b.specularIntensityMap.channel),transmissionMapUv:V&&y(b.transmissionMap.channel),thicknessMapUv:we&&y(b.thicknessMap.channel),alphaMapUv:ue&&y(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ie||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!G.attributes.uv&&(de||ue),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:me,skinning:R.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Cn,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(x(M,b),_(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=m[b.type];let I;if(M){const N=vn[M];I=Yi.clone(N.uniforms)}else I=b.uniforms;return I}function T(b,M){let I;for(let N=0,R=h.length;N<R;N++){const O=h[N];if(O.cacheKey===M){I=O,++I.usedTimes;break}}return I===void 0&&(I=new u_(i,M,b,r),h.push(I)),I}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function S(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:P}}function g_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,u,d,m,y,g){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:y,group:g},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=y,p.group=g),e++,p}function a(f,u,d,m,y,g){const p=o(f,u,d,m,y,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,m,y,g){const p=o(f,u,d,m,y,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||y_),n.length>1&&n.sort(u||Su),s.length>1&&s.sort(u||Su)}function h(){for(let f=e,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function v_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new wu,i.set(n,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function __(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ve};break;case"SpotLight":t={position:new E,direction:new E,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function x_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M_=0;function b_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S_(i){const e=new __,t=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new ke,o=new ke;function a(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,y=0,g=0,p=0,x=0,_=0,v=0,T=0,w=0,S=0;c.sort(b_);for(let b=0,M=c.length;b<M;b++){const I=c[b],N=I.color,R=I.intensity,O=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*R,f+=N.g*R,u+=N.b*R;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],R);S++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,z=t.get(I);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=I.shadow.matrix,x++}n.directional[d]=B,d++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(N).multiplyScalar(R),B.distance=O,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[y]=B;const k=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,k.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[y]=k.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=G,v++}y++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(N).multiplyScalar(R),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=B,g++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const k=I.shadow,z=t.get(I);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=I.shadow.matrix,_++}n.point[m]=B,m++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(R),B.groundColor.copy(I.groundColor).multiplyScalar(R),n.hemi[p]=B,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==T||P.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,P.directionalLength=d,P.pointLength=m,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=T,P.numLightProbes=S,n.version=M_++)}function l(c,h){let f=0,u=0,d=0,m=0,y=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Au(i){const e=new S_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function w_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Au(i),e.set(s,[a])):r>=o.length?(a=new Au(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ja extends Vt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eh extends Vt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function T_(i,e,t){let n=new Br;const s=new ee,r=new ee,o=new et,a=new ja({depthPacking:qc}),l=new eh,c={},h=t.maxTextureSize,f={[Zn]:Bt,[Bt]:Zn,[Cn]:Cn},u=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new He;m.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ut(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(w,S,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(_n),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const R=p!==An&&this.type===An,O=p===An&&this.type!==An;for(let G=0,B=w.length;G<B;G++){const k=w[G],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||R===!0||O===!0){const U=this.type!==An?{minFilter:Ct,magFilter:Ct}:{};z.map!==null&&z.map.dispose(),z.map=new kt(s.x,s.y,U),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ce=z.getViewportCount();for(let U=0;U<ce;U++){const re=z.getViewport(U);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),N.viewport(o),z.updateMatrices(k,U),n=z.getFrustum(),v(S,P,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===An&&x(z,P),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,I)};function x(w,S){const P=e.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kt(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,P,u,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,P,d,y,null)}function _(w,S,P,b){let M=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=M.uuid,R=S.uuid;let O=c[N];O===void 0&&(O={},c[N]=O);let G=O[R];G===void 0&&(G=M.clone(),O[R]=G,S.addEventListener("dispose",T)),M=G}if(M.visible=S.visible,M.wireframe=S.wireframe,b===An?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:f[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=P}return M}function v(w,S,P,b,M){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===An)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const R=e.update(w),O=w.material;if(Array.isArray(O)){const G=R.groups;for(let B=0,k=G.length;B<k;B++){const z=G[B],j=O[z.materialIndex];if(j&&j.visible){const ce=_(w,j,b,M);w.onBeforeShadow(i,w,S,P,R,ce,z),i.renderBufferDirect(P,null,R,ce,w,z),w.onAfterShadow(i,w,S,P,R,ce,z)}}}else if(O.visible){const G=_(w,O,b,M);w.onBeforeShadow(i,w,S,P,R,G,null),i.renderBufferDirect(P,null,R,G,w,null),w.onAfterShadow(i,w,S,P,R,G,null)}}const N=w.children;for(let R=0,O=N.length;R<O;R++)v(N[R],S,P,b,M)}function T(w){w.target.removeEventListener("dispose",T);for(const P in c){const b=c[P],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const P_={[qo]:Yo,[$o]:Ko,[Zo]:jo,[Hi]:Jo,[Yo]:qo,[Ko]:$o,[jo]:Zo,[Jo]:Hi};function I_(i,e){function t(){let V=!1;const we=new et;let te=null;const ue=new et(0,0,0,0);return{setMask:function(Pe){te!==Pe&&!V&&(i.colorMask(Pe,Pe,Pe,Pe),te=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,Ce,Xe,mt,Rt){Rt===!0&&(Pe*=mt,Ce*=mt,Xe*=mt),we.set(Pe,Ce,Xe,mt),ue.equals(we)===!1&&(i.clearColor(Pe,Ce,Xe,mt),ue.copy(we))},reset:function(){V=!1,te=null,ue.set(-1,0,0,0)}}}function n(){let V=!1,we=!1,te=null,ue=null,Pe=null;return{setReversed:function(Ce){if(we!==Ce){const Xe=e.get("EXT_clip_control");we?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const mt=Pe;Pe=null,this.setClear(mt)}we=Ce},getReversed:function(){return we},setTest:function(Ce){Ce?Q(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Ce){te!==Ce&&!V&&(i.depthMask(Ce),te=Ce)},setFunc:function(Ce){if(we&&(Ce=P_[Ce]),ue!==Ce){switch(Ce){case qo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ce}},setLocked:function(Ce){V=Ce},setClear:function(Ce){Pe!==Ce&&(we&&(Ce=1-Ce),i.clearDepth(Ce),Pe=Ce)},reset:function(){V=!1,te=null,ue=null,Pe=null,we=!1}}}function s(){let V=!1,we=null,te=null,ue=null,Pe=null,Ce=null,Xe=null,mt=null,Rt=null;return{setTest:function(ot){V||(ot?Q(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(ot){we!==ot&&!V&&(i.stencilMask(ot),we=ot)},setFunc:function(ot,fn,Fn){(te!==ot||ue!==fn||Pe!==Fn)&&(i.stencilFunc(ot,fn,Fn),te=ot,ue=fn,Pe=Fn)},setOp:function(ot,fn,Fn){(Ce!==ot||Xe!==fn||mt!==Fn)&&(i.stencilOp(ot,fn,Fn),Ce=ot,Xe=fn,mt=Fn)},setLocked:function(ot){V=ot},setClear:function(ot){Rt!==ot&&(i.clearStencil(ot),Rt=ot)},reset:function(){V=!1,we=null,te=null,ue=null,Pe=null,Ce=null,Xe=null,mt=null,Rt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,y=!1,g=null,p=null,x=null,_=null,v=null,T=null,w=null,S=new ve(0,0,0),P=0,b=!1,M=null,I=null,N=null,R=null,O=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=k>=2);let j=null,ce={};const U=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ge=new et().fromArray(U),$=new et().fromArray(re);function he(V,we,te,ue){const Pe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(V,Ce),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<te;Xe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(we+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ce}const ne={};ne[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Hi),q(!1),ie(mc),Q(i.CULL_FACE),L(_n);function Q(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function me(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function _e(V,we){return f[V]!==we?(i.bindFramebuffer(V,we),f[V]=we,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=we),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=we),!0):!1}function X(V,we){let te=d,ue=!1;if(V){te=u.get(we),te===void 0&&(te=[],u.set(we,te));const Pe=V.textures;if(te.length!==Pe.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Xe=Pe.length;Ce<Xe;Ce++)te[Ce]=i.COLOR_ATTACHMENT0+Ce;te.length=Pe.length,ue=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ue=!0);ue&&i.drawBuffers(te)}function de(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const F={[ci]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};F[Ud]=i.MIN,F[Nd]=i.MAX;const Z={[Fd]:i.ZERO,[Od]:i.ONE,[Bd]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[Vd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[Wd]:i.ONE_MINUS_DST_COLOR,[Gd]:i.ONE_MINUS_DST_ALPHA,[Xd]:i.CONSTANT_COLOR,[qd]:i.ONE_MINUS_CONSTANT_COLOR,[Yd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function L(V,we,te,ue,Pe,Ce,Xe,mt,Rt,ot){if(V===_n){y===!0&&(me(i.BLEND),y=!1);return}if(y===!1&&(Q(i.BLEND),y=!0),V!==Dd){if(V!==g||ot!==b){if((p!==ci||v!==ci)&&(i.blendEquation(i.FUNC_ADD),p=ci,v=ci),ot)switch(V){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wo:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}x=null,_=null,T=null,w=null,S.set(0,0,0),P=0,g=V,b=ot}return}Pe=Pe||we,Ce=Ce||te,Xe=Xe||ue,(we!==p||Pe!==v)&&(i.blendEquationSeparate(F[we],F[Pe]),p=we,v=Pe),(te!==x||ue!==_||Ce!==T||Xe!==w)&&(i.blendFuncSeparate(Z[te],Z[ue],Z[Ce],Z[Xe]),x=te,_=ue,T=Ce,w=Xe),(mt.equals(S)===!1||Rt!==P)&&(i.blendColor(mt.r,mt.g,mt.b,Rt),S.copy(mt),P=Rt),g=V,b=!1}function xe(V,we){V.side===Cn?me(i.CULL_FACE):Q(i.CULL_FACE);let te=V.side===Bt;we&&(te=!te),q(te),V.blending===zi&&V.transparent===!1?L(_n):L(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const ue=V.stencilWrite;a.setTest(ue),ue&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ae(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(V){M!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),M=V)}function ie(V){V!==Id?(Q(i.CULL_FACE),V!==I&&(V===mc?i.cullFace(i.BACK):V===Ed?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),I=V}function se(V){V!==N&&(B&&i.lineWidth(V),N=V)}function Ae(V,we,te){V?(Q(i.POLYGON_OFFSET_FILL),(R!==we||O!==te)&&(i.polygonOffset(we,te),R=we,O=te)):me(i.POLYGON_OFFSET_FILL)}function Me(V){V?Q(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function D(V){V===void 0&&(V=i.TEXTURE0+G-1),j!==V&&(i.activeTexture(V),j=V)}function A(V,we,te){te===void 0&&(j===null?te=i.TEXTURE0+G-1:te=j);let ue=ce[te];ue===void 0&&(ue={type:void 0,texture:void 0},ce[te]=ue),(ue.type!==V||ue.texture!==we)&&(j!==te&&(i.activeTexture(te),j=te),i.bindTexture(V,we||ne[V]),ue.type=V,ue.texture=we)}function Y(){const V=ce[j];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(V){ge.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ge.copy(V))}function De(V){$.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),$.copy(V))}function je(V,we){let te=c.get(we);te===void 0&&(te=new WeakMap,c.set(we,te));let ue=te.get(V);ue===void 0&&(ue=i.getUniformBlockIndex(we,V.name),te.set(V,ue))}function $e(V,we){const ue=c.get(we).get(V);l.get(we)!==ue&&(i.uniformBlockBinding(we,ue,V.__bindingPointIndex),l.set(we,ue))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ce={},f={},u=new WeakMap,d=[],m=null,y=!1,g=null,p=null,x=null,_=null,v=null,T=null,w=null,S=new ve(0,0,0),P=0,b=!1,M=null,I=null,N=null,R=null,O=null,ge.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:me,bindFramebuffer:_e,drawBuffers:X,useProgram:de,setBlending:L,setMaterial:xe,setFlipSided:q,setCullFace:ie,setLineWidth:se,setPolygonOffset:Ae,setScissorTest:Me,activeTexture:D,bindTexture:A,unbindTexture:Y,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Ee,texImage3D:Be,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Je,texStorage3D:pe,texSubImage2D:ae,texSubImage3D:Re,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ie,scissor:ze,viewport:De,reset:ct}}function E_(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function D_(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function L_(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function bc(i,e,t,n){const s=R_(n);switch(t){case kc:return i*e;case Gc:return i*e;case Vc:return i*e*2;case Ha:return i*e/s.components*s.byteLength;case Nr:return i*e/s.components*s.byteLength;case Wc:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case zc:return i*e*3/s.components*s.byteLength;case qt:return i*e*4/s.components*s.byteLength;case qa:return i*e*4/s.components*s.byteLength;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ea:case na:return Math.max(i,16)*Math.max(e,8)/4;case Qo:case ta:return Math.max(i,8)*Math.max(e,8)/2;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ur:case xa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R_(i){switch(i){case Rn:case Fc:return{byteLength:1,components:1};case Is:case Oc:case xn:return{byteLength:2,components:1};case Va:case Wa:return{byteLength:2,components:4};case Kn:case Ga:case en:return{byteLength:4,components:1};case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}const U_={contain:E_,cover:D_,fill:L_,getByteLength:bc};function N_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return d?new OffscreenCanvas(D,A):br("canvas")}function y(D,A,Y){let oe=1;const fe=Me(D);if((fe.width>Y||fe.height>Y)&&(oe=Y/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(oe*fe.width),Re=Math.floor(oe*fe.height);f===void 0&&(f=m(ae,Re));const Se=A?m(ae,Re):f;return Se.width=ae,Se.height=Re,Se.getContext("2d").drawImage(D,0,0,ae,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ae+"x"+Re+")."),Se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,A,Y,oe,fe=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=A;if(A===i.RED&&(Y===i.FLOAT&&(ae=i.R32F),Y===i.HALF_FLOAT&&(ae=i.R16F),Y===i.UNSIGNED_BYTE&&(ae=i.R8)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.R8UI),Y===i.UNSIGNED_SHORT&&(ae=i.R16UI),Y===i.UNSIGNED_INT&&(ae=i.R32UI),Y===i.BYTE&&(ae=i.R8I),Y===i.SHORT&&(ae=i.R16I),Y===i.INT&&(ae=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(ae=i.RG32F),Y===i.HALF_FLOAT&&(ae=i.RG16F),Y===i.UNSIGNED_BYTE&&(ae=i.RG8)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RG16UI),Y===i.UNSIGNED_INT&&(ae=i.RG32UI),Y===i.BYTE&&(ae=i.RG8I),Y===i.SHORT&&(ae=i.RG16I),Y===i.INT&&(ae=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),Y===i.UNSIGNED_INT&&(ae=i.RGB32UI),Y===i.BYTE&&(ae=i.RGB8I),Y===i.SHORT&&(ae=i.RGB16I),Y===i.INT&&(ae=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ae=i.RGBA32UI),Y===i.BYTE&&(ae=i.RGBA8I),Y===i.SHORT&&(ae=i.RGBA16I),Y===i.INT&&(ae=i.RGBA32I)),A===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),A===i.RGBA){const Re=fe?Fr:Ke.getTransfer(oe);Y===i.FLOAT&&(ae=i.RGBA32F),Y===i.HALF_FLOAT&&(ae=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ae=Re===rt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(D,A){let Y;return D?A===null||A===Kn||A===Xi?Y=i.DEPTH24_STENCIL8:A===en?Y=i.DEPTH32F_STENCIL8:A===Is&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Kn||A===Xi?Y=i.DEPTH_COMPONENT24:A===en?Y=i.DEPTH_COMPONENT32F:A===Is&&(Y=i.DEPTH_COMPONENT16),Y}function T(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ct&&D.minFilter!==wt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){const A=D.target;A.removeEventListener("dispose",w),P(A),A.isVideoTexture&&h.delete(A)}function S(D){const A=D.target;A.removeEventListener("dispose",S),M(A)}function P(D){const A=n.get(D);if(A.__webglInit===void 0)return;const Y=D.source,oe=u.get(Y);if(oe){const fe=oe[A.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(D),Object.keys(oe).length===0&&u.delete(Y)}n.remove(D)}function b(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const Y=D.source,oe=u.get(Y);delete oe[A.__cacheKey],o.memory.textures--}function M(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let fe=0;fe<A.__webglFramebuffer[oe].length;fe++)i.deleteFramebuffer(A.__webglFramebuffer[oe][fe]);else i.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)i.deleteFramebuffer(A.__webglFramebuffer[oe]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=D.textures;for(let oe=0,fe=Y.length;oe<fe;oe++){const ae=n.get(Y[oe]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(Y[oe])}n.remove(D)}let I=0;function N(){I=0}function R(){const D=I;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),I+=1,D}function O(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function G(D,A){const Y=n.get(D);if(D.isVideoTexture&&se(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,D,A);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function B(D,A){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){$(Y,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function k(D,A){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){$(Y,D,A);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function z(D,A){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){he(Y,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}const j={[Ps]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},ce={[Ct]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},U={[rf]:i.NEVER,[uf]:i.ALWAYS,[of]:i.LESS,[Yc]:i.LEQUAL,[af]:i.EQUAL,[hf]:i.GEQUAL,[lf]:i.GREATER,[cf]:i.NOTEQUAL};function re(D,A){if(A.type===en&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===wt||A.magFilter===or||A.magFilter===bs||A.magFilter===Tn||A.minFilter===wt||A.minFilter===or||A.minFilter===bs||A.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,j[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,j[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,j[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ce[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ce[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ct||A.minFilter!==bs&&A.minFilter!==Tn||A.type===en&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ge(D,A){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",w));const oe=A.source;let fe=u.get(oe);fe===void 0&&(fe={},u.set(oe,fe));const ae=O(A);if(ae!==D.__cacheKey){fe[ae]===void 0&&(fe[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),fe[ae].usedTimes++;const Re=fe[D.__cacheKey];Re!==void 0&&(fe[D.__cacheKey].usedTimes--,Re.usedTimes===0&&b(A)),D.__cacheKey=ae,D.__webglTexture=fe[ae].texture}return Y}function $(D,A,Y){let oe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=i.TEXTURE_3D);const fe=ge(D,A),ae=A.source;t.bindTexture(oe,D.__webglTexture,i.TEXTURE0+Y);const Re=n.get(ae);if(ae.version!==Re.__version||fe===!0){t.activeTexture(i.TEXTURE0+Y);const Se=Ke.getPrimaries(Ke.workingColorSpace),Ie=A.colorSpace===Xn?null:Ke.getPrimaries(A.colorSpace),Je=A.colorSpace===Xn||Se===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let pe=y(A.image,!1,s.maxTextureSize);pe=Ae(A,pe);const Ee=r.convert(A.format,A.colorSpace),Be=r.convert(A.type);let ze=_(A.internalFormat,Ee,Be,A.colorSpace,A.isVideoTexture);re(oe,A);let De;const je=A.mipmaps,$e=A.isVideoTexture!==!0,ct=Re.__version===void 0||fe===!0,V=ae.dataReady,we=T(A,pe);if(A.isDepthTexture)ze=v(A.format===qi,A.type),ct&&($e?t.texStorage2D(i.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ee,Be,null));else if(A.isDataTexture)if(je.length>0){$e&&ct&&t.texStorage2D(i.TEXTURE_2D,we,ze,je[0].width,je[0].height);for(let te=0,ue=je.length;te<ue;te++)De=je[te],$e?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,Ee,Be,De.data):t.texImage2D(i.TEXTURE_2D,te,ze,De.width,De.height,0,Ee,Be,De.data);A.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(i.TEXTURE_2D,we,ze,pe.width,pe.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Ee,Be,pe.data)):t.texImage2D(i.TEXTURE_2D,0,ze,pe.width,pe.height,0,Ee,Be,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){$e&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ze,je[0].width,je[0].height,pe.depth);for(let te=0,ue=je.length;te<ue;te++)if(De=je[te],A.format!==qt)if(Ee!==null)if($e){if(V)if(A.layerUpdates.size>0){const Pe=bc(De.width,De.height,A.format,A.type);for(const Ce of A.layerUpdates){const Xe=De.data.subarray(Ce*Pe/De.data.BYTES_PER_ELEMENT,(Ce+1)*Pe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Ce,De.width,De.height,1,Ee,Xe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,pe.depth,Ee,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ze,De.width,De.height,pe.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,De.width,De.height,pe.depth,Ee,Be,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ze,De.width,De.height,pe.depth,0,Ee,Be,De.data)}else{$e&&ct&&t.texStorage2D(i.TEXTURE_2D,we,ze,je[0].width,je[0].height);for(let te=0,ue=je.length;te<ue;te++)De=je[te],A.format!==qt?Ee!==null?$e?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,Ee,De.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ze,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,De.width,De.height,Ee,Be,De.data):t.texImage2D(i.TEXTURE_2D,te,ze,De.width,De.height,0,Ee,Be,De.data)}else if(A.isDataArrayTexture)if($e){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ze,pe.width,pe.height,pe.depth),V)if(A.layerUpdates.size>0){const te=bc(pe.width,pe.height,A.format,A.type);for(const ue of A.layerUpdates){const Pe=pe.data.subarray(ue*te/pe.data.BYTES_PER_ELEMENT,(ue+1)*te/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,pe.width,pe.height,1,Ee,Be,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Be,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,Ee,Be,pe.data);else if(A.isData3DTexture)$e?(ct&&t.texStorage3D(i.TEXTURE_3D,we,ze,pe.width,pe.height,pe.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Be,pe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,Ee,Be,pe.data);else if(A.isFramebufferTexture){if(ct)if($e)t.texStorage2D(i.TEXTURE_2D,we,ze,pe.width,pe.height);else{let te=pe.width,ue=pe.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,ze,te,ue,0,Ee,Be,null),te>>=1,ue>>=1}}else if(je.length>0){if($e&&ct){const te=Me(je[0]);t.texStorage2D(i.TEXTURE_2D,we,ze,te.width,te.height)}for(let te=0,ue=je.length;te<ue;te++)De=je[te],$e?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ee,Be,De):t.texImage2D(i.TEXTURE_2D,te,ze,Ee,Be,De);A.generateMipmaps=!1}else if($e){if(ct){const te=Me(pe);t.texStorage2D(i.TEXTURE_2D,we,ze,te.width,te.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Be,pe)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,Be,pe);g(A)&&p(oe),Re.__version=ae.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function he(D,A,Y){if(A.image.length!==6)return;const oe=ge(D,A),fe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Y);const ae=n.get(fe);if(fe.version!==ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);const Re=Ke.getPrimaries(Ke.workingColorSpace),Se=A.colorSpace===Xn?null:Ke.getPrimaries(A.colorSpace),Ie=A.colorSpace===Xn||Re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Je=A.isCompressedTexture||A.image[0].isCompressedTexture,pe=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!Je&&!pe?Ee[ue]=y(A.image[ue],!0,s.maxCubemapSize):Ee[ue]=pe?A.image[ue].image:A.image[ue],Ee[ue]=Ae(A,Ee[ue]);const Be=Ee[0],ze=r.convert(A.format,A.colorSpace),De=r.convert(A.type),je=_(A.internalFormat,ze,De,A.colorSpace),$e=A.isVideoTexture!==!0,ct=ae.__version===void 0||oe===!0,V=fe.dataReady;let we=T(A,Be);re(i.TEXTURE_CUBE_MAP,A);let te;if(Je){$e&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,je,Be.width,Be.height);for(let ue=0;ue<6;ue++){te=Ee[ue].mipmaps;for(let Pe=0;Pe<te.length;Pe++){const Ce=te[Pe];A.format!==qt?ze!==null?$e?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,Ce.width,Ce.height,ze,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,je,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,0,0,Ce.width,Ce.height,ze,De,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe,je,Ce.width,Ce.height,0,ze,De,Ce.data)}}}else{if(te=A.mipmaps,$e&&ct){te.length>0&&we++;const ue=Me(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,je,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(pe){$e?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,ze,De,Ee[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,Ee[ue].width,Ee[ue].height,0,ze,De,Ee[ue].data);for(let Pe=0;Pe<te.length;Pe++){const Xe=te[Pe].image[ue].image;$e?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,Xe.width,Xe.height,ze,De,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,je,Xe.width,Xe.height,0,ze,De,Xe.data)}}else{$e?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ze,De,Ee[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,je,ze,De,Ee[ue]);for(let Pe=0;Pe<te.length;Pe++){const Ce=te[Pe];$e?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,0,0,ze,De,Ce.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe+1,je,ze,De,Ce.image[ue])}}}g(A)&&p(i.TEXTURE_CUBE_MAP),ae.__version=fe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ne(D,A,Y,oe,fe,ae){const Re=r.convert(Y.format,Y.colorSpace),Se=r.convert(Y.type),Ie=_(Y.internalFormat,Re,Se,Y.colorSpace),Je=n.get(A),pe=n.get(Y);if(pe.__renderTarget=A,!Je.__hasExternalTextures){const Ee=Math.max(1,A.width>>ae),Be=Math.max(1,A.height>>ae);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,ae,Ie,Ee,Be,A.depth,0,Re,Se,null):t.texImage2D(fe,ae,Ie,Ee,Be,0,Re,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,fe,pe.__webglTexture,0,q(A)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,fe,pe.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(D,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){const oe=A.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,ae=v(A.stencilBuffer,fe),Re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=q(A);ie(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ae,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ae,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,D)}else{const oe=A.textures;for(let fe=0;fe<oe.length;fe++){const ae=oe[fe],Re=r.convert(ae.format,ae.colorSpace),Se=r.convert(ae.type),Ie=_(ae.internalFormat,Re,Se,ae.colorSpace),Je=q(A);Y&&ie(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ie,A.width,A.height):ie(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,Ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(A.depthTexture);oe.__renderTarget=A,(!oe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const fe=oe.__webglTexture,ae=q(A);if(A.depthTexture.format===Gi)ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(A.depthTexture.format===qi)ie(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function _e(D){const A=n.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const oe=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),oe){const fe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),A.__depthDisposeCallback=fe}A.__boundDepthTexture=oe}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");me(A.__webglFramebuffer,D)}else if(Y){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]===void 0)A.__webglDepthbuffer[oe]=i.createRenderbuffer(),Q(A.__webglDepthbuffer[oe],D,!1);else{const fe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=A.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Q(A.__webglDepthbuffer,D,!1);else{const oe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(D,A,Y){const oe=n.get(D);A!==void 0&&ne(oe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&_e(D)}function de(D){const A=D.texture,Y=n.get(D),oe=n.get(A);D.addEventListener("dispose",S);const fe=D.textures,ae=D.isWebGLCubeRenderTarget===!0,Re=fe.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=A.version,o.memory.textures++),ae){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)Y.__webglFramebuffer[Se][Ie]=i.createFramebuffer()}else Y.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Re)for(let Se=0,Ie=fe.length;Se<Ie;Se++){const Je=n.get(fe[Se]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ie(D)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<fe.length;Se++){const Ie=fe[Se];Y.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);const Je=r.convert(Ie.format,Ie.colorSpace),pe=r.convert(Ie.type),Ee=_(Ie.internalFormat,Je,pe,Ie.colorSpace,D.isXRRenderTarget===!0),Be=q(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ee,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(Y.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),re(i.TEXTURE_CUBE_MAP,A);for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ne(Y.__webglFramebuffer[Se][Ie],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie);else ne(Y.__webglFramebuffer[Se],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let Se=0,Ie=fe.length;Se<Ie;Se++){const Je=fe[Se],pe=n.get(Je);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),re(i.TEXTURE_2D,Je),ne(Y.__webglFramebuffer,D,Je,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),g(Je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Se=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,oe.__webglTexture),re(Se,A),A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ne(Y.__webglFramebuffer[Ie],D,A,i.COLOR_ATTACHMENT0,Se,Ie);else ne(Y.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,Se,0);g(A)&&p(Se),t.unbindTexture()}D.depthBuffer&&_e(D)}function F(D){const A=D.textures;for(let Y=0,oe=A.length;Y<oe;Y++){const fe=A[Y];if(g(fe)){const ae=x(D),Re=n.get(fe).__webglTexture;t.bindTexture(ae,Re),p(ae),t.unbindTexture()}}}const Z=[],L=[];function xe(D){if(D.samples>0){if(ie(D)===!1){const A=D.textures,Y=D.width,oe=D.height;let fe=i.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(D),Se=A.length>1;if(Se)for(let Ie=0;Ie<A.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ie=0;Ie<A.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ie]);const Je=n.get(A[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,fe,i.NEAREST),l===!0&&(Z.length=0,L.length=0,Z.push(i.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Z.push(ae),L.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ie=0;Ie<A.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ie]);const Je=n.get(A[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function q(D){return Math.min(s.maxSamples,D.samples)}function ie(D){const A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function se(D){const A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function Ae(D,A){const Y=D.colorSpace,oe=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Ji&&Y!==Xn&&(Ke.getTransfer(Y)===rt?(oe!==qt||fe!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function Me(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=X,this.setupRenderTarget=de,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ie}function Cf(i,e){function t(n,s=Xn){let r;const o=Ke.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===zc)return i.RGB;if(n===qt)return i.RGBA;if(n===Gc)return i.LUMINANCE;if(n===Vc)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Ha)return i.RED;if(n===Nr)return i.RED_INTEGER;if(n===Wc)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===ar||n===lr||n===cr||n===hr)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===ya||n===va||n===_a)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ur||n===xa||n===Ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ur)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===ba||n===Sa||n===wa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ur)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Tf extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oi extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F_={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new At({vertexShader:O_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Un{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const y=new k_,g=t.getContextAttributes();let p=null,x=null;const _=[],v=[],T=new ee;let w=null;const S=new Lt;S.viewport=new et;const P=new Lt;P.viewport=new et;const b=[S,P],M=new Tf;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=_[$];return he===void 0&&(he=new Yl,_[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=_[$];return he===void 0&&(he=new Yl,_[$]=he),he.getGripSpace()},this.getHand=function($){let he=_[$];return he===void 0&&(he=new Yl,_[$]=he),he.getHandSpace()};function R($){const he=v.indexOf($.inputSource);if(he===-1)return;const ne=_[he];ne!==void 0&&(ne.update($.inputSource,$.frame,c||o),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let $=0;$<_.length;$++){const he=v[$];he!==null&&(v[$]=null,_[$].disconnect(he))}I=null,N=null,y.reset(),e.setRenderTarget(p),d=null,u=null,f=null,s=null,x=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new kt(d.framebufferWidth,d.framebufferHeight,{format:qt,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,ne=null,Q=null;g.depth&&(Q=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?qi:Gi,ne=g.stencil?Xi:Kn);const me={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new kt(u.textureWidth,u.textureHeight,{format:qt,type:Rn,depthTexture:new Qc(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G($){for(let he=0;he<$.removed.length;he++){const ne=$.removed[he],Q=v.indexOf(ne);Q>=0&&(v[Q]=null,_[Q].disconnect(ne))}for(let he=0;he<$.added.length;he++){const ne=$.added[he];let Q=v.indexOf(ne);if(Q===-1){for(let _e=0;_e<_.length;_e++)if(_e>=v.length){v.push(ne),Q=_e;break}else if(v[_e]===null){v[_e]=ne,Q=_e;break}if(Q===-1)break}const me=_[Q];me&&me.connect(ne)}}const B=new E,k=new E;function z($,he,ne){B.setFromMatrixPosition(he.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const Q=B.distanceTo(k),me=he.projectionMatrix.elements,_e=ne.projectionMatrix.elements,X=me[14]/(me[10]-1),de=me[14]/(me[10]+1),F=(me[9]+1)/me[5],Z=(me[9]-1)/me[5],L=(me[8]-1)/me[0],xe=(_e[8]+1)/_e[0],q=X*L,ie=X*xe,se=Q/(-L+xe),Ae=se*-L;if(he.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),me[10]===-1)$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Me=X+se,D=de+se,A=q-Ae,Y=ie+(Q-Ae),oe=F*de/D*Me,fe=Z*de/D*Me;$.projectionMatrix.makePerspective(A,Y,oe,fe,Me,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,ne=$.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(ne=y.depthFar)),M.near=P.near=S.near=he,M.far=P.far=S.far=ne,(I!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far),S.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=S.layers.mask|P.layers.mask;const Q=$.parent,me=M.cameras;j(M,Q);for(let _e=0;_e<me.length;_e++)j(me[_e],Q);me.length===2?z(M,S,P):M.projectionMatrix.copy(S.projectionMatrix),ce($,M,Q)};function ce($,he,ne){ne===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Es*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let U=null;function re($,he){if(h=he.getViewerPose(c||o),m=he,h!==null){const ne=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Q=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let _e=0;_e<ne.length;_e++){const X=ne[_e];let de=null;if(d!==null)de=d.getViewport(X);else{const Z=f.getViewSubImage(u,X);de=Z.viewport,_e===0&&(e.setRenderTargetTextures(x,Z.colorTexture,u.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(x))}let F=b[_e];F===void 0&&(F=new Lt,F.layers.enable(_e),F.viewport=new et,b[_e]=F),F.matrix.fromArray(X.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(X.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(de.x,de.y,de.width,de.height),_e===0&&(M.matrix.copy(F.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(F)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const _e=f.getDepthInformation(ne[0]);_e&&_e.isValid&&_e.texture&&y.init(e,_e,s.renderState)}}for(let ne=0;ne<_.length;ne++){const Q=v[ne],me=_[ne];Q!==null&&me!==void 0&&me.update(Q,he,c||o)}U&&U($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),m=null}const ge=new Mf;ge.setAnimationLoop(re),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}const Mi=new an,G_=new ke;function V_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Bt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Bt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Mi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const v=_.program;n.uniformBlockBinding(x,v)}function c(x,_){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const T=_.program;n.updateUBOMapping(x,T);const w=e.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const _=f();x.__bindingPointIndex=_;const v=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,S=v.length;w<S;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,M=P.length;b<M;b++){const I=P[b];if(d(I,w,b,T)===!0){const N=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let O=0;for(let G=0;G<R.length;G++){const B=R[G],k=y(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,N+O,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,O),O+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,_,v,T){const w=x.value,S=_+"_"+v;if(T[S]===void 0)return typeof w=="number"||typeof w=="boolean"?T[S]=w:T[S]=w.clone(),!0;{const P=T[S];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[S]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(x){const _=x.uniforms;let v=0;const T=16;for(let S=0,P=_.length;S<P;S++){const b=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,I=b.length;M<I;M++){const N=b[M],R=Array.isArray(N.value)?N.value:[N.value];for(let O=0,G=R.length;O<G;O++){const B=R[O],k=y(B),z=v%T,j=z%k.boundary,ce=z+j;v+=j,ce!==0&&T-ce<k.storage&&(v+=T-ce),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=k.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function g(x){const _=x.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Pf{constructor(e={}){const{canvas:t=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),y=new Int32Array(4);let g=null,p=null;const x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=In,this.toneMappingExposure=1;const v=this;let T=!1,w=0,S=0,P=null,b=-1,M=null;const I=new et,N=new et;let R=null;const O=new ve(0);let G=0,B=t.width,k=t.height,z=1,j=null,ce=null;const U=new et(0,0,B,k),re=new et(0,0,B,k);let ge=!1;const $=new Br;let he=!1,ne=!1;const Q=new ke,me=new ke,_e=new E,X=new et,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function Z(){return P===null?z:1}let L=n;function xe(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),L===null){const W="webgl2";if(L=xe(W,C),L===null)throw xe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let q,ie,se,Ae,Me,D,A,Y,oe,fe,ae,Re,Se,Ie,Je,pe,Ee,Be,ze,De,je,$e,ct,V;function we(){q=new Zy(L),q.init(),$e=new Cf(L,q),ie=new Wy(L,q,e,$e),se=new I_(L,q),ie.reverseDepthBuffer&&u&&se.buffers.depth.setReversed(!0),Ae=new jy(L),Me=new g_,D=new N_(L,q,se,Me,ie,$e,Ae),A=new Xy(v),Y=new $y(v),oe=new r0(L),ct=new Gy(L,oe),fe=new Jy(L,oe,Ae,ct),ae=new ev(L,fe,oe,Ae),ze=new Qy(L,ie,D),pe=new Hy(Me),Re=new m_(v,A,Y,q,ie,ct,pe),Se=new V_(v,Me),Ie=new v_,Je=new w_(q),Be=new zy(v,A,Y,se,ae,d,l),Ee=new T_(v,ae,ie),V=new W_(L,Ae,ie,se),De=new Vy(L,q,Ae),je=new Ky(L,q,Ae),Ae.programs=Re.programs,v.capabilities=ie,v.extensions=q,v.properties=Me,v.renderLists=Ie,v.shadowMap=Ee,v.state=se,v.info=Ae}we();const te=new z_(v,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(B,k,!1))},this.getSize=function(C){return C.set(B,k)},this.setSize=function(C,W,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,k=W,t.width=Math.floor(C*z),t.height=Math.floor(W*z),J===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(B*z,k*z).floor()},this.setDrawingBufferSize=function(C,W,J){B=C,k=W,z=J,t.width=Math.floor(C*J),t.height=Math.floor(W*J),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,W,J,K){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,W,J,K),se.viewport(I.copy(U).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,W,J,K){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,W,J,K),se.scissor(N.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(C){se.setScissorTest(ge=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,W=!0,J=!0){let K=0;if(C){let H=!1;if(P!==null){const ye=P.texture.format;H=ye===qa||ye===Xa||ye===Nr}if(H){const ye=P.texture.type,Te=ye===Rn||ye===Kn||ye===Is||ye===Xi||ye===Va||ye===Wa,Ue=Be.getClearColor(),Ne=Be.getClearAlpha(),Ge=Ue.r,qe=Ue.g,Fe=Ue.b;Te?(m[0]=Ge,m[1]=qe,m[2]=Fe,m[3]=Ne,L.clearBufferuiv(L.COLOR,0,m)):(y[0]=Ge,y[1]=qe,y[2]=Fe,y[3]=Ne,L.clearBufferiv(L.COLOR,0,y))}else K|=L.COLOR_BUFFER_BIT}W&&(K|=L.DEPTH_BUFFER_BIT),J&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ie.dispose(),Je.dispose(),Me.dispose(),A.dispose(),Y.dispose(),ae.dispose(),ct.dispose(),V.dispose(),Re.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ph),te.removeEventListener("sessionend",Ih),mi.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Ae.autoReset,W=Ee.enabled,J=Ee.autoUpdate,K=Ee.needsUpdate,H=Ee.type;we(),Ae.autoReset=C,Ee.enabled=W,Ee.autoUpdate=J,Ee.needsUpdate=K,Ee.type=H}function Ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xe(C){const W=C.target;W.removeEventListener("dispose",Xe),mt(W)}function mt(C){Rt(C),Me.remove(C)}function Rt(C){const W=Me.get(C).programs;W!==void 0&&(W.forEach(function(J){Re.releaseProgram(J)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,J,K,H,ye){W===null&&(W=de);const Te=H.isMesh&&H.matrixWorld.determinant()<0,Ue=Pp(C,W,J,K,H);se.setMaterial(K,Te);let Ne=J.index,Ge=1;if(K.wireframe===!0){if(Ne=fe.getWireframeAttribute(J),Ne===void 0)return;Ge=2}const qe=J.drawRange,Fe=J.attributes.position;let nt=qe.start*Ge,ht=(qe.start+qe.count)*Ge;ye!==null&&(nt=Math.max(nt,ye.start*Ge),ht=Math.min(ht,(ye.start+ye.count)*Ge)),Ne!==null?(nt=Math.max(nt,0),ht=Math.min(ht,Ne.count)):Fe!=null&&(nt=Math.max(nt,0),ht=Math.min(ht,Fe.count));const dt=ht-nt;if(dt<0||dt===1/0)return;ct.setup(H,K,Ue,J,Ne);let Zt,it=De;if(Ne!==null&&(Zt=oe.get(Ne),it=je,it.setIndex(Zt)),H.isMesh)K.wireframe===!0?(se.setLineWidth(K.wireframeLinewidth*Z()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(H.isLine){let Oe=K.linewidth;Oe===void 0&&(Oe=1),se.setLineWidth(Oe*Z()),H.isLineSegments?it.setMode(L.LINES):H.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else H.isPoints?it.setMode(L.POINTS):H.isSprite&&it.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)it.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))it.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Oe=H._multiDrawStarts,On=H._multiDrawCounts,st=H._multiDrawCount,pn=Ne?oe.get(Ne).bytesPerElement:1,ns=Me.get(K).currentProgram.getUniforms();for(let nn=0;nn<st;nn++)ns.setValue(L,"_gl_DrawID",nn),it.render(Oe[nn]/pn,On[nn])}else if(H.isInstancedMesh)it.renderInstances(nt,dt,H.count);else if(J.isInstancedBufferGeometry){const Oe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,On=Math.min(J.instanceCount,Oe);it.renderInstances(nt,dt,On)}else it.render(nt,dt)};function ot(C,W,J){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=Bt,C.needsUpdate=!0,Yr(C,W,J),C.side=Zn,C.needsUpdate=!0,Yr(C,W,J),C.side=Cn):Yr(C,W,J)}this.compile=function(C,W,J=null){J===null&&(J=C),p=Je.get(J),p.init(W),_.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),C!==J&&C.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){const Ue=ye[Te];ot(Ue,J,H),K.add(Ue)}else ot(ye,J,H),K.add(ye)}),_.pop(),p=null,K},this.compileAsync=function(C,W,J=null){const K=this.compile(C,W,J);return new Promise(H=>{function ye(){if(K.forEach(function(Te){Me.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){H(C);return}setTimeout(ye,10)}q.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let fn=null;function Fn(C){fn&&fn(C)}function Ph(){mi.stop()}function Ih(){mi.start()}const mi=new Mf;mi.setAnimationLoop(Fn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(C){fn=C,te.setAnimationLoop(C),C===null?mi.stop():mi.start()},te.addEventListener("sessionstart",Ph),te.addEventListener("sessionend",Ih),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(W),W=te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,P),p=Je.get(C,_.length),p.init(W),_.push(p),me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(me),ne=this.localClippingEnabled,he=pe.init(this.clippingPlanes,ne),g=Ie.get(C,x.length),g.init(),x.push(g),te.enabled===!0&&te.isPresenting===!0){const ye=v.xr.getDepthSensingMesh();ye!==null&&xl(ye,W,-1/0,v.sortObjects)}xl(C,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(j,ce),F=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,F&&Be.addToRenderList(g,C),this.info.render.frame++,he===!0&&pe.beginShadows();const J=p.state.shadowsArray;Ee.render(J,C,W),he===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,H=g.transmissive;if(p.setupLights(),W.isArrayCamera){const ye=W.cameras;if(H.length>0)for(let Te=0,Ue=ye.length;Te<Ue;Te++){const Ne=ye[Te];Dh(K,H,C,Ne)}F&&Be.render(C);for(let Te=0,Ue=ye.length;Te<Ue;Te++){const Ne=ye[Te];Eh(g,C,Ne,Ne.viewport)}}else H.length>0&&Dh(K,H,C,W),F&&Be.render(C),Eh(g,C,W);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(v,C,W),ct.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],he===!0&&pe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function xl(C,W,J,K){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){K&&X.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Te=ae.update(C),Ue=C.material;Ue.visible&&g.push(C,Te,Ue,J,X.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Te=ae.update(C),Ue=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),X.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),X.copy(Te.boundingSphere.center)),X.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ue)){const Ne=Te.groups;for(let Ge=0,qe=Ne.length;Ge<qe;Ge++){const Fe=Ne[Ge],nt=Ue[Fe.materialIndex];nt&&nt.visible&&g.push(C,Te,nt,J,X.z,Fe)}}else Ue.visible&&g.push(C,Te,Ue,J,X.z,null)}}const ye=C.children;for(let Te=0,Ue=ye.length;Te<Ue;Te++)xl(ye[Te],W,J,K)}function Eh(C,W,J,K){const H=C.opaque,ye=C.transmissive,Te=C.transparent;p.setupLightsView(J),he===!0&&pe.setGlobalState(v.clippingPlanes,J),K&&se.viewport(I.copy(K)),H.length>0&&qr(H,W,J),ye.length>0&&qr(ye,W,J),Te.length>0&&qr(Te,W,J),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Dh(C,W,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new kt(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?xn:Rn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ye=p.state.transmissionRenderTarget[K.id],Te=K.viewport||I;ye.setSize(Te.z,Te.w);const Ue=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),F&&Be.render(J);const Ne=v.toneMapping;v.toneMapping=In;const Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),he===!0&&pe.setGlobalState(v.clippingPlanes,K),qr(C,J,K),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),q.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Fe=0,nt=W.length;Fe<nt;Fe++){const ht=W[Fe],dt=ht.object,Zt=ht.geometry,it=ht.material,Oe=ht.group;if(it.side===Cn&&dt.layers.test(K.layers)){const On=it.side;it.side=Bt,it.needsUpdate=!0,Lh(dt,J,K,Zt,it,Oe),it.side=On,it.needsUpdate=!0,qe=!0}}qe===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}v.setRenderTarget(Ue),v.setClearColor(O,G),Ge!==void 0&&(K.viewport=Ge),v.toneMapping=Ne}function qr(C,W,J){const K=W.isScene===!0?W.overrideMaterial:null;for(let H=0,ye=C.length;H<ye;H++){const Te=C[H],Ue=Te.object,Ne=Te.geometry,Ge=K===null?Te.material:K,qe=Te.group;Ue.layers.test(J.layers)&&Lh(Ue,W,J,Ne,Ge,qe)}}function Lh(C,W,J,K,H,ye){C.onBeforeRender(v,W,J,K,H,ye),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(v,W,J,K,C,ye),H.transparent===!0&&H.side===Cn&&H.forceSinglePass===!1?(H.side=Bt,H.needsUpdate=!0,v.renderBufferDirect(J,W,K,H,C,ye),H.side=Zn,H.needsUpdate=!0,v.renderBufferDirect(J,W,K,H,C,ye),H.side=Cn):v.renderBufferDirect(J,W,K,H,C,ye),C.onAfterRender(v,W,J,K,H,ye)}function Yr(C,W,J){W.isScene!==!0&&(W=de);const K=Me.get(C),H=p.state.lights,ye=p.state.shadowsArray,Te=H.state.version,Ue=Re.getParameters(C,H.state,ye,W,J),Ne=Re.getProgramCacheKey(Ue);let Ge=K.programs;K.environment=C.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(C.isMeshStandardMaterial?Y:A).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Ge===void 0&&(C.addEventListener("dispose",Xe),Ge=new Map,K.programs=Ge);let qe=Ge.get(Ne);if(qe!==void 0){if(K.currentProgram===qe&&K.lightsStateVersion===Te)return Uh(C,Ue),qe}else Ue.uniforms=Re.getUniforms(C),C.onBeforeCompile(Ue,v),qe=Re.acquireProgram(Ue,Ne),Ge.set(Ne,qe),K.uniforms=Ue.uniforms;const Fe=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=pe.uniform),Uh(C,Ue),K.needsLights=Ep(C),K.lightsStateVersion=Te,K.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=qe,K.uniformsList=null,qe}function Rh(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Vo.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Uh(C,W){const J=Me.get(C);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Pp(C,W,J,K,H){W.isScene!==!0&&(W=de),D.resetTextureUnits();const ye=W.fog,Te=K.isMeshStandardMaterial?W.environment:null,Ue=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ji,Ne=(K.isMeshStandardMaterial?Y:A).get(K.envMap||Te),Ge=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qe=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Fe=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,ht=!!J.morphAttributes.color;let dt=In;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=v.toneMapping);const Zt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,it=Zt!==void 0?Zt.length:0,Oe=Me.get(K),On=p.state.lights;if(he===!0&&(ne===!0||C!==M)){const cn=C===M&&K.id===b;pe.setState(K,C,cn)}let st=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==On.state.version||Oe.outputColorSpace!==Ue||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isBatchedMesh&&Oe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Oe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Oe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Oe.instancingMorph===!1&&H.morphTexture!==null||Oe.envMap!==Ne||K.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==pe.numPlanes||Oe.numIntersection!==pe.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==qe||Oe.morphTargets!==Fe||Oe.morphNormals!==nt||Oe.morphColors!==ht||Oe.toneMapping!==dt||Oe.morphTargetsCount!==it)&&(st=!0):(st=!0,Oe.__version=K.version);let pn=Oe.currentProgram;st===!0&&(pn=Yr(K,W,H));let ns=!1,nn=!1,Bs=!1;const ft=pn.getUniforms(),wn=Oe.uniforms;if(se.useProgram(pn.program)&&(ns=!0,nn=!0,Bs=!0),K.id!==b&&(b=K.id,nn=!0),ns||M!==C){se.buffers.depth.getReversed()?(Q.copy(C.projectionMatrix),Em(Q),Dm(Q),ft.setValue(L,"projectionMatrix",Q)):ft.setValue(L,"projectionMatrix",C.projectionMatrix),ft.setValue(L,"viewMatrix",C.matrixWorldInverse);const ei=ft.map.cameraPosition;ei!==void 0&&ei.setValue(L,_e.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ft.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,nn=!0,Bs=!0)}if(H.isSkinnedMesh){ft.setOptional(L,H,"bindMatrix"),ft.setOptional(L,H,"bindMatrixInverse");const cn=H.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),ft.setValue(L,"boneTexture",cn.boneTexture,D))}H.isBatchedMesh&&(ft.setOptional(L,H,"batchingTexture"),ft.setValue(L,"batchingTexture",H._matricesTexture,D),ft.setOptional(L,H,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",H._indirectTexture,D),ft.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",H._colorsTexture,D));const ks=J.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&ze.update(H,J,pn),(nn||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,ft.setValue(L,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(wn.envMap.value=Ne,wn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),nn&&(ft.setValue(L,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Ip(wn,Bs),ye&&K.fog===!0&&Se.refreshFogUniforms(wn,ye),Se.refreshMaterialUniforms(wn,K,z,k,p.state.transmissionRenderTarget[C.id]),Vo.upload(L,Rh(Oe),wn,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vo.upload(L,Rh(Oe),wn,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ft.setValue(L,"center",H.center),ft.setValue(L,"modelViewMatrix",H.modelViewMatrix),ft.setValue(L,"normalMatrix",H.normalMatrix),ft.setValue(L,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const cn=K.uniformsGroups;for(let ei=0,ti=cn.length;ei<ti;ei++){const Nh=cn[ei];V.update(Nh,pn),V.bind(Nh,pn)}}return pn}function Ip(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ep(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,W,J){Me.get(C.texture).__webglTexture=W,Me.get(C.depthTexture).__webglTexture=J;const K=Me.get(C);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const J=Me.get(C);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,J=0){P=C,w=W,S=J;let K=!0,H=null,ye=!1,Te=!1;if(C){const Ne=Me.get(C);if(Ne.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Ne.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ne.__hasExternalTextures)D.rebindTextures(C,Me.get(C.texture).__webglTexture,Me.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Fe=C.depthTexture;if(Ne.__boundDepthTexture!==Fe){if(Fe!==null&&Me.has(Fe)&&(C.width!==Fe.image.width||C.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const qe=Me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?H=qe[W][J]:H=qe[W],ye=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?H=Me.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[J]:H=qe,I.copy(C.viewport),N.copy(C.scissor),R=C.scissorTest}else I.copy(U).multiplyScalar(z).floor(),N.copy(re).multiplyScalar(z).floor(),R=ge;if(se.bindFramebuffer(L.FRAMEBUFFER,H)&&K&&se.drawBuffers(C,H),se.viewport(I),se.scissor(N),se.setScissorTest(R),ye){const Ne=Me.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,J)}else if(Te){const Ne=Me.get(C.texture),Ge=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.__webglTexture,J||0,Ge)}b=-1},this.readRenderTargetPixels=function(C,W,J,K,H,ye,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){se.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const Ne=C.texture,Ge=Ne.format,qe=Ne.type;if(!ie.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-K&&J>=0&&J<=C.height-H&&L.readPixels(W,J,K,H,$e.convert(Ge),$e.convert(qe),ye)}finally{const Ne=P!==null?Me.get(P).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(C,W,J,K,H,ye,Te){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ue=Ue[Te]),Ue){const Ne=C.texture,Ge=Ne.format,qe=Ne.type;if(!ie.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-K&&J>=0&&J<=C.height-H){se.bindFramebuffer(L.FRAMEBUFFER,Ue);const Fe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),L.readPixels(W,J,K,H,$e.convert(Ge),$e.convert(qe),0);const nt=P!==null?Me.get(P).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,nt);const ht=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Im(L,ht,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Fe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(Fe),L.deleteSync(ht),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,J=0){C.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const K=Math.pow(2,-J),H=Math.floor(C.image.width*K),ye=Math.floor(C.image.height*K),Te=W!==null?W.x:0,Ue=W!==null?W.y:0;D.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Te,Ue,H,ye),se.unbindTexture()},this.copyTextureToTexture=function(C,W,J=null,K=null,H=0){C.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1],W=arguments[2],H=arguments[3]||0,J=null);let ye,Te,Ue,Ne,Ge,qe,Fe,nt,ht;const dt=C.isCompressedTexture?C.mipmaps[H]:C.image;J!==null?(ye=J.max.x-J.min.x,Te=J.max.y-J.min.y,Ue=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,Ge=J.min.y,qe=J.isBox3?J.min.z:0):(ye=dt.width,Te=dt.height,Ue=dt.depth||1,Ne=0,Ge=0,qe=0),K!==null?(Fe=K.x,nt=K.y,ht=K.z):(Fe=0,nt=0,ht=0);const Zt=$e.convert(W.format),it=$e.convert(W.type);let Oe;W.isData3DTexture?(D.setTexture3D(W,0),Oe=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),Oe=L.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),Oe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const On=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pn=L.getParameter(L.UNPACK_SKIP_PIXELS),ns=L.getParameter(L.UNPACK_SKIP_ROWS),nn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);const Bs=C.isDataArrayTexture||C.isData3DTexture,ft=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const wn=Me.get(C),ks=Me.get(W),cn=Me.get(wn.__renderTarget),ei=Me.get(ks.__renderTarget);se.bindFramebuffer(L.READ_FRAMEBUFFER,cn.__webglFramebuffer),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<Ue;ti++)Bs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(C).__webglTexture,H,qe+ti),C.isDepthTexture?(ft&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(W).__webglTexture,H,ht+ti),L.blitFramebuffer(Ne,Ge,ye,Te,Fe,nt,ye,Te,L.DEPTH_BUFFER_BIT,L.NEAREST)):ft?L.copyTexSubImage3D(Oe,H,Fe,nt,ht+ti,Ne,Ge,ye,Te):L.copyTexSubImage2D(Oe,H,Fe,nt,ht+ti,Ne,Ge,ye,Te);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ft?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Oe,H,Fe,nt,ht,ye,Te,Ue,Zt,it,dt.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(Oe,H,Fe,nt,ht,ye,Te,Ue,Zt,dt.data):L.texSubImage3D(Oe,H,Fe,nt,ht,ye,Te,Ue,Zt,it,dt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,Fe,nt,ye,Te,Zt,it,dt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,Fe,nt,dt.width,dt.height,Zt,dt.data):L.texSubImage2D(L.TEXTURE_2D,H,Fe,nt,ye,Te,Zt,it,dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,On),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ns),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nn),H===0&&W.generateMipmaps&&L.generateMipmap(Oe),se.unbindTexture()},this.copyTextureToTexture3D=function(C,W,J=null,K=null,H=0){return C.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,C=arguments[2],W=arguments[3],H=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,J,K,H)},this.initRenderTarget=function(C){Me.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),se.unbindTexture()},this.resetState=function(){w=0,S=0,P=null,se.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class zr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new zr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Qa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sr extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class el{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xr,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new E;class $i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),s=We(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class th extends Vt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const Hs=new E,ys=new E,vs=new E,_s=new ee,Xs=new ee,If=new ke,mo=new E,qs=new E,go=new E,Cu=new ee,$l=new ee,Tu=new ee;class Ef extends tt{constructor(e=new th){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new He;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new el(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new $i(n,3,0,!1)),gs.setAttribute("uv",new $i(n,2,3,!1))}this.geometry=gs,this.material=e,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),If.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-vs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;yo(mo.set(-.5,-.5,0),vs,o,ys,s,r),yo(qs.set(.5,-.5,0),vs,o,ys,s,r),yo(go.set(.5,.5,0),vs,o,ys,s,r),Cu.set(0,0),$l.set(1,0),Tu.set(1,1);let a=e.ray.intersectTriangle(mo,qs,go,!1,Hs);if(a===null&&(yo(qs.set(-.5,.5,0),vs,o,ys,s,r),$l.set(0,1),a=e.ray.intersectTriangle(mo,go,qs,!1,Hs),a===null))return;const l=e.ray.origin.distanceTo(Hs);l<e.near||l>e.far||t.push({distance:l,point:Hs.clone(),uv:Qt.getInterpolation(Hs,mo,qs,go,Cu,$l,Tu,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yo(i,e,t,n,s,r){_s.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Xs.x=r*_s.x-s*_s.y,Xs.y=s*_s.x+r*_s.y):Xs.copy(_s),i.copy(e),i.x+=Xs.x,i.y+=Xs.y,i.applyMatrix4(If)}const vo=new E,Pu=new E;class Df extends tt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){vo.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(vo);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){vo.setFromMatrixPosition(e.matrixWorld),Pu.setFromMatrixPosition(this.matrixWorld);const n=vo.distanceTo(Pu)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const Iu=new E,Eu=new et,Du=new et,H_=new E,Lu=new ke,_o=new E,Zl=new Gt,Ru=new ke,Jl=new Ki;class Lf extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zl.copy(this.boundingSphere),Zl.applyMatrix4(s),e.ray.intersectsSphere(Zl)!==!1&&(Ru.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(Ru),!(this.boundingBox!==null&&Jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Eu.fromBufferAttribute(s.attributes.skinIndex,e),Du.fromBufferAttribute(s.attributes.skinWeight,e),Iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Du.getComponent(r);if(o!==0){const a=Eu.getComponent(r);Lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(H_.copy(Iu).applyMatrix4(Lu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nh extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class En extends vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ct,h=Ct,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uu=new ke,X_=new ke;class tl{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:X_;Uu.multiplyMatrices(a,t[r]),Uu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new tl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new En(t,e,e,qt,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new nh),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ls extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new ke,Nu=new ke,xo=[],Fu=new Yt,q_=new ke,Ys=new ut,$s=new Gt;class Rf extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),Fu.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(Fu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),$s.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Nu.multiplyMatrices(n,xs),Ys.matrixWorld=Nu,Ys.raycast(e,xo);for(let o=0,a=xo.length;o<a;o++){const l=xo[o];l.instanceId=r,l.object=this,t.push(l)}xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new En(new Float32Array(s*this.count),s,this.count,Ha,en));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Kl(i,e){return i-e}function Y_(i,e){return i.z-e.z}function $_(i,e){return e.z-i.z}class Z_{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}}const Jt=new ke,J_=new ve(1,1,1),jl=new Br,Mo=new Yt,bi=new Gt,Zs=new E,Ou=new E,K_=new E,Ql=new Z_,Ft=new ut,bo=[];function j_(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function Si(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class Uf extends ut{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new He,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new En(t,e,e,qt,en);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new En(t,e,e,Nr,Kn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new En(t,e,e,qt,en);n.colorSpace=Ke.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),f=new lt(h,l,c);t.setAttribute(r,f)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new lt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Jt),this.getBoundingBoxAt(r,Mo).applyMatrix4(Jt),e.union(Mo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Jt),this.getBoundingSphereAt(r,bi).applyMatrix4(Jt),e.union(bi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Kl),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Jt.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(J_.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Kl),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const f=t.getAttribute(h),u=n.getAttribute(h);j_(f,u,l);const d=f.itemSize;for(let m=f.count,y=c;m<y;m++){const g=l+m;for(let p=0;p<d;p++)u.setComponent(g,p,0)}u.needsUpdate=!0,u.addUpdateRange(l*d,c*d)}if(s){const h=a.indexStart,f=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,d=f;u<d;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=s[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:f,reservedIndexCount:u}=c,d=r.index,m=d.array,y=e-f;for(let g=h;g<h+u;g++)m[g]=m[g]+y;d.array.copyWithin(t,h,h+u),d.addUpdateRange(t,u),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:f}=c,u=r.attributes;for(const d in u){const m=u[d],{array:y,itemSize:g}=m;y.copyWithin(e*g,h*g,(h+f)*g),m.addUpdateRange(e*g,f*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new Yt,o=n.index,a=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(Zs.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new Gt;this.getBoundingBoxAt(e,Mo),Mo.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let f=c;o&&(f=o.getX(f)),Zs.fromBufferAttribute(a,f),l=Math.max(l,r.center.distanceToSquared(Zs))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Kl);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);Si(this._multiDrawCounts,s),Si(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Si(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Si(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Si(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new He,this._initializeGeometry(r));const o=this.geometry;r.index&&Si(r.index.array,o.index.array);for(const a in r.attributes)Si(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Ft.material=this.material,Ft.geometry.index=o.index,Ft.geometry.attributes=o.attributes,Ft.geometry.boundingBox===null&&(Ft.geometry.boundingBox=new Yt),Ft.geometry.boundingSphere===null&&(Ft.geometry.boundingSphere=new Gt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=s[c];Ft.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Ft.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Ft.geometry.boundingBox),this.getBoundingSphereAt(c,Ft.geometry.boundingSphere),Ft.raycast(e,bo);for(let f=0,u=bo.length;f<u;f++){const d=bo[f];d.object=this,d.batchId=a,t.push(d)}bo.length=0}Ft.material=null,Ft.geometry.index=null,Ft.geometry.attributes={},Ft.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,f=this._geometryInfo,u=this.perObjectFrustumCulled,d=this._indirectTexture,m=d.image.data;u&&(Jt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),jl.setFromProjectionMatrix(Jt,e.coordinateSystem));let y=0;if(this.sortObjects){Jt.copy(this.matrixWorld).invert(),Zs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Jt),Ou.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Jt);for(let x=0,_=l.length;x<_;x++)if(l[x].visible&&l[x].active){const v=l[x].geometryIndex;this.getMatrixAt(x,Jt),this.getBoundingSphereAt(v,bi).applyMatrix4(Jt);let T=!1;if(u&&(T=!jl.intersectsSphere(bi)),!T){const w=f[v],S=K_.subVectors(bi.center,Zs).dot(Ou);Ql.push(w.start,w.count,S,x)}}const g=Ql.list,p=this.customSort;p===null?g.sort(r.transparent?$_:Y_):p.call(this,g,n);for(let x=0,_=g.length;x<_;x++){const v=g[x];c[y]=v.start*a,h[y]=v.count,m[y]=v.index,y++}Ql.reset()}else for(let g=0,p=l.length;g<p;g++)if(l[g].visible&&l[g].active){const x=l[g].geometryIndex;let _=!1;if(u&&(this.getMatrixAt(g,Jt),this.getBoundingSphereAt(x,bi).applyMatrix4(Jt),_=!jl.intersectsSphere(bi)),!_){const v=f[x];c[y]=v.start*a,h[y]=v.count,m[y]=g,y++}}d.needsUpdate=!0,this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,o){this.onBeforeRender(e,null,s,r,o)}}class $t extends Vt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new E,Pa=new E,Bu=new ke,Js=new Ki,So=new Gt,ec=new E,ku=new E;class ui extends tt{constructor(e=new He,t=new $t){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Pa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Pa);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,e.ray.intersectsSphere(So)===!1)return;Bu.copy(s).invert(),Js.copy(e.ray).applyMatrix4(Bu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=d,g=m-1;y<g;y+=c){const p=h.getX(y),x=h.getX(y+1),_=wo(this,e,Js,l,p,x);_&&t.push(_)}if(this.isLineLoop){const y=h.getX(m-1),g=h.getX(d),p=wo(this,e,Js,l,y,g);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,g=m-1;y<g;y+=c){const p=wo(this,e,Js,l,y,y+1);p&&t.push(p)}if(this.isLineLoop){const y=wo(this,e,Js,l,m-1,d);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wo(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ta.fromBufferAttribute(o,s),Pa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ta,Pa,ec,ku)>n)return;ec.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ec);if(!(l<e.near||l>e.far))return{distance:l,point:ku.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const zu=new E,Gu=new E;class Nn extends ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zu.fromBufferAttribute(t,s),Gu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zu.distanceTo(Gu);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nf extends ui{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ih extends Vt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new ke,Sc=new Ki,Ao=new Gt,Co=new E;class Ff extends tt{constructor(e=new He,t=new ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Vu.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,y=d;m<y;m++){const g=c.getX(m);Co.fromBufferAttribute(f,g),Wu(Co,g,l,s,e,t,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,y=d;m<y;m++)Co.fromBufferAttribute(f,m),Wu(Co,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wu(i,e,t,n,s,r,o){const a=Sc.distanceSqToPoint(i);if(a<t){const l=new E;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Q_ extends vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:wt,this.magFilter=r!==void 0?r:wt,this.generateMipmaps=!1;const h=this;function f(){h.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ex extends vt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ct,this.minFilter=Ct,this.generateMipmaps=!1,this.needsUpdate=!0}}class nl extends vt{constructor(e,t,n,s,r,o,a,l,c,h,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class tx extends nl{constructor(e,t,n,s,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=dn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nx extends nl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Jn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Of extends vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ee:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,s=[],r=[],o=[],a=new E,l=new ke;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(yt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(yt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class il extends bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ee){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bf extends il{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const To=new E,tc=new sh,nc=new sh,ic=new sh;class kf extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),tc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,y,g),nc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,y,g),ic.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,y,g)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),nc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ic.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(tc.calc(l),nc.calc(l),ic.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function ix(i,e){const t=1-i;return t*t*e}function sx(i,e){return 2*(1-i)*i*e}function rx(i,e){return i*i*e}function fr(i,e,t,n){return ix(i,e)+sx(i,t)+rx(i,n)}function ox(i,e){const t=1-i;return t*t*t*e}function ax(i,e){const t=1-i;return 3*t*t*i*e}function lx(i,e){return 3*(1-i)*i*i*e}function cx(i,e){return i*i*i*e}function pr(i,e,t,n,s){return ox(i,e)+ax(i,t)+lx(i,n)+cx(i,s)}class rh extends bn{constructor(e=new ee,t=new ee,n=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ee){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(e,s.x,r.x,o.x,a.x),pr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zf extends bn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(e,s.x,r.x,o.x,a.x),pr(e,s.y,r.y,o.y,a.y),pr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oh extends bn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gf extends bn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends bn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lh extends bn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,s.x,r.x,o.x),fr(e,s.y,r.y,o.y),fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Hu(a,l.x,c.x,h.x,f.x),Hu(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ee().fromArray(s))}return this}}var Ia=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:kf,CubicBezierCurve:rh,CubicBezierCurve3:zf,EllipseCurve:il,LineCurve:oh,LineCurve3:Gf,QuadraticBezierCurve:ah,QuadraticBezierCurve3:lh,SplineCurve:ch});class Vf extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ia[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ia[s.type]().fromJSON(s))}return this}}class wr extends Vf{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new oh(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ah(this.currentPoint.clone(),new ee(e,t),new ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new rh(this.currentPoint.clone(),new ee(e,t),new ee(n,s),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ch(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new il(e,t,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gr extends He{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=yt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,f=new E,u=new ee,d=new E,m=new E,y=new E;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(m)}for(let x=0;x<=t;x++){const _=n+x*h*s,v=Math.sin(_),T=Math.cos(_);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*v,f.y=e[w].y,f.z=e[w].x*T,o.push(f.x,f.y,f.z),u.x=x/t,u.y=w/(e.length-1),a.push(u.x,u.y);const S=l[3*w+0]*v,P=l[3*w+1],b=l[3*w+0]*T;c.push(S,P,b)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){const v=_+x*e.length,T=v,w=v+e.length,S=v+e.length+1,P=v+1;r.push(T,w,P),r.push(S,P,w)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.points,e.segments,e.phiStart,e.phiLength)}}class sl extends Gr{constructor(e=1,t=1,n=4,s=8){const r=new wr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new sl(e.radius,e.length,e.capSegments,e.radialSegments)}}class rl extends He{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new E,h=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Os extends He{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const y=[],g=n/2;let p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function x(){const v=new E,T=new E;let w=0;const S=(t-e)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,I=M*(t-e)+e;for(let N=0;N<=s;N++){const R=N/s,O=R*l+a,G=Math.sin(O),B=Math.cos(O);T.x=I*G,T.y=-M*n+g,T.z=I*B,f.push(T.x,T.y,T.z),v.set(G,S,B).normalize(),u.push(v.x,v.y,v.z),d.push(R,1-M),b.push(m++)}y.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const M=y[b][P],I=y[b+1][P],N=y[b+1][P+1],R=y[b][P+1];(e>0||b!==0)&&(h.push(M,I,R),w+=3),(t>0||b!==r-1)&&(h.push(I,N,R),w+=3)}c.addGroup(p,w,0),p+=w}function _(v){const T=m,w=new ee,S=new E;let P=0;const b=v===!0?e:t,M=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,g*M,0),u.push(0,M,0),d.push(.5,.5),m++;const I=m;for(let N=0;N<=s;N++){const O=N/s*l+a,G=Math.cos(O),B=Math.sin(O);S.x=b*B,S.y=g*M,S.z=b*G,f.push(S.x,S.y,S.z),u.push(0,M,0),w.x=G*.5+.5,w.y=B*.5*M+.5,d.push(w.x,w.y),m++}for(let N=0;N<s;N++){const R=T+N,O=I+N;v===!0?h.push(O,O+1,R):h.push(O+1,O,R),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Os{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Vr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fi extends He{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new E,v=new E,T=new E;for(let w=0;w<t.length;w+=3)d(t[w+0],_),d(t[w+1],v),d(t[w+2],T),l(_,v,T,x)}function l(x,_,v,T){const w=T+1,S=[];for(let P=0;P<=w;P++){S[P]=[];const b=x.clone().lerp(v,P/w),M=_.clone().lerp(v,P/w),I=w-P;for(let N=0;N<=I;N++)N===0&&P===w?S[P][N]=b:S[P][N]=b.clone().lerp(M,N/I)}for(let P=0;P<w;P++)for(let b=0;b<2*(w-P)-1;b++){const M=Math.floor(b/2);b%2===0?(u(S[P][M+1]),u(S[P+1][M]),u(S[P][M])):(u(S[P][M+1]),u(S[P+1][M+1]),u(S[P+1][M]))}}function c(x){const _=new E;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const x=new E;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const v=g(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(v,1-T)}m(),f()}function f(){for(let x=0;x<o.length;x+=6){const _=o[x+0],v=o[x+2],T=o[x+4],w=Math.max(_,v,T),S=Math.min(_,v,T);w>.9&&S<.1&&(_<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,_){const v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function m(){const x=new E,_=new E,v=new E,T=new E,w=new ee,S=new ee,P=new ee;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),S.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),T.copy(x).add(_).add(v).divideScalar(3);const I=g(T);y(w,M+0,x,I),y(S,M+2,_,I),y(P,M+4,v,I)}}function y(x,_,v,T){T<0&&x.x===1&&(o[_]=x.x-1),v.x===0&&v.z===0&&(o[_]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.vertices,e.indices,e.radius,e.details)}}class ol extends fi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}const Po=new E,Io=new E,sc=new E,Eo=new Qt;class Wf extends He{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Vi*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:y,b:g,c:p}=Eo;if(y.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Eo.getNormal(sc),f[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const _=(x+1)%3,v=f[x],T=f[_],w=Eo[h[x]],S=Eo[h[_]],P=`${v}_${T}`,b=`${T}_${v}`;b in u&&u[b]?(sc.dot(u[b].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(S.x,S.y,S.z)),u[b]=null):P in u||(u[P]={index0:c[x],index1:c[_],normal:sc.clone()})}}for(const m in u)if(u[m]){const{index0:y,index1:g}=u[m];Po.fromBufferAttribute(a,y),Io.fromBufferAttribute(a,g),d.push(Po.x,Po.y,Po.z),d.push(Io.x,Io.y,Io.z)}this.setAttribute("position",new Le(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Wi extends wr{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new wr().fromJSON(s))}return this}}const hx={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Hf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,d;if(n&&(r=mx(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)f=i[m],u=i[m+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ar(r,o,t,a,l,d,0),o}};function Hf(i,e,t,n,s){let r,o;if(s===Cx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Xu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Xu(r,i[r],i[r+1],o);return o&&al(o,o.next)&&(Tr(o),o=o.next),o}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(al(t,t.next)||pt(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ar(i,e,t,n,s,r,o){if(!i)return;!o&&r&&xx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?dx(i,n,s,r):ux(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=fx(Zi(i),e,t),Ar(i,e,t,n,s,r,2)):o===2&&px(i,e,t,n,s,r):Ar(Zi(i),e,t,n,s,r,1);break}}}function ux(i){const e=i.prev,t=i,n=i.next;if(pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&As(s,a,r,l,o,c,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dx(i,e,t,n){const s=i.prev,r=i,o=i.next;if(pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<f?h<u?h:u:f<u?f:u,y=a>l?a>c?a:c:l>c?l:c,g=h>f?h>u?h:u:f>u?f:u,p=wc(d,m,e,t,n),x=wc(y,g,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&As(a,h,l,f,c,u,_.x,_.y)&&pt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&As(a,h,l,f,c,u,v.x,v.y)&&pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&As(a,h,l,f,c,u,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&As(a,h,l,f,c,u,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fx(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!al(s,r)&&Xf(s,n,n.next,r)&&Cr(s,r)&&Cr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Tr(n),Tr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function px(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sx(o,a)){let l=qf(o,a);o=Zi(o,o.next),l=Zi(l,l.next),Ar(o,e,t,n,s,r,0),Ar(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function mx(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Hf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(bx(c));for(s.sort(gx),r=0;r<s.length;r++)t=yx(s[r],t);return t}function gx(i,e){return i.x-e.x}function yx(i,e){const t=vx(i,e);if(!t)return e;const n=qf(t,i);return Zi(n,n.next),Zi(t,t.next)}function vx(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&As(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Cr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&_x(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function _x(i,e){return pt(i.prev,i,e.prev)<0&&pt(e.next,i,i.next)<0}function xx(i,e,t,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mx(s)}function Mx(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function wc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function As(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Sx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wx(i,e)&&(Cr(i,e)&&Cr(e,i)&&Ax(i,e)&&(pt(i.prev,i,e.prev)||pt(i,e.prev,e))||al(i,e)&&pt(i.prev,i,i.next)>0&&pt(e.prev,e,e.next)>0)}function pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function al(i,e){return i.x===e.x&&i.y===e.y}function Xf(i,e,t,n){const s=Lo(pt(i,e,t)),r=Lo(pt(i,e,n)),o=Lo(pt(t,n,i)),a=Lo(pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Do(i,t,e)||r===0&&Do(i,n,e)||o===0&&Do(t,i,n)||a===0&&Do(t,e,n))}function Do(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lo(i){return i>0?1:i<0?-1:0}function wx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Cr(i,e){return pt(i.prev,i,i.next)<0?pt(i,e,i.next)>=0&&pt(i,i.prev,e)>=0:pt(i,e,i.prev)<0||pt(i,i.next,e)<0}function Ax(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qf(i,e){const t=new Ac(i.i,i.x,i.y),n=new Ac(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xu(i,e,t,n){const s=new Ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Dn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Dn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];qu(e),Yu(n,e);let o=e.length;t.forEach(qu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Yu(n,t[l]);const a=hx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ll extends He{constructor(e=new Wi([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Tx;let _,v=!1,T,w,S,P;p&&(_=p.getSpacedPoints(h),v=!0,u=!1,T=p.computeFrenetFrames(h,!1),w=new E,S=new E,P=new E),u||(g=0,d=0,m=0,y=0);const b=a.extractPoints(c);let M=b.shape;const I=b.holes;if(!Dn.isClockWise(M)){M=M.reverse();for(let F=0,Z=I.length;F<Z;F++){const L=I[F];Dn.isClockWise(L)&&(I[F]=L.reverse())}}const R=Dn.triangulateShape(M,I),O=M;for(let F=0,Z=I.length;F<Z;F++){const L=I[F];M=M.concat(L)}function G(F,Z,L){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(Z,L)}const B=M.length,k=R.length;function z(F,Z,L){let xe,q,ie;const se=F.x-Z.x,Ae=F.y-Z.y,Me=L.x-F.x,D=L.y-F.y,A=se*se+Ae*Ae,Y=se*D-Ae*Me;if(Math.abs(Y)>Number.EPSILON){const oe=Math.sqrt(A),fe=Math.sqrt(Me*Me+D*D),ae=Z.x-Ae/oe,Re=Z.y+se/oe,Se=L.x-D/fe,Ie=L.y+Me/fe,Je=((Se-ae)*D-(Ie-Re)*Me)/(se*D-Ae*Me);xe=ae+se*Je-F.x,q=Re+Ae*Je-F.y;const pe=xe*xe+q*q;if(pe<=2)return new ee(xe,q);ie=Math.sqrt(pe/2)}else{let oe=!1;se>Number.EPSILON?Me>Number.EPSILON&&(oe=!0):se<-Number.EPSILON?Me<-Number.EPSILON&&(oe=!0):Math.sign(Ae)===Math.sign(D)&&(oe=!0),oe?(xe=-Ae,q=se,ie=Math.sqrt(A)):(xe=se,q=Ae,ie=Math.sqrt(A/2))}return new ee(xe/ie,q/ie)}const j=[];for(let F=0,Z=O.length,L=Z-1,xe=F+1;F<Z;F++,L++,xe++)L===Z&&(L=0),xe===Z&&(xe=0),j[F]=z(O[F],O[L],O[xe]);const ce=[];let U,re=j.concat();for(let F=0,Z=I.length;F<Z;F++){const L=I[F];U=[];for(let xe=0,q=L.length,ie=q-1,se=xe+1;xe<q;xe++,ie++,se++)ie===q&&(ie=0),se===q&&(se=0),U[xe]=z(L[xe],L[ie],L[se]);ce.push(U),re=re.concat(U)}for(let F=0;F<g;F++){const Z=F/g,L=d*Math.cos(Z*Math.PI/2),xe=m*Math.sin(Z*Math.PI/2)+y;for(let q=0,ie=O.length;q<ie;q++){const se=G(O[q],j[q],xe);Q(se.x,se.y,-L)}for(let q=0,ie=I.length;q<ie;q++){const se=I[q];U=ce[q];for(let Ae=0,Me=se.length;Ae<Me;Ae++){const D=G(se[Ae],U[Ae],xe);Q(D.x,D.y,-L)}}}const ge=m+y;for(let F=0;F<B;F++){const Z=u?G(M[F],re[F],ge):M[F];v?(S.copy(T.normals[0]).multiplyScalar(Z.x),w.copy(T.binormals[0]).multiplyScalar(Z.y),P.copy(_[0]).add(S).add(w),Q(P.x,P.y,P.z)):Q(Z.x,Z.y,0)}for(let F=1;F<=h;F++)for(let Z=0;Z<B;Z++){const L=u?G(M[Z],re[Z],ge):M[Z];v?(S.copy(T.normals[F]).multiplyScalar(L.x),w.copy(T.binormals[F]).multiplyScalar(L.y),P.copy(_[F]).add(S).add(w),Q(P.x,P.y,P.z)):Q(L.x,L.y,f/h*F)}for(let F=g-1;F>=0;F--){const Z=F/g,L=d*Math.cos(Z*Math.PI/2),xe=m*Math.sin(Z*Math.PI/2)+y;for(let q=0,ie=O.length;q<ie;q++){const se=G(O[q],j[q],xe);Q(se.x,se.y,f+L)}for(let q=0,ie=I.length;q<ie;q++){const se=I[q];U=ce[q];for(let Ae=0,Me=se.length;Ae<Me;Ae++){const D=G(se[Ae],U[Ae],xe);v?Q(D.x,D.y+_[h-1].y,_[h-1].x+L):Q(D.x,D.y,f+L)}}}$(),he();function $(){const F=s.length/3;if(u){let Z=0,L=B*Z;for(let xe=0;xe<k;xe++){const q=R[xe];me(q[2]+L,q[1]+L,q[0]+L)}Z=h+g*2,L=B*Z;for(let xe=0;xe<k;xe++){const q=R[xe];me(q[0]+L,q[1]+L,q[2]+L)}}else{for(let Z=0;Z<k;Z++){const L=R[Z];me(L[2],L[1],L[0])}for(let Z=0;Z<k;Z++){const L=R[Z];me(L[0]+B*h,L[1]+B*h,L[2]+B*h)}}n.addGroup(F,s.length/3-F,0)}function he(){const F=s.length/3;let Z=0;ne(O,Z),Z+=O.length;for(let L=0,xe=I.length;L<xe;L++){const q=I[L];ne(q,Z),Z+=q.length}n.addGroup(F,s.length/3-F,1)}function ne(F,Z){let L=F.length;for(;--L>=0;){const xe=L;let q=L-1;q<0&&(q=F.length-1);for(let ie=0,se=h+g*2;ie<se;ie++){const Ae=B*ie,Me=B*(ie+1),D=Z+xe+Ae,A=Z+q+Ae,Y=Z+q+Me,oe=Z+xe+Me;_e(D,A,Y,oe)}}}function Q(F,Z,L){l.push(F),l.push(Z),l.push(L)}function me(F,Z,L){X(F),X(Z),X(L);const xe=s.length/3,q=x.generateTopUV(n,s,xe-3,xe-2,xe-1);de(q[0]),de(q[1]),de(q[2])}function _e(F,Z,L,xe){X(F),X(Z),X(xe),X(Z),X(L),X(xe);const q=s.length/3,ie=x.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);de(ie[0]),de(ie[1]),de(ie[3]),de(ie[1]),de(ie[2]),de(ie[3])}function X(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function de(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Px(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ia[s.type]().fromJSON(s)),new ll(n,e.options)}}const Tx={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ee(r,o),new ee(a,l),new ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ee(o,1-l),new ee(c,1-f),new ee(u,1-m),new ee(y,1-p)]:[new ee(a,1-l),new ee(h,1-f),new ee(d,1-m),new ee(g,1-p)]}};function Px(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class cl extends fi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cl(e.radius,e.detail)}}class Wr extends fi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class hl extends He{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=e;const u=(t-e)/s,d=new E,m=new ee;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){const p=r+g/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let y=0;y<s;y++){const g=y*(n+1);for(let p=0;p<n;p++){const x=p+g,_=x,v=x+n+1,T=x+n+2,w=x+1;a.push(_,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ul extends He{constructor(e=new Wi([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(o,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let d=u.shape;const m=u.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];Dn.isClockWise(x)===!0&&(m[g]=x.reverse())}const y=Dn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=y.length;g<p;g++){const x=y[g],_=x[0]+f,v=x[1]+f,T=x[2]+f;n.push(_,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ix(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new ul(n,e.curveSegments)}}function Ix(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ji extends He{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new E,u=new E,d=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const w=T/t;f.x=-e*Math.cos(s+w*r)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(s+w*r)*Math.sin(o+_*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),g.push(w+v,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=h[p][x+1],v=h[p][x],T=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&d.push(_,v,w),(p!==n-1||l<Math.PI)&&d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dl extends fi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class fl extends He{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new E,f=new E,u=new E;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const y=m/s*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const y=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,x=(s+1)*d+m;o.push(y,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pl extends He{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],h=[],f=new E,u=new E,d=new E,m=new E,y=new E,g=new E,p=new E;for(let _=0;_<=n;++_){const v=_/n*r*Math.PI*2;x(v,r,o,e,d),x(v+.01,r,o,e,m),g.subVectors(m,d),p.addVectors(m,d),y.crossVectors(g,p),p.crossVectors(y,g),y.normalize(),p.normalize();for(let T=0;T<=s;++T){const w=T/s*Math.PI*2,S=-t*Math.cos(w),P=t*Math.sin(w);f.x=d.x+(S*p.x+P*y.x),f.y=d.y+(S*p.y+P*y.y),f.z=d.z+(S*p.z+P*y.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(_/n),h.push(T/s)}}for(let _=1;_<=n;_++)for(let v=1;v<=s;v++){const T=(s+1)*(_-1)+(v-1),w=(s+1)*_+(v-1),S=(s+1)*_+v,P=(s+1)*(_-1)+v;a.push(T,w,P),a.push(w,S,P)}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2));function x(_,v,T,w,S){const P=Math.cos(_),b=Math.sin(_),M=T/v*_,I=Math.cos(M);S.x=w*(2+I)*.5*P,S.y=w*(2+I)*b*.5,S.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ml extends He{constructor(e=new lh(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new ee;let h=new E;const f=[],u=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function y(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),x(),p()}function g(_){h=e.getPointAt(_/t,h);const v=o.normals[_],T=o.binormals[_];for(let w=0;w<=s;w++){const S=w/s*Math.PI*2,P=Math.sin(S),b=-Math.cos(S);l.x=b*v.x+P*T.x,l.y=b*v.y+P*T.y,l.z=b*v.z+P*T.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){const T=(s+1)*(_-1)+(v-1),w=(s+1)*_+(v-1),S=(s+1)*_+v,P=(s+1)*(_-1)+v;m.push(T,w,P),m.push(w,S,P)}}function x(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)c.x=_/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ml(new Ia[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yf extends He{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new E,r=new E;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let m=u,y=u+d;m<y;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),x=a.getX(m+(g+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,x),$u(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,f=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,f),$u(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function $u(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Zu=Object.freeze({__proto__:null,BoxGeometry:Qn,CapsuleGeometry:sl,CircleGeometry:rl,ConeGeometry:Vr,CylinderGeometry:Os,DodecahedronGeometry:ol,EdgesGeometry:Wf,ExtrudeGeometry:ll,IcosahedronGeometry:cl,LatheGeometry:Gr,OctahedronGeometry:Wr,PlaneGeometry:Ns,PolyhedronGeometry:fi,RingGeometry:hl,ShapeGeometry:ul,SphereGeometry:ji,TetrahedronGeometry:dl,TorusGeometry:fl,TorusKnotGeometry:pl,TubeGeometry:ml,WireframeGeometry:Yf});class $f extends Vt{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class hh extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class gl extends Vt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zf extends gl{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jf extends Vt{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kf extends Vt{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jf extends Vt{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qf extends Vt{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ep extends Vt{static get type(){return"MeshMatcapMaterial"}constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=di,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tp extends $t{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Bi(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ip(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Cc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function uh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Ex(i,e,t,n,s=30){const r=i.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),f=[],u=[];for(let d=0;d<c.times.length;++d){const m=c.times[d]*s;if(!(m<t||m>=n)){f.push(c.times[d]);for(let y=0;y<h;++y)u.push(c.values[d*h+y])}}f.length!==0&&(c.times=Bi(f,c.times.constructor),c.values=Bi(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function Dx(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let o=0;o<s;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);const m=a.times.length-1;let y;if(r<=a.times[0]){const p=h,x=f-h;y=a.values.slice(p,x)}else if(r>=a.times[m]){const p=m*f+h,x=p+f-h;y=a.values.slice(p,x)}else{const p=a.createInterpolant(),x=h,_=f-h;p.evaluate(r),y=p.resultBuffer.slice(x,_)}l==="quaternion"&&new zt().fromArray(y).normalize().conjugate().toArray(y);const g=c.times.length;for(let p=0;p<g;++p){const x=p*d+u;if(l==="quaternion")zt.multiplyQuaternionsFlat(c.values,x,y,0,c.values,x);else{const _=d-u*2;for(let v=0;v<_;++v)c.values[x+v]-=y[v]}}}return i.blendMode=Xc,i}const Lx={convertArray:Bi,isTypedArray:np,getKeyframeOrder:ip,sortedArray:Cc,flattenJSON:uh,subclip:Ex,makeClipAdditive:Dx};class Hr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sp extends Hr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ui,endingEnd:Ui}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ni:r=e,a=2*t-n;break;case _r:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ni:o=e,l=2*n-t;break;case _r:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,x=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,_=(-1-d)*g+(1.5+d)*y+.5*m,v=d*g-d*y;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+x*o[c+T]+_*o[l+T]+v*o[f+T];return r}}class dh extends Hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}}class rp extends Hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&np(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){const y=t[f+m];if(y!==t[u+m]||y!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Aa;class Qi extends Sn{constructor(e,t,n){super(e,t,n)}}Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=vr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class fh extends Sn{}fh.prototype.ValueTypeName="color";class Pr extends Sn{}Pr.prototype.ValueTypeName="number";class op extends Hr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)zt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Xr extends Sn{InterpolantFactoryMethodLinear(e){return new op(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends Sn{constructor(e,t,n){super(e,t,n)}}es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=vr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends Sn{}Ir.prototype.ValueTypeName="vector";class Er{constructor(e="",t=-1,n=[],s=Ya){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ux(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=ip(l);l=Cc(l,1,h),c=Cc(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const f=h[1];let u=s[f];u||(s[f]=u=[]),u.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,m,y){if(d.length!==0){const g=[],p=[];uh(d,g,p,m),g.length!==0&&y.push(new f(u,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let y=0;y<u[m].morphTargets.length;y++)d[u[m].morphTargets[y]]=-1;for(const y in d){const g=[],p=[];for(let x=0;x!==u[m].morphTargets.length;++x){const _=u[m];g.push(_.time),p.push(_.morphTarget===y?1:0)}s.push(new Pr(".morphTargetInfluence["+y+"]",g,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(Ir,d+".position",u,"pos",s),n(Xr,d+".quaternion",u,"rot",s),n(Ir,d+".scale",u,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pr;case"vector":case"vector2":case"vector3":case"vector4":return Ir;case"color":return fh;case"quaternion":return Xr;case"bool":case"boolean":return Qi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ux(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rx(i.type);if(i.times===void 0){const t=[],n=[];uh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Yn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ph{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const ap=new ph;class tn{constructor(e){this.manager=e!==void 0?e:ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Nx extends Error{constructor(e,t){super(e),this.response=t}}class jn extends tn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Wn[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0;let y=0;const g=new ReadableStream({start(p){x();function x(){f.read().then(({done:_,value:v})=>{if(_)p.close();else{y+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:d});for(let w=0,S=h.length;w<S;w++){const P=h[w];P.onProgress&&P.onProgress(T)}p.enqueue(v),x()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Nx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Yn.add(e,c);const h=Wn[e];delete Wn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Wn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fx extends tn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new jn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=Er.parse(e[n]);t.push(s)}return t}}class Ox extends tn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=[],a=new nl,l=new jn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(f){l.load(e[f],function(u){const d=r.parse(u,!0);o[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(a.minFilter=wt),a.image=o,a.format=d.format,a.needsUpdate=!0,t&&t(a))},n,s)}if(Array.isArray(e))for(let f=0,u=e.length;f<u;++f)h(f);else l.load(e,function(f){const u=r.parse(f,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let m=0;m<d;m++){o[m]={mipmaps:[]};for(let y=0;y<u.mipmapCount;y++)o[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+y]),o[m].format=u.format,o[m].width=u.width,o[m].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=wt),a.format=u.format,a.needsUpdate=!0,t&&t(a)},n,s);return a}}class Dr extends tn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=br("img");function l(){h(),Yn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Bx extends tn{constructor(e){super(e)}load(e,t,n,s){const r=new Or;r.colorSpace=Ot;const o=new Dr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class kx extends tn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new En,a=new jn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:dn,o.wrapT=c.wrapT!==void 0?c.wrapT:dn,o.magFilter=c.magFilter!==void 0?c.magFilter:wt,o.minFilter=c.minFilter!==void 0?c.minFilter:wt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Tn),c.mipmapCount===1&&(o.minFilter=wt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class zx extends tn{constructor(e){super(e)}load(e,t,n,s){const r=new vt,o=new Dr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class pi extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mh extends pi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const rc=new ke,Ju=new E,Ku=new E;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gx extends gh{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Es*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lp extends pi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Gx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ju=new ke,Ks=new E,oc=new E;class Vx extends gh{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}}class Ea extends pi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wx extends gh{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mr extends pi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new Wx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cp extends pi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hp extends pi{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class up{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*s),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*s)),t.addScaledVector(o[5],1.092548*(s*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*s),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*s),t.addScaledVector(o[5],2*.429043*s*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class dp extends pi{constructor(e=new up,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class yl extends tn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,o=new jn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const s=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(s.uuid=e.uuid),e.name!==void 0&&(s.name=e.name),e.color!==void 0&&s.color!==void 0&&s.color.setHex(e.color),e.roughness!==void 0&&(s.roughness=e.roughness),e.metalness!==void 0&&(s.metalness=e.metalness),e.sheen!==void 0&&(s.sheen=e.sheen),e.sheenColor!==void 0&&(s.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(s.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(e.emissive),e.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(e.specular),e.specularIntensity!==void 0&&(s.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(s.shininess=e.shininess),e.clearcoat!==void 0&&(s.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(s.dispersion=e.dispersion),e.iridescence!==void 0&&(s.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(s.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(s.transmission=e.transmission),e.thickness!==void 0&&(s.thickness=e.thickness),e.attenuationDistance!==void 0&&(s.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(s.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(s.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(s.fog=e.fog),e.flatShading!==void 0&&(s.flatShading=e.flatShading),e.blending!==void 0&&(s.blending=e.blending),e.combine!==void 0&&(s.combine=e.combine),e.side!==void 0&&(s.side=e.side),e.shadowSide!==void 0&&(s.shadowSide=e.shadowSide),e.opacity!==void 0&&(s.opacity=e.opacity),e.transparent!==void 0&&(s.transparent=e.transparent),e.alphaTest!==void 0&&(s.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(s.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(s.depthFunc=e.depthFunc),e.depthTest!==void 0&&(s.depthTest=e.depthTest),e.depthWrite!==void 0&&(s.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(s.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(s.blendSrc=e.blendSrc),e.blendDst!==void 0&&(s.blendDst=e.blendDst),e.blendEquation!==void 0&&(s.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(s.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(s.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(s.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(s.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(s.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(s.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(s.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(s.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(s.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(s.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(s.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(s.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(s.rotation=e.rotation),e.linewidth!==void 0&&(s.linewidth=e.linewidth),e.dashSize!==void 0&&(s.dashSize=e.dashSize),e.gapSize!==void 0&&(s.gapSize=e.gapSize),e.scale!==void 0&&(s.scale=e.scale),e.polygonOffset!==void 0&&(s.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(s.dithering=e.dithering),e.alphaToCoverage!==void 0&&(s.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(s.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(s.visible=e.visible),e.toneMapped!==void 0&&(s.toneMapped=e.toneMapped),e.userData!==void 0&&(s.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(s.uniforms[r]={},o.type){case"t":s.uniforms[r].value=n(o.value);break;case"c":s.uniforms[r].value=new ve().setHex(o.value);break;case"v2":s.uniforms[r].value=new ee().fromArray(o.value);break;case"v3":s.uniforms[r].value=new E().fromArray(o.value);break;case"v4":s.uniforms[r].value=new et().fromArray(o.value);break;case"m3":s.uniforms[r].value=new Ve().fromArray(o.value);break;case"m4":s.uniforms[r].value=new ke().fromArray(o.value);break;default:s.uniforms[r].value=o.value}}if(e.defines!==void 0&&(s.defines=e.defines),e.vertexShader!==void 0&&(s.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(s.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(s.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)s.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(s.lights=e.lights),e.clipping!==void 0&&(s.clipping=e.clipping),e.size!==void 0&&(s.size=e.size),e.sizeAttenuation!==void 0&&(s.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(s.map=n(e.map)),e.matcap!==void 0&&(s.matcap=n(e.matcap)),e.alphaMap!==void 0&&(s.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(s.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(s.bumpScale=e.bumpScale),e.normalMap!==void 0&&(s.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(s.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new ee().fromArray(r)}return e.displacementMap!==void 0&&(s.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(s.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(s.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(s.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(s.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(s.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(s.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(s.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(s.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(s.envMap=n(e.envMap)),e.envMapRotation!==void 0&&s.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(s.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(s.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(s.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(s.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(s.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(s.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(s.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(s.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(s.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(s.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(s.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(s.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(s.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(s.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return yl.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:$f,SpriteMaterial:th,RawShaderMaterial:hh,ShaderMaterial:At,PointsMaterial:ih,MeshPhysicalMaterial:Zf,MeshStandardMaterial:gl,MeshPhongMaterial:Jf,MeshToonMaterial:Kf,MeshNormalMaterial:jf,MeshLambertMaterial:Qf,MeshDepthMaterial:ja,MeshDistanceMaterial:eh,MeshBasicMaterial:ln,MeshMatcapMaterial:ep,LineDashedMaterial:tp,LineBasicMaterial:$t,Material:Vt};return new t[e]}}class Tc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class fp extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class pp extends tn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new jn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(d,m){if(t[m]!==void 0)return t[m];const g=d.interleavedBuffers[m],p=r(d,g.buffer),x=Ss(g.type,p),_=new el(x,g.stride);return _.uuid=g.uuid,t[m]=_,_}function r(d,m){if(n[m]!==void 0)return n[m];const g=d.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}const o=e.isInstancedBufferGeometry?new fp:new He,a=e.data.index;if(a!==void 0){const d=Ss(a.type,a.array);o.setIndex(new lt(d,1))}const l=e.data.attributes;for(const d in l){const m=l[d];let y;if(m.isInterleavedBufferAttribute){const g=s(e.data,m.data);y=new $i(g,m.itemSize,m.offset,m.normalized)}else{const g=Ss(m.type,m.array),p=m.isInstancedBufferAttribute?Ls:lt;y=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(y.name=m.name),m.usage!==void 0&&y.setUsage(m.usage),o.setAttribute(d,y)}const c=e.data.morphAttributes;if(c)for(const d in c){const m=c[d],y=[];for(let g=0,p=m.length;g<p;g++){const x=m[g];let _;if(x.isInterleavedBufferAttribute){const v=s(e.data,x.data);_=new $i(v,x.itemSize,x.offset,x.normalized)}else{const v=Ss(x.type,x.array);_=new lt(v,x.itemSize,x.normalized)}x.name!==void 0&&(_.name=x.name),y.push(_)}o.morphAttributes[d]=y}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const f=e.data.groups||e.data.drawcalls||e.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){const y=f[d];o.addGroup(y.start,y.count,y.materialIndex)}const u=e.data.boundingSphere;if(u!==void 0){const d=new E;u.center!==void 0&&d.fromArray(u.center),o.boundingSphere=new Gt(d,u.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Hx extends tn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=this.path===""?Tc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new jn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(f){s!==void 0&&s(f),console.error("THREE:ObjectLoader: Can't parse "+e+".",f.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Tc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new jn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let f=!1;for(const u in o)if(o[u].data instanceof HTMLImageElement){f=!0;break}f===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new Wi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new tl().fromJSON(e[r],s);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new pp;for(let r=0,o=e.length;r<o;r++){let a;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=s.parse(l);break;default:l.type in Zu?a=Zu[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new yl;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=Er.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Ss(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new ph(t);r=new Dr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const f=e[c],u=f.url;if(Array.isArray(u)){const d=[];for(let m=0,y=u.length;m<y;m++){const g=u[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?d.push(p):d.push(new En(p.data,p.width,p.height)))}s[f.uuid]=new Fi(d)}else{const d=a(f.url);s[f.uuid]=new Fi(d)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await s.loadAsync(l)}else return o.data?{data:Ss(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){s=new Dr(this.manager),s.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f],m=await r(d);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new En(m.data,m.width,m.height)))}n[l.uuid]=new Fi(h)}else{const h=await r(l.url);n[l.uuid]=new Fi(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const s={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let h;Array.isArray(c)?(h=new Or,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new En:h=new vt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Xx)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Qu),h.wrapT=n(a.wrap[1],Qu)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,ed)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,ed)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),s[a.uuid]=h}return s}parseObject(e,t,n,s,r){let o;function a(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let m=0,y=u.length;m<y;m++){const g=u[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),n[u]}}function c(u){return s[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),s[u]}let h,f;switch(e.type){case"Scene":o=new Sr,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new ve(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Qa(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new zr(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Lt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new kr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new cp(e.color,e.intensity);break;case"DirectionalLight":o=new mr(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Ea(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new hp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new lp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new mh(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new dp().fromJSON(e);break;case"SkinnedMesh":h=a(e.geometry),f=l(e.material),o=new Lf(h,f),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),f=l(e.material),o=new ut(h,f);break;case"InstancedMesh":h=a(e.geometry),f=l(e.material);const u=e.count,d=e.instanceMatrix,m=e.instanceColor;o=new Rf(h,f,u),o.instanceMatrix=new Ls(new Float32Array(d.array),16),m!==void 0&&(o.instanceColor=new Ls(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=a(e.geometry),f=l(e.material),o=new Uf(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,f),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(y=>{const g=new Yt;g.min.fromArray(y.boxMin),g.max.fromArray(y.boxMax);const p=new Gt;return p.radius=y.sphereRadius,p.center.fromArray(y.sphereCenter),{boxInitialized:y.boxInitialized,box:g,sphereInitialized:y.sphereInitialized,sphere:p}}),o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":o=new Df;break;case"Line":o=new ui(a(e.geometry),l(e.material));break;case"LineLoop":o=new Nf(a(e.geometry),l(e.material));break;case"LineSegments":o=new Nn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new Ff(a(e.geometry),l(e.material));break;case"Sprite":o=new Ef(l(e.material));break;case"Group":o=new Oi;break;case"Bone":o=new nh;break;default:o=new tt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let d=0;d<u.length;d++)o.add(this.parseObject(u[d],t,n,s,r))}if(e.animations!==void 0){const u=e.animations;for(let d=0;d<u.length;d++){const m=u[d];o.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const u=e.levels;for(let d=0;d<u.length;d++){const m=u[d],y=o.getObjectByProperty("uuid",m.object);y!==void 0&&o.addLevel(y,m.distance,m.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new tt}})}}const Xx={UVMapping:za,CubeReflectionMapping:Jn,CubeRefractionMapping:hi,EquirectangularReflectionMapping:Ts,EquirectangularRefractionMapping:gr,CubeUVReflectionMapping:Us},Qu={RepeatWrapping:Ps,ClampToEdgeWrapping:dn,MirroredRepeatWrapping:yr},ed={NearestFilter:Ct,NearestMipmapNearestFilter:Nc,NearestMipmapLinearFilter:bs,LinearFilter:wt,LinearMipmapNearestFilter:or,LinearMipmapLinearFilter:Tn};class qx extends tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Yn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Yn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yn.add(e,l),r.manager.itemStart(e)}}let Ro;class yh{static getContext(){return Ro===void 0&&(Ro=new(window.AudioContext||window.webkitAudioContext)),Ro}static setContext(e){Ro=e}}class Yx extends tn{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new jn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);yh.getContext().decodeAudioData(c,function(f){t(f)}).catch(a)}catch(c){a(c)}},n,s);function a(l){s?s(l):console.error(l),r.manager.itemError(e)}}}const td=new ke,nd=new ke,wi=new ke;class $x{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Lt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Lt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,wi.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,o=t.near*Math.tan(Vi*t.fov*.5)/t.zoom;let a,l;nd.elements[12]=-s,td.elements[12]=s,a=-o*t.aspect+r,l=o*t.aspect+r,wi.elements[0]=2*t.near/(l-a),wi.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(wi),a=-o*t.aspect-r,l=o*t.aspect-r,wi.elements[0]=2*t.near/(l-a),wi.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(wi)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(nd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(td)}}class vh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=id();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function id(){return performance.now()}const Ai=new E,sd=new zt,Zx=new E,Ci=new E;class Jx extends tt{constructor(){super(),this.type="AudioListener",this.context=yh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new vh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ai,sd,Zx),Ci.set(0,0,-1).applyQuaternion(sd),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ai.x,s),t.positionY.linearRampToValueAtTime(Ai.y,s),t.positionZ.linearRampToValueAtTime(Ai.z,s),t.forwardX.linearRampToValueAtTime(Ci.x,s),t.forwardY.linearRampToValueAtTime(Ci.y,s),t.forwardZ.linearRampToValueAtTime(Ci.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Ai.x,Ai.y,Ai.z),t.setOrientation(Ci.x,Ci.y,Ci.z,n.x,n.y,n.z)}}class mp extends tt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ti=new E,rd=new zt,Kx=new E,Pi=new E;class jx extends mp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ti,rd,Kx),Pi.set(0,0,1).applyQuaternion(rd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ti.x,n),t.positionY.linearRampToValueAtTime(Ti.y,n),t.positionZ.linearRampToValueAtTime(Ti.z,n),t.orientationX.linearRampToValueAtTime(Pi.x,n),t.orientationY.linearRampToValueAtTime(Pi.y,n),t.orientationZ.linearRampToValueAtTime(Pi.z,n)}else t.setPosition(Ti.x,Ti.y,Ti.z),t.setOrientation(Pi.x,Pi.y,Pi.z)}}class Qx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class gp{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){zt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;zt.multiplyQuaternionsFlat(e,o,e,t,e,n),zt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const _h="\\[\\]\\.:\\/",eM=new RegExp("["+_h+"]","g"),xh="[^"+_h+"]",tM="[^"+_h.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",xh),iM=/(WCOD+)?/.source.replace("WCOD",tM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),rM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),oM=new RegExp("^"+nM+iM+sM+rM+"$"),aM=["material","materials","bones","map"];class lM{constructor(e,t,n){const s=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(e){const t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);aM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=lM;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cM{constructor(){this.isAnimationObjectGroup=!0,this.uuid=on(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length;let a,l=e.length,c=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){const u=arguments[h],d=u.uuid;let m=t[d];if(m===void 0){m=l++,t[d]=m,e.push(u);for(let y=0,g=o;y!==g;++y)r[y].push(new Qe(u,n[y],s[y]))}else if(m<c){a=e[m];const y=--c,g=e[y];t[g.uuid]=m,e[m]=g,t[d]=y,e[y]=u;for(let p=0,x=o;p!==x;++p){const _=r[p],v=_[y];let T=_[m];_[m]=v,T===void 0&&(T=new Qe(u,n[p],s[p])),_[y]=T}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const f=r++,u=e[f];t[u.uuid]=h,e[h]=u,t[c]=f,e[f]=l;for(let d=0,m=s;d!==m;++d){const y=n[d],g=y[f],p=y[h];y[h]=g,y[f]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,f=t[h];if(f!==void 0)if(delete t[h],f<r){const u=--r,d=e[u],m=--o,y=e[m];t[d.uuid]=f,e[f]=d,t[y.uuid]=u,e[u]=y,e.pop();for(let g=0,p=s;g!==p;++g){const x=n[g],_=x[u],v=x[m];x[f]=_,x[u]=v,x.pop()}}else{const u=--o,d=e[u];u>0&&(t[d.uuid]=f),e[f]=d,e.pop();for(let m=0,y=s;m!==y;++m){const g=n[m];g[f]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,f=new Array(c);s=r.length,n[e]=s,o.push(e),a.push(t),r.push(f);for(let u=h,d=l.length;u!==d;++u){const m=l[u];f[u]=new Qe(m,e,t)}return f}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),s[n]=s[a],s.pop()}}}class yp{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ui,endingEnd:Ui};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ef,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xc:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ya:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===tf;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Qd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ni,s.endingEnd=Ni):(e?s.endingStart=this.zeroSlopeAtStart?Ni:Ui:s.endingStart=_r,t?s.endingEnd=this.zeroSlopeAtEnd?Ni:Ui:s.endingEnd=_r)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const hM=new Float32Array(1);class uM extends Un{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==r;++f){const u=s[f],d=u.name;let m=h[d];if(m!==void 0)++m.referenceCount,o[f]=m;else{if(m=o[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const y=t&&t._propertyBindings[f].binding.parsedPath;m=new gp(Qe.create(n,d,y),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[f]=m}a[f].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const f=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete f[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new dh(new Float32Array(2),new Float32Array(2),1,hM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Er.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ya),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new yp(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Er.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,t[h]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Mh{constructor(e){this.value=e}clone(){return new Mh(this.value.clone===void 0?this.value:this.value.clone())}}let dM=0;class fM extends Un{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:dM++}),this.name="",this.usage=xr,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class pM extends el{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class mM{constructor(e,t,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const od=new ke;class vp{constructor(e,t,n=0,s=1/0){this.ray=new Ki(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(od),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(ad),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pc(e[s],this,n,t);return n.sort(ad),n}}function ad(i,e){return i.distance-e.distance}function Pc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Pc(r[o],e,t,!0)}}class Ic{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gM{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class bh{constructor(e,t,n,s){bh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}const ld=new ee;class yM{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ld.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ld).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cd=new E,Uo=new E;class vM{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cd.subVectors(e,this.start),Uo.subVectors(this.end,this.start);const n=Uo.dot(Uo);let r=Uo.dot(cd)/n;return t&&(r=yt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const hd=new E;class _M extends tt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new He,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Le(s,3));const r=new $t({fog:!1,toneMapped:!1});this.cone=new Nn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),hd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(hd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const li=new E,No=new ke,ac=new ke;class xM extends Nn{constructor(e){const t=_p(e),n=new He,s=[],r=[],o=new ve(0,0,1),a=new ve(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Le(s,3)),n.setAttribute("color",new Le(r,3));const l=new $t({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");ac.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(No.multiplyMatrices(ac,a.matrixWorld),li.setFromMatrixPosition(No),s.setXYZ(o,li.x,li.y,li.z),No.multiplyMatrices(ac,a.parent.matrixWorld),li.setFromMatrixPosition(No),s.setXYZ(o+1,li.x,li.y,li.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function _p(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,_p(i.children[t]));return e}class MM extends ut{constructor(e,t,n){const s=new ji(t,4,2),r=new ln({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const bM=new E,ud=new ve,dd=new ve;class SM extends tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new Wr(t);s.rotateY(Math.PI*.5),this.material=new ln({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),o=new Float32Array(r.count*3);s.setAttribute("color",new lt(o,3)),this.add(new ut(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");ud.copy(this.light.color),dd.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?ud:dd;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(bM.setFromMatrixPosition(this.light.matrixWorld).negate())}}class wM extends Nn{constructor(e=10,t=10,n=4473924,s=8947848){n=new ve(n),s=new ve(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,d=0,m=-a;u<=t;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const y=u===r?n:s;y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3}const h=new He;h.setAttribute("position",new Le(l,3)),h.setAttribute("color",new Le(c,3));const f=new $t({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class AM extends Nn{constructor(e=10,t=16,n=8,s=64,r=4473924,o=8947848){r=new ve(r),o=new ve(o);const a=[],l=[];if(t>1)for(let f=0;f<t;f++){const u=f/t*(Math.PI*2),d=Math.sin(u)*e,m=Math.cos(u)*e;a.push(0,0,0),a.push(d,0,m);const y=f&1?r:o;l.push(y.r,y.g,y.b),l.push(y.r,y.g,y.b)}for(let f=0;f<n;f++){const u=f&1?r:o,d=e-e/n*f;for(let m=0;m<s;m++){let y=m/s*(Math.PI*2),g=Math.sin(y)*d,p=Math.cos(y)*d;a.push(g,0,p),l.push(u.r,u.g,u.b),y=(m+1)/s*(Math.PI*2),g=Math.sin(y)*d,p=Math.cos(y)*d,a.push(g,0,p),l.push(u.r,u.g,u.b)}}const c=new He;c.setAttribute("position",new Le(a,3)),c.setAttribute("color",new Le(l,3));const h=new $t({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const fd=new E,Fo=new E,pd=new E;class CM extends tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new He;s.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new $t({fog:!1,toneMapped:!1});this.lightPlane=new ui(s,r),this.add(this.lightPlane),s=new He,s.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new ui(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),fd.setFromMatrixPosition(this.light.matrixWorld),Fo.setFromMatrixPosition(this.light.target.matrixWorld),pd.subVectors(Fo,fd),this.lightPlane.lookAt(Fo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Fo),this.targetLine.scale.z=pd.length()}}const Oo=new E,gt=new Ja;class TM extends Nn{constructor(e){const t=new He,n=new $t({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,y){l(m),l(y)}function l(m){s.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(s.length/3-1)}t.setAttribute("position",new Le(s,3)),t.setAttribute("color",new Le(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new ve(16755200),h=new ve(16711680),f=new ve(43775),u=new ve(16777215),d=new ve(3355443);this.setColors(c,h,f,u,d)}setColors(e,t,n,s,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;gt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),_t("c",t,e,gt,0,0,-1),_t("t",t,e,gt,0,0,1),_t("n1",t,e,gt,-n,-s,-1),_t("n2",t,e,gt,n,-s,-1),_t("n3",t,e,gt,-n,s,-1),_t("n4",t,e,gt,n,s,-1),_t("f1",t,e,gt,-n,-s,1),_t("f2",t,e,gt,n,-s,1),_t("f3",t,e,gt,-n,s,1),_t("f4",t,e,gt,n,s,1),_t("u1",t,e,gt,n*.7,s*1.1,-1),_t("u2",t,e,gt,-n*.7,s*1.1,-1),_t("u3",t,e,gt,0,s*2,-1),_t("cf1",t,e,gt,-n,0,1),_t("cf2",t,e,gt,n,0,1),_t("cf3",t,e,gt,0,-s,1),_t("cf4",t,e,gt,0,s,1),_t("cn1",t,e,gt,-n,0,-1),_t("cn2",t,e,gt,n,0,-1),_t("cn3",t,e,gt,0,-s,-1),_t("cn4",t,e,gt,0,s,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function _t(i,e,t,n,s,r,o){Oo.set(s,r,o).unproject(n);const a=e[i];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Oo.x,Oo.y,Oo.z)}}const Bo=new Yt;class PM extends Nn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new He;r.setIndex(new lt(n,1)),r.setAttribute("position",new lt(s,3)),super(r,new $t({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Bo.setFromObject(this.object),Bo.isEmpty())return;const t=Bo.min,n=Bo.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM extends Nn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new He;r.setIndex(new lt(n,1)),r.setAttribute("position",new Le(s,3)),super(r,new $t({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class EM extends ui{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new He;o.setAttribute("position",new Le(r,3)),o.computeBoundingSphere(),super(o,new $t({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new He;l.setAttribute("position",new Le(a,3)),l.computeBoundingSphere(),this.add(new ut(l,new ln({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const md=new E;let ko,lc;class DM extends tt{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",ko===void 0&&(ko=new He,ko.setAttribute("position",new Le([0,0,0,0,1,0],3)),lc=new Os(0,.5,1,5,1),lc.translate(0,-.5,0)),this.position.copy(t),this.line=new ui(ko,new $t({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ut(lc,new ln({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{md.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(md,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class LM extends Nn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new He;s.setAttribute("position",new Le(t,3)),s.setAttribute("color",new Le(n,3));const r=new $t({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new ve,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class RM{constructor(){this.type="ShapePath",this.color=new ve,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new wr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const x=[];for(let _=0,v=p.length;_<v;_++){const T=p[_],w=new Wi;w.curves=T.curves,x.push(w)}return x}function n(p,x){const _=x.length;let v=!1;for(let T=_-1,w=0;w<_;T=w++){let S=x[T],P=x[w],b=P.x-S.x,M=P.y-S.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(S=x[w],b=-b,P=x[T],M=-M),p.y<S.y||p.y>P.y)continue;if(p.y===S.y){if(p.x===S.x)return!0}else{const I=M*(p.x-S.x)-b*(p.y-S.y);if(I===0)return!0;if(I<0)continue;v=!v}}else{if(p.y!==S.y)continue;if(P.x<=p.x&&p.x<=S.x||S.x<=p.x&&p.x<=P.x)return!0}}return v}const s=Dn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Wi,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const f=[],u=[];let d=[],m=0,y;u[m]=void 0,d[m]=[];for(let p=0,x=r.length;p<x;p++)a=r[p],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!h&&u[m]&&m++,u[m]={s:new Wi,p:y},u[m].s.curves=a.curves,h&&m++,d[m]=[]):d[m].push({h:a,p:y[0]});if(!u[0])return t(r);if(u.length>1){let p=!1,x=0;for(let _=0,v=u.length;_<v;_++)f[_]=[];for(let _=0,v=u.length;_<v;_++){const T=d[_];for(let w=0;w<T.length;w++){const S=T[w];let P=!0;for(let b=0;b<u.length;b++)n(S.p,u[b].p)&&(_!==b&&x++,P?(P=!1,f[b].push(S)):p=!0);P&&f[_].push(S)}}x>0&&p===!1&&(d=f)}let g;for(let p=0,x=u.length;p<x;p++){l=u[p].s,c.push(l),g=d[p];for(let _=0,v=g.length;_<v;_++)l.holes.push(g[_].h)}return c}}class xp extends Un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class UM extends kt{constructor(e=1,t=1,n=1,s={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...s,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);const Ec=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ur,AddEquation:ci,AddOperation:Jd,AdditiveAnimationBlendMode:Xc,AdditiveBlending:Wo,AgXToneMapping:Ba,AlphaFormat:kc,AlwaysCompare:uf,AlwaysDepth:Yo,AlwaysStencilFunc:_c,AmbientLight:cp,AnimationAction:yp,AnimationClip:Er,AnimationLoader:Fx,AnimationMixer:uM,AnimationObjectGroup:cM,AnimationUtils:Lx,ArcCurve:Bf,ArrayCamera:Tf,ArrowHelper:DM,AttachedBindMode:vc,Audio:mp,AudioAnalyser:Qx,AudioContext:yh,AudioListener:Jx,AudioLoader:Yx,AxesHelper:LM,BackSide:Bt,BasicDepthPacking:nf,BasicShadowMap:Lp,BatchedMesh:Uf,Bone:nh,BooleanKeyframeTrack:Qi,Box2:yM,Box3:Yt,Box3Helper:IM,BoxGeometry:Qn,BoxHelper:PM,BufferAttribute:lt,BufferGeometry:He,BufferGeometryLoader:pp,ByteType:Fc,Cache:Yn,Camera:Ja,CameraHelper:TM,CanvasTexture:Of,CapsuleGeometry:sl,CatmullRomCurve3:kf,CineonToneMapping:Oa,CircleGeometry:rl,ClampToEdgeWrapping:dn,Clock:vh,Color:ve,ColorKeyframeTrack:fh,ColorManagement:Ke,CompressedArrayTexture:tx,CompressedCubeTexture:nx,CompressedTexture:nl,CompressedTextureLoader:Ox,ConeGeometry:Vr,ConstantAlphaFactor:Yd,ConstantColorFactor:Xd,Controls:xp,CubeCamera:_f,CubeReflectionMapping:Jn,CubeRefractionMapping:hi,CubeTexture:Or,CubeTextureLoader:Bx,CubeUVReflectionMapping:Us,CubicBezierCurve:rh,CubicBezierCurve3:zf,CubicInterpolant:sp,CullFaceBack:mc,CullFaceFront:Ed,CullFaceFrontBack:Dp,CullFaceNone:Id,Curve:bn,CurvePath:Vf,CustomBlending:Dd,CustomToneMapping:Kd,CylinderGeometry:Os,Cylindrical:gM,Data3DTexture:Zc,DataArrayTexture:$a,DataTexture:En,DataTextureLoader:kx,DataUtils:Xm,DecrementStencilOp:qp,DecrementWrapStencilOp:$p,DefaultLoadingManager:ap,DepthFormat:Gi,DepthStencilFormat:qi,DepthTexture:Qc,DetachedBindMode:jd,DirectionalLight:mr,DirectionalLightHelper:CM,DiscreteInterpolant:rp,DodecahedronGeometry:ol,DoubleSide:Cn,DstAlphaFactor:zd,DstColorFactor:Vd,DynamicCopyUsage:cm,DynamicDrawUsage:im,DynamicReadUsage:om,EdgesGeometry:Wf,EllipseCurve:il,EqualCompare:af,EqualDepth:Zo,EqualStencilFunc:jp,EquirectangularReflectionMapping:Ts,EquirectangularRefractionMapping:gr,Euler:an,EventDispatcher:Un,ExtrudeGeometry:ll,FileLoader:jn,Float16BufferAttribute:Km,Float32BufferAttribute:Le,FloatType:en,Fog:Qa,FogExp2:zr,FramebufferTexture:ex,FrontSide:Zn,Frustum:Br,GLBufferAttribute:mM,GLSL1:um,GLSL3:xc,GreaterCompare:lf,GreaterDepth:Ko,GreaterEqualCompare:hf,GreaterEqualDepth:Jo,GreaterEqualStencilFunc:nm,GreaterStencilFunc:em,GridHelper:wM,Group:Oi,HalfFloatType:xn,HemisphereLight:mh,HemisphereLightHelper:SM,IcosahedronGeometry:cl,ImageBitmapLoader:qx,ImageLoader:Dr,ImageUtils:mf,IncrementStencilOp:Xp,IncrementWrapStencilOp:Yp,InstancedBufferAttribute:Ls,InstancedBufferGeometry:fp,InstancedInterleavedBuffer:pM,InstancedMesh:Rf,Int16BufferAttribute:Zm,Int32BufferAttribute:Jm,Int8BufferAttribute:qm,IntType:Ga,InterleavedBuffer:el,InterleavedBufferAttribute:$i,Interpolant:Hr,InterpolateDiscrete:vr,InterpolateLinear:Aa,InterpolateSmooth:Go,InvertStencilOp:Zp,KeepStencilOp:Ii,KeyframeTrack:Sn,LOD:Df,LatheGeometry:Gr,Layers:Za,LessCompare:of,LessDepth:$o,LessEqualCompare:Yc,LessEqualDepth:Hi,LessEqualStencilFunc:Qp,LessStencilFunc:Kp,Light:pi,LightProbe:dp,Line:ui,Line3:vM,LineBasicMaterial:$t,LineCurve:oh,LineCurve3:Gf,LineDashedMaterial:tp,LineLoop:Nf,LineSegments:Nn,LinearFilter:wt,LinearInterpolant:dh,LinearMipMapLinearFilter:Fp,LinearMipMapNearestFilter:Np,LinearMipmapLinearFilter:Tn,LinearMipmapNearestFilter:or,LinearSRGBColorSpace:Ji,LinearToneMapping:Na,LinearTransfer:Fr,Loader:tn,LoaderUtils:Tc,LoadingManager:ph,LoopOnce:Qd,LoopPingPong:tf,LoopRepeat:ef,LuminanceAlphaFormat:Vc,LuminanceFormat:Gc,MOUSE:ki,Material:Vt,MaterialLoader:yl,MathUtils:df,Matrix2:bh,Matrix3:Ve,Matrix4:ke,MaxEquation:Nd,Mesh:ut,MeshBasicMaterial:ln,MeshDepthMaterial:ja,MeshDistanceMaterial:eh,MeshLambertMaterial:Qf,MeshMatcapMaterial:ep,MeshNormalMaterial:jf,MeshPhongMaterial:Jf,MeshPhysicalMaterial:Zf,MeshStandardMaterial:gl,MeshToonMaterial:Kf,MinEquation:Ud,MirroredRepeatWrapping:yr,MixOperation:Zd,MultiplyBlending:yc,MultiplyOperation:Rr,NearestFilter:Ct,NearestMipMapLinearFilter:Up,NearestMipMapNearestFilter:Rp,NearestMipmapLinearFilter:bs,NearestMipmapNearestFilter:Nc,NeutralToneMapping:ka,NeverCompare:rf,NeverDepth:qo,NeverStencilFunc:Jp,NoBlending:_n,NoColorSpace:Xn,NoToneMapping:In,NormalAnimationBlendMode:Ya,NormalBlending:zi,NotEqualCompare:cf,NotEqualDepth:jo,NotEqualStencilFunc:tm,NumberKeyframeTrack:Pr,Object3D:tt,ObjectLoader:Hx,ObjectSpaceNormalMap:sf,OctahedronGeometry:Wr,OneFactor:Od,OneMinusConstantAlphaFactor:$d,OneMinusConstantColorFactor:qd,OneMinusDstAlphaFactor:Gd,OneMinusDstColorFactor:Wd,OneMinusSrcAlphaFactor:Xo,OneMinusSrcColorFactor:kd,OrthographicCamera:kr,PCFShadowMap:Rc,PCFSoftShadowMap:Uc,PMREMGenerator:Ca,Path:wr,PerspectiveCamera:Lt,Plane:Hn,PlaneGeometry:Ns,PlaneHelper:EM,PointLight:Ea,PointLightHelper:MM,Points:Ff,PointsMaterial:ih,PolarGridHelper:AM,PolyhedronGeometry:fi,PositionalAudio:jx,PropertyBinding:Qe,PropertyMixer:gp,QuadraticBezierCurve:ah,QuadraticBezierCurve3:lh,Quaternion:zt,QuaternionKeyframeTrack:Xr,QuaternionLinearInterpolant:op,RED_GREEN_RGTC2_Format:Sa,RED_RGTC1_Format:Hc,REVISION:Ua,RGBADepthPacking:qc,RGBAFormat:qt,RGBAIntegerFormat:qa,RGBA_ASTC_10x10_Format:ya,RGBA_ASTC_10x5_Format:pa,RGBA_ASTC_10x6_Format:ma,RGBA_ASTC_10x8_Format:ga,RGBA_ASTC_12x10_Format:va,RGBA_ASTC_12x12_Format:_a,RGBA_ASTC_4x4_Format:oa,RGBA_ASTC_5x4_Format:aa,RGBA_ASTC_5x5_Format:la,RGBA_ASTC_6x5_Format:ca,RGBA_ASTC_6x6_Format:ha,RGBA_ASTC_8x5_Format:ua,RGBA_ASTC_8x6_Format:da,RGBA_ASTC_8x8_Format:fa,RGBA_BPTC_Format:ur,RGBA_ETC2_EAC_Format:ra,RGBA_PVRTC_2BPPV1_Format:na,RGBA_PVRTC_4BPPV1_Format:ta,RGBA_S3TC_DXT1_Format:lr,RGBA_S3TC_DXT3_Format:cr,RGBA_S3TC_DXT5_Format:hr,RGBDepthPacking:Gp,RGBFormat:zc,RGBIntegerFormat:Op,RGB_BPTC_SIGNED_Format:xa,RGB_BPTC_UNSIGNED_Format:Ma,RGB_ETC1_Format:ia,RGB_ETC2_Format:sa,RGB_PVRTC_2BPPV1_Format:ea,RGB_PVRTC_4BPPV1_Format:Qo,RGB_S3TC_DXT1_Format:ar,RGDepthPacking:Vp,RGFormat:Wc,RGIntegerFormat:Xa,RawShaderMaterial:hh,Ray:Ki,Raycaster:vp,RectAreaLight:hp,RedFormat:Ha,RedIntegerFormat:Nr,ReinhardToneMapping:Fa,RenderTarget:gf,RepeatWrapping:Ps,ReplaceStencilOp:Hp,ReverseSubtractEquation:Rd,RingGeometry:hl,SIGNED_RED_GREEN_RGTC2_Format:wa,SIGNED_RED_RGTC1_Format:ba,SRGBColorSpace:Ot,SRGBTransfer:rt,Scene:Sr,ShaderChunk:Ye,ShaderLib:vn,ShaderMaterial:At,ShadowMaterial:$f,Shape:Wi,ShapeGeometry:ul,ShapePath:RM,ShapeUtils:Dn,ShortType:Oc,Skeleton:tl,SkeletonHelper:xM,SkinnedMesh:Lf,Source:Fi,Sphere:Gt,SphereGeometry:ji,Spherical:Ic,SphericalHarmonics3:up,SplineCurve:ch,SpotLight:lp,SpotLightHelper:_M,Sprite:Ef,SpriteMaterial:th,SrcAlphaFactor:Ho,SrcAlphaSaturateFactor:Hd,SrcColorFactor:Bd,StaticCopyUsage:lm,StaticDrawUsage:xr,StaticReadUsage:rm,StereoCamera:$x,StreamCopyUsage:hm,StreamDrawUsage:sm,StreamReadUsage:am,StringKeyframeTrack:es,SubtractEquation:Ld,SubtractiveBlending:gc,TOUCH:Ri,TangentSpaceNormalMap:di,TetrahedronGeometry:dl,Texture:vt,TextureLoader:zx,TextureUtils:U_,TorusGeometry:fl,TorusKnotGeometry:pl,Triangle:Qt,TriangleFanDrawMode:zp,TriangleStripDrawMode:kp,TrianglesDrawMode:Bp,TubeGeometry:ml,UVMapping:za,Uint16BufferAttribute:Jc,Uint32BufferAttribute:Kc,Uint8BufferAttribute:Ym,Uint8ClampedBufferAttribute:$m,Uniform:Mh,UniformsGroup:fM,UniformsLib:be,UniformsUtils:Yi,UnsignedByteType:Rn,UnsignedInt248Type:Xi,UnsignedInt5999Type:Bc,UnsignedIntType:Kn,UnsignedShort4444Type:Va,UnsignedShort5551Type:Wa,UnsignedShortType:Is,VSMShadowMap:An,Vector2:ee,Vector3:E,Vector4:et,VectorKeyframeTrack:Ir,VideoTexture:Q_,WebGL3DRenderTarget:Nm,WebGLArrayRenderTarget:Um,WebGLCoordinateSystem:Pn,WebGLCubeRenderTarget:xf,WebGLMultipleRenderTargets:UM,WebGLRenderTarget:kt,WebGLRenderer:Pf,WebGLUtils:Cf,WebGPUCoordinateSystem:Mr,WireframeGeometry:Yf,WrapAroundEnding:_r,ZeroCurvatureEnding:Ui,ZeroFactor:Fd,ZeroSlopeEnding:Ni,ZeroStencilOp:Wp,createCanvasElement:pf},Symbol.toStringTag,{value:"Module"})),js=1920,Qs=1080;function NM(i,{onResize:e,centered:t=!0}={}){let n=js,s=Qs,r=1;function o(){r=Math.min(innerWidth/js,innerHeight/Qs)||1,t?(n=js,s=Qs,i.style.width=js+"px",i.style.height=Qs+"px",i.style.transform=`scale(${r})`,i.style.left=(innerWidth-js*r)/2+"px",i.style.top=(innerHeight-Qs*r)/2+"px"):(n=innerWidth/r,s=innerHeight/r,i.style.width=n+"px",i.style.height=s+"px",i.style.transform=`scale(${r})`,i.style.left="0",i.style.top="0");const a=document.getElementById("lead");a&&(a.setAttribute("width",String(n)),a.setAttribute("height",String(s))),e?.(n,s,r)}return addEventListener("resize",o),o(),{get SW(){return n},get SH(){return s},get scale(){return r},fit:o}}const FM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function OM({camera:i,controls:e,THREE:t}){let n=null,s=0;function r(a,l=1300,c){const h={p:a.p?.clone?.()??new t.Vector3(...a.pos||[0,40,80]),t:a.t?.clone?.()??new t.Vector3(...a.tgt||[0,8,0]),f:a.fov??i.fov};n={t0:s,dur:l,from:{p:i.position.clone(),t:e.target.clone(),f:i.fov},to:h,onDone:c}}function o(a){if(s+=a,!n)return!1;const l=Math.min(1,(s-n.t0)/n.dur),c=FM(l),h=n.from,f=n.to;if(i.position.lerpVectors(h.p,f.p,c),e.target.lerpVectors(h.t,f.t,c),i.fov=h.f+(f.f-h.f)*c,i.updateProjectionMatrix(),l>=1){const u=n.onDone;n=null,u?.()}return!0}return{flyTo:r,update:o,isFlying:()=>!!n,cancel:()=>{n=null}}}function BM(){const e=new URLSearchParams(location.search).get("q");if(e&&["low","mid","high"].includes(e))return{Q:e,forced:!0};let t="";try{const s=document.createElement("canvas").getContext("webgl2"),r=s?.getExtension("WEBGL_debug_renderer_info");t=r?s.getParameter(r.UNMASKED_RENDERER_WEBGL):""}catch{}return{Q:/SwiftShader|llvmpipe|Software|Intel|UHD|HD Graphics|Iris|Mali|Adreno|PowerVR/i.test(t)||(navigator.hardwareConcurrency||8)<=4?"low":"high",forced:!1,gpu:t}}const gd={high:{bloom:.59,bloomRadius:1.5,bloomThreshold:1.58,shadow:2048,particles:1,dof:!0,aperture:5e-5,maxblur:.0035,apertureClose:0,maxblurClose:.0054,focus:37,fog:2e-4,fogColor:10700,background:3298468,exposure:1,envIntensity:2.5,sunMul:1,fillMul:1,rimMul:1},mid:{bloom:.46,bloomRadius:1.2,bloomThreshold:1.58,shadow:1024,particles:.7,dof:!0,aperture:5e-5,maxblur:.0035,apertureClose:0,maxblurClose:.0054,focus:37,fog:2e-4,fogColor:10700,background:3298468,exposure:1,envIntensity:2.2,sunMul:1,fillMul:1,rimMul:1},low:{bloom:0,bloomRadius:1.5,bloomThreshold:1.58,shadow:512,particles:.4,dof:!1,aperture:0,maxblur:0,apertureClose:0,maxblurClose:0,focus:37,fog:24e-5,fogColor:10700,background:3298468,exposure:1,envIntensity:2,sunMul:1,fillMul:1,rimMul:1}},yd={type:"change"},Sh={type:"start"},Mp={type:"end"},zo=new Ki,vd=new Hn,kM=Math.cos(70*df.DEG2RAD),bt=new E,Kt=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cc=1e-6;class zM extends xp{constructor(e,t=null){super(e,t),this.state=at.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new zt,this._lastTargetPosition=new E,this._quat=new zt().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ic,this._sphericalDelta=new Ic,this._scale=1,this._panOffset=new E,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new E,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VM.bind(this),this._onPointerDown=GM.bind(this),this._onPointerUp=WM.bind(this),this._onContextMenu=JM.bind(this),this._onMouseWheel=qM.bind(this),this._onKeyDown=YM.bind(this),this._onTouchStart=$M.bind(this),this._onTouchMove=ZM.bind(this),this._onMouseDown=HM.bind(this),this._onMouseMove=XM.bind(this),this._interceptControlDown=KM.bind(this),this._interceptControlUp=jM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yd),this.update(),this.state=at.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Kt:n>Math.PI&&(n-=Kt),s<-Math.PI?s+=Kt:s>Math.PI&&(s-=Kt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zo.origin.copy(this.object.position),zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zo.direction))<kM?this.object.lookAt(this.target):(vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),zo.intersectPlane(vd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cc||this._lastTargetPosition.distanceToSquared(this.target)>cc?(this.dispatchEvent(yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function GM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function VM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function WM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mp),this.state=at.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function HM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Sh)}function XM(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qM(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Mp))}function YM(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function $M(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Sh)}function ZM(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function JM(i){this.enabled!==!1&&i.preventDefault()}function KM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const QM=new kr(-1,1,1,-1,0,1);class eb extends He{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const tb=new eb;class vl{constructor(e){this._mesh=new ut(tb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,QM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nb extends ts{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _d extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class ib extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ee);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nb(bp),this.copyPass.material.blending=_n,this.clock=new vh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_d!==void 0&&(o instanceof _d?n=!0:o instanceof ib&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rb extends ts{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ob={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Rs extends ts{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new kt(r,o,{type:xn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new kt(r,o,{type:xn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=ob;this.highPassUniforms=Yi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=bp;this.copyUniforms=Yi.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Wo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new ln,this.fsQuad=new vl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Rs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Rs.BlurDirectionX=new ee(1,0);Rs.BlurDirectionY=new ee(0,1);const ab={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class lb extends ts{constructor(e,t,n){super(),this.scene=e,this.camera=t;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new kt(1,1,{minFilter:Ct,magFilter:Ct,type:xn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ja,this.materialDepth.depthPacking=qc,this.materialDepth.blending=_n;const a=ab,l=Yi.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=s,l.aspect.value=t.aspect,l.aperture.value=r,l.maxblur.value=o,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new At({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new vl(this.materialBokeh),this._oldClearColor=new ve}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const cb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class hb extends ts{constructor(){super();const e=cb;this.uniforms=Yi.clone(e.uniforms),this.material=new hh({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new vl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Na?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ka&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function wh(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);const r=new Of(s);return n&&(r.colorSpace=Ot),r.wrapS=r.wrapT=Ps,r.anisotropy=8,r}function ub(){return wh(2048,1024,(i,e,t)=>{const n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#06102a"),n.addColorStop(.22,"#0f2250"),n.addColorStop(.34,"#1c3a72"),n.addColorStop(.43,"#2e5288"),n.addColorStop(.47,"#3f6294"),n.addColorStop(.488,"#5e7aa2"),n.addColorStop(.496,"#8c94aa"),n.addColorStop(.5,"#e0a27c"),n.addColorStop(.506,"#2a3856"),n.addColorStop(1,"#0c1220"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createRadialGradient(e*.18,t*.5,0,e*.18,t*.5,e*.22);s.addColorStop(0,"rgba(255,150,90,.42)"),s.addColorStop(1,"rgba(255,150,90,0)"),i.fillStyle=s,i.fillRect(0,t*.482,e,t*.03);for(let r=0;r<1400;r++){const o=Math.pow(Math.random(),1.6)*t*.44,a=Math.random()*.7*(1-o/(t*.46));i.fillStyle=`rgba(220,230,255,${a})`;const l=Math.random()<.05?2:1;i.fillRect(Math.random()*e,o,l,l)}})}function xd(){return wh(512,512,(i,e,t)=>{i.fillStyle="#8e9298",i.fillRect(0,0,e,t);for(let n=0;n<9e3;n++){const s=100+Math.random()*60|0;i.fillStyle=`rgba(${s},${s},${s+4},.25)`,i.fillRect(Math.random()*e,Math.random()*t,2,2)}for(let n=0;n<30;n++)i.fillStyle=`rgba(30,30,35,${Math.random()*.12})`,i.beginPath(),i.arc(Math.random()*e,Math.random()*t,20+Math.random()*60,0,7),i.fill();i.strokeStyle="rgba(30,30,30,.35)",i.lineWidth=2;for(let n=0;n<=e;n+=128)i.beginPath(),i.moveTo(n,0),i.lineTo(n,t),i.stroke(),i.beginPath(),i.moveTo(0,n),i.lineTo(e,n),i.stroke()})}function Md(){return wh(512,512,(i,e,t)=>{i.fillStyle="#343840",i.fillRect(0,0,e,t);for(let n=0;n<14e3;n++){const s=25+Math.random()*40|0;i.fillStyle=`rgba(${s},${s},${s+3},.5)`,i.fillRect(Math.random()*e,Math.random()*t,1.5,1.5)}for(let n=0;n<20;n++)i.fillStyle=`rgba(0,0,0,${Math.random()*.15})`,i.beginPath(),i.ellipse(Math.random()*e,Math.random()*t,40+Math.random()*80,20+Math.random()*40,Math.random()*3,0,7),i.fill()})}function db(i,{count:e=36,rMin:t=350,rMax:n=700}={}){let s=11;const r=(f=0,u=1)=>(s=s*16807%2147483647,f+s/2147483647*(u-f)),o=new gl({color:726052,roughness:1,metalness:0}),a=new Oi;a.name="mountains";for(let f=0;f<e;f++){const u=f/e*Math.PI*2+r(-.05,.05),d=r(t,n),m=r(18,55),y=r(80,180),g=new ut(new Vr(y,m,7),o);g.position.set(Math.cos(u)*d,m/2-4,Math.sin(u)*d),g.castShadow=!1,g.receiveShadow=!1,a.add(g)}const l=new ji(1,6,4),c=new ln({color:new ve(1,.62,.3).multiplyScalar(2.5),fog:!1}),h=new ln({color:new ve(.5,.75,1).multiplyScalar(2),fog:!1});for(let f=0;f<280;f++){const u=r(0,Math.PI*2),d=r(t*.85,n*.95),m=new ut(l,r()<.7?c:h),y=r(.4,1.2);m.position.set(Math.cos(u)*d,r(.4,2.5),Math.sin(u)*d),m.scale.set(y,y,y),a.add(m)}return i.add(a),a}const fb=`
varying vec3 d;
void main(){
  vec3 c = mix(vec3(.10,.085,.07), vec3(.16,.19,.26), smoothstep(-.4,.1,d.y));
  c = mix(c, vec3(.06,.08,.13), smoothstep(.2,.9,d.y));
  c += vec3(1.4,.8,.42) * smoothstep(.55,.95,d.x) * smoothstep(-.1,.25,d.y) * (1. - smoothstep(.3,.7,d.y));
  gl_FragColor = vec4(c, 1.);
}`,pb=`
varying vec3 d;
void main(){
  vec3 c = mix(vec3(.62,.56,.49), vec3(1.02,.97,.9), smoothstep(-.35,.15,d.y));
  c = mix(c, vec3(1.1,1.08,1.04), smoothstep(.4,.95,d.y));
  gl_FragColor = vec4(c, 1.);
}`,mb=`
varying vec3 d;
void main(){
  d = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`;function bd(i){return new ut(new ji(50,32,16),new At({side:Bt,vertexShader:mb,fragmentShader:i}))}function er(i,e,t,n,s,r,o){const a=new ut(new Qn(e,t,.4),new ln({color:new ve(...n)}));a.position.set(s,r,o),a.lookAt(0,0,0),i.add(a)}function gb(i){const e=new Ca(i),t={};{const n=new Sr;n.add(bd(fb));const s=[[5.5,4.2,3],[1.8,3.6,5.2],[4.6,3,1.5],[2.6,2.9,3.4],[1.5,4.2,5.5],[3.4,3.4,3.4]];for(let o=0;o<6;o++){const a=o/6*Math.PI*2+.4;er(n,12,2.4,s[o],Math.sin(a)*28,12+o%2*9,Math.cos(a)*28)}const r=new ut(new Qn(40,1.2,1.2),new ln({color:new ve(6,3.4,1.2)}));r.position.set(0,-6,-30),n.add(r),t.show=e.fromScene(n,.03).texture}{const n=new Sr;n.add(bd(pb)),er(n,26,12,[7,6.8,6.4],-14,22,12),er(n,18,9,[4.2,4.4,4.8],24,12,6),er(n,30,6,[3.2,3.1,3],0,30,-10),er(n,8,20,[5,4.8,4.6],-26,8,-6),t.studio=e.fromScene(n,.03).texture}return e.dispose(),t}function yb(i,e,{fogDensity:t=2e-4,fogColor:n=10700,background:s=3298468,envIntensity:r=2.5,useDuskBackground:o=!1}={}){if(o){const l=ub();l.mapping=Ts,i.background=l,"backgroundIntensity"in i&&(i.backgroundIntensity=1)}else i.background=new ve(s),"backgroundIntensity"in i&&(i.backgroundIntensity=1);i.fog=new zr(n,t);let a=null;return e&&(a=gb(e),i.environment=a.show),"environmentIntensity"in i&&(i.environmentIntensity=r),a}function vb(i,{Q:e="high"}={}){const t=gd[e]||gd.high;let n;try{n=new Pf({canvas:i,antialias:e!=="low",powerPreference:"high-performance"})}catch(G){console.error(G);const B=document.getElementById("boot");throw B&&(B.textContent="WebGL 不可用 · 请使用支持的浏览器"),G}n.setPixelRatio(Math.min(devicePixelRatio||1,e==="low"?1:1.75)),n.setSize(innerWidth,innerHeight,!1),n.outputColorSpace=Ot,n.toneMapping=Ur,n.toneMappingExposure=t.exposure??1,n.shadowMap.enabled=!0,n.shadowMap.type=Uc;const s=new Sr,r=yb(s,n,{fogDensity:t.fog??2e-4,fogColor:t.fogColor??10700,background:t.background??3298468,envIntensity:t.envIntensity??2.5});db(s,{count:36,rMin:350,rMax:700});const o=new Lt(42,innerWidth/Math.max(1,innerHeight),.5,1800);o.position.set(60,42,90);const a=new zM(o,i);Object.assign(a,{enableDamping:!0,dampingFactor:.08,minDistance:12,maxDistance:320,minPolarAngle:.18,maxPolarAngle:1.35,rotateSpeed:.55,zoomSpeed:.85}),a.target.set(0,8,0);const l=t.sunMul??1,c=t.fillMul??1,h=t.rimMul??1,f=new mh(16688682,24826,4.34*c);s.add(f);const u=new mr(9005866,.86*l);u.position.set(.5,16.2,-7.5),u.target.position.set(0,2,0),u.castShadow=!0,u.shadow.mapSize.set(t.shadow,t.shadow),u.shadow.camera.near=1,u.shadow.camera.far=280,u.shadow.camera.left=-90,u.shadow.camera.right=90,u.shadow.camera.top=90,u.shadow.camera.bottom=-90,u.shadow.bias=-3e-4,u.shadow.normalBias=.08,u.shadow.radius=3,s.add(u),s.add(u.target);const d=new mr(10196073,.75*c);d.position.set(6.8,10,12.9),s.add(d);const m=new mr(16709366,.91*h);m.position.set(-10.6,23.7,10),s.add(m);const y=new Ea(64511,1.44,110,2);y.position.set(8,18,6),s.add(y);const g=new Ea(64511,.61,100,2);g.position.set(-18,14,-10),s.add(g);const p=new sb(n);p.addPass(new rb(s,o));const x=new Rs(new ee(innerWidth,innerHeight),t.bloom,t.bloomRadius??1.5,t.bloomThreshold??1.58);x.enabled=t.bloom>0,p.addPass(x);let _="";try{const G=n.getContext(),B=G?.getExtension?.("WEBGL_debug_renderer_info");B&&(_=G.getParameter(B.UNMASKED_RENDERER_WEBGL)||"")}catch{}const v=/SwiftShader|llvmpipe|Software/i.test(_);let T=null;t.dof&&(T=new lb(s,o,{focus:t.focus??37,aperture:t.aperture,maxblur:t.maxblur}),v&&(T.enabled=!1),p.addPass(T));const w=new hb;p.addPass(w);const S={overview:{aperture:t.aperture??0,maxblur:t.maxblur??0},close:{aperture:t.apertureClose??0,maxblur:t.maxblurClose??0}};let P="overview";const b=new E;function M(G,B={}){if(!T)return;b.copy(G||a.target),o.updateMatrixWorld();const k=-b.clone().applyMatrix4(o.matrixWorldInverse).z;T.uniforms.focus.value=Math.max(1,k),B.aperture!=null&&(T.uniforms.aperture.value=B.aperture),B.maxblur!=null&&(T.uniforms.maxblur.value=B.maxblur)}function I(G){const B=G==="close"?"close":"overview";if(P=B,!T)return;const k=S[B];T.uniforms.aperture.value=k.aperture,T.uniforms.maxblur.value=k.maxblur}function N(){return P}function R(G,B){o.aspect=G/Math.max(1,B),o.updateProjectionMatrix(),n.setSize(G,B,!1),p.setSize(G,B),x.setSize(G,B)}function O(){M(a.target),p.render()}return{THREE:Ec,scene:s,camera:o,controls:a,renderer:n,composer:p,bloom:x,bokeh:T,outputPass:w,hemi:f,key:u,fill:d,rim:m,plantA:y,plantB:g,softGL:v,envMaps:r,preset:t,setSize:R,setFocus:M,setDofMode:I,getDofMode:N,DOF_MODES:S,render:O,Q:e}}const le=Object.freeze({H2:"#f4f7fb",N2:"#2f7df0",safe_green:"#3dd68c",warn_orange:"#ff9f43",danger_red:"#ff4757",ui_blue:"#3f8cff",organic_in:"#8cc1d5",HF:"#c8e86c",F2:"#b1e457",fluor_product:"#70cfa0",substrate:"#d2a261",h2_product:"#a79cef",aniline:"#c1915d",acid:"#98c8a3",nitrite:"#dfce89",coolant:"#6ec8ff",diazonium:"#ff6b4a",azo_dye:"#d0568e",sky_top:"#06102a",sky_bot:"#133066",ground:"#0a0e13",metal:"#c0c8d0",metal_dark:"#7a8490",concrete:"#7a828c"});le.metal;le.metal_dark;const _b=le.concrete;function xt(i){const e=new i.MeshStandardMaterial({color:12107978,metalness:.88,roughness:.32,envMapIntensity:1.2,emissive:0,emissiveIntensity:0}),t=new i.MeshStandardMaterial({color:5924210,metalness:.82,roughness:.38,envMapIntensity:1.1,emissive:0,emissiveIntensity:0}),n=new i.MeshStandardMaterial({color:13686494,metalness:.92,roughness:.26,envMapIntensity:1.25,emissive:0,emissiveIntensity:0}),s=new i.MeshStandardMaterial({color:11055290,metalness:.55,roughness:.4,envMapIntensity:.95}),r=new i.MeshStandardMaterial({color:8029332,metalness:0,roughness:.86,envMapIntensity:.45}),o=new i.MeshStandardMaterial({color:_b,metalness:0,roughness:.92,envMapIntensity:.35}),a=new i.MeshStandardMaterial({color:le.warn_orange,metalness:.58,roughness:.38,envMapIntensity:1,emissive:le.warn_orange,emissiveIntensity:.035}),l=new i.MeshStandardMaterial({color:le.H2,metalness:.42,roughness:.36,envMapIntensity:1.05,emissive:0,emissiveIntensity:0}),c=new i.MeshStandardMaterial({color:le.N2,metalness:.5,roughness:.38,envMapIntensity:1,emissive:0,emissiveIntensity:0});return{metal:e,metalDark:t,metalLite:n,painted:s,insulation:r,concrete:o,warn:a,h2Band:l,n2Band:c}}function _l(i,e,{intensityScale:t=1,enabled:n=!0}={}){if(!i||!e)return 0;const s=n!==!1&&t>0,r=s&&e.environment||null;let o=0;return i.traverse(a=>{if(!a.isMesh||!a.material)return;const l=Array.isArray(a.material)?a.material:[a.material];for(const c of l)!c||!(c.isMeshStandardMaterial||c.isMeshPhysicalMaterial)||c.userData?.lockEnvMap!==!0&&(c.userData?.baseEnvMapIntensity==null&&(c.userData.baseEnvMapIntensity=c.envMapIntensity??1),s&&r?(c.envMap=r,c.envMapIntensity=c.userData.baseEnvMapIntensity*t):s||(c.envMap=null,c.envMapIntensity=c.userData.baseEnvMapIntensity),c.needsUpdate=!0,o+=1)}),o}function xb(i,e,t){const n=new i.Group,s=new i.Mesh(new i.CylinderGeometry(e*1.25,e*1.25,.22,20),t.metalLite);return s.castShadow=!0,n.add(s),n}function Mn(i,e,t,n,{h2:s=!1}={}){const r=xt(i),o=s?r.h2Band.clone():r.painted.clone();s?(o.color.set(le.H2),o.emissive.setHex(0),o.emissiveIntensity=0):(o.color.set(n),o.emissive.setHex(0),o.emissiveIntensity=0,o.metalness=.52,o.roughness=.38,o.envMapIntensity=1);const a=new i.Mesh(new i.CylinderGeometry(e+.06,e+.06,.5,24),o);return a.position.y=t,a.castShadow=!0,a}function Ln(i,{h:e=10,r:t=3.2,bandColor:n=le.ui_blue,id:s="",h2:r=!1}={}){const o=xt(i),a=new i.Group;a.name=s||"tank";const l=new i.Mesh(new i.CylinderGeometry(t,t,e,28),o.metal);l.position.y=e/2+.8,l.castShadow=!0,l.receiveShadow=!0;const c=new i.Mesh(new i.SphereGeometry(t,24,14,0,Math.PI*2,0,Math.PI/2),o.metal);c.position.y=e+.8,c.castShadow=!0;const h=new i.Mesh(new i.CylinderGeometry(t*.92,t*1.08,1,20),o.concrete);h.position.y=.5,h.receiveShadow=!0;const f=new i.Mesh(new i.CylinderGeometry(t*.22,t*.22,1.2,12),o.metalDark);f.position.y=e+.8+t*.55;const u=xb(i,t*.28,o);return u.position.y=f.position.y+.7,a.add(l,c,h,f,u,Mn(i,t,e*.55+.8,n,{h2:r})),a.userData={kind:"tank",id:s,pickable:!0},l.userData=a.userData,a}function Mb(i,{h:e=22,r:t=3.6,id:n="reactor"}={}){const s=xt(i),r=new i.Group;r.name=n;const o=new i.Mesh(new i.CylinderGeometry(t+.28,t+.28,e-.6,32),s.insulation.clone());o.position.y=e/2+1.8,o.castShadow=!0;const a=new i.Mesh(new i.CylinderGeometry(t,t,e,32),s.metal.clone());a.position.y=e/2+1.8,a.castShadow=!0,a.receiveShadow=!0;const l=new i.Mesh(new i.SphereGeometry(t,28,14,0,Math.PI*2,0,Math.PI/2),s.metal);l.position.y=e+1.8,l.castShadow=!0;const c=2.8,h=new i.Mesh(new i.CylinderGeometry(t*1.08,t*1.28,c,24),s.metalDark);h.position.y=c/2,h.receiveShadow=!0;const f=new i.Mesh(new i.CylinderGeometry(t*1.38,t*1.42,.35,24),s.concrete);f.position.y=.18,f.receiveShadow=!0;for(let p=0;p<8;p++){const x=p/8*Math.PI*2,_=new i.Mesh(new i.BoxGeometry(.18,c*.85,.55),s.metalLite);_.position.set(Math.cos(x)*t*1.12,c*.5,Math.sin(x)*t*1.12),_.lookAt(0,c*.5,0),r.add(_)}const u=new i.Mesh(new i.CylinderGeometry(.95,.95,.55,16),s.metalDark);u.rotation.x=Math.PI/2,u.position.set(0,e*.42+1.8,t+.35);const d=new i.Mesh(new i.CylinderGeometry(1.15,1.15,.22,18),s.metalLite);d.rotation.x=Math.PI/2,d.position.set(0,e*.42+1.8,t+.72);const m=new i.Mesh(new i.TorusGeometry(1.05,.06,8,20),s.warn);m.position.copy(d.position);const y=new i.Mesh(new i.CylinderGeometry(t*.35,t*.4,2.4,14),s.metalDark);y.position.y=e+1.8+t*.55,y.castShadow=!0;const g=new i.Mesh(new i.TorusGeometry(t+1.05,.14,8,32),s.warn);g.rotation.x=Math.PI/2,g.position.y=e*.55+1.8;for(let p=0;p<3;p++){const x=new i.Mesh(new i.CylinderGeometry(.12,.12,1.8,8),s.metalLite);x.position.set(t+.95,7+p*4.5,0),x.rotation.z=Math.PI/2,r.add(x)}for(let p=0;p<4;p++){const x=new i.Mesh(new i.CylinderGeometry(t+.32,t+.32,.18,28),s.metalLite.clone());x.position.y=4+p*(e/5)+1.8,r.add(x)}return r.add(f,h,o,a,l,y,g,u,d,m,Mn(i,t+.28,e*.38+1.8,le.substrate)),r.userData={kind:"reactor",id:n,pickable:!0,cutawayTarget:a,insulation:o},a.userData=r.userData,r}function Da(i,{L:e=12,r:t=1.7,id:n="hx"}={}){const s=xt(i),r=new i.Group;r.name=n;const o=t+1.3,a=new i.Mesh(new i.CylinderGeometry(t,t,e,24),s.metal);a.rotation.z=Math.PI/2,a.position.y=o,a.castShadow=!0;function l(y){const g=new i.Group,p=new i.Mesh(new i.CylinderGeometry(t*1.12,t*1.12,2.2,22),s.metalDark);p.rotation.z=Math.PI/2,p.position.set(y*(e/2+.5),o,0),p.castShadow=!0;const x=new i.Mesh(new i.CylinderGeometry(t*1.45,t*1.45,.28,22),s.metalLite);x.rotation.z=Math.PI/2,x.position.set(y*(e/2+1.7),o,0);const _=new i.Mesh(new i.CylinderGeometry(t*1.32,t*1.32,.22,22),s.warn);_.rotation.z=Math.PI/2,_.position.set(y*(e/2+.05),o,0);const v=new i.Mesh(new i.TorusGeometry(t*1.38,.05,6,24),s.metalLite);v.rotation.y=Math.PI/2,v.position.copy(x.position);const T=new i.Mesh(new i.CylinderGeometry(t*.95,t*.95,.12,20),new i.MeshStandardMaterial({color:8029328,metalness:.75,roughness:.4,envMapIntensity:1.1}));T.rotation.z=Math.PI/2,T.position.set(y*(e/2+1.55),o,0);const w=new i.Mesh(new i.CylinderGeometry(.4,.4,1.6,12),s.metalLite);return w.position.set(y*(e/2+1.7),o+t*.9,0),g.add(p,_,x,v,T,w),g}const c=new i.Mesh(new i.BoxGeometry(2,1.35,t*2.4),s.concrete),h=c.clone();h.position.set(-e*.28,.68,0);const f=c.clone();f.position.set(e*.28,.68,0);const u=Mn(i,t,0,le.warn_orange);u.rotation.z=Math.PI/2,u.position.set(-e*.18,o,0);const d=Mn(i,t,0,le.ui_blue);d.rotation.z=Math.PI/2,d.position.set(e*.18,o,0);const m=new i.Mesh(new i.CylinderGeometry(.48,.48,2,12),s.metalLite);return m.position.set(0,o+t+.7,0),r.add(a,l(-1),l(1),h,f,u,d,m),r.userData={kind:"exchanger",id:n,pickable:!0},a.userData=r.userData,r}function Sp(i,{h:e=12,r:t=3,id:n="sep"}={}){const s=xt(i),r=Ln(i,{h:e,r:t,bandColor:le.h2_product,id:n}),o=new i.Mesh(new i.CylinderGeometry(t*.85,t*.85,.5,20),new i.MeshStandardMaterial({color:9085112,metalness:.7,roughness:.28,envMapIntensity:1.15,transparent:!0,opacity:.55}));o.position.y=e*.72+.8,o.visible=!1,o.name="demister",r.add(o),r.userData.demister=o;const a=new i.Mesh(new i.CylinderGeometry(.55,.55,2.2,12),s.metalDark);return a.rotation.z=Math.PI/2,a.position.set(t+1,e*.45+.8,0),r.add(a),r}function Sd(i,{id:e="comp",h2:t=!1}={}){const n=xt(i),s=new i.Group;s.name=e;const r=new i.Mesh(new i.BoxGeometry(11.5,.7,5.8),n.metalDark);r.position.y=.35,r.receiveShadow=!0;const o=new i.Mesh(new i.BoxGeometry(11.7,.25,6),n.concrete);o.position.y=.08;const a=new i.Mesh(new i.CylinderGeometry(1.55,1.55,2.8,20),n.metalLite);a.rotation.z=Math.PI/2,a.position.set(-2.8,1.55,0),a.castShadow=!0;const l=new i.Mesh(new i.CylinderGeometry(1.4,1.4,.4,16),n.metalDark);l.rotation.z=Math.PI/2,l.position.set(-4.35,1.55,0);const c=new i.Mesh(new i.BoxGeometry(1.1,1.5,1.9),n.warn);c.position.set(-.9,1.55,0);const h=new i.Mesh(new i.BoxGeometry(4,2.2,3.6),n.metal);h.position.set(2,1.5,0),h.castShadow=!0;const f=new i.Mesh(new i.CylinderGeometry(.85,.85,3.2,14),n.metalLite);f.rotation.z=Math.PI/2,f.position.set(2.2,2.85,1.4);const u=Mn(i,.85,0,t?le.H2:le.ui_blue,{h2:t});u.rotation.z=Math.PI/2,u.position.copy(f.position);for(let d=0;d<3;d++){const m=new i.Mesh(new i.CylinderGeometry(.22,.22,1.4,8),n.metalLite);m.position.set(3.6,1.2+d*.45,-1.6),s.add(m)}return s.add(o,r,a,l,c,h,f,u),s.userData={kind:"compressor",id:e,pickable:!0,rotor:a},a.userData=s.userData,h.userData=s.userData,s}function bb(i,{id:e="flare"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.CylinderGeometry(.38,.58,30,12),t.metalDark);s.position.y=15,s.castShadow=!0;const r=new i.Mesh(new i.SphereGeometry(.75,12,12),new i.MeshStandardMaterial({color:le.warn_orange,emissive:le.warn_orange,emissiveIntensity:.85}));return r.position.y=30.3,r.name="flareTip",n.add(s,r),n.userData={kind:"flare",id:e,pickable:!0,tip:r,tipLocalY:30.3},s.userData=n.userData,r.userData=n.userData,n}function Lr(i,{length:e=40,bandColors:t=[le.H2,le.substrate],h2Indices:n=[0]}={}){const s=xt(i),r=new i.Group;r.name="pipeRack";const o=Math.max(2,Math.floor(e/8));for(let c=0;c<=o;c++){const h=-e/2+c/o*e,f=new i.Mesh(new i.BoxGeometry(.45,6.5,.45),s.metalDark);f.position.set(h,3.25,0),f.castShadow=!0;const u=new i.Mesh(new i.BoxGeometry(.4,.35,4.5),s.metal);u.position.set(h,6.4,0);const d=new i.Mesh(new i.BoxGeometry(.25,1.8,.25),s.metalLite);d.position.set(h,5.2,1.6),r.add(f,u,d)}t.forEach((c,h)=>{const f=n.includes(h)||String(c).toLowerCase()===le.H2.toLowerCase(),u=String(c).toLowerCase()===le.N2.toLowerCase(),d=s.metal.clone(),m=new i.Mesh(new i.CylinderGeometry(.3,.3,e,12),d);m.rotation.z=Math.PI/2,m.position.set(0,6.85+h*.75,(h-(t.length-1)/2)*1),m.castShadow=!0,r.add(m);let y;f?(y=s.h2Band.clone(),y.color.set(le.H2)):u?(y=s.n2Band.clone(),y.color.set(le.N2)):y=new i.MeshStandardMaterial({color:c,metalness:.5,roughness:.38,envMapIntensity:1,emissive:0,emissiveIntensity:0});for(const g of[-e*.28,e*.28]){const p=new i.Mesh(new i.CylinderGeometry(.36,.36,.48,14),y);p.rotation.z=Math.PI/2,p.position.set(g,m.position.y,m.position.z),p.castShadow=!0,r.add(p)}for(const g of[-e*.25,e*.25]){const p=new i.Mesh(new i.CylinderGeometry(.48,.48,.18,14),s.metalLite);p.rotation.z=Math.PI/2,p.position.set(g,m.position.y,m.position.z),r.add(p)}});const a=new i.Mesh(new i.BoxGeometry(.9,.9,.9),s.metalDark);a.position.set(0,6.85,0);const l=new i.Mesh(new i.TorusGeometry(.55,.08,8,16),s.warn);return l.position.set(0,7.7,0),r.add(a,l),r.userData.leakAnchor=new i.Vector3(0,7.2,0),r}function La(i,{id:e="valves"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.BoxGeometry(6,.4,3.2),t.metalDark);s.position.y=.2,n.add(s);for(let o=0;o<3;o++){const a=new i.Mesh(new i.CylinderGeometry(.35,.35,1.4,12),t.metal);a.position.set(-1.6+o*1.6,1.2,0);const l=new i.Mesh(new i.TorusGeometry(.4,.06,8,14),t.warn);l.rotation.x=Math.PI/2,l.position.set(-1.6+o*1.6,2.1,0);const c=new i.Mesh(new i.SphereGeometry(.18,10,10),new i.MeshStandardMaterial({color:o===0?le.N2:le.safe_green,emissive:o===0?le.N2:le.safe_green,emissiveIntensity:.6}));c.position.set(-1.6+o*1.6,2.55,0),n.add(a,l,c)}const r=Mn(i,1.2,.6,le.N2);return r.scale.set(1,.4,1),r.position.set(0,.55,1.2),n.add(r),n.userData={kind:"valves",id:e,pickable:!0},s.userData=n.userData,n}function Sb(i,{id:e="H10"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.CylinderGeometry(.1,.12,3.6,8),t.metalDark);s.position.y=1.8;const r=new i.Mesh(new i.BoxGeometry(.15,1.6,.8),t.metalLite);r.position.set(.25,3,0);const o=new i.Mesh(new i.BoxGeometry(1.15,1.55,.55),new i.MeshStandardMaterial({color:12959920,metalness:.45,roughness:.55,envMapIntensity:.85}));o.position.set(.85,3.15,0),o.castShadow=!0;function a(p,x,_,v=.15){const T=new i.Mesh(new i.SphereGeometry(.1,10,10),new i.MeshStandardMaterial({color:_,emissive:_,emissiveIntensity:v}));return T.position.set(p,x,.3),T}const l=a(.55,3.55,16777215,.35),c=a(.85,3.25,le.warn_orange,.05),h=a(1.15,3.25,le.danger_red,.05),f=new i.Mesh(new i.BoxGeometry(.85,.95,.55),new i.MeshStandardMaterial({color:6976384,metalness:.72,roughness:.4,envMapIntensity:1.05}));f.position.set(2,3.1,0),f.castShadow=!0;const u=new i.Mesh(new i.BoxGeometry(.7,.7,.06),new i.MeshStandardMaterial({color:11581636,metalness:.8,roughness:.28,envMapIntensity:1.15}));u.position.set(2,3.15,.3);const d=new i.Mesh(new i.CylinderGeometry(.22,.22,.12,14),new i.MeshStandardMaterial({color:14541802,metalness:.85,roughness:.22,envMapIntensity:1.2}));d.rotation.x=Math.PI/2,d.position.set(2,3.05,.38);const m=new i.Mesh(new i.CircleGeometry(.12,12),new i.MeshStandardMaterial({color:le.safe_green,emissive:le.safe_green,emissiveIntensity:.75}));m.position.set(2,3.45,.34);const y=new i.Mesh(new i.BoxGeometry(1.4,.4,.05),new i.MeshStandardMaterial({color:6976384,metalness:.65,roughness:.42,envMapIntensity:.95}));y.position.set(1.3,2.15,.2);const g=new i.Mesh(new i.CylinderGeometry(.04,.04,.9,6),new i.MeshStandardMaterial({color:5592405,metalness:.35,roughness:.7,envMapIntensity:.6}));return g.rotation.z=Math.PI/2,g.position.set(1.4,3.1,0),n.add(s,r,o,l,c,h,f,u,d,m,y,g),n.userData={kind:"probe",id:e,pickable:!0,lens:m,lampWarn:c,lampAlarm:h},o.userData=n.userData,f.userData=n.userData,n}function wb(i,{h:e=11,r:t=3.3,bandColor:n=le.HF,id:s="F01"}={}){const r=xt(i),o=Ln(i,{h:e,r:t,bandColor:n,id:s}),a=new i.Mesh(new i.BoxGeometry(t*5.2,1.1,t*5.2),r.concrete);a.position.y=.55;const l=new i.Mesh(new i.BoxGeometry(t*4.4,.15,t*4.4),new i.MeshStandardMaterial({color:6976384,metalness:.05,roughness:.92,envMapIntensity:.35}));l.position.y=.12;const c=La(i,{id:s+"-cut"});c.scale.set(.55,.55,.55),c.position.set(t+2.2,0,0);const h=new i.Mesh(new i.BoxGeometry(1.6,.45,.06),new i.MeshStandardMaterial({color:le.HF,emissive:le.HF,emissiveIntensity:.05,metalness:.45,roughness:.42,envMapIntensity:.95}));return h.position.set(0,e*.35+.8,t+.2),o.add(a,l,c,h),o.userData.kind="bundTank",o}function Ab(i,{h:e=16,r:t=3.4,id:n="F04"}={}){const s=xt(i),r=new i.Group;r.name=n;const o=new i.Mesh(new i.CylinderGeometry(t,t,e,28),s.metal.clone());o.position.y=e/2+1,o.castShadow=!0,o.receiveShadow=!0;const a=new i.Mesh(new i.SphereGeometry(t,24,14,0,Math.PI*2,0,Math.PI/2),s.metal);a.position.y=e+1;const l=new i.Mesh(new i.CylinderGeometry(t+.35,t+.35,e*.55,28),s.metalDark);l.position.y=e*.4+1;const c=new i.Mesh(new i.CylinderGeometry(t*.9,t*1.1,1.2,20),s.concrete);c.position.y=.6;const h=new i.Mesh(new i.BoxGeometry(2.2,1.6,2.2),s.metalDark);h.position.y=e+1+t*.55+1.2;const f=new i.Mesh(new i.CylinderGeometry(.7,.7,1.4,16),s.metalLite);f.position.y=h.position.y+1.4;const u=new i.Mesh(new i.CylinderGeometry(.85,.85,.35,16),s.metalLite);u.rotation.x=Math.PI/2,u.position.set(t*.15,e+1+t*.35,t*.55);for(let x=0;x<3;x++){const _=new i.Mesh(new i.CylinderGeometry(.35,.35,1.6,10),s.metalDark);_.rotation.z=Math.PI/2,_.position.set(-(t+.8),4+x*2.2,0),r.add(_)}const d=Mn(i,t,e*.55+1,le.HF),m=new i.Mesh(new i.CylinderGeometry(t*.92,t*.92,e*.92,28),new i.MeshPhysicalMaterial({color:4114656,metalness:.05,roughness:.18,clearcoat:.85,clearcoatRoughness:.12,envMapIntensity:1.35,transparent:!0,opacity:0,side:i.DoubleSide}));m.position.y=e/2+1,m.visible=!1,m.name="lining";const y=new i.Mesh(new i.CylinderGeometry(.18,.18,e*.7,10),s.metalLite);y.position.y=e*.45+1,y.visible=!1;const g=new i.Mesh(new i.BoxGeometry(t*1.4,.18,.55),s.warn);g.position.y=3.2,g.visible=!1;const p=new i.Mesh(new i.PlaneGeometry(t*1.9,e*.9),new i.MeshStandardMaterial({color:3142655,emissive:3142655,emissiveIntensity:.2,metalness:.2,roughness:.35,envMapIntensity:.8,transparent:!0,opacity:0,side:i.DoubleSide}));return p.position.set(0,e/2+1,0),p.visible=!1,r.add(c,o,l,a,h,f,u,d,m,y,g,p),r.userData={kind:"glassLinedReactor",id:n,pickable:!0,cutawayTarget:o,lining:m,shaft:y,blade:g,cutPlane:p,jacket:l},o.userData=r.userData,r}function Cb(i,{h:e=18,r:t=2.6,id:n="F07"}={}){const s=xt(i),r=new i.Group;r.name=n;const o=new i.Mesh(new i.CylinderGeometry(t*1.15,t*1.25,e*.35,24),s.metal);o.position.y=e*.175+.6,o.castShadow=!0;const a=new i.Mesh(new i.CylinderGeometry(t*.85,t,e*.6,24),s.metalDark);a.position.y=e*.35+e*.3+.6,a.castShadow=!0;const l=new i.Mesh(new i.SphereGeometry(t*.85,18,12,0,Math.PI*2,0,Math.PI/2),s.metalLite);l.position.y=e*.95+.6;const c=new i.Mesh(new i.TorusGeometry(t*.7,.12,8,20),new i.MeshStandardMaterial({color:le.coolant||"#6ec8ff",metalness:.55,roughness:.38,envMapIntensity:1,emissive:7260415,emissiveIntensity:.04}));c.rotation.x=Math.PI/2,c.position.y=e*.72,c.visible=!1,c.name="spray";const h=new i.Mesh(new i.CylinderGeometry(t*.78,t*.78,e*.28,16),new i.MeshStandardMaterial({color:4872814,metalness:.4,roughness:.55,envMapIntensity:.7,transparent:!0,opacity:.55,wireframe:!0}));h.position.y=e*.48,h.visible=!1;const f=Mn(i,t*1.05,e*.28+.6,le.HF),u=new i.Mesh(new i.CylinderGeometry(.55,.55,.25,14),s.metalLite);u.rotation.x=Math.PI/2,u.position.set(0,e*.4,t*1.05);const d=Ln(i,{h:7,r:1.8,bandColor:11057352,id:n+"-alkali"});d.position.set(t+5.5,0,0),d.scale.set(.85,.85,.85);const m=new i.Mesh(new i.CylinderGeometry(t*1.1,t*1.2,.8,16),s.concrete);return m.position.y=.4,r.add(m,o,a,l,c,h,f,u,d),r.userData={kind:"scrubber",id:n,pickable:!0,spray:c,pack:h,cutawayTarget:a},o.userData=r.userData,a.userData=r.userData,r}function Tb(i,{radius:e=4.5,id:t="F08"}={}){const n=xt(i),s=new i.Group;s.name=t;const r=new i.Mesh(new i.TorusGeometry(e,.16,8,32),n.metalDark);r.rotation.x=Math.PI/2,r.position.y=5.5;for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=new i.Mesh(new i.ConeGeometry(.18,.45,8),n.metalLite);h.position.set(Math.cos(c)*e,5.2,Math.sin(c)*e),h.rotation.x=Math.PI,s.add(h)}for(const l of[0,Math.PI/2,Math.PI,Math.PI*1.5]){const c=new i.Mesh(new i.CylinderGeometry(.14,.18,5.5,8),n.metalDark);c.position.set(Math.cos(l)*e,2.75,Math.sin(l)*e),s.add(c)}const o=new i.Mesh(new i.BoxGeometry(2.4,2,1.4),n.metal);o.position.set(e+2.5,1.1,0);const a=new i.Mesh(new i.TorusGeometry(.45,.07,8,14),n.warn);return a.position.set(e+2.5,2.3,.75),s.add(r,o,a),s.userData={kind:"deluge",id:t,pickable:!0,ring:r},r.userData=s.userData,o.userData=s.userData,s}function Pb(i,{id:e="F10"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.BoxGeometry(3.4,2.8,1.5),t.metalDark);s.position.y=1.5,s.castShadow=!0;const r=new i.Mesh(new i.BoxGeometry(3,2.4,.08),new i.MeshStandardMaterial({color:6976384,metalness:.72,roughness:.4,envMapIntensity:1.05}));r.position.set(0,1.5,.78);const o=new i.Mesh(new i.CylinderGeometry(.42,.48,.35,20),new i.MeshStandardMaterial({color:le.danger_red,emissive:le.danger_red,emissiveIntensity:.65}));o.rotation.x=Math.PI/2,o.position.set(0,1.7,.95);const a=new i.Mesh(new i.TorusGeometry(.55,.06,8,20),new i.MeshStandardMaterial({color:16772744,emissive:16755200,emissiveIntensity:.4}));a.position.copy(o.position),a.position.z+=.02;const l=new i.Mesh(new i.BoxGeometry(3.8,.2,2),t.concrete);return l.position.y=.1,n.add(l,s,r,o,a),n.userData={kind:"esd",id:e,pickable:!0,btn:o},s.userData=n.userData,o.userData=n.userData,n}function Ib(i,{id:e="F2"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.BoxGeometry(8,.3,2.2),t.metalDark);s.position.y=.15,n.add(s);for(let o=0;o<5;o++){const a=new i.Mesh(new i.CylinderGeometry(.35,.38,3.2,14),new i.MeshStandardMaterial({color:8029328,metalness:.78,roughness:.36,envMapIntensity:1.1}));a.position.set(-3+o*1.5,1.75,0);const l=new i.Mesh(new i.CylinderGeometry(.12,.18,.5,10),t.metalLite);l.position.set(-3+o*1.5,3.55,0);const c=Mn(i,.38,2.2,le.F2);c.position.x=-3+o*1.5,c.position.z=0,n.add(a,l,c)}const r=new i.Mesh(new i.BoxGeometry(1.8,1.8,.08),new i.MeshStandardMaterial({color:le.danger_red,emissive:le.danger_red,emissiveIntensity:.12,metalness:.35,roughness:.45,envMapIntensity:.8}));return r.position.set(0,2.2,1.3),n.add(r),n.visible=!1,n.userData={kind:"f2rack",id:e,pickable:!0},n}function wd(i,{h:e=9,r:t=3.6,id:n="D01",jacketColor:s=le.coolant}={}){const r=xt(i),o=new i.Group;o.name=n;const a=new i.Mesh(new i.CylinderGeometry(t,t*1.05,e,28),r.metal);a.position.y=e/2+.9,a.castShadow=!0;const l=new i.Mesh(new i.SphereGeometry(t,22,12,0,Math.PI*2,0,Math.PI/2),r.metal);l.position.y=e+.9;const c=new i.Mesh(new i.CylinderGeometry(t*.85,t*1.05,1,18),r.concrete);c.position.y=.5;const h=new i.Mesh(new i.CylinderGeometry(t+.45,t+.5,e*.7,28),new i.MeshPhysicalMaterial({color:s,metalness:.35,roughness:.42,transparent:!0,opacity:.48,envMapIntensity:1.05,clearcoat:.25,clearcoatRoughness:.4,emissive:s,emissiveIntensity:.04}));h.position.y=e*.4+.9,h.name="jacket";const f=new i.Mesh(new i.CylinderGeometry(.28,.28,3.2,10),new i.MeshStandardMaterial({color:s,emissive:s,emissiveIntensity:.04,metalness:.62,roughness:.36,envMapIntensity:1.05}));f.rotation.z=Math.PI/2,f.position.set(-(t+1.8),e*.25+.9,0);const u=f.clone();u.position.set(t+1.8,e*.55+.9,0);const d=new i.Mesh(new i.BoxGeometry(1.8,1.2,1.8),r.metalDark);d.position.y=e+.9+t*.4+.9;const m=new i.Mesh(new i.CylinderGeometry(.55,.55,1.1,14),r.metalLite);m.position.y=d.position.y+1.05;const y=new i.Mesh(new i.CylinderGeometry(.14,.14,e*.65,8),r.metalLite);y.position.y=e*.45+.9,y.visible=!1;const g=new i.Mesh(new i.BoxGeometry(t*1.2,.15,.4),r.warn);g.position.y=2.8,g.visible=!1;const p=new i.Mesh(new i.CylinderGeometry(.12,.12,2.4,8),r.metalLite);p.position.set(t*.55,e+.5,t*.35);const x=new i.Mesh(new i.CylinderGeometry(.22,.28,1.4,10),r.metalDark);x.position.set(-t*.4,e+.9+t*.55,0);const _=Mn(i,t,e*.45+.9,le.diazonium),v=new i.Mesh(new i.TorusGeometry(t+.15,.18,8,24),new i.MeshStandardMaterial({color:s,emissive:s,emissiveIntensity:.12,metalness:.4,roughness:.4,envMapIntensity:.9,transparent:!0,opacity:0}));return v.rotation.x=Math.PI/2,v.position.y=e*.4+.9,v.visible=!1,v.name="jacketChannel",o.add(c,a,h,l,d,m,y,g,p,x,_,f,u,v),o.userData={kind:"jacketedKettle",id:n,pickable:!0,cutawayTarget:a,jacket:h,shaft:y,blade:g,channel:v},a.userData=o.userData,o}function Eb(i,{id:e="D03"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.BoxGeometry(10,.25,6),t.concrete);s.position.y=.12;const r=new i.Mesh(new i.BoxGeometry(8.5,3.6,5.2),t.metalDark);r.position.y=2,r.castShadow=!0;const o=new i.Mesh(new i.BoxGeometry(7.8,1.6,.12),new i.MeshStandardMaterial({color:6976384,metalness:.7,roughness:.45,envMapIntensity:.95}));o.position.set(0,2.4,2.65);const a=new i.Mesh(new i.CylinderGeometry(.32,.32,6,12),new i.MeshStandardMaterial({color:le.coolant,emissive:le.coolant,emissiveIntensity:.04,metalness:.6,roughness:.36,envMapIntensity:1.05}));a.rotation.z=Math.PI/2,a.position.set(5.5,2.2,0);const l=new i.Mesh(new i.CylinderGeometry(1.1,1.1,.35,16),t.metalLite);return l.rotation.x=Math.PI/2,l.position.set(-2.2,3.6,0),n.add(s,r,o,a,l),n.userData={kind:"chiller",id:e,pickable:!0},r.userData=n.userData,n}function Ad(i,{h:e=4.5,r:t=1.5,bandColor:n=le.nitrite,id:s="D02"}={}){const r=xt(i),o=Ln(i,{h:e,r:t,bandColor:n,id:s});for(const[l,c]of[[-1.2,-1.2],[1.2,-1.2],[-1.2,1.2],[1.2,1.2]]){const h=new i.Mesh(new i.BoxGeometry(.25,4.5,.25),r.metalDark);h.position.set(l,2.25,c),o.add(h)}const a=new i.Mesh(new i.TorusGeometry(.35,.06,8,12),r.warn);return a.position.set(0,.8,t+.6),o.add(a),o.userData.kind="headTank",o}function Db(i,{id:e="D06",r:t=4.2,h:n=3.2}={}){const s=xt(i),r=new i.Group;r.name=e;const o=new i.Mesh(new i.CylinderGeometry(t,t*1.05,n,24,1,!0),s.metalDark);o.position.y=n/2+.2;const a=new i.Mesh(new i.CircleGeometry(t*.98,24),s.concrete);a.rotation.x=-Math.PI/2,a.position.y=.22;const l=new i.Mesh(new i.CylinderGeometry(t*.92,t*.92,.8,24),new i.MeshPhysicalMaterial({color:le.coolant,transparent:!0,opacity:.5,metalness:.05,roughness:.12,envMapIntensity:1.2,clearcoat:.6,clearcoatRoughness:.2,emissive:le.coolant,emissiveIntensity:.03}));l.position.y=.7;const c=Mn(i,t,n*.55,le.coolant);return r.add(o,a,l,c),r.userData={kind:"quench",id:e,pickable:!0},o.userData=r.userData,r}function Lb(i,{id:e="D07"}={}){const t=xt(i),n=new i.Group;n.name=e;const s=new i.Mesh(new i.CylinderGeometry(.45,.55,1.2,12),t.metal);s.position.y=.7;const r=new i.Mesh(new i.CylinderGeometry(.25,.25,.8,10),t.warn);r.position.y=1.6;const o=new i.Mesh(new i.CylinderGeometry(.22,.28,6,10),t.metalDark);return o.position.y=4.5,n.add(s,r,o),n.userData={kind:"relief",id:e,pickable:!0},s.userData=n.userData,n}function Rb(i,e=220){const t=new i.Group;t.name="streetLights";const n=new i.MeshStandardMaterial({color:5924208,metalness:.82,roughness:.36,envMapIntensity:1.1}),s=new i.MeshStandardMaterial({color:2764340,metalness:.65,roughness:.35,envMapIntensity:.9,emissive:16765600,emissiveIntensity:4.62}),r=n,o=document.createElement("canvas");o.width=o.height=256;const a=o.getContext("2d"),l=a.createRadialGradient(128,128,0,128,128,128);l.addColorStop(0,"rgba(255, 232, 200, 0.48)"),l.addColorStop(.35,"rgba(255, 210, 160, 0.22)"),l.addColorStop(1,"rgba(255, 200, 140, 0)"),a.fillStyle=l,a.fillRect(0,0,256,256);const c=new i.CanvasTexture(o);c.colorSpace=i.SRGBColorSpace;const h=new i.MeshBasicMaterial({map:c,transparent:!0,opacity:.51,depthWrite:!1,blending:i.AdditiveBlending,fog:!1}),f=new i.CylinderGeometry(.07,.11,1,8),u=new i.BoxGeometry(.7,.14,.32),d=new i.BoxGeometry(1.1,.07,.07),m=new i.PlaneGeometry(1,1);m.rotateX(-Math.PI/2);const y=[-e*.12,e*.18],g=e*.08,p=5.2,x=5.2,_=12,v=4,T=[];for(let I=0;I<y.length;I++){const N=y[I];for(let R=-e*.38;R<=e*.38+.01;R+=_)for(const O of[-1,1]){const G=O>0?0:_*.5,B=R+G;B<-e*.4||B>e*.4||T.push({x:B,z:N+O*v,ry:O>0?-Math.PI/2:Math.PI/2})}}const w=14;for(let I=-e*.34;I<=e*.32+.01;I+=w)for(const N of[-1,1]){const R=N>0?0:w*.5,O=I+R;O<-e*.36||O>e*.34||T.push({x:g+N*v,z:O,ry:N>0?Math.PI:0})}const S=T.slice(0,36);let P=0;const b=12,M=[];for(let I=0;I<S.length;I++){const{x:N,z:R,ry:O}=S[I],G=new i.Mesh(f,n);G.scale.set(1,p,1),G.position.set(N,p/2,R),G.castShadow=!1,t.add(G);const B=N+Math.cos(O)*.95,k=R-Math.sin(O)*.95,z=new i.Mesh(d,r);z.position.set((N+B)/2,p,(R+k)/2),z.rotation.y=O,t.add(z);const j=new i.Mesh(u,s);j.position.set(B,p-.02,k),j.rotation.y=O,t.add(j);const ce=new i.Mesh(m,h);if(ce.position.set(B,.06,k),ce.scale.set(x,1,x*.9),t.add(ce),P<b&&I%2===0){const U=new i.PointLight(16767152,.97,22,2);U.position.set(B,p-.3,k),t.add(U),M.push(U),P+=1}}return t.userData.env={headMat:s,poolMat:h,poleMat:n,lights:M},t}function Ub(i,e=220){const t=new i.Group;t.name="roadTraffic";const n=new i.MeshStandardMaterial({color:9081760,metalness:.78,roughness:.34,envMapIntensity:1.15}),s=new i.MeshStandardMaterial({color:11582150,metalness:.85,roughness:.28,envMapIntensity:1.25}),r=new i.MeshStandardMaterial({color:6976384,metalness:.72,roughness:.4,envMapIntensity:1.05}),o=new i.MeshStandardMaterial({color:1711136,metalness:.35,roughness:.72,envMapIntensity:.55}),a=new i.MeshStandardMaterial({color:12868114,metalness:.6,roughness:.38,envMapIntensity:1,emissive:12868114,emissiveIntensity:.04}),l=new i.MeshStandardMaterial({color:16773840,metalness:.2,roughness:.25,emissive:16769192,emissiveIntensity:3.4,envMapIntensity:.3});function c({scale:v=1,bedColor:T=6976384}={}){const w=new i.Group;w.name="truck";const S=r.clone();S.color.setHex(T);const P=new i.Mesh(new i.BoxGeometry(4.4,.35,1.7),n);P.position.y=.55,P.castShadow=!0;const b=new i.Mesh(new i.BoxGeometry(1.35,1.15,1.65),s);b.position.set(-1.35,1.25,0),b.castShadow=!0;const M=new i.Mesh(new i.BoxGeometry(.08,.55,1.35),new i.MeshStandardMaterial({color:9357544,metalness:.9,roughness:.12,envMapIntensity:1.4,transparent:!0,opacity:.55}));M.position.set(-2,1.35,0);const I=new i.Mesh(new i.BoxGeometry(2.6,1.05,1.6),S);I.position.set(.7,1.15,0),I.castShadow=!0;const N=new i.Mesh(new i.BoxGeometry(2.62,.12,1.62),a);N.position.set(.7,.72,0);const R=new i.CylinderGeometry(.38,.38,.28,12),O=[];for(const[ce,U]of[[-1.4,.85],[-1.4,-.85],[1.35,.85],[1.35,-.85],[.35,.85],[.35,-.85]]){const re=new i.Mesh(R,o);re.rotation.z=Math.PI/2,re.position.set(ce,.38,U),re.castShadow=!0,O.push(re),w.add(re)}const G=new i.BoxGeometry(.12,.16,.28),B=new i.Mesh(G,l);B.position.set(-2.05,.95,.52);const k=new i.Mesh(G,l);k.position.set(-2.05,.95,-.52),w.add(P,b,M,I,N,B,k);const z=new i.SpotLight(16770752,4.2,38,Math.PI/7,.42,1.35);z.position.set(-2.15,1.05,0),z.castShadow=!1;const j=new i.Object3D;return j.position.set(-16,.15,0),w.add(z),w.add(j),z.target=j,w.scale.setScalar(v),w.userData.wheels=O,w.userData.headlight=z,w.userData.headlightTarget=j,w}const h=[-e*.12,e*.18],f=e*.08,u=-e*.4,d=e*.4,m=-e*.34,y=e*.32,g=[{axis:"x",z:h[0]-1.6,dir:1,speed:9.5,x0:u+8,color:6976384,scale:1.05},{axis:"x",z:h[0]+1.6,dir:-1,speed:8.2,x0:d-20,color:5924984,scale:.95},{axis:"x",z:h[1]-1.5,dir:1,speed:7.8,x0:u+35,color:8021104,scale:1},{axis:"x",z:h[1]+1.5,dir:-1,speed:10.2,x0:d-5,color:4872808,scale:1.1},{axis:"z",x:f-1.55,dir:1,speed:8.6,z0:m+12,color:6846600,scale:.98},{axis:"z",x:f+1.55,dir:-1,speed:9.1,z0:y-18,color:7366744,scale:1.02}];function p(v,T){return v==="x"?T>0?Math.PI:0:T>0?Math.PI/2:-Math.PI/2}const x=new i.Vector3,_=[];for(const v of g){const T=c({scale:v.scale,bedColor:v.color});v.axis==="x"?T.position.set(v.x0,0,v.z):T.position.set(v.x,0,v.z0),T.rotation.y=p(v.axis,v.dir),t.add(T),T.userData.headlightTarget&&t.add(T.userData.headlightTarget),_.push({truck:T,...v})}return t.userData.update=v=>{const T=Math.min(.05,(v||16)/1e3);for(const w of _){const{truck:S,axis:P,dir:b,speed:M}=w;P==="x"?(S.position.x+=b*M*T,b>0&&S.position.x>d&&(S.position.x=u),b<0&&S.position.x<u&&(S.position.x=d)):(S.position.z+=b*M*T,b>0&&S.position.z>y&&(S.position.z=m),b<0&&S.position.z<m&&(S.position.z=y)),S.rotation.y=p(P,b);const I=S.userData.headlight,N=S.userData.headlightTarget;if(I&&N){const O=S.rotation.y;x.set(-Math.cos(O),0,Math.sin(O)),N.position.set(S.position.x+x.x*18,.2,S.position.z+x.z*18),I.target=N,I.target.updateMatrixWorld?.()}const R=S.userData.wheels||[];for(const O of R)O.rotation.x+=b*M*T*1.8}},t.userData.fleet=_,t}function wp(i=220){const n=5.800000000000001,s=[-i*.12,i*.18],r=i*.08;return{roadW:7.2,margin:2.2,half:n,zRoads:s,xRoad:r,hitsRoad(o,a,l=0){const c=Math.max(0,l);for(const h of s)if(Math.abs(a-h)<n+c)return!0;return Math.abs(o-r)<n+c}}}function Nb(i,e=220){const t=new i.Group;t.name="safetyPatrols";const n=wp(e);function s({vest:h=16747038,hardhat:f=16769354,scale:u=1}={}){const d=new i.Group;d.name="inspector";const m=new i.Mesh(new i.CylinderGeometry(.16,.18,.22,8),new i.MeshStandardMaterial({color:2764340,roughness:.85,metalness:.1}));m.position.y=.11;const y=new i.Mesh(new i.CylinderGeometry(.11,.13,.7,8),new i.MeshStandardMaterial({color:3818832,roughness:.8,metalness:.15}));y.position.set(-.12,.55,0);const g=y.clone();g.position.x=.12;const p=new i.Mesh(new i.BoxGeometry(.55,.75,.32),new i.MeshStandardMaterial({color:h,roughness:.55,metalness:.25,emissive:h,emissiveIntensity:.08,envMapIntensity:.7}));p.position.y=1.2;const x=new i.Mesh(new i.BoxGeometry(.56,.1,.33),new i.MeshStandardMaterial({color:16773800,emissive:16773800,emissiveIntensity:.35,roughness:.5,metalness:.2}));x.position.y=1.05;const _=new i.Mesh(new i.SphereGeometry(.2,12,10),new i.MeshStandardMaterial({color:13609094,roughness:.7,metalness:.05}));_.position.y=1.72;const v=new i.Mesh(new i.SphereGeometry(.23,12,8,0,Math.PI*2,0,Math.PI/2),new i.MeshStandardMaterial({color:f,roughness:.45,metalness:.2,emissive:f,emissiveIntensity:.12}));v.position.y=1.78;const T=new i.Mesh(new i.CylinderGeometry(.28,.28,.04,12),new i.MeshStandardMaterial({color:f,roughness:.45,metalness:.2}));return T.position.y=1.78,d.add(m,y,g,p,x,_,v,T),d.scale.setScalar(u),d.userData.legs=[y,g],d}const r=e/240,o=[{pts:[[-52*r,-12*r],[-30*r,-12*r],[-30*r,4*r],[-52*r,4*r]],speed:1.55,vest:16747038,phase:0},{pts:[[-6*r,-12*r],[8*r,-12*r],[8*r,6*r],[-6*r,6*r]],speed:1.35,vest:16761095,phase:.35,hardhat:16777215},{pts:[[28*r,-10*r],[48*r,-10*r],[48*r,10*r],[28*r,10*r]],speed:1.7,vest:16747038,phase:.7},{pts:[[56*r,-14*r],[72*r,-14*r],[72*r,6*r],[56*r,6*r]],speed:1.25,vest:3066993,phase:.15,hardhat:16769354}],a=[];for(const h of o){const f=h.pts.filter(([d,m])=>!n.hitsRoad(d,m,.8));if(f.length<2)continue;const u=s({vest:h.vest,hardhat:h.hardhat??16769354,scale:1.05});t.add(u),a.push({fig:u,pts:f,speed:h.speed,dist:h.phase*l(f),stride:0})}function l(h){let f=0;for(let u=0;u<h.length;u++){const d=h[u],m=h[(u+1)%h.length];f+=Math.hypot(m[0]-d[0],m[1]-d[1])}return f}function c(h,f){const u=l(h);let d=(f%u+u)%u;for(let y=0;y<h.length;y++){const g=h[y],p=h[(y+1)%h.length],x=Math.hypot(p[0]-g[0],p[1]-g[1]);if(d<=x){const _=x>1e-6?d/x:0;return{x:g[0]+(p[0]-g[0])*_,z:g[1]+(p[1]-g[1])*_,yaw:Math.atan2(p[0]-g[0],p[1]-g[1])}}d-=x}const m=h[0];return{x:m[0],z:m[1],yaw:0}}return t.userData.update=h=>{const f=Math.min(.05,(h||16)/1e3);for(const u of a){u.dist+=u.speed*f;const d=c(u.pts,u.dist);if(n.hitsRoad(d.x,d.z,.5))continue;u.fig.position.set(d.x,0,d.z),u.fig.rotation.y=d.yaw,u.stride+=f*u.speed*4.5;const m=u.fig.userData.legs||[];m[0]&&(m[0].rotation.x=Math.sin(u.stride)*.45),m[1]&&(m[1].rotation.x=Math.sin(u.stride+Math.PI)*.45)}},t.userData.agents=a,t.userData.roads=n,t}function Ah(i,e=220){const t=new i.Group;t.name="ground";const n=new i.Mesh(new i.PlaneGeometry(e*4.5,e*4.5),new i.MeshStandardMaterial({color:3417860,roughness:.47,metalness:0}));n.rotation.x=-Math.PI/2,n.position.y=-.05,n.receiveShadow=!0,t.add(n);const s=xd();s.repeat.set(Math.max(10,e/16),Math.max(8,e/20)),s.needsUpdate=!0;const r=new i.MeshStandardMaterial({color:4143670,map:s,roughness:.81,metalness:.04,emissive:1711652,emissiveIntensity:.04}),o=new i.Mesh(new i.PlaneGeometry(e*.95,e*.78),r);o.rotation.x=-Math.PI/2,o.position.set(0,0,-e*.04),o.receiveShadow=!0,t.add(o);const a=Md();a.repeat.set(Math.max(20,e/6),2),a.needsUpdate=!0;const l=Md();l.repeat.set(2,Math.max(16,e/8)),l.needsUpdate=!0;const c=new i.MeshStandardMaterial({color:3817029,map:a,roughness:.56,metalness:.1}),h=new i.MeshStandardMaterial({color:3817029,map:l,roughness:.56,metalness:.1}),f=new i.MeshBasicMaterial({color:15263968}),u=new i.MeshStandardMaterial({color:10133672,roughness:1,metalness:.04,emissive:1843238,emissiveIntensity:.95}),d=new i.PlaneGeometry(3,.15);d.rotateX(-Math.PI/2);const m=new i.PlaneGeometry(.15,3);m.rotateX(-Math.PI/2);const y=7.2,g=[-e*.12,e*.18];for(const I of g){const N=new i.Mesh(new i.PlaneGeometry(e*.9,y),c);N.rotation.x=-Math.PI/2,N.position.set(0,.03,I),N.receiveShadow=!0,t.add(N);for(let R=-e*.42;R<e*.42;R+=6){const O=new i.Mesh(d,f);O.position.set(R,.05,I),t.add(O)}for(const R of[-1,1]){const O=new i.Mesh(new i.BoxGeometry(e*.9,.22,.28),u);O.position.set(0,.11,I+R*(y*.5+.12)),O.receiveShadow=!0,t.add(O)}}const p=e*.08;{const I=new i.Mesh(new i.PlaneGeometry(y,e*.72),h);I.rotation.x=-Math.PI/2,I.position.set(p,.032,-e*.02),I.receiveShadow=!0,t.add(I);for(let N=-e*.32;N<e*.32;N+=6){const R=new i.Mesh(m,f);R.position.set(p,.05,N),t.add(R)}for(const N of[-1,1]){const R=new i.Mesh(new i.BoxGeometry(.28,.22,e*.72),u);R.position.set(p+N*(y*.5+.12),.11,-e*.02),R.receiveShadow=!0,t.add(R)}}const x=new i.MeshBasicMaterial({color:13214247,transparent:!0,opacity:.45});for(const I of[-e*.22,e*.28]){const N=new i.Mesh(new i.PlaneGeometry(e*.55,.28),x);N.rotation.x=-Math.PI/2,N.position.set(0,.055,I),t.add(N)}const _=wp(e),v=xd();v.repeat.set(6,6),v.needsUpdate=!0;const T=new i.MeshStandardMaterial({color:10134186,map:v,roughness:.59,metalness:.03,emissive:2237996,emissiveIntensity:1.4}),w=e/240,S=[[-40*w,-6*w,36*w,20*w],[0*w,-4*w,20*w,20*w],[42*w,0*w,28*w,24*w],[66*w,-4*w,24*w,24*w]];for(const[I,N,R,O]of S){_.hitsRoad(I,N,Math.min(R,O)*.15)&&console.warn("[ground] unit pad center hits road corridor",I,N);const G=new i.Mesh(new i.BoxGeometry(R,.06,O),T);G.position.set(I,.03,N),G.receiveShadow=!0,t.add(G)}const P=Rb(i,e);t.add(P);const b=Ub(i,e);t.add(b);const M=Nb(i,e);return t.add(M),t.userData.env={outerMat:n.material,padMat:r,asphaltMats:[c,h],unitMat:T,curbMat:u,street:P.userData.env},t.userData.traffic=b,t.userData.patrols=M,t.userData.roads=_,t}function Fb(i,{process:e,processes:t,onStep:n,onPlay:s,onCutaway:r,onAlarm:o,onReset:a,onProcessChange:l,onDemo:c,onCardBack:h}){const f=(e.legend||[]).map(U=>{const re=U.color||"#fff",$=/^#f[4-9a-f]f?[4-9a-f]f?[4-9a-b]/i.test(re)||re.toLowerCase()==="#ffffff"?"box-shadow:inset 0 0 0 1px rgba(255,255,255,.85),0 0 0 1px rgba(180,200,220,.35);":"";return`<span><i style="background:${re};${$}"></i>${U.label}</span>`}).join(""),u=(e.flowNodes||[]).map((U,re)=>`<span class="nd" data-fi="${re}">${U}</span>`).join('<span class="ar">›</span>');i.innerHTML=`
    <div class="pswitch" id="pswitch"></div>
    <div class="tag"><i></i>重点监管危险化工工艺<span class="badge-teach">教学示意</span></div>
    <div class="chap" id="chap"><em>步骤 0</em> · —<small> / — 步</small></div>
    <div class="safety-badge" id="sbadge"><span class="dot"></span><span id="sbadgeTxt">安全等级 · 正常</span></div>
    <div class="cold-badge" id="coldBadge" hidden><span class="dot"></span><span id="coldBadgeTxt">低温单元 · 0～5 ℃</span></div>
    <div class="hint">拖动旋转 · 滚轮缩放 · 点击设备查看知识卡 · ←→ 切换步骤</div>
    <div class="title" id="title">${e.title||""}</div>
    <div class="eq glass" id="eq">
      <span id="eqRxn">${e.reactionHtml||""}</span>
      <span class="dh" id="eqDh">${e.dh||""}</span>
    </div>
    <div class="rail glass" id="rail"><div class="hd">课时步骤</div></div>
    <div class="sfbtn" id="sfbtn">⚠ 报警演示</div>
    <div class="lel glass" id="lel">
      <div class="k">可燃气体 · %LEL</div>
      <div class="bar" id="lelBar" style="--w:0%"><i></i></div>
      <div class="v" id="lelVal">0%<small> / 报警阈 25%LEL</small></div>
    </div>
    <div class="sfp" id="sfp">
      <div class="hd"><span id="sfpTitle">安全演示 SAFETY</span><button type="button" class="x" id="sfpClose">×</button></div>
      <div class="big" id="sfpHead">⚠ 安全演示</div>
      <div class="big alt" id="sfpSub">—</div>
      <div class="grp" id="sfpFaultGrp">故障演示（点击开启 / 关闭）</div>
      <div id="sfpFaults"></div>
      <div class="grp" id="sfpEsdGrp">应急处置</div>
      <div id="sfpEsd"></div>
      <div class="row2">
        <button type="button" id="btnSound">🔈 报警声：关</button>
        <button type="button" id="btnAllReset">全部复位</button>
      </div>
    </div>
    <div id="card">
      <div class="hd">
        <span class="cd" id="cardCode">—</span>
        <div>
          <h3 id="cardName">—</h3>
          <div class="step" id="cardStep"></div>
        </div>
        <button type="button" class="bk" id="cardBack">‹ 返回</button>
      </div>
      <div class="role" id="cardRole"></div>
      <div class="kv" id="cardKv"></div>
      <div class="why" id="cardWhy"><b>原理：</b></div>
      <div class="why w" id="cardMistake"><b>易错：</b></div>
      <button type="button" class="demo-btn" id="cardDemo">▶ 看一看</button>
    </div>
    <div class="flow glass" id="flow">
      <div class="hd">
        <span>物料流向</span>
        <span class="lg">${f}</span>
      </div>
      <div class="chain" id="chain">${u}</div>
      <div class="dock-ctrl">
        <button type="button" class="pri" id="btnPlay">▶ 播放</button>
        <button type="button" id="btnPrev">‹ 上一步</button>
        <button type="button" id="btnNext">下一步 ›</button>
        <button type="button" id="btnCut">剖视</button>
        <button type="button" class="warn" id="btnAlarmDock">⚠ 报警演示</button>
        <button type="button" id="btnReset">复位</button>
        <span class="note">${e.dockNote||"公共底栏 · 三工艺复用"}</span>
      </div>
    </div>
    <div class="stub-banner glass" id="stubBanner">
      <h4 id="stubTitle"></h4>
      <p id="stubBody"></p>
    </div>
  `;const d={pswitch:i.querySelector("#pswitch"),chap:i.querySelector("#chap"),sbadge:i.querySelector("#sbadge"),sbadgeTxt:i.querySelector("#sbadgeTxt"),coldBadge:i.querySelector("#coldBadge"),coldBadgeTxt:i.querySelector("#coldBadgeTxt"),title:i.querySelector("#title"),eqRxn:i.querySelector("#eqRxn"),eqDh:i.querySelector("#eqDh"),rail:i.querySelector("#rail"),sfbtn:i.querySelector("#sfbtn"),sfp:i.querySelector("#sfp"),sfpFaults:i.querySelector("#sfpFaults"),sfpEsd:i.querySelector("#sfpEsd"),lel:i.querySelector("#lel"),lelBar:i.querySelector("#lelBar"),lelVal:i.querySelector("#lelVal"),card:i.querySelector("#card"),cardBack:i.querySelector("#cardBack"),cardCode:i.querySelector("#cardCode"),cardName:i.querySelector("#cardName"),cardStep:i.querySelector("#cardStep"),cardRole:i.querySelector("#cardRole"),cardKv:i.querySelector("#cardKv"),cardWhy:i.querySelector("#cardWhy"),cardMistake:i.querySelector("#cardMistake"),cardDemo:i.querySelector("#cardDemo"),chain:i.querySelector("#chain"),btnPlay:i.querySelector("#btnPlay"),btnPrev:i.querySelector("#btnPrev"),btnNext:i.querySelector("#btnNext"),btnCut:i.querySelector("#btnCut"),btnAlarmDock:i.querySelector("#btnAlarmDock"),btnReset:i.querySelector("#btnReset"),stubBanner:i.querySelector("#stubBanner"),stubTitle:i.querySelector("#stubTitle"),stubBody:i.querySelector("#stubBody"),hint:i.querySelector(".hint")},y={7:{headline:"⚠ HF 泄漏 · 洗消演示",subline:"☢ 水幕/碱雾洗消 → ESD 双重切断（教室克制）",hintSafety:"泄漏→洗消→回正 · 镜头锁定泄漏点",eqSafety:"HF 泄漏示意 · 水幕/碱雾洗消 · ESD 切断",eqDhSafety:"剧毒 · 强腐蚀 · HF ≠ 安全绿"},8:{headline:"⚠ 安全演示：氢气泄漏燃爆",subline:"💥 逼近爆炸下限 · 闪爆（粒子 · 克制）",hintSafety:"事故演示镜头保持原位 · 教室克制粒子档",eqSafety:"H₂ 泄漏 → %LEL 上升 → 闪爆示意 → ESD / 火炬",eqDhSafety:"爆炸下限约 4% · 示意"},9:{headline:"⚠ 冷却失效 · 超温分解",subline:"☢ 滴加过快 · 局部热点 → 受热分解示意",hintSafety:"断冷→超温→分解放N₂→稀释回正 · 教室克制",eqSafety:"Ar–N₂⁺Cl⁻ → 分解产物 + N₂↑",eqDhSafety:"受热分解示意"}}[e.id]||{headline:"⚠ 安全演示",subline:"请配置 safetyPanel（勿默认燃爆口径）",hintSafety:"事故演示 · 教室克制",eqSafety:"安全演示（示意）",eqDhSafety:"教学示意"},g=e.safetyPanel||{},p=i.querySelector("#sfpHead"),x=i.querySelector("#sfpSub"),_=i.querySelector("#sfpTitle");_&&(_.textContent=g.title||"安全演示 SAFETY"),p&&(p.textContent=g.headline||y.headline),x&&(x.textContent=g.subline||y.subline);const v=i.querySelector("#sfpFaultGrp"),T=i.querySelector("#sfpEsdGrp");if(v&&(v.textContent=g.faultGroup||"故障演示（点击开启 / 关闭）"),T&&(T.textContent=g.esdGroup||"应急处置"),d.sfp?.classList.toggle("fluor",e.id===7),d.sfp?.classList.toggle("hydro",e.id===8),d.sfp?.classList.toggle("diaz",e.id===9),d.coldBadge){const U=e.coldBadge===!0||e.id===9;d.coldBadge.hidden=!U,U&&(d.coldBadgeTxt.textContent=e.coldBadgeLabel||"低温单元 · 0～5 ℃",d.coldBadge.classList.add("show"))}(e.showLel===!1||e.id===7)&&(d.lel.style.display="none"),(t||[]).forEach(U=>{const re=document.createElement("a");re.href=`?p=${U.id}`,re.textContent=U.short,re.dataset.id=String(U.id),re.classList.toggle("on",U.id===e.id),re.addEventListener("click",ge=>{ge.preventDefault(),U.id!==e.id&&l?.(U.id)}),d.pswitch.appendChild(re)});const w=e.alarms||[];w.filter(U=>U.group!=="esd").forEach(U=>{const re=document.createElement("button");re.type="button",re.className="it",re.dataset.id=U.id,re.innerHTML=`<span>${U.label}</span><i>●</i>`,re.addEventListener("click",()=>{[...d.sfpFaults.querySelectorAll(".it"),...d.sfpEsd.querySelectorAll(".it")].forEach(ge=>ge.classList.remove("on")),re.classList.add("on"),o?.(U.id)}),d.sfpFaults.appendChild(re)}),w.filter(U=>U.group==="esd").forEach(U=>{const re=document.createElement("button");re.type="button",re.className="it",re.dataset.id=U.id,re.innerHTML=`<span>${U.label}</span><i>●</i>`,re.addEventListener("click",()=>{[...d.sfpFaults.querySelectorAll(".it"),...d.sfpEsd.querySelectorAll(".it")].forEach(ge=>ge.classList.remove("on")),re.classList.add("on"),o?.(U.id)}),d.sfpEsd.appendChild(re)});let S=0,P=!1,b=!1,M=null;function I(U){return U==="danger"?"danger":U==="warn"?"warn":""}function N(U,re){d.sbadge.className="safety-badge "+I(U),d.sbadgeTxt.textContent=re||(U==="danger"?"安全等级 · 危险":U==="warn"?"安全等级 · 警示":"安全等级 · 正常")}function R(U){d.sfp.classList.toggle("show",U),d.sfbtn.classList.toggle("on",U),d.sfbtn.textContent=U?"⚠ 报警演示 · 开":"⚠ 报警演示"}function O(U,re){if(!re){d.lel.classList.remove("show");return}d.lel.classList.add("show");const ge=Math.max(0,Math.min(100,U));d.lelBar.style.setProperty("--w",ge+"%"),d.lelVal.innerHTML=`${ge}%<small> / 报警阈 25%LEL</small>`}function G(U,re){if(re===0&&!U.safetyMode){k(),M=null;return}const ge=U.focus,$=ge&&e.devices?e.devices[ge]:null;if($){B($,re,U);return}d.card.classList.add("show"),d.cardCode.textContent=String(re).padStart(2,"0"),d.cardName.textContent=U.name,d.cardStep.textContent=`步骤 ${re} · ${U.name}`,d.cardRole.textContent=U.sub||U.why||"";const he=U.params||[];d.cardKv.innerHTML=he.map(ne=>`<div><div class="k">${ne.k}</div><div class="v">${ne.v}${ne.u?` <small>${ne.u}</small>`:""}</div></div>`).join("")||'<div><div class="k">状态</div><div class="v" style="font-size:16px;color:var(--safe)">示意</div></div>',d.cardWhy.innerHTML=`<b>原理：</b>${U.why||"—"}`,d.cardMistake.innerHTML=`<b>易错：</b>${U.mistake||"—"}`,d.cardDemo.textContent=`▶ ${U.demoLabel||"看一看"}`,M=null}function B(U,re=S,ge=e.steps[S]){d.card.classList.add("show"),d.cardCode.textContent=U.code||"—",d.cardName.textContent=U.name||"",d.cardStep.textContent=`步骤 ${re} · ${ge?.name||""}`,d.cardRole.textContent=U.role||"";const $=U.kv||ge?.params||[];d.cardKv.innerHTML=$.map(he=>`<div><div class="k">${he.k}</div><div class="v">${he.v}${he.u?` <small>${he.u}</small>`:""}</div></div>`).join(""),d.cardWhy.innerHTML=`<b>原理：</b>${U.why||ge?.why||"—"}`,d.cardMistake.innerHTML=`<b>易错：</b>${U.mistake||ge?.mistake||"—"}`,d.cardDemo.textContent=`▶ ${U.demoLabel||ge?.demoLabel||"看一看"}`,M=U.code}function k(){d.card.classList.remove("show"),M=null,h?.()}function z(U){const re=e.steps||[];if(!re.length)return;S=(U%re.length+re.length)%re.length;const ge=re[S];d.title.textContent=e.title||"",d.eqRxn.innerHTML=e.reactionHtml||"",d.eqDh.textContent=e.dh||"",d.chap.innerHTML=`<em>步骤 ${S}</em> · ${ge.name}<small> / ${re.length} 步</small>`;const $=ge.risk||"safe";d.sbadge.className="safety-badge "+I($),d.sbadgeTxt.textContent=ge.riskLabel||"安全等级 · 正常",[...d.rail.querySelectorAll("a, .sep")].forEach(ne=>ne.remove()),re.forEach((ne,Q)=>{if(Q===re.length-1){const _e=document.createElement("div");_e.className="sep",d.rail.appendChild(_e)}const me=document.createElement("a");if(me.href="#",me.textContent=String(Q),me.dataset.n=`${Q} ${ne.name}`,Q<S&&me.classList.add("done"),Q===S&&me.classList.add("on"),ne.alarm||ne.safetyMode){const _e=document.createElement("span");_e.className="alert-dot",me.appendChild(_e)}me.addEventListener("click",_e=>{_e.preventDefault(),j(Q)}),d.rail.appendChild(me)});const he=ge.flowIndex!=null?ge.flowIndex:S;if(d.chain.querySelectorAll(".nd").forEach(ne=>{ne.classList.toggle("on",Number(ne.dataset.fi)===he)}),e.stub?(d.stubBanner.classList.add("show"),d.stubTitle.textContent=e.stubTitle||e.title,d.stubBody.textContent=e.stubBody||"入口 stub · 公共壳可演示"):d.stubBanner.classList.remove("show"),ge.safetyMode){R(!0);const ne=e.showLel===!0||e.showLel==null&&e.id===8;O(78,ne);const Q=e.safetyPanel||{};d.hint.textContent=Q.hintSafety||y.hintSafety,d.eqRxn.textContent=Q.eqSafety||y.eqSafety,d.eqDh.textContent=Q.eqDhSafety||y.eqDhSafety}else O(0,!1),d.hint.textContent="拖动旋转 · 滚轮缩放 · 点击设备查看知识卡 · ←→ 切换步骤",d.eqRxn.innerHTML=e.reactionHtml||"",d.eqDh.textContent=e.dh||"";G(ge,S),n?.(S,ge,{lockCamera:!!ge.lockCamera})}function j(U){z(U)}d.cardBack.addEventListener("click",k),d.cardDemo.addEventListener("click",()=>{const U=e.steps[S];c?.(M||U.focus,U)}),d.btnPrev.addEventListener("click",()=>j(S-1)),d.btnNext.addEventListener("click",()=>j(S+1)),d.btnPlay.addEventListener("click",()=>{P=!P,d.btnPlay.textContent=P?"❚❚ 暂停":"▶ 播放",s?.(P)}),d.btnCut.addEventListener("click",()=>{b=!b,d.btnCut.classList.toggle("on",b),r?.(b)});const ce=()=>R(!d.sfp.classList.contains("show"));return d.sfbtn.addEventListener("click",ce),d.btnAlarmDock.addEventListener("click",ce),i.querySelector("#sfpClose").addEventListener("click",()=>R(!1)),i.querySelector("#btnAllReset").addEventListener("click",()=>{d.btnReset.click()}),d.btnReset.addEventListener("click",()=>{P=!1,b=!1,d.btnPlay.textContent="▶ 播放",d.btnCut.classList.remove("on"),R(!1),O(0,!1),[...d.sfpFaults.querySelectorAll(".it"),...d.sfpEsd.querySelectorAll(".it")].forEach(U=>U.classList.remove("on")),a?.(),j(0)}),addEventListener("keydown",U=>{(U.key==="ArrowRight"||U.key==="ArrowDown"||U.key==="PageDown")&&(j(S+1),U.preventDefault()),(U.key==="ArrowLeft"||U.key==="ArrowUp"||U.key==="PageUp")&&(j(S-1),U.preventDefault()),U.key===" "&&(d.btnPlay.click(),U.preventDefault()),U.key==="Home"&&j(0),U.key==="Escape"&&(k(),R(!1))}),z(0),{go:j,showKnow:U=>{const re=e.devices?.[U];re&&B(re)},hideKnow:k,setLel:O,setBadge:N,setSafetyPanel:R,get stepIndex(){return S},get playing(){return P},get activeDevice(){return M},setPlaying(U){P=!!U,d.btnPlay.textContent=P?"❚❚ 暂停":"▶ 播放"},setCutawayUi(U){b=!!U,d.btnCut.classList.toggle("on",b)}}}const Ch="chem789-env-tweak",Ra={None:In,Linear:Na,Reinhard:Fa,Cineon:Oa,ACESFilmic:Ur,AgX:Ba,Neutral:ka},Ob=new Map(Object.entries(Ra).map(([i,e])=>[e,i]));function Et(i){return i?`#${i.getHexString()}`:"#000000"}function St(i,e){if(!(!i||e==null))try{i.set(e)}catch{}}const Li=Object.freeze({exposure:1,toneMapping:"ACESFilmic",background:"#3254a4",fogColor:"#0029cc",fogDensity:2e-4,envIntensity:2.5,envMapEnabled:!0,hemiSky:"#fea62a",hemiGround:"#0060fa",hemiIntensity:4.34,keyColor:"#896b2a",keyIntensity:.86,keyPosX:.5,keyPosY:16.2,keyPosZ:-7.5,fillColor:"#9b9469",fillIntensity:.75,fillPosX:6.8,fillPosY:10,fillPosZ:12.9,rimColor:"#fef6f6",rimIntensity:.91,rimPosX:-10.6,rimPosY:23.7,rimPosZ:10,plantColor:"#00fbff",plantAIntensity:1.44,plantBIntensity:.61,bloomEnabled:!0,bloomStrength:.59,bloomRadius:1.5,bloomThreshold:1.58,dofEnabled:!0,dofApertureOverview:5e-5,dofMaxblurOverview:.0035,dofApertureClose:0,dofMaxblurClose:.0054,dofFocus:37,groundOuter:"#342704",groundOuterRough:.47,groundPad:"#3f3a36",groundPadRough:.81,groundPadEmissive:"#1a1e24",groundPadEmissiveIntensity:.04,groundAsphalt:"#3a3e45",groundAsphaltRough:.56,groundUnit:"#9aa2aa",groundUnitRough:.59,groundUnitEmissive:"#22262c",groundUnitEmissiveIntensity:1.4,curbColor:"#9aa0a8",curbRough:1,curbEmissive:"#1c2026",curbEmissiveIntensity:.95,streetLampIntensity:.97,streetLampColor:"#ffd8b0",streetHeadEmissive:"#ffd2a0",streetHeadEmissiveIntensity:4.62,streetPoolOpacity:.51});function Bb(i){const e=i.scene?.getObjectByName?.("ground"),t=i.scene?.getObjectByName?.("streetLights");return{renderer:i.renderer,scene:i.scene,hemi:i.hemi,key:i.key,fill:i.fill,rim:i.rim,plantA:i.plantA,plantB:i.plantB,bloom:i.bloom,bokeh:i.bokeh,softGL:i.softGL,setDofMode:i.setDofMode,getDofMode:i.getDofMode,DOF_MODES:i.DOF_MODES,envMaps:i.envMaps,ground:e?.userData?.env||null,street:t?.userData?.env||e?.userData?.env?.street||null}}function kb(i){const e={...Li},t=i.renderer,n=i.scene;t&&(e.exposure=t.toneMappingExposure,e.toneMapping=Ob.get(t.toneMapping)||"ACESFilmic"),n?.background?.isColor&&(e.background=Et(n.background)),n?.fog&&(e.fogColor=Et(n.fog.color),e.fogDensity=n.fog.density??e.fogDensity),"environmentIntensity"in(n||{})&&(e.envIntensity=n.environmentIntensity),e.envMapEnabled=!!n?.environment,i.hemi&&(e.hemiSky=Et(i.hemi.color),e.hemiGround=Et(i.hemi.groundColor),e.hemiIntensity=i.hemi.intensity),i.key&&(e.keyColor=Et(i.key.color),e.keyIntensity=i.key.intensity,e.keyPosX=+i.key.position.x.toFixed(2),e.keyPosY=+i.key.position.y.toFixed(2),e.keyPosZ=+i.key.position.z.toFixed(2)),i.fill&&(e.fillColor=Et(i.fill.color),e.fillIntensity=i.fill.intensity,e.fillPosX=+i.fill.position.x.toFixed(2),e.fillPosY=+i.fill.position.y.toFixed(2),e.fillPosZ=+i.fill.position.z.toFixed(2)),i.rim&&(e.rimColor=Et(i.rim.color),e.rimIntensity=i.rim.intensity,e.rimPosX=+i.rim.position.x.toFixed(2),e.rimPosY=+i.rim.position.y.toFixed(2),e.rimPosZ=+i.rim.position.z.toFixed(2)),i.plantA&&(e.plantColor=Et(i.plantA.color),e.plantAIntensity=i.plantA.intensity),i.plantB&&(e.plantBIntensity=i.plantB.intensity),i.bloom&&(e.bloomEnabled=!!i.bloom.enabled,e.bloomStrength=i.bloom.strength,e.bloomRadius=i.bloom.radius,e.bloomThreshold=i.bloom.threshold),i.bokeh&&(e.dofEnabled=!!i.bokeh.enabled,e.dofFocus=i.bokeh.uniforms?.focus?.value??e.dofFocus),i.DOF_MODES&&(e.dofApertureOverview=i.DOF_MODES.overview?.aperture??e.dofApertureOverview,e.dofMaxblurOverview=i.DOF_MODES.overview?.maxblur??e.dofMaxblurOverview,e.dofApertureClose=i.DOF_MODES.close?.aperture??e.dofApertureClose,e.dofMaxblurClose=i.DOF_MODES.close?.maxblur??e.dofMaxblurClose);const s=i.ground;s?.outerMat&&(e.groundOuter=Et(s.outerMat.color),e.groundOuterRough=s.outerMat.roughness),s?.padMat&&(e.groundPad=Et(s.padMat.color),e.groundPadRough=s.padMat.roughness,e.groundPadEmissive=Et(s.padMat.emissive),e.groundPadEmissiveIntensity=s.padMat.emissiveIntensity),s?.asphaltMats?.[0]&&(e.groundAsphalt=Et(s.asphaltMats[0].color),e.groundAsphaltRough=s.asphaltMats[0].roughness),s?.unitMat&&(e.groundUnit=Et(s.unitMat.color),e.groundUnitRough=s.unitMat.roughness,e.groundUnitEmissive=Et(s.unitMat.emissive),e.groundUnitEmissiveIntensity=s.unitMat.emissiveIntensity),s?.curbMat&&(e.curbColor=Et(s.curbMat.color),e.curbRough=s.curbMat.roughness,e.curbEmissive=Et(s.curbMat.emissive),e.curbEmissiveIntensity=s.curbMat.emissiveIntensity);const r=i.street||s?.street;return r?.lights?.[0]&&(e.streetLampIntensity=r.lights[0].intensity,e.streetLampColor=Et(r.lights[0].color)),r?.headMat&&(e.streetHeadEmissive=Et(r.headMat.emissive),e.streetHeadEmissiveIntensity=r.headMat.emissiveIntensity),r?.poolMat&&"opacity"in r.poolMat&&(e.streetPoolOpacity=r.poolMat.opacity),e}function Ms(i,e,{skipPersist:t}={}){const n={...Li,...e},s=i.renderer,r=i.scene;if(s&&(s.toneMappingExposure=+n.exposure,Ra[n.toneMapping]!=null&&(s.toneMapping=Ra[n.toneMapping])),r){r.background?.isColor?St(r.background,n.background):r.background=new ve(n.background),r.fog&&(St(r.fog.color,n.fogColor),r.fog.density=+n.fogDensity),"environmentIntensity"in r&&(r.environmentIntensity=+n.envIntensity),n.envMapEnabled?i.envMaps?.show?r.environment=i.envMaps.show:!r.environment&&i.envMaps?.studio&&(r.environment=i.envMaps.studio):r.environment=null;try{_l(r,r,{intensityScale:n.envMapEnabled?+n.envIntensity:0,enabled:!!n.envMapEnabled})}catch{}}if(i.hemi&&(St(i.hemi.color,n.hemiSky),St(i.hemi.groundColor,n.hemiGround),i.hemi.intensity=+n.hemiIntensity),i.key&&(St(i.key.color,n.keyColor),i.key.intensity=+n.keyIntensity,i.key.position.set(+n.keyPosX,+n.keyPosY,+n.keyPosZ)),i.fill&&(St(i.fill.color,n.fillColor),i.fill.intensity=+n.fillIntensity,i.fill.position.set(+n.fillPosX,+n.fillPosY,+n.fillPosZ)),i.rim&&(St(i.rim.color,n.rimColor),i.rim.intensity=+n.rimIntensity,i.rim.position.set(+n.rimPosX,+n.rimPosY,+n.rimPosZ)),i.plantA&&(St(i.plantA.color,n.plantColor),i.plantA.intensity=+n.plantAIntensity),i.plantB&&(St(i.plantB.color,n.plantColor),i.plantB.intensity=+n.plantBIntensity),i.bloom&&(i.bloom.enabled=!!n.bloomEnabled&&+n.bloomStrength>0,i.bloom.strength=+n.bloomStrength,i.bloom.radius=+n.bloomRadius,i.bloom.threshold=+n.bloomThreshold),i.DOF_MODES&&(i.DOF_MODES.overview.aperture=+n.dofApertureOverview,i.DOF_MODES.overview.maxblur=+n.dofMaxblurOverview,i.DOF_MODES.close.aperture=+n.dofApertureClose,i.DOF_MODES.close.maxblur=+n.dofMaxblurClose),i.bokeh){i.bokeh.enabled=!!n.dofEnabled&&!i.softGL;const l=i.getDofMode?.()||"overview",c=i.DOF_MODES?.[l];c&&(i.bokeh.uniforms.aperture.value=c.aperture,i.bokeh.uniforms.maxblur.value=c.maxblur),i.bokeh.uniforms?.focus&&(i.bokeh.uniforms.focus.value=+n.dofFocus)}const o=i.ground;if(o?.outerMat&&(St(o.outerMat.color,n.groundOuter),o.outerMat.roughness=+n.groundOuterRough),o?.padMat&&(St(o.padMat.color,n.groundPad),o.padMat.roughness=+n.groundPadRough,St(o.padMat.emissive,n.groundPadEmissive),o.padMat.emissiveIntensity=+n.groundPadEmissiveIntensity),o?.asphaltMats)for(const l of o.asphaltMats)St(l.color,n.groundAsphalt),l.roughness=+n.groundAsphaltRough;o?.unitMat&&(St(o.unitMat.color,n.groundUnit),o.unitMat.roughness=+n.groundUnitRough,St(o.unitMat.emissive,n.groundUnitEmissive),o.unitMat.emissiveIntensity=+n.groundUnitEmissiveIntensity),o?.curbMat&&(St(o.curbMat.color,n.curbColor),o.curbMat.roughness=+n.curbRough,St(o.curbMat.emissive,n.curbEmissive),o.curbMat.emissiveIntensity=+n.curbEmissiveIntensity);const a=i.street||o?.street;if(a?.lights)for(const l of a.lights)St(l.color,n.streetLampColor),l.intensity=+n.streetLampIntensity;if(a?.headMat&&(St(a.headMat.emissive,n.streetHeadEmissive),a.headMat.emissiveIntensity=+n.streetHeadEmissiveIntensity),a?.poolMat&&"opacity"in a.poolMat&&(a.poolMat.opacity=+n.streetPoolOpacity,a.poolMat.transparent=+n.streetPoolOpacity<1),!t)try{localStorage.setItem(Ch,JSON.stringify(n))}catch{}return n}function zb(){try{const i=localStorage.getItem(Ch);if(!i)return null;const e=JSON.parse(i);return e&&typeof e=="object"?e:null}catch{return null}}function Gb(){try{localStorage.removeItem(Ch)}catch{}}function Ap(i,e){if(!i||i.type!=="range")return;const t=Number(e);Number.isFinite(t)&&t>Number(i.max)&&(i.max=String(t))}function Ze(i,e,t,n,s,r,o,a={}){const{uncappedNum:l=!1,numMax:c}=a,h=Number(o),f=Number.isFinite(h)?Math.max(s,h):s,u=l?c!=null?` max="${c}"`:"":` max="${s}"`;return`<label class="env-row" title="${t}"><span class="env-lab">${e}</span>
    <input type="range" id="${i}" min="${n}" max="${f}" step="${r}" value="${o}" />
    <input type="number" class="env-num" data-for="${i}" min="${n}"${u} step="${r}" value="${o}" />
    <small class="env-desc">${t}</small>
  </label>`}function Dt(i,e,t,n){return`<label class="env-row" title="${t}"><span class="env-lab">${e}</span>
    <input type="color" id="${i}" value="${n}" />
    <input type="text" class="env-hex" data-for="${i}" value="${n}" maxlength="7" />
    <small class="env-desc">${t}</small>
  </label>`}function hc(i,e,t,n){return`<label class="env-row env-check" title="${t}"><span class="env-lab">${e}</span>
    <input type="checkbox" id="${i}" ${n?"checked":""} />
    <small class="env-desc">${t}</small>
  </label>`}function Vb(i,e,t,n,s){const r=n.map(o=>`<option value="${o}" ${o===s?"selected":""}>${o}</option>`).join("");return`<label class="env-row" title="${t}"><span class="env-lab">${e}</span>
    <select id="${i}">${r}</select>
    <small class="env-desc">${t}</small>
  </label>`}function un(i,e){return`<details class="env-sec" open><summary>${i}</summary><div class="env-sec-body">${e}</div></details>`}function Wb(i){return`
    <div class="env-panel-hd">
      <b>环境调节</b>
      <span class="env-hint">按 E 开关 · Esc 关闭</span>
      <button type="button" class="env-x" id="envClose" title="关闭面板">×</button>
    </div>
    <div class="env-panel-body">
      ${un("渲染 / 色调映射",`
        ${Ze("exposure","曝光","整体画面明暗（toneMappingExposure）；滑条 0–20，数字框可输入任意正数",0,20,.01,i.exposure,{uncappedNum:!0})}
        ${Vb("toneMapping","色调映射","高光压缩与色彩风格（Three ToneMapping）",Object.keys(Ra),i.toneMapping)}
        ${Dt("background","背景色","天空/远景清屏底色",i.background)}
      `)}
      ${un("雾效 FogExp2",`
        ${Dt("fogColor","雾颜色","大气雾染色，影响远景色调",i.fogColor)}
        ${Ze("fogDensity","雾密度","越大远景越快淡出、越朦胧",0,.02,1e-4,i.fogDensity)}
      `)}
      ${un("环境贴图 IBL",`
        ${hc("envMapEnabled","启用环境贴图","金属/光滑面是否反射 IBL",i.envMapEnabled)}
        ${Ze("envIntensity","环境光强度","IBL 反射明暗（environmentIntensity）",0,2.5,.01,i.envIntensity)}
      `)}
      ${un("半球光 Hemi",`
        ${Dt("hemiSky","天空色","半球光上半球颜色（天光）",i.hemiSky)}
        ${Dt("hemiGround","地面色","半球光下半球颜色（地面反光）",i.hemiGround)}
        ${Ze("hemiIntensity","强度","柔和天光整体亮度",0,6,.01,i.hemiIntensity)}
      `)}
      ${un("主光 Key（暖）",`
        ${Dt("keyColor","颜色","主光色温（暖色塑形）",i.keyColor)}
        ${Ze("keyIntensity","强度","主光亮度，决定受光面层次",0,6,.01,i.keyIntensity)}
        ${Ze("keyPosX","位置 X","主光世界坐标 X",-40,40,.1,i.keyPosX)}
        ${Ze("keyPosY","位置 Y","主光世界坐标 Y（高度）",0,60,.1,i.keyPosY)}
        ${Ze("keyPosZ","位置 Z","主光世界坐标 Z",-40,40,.1,i.keyPosZ)}
      `)}
      ${un("辅光 Fill（冷）",`
        ${Dt("fillColor","颜色","辅光色温（冷色补暗部）",i.fillColor)}
        ${Ze("fillIntensity","强度","辅光亮度，减轻死黑阴影",0,8,.01,i.fillIntensity)}
        ${Ze("fillPosX","位置 X","辅光世界坐标 X",-40,40,.1,i.fillPosX)}
        ${Ze("fillPosY","位置 Y","辅光世界坐标 Y（高度）",0,40,.1,i.fillPosY)}
        ${Ze("fillPosZ","位置 Z","辅光世界坐标 Z",-40,40,.1,i.fillPosZ)}
      `)}
      ${un("轮廓光 Rim（暖）",`
        ${Dt("rimColor","颜色","边缘勾边光颜色",i.rimColor)}
        ${Ze("rimIntensity","强度","轮廓光亮度，分离设备与背景",0,3,.01,i.rimIntensity)}
        ${Ze("rimPosX","位置 X","轮廓光世界坐标 X",-40,40,.1,i.rimPosX)}
        ${Ze("rimPosY","位置 Y","轮廓光世界坐标 Y（高度）",0,40,.1,i.rimPosY)}
        ${Ze("rimPosZ","位置 Z","轮廓光世界坐标 Z",-40,40,.1,i.rimPosZ)}
      `)}
      ${un("厂区区域光",`
        ${Dt("plantColor","颜色","厂区点/区域光源颜色",i.plantColor)}
        ${Ze("plantAIntensity","A 强度","区域光 A 亮度",0,4,.01,i.plantAIntensity)}
        ${Ze("plantBIntensity","B 强度","区域光 B 亮度",0,4,.01,i.plantBIntensity)}
      `)}
      ${un("辉光 Bloom",`
        ${hc("bloomEnabled","启用","开关辉光后期（灯/高光光晕）",i.bloomEnabled)}
        ${Ze("bloomStrength","强度 S","辉光溢出强弱",0,2.5,.01,i.bloomStrength)}
        ${Ze("bloomRadius","半径 R","辉光扩散范围",0,1.5,.01,i.bloomRadius)}
        ${Ze("bloomThreshold","阈值 T","超过此亮度才产生光晕",0,3,.01,i.bloomThreshold)}
      `)}
      ${un("景深 DOF",`
        ${hc("dofEnabled","启用","开关景深虚化（Bokeh）",i.dofEnabled)}
        ${Ze("dofFocus","对焦距离","清晰平面到相机的距离",1,300,1,i.dofFocus)}
        ${Ze("dofApertureOverview","光圈·全景","全景模式虚化量（越大越虚）",0,.001,1e-6,i.dofApertureOverview)}
        ${Ze("dofMaxblurOverview","模糊·全景","全景模式最大模糊上限",0,.05,1e-4,i.dofMaxblurOverview)}
        ${Ze("dofApertureClose","光圈·近景","近景/特写模式虚化量",0,.002,1e-6,i.dofApertureClose)}
        ${Ze("dofMaxblurClose","模糊·近景","近景模式最大模糊上限",0,.08,1e-4,i.dofMaxblurClose)}
      `)}
      ${un("地面材质",`
        ${Dt("groundOuter","外围地面","厂区外圈深色地面颜色",i.groundOuter)}
        ${Ze("groundOuterRough","外围粗糙度","外圈漫反射程度（1=无高光）",0,1,.01,i.groundOuterRough)}
        ${Dt("groundPad","混凝土垫","设备基础混凝土垫颜色",i.groundPad)}
        ${Ze("groundPadRough","垫粗糙度","混凝土垫表面粗糙度",0,1,.01,i.groundPadRough)}
        ${Dt("groundPadEmissive","垫自发光色","垫面微亮/边缘感颜色",i.groundPadEmissive)}
        ${Ze("groundPadEmissiveIntensity","垫自发光强度","混凝土垫自发光强弱",0,1.5,.01,i.groundPadEmissiveIntensity)}
        ${Dt("groundAsphalt","沥青","道路/沥青地面颜色",i.groundAsphalt)}
        ${Ze("groundAsphaltRough","沥青粗糙度","沥青表面粗糙度",0,1,.01,i.groundAsphaltRough)}
        ${Dt("groundUnit","单元垫","单体设备底座垫颜色",i.groundUnit)}
        ${Ze("groundUnitRough","单元粗糙度","单元垫表面粗糙度",0,1,.01,i.groundUnitRough)}
        ${Dt("groundUnitEmissive","单元自发光色","单元垫微亮颜色",i.groundUnitEmissive)}
        ${Ze("groundUnitEmissiveIntensity","单元自发光强度","单元垫自发光强弱",0,3,.01,i.groundUnitEmissiveIntensity)}
        ${Dt("curbColor","路缘","路缘石颜色",i.curbColor)}
        ${Ze("curbRough","路缘粗糙度","路缘石表面粗糙度",0,1,.01,i.curbRough)}
        ${Dt("curbEmissive","路缘自发光色","路缘微亮颜色",i.curbEmissive)}
        ${Ze("curbEmissiveIntensity","路缘自发光强度","路缘自发光强弱",0,1.5,.01,i.curbEmissiveIntensity)}
      `)}
      ${un("路灯",`
        ${Dt("streetLampColor","灯光颜色","路灯照射色温",i.streetLampColor)}
        ${Ze("streetLampIntensity","灯光强度","路灯点光源照度",0,6,.01,i.streetLampIntensity)}
        ${Dt("streetHeadEmissive","灯头自发光","灯罩/灯头发光颜色",i.streetHeadEmissive)}
        ${Ze("streetHeadEmissiveIntensity","灯头自发光强度","灯头材质自发光强弱",0,5,.01,i.streetHeadEmissiveIntensity)}
        ${Ze("streetPoolOpacity","光斑不透明度","地面光池/光斑可见度",0,1,.01,i.streetPoolOpacity)}
      `)}
    </div>
    <div class="env-panel-ft">
      <button type="button" id="envReset" title="恢复代码默认值并清除本地缓存">重置</button>
      <button type="button" id="envCopy" title="复制当前参数为 JSON">复制JSON</button>
      <button type="button" id="envApply" title="从下方文本框应用 JSON">应用JSON</button>
      <textarea id="envJson" rows="3" spellcheck="false" placeholder='粘贴 JSON，例如 {"exposure":1.2}'></textarea>
      <div class="env-status" id="envStatus"></div>
    </div>
  `}function Hb(i){const e={};return i.querySelectorAll('input[type="range"], input[type="number"].env-num').forEach(t=>{t.classList.contains("env-num")||(e[t.id]=parseFloat(t.value))}),i.querySelectorAll('input[type="color"]').forEach(t=>{e[t.id]=t.value}),i.querySelectorAll('input[type="checkbox"]').forEach(t=>{e[t.id]=t.checked}),i.querySelectorAll("select").forEach(t=>{e[t.id]=t.value}),e}function tr(i,e){for(const[t,n]of Object.entries(e)){const s=i.querySelector(`#${CSS.escape(t)}`);if(!s)continue;s.type==="checkbox"?s.checked=!!n:(Ap(s,n),s.value=n);const r=i.querySelector(`[data-for="${CSS.escape(t)}"]`);r&&(r.value=n)}}function Xb(i,{markDirty:e,defaults:t}={}){const n=t?{...t}:kb(i);i.softGL&&i.bokeh&&(n.dofEnabled=!1);let s={...n};const r=zb();r&&(s={...n,...r},Ms(i,s),e?.());const o=document.createElement("div");o.id="envTweak",o.className="env-tweak",o.innerHTML=`
    <button type="button" class="env-fab glass" id="envFab" title="环境调节（按 E 开关）">环境</button>
    <div class="env-panel glass" id="envPanel" hidden>${Wb(s)}</div>
  `,document.body.appendChild(o);const a=o.querySelector("#envPanel"),l=o.querySelector("#envFab"),c=()=>o.querySelector("#envStatus");function h(x,_=!0){const v=c();v&&(v.textContent=x||"",v.classList.toggle("ok",!!_),v.classList.toggle("err",!_&&!!x))}function f(){s={...s,...Hb(a)},Ms(i,s),e?.(),h("已应用 · 已写入 localStorage")}function u(){a.hidden=!1,l.classList.add("on"),tr(a,s)}function d(){a.hidden=!0,l.classList.remove("on")}function m(){a.hidden?u():d()}function y(){s={...n},Gb(),Ms(i,s,{skipPersist:!0}),tr(a,s),e?.(),h("已恢复代码默认值")}l.addEventListener("click",x=>{x.stopPropagation(),m()}),a.addEventListener("click",x=>x.stopPropagation()),a.addEventListener("pointerdown",x=>x.stopPropagation()),a.addEventListener("input",x=>{const _=x.target;if(_ instanceof HTMLElement){if(_.dataset.for){const v=a.querySelector(`#${CSS.escape(_.dataset.for)}`);v&&(Ap(v,_.value),v.value=_.value)}else if(_.id){const v=a.querySelector(`[data-for="${CSS.escape(_.id)}"]`);v&&(v.value=_.value)}f()}}),a.addEventListener("change",()=>f()),o.querySelector("#envClose")?.addEventListener("click",d),o.querySelector("#envReset")?.addEventListener("click",y),o.querySelector("#envCopy")?.addEventListener("click",async()=>{const x=JSON.stringify(s,null,2),_=o.querySelector("#envJson");_&&(_.value=x);try{await navigator.clipboard.writeText(x),h("JSON 已复制到剪贴板")}catch{h("已填入下方文本框（剪贴板不可用）",!1)}}),o.querySelector("#envApply")?.addEventListener("click",()=>{const x=o.querySelector("#envJson");try{const _=JSON.parse(x.value||"{}");s={...n,..._},Ms(i,s),tr(a,s),e?.(),h("JSON 已应用")}catch(_){h("JSON 解析失败："+(_?.message||_),!1)}});const g=x=>{if(!(x.target&&/INPUT|TEXTAREA|SELECT/.test(x.target.tagName)&&x.key!=="Escape"&&(x.key==="e"||x.key==="E"))){if(x.key==="Escape"){a.hidden||(x.preventDefault(),d());return}if((x.key==="e"||x.key==="E")&&!x.ctrlKey&&!x.metaKey&&!x.altKey){const _=x.target&&x.target.tagName||"";if(/INPUT|TEXTAREA|SELECT/.test(_))return;x.preventDefault(),m()}}};document.addEventListener("keydown",g),tr(a,s);const p={open:u,close:d,toggle:m,reset:y,apply:x=>{s={...n,...x},Ms(i,s),tr(a,s),e?.()},getParams:()=>({...s}),getDefaults:()=>({...n}),destroy(){document.removeEventListener("keydown",g),o.remove()}};return window.__envTweak=p,p}const rr=Object.freeze({exposureMul:.88,envIntensityMul:.9,bloomMul:.75,badgeText:"SoftGL 示意 · 真机偏暗"}),Dc="softgl-shot-badge";function qb(i){let e=document.getElementById(Dc);return e||(e=document.createElement("div"),e.id=Dc,e.className="softgl-shot-badge",document.getElementById("stage")?.appendChild(e)||document.body.appendChild(e)),e.textContent=i,e.hidden=!1,e}function Cd(){const i=document.getElementById(Dc);i&&(i.hidden=!0)}function Td(i,e={}){if(!i?.renderer)return{applied:!1,reason:"no-renderer"};if(!i.softGL)return{applied:!1,reason:"not-softGL"};if(i.__softShotGradeApplied)return{applied:!0,reason:"already",before:i.__softShotGradeBefore,after:uc(i)};const t=e.exposureMul??rr.exposureMul,n=e.envIntensityMul??rr.envIntensityMul,s=e.bloomMul??rr.bloomMul,r=e.badge!==!1,o=uc(i);i.renderer.toneMappingExposure=Math.max(.01,o.exposure*t);const a=o.envIntensity!=null?Math.max(0,o.envIntensity*n):null;"environmentIntensity"in i.scene&&a!=null&&(i.scene.environmentIntensity=a);try{_l(i.scene,i.scene,{intensityScale:a??1,enabled:!!i.scene?.environment})}catch{}i.bloom&&o.bloomStrength!=null&&(i.bloom.strength=Math.max(0,o.bloomStrength*s),i.bloom.enabled=i.bloom.strength>0),i.__softShotGradeApplied=!0,i.__softShotGradeBefore=o,i.__softShotGradeMuls={exposureMul:t,envIntensityMul:n,bloomMul:s},r&&qb(e.badgeText??rr.badgeText);try{i.render?.()}catch{}return{applied:!0,before:o,after:uc(i),muls:i.__softShotGradeMuls}}function Yb(i){if(!i?.__softShotGradeApplied||!i.__softShotGradeBefore)return Cd(),{cleared:!1};const e=i.__softShotGradeBefore;i.renderer.toneMappingExposure=e.exposure,"environmentIntensity"in i.scene&&e.envIntensity!=null&&(i.scene.environmentIntensity=e.envIntensity);try{_l(i.scene,i.scene,{intensityScale:e.envIntensity!=null?e.envIntensity:1,enabled:!!i.scene?.environment})}catch{}i.bloom&&e.bloomStrength!=null&&(i.bloom.strength=e.bloomStrength,i.bloom.enabled=e.bloomEnabled),i.__softShotGradeApplied=!1,Cd();try{i.render?.()}catch{}return{cleared:!0}}function uc(i){return{exposure:i.renderer?.toneMappingExposure,envIntensity:i.scene&&"environmentIntensity"in i.scene?i.scene.environmentIntensity:null,bloomStrength:i.bloom?.strength??null,bloomEnabled:i.bloom?.enabled??null}}function $b(i=typeof location<"u"?location.search:""){const t=new URLSearchParams(i.startsWith("?")?i.slice(1):i).get("softShot");return t==="1"||t==="true"||t==="yes"}const Cp=12634320,dc={uniforms:{uTime:{value:0},uSpeed:{value:1.2},uColor:{value:new ve(2793471)},uEmissive:{value:new ve(0)},uOpacity:{value:1},uEnergy:{value:.08},uValve:{value:1},uSilver:{value:new ve(Cp)}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vView;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vNormal = normalize(mat3(modelMatrix) * normal);
      vView = cameraPosition - wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform float uSpeed;
    uniform vec3 uColor;
    uniform vec3 uEmissive;
    uniform float uOpacity;
    uniform float uEnergy;
    uniform float uValve;
    uniform vec3 uSilver;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vView;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x),
                 mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0; float a = 0.5;
      for (int i = 0; i < 3; i++) {
        v += a * noise(p);
        p *= 2.11;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      float spd = uSpeed * max(0.04, uValve);
      vec2 uv = vUv * vec2(5.0, 1.3);
      uv.x -= uTime * spd * 1.05;
      float n = fbm(uv);
      float bands = smoothstep(0.42, 0.82, n);

      vec3 N = normalize(vNormal);
      vec3 V = normalize(vView);
      float fres = pow(1.0 - max(dot(N, V), 0.0), 2.4);

      // Body stays silver; flow cue = faint fluid tint on scrolling bands only
      float tintAmt = (0.06 + bands * 0.16) * mix(0.55, 1.0, uValve);
      vec3 col = mix(uSilver, uColor, tintAmt);
      // metal-ish shading without neon emissive
      col *= 0.78 + fres * 0.28;
      col += uEmissive * uEnergy * bands * 0.15;

      gl_FragColor = vec4(col, 1.0);
    }
  `};function Zb(i,e="liquid"){const t=new ve(i),n=new ve(0);return e==="gas"?{color:t,emissive:n,opacity:1,energy:.1}:e==="steam"?{color:t,emissive:n,opacity:1,energy:.08}:{color:t,emissive:n,opacity:1,energy:.08}}function Jb(i,e){return new i.MeshStandardMaterial({color:e,metalness:.48,roughness:.4,envMapIntensity:.95,emissive:0,emissiveIntensity:0})}function Kb(i,e,t,n,s,r){const o=Jb(i,s),a=r?.62:.48,l=n*1.14,c=[.18,.5,.82],h=new i.Vector3,f=new i.Vector3,u=new i.Quaternion,d=new i.Vector3(0,1,0);for(const m of c){t.getPointAt(m,h),t.getTangentAt(m,f).normalize();const y=new i.CylinderGeometry(l,l,a,r?10:14),g=new i.Mesh(y,o);u.setFromUnitVectors(d,f),g.quaternion.copy(u),g.position.copy(h),g.castShadow=!0,g.frustumCulled=!1,e.add(g)}}function jb(i,e){const{points:t,color:n,radius:s=.28,speed:r=1.15,particleCount:o=36,medium:a="liquid",name:l="flowLine",softGL:c=!1}=e,h=new i.Group;h.name=l;const f=new i.CatmullRomCurve3(t.map(z=>z.isVector3?z.clone():new i.Vector3(...z)),!1,"catmullrom",.35),u=c?36:72,d=c?8:12,m=c?s*1.55:s,y=Zb(n,a),g=new i.TubeGeometry(f,u,m,d,!1),p=i.UniformsUtils.clone(dc.uniforms);p.uColor.value=y.color.clone(),p.uEmissive.value=y.emissive.clone(),p.uOpacity.value=y.opacity,p.uEnergy.value=y.energy,p.uSpeed.value=r,p.uValve.value=1,p.uSilver.value=new i.Color(Cp);const x=new i.ShaderMaterial({uniforms:p,vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,transparent:!1,depthWrite:!0,side:i.FrontSide,blending:i.NormalBlending}),_=new i.Mesh(g,x);_.frustumCulled=!1,_.castShadow=!0,h.add(_),Kb(i,h,f,m,n,c);const v=Math.max(12,c?Math.min(28,o):o),T=new Float32Array(v*3),w=new Float32Array(v);for(let z=0;z<v;z++)w[z]=z/v,T[z*3+1]=-20;const S=new i.BufferGeometry;S.setAttribute("position",new i.BufferAttribute(T,3));const P=new i.Points(S,new i.PointsMaterial({color:y.color,size:c?.95:.42,transparent:!1,opacity:1,depthWrite:!0,blending:i.NormalBlending,sizeAttenuation:!0}));P.frustumCulled=!1,h.add(P);let b=r,M=1,I=.7;const N=new i.Vector3;function R(z){M=Math.max(.15,Number(z)||1)}function O(z){I=i.MathUtils.clamp(z,.05,1)}function G(z){h.visible=!!z}function B(z,j){if(!h.visible)return;const ce=j??0,U=b*M;p.uTime.value=ce,p.uSpeed.value=U,p.uValve.value=I;const re=U*Math.max(.08,I),ge=P.geometry.attributes.position.array;for(let $=0;$<v;$++){w[$]+=z*re*.08,w[$]-=Math.floor(w[$]),w[$]<0&&(w[$]+=1);const he=Math.min(.999999,Math.max(0,w[$]));f.getPointAt(he,N),ge[$*3]=N.x,ge[$*3+1]=N.y,ge[$*3+2]=N.z}P.geometry.attributes.position.needsUpdate=!0}function k(){h.traverse(z=>{z.geometry&&z.geometry.dispose(),z.material&&z.material.dispose()})}return{root:h,curve:f,update:B,setBoost:R,setValve:O,setVisible:G,dispose:k,get boost(){return M},get valve(){return I}}}function Th(i,e,t=!1){const n=new i.Group;n.name="flowNetwork";const s=[];for(const l of e){const c=jb(i,{...l,softGL:t});c.tag=l.tag||l.name||"flow",n.add(c.root),s.push(c)}function r(l,c){for(const h of s)h.update(l,c)}function o(l=[],{idle:c=.7,active:h=1,playing:f=!1}={}){const u=new Set(l),d=f?Math.max(c,.7):c;for(const m of s){const y=u.size===0||u.has(m.tag);m.setValve(y?u.size===0?d:h:d*.55),m.setBoost(y&&u.size?f?1.35:1.1:f?.9:.7)}}function a(){s.forEach(l=>l.dispose())}return{root:n,lines:s,update:r,applyStepBoost:o,dispose:a}}function Qb(i,e={}){const{position:t={x:0,y:0,z:0},color:n="#b0c4e0",count:s=64,rise:r=6,spread:o=1.6,softGL:a=!1,name:l="steamMist"}=e,c=a?Math.min(48,s):s,h=new i.Group;h.name=l,h.position.set(t.x,t.y,t.z);const f=new Float32Array(c*3),u=new Float32Array(c*3);for(let T=0;T<c;T++)d(T,!0);function d(T,w){const S=Math.random()*Math.PI*2,P=Math.random()*o*.35;f[T*3]=Math.cos(S)*P,f[T*3+1]=w?Math.random()*r:.05,f[T*3+2]=Math.sin(S)*P,u[T*3]=(Math.random()-.5)*.25,u[T*3+1]=.55+Math.random()*.85,u[T*3+2]=(Math.random()-.5)*.25}const m=new i.BufferGeometry;m.setAttribute("position",new i.BufferAttribute(f,3));const y=new i.PointsMaterial({color:n,size:a?1.6:.65,transparent:!0,opacity:a?.42:.3,depthWrite:!1,sizeAttenuation:!0,blending:i.NormalBlending}),g=new i.Points(m,y);g.frustumCulled=!1,h.add(g);let p=1;function x(T){p=Math.max(.15,Number(T)||1),y.opacity=.18+.16*Math.min(1.4,p)}function _(T){if(!h.visible)return;const w=.7+p*.55;for(let S=0;S<c;S++)f[S*3]+=u[S*3]*T*w,f[S*3+1]+=u[S*3+1]*T*w,f[S*3+2]+=u[S*3+2]*T*w,f[S*3]*=1+.08*T,f[S*3+2]*=1+.08*T,f[S*3+1]>r*(.85+p*.2)&&d(S,!1);m.attributes.position.needsUpdate=!0}function v(){m.dispose(),y.dispose()}return{root:h,update:_,setBoost:x,dispose:v}}function eS(i,e,{color:t="#6ec8ff",softGL:n=!1}={}){if(!i?.material)return{update(){},setBoost(){},dispose(){}};const s=i.material,r=s.emissiveIntensity??.18;let o=1;function a(c){o=Math.max(.3,Number(c)||1)}function l(c){const f=.5+.5*Math.sin((c??0)*(n?1.4:2));s.emissiveIntensity=r*(.75+.55*f*o),s.emissive&&s.emissive.set(t)}return{update:l,setBoost:a,dispose(){}}}function tS(i,e,t={}){const n=!!t.softGL,s=new i.Group;s.name="fluorinationPlant",s.add(Ah(i,240));const r=wb(i,{id:"F01",h:11,r:3.4,bandColor:le.HF});r.position.set(-52,0,-8);const o=Ln(i,{id:"F02",h:9,r:2.9,bandColor:le.organic_in});o.position.set(-52,0,14);const a=La(i,{id:"F02-pump"});a.scale.set(.7,.7,.7),a.position.set(-44,0,14);const l=Da(i,{id:"F03",L:11});l.position.set(-26,0,-2);const c=Ab(i,{id:"F04",h:16,r:3.5});c.position.set(0,0,0);const h=Sp(i,{id:"F05",h:10,r:2.8});h.position.set(30,0,-6);const f=Da(i,{id:"F06",L:9,r:1.5});f.position.set(28,0,14);const u=Cb(i,{id:"F07",h:18,r:2.7});u.position.set(50,0,2);const d=Tb(i,{id:"F08",radius:5.5});d.position.set(-8,0,12);const m=La(i,{id:"F09"});m.position.set(-10,0,12);const y=Pb(i,{id:"F10"});y.position.set(66,0,-16);const g=Ln(i,{id:"FP",h:8,r:2.6,bandColor:le.fluor_product});g.position.set(66,0,12);const p=Ib(i,{id:"F2"});p.position.set(-62,0,-16),p.visible=!1;const x=Lr(i,{length:48,bandColors:[le.organic_in,le.HF,le.fluor_product],h2Indices:[]});x.position.set(-12,0,6);const _=Lr(i,{length:28,bandColors:[le.HF,le.fluor_product],h2Indices:[]});_.position.set(34,0,8),_.rotation.y=Math.PI/2;const v=180,T=new Float32Array(v*3);for(let q=0;q<v;q++)T[q*3]=(Math.random()-.5)*2.4,T[q*3+1]=Math.random()*3.5,T[q*3+2]=(Math.random()-.5)*2.4;const w=new i.BufferGeometry;w.setAttribute("position",new i.BufferAttribute(T,3));const S=new i.PointsMaterial({color:le.HF,size:.35,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0}),P=new i.Points(w,S);P.position.set(-10,2.2,12),P.name="hfMist",P.visible=!1;const b=120,M=new Float32Array(b*3);for(let q=0;q<b;q++){const ie=Math.random()*Math.PI*2,se=3+Math.random()*3;M[q*3]=Math.cos(ie)*se,M[q*3+1]=Math.random()*5,M[q*3+2]=Math.sin(ie)*se}const I=new i.BufferGeometry;I.setAttribute("position",new i.BufferAttribute(M,3));const N=new i.PointsMaterial({color:11064575,size:.22,transparent:!0,opacity:0,depthWrite:!1}),R=new i.Points(I,N);R.position.copy(d.position),R.visible=!1;const O={F01:r,F02:o,F03:l,F04:c,F05:h,F06:f,F07:u,F08:d,F09:m,F10:y};Object.values(O).forEach(q=>s.add(q)),s.add(a,g,p,x,_,P,R),e.add(s);const G={F01:new i.Vector3(-52,13,-8),F02:new i.Vector3(-52,11,14),F03:new i.Vector3(-26,4.5,-2),F04:new i.Vector3(0,14,0),F05:new i.Vector3(30,12,-6),F06:new i.Vector3(28,4,14),F07:new i.Vector3(50,18,2),F08:new i.Vector3(-8,7,12),F09:new i.Vector3(-10,3.5,12),F10:new i.Vector3(66,3.5,-16)},B=[["F01","HF 储罐","耐蚀 · bund · 双切断",G.F01],["F02","有机原料罐","R–X · 淡青",G.F02],["F03","预热/预冷换热器","管壳式",G.F03],["F04","氟化反应器","搪玻璃/衬里",G.F04],["F05","气液分离器","顶气底液",G.F05],["F06","冷凝器","冷却水环带",G.F06],["F07","尾气吸收塔","碱/水喷淋",G.F07],["F08","洗消水幕","喷淋环 · 雨淋阀",G.F08],["F09","危险法兰","双密封 · 泄漏点",G.F09],["F10","ESD 面板","急停示意",G.F10]],k=Th(i,[{tag:"HF",name:"flowHF",color:le.HF,medium:"liquid",radius:.3,speed:1.05,particleCount:n?20:36,points:[[-52,7,-8],[-38,6.8,-4],[-26,5.5,-2],[-12,6.5,2],[0,8,0]]},{tag:"organic",name:"flowOrganic",color:le.organic_in,medium:"liquid",radius:.26,speed:.9,particleCount:n?16:28,points:[[-52,6,14],[-40,5.5,8],[-26,5,2],[-10,6,0],[0,7.5,0]]},{tag:"product",name:"flowFluorProduct",color:le.fluor_product,medium:"liquid",radius:.26,speed:.85,particleCount:n?16:30,points:[[0,8,0],[14,7,-3],[30,8,-6],[40,7,0],[50,6,4],[66,6,12]]},{tag:"tail",name:"flowTailGas",color:le.HF,medium:"gas",radius:.2,speed:1.1,particleCount:n?14:24,points:[[0,14,0],[14,13,-2],[30,12,-4],[40,14,0],[50,16,2]]}],n);s.add(k.root);const z=Qb(i,{position:{x:50,y:18.2,z:2},color:"#b0c4e0",count:n?40:70,rise:5.5,spread:1.8,softGL:n,name:"F07ScrubMist"});s.add(z.root);let j=0,ce=!1;function U(q){const ie=c.userData;ie.cutawayTarget&&(ie.cutawayTarget.material.transparent=!!q,ie.cutawayTarget.material.opacity=q?.22:1,ie.cutawayTarget.material.depthWrite=!q,ie.cutawayTarget.material.needsUpdate=!0),ie.jacket&&(ie.jacket.visible=!q),[ie.lining,ie.shaft,ie.blade,ie.cutPlane].forEach(se=>{se&&(se.visible=!!q,se.material&&"opacity"in se.material&&(se.material.opacity=q?se===ie.cutPlane?.35:.85:0))}),u.userData.spray&&(u.userData.spray.visible=!!q),u.userData.pack&&(u.userData.pack.visible=!!q),h.userData.demister&&(h.userData.demister.visible=!!q)}function re(q){p.visible=!!q}const ge=new i.PointLight(le.HF,0,36);ge.position.set(-10,6,12),s.add(ge);let $=null,he=null,ne=null;const Q=[];function me(){clearInterval($),$=null,clearInterval(he),he=null,clearInterval(ne),ne=null,Q.forEach(clearTimeout),Q.length=0}function _e(q){const ie=y.userData?.btn;ie?.material&&(ie.material.emissiveIntensity=q?1.2:.65),m.traverse(se=>{se.isMesh&&se.material?.emissive&&se.geometry?.type==="SphereGeometry"&&(se.material.emissiveIntensity=q?1.4:.6,q&&se.material.emissive.set(le.danger_red))}),r.traverse(se=>{se.isMesh&&se.material?.emissive&&se.geometry?.type==="SphereGeometry"&&(se.material.emissiveIntensity=q?1.2:.6)})}function X(){clearInterval($),$=setInterval(()=>{const q=w.attributes.position.array;for(let ie=0;ie<v;ie++)q[ie*3+1]+=.02+Math.random()*.03,q[ie*3+1]>4&&(q[ie*3+1]=0);w.attributes.position.needsUpdate=!0},40)}function de(){clearInterval(he),he=setInterval(()=>{const q=I.attributes.position.array;for(let ie=0;ie<b;ie++)q[ie*3+1]-=.04+Math.random()*.04,q[ie*3+1]<0&&(q[ie*3+1]=5);I.attributes.position.needsUpdate=!0},40)}function F(q){me(),P.visible=!1,S.opacity=0,R.visible=!1,N.opacity=0,ge.intensity=0,_e(!1);const ie=()=>{P.visible=!0,S.color.set(le.HF),S.opacity=.78,ge.color.set(le.HF),ge.intensity=1.8,X()},se=()=>{R.visible=!0,N.opacity=.7,S.opacity=Math.min(S.opacity,.28),de()},Ae=()=>{_e(!0),ge.color.set(le.danger_red),ge.intensity=2,clearInterval(ne),ne=setInterval(()=>{const Me=y.userData?.btn;Me?.material&&(Me.material.emissiveIntensity=Me.material.emissiveIntensity>.8?.35:1.25)},280)};return q==="washdown"?(ie(),se()):q==="esd"?(ie(),se(),Ae()):q==="overtemp"||q==="valve_open"?(ie(),S.opacity=.45,ge.intensity=1.2):(ie(),Q.push(setTimeout(se,900)),Q.push(setTimeout(Ae,1800))),()=>{me(),P.visible=!1,S.opacity=0,R.visible=!1,N.opacity=0,ge.intensity=0,_e(!1)}}function Z(q,ie,{playing:se=!1}={}){j=q|0,ce=!!se;const Ae=ie?.focus;let Me=[];j===0?Me=[]:Ae==="F01"||j===1?Me=["HF","organic"]:Ae==="F03"||j===2?Me=["HF","organic"]:Ae==="F04"||j===3?Me=["HF","organic","product"]:Ae==="F05"||j===4?Me=["product","tail"]:Ae==="F07"||j===5?Me=["tail","HF"]:(ie?.safetyMode||j===6)&&(Me=["HF"]),k.applyStepBoost(Me,{idle:.48,active:1,playing:ce});const D=Ae==="F07"||j===5||j===0?ce?1.35:1:.55;z.setBoost(D)}function L(q,ie={}){const se=ie.elapsed??0;ie.playing!=null&&(ce=!!ie.playing),k.update(q,se),z.update(q)}function xe(){U(!1),re(!1),me(),P.visible=!1,S.opacity=0,R.visible=!1,N.opacity=0,ge.intensity=0,_e(!1),Z(0,{focus:"F04"},{playing:!1})}return Z(0,{focus:"F04"},{playing:!1}),{root:s,devices:O,anchors:G,labels:B,setCutaway:U,setF2Contrast:re,triggerAlarm:F,reset:xe,update:L,setFxStep:Z,fx:{flows:k,scrubMist:z}}}const fc={uniforms:{uTime:{value:0},uIntensity:{value:1},uTurbulence:{value:.7}},vertexShader:`
    attribute float aSize;
    attribute float aAge;
    attribute float aSeed;
    varying float vAge;
    varying float vSeed;
    uniform float uTime;
    uniform float uTurbulence;

    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      f = f*f*(3.0-2.0*f);
      float n = i.x + i.y*57.0;
      return mix(mix(hash(n), hash(n+1.0), f.x), mix(hash(n+57.0), hash(n+58.0), f.x), f.y);
    }

    void main() {
      vAge = aAge;
      vSeed = aSeed;
      vec3 pos = position;
      float t = uTime * 1.35 + aSeed * 10.0;
      float wob = (noise(vec2(pos.y * 2.0 + t, aSeed * 5.0)) - 0.5) * uTurbulence * 0.4;
      pos.x += wob;
      pos.z += (noise(vec2(aSeed * 3.0, pos.y * 2.0 + t * 0.8)) - 0.5) * uTurbulence * 0.4;
      vec4 mv = modelViewMatrix * vec4(pos, 1.0);
      float grow = mix(1.25, 0.35, aAge);
      gl_PointSize = aSize * grow * (180.0 / max(-mv.z, 0.5));
      gl_Position = projectionMatrix * mv;
    }
  `,fragmentShader:`
    uniform float uTime;
    uniform float uIntensity;
    varying float vAge;
    varying float vSeed;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    float noise(vec2 p) {
      vec2 i = floor(p); vec2 f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x),
                 mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0; float a = 0.5;
      for (int i = 0; i < 3; i++) {
        v += a * noise(p);
        p = p * 2.15 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return v;
    }
    vec3 fireRamp(float t) {
      vec3 c0 = vec3(1.0, 0.98, 0.92);
      vec3 c1 = vec3(1.0, 0.85, 0.25);
      vec3 c2 = vec3(1.0, 0.40, 0.05);
      vec3 c3 = vec3(0.55, 0.08, 0.02);
      vec3 c4 = vec3(0.08, 0.02, 0.01);
      if (t < 0.2) return mix(c0, c1, t / 0.2);
      if (t < 0.45) return mix(c1, c2, (t - 0.2) / 0.25);
      if (t < 0.7) return mix(c2, c3, (t - 0.45) / 0.25);
      return mix(c3, c4, (t - 0.7) / 0.3);
    }
    void main() {
      vec2 uv = gl_PointCoord;
      vec2 c = uv - 0.5;
      float dist = length(c);
      if (dist > 0.5) discard;
      float t = uTime * 2.0 + vSeed * 12.0;
      vec2 q = uv * vec2(2.0, 3.0);
      q.y += t * 0.55;
      vec2 warp = vec2(fbm(q + vSeed), fbm(q.yx + 4.1 + t * 0.2));
      float n = fbm(q + warp * 1.0);
      n = pow(n, 1.1);
      float soft = 1.0 - smoothstep(0.12, 0.5, dist);
      float flame = soft * n * smoothstep(1.05, 0.25, vAge);
      if (flame < 0.02) discard;
      vec3 col = fireRamp(vAge * 0.85 + (1.0 - n) * 0.25);
      col *= (1.3 + uIntensity * 1.1) * flame;
      float alpha = clamp(flame * (0.85 + uIntensity * 0.3), 0.0, 1.0);
      gl_FragColor = vec4(col, alpha);
    }
  `};function nS(i,e={}){const{position:t={x:0,y:0,z:0},intensity:n=1,softGL:s=!1,sizeMode:r=s?"small":"mid",name:o="flareFlame"}=e,a={small:{count:s?110:160,radius:.85,height:3.2,size:s?36:22},mid:{count:s?170:280,radius:1.15,height:4.2,size:s?42:26},large:{count:s?220:420,radius:1.5,height:5.2,size:s?48:30}},l=a[r]||a.mid,c=new i.Group;c.name=o,c.position.set(t.x,t.y,t.z);const h=l.count,f=new Float32Array(h*3),u=new Float32Array(h),d=new Float32Array(h),m=new Float32Array(h),y=new Float32Array(h*3),g=new Float32Array(h),p=new Float32Array(h);function x(k,z){const j=Math.random()*Math.PI*2,ce=Math.random()*l.radius*(.25+Math.random()*.75);f[k*3]=Math.cos(j)*ce,f[k*3+1]=z?Math.random()*l.height:.05,f[k*3+2]=Math.sin(j)*ce,y[k*3]=(Math.random()-.5)*.55,y[k*3+1]=1.6+Math.random()*2.2,y[k*3+2]=(Math.random()-.5)*.55,p[k]=.5+Math.random()*.7,g[k]=z?Math.random()*p[k]:0,d[k]=g[k]/p[k]}for(let k=0;k<h;k++)m[k]=Math.random(),u[k]=l.size*(.7+Math.random()*.7),x(k,!0);const _=new i.BufferGeometry;_.setAttribute("position",new i.BufferAttribute(f,3)),_.setAttribute("aSize",new i.BufferAttribute(u,1)),_.setAttribute("aAge",new i.BufferAttribute(d,1)),_.setAttribute("aSeed",new i.BufferAttribute(m,1));const v=i.UniformsUtils.clone(fc.uniforms);v.uIntensity.value=n;const T=new i.Points(_,new i.ShaderMaterial({uniforms:v,vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,transparent:!0,depthWrite:!1,blending:i.AdditiveBlending}));T.frustumCulled=!1,c.add(T);const w=s?18:36,S=new Float32Array(w*3),P=new Float32Array(w*3);for(let k=0;k<w;k++)S[k*3]=(Math.random()-.5)*l.radius,S[k*3+1]=Math.random()*l.height,S[k*3+2]=(Math.random()-.5)*l.radius,P[k*3]=(Math.random()-.5)*.5,P[k*3+1]=1+Math.random()*2,P[k*3+2]=(Math.random()-.5)*.5;const b=new i.BufferGeometry;b.setAttribute("position",new i.BufferAttribute(S,3));const M=new i.Points(b,new i.PointsMaterial({color:16755268,size:s?.22:.12,transparent:!0,opacity:.85,depthWrite:!1,blending:i.AdditiveBlending,sizeAttenuation:!0}));M.frustumCulled=!1,c.add(M);const I=new i.PointLight(16733472,2.2*n,s?28:40);I.position.set(0,.6,0),I.name="flareGlow",c.add(I);let N=n,R=1;function O(k){R=Math.max(.2,Number(k)||1)}function G(k,z){if(!c.visible)return;const j=N*R;v.uTime.value=z??0,v.uIntensity.value=j,v.uTurbulence.value=.55+R*.25;for(let U=0;U<h;U++)g[U]+=k,f[U*3]+=y[U*3]*k,f[U*3+1]+=y[U*3+1]*k*(.85+R*.25),f[U*3+2]+=y[U*3+2]*k,y[U*3]+=(Math.random()-.5)*k*1.2,y[U*3+2]+=(Math.random()-.5)*k*1.2,d[U]=g[U]/p[U],(g[U]>=p[U]||f[U*3+1]>l.height*1.2)&&x(U,!1);T.geometry.attributes.position.needsUpdate=!0,T.geometry.attributes.aAge.needsUpdate=!0;for(let U=0;U<w;U++)S[U*3]+=P[U*3]*k,S[U*3+1]+=P[U*3+1]*k,S[U*3+2]+=P[U*3+2]*k,P[U*3+1]-=.7*k,(S[U*3+1]>l.height*1.5||S[U*3+1]<0)&&(S[U*3]=(Math.random()-.5)*l.radius,S[U*3+1]=.2,S[U*3+2]=(Math.random()-.5)*l.radius,P[U*3+1]=1+Math.random()*2);M.geometry.attributes.position.needsUpdate=!0;const ce=Math.sin((z??0)*11)*.22+Math.sin((z??0)*23.7)*.1;I.intensity=(1.8+ce)*j}function B(){c.traverse(k=>{k.geometry&&k.geometry.dispose(),k.material&&k.material.dispose()})}return{root:c,update:G,setBoost:O,dispose:B}}function iS(i,e,t={}){const n=!!t.softGL,s=new i.Group;s.name="hydrogenationPlant",s.add(Ah(i,240));const r=Ln(i,{id:"H01",h:12,r:3.5,bandColor:le.H2,h2:!0});r.position.set(-52,0,-6);const o=La(i,{id:"H02"});o.position.set(-36,0,10);const a=Ln(i,{id:"H03",h:9,r:2.8,bandColor:le.substrate});a.position.set(-28,0,-10);const l=Sd(i,{id:"H03pump",h2:!1});l.position.set(-20,0,-10),l.scale.set(.45,.45,.45),l.traverse(ne=>{ne.userData&&(ne.userData.id="H03")});const c=Da(i,{id:"H04",L:12,r:1.7});c.position.set(-8,0,-4);const h=Mb(i,{id:"H05",h:22,r:3.7});h.position.set(6,0,-2);const f=new i.MeshStandardMaterial({color:3811874,metalness:.15,roughness:.82,envMapIntensity:.5,transparent:!0,opacity:.9,emissive:new i.Color(le.warn_orange),emissiveIntensity:.05}),u=new i.Group;u.name="beds",u.visible=!1;for(let ne=0;ne<3;ne++){const Q=new i.Mesh(new i.CylinderGeometry(3.1,3.1,1.8,24),f.clone());Q.material.color.offsetHSL(.02*ne,0,.04*ne),Q.position.y=7+ne*4.5,u.add(Q)}h.add(u),h.userData.beds=u;const d=Da(i,{id:"H06",L:11,r:1.6});d.position.set(30,0,-8);const m=Sp(i,{id:"H07",h:11,r:3.1});m.position.set(44,0,2);const y=Sd(i,{id:"H08",h2:!0});y.position.set(32,0,16),y.scale.set(.85,.85,.85);const g=bb(i,{id:"H09"});g.position.set(62,0,-18);const p=Sb(i,{id:"H10"});p.position.set(-12,0,12);const x=Ln(i,{id:"H11",h:9,r:3.1,bandColor:le.h2_product});x.position.set(64,0,10);const _=Lr(i,{length:40,bandColors:[le.H2,le.substrate],h2Indices:[0]});_.position.set(-16,0,6);const v=Lr(i,{length:30,bandColors:[le.H2,le.h2_product],h2Indices:[0]});v.position.set(34,0,12),v.rotation.y=Math.PI/2;const T=new i.Mesh(new i.BoxGeometry(78,.08,1.15),new i.MeshBasicMaterial({color:le.H2}));T.position.set(2,.05,18),s.add(T);const w=new i.Mesh(new i.SphereGeometry(2.4,16,16),new i.MeshBasicMaterial({color:16777215,transparent:!0,opacity:0}));w.position.set(-16,7.2,6),w.name="leakFx";const S=new i.Mesh(new i.RingGeometry(4.5,9,48),new i.MeshBasicMaterial({color:le.danger_red,transparent:!0,opacity:0,side:i.DoubleSide}));S.rotation.x=-Math.PI/2,S.position.set(-16,.08,6),s.add(w,S);const P={H01:r,H02:o,H03:a,H04:c,H05:h,H06:d,H07:m,H08:y,H09:g,H10:p,H11:x};Object.values(P).forEach(ne=>s.add(ne)),s.add(l,_,v),e.add(s);const b={H01:new i.Vector3(-52,13,-6),H02:new i.Vector3(-36,3.5,10),H03:new i.Vector3(-28,10,-10),H04:new i.Vector3(-8,4.5,-4),H05:new i.Vector3(6,16,-2),H06:new i.Vector3(30,4.5,-8),H07:new i.Vector3(44,14,2),H08:new i.Vector3(32,4,16),H09:new i.Vector3(62,28,-18),H10:new i.Vector3(-12,4.2,12),H11:new i.Vector3(64,12,10)},M=[["H01","氢气缓冲罐","H₂ · 白色标识",b.H01],["H02","N₂ 置换阀组","开车前惰性置换",b.H02],["H03","底物进料","硝基苯 · 示意",b.H03],["H04","进料换热器","预热混合",b.H04],["H05","加氢反应器","固定床 · 教学示意",b.H05],["H06","出料换热器","冷却",b.H06],["H07","高压分离器","气液分离",b.H07],["H08","循环氢压缩机","提高利用率",b.H08],["H09","火炬","事故放空",b.H09],["H10","可燃气体探头","管廊挂点 · 示意",b.H10],["H11","产物储罐","苯胺 · 示意",b.H11]],I=Th(i,[{tag:"H2",name:"flowH2",color:le.H2,medium:"gas",radius:.32,speed:1.35,particleCount:n?22:40,points:[[-52,8,-6],[-36,7.2,0],[-16,7,4],[-8,6.2,-2],[6,10,-2]]},{tag:"N2",name:"flowN2",color:le.N2,medium:"gas",radius:.22,speed:.95,particleCount:n?16:28,points:[[-36,3.2,10],[-30,4.5,6],[-24,5.5,0],[-16,6.2,4]]},{tag:"substrate",name:"flowSubstrate",color:le.substrate,medium:"liquid",radius:.28,speed:.9,particleCount:n?18:32,points:[[-28,6,-10],[-18,5.5,-6],[-8,5,-4],[0,7,-3],[6,9,-2]]},{tag:"product",name:"flowProduct",color:le.h2_product,medium:"liquid",radius:.26,speed:.85,particleCount:n?18:32,points:[[6,8,-2],[22,6,-5],[30,5.5,-8],[38,7,-2],[44,8,2],[54,7,6],[64,7,10]]},{tag:"recycle",name:"flowRecycleH2",color:le.H2,medium:"gas",radius:.24,speed:1.2,particleCount:n?16:28,points:[[44,12,2],[38,9,10],[32,5,16],[22,8,8],[12,14,-2]]}],n);s.add(I.root);const N=new i.Vector3(62,30.4,-24),R=nS(i,{position:N,intensity:n?.95:1.15,softGL:n,sizeMode:n?"small":"mid",name:"H09Flame"});s.add(R.root);let O=!1,G=0,B=!1,k=.05;function z(ne){O=!!ne;const Q=h.userData.cutawayTarget;Q&&(Q.material.transparent=O,Q.material.opacity=O?.22:1,Q.material.depthWrite=!O,Q.material.needsUpdate=!0);const me=h.userData.insulation;me&&(me.material.transparent=O,me.material.opacity=O?.12:1,me.material.depthWrite=!O,me.visible=!O||!0,me.material.needsUpdate=!0),u.visible=O;const _e=m.userData.demister;_e&&(_e.visible=O)}const j=new i.PointLight(le.danger_red,0,55);j.position.set(-16,10,6),s.add(j);function ce(ne){const Q=p.userData.lens;Q&&(Q.material.color.set(ne?le.danger_red:le.safe_green),Q.material.emissive.set(ne?le.danger_red:le.safe_green),Q.material.emissiveIntensity=ne?1.15:.7);const me=p.userData.lampWarn,_e=p.userData.lampAlarm;me&&(me.material.emissiveIntensity=ne?.9:.05),_e&&(_e.material.emissiveIntensity=ne?1.2:.05)}function U(ne){return ne==="h2_leak"||ne==="lel"?(w.material.opacity=.38,S.material.opacity=.24,j.intensity=2.5,ce(!0),R.setBoost(1.55)):ne==="hotspot"||ne==="poison"?(j.position.copy(b.H05).setY(24),j.intensity=2,k=.35):ne==="esd"&&(w.material.opacity=.12,S.material.opacity=.1,j.intensity=1.2,ce(!0),R.setBoost(1.4)),()=>{w.material.opacity=0,S.material.opacity=0,j.intensity=0,j.position.set(-16,10,6),ce(!1),k=.05,R.setBoost(1)}}function re(ne){const Q=h.userData.cutawayTarget;Q&&(ne==="H05"?(Q.material.emissive=new i.Color(le.warn_orange),Q.material.emissiveIntensity=.18):Q.material.emissiveIntensity=0)}function ge(ne,Q,{playing:me=!1}={}){G=ne|0,B=!!me;const _e=Q?.focus;let X=[];G===0?X=[]:_e==="H02"||G===1?X=["N2","H2"]:_e==="H04"||G===2?X=["substrate","H2"]:_e==="H05"||G===3?X=["H2","substrate","recycle"]:_e==="H07"||G===4?X=["product","recycle","H2"]:_e==="H11"||G===5?X=["product"]:(Q?.safetyMode||G===6)&&(X=["H2","recycle"]),I.applyStepBoost(X,{idle:.5,active:1,playing:B});const de=_e==="H09"||Q?.safetyMode||G===6?B?1.45:1.2:G===0?.85:.7;R.setBoost(de),k=_e==="H05"||G===3||O?.22:.05}function $(ne,Q={}){const me=Q.elapsed??0;Q.playing!=null&&(B=!!Q.playing),I.update(ne,me),R.update(ne,me);const _e=y.userData?.rotor;if(_e){const X=G===0||G===3||G===4||B?1:.45;_e.rotation.x+=ne*2.8*X*(B?1.35:1)}(u.visible||G===3)&&u.children.forEach((X,de)=>{if(!X.material)return;const F=.5+.5*Math.sin(me*2.4+de*1.1);X.material.emissiveIntensity=k*(.6+F*.8)})}function he(){z(!1),w.material.opacity=0,S.material.opacity=0,j.intensity=0,ce(!1),re(null),k=.05,R.setBoost(.85),ge(0,{focus:"H05"},{playing:!1})}return ge(0,{focus:"H05"},{playing:!1}),{root:s,devices:P,anchors:b,labels:M,setCutaway:z,triggerAlarm:U,setHero:re,reset:he,update:$,setFxStep:ge,fx:{flows:I,flame:R},get cutaway(){return O}}}function sS(i,e,t={}){const n=!!t.softGL,s=new i.Group;s.name="diazotizationPlant",s.add(Ah(i,200));const r=wd(i,{id:"D01",h:9,r:3.5,jacketColor:le.coolant});r.position.set(0,0,0);const o=Ad(i,{id:"D02",h:4.2,r:1.45,bandColor:le.nitrite});o.position.set(-16,3.8,8);const a=Eb(i,{id:"D03"});a.position.set(28,0,-14);const l=Ln(i,{id:"D04",h:7,r:2.4,bandColor:le.acid});l.position.set(-28,0,-6);const c=Ad(i,{id:"D05",h:4,r:1.35,bandColor:le.aniline});c.position.set(-22,2.5,-10);const h=Db(i,{id:"D06",r:4,h:3});h.position.set(32,0,12);const f=Lb(i,{id:"D07"});f.position.set(3.2,10.5,0);const u=wd(i,{id:"D08",h:7.5,r:2.8,jacketColor:le.azo_dye});u.position.set(36,0,4),u.visible=!1;const d=Lr(i,{length:36,bandColors:[le.coolant,le.diazonium,le.nitrite],h2Indices:[]});d.position.set(-4,0,-8);const m=new i.Mesh(new i.CylinderGeometry(.55,.55,4,12),new i.MeshStandardMaterial({color:13160666,roughness:.86,metalness:0,envMapIntensity:.45}));m.rotation.z=Math.PI/2,m.position.set(4,7.2,-8);const y=new i.Mesh(new i.CylinderGeometry(.28,.28,4.2,10),new i.MeshStandardMaterial({color:12634320,metalness:.88,roughness:.34,envMapIntensity:1.15,emissive:0,emissiveIntensity:0}));y.rotation.z=Math.PI/2,y.position.copy(m.position);const g=new i.MeshStandardMaterial({color:le.coolant,metalness:.5,roughness:.38,envMapIntensity:1,emissive:0,emissiveIntensity:0}),p=new i.Mesh(new i.CylinderGeometry(.34,.34,.4,12),g);p.rotation.z=Math.PI/2,p.position.set(m.position.x-1.2,m.position.y,m.position.z);const x=p.clone();x.position.set(m.position.x+1.2,m.position.y,m.position.z);const _=new i.Group;_.name="D09",_.add(d,m,y,p,x),_.userData={id:"D09",pickable:!0,kind:"pipeInsulation"},d.userData=_.userData;const v=new i.Mesh(new i.CylinderGeometry(.25,.3,18,10),new i.MeshStandardMaterial({color:4871528,metalness:.8,roughness:.34,envMapIntensity:1.1}));v.rotation.z=Math.PI/2.6,v.position.set(16,5,6);const T=160,w=new Float32Array(T*3);for(let F=0;F<T;F++)w[F*3]=(Math.random()-.5)*2,w[F*3+1]=Math.random()*4,w[F*3+2]=(Math.random()-.5)*2;const S=new i.BufferGeometry;S.setAttribute("position",new i.BufferAttribute(w,3));const P=new i.PointsMaterial({color:le.N2,size:.32,transparent:!0,opacity:0,depthWrite:!1}),b=new i.Points(S,P);b.position.set(0,10,0),b.visible=!1;const M=100,I=new Float32Array(M*3);for(let F=0;F<M;F++)I[F*3]=(Math.random()-.5)*3,I[F*3+1]=Math.random()*3,I[F*3+2]=(Math.random()-.5)*3;const N=new i.BufferGeometry;N.setAttribute("position",new i.BufferAttribute(I,3));const R=new i.PointsMaterial({color:le.diazonium,size:.28,transparent:!0,opacity:0,depthWrite:!1}),O=new i.Points(N,R);O.position.set(0,5,0),O.visible=!1;const G={D01:r,D02:o,D03:a,D04:l,D05:c,D06:h,D07:f,D08:u,D09:_};Object.values(G).forEach(F=>s.add(F)),s.add(v,b,O),e.add(s);const B={D01:new i.Vector3(0,11,0),D02:new i.Vector3(-16,12,8),D03:new i.Vector3(28,5,-14),D04:new i.Vector3(-28,9,-6),D05:new i.Vector3(-22,10,-10),D06:new i.Vector3(32,5,12),D07:new i.Vector3(3.2,16,0),D08:new i.Vector3(36,10,4),D09:new i.Vector3(-4,9,-8)},k=[["D01","重氮化夹套釜","0～5 ℃ · 冰蓝夹套",B.D01],["D02","亚硝酸盐滴加罐","NaNO₂ · 高位",B.D02],["D03","冷冻机组","冰蓝介质循环",B.D03],["D04","酸配制罐","HCl",B.D04],["D05","胺计量罐","苯胺",B.D05],["D06","紧急稀释槽","事故回正",B.D06],["D07","泄放 / 逸气管","PRV · 水封示意",B.D07],["D09","夹套保温管廊","冰蓝三层剖切",B.D09]];function z(F){const Z=k.findIndex(L=>L[0]==="D08");F&&Z<0&&k.push(["D08","偶合釜","可选 · 品红",B.D08]),!F&&Z>=0&&k.splice(Z,1)}const j=Th(i,[{tag:"coolant",name:"flowCoolant",color:le.coolant,medium:"liquid",radius:.28,speed:1,particleCount:n?20:36,points:[[28,3.5,-14],[16,4.5,-10],[8,6.5,-6],[0,5.5,-2],[0,4.5,0],[-2,6.5,-4],[-4,7,-8],[4,7.2,-8],[16,5,-10],[28,3.8,-12]]},{tag:"nitrite",name:"flowNitrite",color:le.nitrite,medium:"liquid",radius:.18,speed:.7,particleCount:n?12:22,points:[[-16,9.5,8],[-10,9,5],[-4,8.5,2],[0,9.2,0]]},{tag:"amine",name:"flowAmine",color:le.aniline,medium:"liquid",radius:.2,speed:.75,particleCount:n?12:22,points:[[-22,7,-10],[-14,6.5,-6],[-6,6,-2],[0,6.5,0]]},{tag:"acid",name:"flowAcid",color:le.acid,medium:"liquid",radius:.2,speed:.7,particleCount:n?12:20,points:[[-28,5,-6],[-18,5.5,-4],[-8,5.8,-2],[0,6,0]]}],n);s.add(j.root);const ce=eS(r.userData?.jacket,i,{color:le.coolant,softGL:n});let U=0,re=!1;function ge(F){const Z=r.userData;Z.cutawayTarget&&(Z.cutawayTarget.material.transparent=!!F,Z.cutawayTarget.material.opacity=F?.22:1,Z.cutawayTarget.material.depthWrite=!F),Z.jacket&&(Z.jacket.material.opacity=F?.2:.42),[Z.shaft,Z.blade,Z.channel].forEach(L=>{L&&(L.visible=!!F,L.material&&"opacity"in L.material&&(L.material.opacity=F?.9:0))})}function $(F){u.visible=!!F,z(!!F)}let he=null;const ne=[];function Q(){clearInterval(he),he=null,ne.forEach(clearTimeout),ne.length=0}function me(F){Q(),b.visible=!1,P.opacity=0,O.visible=!1,R.opacity=0;const Z=r.userData.jacket,L=()=>{Z&&(Z.material.color.set(le.coolant),Z.material.emissive.set(le.coolant),Z.material.emissiveIntensity=.18)};L();const xe=()=>{O.visible=!0,R.opacity=.7,b.visible=!0,P.opacity=.85,P.color.set(le.N2),Z&&(Z.material.color.set(le.warn_orange),Z.material.emissive.set(le.danger_red),Z.material.emissiveIntensity=.45),he=setInterval(()=>{const ie=S.attributes.position.array;for(let Ae=0;Ae<T;Ae++)ie[Ae*3+1]+=.05+Math.random()*.06,ie[Ae*3+1]>6&&(ie[Ae*3+1]=0);S.attributes.position.needsUpdate=!0;const se=N.attributes.position.array;for(let Ae=0;Ae<M;Ae++)se[Ae*3]+=(Math.random()-.5)*.04,se[Ae*3+1]+=.02,se[Ae*3+1]>4&&(se[Ae*3+1]=0);N.attributes.position.needsUpdate=!0},40)},q=()=>{Z&&(Z.material.color.set(le.coolant),Z.material.emissive.set(le.coolant),Z.material.emissiveIntensity=.55),P.opacity=.25,R.opacity=.15};return F==="dilute"||F==="cool_boost"?(xe(),q()):F==="fast_drip"?(O.visible=!0,R.opacity=.55,he=setInterval(()=>{const ie=N.attributes.position.array;for(let se=0;se<M;se++)ie[se*3+1]+=.03,ie[se*3+1]>4&&(ie[se*3+1]=0);N.attributes.position.needsUpdate=!0},40)):(Z&&(Z.material.emissiveIntensity=.05,Z.material.color.set(6965818)),ne.push(setTimeout(xe,600)),ne.push(setTimeout(q,2200))),()=>{Q(),b.visible=!1,P.opacity=0,O.visible=!1,R.opacity=0,L()}}function _e(F,Z,{playing:L=!1}={}){U=F|0,re=!!L;const xe=Z?.focus;let q=[];U===0?q=[]:xe==="D05"||U===1?q=["amine","acid"]:xe==="D03"||U===2?q=["coolant"]:xe==="D01"&&U===3?q=["nitrite","coolant"]:xe==="D01"||U===4?q=["coolant","nitrite"]:xe==="D06"||U===5?q=["coolant"]:(Z?.safetyMode||U===6)&&(q=["coolant"]),j.applyStepBoost(q,{idle:.5,active:1,playing:re});const ie=xe==="D01"||xe==="D03"||U===2||U===3||U===4||U===0?re?1.4:1.1:.7;ce.setBoost(ie)}function X(F,Z={}){const L=Z.elapsed??0;Z.playing!=null&&(re=!!Z.playing),j.update(F,L),ce.update(L)}function de(){ge(!1),$(!1),Q(),b.visible=!1,P.opacity=0,O.visible=!1,R.opacity=0;const F=r.userData.jacket;F&&(F.material.color.set(le.coolant),F.material.emissive.set(le.coolant),F.material.emissiveIntensity=.18,F.material.opacity=.42),_e(0,{focus:"D01"},{playing:!1})}return _e(0,{focus:"D01"},{playing:!1}),{root:s,devices:G,anchors:B,labels:k,setCutaway:ge,setCoupling:$,triggerAlarm:me,reset:de,update:X,setFxStep:_e,fx:{flows:j,jacketPulse:ce}}}function pc(i){const e=location.href.replace(/[?#].*$/,"").replace(/\/?$/,"/");return new URL(`data/${i}.json`,e).href}const Lc=[{id:7,key:"fluorination",short:"氟化",file:()=>pc("fluorination")},{id:8,key:"hydrogenation",short:"加氢",file:()=>pc("hydrogenation")},{id:9,key:"diazotization",short:"重氮化",file:()=>pc("diazotization")}],Pd={7:tS,8:iS,9:sS};function Tp(){const i=new URLSearchParams(location.search),e=i.get("p")||i.get("process")||location.hash.replace(/^#/,"")||"8",t={7:7,fluorination:7,f:7,氟化:7,8:8,hydrogenation:8,h:8,加氢:8,9:9,diazotization:9,d:9,重氮化:9};return t[String(e).toLowerCase()]||t[e]||8}async function rS(i=Tp()){const e=Lc.find(r=>r.id===i)||Lc[1],t=typeof e.file=="function"?e.file():e.file,n=await fetch(t);if(!n.ok)throw new Error("Failed to load "+t);return{...await n.json(),short:e.short}}function oS(){return Lc.map(({id:i,key:e,short:t})=>({id:i,key:e,short:t}))}function aS(i,e,t,n={}){return(Pd[t.id]||Pd[8])(i,e,n)}async function lS(){const i=document.getElementById("stage"),e=document.getElementById("c"),t=document.getElementById("hud"),n=document.getElementById("labels"),s=document.getElementById("lead"),r=document.getElementById("perf"),o=document.getElementById("boot");new URLSearchParams(location.search).get("perf")&&(r.style.display="block");const{Q:l,gpu:c}=BM(),h=vb(e,{Q:l}),{camera:f,controls:u,scene:d}=h;let m=!0;NM(i,{centered:!0,onResize(){h.setSize(innerWidth,innerHeight),m=!0}});let y=null,g=null;const p=1e4,x=Tp();{const X=new URLSearchParams(location.search),de=new URLSearchParams;de.set("p",String(x));for(const F of["q","perf","softShot","env"])X.has(F)&&de.set(F,X.get(F));history.replaceState(null,"",`?${de.toString()}`)}const _=await rS(x),v=aS(Ec,d,_,{softGL:!!h.softGL});try{const X=_l(d,d,{intensityScale:Li.envIntensity,enabled:Li.envMapEnabled});console.info("[materials] refreshDeviceEnvMaps",X,"envIntensity",Li.envIntensity)}catch(X){console.warn("[materials] refreshDeviceEnvMaps failed",X)}const T=OM({camera:f,controls:u,THREE:Ec}),w=new E,S={H07:[48,-72],H09:[56,-88],H11:[52,-64],H05:[36,-64],H08:[40,-56],H06:[36,-48],H01:[-36,-56],H02:[-28,-44],H03:[-32,-56],H04:[24,-48],H10:[-20,-40],F01:[-36,-56],F02:[-28,-56],F04:[36,-64],F05:[40,-52],F07:[48,-64],F08:[40,-48],F03:[20,-44],F06:[32,-48],D01:[36,-64],D02:[-40,-56],D03:[48,-48],D04:[-44,-52],D05:[-36,-60],D06:[52,-44],D07:[28,-72],D09:[-20,-52]},P=1.02,b=(v.labels||[]).map(([X,de,F,Z])=>{const L=document.createElement("div");L.className="lb off",L.innerHTML=`<b>${X}</b><div><span class="nm">${de}</span><span class="st">${F}</span></div>`,L.dataset.id=X,n.appendChild(L),L.addEventListener("click",q=>{q.stopPropagation(),R(X)});const xe=S[X]||[28,-48];return{id:X,pos:Z,el:L,w:170,h:44,dx:xe[0],dy:xe[1]}});requestAnimationFrame(()=>{b.forEach(X=>{const de=X.el.getBoundingClientRect(),F=i.getBoundingClientRect().width/1920||1;de.width>0&&(X.w=de.width/F,X.h=de.height/F)})});function M(X){if(w.copy(X).applyMatrix4(f.matrixWorldInverse),w.z>=0)return{x:0,y:0,ok:!1};w.copy(X).project(f);const de=Math.abs(w.x)<=P&&Math.abs(w.y)<=P;return{x:(w.x*.5+.5)*1920,y:(-w.y*.5+.5)*1080,ok:de}}function I(){let X="";for(const de of b){const F=M(de.pos);if(!F.ok){de.el.classList.add("off");continue}de.el.classList.remove("off");const Z=F.x+de.dx,L=F.y+de.dy;de.el.style.left="0",de.el.style.top="0",de.el.style.transform=`translate(${Z}px, ${L}px)`;const xe=de.el.classList.contains("hero")?"#ffb06a":de.el.classList.contains("alarm")?"#ff4757":"#2ff3ff",q=Z+Math.min(de.w*.35,40),ie=L+de.h;X+=`<polyline points="${F.x.toFixed(1)},${F.y.toFixed(1)} ${q.toFixed(1)},${ie.toFixed(1)}" fill="none" stroke="${xe}" stroke-opacity=".85" stroke-width="1.4"/><circle cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="4" fill="${xe}"/><circle cx="${F.x.toFixed(1)}" cy="${F.y.toFixed(1)}" r="8" fill="none" stroke="${xe}" stroke-opacity=".45"/>`}s.innerHTML=X}function N(X,de){b.forEach(F=>{F.el.classList.toggle("hero",!de&&F.id===X),F.el.classList.toggle("alarm",!!de&&(F.id===X||X==="leak"))}),v.setHero?.(X)}function R(X,{flyCam:de=!0}={}){ce.showKnow(X),N(X,!1);const F=v.anchors[X];de&&F&&(h.setDofMode?.("close"),T.flyTo({pos:[F.x+18,F.y+8,F.z+22],tgt:[F.x,Math.max(4,F.y*.45),F.z],fov:38},1100)),m=!0}const O=new vp,G=new ee;let B=null;const k=[];d.traverse(X=>{X.isMesh&&(X.userData?.pickable||X.parent?.userData?.pickable)&&k.push(X)}),e.addEventListener("pointerdown",X=>{B=[X.clientX,X.clientY]}),e.addEventListener("pointerup",X=>{if(!B||Math.hypot(X.clientX-B[0],X.clientY-B[1])>6){B=null;return}B=null;const de=e.getBoundingClientRect();G.set((X.clientX-de.left)/de.width*2-1,-((X.clientY-de.top)/de.height)*2+1),O.setFromCamera(G,f);const F=O.intersectObjects(k,!0).find(L=>L.object.userData?.id||L.object.parent?.userData?.id);if(!F)return;const Z=F.object.userData?.id||F.object.parent?.userData?.id;Z&&R(Z)});let z=0,j=!1;const ce=Fb(t,{process:_,processes:oS(),onProcessChange(X){location.search=`?p=${X}`},onStep(X,de,F={}){const Z=de.camera||_.steps[0].camera,L=!window.__booted;z=X;const xe=X>0&&(!!de.focus||!!de.camera);h.setDofMode?.(xe?"close":"overview"),!F.lockCamera&&!de.lockCamera&&(L?(f.position.set(...Z.pos),u.target.set(...Z.tgt),f.fov=Z.fov||42,f.updateProjectionMatrix()):T.flyTo(Z,1300)),de.cutaway&&(v.setCutaway?.(!0),ce.setCutawayUi(!0)),de.focus&&N(de.focus,!!de.safetyMode),de.safetyMode&&de.alarm&&(y?.(),y=v.triggerAlarm?.(de.alarm)||null,N(de.focus||"H01",!0)),v.setFxStep?.(X,de,{playing:j}),m=!0},onPlay(X){clearInterval(g),g=null,j=!!X;const de=_.steps?.[z];v.setFxStep?.(z,de,{playing:j}),m=!0,X&&(g=setInterval(()=>{ce.go(ce.stepIndex+1),ce.stepIndex===0&&(ce.setPlaying(!1),j=!1,clearInterval(g))},p))},onCutaway(X){v.setCutaway?.(X),m=!0},onAlarm(X){y?.(),y=v.triggerAlarm?.(X)||null;const de=_.showLel===!0||_.showLel==null&&_.id===8;ce.setLel(X==="h2_leak"||X==="lel"?78:40,de&&_.id===8),ce.setBadge?.("danger","安全等级 · 危险");let F="H09";X==="h2_leak"||X==="lel"?F="H01":X==="hotspot"||X==="poison"?F="H05":X==="hf_leak"||X==="valve_open"?F="F09":X==="washdown"?F="F08":X==="esd"&&_.id===7?F="F10":X==="overtemp"&&_.id===7?F="F04":X==="chill_fail"||X==="overtemp"||X==="fast_drip"?F=_.id===9?"D01":_.id===7?"F04":"H05":X==="dilute"||X==="cool_boost"?F="D06":X==="esd"&&(F="H09"),N(F,!0),m=!0},onDemo(X,de){(de?.cutaway||X==="H05")&&(v.setCutaway?.(!0),ce.setCutawayUi(!0)),X&&R(X)},onCardBack(){b.forEach(X=>X.el.classList.remove("hero")),z===0&&h.setDofMode?.("overview")},onReset(){clearInterval(g),g=null,j=!1,y?.(),y=null,v.reset?.(),b.forEach(X=>{X.el.classList.remove("hero","alarm")}),h.setDofMode?.("overview"),m=!0}});u.addEventListener("change",()=>{m=!0});let U=performance.now(),re=0,ge=0;const $=d.getObjectByName("roadTraffic"),he=d.getObjectByName("safetyPatrols");let ne=0;function Q(X){requestAnimationFrame(Q);const de=Math.min(40,X-U);U=X;const F=de/1e3;if(ne+=F,$?.userData?.update&&($.userData.update(de),m=!0),he?.userData?.update&&(he.userData.update(de),m=!0),v.update&&(v.update(F,{elapsed:ne,stepIndex:z,playing:j||!!ce.playing}),m=!0),(T.update(de)||u.update())&&(m=!0),!!m&&(m=!1,f.lookAt(u.target),h.render(),I(),re++,ge+=de,re%30===0)){const Z=3e4/Math.max(1,ge);ge=0,r.style.display==="block"&&(r.textContent=`${l} · ${Z.toFixed(1)} fps · ${_.short}`)}}{const X=_.steps[0].camera;f.position.set(...X.pos),u.target.set(...X.tgt),f.fov=X.fov||42,f.updateProjectionMatrix()}h.setSize(innerWidth,innerHeight),h.render(),I(),o.style.opacity="0",setTimeout(()=>o.remove(),650),window.__booted=!0,window.__ready=!0;const me=Bb(h);Ms(me,Li,{skipPersist:!0});const _e=Xb(me,{markDirty:()=>{m=!0},defaults:{...Li}});window.__app={process:_,plant:v,hud:ce,fly:T,S:h,Q:l,gpu:c,fx:v.fx||null,envHandles:me,envPanel:_e,go:X=>ce.go(X),setDofMode:X=>h.setDofMode?.(X),openDevice:R,applySoftGLShotGrade:X=>{const de=Td(h,X);return m=!0,de},clearSoftGLShotGrade:()=>{const X=Yb(h);return m=!0,X},SOFTGL_SHOT_GRADE:rr},h.setDofMode?.("overview"),$b()&&h.softGL&&(Td(h),m=!0),requestAnimationFrame(Q),document.addEventListener("contextmenu",X=>X.preventDefault()),document.addEventListener("keydown",X=>{(X.key==="F12"||X.ctrlKey&&X.shiftKey&&/[IJC]/i.test(X.key)||X.ctrlKey&&/u/i.test(X.key))&&X.preventDefault()})}lS().catch(i=>{console.error(i);const e=document.getElementById("boot");e&&(e.textContent="启动失败："+(i&&i.message||i))});
