"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{416:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var r,o,i,a,c,u,s,l,p,d,h,f,m,x,g,b,y,v,Z,j,k,w=t(1413),S=t(7762),C=t(5861),O=t(9439),F=t(168),_=t(4687),P=t.n(_),q=t(2791),z=t(5705),T=t(6088),A=T.Z.h2(r||(r=(0,F.Z)(["\n  font-weight: 500;\n  font-size: ","px;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing(7)}),(function(e){return e.theme.spacing(6)})),M=t(184),R=function(e){var n=e.category,t=e.currentStep,r="";switch(n){case"sell":r="Add pet for sell";break;case"lostFound":r="Add lost pet";break;case"inGoodHands":r="Add pet in good hands";break;default:r="Add pet"}return 0===t&&(r="Add pet"),(0,M.jsx)(A,{children:r})},U=(0,T.Z)(z.l0)(o||(o=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),B=(T.Z.div(i||(i=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),{category:"lostFound",title:"",name:"",date:"",breed:"",sex:"",location:"",price:"",photo:void 0,comments:""}),E=t(6727),L=E.Ry({category:E.Z_().oneOf(["yourPet","sell","lostFound","inGoodHands"]).required(),title:E.Z_().required("Please type a title"),name:E.Z_().min(2).required("Please type a name"),date:E.Z_().required("Please type a date"),breed:E.Z_().required("Please type a breed"),sex:E.Z_().oneOf(["male","female"]).required(),location:E.Z_().required(),price:E.Rx().when("category",{is:"sell",then:function(e){return e.required()},otherwise:function(e){return e.notRequired()}}),comments:E.Z_().min(3,"Please include more details...").required("Comment is required")}),N=T.Z.ul(a||(a=(0,F.Z)(["\n  padding: 0;\n  margin-bottom: ","px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: ","px;\n"])),(function(e){var n=e.theme;return 0===e.currentStep?n.spacing(7):n.spacing(6)}),(function(e){return e.theme.spacing(3)})),D=T.Z.li(c||(c=(0,F.Z)(["\n  position: relative;\n  text-align: center;\n  width: ","px;\n  font-weight: 500;\n  padding: ","px 0;\n  font-size: ","px;\n  color: ",";\n\n  &::after {\n    content: '';\n    display: block;\n    width: ","px;\n    height: ","px;\n    position: absolute;\n    top: ","px;\n\n    background-color: ",";\n    border-radius: ","px;\n  }\n"])),(function(e){return e.theme.spacing(20)}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.spacing(2.5)}),(function(e){var n=e.theme,t=e.currentStep,r=e.idx;return t<r?"#888888":t===r?n.colors.blue:t>r?n.colors.green:void 0}),(function(e){return e.theme.spacing(20)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(9)}),(function(e){var n=e.theme,t=e.currentStep,r=e.idx;return t<r?n.colors.lightblue:t===r?n.colors.blue:t>r?n.colors.green:void 0}),(function(e){return e.theme.spacing(2)})),G=["Choose  option","Personal details","More info"],H=function(e){var n=e.currentStep;return(0,M.jsx)(N,{currentStep:n,children:G.map((function(e,t){return(0,M.jsx)(D,{idx:t,currentStep:n,children:e},t)}))})},I=t(4925),V=T.Z.button(u||(u=(0,F.Z)(["\n  min-width: ","px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ","px;\n\n  font-size: ","px;\n  font-weight: 700;\n  padding: ","px\n    ","px;\n\n  background-color: ",";\n  color: ",";\n\n  border: none;\n  border-radius: ","px;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n  cursor: pointer;\n  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,\n    border 250ms ease-in-out;\n"])),(function(e){return null!==e&&void 0!==e&&e.width?null===e||void 0===e?void 0:e.width:e.theme.spacing(41)}),(function(e){return e.theme.spacing(1)}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(5)}),(function(e){var n=e.theme;return e.transparent?"transparent":n.colors.blue}),(function(e){var n=e.theme;return e.transparent?n.colors.blue:n.colors.white}),(function(e){return e.theme.spacing(10)}),(function(e){var n=e.theme;return e.transparent?n.colors.white:n.colors.blue}),(function(e){var n=e.theme;return e.transparent?n.colors.blue:"transparent"})),J=["type","transparent","children","onClick"],W=function(e){var n=e.type,t=void 0===n?"button":n,r=e.transparent,o=void 0!==r&&r,i=e.children,a=e.onClick,c=(0,I.Z)(e,J);return(0,M.jsx)(V,(0,w.Z)((0,w.Z)({transparent:o,type:t,onClick:a},c),{},{children:i}))},K=t(5984),Q=(0,T.Z)(z.gN)(s||(s=(0,F.Z)(["\n  opacity: 0;\n  position: fixed;\n  width: 0;\n\n  &:checked + label {\n    background-color: ",";\n\n    color: ",";\n  }\n"])),(function(e){var n=e.theme;return"category"===e.name?n.colors.blue:"transparent"}),(function(e){var n=e.theme;return"category"===e.name?n.colors.white:n.colors.green})),X=T.Z.label(l||(l=(0,F.Z)(["\n  display: inline-block;\n  background-color: ",";\n  color: ",";\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  font-family: inherit;\n  font-size: ","px;\n  font-weight: ",";\n  border: none;\n  border-radius: 40px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(e){var n=e.theme;return"category"===e.name?n.colors.lightblue:"transparent"}),(function(e){var n=e.theme;return"category"===e.name?n.colors.blue:"#888888"}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(4)}),(function(e){var n=e.theme;return"category"===e.name?n.spacing(3.5):n.spacing(4)}),(function(e){return"category"===e.name?500:400})),Y=function(e){var n=e.name,t=e.label,r=e.value,o=(0,q.useMemo)((function(){return(0,K.x0)()}),[]);return(0,M.jsxs)("div",{children:[(0,M.jsx)(Q,{id:o,type:"radio",name:n,value:r}),(0,M.jsx)(X,{htmlFor:o,name:n,children:t})]})},$={category:{name:"category"},title:{name:"title",type:"text",label:"Title of add",placeholder:"Type title of add"},name:{name:"name",type:"text",label:"Name pet",placeholder:"Type pet name"},date:{name:"date",type:"text",label:"Date of birth",placeholder:"Type date of birth"},breed:{name:"breed",type:"text",label:"Breed",placeholder:"Type breed"},sex:{name:"sex"},photo:{name:"photo",label:"Add photo"},location:{name:"location",type:"text",label:"Location",placeholder:"Type location"},price:{name:"price",type:"text",label:"Price",placeholder:"Type price"},comments:{name:"comments",as:"textarea",label:"Comments",placeholder:"Add more details about your pet"}},ee=T.Z.div(p||(p=(0,F.Z)(["\n  margin-bottom: ","px; ////need fix!!\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: ","px;\n"])),(function(e){return e.theme.spacing(25)}),(function(e){return e.theme.spacing(4)})),ne=T.Z.div(d||(d=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n"]))),te=function(e){var n=e.helpers,t=e.setCategory,r=e.changeStep,o=n.values,i=n.setErrors;return(0,M.jsxs)(ne,{children:[(0,M.jsxs)(ee,{children:[(0,M.jsx)(Y,(0,w.Z)({value:"sell",label:"Sell"},$.category)),(0,M.jsx)(Y,(0,w.Z)({value:"lostFound",label:"Lost / found"},$.category)),(0,M.jsx)(Y,(0,w.Z)({value:"inGoodHands",label:"In good handsll"},$.category))]}),(0,M.jsx)("div",{children:(0,M.jsx)(W,{type:"button",onClick:function(){t(o.category),r("next"),i({})},width:248,children:"Next"})})]})},re=T.Z.label(h||(h=(0,F.Z)(["\n  display: block;\n  font-size: ","px;\n  /* font-weight: 500; */\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(1)})),oe=(0,T.Z)(z.gN)(f||(f=(0,F.Z)(["\n  width: ","px;\n  height: ","px;\n  padding-left: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  border: 1px solid\n    ",";\n  border-radius: ","px;\n  font-size: ","px;\n  ","\n"])),(function(e){return e.theme.spacing(66)}),(function(e){var n=e.theme;if("textarea"===e.as)return n.spacing(23)}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(2.375)}),(function(e){return e.theme.spacing(2.375)}),(function(e){var n=e.name,t=e.errors,r=e.touched,o=e.theme;return t[n]&&r[n]?o.colors.red:o.colors.blue}),(function(e){var n=e.theme;return"textarea"===e.as?n.spacing(5):n.spacing(10)}),(function(e){return e.theme.spacing(3.5)}),(function(e){if("textarea"===e.as)return"resize: none;"})),ie=(T.Z.span(m||(m=(0,F.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin-top: ","px;\n"])),(function(e){return e.theme.red}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.spacing(2)})),T.Z.div(x||(x=(0,F.Z)(["\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing(5)}))),ae=["errors","touched","label","name"],ce=function(e){var n=e.errors,t=e.touched,r=e.label,o=e.name,i=(0,I.Z)(e,ae),a=(0,q.useMemo)((function(){return(0,K.x0)()}),[]);return(0,M.jsxs)(ie,{children:[(0,M.jsx)(re,{htmlFor:a,children:r}),(0,M.jsx)(oe,(0,w.Z)({errors:n,touched:t,id:a,name:o},i)),(0,M.jsx)(be,{name:o})]})},ue=T.Z.div(g||(g=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: ","px;\n"])),(function(e){return e.theme.spacing(2.5)})),se=function(e){var n=e.helpers,t=e.changeStep,r=n.errors,o=n.setErrors,i=n.touched,a=n.values,c=n.setFieldTouched,u=["title","name","date","breed"],s=function(){var e={};try{L.validateSync(a,{abortEarly:!1})}catch(n){n.inner.map((function(n){return u.includes(n.path)&&(e[n.path]=n.errors[0]),n}))}return e},l=function(){var e=(0,C.Z)(P().mark((function e(){var n,r,a,l;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s(),0!==Object.keys(n).length){e.next=5;break}t("next"),e.next=26;break;case 5:return e.next=7,o(n);case 7:r=(0,S.Z)(u),e.prev=8,r.s();case 10:if((a=r.n()).done){e.next=18;break}if(l=a.value,!i[l]){e.next=14;break}return e.abrupt("continue",16);case 14:return e.next=16,c(l,!0);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),r.e(e.t0);case 23:return e.prev=23,r.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[8,20,23,26]])})));return function(){return e.apply(this,arguments)}}();return(0,M.jsxs)("div",{children:[(0,M.jsx)(ce,(0,w.Z)({errors:r,touched:i},$.title)),(0,M.jsx)(ce,(0,w.Z)({errors:r,touched:i},$.name)),(0,M.jsx)(ce,(0,w.Z)({errors:r,touched:i},$.date)),(0,M.jsx)(ce,(0,w.Z)({errors:r,touched:i},$.breed)),(0,M.jsxs)(ue,{children:[(0,M.jsx)(W,{id:"test",width:248,onClick:function(e){l(e)},children:"Next"}),(0,M.jsx)(W,{width:248,transparent:!0,onClick:function(){return t("back")},children:"Back"})]})]})},le=T.Z.input(b||(b=(0,F.Z)(["\n  display: none;\n"]))),pe=T.Z.img(y||(y=(0,F.Z)(["\n  display: ",";\n  width: ","px;\n  height: ","px;\n  object-fit: cover;\n  border-radius: ","px;\n"])),(function(e){return e.photoUrl?"block":"none"}),(function(e){return e.theme.spacing(28)}),(function(e){return e.theme.spacing(28)}),(function(e){return e.theme.spacing(5)})),de=T.Z.label(v||(v=(0,F.Z)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: ","px;\n"])),(function(e){return e.theme.spacing(28)}),(function(e){return e.theme.spacing(28)}),(function(e){return e.theme.colors.lightblue}),(function(e){return e.theme.spacing(5)})),he=function(e){var n=e.onChange,t=e.name,r=e.photo,o=(0,q.useMemo)((function(){return(0,K.x0)()}),[]),i=null;return r&&(i=URL.createObjectURL(r)),(0,M.jsxs)("div",{children:[(0,M.jsx)(de,{htmlFor:o,children:(0,M.jsx)(pe,{src:i,photoUrl:i})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(le,{type:"file",name:t,id:o,onChange:n}),(0,M.jsx)(be,{name:t})]})]})},fe=T.Z.p(Z||(Z=(0,F.Z)(["\n  margin: 0;\n  font-family: inherit;\n  font-size: ","px;\n  font-weight: 500;\n"])),(function(e){return e.theme.spacing(3.75)})),me=T.Z.div(j||(j=(0,F.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n"])),(function(e){var n=e.theme,t=e.gap;return n.spacing(t/4)})),xe=function(e){var n=e.setPhoto,t=e.photo,r=e.category,o=e.changeStep,i=e.helpers,a=i.errors,c=i.touched;return(0,M.jsxs)("div",{children:[(0,M.jsxs)("div",{children:[(0,M.jsx)(fe,{children:"The sex"}),(0,M.jsxs)(me,{gap:12,children:[(0,M.jsx)(Y,(0,w.Z)({value:"female",label:"Female"},$.sex)),(0,M.jsx)(Y,(0,w.Z)({value:"male",label:"Male"},$.sex))]}),(0,M.jsx)(be,{name:"sex"})]}),(0,M.jsxs)(me,{gap:28,children:[(0,M.jsx)(fe,{children:"Add photo"}),(0,M.jsx)(he,(0,w.Z)((0,w.Z)({photo:t},$.photo),{},{onChange:function(e){return n(e.currentTarget.files[0])}}))]}),(0,M.jsx)(ce,(0,w.Z)({errors:a,touched:c},$.location)),"sell"===r&&(0,M.jsx)(ce,(0,w.Z)({errors:a,touched:c},$.price)),(0,M.jsx)(ce,(0,w.Z)({errors:a,touched:c},$.comments)),(0,M.jsx)(V,{type:"submit",width:248,children:"Done"}),(0,M.jsx)(V,{transparent:!0,type:"button",width:248,onClick:function(){return o("back")},children:"Back"})]})},ge=T.Z.p(k||(k=(0,F.Z)(["\n  color: ",";\n  font-size: ","px;\n  margin: 4px 0 0;\n"])),(function(e){return e.theme.colors.red}),(function(e){return e.theme.spacing(3)})),be=function(e){var n=e.name;return(0,M.jsx)(z.Bc,{name:n,render:function(e){return(0,M.jsx)(ge,{children:e})}})},ye=function(){var e=(0,q.useState)("lostFound"),n=(0,O.Z)(e,2),t=n[0],r=n[1],o=(0,q.useState)(null),i=(0,O.Z)(o,2),a=i[0],c=i[1],u=(0,q.useState)(0),s=(0,O.Z)(u,2),l=s[0],p=s[1],d=function(e){"next"===e&&p((function(e){return e+1})),"back"===e&&p((function(e){return e-1}))},h=function(){var e=(0,C.Z)(P().mark((function e(n,t){var r,o,i,c,u,s;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.setFieldError,a){e.next=5;break}return e.next=4,r("photo","Load image");case 4:return e.abrupt("return");case 5:(o=new FormData).append("photo",a),e.t0=P().keys(n);case 8:if((e.t1=e.t0()).done){e.next=15;break}if(i=e.t1.value,n[i]){e.next=12;break}return e.abrupt("continue",8);case 12:o.append(i,n[i]),e.next=8;break;case 15:c=(0,S.Z)(o.entries());try{for(c.s();!(u=c.n()).done;)s=u.value,console.log(s[0],s[1])}catch(l){c.e(l)}finally{c.f()}case 17:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(R,{category:t,currentStep:l}),(0,M.jsx)(H,{currentStep:l}),(0,M.jsx)(z.J9,{initialValues:(0,w.Z)({},B),validationSchema:L,validateOnBlur:!1,validateOnMount:!1,onSubmit:h,children:function(e){return(0,M.jsxs)(U,{autoComplete:"off",children:[0===l&&(0,M.jsx)(te,{helpers:e,setCategory:r,changeStep:d}),1===l&&(0,M.jsx)(se,{helpers:e,changeStep:d}),2===l&&(0,M.jsx)(xe,{category:t,setPhoto:c,changeStep:d,helpers:e,photo:a})]})}})]})},ve=t(7989),Ze=function(){return(0,M.jsx)(ve.W,{children:(0,M.jsx)(ye,{})})}},4925:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=416.bf7f8a3d.chunk.js.map