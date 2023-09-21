function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=t.parcelRequire4dac;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire4dac=r),r.register("g5KvZ",function(t,i){e(t.exports,"setCocktail",()=>d);var n=r("gSpDJ"),s=r("4qkah");let c=document.querySelector("#searchIcon"),o=document.querySelector("#searchInput"),a=document.querySelector("[data-cocktail-name]"),h=document.querySelector("[data-cocktail-description]"),l=document.querySelector("#ingredientList"),d=e=>{a.innerHTML=e.name,h.innerHTML=e.description,document.querySelectorAll('[data-type-content="cocktail"]').forEach(e=>{e.classList.add("invisible")}),document.querySelectorAll('[data-type-image="cocktail"]').forEach(e=>{e.classList.add("invisible")});let t=document.getElementById(`${e.glass}`);t.classList.remove("invisible");let i=document.getElementById(t.dataset.inside);i.classList.remove("invisible"),document.querySelectorAll(".ingredientBox").length>=1&&document.querySelectorAll(".ingredientBox").forEach(e=>{e.remove()});for(let t=0;t<e.mainIngredients.length;t++){let n=document.createElement("div");n.classList.add("ingredientBox"),i.appendChild(n),setTimeout(()=>{n.style.transition="height 1.5s",n.style.height=`${e.mainIngredients[t][2]}%`},100);let r=document.createElement("h5");r.classList.add("ingredientName"),r.innerHTML=e.mainIngredients[t][0],n.appendChild(r),n.style.backgroundColor=`#${e.mainIngredients[t][1]}`}document.querySelectorAll(".ingredientListItem").length>=1&&document.querySelectorAll(".ingredientListItem").forEach(e=>{e.remove()});for(let t=0;t<e.mainIngredients.length;t++){let i=document.createElement("h4");i.classList.add("ingredientListItem"),i.innerHTML=`${e.mainIngredients[t][0]} / ${e.mainIngredients[t][2]}%`,l.appendChild(i)}for(let t=0;t<e.extraIngredients.length;t++){let i=document.createElement("h4");i.classList.add("ingredientListItem"),i.innerHTML=e.extraIngredients[t],l.appendChild(i)}};//SEARCH A DRINK
c.addEventListener("click",async()=>{let e=o.value,t=(0,n.cocktails).concat(n.cocktails2),i=new s.default(t,{keys:["name"]}),r=i.search(e),c=r[0].item;document.querySelector(".menuItemPicked").classList.remove("menuItemPicked"),d(c)})}),r.register("4qkah",function(t,i){/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===l(e)}e(t.exports,"default",()=>z);// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
let r=1/0;function s(e){return"string"==typeof e}function c(e){return"number"==typeof e}function o(e){return"object"==typeof e}function a(e){return null!=e}function h(e){return!e.trim().length}// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function l(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}let d=e=>`Invalid value for key ${e}`,u=e=>`Pattern length exceeds max of ${e}.`,g=e=>`Missing ${e} property in key`,f=e=>`Property 'weight' in key '${e}' must be a positive integer`,p=Object.prototype.hasOwnProperty;class m{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(e=>{let i=y(e);t+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),// Normalize weights so that their sum is equal to 1
this._keys.forEach(e=>{e.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function y(e){let t=null,i=null,r=null,c=1,o=null;if(s(e)||n(e))r=e,t=M(e),i=x(e);else{if(!p.call(e,"name"))throw Error(g("name"));let n=e.name;if(r=n,p.call(e,"weight")&&(c=e.weight)<=0)throw Error(f(n));t=M(n),i=x(n),o=e.getFn}return{path:t,id:i,weight:c,src:r,getFn:o}}function M(e){return n(e)?e:e.split(".")}function x(e){return n(e)?e.join("."):e}var L={// When `true`, the algorithm continues searching to the end of the input even if a perfect
// match is found before the end of the same input.
isCaseSensitive:!1,// When true, the matching function will continue to the end of a search pattern even if
includeScore:!1,// List of properties that will be searched. This also supports nested properties.
keys:[],// Whether to sort the result list, by score
shouldSort:!0,// Default sort function: sort by ascending score, ascending index
sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,// Whether the matches should be included in the result set. When `true`, each record in the result
// set will include the indices of the matched characters.
// These can consequently be used for highlighting purposes.
includeMatches:!1,// When `true`, the matching function will continue to the end of a search pattern even if
// a perfect match has already been located in the string.
findAllMatches:!1,// Minimum number of characters that must be matched before a result is considered a match
minMatchCharLength:1,// Approximately where in the text is the pattern expected to be found?
location:0,// At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
// (of both letters and location), a threshold of '1.0' would match anything.
threshold:.6,// Determines how close the match must be to the fuzzy location (specified above).
// An exact letter match which is 'distance' characters away from the fuzzy location
// would score as a complete mismatch. A distance of '0' requires the match be at
// the exact location specified, a threshold of '1000' would require a perfect match
// to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
distance:100,// When `true`, it enables the use of unix-like search commands
useExtendedSearch:!1,// The get function to use when fetching an object's properties.
// The default will search nested paths *ie foo.bar.baz*
getFn:function(e,t){let i=[],h=!1,d=(e,t,u)=>{if(a(e)){if(t[u]){var g,f;let p=t[u],m=e[p];if(a(m)){// If we're at the last value in the path, and if it's a string/number/bool,
// add it to the list
if(u===t.length-1&&(s(m)||c(m)||!0===(g=m)||!1===g||o(f=g)&&null!==f&&"[object Boolean]"==l(g)))i.push(null==m?"":function(e){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-r?"-0":t}(m));else if(n(m)){h=!0;// Search each item in the array.
for(let e=0,i=m.length;e<i;e+=1)d(m[e],t,u+1)}else t.length&&d(m,t,u+1)}}else i.push(e)}};return(// Backwards compatibility (since path used to be a string)
d(e,s(t)?t.split("."):t,0),h?i:i[0])},// When `true`, search will ignore `location` and `distance`, so it won't matter
// where in the string the pattern appears.
// More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
ignoreLocation:!1,// When `true`, the calculation for the relevance score (used for sorting) will
// ignore the field-length norm.
// More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
ignoreFieldNorm:!1,// The weight to determine how much field length norm effects scoring.
fieldNormWeight:1};let v=/[^ ]+/g;class k{constructor({getFn:e=L.getFn,fieldNormWeight:t=L.fieldNormWeight}={}){this.norm=// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function(e=1,t=3){let i=new Map,n=Math.pow(10,t);return{get(t){let r=t.match(v).length;if(i.has(r))return i.get(r);// Default function is 1/sqrt(x), weight makes that variable
let s=1/Math.pow(r,.5*e),c=parseFloat(Math.round(s*n)/n);return i.set(r,c),c},clear(){i.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((e,t)=>{this._keysMap[e.id]=t})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,s(this.docs[0])?this.docs.forEach((e,t)=>{this._addString(e,t)}):this.docs.forEach((e,t)=>{this._addObject(e,t)}),this.norm.clear())}// Adds a doc to the end of the index
add(e){let t=this.size();s(e)?this._addString(e,t):this._addObject(e,t)}// Removes the doc at the specified index of the index
removeAt(e){this.records.splice(e,1);// Change ref index of every subsquent doc
for(let t=e,i=this.size();t<i;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!a(e)||h(e))return;let i={v:e,i:t,n:this.norm.get(e)};this.records.push(i)}_addObject(e,t){let i={i:t,$:{}};// Iterate over every key (i.e, path), and fetch the value at that key
this.keys.forEach((t,r)=>{let c=t.getFn?t.getFn(e):this.getFn(e,t.path);if(a(c)){if(n(c)){let e=[],t=[{nestedArrIndex:-1,value:c}];for(;t.length;){let{nestedArrIndex:i,value:r}=t.pop();if(a(r)){if(s(r)&&!h(r)){let t={v:r,i:i,n:this.norm.get(r)};e.push(t)}else n(r)&&r.forEach((e,i)=>{t.push({nestedArrIndex:i,value:e})})}}i.$[r]=e}else if(s(c)&&!h(c)){let e={v:c,n:this.norm.get(c)};i.$[r]=e}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function I(e,t,{getFn:i=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){let r=new k({getFn:i,fieldNormWeight:n});return r.setKeys(e.map(y)),r.setSources(t),r.create(),r}function S(e,{errors:t=0,currentLocation:i=0,expectedLocation:n=0,distance:r=L.distance,ignoreLocation:s=L.ignoreLocation}={}){let c=t/e.length;if(s)return c;let o=Math.abs(n-i);return r?c+o/r:o?1:c}class _{constructor(e,{location:t=L.location,threshold:i=L.threshold,distance:n=L.distance,includeMatches:r=L.includeMatches,findAllMatches:s=L.findAllMatches,minMatchCharLength:c=L.minMatchCharLength,isCaseSensitive:o=L.isCaseSensitive,ignoreLocation:a=L.ignoreLocation}={}){if(this.options={location:t,threshold:i,distance:n,includeMatches:r,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let h=(e,t)=>{this.chunks.push({pattern:e,alphabet:function(e){let t={};for(let i=0,n=e.length;i<n;i+=1){let r=e.charAt(i);t[r]=(t[r]||0)|1<<n-i-1}return t}(e),startIndex:t})},l=this.pattern.length;if(l>32){let e=0,t=l%32,i=l-t;for(;e<i;)h(this.pattern.substr(e,32),e),e+=32;if(t){let e=l-32;h(this.pattern.substr(e),e)}}else h(this.pattern,0)}searchIn(e){let{isCaseSensitive:t,includeMatches:i}=this.options;// Exact match
if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return i&&(t.indices=[[0,e.length-1]]),t}// Otherwise, use Bitap algorithm
let{location:n,distance:r,threshold:s,findAllMatches:c,minMatchCharLength:o,ignoreLocation:a}=this.options,h=[],l=0,d=!1;this.chunks.forEach(({pattern:t,alphabet:g,startIndex:f})=>{let{isMatch:p,score:m,indices:y}=function(e,t,i,{location:n=L.location,distance:r=L.distance,threshold:s=L.threshold,findAllMatches:c=L.findAllMatches,minMatchCharLength:o=L.minMatchCharLength,includeMatches:a=L.includeMatches,ignoreLocation:h=L.ignoreLocation}={}){let l;if(t.length>32)throw Error(u(32));let d=t.length,g=e.length,f=Math.max(0,Math.min(n,g)),p=s,m=f,y=o>1||a,M=y?Array(g):[];// Get all exact matches, here for speed up
for(;(l=e.indexOf(t,m))>-1;)if(p=Math.min(S(t,{currentLocation:l,expectedLocation:f,distance:r,ignoreLocation:h}),p),m=l+d,y){let e=0;for(;e<d;)M[l+e]=1,e+=1}// Reset the best location
m=-1;let x=[],v=1,k=d+g,I=1<<d-1;for(let n=0;n<d;n+=1){// Scan for the best match; each iteration allows for one more error.
// Run a binary search to determine how far from the match location we can stray
// at this error level.
let s=0,o=k;for(;s<o;){let e=S(t,{errors:n,currentLocation:f+o,expectedLocation:f,distance:r,ignoreLocation:h});e<=p?s=o:k=o,o=Math.floor((k-s)/2+s)}// Use the result from this iteration as the maximum for the next.
k=o;let a=Math.max(1,f-o+1),l=c?g:Math.min(f+o,g)+d,u=Array(l+2);u[l+1]=(1<<n)-1;for(let s=l;s>=a;s-=1){let c=s-1,o=i[e.charAt(c)];if(y&&(M[c]=+!!o),// First pass: exact match
u[s]=(u[s+1]<<1|1)&o,n&&(u[s]|=(x[s+1]|x[s])<<1|1|x[s+1]),u[s]&I&&(v=S(t,{errors:n,currentLocation:c,expectedLocation:f,distance:r,ignoreLocation:h}))<=p){// Already passed `loc`, downhill from here on in.
if(// Indeed it is
p=v,(m=c)<=f)break;// When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
a=Math.max(1,2*f-m)}}// No hope for a (better) match at greater error levels.
let L=S(t,{errors:n+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:h});if(L>p)break;x=u}let _={isMatch:m>=0,// Count exact matches (those with a score of 0) to be "almost" exact
score:Math.max(.001,v)};if(y){let e=function(e=[],t=L.minMatchCharLength){let i=[],n=-1,r=-1,s=0;for(let c=e.length;s<c;s+=1){let c=e[s];c&&-1===n?n=s:c||-1===n||((r=s-1)-n+1>=t&&i.push([n,r]),n=-1)}return e[s-1]&&s-n>=t&&i.push([n,s-1]),i}(M,o);e.length?a&&(_.indices=e):_.isMatch=!1}return _}(e,t,g,{location:n+f,distance:r,threshold:s,findAllMatches:c,minMatchCharLength:o,includeMatches:i,ignoreLocation:a});p&&(d=!0),l+=m,p&&y&&(h=[...h,...y])});let g={isMatch:d,score:d?l/this.chunks.length:1};return d&&i&&(g.indices=h),g}}class A{constructor(e){this.pattern=e}static isMultiMatch(e){return E(e,this.multiRegex)}static isSingleMatch(e){return E(e,this.singleRegex)}search(){}}function E(e,t){let i=e.match(t);return i?i[1]:null}class C extends A{constructor(e,{location:t=L.location,threshold:i=L.threshold,distance:n=L.distance,includeMatches:r=L.includeMatches,findAllMatches:s=L.findAllMatches,minMatchCharLength:c=L.minMatchCharLength,isCaseSensitive:o=L.isCaseSensitive,ignoreLocation:a=L.ignoreLocation}={}){super(e),this._bitapSearch=new _(e,{location:t,threshold:i,distance:n,includeMatches:r,findAllMatches:s,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}// Token: 'file
class b extends A{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,i=0,n=[],r=this.pattern.length;// Get all exact matches
for(;(t=e.indexOf(this.pattern,i))>-1;)i=t+r,n.push([t,i-1]);let s=!!n.length;return{isMatch:s,score:s?0:1,indices:n}}}// ❗Order is important. DO NOT CHANGE.
let $=[// Token: 'file
class extends A{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},b,// Token: ^file
class extends A{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},// Token: !^fire
class extends A{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},// Token: !.file$
class extends A{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},// Token: .file$
class extends A{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},// Token: !fire
class extends A{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let t=e.indexOf(this.pattern),i=-1===t;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}},C],w=$.length,N=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,F=new Set([C.type,b.type]),R=[];function O(e,t){for(let i=0,n=R.length;i<n;i+=1){let n=R[i];if(n.condition(e,t))return new n(e,t)}return new _(e,t)}let q={AND:"$and",OR:"$or"},j={PATH:"$path",PATTERN:"$val"},T=e=>!!(e[q.AND]||e[q.OR]),W=e=>!!e[j.PATH],P=e=>!n(e)&&o(e)&&!T(e),H=e=>({[q.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function D(e,t,{auto:i=!0}={}){let r=e=>{let c=Object.keys(e),o=W(e);if(!o&&c.length>1&&!T(e))return r(H(e));if(P(e)){let n=o?e[j.PATH]:c[0],r=o?e[j.PATTERN]:e[n];if(!s(r))throw Error(d(n));let a={keyId:x(n),pattern:r};return i&&(a.searcher=O(r,t)),a}let a={children:[],operator:c[0]};return c.forEach(t=>{let i=e[t];n(i)&&i.forEach(e=>{a.children.push(r(e))})}),a};return T(e)||(e=H(e)),r(e)}function K(e,t){let i=e.matches;t.matches=[],a(i)&&i.forEach(e=>{if(!a(e.indices)||!e.indices.length)return;let{indices:i,value:n}=e,r={indices:i,value:n};e.key&&(r.key=e.key.src),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)})}function B(e,t){t.score=e.score}class z{constructor(e,t={},i){this.options={...L,...t},this.options.useExtendedSearch,this._keyStore=new m(this.options.keys),this.setCollection(e,i)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof k))throw Error("Incorrect 'index' type");this._myIndex=t||I(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){a(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let t=[];for(let i=0,n=this._docs.length;i<n;i+=1){let r=this._docs[i];e(r,i)&&(this.removeAt(i),i-=1,n-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){let{includeMatches:i,includeScore:n,shouldSort:r,sortFn:o,ignoreFieldNorm:a}=this.options,h=s(e)?s(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return(// Practical scoring function
function(e,{ignoreFieldNorm:t=L.ignoreFieldNorm}){e.forEach(e=>{let i=1;e.matches.forEach(({key:e,norm:n,score:r})=>{let s=e?e.weight:null;i*=Math.pow(0===r&&s?Number.EPSILON:r,(s||1)*(t?1:n))}),e.score=i})}(h,{ignoreFieldNorm:a}),r&&h.sort(o),c(t)&&t>-1&&(h=h.slice(0,t)),function(e,t,{includeMatches:i=L.includeMatches,includeScore:n=L.includeScore}={}){let r=[];return i&&r.push(K),n&&r.push(B),e.map(e=>{let{idx:i}=e,n={item:t[i],refIndex:i};return r.length&&r.forEach(t=>{t(e,n)}),n})}(h,this._docs,{includeMatches:i,includeScore:n}))}_searchStringList(e){let t=O(e,this.options),{records:i}=this._myIndex,n=[];return(// Iterate over every string in the index
i.forEach(({v:e,i:i,n:r})=>{if(!a(e))return;let{isMatch:s,score:c,indices:o}=t.searchIn(e);s&&n.push({item:e,idx:i,matches:[{score:c,value:e,norm:r,indices:o}]})}),n)}_searchLogical(e){let t=D(e,this.options),i=(e,t,n)=>{if(!e.children){let{keyId:i,searcher:r}=e,s=this._findMatches({key:this._keyStore.get(i),value:this._myIndex.getValueForItemAtKeyId(t,i),searcher:r});return s&&s.length?[{idx:n,item:t,matches:s}]:[]}let r=[];for(let s=0,c=e.children.length;s<c;s+=1){let c=e.children[s],o=i(c,t,n);if(o.length)r.push(...o);else if(e.operator===q.AND)return[]}return r},n=this._myIndex.records,r={},s=[];return n.forEach(({$:e,i:n})=>{if(a(e)){let c=i(t,e,n);c.length&&(r[n]||(r[n]={idx:n,item:e,matches:[]},s.push(r[n])),c.forEach(({matches:e})=>{r[n].matches.push(...e)}))}}),s}_searchObjectList(e){let t=O(e,this.options),{keys:i,records:n}=this._myIndex,r=[];return(// List is Array<Object>
n.forEach(({$:e,i:n})=>{if(!a(e))return;let s=[];// Iterate over every key (i.e, path), and fetch the value at that key
i.forEach((i,n)=>{s.push(...this._findMatches({key:i,value:e[n],searcher:t}))}),s.length&&r.push({idx:n,item:e,matches:s})}),r)}_findMatches({key:e,value:t,searcher:i}){if(!a(t))return[];let r=[];if(n(t))t.forEach(({v:t,i:n,n:s})=>{if(!a(t))return;let{isMatch:c,score:o,indices:h}=i.searchIn(t);c&&r.push({score:o,key:e,value:t,idx:n,norm:s,indices:h})});else{let{v:n,n:s}=t,{isMatch:c,score:o,indices:a}=i.searchIn(n);c&&r.push({score:o,key:e,value:n,norm:s,indices:a})}return r}}z.version="6.6.2",z.createIndex=I,z.parseIndex=function(e,{getFn:t=L.getFn,fieldNormWeight:i=L.fieldNormWeight}={}){let{keys:n,records:r}=e,s=new k({getFn:t,fieldNormWeight:i});return s.setKeys(n),s.setIndexRecords(r),s},z.config=L,z.parseQuery=D,function(...e){R.push(...e)}(/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */class{constructor(e,{isCaseSensitive:t=L.isCaseSensitive,includeMatches:i=L.includeMatches,minMatchCharLength:n=L.minMatchCharLength,ignoreLocation:r=L.ignoreLocation,findAllMatches:s=L.findAllMatches,location:c=L.location,threshold:o=L.threshold,distance:a=L.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:i,minMatchCharLength:n,findAllMatches:s,ignoreLocation:r,location:c,threshold:o,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function(e,t={}){return e.split("|").map(e=>{let i=e.trim().split(N).filter(e=>e&&!!e.trim()),n=[];for(let e=0,r=i.length;e<r;e+=1){let r=i[e],s=!1,c=-1;for(;!s&&++c<w;){let e=$[c],i=e.isMultiMatch(r);i&&(n.push(new e(i,t)),s=!0)}if(!s)for(// 2. Handle single query matches (i.e, once that are *not* quoted)
c=-1;++c<w;){let e=$[c],i=e.isSingleMatch(r);if(i){n.push(new e(i,t));break}}}return n})}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){let t=this.query;if(!t)return{isMatch:!1,score:1};let{includeMatches:i,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let r=0,s=[],c=0;// ORs
for(let n=0,o=t.length;n<o;n+=1){let o=t[n];// Reset indices
s.length=0,r=0;// ANDs
for(let t=0,n=o.length;t<n;t+=1){let n=o[t],{isMatch:a,indices:h,score:l}=n.search(e);if(a){if(r+=1,c+=l,i){let e=n.constructor.type;F.has(e)?s=[...s,...h]:s.push(h)}}else{c=0,r=0,s.length=0;break}}// OR condition, so if TRUE, return
if(r){let e={isMatch:!0,score:c/r};return i&&(e.indices=s),e}}// Nothing was matched
return{isMatch:!1,score:1}}})}),r("g5KvZ");//# sourceMappingURL=index.c9177603.js.map

//# sourceMappingURL=index.c9177603.js.map
