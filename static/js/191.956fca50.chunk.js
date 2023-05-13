"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[191],{4191:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var o=n(2791),r=n(9439),a=n(1087),i=n(7689),s=n(5861),c=n(4687),l=n.n(c),u=n(1243),d=n(4942),f=n(1413),p=n(4925),m=n(3433);function h(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var v=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(o&&(o+=" "),o+=t);return o},g=["theme","type"],y=["delay","staleId"],x=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},T=function(e){return b(e)||E(e)?e:null},Z=function(e){return(0,o.isValidElement)(e)||b(e)||E(e)||x(e)};function w(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=a?"".concat(t,"--").concat(i):t,h=a?"".concat(n,"--").concat(i):n,v=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),o=function e(o){var r;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,m.Z)(n)))};(e=t.classList).add.apply(e,(0,m.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,o.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(v.current=1,e.className+=" ".concat(h),e.addEventListener("animationend",t)))}),[f]),o.createElement(o.Fragment,null,r)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,m.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},_=function(e){var t=e.theme,n=e.type,r=(0,p.Z)(e,g);return o.createElement("svg",(0,f.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},O={info:function(e){return o.createElement(_,(0,f.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(_,(0,f.Z)({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(_,(0,f.Z)({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(_,(0,f.Z)({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function k(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],l=(0,o.useRef)(null),u=(0,o.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},h=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function v(e){var t=e.containerId;!h.props.limit||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function g(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=h.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function _(e,t){var a=t.delay,i=t.staleId,s=(0,p.Z)(t,y);if(Z(e)&&!function(e){return!l.current||h.props.enableMultiContainer&&e.containerId!==h.props.containerId||u.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,d=s.updateId,m=s.data,v=h.props,_=function(){return g(c)},L=null==d;L&&h.count++;var R,N,j=(0,f.Z)((0,f.Z)((0,f.Z)({},v),{},{style:v.toastStyle,key:h.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,r.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:_,isIn:!1,className:T(s.className||v.toastClassName),bodyClassName:T(s.bodyClassName||v.bodyClassName),progressClassName:T(s.progressClassName||v.progressClassName),autoClose:!s.isLoading&&(R=s.autoClose,N=v.autoClose,!1===R||x(R)&&R>0?R:N),deleteToast:function(){var e=C(u.get(c),"removed");u.delete(c),I.emit(4,e);var t=h.queue.length;if(h.count=null==c?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),t>0){var o=null==c?h.props.limit:1;if(1===t||1===o)h.displayedToast++,w();else{var r=o>t?t:o;h.displayedToast=r;for(var a=0;a<r;a++)w()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(E(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):b(a)||x(a)?i=a:r?i=O.spinner():function(e){return e in O}(n)&&(i=O[n](s))),i}(j),E(s.onOpen)&&(j.onOpen=s.onOpen),E(s.onClose)&&(j.onClose=s.onClose),j.closeButton=v.closeButton,!1===s.closeButton||Z(s.closeButton)?j.closeButton=s.closeButton:!0===s.closeButton&&(j.closeButton=!Z(v.closeButton)||v.closeButton);var M=e;(0,o.isValidElement)(e)&&!b(e.type)?M=(0,o.cloneElement)(e,{closeToast:_,toastProps:j,data:m}):E(e)&&(M=e({closeToast:_,toastProps:j,data:m})),v.limit&&v.limit>0&&h.count>v.limit&&L?h.queue.push({toastContent:M,toastProps:j,staleId:i}):x(a)?setTimeout((function(){k(M,j,i)}),a):k(M,j,i)}}function k(e,t,n){var o=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(o,r),c((function(e){return[].concat((0,m.Z)(e),[o]).filter((function(e){return e!==n}))})),I.emit(4,C(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return h.containerId=e.containerId,I.cancelEmit(3).on(0,_).on(1,(function(e){return l.current&&g(e)})).on(5,v).emit(2,h),function(){u.clear(),I.emit(3,h)}}),[]),(0,o.useEffect)((function(){h.props=e,h.isToastActive=d,h.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],i=n[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,h=e.pauseOnHover,v=e.closeToast,g=e.onClick,y=e.closeOnClick;function x(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",C),document.addEventListener("touchmove",w),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=L(t.nativeEvent),f.y=R(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?Z():T()}}function T(){i(!0)}function Z(){i(!1)}function w(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&Z(),f.x=L(t),f.y=R(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",C);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),E(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||Z(),window.addEventListener("focus",T),window.addEventListener("blur",Z)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:x,onTouchStart:x,onMouseUp:b,onTouchEnd:b};return m&&h&&(I.onMouseEnter=Z,I.onMouseLeave=T),y&&(I.onClick=function(e){g&&g(e),f.canCloseOnClick&&v()}),{playToast:T,pauseToast:Z,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:I}}function j(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function M(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,i=void 0===a?"default":a,s=e.hide,c=e.className,l=e.style,u=e.controlledProgress,p=e.progress,m=e.rtl,h=e.isIn,g=e.theme,y=s||u&&0===p,x=(0,f.Z)((0,f.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});u&&(x.transform="scaleX(".concat(p,")"));var b=v("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),T=E(c)?c({rtl:m,type:i,defaultClassName:b}):v(b,c);return o.createElement("div",(0,d.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:x},u&&p>=1?"onTransitionEnd":"onAnimationEnd",u&&p<1?null:function(){h&&r()}))}var P=function(e){var t=N(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,h=e.transition,g=e.position,y=e.className,x=e.style,b=e.bodyClassName,T=e.bodyStyle,Z=e.progressClassName,w=e.progressStyle,C=e.updateId,I=e.role,_=e.progress,O=e.rtl,k=e.toastId,L=e.deleteToast,R=e.isIn,P=e.isLoading,z=e.iconOut,D=e.closeOnClick,B=e.theme,A=v("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":D}),S=E(y)?y({rtl:O,position:g,type:d,defaultClassName:A}):v(A,y),F=!!_||!l,q={closeToast:m,type:d,theme:B},H=null;return!1===s||(H=E(s)?s(q):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,q):j(q)),o.createElement(h,{isIn:R,done:L,position:g,preventExitTransition:r,nodeRef:a},o.createElement("div",(0,f.Z)((0,f.Z)({id:k,onClick:u,className:S},i),{},{style:x,ref:a}),o.createElement("div",(0,f.Z)((0,f.Z)({},R&&{role:I}),{},{className:E(b)?b({type:d}):v("Toastify__toast-body",b),style:T}),null!=z&&o.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},z),o.createElement("div",null,c)),H,o.createElement(M,(0,f.Z)((0,f.Z)({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:O,theme:B,delay:l,isRunning:n,isIn:R,closeToast:m,hide:p,type:d,style:w,className:Z,controlledProgress:F,progress:_||0}))))},z=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=w(z("bounce",!0)),B=(w(z("slide",!0)),w(z("zoom")),w(z("flip")),(0,o.forwardRef)((function(e,t){var n=k(e),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return E(s)?s({position:e,rtl:l,defaultClassName:t}):v(t,T(s))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:u},r((function(e,t){var n=t.length?(0,f.Z)({},c):(0,f.Z)((0,f.Z)({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(P,(0,f.Z)((0,f.Z)({},a),{},{isIn:i(a.toastId),style:(0,f.Z)((0,f.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),r)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,S=new Map,F=[],q=1;function H(){return""+q++}function Q(e){return e&&(b(e.toastId)||x(e.toastId))?e.toastId:H()}function V(e,t){return S.size>0?I.emit(0,e,t):F.push({content:e,options:t}),t.toastId}function U(e,t){return(0,f.Z)((0,f.Z)({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function G(e){return function(t,n){return V(t,U(e,n))}}function W(e,t){return V(e,U("default",t))}W.loading=function(e,t){return V(e,U("default",(0,f.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=b(r)?W.loading(r,n):W.loading(r.render,(0,f.Z)((0,f.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var a=(0,f.Z)((0,f.Z)((0,f.Z)({type:e},s),n),{},{data:r}),i=b(t)?{render:t}:t;return o?W.update(o,(0,f.Z)((0,f.Z)({},a),i)):W(i.render,(0,f.Z)((0,f.Z)({},a),i)),r}W.dismiss(o)},l=E(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},W.success=G("success"),W.info=G("info"),W.error=G("error"),W.warning=G("warning"),W.warn=W.warning,W.dark=function(e,t){return V(e,U("default",(0,f.Z)({theme:"dark"},t)))},W.dismiss=function(e){S.size>0?I.emit(1,e):F=F.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},W.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=S.get(n||A);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,f.Z)((0,f.Z)((0,f.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,V(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){A=e.containerId||e,S.set(A,e),F.forEach((function(e){I.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&I.off(0).off(1).off(5)}));var X=u.Z.create({baseURL:"localhost:3030/api"}),Y=function(){var e=(0,s.Z)(l().mark((function e(t){var n,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.get("/notices?query=$(query)");case 3:return n=e.sent,o=n.data.results,e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),W.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();var K=n.p+"static/media/search.1842b0c88238d53f372d4baf91e4c1cf.svg";var $,J,ee,te,ne,oe,re,ae,ie,se,ce=n.p+"static/media/cross-small.6d1e6eba2a7cd6856e021cea7babdf08.svg",le=n(168),ue=n(3081),de=ue.Z.h2($||($=(0,le.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 1.37;\n  text-align: center;\n  margin-top: 70px;\n  margin-bottom: 28px;\n  color: ",";\n\n  @media screen and (min-width: 1024px) {\n    font-size: 48px;\n    margin-bottom: 40px;\n  }\n"])),(function(e){return e.theme.black})),fe=ue.Z.form(J||(J=(0,le.Z)(["\n  position: relative;\n  width: 280px;\n  margin-top: 42px;\n  margin-right: auto;\n  margin-left: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n  }\n"]))),pe=ue.Z.input(ee||(ee=(0,le.Z)(["\n  width: 100%;\n   height: 40px;\n  box-shadow: ",";\n  &: focus:  box-shadow: ",";\n  border-radius: 40px;\n   border: 1px solid transparent;\n  padding:8px 20px;\n   box-sizing: border-box;\n   outline:none;\n\n    @media screen and (min-width: 768px) {\n    width: 492px;\n    height: 44px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n    height: 44px;\n  }\n"])),(function(e){return e.theme.shadow.default}),(function(e){return e.theme.shadow.hover})),me=ue.Z.button(te||(te=(0,le.Z)(["\n  position: absolute;\n  padding: 12px 14px;\n  right: 12px;\n  top: 54px;\n  background-color: transparent;\n  border: none;\n  transition: color 250ms linear;\n  cursor: pointer;\n  color: black;\n\n  @media screen and (min-width: 768px) {\n    right: 15px;\n    top: 57px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    top: 105px;\n  }\n"]))),he=n(9434),ve=ue.Z.div(ne||(ne=(0,le.Z)(["\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 40px;\n    margin-bottom: 60px;\n  }\n"]))),ge=ue.Z.ul(oe||(oe=(0,le.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  @media screen and (min-width: 1024px) {\n    flex-wrap: no-wrap;\n    flex-direction: row;\n  }\n"]))),ye=ue.Z.div(re||(re=(0,le.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap-reverse;\n  gap: 12px;\n  @media screen and (min-width: 768px) {\n    flex-wrap: no-wrap;\n    flex-direction: row-reverse;\n  }\n  @media screen and (min-width: 1024px) {\n    flex-direction: row;\n  }\n"]))),xe=ue.Z.li(ae||(ae=(0,le.Z)(["\n  display: flex;\n"]))),be=(0,ue.Z)(a.OL)(ie||(ie=(0,le.Z)(["\n  border-radius: 40px;\n  background-color: ",";\n  color: ",";\n  transition: color 250ms linear, background-color 250ms linear;\n  padding: 10px 28px;\n  text-decoration: none;\n  border: none;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.35;\n  align-items: center;\n  &:hover,  &:focus: {\n    color: ",";\n    background-color: ",";\n  }\n  &.active {\n    color: ",";\n    background-color: ",";\n  }\n  @media screen and (min-width: 1024px) {\n    font-size: 20px;\n  }\n"])),(function(e){return e.theme.colors.lightblue}),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.blue})),Ee=ue.Z.div(se||(se=(0,le.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 12px;\n"]))),Te=n(4654),Ze=n(184),we=[{btn:"sell",link:"sell"},{btn:"lost/found",link:"lost-found"},{btn:"in good hands",link:"for-free"}],Ce=[{btn:"favorite ads",link:"favorites-ads"},{btn:"my ads",link:"my-ads"}],Ie=function(){var e=(0,he.v9)(Te.Qb);return(0,Ze.jsx)(Ze.Fragment,{children:(0,Ze.jsx)(ve,{children:(0,Ze.jsxs)(ge,{children:[(0,Ze.jsx)(ye,{children:we.map((function(e,t){return(0,Ze.jsx)(xe,{children:(0,Ze.jsx)(be,{to:"/notices/"+e.link,name:e.link,children:e.btn})},t)}))}),(0,Ze.jsx)(Ee,{children:e&&Ce.map((function(e,t){return(0,Ze.jsx)(xe,{children:(0,Ze.jsx)(be,{to:"/notices/"+e.link,name:e.link,children:e.btn})},t)}))})]})})})},_e=function(){var e,t=(0,a.lr)(),n=(0,r.Z)(t,2),s=n[0],c=n[1],l=(0,o.useState)([]),u=(0,r.Z)(l,2)[1],d=null!==(e=s.get("query"))&&void 0!==e?e:"",f=(0,o.useState)(d),p=(0,r.Z)(f,2),m=p[0],h=p[1],v=function(e){if(e.preventDefault(),""===m)return W.error("Please enter pet!",{position:"top-center",autoClose:3e3,theme:"colored"});c({query:m})},g=function(e){e.preventDefault(),u(""),h(""),c({query:""})};return(0,o.useEffect)((function(){d&&Y(d).then(u)}),[d,u]),(0,Ze.jsxs)("div",{children:[(0,Ze.jsxs)(fe,{onSubmit:v,onReset:g,children:[(0,Ze.jsx)(de,{children:"Find your favorite pet"}),(0,Ze.jsx)(pe,{placeholder:"Search",onChange:function(e){return h(e.target.value)},value:m,searchQuery:m.trim()}),(0,Ze.jsxs)(me,{type:"submit",children:[(0,Ze.jsx)("img",{onClick:v,src:K,alt:"search",width:"24",height:"24"}),m&&(0,Ze.jsx)("img",{onClick:g,src:ce,alt:"delete",width:"24",height:"24"})]})]}),(0,Ze.jsx)(Ie,{}),(0,Ze.jsx)(i.j3,{})]})},Oe=function(){return(0,Ze.jsx)("div",{children:(0,Ze.jsx)(_e,{})})}},4925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=191.956fca50.chunk.js.map