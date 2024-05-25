let e,t,n,i,r,s,o,a,l,h,c,u,d,p;var f,_,m,g,v,y,w,I,C=globalThis,b={},T=b={};function E(){throw Error("setTimeout has not been defined")}function k(){throw Error("clearTimeout has not been defined")}function S(e){if(g===setTimeout)return setTimeout(e,0);if((g===E||!g)&&setTimeout)return g=setTimeout,setTimeout(e,0);try{return g(e,0)}catch(t){try{return g.call(null,e,0)}catch(t){return g.call(this,e,0)}}}!function(){try{g="function"==typeof setTimeout?setTimeout:E}catch(e){g=E}try{v="function"==typeof clearTimeout?clearTimeout:k}catch(e){v=k}}();var P=[],N=!1,R=-1;function O(){N&&y&&(N=!1,y.length?P=y.concat(P):R=-1,P.length&&A())}function A(){if(!N){var e=S(O);N=!0;for(var t=P.length;t;){for(y=P,P=[];++R<t;)y&&y[R].run();R=-1,t=P.length}y=null,N=!1,function(e){if(v===clearTimeout)return clearTimeout(e);if((v===k||!v)&&clearTimeout)return v=clearTimeout,clearTimeout(e);try{v(e)}catch(t){try{return v.call(null,e)}catch(t){return v.call(this,e)}}}(e)}}function D(e,t){this.fun=e,this.array=t}function x(){}T.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];P.push(new D(e,t)),1!==P.length||N||S(A)},D.prototype.run=function(){this.fun.apply(null,this.array)},T.title="browser",T.browser=!0,T.env={},T.argv=[],T.version="",T.versions={},T.on=x,T.addListener=x,T.once=x,T.off=x,T.removeListener=x,T.removeAllListeners=x,T.emit=x,T.prependListener=x,T.prependOnceListener=x,T.listeners=function(e){return[]},T.binding=function(e){throw Error("process.binding is not supported")},T.cwd=function(){return"/"},T.chdir=function(e){throw Error("process.chdir is not supported")},T.umask=function(){return 0};const L={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},M=function(e,t){if(!e)throw F(t)},F=function(e){return Error("Firebase Database ("+L.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},U=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},q=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},j={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,c=(3&r)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(U(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):q(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new V;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class V extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const W=function(e){let t=U(e);return j.encodeByteArray(t,!0)},B=function(e){return W(e).replace(/\./g,"")},H=function(e){try{return j.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},z=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==C)return C;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,$=()=>{if(void 0===b||void 0===b.env)return;let e=void 0;if(e)return JSON.parse(e)},K=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&H(e[1]);return t&&JSON.parse(t)},G=()=>{try{return z()||$()||K()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Y=e=>{var t,n;return null===(n=null===(t=G())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},J=e=>{let t=Y(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Q=()=>{var e;return null===(e=G())||void 0===e?void 0:e.config},X=e=>{var t;return null===(t=G())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function et(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function en(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ei(){return!0===L.NODE_CLIENT||!0===L.NODE_ADMIN}class er extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,es.prototype.create)}}class es{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(eo,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new er(i,o,n)}}const eo=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){return JSON.parse(e)}function el(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=ea(H(s[0])||""),n=ea(H(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},ec=function(e){let t=eh(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},eu=function(e){let t=eh(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ep(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ef(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function e_(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function em(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(eg(n)&&eg(s)){if(!em(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function eg(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ey(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function ew(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=1518500249):(n=o^a^l,i=1859775393):e<60?(n=o&a|l&(o|a),i=2400959708):(n=o^a^l,i=3395469782);let t=(s<<5|s>>>27)+n+h+i+r[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}class eC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(i=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(i.next=eb),void 0===i.error&&(i.error=eb),void 0===i.complete&&(i.complete=eb);let r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(){}function eT(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;M(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},ek=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e){return e&&e._delegate?e._delegate:e}class eP{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new Z;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eN})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=eN){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eN){return this.instances.has(e)}getOptions(e=eN){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===eN?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=eN){return this.component?this.component.multipleInstances?e:eN:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=[];(f=w||(w={}))[f.DEBUG=0]="DEBUG",f[f.VERBOSE=1]="VERBOSE",f[f.INFO=2]="INFO",f[f.WARN=3]="WARN",f[f.ERROR=4]="ERROR",f[f.SILENT=5]="SILENT";const eD={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},ex=w.INFO,eL={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},eM=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=eL[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eF{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=eM,this._userLogHandler=null,eA.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?eD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}const eU=(e,t)=>t.some(t=>e instanceof t),eq=new WeakMap,ej=new WeakMap,eV=new WeakMap,eW=new WeakMap,eB=new WeakMap;let eH={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ej.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eV.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ez(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ez(n){var i;if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ez(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eq.set(t,e)}).catch(()=>{}),eB.set(t,e),t}(n);if(eW.has(n))return eW.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(e$(this),e),ez(eq.get(this))}:function(...e){return ez(i.apply(e$(this),e))}:function(e,...t){let n=i.call(e$(this),e,...t);return eV.set(n,e.sort?e.sort():[e]),ez(n)}:(i instanceof IDBTransaction&&function(e){if(ej.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});ej.set(e,t)}(i),eU(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,eH):i;return r!==n&&(eW.set(n,r),eB.set(r,n)),r}const e$=e=>eB.get(e),eK=["get","getKey","getAll","getAllKeys","count"],eG=["put","add","delete","clear"],eY=new Map;function eJ(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eY.get(t))return eY.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=eG.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eK.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return eY.set(t,s),s}eH={...p=eH,get:(e,t,n)=>eJ(e,t)||p.get(e,t,n),has:(e,t)=>!!eJ(e,t)||p.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eX="@firebase/app",eZ="0.10.2",e0=new eF("@firebase/app"),e1="[DEFAULT]",e2={[eX]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},e4=new Map,e3=new Map,e6=new Map;function e5(e,t){try{e.container.addComponent(t)}catch(n){e0.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function e8(e){let t=e.name;if(e6.has(t))return e0.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(e6.set(t,e),e4.values()))e5(n,e);for(let t of e3.values())e5(t,e);return!0}function e9(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function e7(e){return void 0!==e.settings}const te=new es("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new eP("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="10.11.1";function ti(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let i=Object.assign({name:e1,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw te.create("bad-app-name",{appName:String(r)});if(n||(n=Q()),!n)throw te.create("no-options");let s=e4.get(r);if(s){if(em(n,s.options)&&em(i,s.config))return s;throw te.create("duplicate-app",{appName:r})}let o=new eO(r);for(let e of e6.values())o.addComponent(e);let a=new tt(n,i,o);return e4.set(r,a),a}function tr(e=e1){let t=e4.get(e);if(!t&&e===e1&&Q())return ti();if(!t)throw te.create("no-app",{appName:e});return t}function ts(e,t,n){var i;let r=null!==(i=e2[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),e0.warn(e.join(" "));return}e8(new eP(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}const to="firebase-heartbeat-store";let ta=null;function tl(){return ta||(ta=(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(e,1),a=ez(o);return i&&o.addEventListener("upgradeneeded",e=>{i(ez(o.result),e.oldVersion,e.newVersion,ez(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(to)}catch(e){console.warn(e)}}}).catch(e=>{throw te.create("idb-open",{originalErrorMessage:e.message})})),ta}async function th(e){try{let t=(await tl()).transaction(to),n=await t.objectStore(to).get(tu(e));return await t.done,n}catch(e){if(e instanceof er)e0.warn(e.message);else{let t=te.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});e0.warn(t.message)}}}async function tc(e,t){try{let n=(await tl()).transaction(to,"readwrite"),i=n.objectStore(to);await i.put(t,tu(e)),await n.done}catch(e){if(e instanceof er)e0.warn(e.message);else{let t=te.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});e0.warn(t.message)}}}function tu(e){return`${e.name}!${e.options.appId}`}class td{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new tf(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tp();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=tp(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),t_(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),t_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=B(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function tp(){return new Date().toISOString().substring(0,10)}class tf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await th(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tc(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return tc(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function t_(e){return B(JSON.stringify({version:2,heartbeats:e})).length}function tm(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}e8(new eP("platform-logger",e=>new eQ(e),"PRIVATE")),e8(new eP("heartbeat",e=>new td(e),"PRIVATE")),ts(eX,eZ,""),ts(eX,eZ,"esm2017"),ts("fire-js",""),ts("firebase","10.11.1","app"),"function"==typeof SuppressedError&&SuppressedError;const tv=new es("auth","Firebase",tg()),ty=new eF("@firebase/auth");function tw(e,...t){ty.logLevel<=w.ERROR&&ty.error(`Auth (${tn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(e,...t){throw tE(e,...t)}function tC(e,...t){return tE(e,...t)}function tb(e,t,n){return new es("auth","Firebase",Object.assign(Object.assign({},tg()),{[t]:n})).create(t,{appName:e.name})}function tT(e){return tb(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tE(e,...t){if("string"!=typeof e){let n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return tv.create(e,...t)}function tk(e,t,...n){if(!e)throw tE(t,...n)}function tS(e){let t="INTERNAL ASSERTION FAILED: "+e;throw tw(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tN(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t){var n;this.shortDelay=e,this.longDelay=t,n="Short delay should be less than long delay!",t>e||tS(n),this.isMobile=et()||en()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===tN()||"https:"===tN()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(e,t){var n,i;n=e.emulator,i="Emulator should always be set here",n||tS(i);let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void tS("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void tS("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void tS("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},tx=new tR(3e4,6e4);function tL(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tM(e,t,n,i,r={}){return tF(e,r,async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});let o=ev(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tA.fetch()(tq(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function tF(e,t,n){e._canInitEmulator=!1;let i=Object.assign(Object.assign({},tD),t);try{let t=new tj(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let s=await r.json();if("needConfirmation"in s)throw tV(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{let[t,n]=(r.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw tV(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw tV(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw tV(e,"user-disabled",s);let o=i[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(n)throw tb(e,o,n);tI(e,o)}}catch(t){if(t instanceof er)throw t;tI(e,"network-request-failed",{message:String(t)})}}async function tU(e,t,n,i,r={}){let s=await tM(e,t,n,i,r);return"mfaPendingCredential"in s&&tI(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tq(e,t,n,i){let r=`${t}${n}?${i}`;return e.config.emulator?tO(e.config,r):`${e.config.apiScheme}://${r}`}class tj{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(tC(this.auth,"network-request-failed")),tx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tV(e,t,n){let i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);let r=tC(e,t,i);return r.customData._tokenResponse=n,r}function tW(e){return void 0!==e&&void 0!==e.enterprise}class tB{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function tH(e,t){return tM(e,"GET","/v2/recaptchaConfig",tL(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tz(e,t){return tM(e,"POST","/v1/accounts:delete",t)}async function t$(e,t){return tM(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tK(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function tG(e,t=!1){let n=eS(e),i=await n.getIdToken(t),r=tJ(i);tk(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");let s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:tK(tY(r.auth_time)),issuedAtTime:tK(tY(r.iat)),expirationTime:tK(tY(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function tY(e){return 1e3*Number(e)}function tJ(e){let[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return tw("JWT malformed, contained fewer than 3 sections"),null;try{let e=H(n);if(!e)return tw("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return tw("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function tQ(e){let t=tJ(e);return tk(t,"internal-error"),tk(void 0!==t.exp,"internal-error"),tk(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tX(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof er&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tK(this.lastLoginAt),this.creationTime=tK(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(e){var t;let n=e.auth,i=await e.getIdToken(),r=await tX(e,t$(n,{idToken:i}));tk(null==r?void 0:r.users.length,n,"internal-error");let s=r.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?t4(s.providerUserInfo):[],a=[...e.providerData.filter(e=>!o.some(t=>t.providerId===e.providerId)),...o],l=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new t0(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&h})}async function t2(e){let t=eS(e);await t1(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function t4(e){return e.map(e=>{var{providerId:t}=e,n=tm(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t3(e,t){let n=await tF(e,{},async()=>{let n=ev({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=tq(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tA.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function t6(e,t){return tM(e,"POST","/v2/accounts:revokeToken",tL(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){tk(e.idToken,"internal-error"),tk(void 0!==e.idToken,"internal-error"),tk(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):tQ(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){tk(0!==e.length,"internal-error");let t=tQ(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(tk(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:i,expiresIn:r}=await t3(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new t5;return n&&(tk("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(tk("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(tk("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t5,this.toJSON())}_performRefresh(){return tS("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t8(e,t){tk("string"==typeof e||void 0===e,"internal-error",{appName:t})}class t9{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=tm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tZ(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new t0(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){let t=await tX(this,this.stsTokenManager.getToken(this.auth,e));return tk(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tG(this,e)}reload(){return t2(this)}_assign(e){this!==e&&(tk(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new t9(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){tk(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await t1(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(e7(this.auth.app))return Promise.reject(tT(this.auth));let e=await this.getIdToken();return await tX(this,tz(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,h;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(h=t.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:I,stsTokenManager:C}=t;tk(v&&C,e,"internal-error");let b=t5.fromJSON(this.name,C);tk("string"==typeof v,e,"internal-error"),t8(c,e.name),t8(u,e.name),tk("boolean"==typeof y,e,"internal-error"),tk("boolean"==typeof w,e,"internal-error"),t8(d,e.name),t8(p,e.name),t8(f,e.name),t8(_,e.name),t8(m,e.name),t8(g,e.name);let T=new t9({uid:v,auth:e,email:u,emailVerified:y,displayName:c,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:b,createdAt:m,lastLoginAt:g});return I&&Array.isArray(I)&&(T.providerData=I.map(e=>Object.assign({},e))),_&&(T._redirectEventId=_),T}static async _fromIdTokenResponse(e,t,n=!1){let i=new t5;i.updateFromServerResponse(t);let r=new t9({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await t1(r),r}static async _fromGetAccountInfoResponse(e,t,n){let i=t.users[0];tk(void 0!==i.localId,"internal-error");let r=void 0!==i.providerUserInfo?t4(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null==r?void 0:r.length),o=new t5;o.updateFromIdToken(n);let a=new t9({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s});return Object.assign(a,{uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new t0(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null==r?void 0:r.length)}),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t7=new Map;function ne(e){var t,n;t="Expected a class definition",e instanceof Function||tS(t);let i=t7.get(e);return i?(n="Instance stored in cache mismatched with class",i instanceof e||tS(n)):(i=new e,t7.set(e,i)),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t,n){return`firebase:${e}:${t}:${n}`}nt.type="NONE";class ni{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:i,name:r}=this.auth;this.fullUserKey=nn(this.userKey,i.apiKey,r),this.fullPersistenceKey=nn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?t9._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ni(ne(nt),e,n);let i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),r=i[0]||ne(nt),s=nn(n,e.config.apiKey,e.name),o=null;for(let n of t)try{let t=await n._get(s);if(t){let i=t9._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}let a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length&&(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new ni(r,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(nl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ns(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nc(t))return"Blackberry";if(nu(t))return"Webos";if(no(t))return"Safari";if((t.includes("chrome/")||na(t))&&!t.includes("edge/"))return"Chrome";if(nh(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function ns(e=ee()){return/firefox\//i.test(e)}function no(e=ee()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function na(e=ee()){return/crios\//i.test(e)}function nl(e=ee()){return/iemobile/i.test(e)}function nh(e=ee()){return/android/i.test(e)}function nc(e=ee()){return/blackberry/i.test(e)}function nu(e=ee()){return/webos/i.test(e)}function nd(e=ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function np(e=ee()){return nd(e)||nh(e)||nu(e)||nc(e)||/windows phone/i.test(e)||nl(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(e,t=[]){let n;switch(e){case"Browser":n=nr(ee());break;case"Worker":n=`${nr(ee())}-${e}`;break;default:n=e}let i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${tn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,i)=>{try{let i=e(t);n(i)}catch(e){i(e)}});n.onAbort=t,this.queue.push(n);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(e,t={}){return tM(e,"GET","/v2/passwordPolicy",tL(e,t))}class ng{constructor(e){var t,n,i,r;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ny(this),this.idTokenSubscription=new ny(this),this.beforeStateQueue=new n_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ne(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await t$(this,{idToken:e}),n=await t9._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(e7(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!n||n===s)&&(null==o?void 0:o.user)&&(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return(tk(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId)?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await t1(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(e7(this.app))return Promise.reject(tT(this));let t=e?eS(e):null;return t&&tk(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&tk(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return e7(this.app)?Promise.reject(tT(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return e7(this.app)?Promise.reject(tT(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ne(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new ng(await nm(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new es("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await t6(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ne(e)||this._popupRedirectResolver;tk(t,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[ne(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};let r="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(tk(o,this,"internal-error"),o.then(()=>{s||r(this.currentUser)}),"function"==typeof t){let r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{let n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return tk(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){ty.logLevel<=w.WARN&&ty.warn(`Auth (${tn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}class ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let n=new eC(e,void 0);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return tk(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nw={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nI(e){return`__${e}${Math.floor(1e6*Math.random())}`}class nC{constructor(e){this.type="recaptcha-enterprise",this.auth=eS(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{tH(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(i=>{if(void 0===i.recaptchaKey)n(Error("recaptcha Enterprise site key undefined"));else{let n=new tB(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}}).catch(e=>{n(e)})})}function i(t,n,i){let r=window.grecaptcha;tW(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n("NO_RECAPTCHA")})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,r)=>{n(this.auth).then(n=>{if(!t&&tW(window.grecaptcha))i(n,e,r);else{var s;if("undefined"==typeof window){r(Error("RecaptchaVerifier is only supported in browser"));return}let t=nw.recaptchaEnterpriseScript;0!==t.length&&(t+=n),(s=t,nw.loadJS(s)).then(()=>{i(n,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function nb(e,t,n,i=!1){let r;let s=new nC(e);try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}let o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nT(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r||!r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return i(e,t).catch(async r=>{if("auth/missing-recaptcha-token"!==r.code)return Promise.reject(r);{console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let r=await nb(e,t,n,"getOobCode"===n);return i(e,r)}});{let r=await nb(e,t,n,"getOobCode"===n);return i(e,r)}}function nE(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nk(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tS("not implemented")}_getIdTokenResponse(e){return tS("not implemented")}_linkToIdToken(e,t){return tS("not implemented")}_getReauthenticationResolver(e){return tS("not implemented")}}async function nP(e,t){return tM(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(e,t){return tU(e,"POST","/v1/accounts:signInWithPassword",tL(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(e,t){return tU(e,"POST","/v1/accounts:signInWithEmailLink",tL(e,t))}async function nO(e,t){return tU(e,"POST","/v1/accounts:signInWithEmailLink",tL(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends nS{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new nA(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nA(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nT(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",nN);case"emailLink":return nR(e,{email:this._email,oobCode:this._password});default:tI(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nT(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nP);case"emailLink":return nO(e,{idToken:t,email:this._email,oobCode:this._password});default:tI(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(e,t){return tU(e,"POST","/v1/accounts:signInWithIdp",tL(e,t))}class nx extends nS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new nx(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tI("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=tm(t,["providerId","signInMethod"]);if(!n||!i)return null;let s=new nx(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return nD(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,nD(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,nD(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ev(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(e,t){return tM(e,"POST","/v1/accounts:sendVerificationCode",tL(e,t))}async function nM(e,t){return tU(e,"POST","/v1/accounts:signInWithPhoneNumber",tL(e,t))}async function nF(e,t){let n=await tU(e,"POST","/v1/accounts:signInWithPhoneNumber",tL(e,t));if(n.temporaryProof)throw tV(e,"account-exists-with-different-credential",n);return n}const nU={USER_NOT_FOUND:"user-not-found"};async function nq(e,t){return tU(e,"POST","/v1/accounts:signInWithPhoneNumber",tL(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),nU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj extends nS{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new nj({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new nj({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nM(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nF(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return nq(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new nj({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}class nV{constructor(e){var t,n,i,r,s,o;let a=ey(ew(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,h=null!==(n=a.oobCode)&&void 0!==n?n:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);tk(l&&h&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=h,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=ey(ew(e)).link,n=t?ey(ew(t)).deep_link_id:null,i=ey(ew(e)).deep_link_id;return(i?ey(ew(i)).link:null)||i||n||t||e}(e);try{return new nV(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(){this.providerId=nW.PROVIDER_ID}static credential(e,t){return nA._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=nV.parseLink(t);return tk(n,"argument-error"),nA._fromEmailAndCode(e,n.code,n.tenantId)}}nW.PROVIDER_ID="password",nW.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nW.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH extends nB{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nz extends nH{constructor(){super("facebook.com")}static credential(e){return nx._fromParams({providerId:nz.PROVIDER_ID,signInMethod:nz.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nz.credentialFromTaggedObject(e)}static credentialFromError(e){return nz.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nz.credential(e.oauthAccessToken)}catch(e){return null}}}nz.FACEBOOK_SIGN_IN_METHOD="facebook.com",nz.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n$ extends nH{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nx._fromParams({providerId:n$.PROVIDER_ID,signInMethod:n$.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n$.credentialFromTaggedObject(e)}static credentialFromError(e){return n$.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return n$.credential(t,n)}catch(e){return null}}}n$.GOOGLE_SIGN_IN_METHOD="google.com",n$.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK extends nH{constructor(){super("github.com")}static credential(e){return nx._fromParams({providerId:nK.PROVIDER_ID,signInMethod:nK.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nK.credentialFromTaggedObject(e)}static credentialFromError(e){return nK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nK.credential(e.oauthAccessToken)}catch(e){return null}}}nK.GITHUB_SIGN_IN_METHOD="github.com",nK.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG extends nH{constructor(){super("twitter.com")}static credential(e,t){return nx._fromParams({providerId:nG.PROVIDER_ID,signInMethod:nG.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nG.credentialFromTaggedObject(e)}static credentialFromError(e){return nG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nG.credential(t,n)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nY(e,t){return tU(e,"POST","/v1/accounts:signUp",tL(e,t))}nG.TWITTER_SIGN_IN_METHOD="twitter.com",nG.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){return new nJ({user:await t9._fromIdTokenResponse(e,n,i),providerId:nQ(n),_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){return await e._updateTokensIfNecessary(n,!0),new nJ({user:e,providerId:nQ(n),_tokenResponse:n,operationType:t})}}function nQ(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX extends er{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,nX.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new nX(e,t,n,i)}}function nZ(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nX._fromErrorAndOperation(e,n,t,i);throw n})}async function n0(e,t,n=!1){let i=await tX(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nJ._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(e,t,n=!1){let{auth:i}=e;if(e7(i.app))return Promise.reject(tT(i));let r="reauthenticate";try{let s=await tX(e,nZ(i,r,t,e),n);tk(s.idToken,i,"internal-error");let o=tJ(s.idToken);tk(o,i,"internal-error");let{sub:a}=o;return tk(e.uid===a,i,"user-mismatch"),nJ._forOperation(e,r,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&tI(i,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(e,t,n=!1){if(e7(e.app))return Promise.reject(tT(e));let i="signIn",r=await nZ(e,i,t),s=await nJ._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function n4(e,t){return n2(eS(e),t)}async function n3(e,t){return n1(eS(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n6(e){let t=eS(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function n5(e,t,n){if(e7(e.app))return Promise.reject(tT(e));let i=eS(e),r=nT(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nY),s=await r.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&n6(e),t}),o=await nJ._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(o.user),o}async function n8(e){return eS(e).delete()}new WeakMap;const n9="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(n9,"1"),this.storage.removeItem(n9),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class ie extends n7{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=ee();return no(e)||nd(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=np(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let i=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(function(){let e=ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ie.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends n7{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}it.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new ii(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:i}=e.data,r=this.handlersMap[n];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(r).map(async t=>t(e.origin,i)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}ii.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let i,r;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=ir("",20);s.port1.start();let h=setTimeout(()=>{a(Error("unsupported_event"))},n);r={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(h),clearTimeout(i),a(Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(){return void 0!==io().WorkerGlobalScope&&"function"==typeof io().importScripts}async function il(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="firebaseLocalStorageDb",ic="firebaseLocalStorage",iu="fbase_key";class id{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ip(e,t){return e.transaction([ic],t?"readwrite":"readonly").objectStore(ic)}function i_(){let e=indexedDB.open(ih,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(ic,{keyPath:iu})}catch(e){n(e)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(ic)?t(n):(n.close(),await new id(indexedDB.deleteDatabase(ih)).toPromise(),t(await i_()))})})}async function im(e,t,n){return new id(ip(e,!0).put({[iu]:t,value:n})).toPromise()}async function ig(e,t){let n=ip(e,!1).get(t),i=await new id(n).toPromise();return void 0===i?null:i.value}function iv(e,t){return new id(ip(e,!0).delete(t)).toPromise()}class iy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await i_()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(ia()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await il(),!this.activeServiceWorker)return;this.sender=new is(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await i_();return await im(e,n9,"1"),await iv(e,n9),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>im(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>ig(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new id(ip(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;if(0!==e.length)for(let{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function iw(e,t,n){var i,r,s;let o=await n.verify();try{let a;if(tk("string"==typeof o,e,"argument-error"),tk("recaptcha"===n.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let t=a.session;if("phoneNumber"in a)return tk("enroll"===t.type,e,"internal-error"),(await (r={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},tM(e,"POST","/v2/accounts/mfaEnrollment:start",tL(e,r)))).phoneSessionInfo.sessionInfo;{tk("signin"===t.type,e,"internal-error");let n=(null===(i=a.multiFactorHint)||void 0===i?void 0:i.uid)||a.multiFactorUid;return tk(n,e,"missing-multi-factor-info"),(await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}},tM(e,"POST","/v2/accounts/mfaSignIn:start",tL(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await nL(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}iy.type="LOCAL",nI("rcb"),new tR(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.providerId=iI.PROVIDER_ID,this.auth=eS(e)}verifyPhoneNumber(e,t){return iw(this.auth,e,eS(t))}static credential(e,t){return nj._fromVerification(e,t)}static credentialFromResult(e){return iI.credentialFromTaggedObject(e)}static credentialFromError(e){return iI.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?nj._fromTokenResponse(t,n):null}}iI.PROVIDER_ID="phone",iI.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends nS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nD(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nD(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nD(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ib(e){return n2(e.auth,new iC(e),e.bypassAuthState)}function iT(e){let{auth:t,user:n}=e;return tk(n,t,"internal-error"),n1(n,new iC(e),e.bypassAuthState)}async function iE(e){let{auth:t,user:n}=e;return tk(n,t,"internal-error"),n0(n,new iC(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ib;case"linkViaPopup":case"linkViaRedirect":return iE;case"reauthViaPopup":case"reauthViaRedirect":return iT;default:tI(this.auth,"internal-error")}}resolve(e){var t,n;t=this.pendingPromise,n="Pending promise was never set",t||tS(n),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){var t,n;t=this.pendingPromise,n="Pending promise was never set",t||tS(n),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new tR(2e3,1e4);class iP extends ik{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,iP.currentPopupAction&&iP.currentPopupAction.cancel(),iP.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return tk(e,this.auth,"internal-error"),e}async onExecution(){var e,t;e=1===this.filter.length,t="Popup operations only handle one event",e||tS(t);let n=ir();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(tC(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(tC(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,iP.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tC(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iS.get())};e()}}iP.currentPopupAction=null;const iN=new Map;class iR extends ik{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=iN.get(this.auth._key());if(!e){try{let t=await iO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}iN.set(this.auth._key(),e)}return this.bypassAuthState||iN.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iO(e,t){let n=nn("pendingRedirect",t.config.apiKey,t.name),i=ne(e._redirectPersistence);if(!await i._isAvailable())return!1;let r=await i._get(n)==="true";return await i._remove(n),r}function iA(e,t){iN.set(e._key(),t)}async function iD(e,t,n=!1){if(e7(e.app))return Promise.reject(tT(e));let i=eS(e),r=t?ne(t):(tk(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver),s=new iR(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iM(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!iM(e)){let i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(tC(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(iL(e))}saveEventToCache(e){this.cachedEventUids.add(iL(e)),this.lastProcessedEventTime=Date.now()}}function iL(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function iM({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF(e,t={}){return tM(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iq=/^https?/;async function ij(e){if(e.config.emulator)return;let{authorizedDomains:t}=await iF(e);for(let e of t)try{if(function(e){let t=tP(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){let r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!iq.test(n))return!1;if(iU.test(e))return i===e;let r=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}(e))return}catch(e){}tI(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=new tR(3e4,6e4);function iW(){let e=io().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let iB=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iH=new tR(5e3,15e3),iz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function iK(e){let t=await (iB=iB||new Promise((t,n)=>{var i,r,s,o;function a(){iW(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{iW(),n(tC(e,"network-request-failed"))},timeout:iV.get()})}if(null===(r=null===(i=io().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else if(null===(s=io().gapi)||void 0===s?void 0:s.load)a();else{let t=nI("iframefcb");return io()[t]=()=>{gapi.load?a():n(tC(e,"network-request-failed"))},(o=`${nw.gapiScript}?onload=${t}`,nw.loadJS(o)).catch(e=>n(e))}}).catch(e=>{throw iB=null,e})),n=io().gapi;return tk(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;tk(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?tO(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:tn},r=i$.get(e.config.apiHost);r&&(i.eid=r);let s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ev(i).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iz,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});let r=tC(e,"network-request-failed"),s=io().setTimeout(()=>{i(r)},iH.get());function o(){io().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iG={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iY{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}const iJ=encodeURIComponent("fac");async function iQ(e,t,n,i,r,s){tk(e.config.authDomain,e,"auth-domain-config-required"),tk(e.config.apiKey,e,"invalid-api-key");let o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:tn,eventId:r};if(t instanceof nB)for(let[n,i]of(t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ef(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))o[n]=i;if(t instanceof nH){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}for(let t of(e.tenantId&&(o.tid=e.tenantId),Object.keys(o)))void 0===o[t]&&delete o[t];let a=await e._getAppCheckToken(),l=a?`#${iJ}=${encodeURIComponent(a)}`:"";return`${function({config:e}){return e.emulator?tO(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${ev(o).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iX="webStorageSupport",iZ=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=it,this._completeRedirectFn=iD,this._overrideRedirectResult=iA}async _openPopup(e,t,n,i){var r,s,o;s=null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,o="_initialize() not called before _openPopup()",s||tS(o);let a=await iQ(e,t,n,tP(),i);return function(e,t,n,i=500,r=600){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),a="",l=Object.assign(Object.assign({},iG),{width:i.toString(),height:r.toString(),top:s,left:o}),h=ee().toLowerCase();n&&(a=na(h)?"_blank":n),ns(h)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=ee()){var t;return nd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==a)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}(t||"",a),new iY(null);let u=window.open(t||"",a,c);tk(u,e,"popup-blocked");try{u.focus()}catch(e){}return new iY(u)}(e,a,ir())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=await iQ(e,t,n,tP(),i),io().location.href=r,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){var n;let{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(n="If manager is not set, promise should be",i||tS(n),i)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await iK(e),n=new ix(e);return t.register("authEvent",t=>(tk(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(iX,{type:iX},n=>{var i;let r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[iX];void 0!==r&&t(!!r),tI(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ij(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return np()||no()||nd()}};class i0{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return tS("unexpected MultiFactorSessionType")}}}class i1 extends i0{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new i1(e)}_finalizeEnroll(e,t,n){return tM(e,"POST","/v2/accounts/mfaEnrollment:finalize",tL(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return tM(e,"POST","/v2/accounts/mfaSignIn:finalize",tL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class i2 extends i0{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new i2(t,void 0,e)}static _fromEnrollmentId(e,t){return new i2(t,e)}async _finalizeEnroll(e,t,n){return tk(void 0!==this.secret,e,"argument-error"),tM(e,"POST","/v2/accounts/mfaEnrollment:finalize",tL(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){tk(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let n={verificationCode:this.otp};return tM(e,"POST","/v2/accounts/mfaSignIn:finalize",tL(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n}))}}class i4{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new i4(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(i3(e)||i3(t))&&(i=!0),i&&(i3(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),i3(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function i3(e){return void 0===e||(null==e?void 0:e.length)===0}var i6="@firebase/auth",i5="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){tk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const i9=X("authIdTokenMaxAge")||300;let i7=null;const re=e=>async t=>{let n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>i9)return;let r=null==n?void 0:n.token;i7!==r&&(i7=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};nw={loadJS:e=>new Promise((t,n)=>{var i,r;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=tC("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},_="Browser",e8(new eP("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;tk(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});let a=new nv(n,i,r,{apiKey:s,authDomain:o,clientPlatform:_,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nf(_)});return function(e,t){let n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ne);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(a,t),a},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),e8(new eP("auth-internal",e=>new i8(eS(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),ts(i6,i5,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(_)),ts(i6,i5,"esm2017");const rt="@firebase/database",rn="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),el(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ea(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ed(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new rr(t)}}catch(e){}return new rs},ra=ro("localStorage"),rl=ro("sessionStorage"),rh=new eF("@firebase/database"),rc=(d=1,function(){return d++}),ru=function(e){let t=eE(e),n=new eI;n.update(t);let i=n.digest();return j.encodeByteArray(i)},rd=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=rd.apply(null,i):"object"==typeof i?t+=el(i):t+=i,t+=" "}return t};let rp=null,rf=!0;const r_=function(e,t){M(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(rh.logLevel=w.VERBOSE,rp=rh.log.bind(rh),t&&rl.set("logging_enabled",!0)):"function"==typeof e?rp=e:(rp=null,rl.remove("logging_enabled"))},rm=function(...e){if(!0===rf&&(rf=!1,null===rp&&!0===rl.get("logging_enabled")&&r_(!0)),rp){let t=rd.apply(null,e);rp(t)}},rg=function(e){return function(...t){rm(e,...t)}},rv=function(...e){let t="FIREBASE INTERNAL ERROR: "+rd(...e);rh.error(t)},ry=function(...e){let t=`FIREBASE FATAL ERROR: ${rd(...e)}`;throw rh.error(t),Error(t)},rw=function(...e){let t="FIREBASE WARNING: "+rd(...e);rh.warn(t)},rI=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&rw("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rC=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},rb=function(e){if(ei()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},rT="[MIN_NAME]",rE="[MAX_NAME]",rk=function(e,t){if(e===t)return 0;{if(e===rT||t===rE)return -1;if(t===rT||e===rE)return 1;let n=rx(e),i=rx(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},rS=function(e,t){return e===t?0:e<t?-1:1},rP=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+el(t))},rN=function(e){if("object"!=typeof e||null===e)return el(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=el(t[i])+":"+rN(e[t[i]]);return n+"}"},rR=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function rO(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}const rA=function(e){let t,n,i,r,s;M(!rC(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},rD=RegExp("^-?(0*)\\d{1,10}$"),rx=function(e){if(rD.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},rL=function(e){try{e()}catch(e){setTimeout(()=>{throw rw("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},rM=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){rw(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(rm("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rw(e)}}class rq{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rq.OWNER="owner";const rj=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rV="websocket",rW="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ra.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rH(e,t,n){let i;if(M("string"==typeof t,"typeof type must == string"),M("object"==typeof n,"typeof params must == object"),t===rV)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===rW)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return rO(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(){this.counters_={}}incrementCounter(e,t=1){ed(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r$={},rK={};function rG(e){let t=e.toString();return r$[t]||(r$[t]=new rz),r$[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&rL(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rJ="start";class rQ{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rg(e),this.stats_=rG(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),rH(t,rW,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new rY(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),rb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rX((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===rJ)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[rJ]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&rj.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rQ.forceAllow_=!0}static forceDisallow(){rQ.forceDisallow_=!0}static isAvailable(){return!ei()&&(!!rQ.forceAllow_||!rQ.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=el(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=rR(W(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ei())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=el(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class rX{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ei())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=rc(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=rX.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";</script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){rm("frame writing exception"),e.stack&&rm(e.stack),rm(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rm("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){ei()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{rm("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let rZ=null;"undefined"!=typeof MozWebSocket?rZ=MozWebSocket:"undefined"!=typeof WebSocket&&(rZ=WebSocket);class r0{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rg(this.connId),this.stats_=rG(t),this.connURL=r0.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!ei()&&"undefined"!=typeof location&&location.hostname&&rj.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),rH(e,rV,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ra.set("previous_websocket_failure",!0);try{let e;if(ei()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ri}/${b.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new rZ(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){r0.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==rZ&&!r0.forceDisallow_}static previouslyFailed(){return ra.isInMemoryStorage||!0===ra.get("previous_websocket_failure")}markConnectionHealthy(){ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=ea(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=el(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=rR(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}r0.responsesRequiredToBeHealthy=2,r0.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rQ,r0]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=r0&&r0.isAvailable(),n=t&&!r0.previouslyFailed();if(e.webSocketOnly&&(t||rw("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[r0];else{let e=this.transports_=[];for(let t of r1.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);r1.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}r1.globalTransportInitialized_=!1;class r2{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rg("c:"+this.id+":"),this.transportManager_=new r1(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rM(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=rP("t",e),n=rP("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=rP("t",e),n=rP("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=rP("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?rv("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rv("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&rw("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),rM(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rM(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){M(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6 extends r3{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||et()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new r6}getInitialEvent(e){return M("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class r5{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function r8(){return new r5("")}function r9(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function r7(e){return e.pieces_.length-e.pieceNum_}function se(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new r5(e.pieces_,t)}function st(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function si(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new r5(t,0)}function sr(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof r5)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new r5(n,0)}function ss(e){return e.pieceNum_>=e.pieces_.length}function so(e,t){let n=r9(e),i=r9(t);if(null===n)return t;if(n===i)return so(se(e),se(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function sa(e,t){if(r7(e)!==r7(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function sl(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(r7(e)>r7(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class sh{constructor(e,t){this.errorPrefix_=t,this.parts_=sn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ek(this.parts_[e]);sc(this)}}function sc(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+su(e))}function su(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends r3{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new sd}getInitialEvent(e){return M("visible"===e,"Unknown event type: "+e),[this.visible_]}}class sp extends r4{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=sp.nextPersistentConnectionId_++,this.log_=rg("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ei())throw Error("Auth override specified in options, but not supported on non Node.js platforms");sd.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&r6.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(el(r)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new Z,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;sp.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ed(e,"w")){let n=ep(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();rw(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||eu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=ec(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+el(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):rv("Unrecognized action received from server: "+el(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sp.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){M(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?rm("getToken() completed but was canceled"):(rm("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new r2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{rw(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&rw(e),a())}}}interrupt(e){rm("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rm("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ef(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>rN(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new r5(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){rm("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){rm("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";ei()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ri.replace(/\./g,"-")]=1,et()?e["framework.cordova"]=1:en()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=r6.getInstance().currentlyOnline();return ef(this.interruptReasons_)&&e}}sp.nextPersistentConnectionId_=0,sp.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new sf(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new sf(rT,e),i=new sf(rT,t);return 0!==this.compare(n,i)}minPost(){return sf.MIN}}class sm extends s_{static get __EMPTY_NODE(){return n}static set __EMPTY_NODE(e){n=e}compare(e,t){return rk(e.name,t.name)}isDefinedOn(e){throw F("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return sf.MIN}maxPost(){return new sf(rE,n)}makePost(e,t){return M("string"==typeof e,"KeyIndex indexValue must always be a string."),new sf(e,n)}toString(){return".key"}}const sg=new sm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class sy{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:sy.RED,this.left=null!=i?i:sw.EMPTY_NODE,this.right=null!=r?r:sw.EMPTY_NODE}copy(e,t,n,i,r){return new sy(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return sw.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return sw.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,sy.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,sy.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}sy.RED=!0,sy.BLACK=!1;class sw{constructor(e,t=sw.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new sw(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,sy.BLACK,null,null))}remove(e){return new sw(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,sy.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sv(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sv(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sv(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sv(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(e,t){return rk(e.name,t.name)}function sC(e,t){return rk(e,t)}sw.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new sy(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const sb=function(e){return"number"==typeof e?"number:"+rA(e):"string:"+e},sT=function(e){if(e.isLeafNode()){let t=e.val();M("string"==typeof t||"number"==typeof t||"object"==typeof t&&ed(t,".sv"),"Priority must be a string or number.")}else M(e===i||e.isEmpty(),"priority of unexpected type.");M(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class sE{constructor(e,t=sE.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,M(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),sT(this.priorityNode_)}static set __childrenNodeConstructor(e){r=e}static get __childrenNodeConstructor(){return r}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new sE(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:sE.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ss(e)?this:".priority"===r9(e)?this.priorityNode_:sE.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:sE.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=r9(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(M(".priority"!==n||1===r7(e),".priority must be the last token in a path"),this.updateImmediateChild(n,sE.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sb(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=rA(this.value_):e+=this.value_,this.lazyHash_=ru(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===sE.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof sE.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=sE.VALUE_TYPE_ORDER.indexOf(t),r=sE.VALUE_TYPE_ORDER.indexOf(n);return(M(i>=0,"Unknown leaf type: "+t),M(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}sE.VALUE_TYPE_ORDER=["object","boolean","number","string"];const sk=new class extends s_{compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?rk(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return sf.MIN}maxPost(){return new sf(rE,new sE("[PRIORITY-POST]",o))}makePost(e,t){return new sf(t,new sE("[PRIORITY-POST]",s(e)))}toString(){return".priority"}},sS=Math.log(2);class sP{constructor(e){this.count=parseInt(Math.log(e+1)/sS,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sN=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new sy(n?n(s):s,s.node,sy.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new sy(n?n(s):s,s.node,sy.BLACK,l,h)}};return new sw(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),c=e[s];l(new sy(n?n(c):c,c.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,sy.BLACK):(a(i,sy.BLACK),a(i,sy.RED))}return s}(new sP(e.length)))},sR={};class sO{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return M(sR&&sk,"ChildrenNode.ts has not been loaded"),a=a||new sO({".priority":sR},{".priority":sk})}get(e){let t=ep(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof sw?t:null}hasIndex(e){return ed(this.indexSet_,e.toString())}addIndex(e,t){let n;M(e!==sg,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(sf.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?sN(i,e.getCompare()):sR;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new sO(h,l)}addToIndexes(e,t){return new sO(e_(this.indexes_,(n,i)=>{let r=ep(this.indexSet_,i);if(M(r,"Missing index implementation for "+i),n===sR){if(!r.isDefinedOn(e.node))return sR;{let n=[],i=t.getIterator(sf.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),sN(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new sf(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new sO(e_(this.indexes_,n=>{if(n===sR)return n;{let i=t.get(e.name);return i?n.remove(new sf(e.name,i)):n}}),this.indexSet_)}}class sA{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&sT(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return l||(l=new sA(new sw(sC),null,sO.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||l}updatePriority(e){return this.children_.isEmpty()?this:new sA(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?l:t}}getChild(e){let t=r9(e);return null===t?this:this.getImmediateChild(t).getChild(se(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(M(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new sf(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?l:this.priorityNode_;return new sA(n,s,i)}}updateChild(e,t){let n=r9(e);if(null===n)return t;{M(".priority"!==r9(e)||1===r7(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(se(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(sk,(s,o)=>{t[s]=o.val(e),n++,r&&sA.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+sb(this.getPriority().val())+":"),this.forEachChild(sk,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":ru(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new sf(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new sf(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new sf(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,sf.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,sf.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sD?-1:0}withIndex(e){if(e===sg||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new sA(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sg||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(sk),n=e.getIterator(sk),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===sg?null:this.indexMap_.get(e.toString())}}sA.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const sD=new class extends sA{constructor(){super(new sw(sC),sA.EMPTY_NODE,sO.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return sA.EMPTY_NODE}isEmpty(){return!1}};function sx(e,t=null){if(null===e)return sA.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),M(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new sE(e,sx(t));if(e instanceof Array){let n=sA.EMPTY_NODE;return rO(e,(t,i)=>{if(ed(e,t)&&"."!==t.substring(0,1)){let e=sx(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(sx(t))}{let n=[],i=!1;if(rO(e,(e,t)=>{if("."!==e.substring(0,1)){let r=sx(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new sf(e,r)))}}),0===n.length)return sA.EMPTY_NODE;let r=sN(n,sI,e=>e.name,sC);if(!i)return new sA(r,sx(t),sO.Default);{let e=sN(n,sk.getCompare());return new sA(r,sx(t),new sO({".priority":e},{".priority":sk}))}}}Object.defineProperties(sf,{MIN:{value:new sf(rT,sA.EMPTY_NODE)},MAX:{value:new sf(rE,sD)}}),sm.__EMPTY_NODE=sA.EMPTY_NODE,sE.__childrenNodeConstructor=sA,i=sD,o=sD,s=sx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL extends s_{constructor(e){super(),this.indexPath_=e,M(!ss(e)&&".priority"!==r9(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?rk(e.name,t.name):r}makePost(e,t){let n=sx(e);return new sf(t,sA.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new sf(rE,sA.EMPTY_NODE.updateChild(this.indexPath_,sD))}toString(){return sn(this.indexPath_,0).join("/")}}const sM=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends s_{compare(e,t){let n=e.node.compareTo(t.node);return 0===n?rk(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return sf.MIN}maxPost(){return sf.MAX}makePost(e,t){return new sf(t,sx(e))}toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sF(e){return{type:"value",snapshotNode:e}}function sU(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function sq(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function sj(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(sq(t,o)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(sU(t,n)):s.trackChildChange(sj(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(sk,(e,i)=>{t.hasChild(e)||n.trackChildChange(sq(e,i))}),t.isLeafNode()||t.forEachChild(sk,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(sj(t,i,r))}else n.trackChildChange(sU(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?sA.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(e){this.indexedFilter_=new sV(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sW.getStartPost_(e),this.endPost_=sW.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new sf(t,n))||(n=sA.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=sA.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(sA.EMPTY_NODE);let r=this;return t.forEachChild(sk,(e,t)=>{r.matches(new sf(e,t))||(i=i.updateImmediateChild(e,sA.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new sW(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new sf(t,n))||(n=sA.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=sA.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=sA.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))i=i.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;i=(i=t.withIndex(this.index_)).updatePriority(sA.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,sA.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();M(e.numChildren()===this.limit_,"");let o=new sf(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),c=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=c&&(c.name===t||e.hasChild(c.name));)c=i.getChildAfterChild(this.index_,c,this.reverse_);let u=null==c?1:s(c,o);if(l&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(sj(t,n,h)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(sq(t,h));let n=e.updateImmediateChild(t,sA.EMPTY_NODE);return null!=c&&this.rangedFilter_.matches(c)?(null!=r&&r.trackChildChange(sU(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:l&&s(a,o)>=0?(null!=r&&(r.trackChildChange(sq(a.name,a.node)),r.trackChildChange(sU(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,sA.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sH{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sk}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(M(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:rT}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(M(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:rE}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sk}copy(){let e=new sH;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sz(e){let t;let n={};if(e.isDefault())return n;if(e.index_===sk?t="$priority":e.index_===sM?t="$value":e.index_===sg?t="$key":(M(e.index_ instanceof sL,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=el(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=el(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+el(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=el(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+el(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function s$(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==sk&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK extends r4{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=rg("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=sK.getListenId_(e,n),o={};this.listens_[s]=o;let a=sz(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ep(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=sK.getListenId_(e,t);delete this.listens_[n]}get(e){let t=sz(e._queryParams),n=e._path.toString(),i=new Z;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ev(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ea(o.responseText)}catch(e){rw("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&rw("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(){this.rootNode_=sA.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sY(){return{value:null,children:new Map}}function sJ(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{sJ(i,new r5(t.toString()+"/"+e),n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sQ{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&rO(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class sX{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sQ(e);let n=1e4+2e4*Math.random();rM(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;rO(e,(e,i)=>{i>0&&ed(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),rM(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function sZ(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function s0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function s1(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(m=I||(I={}))[m.OVERWRITE=0]="OVERWRITE",m[m.MERGE=1]="MERGE",m[m.ACK_USER_WRITE=2]="ACK_USER_WRITE",m[m.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=I.ACK_USER_WRITE,this.source=sZ()}operationForChild(e){if(!ss(this.path))return M(r9(this.path)===e,"operationForChild called for unrelated child."),new s2(se(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new r5(e));return new s2(r8(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,t){this.source=e,this.path=t,this.type=I.LISTEN_COMPLETE}operationForChild(e){return ss(this.path)?new s4(this.source,r8()):new s4(this.source,se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=I.OVERWRITE}operationForChild(e){return ss(this.path)?new s3(this.source,r8(),this.snap.getImmediateChild(e)):new s3(this.source,se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=I.MERGE}operationForChild(e){if(!ss(this.path))return M(r9(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new s6(this.source,se(this.path),this.children);{let t=this.children.subtree(new r5(e));return t.isEmpty()?null:t.value?new s3(this.source,r8(),t.value):new s6(this.source,r8(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ss(e))return this.isFullyInitialized()&&!this.filtered_;let t=r9(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function s9(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw F("Should only compare child_ events.");let i=new sf(t.childName,t.snapshotNode),r=new sf(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s7(e,t){return{eventCache:e,serverCache:t}}function oe(e,t,n,i){return s7(new s5(t,n,i),e.serverCache)}function ot(e,t,n,i){return s7(e.eventCache,new s5(t,n,i))}function on(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function oi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}const or=()=>(h||(h=new sw(rS)),h);class os{constructor(e,t=or()){this.value=e,this.children=t}static fromObject(e){let t=new os(null);return rO(e,(e,n)=>{t=t.set(new r5(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:r8(),value:this.value};if(ss(e))return null;{let n=r9(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(se(e),t);return null!=r?{path:sr(new r5(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ss(e))return this;{let t=r9(e),n=this.children.get(t);return null!==n?n.subtree(se(e)):new os(null)}}set(e,t){if(ss(e))return new os(t,this.children);{let n=r9(e),i=(this.children.get(n)||new os(null)).set(se(e),t),r=this.children.insert(n,i);return new os(this.value,r)}}remove(e){if(ss(e))return this.children.isEmpty()?new os(null):new os(null,this.children);{let t=r9(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(se(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new os(null):new os(this.value,i)}}}get(e){if(ss(e))return this.value;{let t=r9(e),n=this.children.get(t);return n?n.get(se(e)):null}}setTree(e,t){if(ss(e))return t;{let n;let i=r9(e),r=(this.children.get(i)||new os(null)).setTree(se(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new os(this.value,n)}}fold(e){return this.fold_(r8(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(sr(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,r8(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(ss(e))return null;{let i=r9(e),r=this.children.get(i);return r?r.findOnPath_(se(e),sr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,r8(),t)}foreachOnPath_(e,t,n){if(ss(e))return this;{this.value&&n(t,this.value);let i=r9(e),r=this.children.get(i);return r?r.foreachOnPath_(se(e),sr(t,i),n):new os(null)}}foreach(e){this.foreach_(r8(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(sr(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.writeTree_=e}static empty(){return new oo(new os(null))}}function oa(e,t,n){if(ss(t))return new oo(new os(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=so(r,t);return s=s.updateChild(o,n),new oo(e.writeTree_.set(r,s))}{let i=new os(n);return new oo(e.writeTree_.setTree(t,i))}}}function ol(e,t,n){let i=e;return rO(n,(e,n)=>{i=oa(i,sr(t,e),n)}),i}function oh(e,t){return ss(t)?oo.empty():new oo(e.writeTree_.setTree(t,new os(null)))}function oc(e,t){return null!=ou(e,t)}function ou(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(so(n.path,t)):null}function od(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sk,(e,n)=>{t.push(new sf(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new sf(e,n.value))}),t}function op(e,t){if(ss(t))return e;{let n=ou(e,t);return new oo(null!=n?new os(n):e.writeTree_.subtree(t))}}function of(e){return e.writeTree_.isEmpty()}function o_(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?(M(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(sr(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(sr(t,".priority"),r)),i}}(r8(),e.writeTree_,t)}function om(e){return e.visible}function og(e,t,n){let i=oo.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)sl(n,t)?i=oa(i,e=so(n,t),s.snap):sl(t,n)&&(e=so(t,n),i=oa(i,r8(),s.snap.getChild(e)));else if(s.children){if(sl(n,t))i=ol(i,e=so(n,t),s.children);else if(sl(t,n)){if(ss(e=so(t,n)))i=ol(i,r8(),s.children);else{let t=ep(s.children,r9(e));if(t){let n=t.getChild(se(e));i=oa(i,r8(),n)}}}}else throw F("WriteRecord should have .snap or .children")}}return i}function ov(e,t,n,i,r){if(i||r){let s=op(e.visibleWrites,t);return!r&&of(s)?n:r||null!=n||oc(s,r8())?o_(og(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(sl(e.path,t)||sl(t,e.path))},t),n||sA.EMPTY_NODE):null}{let i=ou(e.visibleWrites,t);if(null!=i)return i;{let i=op(e.visibleWrites,t);return of(i)?n:null!=n||oc(i,r8())?o_(i,n||sA.EMPTY_NODE):null}}}function oy(e,t,n,i){return ov(e.writeTree,e.treePath,t,n,i)}function ow(e,t){return function(e,t,n){let i=sA.EMPTY_NODE,r=ou(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(sk,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return od(op(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=op(e.visibleWrites,t);return n.forEachChild(sk,(e,t)=>{let n=o_(op(r,new r5(e)),t);i=i.updateImmediateChild(e,n)}),od(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function oI(e,t,n,i){return function(e,t,n,i,r){M(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=sr(t,n);if(oc(e.visibleWrites,s))return null;{let t=op(e.visibleWrites,s);return of(t)?r.getChild(n):o_(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function oC(e,t){var n,i;return n=e.writeTree,i=sr(e.treePath,t),ou(n.visibleWrites,i)}function ob(e,t,n){return function(e,t,n,i){let r=sr(t,n),s=ou(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?o_(op(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function oT(e,t){return oE(sr(e.treePath,t),e.writeTree)}function oE(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;M("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),M(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,sj(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,sq(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,sU(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,sj(n,e.snapshotNode,i.oldSnap));else throw F("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}const oS=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class oP{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new s5(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ob(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:oi(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=op(e.visibleWrites,t),h=ou(l,r8());if(null!=h)a=h;else{if(null==n)return[];a=o_(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function oN(e,t,n,i,r,s){let o=t.eventCache;if(null!=oC(i,n))return t;{let a,l;if(ss(n)){if(M(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=oi(t),r=ow(i,n instanceof sA?n:sA.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=oy(i,oi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=r9(n);if(".priority"===h){M(1===r7(n),"Can't have a priority with additional path components");let r=o.getNode(),s=oI(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let c;let u=se(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=oI(i,n,o.getNode(),l);c=null!=e?o.getNode().getImmediateChild(h).updateChild(u,e):o.getNode().getImmediateChild(h)}else c=ob(i,h,t.serverCache);a=null!=c?e.filter.updateChild(o.getNode(),h,c,u,r,s):o.getNode()}}return oe(t,a,o.isFullyInitialized()||ss(n),e.filter.filtersNodes())}}function oR(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,c=o?e.filter:e.filter.getIndexedFilter();if(ss(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{let e=r9(n);if(!h.isCompleteForPath(n)&&r7(n)>1)return t;let r=se(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?c.updatePriority(h.getNode(),s):c.updateChild(h.getNode(),e,s,r,oS,null)}let u=ot(t,l,h.isFullyInitialized()||ss(n),c.filtersNodes()),d=new oP(r,u,s);return oN(e,u,n,r,d,a)}function oO(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,c=new oP(r,t,s);if(ss(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=oe(t,l,!0,e.filter.filtersNodes());else{let r=r9(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=oe(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=se(n),u=h.getNode().getImmediateChild(r);if(ss(l))s=i;else{let e=c.getCompleteChild(r);s=null!=e?".priority"===st(l)&&e.getChild(si(l)).isEmpty()?e:e.updateChild(l,i):sA.EMPTY_NODE}a=u.equals(s)?t:oe(t,e.filter.updateChild(h.getNode(),r,s,l,c,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function oA(e,t){return e.eventCache.isCompleteForChild(t)}function oD(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function ox(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=ss(n)?i:new os(null).setTree(n,i);let c=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(c.hasChild(n)){let l=oD(e,t.serverCache.getNode().getImmediateChild(n),i);h=oR(e,h,new r5(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){let l=oD(e,t.serverCache.getNode().getImmediateChild(n),i);h=oR(e,h,new r5(n),l,r,s,o,a)}}),h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new sV(n.getIndex()),r=n.loadsAllData()?new sV(n.getIndex()):n.hasLimit()?new sB(n):new sW(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(sA.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(sA.EMPTY_NODE,o.getNode(),null),h=new s5(a,s.isFullyInitialized(),i.filtersNodes()),c=new s5(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=s7(c,h),this.eventGenerator_=new s8(this.query_)}get query(){return this.query_}}function oM(e){return 0===e.eventRegistrations_.length}function oF(e,t,n){let i=[];if(n){M(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){let r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function oU(e,t,n,i){var r,s;t.type===I.MERGE&&null!==t.source.queryId&&(M(oi(e.viewCache_),"We should always have a full cache before handling merges"),M(on(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new ok;if(n.type===I.OVERWRITE)n.source.fromUser?s=oO(e,t,n.path,n.snap,i,r,a):(M(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!ss(n.path),s=oR(e,t,n.path,n.snap,i,r,o,a));else if(n.type===I.MERGE){var l,h;let c;n.source.fromUser?(l=n.path,h=n.children,c=t,h.foreach((n,s)=>{let o=sr(l,n);oA(t,r9(o))&&(c=oO(e,c,o,s,i,r,a))}),h.foreach((n,s)=>{let o=sr(l,n);oA(t,r9(o))||(c=oO(e,c,o,s,i,r,a))}),s=c):(M(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=ox(e,t,n.path,n.children,i,r,o,a))}else if(n.type===I.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=oC(i,n))return t;{let a;let l=new oP(i,t,r),h=t.eventCache.getNode();if(ss(n)||".priority"===r9(n)){let n;if(t.serverCache.isFullyInitialized())n=oy(i,oi(t));else{let e=t.serverCache.getNode();M(e instanceof sA,"serverChildren would be complete if leaf node"),n=ow(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=r9(n),c=ob(i,r,t.serverCache);null==c&&t.serverCache.isCompleteForChild(r)&&(c=h.getImmediateChild(r)),(a=null!=c?e.filter.updateChild(h,r,c,se(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,sA.EMPTY_NODE,se(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=oy(i,oi(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=oC(i,r8()),oe(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=oC(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(ss(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oR(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!ss(n))return t;{let i=new os(null);return l.getNode().forEachChild(sg,(e,t)=>{i=i.set(new r5(e),t)}),ox(e,t,n,i,r,s,a,o)}}{let h=new os(null);return i.foreach((e,t)=>{let i=sr(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),ox(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===I.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return oN(e,ot(t,s.getNode(),s.isFullyInitialized()||ss(n),s.isFiltered()),n,i,oS,r)}(e,t,n.path,i,a);else throw F("Unknown operation type: "+n.type);let c=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=on(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(sF(on(t)))}}(t,s,c),{viewCache:s,changes:c}}(e.processor_,o,t,n,i);return r=e.processor_,M((s=a.viewCache).eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),M(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),M(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,oq(e,a.changes,a.viewCache.eventCache.getNode(),null)}function oq(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),s9(e,r,"child_removed",t,i,n),s9(e,r,"child_added",t,i,n),s9(e,r,"child_moved",s,i,n),s9(e,r,"child_changed",t,i,n),s9(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class oj{constructor(){this.views=new Map}}function oV(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return M(null!=s,"SyncTree gave us an op for an invalid query."),oU(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(oU(s,t,n,i));return r}}function oW(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=oy(n,r?i:null),s=!1;return e?s=!0:(e=i instanceof sA?ow(n,i):sA.EMPTY_NODE,s=!1),new oL(t,s7(new s5(e,s,!1),new s5(i,r,!1)))}return o}function oB(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function oH(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=oi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ss(t)&&!n.getImmediateChild(r9(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function oz(e,t){if(t._queryParams.loadsAllData())return oK(e);{let n=t._queryIdentifier;return e.views.get(n)}}function o$(e){return null!=oK(e)}function oK(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let oG=1;class oY{constructor(e){this.listenProvider_=e,this.syncPointTree_=new os(null),this.pendingWriteTree_={visibleWrites:oo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oJ(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,M(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=oa(s.visibleWrites,t,n)),s.lastWriteId=i,r)?o2(e,new s3(sZ(),t,n)):[]}function oQ(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);M(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return sl(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&sl(sr(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:sl(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=og(e.allWrites,om,r8()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=oh(e.visibleWrites,i.path):rO(i.children,t=>{e.visibleWrites=oh(e.visibleWrites,sr(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new os(null);return null!=i.snap?t=t.set(r8(),!0):rO(i.children,e=>{t=t.set(new r5(e),!0)}),o2(e,new s2(i.path,t,n))}}function oX(e,t,n){return o2(e,new s3(s0(),t,n))}function oZ(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=oz(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=o$(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(oF(r,n,i)),oM(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{let t=e.views.get(r);t&&(o=o.concat(oF(t,n,i)),oM(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!o$(e)&&s.push(new(M(c,"Reference.ts has not been loaded"),c)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>o$(t));if(n&&!r){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&o$(t))return[oK(t)];{let e=[];return t&&(e=oB(t)),rO(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let i=n[t],r=i.query,s=o4(e,i);e.listenProvider_.startListening(o7(r),o3(e,r),s.hashFn,s.onComplete)}}}r||!(h.length>0)||i||(n?e.listenProvider_.stopListening(o7(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(o6(t));e.listenProvider_.stopListening(o7(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let t=o6(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function o0(e,t,n,i){let r=o5(e,i);if(null==r)return[];{let i=o8(r),s=i.path,o=i.queryId,a=so(s,t);return o9(e,s,new s3(s1(o),a,n))}}function o1(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=oH(n,so(e,t));if(i)return i});return ov(i,t,r,n,!0)}function o2(e,t){var n;return function e(t,n,i,r){if(ss(t.path))return function e(t,n,i,r){let s=n.get(r8());null==i&&null!=s&&(i=oH(s,r8()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=oT(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(oV(s,t,r,i))),o}(t,n,i,r);{let s=n.get(r8());null==i&&null!=s&&(i=oH(s,r8()));let o=[],a=r9(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=oT(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(oV(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,oE(r8(),n)))}function o4(e,t){let n=t.query,i=o3(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||sA.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var r;return i?function(e,t,n){let i=o5(e,n);if(!i)return[];{let n=o8(i),r=n.path,s=n.queryId,o=so(r,t);return o9(e,r,new s4(s1(s),o))}}(e,n._path,i):(r=n._path,o2(e,new s4(s0(),r)))}{let i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return oZ(e,n,null,i)}}}}function o3(e,t){let n=o6(t);return e.queryToTagMap.get(n)}function o6(e){return e._path.toString()+"$"+e._queryIdentifier}function o5(e,t){return e.tagToQueryMap.get(t)}function o8(e){let t=e.indexOf("$");return M(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new r5(e.substr(0,t))}}function o9(e,t,n){let i=e.syncPointTree_.get(t);return M(i,"Missing sync point for query tag that we're tracking"),oV(i,n,oE(t,e.pendingWriteTree_),null)}function o7(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(M(u,"Reference.ts has not been loaded"),u)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.node_=e}getImmediateChild(e){return new ae(this.node_.getImmediateChild(e))}node(){return this.node_}}class at{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=sr(this.path_,e);return new at(this.syncTree_,t)}node(){return o1(this.syncTree_,this.path_)}}const an=function(e,t,n){return e&&"object"==typeof e?(M(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?ai(e[".sv"],t,n):"object"==typeof e[".sv"]?ar(e[".sv"],t):void M(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},ai=function(e,t,n){if("timestamp"===e)return n.timestamp;M(!1,"Unexpected server value: "+e)},ar=function(e,t,n){e.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&M(!1,"Unexpected increment value: "+i);let r=t.node();if(M(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i},as=function(e,t,n){return ao(e,new ae(t),n)};function ao(e,t,n){let i;let r=an(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new sE(r))),e.forEachChild(sk,(e,r)=>{let s=ao(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=an(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new sE(i,sx(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function al(e,t){let n=t instanceof r5?t:new r5(t),i=e,r=r9(n);for(;null!==r;){let e=ep(i.node.children,r)||{children:{},childCount:0};i=new aa(r,i,e),r=r9(n=se(n))}return i}function ah(e){return e.node.value}function ac(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===ah(i)&&!au(i),s=ed(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function au(e){return e.node.childCount>0}function ad(e,t){rO(e.node.children,(n,i)=>{t(new aa(n,e,i))})}function ap(e){return new r5(null===e.parent?e.name:ap(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=/[\[\].#$\/\u0000-\u001F\u007F]/,a_=/[\[\].#$\u0000-\u001F\u007F]/,am=function(e){return"string"==typeof e&&0!==e.length&&!af.test(e)},ag=function(e){return"string"==typeof e&&0!==e.length&&!a_.test(e)},av=function(e,t,n,i){i&&void 0===t||ay(eT(e,"value"),t,n)},ay=function(e,t,n){let i=n instanceof r5?new sh(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+su(i));if("function"==typeof t)throw Error(e+"contains a function "+su(i)+" with contents = "+t.toString());if(rC(t))throw Error(e+"contains "+t.toString()+" "+su(i));if("string"==typeof t&&t.length>10485760/3&&ek(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+su(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(rO(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!am(t)))throw Error(e+" contains an invalid key ("+t+") "+su(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=ek(t),sc(i),ay(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=ek(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+su(i)+" in addition to actual children.")}},aw=function(e,t,n,i){if((!i||void 0!==n)&&!ag(n))throw Error(eT(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},aI=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aw(e,t,n,i)},aC=function(e,t){if(".info"===r9(t))throw Error(e+" failed = Can't modify data under /.info/")},ab=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!am(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!ag(n)))throw Error(eT(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function aE(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||sa(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function ak(e,t,n){aE(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();rp&&rm("event: "+n.toString()),rL(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>sl(e,t)||sl(t,e))}class aS{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sY(),this.transactionQueueTree_=new aa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aP(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new r5(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function aN(e,t,n,i,r){e.dataUpdateCount++;let s=new r5(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=e_(n,e=>sx(e));o=function(e,t,n,i){let r=o5(e,i);if(!r)return[];{let i=o8(r),s=i.path,o=i.queryId,a=so(s,t),l=os.fromObject(n);return o9(e,s,new s6(s1(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=sx(n);o=o0(e.serverSyncTree_,s,t,r)}}else if(i){let t=e_(n,e=>sx(e));o=function(e,t,n){let i=os.fromObject(n);return o2(e,new s6(s0(),t,i))}(e.serverSyncTree_,s,t)}else{let t=sx(n);o=oX(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=aL(e,s)),ak(e.eventQueue_,a,o)}function aR(e,t){aO(e,"connected",t),!1===t&&function(e){aD(e,"onDisconnectEvents");let t=aP(e),n=sY();sJ(e.onDisconnect_,r8(),(i,r)=>{let s=ao(r,new at(e.serverSyncTree_,i),t);!function e(t,n,i){if(ss(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=r9(n);t.children.has(r)||t.children.set(r,sY()),e(t.children.get(r),n=se(n),i)}}(n,i,s)});let i=[];sJ(n,r8(),(t,n)=>{i=i.concat(oX(e.serverSyncTree_,t,n));let r=aq(e,t);aL(e,r)}),e.onDisconnect_=sY(),ak(e.eventQueue_,r8(),i)}(e)}function aO(e,t,n){let i=new r5("/.info/"+t),r=sx(n);e.infoData_.updateSnapshot(i,r);let s=oX(e.infoSyncTree_,i,r);ak(e.eventQueue_,i,s)}function aA(e){return e.nextWriteId_++}function aD(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),rm(n,...t)}function ax(e,t,n){return o1(e.serverSyncTree_,t,n)||sA.EMPTY_NODE}function aL(e,t){let n=aM(e,t),i=ap(n),r=aF(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=so(n,a.path),h=!1,c;if(M(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,c=a.abortReason,r=r.concat(oQ(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,c="maxretry",r=r.concat(oQ(e.serverSyncTree_,a.currentWriteId,!0));else{let n=ax(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){ay("transaction failed: Data returned ",i,a.path);let t=sx(i);"object"==typeof i&&null!=i&&ed(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=as(t,n,aP(e));a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=l,a.currentWriteId=aA(e),s.splice(s.indexOf(o),1),r=(r=r.concat(oJ(e.serverSyncTree_,a.path,l,a.currentWriteId,a.applyLocally))).concat(oQ(e.serverSyncTree_,o,!0))}else h=!0,c="nodata",r=r.concat(oQ(e.serverSyncTree_,a.currentWriteId,!0))}}ak(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===c?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(c),!1,null))))}aU(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)rL(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||aU(t,n),ah(n)){let i=aF(t,n);M(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=ax(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];M(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=so(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{aD(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(oQ(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();aU(t,al(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),ak(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)rL(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{rw("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}aL(t,n)}},o)}(t,ap(n),i)}else au(n)&&ad(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function aM(e,t){let n;let i=e.transactionQueueTree_;for(n=r9(t);null!==n&&void 0===ah(i);)i=al(i,n),n=r9(t=se(t));return i}function aF(e,t){let n=[];return function e(t,n,i){let r=ah(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);ad(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function aU(e,t){let n=ah(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ac(t,n.length>0?n:void 0)}ad(t,t=>{aU(e,t)})}function aq(e,t){let n=ap(aM(e,t)),i=al(e.transactionQueueTree_,t);return!function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{aj(e,t)}),aj(e,i),!function e(t,n,i,r){i&&!r&&n(t),ad(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{aj(e,t)}),n}function aj(e,t){let n=ah(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(M(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(M(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(oQ(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?ac(t,void 0):n.length=s+1,ak(e.eventQueue_,ap(t),r);for(let e=0;e<i.length;e++)rL(i[e])}}const aV=function(e,t){let n=aW(e),i=n.namespace;"firebase.com"===n.domain&&ry(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ry("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rI();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new rB(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new r5(n.pathString)}},aW=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):rw(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+el(this.snapshot.exportVal())}}class aH{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ss(this._path)?null:st(this._path)}get ref(){return new aK(this._repo,this._path)}get _queryIdentifier(){let e=rN(s$(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return s$(this._queryParams)}isEqual(e){if(!((e=eS(e))instanceof a$))return!1;let t=this._repo===e._repo,n=sa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class aK extends a${constructor(e,t){super(e,t,new sH,!1)}get parent(){let e=si(this._path);return null===e?null:new aK(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class aG{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new r5(e),n=aJ(this.ref,e);return new aG(this._node.getChild(t),n,sk)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new aG(n,aJ(this.ref,t),sk)))}hasChild(e){let t=new r5(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function aY(e,t){return(e=eS(e))._checkNotDeleted("ref"),void 0!==t?aJ(e._root,t):e._root}function aJ(e,t){return null===r9((e=eS(e))._path)?aI("child","path",t,!1):aw("child","path",t,!1),new aK(e._repo,sr(e._path,t))}function aQ(e,t){aC("set",(e=eS(e))._path),av("set",t,e._path,!1);let n=new Z;return!function(e,t,n,i,r){aD(e,"set",{path:t.toString(),value:n,priority:null});let s=aP(e),o=sx(n,null),a=as(o,o1(e.serverSyncTree_,t),s),l=aA(e),h=oJ(e.serverSyncTree_,t,a,l,!0);aE(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{let s="ok"===n;s||rw("set at "+t+" failed: "+n);let o=oQ(e.serverSyncTree_,l,!s);ak(e.eventQueue_,t,o),r&&rL(()=>{if("ok"===n)r(null);else{let e=(n||"error").toUpperCase(),t=e;i&&(t+=": "+i);let s=Error(t);s.code=e,r(s)}})});let c=aq(e,t);aL(e,c),ak(e.eventQueue_,c,[])}(e._repo,e._path,t,0,n.wrapCallback(()=>{})),n.promise}function aX(e){e=eS(e);let t=new aZ(new az(()=>{}));return(function(e,t,n){let i=function(e,t){var n;let i=t._path,r=null;e.syncPointTree_.foreachOnPath(i,(e,t)=>{let n=so(e,i);r=r||oH(t,n)});let s=e.syncPointTree_.get(i);s?r=r||oH(s,r8()):(s=new oj,e.syncPointTree_=e.syncPointTree_.set(i,s));let o=null!=r,a=o?new s5(r,!0,!1):null,l=(n=e.pendingWriteTree_,oE(t._path,n));return on(oW(s,t,l,o?a.getNode():sA.EMPTY_NODE,o).viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let r;let s=sx(i).withIndex(t._queryParams.getIndex());if(!function(e,t,n,i=!1){let r;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=so(e,s);o=o||oH(t,n),a=a||o$(t)});let l=e.syncPointTree_.get(s);l?(a=a||o$(l),o=o||oH(l,r8())):(l=new oj,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?r=!0:(r=!1,o=sA.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=oH(t,r8());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=oz(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=o6(t);M(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let i=oG++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=function(e,t,n,i,r,s){let o=oW(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(sk,(e,t)=>{i.push(sU(e,t))}),n.isFullyInitialized()&&i.push(sF(n.getNode())),oq(e,i,n.getNode(),t)}(o,n)}(l,t,n,oE(s,e.pendingWriteTree_),o,r);if(!h&&!a&&!i){let n=oz(l,t);c=c.concat(function(e,t,n){let i=t._path,r=o3(e,t),s=o4(e,n),o=e.listenProvider_.startListening(o7(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)M(!o$(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!ss(e)&&t&&o$(t))return[oK(t).query];{let e=[];return t&&(e=e.concat(oB(t).map(e=>e.query))),rO(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let i=t[n];e.listenProvider_.stopListening(o7(i),o3(e,i))}}return o}(e,t,n))}}(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=oX(e.serverSyncTree_,t._path,s);else{let n=o3(e.serverSyncTree_,t);r=o0(e.serverSyncTree_,t._path,s,n)}return ak(e.eventQueue_,t._path,r),oZ(e.serverSyncTree_,t,n,null,!0),s},n=>(aD(e,"get for query "+el(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,t).then(t=>new aG(t,new aK(e._repo,e._path),e._queryParams.getIndex()))}class aZ{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new aB("value",this,new aG(e.snapshotNode,new aK(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new aH(this,e,t):null}matches(e){return e instanceof aZ&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}M(!c,"__referenceConstructor has already been defined"),c=aK,M(!u,"__referenceConstructor has already been defined"),u=aK;const a0={};class a1{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=rG(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new sK(e.repoInfo_,(t,n,i,r)=>{aN(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>aR(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{el(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new sp(e.repoInfo_,t,(t,n,i,r)=>{aN(e,t,n,i,r)},t=>{aR(e,t)},t=>{rO(t,(t,n)=>{aO(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return rK[n]||(rK[n]=t()),rK[n]}(e.repoInfo_,()=>new sX(e.stats_,e.server_)),e.infoData_=new sG,e.infoSyncTree_=new oY({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=oX(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),aO(e,"connected",!1),e.serverSyncTree_=new oY({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);ak(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new aK(this._repo,r8())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=a0[t];n&&n[e.key]===e||ry(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ry("Cannot call "+e+" on a deleted database.")}}function a2(e=tr(),t){let n=e9(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){let e=J("database");e&&function(e,t,n,i={}){var r;let s;(e=eS(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ry("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;o.repoInfo_.nodeAdmin?(i.mockUserToken&&ry('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rq(rq.OWNER)):i.mockUserToken&&(s=new rq("string"==typeof i.mockUserToken?i.mockUserToken:/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[B(JSON.stringify({alg:"none",type:"JWT"})),B(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e.app.options.projectId))),r=s,o.repoInfo_=new rB(`${t}:${n}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),r&&(o.authTokenProvider_=r)}(n,...e)}return n}sp.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},sp.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},ri=tn,e8(new eP("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,c,u=i||e.options.databaseURL;void 0===u&&(e.options.projectId||ry("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rm("Using default host for project ",e.options.projectId),u=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=aV(u,void 0),p=d.repoInfo;void 0!==b&&b.env&&(h=b.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(c=!0,p=(d=aV(u=`http://${h}?ns=${p.namespace}`,void 0)).repoInfo):c=!d.repoInfo.secure;let f=new rU(e.name,e.options,t);return ab("Invalid Firebase Database URL",d),ss(d.path)||ry("Database URL must point to the root of a Firebase Database (not including a child path)."),new a1((s=p,o=new rF(e.name,n),(a=a0[e.name])||(a={},a0[e.name]=a),(l=a[s.toURLString()])&&ry("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new aS(s,!1,f,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),ts(rt,rn,void 0),ts(rt,rn,"esm2017");const a4={apiKey:"AIzaSyAtW9dN7Xjfs9UpYrkIIljp7NxtyQF9xdw",authDomain:"javascript24-ffc01.firebaseapp.com",databaseURL:"https://javascript24-ffc01-default-rtdb.europe-west1.firebasedatabase.app",projectId:"javascript24-ffc01",storageBucket:"javascript24-ffc01.appspot.com",messagingSenderId:"623151252466",appId:"1:623151252466:web:6247d9414882dcbd53216b"},a3=ti(a4),a6=function(e=tr()){let t=e9(e,"auth");if(t.isInitialized())return t.getImmediate();let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let n=e9(e,"auth");if(n.isInitialized()){let e=n.getImmediate();if(em(n.getOptions(),null!=t?t:{}))return e;tI(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:iZ,persistence:[iy,ie,it]}),i=X("authTokenSyncURL");if(i&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(i,location.origin);if(location.origin===e.origin){var r,s;let t=re(e.toString());r=()=>t(n.currentUser),eS(n).beforeAuthStateChanged(t,r),s=e=>t(e),eS(n).onIdTokenChanged(s,void 0,void 0)}}let o=Y("auth");return o&&function(e,t,n){let i=eS(e);tk(i._canInitEmulator,i,"emulator-config-failed"),tk(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");let r=nE(t),{host:s,port:o}=function(e){let t=nE(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let e=r[1];return{host:e,port:nk(i.substr(e.length+1))}}{let[e,t]=i.split(":");return{host:e,port:nk(t)}}}(t),a=null===o?"":`:${o}`;i.config.emulator={url:`${r}//${s}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${o}`),n}(a3),a5=a2(a3);async function a8(e,t){try{let n=`${e}@example.com`;await n5(a6,n,t),console.log("User signed up:")}catch(e){lt(e,"signing up")}}async function a9(e,t){try{let n=`${e}@example.com`;await (e7(a6.app)?Promise.reject(tT(a6)):n4(eS(a6),nW.credential(n,t)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&n6(a6),e})),console.log("User signed in:")}catch(e){lt(e,"signing in")}}async function a7(e,t){let n=a6.currentUser;if(n)try{var i;let r=nW.credential(`${e}@example.com`,t);await n3(n,r),await n8(n),await (i=aY(a5,`users/${e}`),aC("remove",i._path),aQ(i,null)),console.log("User and user data deleted")}catch(e){lt(e,"deleting user")}else console.error("No user is currently signed in."),alert("No user is currently signed in.")}async function le(){try{await eS(a6).signOut(),console.log("User logged out")}catch(e){lt(e,"logging out")}}function lt(e,t){e instanceof er||(console.error(`Unexpected error ${t}:`,e.message,e),alert(`Unexpected error ${t}: ${e.message}`))}const ln=a2(ti(a4));async function li(e,t){try{await aQ(aY(ln,"users/"+e),{username:e,image:t,statusUpdates:[]}),console.log("Profile created")}catch(e){console.error("Error creating profile:",e)}}async function lr(e,t){try{let n=aY(ln,"users/"+e+"/statusUpdates"),i=await aX(n),r=i.exists()?i.val():[];r.push(t),await aQ(n,r),console.log("Status update added")}catch(e){console.error("Error adding status update:",e)}}async function ls(e){try{let t=aY(ln,"users/"+e),n=await aX(t);if(n.exists())return n.val();return console.log("No profile found"),null}catch(e){console.error("Error fetching profile:",e)}}async function lo(){try{let e=aY(ln,"users"),t=await aX(e);if(t.exists())return t.val();return console.log("No users found"),{}}catch(e){console.error("Error fetching profiles:",e)}}const la=document.getElementById("app");let ll=null;function lh(){if(!la)return;la.innerHTML=`
    <h1>Welcome to the Social Media App</h1>
    <button id="showLoginButton">Login</button>
    <button id="showSignUpButton">Sign Up</button>
  `;let e=document.getElementById("showLoginButton"),t=document.getElementById("showSignUpButton");e.onclick=()=>{lc()},t.onclick=()=>{(function(){if(!la)return;la.innerHTML=`
    <h1>Sign Up</h1>
    <h3>Select a character</h3>
    <div class="character-selection">
      <input type="radio" id="cat" name="character" value="https://img.icons8.com/emoji/96/cat-emoji.png" checked>
      <label for="cat"><img src="https://img.icons8.com/emoji/96/cat-emoji.png" alt="cat-emoji"></label>
      <input type="radio" id="dog" name="character" value="https://img.icons8.com/emoji/96/dog-emoji.png">
      <label for="dog"><img src="https://img.icons8.com/emoji/96/dog-emoji.png" alt="dog-emoji"></label>
      <input type="radio" id="goat" name="character" value="https://img.icons8.com/emoji/96/goat-emoji.png">
      <label for="goat"><img src="https://img.icons8.com/emoji/96/goat-emoji.png" alt="goat-emoji"></label>
    </div>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="createAccountButton">Create Account</button>
    <button id="backButton">Back</button>
  `;let e=document.getElementById("createAccountButton"),t=document.getElementById("backButton");e.onclick=async()=>{let e=document.getElementById("username").value,t=document.getElementById("password").value,n=document.querySelector('input[name="character"]:checked').value;if(t.length<6){alert("Password must be at least 6 characters long");return}await a8(e,t),await li(e,n),ll=e,lu(e)},t.onclick=()=>{lh()}})()}}function lc(){if(!la)return;la.innerHTML=`
    <h1>Login</h1>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="loginButton">Login</button>
    <button id="backButton">Back</button>
  `;let e=document.getElementById("loginButton"),t=document.getElementById("backButton");e.onclick=async()=>{let e=document.getElementById("username").value,t=document.getElementById("password").value;if(t.length<6){alert("Password must be at least 6 characters long");return}await a9(e,t),ll=e,lu(e)},t.onclick=()=>{lh()}}async function lu(e){if(!la)return;let t=await ls(e);if(!t){alert("Profile not found"),lc();return}let n=ll===e,i=t.statusUpdates||[];if(la.innerHTML=`
    <h1>${t.username}'s Profile</h1>
    <img src="${t.image}" alt="Profile Image" width="100">
    <div>
      <h2>Status Updates</h2>
      <ul id="statusUpdates">
        ${i.map(e=>`<li>${e}</li>`).join("")}
      </ul>
      ${n?`
      <input type="text" id="newStatus" placeholder="New Status">
      <button id="addStatusButton">Add Status</button>
      <button id="deleteAccountButton">Delete Account</button>
      <button id="logoutButton">Logout</button>
      `:""}
    </div>
    <button id="backToUserListButton">Back to User List</button>
  `,n){let t=document.getElementById("addStatusButton"),n=document.getElementById("deleteAccountButton"),i=document.getElementById("logoutButton");t.onclick=async()=>{let t=document.getElementById("newStatus").value;await lr(e,t),lu(e)},n.onclick=async()=>{let t=prompt("Please enter your password to confirm deletion:");t&&(await a7(e,t),ll=null,lc())},i.onclick=async()=>{await le(),ll=null,lc()}}document.getElementById("backToUserListButton").onclick=()=>{ld()}}async function ld(){if(!la)return;let e=Object.entries(await lo());la.innerHTML=`
    <h1>User List</h1>
    <ul id="userList">
      ${e.map(([e,t])=>`
        <li>
          <a href="#" data-username="${e}">${e}</a>
        </li>
      `).join("")}
    </ul>
  `,document.querySelectorAll("#userList a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=e.target.getAttribute("data-username");t&&lu(t)})})}lh();
//# sourceMappingURL=index.57f1fa19.js.map
