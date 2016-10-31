for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)},h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,k=["String","prototype","repeat"],l=0;l<k.length-1;l++){var m=k[l];m in h||(h[m]={});h=h[m]}
var n=k[k.length-1],p=h[n],r=p?p:function(a){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");c=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var b="";a;)if(a&1&&(b+=c),a>>>=1)c+=c;return b};r!=p&&null!=r&&aa(h,n,{configurable:!0,writable:!0,value:r});var t=this;
function u(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c}function ba(a){var c=u(a);return"array"==c||"object"==c&&"number"==typeof a.length}function v(a){return"string"==typeof a}function w(a){var c=typeof a;return"object"==c&&null!=a||"function"==c}var ca=Date.now||function(){return+new Date};function x(a){if(!da.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ea,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(fa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ga,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ha,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ia,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ja,"&#0;"));return a}var ea=/&/g,fa=/</g,ga=/>/g,ha=/"/g,ia=/'/g,ja=/\x00/g,da=/[\x00&<>"']/;var ka=Array.prototype.indexOf?function(a,c,b){return Array.prototype.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if(v(a))return v(c)&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},la=Array.prototype.forEach?function(a,c,b){Array.prototype.forEach.call(a,c,b)}:function(a,c,b){for(var e=a.length,f=v(a)?a.split(""):a,d=0;d<e;d++)d in f&&c.call(b,f[d],d,a)};
function ma(a){var c=a.length;if(0<c){for(var b=Array(c),e=0;e<c;e++)b[e]=a[e];return b}return[]};var y;a:{var z=t.navigator;if(z){var A=z.userAgent;if(A){y=A;break a}}y=""};function B(a,c,b){for(var e in a)c.call(b,a[e],e,a)}var C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(a,c){for(var b,e,f=1;f<arguments.length;f++){e=arguments[f];for(b in e)a[b]=e[b];for(var d=0;d<C.length;d++)b=C[d],Object.prototype.hasOwnProperty.call(e,b)&&(a[b]=e[b])}};var na=-1!=y.indexOf("Opera"),E=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),oa=-1!=y.indexOf("Edge"),pa=-1!=y.indexOf("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"))&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"))&&-1==y.indexOf("Edge"),qa=-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge");function F(){var a=t.document;return a?a.documentMode:void 0}var G;
a:{var H="",I=function(){var a=y;if(pa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(oa)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qa)return/WebKit\/(\S+)/.exec(a);if(na)return/(?:Version)[ \/]?(\S+)/.exec(a)}();I&&(H=I?I[1]:"");if(E){var K=F();if(null!=K&&K>parseFloat(H)){G=String(K);break a}}G=H}var L;var M=t.document;L=M&&E?F()||("CSS1Compat"==M.compatMode?parseInt(G,10):5):void 0;var N;(N=!E)||(N=9<=Number(L));var ra=N;function O(a){var c=document;return v(a)?c.getElementById(a):a}
function P(a,c){var b=document,b=c||b;if(b.querySelectorAll&&b.querySelector)return b.querySelectorAll("A"+(a?"."+a:""));if(a&&b.getElementsByClassName){for(var b=b.getElementsByClassName(a),e={},f=0,d=0,g;g=b[d];d++)"A"==g.nodeName&&(e[f++]=g);e.length=f;return e}b=b.getElementsByTagName("A");if(a){e={};for(d=f=0;g=b[d];d++){var q=g.className,J;if(J="function"==typeof q.split)J=0<=ka(q.split(/\s+/),a);J&&(e[f++]=g)}e.length=f;return e}return b}
function sa(a,c){B(c,function(b,c){"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:Q.hasOwnProperty(c)?a.setAttribute(Q[c],b):c.lastIndexOf("aria-",0)&&c.lastIndexOf("data-",0)?a[c]=b:a.setAttribute(c,b)})}var Q={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function R(a,c,b){var e=arguments,f=document,d=String(e[0]),g=e[1];if(!ra&&g&&(g.name||g.type)){d=["<",d];g.name&&d.push(' name="',x(g.name),'"');if(g.type){d.push(' type="',x(g.type),'"');var q={};D(q,g);delete q.type;g=q}d.push(">");d=d.join("")}d=f.createElement(d);g&&(v(g)?d.className=g:"array"==u(g)?d.className=g.join(" "):sa(d,g));2<e.length&&ta(f,d,e,2);return d}
function ta(a,c,b,e){function f(b){b&&c.appendChild(v(b)?a.createTextNode(b):b)}for(;e<b.length;e++){var d=b[e];if(!ba(d)||w(d)&&0<d.nodeType)f(d);else{var g;a:{if(d&&"number"==typeof d.length){if(w(d)){g="function"==typeof d.item||"string"==typeof d.item;break a}if("function"==u(d)){g="function"==typeof d.item;break a}}g=!1}la(g?ma(d):d,f)}}}function ua(a){var c=R("br");a.appendChild(c)}function S(a,c){ta(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments,1)}
function T(a){for(var c;c=a.firstChild;)a.removeChild(c)};function U(a){this.a=a||{cookie:""}}var va=/\s*;\s*/;U.prototype.set=function(a,c,b,e,f,d){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(c))throw Error('Invalid cookie value "'+c+'"');void 0!==b||(b=-1);f=f?";domain="+f:"";e=e?";path="+e:"";d=d?";secure":"";b=0>b?"":b?";expires="+(new Date(ca()+1E3*b)).toUTCString():";expires="+(new Date(1970,1,1)).toUTCString();this.a.cookie=a+"="+c+f+e+b+d};
U.prototype.get=function(a,c){for(var b=a+"=",e=(this.a.cookie||"").split(va),f=0,d;d=e[f];f++){if(!d.lastIndexOf(b,0))return d.substr(b.length);if(d==a)return""}return c};var V=new U("undefined"==typeof document?null:document);V.b=3950;function W(a){this.version="1.3";this.f=openid.f;this.demo_text=openid.demo_text;this.locale=openid.locale;this.sprite=openid.sprite;this.signin_text=openid.signin_text;this.image_title=openid.image_title;this.a=a;this.g=O(a);this.h="";this.i={};D(this.i,providers_large,providers_small);this.b=O("openid_btns");O("openid_choice").style.display="block";this.c=O("openid_input_area");T(this.c);var c=0;B(providers_large,function(a,e){wa(this,e,providers_large[e],"large",c++)},this);providers_small&&(ua(this.b),
B(providers_small,function(a,e){wa(this,e,providers_small[e],"small",c++)},this));this.l=O("openid_form");(a=V.get("openid_provider"))&&this.j(a)}function wa(a,c,b,e,f){f="small"==e?24*-f:100*-f;var d="small"==e?-60:0;c=R("a",{title:a.image_title.replace("{provider}",b.name),href:"javascript:openidselectorobject.signin('"+c+"');",style:"background: #FFF url(images/openid-providers-"+a.sprite+".png); background-position: "+f+"px "+d+"px","class":c+" openid_"+e+"_btn"},null);a.b.appendChild(c)}
W.prototype.j=function(a){var c=this.i[a];if(!c)return!1;var b=O("openid_highlight");if(b){var e=b.parentNode;e&&e.replaceChild(P(void 0,b)[0],b)}var b=P(a,this.b)[0],e=R("div",{id:"openid_highlight"},R("a",{title:b.title,href:b.href,style:b.style.cssText,"class":b.className})),f=b.parentNode;f&&f.replaceChild(e,b);V.set("openid_provider",a,15552E3,"/");this.h=c.url;if(c.label){a=this.c;var b="openid_username",e="",d=c.label,f="";T(a);d=d?R("p","",d):R("p","");S(a,d);"OpenID"==c.name&&(b=this.a,e=
"http://",f="background: #FFF url(images/openid-inputicon.gif) no-repeat scroll 0 50%; padding-left:18px;");S(a,R("input",{id:b,type:"text",style:f,name:b,value:e}));S(a,R("input",{id:"openid_submit",type:"submit",value:this.signin_text}));O(b).focus()}else T(this.c),xa(this);return!1};function xa(a){var c=a.h;if(c){var b=O("openid_username");b&&(c=c.replace("{username}",b.value));ya(a,c)}a.f?alert(a.demo_text+"\r\n"+a.g.value):c&&0==c.indexOf("javascript:")&&(c=c.substr(11),eval(c))}
function ya(a,c){var b=a.g;b?b.value=c:S(a.l,R("input",{type:"hidden",id:a.a,name:a.a,value:c}))}window.openidselector=W;var za=W.prototype.j,X=["openidselector","prototype","signin"],Y=t;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===za?Y[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=za;window.openid={};
