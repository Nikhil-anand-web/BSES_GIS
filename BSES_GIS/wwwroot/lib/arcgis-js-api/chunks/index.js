/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,safari10:!1,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,cssVarShim:!1,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,dynamicImportShim:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0};let n,s,o,l=!1,a=!1,$=!1,r=!1,i=null,c=!1;const d={isDev:!!t.isDev,isBrowser:!0,isServer:!1,isTesting:!!t.isTesting},m=e=>{const t=new URL(e,He.$resourcesUrl$);return t.origin!==Ue.location.origin?t.href:t.pathname},h=e=>He.$resourcesUrl$=e,f=(e,t="")=>()=>{},u="http://www.w3.org/1999/xlink",p={},g="http://www.w3.org/2000/svg",y="http://www.w3.org/1999/xhtml",v=e=>null!=e,b=e=>"object"===(e=typeof e)||"function"===e;function w(e){var t,n,s;return null!==(s=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==s?s:void 0}const S=(e,n,...s)=>{let o=null,l=null,a=null,$=!1,r=!1;const i=[],c=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?c(o):null!=o&&"boolean"!=typeof o&&(($="function"!=typeof e&&!b(o))&&(o=String(o)),$&&r?i[i.length-1].$text$+=o:i.push($?N(null,o):o),r=$)};if(c(s),n&&(t.isDev&&"input"===e&&L(n),t.vdomKey&&n.key&&(l=n.key),t.slotRelocation&&n.name&&(a=n.name),t.vdomClass)){const e=n.className||n.class;e&&(n.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(t.isDev&&i.some(R)&&Me("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),t.vdomFunctional&&"function"==typeof e)return e(null===n?{}:n,i,x);const d=N(e,null);return d.$attrs$=n,i.length>0&&(d.$children$=i),t.vdomKey&&(d.$key$=l),t.slotRelocation&&(d.$name$=a),d},N=(e,n)=>{const s={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null};return t.vdomAttribute&&(s.$attrs$=null),t.vdomKey&&(s.$key$=null),t.slotRelocation&&(s.$name$=null),s},k={},R=e=>e&&e.$tag$===k,x={forEach:(e,t)=>e.map(T).forEach(t),map:(e,t)=>e.map(T).map(t).map(C)},T=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),C=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),S(e.vtag,t,...e.vchildren||[])}const t=N(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},L=e=>{const t=Object.keys(e),n=t.indexOf("value");if(-1===n)return;const s=t.indexOf("type"),o=t.indexOf("min"),l=t.indexOf("max"),a=t.indexOf("step");(n<s||n<o||n<l||n<a)&&Pe('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},D=e=>Fe.map((t=>t(e))).find((e=>!!e)),E=(e,t)=>null==e||b(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e,O=e=>t.lazyLoad?Le(e).$hostElement$:e,A=(e,n,s)=>{const o=O(e);return{emit:e=>(t.isDev&&!o.isConnected&&Pe(`The "${n}" event was emitted, but the dispatcher node is no longer connected to the dom.`),M(o,n,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e}))}},M=(e,t,n)=>{const s=He.ce(t,n);return e.dispatchEvent(s),s},P=new WeakMap,j=(e,t,n)=>{let s=je.get(e);Ie&&n?(s=s||new CSSStyleSheet,"string"==typeof s?s=t:s.replaceSync(t)):s=t,je.set(e,s)},F=(e,t,n,s)=>{var o;let l=B(t,n);const a=je.get(l);if(e=11===e.nodeType?e:Be,a)if("string"==typeof a){e=e.head||e;let t,n=P.get(e);if(n||P.set(e,n=new Set),!n.has(l)){{t=Be.createElement("style"),t.innerHTML=a;const n=null!==(o=He.$nonce$)&&void 0!==o?o:w(Be);null!=n&&t.setAttribute("nonce",n),e.insertBefore(t,e.querySelector("link"))}n&&n.add(l)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,a]);return l},U=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,s=t.$flags$,o=f("attachStyles",t.$tagName$),l=F(_e&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);10&s&&(n["s-sc"]=l,n.classList.add(l+"-h"),2&s&&n.classList.add(l+"-s")),o()},B=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),W=(e,t,n,s,o,l)=>{if(n!==s){let $=Ee(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=_(n),l=_(s);t.remove(...o.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)n&&s[t]===n[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const i=b(s);if(($||i&&null!==s)&&!o)try{if(e.tagName.includes("-"))e[t]=s;else{const o=s??"";"list"===t?$=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(a){}let c=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,c=!0),null==s||!1===s?!1===s&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(u,t):e.removeAttribute(t)):(!$||4&l||o)&&!i&&(s=!0===s?"":s,c?e.setAttributeNS(u,t,s):e.setAttribute(t,s))}else t="-"===t[2]?t.slice(3):Ee(Ue,r)?r.slice(2):r[2]+t.slice(3),n&&He.rel(e,t,n,!1),s&&He.ael(e,t,s,!1)}},H=/\s/,_=e=>e?e.split(H):[],z=(e,t,n,s)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||p,a=t.$attrs$||p;for(s in l)s in a||W(o,s,l[s],void 0,n,t.$flags$);for(s in a)W(o,s,l[s],a[s],n,t.$flags$)},V=(e,t,a,i)=>{const c=t.$children$[a];let d,m,h,f=0;if(l||($=!0,"slot"===c.$tag$&&(n&&i.classList.add(n+"-s"),c.$flags$|=c.$children$?2:1)),null!==c.$text$)d=c.$elm$=Be.createTextNode(c.$text$);else if(1&c.$flags$)d=c.$elm$=Be.createTextNode("");else{if(r||(r="svg"===c.$tag$),d=c.$elm$=Be.createElementNS(r?g:y,2&c.$flags$?"slot-fb":c.$tag$),r&&"foreignObject"===c.$tag$&&(r=!1),z(null,c,r),v(n)&&d["s-si"]!==n&&d.classList.add(d["s-si"]=n),c.$children$)for(f=0;f<c.$children$.length;++f)m=V(e,c,f,d),m&&d.appendChild(m);"svg"===c.$tag$?r=!1:"foreignObject"===d.tagName&&(r=!0)}return d["s-hn"]=o,3&c.$flags$&&(d["s-sr"]=!0,d["s-cr"]=s,d["s-sn"]=c.$name$||"",h=e&&e.$children$&&e.$children$[a],h&&h.$tag$===c.$tag$&&e.$elm$&&I(e.$elm$,!1)),d},I=(e,t)=>{He.$flags$|=1;const n=e.childNodes;for(let s=n.length-1;s>=0;s--){const e=n[s];e["s-hn"]!==o&&e["s-ol"]&&(G(e).insertBefore(e,Y(e)),e["s-ol"].remove(),e["s-ol"]=void 0,$=!0),t&&I(e,t)}He.$flags$&=-2},K=(e,t,n,s,l,a)=>{let $,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===o&&(r=r.shadowRoot);l<=a;++l)s[l]&&($=V(null,n,l,e),$&&(s[l].$elm$=$,r.insertBefore($,Y(t))))},q=(e,t,n,s,o)=>{for(;t<=n;++t)(s=e[t])&&(o=s.$elm$,se(s),a=!0,o["s-ol"]?o["s-ol"].remove():I(o,!0),o.remove())},Q=(e,t,n,s)=>{let o,l,a=0,$=0,r=0,i=0,c=t.length-1,d=t[0],m=t[c],h=s.length-1,f=s[0],u=s[h];for(;a<=c&&$<=h;)if(null==d)d=t[++a];else if(null==m)m=t[--c];else if(null==f)f=s[++$];else if(null==u)u=s[--h];else if(X(d,f))J(d,f),d=t[++a],f=s[++$];else if(X(m,u))J(m,u),m=t[--c],u=s[--h];else if(X(d,u))"slot"!==d.$tag$&&"slot"!==u.$tag$||I(d.$elm$.parentNode,!1),J(d,u),e.insertBefore(d.$elm$,m.$elm$.nextSibling),d=t[++a],u=s[--h];else if(X(m,f))"slot"!==d.$tag$&&"slot"!==u.$tag$||I(m.$elm$.parentNode,!1),J(m,f),e.insertBefore(m.$elm$,d.$elm$),m=t[--c],f=s[++$];else{for(r=-1,i=a;i<=c;++i)if(t[i]&&null!==t[i].$key$&&t[i].$key$===f.$key$){r=i;break}r>=0?(l=t[r],l.$tag$!==f.$tag$?o=V(t&&t[$],n,r,e):(J(l,f),t[r]=void 0,o=l.$elm$),f=s[++$]):(o=V(t&&t[$],n,$,e),f=s[++$]),o&&G(d.$elm$).insertBefore(o,Y(d.$elm$))}a>c?K(e,null==s[h+1]?null:s[h+1].$elm$,n,s,$,h):$>h&&q(t,a,c)},X=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),Y=e=>e&&e["s-ol"]||e,G=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,J=(e,t)=>{const n=t.$elm$=e.$elm$,s=e.$children$,o=t.$children$,l=t.$tag$,a=t.$text$;let $;null===a?(r="svg"===l||"foreignObject"!==l&&r,"slot"===l||z(e,t,r),null!==s&&null!==o?Q(n,s,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),K(n,null,t,o,0,o.length-1)):null!==s&&q(s,0,s.length-1),r&&"svg"===l&&(r=!1)):($=n["s-cr"])?$.parentNode.textContent=a:e.$text$!==a&&(n.data=a)},Z=e=>{const t=e.childNodes;let n,s,o,l,a,$;for(s=0,o=t.length;s<o;s++)if(n=t[s],1===n.nodeType){if(n["s-sr"])for(a=n["s-sn"],n.hidden=!1,l=0;l<o;l++)if($=t[l].nodeType,t[l]["s-hn"]!==n["s-hn"]||""!==a){if(1===$&&a===t[l].getAttribute("slot")){n.hidden=!0;break}}else if(1===$||3===$&&""!==t[l].textContent.trim()){n.hidden=!0;break}Z(n)}},ee=[],te=e=>{let t,n,s,o,l,$,r=0;const i=e.childNodes,c=i.length;for(;r<c;r++){if(t=i[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(s=n.parentNode.childNodes,o=t["s-sn"],$=s.length-1;$>=0;$--)n=s[$],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(ne(n,o)?(l=ee.find((e=>e.$nodeToRelocate$===n)),a=!0,n["s-sn"]=n["s-sn"]||o,l?l.$slotRefNode$=t:ee.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&ee.map((e=>{ne(e.$nodeToRelocate$,n["s-sn"])&&(l=ee.find((e=>e.$nodeToRelocate$===n)),l&&!e.$slotRefNode$&&(e.$slotRefNode$=l.$slotRefNode$))}))):ee.some((e=>e.$nodeToRelocate$===n))||ee.push({$nodeToRelocate$:n}));1===t.nodeType&&te(t)}},ne=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,se=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(se)},oe=(e,t)=>{const r=e.$hostElement$,i=e.$cmpMeta$,c=e.$vnode$||N(null,null),d=R(t)?t:S(null,null,t);if(o=r.tagName,i.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},i.$attrsToReflect$.map((([e,t])=>d.$attrs$[t]=r[e]))),d.$tag$=null,d.$flags$|=4,e.$vnode$=d,d.$elm$=c.$elm$=r.shadowRoot||r,n=r["s-sc"],s=r["s-cr"],l=_e&&0!=(1&i.$flags$),a=!1,J(c,d),He.$flags$|=1,$){let e,t,n,s,o,l;te(d.$elm$);let a=0;for(;a<ee.length;a++)e=ee[a],t=e.$nodeToRelocate$,t["s-ol"]||(n=Be.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(a=0;a<ee.length;a++)if(e=ee[a],t=e.$nodeToRelocate$,e.$slotRefNode$){for(s=e.$slotRefNode$.parentNode,o=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(l=n["s-nr"],l&&l["s-sn"]===t["s-sn"]&&s===l.parentNode&&(l=l.nextSibling,!l||!l["s-nr"])){o=l;break}(!o&&s!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),s.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}a&&Z(d.$elm$),He.$flags$&=-2,ee.length=0},le=(e,t)=>{},ae=(e,n)=>{t.taskQueue&&t.updatable&&(e.$flags$|=16),le(e,e.$ancestorComponent$);return Ze((()=>$e(e,n)))},$e=(e,t)=>{const n=e.$hostElement$,s=f("scheduleUpdate",e.$cmpMeta$.$tagName$),o=n;let l;return l=me(o,t?"componentWillLoad":"componentWillUpdate"),l=he(l,(()=>me(o,"componentWillRender"))),s(),he(l,(()=>re(e,o,t)))},re=async(e,t,n)=>{const s=e.$hostElement$,o=f("update",e.$cmpMeta$.$tagName$);s["s-rc"],n&&U(e);const l=f("render",e.$cmpMeta$.$tagName$);ie(e,t,s),l(),o(),ce(e)},ie=(e,n,s)=>{const o=!1,l=!1,a=!0,$=!0;try{i=n,n=(o||n.render)&&n.render(),$&&a&&(e.$flags$&=-17),($||l)&&(e.$flags$|=2),(t.hasRenderFn||t.reflect)&&(t.vdomRender||t.reflect)&&(t.hydrateServerSide||oe(e,n))}catch(r){Oe(r,e.$hostElement$)}return i=null,null},ce=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,s=f("postUpdate",t),o=n;e.$ancestorComponent$,me(o,"componentDidRender"),64&e.$flags$?(me(o,"componentDidUpdate"),s()):(e.$flags$|=64,me(o,"componentDidLoad"),s())},de=e=>{if(t.updatable){const t=Le(e),n=t.$hostElement$.isConnected;return n&&2==(18&t.$flags$)&&ae(t,!1),n}return!1},me=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(s){Oe(s)}},he=(e,t)=>e&&e.then?e.then(t):t(),fe=(e,t)=>Le(e).$instanceValues$.get(t),ue=(e,t,n,s)=>{const o=Le(e),l=e,a=o.$instanceValues$.get(t),$=o.$flags$,r=l;n=E(n,s.$members$[t][0]);const i=Number.isNaN(a)&&Number.isNaN(n);if(n!==a&&!i){if(o.$instanceValues$.set(t,n),s.$watchers$&&128&$){const e=s.$watchers$[t];e&&e.map((e=>{try{r[e](n,a,t)}catch(s){Oe(s,l)}}))}if(2==(18&$)){if(r.componentShouldUpdate&&!1===r.componentShouldUpdate(n,a,t))return;ae(o,!1)}}},pe=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const n=Object.entries(t.$members$),s=e.prototype;n.map((([e,[n]])=>{(31&n||32&n)&&Object.defineProperty(s,e,{get(){return fe(this,e)},set(n){ue(this,e,n,t)},configurable:!0,enumerable:!0})}));{const o=new Map;s.attributeChangedCallback=function(e,t,n){He.jmp((()=>{const t=o.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return o.set(s,e),512&n[0]&&t.$attrsToReflect$.push([e,s]),s}))}}return e},ge=async(e,t,n,s,o)=>{if(0==(32&t.$flags$)&&(o=e.constructor,t.$flags$|=32,customElements.whenDefined(n.$tagName$).then((()=>t.$flags$|=128)),o.style)){let s=o.style;"string"!=typeof s&&(s=s[t.$modeName$=D(e)]);const l=B(n,t.$modeName$);if(!je.has(l)){const e=f("registerStyles",n.$tagName$);j(l,s,!!(1&n.$flags$)),e()}}t.$ancestorComponent$;(()=>{ae(t,!0)})()},ye=e=>{},ve=e=>{if(0==(1&He.$flags$)){const t=Le(e),n=t.$cmpMeta$,s=f("connectedCallback",n.$tagName$);1&t.$flags$?(ke(e,t,n.$listeners$),ye(t.$lazyInstance$)):(t.$flags$|=1,12&n.$flags$&&be(e),n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),ge(e,t,n)),s()}},be=e=>{const t=e["s-cr"]=Be.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},we=e=>{if(0==(1&He.$flags$)){const t=Le(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}},Se=(e,n)=>{const s={$flags$:n[0],$tagName$:n[1]};t.member&&(s.$members$=n[2]),t.hostListener&&(s.$listeners$=n[3]),t.watchCallback&&(s.$watchers$=e.$watchers$),t.reflect&&(s.$attrsToReflect$=[]),t.shadowDom&&!_e&&1&s.$flags$&&(s.$flags$|=8);const o=e.prototype.connectedCallback,l=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){De(this,s)},connectedCallback(){ve(this),t.connectedCallback&&o&&o.call(this)},disconnectedCallback(){we(this),t.disconnectedCallback&&l&&l.call(this)},__attachShadow(){_e?t.shadowDelegatesFocus?this.attachShadow({mode:"open",delegatesFocus:!!(16&s.$flags$)}):this.attachShadow({mode:"open"}):this.shadowRoot=this}}),e.is=s.$tagName$,pe(e,s)},Ne=(e,t)=>t,ke=(e,t,n,s)=>{n&&n.map((([n,s,o])=>{const l=xe(e,n),a=Re(t,o),$=Te(n);He.ael(l,s,a,$),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>He.rel(l,s,a,$)))}))},Re=(e,n)=>s=>{try{t.lazyLoad||e.$hostElement$[n](s)}catch(o){Oe(o)}},xe=(e,t)=>4&t?Be:8&t?Ue:16&t?Be.body:e,Te=e=>ze?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),Ce=new WeakMap,Le=e=>Ce.get(e),De=(e,n)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};return t.isDev&&(s.$renderCount$=0),t.method&&t.lazyLoad&&(s.$onInstancePromise$=new Promise((e=>s.$onInstanceResolve$=e))),t.asyncLoading&&(s.$onReadyPromise$=new Promise((e=>s.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[]),ke(e,s,n.$listeners$),Ce.set(e,s)},Ee=(e,t)=>t in e,Oe=(e,t)=>(0,console.error)(e,t),Ae=t.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],Me=(...e)=>console.error(...Ae,...e),Pe=(...e)=>console.warn(...Ae,...e),je=new Map,Fe=[],Ue="undefined"!=typeof window?window:{};t.cssVarShim&&Ue.CSS;const Be=Ue.document||{head:{}},We=Ue.HTMLElement||class{},He={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)},_e=!t.shadowDomShim||!t.shadowDom||(()=>(Be.head.attachShadow+"").indexOf("[native")>-1)(),ze=(()=>{let e=!1;try{Be.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(t){}return e})(),Ve=e=>Promise.resolve(e),Ie=!!t.constructableCSS&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),Ke=[],qe=[],Qe=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&He.$flags$?Ge(Ye):He.raf(Ye))},Xe=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){Oe(t)}e.length=0},Ye=()=>{Xe(Ke),Xe(qe),(c=Ke.length>0)&&He.raf(Ye)},Ge=e=>Ve().then(e),Je=Qe(Ke,!1),Ze=Qe(qe,!0);e.Build=d,e.Fragment=Ne,e.H=We,e.Host=k,e.createEvent=A,e.forceUpdate=de,e.getAssetPath=m,e.h=S,e.proxyCustomElement=Se,e.readTask=Je,e.setAssetPath=h}));
