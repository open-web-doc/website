(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4Brf":function(t,n,e){"use strict";var r=e("I+eb"),o=e("g6v/"),i=e("2oRo"),u=e("UTVS"),a=e("hh1v"),c=e("m/L8").f,s=e("6JNq"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};s(p,f);var g=p.prototype=f.prototype;g.constructor=p;var h=g.toString,b="Symbol(test)"==String(f("test")),d=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=h.call(t);if(u(l,t))return"";var e=b?n.slice(7,-1):n.replace(d,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},"5Tg+":function(t,n,e){var r=e("tiKp");n.f=r},"BX/b":function(t,n,e){var r=e("/GqU"),o=e("JBy8").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},"dG/n":function(t,n,e){var r=e("Qo9l"),o=e("UTVS"),i=e("5Tg+"),u=e("m/L8").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},pNMO:function(t,n,e){"use strict";var r=e("I+eb"),o=e("2oRo"),i=e("0GbY"),u=e("xDBR"),a=e("g6v/"),c=e("STAE"),s=e("/b8u"),f=e("0Dky"),l=e("UTVS"),p=e("6LWA"),g=e("hh1v"),h=e("glrk"),b=e("ewvW"),d=e("/GqU"),y=e("wE6v"),m=e("XGwC"),v=e("fHMY"),w=e("33Wh"),S=e("JBy8"),O=e("BX/b"),j=e("dBg+"),P=e("Bs8V"),L=e("m/L8"),T=e("0eef"),B=e("kRJp"),E=e("busE"),U=e("VpIT"),$=e("93I0"),k=e("0BK2"),J=e("kOOl"),N=e("tiKp"),W=e("5Tg+"),x=e("dG/n"),I=e("1E5z"),G=e("afO8"),V=e("tycR").forEach,q=$("hidden"),H=N("toPrimitive"),K=G.set,R=G.getterFor("Symbol"),F=Object.prototype,M=o.Symbol,Q=i("JSON","stringify"),_=P.f,C=L.f,D=O.f,X=T.f,z=U("symbols"),A=U("op-symbols"),Y=U("string-to-symbol-registry"),Z=U("symbol-to-string-registry"),tt=U("wks"),nt=o.QObject,et=!nt||!nt.prototype||!nt.prototype.findChild,rt=a&&f((function(){return 7!=v(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=_(F,n);r&&delete F[n],C(t,n,e),r&&t!==F&&C(F,n,r)}:C,ot=function(t,n){var e=z[t]=v(M.prototype);return K(e,{type:"Symbol",tag:t,description:n}),a||(e.description=n),e},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof M},ut=function(t,n,e){t===F&&ut(A,n,e),h(t);var r=y(n,!0);return h(e),l(z,r)?(e.enumerable?(l(t,q)&&t[q][r]&&(t[q][r]=!1),e=v(e,{enumerable:m(0,!1)})):(l(t,q)||C(t,q,m(1,{})),t[q][r]=!0),rt(t,r,e)):C(t,r,e)},at=function(t,n){h(t);var e=d(n),r=w(e).concat(lt(e));return V(r,(function(n){a&&!ct.call(e,n)||ut(t,n,e[n])})),t},ct=function(t){var n=y(t,!0),e=X.call(this,n);return!(this===F&&l(z,n)&&!l(A,n))&&(!(e||!l(this,n)||!l(z,n)||l(this,q)&&this[q][n])||e)},st=function(t,n){var e=d(t),r=y(n,!0);if(e!==F||!l(z,r)||l(A,r)){var o=_(e,r);return!o||!l(z,r)||l(e,q)&&e[q][r]||(o.enumerable=!0),o}},ft=function(t){var n=D(d(t)),e=[];return V(n,(function(t){l(z,t)||l(k,t)||e.push(t)})),e},lt=function(t){var n=t===F,e=D(n?A:d(t)),r=[];return V(e,(function(t){!l(z,t)||n&&!l(F,t)||r.push(z[t])})),r};(c||(E((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=J(t),e=function(t){this===F&&e.call(A,t),l(this,q)&&l(this[q],n)&&(this[q][n]=!1),rt(this,n,m(1,t))};return a&&et&&rt(F,n,{configurable:!0,set:e}),ot(n,t)}).prototype,"toString",(function(){return R(this).tag})),E(M,"withoutSetter",(function(t){return ot(J(t),t)})),T.f=ct,L.f=ut,P.f=st,S.f=O.f=ft,j.f=lt,W.f=function(t){return ot(N(t),t)},a&&(C(M.prototype,"description",{configurable:!0,get:function(){return R(this).description}}),u||E(F,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:M}),V(w(tt),(function(t){x(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var n=String(t);if(l(Y,n))return Y[n];var e=M(n);return Y[n]=e,Z[e]=n,e},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,n){return void 0===n?v(t):at(v(t),n)},defineProperty:ut,defineProperties:at,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(b(t))}}),Q)&&r({target:"JSON",stat:!0,forced:!c||f((function(){var t=M();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(g(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!it(n))return n}),o[1]=n,Q.apply(null,o)}});M.prototype[H]||B(M.prototype,H,M.prototype.valueOf),I(M,"Symbol"),k[q]=!0},qrQl:function(t,n,e){"use strict";var r=e("xk1H");e.n(r).a},xk1H:function(t,n,e){},"z/i5":function(t,n,e){"use strict";e.r(n);e("pNMO"),e("4Brf"),e("rB9j"),e("UxlC"),e("LKBx");var r=e("VTBJ"),o=e("L2JU"),i=(e("1vvp"),{computed:Object(r.a)(Object(r.a)({},Object(o.c)(["language"])),{},{githubFilePath:function(){return this.$page.documentation.path.replace(/\/$/,".md")},githubEditPage:function(){return"https://github.com/open-web-doc/website/edit/master".concat(this.githubFilePath)}}),methods:{urlLanguageIs:function(t){return this.$route.path.startsWith("/documentation/".concat(t))},getUrlWithLanguage:function(t,n){return this.$route.path.replace("/documentation/".concat(t),"/documentation/".concat(n))},goToUrlWithLanguage:function(t,n){this.$router.push({path:this.getUrlWithLanguage(t,n)})}},watch:{language:function(t,n){this.urlLanguageIs(t)||this.goToUrlWithLanguage(n,t)}},metaInfo:function(){return{title:this.$page.documentation.title,meta:[{name:"description",content:this.$page.documentation.description}]}}}),u=(e("qrQl"),e("KHd+")),a=null,c=Object(u.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("Layout",[n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.documentation.content)}}),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("a",{attrs:{href:this.githubEditPage}},[this._v("Propose an improvement")])])])}),[],!1,null,null,null);"function"==typeof a&&a(c);n.default=c.exports}}]);