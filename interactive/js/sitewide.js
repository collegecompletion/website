/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-iepp-respond-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
window.Modernizr=function(a,b,c){function I(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function G(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return F(d,b)}function F(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function E(a,b){return!!~(""+a).indexOf(b)}function D(a,b){return typeof a===b}function C(a,b){return B(o.join(a+";")+(b||""))}function B(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;v("@media "+b+" { #"+i+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y,z={}.hasOwnProperty,A;!D(z,c)&&!D(z.call,c)?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],c)};var H=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!D(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){B("background-color:rgba(150,255,150,.5)");return E(k.backgroundColor,"rgba")},r.hsla=function(){B("background-color:hsla(120,40%,100%,.5)");return E(k.backgroundColor,"rgba")||E(k.backgroundColor,"hsla")},r.multiplebgs=function(){B("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return G("backgroundSize")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){C("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return G("animationName")},r.csscolumns=function(){return G("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";B((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return E(k.backgroundImage,"gradient")},r.cssreflections=function(){return G("boxReflect")},r.csstransforms=function(){return!!F(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!F(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return G("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var J in r)A(r,J)&&(y=J.toLowerCase(),e[y]=r[J](),u.push((e[y]?"":"no-")+y));e.input||I(),B(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.mq=w,e.hasEvent=x,e.testProp=function(a){return F([a])},e.testAllProps=G,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b){function u(){r(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=b;if(!b){var c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=j.getElementsByTagName("link"),l=[],m=function(){var b=k,c=b.length,d=0,e,f,g,i;for(;d<c;d++)e=b[d],f=e.href,g=e.media,i=e.rel&&e.rel.toLowerCase()==="stylesheet",!!f&&i&&!h[f]&&(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f)||f.replace(RegExp.$1,"").split("/")[0]===a.location.host?l.push({href:f,media:g}):h[f]=!0);n()},n=function(){if(l.length){var a=l.shift();s(a.href,function(b){o(b,a.href,a.media),h[a.href]=!0,n()})}},o=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),g=d&&d.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c,j=0,k,l,m,n,o;b.length&&(b+="/"),i&&(g=1);for(;j<g;j++){k=0,i?(l=c,f.push(h(a))):(l=d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),n=l.split(","),o=n.length;for(;k<o;k++)m=n[k],e.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:f.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&parseFloat(RegExp.$1)})}r()},p,q,r=function(a){var b="clientWidth",h=d[b],l=c.compatMode==="CSS1Compat"&&h||c.body[b]||h,m={},n=c.createDocumentFragment(),o=k[k.length-1],s=(new Date).getTime();if(a&&p&&s-p<i)clearTimeout(q),q=setTimeout(r,i);else{p=s;for(var t in e){var u=e[t];if(!u.minw&&!u.maxw||(!u.minw||u.minw&&l>=u.minw)&&(!u.maxw||u.maxw&&l<=u.maxw))m[u.media]||(m[u.media]=[]),m[u.media].push(f[u.rules])}for(var t in g)g[t]&&g[t].parentNode===j&&j.removeChild(g[t]);for(var t in m){var v=c.createElement("style"),w=m[t].join("\n");v.type="text/css",v.media=t,v.styleSheet?v.styleSheet.cssText=w:v.appendChild(c.createTextNode(w)),n.appendChild(v),g.push(v)}j.insertBefore(n,o.nextSibling)}},s=function(a,b){var c=t();if(!!c){c.open("GET",a,!0),c.onreadystatechange=function(){c.readyState==4&&(c.status==200||c.status==304)&&b(c.responseText)};if(c.readyState==4)return;c.send()}},t=function(){var a=!1,b=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],c=b.length;while(c--){try{a=b[c]()}catch(d){continue}break}return function(){return a}}();m(),respond.update=m,a.addEventListener?a.addEventListener("resize",u,!1):a.attachEvent&&a.attachEvent("onresize",u)}}(this,Modernizr.mq("only all")),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.0.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cs(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cm.length;y<z;y++){var x=cm[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cm.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bH(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=bQ(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new bR,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],bO(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.e-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cq(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cm.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cm.length==1)return co()}l&&(x.start=new Date-x.ms*f),cm.length==1&&cn(co)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("anim.start."+d.id,d,b)}}function cr(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cq(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function ce(){return this.x+q+this.y+q+this.width+" × "+this.height}function cd(){return this.x+q+this.y}function bR(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bx(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bw(){return this.hex}function bu(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bt(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bt(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function a(c){if(a.is(c,"function"))return b?c():eve.on("DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.0.2",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bH(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bm=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bn=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bn=bu(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bn=bu(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bn(b)},bo=function(){return"hsb("+[this.h,this.s,this.b]+")"},bp=function(){return"hsl("+[this.h,this.s,this.l]+")"},bq=function(){return this.hex},br=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bs=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:bq};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=bq;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bs(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bs(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=br(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bo}},a.rgb2hsl=function(a,b,c){c=br(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bp}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bv=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bu(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bw};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bw};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bn(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bw},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bw}},a),a.hsb=bu(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bu(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bu(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=bu(function(b){if(!b)return null;var c={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bz(b)),d.length||r(b).replace(Z,function(a,b,e){var f=[],g=b.toLowerCase();e.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(d.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")d.push([b][n](f));else while(f.length>=c[g]){d.push([b][n](f.splice(0,c[g])));if(!c[g])break}}),d.toString=a._path2string;return d}),a.parseTransformString=bu(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bz(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d}),a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a._removedFactory=function(a){return function(){throw new Error("Raphaël: you are calling to method “"+a+"” of removed object")}};var by=bu(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=bH(a);var b=0,c=0,d=[],e=[],f;for(var g=0,h=a.length;g<h;g++){f=a[g];if(f[0]=="M")b=f[1],c=f[2],d.push(b),e.push(c);else{var i=bG(b,c,f[1],f[2],f[3],f[4],f[5],f[6]);d=d[n](i.min.x,i.max.x),e=e[n](i.min.y,i.max.y),b=f[5],c=f[6]}}var j=y[m](0,d),k=y[m](0,e);return{x:j,y:k,width:x[m](0,d)-j,height:x[m](0,e)-k}},null,function(a){return{x:a.x,y:a.y,width:a.width,height:a.height}}),bz=function(b){var c=[];if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);for(var d=0,e=b.length;d<e;d++){c[d]=[];for(var f=0,g=b[d].length;f<g;f++)c[d][f]=b[d][f]}c.toString=a._path2string;return c},bA=a._pathToRelative=bu(function(b){if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;b[0][0]=="M"&&(d=b[0][1],e=b[0][2],f=d,g=e,h++,c.push(["M",d,e]));for(var i=h,j=b.length;i<j;i++){var k=c[i]=[],l=b[i];if(l[0]!=v.call(l[0])){k[0]=v.call(l[0]);switch(k[0]){case"a":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]-d).toFixed(3),k[7]=+(l[7]-e).toFixed(3);break;case"v":k[1]=+(l[1]-e).toFixed(3);break;case"m":f=l[1],g=l[2];default:for(var m=1,n=l.length;m<n;m++)k[m]=+(l[m]-(m%2?d:e)).toFixed(3)}}else{k=c[i]=[],l[0]=="m"&&(f=l[1]+d,g=l[2]+e);for(var o=0,p=l.length;o<p;o++)c[i][o]=l[o]}var q=c[i].length;switch(c[i][0]){case"z":d=f,e=g;break;case"h":d+=+c[i][q-1];break;case"v":e+=+c[i][q-1];break;default:d+=+c[i][q-2],e+=+c[i][q-1]}}c.toString=a._path2string;return c},0,bz),bB=a._pathToAbsolute=bu(function(b){if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var c=[],d=0,e=0,f=0,g=0,h=0;b[0][0]=="M"&&(d=+b[0][1],e=+b[0][2],f=d,g=e,h++,c[0]=["M",d,e]);var i=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var j,k,l=h,m=b.length;l<m;l++){c.push(j=[]),k=b[l];if(k[0]!=S.call(k[0])){j[0]=S.call(k[0]);switch(j[0]){case"A":j[1]=k[1],j[2]=k[2],j[3]=k[3],j[4]=k[4],j[5]=k[5],j[6]=+(k[6]+d),j[7]=+(k[7]+e);break;case"V":j[1]=+k[1]+e;break;case"H":j[1]=+k[1]+d;break;case"R":var o=[d,e][n](k.slice(1));for(var p=2,q=o.length;p<q;p++)o[p]=+o[p]+d,o[++p]=+o[p]+e;c.pop(),c=c[n](bx(o,i));break;case"M":f=+k[1]+d,g=+k[2]+e;default:for(p=1,q=k.length;p<q;p++)j[p]=+k[p]+(p%2?d:e)}}else if(k[0]=="R")o=[d,e][n](k.slice(1)),c.pop(),c=c[n](bx(o,i)),j=["R"][n](k.slice(-2));else for(var r=0,s=k.length;r<s;r++)j[r]=k[r];switch(j[0]){case"Z":d=f,e=g;break;case"H":d=j[1];break;case"V":e=j[1];break;case"M":f=j[j.length-2],g=j[j.length-1];default:d=j[j.length-2],e=j[j.length-1]}}c.toString=a._path2string;return c},null,bz),bC=function(a,b,c,d){return[a,b,c,d,c,d]},bD=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bE=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bu(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bE(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bF=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bG=bu(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bF(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bF(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bF(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bF(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bH=a._path2curve=bu(function(a,b){var c=bB(a),d=b&&bB(b),e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bE[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bD(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bD(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bC(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bC(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bC(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bC(b.x,b.y,b.X,b.Y))}return a},h=function(a,b){if(a[b].length>7){a[b].shift();var e=a[b];while(e.length)a.splice(b++,0,["C"][n](e.splice(0,6)));a.splice(b,1),k=x(c.length,d&&d.length||0)}},i=function(a,b,e,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),e.bx=0,e.by=0,e.x=a[g][1],e.y=a[g][2],k=x(c.length,d&&d.length||0))};for(var j=0,k=x(c.length,d&&d.length||0);j<k;j++){c[j]=g(c[j],e),h(c,j),d&&(d[j]=g(d[j],f)),d&&h(d,j),i(c,d,e,f,j),i(d,c,f,e,j);var l=c[j],o=d&&d[j],p=l.length,q=d&&o.length;e.x=l[p-2],e.y=l[p-1],e.bx=Q(l[p-4])||e.x,e.by=Q(l[p-3])||e.y,f.bx=d&&(Q(o[q-4])||f.x),f.by=d&&(Q(o[q-3])||f.y),f.x=d&&o[q-2],f.y=d&&o[q-1]}return d?[c,d]:c},null,bz),bI=a._parseDots=bu(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bJ=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bK=a._tofront=function(a,b){b.top!==a&&(bJ(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bL=a._toback=function(a,b){b.bottom!==a&&(bJ(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bM=a._insertafter=function(a,b,c){bJ(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bN=a._insertbefore=function(a,b,c){bJ(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bO=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new bR;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},bP=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},bQ=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||bP(c[g]),k=c[g]||bP(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bA,a._engine={},a.path2curve=bH,a.matrix=function(a,b,c,d,e,f){return new bR(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof bR&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new bR(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new bR(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(bR.prototype);var bS=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(bS&&bS[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&bS&&bS[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var bT=function(){this.returnValue=!1},bU=function(){return this.originalEvent.preventDefault()},bV=function(){this.cancelBubble=!0},bW=function(){return this.originalEvent.stopPropagation()},bX=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=bU,e.stopPropagation=bW;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||bT,a.stopPropagation=a.stopPropagation||bV;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),bY=[],bZ=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=bY.length;while(g--){f=bY[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},b$=function(b){a.unmousemove(bZ).unmouseup(b$);var c=bY.length,d;while(c--)d=bY[c],d.el._drag={},eve("drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);bY=[]},b_=a.el={};for(var ca=t.length;ca--;)(function(b){a[b]=b_[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:bX(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=b_["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[ca]);b_.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("data.set."+this.id,this,c,b);return this},b_.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},b_.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},b_.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cb=[];b_.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!bY.length&&a.mousemove(bZ).mouseup(b$),bY.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("drag.start."+this.id,c),b&&eve.on("drag.move."+this.id,b),d&&eve.on("drag.end."+this.id,d),eve("drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cb.push({el:this,start:i}),this.mousedown(i);return this},b_.onDragOver=function(a){a?eve.on("drag.over."+this.id,a):eve.unbind("drag.over."+this.id)},b_.undrag=function(){var b=cb.length;while(b--)cb[b].el==this&&(this.unmousedown(cb[b].start),cb.splice(b,1),eve.unbind("drag.*."+this.id));!cb.length&&a.unmousemove(bZ).unmouseup(b$)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new ct(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var cc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=cc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},b_.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=by(this.realPath),b.bboxwt.toString=ce,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=by(bj(this.realPath,this.matrix)),b.bbox.toString=ce,b.dirty=b.dirtyT=0}return b.bbox},b_.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},b_.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cf={},cg=function(b,c,d,e,f,g,h,i,j){var k=0,l=100,m=[b,c,d,e,f,g,h,i].join(),n=cf[m],o,p;!n&&(cf[m]=n={data:[]}),n.timer&&clearTimeout(n.timer),n.timer=setTimeout(function(){delete cf[m]},2e3);if(j!=null&&!n.precision){var q=cg(b,c,d,e,f,g,h,i);n.precision=~~q*10,n.data=[]}l=n.precision||l;for(var r=0;r<l+1;r++){n.data[r*l]?p=n.data[r*l]:(p=a.findDotsAtSegment(b,c,d,e,f,g,h,i,r/l),n.data[r*l]=p),r&&(k+=A(A(o.x-p.x,2)+A(o.y-p.y,2),.5));if(j!=null&&k>=j)return p;o=p}if(j==null)return k},ch=function(b,c){return function(d,e,f){d=bH(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cg(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cg(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cg(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},ci=ch(1),cj=ch(),ck=ch(0,1);a.getTotalLength=ci,a.getPointAtLength=cj,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return ck(a,b).end;var d=ck(a,c,1);return b?ck(d,b).end:d},b_.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return ci(this.attrs.path)}},b_.getPointAtLength=function(a){if(this.type=="path")return cj(this.attrs.path,a)},b_.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cl=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cl.easeIn=cl["ease-in"]=cl["<"],cl.easeOut=cl["ease-out"]=cl[">"],cl.easeInOut=cl["ease-in-out"]=cl["<>"],cl["back-in"]=cl.backIn,cl["back-out"]=cl.backOut;var cm=[],cn=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},co=function(){var b=+(new Date),c=0;for(;c<cm.length;c++){var d=cm[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cm.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cp(O(i[u].r+t*f*j[u].r)),cp(O(i[u].g+t*f*j[u].g)),cp(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("anim.frame."+c.id,c,d),eve("anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cm.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cs(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cs(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cm.length&&cn(co)},cp=function(a){return a>255?255:a<0?0:a};b_.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cr?d:a.animation(d,e,f,g),j,k;cs(i,h,i.percents[0],null,h.attr());for(var l=0,m=cm.length;l<m;l++)if(cm[l].anim==c&&cm[l].el==b){cm[m-1].start=cm[l].start;break}return h},b_.onAnimation=function(a){a?eve.on("anim.frame."+this.id,a):eve.unbind("anim.frame."+this.id);return this},cr.prototype.delay=function(a){var b=new cr(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cr.prototype.repeat=function(a){var b=new cr(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cr)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cr(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cr({100:f},c)},b_.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cr?b:a.animation(b,c,d,e);cs(g,f,g.percents[0],null,f.attr());return f},b_.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},b_.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cs(a,this,-1,y(b,1));return this}e=cm.length;for(;d<e;d++){f=cm[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},b_.pause=function(a){for(var b=0;b<cm.length;b++)cm[b].el.id==this.id&&(!a||cm[b].anim==a)&&eve("anim.pause."+this.id,this,cm[b].anim)!==!1&&(cm[b].paused=!0);return this},b_.resume=function(a){for(var b=0;b<cm.length;b++)if(cm[b].el.id==this.id&&(!a||cm[b].anim==a)){var c=cm[b];eve("anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},b_.stop=function(a){for(var b=0;b<cm.length;b++)cm[b].el.id==this.id&&(!a||cm[b].anim==a)&&eve("anim.stop."+this.id,this,cm[b].anim)!==!1&&cm.splice(b--,1);return this},b_.toString=function(){return"Raphaël’s object"};var ct=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==b_.constructor||a[b].constructor==ct)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cu=ct.prototype;cu.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==b_.constructor||a.constructor==ct)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cu.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cu.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cv in b_)b_[g](cv)&&(cu[cv]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cv));cu.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cu.clear=function(){while(this.length)this.pop()},cu.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new ct(e)},cu.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cu.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cu.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cu.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b);return{x:a,y:b,width:x[m](0,c)-a,height:x[m](0,d)-b}},cu.clone=function(a){a=new ct;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cu.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=this.set(),k=r(e)[s](p),l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=+o[1]+(h=="baseline"?o[3]-o[1]+ +f.face.descent:(o[3]-o[1])/2);for(var u=0,v=k.length;u<v;u++){var w=u&&f.glyphs[k[u-1]]||{},z=f.glyphs[k[u]];l+=u?(w.w||f.w)+(w.k&&w.k[k[u]]||0)+f.w*i:0,z&&z.d&&j.push(this.path(z.d).attr({fill:"#000",stroke:"none",transform:[["t",l*n,0]]}))}j.transform(["...s",n,n,q,t,"t",(b-q)/n,(d-t)/n])}return j},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cu,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael);

/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);




//autosuggest//
(function($){	
	$.fn.autoSuggest = function(data, options) {
		var defaults = { 
			asHtmlID: 'search_text',
			startText: "Examples: Johns Hopkins, California",
			emptyText: '<strong>No results found.</strong><br /><div class="label">Try rewording your search.</div>',
			preFill: {},
			limitText: "No More Selections Are Allowed",
			selectedItemProp: "value", //name of object property
			selectedValuesProp: "value", //name of object property
			searchObjProps: "value", //comma separated list of object property names
			queryParam: "q",
			retrieveLimit: false, //number for 'limit' param on ajax request
			extraParams: "",
			matchCase: false,
			minChars: 1,
			keyDelay: 400,
			resultsHighlight: true,
			neverSubmit: true,
			selectionLimit: false,
			showResultList: true,
			start: function(){},
			selectionClick: function(elem){},
			selectionAdded: function(elem){},
			selectionRemoved: function(elem){ elem.remove(); },
			formatList: function(data, elem){
				var resultString = data.name;
				
				if (data.type === 'state') {
					resultString += '<span class="label">STATE</span>';
				}
				
				var new_elem = elem.html(resultString);//+"<span style='font: 10px arial'> | "+identifier+"</span>");
				return new_elem;
			},
			beforeRetrieve: function(string){ return string; },
			retrieveComplete: function(data){ return data; },
			resultClick: function(data){},
			resultsComplete: function(){}
		};  
	 	var opts = $.extend(defaults, options);	 	
		var d_type = "object";
		var d_count = 0;
		if (typeof data == "string") {
			d_type = "string";
			var req_string = data;
		} else {
			var org_data = data;
			for (k in data) if (data.hasOwnProperty(k)) d_count++;
		}
		if ((d_type == "object" && d_count > 0) || d_type == "string"){
			return this.each(function(x){
			if (!opts.asHtmlID){
				x = x+""+Math.floor(Math.random()*100); //this ensures there will be unique IDs on the page if autoSuggest() is called multiple times
				var x_id = "as-input-"+x;
			} else {
				x = opts.asHtmlID;
				var x_id = x;
			}
			opts.start.call(this);
			var input = $(this);
			input.attr("autocomplete","off").addClass("as-input").attr("id",x_id).val(opts.startText);
			var input_focus = false;
			input.wrap('<ul class="as-selections" id="as-selections-'+x+'"></ul>').wrap('<li class="as-original" id="as-original-'+x+'"></li>');
			var selections_holder = $("#as-selections-"+x);
			var org_li = $("#as-original-"+x);				
			var results_holder = $('<div class="as-results" id="as-results-'+x+'"></div>').hide();
			var results_ul =  $('<ul class="as-list"></ul>');
			var values_input = $('<input type="hidden" class="as-values" name="as_values_'+x+'" id="as-values-'+x+'" />');
			var prefill_value = "";
			if (typeof opts.preFill == "string"){
				var vals = opts.preFill.split(",");					
				for (var i=0; i < vals.length; i++){
					var v_data = {};
					v_data[opts.selectedValuesProp] = vals[i];
					if (vals[i] != ""){
						add_selected_item(v_data, "000"+i);	
					}		
				}
				prefill_value = opts.preFill;
			} else {
				prefill_value = "";
				var prefill_count = 0;
				for (k in opts.preFill) if (opts.preFill.hasOwnProperty(k)) prefill_count++;
					if (prefill_count > 0){
						for (var i=0; i < prefill_count; i++){
							var new_v = opts.preFill[i][opts.selectedValuesProp];
							if (new_v == undefined){ new_v = ""; }
								prefill_value = prefill_value+new_v+",";
								if (new_v != ""){
									add_selected_item(opts.preFill[i], "000"+i);	
								}		
							}
						}
					}
					if (prefill_value != ""){
						input.val("");
						var lastChar = prefill_value.substring(prefill_value.length-1);
						if (lastChar != ","){ prefill_value = prefill_value+","; }
						values_input.val(","+prefill_value);
						$("li.as-selection-item", selections_holder).addClass("blur").removeClass("selected");
					}
					input.after(values_input);
					selections_holder.click(function(){
					input_focus = true;
					input.focus();
				}).mousedown(function(){ input_focus = false; }).after(results_holder);	
				var timeout = null;
				var prev = "";
				var totalSelections = 0;
				var tab_press = false;
				input.focus(function(){			
					if ($(this).val() == opts.startText && values_input.val() == ""){
						$(this).val("");
					} else if(input_focus){
						$("li.as-selection-item", selections_holder).removeClass("blur");
						if ($(this).val() != ""){
							results_ul.css("width",selections_holder.outerWidth());
							results_holder.show();
						}
					}
					input_focus = true;
					return true;
				}).blur(function(){
					if ($(this).val() == "" && values_input.val() == "" && prefill_value == ""){
						$(this).val(opts.startText);
					} else if (input_focus){
						$("li.as-selection-item", selections_holder).addClass("blur").removeClass("selected");
						results_holder.hide();
					}				
				}).keydown(function(e) {
					lastKeyPressCode = e.keyCode;
					first_focus = false;
					switch(e.keyCode) {
						case 38: // up
							e.preventDefault();
							moveSelection("up");
							break;
						case 40: // down
							e.preventDefault();
							moveSelection("down");
							break;
						case 8:  // delete
							if(input.val() == ""){							
								var last = values_input.val().split(",");
								last = last[last.length - 2];
								selections_holder.children().not(org_li.prev()).removeClass("selected");
								if(org_li.prev().hasClass("selected")){
									values_input.val(values_input.val().replace(","+last+",",","));
									opts.selectionRemoved.call(this, org_li.prev());
								} else {
									opts.selectionClick.call(this, org_li.prev());
									org_li.prev().addClass("selected");		
								}
							}
							if(input.val().length == 1){
								results_holder.hide();
								 prev = "";
							}
							if($(":visible",results_holder).length > 0){
								if (timeout){ clearTimeout(timeout); }
								timeout = setTimeout(function(){ keyChange(); }, opts.keyDelay);
							}
							break;
						case 13: // return
							tab_press = false;
							var active = $("li.active:first", results_holder);
							if(active.length > 0){
								active.click();
								results_holder.hide();
							}
							if(opts.neverSubmit || active.length > 0){
								e.preventDefault();
							}
							break;
						default:
							if(opts.showResultList){
								if(opts.selectionLimit && $("li.as-selection-item", selections_holder).length >= opts.selectionLimit){
									results_ul.html('<li class="as-message">'+opts.limitText+'</li>');
									results_holder.show();
								} else {
									if (timeout){ clearTimeout(timeout); }
									timeout = setTimeout(function(){ keyChange(); }, opts.keyDelay);
								}
							}
							break;
					}
				});
		
				function keyChange() {
					// ignore if the following keys are pressed: [del] [shift] [capslock]
					if( lastKeyPressCode == 46 || (lastKeyPressCode > 8 && lastKeyPressCode < 32) ){ return results_holder.hide(); }
					var string = input.val().replace(/[\\]+|[\/]+/g,"");
					if (string == prev) return;
					prev = string;
					if (string.length >= opts.minChars) {
						selections_holder.addClass("loading");
						if(d_type == "string"){
							var limit = "";
							if(opts.retrieveLimit){
								limit = "&limit="+encodeURIComponent(opts.retrieveLimit);
							}
							if(opts.beforeRetrieve){
								string = opts.beforeRetrieve.call(this, string);
							}
							$.getJSON(req_string+"?"+opts.queryParam+"="+encodeURIComponent(string)+limit+opts.extraParams, function(data){ 
								d_count = 0;
								var new_data = opts.retrieveComplete.call(this, data);
								for (k in new_data) if (new_data.hasOwnProperty(k)) d_count++;
								processData(new_data, string); 
							});
						} else {
							if(opts.beforeRetrieve){
								string = opts.beforeRetrieve.call(this, string);
							}
							processData(org_data, string);
						}
					} else {
						selections_holder.removeClass("loading");
						results_holder.hide();
					}
				}
				var num_count = 0;
				function processData(data, query){
					if (!opts.matchCase){ query = query.toLowerCase(); }
					var matchCount = 0;
					results_holder.html(results_ul.html("")).hide();
					for(var i=0;i<d_count;i++){				
						var num = i;
						num_count++;
						var forward = false;
						if(opts.searchObjProps == "value") {
							var str = data[num].value;
						} else {	
							var str = "";
							var names = opts.searchObjProps.split(",");
							for(var y=0;y<names.length;y++){
								var name = $.trim(names[y]);
								str = str+data[num][name]+" ";
							}
						}
						if(str){
							if (!opts.matchCase){ str = str.toLowerCase(); }				
							if(str.search(query) != -1 && values_input.val().search(","+data[num][opts.selectedValuesProp]+",") == -1){
								forward = true;
							}	
						}
						if(forward){
							var formatted = $('<li class="as-result-item" id="as-result-item-'+num+'"></li>').click(function(){
									var raw_data = $(this).data("data");
									var number = raw_data.num;
									if($("#as-selection-"+number, selections_holder).length <= 0 && !tab_press){
										var data = raw_data.attributes;
										input.val("").focus();
										prev = "";
										add_selected_item(data, number);
										opts.resultClick.call(this, raw_data);
										results_holder.hide();
									}
									tab_press = false;
								}).mousedown(function(){ input_focus = false; }).mouseover(function(){
									$("li", results_ul).removeClass("active");
									$(this).addClass("active");
								}).data("data",{attributes: data[num], num: num_count});
							var this_data = $.extend({},data[num]);
							if (!opts.matchCase){ 
								var regx = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + query + ")(?![^<>]*>)(?![^&;]+;)", "gi");
							} else {
								var regx = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + query + ")(?![^<>]*>)(?![^&;]+;)", "g");
							}
							
							if(opts.resultsHighlight){
								this_data[opts.selectedItemProp] = this_data[opts.selectedItemProp].replace(regx,"<em>$1</em>");
							}
							if(!opts.formatList){
								formatted = formatted.html(this_data[opts.selectedItemProp]);
							} else {
								formatted = opts.formatList.call(this, this_data, formatted);	
							}
							results_ul.append(formatted);
							delete this_data;
							matchCount++;
							if(opts.retrieveLimit && opts.retrieveLimit == matchCount ){ break; }
						}
					}
					selections_holder.removeClass("loading");
					if(matchCount <= 0){
						results_ul.html('<li class="as-message">'+opts.emptyText+'</li>');
					}
					results_ul.css("width", selections_holder.outerWidth());
					results_holder.show();
					opts.resultsComplete.call(this);
					moveSelection("down");
				}
				function add_selected_item(data, num){
				}
				function moveSelection(direction){
					if($(":visible",results_holder).length > 0){
						var lis = $("li", results_holder);
						if(direction == "down"){
							var start = lis.eq(0);
						} else {
							var start = lis.filter(":last");
						}					
						var active = $("li.active:first", results_holder);
						if(active.length > 0){
							if(direction == "down"){
							start = active.next();
							} else {
								start = active.prev();
							}	
						}
						lis.removeClass("active");
						start.addClass("active");
					}
				}							
			});
		}

	}
})(jQuery);

var mymap = {
	
	transport: window.location.protocol+"//"+window.location.hostname+"/transport/?url=datalite",
	search: { 
		items: [ ]
	},
	graphic: {
		public4: [ ],
		public2: [ ],
		privateAll: [ ],
		forprofitAll: [ ]
	},
	graphicTopColleges: {
		public4: { },
		public2: { },
		privateAll: { },
		forprofitAll: { },
		stateName: ''
	},
	geolocation: {
		postal: 'xx',
		state: 'unknown'
	},
	ddOptions: {
		ipedsbach: '<option id="gradrates_source_ipedsbach">Bachelor&rsquo;s degree-seeking students (NCES)</option>',
		ipedsother: '<option id="gradrates_source_ipedsother">Other degree-seeking students (NCES)</option>',
		ipedstwoyear: '<option id="gradrates_source_ipedstwoyear">All degree-seeking students (NCES)</option>',
		vsa: '<option id="gradrates_source_vsa">Full-time undergraduate students (VSA)</option>'
	},
	ssOptions: {
		ipedsbach: 'Bachelor&rsquo;s degree-seeking students (NCES)',
		ipedsother: 'Other degree-seeking students (NCES)',
		ipedstwoyear: 'All degree-seeking students (NCES)'
	},
	raceOptions: {
		x: '<option class="default" id="gradrates_race_x">All races</option>',
		w: '<option id="gradrates_race_w">White</option>',
		b: '<option id="gradrates_race_b">Black</option>',
		a: '<option id="gradrates_race_a">Asian</option>',
		h: '<option id="gradrates_race_h">Hispanic</option>',
		ai: '<option id="gradrates_race_ai">American Indian</option>'
	},
	/** getData
		Gets JSONP data from Datalite and handles the response. Parameter is an object with options.

		request {
			name (required): arbitrary name of data call for debugging purposes and to generate JSONP callback name.
			url (required): A string for the unique parts of the request URL, such find, limit, etc. Should not include table name, transport, format, ’/bo/public/’, or callback name. Does not include initial or trailing slash. Simple example: “name/gatesInst1/find/unitid:166027:eq” 
			table (required): Name of the Datalite table to request data from. Do not include COUNT to return number of results, use isCount option instead.
			success (optional): Function to be called when the data is successfully returned. The JSON data is returned through the first parameter of the success function.
			successParam (optional): Optional additional parameter to be returned as the second parameter of the success function.
			noResults (optional): Function to be called when no results are returned 
			tooManyResults (optional): Function to be called when the data call doesn't execute because it exceeds Datalite's size limit. 
			isCount (optional): Set to true to get the number of results instead of the results. Defaults to false.
			cache (optional): Enable browser-level caching of repeat requests. Defaults to true.
		}
	*/
	getData: function(request) {
		var instance = "q2",
			countString = "";
		
		//log('Get data: ' + request.name);
		
		// required paramaters
		if (!request.name) {
			log('Missing data request name (name parameter). Cancelling data request.');
			return false;
		}
		if (!request.url) {
			log('Missing request URL (url parameter). Cancelling data request.');
			return false;
		}
		if (!request.table) {
			log('Please specify a Datalite table (table parameter). Cancelling data request.');
			return false;
		}
		
		// optional parameters 
		request.success = request.success || log;
		request.noResults = request.noResults || log;
		request.tooManyResults = request.tooManyResults || log;
		request.jsonCallback = request.name + 'CB';
		request.isCount = request.isCount || false;
		request.successParam = request.successParam || undefined;
		request.cache = request.cache || true;
		
		if (request.isCount) {
			request.table += 'COUNT';
		}
		
		var loadJsonReq = $.ajax({
			type: "GET",
			url: mymap.transport + "/" + instance + "/bo/public/format/jsonp/name/" + request.table + "/" + request.url + "/callback/" + request.jsonCallback,
			dataType: "jsonp",
			cache: request.cache,
			jsonpCallback: request.jsonCallback,
			success: function(json){
				if (json.error) {
					switch (json.error) {
						case 'No Results!':
							request.noResults(json);
							break;
						case 'Too Many Results!':
							request.tooManyResults(json);
							break;
						default: 
							log('Unknown Datalite error. Log of returned data follows.', json);
							break;
					}
					return false;
				}
				//log("Data success: " + request.name);
				
				if (request.successParam) {
					request.success(json, request.successParam);
				} else {
					request.success(json);
				}
			},
			error: function(a,b,c){
				var theStatus = a.status;
				log('Data error: ' + request.name, a, b, theStatus);
			}
		});
	},
	supportsFixedPosition: function(){ // very loose filter, better than nothing. iOS 5 does support fixed pos
		var userAgent = window.navigator.userAgent;
		if(/iPhone/.test(userAgent) || /iPod/.test(userAgent) || /iPad/.test(userAgent) || userAgent.match(/Android/i)) {
		    return false;
		} else {
			return true;
		}
	}
}

/////LOG
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

///BITLY CALL///
function shortenUrl(longUrl, callback, source, error) {
		$.getJSON(
	        "http://api.bitly.com/v3/shorten?callback=?", 
	        { 
	            "format": "json",
	            "apiKey": "your api key",
	            "login": "your login",
	            "longUrl": longUrl
	        }, function(response){
				log(response);
				if (response.status_txt === "OK") {
					callback(response.data.url);
				} else {
					if (error) {
						error(response);
					}
				}
			}
	    );
}
	

	
	$(document).ready(function() {
		
		////pre-cache image///
		var loadwhite = new Image(),
			loadblack = new Image();
		
		loadwhite.src="/wp-content/themes/gates-Microsite/imgassets/icon_loader_white.gif"
		loadblack.src="/wp-content/themes/gates-Microsite/imgassets/icon_loader_black.gif"
		
   		$.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?", function(data){
			var headerDisplayState = '';
	
		    mymap.geolocation.postal = data['geoplugin_region'].toLowerCase() || 'zz';
			mymap.geolocation.state = getStateFull(data['geoplugin_region'].toLowerCase());
			
			headerDisplayState = mymap.geolocation.state;
			
			if (headerDisplayState === 'District of Columbia') {
			 	headerDisplayState = 'Washington D.C.';
			}

			var stateHref = '/state/#state=' + mymap.geolocation.postal + '&sector=public_four';
			$('#user_location').addClass(mymap.geolocation.postal).removeClass('loading').attr('href', stateHref).show().find('.label').html('<span class="icon">&nbsp;</span>'+headerDisplayState.toTitleCase());
		});
		
		var getStateFull = function(abbr){
			switch(abbr) {
			case 'ak':
				return 'Alaska'; 
				break;
			case 'al':
				return 'Alabama'; 
				break;
			case 'ar':
				return 'Arkansas'; 
				break;
			case 'az':
				return 'Arizona'; 
				break;
			case 'ca':
				return 'California'; 
				break;
			case 'co':
				return 'Colorado'; 
				break;
			case 'ct':
				return 'Connecticut'; 
				break;
			case 'de':
				return 'Delaware'; 
				break;
			case 'dc':
				return 'District of Columbia'; 
				break;
			case 'fl':
				return 'Florida'; 
				break;
			case 'ga':
				return 'Georgia'; 
				break;
			case 'hi':
				return 'Hawaii'; 
				break;
			case 'id':
				return 'Idaho'; 
				break;
			case 'ia':
				return 'Iowa'; 
				break;
			case 'in':
				return 'Indiana'; 
				break;
			case 'il':
				return 'Illinois'; 
				break;
			case 'ks':
				return 'Kansas'; 
				break;
			case 'ky':
				return 'Kentucky'; 
				break;
			case 'la':
				return 'Louisiana'; 
				break;
			case 'ma':
				return 'Massachusetts'; 
				break;
			case 'md':
				return 'Maryland'; 
				break;
			case 'me':
				return 'Maine'; 
				break;
			case 'mi':
				return 'Michigan'; 
				break;
			case 'mn':
				return 'Minnesota'; 
				break;
			case 'ms':
				return 'Mississippi'; 
				break;
			case 'mo':
				return 'Missouri'; 
				break;
			case 'mt':
				return 'Montana'; 
				break;
			case 'nc':
				return 'North Carolina'; 
				break;
			case 'nd':
				return 'North Dakota'; 
				break;
			case 'ne':
				return 'Nebraska'; 
				break;
			case 'nh':
				return 'New Hampshire'; 
				break;
			case 'nj':
				return 'New Jersey'; 
				break;
			case 'nm':
				return 'New Mexico'; 
				break;
			case 'nv':
				return 'Nevada'; 
				break;
			case 'ny':
				return 'New York'; 
				break;
			case 'oh':
				return 'Ohio'; 
				break;
			case 'ok':
				return 'Oklahoma'; 
				break;
			case 'or':
				return 'Oregon'; 
				break;
			case 'pa':
				return 'Pennsylvania'; 
				break;
			case 'ri':
				return 'Rhode Island'; 
				break;
			case 'sc':
				return 'South Carolina'; 
				break;
			case 'sd':
				return 'South Dakota'; 
				break;
			case 'tn':
				return 'Tennessee'; 
				break;
			case 'tx':
				return 'Texas'; 
				break;
			case 'ut':
				return 'Utah'; 
				break;
			case 'va':
				return 'Virginia'; 
				break;
			case 'vt':
				return 'Vermont'; 
				break;
			case 'wa':
				return 'Washington'; 
				break;
			case 'wi':
				return 'Wisconsin'; 
				break;
			case 'wv':
				return 'West Virginia'; 
				break;
			case 'wy':
				return 'Wyoming'; 
				break;
			default:
				return 'no state';
				break;
			}
		}
		
		mymap.initGraphic = function(){
			var $graphicContainer = $('#home_graphic_container');
			
			if ($graphicContainer.length > 0) { // if this is the home page, create the home page graphic
			
			var $graphic = $graphicContainer.find('#graphic_container'),
				$navBar = $graphicContainer.find('#home_nav_container'),
				$sectors = $graphic.find('#treemap_top'),
				$noCount = $graphic.find('#treemap_bottom'),
				$mapContent = $('#graphic_map'),
				$buttons = $navBar.find('h2'),
				$usMapContainer = $graphic.find('#home_map_svg_container'),
				$usMap = $usMapContainer.find('#home_map_svg'),
				svgWidth = 710,
				svgHeight = 448,
				usMapSvg = Raphael("home_map_svg", svgWidth, svgHeight),
				usMapStates = usMapSvg.set();
			
			var nav = {
					mapIsDrawn: false,
					handlersAreSet: false,
					stateDataLoaded: 0,
					userState: '', 
					userStateKey: '', // format: DistrictofColumbia
					userHasState: false,
					defaultState: 'District of Columbia',
					isIE7: $('html').hasClass('ie7'),
					init: function(){
						var that = this;
					
						this.getMapData();
						
						$navBar
							.find('#home_nav').delegate('div.home_nav_clickable', 'click', function(){
								var $this = $(this);
								
								if ($this.hasClass('inactive') || $this.parent().hasClass('inactive')) {
									// nav is disabled on each slide until nav.slide.activeNav is called when transitions have completed
									return false;
								}
								
								var direction = this.id.split('_')[0];
								that.slide.change(direction);
							})
							.find('#next_container_home_nav').unbind('mouseover').hover(function(){
								$(this).addClass('hovering');
							}, function(){
								$(this).removeClass('hovering');
							});
					},
					
					slide: {
						currentSlide: 1,
						get: function() {
							return this.currentSlide;
						},
						
						change: function(direction) {
							var newSlide,
								transitionSlide,
								isReversed;
							
							if (direction === 'next') {
								newSlide = this.currentSlide + 1;
								transitionSlide = newSlide;
								isReversed = false;
							} else if  (direction === 'prev') {
								newSlide = this.currentSlide - 1;
								transitionSlide = this.currentSlide;
								isReversed = true;
							} else {
								log('Error in slide.change argument');
								return false;
							}
							
							if ((newSlide > 4) || (newSlide < 1)) {
								return false;
							}
							
							_gaq.push(['_trackEvent', 'carousel change', direction+":"+this.currentSlide]);
							this.currentSlide = newSlide;
							this.refreshNav(this.currentSlide).startTransition(transitionSlide, isReversed);
						},
						
						refreshNav: function(slide) {
							var $navContainer = $navBar.find('#home_nav'),
								$header = $('#home_graphic_header_top'),
								nextText = {
									1: 'What happened to the rest of them?',
									2: 'How are graduates distributed across the country?',
									3: 'How does my state perform?',
									4: '',
									'3_noUserState': 'How does Washington D.C. perform?',
									'4_noUserState': ''
								},
								headerText = {
									1: '4.3 million freshmen started college in fall 2004',
									2: 'More than 3 million are mysteries',
									3: 'Publics dominate in the West and Midwest',
									4: 'How does my state perform?',
									'3_noUserState': 'Publics dominate in the West and Midwest',
									'4_noUserState': 'How does Washington D.C. perform?'
								},
								subheaderText = {
									1: 'What colleges did they graduate from?',
									2: '',
									3: '',
									4: 'Not your state? <br />See a <a href="/college-stats">map of all states</a>.',
									'3_noUserState': '',
									'4_noUserState': 'See a <a href="/college-stats">map of all states</a>.'
								}
							
							$navContainer.find('#next_container_home_nav').addClass('inactive');
							$navContainer.find('div.home_nav_btn').addClass('inactive');
							$navBar.find('#home_nav_counter_value').html(this.currentSlide);
							
							if ((!nav.userHasState && slide == 3) || (!nav.userHasState && slide == 4)) {
								slide = slide + '_noUserState';
							}
							
							$navContainer.find('#next_teaser').html(nextText[slide]);
							$header.find('h2').html(headerText[slide]);
							$header.find('h5').html(subheaderText[slide]);
							
							return this;
						},
						
						// navigation is only activated on each slide after relevant data and animations have rendered to prevent unexpected behavior
						activateNav: function() {
							var $navContainer = $navBar.find('#home_nav'),
								slide = this.get();
							
							$navContainer.find('#next_container_home_nav').removeClass('inactive');
							$navContainer.find('div.home_nav_btn').removeClass('inactive');
							
							if (slide === 1) {
								$navContainer.find('#prev_btn').addClass('inactive');
							} else if (slide === 4) {
								$navContainer
									.find('#next_container_home_nav').removeClass('hovering')
									.find('#next_btn').addClass('inactive');
							}
						},
						
						startTransition: function(slide, isReversed) {
							switch(slide) {
								case 1:
									nav.resetNav(isReversed);
									break;
								case 2:
									nav.toNoCountTransition(isReversed);
									break;
								case 3:
									nav.toMapTransition(isReversed);
									break;
								case 4:
									nav.toStateTransition(isReversed);
									break;
								default:
									log('Slide ' + slide + ': no transition action specified (startTransition)');
							}
						}
					},
					
					resetNav: function(){
						$buttons.removeClass();
						$navBar.animate({'top': '0'}, 400, 'swing', function(){
							$('#slide_2_header').addClass('next');
						});
						$('#slide_1_header').addClass('active');
					},
				
					toNoCountTransition: function(isReversed){
						var that = this,
							$sectorDivs = $sectors.children('div'),
							$innerTreemaps = $sectors.find('div.innertm_container'),
							delay = 400,
							totalHeight = 310,
							topPct = 0.513776337,
							bottomPct = 0.486223663,
							getFinalMarginOffset = {
								'public_header': '0',
								'cc_header': '-17px',
								'private_header': '21px',
								'forprofit_header': '-9px',
								'nocount_header': '0'
							},
							getInitialMarginOffset = {
								'public_header': '0',
								'cc_header': '-24px',
								'private_header': '48px',
								'forprofit_header': '2px',
								'nocount_header': '0'
							}
						
						if (this.userState === '') {
							this.recordUserState();
						}
							
						if (!isReversed) {
							$innerTreemaps.hide();
							$sectors.animate({'width': '100%'}, delay, 'swing', function(){
								$sectorDivs.unbind('click').click(function(){
									that.slide.change('prev');
								});
							});
							$sectorDivs
								.animate({'height': totalHeight * topPct + ' '})
								.find('h4').each(function(){
									$(this).animate({'font-size': '8px', 'margin-left': getFinalMarginOffset[this.id]});
								});

							$noCount.show().animate({'height': totalHeight * bottomPct + ' '}, delay, function(){
								that.slide.activateNav();	
							});
						} else {
							$sectorDivs.unbind('click');
							$noCount.animate({'height': '0'}, delay, 'swing', function(){
								$innerTreemaps.show();
								that.slide.activateNav();
							}); // hide after anim
							$sectors.animate({'width': '218.4%'}, delay);
							$sectorDivs
								.animate({'height': '310px'})
								.find('h4').each(function(){
									$(this).animate({'font-size': '14px', 'margin-left': getInitialMarginOffset[this.id]});
								});
						}
						
					},
					
					recordUserState: function(){
						var loc = mymap.geolocation,
							stateKey = loc.state.split(' ').join(''),
							currentState = usMapSvg.getById(stateKey);
						
						if (currentState) {
							this.userHasState = true;
							this.userState = loc.state;
							this.userStateKey = stateKey;
						} else {
							this.userHasState = false;
							this.userState = this.defaultState;
							this.userStateKey = this.defaultState.split(' ').join('');
						}
					},
					
					getStateData: function(){
						var that = this;
						
						$('#slide_4_rows').children().each(function(){
							var type = this.id.split('_')[2]; // eg slide_4_public2_row --> public2
							getTopCollegeData(type);
						});
						
						function getTopCollegeData(sector){
							var urlString = getUrlString(sector, that.userState),
								results = mymap.graphicTopColleges;
						
							if (urlString) {
								mymap.getData({
									name: 'homeStateData' + sector,
									table: 'gatesInst1',
									url: urlString,
									success: function(json){
										results[sector] = json[0];
										that.stateDataLoaded++;
									},
									noResults: function(json){
										results[sector] = false;
										
										that.stateDataLoaded++;
									}
								});
							}
						}
						
						function getUrlString(type, state) {
							var endUrl = "|cohort_size:200:gt|state:" + state + ":eq/order/grad_150_value:dsc/limit/1/fields/chronname|grad_150_value|unitid";
							
							switch (type) {
								case 'public4':
									return "find/level:4-year:eq|control:Public:eq" + endUrl;
									break;
								case 'public2':
									return "find/level:2-year:eq|control:Public:eq" + endUrl;
									break;
								case 'privateAll':
									return "find/control:private not-for-profit:eq" + endUrl;
									break;
								case 'forprofitAll':
									return "find/control:private for-profit:eq" + endUrl;
									break;
								default:
									return false;
							}
						}
					},
					
					getMapData: function(){
						var gradMinimum = 200,
							that = this;
					
						mymap.getData({
							name: 'homeGraphicData',
							table: 'gatesHomeMap',
							url: 'find/grads:' + gradMinimum + ':gt/order/grads:dsc',
							//url: 'find/sector:4-year Public:eq|sector:4-year Public:eq/order/grads:dsc',
							success: function(json){
								that.recordMapData(json, that);
							}
						});
					},
				
					recordMapData: function(json, that) {
						var results = mymap.graphic,
							resultObject = { },
							sectorKey = '',
							getSectorKey = {
								'4-year Public': 'public4',
								'2-year Public': 'public2',
								'2-year Private not-for-profit': 'privateAll',
								'4-year Private not-for-profit': 'privateAll',
								'2-year Private for-profit': 'forprofitAll',
								'4-year Private for-profit': 'forprofitAll'
							};
							
						 $.each(json, function(i, item) {
							resultObject = {
								'unitid': item.unitid,
								'chronname': item.chronname,
								'sector': item.sector,
								'test_x': Number(item.test_x),
								'test_y': Number(item.test_y),
								'grads': Number(item.grads),
								'sortOrder': Number(item.grads)
							};
							
							sectorKey = getSectorKey[item.sector];
							
							results[sectorKey].push(resultObject);
						});
						
						results['public4'].push({
							'unitid': 'sum_public4',
							'chronname': 'All other public universities',
							'sector': '4-year Public',
							'text_x': '-9999',
							'text_y': '-9999',
							'grads': '20655',
							'sortOrder': '0'
						});
						
						results['public2'].push({
							'unitid': 'sum_public2',
							'chronname': 'All other community colleges',
							'sector': '2-year Public',
							'text_x': '-9999',
							'text_y': '-9999',
							'grads': '62376',
							'sortOrder': '0'
						});
						
						results['privateAll'].push({
							'unitid': 'sum_privateAll',
							'chronname': 'All other private colleges',
							'sector': 'Private',
							'text_x': '-9999',
							'text_y': '-9999',
							'grads': '55975',
							'sortOrder': '0'
						});
						
						results['forprofitAll'].push({
							'unitid': 'sum_forprofitAll',
							'chronname': 'All other for-profit colleges',
							'sector': 'For-profit',
							'text_x': '-9999',
							'text_y': '-9999',
							'grads': '40067',
							'sortOrder': '0'
						});
						
						if (typeof d3 !== 'undefined') { // inner treemap is not supported in IE8- because d3 isn't supported
							that.drawTreemaps();
						}
						
						this.slide.activateNav();
						
						// slides 3 + 4 are rendered in the background
						that.drawMap();
						that.drawSvgMap();
					},
					
					drawTreemaps: function(){
						var height = 310,
							$viewport = $('#treemap_viewport'),
							$overlay = $viewport.find('#treemap_overlay'),
							viewport = d3.select('#treemap_viewport');
						
						drawTreemap(331, height, 'public4');
						drawTreemap(81, height, 'public2');
						drawTreemap(198, height, 'privateAll');
						drawTreemap(82, height, 'forprofitAll');
						
						if (Modernizr.touch) {
							$overlay.unbind('touchstart touchend')
									.bind('touchstart', function(e){
										var id = $viewport.data('currentOverlay');
										window.location = "/institution/#id=" + id;
									})
									.find('#home_overlay_close').show().unbind('touchstart mouseover mousemove')
									.bind('touchstart touchend', function(e){
										$overlay.hide();
										e.stopPropagation(); // don't register event on overlay as a whole
										return false; // don't register event on rect behind hidden overlay
									});
						}
					
						function drawTreemap(w, h, sector) {
							var data = {
									"name": "colleges",
									"children": mymap.graphic[sector]
								};

							var treemap = d3.layout.treemap()
							    .size([w, h])
								.sort(function(a, b) { return a.sortOrder - b.sortOrder; })
								.round(true)
							    .value(function(d) { return d.grads; });

							// Add container div .inntertm_container
							var div = d3.select("#rect_" + sector).append("div")
								.attr("class", "innertm_container")
							    .style("position", "relative")
							    .style("width", w + "px")
							    .style("height", h + "px")
								.on('mouseover', updateOverlayPosition)
								.on('mousemove', updateOverlayPosition)
								.on('mouseout', function(data, index){
									$overlay.hide();
								});

							// Get data and draw cells
							  div.data([data]).selectAll("div")
							      .data(treemap.nodes)
							    .enter().append("div")
							      .attr("class", "cell")
								  .attr("id", function(d){ if (d.unitid) { return 'cell' + d.unitid; } })
								  .on('mouseover', updateOverlayContent)
								  .on('click', goToCollege)
							      .call(cell);

							function cell() {
							  this
							      .style("left", function(d) { return (d.x - 1) + "px"; })
							      .style("top", function(d) { return d.y + "px"; })
							      .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
							      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
							}
						
							function goToCollege(data, index) {
								
								if (Modernizr.touch) {
									$overlay.show();
									updateOverlayPosition(data, index);
									return false;
								}
								
								// don't allow click-through for aggregate totals
								if (isNaN(this.id[5])) {
									return false;
								}
								_gaq.push(['_trackEvent', 'carousel click', data.unitid]);
								window.location = "/institution/#id=" + data.unitid;
							}
						
							function updateOverlayContent(data, index) {
								$viewport.removeClass().addClass(sector).data('currentOverlay', data.unitid);
							
								$overlay
									.find('span.college_name')
									.text(data.chronname);
							
								$overlay
									.find('span.college_grads')
									.text((data.grads + '').addCommas());
							}
						
							function updateOverlayPosition(data, index) {
								var viewportOffset = $viewport.offset(),
									offsetX = viewportOffset.left,
									offsetY = viewportOffset.top;
								
								var position = { // rewrite with d3.mouse
									'left': d3.event.pageX - offsetX + 154,
									'bottom': height - (d3.event.pageY - offsetY) + 57
								}
							
								$overlay.css(position);
								if (!Modernizr.touch) {
									$overlay.show();
								}
							}
						}
					},
				
					drawMap: function(){
						var results = mymap.graphic,
							resultLength = results.length,
							allBars = document.createDocumentFragment(),
							that = this,
							node,
							scale = .58,
							scaleX = scale * 1.0268,
							scaleY = scale * 1;
					
						drawSector('public4');
						drawSector('public2');
						drawSector('privateAll');
						drawSector('forprofitAll');
						
						$mapContent.append(allBars);
						this.mapIsDrawn = true;
						
						function drawSector(sector) {
							var sectorResults = results[sector],
								sectorLength = sectorResults.length;
							
							//log(sectorLength);
							
							for (var i = 0; i < sectorLength; i++) {
								node = getBar(sectorResults[i]);
								allBars.appendChild(node.cloneNode(true));
							}
						}
					
						function getBar(result){
							var $thisBar = $(document.createElement('div')),
								controlString = that.getControl[result.sector] || '',
								x = Number(result.test_x),
								y = Number(result.test_y),
								height = result.grads / 40,
								styles = {
									'height': height,
									'opacity': that.getOpacity(result.grads),
									'left': (x * scaleX) + 27,
									'bottom': 430 - (y * scaleY), // higher value, higher position on page
									'z-index': parseInt(y, 10)
								};

							$thisBar.addClass(controlString)
									.css(styles)
									.attr('id', 'c' + result.unitid)
									.attr('data-grads', result.grads)
									.attr('data-name', result.chronname)
									.attr('data-id', result.unitid);
						
							return $thisBar[0];
						}
					},
				
					setMapHandlers: function(){						
						$mapContent.undelegate().delegate('div', 'mouseover', function(e){
							var $this = $(this),
								$overlay = $(document.createElement('span')),
								$arrow = $(document.createElement('b')),
								yPos = $this.height() + 10,
								grads = Number($this.data('grads')),
								gradDisplay = grads <= 1000 ? grads : (grads + '').addCommas(),
								htmlString = $this.data('name') + '<br /><strong>' + gradDisplay + ' graduates</strong>',
								mapOffset = $mapContent.offset(),
								mousePosX = e.pageX - mapOffset.left;

							$overlay.css({'bottom': yPos})
									.addClass('home_graphic_overlay')
									.html(htmlString);
						
							$arrow.addClass('overlay_arrow');
								
							if (mousePosX > 700) {
								$overlay.addClass('left_overlay');
							}
						
							$overlay.append($arrow);		
							$this.append($overlay);
						}).delegate('div', 'mouseout', function(){
							$(this).empty();
						}).delegate('div', 'click', function(){
							if (Modernizr.touch) {
								return false;
							}
							
							window.location = "/institution/#id=" + $(this).data('id');
						});
					
						this.setMapFilters();
					
						this.handlersAreSet = true;
					},
					
					setMapFilters: function(){
						var $sectorDivs = $sectors.children('div');
						
						$sectorDivs.unbind('click').click(function(e){
							var $this = $(this),
								id = this.id.substr(5);
							
							if ($this.hasClass('active')) {
								$this.removeClass('active');
								$graphic.removeClass().addClass('slide_3');
								return false;
							}
						
							$this.addClass('active').siblings().removeClass('active');
							$graphic.removeClass().addClass('slide_3 ' + id);
						});	
					},
				
					drawSvgMap: function(){
						var states = this.getStates(),
							that = this,
							scale = .864;
						
						for (var eachState in states) {
						    if (states.hasOwnProperty(eachState)) {
								drawState(states[eachState]);
					        } 
					    }
						
						function drawState(theState) {
							var state = usMapSvg.path(theState.path);
							
							state
								.attr({'fill': '#eae8e2', 'stroke-width': '1', 'stroke': '#d9d7d1'})
								.id = theState.name.split(' ').join('');
							
							usMapStates.push(state);
						}
						
						// Initial size of map
						usMapSvg.setViewBox(0,0,svgWidth / scale,svgHeight / scale, false);
					},
					
					
					toStateTransition: function(isReversed) {
						var that = this,
							finalStateWidth,
							zoomLevel = 2,
							map = usMapSvg,
							zoomOrigin,					 
							currentState = map.getById(this.userStateKey),
							bounds,
							preZoom = .864; // This is how much Raphael has already zoomed the map to fit using setViewBox when it's first drawn
						
						if (!currentState) {
							log('No state to zoom to, user or default – Your friend, toStateTransition');
							return false;
						}						
							
						if (!isReversed) {
							$sectors.children('div').removeClass('active');
							$sectors.hide();
							$graphic
								.removeClass()
								.addClass('slide_4')
								.css({'overflow': 'hidden'})

							$mapContent.hide();
							zoomToState();
						} else {
							$graphic.find('#home_map_svg_description').hide();
							
							$sectors.show();
							$graphic
								.removeClass()
								.addClass('slide_3')
								.css({'overflow': 'visible'});
							
							usMapStates.attr({'stroke': '#d9d7d1'});
							currentState.attr({'fill': '#eae8e2'});
							$usMapContainer.removeClass('zoomed');
							
							zoom(zoomOrigin, 1, bounds, function(){
								$mapContent.show();
								that.slide.activateNav();
							});
						}
						
						function zoom(origin, level, bounds, callback) {
							var finishEvents = 'webkitTransitionEnd transitionend MSTransitionEnd oTransitionEnd';
							
							if (Modernizr.csstransitions) {
								$usMap
									.css({
										'-ms-transform-origin': origin,
										'-moz-transform-origin': origin,
										'-webkit-transform-origin': origin,
										'transform-origin': origin
									})
									.css({
										'-webkit-transform': 'scale(' + level + ')',
										'-moz-transform': 'scale(' + level + ')',
										'-ms-transform': 'scale(' + level + ')',
										'transform': 'scale(' + level + ')'
									})
									.unbind(finishEvents)
									.bind(finishEvents, function(e){
										$usMap.unbind(finishEvents);
										if (callback) {
											callback();
										}
									});
							} else {
								if (level !== 1) {
									usMapSvg.setViewBox(bounds.x - 10,bounds.y - 10,(700/level),(350/level), false);
								} else {
									if (Modernizr.svg) {
										usMapSvg.setViewBox(0,0,svgWidth/preZoom,svgHeight/preZoom, false); 
									} else {
										// For some reason, previous zoom level is applied when using VML in addition to current zoom level
										// Appears to be related to https://github.com/DmitryBaranovskiy/raphael/issues/468#issuecomment-3982457
										usMapSvg.setViewBox(0,0,svgWidth,svgHeight, false);  
									}
								}
								//usMapSvg.setViewBox(100,100,400,400, false);
								if (callback) {
									callback();
								}
							}
							
						}
						
						function zoomToState(){
							bounds = currentState.getBBox(); // { height, width, x, y, toString }
							
							var stateTopLeft = [(bounds.x - 20) * preZoom, (bounds.y - 20) * preZoom],
								destination = [0, 0], // top left of viewport
								zoomCoords = getZoomOrigin(stateTopLeft, destination, zoomLevel);
								
							zoomOrigin = zoomCoords[0] + 'px ' + zoomCoords[1] + 'px';
							finalStateWidth = bounds.width * zoomLevel;

							usMapStates.attr({'stroke': 'none'});
							currentState.attr({'fill': '#444'});
							$usMapContainer.addClass('zoomed');
							
							if (that.userState === 'District of Columbia') {
								zoomOrigin = '561px 175px';
								zoomLevel = 15;
								finalStateWidth = 60;
								bounds.x += 8;
								bounds.y += 8;
							};
							
							zoom(zoomOrigin, zoomLevel, bounds, function(){
								that.showStateData(finalStateWidth);
								that.slide.activateNav();	
							});

							// blue flash in chrome: http://code.google.com/p/chromium/issues/detail?id=111304
							// can't run css transition animation at the same time as another animation.

							/* 	getZoomOrigin / JK
							    Get array of coordinates for css zoom origin
						 		zoomPoint: coordinates of point you want to control on the map.
								zoomDestination: where you want the zoomPoint to end up. 
									To center the image around zoomPoint, give coordinates for the center of the image as zoom.
									To place the zoomPoint at the top left, give [0, 0].
								zoomLevel: Amount you want to zoom. 1 = 100%. Values other than 2 don't seem to work at present.
							*/
							function getZoomOrigin(zoomPoint, zoomDestination, zoomLevel) {
								var coords = [];

								coords.push(zoomDestination[0] + ((zoomPoint[0]) - zoomDestination[0]) * zoomLevel);
								coords.push(zoomDestination[1] + ((zoomPoint[1]) - zoomDestination[1]) * zoomLevel);

								return coords;
							}
							// to center:
							// zoomCenterX = centerX + (((bounds.x + (bounds.width / 2)) - centerX) * zoomLevel), // this doesn't work for other zoomLevels
							// zoomCenterY = centerY + (((bounds.y + (bounds.height / 2)) - centerY) * zoomLevel),

							// USE THE FOLLOWING CODE INSTEAD FOR IE8-
							// zoom to state without animation, for ie8-
							//
						}
					},
					
					showStateData: function(stateWidth){
						var $description = $graphic.find('#home_map_svg_description'),
							data = mymap.graphicTopColleges,
							leftOffset = stateWidth + 46;
						
						$description
							.css('left', leftOffset)
							.find('#slide_4_rows').children().each(function(){
								var $this = $(this),
									sector = this.id.split('_')[2], // eg slide_4_public2_row --> public2
									sectorData = data[sector];
							
								if (sectorData) {
									$this.find('#slide_4_' + sector + '_name').html(sectorData.chronname);
									$this.find('#slide_4_' + sector + '_value').html(sectorData.grad_150_value + '%');
									$this.data('id', sectorData.unitid);
								} else {
									$this.hide();
								}
							
								$this.unbind('click').bind('click', function(e){
									window.location = "/institution/#id=" + $(this).data('id');
								});	
							});
						
						$description.find('#slide_4_college').html(this.userState);
						$description.fadeIn(300);
					},
				
					toMapTransition: function(isReversed){
						var $sectorDivs = $sectors.children('div'),
							that = this,
							sectorDivOffset = 112,
							initialStyles = {
								'height': '159.27px',
								'left': '0px',
								'top': '0px'
							},
							finalStyles = {
								'height': '30px', 
								'left': '10px', 
								'width': '180px'
							},
							animationsFinished = 0,
							initialSectorWidths = ['21.946%', '5.362%', '13.159%', '5.452%', '54.078%'],
							initialSectorWidthsIE7 = ['21.946%', '5.362%', '13.159%', '5.452%', '53.8%']; // rounding issue
							
						if (!isReversed) {
							$sectorDivs.unbind('click');
							this.setMapFilters();
							$graphic
								.removeClass()
								.addClass('slide_3')
								.find('#treemap_bottom').hide();
							$graphic
								.find('#rect_nocount').hide();

							$sectorDivs	
								.each(function(i){
									var $this = $(this),
										leftOffset = $this.position().left;

									$this.css({'left': leftOffset});
								})
								.css({'position': 'absolute'})
								.each(function(i){
									var thisOffset = sectorDivOffset + (i * 30),
										delayMs = i * 100;
									
									finalStyles.top = '+=' + thisOffset + 'px';
									
									if (that.isIE7) {
										finalStyles.left = '-256px';
									}
									
									$(this).delay(delayMs).animate(finalStyles, { 	
												queue: true, 
												complete: function(){
													animationsFinished++;
													if (animationsFinished === 5) { // only do this once
														setTimeout(function(){ that.displayMap() }, 50); // giving jQuery a little extra room to finish the animations actually makes the map appear sooner
													}
												}
											}
									);
								});

							this.getStateData();
						} else {
							$('#graphic_map').css({'visibility': 'hidden'});
							$usMapContainer.hide();
							$sectors.children('div').removeClass('active');
							
							$sectorDivs	
								.css({'position': 'static'})
								.each(function(i){
									var delayMs = i * 100;
									
									if (that.isIE7) {
										initialStyles.width = initialSectorWidthsIE7[i];
									} else {
										initialStyles.width = initialSectorWidths[i];
									}
	
									$(this).css(initialStyles);
									//$(this).delay(delayMs).animate(initialStyles);
								})
								.unbind('click').click(function(){
									that.slide.change('prev');
								});
							
							$graphic
								.removeClass()
								.addClass('slide_2')
								.find('#treemap_bottom').show();
							$graphic
								.find('#rect_nocount').show();
								
							this.slide.activateNav();	
						}	
					},  
					
					displayMap: function(){
						if (!nav.handlersAreSet) {
							this.setMapHandlers();
						}
						$('#graphic_map').css('visibility', 'visible');
						$usMapContainer.show();
						this.slide.activateNav();
					},
				
					getControl: {
						'4-year Private not-for-profit': 'private_4',
						'2-year Private not-for-profit': 'private_2',
						'4-year Private for-profit': 'forprofit_4',
						'2-year Private for-profit': 'forprofit_2',
						'2-year Public': 'public_2',
						'4-year Public': 'public_4'
					},
				
					getOpacity: function(gradNumber) {
						var opacity;
					
						if (gradNumber > 2000) {
							opacity = 1;
						} else if (gradNumber > 1000) {
							opacity: .8;
						} else if (gradNumber > 500) {
							opacity: .6;
						} else {
							opacity: .4;
						}
					
						return opacity;
					},
					
					getStates: function() {
						var stateObject = {
							//Hawaii: { name: 'Hawaii', path: 'M178.498,396.028l1.474-2.702l1.719-0.245l0.246,0.614l-1.597,2.333H178.498z M186.235,393.203	l4.667,1.965l1.597-0.244l1.228-2.948l-0.491-2.579l-3.193-0.368l-3.07,1.351L186.235,393.203z M209.569,400.817l2.825,4.176	l1.842-0.246l0.86-0.368l1.105,0.982l2.825-0.123l0.736-1.104l-2.21-1.352l-1.474-2.824l-1.597-2.703l-4.421,2.211L209.569,400.817z	 M224.919,407.572l0.982-1.474l3.562,0.737l0.492-0.368l4.667,0.491l-0.246,0.981l-1.965,1.105l-3.316-0.245L224.919,407.572z	 M228.972,411.502l1.474,2.947l2.333-0.859l0.246-1.229l-1.229-1.597l-2.825-0.245V411.502z M234.253,410.642l1.72-2.21l3.561,1.843	l3.315,0.859l3.316,2.088v1.473l-2.702,1.352l-3.685,0.736l-1.842-1.104L234.253,410.642z M246.902,422.432l1.228-0.982l2.58,1.228	l5.772,2.702l2.58,1.597l1.228,1.842l1.474,3.316l3.07,1.965l-0.246,0.982l-2.947,2.456l-3.193,1.105l-1.105-0.491l-2.333,1.351	l-1.842,2.455l-1.72,2.211l-1.351-0.123l-2.702-1.965l-0.246-3.438l0.491-1.843l-1.227-4.298l-1.597-1.351l-0.124-1.965l1.721-0.737	l1.596-2.334l0.368-0.736l-1.228-1.351L246.902,422.432z'},
							//Alaska: { name: 'Alaska', path: 'M121.516,346.168l-0.246,64.843l1.229,0.736l2.333,0.123l1.105-0.859h1.964l0.124,2.21	l5.281,5.157l0.368,1.966l2.579-1.473l0.491-0.124l0.245-2.333l1.105-1.228l0.86-0.122l1.474-1.105l2.333,1.597l0.492,2.21	l1.474,0.859l0.859,1.843l2.947,1.351l2.579,4.544l2.088,2.947l1.719,2.088l1.105,2.824l3.808,1.352l3.929,1.596l0.737,3.316	l0.368,2.332l-0.737,2.58l-1.351,1.72l-1.229-0.614l-1.105-2.334l-2.088-1.104l-1.351-0.86l-0.615,0.614l1.105,2.088l0.123,2.825	l-0.859,0.367l-1.474-1.473l-1.597-0.981l0.368,1.227l0.982,1.352l-0.614,0.614c0,0-0.614-0.246-0.982-0.738	c-0.368-0.49-1.597-2.578-1.597-2.578l-0.737-1.721c0,0-0.246,0.983-0.737,0.738c-0.491-0.245-0.982-1.105-0.982-1.105l1.351-1.474	l-1.105-1.105v-3.807h-0.614l-0.615,2.579l-0.86,0.368l-0.737-2.825l-0.491-2.824l-0.615-0.368l0.246,4.298v0.86l-1.105-0.982	l-2.702-4.545l-1.597-0.367l-0.492-2.825l-1.228-2.21l-1.229-0.859v-1.721l1.597-0.982l-0.369-0.245l-1.965,0.491l-2.579-1.842	l-1.965-2.211l-3.684-1.965l-3.07-1.965l0.982-2.456v-1.229l-1.351,1.229l-2.21,0.859l-2.825-0.859l-4.298-1.843h-4.175	l-0.491,0.369l-4.913-2.947l-1.597-0.246l-2.088-4.421l-2.701,0.245l-2.702,1.105l0.369,3.438l0.86-2.21l0.737,0.246l-1.105,3.315	l2.456-2.088l0.491,1.228l-2.947,3.316l-0.982-0.245l-0.368-1.475l-0.982-0.613l-0.982,0.859l-2.087-1.352l-2.334,1.598	l-1.351,1.597l-2.579,1.598l-3.561-0.123l-0.368-1.597l2.824-0.491v-0.982l-1.719-0.491l0.737-1.843l1.719-2.947v-1.35l0.123-0.614	l3.316-1.72l0.737,0.982h2.088l-0.982-1.965l-2.825-0.245l-3.807,2.087l-1.843,2.58l-1.35,1.965l-0.859,1.719l-3.193,1.105	l-2.334,1.965l-0.245,1.229l1.719,0.737l0.614,1.596l-2.088,2.456l-4.912,3.193l-5.895,3.193l-1.597,0.859l-4.053,0.859l-4.053,1.72	l1.351,0.982l-1.105,1.105l-0.368,0.86l-2.088-0.738l-2.456,0.123l-0.614,1.72h-0.737l0.246-1.843l-2.702,0.982l-2.21,0.738	l-2.579-0.983l-2.21,1.474h-2.456l-1.597,0.981l-1.229,0.615l-1.597-0.245l-1.964-0.86l-1.719,0.49l-0.736,0.738l-1.228-0.86v-1.474	l2.333-0.981l4.79,0.49l3.316-1.228l1.597-1.597l2.21-0.491l1.351-0.614l2.088,0.123l1.228,0.982l0.737-0.246l1.719-2.087	l2.333-0.737l2.579-0.491l0.982-0.245l0.491,0.368h0.615l0.982-2.825l3.07-1.105l1.474-2.824l1.719-3.438l1.229-1.105l0.246-1.965	l-1.228,0.982l-2.579,0.491l-0.491-1.842l-0.982-0.245l-0.737,0.736l-0.123,2.211l-1.105-0.123l-1.105-4.421l-0.982,0.982	l-0.859-0.368l-0.246-1.474l-3.071,0.122l-1.597,0.86l-1.964-0.246l1.105-1.104l0.369-1.965l-0.491-1.474l1.105-0.736l0.982-0.123	l-0.491-1.352v-3.318l-0.737-0.737l-0.614,1.105h-4.667l-1.105-0.982l-0.491-2.947l-1.597-2.703v-0.736l1.597-0.614l0.123-1.598	l0.859-0.859l-0.614-0.367l-0.982,0.367l-0.859-2.088l0.737-3.807l3.438-2.457l1.965-1.227l1.474-2.825l2.087-0.982l1.965,0.859	l0.246,1.843l1.842-0.245l2.456-1.843l1.229,0.49l0.737,0.491H59.5l1.719-0.982l0.613-3.315c0,0,0.246-2.21,0.737-2.58	c0.491-0.367,0.737-0.736,0.737-0.736l-0.859-1.474l-1.965,0.614l-2.456,0.614l-1.474-0.367l-2.703-1.352l-3.807-0.122l-2.702-2.825	l0.369-2.947l0.491-1.842l-1.597-1.352l-1.474-2.824l0.368-0.614l5.158-0.368h1.597l0.737,0.737h0.492l-0.124-1.229l2.948-0.49	l1.965,0.245l1.105,0.86l-1.105,1.597l-0.368,1.104l2.087,1.229l3.807,1.35l1.351-0.736l-1.719-3.316l-0.737-2.455l0.737-0.614	l-2.579-1.474L60.48,352.8l0.369-1.229l-0.614-2.947l-2.21-3.562l-1.842-3.192l2.21-1.473h2.456l1.351,0.49l3.194-0.123l2.824-2.701	l0.86-2.334l2.825-1.842l1.228,0.736l2.087-0.49l2.825-1.597l0.86-0.122l0.737,0.613l3.438-0.122l2.088-2.333h0.859l2.702,1.842	l1.474,1.597l-0.368,0.859l0.491,0.859l1.228-1.227l2.948,0.245l0.246,2.824l1.474,1.105l5.403,0.49l4.79,3.193l1.105-0.736	l3.93,1.965l1.597-0.491l1.474-0.614l3.685,1.473L121.516,346.168z M34.077,368.15l1.597,4.053l-0.124,0.737l-2.21-0.246	l-1.351-3.069l-1.351-1.105h-1.842l-0.124-1.965l1.351-1.843l0.859,1.843l1.105,1.104L34.077,368.15z M32.112,393.572l2.824,0.614	l2.824,0.737l0.614,0.736l-1.228,2.825l-2.334-0.123l-2.579-2.702L32.112,393.572z M16.393,382.888l0.859,1.965l0.86,1.229	l-0.86,0.614l-1.597-2.334v-1.473L16.393,382.888L16.393,382.888z M5.954,438.397l2.579-1.72l2.579-0.737l1.965,0.245l0.368,1.228	l1.474,0.369l1.474-1.475l-0.245-1.228l2.087-0.49l2.211,1.965l-0.859,1.351l-3.316,0.859l-2.088-0.367l-2.825-0.86l-3.315,1.105	l-1.229,0.245L5.954,438.397z M43.165,434.958l1.228,1.474l1.597-1.229l-1.105-0.982L43.165,434.958z M45.375,437.292l0.86-1.72	l1.597,0.245l-0.615,1.474L45.375,437.292L45.375,437.292z M63.305,435.817l1.105,1.352l0.737-0.86l-0.614-1.474L63.305,435.817z	 M69.937,426.362l0.859,4.42l2.21,0.614l3.807-2.21l3.316-1.966l-1.228-1.842l0.368-1.842l-1.597,0.982l-2.21-0.614l1.228-0.86	l1.474,0.615l2.948-1.351l0.369-1.105l-1.842-0.615l0.614-1.473l-2.088,1.473l-3.561,2.702l-3.684,2.211L69.937,426.362z	 M102.112,411.256l1.842-1.105l-0.737-1.351l-1.35,0.736L102.112,411.256z'},
							Florida: { name: 'Florida', path: 'M575.276,339.963l1.722,5.56l2.832,7.4l4.053,7.124l2.825,4.789l3.685,4.175l3.07,2.825	l1.228,2.21l-0.859,0.982l-0.614,0.983l2.21,5.649l2.21,2.21l1.966,4.053l2.702,4.421l3.438,6.263l0.981,5.772l0.369,9.088l0.49,1.351l-0.245,2.58l-1.843,0.981l0.246,1.474l-0.49,1.474l0.244,1.842l0.369,1.474l-2.089,2.456l-2.333,1.104l-2.947,0.123l-1.105,1.228l-1.842,0.737l-0.982-0.368l-0.859-0.736l-0.246-2.211l-0.614-2.579l-2.579-3.93l-2.702-1.72l-2.948-0.245	l-0.614,0.982l-2.333-3.316l-0.49-2.701l-1.965-3.071l-1.352-0.859l-1.228,1.597l-1.35-0.245l-1.598-3.808l-2.211-2.946	l-2.209-4.053l-1.966-2.334l-2.702-2.825l1.598-1.842l2.455-4.175l-0.123-1.229l-3.438-0.737l-1.228,0.491l0.245,0.49l1.966,0.737	l-1.105,3.438l-0.615,0.368l-1.351-3.069l-0.982-3.686l-0.245-2.087l1.105-3.562v-7.246l-2.334-2.825l-0.982-2.333l-3.93-0.982	l-1.474-0.49l-1.228-1.965l-2.58-1.228l-0.858-2.58l-2.089-0.737l-1.842-2.824l-3.193-1.105l-2.211-1.105h-1.964l-3.07,0.614	l-0.123,1.474l0.614,0.736l-0.367,0.86l-2.334-0.123l-2.824,2.702l-2.703,1.474h-2.947l-2.455,0.982l-0.245-2.088l-1.229-1.473	l-2.211-0.859l-1.227-1.105l-6.141-2.947l-5.772-1.352l-3.316,0.491l-4.543,0.368l-4.544,1.597l-2.643,0.465l-0.18-6.115	l-1.966-1.473l-1.351-1.351l0.245-2.333l7.738-0.983l19.403-2.21l5.158-0.49l4.13,0.213l1.964,2.947l1.105,1.104l6.152,0.392	l8.219-0.491l16.343-0.982l4.137-0.512l3.477,0.021l0.123,2.211l2.905,0.614l0.245-3.651l-1.228-3.439l0.726-0.556l3.883,0.345	L575.276,339.963z M584.807,440.546l1.842-0.491l0.983-0.184l1.105-1.781l1.78-1.228l0.982,0.368l1.29,0.245l0.307,0.798	l-2.642,0.922l-3.192,1.105l-1.781,0.921L584.807,440.546z M595.062,436.739l0.921,0.798l2.088-1.597l4.053-3.192l2.824-2.948	l1.904-5.035l0.736-1.288l0.123-2.581l-0.553,0.369l-0.738,2.149l-1.104,3.499l-2.456,3.991l-3.315,3.193l-2.579,1.473	L595.062,436.739z'},
							SouthCarolina: { name: 'South Carolina', path: 'M579.708,315.222l-1.35,0.737l-1.965-0.982l-0.491-1.597l-0.982-2.702l-1.72-1.598	l-1.965-0.49l-1.228-3.685l-2.088-4.543l-3.193-1.474l-1.596-1.474l-0.983-1.965l-1.597-1.473l-1.72-0.983l-1.72-2.209l-2.333-1.72	l-3.438-1.351l-0.367-1.105l-1.843-2.21l-0.368-1.104l-2.58-3.93l-2.578,0.123l-3.07-1.844l-0.982-0.982l-0.246-1.351l0.615-1.473	l1.719-0.736l-0.245-1.597l4.668-1.965l6.877-3.438l5.525-0.615l12.525-0.367l1.72,1.472l1.229,2.455l3.315-0.367l9.579-1.105	l2.21,0.615l9.579,5.772l7.679,6.17l-4.119,4.146l-1.965,4.667l-0.368,4.791l-1.228,0.613l-0.859,2.088l-1.843,0.492l-1.597,2.702	l-2.088,2.087l-1.72,2.579l-1.228,0.615l-2.702,2.578l-2.211,0.123l0.737,2.457l-3.807,4.174L579.708,315.222z'},
							Georgia: { name: 'Georgia', path: 'M525.306,273.467l-3.685,0.615l-6.386,0.859l-6.509,0.676v1.659l0.123,1.597l0.49,2.579	l2.579,6.018l1.843,7.491l1.105,4.667l1.229,3.684l1.105,5.281l1.596,4.79l1.965,2.579l0.368,2.579l1.473,0.614l0.123,1.597	l-1.35,3.685l-0.369,2.456l-0.122,1.474l1.228,3.315l0.246,4.053l-0.614,1.843l0.491,0.614l1.104,0.614l0.491,2.579l1.964,2.947	l1.105,1.105l6.018,0.122l8.22-0.491l16.342-0.981l4.137-0.513l3.478,0.021l0.123,2.21l1.965,0.614l0.246-3.315l-1.229-3.438	l0.859-1.228l4.422,0.614l3.78,0.24l-0.589-4.784l1.72-7.614l1.105-3.192l-0.368-1.966l2.533-4.743l-0.388-1.026l-1.454,0.534	l-1.965-0.981l-0.49-1.598l-0.983-2.702l-1.72-1.596l-1.965-0.491l-1.228-3.685l-2.222-4.812l-3.193-1.474l-1.597-1.475	l-0.982-1.964l-1.598-1.473l-1.719-0.983l-1.72-2.21l-2.333-1.721l-3.438-1.35l-0.368-1.105l-1.842-2.21l-0.368-1.104l-2.58-3.729	l-2.578,0.122l-3.138-2.312l-0.983-0.982l-0.245-1.352l0.614-1.473l1.787-0.938l-0.86-0.935l0.06-0.221l-4.421,0.737l-5.28,0.615	L525.306,273.467z'},
							Alabama: { name: 'Alabama', path: 'M476.673,356.117l-1.226-11.544l-2.087-14.246l0.122-10.685l0.614-23.577l-0.123-12.65	l0.125-4.875l5.893-0.282l21.124-1.964l6.777-0.503l-0.111,1.658l0.123,1.596l0.491,2.58l2.578,6.018l1.842,7.491l1.105,4.666	l1.229,3.686l1.104,5.28l1.597,4.79l1.966,2.579l0.368,2.579l1.474,0.614l0.122,1.598l-1.35,3.685l-0.369,2.456l-0.122,1.473	l1.228,3.315l0.245,4.053l-0.614,1.843l0.491,0.614l1.104,0.614l0.787,1.926h-4.791l-5.157,0.49l-19.403,2.211l-7.908,1.068	l-0.074,2.851l1.351,1.351l1.965,1.473l0.441,6.029l-4.21,1.954l-2.088-0.245l2.088-1.474v-0.737l-2.334-4.544l-1.719-0.49	l-1.105,3.316l-0.982,2.087l-0.492-0.122h-2.088V356.117z'},
							NorthCarolina: { name: 'North Carolina', path: 'M633.55,228.267l1.299,3.568l2.702,4.913l1.842,1.843l0.491,1.719l-1.842,0.122	l0.614,0.491l-0.246,3.193l-1.965,0.983l-0.49,1.597l-0.982,2.209l-2.826,1.229l-1.842-0.245l-1.105-0.123l-1.228-0.982l0.245,0.982	v0.736h1.474l0.614,0.983l-1.473,4.79h3.192l0.491,1.228l1.719-1.719l0.983-0.369l-1.474,2.703l-2.333,3.684h-0.982l-0.859-0.368	l-2.088,0.491l-3.931,1.842l-4.912,4.053l-2.58,3.561l-1.473,4.913l-0.368,1.843l-3.562,0.368l-4.143,1.015l-7.556-6.23	l-9.579-5.771l-2.21-0.615l-9.578,1.105l-3.249,0.57l-1.229-2.456l-2.256-1.607l-12.526,0.368l-5.525,0.614l-6.878,3.438	l-4.667,1.965l-1.228,0.245l-4.422,0.737l-5.279,0.615l-5.158,0.368l0.379-3.08l1.351-1.105l2.089-0.491l0.49-2.825l3.193-2.087	l2.947-1.105l3.193-2.702l3.315-1.596l0.49-2.333l2.948-2.948l0.491-0.123c0,0,0,0.86,0.613,0.86c0.614,0,1.474,0.245,1.474,0.245	l1.719-2.702l1.597-0.491l1.721,0.246l1.227-2.702l2.211-1.966l0.369-1.597v-3.009l3.438,0.553l5.422-0.982l12.017-1.473	l13.019-1.966l15.134-3.039l14.99-3.164l8.633-2.125L633.55,228.267z M636.509,253.325l1.966-1.903l2.395-1.965l1.166-0.491	l0.122-1.535l-0.49-4.667l-1.105-1.78l-0.49-1.413l0.553-0.184l2.088,4.175l0.307,3.377l-0.123,2.58l-2.579,1.167l-2.149,1.842	l-0.859,0.921L636.509,253.325z'},
							Tennessee: { name: 'Tennessee', path: 'M530.955,245.098l-39.421,3.807l-11.972,1.351l-3.511,0.39l-2.938-0.021v2.947l-6.387,0.369l-5.28,0.491l-8.429,0.04l-0.201,4.434l-1.625,4.766l-0.756,2.292l-1.025,3.328l-0.246,1.964l-3.07,1.721l1.105,2.702l-0.737,3.316	l-0.735,0.6l5.512-0.147l18.298-1.474l4.053-0.122l6.141-0.369l21.123-1.965l7.726-0.614l6.396-0.737l6.386-0.859l3.686-0.615	l-0.1-3.426l1.351-1.104l2.088-0.492l0.491-2.824l3.192-2.087l2.948-1.105l3.192-2.701l3.315-1.597l0.664-2.678l3.291-2.948	l0.491-0.123c0,0,0,0.861,0.614,0.861c0.615,0,1.475,0.244,1.475,0.244l1.719-2.702l1.598-0.49l1.719,0.246l1.229-2.702l1.606-1.706	l0.456-0.734l0.134-2.988l-1.127-0.218l-1.842,1.473l-6.019,0.123l-9.111,1.443L530.955,245.098z'},
							RhodeIsland: { name: 'Rhode Island', path: 'M665.428,138.134l-0.367-3.194l-0.614-3.316l-1.289-4.483l4.36-1.167l1.227,0.859l2.58,3.316l2.209,3.377l-2.21,1.167l-0.983-0.124l-0.859,1.351l-1.843,1.474L665.428,138.134z'},
							Connecticut: { name: 'Connecticut', path: 'M664.762,138.306l-0.477-3.193l-0.614-3.316l-1.229-4.543l-3.153,0.688l-16.579,3.623	l0.49,2.518l1.105,5.527v6.14l-0.859,1.719l1.392,1.602l3.765-2.583l2.702-2.456l1.474-1.597l0.614,0.491l2.087-1.105l3.931-0.86	L664.762,138.306z'},
							Massachusetts: { name: 'Massachusetts', path: 'M685.108,133.597l1.651-0.521l0.347-1.303l0.78,0.086l0.782,1.737l-0.956,0.348	l-2.953,0.086L685.108,133.597z M677.987,134.205l1.737-1.997h1.217l1.389,1.128l-1.823,0.782l-1.649,0.781L677.987,134.205z	 M651.553,117.501l13.263-3.193l1.72-0.491l1.597-2.456l2.839-1.263l2.195,3.353l-1.843,3.93l-0.246,1.105l1.475,1.964l0.859-0.614	h1.351l1.719,1.965l2.948,4.543l2.701,0.369l1.721-0.737l1.351-1.351l-0.614-2.088l-1.597-1.229l-1.105,0.614l-0.737-0.982	l0.368-0.369l1.596-0.123l1.352,0.614l1.474,1.842l0.736,2.21l0.246,1.842l-3.193,1.105l-2.947,1.474l-2.947,3.438l-1.474,1.105	v-0.737l1.843-1.105l0.367-1.35l-0.614-2.334l-2.21,1.105l-0.614,1.105l0.368,1.719l-1.569,0.76l-2.087-3.439l-2.579-3.316	l-1.573-1.376l-4.963,1.425l-3.868,0.798l-16.579,3.623l-0.305-3.756l0.49-8.044l3.93-0.675L651.553,117.501z'},
							Maine: { name: 'Maine', path: 'M702.761,60.274l1.474,1.597l1.72,2.824v1.474l-1.597,3.562l-1.474,0.491l-2.579,2.333	l-3.685,4.176c0,0-0.49,0-0.982,0c-0.491,0-0.737-1.597-0.737-1.597l-1.351,0.123l-0.737,1.105l-1.842,1.105l-0.737,1.105	l1.228,1.105l-0.367,0.491l-0.368,2.088l-1.475-0.123v-1.228l-0.244-0.982l-1.105,0.245l-1.351-2.456l-1.597,0.982l0.982,1.105	l0.246,0.86l-0.615,0.982l0.245,2.334l0.123,1.228l-1.228,1.965l-2.211,0.369l-0.245,2.21l-4.053,2.333l-0.982,0.368l-1.229-1.105	l-2.332,2.702l0.736,2.456l-1.105,0.982l-0.122,3.316l-0.854,4.754l-1.87-0.878l-0.368-2.334l-2.947-0.859l-0.245-2.088	l-5.526-17.807l-3.189-10.362l1.079-0.09l1.15,0.312v-1.965l0.614-4.175l1.966-3.561l1.104-3.07l-1.474-1.842V52.29l0.615-0.736	l0.614-2.088l-0.123-1.105l-0.122-3.685l1.351-3.684l2.21-6.755l1.597-3.193h0.983l0.982,0.123v0.86l0.981,1.719l2.088,0.491	l0.614-0.614v-0.737l3.07-2.21l1.352-1.351l1.104,0.123l4.543,1.842l1.474,0.737l6.877,22.719h4.544l0.614,1.474l0.123,3.684	l2.21,1.719h0.615l0.122-0.368l-0.368-0.86L702.761,60.274z M686.86,83.177l1.166-1.167l1.045,0.798l0.429,1.842l-1.289,0.675	L686.86,83.177z M691.957,78.694l1.35,1.412c0,0,0.983,0.062,0.983-0.184c0-0.245,0.184-1.535,0.184-1.535l0.676-0.613l-0.614-1.351	L693,76.976L691.957,78.694z'},
							NewHampshire: { name: 'New Hampshire', path: 'M670.539,109.724l0.66-0.818l0.828-2.5l-1.932-0.694l-0.367-2.333l-2.948-0.86	l-0.245-2.087l-5.526-17.807l-3.495-11.048l-0.682-0.003l-0.49,1.228l-0.491-0.368l-0.737-0.737l-1.105,1.474l-0.036,3.822	l0.236,4.305l1.474,2.087v3.071l-2.824,3.846l-1.965,0.859v0.86l0.859,1.351v6.508l-0.615,7l-0.122,3.685l0.737,0.982l-0.122,3.438	l-0.369,1.351l1.105,0.673l12.45-3.563l1.721-0.491l1.165-1.938L670.539,109.724z'},
							Vermont: { name: 'Vermont', path: 'M642.846,118.31l-0.614-4.298l-1.816-7.575l-0.49-0.246l-2.211-0.982l0.615-2.21l-0.615-1.597	l-2.052-3.525l0.738-2.947l-0.615-3.93l-1.842-4.912l-0.611-3.739l19.938-5.126l0.245,4.42l1.475,2.088v3.07l-2.825,3.071	l-1.964,0.859v0.86l0.859,1.351v6.508l-0.615,7.001l-0.123,3.684l0.738,0.982l-0.123,3.438l-0.369,1.351l0.503,1.19l-5.281,1.044	L642.846,118.31z'},
							NewYork: { name: 'New York', path: 'M630.896,145.425l-0.859-0.737l-1.965-0.122l-1.72-1.474l-1.239-4.656l-2.627,0.069	l-1.856-2.057l-14.727,3.329l-32.667,6.632l-5.719,0.933l-0.561-4.913l1.085-0.854l0.981-0.86l0.737-1.229l1.352-0.859l1.474-1.351	l0.367-1.229l1.598-2.087l0.859-0.737l-0.123-0.737l-0.982-2.334l-1.351-0.123l-1.474-4.667l2.211-1.351l3.315-1.105l3.07-0.982	l2.456-0.368l4.789-0.123l1.474,0.982l1.229,0.123l1.597-0.982l1.965-0.859l3.93-0.369l1.597-1.351l1.351-2.456l1.228-1.474h1.597	l1.475-0.859l0.122-1.719l-1.105-1.597l-0.245-1.105l0.859-1.597v-1.105h-1.351l-1.351-0.614l-0.613-0.86l-0.123-1.964l4.42-4.176	l0.491-0.613l1.105-2.211l2.21-3.438l2.088-2.825l1.597-1.842l1.834-1.387l2.342-0.946l4.175-0.982l2.456,0.123l3.438-1.105	l5.746-1.573l0.396,3.783l1.842,4.912l0.615,3.93l-0.737,2.947l1.965,3.439l0.614,1.597l-0.614,2.211l2.21,0.982l0.491,0.245	l2.333,8.351l-0.407,3.844l-0.367,8.228l0.613,4.176l0.615,2.702l1.104,5.526v6.14l-0.859,1.72l1.397,1.514l0.604,1.274	l-1.473,1.351l0.245,0.982l0.982-0.246l1.105-0.982l1.72-1.965l0.858-0.491l1.229,0.491l1.72,0.124l6.019-2.948l2.21-2.087	l0.982-1.105l3.193,1.228l-2.58,2.702l-2.947,2.211l-5.403,4.053l-1.965,0.736l-4.421,1.474l-3.07,0.859l-0.893-0.405l-0.186-2.802	l0.368-2.087l-0.122-1.597l-2.137-1.291l-3.439-0.737l-2.947-0.859L630.896,145.425z'},
							NewJersey: { name: 'New Jersey', path: 'M630.552,146.115l-1.597,1.842v2.333l-1.473,2.333l-0.123,1.228l0.981,0.982l-0.122,1.842	l-1.72,0.86l0.614,2.087l0.123,0.86l2.088,0.245l0.736,1.964l2.703,1.842l1.842,1.229v0.614l-2.456,2.333l-1.229,1.719l-1.104,2.088	l-1.72,0.982l-0.921,0.553l-0.184,0.921l-0.463,1.98l0.83,1.705l2.455,2.21l3.685,1.72l3.071,0.491l0.122,1.105l-0.614,0.736	l0.245,2.088h0.614l1.597-1.842l0.614-3.684l2.088-3.071l2.334-4.912l0.858-4.176l-0.49-0.86l-0.122-7.123l-1.229-2.579l-0.86,0.614	l-2.087,0.246l-0.368-0.369l0.859-0.736l1.597-1.474l0.048-0.832l-0.292-2.609l0.368-2.087l-0.123-1.597l-1.965-0.86l-3.438-0.737	l-2.947-0.859L630.552,146.115z'},
							Pennsylvania: { name: 'Pennsylvania', path: 'M626.029,173.562l0.86-0.491l1.719-0.465l1.105-2.087l1.229-1.719l2.455-2.333v-0.614	l-1.842-1.229l-2.702-1.842l-0.737-1.965l-2.088-0.246l-0.123-0.859l-0.613-2.088l1.719-0.859l0.123-1.843l-0.982-0.982l0.123-1.228	l1.473-2.334v-2.333l1.782-1.842l0.162-0.823l-1.965-0.123l-1.72-1.474l-1.843-4.053l-2.282-0.707l-1.771-1.626l-14.122,3.07	l-32.667,6.632l-6.755,1.105l-0.376-5.382l-4.169,4.277l-0.982,0.369l-3.192,2.286l2.212,14.538l1.884,7.391l2.714,14.633	l2.483-0.485l9.073-1.142l28.812-5.823l11.3-2.145l6.306-1.233l0.203-0.181l1.598-1.228L626.029,173.562z'},
							Delaware: { name: 'Delaware', path: 'M626.141,176.572l0.447-1.598l0.016-0.915l-0.964-0.067l-1.597,1.228l-1.105,1.105	l1.105,3.192l1.72,4.298l1.597,7.369l1.229,4.79l3.806-0.123l4.667-0.92l-1.721-5.587l-0.736,0.369l-2.703-1.842l-1.35-3.562	l-1.474-2.702l-1.72-0.737l-1.597-2.701L626.141,176.572z'},
							Maryland: { name: 'Maryland', path: 'M637.231,195.474l-4.665,0.982l-4.411,0.123l-1.4-5.393l-1.597-7.369l-1.72-4.298	l-0.979-3.341l-5.702,1.233l-11.302,2.145l-28.45,5.736l0.86,3.808l0.737,4.298l0.245-0.245l1.597-1.842l1.72-1.989l1.842-0.468	l1.105-1.105l1.351-1.965l0.982,0.491l2.21-0.245l1.966-1.597l1.524-1.104l1.401-0.368l1.25,0.858l2.211,1.105l1.473,1.351	l0.921,1.167l3.132,1.289v2.211l4.176,0.982l0.87,0.412l1.071-1.54l2.19,1.496l-0.971,1.885l-0.582,3.028l-1.351,1.964v1.597	l0.491,1.351l3.846,1.029l3.275-0.047l2.333,0.737l1.598,0.246l0.736-1.596l-1.105-1.597v-1.351l-1.842-1.597l-1.597-4.175	l0.981-4.053l-0.122-1.596l-0.982-0.983c0,0,1.104-1.228,1.104-1.72c0-0.491,0.369-1.597,0.369-1.597l1.474-0.982l1.473-1.229	l0.369,0.737l-1.105,1.228l-0.983,2.824l0.246,0.86l1.35,0.246l0.369,4.176l-1.598,0.737l0.246,2.702l0.368-0.123l0.86-1.474	l1.227,1.351l-1.227,0.982l-0.246,2.579l1.965,2.579l2.947,0.369l1.229-0.614l2.459,3.177l1.031,0.408l5.054-2.125l1.525-3.056	L637.231,195.474z M624.597,202.3l0.859,1.903l0.123,1.351l0.86,1.412c0,0,0.675-0.676,0.675-0.921c0-0.246-0.553-2.334-0.553-2.334	l-0.554-1.78L624.597,202.3z'},
							WestVirginia: { name: 'West Virginia', path: 'M576.16,185.342l0.846,3.757l0.822,5.246l2.705-2.088l1.72-2.333l1.928-0.468l1.105-1.105	l1.351-1.965l0.896,0.491l2.211-0.245l1.964-1.597l1.524-1.104l1.402-0.368l0.99,0.772l1.694,0.847l1.472,1.351l1.045,0.982	l-0.109,3.548l-4.298-2.333l-3.438-1.351l-0.123,4.053l-0.368,1.597l-1.229,2.087l-0.49,1.229l-2.333,1.842l-0.369,1.719	l-2.579,0.246l-0.245,2.333l-0.86,4.176h-1.965l-0.982-0.614l-1.228-2.088l-1.351,0.123l-0.245,3.316l-1.597,5.035l-3.808,8.228	l0.614,0.982l-0.123,2.087l-1.597,1.474l-1.105-0.245l-2.455,1.842l-1.965-0.737l-1.351,3.562c0,0-2.825,0.615-3.316,0.738	c-0.49,0.122-1.842-0.983-1.842-0.983l-1.842,1.719l-1.966,0.491l-2.21-0.614l-0.982-0.983l-1.666-2.296l-2.387-1.51l-1.965-2.087	l-2.211-2.824l-0.491-1.719l-1.965-1.105l-0.614-1.228l-0.184-3.991l1.658-0.062l1.473-0.614l0.123-2.088l1.229-1.105l0.123-3.807	l0.736-2.948l0.982-0.491l0.982,0.86l0.368,1.351l1.351-0.737l0.368-1.229l-0.859-1.351v-1.842l0.736-0.982l1.72-2.579l0.982-1.105	l1.597,0.369l1.72-1.229l2.333-2.579l1.72-2.947l0.246-4.298l0.367-3.807v-3.562l-0.859-2.333l0.736-1.105l0.976-0.982l2.651,15.062	l3.519-0.571L576.16,185.342z'},
							Kentucky: { name: 'Kentucky', path: 'M549.741,227.77l-1.767,2.038l-3.192,2.701l-3.266,4.484l-1.351,1.352v1.597l-2.948,1.596	l-4.298,2.58l-2.674,0.293l-39.402,3.721l-11.972,1.351l-3.511,0.39l-2.938-0.021l-0.172,3.207l-6.215,0.11l-5.28,0.491	l-7.924,0.156l1.453-0.169l1.656-1.338l1.564-0.87l0.174-2.432l0.694-1.389l-1.22-1.929l0.609-1.448l1.72-1.351l1.597-0.491	l2.088,0.982l2.702,0.983l0.859-0.246l0.124-1.72l-0.982-1.843l0.246-1.718l1.473-1.105l1.965-0.491l1.228-0.491l-0.614-1.352	l-0.492-1.472l0.86-0.614l0.799-2.518l2.271-1.289l4.421-0.737l2.702-0.369l1.105,1.474l1.351,0.614l1.351-2.456l2.211-1.105	l1.473,1.229l0.615,0.859l1.597-0.368l-0.124-2.579l2.211-1.229l0.86-0.614l0.859,1.228h3.562l0.614-1.597l-0.244-1.719l2.21-2.702	l3.562-2.948l0.368-3.438l2.087-0.246l2.948-1.351l2.087-1.474l-0.245-1.474l-1.105-1.105l0.43-1.657l3.132-0.185l1.842-0.614	l2.211,1.229l1.228,3.316l4.422,0.246l1.35,1.351l1.598,0.123l1.842-1.105l2.333,0.368l0.982,1.105l2.088-1.964l1.35-0.982h1.229	l0.491,2.088l1.351,0.737l1.84,1.683l0.122,4.175l0.615,1.229l1.965,1.105l0.49,1.719l2.211,2.824l1.965,2.088L549.741,227.77z'},
							Ohio: { name: 'Ohio', path: 'M557.074,149.669l-4.629,3.079l-2.947,1.719l-2.579,2.824l-3.07,2.947l-2.456,0.614l-2.211,0.369	l-4.175,1.964l-1.597,0.123l-2.579-2.333l-3.931,0.491l-1.965-1.105l-1.809-1.026l-3.717,0.534l-7.738,1.228l-5.895,0.921	l0.983,11.114l1.351,10.438l1.965,17.807l0.43,3.67l3.131-0.099l1.842-0.614l2.556,1.142l1.573,3.316l3.903-0.013l1.438,1.61	l1.339-0.049l1.928-1.019l1.902,0.282l1.5,1.105l1.312-1.619l1.781-0.982l1.573-0.518l0.49,2.088l1.351,0.737l2.641,1.78	l1.659-0.062l0.87-0.872l-0.049-1.054l1.228-1.105l0.123-3.808l0.737-2.948l1.154-1.094l1.156,0.687l0.626,0.92l0.92-0.133	l-0.321-1.832l-0.428-0.489v-1.842l0.737-0.982l1.719-2.579l0.982-1.105l1.598,0.368l1.719-1.228l2.334-2.579l1.719-2.948	l0.159-4.125l0.369-3.807v-3.562l-0.859-2.333l0.736-1.105l0.699-0.726l-1.067-7.477L557.074,149.669z'},
							Michigan: { name: 'Michigan', path: 'M443.264,63.866l1.39-1.563l1.65-0.608l4.082-2.953l1.737-0.434l0.347,0.347l-3.908,3.907	l-2.518,1.476l-1.564,0.695L443.264,63.866z M508.728,88.272l0.491,1.903l2.456,0.124l0.982-0.921c0,0-0.062-1.105-0.307-1.229	c-0.246-0.123-1.228-1.412-1.228-1.412l-1.659,0.185l-1.228,0.122l-0.245,0.86L508.728,88.272z M531.568,136.169l-2.456-6.263	l-1.72-6.877l-1.842-2.456l-1.966-1.351l-1.228,0.86l-2.947,1.351l-1.474,3.807l-2.088,2.824l-0.859,0.491l-1.105-0.491	c0,0-1.965-1.105-1.842-1.597c0.122-0.491,0.367-3.807,0.367-3.807l2.58-0.982l0.613-2.579l0.492-1.964l1.842-1.229l-0.245-7.614	l-1.229-1.719l-0.982-0.615l-0.614-1.596l0.614-0.614l1.228,0.246l0.123-1.229l-1.842-1.719l-0.983-1.964h-1.964l-3.438-1.105	l-4.176-2.579h-2.088l-0.49,0.492l-0.737-0.368l-2.333-1.72l-2.21,1.351l-2.211,1.719l0.245,2.702l0.737,0.245l1.597,0.369	l0.368,0.614l-1.965,0.614l-1.965,0.246l-1.105,1.351l-0.245,1.597l0.245,1.228l0.245,4.175l-2.702,1.597l-0.49-0.123v-3.193	l0.982-1.842l0.491-1.843l-0.614-0.614l-1.474,0.614l-0.737,3.193l-2.088,0.859l-1.35,1.474l-0.124,0.737l0.491,0.615l-0.491,1.964	l-1.719,0.369v0.86l0.614,1.842l-0.859,4.667l-1.229,3.071l0.49,3.561l0.369,0.859l-0.614,1.842l-0.246,0.614l-0.245,2.088	l2.701,4.543l2.211,4.912l1.105,3.684l-0.614,3.561l-0.736,4.544l-1.843,3.93l-0.246,2.087l-2.476,2.344l3.349-0.123l16.271-1.72	l5.529-0.75l0.073,1.266l5.206-0.921l7.822-1.142l2.928-0.35l0.105-0.446l0.122-1.105l1.598-2.825l1.52-1.32l-0.169-3.838	l1.213-1.213l0.829-0.261l0.168-2.702l1.167-2.302l0.799,0.46l0.123,0.491l0.614,0.123l1.473-0.737L531.568,136.169z	 M432.533,86.013l0.543-0.441l2.088-0.614l2.701-1.719v-0.737l0.492-0.491l4.543-0.736l1.843-1.474l3.314-1.597l0.123-0.982	l1.474-2.211l1.35-0.614l0.983-1.351l1.719-1.72l3.316-1.842l3.561-0.369l0.86,0.86l-0.245,0.737l-2.825,0.737l-1.105,2.333	l-1.72,0.615l-0.368,1.842l-1.842,2.456l-0.246,1.965l0.614,0.369l0.737-0.86l2.703-2.211l0.983,0.982h1.719l2.456,0.737l1.105,0.86	l1.105,2.333l2.087,2.088l2.947-0.123l1.105-0.737l1.228,0.982l1.229,0.369l0.982-0.614h0.86l1.228-0.737l3.07-2.702l2.58-0.859	l5.035-0.245l3.438-1.474l1.965-0.982l1.105,0.123v4.298l0.368,0.245l2.211,0.614l1.473-0.368l4.667-1.229l0.86-0.859l1.105,0.369	v5.28l2.455,2.333l0.982,0.491l0.982,0.737l-0.982,0.245l-0.614-0.245l-2.824-0.369l-1.597,0.492l-1.72-0.123l-2.457,1.105h-1.35	l-4.421-0.982l-3.93,0.123l-1.474,1.964l-5.28,0.492l-1.843,0.613l-0.86,2.334l-0.982,0.859l-0.368-0.123l-1.105-1.228l-3.438,1.842	h-0.49l-0.86-1.229l-0.614,0.123l-1.474,3.316l-0.736,3.071l-2.417,5.318l-0.895-0.787l-1.041-0.783l-1.475-7.815l-2.692-1.041	l-1.56-1.737l-9.207-2.084l-2.169-0.782l-6.251-1.65l-5.995-0.869L432.533,86.013z'},
							Wyoming: { name: 'Wyoming', path: 'M270.542,110.75l-8.014-0.613l-24.376-2.503l-12.332-1.563l-21.535-3.126l-15.11-2.258	l-1.078,8.49l-2.917,18.429l-3.994,23.099l-1.163,7.989l-1.268,9.031l4.956,0.705l19.659,1.899l15.625,1.752l27.943,3.126	l18.096,2.172l3.421-33.571l1.094-19.278L270.542,110.75z'},
							Montana: { name: "Montana", path: 'M272.38,94.416l0.492-8.471l1.716-18.83c0.347-3.82,0.823-6.436,1.042-11.707l0.713-11.055	l-23.302-2.133l-22.228-2.701l-22.229-3.071l-24.562-4.053l-14-2.579l-24.859-5.266l-3.402,16.217l2.605,5.731l-1.042,3.473	l1.39,3.474l2.432,1.042l3.51,8.182l2.047,2.414l0.347,0.869l2.605,0.868l0.348,1.563l-5.383,13.373v1.911l1.91,2.432h0.694	l3.647-2.258l0.521-0.868l1.215,0.521l-0.174,3.994l2.085,9.552l2.258,1.911l0.695,0.521l1.389,1.736l-0.347,2.605l0.521,2.605	l0.868,0.694l1.737-1.736h2.084l2.431,1.216l1.911-0.695h3.126l2.779,1.215l2.084-0.347l0.347-2.258l2.258-0.521l1.042,1.042	l0.348,2.431l1.352,1.037l1.165-8.785l15.719,2.257l21.413,3.004l12.576,1.441l23.887,2.625l8.349,1.158l0.8-11.72L272.38,94.416z'},
							Idaho: { name: 'Idaho', path: 'M124.587,138.997c-17.177-3.3-10.747-2.163-16.06-3.305l3.363-13.295l3.3-13.459l1.042-3.213	l1.911-4.516l-0.955-1.736l-1.911,0.086l-0.607-0.782l0.347-0.868l0.26-2.344l3.387-4.168l1.389-0.348l0.869-0.868l0.434-2.432	l0.695-0.521l2.953-4.429l2.952-3.3l0.174-2.866l-2.606-1.997l-0.998-3.343l0.304-7.338l2.779-12.504l3.386-15.805l2.866-10.247	l0.579-2.889l9.873,1.92l-3.159,16.339l2.24,5.853l-0.798,3.474l1.511,3.474l2.432,1.285l3.388,7.45l2.047,2.9l0.469,0.868	l2.605,0.868l0.348,1.929l-5.262,12.764l0.244,2.52l2.032,2.187l1.426,0.365l3.647-2.746l0.277-0.381l0.119,0.644l0.192,3.142	l1.962,9.796l2.624,2.033l0.329,0.643l1.633,1.859l-0.591,2.117l0.521,2.849l1.478,0.695l1.615-1.25l1.962-0.366l2.553,1.216	l1.911-0.451l2.882-0.122l3.022,1.215l2.084-0.226l0.713-1.77l1.892-1.252l0.555,1.286l0.469,1.701l1.753,1.929l-2.865,18.217	l-3.908,22.037l-3.16-0.242l-6.217-1.164l-7.45-1.39l-9.24-1.807l-9.517-1.902l-6.444-1.397l-7.034-1.267L124.587,138.997z'},
							Washington: { name: 'Washington', path: 'M112.162,67.424c-6.362-1.721-10.254-2.3-14.613-2.174	c-3.268,0.094-6.18-0.067-6.471-0.358s-1.619-0.15-2.951,0.315c-1.354,0.471-3.418,0.56-4.679,0.2	c-1.241-0.355-3.022-0.738-3.958-0.851c-0.936-0.112-3.909-0.93-6.607-1.814c-2.965-0.974-6.133-1.452-8.008-1.21	c-4.427,0.572-7.073-1.31-6.579-4.679c0.462-3.153-1.229-7.49-2.921-7.49c-0.69,0-1.688-0.592-2.217-1.315	c-0.529-0.724-2.057-1.37-3.394-1.435c-1.338-0.065-2.706-0.496-3.039-0.955c-0.991-1.365-0.715-2.901,0.519-2.901	c1.584,0,2.384-2.442,1.249-3.811c-1.211-1.459-0.364-3.623,1.419-3.623c1.25,0,1.232-0.178-0.178-1.735	c-1.273-1.408-1.537-2.832-1.395-7.539c0.097-3.192-0.197-6.501-0.653-7.353c-0.887-1.658,0.385-8.149,1.598-8.149	c0.357,0,1.551,0.965,2.652,2.143c2.363,2.53,4.609,3.769,10.708,5.912c4.801,1.686,6.571,1.611,6.571-0.278	c0-0.644,0.65-1.141,1.446-1.105c0.863,0.039,1.03,0.233,0.413,0.482c-0.568,0.229-1.033,0.956-1.033,1.616	c0,1.342,2.38,5.271,3.192,5.271c0.947,0,0.415-12.757-0.613-14.676c-1.606-3-0.464-3.407,5.051-1.792	c9.344,2.734,36.367,9.791,46.051,12.023c5.223,1.204,9.597,2.271,9.719,2.37c0.123,0.099-0.527,2.557-1.442,5.463	c-2.298,7.296-8.276,35.549-8.276,39.116C123.724,70.606,123.909,70.601,112.162,67.424L112.162,67.424z'},
							Texas: { name: 'Texas', path: 'M272.671,254.78l17.237,0.825l23.62,0.869l-1.774,17.818l-0.226,13.791l0.052,1.581l3.299,2.9	l1.319,0.625l1.375,0.193l0.521-0.954l0.677,0.658l1.319,0.364l1.219-0.553l0.865,0.311l-0.226,2.587l3.248,0.782l2.033,0.625	l3.003,0.399l1.667,1.389l2.468-1.196l2.117,0.276l1.545,2.117l0.816,0.244l-0.122,1.493l2.347,0.887l2.103-1.371l1.146,0.276	l1.788,0.122l0.329,1.423l3.525,1.511l2.018-0.155l1.511-3.126h0.259l0.868,1.441l3.371,0.765l2.535,0.92l2.501,0.572l1.633-0.572	l0.643-1.91h2.812l1.44,0.572l2.328-1.197h0.502l0.276,0.851h3.248l1.826-0.954l1.267,0.226l1.076,1.423l2.188,1.268l2.674,0.816	l2.084,1.077l1.859,1.232l2.501-0.677l1.473,0.747l0.39,7.701l0.254,7.371l0.521,7.242l0.399,3.074l2.033,3.493l0.817,3.089	l2.934,4.777l0.417,2.188l0.398,0.766l-0.521,5.694l-2.014,3.334l0.728,2.172l-0.277,1.911l-0.643,5.558l-1.042,2.064l0.459,3.334	l-4.304,1.203l-7.491,3.438l-0.737,1.473l-1.965,1.474l-1.597,1.105l-0.982,0.615l-4.297,4.052l-2.088,1.597l-4.053,2.456	l-4.298,1.842l-4.789,2.58l-1.351,1.104l-4.421,2.702l-2.579,0.491l-2.948,4.176l-3.07,0.245l-0.738,1.473l1.72,1.474l-1.105,4.176	l-0.982,3.438l-0.859,2.947l-0.615,3.438l0.615,1.843l1.35,5.279l0.737,4.667l1.351,2.089l-0.736,1.104l-2.334,1.474l-4.298-2.947	l-4.176-0.86l-0.982,0.368l-2.456-0.49l-3.193-2.334l-3.93-0.859l-5.773-2.579l-1.596-2.948l-0.982-4.912l-2.457-1.473l-0.49-1.72	l0.49-0.491l0.246-2.58l-0.982-0.49l-0.491-0.736l0.982-3.316l-1.228-1.719l-2.457-0.982l-2.579-3.315l-2.703-5.036l-3.192-1.965	l0.122-1.474l-4.053-9.333l-0.614-3.193l-1.351-1.473l-0.123-1.105l-4.543-4.053l-1.964-2.333v-0.859l-1.965-1.597l-5.158-0.86	l-5.65-0.49l-2.333-1.72l-3.438,1.35l-2.702,1.105l-1.72,2.456l-0.737,2.825l-3.315,4.666l-1.842,1.843l-1.965-0.737l-1.351-0.859	l-1.473-0.49l-2.948-1.721v-0.49l-1.35-1.474l-3.93-1.596l-5.65-5.896l-1.719-3.562v-6.141l-2.457-4.911l-0.368-2.089l-1.228-0.736	l-0.86-1.598l-3.807-1.596l-0.982-1.229l-5.404-6.018l-0.982-2.456l-3.562-1.719l-1.105-3.316l-1.965-2.211l-1.474-0.367	l-0.493-3.554l6.079,0.521l22.057,2.084l22.057,1.216l1.737-18.062l2.953-42.204l1.216-14.242l1.042,0.022 M348.771,432.502	l-0.43-5.403l-2.087-5.466l-0.43-5.341l1.166-6.263l2.518-5.22l2.64-4.113l2.395-2.702l0.49,0.184l-3.623,5.035l-3.316,4.975	l-1.535,5.034l-0.246,3.93l0.675,4.667l1.965,5.465l0.369,3.931l0.122,1.104L348.771,432.502z'},
							California: { name: 'California', path: 'M105.308,295.331l2.898-0.371l1.129-1.528l0.556-1.475l-2.413-0.068l-0.835-1.34	l0.591-1.303l-0.035-4.672l1.685-1.009l2.049-1.961l0.312-3.734l1.25-2.658l1.476-1.598l2.483-1.303l0.972-0.553l0.574-1.127	l-0.659-0.679l-0.73-1.146l-0.712-4.064l-2.207-3.978l0.074-2.116l-1.672-2.467l-11.394-17.647L85.939,216.72l-17.037-25.094	l-9.649-14.848l1.365-5.476l5.175-19.712l6.166-23.881l-9.393-2.535l-10.248-2.605l-9.552-3.126l-5.73-1.563l-8.684-2.258	l-5.356-1.833l-1.2,3.59l-0.123,5.649l-3.93,8.965l-2.334,1.965l-0.245,0.859l-1.351,0.615l-1.105,3.193l-0.614,2.456l2.088,3.193	l1.227,3.193l0.86,2.702l-0.245,4.913l-1.351,2.333l-0.491,4.421l-0.737,2.825l1.351,2.947l2.087,3.438l1.72,3.684l0.982,3.071	l-0.245,2.456l-0.246,0.368v1.597l4.298,4.79l-0.369,1.842l-0.491,1.719l-0.491,1.474l0.123,6.264l1.597,2.824l1.474,1.964	l2.087,0.369l0.737,2.088l-0.86,2.702l-1.597,1.228h-0.859l-0.615,2.947l0.369,2.211l2.456,3.316l1.228,4.052l1.105,3.561	l0.982,2.333l2.579,4.42l1.105,1.966l0.368,2.209l1.229,0.737v1.843l-0.615,1.474l-1.351,5.404l-0.369,1.472l1.842,2.088	l3.193,0.369l3.439,1.35l2.948,1.597h2.21l2.21,2.333l1.965,3.685l0.859,1.72l2.948,1.597l3.684,0.614l1.105,1.596l0.491,2.457	l-1.105,0.491l0.245,0.736l2.457,0.614l2.087,0.124l2.21,3.561l2.947,3.193l0.614,1.72l1.964,3.193l0.246,2.456v7.123l0.368,1.352	l7.614,1.105l14.983,2.087L105.308,295.331z M38.497,257.563l0.982,1.166l-0.124,0.983L36.9,259.65l-0.43-0.921l-0.491-1.105	L38.497,257.563z M39.971,257.563l0.921-0.491l2.702,1.597l2.334,0.921l-0.676,0.491l-3.438-0.184l-1.229-1.228L39.971,257.563z	 M55.69,272.606l1.351,1.782l0.614,0.736l1.167,0.43l0.43-1.105l-0.737-1.352l-2.026-1.534l-0.798,0.123V272.606z M54.585,279.177	l1.351,2.394l0.92,1.474l-1.105,0.184l-0.982-0.922c0,0-0.553-1.104-0.553-1.412c0-0.306,0-1.658,0-1.658L54.585,279.177z'},
							Arizona: { name: 'Arizona', path: 'M106.072,295.897l-1.996,1.64l-0.246,1.105l0.369,0.737l14.368,8.104l9.211,5.772l11.176,6.509	l12.771,7.614l9.333,1.842l19.088,2.055l1.923-9.501l2.851-20.695l5.291-40.171l3.234-23.524l-18.685-2.794l-20.667-3.473	l-25.395-4.8l-2.22,13.744l-0.348,0.347l-1.302,1.997l-1.911-0.086l-0.955-2.085l-2.084-0.26l-0.695-0.869h-0.694l-0.695,0.435	l-1.476,0.781l-0.086,5.298l-0.174,1.303l-0.434,9.552l-1.129,1.65l-0.434,2.517l2.084,3.735l0.956,4.429l0.607,0.781l0.782,0.433	l-0.087,1.737l-1.215,1.042l-2.605,1.303l-1.476,1.476l-1.129,2.779l-0.434,3.733l-2.171,2.084l-1.563,0.521l-0.087,4.429	l-0.348,1.303l0.348,0.608l2.779,0.433l-0.434,2.084l-1.129,1.65L106.072,295.897z'},
							Nevada: { name: 'Nevada', path: 'M108.284,136.423l15.938,3.427l7.381,1.476l7.033,1.39l5.025,1.24l-0.424,4.456l-2.692,13.165	l-3.109,15.178l-1.477,7.383l-1.649,10.09l-2.397,12.47l-2.675,11.916l-1.495,7.733l-1.873,12.741l-0.347,0.835l-0.815,1.875	l-1.423-0.087l-0.833-2.084l-2.084-0.382l-1.061-0.747l-1.548,0.244l-0.695,0.556l-0.989,1.026l-0.331,5.298l-0.418,1.303	l-0.312,9.186l-1.004,1.303l-1.425-1.718l-11.028-17.281l-14.763-22.057l-17.281-25.704l-9.405-14.118l1.243-4.988l5.297-19.712	l5.992-23.814l25.53,6.186l10.42,2.258'},
							Utah: { name: 'Utah', path: 'M193.604,236.497l-18.721-2.638l-20.18-3.718l-25.697-4.573l1.206-6.956l2.432-11.549	l2.519-12.592l1.65-10.333l1.476-6.774l2.866-15.543l2.691-13.286l0.847-4.234l9.661,1.716l9.118,1.563l7.815,1.389l6.339,1.042	l2.794,0.364l-1.128,8.075l-1.756,10.007l5.932,0.705l12.464,1.372l6.237,0.65l-1.618,16.688l-2.432,17.142l-2.851,21.139	l-1.266,8.438L193.604,236.497z'},
							Colorado: { name: 'Colorado', path: 'M289.055,196.607l1.093-16.167l-24.381-2.328l-18.583-2.051l-28.31-3.126l-15.717-1.911	l-1.997,16.846l-2.432,17.021l-2.851,21.26l-1.143,8.438l-0.19,2.099l25.772,2.883l28.67,3.242l24.279,2.405l12.617,0.643L289.055,196.607z'},
							NewMexico: { name: 'New Mexico', path: 'M216.206,328.977l-0.494-4.651l6.566,0.399l22.423,2.327l21.569,1.094l1.493-16.965	l2.831-42.447l0.85-14.73l1.53,0.267l-0.011-8.413l-24.463-1.826l-28.061-3.363l-26.182-3.125l-3.191,23.366l-5.291,40.415	l-2.85,20.452l-1.556,10.11l11.744,1.511l0.982-7.613l12.649,1.965L216.206,328.977z'},
							Oregon: { name: 'Oregon', path: 'M108.016,135.75l3.265-13.598l3.543-13.582l0.798-3.213l1.788-4.271l-0.467-0.883l-1.911-0.035	l-0.974-1.269l0.348-1.112l0.382-2.467l3.387-4.168l1.389-0.835l0.868-0.868l1.129-2.709l3.074-4.307l2.708-2.934l0.174-2.622	l-2.483-1.875l-0.918-3.426l-10.056-2.845l-11.463-2.691l-11.723,0.087l-0.348-1.042l-4.168,1.563l-3.387-0.435l-1.824-1.216	l-0.955,0.521l-3.561-0.174l-1.303-1.042l-3.994-1.563l-0.607,0.086l-3.3-1.129l-1.476,1.39l-4.689-0.261L56.748,59.7l0.521-0.608	l0.173-5.906l-1.737-2.953l-3.126-0.434l-0.521-1.911l-1.788-0.354l-4.405,1.564l-1.719,4.912l-2.456,7.614l-2.456,4.912	l-3.807,10.686l-4.913,10.316l-6.14,9.579l-1.474,2.211l-0.614,6.508l-0.982,4.543l2.057,2.679l5.112,1.71l8.806,2.502l5.976,1.929	l9.431,2.761l10.125,2.727l10.003,2.708L108.016,135.75z'},
							NorthDakota: { name: 'North Dakota', path: 'M359.463,98.513l-0.277-5.694l-1.511-5.558l-1.39-10.369l-0.347-7.468l-1.512-2.361	l-1.215-4.065v-7.815l0.521-2.953l-1.606-4.177l-21.593-0.429l-14.123-0.491l-20.141-0.982l-18.951-1.432l-0.958,10.81	l-1.042,11.462l-1.716,18.951l-0.37,8.373l43.161,2.859L359.463,98.513z'},
							SouthDakota: { name: 'South Dakota', path: 'M360.596,155.878l-0.724-0.821l-1.155-2.755l1.389-2.812l0.798-4.22l-1.962-1.563	l-0.226-2.084l0.451-2.276l1.634-0.609l0.226-4.357l-0.052-22.855l-0.47-2.257l-3.126-2.728l-0.746-1.511v-1.459l1.441-0.972	l1.164-1.408l0.139-2.065l-43.592-1.215l-42.673-2.953l-0.583,4.01l-1.225,12.054l-1.022,13.634l-1.216,18.685l12.175,0.782	l14.918,0.868l13.668,0.99l18.062,0.991l8.163-0.591l2.172,1.737l3.281,2.258l0.747,0.573l2.69-0.677l3.074-0.226l2.084-0.052	l2.364,0.92l3.455,1.093l2.381,1.338l0.469,1.459l0.694,1.441l0.537-0.365H360.596z'},
							Nebraska: { name: 'Nebraska', path: 'M369.292,189.158l1.042,2.032l0.071,1.615l1.788,2.831l2.067,2.395h-3.836l-33.032-0.713	l-30.984-0.676l-16.097-0.73l0.814-16.202l-25.357-2.084l3.3-33.433l11.811,0.782l15.283,0.868l13.546,0.868l18.063,0.869	l8.163-0.348l1.563,1.737l3.648,2.258l0.869,0.695l3.3-1.042l2.953-0.348l2.083-0.174l1.39,1.042l3.82,1.216l2.258,1.215	l0.347,1.216l0.695,1.563h1.389l0.607,0.035l0.746,3.959l2.084,6.098l0.938,3.525l1.615,2.901l0.399,3.751l1.093,3.249l0.417,4.914'},
							Iowa: { name: 'Iowa', path: 'M431.85,154.698l0.129,1.475l1.738,0.866l0.867,0.955l0.261,0.958l2.953,2.433l0.522,1.651	l-0.608,2.174l-1.13,2.692l-0.607,2.083l-1.651,1.218l-1.303,0.435l-4.167,1.128l-0.522,1.734l-0.607,1.736l0.435,1.042l1.304,1.302	l-0.001,2.781l-1.648,1.216l-0.349,1.129v1.912l-1.131,0.347l-1.302,1.041l-0.346,1.128l0.346,1.304l-1.044,0.916l-1.743-2.044	l-1.127-1.995l-6.336,0.606l-7.727,0.434l-19.019,0.523l-9.902,0.174l-7.121,0.174l-0.999,0.093l-1.256-3.397l-0.174-5.036	l-1.216-3.126l-0.521-3.994l-1.737-2.779l-0.694-3.647l-2.084-5.731l-0.87-4.082l-1.042-1.65l-1.216-2.084l1.39-3.3l1.042-4.342	l-2.084-1.563l-0.347-2.084l0.694-1.91h1.303h8.77l37.688-0.521l15.1-0.521l1.407,2.086l1.392,1.992l0.346,0.61l-1.39,2.088	l0.346,3.208l1.911,2.952l2.255,1.386l1.828,0.175L431.85,154.698z'},
							Missouri: { name: 'Missouri', path: 'M423.642,191.085l-1.916-2.345l-0.868-1.737l-5.905,0.521l-7.468,0.347l-19.278,0.695	l-10.246,0.174l-5.993,0.087l-1.736,0.086l0.955,1.911l-0.174,1.737l1.911,2.952l2.345,3.126l2.344,2.083l1.737,0.174l1.042,0.695	v2.258l-1.389,1.216l-0.347,1.737l1.563,2.605l1.91,2.258l1.911,1.39l1.042,8.857l-0.521,26.834l0.174,3.56l0.347,4.09l17.801-0.089	l17.628-0.521l15.805-0.608l8.854-0.175l1.647,2.603l-0.519,2.512l-2.346,1.827l-0.435,1.396l4.086,0.347l2.959-0.522l1.305-4.173	l0.494-4.449l1.761-1.538l1.301-1.128l1.563-0.782l0.086-2.173l0.437-1.303l-0.784-1.328l-2.085,0.11l-1.648-1.994l-1.044-3.212	l0.61-1.914l-1.477-2.604l-1.391-3.475l-3.646-0.608l-5.294-4.253l-1.307-3.125l0.608-2.432l1.564-4.602l0.349-2.176l-1.481-0.783	l-5.207-0.606l-0.781-1.301l-0.084-3.213l-4.167-2.606l-5.3-5.903l-1.737-5.558l-0.174-3.209L423.642,191.085z'},
							Mississippi: { name: 'Mississippi', path: 'M475.884,356.268l-0.193,0.954h-3.93l-1.105-0.614l-1.596-0.246l-5.158,1.475l-1.351-0.615	l-1.965,3.193l-0.837,0.591l-0.853-1.89l-0.87-2.953l-2.605-2.431l0.869-5.731l-0.521-0.694l-1.39,0.174L448.126,348l-18.41,0.522	l-0.347-1.217l0.521-6.078l2.606-4.689l3.994-6.947l-0.694-1.563h0.869l0.521-2.432l-1.736-1.39l0.173-1.39l-1.563-3.473	l-0.217-4.06l1.042-2.019l-0.303-3.301l-1.042-2.258l1.042-1.042l-1.042-1.563l0.347-1.39l0.694-4.688l2.258-2.084l-0.522-1.563	l2.779-3.994l2.084-0.695v-1.911l-0.521-1.042l2.083-3.995l2.084-0.868l0.082-2.592l6.59-0.059l18.298-1.473l3.479-0.174l0.007,4.84	l0.122,12.649l-0.613,23.578l-0.123,10.685l2.087,14.246L475.884,356.268z'},
							Indiana: { name: 'Indiana', path: 'M471.221,230.077l0.049-2.172l0.368-3.438l1.72-2.211l1.35-2.947l1.964-3.193l-0.367-4.421	l-1.351-2.088l-0.246-2.456l0.614-4.175l-0.368-5.281l-0.983-12.158l-0.982-11.667l-0.737-8.903l2.333,0.676l1.105,0.736l0.86-0.245	l1.597-1.474l2.149-1.229l3.869-0.123l16.702-1.719l4.234-0.405l1.144,12.122l3.229,27.986l0.455,4.384l-0.282,1.719l0.934,1.364	l0.072,1.042l-1.915,1.216l-2.689,1.178l-2.432,0.418l-0.455,3.697l-3.476,2.516l-2.124,3.046l0.245,1.806l-0.441,1.165h-2.526	l-1.205-1.228l-1.894,0.958l-2.038,1.142l0.122,2.32l-0.906,0.196l-0.355-0.773l-1.646-1.142l-2.469,1.019l-1.179,2.284	l-1.093-0.615l-1.105-1.214l-3.392,0.367l-4.249,0.737L471.221,230.077z'},
							Illinois: { name: 'Illinois', path: 'M470.753,230.644v-2.738l0.196-3.697l1.807-2.383l1.35-2.861l1.965-2.935l-0.283-3.99	l-1.523-2.69l-0.074-2.542l0.528-4.003l-0.627-5.453l-0.81-11.986l-0.983-11.408l-0.7-8.842l-0.207-0.7l-0.615-1.965l-0.982-2.824	l-1.229-1.351l-1.104-1.965l-0.177-4.169l-7.523,0.997l-20.667,1.303l-6.6-0.326l0.174,1.802l1.737,0.521l0.695,0.868l0.347,1.39	l2.953,2.604l0.521,1.737l-0.521,2.605l-1.39,2.779l-0.521,1.911l-1.736,1.39l-1.39,0.521l-3.994,1.042l-0.521,1.389l-0.521,1.563	l0.521,1.042l1.389,1.215l-0.174,3.126l-1.389,1.216l-0.522,1.216v2.084l-1.389,0.347l-1.216,0.869l-0.173,1.042l0.173,1.563	l-1.303,0.998l-0.782,2.128l0.347,2.779l1.737,5.558l5.558,5.731l4.167,2.779l-0.173,3.3l0.694,1.042l4.862,0.347l2.084,1.042	l-0.521,2.779l-1.736,4.515l-0.521,2.432l1.736,2.952l4.863,3.995l3.473,0.521l1.563,3.821l1.564,2.431l-0.694,2.258l1.215,3.126	l1.389,1.563l1.477-0.601l0.521-1.644l1.548-1.093l2.458-0.836l2.346,0.896l2.185,0.81l0.601-0.16l-0.05-0.944l-0.81-2.1	l0.333-1.806l1.732-1.191l1.792-0.75l0.883-0.319l-0.442-1.005l-0.577-1.646l0.946-0.959L470.753,230.644z'},
							Minnesota: { name: 'Minnesota', path: 'M359.899,99.124l-0.347-6.426l-1.39-5.558l-1.389-10.247l-0.347-7.468l-1.39-2.605	l-1.216-3.821v-7.815l0.522-2.953l-1.383-4.142l22.891,0.026l0.246-6.263l0.49-0.124l1.72,0.369l1.473,0.614l0.615,4.176	l1.104,4.667l1.228,1.228h3.685l0.245,1.105l4.791,0.245v1.597h3.684l0.245-0.982l0.86-0.86l1.72-0.491l0.982,0.737h2.21	l2.948,1.965l4.053,1.842l1.843,0.369l0.367-0.737l1.105-0.369l0.369,2.211l1.965,0.982l0.367-0.369l0.982,0.124v1.597l1.966,0.737	h2.333l1.229-0.614l2.456-2.456l1.964-0.369l0.614,1.351l0.369,0.982h0.736l0.737-0.614l6.755-0.246l1.35,2.333h0.491l0.542-0.823	l3.372-0.282l-0.465,1.731l-2.992,1.396l-7.023,3.085l-3.627,1.524l-2.333,1.965l-1.842,2.702l-1.72,2.947l-1.351,0.615	l-3.438,3.806l-0.982,0.123l-2.918,2.229l-2.139,2.401l-0.174,2.256l0.173,5.908l-1.214,1.216l-3.995,3.125l-1.392,4.343	l1.914,2.771l0.348,1.914l-0.872,2.259l-0.173,2.78l0.348,5.381l2.603,3.12h2.26l1.907,1.742l2.433,1.037l2.78,3.825l5.384,3.816	l1.39,1.566l0.178,4.18l-15.64,0.521l-45.769,0.349l-0.257-27.102l-0.347-2.258l-3.126-2.605l-0.87-1.389v-1.216l1.564-1.216	l1.042-1.042L359.899,99.124z'},
							Wisconsin: { name: 'Wisconsin', path: 'M467.059,151.32l0.28-2.256l-1.227-3.439l-0.491-4.667l-0.86-1.842l0.736-2.333l0.615-2.211	l1.105-1.964l-0.492-2.579l-0.49-2.702l0.368-1.351l1.473-1.842l0.123-2.087l-0.615-0.982l0.491-1.964l0.368-2.456l2.087-4.298	l2.211-5.158l0.123-1.719l-0.246-0.737l-0.614,0.368l-3.193,4.79l-2.088,3.07l-1.473,1.351l-0.614,1.719l-1.105,0.614l-0.859,1.474	l-1.105-0.246l-0.123-1.351l0.983-1.842l1.597-3.562l1.35-1.228l0.837-1.741l-1.239-0.688l-1.042-1.042l-1.216-7.815l-2.779-0.869	l-1.042-1.737l-9.551-2.084l-1.912-0.868l-6.252-1.737l-6.251-0.868l-3.167-4.106l-0.401,0.958l-0.861-0.123l-0.49-0.86	l-2.087-0.614l-0.86,0.124l-1.351,0.736l-0.737-0.491l0.491-1.474l1.473-2.333l0.86-0.86l-1.473-1.105l-1.597,0.614l-2.211,1.474	l-5.649,2.457l-2.211,0.491l-2.21-0.369L411.7,84.29l-1.607,2.153l-0.174,2.084v6.426l-0.869,1.216l-3.994,2.952l-1.737,4.516	l0.347,0.174l1.91,1.563l0.521,2.431l-1.389,2.432v2.953l0.348,5.037l2.257,2.257h2.605l1.39,2.432l2.605,0.348l2.953,4.341	l5.384,3.126l1.562,2.084l0.695,5.645l0.521,2.518l1.737,1.216l0.174,1.042l-1.563,2.604l0.174,2.432l1.911,2.953l1.91,0.868	l2.257,0.348l1.021,1.048h6.969l19.801-1.13L467.059,151.32z'},
							Arkansas: { name: 'Arkansas', path: 'M450.354,263.576l-2.923,0.712l-4.689-0.347l0.522-2.258l2.431-2.083l0.347-1.737	l-1.389-2.258l-8.337,0.347l-15.805,0.695l-17.715,0.521l-17.714,0.348l1.216,5.21v6.252l1.042,8.335l0.174,28.744l1.736,1.477	l2.258-1.042l2.084,0.868l0.327,7.843l17.385-0.108l14.331-0.609l7.688-0.149l0.87-1.589l-0.217-2.696l-1.386-2.258l1.215-1.128	l-1.215-1.908l0.52-1.906l1.039-4.258l1.914-1.566l-0.521-1.736l2.778-4.081l2.084-1.04l-0.086-1.135l-0.262-1.386l2.17-4.253	l1.826-0.955l0.292-2.604l1.345-0.942l0.651-3.216l-1.019-3.047l3.07-1.805l0.418-1.534l0.938-3.243L450.354,263.576z'},
							Oklahoma: { name: 'Oklahoma', path: 'M286.564,246.573l-8.119-0.347l-4.886-0.369l0.196,0.151l-0.535,7.917l16.687,1.069	l24.352,0.991l-1.774,18.55l-0.347,13.547l0.174,1.215l3.3,2.779l1.563,0.869l0.522-0.174l0.521-1.562l1.042,1.389h1.564v-1.042	l2.083,1.042l-0.346,2.953l3.125,0.174l1.911,0.869l3.125,0.521l1.911,1.391l1.737-1.564l2.605,0.522l1.91,2.604h0.694v1.737	l1.737,0.521l1.737-1.737l1.389,0.522h1.911l0.694,1.91l3.647,1.39l1.042-0.521l1.39-3.125h0.869l0.869,1.562l3.126,0.521	l2.779,1.042l2.258,0.695l1.389-0.695l0.521-1.911h3.3l1.563,0.694l2.085-1.562h0.868l0.522,1.216h3.126l1.215-1.562l1.39,0.347	l1.563,1.91l2.432,1.39l2.431,0.694l1.475,0.851l-0.296-28.273l-1.042-8.337l-0.123-6.74l-1.093-4.967l-0.591-5.454l-0.051-2.899	l-9.22,0.243l-35.256-0.347l-34.213-1.563L286.564,246.573z'},
							Kansas: { name: 'Kansas', path: 'M383.83,248.518l-9.585,0.155l-35.013-0.348l-33.848-1.562l-18.71-0.955l3.147-49.166	l16.586,0.608l30.74,1.042l33.52,0.347h3.872l2.467,2.45l2.103,0.174l0.676,0.817v1.526l-1.389,1.216l-0.347,1.98l1.686,2.727	l1.91,2.38l1.91,1.511l0.799,8.492L383.83,248.518z'},
							Louisiana: { name: 'Louisiana', path: 'M458.9,360.845l-0.782-1.987l-0.869-2.35l-2.519-2.689l0.696-5.128l-0.09-0.867l-0.958,0.26	l-6.252,0.693l-19.013,0.349l-0.521-1.819l0.694-6.424l2.519-4.516l3.822-6.603l-0.435-1.822l0.954-0.518l0.349-1.482l-1.736-1.562	l-0.084-1.476l-1.391-3.302l-0.346-4.513l-7.388,0.086l-14.589,0.694l-16.868,0.022l0.022,7.272l0.521,7.12l0.521,2.953l1.911,3.126	l0.694,3.82l3.3,4.168l0.174,2.432l0.522,0.521l-0.522,6.426l-2.258,3.82l1.216,1.563l-0.521,1.91l-0.521,5.558l-1.042,2.432	l0.093,2.747l3.561-1.155l6.14-0.245l7.859,2.702l4.913,0.859l2.824-1.105l2.456,0.86l2.457,0.737l0.614-1.598l-2.457-0.859	l-1.965,0.368l-2.088-1.229c0,0,0.123-0.981,0.615-1.105c0.49-0.122,2.333-0.736,2.333-0.736l1.35,1.105l1.351-0.737l2.456,0.491	l1.104,1.842l0.247,1.72l3.438,0.245l1.35,1.352l-0.614,1.228l-0.982,0.614l1.228,1.228l6.385,2.702l2.703-0.982l0.736-1.842	l1.965-0.492l1.351-1.104l0.982,0.736l0.614,2.211l-1.72,0.613l0.491,0.491l2.58-0.982l1.719-2.579l0.615-0.369l-1.598-0.244	l0.615-1.228l-0.123-1.105l1.596-0.369l0.861-0.982l0.49,0.614c0,0-0.123,2.333,0.491,2.333c0.614,0,3.192,0.491,3.192,0.491	l3.07,1.473l0.737,1.105h2.211l0.86,0.738l1.719-2.334v-1.105h-0.982l-2.58-2.087l-4.42-0.614l-2.457-1.72l0.86-2.088l1.721,0.245	l0.122-0.49l-1.351-0.738v-0.367h2.456l1.35-2.333l-0.982-1.473l-0.246-2.088l-1.105,0.121l-1.473,1.598l-0.491,1.965l-2.333-0.491	l-0.738-1.35l1.351-1.475l1.536-1.349L458.9,360.845z'},
							Virginia: { name: "Virginia", path: 'M631.119,206.065l-0.11-1.479l4.902-1.937l-0.585,2.444l-2.219,2.871l-0.317,3.484	l0.351,2.576l-1.389,3.781l-1.644,1.456l-1.117-3.525l0.338-4.14l1.206-3.178L631.119,206.065z M632.852,227.563l-44.193,9.554	l-28.432,4.009l-5.074-0.285l-1.964,1.464l-5.574,0.168l-6.368,0.743l-6.781,0.723l6.441-3.76l-0.01-1.575l1.155-1.63l8.017-8.738	l2.999,3.402l2.874,0.731l1.932-0.867l1.699-0.996l1.927,1.021l2.974-1.085l1.426-3.462l1.977,0.411l2.168-1.619l1.366,0.375	l2.148-2.792l0.266-1.583l-0.732-0.969l0.762-1.418l4.006-9.326l0.468-4.356l0.934-0.397l1.655,1.856l2.99-0.229l1.466-5.753	l2.123-0.426l0.797-2.082l1.96-1.783l0.963-1.779l1.143-2.547l0.064-3.85l7.462,2.904c0.517,0.258,0.498-3.634,0.498-3.634	l3.077,1.046l-0.352,1.997l6.196,2.233l0.982,1.363l-0.659,2.797l-0.96,1.007l-0.385,1.326l0.375,1.826l1.488,0.971l2.977,1.098	l2.24,0.735l3.688,0.716l1.636,1.586l2.423,0.306l0.659,0.912l-0.334,3.562l1.044,0.838l-0.363,1.467l0.933,0.6l-0.168,1.052	l-2.047-0.072l0.068,1.228l1.732,1.172l0.092,1.073l1.348,1.357l0.373,1.917l-1.94,1.049l1.194,1.135l4.407-1.281L632.852,227.563z'},
							DistrictofColumbia: { name: 'District of Columbia', path: 'M 611.102022,195.1688881 L 609.695081,192.7877726 L 608.7618322,192.2681687 L 609.8543639,190.7369162 L 612.0417518,192.2121645 L 611.102022,194.1688881 z' }
						} // end stateObject
						
						return stateObject;
						
					} // end getStates
					
				}; // end nav object
			
				nav.init();
			} // end if {home}
		} // end mymap.initGraphic

		mymap.initGraphic();
		$('#find_college_link').unbind('click').click(function(e){
			e.preventDefault();
			$('#search_text').focus();
		});
		setSearchHeaderWidth();
		
		/** setSearchHeaderWidth 
			This is an IE7 hack.
			
			The width of the table cell containing the search box is set to auto, and it gets dynamically set based on the variable width of the button containing the user's home state.
			In IE7, the search table cell width changes at weird times after page load, such as on focus. This means the search field expands and contracts for no reason.
			This hack explicitly sets the initially calculated width of the header table cell as an inline style so IE can't mysteriously reset it.   
		*/
		function setSearchHeaderWidth(){
			var $browser = $.browser;
			if ($browser.msie && (parseInt($browser.version, 10) === 7)) { // check for ie7
				if ($('#user_location').not('.loading')) { // don't attempt this hack if the user's home state hasn't rendered yet 
					var $searchHeaderCell = $('.search_option'),
						searchCellWidth = $searchHeaderCell.width();

					$searchHeaderCell.css('width', searchCellWidth);
				}
			}
		}
		
		// get college search data
		function getCollegeSearchData() {
			mymap.getData({
				name: 'collegeSearchData',
				table: 'gatesInst1',
				url: 'fields/unitid|chronname|nicknames|grad_150_value|cohort_size/order/student_count:dsc',
				success: recordSearchData
			});
		}
		
		// get state search data
		function getStateSearchData () {
			mymap.getData({
				name: 'stateSearchData',
				table: 'gatesSS1',
				url: 'fields/state|state_abbr/find/stateid:00:neq|level:4-year:eq|control:public:eq/',
				success: recordStateData
			});
		}
		
			// runs first
			function recordStateData(json){
				var results = mymap.search.items;
			
				$.each(json, function(i, item) {
					var resultObject = {
						name: item.state,
						nickname: item.state_abbr,
						value: item.state_abbr,
						type: "state"
					};
					
					if (item.state === 'District of Columbia') {
						resultObject.nickname = 'washington dc';
					}
					
					results.push(resultObject);
				});
			
				getCollegeSearchData();
			}
		
			// chained: runs after successful getStateSearchData
			function recordSearchData(json){
				var results = mymap.search.items;
				 $.each(json, function(i, item) {
					var resultObject = {
						name:item.chronname,
						nickname:item.nicknames,
						value: item.unitid,
						type: "institution",
						rate: item.grad_150_value,
						size: item.cohort_size
					};
					results.push(resultObject);
				});
				var $customChooser = $('#custom_chooser');
				if (($customChooser.length > 0) && dataExpress) {
					dataExpress.customsearch();
				}
				// log(results);
				loadSearchBar();
			}
			
				// load search bar after getting search data
				function loadSearchBar () {
					var results = mymap.search.items,
						isIE7 = $('html').hasClass('ie7'),
						$siteHeader = $('#site_header_container');

					$('#search_text').unbind('focus blur').fadeTo(100, 1).autoSuggest(results, { 
						selectedItemProp: "name", 
						searchObjProps: "name, nickname",
						minChars: 3, 
						retrieveLimit: 6, 
						neverSubmit: true,
						resultClick: function(data){
							$(this).removeClass('focused').attr('disabled', 'disabled');
							search_changeUrl(data.attributes.value, data.attributes.type);
						}
					}).bind('focus', function() {
						$(this).addClass('focused');
						if (isIE7) {
							$siteHeader.css({'z-index': '5'}); // z-index hack to get both search results and slide 3 of the home graphic to appear at front
						}
					}).bind('blur', function() {
						$(this).removeClass('focused');
						if (isIE7) {
							$siteHeader.css({'z-index': '3'});
						}
					});
				}
			
				function search_changeUrl(id, type) {
					var destination;

					if (type === "state") {
						destination = "/state/#state=" + id;
					} else {
						destination = "/institution/#id=" + id;
					}
					_gaq.push(['_trackEvent', 'searchselect', destination]);
					window.location = destination;
				}
		
		getStateSearchData();
		
 	}); // end doc.ready


/* 
 * To Title Case 2.0.1 – http://individed.com/code/to-title-case/
 * Copyright © 2008–2012 David Gouch. Licensed under the MIT License. 
 */

String.prototype.toTitleCase = function () {
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\.?|via)$/i;

  return this.replace(/([^\W_]+[^\s-]*) */g, function (match, p1, index, title) {
    if (index > 0 && index + p1.length !== title.length &&
      p1.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && 
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (p1.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

String.prototype.addCommas = function()
{
	
	var nStr = this;
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	
	return x1 + x2;
};
