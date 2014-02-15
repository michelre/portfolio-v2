define(function(){var a=new function(){function k(w){return w.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function u(w){return w.nodeName.toLowerCase()}function i(x,y){var w=x&&x.exec(y);return w&&w.index==0}function s(x){var w=(x.className+" "+(x.parentNode?x.parentNode.className:"")).split(/\s+/);w=w.map(function(y){return y.replace(/^lang(uage)?-/,"")});return w.filter(function(y){return j(y)||y=="no-highlight"})[0]}function p(y,z){var w={};for(var x in y){w[x]=y[x]}if(z){for(var x in z){w[x]=z[x]}}return w}function v(y){var w=[];(function x(z,A){for(var B=z.firstChild;B;B=B.nextSibling){if(B.nodeType==3){A+=B.nodeValue.length}else{if(u(B)=="br"){A+=1}else{if(B.nodeType==1){w.push({event:"start",offset:A,node:B});A=x(B,A);w.push({event:"stop",offset:A,node:B})}}}}return A})(y,0);return w}function r(x,z,D){var y=0;var G="";var A=[];function C(){if(!x.length||!z.length){return x.length?x:z}if(x[0].offset!=z[0].offset){return(x[0].offset<z[0].offset)?x:z}return z[0].event=="start"?x:z}function B(I){function H(J){return" "+J.nodeName+'="'+k(J.value)+'"'}G+="<"+u(I)+Array.prototype.map.call(I.attributes,H).join("")+">"}function F(H){G+="</"+u(H)+">"}function w(H){(H.event=="start"?B:F)(H.node)}while(x.length||z.length){var E=C();G+=k(D.substr(y,E[0].offset-y));y=E[0].offset;if(E==x){A.reverse().forEach(F);do{w(E.splice(0,1)[0]);E=C()}while(E==x&&E.length&&E[0].offset==y);A.reverse().forEach(B)}else{if(E[0].event=="start"){A.push(E[0].node)}else{A.pop()}w(E.splice(0,1)[0])}}return G+k(D.substr(y))}function n(z){function w(A){return(A&&A.source)||A}function x(B,A){return RegExp(w(B),"m"+(z.cI?"i":"")+(A?"g":""))}function y(E,D){if(E.compiled){return}E.compiled=true;E.k=E.k||E.bK;if(E.k){var A={};function F(H,G){if(z.cI){G=G.toLowerCase()}G.split(" ").forEach(function(I){var J=I.split("|");A[J[0]]=[H,J[1]?Number(J[1]):1]})}if(typeof E.k=="string"){F("keyword",E.k)}else{Object.keys(E.k).forEach(function(G){F(G,E.k[G])})}E.k=A}E.lR=x(E.l||/\b[A-Za-z0-9_]+\b/,true);if(D){if(E.bK){E.b="\\b("+E.bK.split(" ").join("|")+")\\b"}if(!E.b){E.b=/\B|\b/}E.bR=x(E.b);if(!E.e&&!E.eW){E.e=/\B|\b/}if(E.e){E.eR=x(E.e)}E.tE=w(E.e)||"";if(E.eW&&D.tE){E.tE+=(E.e?"|":"")+D.tE}}if(E.i){E.iR=x(E.i)}if(E.r===undefined){E.r=1}if(!E.c){E.c=[]}var C=[];E.c.forEach(function(G){if(G.v){G.v.forEach(function(H){C.push(p(G,H))})}else{C.push(G=="self"?E:G)}});E.c=C;E.c.forEach(function(G){y(G,E)});if(E.starts){y(E.starts,D)}var B=E.c.map(function(G){return G.bK?"\\.?("+G.b+")\\.?":G.b}).concat([E.tE,E.i]).map(w).filter(Boolean);E.t=B.length?x(B.join("|"),true):{exec:function(G){return null}};E.continuation={}}y(z)}function d(T,M,K,S){function w(V,W){for(var U=0;U<W.c.length;U++){if(i(W.c[U].bR,V)){return W.c[U]}}}function A(V,U){if(i(V.eR,U)){return V}if(V.eW){return A(V.parent,U)}}function B(U,V){return !K&&i(V.iR,U)}function F(W,U){var V=N.cI?U[0].toLowerCase():U[0];return W.k.hasOwnProperty(V)&&W.k[V]}function x(aa,Y,X,W){var U=W?"":c.classPrefix,V='<span class="'+U,Z=X?"":"</span>";V+=aa+'">';return V+Y+Z}function O(){if(!J.k){return k(D)}var U="";var X=0;J.lR.lastIndex=0;var V=J.lR.exec(D);while(V){U+=k(D.substr(X,V.index-X));var W=F(J,V);if(W){I+=W[1];U+=x(W[0],k(V[0]))}else{U+=k(V[0])}X=J.lR.lastIndex;V=J.lR.exec(D)}return U+k(D.substr(X))}function G(){if(J.sL&&!g[J.sL]){return k(D)}var U=J.sL?d(J.sL,D,true,J.continuation.top):f(D);if(J.r>0){I+=U.r}if(J.subLanguageMode=="continuous"){J.continuation.top=U.top}return x(U.language,U.value,false,true)}function R(){return J.sL!==undefined?G():O()}function Q(W,V){var U=W.cN?x(W.cN,"",true):"";if(W.rB){E+=U;D=""}else{if(W.eB){E+=k(V)+U;D=""}else{E+=U;D=V}}J=Object.create(W,{parent:{value:J}})}function H(U,Y){D+=U;if(Y===undefined){E+=R();return 0}var W=w(Y,J);if(W){E+=R();Q(W,Y);return W.rB?0:Y.length}var X=A(J,Y);if(X){var V=J;if(!(V.rE||V.eE)){D+=Y}E+=R();do{if(J.cN){E+="</span>"}I+=J.r;J=J.parent}while(J!=X.parent);if(V.eE){E+=k(Y)}D="";if(X.starts){Q(X.starts,"")}return V.rE?0:Y.length}if(B(Y,J)){throw new Error('Illegal lexeme "'+Y+'" for mode "'+(J.cN||"<unnamed>")+'"')}D+=Y;return Y.length||1}var N=j(T);if(!N){throw new Error('Unknown language: "'+T+'"')}n(N);var J=S||N;var E="";for(var L=J;L!=N;L=L.parent){if(L.cN){E+=x(L.cN,E,true)}}var D="";var I=0;try{var C,z,y=0;while(true){J.t.lastIndex=y;C=J.t.exec(M);if(!C){break}z=H(M.substr(y,C.index-y),C[0]);y=C.index+z}H(M.substr(y));for(var L=J;L.parent;L=L.parent){if(L.cN){E+="</span>"}}return{r:I,value:E,language:T,top:J}}catch(P){if(P.message.indexOf("Illegal")!=-1){return{r:0,value:k(M)}}else{throw P}}}function f(z,y){y=y||c.languages||Object.keys(g);var w={r:0,value:k(z)};var x=w;y.forEach(function(A){if(!j(A)){return}var B=d(A,z,false);B.language=A;if(B.r>x.r){x=B}if(B.r>w.r){x=w;w=B}});if(x.language){w.second_best=x}return w}function h(w){if(c.tabReplace){w=w.replace(/^((<[^>]+>|\t)+)/gm,function(x,A,z,y){return A.replace(/\t/g,c.tabReplace)})}if(c.useBR){w=w.replace(/\n/g,"<br>")}return w}function q(A){var z=c.useBR?A.innerHTML.replace(/\n/g,"").replace(/<br>|<br [^>]*>/g,"\n").replace(/<[^>]*>/g,""):A.textContent;var B=s(A);if(B=="no-highlight"){return}var w=B?d(B,z,true):f(z);var x=v(A);if(x.length){var y=document.createElementNS("http://www.w3.org/1999/xhtml","pre");y.innerHTML=w.value;w.value=r(x,v(y),z)}w.value=h(w.value);A.innerHTML=w.value;A.className+=" hljs "+(!B&&w.language||"");A.result={language:w.language,re:w.r};if(w.second_best){A.second_best={language:w.second_best.language,re:w.second_best.r}}}var c={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function t(w){c=p(c,w)}function m(){if(m.called){return}m.called=true;var w=document.querySelectorAll("pre code");Array.prototype.forEach.call(w,q)}function b(){addEventListener("DOMContentLoaded",m,false);addEventListener("load",m,false)}var g={};var o={};function e(w,y){var x=g[w]=y(this);if(x.aliases){x.aliases.forEach(function(z){o[z]=w})}}function l(){return Object.keys(g)}function j(w){return g[w]||g[o[w]]}this.highlight=d;this.highlightAuto=f;this.fixMarkup=h;this.highlightBlock=q;this.configure=t;this.initHighlighting=m;this.initHighlightingOnLoad=b;this.registerLanguage=e;this.listLanguages=l;this.getLanguage=j;this.inherit=p;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/};this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]};this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]};this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0};this.RM={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}}();a.registerLanguage("bash",function(c){var b={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]};var e={cN:"string",b:/"/,e:/"/,c:[c.BE,b,{cN:"variable",b:/\$\(/,e:/\)/,c:[c.BE]}]};var d={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[c.inherit(c.TM,{b:/\w[\w\d_]*/})],r:0},c.HCM,c.NM,e,d,b]}});a.registerLanguage("css",function(b){var c="[a-zA-Z-][a-zA-Z0-9_-]*";var d={cN:"function",b:c+"\\(",rB:true,eE:true,e:"\\("};return{cI:true,i:"[=/|']",c:[b.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[d,b.ASM,b.QSM,b.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[b.CBCM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[d,b.CSSNM,b.QSM,b.ASM,b.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});a.registerLanguage("javascript",function(b){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},b.ASM,b.QSM,b.CLCM,b.CBCM,b.CNM,{b:"("+b.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[b.CLCM,b.CBCM,b.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:true,c:[b.inherit(b.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[b.CLCM,b.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+b.IR,r:0}]}});a.registerLanguage("xml",function(b){var d="[A-Za-z0-9\\._:-]+";var e={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var c={eW:true,i:/</,r:0,c:[e,{cN:"attribute",b:d,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:true,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},e,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},c]}]}});return a});