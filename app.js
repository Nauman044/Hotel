// ===================================================================
// USER CONFIGURATION REQUIRED
// Paste the Web app URL of your AUTH script here (it ends in /exec).
// ===================================================================
window.HOTEL_POS_API_URL = 'https://script.google.com/macros/s/AKfycbzdGYG9ozH7SOgM1Ymwn4Z_ZAaW22dPzoNWjzYdlC6i36h681Q2fW-oWMqIioYu9JAC/exec';

/* QR Code Generator for JavaScript - Copyright (c) 2009 Kazuhiko Arase - MIT license (https://github.com/kazuhikoarase/qrcode-generator) */
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},window.__qrcode=qrcode;

(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // web/js/local-db.js
  // Device storage (IndexedDB). Everything the hotel works with is kept on this PC/laptop:
  // menu, tables, open orders, reports already opened, and changes still waiting to be sent.
  // The app reads from here instantly and the Google Sheet is updated in the background.
  // An in-memory mirror keeps reads synchronous; every write goes to IndexedDB straight away.
  var LDB = (() => {
    const DB_NAME = "hotelpos-local", OS = "kv";
    const mem = /* @__PURE__ */ new Map();
    let db = null;
    const pending = /* @__PURE__ */ new Map();
    let flushT = null;
    function openDb() {
      return new Promise((resolve) => {
        try {
          if (!window.indexedDB) return resolve(null);
          const req = indexedDB.open(DB_NAME, 1);
          req.onupgradeneeded = () => {
            if (!req.result.objectStoreNames.contains(OS)) req.result.createObjectStore(OS);
          };
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => resolve(null);
          req.onblocked = () => resolve(null);
        } catch (e) {
          resolve(null);
        }
      });
    }
    function loadAll() {
      return new Promise((resolve) => {
        if (!db) return resolve();
        try {
          const tx = db.transaction(OS, "readonly");
          const st = tx.objectStore(OS);
          const req = st.openCursor();
          req.onsuccess = () => {
            const c = req.result;
            if (c) {
              mem.set(String(c.key), c.value);
              c.continue();
            } else resolve();
          };
          req.onerror = () => resolve();
        } catch (e) {
          resolve();
        }
      });
    }
    function writeNow() {
      flushT = null;
      if (!db || !pending.size) return;
      const items = Array.from(pending.entries());
      pending.clear();
      try {
        const tx = db.transaction(OS, "readwrite");
        const st = tx.objectStore(OS);
        items.forEach(([k, v]) => v === void 0 ? st.delete(k) : st.put(v, k));
      } catch (e) {
        console.warn("Local save failed", e);
      }
    }
    function schedule(k, v, now) {
      pending.set(k, v);
      if (now) {
        clearTimeout(flushT);
        writeNow();
      } else if (!flushT) flushT = setTimeout(writeNow, 300);
    }
    const ready = (async () => {
      db = await openDb();
      await loadAll();
      // One-time move of older data that this app kept in localStorage.
      ["hotelpos.boot", "hotelpos.queue"].forEach((k) => {
        try {
          const raw2 = localStorage.getItem(k);
          if (raw2 && !mem.has(k)) {
            const v = JSON.parse(raw2);
            mem.set(k, v);
            schedule(k, v, true);
          }
          if (raw2 && db) localStorage.removeItem(k);
        } catch (e) {
        }
      });
      // Ask the browser not to clear this hotel's data when the disk gets full.
      try {
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {
        });
      } catch (e) {
      }
    })();
    window.addEventListener("pagehide", writeNow);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) writeNow();
    });
    return {
      ready,
      available: () => !!db,
      get(k, def) {
        return mem.has(k) ? mem.get(k) : def;
      },
      /* now=true writes to disk immediately (used for unsent changes). */
      set(k, v, now) {
        mem.set(k, v);
        if (db) schedule(k, v, now);
        else try {
          localStorage.setItem(k, JSON.stringify(v));
        } catch (e) {
        }
      },
      del(k) {
        mem.delete(k);
        if (db) schedule(k, void 0, true);
        else try {
          localStorage.removeItem(k);
        } catch (e) {
        }
      },
      keys: () => Array.from(mem.keys()),
      fallbackGet(k) {
        try {
          return JSON.parse(localStorage.getItem(k) || "null");
        } catch (e) {
          return null;
        }
      }
    };
  })();

  // web/js/store.js
  var store_exports = {};
  __export(store_exports, {
    store: () => store
  });
  function read(storage, key) {
    try {
      const raw2 = storage.getItem(key);
      if (!raw2) return null;
      const v = JSON.parse(raw2);
      if (!v || !v.token || v.expiresAt && v.expiresAt * 1e3 < Date.now()) {
        storage.removeItem(key);
        return null;
      }
      return v;
    } catch (e) {
      return null;
    }
  }
  var OWNER_KEY, ADMIN_KEY, APP_KEY, CACHE_KEY, USER_KEY, store;
  var init_store = __esm({
    "web/js/store.js"() {
      OWNER_KEY = "hotelpos.owner";
      ADMIN_KEY = "hotelpos.admin";
      APP_KEY = "hotelpos.app";
      CACHE_KEY = "hotelpos.boot";
      USER_KEY = "hotelpos.lastUsername";
      store = {
        getOwner() {
          return read(sessionStorage, OWNER_KEY) || read(localStorage, OWNER_KEY);
        },
        setOwner(session2, remember) {
          this.clearOwner();
          const target = remember ? localStorage : sessionStorage;
          try {
            target.setItem(OWNER_KEY, JSON.stringify({ token: session2.token, expiresAt: session2.expiresAt, remember: !!remember }));
          } catch (e) {
          }
        },
        replaceOwnerToken(session2) {
          const cur = this.getOwner();
          this.setOwner(session2, cur ? cur.remember : false);
        },
        clearOwner() {
          try {
            sessionStorage.removeItem(OWNER_KEY);
            localStorage.removeItem(OWNER_KEY);
          } catch (e) {
          }
        },
        /* Hotel app session: { kind:'owner'|'staff', token (hotel script token), url, expiresAt, hotelName } */
        getApp() {
          return read(sessionStorage, APP_KEY) || read(localStorage, APP_KEY);
        },
        setApp(app, remember) {
          this.clearApp();
          try {
            (remember ? localStorage : sessionStorage).setItem(APP_KEY, JSON.stringify(Object.assign({}, app, { remember: !!remember })));
          } catch (e) {
          }
        },
        clearApp() {
          try {
            sessionStorage.removeItem(APP_KEY);
            localStorage.removeItem(APP_KEY);
            localStorage.removeItem(CACHE_KEY);
          } catch (e) {
          }
        },
        /* Sign-out: remove this hotel's copy from the device. (The Google Sheet keeps everything.) */
        clearLocal() {
          LDB.del(CACHE_KEY);
          LDB.keys().filter((k) => /^hotelpos\.(memo|docs|live):/.test(k)).forEach((k) => LDB.del(k));
        },
        /* Last known hotel data, kept on this device (IndexedDB): the app paints from it instantly
           on every open while fresh data loads from the Google Sheet in the background. */
        getBoot() {
          const v = LDB.get(CACHE_KEY);
          return v !== void 0 ? v : LDB.available() ? null : LDB.fallbackGet(CACHE_KEY);
        },
        setBoot(b) {
          LDB.set(CACHE_KEY, b);
        },
        /* Lists already opened (orders, customers, reports, dashboard) per signed-in user. */
        getMemo(key) {
          return key ? LDB.get("hotelpos.memo:" + key, null) : null;
        },
        setMemo(key, m) {
          if (key) LDB.set("hotelpos.memo:" + key, m);
        },
        getAdmin() {
          return read(sessionStorage, ADMIN_KEY);
        },
        setAdmin(session2) {
          try {
            sessionStorage.setItem(ADMIN_KEY, JSON.stringify({ token: session2.token, expiresAt: session2.expiresAt }));
          } catch (e) {
          }
        },
        clearAdmin() {
          try {
            sessionStorage.removeItem(ADMIN_KEY);
          } catch (e) {
          }
        },
        getLastUsername() {
          try {
            return localStorage.getItem(USER_KEY) || "";
          } catch (e) {
            return "";
          }
        },
        setLastUsername(u) {
          try {
            localStorage.setItem(USER_KEY, u);
          } catch (e) {
          }
        }
      };
    }
  });

  // web/js/app.js
  init_store();

  // web/js/ui.js
  var uid = 0;
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === void 0 || v === false) continue;
        if (k === "class") el.className = v;
        else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v === true) el.setAttribute(k, "");
        else el.setAttribute(k, v);
      }
    }
    kids.flat(Infinity).forEach((c) => {
      if (c === null || c === void 0 || c === false) return;
      el.append(c.nodeType ? c : document.createTextNode(String(c)));
    });
    return el;
  }
  function mount(root2, ...nodes) {
    root2.replaceChildren(...nodes.flat().filter(Boolean));
  }
  function field(opts) {
    const id = "f" + ++uid;
    const { label, name, type = "text", hint, value = "", placeholder, autocomplete, maxlength, inputmode, readonly, options } = opts;
    let input;
    if (options) {
      input = h("select", { id, name }, options.map((o) => h("option", { value: o.value }, o.label)));
      input.value = value;
    } else if (type === "textarea") {
      input = h("textarea", { id, name, maxlength, placeholder }, value);
    } else {
      input = h("input", { id, name, type, placeholder, autocomplete, maxlength, inputmode, readonly: readonly || null, spellcheck: "false" });
      input.value = value;
    }
    const err = h("div", { class: "error", id: id + "-e", role: "alert" });
    const el = h(
      "div",
      { class: "field" },
      h("label", { for: id }, label),
      input,
      hint ? h("div", { class: "hint", id: id + "-h" }, hint) : null,
      err
    );
    input.setAttribute("aria-describedby", id + "-e" + (hint ? " " + id + "-h" : ""));
    return {
      el,
      input,
      value: () => (input.value || "").trim(),
      raw: () => input.value || "",
      setError(msg) {
        err.textContent = msg;
        el.classList.add("invalid");
        input.setAttribute("aria-invalid", "true");
      },
      clear() {
        err.textContent = "";
        el.classList.remove("invalid");
        input.removeAttribute("aria-invalid");
      }
    };
  }
  var busyKids = /* @__PURE__ */ new WeakMap();
  function setBusy(btn, busy, busyLabel) {
    if (busy) {
      btn.dataset.label = btn.textContent;
      if (!busyKids.has(btn)) busyKids.set(btn, Array.from(btn.childNodes));
      btn.disabled = true;
      btn.classList.add("is-busy");
      if (busyLabel) btn.textContent = busyLabel;
    } else {
      btn.disabled = false;
      btn.classList.remove("is-busy");
      const kids = busyKids.get(btn);
      busyKids.delete(btn);
      if (kids) btn.replaceChildren(...kids);
      else if (btn.dataset.label) btn.textContent = btn.dataset.label;
    }
  }
  function formError(msg) {
    return h("div", { class: "form-error", role: "alert" }, msg);
  }
  var toastBox;
  function toast(message, kind = "info", ms = 4200) {
    if (!toastBox) {
      toastBox = h("div", { class: "toasts", "aria-live": "polite" });
      document.body.append(toastBox);
    }
    const t = h("div", { class: "toast " + kind }, message);
    toastBox.append(t);
    setTimeout(() => t.remove(), ms);
  }
  async function copyText(text, label = "Copied") {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = h("textarea", { style: "position:fixed;opacity:0" }, text);
      document.body.append(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (e2) {
        ta.remove();
        toast("Could not copy. Select the text and copy it manually.", "error");
        return;
      }
      ta.remove();
    }
    toast(label, "ok", 1800);
  }
  function copyButton(text, label = "Copy", done = "Copied", small = true) {
    return h("button", { class: "btn" + (small ? " btn-small" : ""), type: "button", onclick: () => copyText(text, done) }, label);
  }
  function openModal({ title, content, actions, drawer = false, onClose }) {
    const previous = document.activeElement;
    const scrim = h("div", { class: "scrim" + (drawer ? "" : " center"), role: "presentation" });
    const box = h("div", { class: drawer ? "drawer" : "modal", role: "dialog", "aria-modal": "true", "aria-label": title });
    const api = {
      box,
      scrim,
      close() {
        document.removeEventListener("keydown", onKey);
        scrim.remove();
        if (previous && previous.focus) previous.focus();
        if (onClose) onClose();
      }
    };
    function onKey(e) {
      if (e.key === "Escape") api.close();
    }
    scrim.addEventListener("mousedown", (e) => {
      if (e.target === scrim) api.close();
    });
    document.addEventListener("keydown", onKey);
    if (!drawer) {
      box.append(...[
        h("header", null, h("h2", null, title)),
        h("div", { class: "content" }, content),
        actions ? h("footer", null, actions(api)) : null
      ].filter(Boolean));
    }
    scrim.append(box);
    document.body.append(scrim);
    const first2 = box.querySelector("input:not([readonly]), select, textarea, button");
    if (first2) first2.focus();
    return api;
  }
  function confirmDialog(title, message, confirmLabel = "Confirm", danger = false) {
    return new Promise((resolve) => {
      let settled = false;
      const done = (v) => {
        if (!settled) {
          settled = true;
          resolve(v);
        }
      };
      openModal({
        title,
        content: h("p", null, message),
        onClose: () => done(false),
        actions: (m) => [
          h("button", { class: "btn", type: "button", onclick: () => {
            done(false);
            m.close();
          } }, "Cancel"),
          h("button", { class: "btn " + (danger ? "btn-danger" : "btn-primary"), type: "button", onclick: () => {
            done(true);
            m.close();
          } }, confirmLabel)
        ]
      });
    });
  }
  function stateLabel(state) {
    return { ACTIVE: "Active", PENDING: "Awaiting activation", SUSPENDED: "Suspended", EXPIRED: "Expired", NOT_SET: "No expiry set" }[state] || state;
  }
  function pill(state) {
    return h("span", { class: "pill " + state }, stateLabel(state));
  }
  function daysText(n) {
    if (n === null || n === void 0) return "";
    if (n < 0) return Math.abs(n) === 1 ? "expired 1 day ago" : "expired " + Math.abs(n) + " days ago";
    if (n === 0) return "last day";
    return n === 1 ? "1 day left" : n + " days left";
  }
  function fmtStamp(v) {
    const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}:\d{2})/.exec(v || "");
    return m ? m[3] + "/" + m[2] + "/" + m[1] + " " + m[4] : v || "";
  }
  var spinner = (cls = "") => h("span", { class: "spin " + cls, "aria-hidden": "true" });
  var tickIcon = () => h("span", { class: "tick", "aria-hidden": "true" }, "\u2713");
  var loadingBlock = (text = "Loading\u2026") => h("div", { class: "loading-block" }, spinner("big"), h("div", null, text));
  function errText(err) {
    return err && err.message ? err.message : "Something went wrong. Please try again.";
  }
  async function act(btn, fn, opts = {}) {
    const kids = Array.from(btn.childNodes);
    const wasDisabled = btn.disabled;
    btn.disabled = true;
    btn.classList.add("busy");
    btn.replaceChildren(spinner(), opts.busy ? " " + opts.busy : "");
    let res;
    try {
      const value = await fn();
      res = { ok: true, value };
      btn.classList.remove("busy");
      btn.classList.add("done");
      btn.replaceChildren(tickIcon(), " " + (opts.done || "Saved"));
      await new Promise((r) => setTimeout(r, opts.hold === void 0 ? 650 : opts.hold));
    } catch (error) {
      console.error(error);
      res = { ok: false, error };
      if (!opts.silent) toast(errText(error), "error", 6e3);
    }
    if (btn.isConnected) {
      btn.classList.remove("busy", "done");
      btn.replaceChildren(...kids);
      btn.disabled = wasDisabled;
    }
    return res;
  }
  function emptyState(title, text) {
    return h("div", { class: "empty" }, h("strong", null, title), text ? h("p", null, text) : null);
  }
  function tabs(items, active, onPick) {
    const bar2 = h("div", { class: "tabs", role: "tablist" });
    items.forEach((it) => bar2.append(h("button", { class: "tab" + (it.key === active ? " on" : ""), type: "button", role: "tab", onclick: () => onPick(it.key) }, it.label)));
    return bar2;
  }
  function download(name, text, mime = "text/csv;charset=utf-8") {
    const url = URL.createObjectURL(new Blob(["\uFEFF" + text], { type: mime }));
    const a = h("a", { href: url, download: name });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2e3);
  }
  function toCsv(rows) {
    return rows.map((r) => r.map((v) => {
      const t = String(v === null || v === void 0 ? "" : v);
      return /[",\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
    }).join(",")).join("\r\n");
  }
  function debounce(fn, ms = 250) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  }
  var todayISO = () => {
    const d = /* @__PURE__ */ new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  var shiftDay = (iso, n) => {
    const d = /* @__PURE__ */ new Date(iso + "T12:00:00");
    d.setDate(d.getDate() + n);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  };
  var timeOf = (stamp2) => (/\d{2}:\d{2}/.exec(stamp2 || "") || [""])[0];
  var minutesSince = (stamp2) => {
    const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/.exec(stamp2 || "");
    return m ? Math.max(0, Math.round((Date.now() - new Date(+m[1], m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime()) / 6e4)) : 0;
  };
  function promptDialog(title, label, { required = true, value = "", multiline = false, confirm = "OK" } = {}) {
    return new Promise((resolve) => {
      const f = field({ label, type: multiline ? "textarea" : "text", value, maxlength: 120 });
      let settled = false;
      const done = (v) => {
        if (!settled) {
          settled = true;
          resolve(v);
        }
      };
      const m = openModal({
        title,
        content: f.el,
        onClose: () => done(null),
        actions: (mm) => [
          h("button", { class: "btn", type: "button", onclick: () => {
            done(null);
            mm.close();
          } }, "Cancel"),
          h("button", { class: "btn btn-primary", type: "button", onclick: () => {
            if (required && !f.value()) {
              f.setError("Required.");
              return;
            }
            done(f.value());
            mm.close();
          } }, confirm)
        ]
      });
      f.input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !multiline) {
          e.preventDefault();
          m.box.querySelector(".btn-primary").click();
        }
      });
      return m;
    });
  }

  // web/js/config.js
  var CONFIG = {
    // USER CONFIGURATION REQUIRED
    // In the ready package this lives at the top of app.js (window.HOTEL_POS_API_URL).
    // Apps Script editor → Deploy → New deployment → Web app → copy the URL.
    API_URL: typeof window !== "undefined" && window.HOTEL_POS_API_URL || "",
    APP_NAME: "Hotel POS",
    REQUEST_TIMEOUT_MS: 3e4
  };

  // web/js/api.js
  var ApiError = class extends Error {
    constructor(code, message, details) {
      super(message);
      this.code = code;
      this.details = details || null;
    }
  };
  async function call(action, data = {}, token = "", url = CONFIG.API_URL, opts = {}) {
    if (!url) {
      throw new ApiError("NOT_CONFIGURED", "This app is not connected to its server yet. The administrator must set API_URL in js/config.js.");
    }
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      throw new ApiError("OFFLINE", "You are offline. Check your internet connection and try again.");
    }
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), opts.timeout || CONFIG.REQUEST_TIMEOUT_MS);
    let res;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action, token, data, opId: opts.opId }),
        signal: ctrl.signal,
        redirect: "follow"
      });
    } catch (e) {
      console.error("API request failed", action, e);
      if (e && e.name === "AbortError") {
        throw new ApiError("TIMEOUT", "The server took too long to respond. Please try again.");
      }
      const sameOrigin = typeof location !== "undefined" && String(url).startsWith("/");
      throw new ApiError("NETWORK", sameOrigin ? "Cannot reach the local server. The black start-local window may have been closed or stopped. Run start-local.bat again, then reload this page." : 'Cannot reach the Google script. Open the script link in a private window: if you see a Google sign-in page instead of {"ok":true...}, set Deploy > Manage deployments > Edit > Who has access = Anyone, version = New version, then Deploy. Also check the link ends with /exec.');
    } finally {
      clearTimeout(timer);
    }
    let json;
    try {
      json = await res.json();
    } catch (e) {
      throw new ApiError("BAD_RESPONSE", 'The server did not return data. Check that the web app is deployed for "Anyone" and the URL is correct.');
    }
    if (!json || typeof json.ok !== "boolean") {
      throw new ApiError("SERVER_ERROR", "The server sent an unexpected reply. Please try again.");
    }
    if (!json.ok) throw new ApiError(json.error.code, json.error.message, json.error.details);
    return json.data;
  }

  // web/js/auth.js
  init_store();

  // web/js/data.js
  init_store();

  // web/js/money.js
  var r2 = (n) => Math.round((Number(n) + 1e-9) * 100) / 100;
  function cfgFrom(s) {
    s = s || {};
    return {
      taxOn: s.TAX_ENABLED === "true",
      tax: Number(s.TAX_PERCENT) || 0,
      svcOn: s.SERVICE_ENABLED === "true",
      svc: Number(s.SERVICE_PERCENT) || 0,
      taxOnSvc: s.TAX_ON_SERVICE === "true",
      round: Number(s.ROUNDING) || 0,
      maxDiscount: s.MAX_DISCOUNT_PERCENT === void 0 || s.MAX_DISCOUNT_PERCENT === "" ? 100 : Number(s.MAX_DISCOUNT_PERCENT)
    };
  }
  function discountAmount(subtotal, type, value) {
    if (type === "PERCENT") return r2(subtotal * Math.min(Math.max(value, 0), 100) / 100);
    if (type === "FIXED") return r2(Math.min(Math.max(value, 0), subtotal));
    return 0;
  }
  function compute(subtotal, discountAmt, cfg2) {
    const net = r2(Math.max(0, subtotal - discountAmt));
    const service = cfg2.svcOn ? r2(net * cfg2.svc / 100) : 0;
    const taxBase = cfg2.taxOnSvc ? net + service : net;
    const tax = cfg2.taxOn ? r2(taxBase * cfg2.tax / 100) : 0;
    const exact = r2(net + service + tax);
    const total = cfg2.round > 0 ? Math.round(exact / cfg2.round) * cfg2.round : exact;
    return { subtotal: r2(subtotal), discount: r2(discountAmt), service, tax, roundOff: r2(total - exact), total: r2(total) };
  }
  function money(n, settings) {
    const dec = Math.min(2, Math.max(0, Number(settings && settings.DECIMALS) || 0));
    const cur = settings && settings.CURRENCY || "";
    const v = Number(n) || 0;
    return (cur ? cur + " " : "") + v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  // web/js/data.js
  var S = {
    ready: false,
    user: null,
    hotel: null,
    settings: {},
    categories: [],
    menu: [],
    tables: [],
    orders: [],
    rev: {},
    sync: "idle",
    pending: 0,
    queued: 0,
    offline: false,
    lastSync: 0,
    qr: [],
    qrFresh: []
  };
  var subs = /* @__PURE__ */ new Set();
  var session = null;
  var pollTimer = null;
  var polling = false;
  var flushing = false;
  var authCb = null;
  var doneTimer = null;
  var QKEY = "hotelpos.queue";
  var QUEUEABLE = ["quickSale", "createOrder", "addItems", "sendToKitchen", "kitchenStatus", "saveExpense", "setAvailability", "updateItem", "saveCustomer", "generateBill", "payBill", "removeItem", "cancelOrder", "updateOrderInfo", "saveReservation", "setReservationStatus"];
  var NETERR = ["NETWORK", "TIMEOUT", "OFFLINE", "BAD_RESPONSE"];
  var AUTHERR = ["SESSION_INVALID", "GATE_INVALID", "ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY", "ACCOUNT_DISABLED"];
  var can = (p) => !!S.user && S.user.perms.indexOf(p) !== -1;
  var canAny = (list) => list.some(can);
  var cfg = () => cfgFrom(S.settings);
  function on(fn) {
    subs.add(fn);
    return () => subs.delete(fn);
  }
  function emit(...keys) {
    subs.forEach((f) => {
      try {
        f(keys);
      } catch (e) {
        console.error(e);
      }
    });
  }
  function onAuthLost(fn) {
    authCb = fn;
  }
  function newId(prefix) {
    const a = new Uint8Array(8);
    crypto.getRandomValues(a);
    return (prefix || "x") + "-" + Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  function setSync(state) {
    S.sync = state;
    emit("sync");
    clearTimeout(doneTimer);
    if (state === "saved") doneTimer = setTimeout(() => {
      if (S.sync === "saved") {
        S.sync = "idle";
        emit("sync");
      }
    }, 1800);
  }
  function readQ() {
    const q = LDB.get(QKEY);
    if (Array.isArray(q)) return q.slice();
    if (!LDB.available()) {
      const f = LDB.fallbackGet(QKEY);
      if (Array.isArray(f)) return f;
    }
    return [];
  }
  function writeQ(q) {
    if (q.length) LDB.set(QKEY, q, true);
    else LDB.del(QKEY);
    S.queued = q.length;
    emit("sync");
  }
  async function flush() {
    if (flushing || !session) return;
    let q = readQ();
    if (!q.length) return;
    flushing = true;
    setSync("saving");
    try {
      while (q.length) {
        const op = q[0];
        try {
          const r = await raw(op.action, op.data, { opId: op.opId });
          liveSaved(op.action, op.data);
          merge(op.action, r);
        } catch (err) {
          if (err instanceof ApiError && NETERR.includes(err.code)) {
            setSync("idle");
            return;
          }
          if (err instanceof ApiError && AUTHERR.includes(err.code)) return;
          console.error("queued change rejected", op.action, err);
          liveDrop(op.action, op.data);
          S.rejected = err && err.message || "A change made while offline was rejected.";
          emit("rejected");
        }
        q = readQ().slice(1);
        writeQ(q);
      }
      setSync("saved");
    } finally {
      flushing = false;
    }
  }
  async function raw(action, data, opts = {}) {
    if (!session) throw new ApiError("SESSION_INVALID", "Please sign in again.");
    try {
      const r = await call(action, data, session.token, session.url, opts);
      S.offline = false;
      return r;
    } catch (err) {
      if (err instanceof ApiError) {
        if (NETERR.includes(err.code)) {
          if (!S.offline) {
            S.offline = true;
            emit("sync");
          }
        } else if (err.code === "SESSION_INVALID" && session.kind === "owner" && !opts._retried && await refreshOwner()) {
          return raw(action, data, Object.assign({}, opts, { _retried: true }));
        } else if (AUTHERR.includes(err.code)) {
          authLost(err);
        }
      }
      throw err;
    }
  }
  async function refreshOwner() {
    const o = store.getOwner();
    if (!o) return false;
    try {
      const s = await call("getSession", {}, o.token);
      session.token = s.hotelToken;
      store.setApp(Object.assign({}, session), !!(store.getApp() && store.getApp().remember));
      return true;
    } catch (e) {
      return false;
    }
  }
  function authLost(err) {
    stop();
    if (authCb) authCb(err);
  }
  function read2(action, data, opts) {
    return raw(action, data || {}, opts);
  }
  var chains = {};
  function chainKey(action, data) {
    if (data && data.orderId) return "o:" + data.orderId;
    if (data && data.billId) return "b:" + data.billId;
    if (/Menu|Category|Availability/.test(action)) return "menu";
    if (/Table/.test(action)) return "tables";
    if (action === "saveSettings") return "settings";
    return "";
  }
  // ---- Live dashboard: sales/payments made on this device are added to the dashboard instantly.
  // Each entry is removed once a dashboard reply that started AFTER the server saved it arrives
  // (that reply already contains it), so nothing is counted twice.
  var LIVE = [];
  var liveDay = () => {
    const d = /* @__PURE__ */ new Date(), p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  };
  function liveDiskKey() {
    return session && session.key ? "hotelpos.live:" + session.key : "";
  }
  function liveStore() {
    const k = liveDiskKey();
    if (k) LIVE.length ? LDB.set(k, LIVE, true) : LDB.del(k);
  }
  function liveLoad() {
    const k = liveDiskKey(), v = k ? LDB.get(k) : null, day = liveDay();
    LIVE = Array.isArray(v) ? v.filter((e) => e && e.day === day) : [];
  }
  var bucketOf = (m) => ({ CASH: "cash", CARD: "card", ONLINE: "bank" })[m] || "other";
  function liveSale(key, t, payments, opts) {
    const e = { key, day: liveDay(), savedAt: 0, orders: 0, gross: 0, discount: 0, tax: 0, service: 0, net: 0, cash: 0, card: 0, bank: 0, other: 0, items: [] };
    const list = (payments || []).map((p) => ({ method: p.method, amount: Number(p.amount) || 0 }));
    const paidBefore = Number(opts && opts.paidBefore) || 0;
    let sum = list.reduce((a, p) => a + p.amount, 0);
    if (opts && opts.payFull && list.length) {
      const due = r2(t.total - paidBefore);
      list[list.length - 1].amount = r2(list[list.length - 1].amount + (due - sum));
      sum = due;
    }
    list.forEach((p) => e[bucketOf(p.method)] = r2(e[bucketOf(p.method)] + p.amount));
    if (sum + paidBefore + 5e-3 >= t.total) Object.assign(e, { orders: 1, gross: t.subtotal, discount: t.discount, tax: t.tax, service: t.service, net: t.total });
    return e;
  }
  function liveItems(key, items) {
    const e = { key, day: liveDay(), savedAt: 0, items: [] };
    (items || []).forEach((l) => {
      const m = S.menu.find((x) => x.id === l.menuId);
      if (m) e.items.push({ name: m.name, qty: Number(l.qty) || 0 });
    });
    return e.items.length ? e : null;
  }
  function liveFor(action, data, opts) {
    if (!data) return [];
    const out = [];
    const totalsOf = (sub, type, value) => compute(sub, type && type !== "NONE" ? discountAmount(sub, type, Number(value) || 0) : 0, cfg());
    if (action === "createOrder" && data.uid) out.push(liveItems("o:" + data.uid, data.items));
    if (action === "quickSale") {
      if (data.uid) out.push(liveItems("o:" + data.uid, data.items));
      if (data.payments && data.payments.length && (data.payUid || data.uid)) {
        const sub = (data.items || []).reduce((a, l) => {
          const m = S.menu.find((x) => x.id === l.menuId);
          return a + (m ? Number(m.price) || 0 : 0) * (Number(l.qty) || 0);
        }, 0);
        out.push(liveSale("p:" + (data.payUid || data.uid), totalsOf(sub, data.discountType, data.discountValue), data.payments, { payFull: data.payFull }));
      }
    }
    if (action === "payBill" && data.uid && data.orderId) {
      const o = S.orders.find((x) => x.id === data.orderId);
      if (o) out.push(liveSale("p:" + data.uid, { subtotal: o.subtotal, discount: o.discount || 0, tax: o.tax || 0, service: o.service || 0, total: o.total }, data.payments, { paidBefore: opts && opts.livePaidBefore }));
    }
    if (action === "batch" && Array.isArray(data.ops)) {
      const g = data.ops.find((x) => x.action === "generateBill"), pb = data.ops.find((x) => x.action === "payBill");
      const o = S.orders.find((x) => x.id === data.orderId);
      if (o && pb && pb.data && pb.data.uid) {
        const t = g ? totalsOf(o.subtotal, g.data.discountType, g.data.discountValue) : { subtotal: o.subtotal, discount: o.discount || 0, tax: o.tax || 0, service: o.service || 0, total: o.total };
        out.push(liveSale("p:" + pb.data.uid, t, pb.data.payments, {}));
      }
    }
    return out.filter(Boolean);
  }
  function liveKeys(action, data) {
    if (!data) return [];
    const k = [];
    if ((action === "createOrder" || action === "quickSale") && data.uid) k.push("o:" + data.uid);
    if (action === "quickSale" && (data.payUid || data.uid)) k.push("p:" + (data.payUid || data.uid));
    if (action === "payBill" && data.uid) k.push("p:" + data.uid);
    if (action === "batch" && Array.isArray(data.ops)) data.ops.forEach((x) => {
      if (x.action === "payBill" && x.data && x.data.uid) k.push("p:" + x.data.uid);
    });
    return k;
  }
  function liveAdd(action, data, opts) {
    let changed = false;
    liveFor(action, data, opts).forEach((e) => {
      if (LIVE.some((x) => x.key === e.key)) return;
      LIVE.push(e);
      changed = true;
    });
    if (changed) {
      liveStore();
      emit("live");
    }
  }
  function liveSaved(action, data) {
    const ks = liveKeys(action, data), now = Date.now();
    let changed = false;
    LIVE.forEach((e) => {
      if (ks.includes(e.key) && !e.savedAt) {
        e.savedAt = now;
        changed = true;
      }
    });
    if (changed) liveStore();
  }
  function liveDrop(action, data) {
    const ks = liveKeys(action, data), n = LIVE.length;
    LIVE = LIVE.filter((e) => !ks.includes(e.key));
    if (LIVE.length !== n) {
      liveStore();
      emit("live");
    }
  }
  /* Called with the time a dashboard request STARTED, when its reply arrives. */
  function livePrune(startedAt) {
    const day = liveDay(), n = LIVE.length;
    LIVE = LIVE.filter((e) => e.day === day && !(e.savedAt && e.savedAt < startedAt));
    if (LIVE.length !== n) liveStore();
  }
  /* Server dashboard numbers + this device's not-yet-counted sales + live open orders/tables. */
  function liveDash(d) {
    if (!d || !d.today) return d;
    const x = JSON.parse(JSON.stringify(d));
    const day = liveDay(), sameDay = !d.date || d.date === day;
    if (sameDay) {
      const keys = ["orders", "gross", "discount", "tax", "service", "net", "cash", "card", "bank", "other"];
      const tops = {};
      (x.topItems || []).forEach((i) => tops[i.name] = Object.assign({}, i));
      LIVE.forEach((e) => {
        if (e.day !== day) return;
        keys.forEach((k) => {
          if (e[k]) {
            x.today[k] = r2((x.today[k] || 0) + e[k]);
            if (x.month) x.month[k] = r2((x.month[k] || 0) + e[k]);
          }
        });
        if (e.net && x.series && x.series.length) {
          const last2 = x.series[x.series.length - 1];
          if (!last2.date || last2.date === day) {
            last2.net = r2((last2.net || 0) + e.net);
            last2.orders = (last2.orders || 0) + (e.orders || 0);
          }
        }
        (e.items || []).forEach((i) => {
          const t = tops[i.name] = tops[i.name] || { name: i.name, qty: 0, revenue: 0 };
          t.qty += i.qty;
        });
      });
      x.topItems = Object.values(tops).sort((a, b) => b.qty - a.qty).slice(0, 6);
    }
    if (S.ready) {
      const open = S.orders.filter((o) => OPEN.includes(o.status));
      x.openOrders = open.length;
      x.openValue = r2(open.reduce((a, o) => a + (Number(o.total) || 0), 0));
      const tables = S.tables.filter((t) => t.active);
      x.tablesTotal = tables.length;
      x.tablesBusy = tables.filter((t) => t.currentOrderId).length;
    }
    return x;
  }
  // ---- Device copy of full orders and their bills, so Bill / Payment / Receipt open instantly.
  var DOCS = { o: {}, b: {} };
  var docsT = null;
  function docsKey() {
    return session && session.key ? "hotelpos.docs:" + session.key : "";
  }
  function docsLoad() {
    const v = docsKey() ? LDB.get(docsKey()) : null;
    DOCS = v && v.o && v.b ? v : { o: {}, b: {} };
  }
  function docsSave() {
    clearTimeout(docsT);
    docsT = setTimeout(() => {
      const k = docsKey();
      if (!k) return;
      ["o", "b"].forEach((t) => {
        const ids = Object.keys(DOCS[t]);
        if (ids.length > 300) ids.sort((a, b) => DOCS[t][a].at - DOCS[t][b].at).slice(0, ids.length - 300).forEach((id) => delete DOCS[t][id]);
      });
      LDB.set(k, DOCS);
    }, 600);
  }
  function rememberDoc(order, bill) {
    const now = Date.now();
    if (order && order.id && Array.isArray(order.items) && !order.tmp) DOCS.o[order.id] = { v: order, at: now };
    if (bill && bill.orderId) DOCS.b[bill.orderId] = { v: bill, at: now };
    if (order || bill) docsSave();
  }
  function docOrder(id) {
    const live = S.orders.find((x) => x.id === id && Array.isArray(x.items));
    if (live) return live;
    return DOCS.o[id] ? DOCS.o[id].v : null;
  }
  function docBill(orderId) {
    return DOCS.b[orderId] ? DOCS.b[orderId].v : null;
  }
  /* A bill built from the order's own totals, shown until the real bill arrives from the sheet. */
  function provisionalBill(o) {
    const paid = o.status === "PAID";
    const disc = Number(o.discount) || 0;
    return {
      id: o.billId || "BIL-" + String(o.id).substring(4),
      orderId: o.id,
      subtotal: o.subtotal,
      discountType: disc > 0 ? "FIXED" : "NONE",
      discountValue: disc > 0 ? disc : 0,
      discount: disc,
      discountReason: "",
      tax: o.tax || 0,
      service: o.service || 0,
      roundOff: r2(o.total - (o.subtotal - disc + (o.service || 0) + (o.tax || 0))),
      total: o.total,
      paid: paid ? o.total : 0,
      paymentStatus: paid ? "PAID" : "UNPAID",
      status: "ACTIVE",
      payments: [],
      provisional: true
    };
  }
  /* One request for order + bill (falls back to the order alone when no bill exists yet). */
  async function fetchOrderAndBill(orderId, hasBill) {
    if (hasBill !== false) {
      try {
        const r = await read2("getBill", { orderId });
        rememberDoc(r.order, r.bill);
        return { order: r.order, bill: r.bill };
      } catch (e) {
        if (!(e instanceof ApiError) || e.code !== "NOT_FOUND") throw e;
      }
    }
    const o = (await read2("getOrder", { orderId })).order;
    rememberDoc(o, null);
    return { order: o, bill: null };
  }
  function save(action, data = {}, opts = {}) {
    S.pending++;
    setSync("saving");
    try {
      liveAdd(action, data, opts);
    } catch (e) {
      console.warn("live dashboard", e);
    }
    const k = chainKey(action, data);
    const run = () => saveNow(action, data, opts);
    let p;
    if (k) {
      p = (chains[k] || Promise.resolve()).catch(() => {
      }).then(run);
      chains[k] = p;
      p.catch(() => {
      }).then(() => {
        if (chains[k] === p) delete chains[k];
      });
    } else p = run();
    return p.finally(() => {
      S.pending--;
      if (S.pending === 0 && S.sync === "saving") setSync("saved");
    });
  }
  async function saveNow(action, data, opts) {
    const opId = opts.opId || newId("op");
    try {
      const r = await raw(action, data, { opId, timeout: opts.timeout });
      liveSaved(action, data);
      merge(action, r);
      memoFresh.clear();
      return r;
    } catch (err) {
      if (err instanceof ApiError && NETERR.includes(err.code) && QUEUEABLE.includes(action) && opts.queue !== false) {
        const q = readQ();
        q.push({ opId, action, data, at: Date.now() });
        writeQ(q);
        setSync("idle");
        return { queued: true, opId };
      }
      liveDrop(action, data);
      setSync("error");
      throw err;
    }
  }
  var memo = {};
  var memoFresh = /* @__PURE__ */ new Set();
  var memoT = null;
  function saveMemo() {
    clearTimeout(memoT);
    memoT = setTimeout(() => {
      if (!session || !session.key) return;
      const keys = Object.keys(memo).slice(-60);
      const out = {};
      keys.forEach((k) => out[k] = memo[k]);
      store.setMemo(session.key, out);
    }, 1200);
  }
  function loadMemo(key) {
    const m = store.getMemo(key);
    if (m && typeof m === "object") Object.keys(m).forEach((k) => memo[k] = m[k]);
  }
  var today = () => {
    const d = /* @__PURE__ */ new Date(), p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  };
  var mk = (action, data) => action + ":" + JSON.stringify(data || {});
  function swr(action, data, onData, onError) {
    const key = mk(action, data);
    if (memo[key] !== void 0) onData(memo[key], true);
    return read2(action, data).then((r) => {
      memo[key] = r;
      memoFresh.add(key);
      saveMemo();
      onData(r, false);
      return r;
    }).catch((e) => {
      if (memo[key] === void 0 && onError) onError(e);
    });
  }
  async function prefetch() {
    const t = today(), mon = t.slice(0, 8) + "01";
    const jobs = [
      [can("VIEW_DASHBOARD"), "dashboard", {}],
      [can("VIEW_ORDERS"), "listOrders", { from: t, to: t }],
      [can("VIEW_CUSTOMERS"), "listCustomers", {}],
      [can("MANAGE_EXPENSES"), "listExpenses", { from: mon, to: t }],
      [can("VIEW_RESERVATIONS"), "listReservations", { from: t, to: t }],
      [can("VIEW_SALES") || can("VIEW_REPORTS"), "salesReport", { from: t, to: t }],
      [can("MANAGE_STAFF"), "listStaff", {}],
      [can("VIEW_ACTIVITY"), "activity", { limit: 200 }]
    ];
    for (const [allowed2, action, data] of jobs) {
      const key = mk(action, data);
      if (!allowed2 || !session || memoFresh.has(key)) continue;
      await new Promise((r) => setTimeout(r, 400));
      try {
        memo[key] = await read2(action, data);
        memoFresh.add(key);
        saveMemo();
      } catch (e) {
      }
    }
  }
  var OPEN = ["OPEN", "BILLED"];
  function putOrder(o) {
    if (!o || !o.id) return;
    if (o.uid) S.orders = S.orders.filter((x) => !(x.tmp && x.uid === o.uid));
    const i = S.orders.findIndex((x) => x.id === o.id);
    const open = OPEN.includes(o.status);
    if (open) {
      if (i >= 0) S.orders[i] = o;
      else S.orders.unshift(o);
    } else if (i >= 0) S.orders.splice(i, 1);
    S.tables.forEach((t) => {
      if (t.currentOrderId === o.id && (!open || t.id !== o.tableId)) {
        t.status = "FREE";
        t.currentOrderId = "";
      }
    });
    if (open && o.tableId) {
      const t = S.tables.find((x) => x.id === o.tableId);
      if (t) {
        t.status = o.status === "BILLED" ? "BILLING" : "OCCUPIED";
        t.currentOrderId = o.id;
      }
    }
    emit("orders", "tables");
  }
  function merge(action, r) {
    if (!r || typeof r !== "object") return;
    if (r.order || r.bill) rememberDoc(r.order, r.bill);
    if (r.order) putOrder(r.order);
    if (r.settings && action === "saveSettings") {
      S.settings = r.settings;
      emit("settings");
    }
    if (["saveCategory", "deleteCategory", "saveMenuItem", "deleteMenuItem", "setAvailability", "uploadMenuImage", "removeMenuImage"].includes(action)) {
      refreshSoon();
    }
    if (["saveTable", "addTables", "removeTable"].includes(action)) refreshSoon();
    if (action === "setAvailability" && r.available !== void 0) {
    }
    persist();
  }
  var persistT = null;
  function persist() {
    clearTimeout(persistT);
    persistT = setTimeout(() => {
      if (!session || !S.ready) return;
      store.setBoot({ key: session.key, user: S.user, hotel: S.hotel, settings: S.settings, categories: S.categories, menu: S.menu, tables: S.tables, orders: S.orders, rev: S.rev, serverVersion: S.serverVersion });
    }, 800);
  }
  var qrSeen = /* @__PURE__ */ new Set(), qrDone = /* @__PURE__ */ new Set(), qrPrimed = false;
  /* Customer (QR) orders waiting for staff. New ones raise an alert once per device. */
  function applyQr(list) {
    if (!Array.isArray(list)) return false;
    qrAll = list;
    const before = JSON.stringify(S.qr.map((x) => x.id));
    S.qr = list.filter((x) => !qrDone.has(x.id));
    const fresh = qrPrimed ? S.qr.filter((x) => !qrSeen.has(x.id)) : [];
    S.qr.forEach((x) => qrSeen.add(x.id));
    qrPrimed = true;
    if (fresh.length) S.qrFresh = fresh;
    return before !== JSON.stringify(S.qr.map((x) => x.id)) || fresh.length > 0;
  }
  var qrAll = [];
  function qrHandled(id, done) {
    if (done) qrDone.add(id);
    else qrDone.delete(id);
    S.qr = qrAll.filter((x) => !qrDone.has(x.id));
    emit("qr");
  }
  function apply(b, full) {
    if (b.qr && applyQr(b.qr) && !full) emit("qr");
    if (b.user) S.user = b.user;
    if (b.hotel) S.hotel = b.hotel;
    if (b.settings) S.settings = b.settings;
    if (b.categories) S.categories = b.categories;
    if (b.menu) S.menu = b.menu;
    if (b.tables) S.tables = b.tables;
    if (b.orders) {
      const mine = S.orders.filter((o) => o.tmp && !b.orders.some((x) => x.uid === o.uid));
      S.orders = mine.concat(b.orders);
      if (b.tables) mine.forEach((o) => {
        const t = S.tables.find((x) => x.id === o.tableId);
        if (t && t.status === "FREE") {
          t.status = "OCCUPIED";
          t.currentOrderId = o.id;
        }
      });
    }
    if (b.rev) S.rev = b.rev;
    if (b.version || b.serverVersion) S.serverVersion = b.version || b.serverVersion;
    if (b.perms && S.user) S.user = Object.assign({}, S.user, { perms: b.perms });
    S.lastSync = Date.now();
    if (full) S.ready = true;
  }
  async function start(sess, firstBoot) {
    stop();
    session = sess;
    S.ready = false;
    S.offline = false;
    Object.keys(memo).forEach((k) => delete memo[k]);
    memoFresh.clear();
    qrSeen.clear();
    qrDone.clear();
    qrPrimed = false;
    S.qr = [];
    loadMemo(sess.key);
    liveLoad();
    docsLoad();
    S.queued = readQ().length;
    let painted = false;
    if (firstBoot) {
      apply(firstBoot, true);
      emit("all");
      painted = true;
    } else {
      const c = store.getBoot();
      if (c && c.user && sess.key && c.key === sess.key) {
        apply(c, true);
        emit("all");
        painted = true;
      }
    }
    const fresh = raw("bootstrap", {}).then((b) => {
      apply(b, true);
      persist();
      emit("all");
    });
    if (painted) fresh.catch(() => {
    });
    else await fresh;
    loop();
    setTimeout(prefetch, 800);
    clearInterval(retryTimer);
    retryTimer = setInterval(() => {
      if (S.queued && !flushing) flush();
    }, 2e4);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("online", onOnline);
    flush();
  }
  var screenKey = "";
  var lastTouch = Date.now();
  ["pointerdown", "keydown"].forEach((e) => window.addEventListener(e, () => {
    lastTouch = Date.now();
  }, { passive: true }));
  function setScreen(k) {
    screenKey = k;
  }
  function delay() {
    if (Date.now() - lastTouch > 18e4) return 3e4;
    return { kitchen: 5e3, tables: 7e3, pos: 8e3, dashboard: 6e3, orders: 1e4 }[screenKey] || 15e3;
  }
  function loop() {
    clearTimeout(pollTimer);
    pollTimer = setTimeout(async () => {
      await poll();
      if (session) loop();
    }, delay());
  }
  function onVis() {
    if (!document.hidden) poll();
  }
  function onOnline() {
    poll();
    flush();
  }
  async function poll() {
    if (!session || polling || document.hidden || flushing) return;
    polling = true;
    try {
      const bo = JSON.stringify(S.orders), bt = JSON.stringify(S.tables);
      const r = await raw("poll", { rev: S.rev });
      apply(r, false);
      const keys = ["tick"];
      if (JSON.stringify(S.orders) !== bo) keys.push("orders");
      if (JSON.stringify(S.tables) !== bt) keys.push("tables");
      emit(...keys);
      if (r.menu) emit("menu");
      if (r.settings) emit("settings");
      if (S.queued) flush();
      persist();
    } catch (err) {
    } finally {
      polling = false;
      emit("sync");
      if (again) {
        again = false;
        setTimeout(poll, 50);
      }
    }
  }
  var again = false;
  function refreshSoon() {
    if (polling) again = true;
    else setTimeout(poll, 150);
  }
  var retryTimer = null;
  function stop() {
    clearTimeout(pollTimer);
    clearInterval(retryTimer);
    pollTimer = null;
    session = null;
    document.removeEventListener("visibilitychange", onVis);
    window.removeEventListener("online", onOnline);
  }
  function signOut() {
    stop();
    store.clearApp();
    store.clearOwner();
    S.ready = false;
    S.user = null;
    S.orders = [];
    S.tables = [];
    S.menu = [];
    S.categories = [];
    Object.keys(memo).forEach((k) => delete memo[k]);
    memoFresh.clear();
    LDB.del(QKEY);
    store.clearLocal();
    try {
      localStorage.removeItem(QKEY);
    } catch (e) {
    }
  }
  var sessionInfo = () => session;
  var stamp = () => {
    const d = /* @__PURE__ */ new Date(), p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
  };
  function placeOrder(payload, lines, onFail) {
    const t = compute(lines.reduce((a, l) => a + l.price * l.qty, 0), 0, cfg());
    const table = payload.tableId ? S.tables.find((x) => x.id === payload.tableId) : null;
    const tmp = {
      id: "Saving\u2026",
      tmp: true,
      uid: payload.uid,
      type: payload.type,
      tableId: payload.tableId || "",
      tableName: table ? table.name : "",
      customerId: payload.customerId || "",
      customerName: payload.customerName || "",
      guests: payload.guests || 0,
      waiterId: S.user.id,
      waiterName: S.user.name,
      status: "OPEN",
      subtotal: t.subtotal,
      discount: 0,
      tax: t.tax,
      service: t.service,
      total: t.total,
      notes: payload.notes || "",
      openedAt: stamp(),
      billId: "",
      items: lines.map((l, i) => ({ id: "tmp-" + i, menuId: l.menuId, name: l.name, qty: l.qty, price: l.price, lineTotal: r2(l.price * l.qty), notes: l.notes || "", kitchen: payload.send ? "SENT" : "NEW", sentAt: payload.send ? stamp() : "" }))
    };
    S.orders.unshift(tmp);
    if (table) {
      table.status = "OCCUPIED";
      table.currentOrderId = tmp.id;
    }
    emit("orders", "tables");
    save("createOrder", payload).then((r) => {
      if (r && r.queued) toast("No connection: the order is saved on this device and will be sent automatically.", "info", 7e3);
    }).catch((err) => {
      S.orders = S.orders.filter((o) => o !== tmp);
      if (table && table.currentOrderId === tmp.id) {
        table.status = "FREE";
        table.currentOrderId = "";
      }
      emit("orders", "tables");
      refreshSoon();
      if (onFail) onFail(err);
    });
  }
  function addToOrder(orderId, lines, send, onFail) {
    const o = S.orders.find((x) => x.id === orderId);
    if (!o) {
      save("addItems", { orderId, items: lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes })), send }).catch(onFail);
      return;
    }
    const before = JSON.stringify(o);
    lines.forEach((l, i) => o.items.push({ id: "tmp-add-" + Date.now() + i, menuId: l.menuId, name: l.name, qty: l.qty, price: l.price, lineTotal: r2(l.price * l.qty), notes: l.notes || "", kitchen: send ? "SENT" : "NEW", sentAt: send ? stamp() : "" }));
    const t = compute(o.items.reduce((a, l) => a + l.lineTotal, 0), 0, cfg());
    Object.assign(o, { subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total });
    emit("orders");
    save("addItems", { orderId, items: lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes })), send }).then((r) => {
      if (r && r.queued) toast("No connection: saved on this device and will be sent automatically.", "info", 7e3);
    }).catch((err) => {
      const i = S.orders.findIndex((x) => x.id === orderId);
      if (i >= 0) S.orders[i] = JSON.parse(before);
      emit("orders");
      refreshSoon();
      if (onFail) onFail(err);
    });
  }
  function verAtLeast(v, want) {
    const a = String(v || "0").split(".").map(Number), b = want.split(".").map(Number);
    for (let i = 0; i < 3; i++) {
      if ((a[i] || 0) !== b[i]) return (a[i] || 0) > b[i];
    }
    return true;
  }
  function batchError(x) {
    const er = x && x.error || {};
    return new ApiError(er.code || "SERVER_ERROR", er.message || "The bill was not saved. Please try again.", er.details);
  }
  async function billAndPay(orderId, o) {
    const ops = [{ action: "generateBill", data: { orderId, discountType: o.discountType || "NONE", discountValue: o.discountValue || 0, discountReason: o.discountReason || "" }, opId: newId("op") }];
    if (o.payments && o.payments.length) ops.push({ action: "payBill", data: { orderId, uid: o.payUid, payments: o.payments }, opId: newId("op") });
    let res;
    try {
      res = await save("batch", { orderId, ops }, { queue: false });
    } catch (e) {
      if (!(e instanceof ApiError && NETERR.includes(e.code))) throw e;
      let r = null;
      for (const op of ops) r = await save(op.action, op.data, { opId: op.opId });
      return r;
    }
    if (!Array.isArray(res)) throw new ApiError("SERVER_ERROR", "The server sent an unexpected reply. Please try again.");
    let last = null;
    res.forEach((x, i) => {
      if (x && x.ok) {
        merge(ops[i].action, x.data);
        last = x.data;
      }
    });
    const bad = res.find((x) => !x || !x.ok);
    if (bad) throw batchError(bad);
    return last;
  }
  async function quickSale(p) {
    if (verAtLeast(S.serverVersion, "1.2.0")) return save("quickSale", p);
    const r1 = await save("createOrder", { uid: p.uid, type: p.type, tableId: p.tableId, guests: p.guests, customerId: p.customerId, customerName: p.customerName, notes: p.notes, items: p.items, send: false });
    if (!r1 || r1.queued || !r1.order) return Object.assign({ partial: true }, r1);
    return billAndPay(r1.order.id, p);
  }
  function instant(action, data, apply2, undo, after) {
    apply2();
    return save(action, data).then((r) => {
      if (after) after(r);
      return r;
    }).catch((e) => {
      if (undo) undo();
      toast("Not saved: " + (e && e.message ? e.message : "try again"), "error", 6e3);
    });
  }

  // web/js/shell.js
  init_store();

  // web/js/s-dashboard.js
  var s_dashboard_exports = {};
  __export(s_dashboard_exports, {
    render: () => render
  });
  var last = null;
  function render(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const box = h("div", { class: "stack" });
    el.replaceChildren(box);
    let alive = true, loading = false, again2 = false;
    function stat(label, value, sub, cls) {
      return h("div", { class: "stat " + (cls || "") }, h("div", { class: "k" }, label), h("div", { class: "v" }, value), sub ? h("div", { class: "s" }, sub) : null);
    }
    const delta = (a, b) => {
      if (!b) return a ? "new today" : "";
      const p = Math.round((a - b) / b * 100);
      return (p >= 0 ? "\u25B2 " : "\u25BC ") + Math.abs(p) + "% vs yesterday";
    };
    function draw(d, err) {
      const parts = [];
      if (can("MANAGE_SETTINGS") || can("EDIT_MENU")) parts.push(checklist());
      if (err) parts.push(h("div", { class: "form-error" }, err));
      if (d) d = liveDash(d);
      if (d) {
        const t = d.today;
        parts.push(h(
          "div",
          { class: "stats" },
          stat("Sales today", M2(t.net), delta(t.net, d.yesterday.net), "hero"),
          stat("Orders today", t.orders, d.yesterday.orders + " yesterday"),
          stat("Open orders", d.openOrders, M2(d.openValue) + " in progress"),
          stat("Tables in use", d.tablesBusy + " / " + d.tablesTotal, d.tablesTotal ? Math.round(d.tablesBusy / d.tablesTotal * 100) + "% occupied" : "No tables yet"),
          stat("Expenses today", M2(t.expenses), "Sales minus expenses: " + M2(t.net - t.expenses)),
          stat("This month", M2(d.month.net), d.month.orders + (d.month.orders === 1 ? " order" : " orders"))
        ));
        parts.push(h(
          "div",
          { class: "cols" },
          panel("Last 14 days", trend(d.series)),
          panel("Today by payment", h("div", { class: "trows" }, [["Cash", t.cash], ["Card", t.card], ["Online / bank", t.bank], ["Other", t.other], ["Discounts given", t.discount], ["Tax collected", t.tax], ["Service charge", t.service]].map(([k, v]) => h("div", { class: "trow" }, h("span", null, k), h("span", null, M2(v))))))
        ));
        parts.push(panel("Best sellers today", d.topItems.length ? h("div", { class: "toplist" }, d.topItems.map((i, n) => h("div", { class: "trow" }, h("span", null, n + 1 + ". " + i.name), h("span", null, "\xD7 " + i.qty)))) : emptyState("No sales yet today", "Items appear here as orders are sent to the kitchen.")));
      } else parts.push(loadingBlock("Loading today's numbers\u2026"));
      box.replaceChildren(...parts.filter(Boolean));
    }
    function panel(title, body) {
      return h("section", { class: "panel" }, h("header", null, h("h2", null, title)), h("div", { class: "pad" }, body));
    }
    function trend(series) {
      const max = Math.max(1, ...series.map((x) => Math.max(x.net, x.expenses)));
      return h(
        "div",
        null,
        h("div", { class: "bars" }, series.map((x) => h(
          "div",
          { class: "bar-col", title: x.date + "  sales " + M2(x.net) + "  expenses " + M2(x.expenses) },
          h("div", { class: "bar-stack" }, h("div", { class: "cbar b-sales", style: "height:" + Math.round(x.net / max * 100) + "%" }), h("div", { class: "cbar b-exp", style: "height:" + Math.round(x.expenses / max * 100) + "%" })),
          h("div", { class: "bar-l" }, x.date.slice(8))
        ))),
        h("div", { class: "legend" }, h("span", { class: "lg b-sales" }, "Sales"), h("span", { class: "lg b-exp" }, "Expenses"))
      );
    }
    function checklist() {
      const steps = [
        ["Hotel details, tax and receipt", S.settings.SETUP_COMPLETE === "true", "settings", can("MANAGE_SETTINGS")],
        ["Add menu categories and items", S.menu.length > 0, "menu", can("ADD_MENU")],
        ["Add your tables", S.tables.length > 0, "settings", can("MANAGE_TABLES")],
        ["Create staff accounts", null, "staff", can("MANAGE_STAFF")]
      ].filter((s) => s[3]);
      const todo = steps.filter((s) => s[1] === false);
      if (!todo.length || S.settings.SETUP_COMPLETE === "true" && S.menu.length && S.tables.length) return null;
      return h(
        "section",
        { class: "panel setup" },
        h("header", null, h("h2", null, "Get your hotel ready")),
        h("div", { class: "pad" }, steps.map((s) => h("a", { class: "step" + (s[1] ? " done" : ""), href: "#/app/" + s[2] }, h("span", { class: "chk" }, s[1] ? "\u2713" : "\u25CB"), s[0])))
      );
    }
    async function load() {
      if (!alive || !can("VIEW_DASHBOARD")) return;
      if (loading) {
        again2 = true;
        return;
      }
      loading = true;
      const startedAt = Date.now();
      await swr("dashboard", {}, (r, cached) => {
        if (!cached) livePrune(startedAt);
        last = r;
        if (alive) draw(last);
      }, (e) => {
        if (alive) draw(last, errText(e));
      });
      loading = false;
      if (again2 && alive) {
        again2 = false;
        load();
      }
    }
    draw(last);
    load();
    const timer = setInterval(() => {
      if (!document.hidden) load();
    }, 2e4);
    let lt = null;
    const off = on((k) => {
      if (!alive) return;
      // Redraw at once from this device's data, then confirm with the server shortly after.
      if (k.includes("live") || k.includes("orders") || k.includes("tables") || k.includes("all")) draw(last);
      if (k.includes("orders") || k.includes("all")) {
        clearTimeout(lt);
        lt = setTimeout(load, 400);
      }
    });
    return () => {
      alive = false;
      clearInterval(timer);
      clearTimeout(lt);
      off();
    };
  }


  // web/js/qr-tools.js
  function qrMatrix(text) {
    const q = window.__qrcode(0, "M");
    q.addData(text);
    q.make();
    const n = q.getModuleCount(), rows = [];
    for (let r = 0; r < n; r++) {
      const row = [];
      for (let c = 0; c < n; c++) row.push(q.isDark(r, c));
      rows.push(row);
    }
    return rows;
  }
  function qrSvgMarkup(text, cell, color) {
    const m = qrMatrix(text), n = m.length, pad = 4, size = (n + pad * 2) * cell;
    let d = "";
    m.forEach((row, r) => row.forEach((on2, c) => {
      if (on2) d += "M" + (c + pad) * cell + " " + (r + pad) * cell + "h" + cell + "v" + cell + "h-" + cell + "z";
    }));
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + size + " " + size + '" width="' + size + '" height="' + size + '" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="#fff"/><path d="' + d + '" fill="' + (color || "#0b1220") + '"/></svg>';
  }
  function qrSvg(text, cell) {
    return svgEl(qrSvgMarkup(text, cell));
  }
  /* Designed QR card (navy + gold, hotel style). Used for "Download QR" and the printed table cards. */
  async function qrPosterCanvas(url, name, opts = {}) {
    const W = 1200, H = 1600;
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    const g = cv.getContext("2d");
    try {
      await Promise.all(['600 80px "Cormorant Garamond"', 'italic 600 40px "Cormorant Garamond"', '800 30px "Manrope"', '600 26px "Manrope"'].map((f) => document.fonts.load(f)));
    } catch (e) {
    }
    const serif = '"Cormorant Garamond", Georgia, "Times New Roman", serif', sans = '"Manrope", "Segoe UI", Arial, sans-serif';
    const GOLD = "#d4a24c", GOLD_HI = "#f3d58e";
    const rr = (x, y, w, h2, r) => {
      g.beginPath();
      g.moveTo(x + r, y);
      g.arcTo(x + w, y, x + w, y + h2, r);
      g.arcTo(x + w, y + h2, x, y + h2, r);
      g.arcTo(x, y + h2, x, y, r);
      g.arcTo(x, y, x + w, y, r);
      g.closePath();
    };
    const spaced = (text, cx, y, gap) => {
      const chars = Array.from(text), widths = chars.map((c) => g.measureText(c).width);
      let x = cx - (widths.reduce((a, b) => a + b, 0) + gap * (chars.length - 1)) / 2;
      g.textAlign = "left";
      chars.forEach((c, i) => {
        g.fillText(c, x, y);
        x += widths[i] + gap;
      });
      g.textAlign = "center";
    };
    const fit = (text, weight, max, start, family) => {
      let s2 = start;
      do {
        g.font = weight + " " + s2 + "px " + family;
        s2 -= 2;
      } while (g.measureText(text).width > max && s2 > 30);
    };
    // background
    const bg = g.createLinearGradient(0, 0, W * 0.35, H);
    bg.addColorStop(0, "#1b2847");
    bg.addColorStop(0.55, "#0f182b");
    bg.addColorStop(1, "#0a101d");
    g.fillStyle = bg;
    g.fillRect(0, 0, W, H);
    const glow = g.createRadialGradient(W * 0.95, H * 0.02, 0, W * 0.95, H * 0.02, W * 0.8);
    glow.addColorStop(0, "rgba(212,162,76,.40)");
    glow.addColorStop(1, "rgba(212,162,76,0)");
    g.fillStyle = glow;
    g.fillRect(0, 0, W, H);
    const glow2 = g.createRadialGradient(0, H, 0, 0, H, W * 0.75);
    glow2.addColorStop(0, "rgba(90,125,190,.22)");
    glow2.addColorStop(1, "rgba(90,125,190,0)");
    g.fillStyle = glow2;
    g.fillRect(0, 0, W, H);
    // art-deco arcs
    g.save();
    g.strokeStyle = "rgba(212,162,76,.10)";
    g.lineWidth = 2;
    for (let i = 0; i < 16; i++) {
      g.beginPath();
      g.arc(W + 40, H + 40, 120 + i * 70, Math.PI, Math.PI * 1.5);
      g.stroke();
    }
    g.restore();
    // double gold frame
    g.strokeStyle = "rgba(212,162,76,.85)";
    g.lineWidth = 4;
    rr(44, 44, W - 88, H - 88, 46);
    g.stroke();
    g.strokeStyle = "rgba(212,162,76,.35)";
    g.lineWidth = 2;
    rr(62, 62, W - 124, H - 124, 34);
    g.stroke();
    g.textAlign = "center";
    g.textBaseline = "alphabetic";
    // crest
    try {
      const img = new Image();
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ICONS.crest.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" '));
      await img.decode();
      g.drawImage(img, W / 2 - 54, 118, 108, 108);
    } catch (e) {
    }
    // hotel name
    g.fillStyle = "#ffffff";
    fit(name || "Our Menu", "600", W - 260, 104, serif);
    g.fillText(name || "Our Menu", W / 2, 318);
    // divider
    const dv = g.createLinearGradient(W / 2 - 170, 0, W / 2 + 170, 0);
    dv.addColorStop(0, "rgba(212,162,76,0)");
    dv.addColorStop(0.5, GOLD_HI);
    dv.addColorStop(1, "rgba(212,162,76,0)");
    g.fillStyle = dv;
    g.fillRect(W / 2 - 170, 352, 340, 3);
    // headline
    g.fillStyle = GOLD;
    g.font = "800 34px " + sans;
    spaced("SCAN TO SEE OUR MENU", W / 2, 420, 9);
    if (opts.ordering) {
      g.fillStyle = "#c9d1de";
      g.font = "italic 600 44px " + serif;
      g.fillText("& order right from your table", W / 2, 476);
    }
    // white QR panel
    const m = qrMatrix(url), n = m.length;
    const panelW = 700, panelX = (W - panelW) / 2, panelY = opts.ordering ? 530 : 500;
    g.save();
    g.shadowColor = "rgba(0,0,0,.45)";
    g.shadowBlur = 50;
    g.shadowOffsetY = 18;
    g.fillStyle = "#fffdf8";
    rr(panelX, panelY, panelW, panelW, 44);
    g.fill();
    g.restore();
    g.strokeStyle = GOLD;
    g.lineWidth = 5;
    rr(panelX + 16, panelY + 16, panelW - 32, panelW - 32, 32);
    g.stroke();
    const cell = Math.floor((panelW - 120) / n), qrSize = cell * n, qx = panelX + (panelW - qrSize) / 2, qy = panelY + (panelW - qrSize) / 2;
    g.fillStyle = "#0b1220";
    m.forEach((row, r) => row.forEach((on2, c) => {
      if (on2) g.fillRect(qx + c * cell, qy + r * cell, cell, cell);
    }));
    // hint + details
    let y = panelY + panelW + 82;
    g.fillStyle = "#ffffff";
    g.font = "700 34px " + sans;
    g.fillText("Open your phone camera & point it here", W / 2, y);
    y += 52;
    g.fillStyle = "#9fb0c9";
    g.font = "600 27px " + sans;
    const info = [opts.address, opts.phone].filter(Boolean).join("  •  ");
    if (info) {
      fit(info, "600", W - 240, 28, sans);
      g.fillText(info, W / 2, y);
    }
    // footer
    g.fillStyle = "rgba(212,162,76,.75)";
    g.font = "700 22px " + sans;
    spaced("POWERED BY HOTEL POS  •  DEVLINKS.ONLINE", W / 2, H - 104, 3);
    return cv;
  }
  async function downloadQr(url, name) {
    try {
      const cv = await qrPosterCanvas(url, name, { ordering: S.settings.QR_ORDERING_ENABLED === "true", address: S.settings.HOTEL_ADDRESS, phone: S.settings.HOTEL_PHONE });
      const a = document.createElement("a");
      a.href = cv.toDataURL("image/png");
      a.download = (String(name || "menu").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "menu") + "-QR-menu.png";
      document.body.append(a);
      a.click();
      a.remove();
    } catch (e) {
      toast("Could not make the QR image: " + errText(e), "error");
    }
  }
  async function printQrPoster(url, name) {
    let src;
    try {
      const cv = await qrPosterCanvas(url, name, { ordering: S.settings.QR_ORDERING_ENABLED === "true", address: S.settings.HOTEL_ADDRESS, phone: S.settings.HOTEL_PHONE });
      const blob = await new Promise((r) => cv.toBlob(r, "image/png"));
      src = blob ? URL.createObjectURL(blob) : cv.toDataURL("image/png");
    } catch (e) {
      toast("Could not make the table cards: " + errText(e), "error");
      return;
    }
    const card = `<div class="card"><img src="${src}" alt="QR menu"></div>`;
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>QR table cards</title><style>
      @page { size: A4; margin: 8mm; }
      * { box-sizing: border-box; } html, body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .sheet { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; justify-items: center; }
      .card { width: 94mm; height: 125.3mm; page-break-inside: avoid; break-inside: avoid; }
      .card img { width: 100%; height: 100%; display: block; border-radius: 4mm; }
      .cut { grid-column: 1 / -1; text-align: center; font: 9pt Arial, sans-serif; color: #888; }
    </style></head><body><div class="sheet">${card}${card}${card}${card}<div class="cut">Cut along the card edges \xB7 Hotel POS</div></div></body></html>`;
    const frame = h("iframe", { style: "position:fixed;right:0;bottom:0;width:0;height:0;border:0", "aria-hidden": "true" });
    document.body.append(frame);
    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    const imgs = Array.from(doc.images);
    await Promise.all(imgs.map((im) => im.complete ? 0 : new Promise((r) => {
      im.onload = im.onerror = r;
    })));
    setTimeout(() => {
      try {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      } catch (e) {
        toast("Printing is not available in this browser.", "error");
      }
      setTimeout(() => frame.remove(), 6e4);
    }, 150);
  }

  // web/js/s-tables.js
  var s_tables_exports = {};
  __export(s_tables_exports, {
    render: () => render2
  });

  // web/js/order-ui.js
  var KITCHEN_LABEL = { NEW: "Not sent", SENT: "Sent", PREPARING: "Preparing", READY: "Ready", SERVED: "Served" };
  var M = (n) => money(n, S.settings);
  function kitchenPill(state) {
    return h("span", { class: "kp k-" + state }, KITCHEN_LABEL[state] || state);
  }
  function statusPill(status) {
    const t = { OPEN: "Open", BILLED: "Billed", PAID: "Paid", CANCELLED: "Cancelled" }[status] || status;
    return h("span", { class: "sp s-" + status }, t);
  }
  function totalsBlock(o) {
    const rows = [["Subtotal", o.subtotal]];
    if (o.discount) rows.push(["Discount", -o.discount]);
    if (o.service) rows.push(["Service charge", o.service]);
    if (o.tax) rows.push([S.settings.TAX_LABEL || "Tax", o.tax]);
    if (o.roundOff) rows.push(["Rounding", o.roundOff]);
    return h(
      "div",
      { class: "totals" },
      rows.map(([k, v]) => h("div", { class: "trow" }, h("span", null, k), h("span", null, M(v)))),
      h("div", { class: "trow grand" }, h("span", null, "Total"), h("span", null, M(o.total)))
    );
  }
  function openOrder(idOrOrder, ctx) {
    if (typeof idOrOrder !== "string" && idOrOrder && idOrOrder.tmp) {
      toast("Saving this order\u2026", "info", 1200);
      return null;
    }
    let id = typeof idOrOrder === "string" ? idOrOrder : idOrOrder.id;
    let order = typeof idOrOrder === "string" ? S.orders.find((x) => x.id === id) || docOrder(id) || null : idOrOrder;
    const body = h("div", { class: "order-dlg" });
    const modal = openModal({ title: "Order", content: body, actions: null });
    modal.box.classList.add("wide");
    const head = modal.box.querySelector("header h2");
    async function load() {
      body.replaceChildren(loadingBlock());
      try {
        order = (await read2("getOrder", { orderId: id })).order;
        rememberDoc(order, null);
        draw();
      } catch (e) {
        body.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      }
    }
    async function quietRefresh() {
      const mark = order;
      try {
        const o = (await read2("getOrder", { orderId: id })).order;
        rememberDoc(o, null);
        if (order !== mark || !modal.box.isConnected) return;
        const sig2 = (x) => JSON.stringify([x.status, x.total, x.items.map((l) => [l.id, l.qty, l.kitchen])]);
        if (sig2(o) !== sig2(mark)) {
          order = o;
          draw();
        }
      } catch (e) {
      }
    }
    function cur() {
      const live = S.orders.find((x) => x.id === id);
      if (live) order = live;
      return order;
    }
    function draw() {
      const o = cur();
      if (!o) {
        body.replaceChildren(h("div", { class: "empty" }, h("strong", null, "This order is no longer open.")));
        return;
      }
      head.replaceChildren(o.id, " ", statusPill(o.status));
      const open = o.status === "OPEN", billed = o.status === "BILLED";
      const editable = open && canAny(["CREATE_ORDERS", "EDIT_ORDERS"]);
      const hasNew = o.items.some((i) => i.kitchen === "NEW");
      const hasReady = o.items.some((i) => i.kitchen === "READY");
      const lines = h("div", { class: "lines" }, o.items.length ? o.items.map((l) => {
        const locked = l.kitchen !== "NEW";
        const ctl = [];
        if (editable && !locked) ctl.push(
          h("button", { class: "qty-btn", type: "button", "aria-label": "One less", onclick: (e) => change(e.currentTarget, l, l.qty - 1) }, "\u2212"),
          h("span", { class: "qty" }, l.qty),
          h("button", { class: "qty-btn", type: "button", "aria-label": "One more", onclick: (e) => change(e.currentTarget, l, l.qty + 1) }, "+")
        );
        else ctl.push(h("span", { class: "qty" }, "\xD7" + l.qty));
        return h(
          "div",
          { class: "line" },
          h("div", { class: "ln" }, h("strong", null, l.name), l.notes ? h("div", { class: "note" }, l.notes) : null, kitchenPill(l.kitchen)),
          h("div", { class: "lq" }, ctl),
          h("div", { class: "lt" }, M(l.lineTotal)),
          editable && (!locked || can("CANCEL_ORDERS")) ? h("button", { class: "btn btn-quiet btn-small", type: "button", title: "Remove", onclick: (e) => remove(e.currentTarget, l) }, "\u2715") : h("span")
        );
      }) : h("div", { class: "muted pad" }, "No items yet."));
      const meta = h(
        "div",
        { class: "meta" },
        o.tableName ? h("span", null, "Table: ", h("strong", null, o.tableName)) : h("span", null, "Takeaway"),
        o.guests ? h("span", null, "Guests: ", h("strong", null, o.guests)) : null,
        o.customerName ? h("span", null, "Customer: ", h("strong", null, o.customerName)) : null,
        o.waiterName ? h("span", null, "Waiter: ", h("strong", null, o.waiterName)) : null,
        h("span", null, "Opened: ", h("strong", null, fmtStamp(o.openedAt))),
        o.cancelReason ? h("span", { class: "bad" }, "Cancelled: ", o.cancelReason) : null,
        o.notes ? h("span", null, "Notes: ", o.notes) : null
      );
      const actions = h("div", { class: "dlg-actions" });
      if (editable) actions.append(h("button", { class: "btn", type: "button", onclick: () => {
        modal.close();
        ctx && ctx.nav("pos", { orderId: o.id });
      } }, "\uFF0B Add items"));
      if (open && hasNew && can("SEND_TO_KITCHEN")) actions.append(h("button", { class: "btn btn-primary", type: "button", onclick: () => sendNow(o) }, "Send to kitchen"));
      if ((open || billed) && hasReady && canAny(["UPDATE_KITCHEN_STATUS", "EDIT_ORDERS"])) actions.append(h("button", { class: "btn", type: "button", onclick: () => {
        const ready = o.items.filter((i) => i.kitchen === "READY");
        ready.forEach((i) => i.kitchen = "SERVED");
        emit("orders");
        draw();
        save("kitchenStatus", { orderId: o.id, status: "SERVED" }).catch((e) => {
          ready.forEach((i) => i.kitchen = "READY");
          emit("orders");
          draw();
          toast(errText(e), "error");
        });
      } }, "Mark ready items served"));
      if (editable) actions.append(h("button", { class: "btn", type: "button", onclick: () => editInfo(o) }, "Table / guests / notes"));
      if ((open || billed) && o.items.length && canAny(["GENERATE_BILLS", "PROCESS_PAYMENT", "VIEW_BILLS"])) actions.append(h("button", { class: "btn btn-primary", type: "button", onclick: () => openBill(o.id, { onChange: draw, ctx, parent: modal }) }, billed ? "\u{1F4B5} Payment" : "\u{1F4B5} Bill & pay"));
      if (!open && !billed && o.billId && canAny(["VIEW_BILLS", "PRINT_RECEIPT", "GENERATE_BILLS", "PROCESS_PAYMENT"])) actions.append(h("button", { class: "btn btn-primary", type: "button", onclick: () => openBill(o.id, { ctx }) }, "Receipt"));
      if ((open || billed) && can("CANCEL_ORDERS")) actions.append(h("button", { class: "btn btn-danger", type: "button", onclick: () => cancel(o) }, "Cancel order"));
      body.replaceChildren(meta, lines, totalsBlock(o), actions);
    }
    function btn(label, cls, fn) {
      const b = h("button", { class: cls, type: "button" }, label);
      b.addEventListener("click", () => act(b, fn));
      return b;
    }
    function sendNow(o) {
      const lines = o.items.filter((i) => i.kitchen === "NEW"), stamp2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace("T", " ");
      lines.forEach((i) => {
        i.kitchen = "SENT";
        i.sentAt = stamp2;
      });
      emit("orders");
      draw();
      save("sendToKitchen", { orderId: o.id }).catch((e) => {
        lines.forEach((i) => {
          i.kitchen = "NEW";
          i.sentAt = "";
        });
        emit("orders");
        draw();
        toast(errText(e), "error");
      });
    }
    function change(b, l, qty) {
      if (qty < 1) return remove(b, l);
      const o = cur(), old = l.qty, oldTotals = [o.subtotal, o.tax, o.service, o.total];
      l.qty = qty;
      l.lineTotal = Math.round(l.price * qty * 100) / 100;
      const t = compute(o.items.reduce((a, x) => a + x.lineTotal, 0), 0, cfg());
      Object.assign(o, { subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total });
      emit("orders");
      draw();
      save("updateItem", { orderId: id, lineId: l.id, qty }).catch((e) => {
        l.qty = old;
        l.lineTotal = Math.round(l.price * old * 100) / 100;
        [o.subtotal, o.tax, o.service, o.total] = oldTotals;
        emit("orders");
        draw();
        toast(errText(e), "error");
      });
    }
    async function remove(b, l) {
      let reason = "";
      if (l.kitchen !== "NEW") {
        reason = await promptDialog("Remove sent item", "Reason (the kitchen has already received it)");
        if (!reason) return;
      }
      const o = cur(), before = JSON.stringify(o);
      o.items = o.items.filter((x) => x !== l);
      const t = compute(o.items.reduce((a, x) => a + x.lineTotal, 0), 0, cfg());
      Object.assign(o, { subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total });
      emit("orders");
      draw();
      save("removeItem", { orderId: id, lineId: l.id, reason }).catch((e) => {
        const i = S.orders.findIndex((x) => x.id === id);
        if (i >= 0) S.orders[i] = JSON.parse(before);
        order = i >= 0 ? S.orders[i] : JSON.parse(before);
        emit("orders");
        draw();
        toast(errText(e), "error");
      });
    }
    async function cancel(o) {
      const reason = await promptDialog("Cancel order " + o.id, "Reason for cancelling", { confirm: "Cancel order" });
      if (!reason) return;
      toast("Order cancelled", "ok", 2e3);
      modal.close();
      save("cancelOrder", { orderId: o.id, reason }).catch((e) => toast("Cancel NOT saved: " + errText(e), "error", 5e3));
    }
    function editInfo(o) {
      const free = S.tables.filter((t) => t.active && (t.status === "FREE" || t.id === o.tableId));
      const f = {
        table: field({ label: "Table", options: [{ value: "", label: "No table (takeaway)" }].concat(free.map((t) => ({ value: t.id, label: t.name + (t.section ? " \xB7 " + t.section : "") }))), value: o.tableId }),
        guests: field({ label: "Guests", type: "number", value: String(o.guests || ""), inputmode: "numeric" }),
        customer: field({ label: "Customer name", value: o.customerName || "", maxlength: 60 }),
        notes: field({ label: "Notes", type: "textarea", value: o.notes || "", maxlength: 160 })
      };
      openModal({
        title: "Order details",
        content: h("div", { class: "stack" }, Object.values(f).map((x) => x.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            const r = await act(ok, () => save("updateOrderInfo", { orderId: o.id, tableId: f.table.value(), guests: Number(f.guests.value()) || 0, customerName: f.customer.value(), notes: f.notes.value() }));
            if (r.ok) {
              m.close();
              draw();
            }
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Close"), ok];
        }
      });
    }
    if (!order || !order.items) load();
    else {
      draw();
      if (!S.orders.some((x) => x.id === id)) quietRefresh();
    }
    return modal;
  }
  var PAY_METHODS = [["CASH", "Cash"], ["CARD", "Card"], ["ONLINE", "Online / bank"]];
  function cashChips(due) {
    const out = [due];
    [100, 500, 1e3, 5e3].forEach((step) => {
      const v = Math.ceil(due / step) * step;
      if (v > due && !out.includes(v) && out.length < 4) out.push(v);
    });
    return out;
  }
  function quickPayPanel({ getDue, onGo, showBillOnly = true, payAllowed = true, onSplit }) {
    const st2 = { method: "CASH", received: "", reference: "" };
    const totalEl = h("div", { class: "qpay-total" });
    const seg = h("div", { class: "seg wide qpay-methods" });
    const extraEl = h("div", { class: "qpay-extra" });
    const changeEl = h("div", { class: "qpay-change" });
    const printBtn = h("button", { class: "btn btn-primary btn-lg", type: "button" }, "\u{1F5A8} Pay & Print");
    const payBtn = h("button", { class: "btn btn-ok btn-lg", type: "button" }, "\u2713 Pay (no print)");
    const billBtn = showBillOnly ? h("button", { class: "btn", type: "button" }, "\u{1F9FE} Print bill \u2013 pay later") : null;
    const recv = h("input", { type: "number", inputmode: "decimal", min: "0", step: "any", placeholder: "Cash received (optional)", "aria-label": "Cash received" });
    const ref = h("input", { type: "text", maxlength: "40", placeholder: "Reference / last 4 digits (optional)", "aria-label": "Reference" });
    recv.addEventListener("input", () => {
      st2.received = recv.value;
      refresh();
    });
    ref.addEventListener("input", () => {
      st2.reference = ref.value;
    });
    let busy = false;
    function drawSeg() {
      seg.replaceChildren(...PAY_METHODS.map(([k, label]) => h("button", { class: k === st2.method ? "on" : "", type: "button", onclick: () => {
        st2.method = k;
        drawSeg();
        drawExtra();
        refresh();
        (k === "CASH" ? recv : ref).focus();
      } }, label)));
    }
    function drawExtra() {
      if (st2.method === "CASH") {
        const due = getDue();
        extraEl.replaceChildren(recv, h("div", { class: "quick" }, cashChips(due).map((v, i) => h("button", { class: "btn btn-small", type: "button", onclick: () => {
          recv.value = String(v);
          st2.received = recv.value;
          refresh();
        } }, i === 0 ? "Exact" : M(v)))));
      } else extraEl.replaceChildren(ref);
    }
    function refresh() {
      const due = getDue();
      totalEl.replaceChildren(h("span", null, "Total to pay"), h("strong", null, M(due)));
      const got = Number(st2.received) || 0;
      let short = false;
      if (st2.method === "CASH" && got > 0) {
        short = got + 5e-3 < due;
        changeEl.replaceChildren(short ? h("span", { class: "bad" }, "Received is less than the total by " + M(due - got)) : h("span", null, "Change to return: ", h("strong", null, M(Math.round((got - due) * 100) / 100))));
      } else changeEl.replaceChildren();
      printBtn.disabled = payBtn.disabled = busy || !payAllowed || short || !(due > 0);
      if (billBtn) billBtn.disabled = busy;
    }
    async function go(btn, pay, print) {
      if (busy) return;
      busy = true;
      refresh();
      const due = getDue(), got = st2.method === "CASH" ? Number(st2.received) || 0 : 0;
      try {
        await onGo({ pay, print, method: st2.method, reference: st2.method === "CASH" ? "" : st2.reference.trim(), amount: due, received: got > 0 ? got : 0, change: got > 0 ? Math.round((got - due) * 100) / 100 : 0 });
      } catch (e) {
        toast(errText(e), "error", 6e3);
      }
      busy = false;
      if (btn.isConnected) refresh();
    }
    printBtn.addEventListener("click", () => go(printBtn, true, true));
    payBtn.addEventListener("click", () => go(payBtn, true, false));
    if (billBtn) billBtn.addEventListener("click", () => go(billBtn, false, true));
    const box = h(
      "div",
      { class: "qpay" },
      totalEl,
      payAllowed ? seg : null,
      payAllowed ? extraEl : null,
      changeEl,
      h("div", { class: "qpay-actions" }, payAllowed ? printBtn : null, payAllowed ? payBtn : null, billBtn, onSplit ? h("button", { class: "btn btn-quiet", type: "button", onclick: onSplit }, "Split / part payment") : null),
      payAllowed ? h("div", { class: "muted small" }, "Enter = Pay & Print") : null
    );
    box.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.tagName === "INPUT" && payAllowed) {
        e.preventDefault();
        if (!printBtn.disabled) printBtn.click();
      }
    });
    drawSeg();
    drawExtra();
    refresh();
    return { el: box, refresh: () => {
      drawExtra();
      refresh();
    }, focus: () => recv.isConnected && recv.focus() };
  }
  function openBill(orderId, { onChange, ctx, parent } = {}) {
    const body = h("div", { class: "bill-dlg" });
    const modal = openModal({ title: "Bill", content: body, actions: null });
    modal.box.classList.add("wide");
    let order = S.orders.find((x) => x.id === orderId) || null, bill = null;
    const disc = { type: "NONE", value: 0, reason: "" };
    const pays = [{ method: "CASH", amount: "", reference: "" }];
    const payUid = newId("pay");
    function takeDisc() {
      if (!bill) return;
      disc.type = bill.discountType || "NONE";
      disc.value = bill.discountValue || 0;
      disc.reason = bill.discountReason || "";
    }
    const billSig = () => JSON.stringify([order && order.status, order && order.total, order && order.items && order.items.length, bill && [bill.total, bill.paid, bill.paymentStatus, (bill.payments || []).length, bill.discountType, bill.discountValue]]);
    async function confirmFromSheet() {
      if (order.status === "OPEN" && !order.billId) return;
      const markO = order, markB = bill, before = billSig();
      try {
        const r = await fetchOrderAndBill(orderId, true);
        if (order !== markO || bill !== markB || !modal.box.isConnected) return;
        order = r.order;
        bill = r.bill;
        if (billSig() !== before) {
          takeDisc();
          draw();
        }
      } catch (e) {
      }
    }
    async function load() {
      const local = order && order.items ? order : docOrder(orderId);
      if (local) {
        order = local;
        const lb = docBill(orderId);
        if (order.billId || order.status !== "OPEN") bill = lb && (!order.billId || lb.id === order.billId) ? lb : provisionalBill(order);
        takeDisc();
        draw();
        confirmFromSheet();
        return;
      }
      body.replaceChildren(loadingBlock());
      try {
        const r = await fetchOrderAndBill(orderId);
        order = r.order;
        bill = r.bill;
        takeDisc();
        draw();
      } catch (e) {
        body.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      }
    }
    const due = () => Math.max(0, Math.round(((bill ? bill.total - bill.paid : 0) + 1e-9) * 100) / 100);
    function draw() {
      modal.box.querySelector("header h2").replaceChildren("Bill \xB7 ", order.id, " ", statusPill(order.status));
      const paidFull = bill && bill.paymentStatus === "PAID";
      const parts = [];
      parts.push(h("div", { class: "lines compact" }, order.items.map((l) => h(
        "div",
        { class: "line" },
        h("div", { class: "ln" }, l.name),
        h("div", { class: "lq" }, "\xD7" + l.qty),
        h("div", { class: "lt" }, M(l.lineTotal)),
        h("span")
      ))));
      const canBill = can("GENERATE_BILLS") && !paidFull && order.status !== "PAID" && order.status !== "CANCELLED";
      if (canBill) parts.push(discountBox());
      else if (bill) parts.push(totalsBlock({ subtotal: bill.subtotal, discount: bill.discount, service: bill.service, tax: bill.tax, roundOff: bill.roundOff, total: bill.total }));
      if (bill && bill.payments.length) parts.push(h(
        "div",
        { class: "pays-done" },
        h("h3", null, "Payments"),
        bill.payments.map((p) => h("div", { class: "trow" }, h("span", null, p.method + (p.reference ? " \xB7 " + p.reference : "") + (p.amount < 0 ? " (refund)" : "") + "  " + timeOf(p.at)), h("span", null, M(p.amount)))),
        h("div", { class: "trow grand" }, h("span", null, paidFull ? "Paid in full" : "Balance due"), h("span", null, paidFull ? M(bill.paid) : M(due())))
      ));
      const foot = h("div", { class: "dlg-actions" });
      const quickOpen = canBill && !bill && order.status === "OPEN";
      const quickBilled = bill && !paidFull && can("PROCESS_PAYMENT") && order.status === "BILLED" && !splitMode;
      panel = null;
      if (quickOpen || quickBilled) {
        panel = quickPayPanel({
          getDue: quickDue,
          onGo: quickGo,
          payAllowed: can("PROCESS_PAYMENT"),
          showBillOnly: quickOpen,
          onSplit: can("PROCESS_PAYMENT") ? () => {
            splitMode = true;
            if (!bill) makeBill().catch((e) => toast(errText(e), "error"));
            else draw();
          } : null
        });
        parts.push(panel.el);
      }
      if (canBill && !bill && !quickOpen) foot.append(btn("Make bill", "btn btn-primary", makeBill));
      if (canBill && bill && order.status === "BILLED") foot.append(btn("Update discount", "btn", makeBill));
      if (bill && !paidFull && can("PROCESS_PAYMENT") && order.status === "BILLED" && splitMode) parts.push(payBox());
      if (bill && canAny(["PRINT_RECEIPT", "VIEW_BILLS", "GENERATE_BILLS", "PROCESS_PAYMENT"])) foot.append(h("button", { class: "btn", type: "button", onclick: () => printReceipt(order, bill) }, "\u{1F5A8} Print receipt"));
      if (bill && order.status === "PAID" && can("REFUND") && bill.paid > 0) foot.append(h("button", { class: "btn btn-danger", type: "button", onclick: refund }, "Refund"));
      parts.push(foot);
      body.replaceChildren(...parts);
      if (panel) setTimeout(() => panel.focus(), 0);
    }
    let panel = null, splitMode = false;
    const discChanged = () => !bill || bill.paid <= 0 && (disc.type !== (bill.discountType || "NONE") || (Number(disc.value) || 0) !== (Number(bill.discountValue) || 0) || disc.type !== "NONE" && disc.reason !== (bill.discountReason || ""));
    function quickDue() {
      if (bill && (bill.paid > 0 || !can("GENERATE_BILLS") || !discChanged())) return due();
      return compute(order.subtotal, discountAmount(order.subtotal, disc.type, disc.value), cfg()).total;
    }
    function quickGo(x) {
      const regen = can("GENERATE_BILLS") && discChanged();
      if (regen && disc.type !== "NONE" && disc.value > 0 && !disc.reason) throw new Error("Please write the reason for the discount.");
      if (regen && !S.user.isOwner && disc.type === "PERCENT" && disc.value > cfg().maxDiscount) throw new Error("You may give at most " + cfg().maxDiscount + "% discount.");
      const t = regen ? compute(order.subtotal, discountAmount(order.subtotal, disc.type, disc.value), cfg()) : { subtotal: bill.subtotal, discount: bill.discount, service: bill.service, tax: bill.tax, roundOff: bill.roundOff, total: bill.total };
      const billId = bill ? bill.id : "BIL-" + String(order.id).substring(4);
      const paidBefore = regen ? 0 : bill.paid, prevPays = regen ? [] : bill.payments || [];
      const amount = Math.round((t.total - paidBefore) * 100) / 100;
      const payUid = newId("pay"), now = stamp();
      const payments = x.pay ? [{ method: x.method, amount, reference: x.reference }] : [];
      const localBill = Object.assign({}, t, {
        id: billId,
        orderId,
        discountType: regen ? disc.type : bill.discountType,
        discountValue: regen ? disc.value : bill.discountValue,
        discountReason: regen ? disc.reason : bill.discountReason,
        paid: x.pay ? t.total : paidBefore,
        paymentStatus: x.pay ? "PAID" : paidBefore > 0 ? "PARTIAL" : "UNPAID",
        status: "ACTIVE",
        payments: prevPays.concat(payments.map((p2) => Object.assign({ at: now }, p2)))
      });
      const localOrder = Object.assign({}, order, { status: x.pay ? "PAID" : "BILLED", billId, subtotal: t.subtotal, discount: t.discount, tax: t.tax, service: t.service, total: t.total });
      if (x.print) printReceipt(localOrder, localBill, x);
      let job;
      if (regen) job = billAndPay(orderId, { discountType: disc.type, discountValue: disc.value, discountReason: disc.reason, payments, payUid });
      else if (x.pay) job = save("payBill", { orderId, uid: payUid, payments }, { livePaidBefore: paidBefore });
      else job = Promise.resolve(null);
      const prevBill = bill, prevOrder = order;
      bill = localBill;
      order = localOrder;
      putOrder(localOrder);
      rememberDoc(localOrder, localBill);
      if (x.pay) {
        toast("Paid \u2713 " + M(t.total) + (x.change > 0 ? " \xB7 Change " + M(x.change) : ""), "ok", 2600);
        modal.close();
        if (parent) parent.close();
      } else {
        toast("Bill ready \u2713", "ok", 1600);
        draw();
        if (onChange) onChange();
      }
      job.then((r) => {
        if (!r || r.queued) {
          if (r && r.queued) toast("No connection: saved on this device and will be sent automatically.", "info", 7e3);
          return;
        }
        if (r.bill) {
          bill = r.bill;
          order = r.order || order;
          if (x.pay && r.bill.paymentStatus !== "PAID") toast("The bill total changed on the server. Balance due: " + M(r.bill.total - r.bill.paid) + ". Open the order to finish the payment.", "error", 1e4);
          if (modal.box.isConnected) draw();
        }
      }).catch((e) => {
        toast((x.pay ? "Payment NOT saved: " : "Bill NOT saved: ") + errText(e), "error", 9e3);
        bill = prevBill;
        order = prevOrder;
        refreshSoon();
        if (modal.box.isConnected) draw();
      });
    }
    function btn(label, cls, fn) {
      const b = h("button", { class: cls, type: "button" }, label);
      b.addEventListener("click", () => act(b, fn));
      return b;
    }
    function discountBox() {
      const c = cfg();
      const typeSel = field({ label: "Discount", options: [{ value: "NONE", label: "No discount" }, { value: "PERCENT", label: "Percent %" }, { value: "FIXED", label: "Fixed amount" }], value: disc.type });
      const val = field({ label: "Value", type: "number", value: disc.value ? String(disc.value) : "", inputmode: "decimal" });
      const why = field({ label: "Reason (required for a discount)", value: disc.reason, maxlength: 80 });
      const preview = h("div");
      const canDisc = can("APPLY_DISCOUNT");
      function sync() {
        disc.type = typeSel.value();
        disc.value = Number(val.value()) || 0;
        disc.reason = why.value();
        val.el.hidden = why.el.hidden = disc.type === "NONE";
        const d = discountAmount(order.subtotal, disc.type, disc.value);
        const t = compute(order.subtotal, d, c);
        preview.replaceChildren(...[
          totalsBlock(Object.assign({}, t)),
          !S.user.isOwner && disc.type === "PERCENT" && disc.value > c.maxDiscount ? h("div", { class: "form-error" }, "You may give at most " + c.maxDiscount + "% discount.") : null
        ].filter(Boolean));
        if (panel) panel.refresh();
      }
      [typeSel.input, val.input, why.input].forEach((i) => i.addEventListener("input", sync));
      sync();
      return h("div", { class: "stack" }, canDisc ? h("div", { class: "form-grid" }, typeSel.el, val.el, h("div", { class: "span-2" }, why.el)) : null, preview);
    }
    async function makeBill() {
      if (disc.type !== "NONE" && !disc.reason) throw new Error("Please write the reason for the discount.");
      const prevBill = bill, prevOrder = order;
      const d = discountAmount(order.subtotal, disc.type, disc.value), t = compute(order.subtotal, d, cfg());
      bill = Object.assign({}, t, {
        id: prevBill ? prevBill.id : "BILL\u2026",
        orderId,
        discountType: disc.type,
        discountValue: disc.value,
        discountReason: disc.reason,
        paid: prevBill ? prevBill.paid : 0,
        paymentStatus: "UNPAID",
        status: "ACTIVE",
        payments: prevBill ? prevBill.payments : [],
        pending: true
      });
      order = Object.assign({}, order, { status: "BILLED", subtotal: t.subtotal, discount: t.discount, tax: t.tax, service: t.service, total: t.total });
      draw();
      billSaving = save("generateBill", { orderId, discountType: disc.type, discountValue: disc.value, discountReason: disc.reason });
      billSaving.then((r) => {
        if (r.queued) return;
        bill = r.bill;
        order = r.order || order;
        if (onChange) onChange();
        if (modal.box.isConnected) draw();
      }).catch((e) => {
        bill = prevBill;
        order = prevOrder;
        toast(errText(e), "error");
        if (modal.box.isConnected) draw();
      });
    }
    let billSaving = null;
    function payBox() {
      const total = due();
      const rows = h("div", { class: "pay-rows" });
      const sum = h("div", { class: "pay-sum" });
      const payBtn = h("button", { class: "btn btn-primary btn-lg", type: "button" }, "Take payment");
      function drawRows() {
        rows.replaceChildren(...pays.map((p, i) => {
          const method = h("select", { "aria-label": "Method" }, ["CASH", "CARD", "ONLINE", "OTHER"].map((m) => h("option", { value: m }, { CASH: "Cash", CARD: "Card", ONLINE: "Online / bank", OTHER: "Other" }[m])));
          method.value = p.method;
          method.addEventListener("change", () => {
            p.method = method.value;
          });
          const amt = h("input", { type: "number", inputmode: "decimal", min: "0", step: "any", placeholder: "Amount", "aria-label": "Amount" });
          amt.value = p.amount;
          amt.addEventListener("input", () => {
            p.amount = amt.value;
            calc();
          });
          const ref = h("input", { type: "text", maxlength: "40", placeholder: p.method === "CASH" ? "Reference (optional)" : "Reference / last 4 digits", "aria-label": "Reference" });
          ref.value = p.reference;
          ref.addEventListener("input", () => {
            p.reference = ref.value;
          });
          return h(
            "div",
            { class: "pay-row" },
            method,
            amt,
            ref,
            pays.length > 1 ? h("button", { class: "btn btn-quiet btn-small", type: "button", onclick: () => {
              pays.splice(i, 1);
              drawRows();
              calc();
            } }, "\u2715") : h("span")
          );
        }));
      }
      function calc() {
        const got = pays.reduce((s, p) => s + (Number(p.amount) || 0), 0);
        const left = Math.round((total - got) * 100) / 100;
        sum.replaceChildren(
          h("div", { class: "trow" }, h("span", null, "Entered"), h("span", null, M(got))),
          h("div", { class: "trow grand" }, h("span", null, left > 0 ? "Still to pay" : left < 0 ? "Too much (change)" : "Exact"), h("span", null, M(Math.abs(left))))
        );
        payBtn.disabled = got <= 0 || left < 0;
      }
      payBtn.addEventListener("click", () => act(payBtn, async () => {
        const list = pays.filter((p2) => Number(p2.amount) > 0).map((p2) => ({ method: p2.method, amount: Number(p2.amount), reference: p2.reference }));
        const sum2 = list.reduce((a, p2) => a + p2.amount, 0), prevBill = bill, prevOrder = order;
        const full = sum2 + 5e-3 >= due();
        const now = (/* @__PURE__ */ new Date()).toISOString();
        bill = Object.assign({}, bill, {
          paid: Math.round((bill.paid + Math.min(sum2, due())) * 100) / 100,
          paymentStatus: full ? "PAID" : "PARTIAL",
          payments: bill.payments.concat(list.map((p2) => ({ method: p2.method, reference: p2.reference, amount: p2.amount, at: now })))
        });
        if (full) order = Object.assign({}, order, { status: "PAID" });
        pays.splice(0, pays.length, { method: "CASH", amount: "", reference: "" });
        if (full) {
          toast("Payment complete", "ok", 2200);
          if (S.settings.AUTO_PRINT === "true") printReceipt(order, bill);
        }
        draw();
        const p = save("payBill", { orderId, uid: payUid + "-" + prevBill.payments.length, payments: list }, { livePaidBefore: prevBill.paid });
        p.then((r) => {
          if (r.queued) return;
          bill = r.bill;
          order = r.order || order;
          if (onChange) onChange();
          if (modal.box.isConnected) draw();
        }).catch((e) => {
          bill = prevBill;
          order = prevOrder;
          toast("Payment NOT saved: " + errText(e), "error", 6e3);
          if (modal.box.isConnected) draw();
        });
      }, { done: "Paid" }));
      drawRows();
      calc();
      return h(
        "div",
        { class: "pay-box" },
        h("h3", null, "Payment \xB7 " + M(total)),
        h(
          "div",
          { class: "quick" },
          h("button", { class: "btn btn-small", type: "button", onclick: () => {
            pays.splice(0, pays.length, { method: "CASH", amount: String(total), reference: "" });
            drawRows();
            calc();
          } }, "Full cash"),
          h("button", { class: "btn btn-small", type: "button", onclick: () => {
            pays.splice(0, pays.length, { method: "CARD", amount: String(total), reference: "" });
            drawRows();
            calc();
          } }, "Full card"),
          h("button", { class: "btn btn-small", type: "button", onclick: () => {
            pays.push({ method: "CARD", amount: "", reference: "" });
            drawRows();
          } }, "+ Split payment")
        ),
        rows,
        sum,
        payBtn
      );
    }
    async function refund() {
      const amount = await promptDialog("Refund", "Amount to refund (up to " + M(bill.paid) + ")", { value: String(bill.paid) });
      if (!amount) return;
      const reason = await promptDialog("Refund", "Reason");
      if (!reason) return;
      try {
        const r = await save("refund", { billId: bill.id, amount: Number(amount), reason, method: "CASH", uid: newId("rfd") });
        bill = r.bill;
        toast("Refund saved", "ok", 2e3);
        draw();
      } catch (e) {
        toast(errText(e), "error");
      }
    }
    load();
    return modal;
  }
  var esc = (s) => String(s === null || s === void 0 ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  function printReceipt(order, bill, extra = {}) {
    const st2 = S.settings, size = st2.RECEIPT_SIZE || "80mm", m = (n) => esc(money(n, st2));
    const width = size === "A4" ? "190mm" : size === "58mm" ? "52mm" : "72mm", fs = size === "A4" ? "13px" : "11px";
    const rows = (order.items || []).map((l) => `<tr><td>${esc(l.name)}${l.notes ? "<br><small>" + esc(l.notes) + "</small>" : ""}</td><td class="r">${l.qty}</td><td class="r">${m(l.price)}</td><td class="r">${m(l.lineTotal)}</td></tr>`).join("");
    const line = (k, v, b) => `<tr class="${b ? "b" : ""}"><td colspan="3">${esc(k)}</td><td class="r">${v}</td></tr>`;
    let t = line("Subtotal", m(bill.subtotal));
    if (bill.discount) t += line("Discount", "-" + m(bill.discount));
    if (bill.service) t += line("Service charge", m(bill.service));
    if (bill.tax) t += line(st2.TAX_LABEL || "Tax", m(bill.tax));
    if (bill.roundOff) t += line("Rounding", m(bill.roundOff));
    t += line("TOTAL", m(bill.total), true);
    let pay = (bill.payments || []).map((p) => line(p.method + (p.reference ? " " + p.reference : ""), m(p.amount))).join("");
    if (extra.received > 0) pay += line("Cash received", m(extra.received)) + line("Change", m(extra.change || 0), true);
    const paidState = bill.paymentStatus === "PAID" || bill.payments && bill.payments.length && (bill.paid || 0) + 5e-3 >= bill.total ? "*** PAID ***" : bill.paymentStatus === "PARTIAL" ? "PARTLY PAID" : "UNPAID BILL";
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(bill.id)}</title><style>
    @page{margin:4mm} body{font:${fs}/1.35 "Courier New",monospace;width:${width};margin:0 auto;color:#000}
    h1{font-size:1.5em;margin:0;text-align:center} .c{text-align:center} hr{border:0;border-top:1px dashed #000;margin:6px 0}
    table{width:100%;border-collapse:collapse} td{padding:1px 0;vertical-align:top} .r{text-align:right;white-space:nowrap;padding-left:6px} .b td{font-weight:700;border-top:1px solid #000;padding-top:3px;font-size:1.15em} small{font-size:.85em}
    </style></head><body>
    <h1>${esc(st2.HOTEL_NAME || S.hotel && S.hotel.name || "")}</h1>
    <div class="c">${esc(st2.HOTEL_ADDRESS || "")}${st2.HOTEL_PHONE ? "<br>Tel: " + esc(st2.HOTEL_PHONE) : ""}${st2.TAX_NUMBER ? "<br>Tax no: " + esc(st2.TAX_NUMBER) : ""}</div><hr>
    <div>${bill.id === order.id ? "Receipt: " + esc(bill.id) : "Bill: " + esc(bill.id) + "<br>Order: " + esc(order.id)}${order.tableName ? " \xB7 " + esc(order.tableName) : " \xB7 Takeaway"}<br>Date: ${esc(fmtStamp(order.openedAt))}<br>${order.waiterName ? "Served by: " + esc(order.waiterName) + "<br>" : ""}${order.customerName ? "Customer: " + esc(order.customerName) : ""}</div><hr>
    <table><thead><tr><td>Item</td><td class="r">Qty</td><td class="r">Rate</td><td class="r">Amount</td></tr></thead><tbody>${rows}</tbody></table><hr>
    <table>${t}</table>${pay ? "<hr><table>" + pay + "</table>" : ""}<hr>
    <div class="c"><b>${paidState}</b></div>${extra.provisional ? '<div class="c"><small>Saved offline - bill number will be given when online</small></div>' : ""}<hr>
    <div class="c">${esc(st2.RECEIPT_FOOTER || "Thank you for visiting!")}</div></body></html>`;
    const frame = h("iframe", { style: "position:fixed;right:0;bottom:0;width:0;height:0;border:0", "aria-hidden": "true" });
    document.body.append(frame);
    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    setTimeout(() => {
      try {
        frame.contentWindow.focus();
        frame.contentWindow.print();
      } catch (e) {
        toast("Printing is not available in this browser.", "error");
      }
      setTimeout(() => frame.remove(), 6e4);
    }, 120);
  }

  // web/js/s-tables.js
  var filter = "ALL";
  function render2(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const wrap = h("div", { class: "stack" });
    el.replaceChildren(wrap);
    function draw() {
      const tableList = S.tables.filter((t) => t.active);
      const byOrder = {};
      S.orders.forEach((o) => {
        byOrder[o.id] = o;
      });
      const counts = { ALL: tableList.length, FREE: 0, OCCUPIED: 0, BILLING: 0 };
      tableList.forEach((t) => {
        counts[t.status] = (counts[t.status] || 0) + 1;
      });
      const shown = tableList.filter((t) => filter === "ALL" || t.status === filter);
      const sections = {};
      shown.forEach((t) => {
        (sections[t.section || "Tables"] = sections[t.section || "Tables"] || []).push(t);
      });
      const bar2 = h(
        "div",
        { class: "toolbar" },
        tabs([{ key: "ALL", label: "All " + counts.ALL }, { key: "FREE", label: "Free " + counts.FREE }, { key: "OCCUPIED", label: "Busy " + (counts.OCCUPIED || 0) }, { key: "BILLING", label: "Billing " + (counts.BILLING || 0) }], filter, (k) => {
          filter = k;
          draw();
        }),
        h("div", { class: "spacer" }),
        can("CREATE_ORDERS") ? h("button", { class: "btn btn-primary", type: "button", onclick: () => ctx.nav("pos", { takeaway: true }) }, "\uFF0B Takeaway order") : null
      );
      const parts = [bar2];
      if (!tableList.length) parts.push(emptyState("No tables yet", can("MANAGE_TABLES") ? "Add tables in Settings \u2192 Tables." : "Ask the manager to add tables."));
      Object.keys(sections).forEach((name) => parts.push(h(
        "section",
        null,
        h("h2", { class: "sec" }, name),
        h("div", { class: "tgrid" }, sections[name].map((t) => {
          const o = byOrder[t.currentOrderId];
          return h(
            "button",
            { class: "tcard t-" + t.status, type: "button", onclick: () => pick(t, o) },
            h("div", { class: "tn" }, t.name),
            h("div", { class: "ts" }, t.capacity + " seats"),
            o ? h("div", { class: "tinfo" }, h("strong", null, M2(o.total)), h("span", null, minutesSince(o.openedAt) + " min" + (o.waiterName ? " \xB7 " + o.waiterName.split(" ")[0] : ""))) : h("div", { class: "tinfo free" }, "Free"),
            t.status === "BILLING" ? h("div", { class: "tflag" }, "Awaiting payment") : null
          );
        }))
      )));
      const take = S.orders.filter((o) => !o.tableId);
      if (take.length && filter === "ALL") parts.push(h(
        "section",
        null,
        h("h2", { class: "sec" }, "Takeaway"),
        h("div", { class: "tgrid" }, take.map((o) => h(
          "button",
          { class: "tcard t-OCCUPIED", type: "button", onclick: () => o.tmp ? toast("Saving this order\u2026", "info", 1200) : openOrder(o, ctx) },
          h("div", { class: "tn" }, o.customerName || o.id.slice(-4)),
          h("div", { class: "ts" }, "Takeaway"),
          h("div", { class: "tinfo" }, h("strong", null, M2(o.total)), h("span", null, minutesSince(o.openedAt) + " min"))
        )))
      ));
      wrap.replaceChildren(...parts);
    }
    function pick(t, o) {
      if (o && o.tmp) {
        toast("Saving this order\u2026", "info", 1200);
        return;
      }
      if (o) {
        openOrder(o, ctx);
        return;
      }
      if (t.status !== "FREE") {
        toast("This table is " + t.status.toLowerCase() + ". Refresh in a moment.", "info");
        return;
      }
      if (!can("CREATE_ORDERS")) {
        toast("You do not have permission to start orders.", "info");
        return;
      }
      ctx.nav("pos", { tableId: t.id });
    }
    draw();
    const off = on((k) => {
      if (k.includes("tables") || k.includes("orders") || k.includes("all")) draw();
    });
    const tm = setInterval(draw, 6e4);
    return () => {
      off();
      clearInterval(tm);
    };
  }

  // web/js/s-pos.js
  var s_pos_exports = {};
  __export(s_pos_exports, {
    render: () => render3
  });
  var cart = { uid: "", lines: [], type: "DINE_IN", tableId: "", guests: "", customerId: "", customerName: "", notes: "", addTo: "" };
  var reset = () => {
    Object.assign(cart, { uid: "", lines: [], type: "DINE_IN", tableId: "", guests: "", customerId: "", customerName: "", notes: "", addTo: "" });
  };
  function render3(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const hand = S.handoff;
    S.handoff = null;
    if (hand) {
      if (hand.orderId) {
        reset();
        cart.addTo = hand.orderId;
      } else if (hand.takeaway) {
        if (cart.addTo) reset();
        cart.type = "TAKEAWAY";
        cart.tableId = "";
      } else if (hand.tableId) {
        if (cart.addTo) reset();
        cart.type = "DINE_IN";
        cart.tableId = hand.tableId;
      }
    }
    let catId = "ALL", q = "";
    const addOrder = () => S.orders.find((o) => o.id === cart.addTo) || null;
    if (cart.addTo && !addOrder()) reset();
    const grid = h("div", { class: "mgrid" });
    const chips = h("div", { class: "chips" });
    const cartEl = h("aside", { class: "cart" });
    const search = h("input", { type: "search", placeholder: "Search menu\u2026", "aria-label": "Search menu", class: "search" });
    search.addEventListener("input", debounce(() => {
      q = search.value.trim().toLowerCase();
      drawMenu();
    }, 120));
    el.replaceChildren(h("div", { class: "pos" }, h("section", { class: "pos-menu" }, h("div", { class: "pos-top" }, search, chips), grid), cartEl));
    function drawChips() {
      const cats = [{ id: "ALL", name: "All" }].concat(S.categories.filter((c) => c.status !== "INACTIVE"));
      chips.replaceChildren(...cats.map((c) => h("button", { class: "chip" + (c.id === catId ? " on" : ""), type: "button", onclick: () => {
        catId = c.id;
        drawChips();
        drawMenu();
      } }, c.name)));
    }
    function drawMenu() {
      const items = S.menu.filter((m) => (catId === "ALL" || m.categoryId === catId) && (!q || m.name.toLowerCase().includes(q)));
      if (!items.length) {
        grid.replaceChildren(emptyState(S.menu.length ? "No items match" : "The menu is empty", S.menu.length ? "" : can("ADD_MENU") ? "Add items in the Menu screen." : "Ask the manager to add menu items."));
        return;
      }
      grid.replaceChildren(...items.map((m) => h(
        "button",
        { class: "mcard" + (m.available ? "" : " off"), type: "button", disabled: !m.available, onclick: () => add(m) },
        m.thumbUrl ? h("img", { src: m.thumbUrl, alt: "", loading: "lazy", referrerpolicy: "no-referrer", onerror: (e) => e.currentTarget.remove() }) : h("div", { class: "ph" }, m.name.slice(0, 1).toUpperCase()),
        h("div", { class: "mn" }, m.name),
        h("div", { class: "mp" }, m.available ? M2(m.price) : "Sold out"),
        cart.lines.find((l) => l.menuId === m.id && !l.notes) ? h("span", { class: "badge" }, cart.lines.filter((l) => l.menuId === m.id).reduce((s, l) => s + l.qty, 0)) : null
      )));
    }
    function add(m) {
      const ex = cart.lines.find((l) => l.menuId === m.id && !l.notes);
      if (ex) ex.qty++;
      else cart.lines.push({ menuId: m.id, name: m.name, price: m.price, qty: 1, notes: "" });
      if (!cart.uid) cart.uid = newId("ord");
      drawMenu();
      drawCart();
    }
    function drawCart() {
      const base = addOrder();
      const sub = cart.lines.reduce((s, l) => s + l.price * l.qty, 0);
      const t = compute(base ? base.subtotal + sub : sub, 0, cfg());
      const free = S.tables.filter((x) => x.active && (x.status === "FREE" || x.id === cart.tableId));
      const head = base ? h(
        "div",
        { class: "cart-head" },
        h("strong", null, "Adding to " + base.id),
        h("div", { class: "muted" }, (base.tableName || "Takeaway") + " \xB7 currently " + M2(base.total)),
        h("button", { class: "btn btn-small", type: "button", onclick: () => {
          reset();
          render3(el, ctx);
        } }, "Start new order instead")
      ) : h(
        "div",
        { class: "cart-head" },
        h("div", { class: "seg" }, ["DINE_IN", "TAKEAWAY"].map((k) => h("button", { class: k === cart.type ? "on" : "", type: "button", onclick: () => {
          cart.type = k;
          if (k === "TAKEAWAY") cart.tableId = "";
          drawCart();
        } }, k === "DINE_IN" ? "Dine-in" : "Takeaway"))),
        cart.type === "DINE_IN" ? h(
          "div",
          { class: "form-grid" },
          (() => {
            const f = field({ label: "Table", options: [{ value: "", label: "Choose table\u2026" }].concat(free.map((x) => ({ value: x.id, label: x.name + (x.section ? " \xB7 " + x.section : "") }))), value: cart.tableId });
            f.input.addEventListener("change", () => {
              cart.tableId = f.value();
            });
            return f.el;
          })(),
          (() => {
            const f = field({ label: "Guests", type: "number", value: cart.guests, inputmode: "numeric" });
            f.input.addEventListener("input", () => {
              cart.guests = f.value();
            });
            return f.el;
          })()
        ) : null,
        customerBox()
      );
      const linesEl = h("div", { class: "lines" }, cart.lines.length ? cart.lines.map((l, i) => h(
        "div",
        { class: "line" },
        h("div", { class: "ln" }, h("strong", null, l.name), h("button", { class: "link-button note-btn", type: "button", onclick: () => noteFor(l) }, l.notes ? "\u270E " + l.notes : "+ note")),
        h("div", { class: "lq" }, h("button", { class: "qty-btn", type: "button", "aria-label": "One less", onclick: () => {
          l.qty--;
          if (l.qty < 1) cart.lines.splice(i, 1);
          drawMenu();
          drawCart();
        } }, "\u2212"), h("span", { class: "qty" }, l.qty), h("button", { class: "qty-btn", type: "button", "aria-label": "One more", onclick: () => {
          l.qty++;
          drawMenu();
          drawCart();
        } }, "+")),
        h("div", { class: "lt" }, M2(l.price * l.qty)),
        h("span")
      )) : h("div", { class: "muted pad" }, "Tap items on the left to add them."));
      const placeBtn = h("button", { class: "btn btn-block", type: "button", disabled: !cart.lines.length }, base ? "Add to order" : "Save order");
      const sendBtn = h("button", { class: "btn btn-primary btn-block btn-lg", type: "button", disabled: !cart.lines.length || !can("SEND_TO_KITCHEN") }, base ? "Add & send to kitchen" : "Send to kitchen");
      const canDirect = can("CREATE_ORDERS") && can("GENERATE_BILLS");
      const directBtn = canDirect ? h("button", { class: "btn btn-ok btn-block btn-lg", type: "button", disabled: !cart.lines.length, title: "F9" }, "\u{1F4B5} " + (can("PROCESS_PAYMENT") ? "Direct bill & pay" : "Direct bill") + "  (F9)") : null;
      if (directBtn) directBtn.addEventListener("click", directBill);
      placeBtn.addEventListener("click", () => submit(placeBtn, false));
      sendBtn.addEventListener("click", () => submit(sendBtn, true));
      cartEl.replaceChildren(
        head,
        linesEl,
        h(
          "div",
          { class: "totals" },
          h("div", { class: "trow" }, h("span", null, "Subtotal"), h("span", null, M2(t.subtotal))),
          t.service ? h("div", { class: "trow" }, h("span", null, "Service charge"), h("span", null, M2(t.service))) : null,
          t.tax ? h("div", { class: "trow" }, h("span", null, S.settings.TAX_LABEL || "Tax"), h("span", null, M2(t.tax))) : null,
          h("div", { class: "trow grand" }, h("span", null, "Total"), h("span", null, M2(t.total)))
        ),
        h(
          "div",
          { class: "cart-actions" },
          directBtn,
          sendBtn,
          placeBtn,
          cart.lines.length ? h("button", { class: "btn btn-quiet btn-block", type: "button", onclick: () => {
            reset();
            drawMenu();
            drawCart();
          } }, "Clear") : null
        )
      );
    }
    function customerBox() {
      const f = field({ label: "Customer (optional)", value: cart.customerName, maxlength: 60, placeholder: "Name or phone" });
      const list = h("div", { class: "suggest" });
      const find = debounce(async () => {
        const text = f.value();
        cart.customerName = text;
        cart.customerId = "";
        if (text.length < 2) {
          list.replaceChildren();
          return;
        }
        try {
          const r = await read2("searchCustomers", { q: text });
          list.replaceChildren(...r.customers.map((c) => h("button", { class: "sug", type: "button", onclick: () => {
            cart.customerId = c.id;
            cart.customerName = c.name;
            f.input.value = c.name;
            list.replaceChildren();
          } }, c.name + (c.phone ? " \xB7 " + c.phone : ""))));
        } catch (e) {
          list.replaceChildren();
        }
      }, 300);
      f.input.addEventListener("input", find);
      return h("div", { class: "cust" }, f.el, list);
    }
    async function noteFor(l) {
      const f = field({ label: "Note for the kitchen (" + l.name + ")", value: l.notes, maxlength: 80, placeholder: "e.g. no onion, extra spicy" });
      const m = openModal({ title: "Item note", content: f.el, actions: (mm) => [
        h("button", { class: "btn", type: "button", onclick: () => mm.close() }, "Cancel"),
        h("button", { class: "btn btn-primary", type: "button", onclick: () => {
          l.notes = f.value();
          mm.close();
          drawCart();
        } }, "Save")
      ] });
      f.input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          m.box.querySelector(".btn-primary").click();
        }
      });
    }
    function directBill() {
      if (!cart.lines.length) return;
      const base = addOrder();
      const lines = cart.lines.map((l) => Object.assign({}, l));
      const items = lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes }));
      const sub = Math.round((lines.reduce((a, l) => a + l.price * l.qty, 0) + (base ? base.subtotal : 0)) * 100) / 100;
      const disc = { type: "NONE", value: 0, reason: "" };
      const totals = () => compute(sub, discountAmount(sub, disc.type, disc.value), cfg());
      const table = !base && cart.type === "DINE_IN" && cart.tableId ? S.tables.find((t) => t.id === cart.tableId) : null;
      const where = base ? (base.tableName || "Takeaway") + " \xB7 " + base.id : table ? table.name : "Counter / takeaway";
      const preview = h("div");
      const allLines = (base ? base.items.map((l) => ({ name: l.name, qty: l.qty, price: l.price, lineTotal: l.lineTotal, notes: l.notes })) : []).concat(lines.map((l) => ({ name: l.name, qty: l.qty, price: l.price, lineTotal: Math.round(l.price * l.qty * 100) / 100, notes: l.notes })));
      let panel;
      function drawPreview() {
        preview.replaceChildren(...[totalsBlock(totals()), !S.user.isOwner && disc.type === "PERCENT" && disc.value > cfg().maxDiscount ? h("div", { class: "form-error" }, "You may give at most " + cfg().maxDiscount + "% discount.") : null].filter(Boolean));
        if (panel) panel.refresh();
      }
      let discEl = null;
      if (can("APPLY_DISCOUNT")) {
        const typeSel = field({ label: "Discount", options: [{ value: "NONE", label: "No discount" }, { value: "PERCENT", label: "Percent %" }, { value: "FIXED", label: "Fixed amount" }], value: "NONE" });
        const val = field({ label: "Value", type: "number", value: "", inputmode: "decimal" });
        const why = field({ label: "Reason", value: "", maxlength: 80 });
        const sync = () => {
          disc.type = typeSel.value();
          disc.value = Number(val.value()) || 0;
          disc.reason = why.value();
          val.el.hidden = why.el.hidden = disc.type === "NONE";
          drawPreview();
        };
        [typeSel.input, val.input, why.input].forEach((i) => i.addEventListener("input", sync));
        val.el.hidden = why.el.hidden = true;
        discEl = h("details", { class: "qdisc" }, h("summary", null, "Discount"), h("div", { class: "form-grid" }, typeSel.el, val.el, h("div", { class: "span-2" }, why.el)));
      }
      const list = h("div", { class: "lines compact qlines" }, allLines.map((l) => h("div", { class: "line" }, h("div", { class: "ln" }, l.name), h("div", { class: "lq" }, "\xD7" + l.qty), h("div", { class: "lt" }, M2(l.lineTotal)), h("span"))));
      const m = openModal({ title: "Direct bill \xB7 " + where, content: h("div", { class: "stack" }, list, discEl, preview) });
      m.box.classList.add("wide");
      panel = quickPayPanel({
        getDue: () => totals().total,
        payAllowed: can("PROCESS_PAYMENT"),
        showBillOnly: true,
        onGo: (x) => {
          if (disc.type !== "NONE" && disc.value > 0 && !disc.reason) throw new Error("Please write the reason for the discount.");
          if (!S.user.isOwner && disc.type === "PERCENT" && disc.value > cfg().maxDiscount) throw new Error("You may give at most " + cfg().maxDiscount + "% discount.");
          finish(x);
          m.close();
        }
      });
      m.box.querySelector(".content > .stack").append(panel.el);
      drawPreview();
      setTimeout(() => panel.focus(), 0);
      function finish(x) {
        const t = totals();
        const snapshot = JSON.parse(JSON.stringify(cart));
        const payUid = newId("pay");
        const payments = x.pay ? [{ method: x.method, amount: t.total, reference: x.reference }] : [];
        const dsc = { discountType: disc.type, discountValue: disc.value, discountReason: disc.reason };
        const type = base ? base.type : table ? "DINE_IN" : "TAKEAWAY";
        const orderUid = cart.uid || newId("ord");
        const ref = "R-" + String(orderUid).slice(-6).toUpperCase();
        const localOrder = { id: base ? base.id : ref, type, tableId: table ? table.id : base ? base.tableId : "", tableName: table ? table.name : base ? base.tableName : "", customerName: base ? base.customerName : cart.customerName, waiterName: base ? base.waiterName : S.user.name, openedAt: base ? base.openedAt : stamp(), items: allLines };
        const localBill = (id) => Object.assign({}, t, { id, paid: x.pay ? t.total : 0, paymentStatus: x.pay ? "PAID" : "UNPAID", payments: payments.map((p2) => Object.assign({ at: stamp() }, p2)) });
        if (x.print) printReceipt(localOrder, localBill(base ? "BIL-" + String(base.id).substring(4) : ref), x);
        let job;
        if (base) {
          job = save("addItems", { orderId: base.id, items, send: false }).then(() => billAndPay(base.id, Object.assign({ payments, payUid }, dsc)));
        } else {
          job = quickSale(Object.assign({ uid: orderUid, type, tableId: table ? table.id : "", guests: Number(cart.guests) || 0, customerId: cart.customerId, customerName: cart.customerName, notes: cart.notes, items, payments, payUid, payFull: true }, dsc));
        }
        reset();
        drawMenu();
        drawCart();
        toast(x.pay ? "Paid \u2713 " + M2(t.total) + (x.change > 0 ? " \xB7 Change " + M2(x.change) : "") + (x.print ? " \xB7 printing\u2026" : "") : "Bill saved \u2713", "ok", 2600);
        job.then((r) => {
          if (!r) return;
          if (r.queued || r.partial) {
            toast(r.partial && !r.queued ? "Order saved, but the bill could not be finished. Open the order to take payment." : "No connection: saved on this device and will be sent automatically.", "info", 8e3);
            return;
          }
          if (r.bill && x.pay && r.bill.paymentStatus !== "PAID") toast("The bill total changed on the server. Balance due: " + M2(r.bill.total - r.bill.paid) + ". Open the order to finish the payment.", "error", 1e4);
        }).catch((err) => {
          if (!cart.lines.length) Object.assign(cart, snapshot);
          refreshSoon();
          toast("The bill for " + where + " was NOT saved: " + errText(err) + (cart.lines.length ? " Your items are back in the cart." : ""), "error", 12e3);
          if (cartEl.isConnected) {
            drawMenu();
            drawCart();
          }
        });
      }
    }
    function submit(btn, send) {
      const base = addOrder();
      if (!base && cart.type === "DINE_IN" && !cart.tableId) {
        toast("Choose a table first (or switch to Takeaway).", "error");
        return;
      }
      const lines = cart.lines.map((l) => Object.assign({}, l)), items = lines.map((l) => ({ menuId: l.menuId, qty: l.qty, notes: l.notes }));
      const snapshot = JSON.parse(JSON.stringify(cart));
      const where = base ? base.id : cart.type === "DINE_IN" ? (S.tables.find((t) => t.id === cart.tableId) || {}).name : "takeaway";
      const fail = (err) => {
        Object.assign(cart, snapshot);
        toast("The order for " + where + " was NOT saved: " + errText(err) + " Your items are back in the cart.", "error", 12e3);
      };
      if (base) addToOrder(base.id, lines, send, fail);
      else placeOrder({ uid: cart.uid || newId("ord"), type: cart.type, tableId: cart.tableId, guests: Number(cart.guests) || 0, customerId: cart.customerId, customerName: cart.customerName, notes: cart.notes, items, send }, lines, fail);
      reset();
      toast(send ? "Sent to kitchen \u2713" : "Order saved \u2713", "ok", 1400);
      if (can("VIEW_TABLES")) ctx.nav("tables");
      else {
        drawMenu();
        drawCart();
      }
    }
    drawChips();
    drawMenu();
    drawCart();
    const onKeyPos = (e) => {
      if (e.key === "F9" && cartEl.isConnected && !document.querySelector(".scrim")) {
        e.preventDefault();
        if (cart.lines.length && can("CREATE_ORDERS") && can("GENERATE_BILLS")) directBill();
      }
    };
    document.addEventListener("keydown", onKeyPos);
    const off0 = on((k) => {
      if (k.includes("menu") || k.includes("all")) {
        drawChips();
        drawMenu();
      }
      if (k.includes("tables") || k.includes("orders")) {
        if (!cartEl.contains(document.activeElement) || document.activeElement.tagName === "BODY") drawCart();
      }
    });
    return () => {
      off0();
      document.removeEventListener("keydown", onKeyPos);
    };
  }

  // web/js/s-kitchen.js
  var s_kitchen_exports = {};
  __export(s_kitchen_exports, {
    render: () => render4
  });
  var sound = true;
  var seen = /* @__PURE__ */ new Set();
  var first = true;
  function beep() {
    if (!sound) return;
    try {
      const a = new (window.AudioContext || window.webkitAudioContext)(), o = a.createOscillator(), g = a.createGain();
      o.connect(g);
      g.connect(a.destination);
      o.frequency.value = 880;
      g.gain.value = 0.08;
      o.start();
      o.stop(a.currentTime + 0.18);
    } catch (e) {
    }
  }
  function render4(el, ctx) {
    const board = h("div", { class: "kboard" });
    const soundBtn = h("button", { class: "btn btn-small", type: "button", onclick: () => {
      sound = !sound;
      soundBtn.textContent = sound ? "\u{1F514} Sound on" : "\u{1F515} Sound off";
    } }, sound ? "\u{1F514} Sound on" : "\u{1F515} Sound off");
    el.replaceChildren(h("div", { class: "toolbar" }, h("div", { class: "muted" }, "Tap a button on a ticket to move it along."), h("div", { class: "spacer" }), soundBtn), board);
    const canMove = can("UPDATE_KITCHEN_STATUS");
    const COLS = [["SENT", "New", "PREPARING", "Start preparing"], ["PREPARING", "Preparing", "READY", "Mark ready"], ["READY", "Ready to serve", "SERVED", "Served"]];
    function stageOf(o) {
      for (const s of ["SENT", "PREPARING", "READY"]) if (o.items.some((i) => i.kitchen === s)) return s;
      return null;
    }
    async function move(o, from, to) {
      const lines = o.items.filter((i) => i.kitchen === from);
      const ids = lines.map((l) => l.id), old = lines.map((l) => l.kitchen);
      lines.forEach((l) => {
        l.kitchen = to;
      });
      emit("orders");
      draw();
      try {
        await save("kitchenStatus", { orderId: o.id, lineIds: ids, status: to });
      } catch (e) {
        lines.forEach((l, i) => {
          l.kitchen = old[i];
        });
        toast(errText(e), "error");
        poll();
        draw();
      }
    }
    function draw() {
      const live = S.orders.filter((o) => o.items && stageOf(o));
      const sorted = (arr) => arr.sort((a, b) => (a.items.find((i) => i.sentAt) || {}).sentAt > (b.items.find((i) => i.sentAt) || {}).sentAt ? 1 : -1);
      board.replaceChildren(...COLS.map(([stage, title, next, nextLabel]) => {
        const list = sorted(live.filter((o) => stageOf(o) === stage));
        return h(
          "section",
          { class: "kcol k-col-" + stage },
          h("h2", null, title, h("span", { class: "count" }, list.length)),
          list.length ? list.map((o) => {
            const mins = minutesSince((o.items.find((i) => i.sentAt) || {}).sentAt || o.openedAt);
            const mine = o.items.filter((i) => i.kitchen === stage);
            return h(
              "article",
              { class: "ticket" + (mins >= 20 && stage !== "READY" ? " late" : "") },
              h("header", null, h("strong", null, o.tableName || "Takeaway"), h("span", null, (o.tmp ? "new" : o.id.slice(-4)) + " \xB7 " + timeOf(o.openedAt)), h("span", { class: "age" }, mins + " min")),
              h("ul", null, o.items.filter((i) => ["SENT", "PREPARING", "READY"].includes(i.kitchen)).map((i) => h("li", { class: i.kitchen === stage ? "" : "dim" }, h("b", null, i.qty + "\xD7"), " " + i.name, i.notes ? h("div", { class: "note" }, i.notes) : null))),
              canMove || next === "SERVED" && canAny(["EDIT_ORDERS"]) ? h("button", { class: "btn btn-primary btn-block", type: "button", disabled: !!o.tmp, onclick: () => move(o, stage, next) }, o.tmp ? "Saving\u2026" : nextLabel + (mine.length !== o.items.length ? " (" + mine.length + ")" : "")) : null
            );
          }) : emptyState("Nothing here")
        );
      }));
      const ids = new Set(live.filter((o) => stageOf(o) === "SENT").map((o) => (o.uid || o.id) + ":" + o.items.filter((i) => i.kitchen === "SENT").reduce((a, i) => a + i.qty, 0)));
      if (!first) ids.forEach((k) => {
        if (!seen.has(k)) beep();
      });
      seen = ids;
      first = false;
    }
    first = true;
    draw();
    const off = on((k) => {
      if (k.includes("orders") || k.includes("all")) draw();
    });
    const tm = setInterval(draw, 3e4);
    return () => {
      off();
      clearInterval(tm);
    };
  }

  // web/js/s-orders.js
  var s_orders_exports = {};
  __export(s_orders_exports, {
    render: () => render5
  });
  var st = { from: "", to: "", status: "ALL", q: "" };
  function render5(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    if (!st.from) {
      st.from = st.to = todayISO();
    }
    let rows = [], alive = true, truncated = false;
    const list = h("div", { class: "tablewrap" });
    const from = field({ label: "From", type: "date", value: st.from }), to = field({ label: "To", type: "date", value: st.to });
    const status = field({ label: "Status", options: [["ALL", "All"], ["OPEN", "Open"], ["BILLED", "Billed"], ["PAID", "Paid"], ["CANCELLED", "Cancelled"]].map(([value, label]) => ({ value, label })), value: st.status });
    const q = field({ label: "Search", value: st.q, placeholder: "Order no., table, customer, waiter" });
    const info = h("div", { class: "muted" });
    async function load() {
      st.from = from.value();
      st.to = to.value() || st.from;
      list.replaceChildren(loadingBlock());
      swr("listOrders", { from: st.from, to: st.to }, (r) => {
        if (!alive) return;
        rows = r.orders;
        truncated = r.truncated;
        draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function visible() {
      const t = st.q.toLowerCase();
      return rows.filter((o) => (st.status === "ALL" || o.status === st.status) && (!t || [o.id, o.tableName, o.customerName, o.waiterName, o.uid ? "r-" + String(o.uid).slice(-6) : ""].some((v) => String(v || "").toLowerCase().includes(t))));
    }
    function draw() {
      const v = visible(), total = v.filter((o) => o.status !== "CANCELLED").reduce((s, o) => s + o.total, 0);
      info.textContent = v.length + " order" + (v.length === 1 ? "" : "s") + " \xB7 " + M2(total) + (truncated ? " \xB7 showing the latest 400 only, narrow the dates" : "");
      if (!v.length) {
        list.replaceChildren(emptyState("No orders found", "Try other dates or filters."));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Order", "Opened", "Table", "Customer", "Waiter", "Status", "Total"].map((x, i) => h("th", { class: i === 6 ? "r" : "" }, x)))),
        h("tbody", null, v.map((o) => h(
          "tr",
          { class: "click", tabindex: "0", onclick: () => openOrder(o.id, ctx), onkeydown: (e) => {
            if (e.key === "Enter") openOrder(o.id, ctx);
          } },
          h("td", null, o.id),
          h("td", null, fmtStamp(o.openedAt)),
          h("td", null, o.tableName || "Takeaway"),
          h("td", null, o.customerName || "\u2013"),
          h("td", null, o.waiterName || "\u2013"),
          h("td", null, statusPill(o.status)),
          h("td", { class: "r" }, M2(o.total))
        )))
      ));
    }
    const reload = debounce(load, 200);
    [from.input, to.input].forEach((i) => i.addEventListener("change", reload));
    status.input.addEventListener("change", () => {
      st.status = status.value();
      draw();
    });
    q.input.addEventListener("input", debounce(() => {
      st.q = q.value();
      draw();
    }, 150));
    el.replaceChildren(h(
      "div",
      { class: "stack" },
      h(
        "div",
        { class: "filters" },
        from.el,
        to.el,
        status.el,
        q.el,
        h(
          "div",
          { class: "btnrow" },
          h("button", { class: "btn", type: "button", onclick: () => {
            from.input.value = to.input.value = todayISO();
            load();
          } }, "Today"),
          h("button", { class: "btn", type: "button", onclick: () => {
            from.input.value = to.input.value = shiftDay(todayISO(), -1);
            load();
          } }, "Yesterday"),
          h("button", { class: "btn", type: "button", onclick: () => {
            from.input.value = shiftDay(todayISO(), -6);
            to.input.value = todayISO();
            load();
          } }, "7 days"),
          h("button", { class: "btn", type: "button", onclick: () => download("orders-" + st.from + "_" + st.to + ".csv", toCsv([["Order", "Opened", "Table", "Customer", "Waiter", "Status", "Subtotal", "Discount", "Service", "Tax", "Total"]].concat(visible().map((o) => [o.id, o.openedAt, o.tableName, o.customerName, o.waiterName, o.status, o.subtotal, o.discount, o.service, o.tax, o.total])))) }, "Export CSV")
        )
      ),
      info,
      list
    ));
    load();
    const off = on((k) => {
      if (alive && k.includes("orders") && st.to >= todayISO()) reload();
    });
    return () => {
      alive = false;
      off();
    };
  }

  // web/js/s-menu.js
  var s_menu_exports = {};
  __export(s_menu_exports, {
    render: () => render6
  });
  var catFilter = "ALL";
  function shrink(file, max = 640, limit = 16e4) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file), img = new Image();
      img.onload = () => {
        const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = Math.round(img.width * k);
        c.height = Math.round(img.height * k);
        const g = c.getContext("2d");
        g.fillStyle = "#fff";
        g.fillRect(0, 0, c.width, c.height);
        g.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        let q = 0.8, out = c.toDataURL("image/jpeg", q);
        while (out.length > limit && q > 0.2) {
          q -= 0.07;
          out = c.toDataURL("image/jpeg", q);
        }
        if (out.length > 4e5) reject(new Error("That photo is too large even after shrinking. Choose another."));
        else resolve(out);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("That file is not a picture the browser can open."));
      };
      img.src = url;
    });
  }
  function render6(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const edit = can("EDIT_MENU"), add = can("ADD_MENU");
    const wrap = h("div", { class: "stack" });
    el.replaceChildren(wrap);
    function draw() {
      const cats = S.categories;
      const items = S.menu.filter((m) => catFilter === "ALL" || m.categoryId === catFilter);
      const catName = (id) => (cats.find((c) => c.id === id) || {}).name || "\u2013";
      wrap.replaceChildren(
        h(
          "div",
          { class: "toolbar" },
          h("div", { class: "chips" }, [{ id: "ALL", name: "All" }].concat(cats).map((c) => h("button", { class: "chip" + (c.id === catFilter ? " on" : ""), type: "button", onclick: () => {
            catFilter = c.id;
            draw();
          } }, c.name))),
          h("div", { class: "spacer" }),
          add ? h("button", { class: "btn", type: "button", onclick: () => categoryDialog() }, "\uFF0B Category") : null,
          edit && catFilter !== "ALL" ? h("button", { class: "btn", type: "button", onclick: () => categoryDialog(cats.find((c) => c.id === catFilter)) }, "Rename category") : null,
          add ? h("button", { class: "btn btn-primary", type: "button", onclick: () => itemDialog(null) }, "\uFF0B Menu item") : null
        ),
        items.length ? h("div", { class: "mgrid manage" }, items.map((m) => h(
          "article",
          { class: "mcard static" + (m.available ? "" : " off") },
          m.thumbUrl ? h("img", { src: m.thumbUrl, alt: "", loading: "lazy", referrerpolicy: "no-referrer", onerror: (e) => e.currentTarget.remove() }) : h("div", { class: "ph" }, m.name.slice(0, 1).toUpperCase()),
          h("div", { class: "mn" }, m.name),
          h("div", { class: "mp" }, M2(m.price) + (m.costPrice !== void 0 && edit ? "  \xB7  cost " + M2(m.costPrice) : "")),
          h("div", { class: "muted small" }, catName(m.categoryId)),
          h(
            "div",
            { class: "btnrow" },
            can("UPDATE_KITCHEN_STATUS") || edit ? availBtn(m) : null,
            edit ? h("button", { class: "btn btn-small", type: "button", onclick: () => itemDialog(m) }, "Edit") : null
          )
        ))) : emptyState(S.menu.length ? "No items in this category" : "The menu is empty", add ? "Use \u201C\uFF0B Menu item\u201D to add your first dish." : "")
      );
    }
    function availBtn(m) {
      const b = h("button", { class: "btn btn-small", type: "button" }, m.available ? "Mark sold out" : "Back in stock");
      b.addEventListener("click", async () => {
        const prev = m.available;
        m.available = !prev;
        draw();
        try {
          await save("setAvailability", { menuId: m.id, available: m.available });
        } catch (e) {
          m.available = prev;
          draw();
          toast(errText(e), "error");
        }
      });
      return b;
    }
    function categoryDialog(cat) {
      const name = field({ label: "Category name", value: cat ? cat.name : "", maxlength: 60 });
      const sort = field({ label: "Order in lists (0 first)", type: "number", value: cat ? String(cat.sort) : String(S.categories.length + 1) });
      openModal({
        title: cat ? "Edit category" : "New category",
        content: h("div", { class: "stack" }, name.el, sort.el),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            name.clear();
            const r = await act(ok, () => save("saveCategory", { categoryId: cat ? cat.id : "", name: name.value(), sort: Number(sort.value()) || 0 }));
            if (r.ok) {
              m.close();
            }
          });
          const del = cat && can("DELETE_MENU") ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Delete category", "Delete \u201C" + cat.name + "\u201D? It must have no items.", "Delete", true)) {
              try {
                await save("deleteCategory", { categoryId: cat.id });
                catFilter = "ALL";
                m.close();
              } catch (e) {
                toast(errText(e), "error");
              }
            }
          } }, "Delete") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    function itemDialog(m) {
      if (!S.categories.length) {
        toast("Create a category first.", "error");
        return categoryDialog();
      }
      const f = {
        name: field({ label: "Name", value: m ? m.name : "", maxlength: 80 }),
        categoryId: field({ label: "Category", options: S.categories.map((c) => ({ value: c.id, label: c.name })), value: m ? m.categoryId : catFilter !== "ALL" ? catFilter : S.categories[0].id }),
        price: field({ label: "Selling price", type: "number", value: m ? String(m.price) : "", inputmode: "decimal" }),
        costPrice: field({ label: "Cost price (for profit reports)", type: "number", value: m && m.costPrice !== void 0 ? String(m.costPrice) : "", inputmode: "decimal" }),
        prepMinutes: field({ label: "Preparation time (minutes)", type: "number", value: m ? String(m.prepMinutes || "") : "", inputmode: "numeric" }),
        description: field({ label: "Description", type: "textarea", value: m ? m.description : "", maxlength: 160 })
      };
      let imageUrl = m ? m.thumbUrl : "", pendingData = "";
      const pic = h("div", { class: "pic" });
      let smallData = "";
      const fileIn = h("input", { type: "file", accept: "image/*", hidden: true });
      function drawPic(busy) {
        const shown = pendingData || imageUrl;
        pic.replaceChildren(
          busy ? h("div", { class: "ph" }, spinner("big")) : shown ? h("img", { src: shown, alt: "", referrerpolicy: "no-referrer" }) : h("div", { class: "ph" }, "No photo"),
          h(
            "div",
            { class: "btnrow" },
            h("button", { class: "btn btn-small", type: "button", onclick: () => fileIn.click() }, shown ? "Change photo" : "Add photo"),
            m && imageUrl && !pendingData ? h("button", { class: "btn btn-small btn-danger", type: "button", onclick: removePhoto }, "Remove") : null
          )
        );
      }
      async function removePhoto() {
        try {
          await save("removeMenuImage", { menuId: m.id });
          imageUrl = "";
          m.thumbUrl = "";
          m.imageUrl = "";
          drawPic();
          draw();
        } catch (e) {
          toast(errText(e), "error");
        }
      }
      fileIn.addEventListener("change", async () => {
        const file = fileIn.files[0];
        if (!file) return;
        drawPic(true);
        try {
          const data = await shrink(file);
          smallData = await shrink(file, 220, 36e3);
          if (!m) pendingData = data;
          else {
            const r = await save("uploadMenuImage", { menuId: m.id, mime: "image/jpeg", data, small: smallData }, { timeout: 9e4, queue: false });
            imageUrl = r.thumbUrl || r.imageUrl;
            m.thumbUrl = r.thumbUrl;
            m.imageUrl = r.imageUrl;
            draw();
            toast("Photo saved \u2713", "ok", 1500);
          }
        } catch (e) {
          toast(errText(e), "error", 9e3);
        }
        fileIn.value = "";
        drawPic();
      });
      drawPic();
      openModal({
        title: m ? "Edit item" : "New menu item",
        content: h("div", { class: "stack" }, pic, fileIn, h("div", { class: "form-grid" }, f.name.el, f.categoryId.el, f.price.el, f.costPrice.el, f.prepMinutes.el, h("div", { class: "span-2" }, f.description.el))),
        actions: (mm) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            Object.values(f).forEach((x) => x.clear());
            if (!f.name.value()) {
              f.name.setError("Enter the item name.");
              f.name.input.focus();
              return;
            }
            const price = Number(f.price.value());
            if (!(price >= 0) || f.price.value() === "") {
              f.price.setError("Enter the price.");
              f.price.input.focus();
              return;
            }
            const payload = { menuId: m ? m.id : "", name: f.name.value(), categoryId: f.categoryId.value(), price, costPrice: Number(f.costPrice.value()) || 0, prepMinutes: Number(f.prepMinutes.value()) || 0, description: f.description.value() };
            if (m) {
              const old = Object.assign({}, m);
              Object.assign(m, { name: payload.name, categoryId: payload.categoryId, price, costPrice: payload.costPrice, prepMinutes: payload.prepMinutes, description: payload.description });
              mm.close();
              draw();
              save("saveMenuItem", payload).catch((e) => {
                Object.assign(m, old);
                draw();
                toast("Not saved: " + errText(e), "error", 8e3);
              });
              return;
            }
            if (!pendingData) {
              const tmp = { id: "tmp-" + Date.now(), name: payload.name, categoryId: payload.categoryId, description: payload.description, price, costPrice: payload.costPrice, imageUrl: "", thumbUrl: "", available: true, featured: false, prepMinutes: payload.prepMinutes, sort: 9999 };
              S.menu.push(tmp);
              mm.close();
              draw();
              save("saveMenuItem", payload).catch((e) => {
                S.menu = S.menu.filter((x) => x !== tmp);
                draw();
                toast("Not saved: " + errText(e), "error", 8e3);
              });
              return;
            }
            const r = await act(ok, async () => {
              const x = await save("saveMenuItem", payload);
              try {
                await save("uploadMenuImage", { menuId: x.menuId, mime: "image/jpeg", data: pendingData, small: smallData }, { timeout: 9e4, queue: false });
              } catch (e) {
                toast("The item was saved but the photo was not: " + errText(e), "error", 12e3);
              }
              return x;
            });
            if (r.ok) mm.close();
          });
          const del = m && can("DELETE_MENU") ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Delete item", "Delete \u201C" + m.name + "\u201D? Old bills keep their record.", "Delete", true)) {
              try {
                await save("deleteMenuItem", { menuId: m.id });
                mm.close();
              } catch (e) {
                toast(errText(e), "error");
              }
            }
          } }, "Delete") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => mm.close() }, "Close"), ok];
        }
      });
    }
    draw();
    const off = on((k) => {
      if (k.includes("menu") || k.includes("all")) draw();
    });
    return off;
  }

  // web/js/s-people.js
  var s_people_exports = {};
  __export(s_people_exports, {
    render: () => render7
  });
  function render7(el) {
    const M2 = (n) => money(n, S.settings);
    let rows = [], q = "", alive = true;
    const list = h("div", { class: "tablewrap" });
    const search = h("input", { type: "search", class: "search", placeholder: "Search name or phone\u2026", "aria-label": "Search" });
    search.addEventListener("input", debounce(() => {
      q = search.value.trim().toLowerCase();
      draw();
    }, 120));
    el.replaceChildren(h("div", { class: "stack" }, h(
      "div",
      { class: "toolbar" },
      search,
      h("div", { class: "spacer" }),
      h("button", { class: "btn", type: "button", onclick: () => download("customers.csv", toCsv([["Name", "Phone", "Email", "Orders", "Total spend", "Last visit"]].concat(rows.map((c) => [c.name, c.phone, c.email, c.orders, c.spend, c.lastVisit])))) }, "Export CSV"),
      can("MANAGE_CUSTOMERS") ? h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Customer") : null
    ), list));
    async function load(quiet) {
      if (!quiet) list.replaceChildren(loadingBlock());
      swr("listCustomers", {}, (r) => {
        rows = r.customers;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      const v = rows.filter((c) => !q || (c.name + " " + c.phone).toLowerCase().includes(q));
      if (!v.length) {
        list.replaceChildren(emptyState(rows.length ? "No match" : "No customers yet", "Customers are added here or while taking an order."));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Name", "Phone", "Orders", "Total spend", "Last visit", ""].map((x, i) => h("th", { class: i === 2 || i === 3 ? "r" : "" }, x)))),
        h("tbody", null, v.map((c) => h(
          "tr",
          null,
          h("td", null, c.name),
          h("td", null, c.phone || "\u2013"),
          h("td", { class: "r" }, c.orders || 0),
          h("td", { class: "r" }, M2(c.spend || 0)),
          h("td", null, c.lastVisit || "\u2013"),
          h("td", { class: "r" }, can("MANAGE_CUSTOMERS") ? h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(c) }, "Edit") : null)
        )))
      ));
    }
    function dialog(c) {
      const f = {
        name: field({ label: "Name", value: c ? c.name : "", maxlength: 60 }),
        phone: field({ label: "Phone", value: c ? c.phone : "", maxlength: 24, inputmode: "tel" }),
        email: field({ label: "Email", value: c ? c.email : "", maxlength: 80 }),
        address: field({ label: "Address", value: c ? c.address : "", maxlength: 120 }),
        notes: field({ label: "Notes", type: "textarea", value: c ? c.notes : "", maxlength: 160 })
      };
      openModal({
        title: c ? "Edit customer" : "New customer",
        content: h("div", { class: "stack" }, Object.values(f).map((x) => x.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", () => {
            const d = { customerId: c ? c.id : "", name: f.name.value(), phone: f.phone.value(), email: f.email.value(), address: f.address.value(), notes: f.notes.value() };
            if (!d.name.trim()) {
              toast("Enter the name.", "error");
              return;
            }
            const before = rows.slice(), row = Object.assign({ orders: 0, spend: 0, lastVisit: "" }, c || {}, d, { id: c ? c.id : "tmp" });
            m.close();
            instant("saveCustomer", d, () => {
              rows = c ? rows.map((x) => x.id === c.id ? row : x) : [row].concat(rows);
              draw();
              toast("Saved \u2713", "ok", 1200);
            }, () => {
              rows = before;
              draw();
            }, () => load(true));
          });
          const del = c ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Remove customer", "Remove " + c.name + "?", "Remove", true)) {
              const before = rows.slice();
              m.close();
              instant("removeCustomer", { customerId: c.id }, () => {
                rows = rows.filter((x) => x.id !== c.id);
                draw();
              }, () => {
                rows = before;
                draw();
              }, () => load(true));
            }
          } }, "Remove") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-reservations.js
  var s_reservations_exports = {};
  __export(s_reservations_exports, {
    render: () => render8
  });
  var LABEL = { CONFIRMED: "Confirmed", SEATED: "Seated", COMPLETED: "Completed", CANCELLED: "Cancelled", NO_SHOW: "No-show" };
  var day = "";
  function render8(el) {
    if (!day) day = todayISO();
    let rows = [], alive = true;
    const list = h("div", { class: "stack" });
    const dateIn = field({ label: "Day", type: "date", value: day });
    dateIn.input.addEventListener("change", () => {
      day = dateIn.value() || todayISO();
      load();
    });
    const manage = can("MANAGE_RESERVATIONS");
    el.replaceChildren(h("div", { class: "stack" }, h(
      "div",
      { class: "toolbar" },
      dateIn.el,
      h("button", { class: "btn", type: "button", onclick: () => {
        day = shiftDay(day, -1);
        dateIn.input.value = day;
        load();
      } }, "\u2039"),
      h("button", { class: "btn", type: "button", onclick: () => {
        day = todayISO();
        dateIn.input.value = day;
        load();
      } }, "Today"),
      h("button", { class: "btn", type: "button", onclick: () => {
        day = shiftDay(day, 1);
        dateIn.input.value = day;
        load();
      } }, "\u203A"),
      h("div", { class: "spacer" }),
      manage ? h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Reservation") : null
    ), list));
    async function load(quiet) {
      if (!quiet) list.replaceChildren(loadingBlock());
      swr("listReservations", { from: day, to: day }, (r) => {
        rows = r.reservations.filter((x) => x.date === day).sort((a, b) => a.time.localeCompare(b.time));
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      if (!rows.length) {
        list.replaceChildren(emptyState("No reservations", "Nothing booked for " + day + "."));
        return;
      }
      list.replaceChildren(...rows.map((r) => {
        const t = S.tables.find((x) => x.id === r.tableId);
        const set = (status) => () => {
          const before = rows.slice();
          instant("setReservationStatus", { reservationId: r.id, status }, () => {
            rows = rows.map((x) => x.id === r.id ? Object.assign({}, x, { status }) : x);
            draw();
          }, () => {
            rows = before;
            draw();
          }, () => load(true));
        };
        return h(
          "article",
          { class: "resv st-" + r.status },
          h("div", { class: "rt" }, r.time),
          h("div", { class: "rb" }, h("strong", null, r.customer), h("div", { class: "muted" }, r.guests + " guests" + (t ? " \xB7 " + t.name : "") + (r.phone ? " \xB7 " + r.phone : "") + (r.notes ? " \xB7 " + r.notes : ""))),
          h("span", { class: "sp" }, LABEL[r.status] || r.status),
          manage ? h(
            "div",
            { class: "btnrow" },
            r.status === "CONFIRMED" ? h("button", { class: "btn btn-small btn-primary", type: "button", onclick: set("SEATED") }, "Seat") : null,
            r.status === "SEATED" ? h("button", { class: "btn btn-small", type: "button", onclick: set("COMPLETED") }, "Complete") : null,
            r.status === "CONFIRMED" ? h("button", { class: "btn btn-small", type: "button", onclick: set("NO_SHOW") }, "No-show") : null,
            ["CONFIRMED"].includes(r.status) ? h("button", { class: "btn btn-small btn-danger", type: "button", onclick: set("CANCELLED") }, "Cancel") : null,
            h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(r) }, "Edit")
          ) : null
        );
      }));
    }
    function dialog(r) {
      const f = {
        customer: field({ label: "Guest name", value: r ? r.customer : "", maxlength: 60 }),
        phone: field({ label: "Phone", value: r ? r.phone : "", maxlength: 24, inputmode: "tel" }),
        date: field({ label: "Date", type: "date", value: r ? r.date : day }),
        time: field({ label: "Time", type: "time", value: r ? r.time : "19:00" }),
        guests: field({ label: "Guests", type: "number", value: r ? String(r.guests) : "2", inputmode: "numeric" }),
        tableId: field({ label: "Table (optional)", options: [{ value: "", label: "No table yet" }].concat(S.tables.filter((t) => t.active).map((t) => ({ value: t.id, label: t.name }))), value: r ? r.tableId : "" }),
        notes: field({ label: "Notes", type: "textarea", value: r ? r.notes : "", maxlength: 160 })
      };
      openModal({
        title: r ? "Edit reservation" : "New reservation",
        content: h("div", { class: "form-grid" }, f.customer.el, f.phone.el, f.date.el, f.time.el, f.guests.el, f.tableId.el, h("div", { class: "span-2" }, f.notes.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", () => {
            const d = { reservationId: r ? r.id : "", customer: f.customer.value(), phone: f.phone.value(), date: f.date.value(), time: f.time.value(), guests: Number(f.guests.value()) || 1, tableId: f.tableId.value(), notes: f.notes.value() };
            if (!d.customer.trim() || !d.date || !d.time) {
              toast("Enter the guest name, date and time.", "error");
              return;
            }
            const before = rows.slice(), row = Object.assign({ status: "CONFIRMED" }, r || {}, d, { id: r ? r.id : "tmp" });
            m.close();
            day = d.date;
            dateIn.input.value = day;
            instant("saveReservation", d, () => {
              rows = rows.filter((x) => x.id !== row.id).concat([row]).filter((x) => x.date === day).sort((a, b) => a.time.localeCompare(b.time));
              draw();
              toast("Saved \u2713", "ok", 1200);
            }, () => {
              rows = before;
              draw();
            }, () => load(true));
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-expenses.js
  var s_expenses_exports = {};
  __export(s_expenses_exports, {
    render: () => render9
  });
  var range = null;
  function render9(el) {
    const M2 = (n) => money(n, S.settings);
    const today2 = todayISO();
    if (!range) range = { from: today2.slice(0, 8) + "01", to: today2 };
    let rows = [], total = 0, alive = true;
    const list = h("div", { class: "tablewrap" }), sum = h("div", { class: "muted" });
    const from = field({ label: "From", type: "date", value: range.from }), to = field({ label: "To", type: "date", value: range.to });
    [from.input, to.input].forEach((i) => i.addEventListener("change", () => {
      range = { from: from.value(), to: to.value() || from.value() };
      load();
    }));
    el.replaceChildren(h("div", { class: "stack" }, h("div", { class: "filters" }, from.el, to.el, h(
      "div",
      { class: "btnrow" },
      h("button", { class: "btn", type: "button", onclick: () => download("expenses.csv", toCsv([["Date", "Category", "Description", "Method", "Amount", "Added by"]].concat(rows.map((e) => [e.date, e.category, e.description, e.method, e.amount, e.addedBy])))) }, "Export CSV"),
      h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Expense")
    )), sum, list));
    async function load(quiet) {
      if (!quiet) list.replaceChildren(loadingBlock());
      swr("listExpenses", range, (r) => {
        rows = r.expenses;
        total = r.total;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      sum.textContent = rows.length + " expense" + (rows.length === 1 ? "" : "s") + " \xB7 total " + M2(total);
      if (!rows.length) {
        list.replaceChildren(emptyState("No expenses in these dates"));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Date", "Category", "Description", "Paid by", "Amount", ""].map((x, i) => h("th", { class: i === 4 ? "r" : "" }, x)))),
        h("tbody", null, rows.map((e) => h(
          "tr",
          null,
          h("td", null, e.date),
          h("td", null, e.category),
          h("td", null, e.description || "\u2013"),
          h("td", null, e.method),
          h("td", { class: "r" }, M2(e.amount)),
          h("td", { class: "r" }, h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(e) }, "Edit"))
        )))
      ));
    }
    function dialog(e) {
      const cats = ["Groceries", "Gas", "Salaries", "Rent", "Electricity", "Maintenance", "Marketing", "Other"];
      const f = {
        date: field({ label: "Date", type: "date", value: e ? e.date : todayISO() }),
        category: field({ label: "Category", value: e ? e.category : "", maxlength: 40, placeholder: "e.g. " + cats.slice(0, 3).join(", ") }),
        amount: field({ label: "Amount", type: "number", value: e ? String(e.amount) : "", inputmode: "decimal" }),
        method: field({ label: "Paid by", options: ["CASH", "CARD", "ONLINE", "OTHER"].map((v) => ({ value: v, label: { CASH: "Cash", CARD: "Card", ONLINE: "Online / bank", OTHER: "Other" }[v] })), value: e ? e.method : "CASH" }),
        description: field({ label: "Description", value: e ? e.description : "", maxlength: 120 })
      };
      const uid2 = newId("exp");
      openModal({
        title: e ? "Edit expense" : "New expense",
        content: h("div", { class: "form-grid" }, f.date.el, f.category.el, f.amount.el, f.method.el, h("div", { class: "span-2" }, f.description.el)),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", () => {
            const d = { expenseId: e ? e.id : "", uid: e ? "" : uid2, date: f.date.value(), category: f.category.value(), amount: Number(f.amount.value()), method: f.method.value(), description: f.description.value() };
            if (!d.category || !(d.amount > 0)) {
              toast("Enter a category and an amount.", "error");
              return;
            }
            const before = rows.slice(), bt = total, row = { id: e ? e.id : "tmp", date: d.date, category: d.category, description: d.description, method: d.method, amount: d.amount, addedBy: e ? e.addedBy : S.user.name };
            m.close();
            instant(
              "saveExpense",
              d,
              () => {
                rows = e ? rows.map((x) => x.id === e.id ? row : x) : [row].concat(rows);
                total = rows.reduce((s, x) => s + x.amount, 0);
                draw();
                toast("Saved \u2713", "ok", 1200);
              },
              () => {
                rows = before;
                total = bt;
                draw();
              },
              () => load(true)
            );
          });
          const del = e ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Void expense", "Void this expense of " + M2(e.amount) + "?", "Void", true)) {
              const before = rows.slice();
              m.close();
              instant("voidExpense", { expenseId: e.id }, () => {
                rows = rows.filter((x) => x.id !== e.id);
                total = rows.reduce((s, x) => s + x.amount, 0);
                draw();
              }, () => {
                rows = before;
                draw();
              }, () => load(true));
            }
          } }, "Void") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-reports.js
  var s_reports_exports = {};
  __export(s_reports_exports, {
    render: () => render10
  });
  var rng = { from: "", to: "", preset: "today" };
  var PRESETS = [["today", "Today"], ["yesterday", "Yesterday"], ["week", "Last 7 days"], ["month", "This month"], ["custom", "Custom"]];
  function setPreset(p) {
    const t = todayISO();
    rng.preset = p;
    if (p === "today") {
      rng.from = rng.to = t;
    } else if (p === "yesterday") {
      rng.from = rng.to = shiftDay(t, -1);
    } else if (p === "week") {
      rng.from = shiftDay(t, -6);
      rng.to = t;
    } else if (p === "month") {
      rng.from = t.slice(0, 8) + "01";
      rng.to = t;
    }
  }
  function render10(el) {
    const M2 = (n) => money(n, S.settings);
    if (!rng.from) setPreset("today");
    let alive = true, data = null;
    const out = h("div", { class: "stack" });
    const bar2 = h("div", { class: "toolbar" });
    const from = field({ label: "From", type: "date", value: rng.from }), to = field({ label: "To", type: "date", value: rng.to });
    [from.input, to.input].forEach((i) => i.addEventListener("change", () => {
      rng.from = from.value();
      rng.to = to.value() || rng.from;
      rng.preset = "custom";
      drawBar();
      load();
    }));
    function drawBar() {
      bar2.replaceChildren(
        tabs(PRESETS.map(([key, label]) => ({ key, label })), rng.preset, (k) => {
          if (k !== "custom") {
            setPreset(k);
            from.input.value = rng.from;
            to.input.value = rng.to;
            load();
          } else rng.preset = "custom";
          drawBar();
        }),
        rng.preset === "custom" ? h("div", { class: "inline-dates" }, from.el, to.el) : null,
        h("div", { class: "spacer" }),
        h("button", { class: "btn", type: "button", onclick: exportCsv }, "Export CSV"),
        h("button", { class: "btn", type: "button", onclick: () => window.print() }, "Print")
      );
    }
    el.replaceChildren(h("div", { class: "stack" }, bar2, out));
    drawBar();
    async function load() {
      out.replaceChildren(loadingBlock("Building report\u2026"));
      swr("salesReport", { from: rng.from, to: rng.to }, (r) => {
        data = r;
        if (alive) draw();
      }, (e) => {
        if (alive) out.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    const panel = (title, body) => h("section", { class: "panel" }, h("header", null, h("h2", null, title)), h("div", { class: "pad" }, body));
    const kv = (rows) => h("div", { class: "trows" }, rows.map(([k, v, cls]) => h("div", { class: "trow " + (cls || "") }, h("span", null, k), h("span", null, v))));
    function draw() {
      const d = data, t = d.totals;
      if (!t.orders && !d.expenses) {
        out.replaceChildren(emptyState("No sales in this period", rng.from + (rng.to !== rng.from ? " to " + rng.to : "")));
        return;
      }
      const parts = [h(
        "div",
        { class: "stats" },
        h("div", { class: "stat hero" }, h("div", { class: "k" }, "Net sales"), h("div", { class: "v" }, M2(t.net)), h("div", { class: "s" }, t.orders + " orders \xB7 average " + M2(t.orders ? t.net / t.orders : 0))),
        h("div", { class: "stat" }, h("div", { class: "k" }, "Gross (before discount)"), h("div", { class: "v" }, M2(t.gross)), h("div", { class: "s" }, "Discounts " + M2(t.discount))),
        h("div", { class: "stat" }, h("div", { class: "k" }, "Tax + service"), h("div", { class: "v" }, M2(t.tax + t.service)), h("div", { class: "s" }, "Tax " + M2(t.tax) + " \xB7 service " + M2(t.service))),
        d.profit !== void 0 ? h("div", { class: "stat" }, h("div", { class: "k" }, "Profit"), h("div", { class: "v" }, M2(d.profit)), h("div", { class: "s" }, "after cost of items " + M2(d.cogs) + " and expenses " + M2(d.expenses))) : null
      )];
      const max = Math.max(1, ...d.byDay.map((x) => x.net));
      parts.push(h(
        "div",
        { class: "cols" },
        panel("Sales by day", d.byDay.length ? h("div", { class: "hbars" }, d.byDay.map((x) => h("div", { class: "hb" }, h("span", null, x.date.slice(5)), h("div", { class: "hbar" }, h("i", { style: "width:" + Math.round(x.net / max * 100) + "%" })), h("b", null, M2(x.net))))) : emptyState("No days")),
        panel("How customers paid", kv(Object.keys(d.methods).map((k) => [{ CASH: "Cash", CARD: "Card", ONLINE: "Online / bank", OTHER: "Other" }[k] || k, M2(d.methods[k])])))
      ));
      parts.push(h(
        "div",
        { class: "cols" },
        panel("By waiter", d.byWaiter.length ? kv(d.byWaiter.map((w) => [w.name + " (" + w.orders + ")", M2(w.net)])) : emptyState("\u2013")),
        panel("By order type", kv(d.byType.map((x) => [(x.type === "DINE_IN" ? "Dine-in" : x.type === "TAKEAWAY" ? "Takeaway" : x.type) + " (" + x.orders + ")", M2(x.net)])))
      ));
      if (d.items) parts.push(panel("Items sold", h("div", { class: "tablewrap" }, h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Item", "Qty", "Revenue", "Cost", "Margin"].map((x, i) => h("th", { class: i ? "r" : "" }, x)))),
        h("tbody", null, d.items.map((i) => h("tr", null, h("td", null, i.name), h("td", { class: "r" }, i.qty), h("td", { class: "r" }, M2(i.revenue)), h("td", { class: "r" }, M2(i.cost)), h("td", { class: "r" }, M2(i.revenue - i.cost)))))
      ))));
      if (d.expensesByCategory && d.expensesByCategory.length) parts.push(panel("Expenses by category", kv(d.expensesByCategory.map((x) => [x.category, M2(x.amount)]))));
      out.replaceChildren(...parts);
    }
    function exportCsv() {
      if (!data) return;
      const rows = [["Report", rng.from, rng.to], [], ["Date", "Orders", "Net sales"]].concat(data.byDay.map((x) => [x.date, x.orders, x.net]), [[], ["Order", "Date", "Type", "Waiter", "Method", "Net"]], (data.sales || []).map((s) => [s.orderId, s.date, s.type, s.waiter, s.method, s.net]));
      download("sales-" + rng.from + "_" + rng.to + ".csv", toCsv(rows));
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-staff.js
  var s_staff_exports = {};
  __export(s_staff_exports, {
    render: () => render11
  });
  var GROUPS = [
    ["Dashboard & orders", ["VIEW_DASHBOARD", "VIEW_ORDERS", "CREATE_ORDERS", "EDIT_ORDERS", "CANCEL_ORDERS", "SEND_TO_KITCHEN"]],
    ["Kitchen & tables", ["VIEW_KITCHEN", "UPDATE_KITCHEN_STATUS", "VIEW_TABLES", "MANAGE_TABLES"]],
    ["Menu", ["VIEW_MENU", "ADD_MENU", "EDIT_MENU", "DELETE_MENU"]],
    ["Billing", ["VIEW_BILLS", "GENERATE_BILLS", "PRINT_RECEIPT", "APPLY_DISCOUNT", "PROCESS_PAYMENT", "REFUND"]],
    ["Money & reports", ["VIEW_SALES", "VIEW_REPORTS", "MANAGE_EXPENSES", "EXPORT_BACKUP"]],
    ["People", ["VIEW_CUSTOMERS", "MANAGE_CUSTOMERS", "VIEW_RESERVATIONS", "MANAGE_RESERVATIONS"]],
    ["Administration", ["VIEW_ACTIVITY", "MANAGE_STAFF", "MANAGE_SETTINGS"]]
  ];
  var NICE = (p) => p.toLowerCase().split("_").map((w, i) => i ? w : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  var ROLE = { MANAGER: "Manager", CASHIER: "Cashier", WAITER: "Waiter", KITCHEN: "Kitchen", STAFF: "Staff (view only)" };
  function render11(el) {
    let staff = [], cat = null, alive = true;
    const list = h("div", { class: "tablewrap" });
    el.replaceChildren(h("div", { class: "stack" }, h(
      "div",
      { class: "toolbar" },
      h("div", { class: "muted" }, "Staff sign in with the Hotel Code, their username and password."),
      h("div", { class: "spacer" }),
      h("button", { class: "btn btn-primary", type: "button", onclick: () => dialog(null) }, "\uFF0B Staff member")
    ), list));
    async function load() {
      list.replaceChildren(loadingBlock());
      swr("listStaff", {}, (r) => {
        staff = r.staff;
        cat = r.catalog;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      if (!staff.length) {
        list.replaceChildren(emptyState("No staff yet", "Add a waiter, cashier or kitchen account."));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["Name", "Username", "Role", "Status", "Last sign-in", ""].map((x) => h("th", null, x)))),
        h("tbody", null, staff.map((s) => h(
          "tr",
          null,
          h("td", null, s.name),
          h("td", null, s.username),
          h("td", null, ROLE[s.role] || s.role, s.add.length || s.remove.length ? h("span", { class: "muted small" }, " \xB7 custom") : null),
          h("td", null, h("span", { class: "sp s-" + (s.status === "ACTIVE" ? "PAID" : "CANCELLED") }, s.status === "ACTIVE" ? "Active" : "Off")),
          h("td", null, fmtStamp(s.lastLogin) || "never"),
          h("td", { class: "r" }, h("button", { class: "btn btn-small", type: "button", onclick: () => dialog(s) }, "Edit"))
        )))
      ));
    }
    function dialog(s) {
      const f = {
        name: field({ label: "Full name", value: s ? s.name : "", maxlength: 60 }),
        username: field({ label: "Username", value: s ? s.username : "", maxlength: 24, hint: "Letters, numbers, dot or underscore. Staff use this to sign in." }),
        password: field({ label: s ? "New password (leave empty to keep)" : "Password", type: "password", maxlength: 128, autocomplete: "new-password", hint: "At least 6 characters. Changing it signs the person out everywhere." }),
        phone: field({ label: "Phone", value: s ? s.phone : "", maxlength: 24 }),
        role: field({ label: "Role", options: cat.roles.map((r) => ({ value: r, label: ROLE[r] || r })), value: s ? s.role : "WAITER" }),
        status: field({ label: "Account", options: [{ value: "ACTIVE", label: "Active" }, { value: "INACTIVE", label: "Switched off" }], value: s ? s.status : "ACTIVE" })
      };
      let on2 = new Set(s ? s.perms : cat.defaults.WAITER);
      const grid = h("div", { class: "perm-grid" });
      function drawPerms() {
        const base = new Set(cat.defaults[f.role.value()] || []);
        grid.replaceChildren(...GROUPS.map(([title, list2]) => h("fieldset", { class: "perm-group" }, h("legend", null, title), list2.filter((p) => cat.permissions.includes(p)).map((p) => {
          const cb = h("input", { type: "checkbox" });
          cb.checked = on2.has(p);
          cb.addEventListener("change", () => {
            if (cb.checked) on2.add(p);
            else on2.delete(p);
            drawPerms();
          });
          return h("label", { class: "check" + (on2.has(p) !== base.has(p) ? " changed" : "") }, cb, NICE(p), on2.has(p) !== base.has(p) ? h("span", { class: "muted small" }, base.has(p) ? " (removed)" : " (extra)") : null);
        }))));
      }
      f.role.input.addEventListener("change", () => {
        on2 = new Set(cat.defaults[f.role.value()] || []);
        drawPerms();
      });
      drawPerms();
      openModal({
        title: s ? "Edit " + s.name : "New staff member",
        content: h(
          "div",
          { class: "stack" },
          h("div", { class: "form-grid" }, f.name.el, f.username.el, f.password.el, f.phone.el, f.role.el, f.status.el),
          h("div", null, h("h3", null, "What this person can do"), h("p", { class: "muted small" }, "Starts from the role. Switch single permissions on or off for this person."), grid)
        ),
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            Object.values(f).forEach((x) => x.clear());
            const base = new Set(cat.defaults[f.role.value()] || []);
            const add = [...on2].filter((p) => !base.has(p)), remove = [...base].filter((p) => !on2.has(p));
            const r = await act(ok, () => save("saveStaff", { staffId: s ? s.staffId : "", name: f.name.value(), username: f.username.value(), password: f.password.raw(), phone: f.phone.value(), role: f.role.value(), status: f.status.value(), add, remove }));
            if (r.ok) {
              m.close();
              load();
            } else if (r.error && r.error.details && r.error.details.field && f[r.error.details.field]) f[r.error.details.field].setError(r.error.message);
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      }).box.classList.add("wide");
    }
    load();
    return () => {
      alive = false;
    };
  }

  // web/js/s-activity.js
  var s_activity_exports = {};
  __export(s_activity_exports, {
    render: () => render12
  });
  function render12(el) {
    let logs = [], q = "", alive = true, limit = 200;
    const list = h("div", { class: "tablewrap" });
    const search = h("input", { type: "search", class: "search", placeholder: "Search person, action or record\u2026", "aria-label": "Search" });
    search.addEventListener("input", debounce(() => {
      q = search.value.trim().toLowerCase();
      draw();
    }, 120));
    const more = h("button", { class: "btn", type: "button", onclick: () => {
      limit += 300;
      load();
    } }, "Load older entries");
    el.replaceChildren(h("div", { class: "stack" }, h("div", { class: "toolbar" }, search, h("div", { class: "spacer" }), h("button", { class: "btn", type: "button", onclick: load }, "Refresh")), list, h("div", null, more)));
    async function load() {
      list.replaceChildren(loadingBlock());
      swr("activity", { limit }, (r) => {
        logs = r.logs;
        if (alive) draw();
      }, (e) => {
        if (alive) list.replaceChildren(h("div", { class: "form-error" }, errText(e)));
      });
    }
    function draw() {
      const v = logs.filter((l) => !q || [l.user, l.action, l.record, l.details].some((x) => String(x || "").toLowerCase().includes(q)));
      more.hidden = logs.length < limit;
      if (!v.length) {
        list.replaceChildren(emptyState("No entries"));
        return;
      }
      list.replaceChildren(h(
        "table",
        { class: "tbl" },
        h("thead", null, h("tr", null, ["When", "Who", "Action", "Record", "Details"].map((x) => h("th", null, x)))),
        h("tbody", null, v.map((l) => h("tr", null, h("td", null, fmtStamp(l.at)), h("td", null, l.user || "\u2013", l.role ? h("span", { class: "muted small" }, " \xB7 " + l.role.toLowerCase()) : null), h("td", null, h("code", null, l.action)), h("td", null, l.record || ""), h("td", null, l.details || ""))))
      ));
    }
    load();
    return () => {
      alive = false;
    };
  }



  /* Shows an accepted QR order on Tables / Kitchen at once, before the sheet answers. Returns an undo function. */
  function qrLocalOrder(q, send) {
    const now = stamp();
    const lines = (q.items || []).map((l, i) => ({ id: "tmp-qr-" + i, menuId: l.menuId, name: l.name, qty: l.qty, price: l.price, lineTotal: r2(l.price * l.qty), notes: l.notes || "", kitchen: send ? "SENT" : "NEW", sentAt: send ? now : "" }));
    const open = q.tableId ? S.orders.find((o) => o.tableId === q.tableId && OPEN.includes(o.status) && !o.tmp) : null;
    if (open) {
      const before = JSON.stringify(open);
      open.items = open.items.concat(lines);
      const t = compute(open.items.reduce((a, l) => a + l.lineTotal, 0), 0, cfg());
      Object.assign(open, { subtotal: t.subtotal, tax: t.tax, service: t.service, total: t.total, status: "OPEN" });
      emit("orders", "tables");
      return () => {
        const i = S.orders.findIndex((o) => o.id === open.id);
        if (i >= 0) S.orders[i] = JSON.parse(before);
        emit("orders", "tables");
      };
    }
    const table = q.tableId ? S.tables.find((t) => t.id === q.tableId) : null;
    const t = compute(lines.reduce((a, l) => a + l.lineTotal, 0), 0, cfg());
    const tmp = { id: "Saving…", tmp: true, uid: "qr-" + String(q.uid).substring(0, 36), type: table ? "DINE_IN" : "TAKEAWAY", tableId: table ? table.id : "", tableName: table ? table.name : "", customerName: q.name, guests: 0, waiterId: S.user.id, waiterName: S.user.name, status: "OPEN", subtotal: t.subtotal, discount: 0, tax: t.tax, service: t.service, total: t.total, notes: "QR order", openedAt: now, billId: "", items: lines };
    S.orders.unshift(tmp);
    if (table) {
      table.status = "OCCUPIED";
      table.currentOrderId = tmp.id;
    }
    emit("orders", "tables");
    return () => {
      S.orders = S.orders.filter((o) => o !== tmp);
      if (table && table.currentOrderId === tmp.id) {
        table.status = "FREE";
        table.currentOrderId = "";
      }
      emit("orders", "tables");
    };
  }
  /* Direct bill for a QR order: the bill opens at once; the order is only created when you pay or print the bill.
     Closing the dialog leaves the QR order waiting, so nothing is lost. */
  function qrDirectBill(q, ctx) {
    const M2 = (n) => money(n, S.settings);
    // If the customer's table already has an open order, the server adds these items to it: bill the whole table.
    const base = q.tableId ? S.orders.find((o) => o.tableId === q.tableId && OPEN.includes(o.status) && !o.tmp) : null;
    const lines = (base ? base.items.map((l) => ({ name: l.name, qty: l.qty, price: l.price, lineTotal: l.lineTotal, notes: l.notes || "" })) : []).concat((q.items || []).map((l) => ({ name: l.name, qty: l.qty, price: l.price, lineTotal: r2(l.price * l.qty), notes: l.notes || "" })));
    const sub = r2(lines.reduce((a, l) => a + l.lineTotal, 0));
    const disc = { type: "NONE", value: 0, reason: "" };
    const totals = () => compute(sub, discountAmount(sub, disc.type, disc.value), cfg());
    const where = (q.type === "TAKEAWAY" ? "Takeaway" : q.tableName || "Dine-in") + " \xB7 " + q.name + (base ? " (+ table order " + base.id + ")" : "");
    const preview = h("div");
    let panel = null;
    function drawPreview() {
      preview.replaceChildren(...[totalsBlock(totals()), !S.user.isOwner && disc.type === "PERCENT" && disc.value > cfg().maxDiscount ? h("div", { class: "form-error" }, "You may give at most " + cfg().maxDiscount + "% discount.") : null].filter(Boolean));
      if (panel) panel.refresh();
    }
    let discEl = null;
    if (can("APPLY_DISCOUNT")) {
      const typeSel = field({ label: "Discount", options: [{ value: "NONE", label: "No discount" }, { value: "PERCENT", label: "Percent %" }, { value: "FIXED", label: "Fixed amount" }], value: "NONE" });
      const val = field({ label: "Value", type: "number", value: "", inputmode: "decimal" });
      const why = field({ label: "Reason", value: "", maxlength: 80 });
      const sync = () => {
        disc.type = typeSel.value();
        disc.value = Number(val.value()) || 0;
        disc.reason = why.value();
        val.el.hidden = why.el.hidden = disc.type === "NONE";
        drawPreview();
      };
      [typeSel.input, val.input, why.input].forEach((i) => i.addEventListener("input", sync));
      val.el.hidden = why.el.hidden = true;
      discEl = h("details", { class: "qdisc" }, h("summary", null, "Discount"), h("div", { class: "form-grid" }, typeSel.el, val.el, h("div", { class: "span-2" }, why.el)));
    }
    const info = h("div", { class: "muted small" }, "\u{1F4F1} " + q.phone + (q.notes ? " \xB7 \u{1F4DD} " + q.notes : ""));
    const list = h("div", { class: "lines compact qlines" }, lines.map((l) => h("div", { class: "line" }, h("div", { class: "ln" }, l.name), h("div", { class: "lq" }, "\xD7" + l.qty), h("div", { class: "lt" }, M2(l.lineTotal)), h("span"))));
    const m = openModal({ title: "Direct bill \xB7 " + where, content: h("div", { class: "stack" }, info, list, discEl, preview) });
    m.box.classList.add("wide");
    panel = quickPayPanel({
      getDue: () => totals().total,
      payAllowed: can("PROCESS_PAYMENT"),
      showBillOnly: can("GENERATE_BILLS"),
      onGo: (x) => {
        if (disc.type !== "NONE" && disc.value > 0 && !disc.reason) throw new Error("Please write the reason for the discount.");
        if (!S.user.isOwner && disc.type === "PERCENT" && disc.value > cfg().maxDiscount) throw new Error("You may give at most " + cfg().maxDiscount + "% discount.");
        finish(x);
        m.close();
      }
    });
    m.box.querySelector(".content > .stack").append(panel.el);
    drawPreview();
    setTimeout(() => panel.focus(), 0);
    function finish(x) {
      const t = totals();
      const payUid = newId("pay");
      const payments = x.pay ? [{ method: x.method, amount: t.total, reference: x.reference }] : [];
      const ref = "R-" + String("qr-" + String(q.uid).substring(0, 36)).slice(-6).toUpperCase();
      const table = q.tableId ? S.tables.find((tb) => tb.id === q.tableId) : null;
      const localOrder = { id: ref, type: table ? "DINE_IN" : "TAKEAWAY", tableId: table ? table.id : "", tableName: table ? table.name : "", customerName: q.name, waiterName: S.user.name, openedAt: stamp(), items: lines };
      const localBill = Object.assign({}, t, { id: ref, paid: x.pay ? t.total : 0, paymentStatus: x.pay ? "PAID" : "UNPAID", payments: payments.map((p2) => Object.assign({ at: stamp() }, p2)) });
      if (x.print) printReceipt(localOrder, localBill, x);
      qrHandled(q.id, true);
      toast(x.pay ? "Paid ✓ " + M2(t.total) + (x.change > 0 ? " \xB7 Change " + M2(x.change) : "") : "Bill ready ✓", "ok", 2600);
      (async () => {
        let r1;
        try {
          r1 = await save("acceptQrOrder", { qrId: q.id, send: false }, { queue: false });
        } catch (e) {
          qrHandled(q.id, false);
          toast("QR order " + q.name + " was NOT billed: " + errText(e) + " It is back in QR orders.", "error", 12e3);
          return;
        }
        if (!r1 || !r1.order) return;
        try {
          const r = await billAndPay(r1.order.id, { discountType: disc.type, discountValue: disc.value, discountReason: disc.reason, payments, payUid });
          if (r && r.bill && x.pay && r.bill.paymentStatus !== "PAID") toast("The bill total changed on the server. Balance due: " + M2(r.bill.total - r.bill.paid) + ". Open the order to finish the payment.", "error", 1e4);
        } catch (e) {
          toast("Order " + r1.order.id + " was saved, but the bill was not: " + errText(e) + " Open it in Orders & bills to take payment.", "error", 12e3);
        }
      })();
    }
  }

  // web/js/s-qr.js
  var s_qr_exports = {};
  __export(s_qr_exports, {
    render: () => renderQr
  });
  function renderQr(el, ctx) {
    const M2 = (n) => money(n, S.settings);
    const box = h("div", { class: "stack" });
    el.replaceChildren(box);
    const ago = (stamp2) => {
      const t = Date.parse(String(stamp2 || "").replace(" ", "T"));
      if (!t) return "";
      const m = Math.max(0, Math.round((Date.now() - t) / 6e4));
      return m < 1 ? "just now" : m < 60 ? m + " min ago" : Math.round(m / 60) + " h ago";
    };
    function card(q) {
      const accept = h("button", { class: "btn btn-primary", type: "button" }, "\u2713 Accept & send to kitchen");
      const reject = h("button", { class: "btn btn-danger", type: "button" }, "Reject");
      const canBill = canAny(["GENERATE_BILLS", "PROCESS_PAYMENT"]);
      const direct = canBill ? h("button", { class: "btn btn-ok", type: "button", title: "Bill and take payment now, without sending it to the kitchen" }, "\u{1F4B5} Direct bill") : null;
      if (direct) direct.onclick = () => qrDirectBill(q, ctx);
      accept.onclick = () => {
        const send = can("SEND_TO_KITCHEN");
        const undo = qrLocalOrder(q, send);
        qrHandled(q.id, true);
        toast("Accepted \u2713 " + (q.type === "TAKEAWAY" ? "Takeaway" : q.tableName) + (send ? " \xB7 sent to kitchen" : ""), "ok", 2200);
        save("acceptQrOrder", { qrId: q.id, send }, { queue: false }).catch((e) => {
          undo();
          qrHandled(q.id, false);
          toast("QR order NOT accepted: " + errText(e), "error", 8e3);
        });
      };
      reject.onclick = async () => {
        const reason = await promptDialog("Reject QR order", "Reason (the customer will see it)", { required: false, confirm: "Reject order" });
        if (reason === null || reason === void 0) return;
        qrHandled(q.id, true);
        save("rejectQrOrder", { qrId: q.id, reason: reason || "" }, { queue: false }).then(() => toast("Order rejected", "info", 2500)).catch((e) => {
          qrHandled(q.id, false);
          toast("Not saved: " + errText(e), "error", 7e3);
        });
      };
      return h(
        "article",
        { class: "qr-card" },
        h(
          "header",
          null,
          h("div", null, h("strong", null, q.name), h("a", { href: "tel:" + q.phone, class: "qr-phone" }, q.phone)),
          h("div", { class: "qr-where" + (q.type === "TAKEAWAY" ? " tk" : "") }, q.type === "TAKEAWAY" ? "Takeaway" : q.tableName || "Dine-in"),
          h("span", { class: "muted small" }, ago(q.at))
        ),
        h("div", { class: "qr-items" }, (q.items || []).map((l) => h("div", { class: "trow" }, h("span", null, h("b", null, l.qty + "\xD7 "), l.name, l.notes ? h("small", null, " \xB7 " + l.notes) : null), h("span", null, M2(l.qty * l.price))))),
        q.notes ? h("div", { class: "qr-note" }, "\u{1F4DD} ", q.notes) : null,
        h("div", { class: "trow grand" }, h("span", null, "Items total"), h("span", null, M2(q.subtotal))),
        h("footer", { class: direct ? "three" : "" }, reject, direct, accept)
      );
    }
    function draw() {
      const parts = [h("p", { class: "muted" }, "Orders customers sent from the QR menu. Accept to make a normal order and send it to the kitchen.")];
      if (!S.qr.length) parts.push(emptyState("No QR orders waiting", "New customer orders appear here with a sound alert."));
      else parts.push(h("div", { class: "qr-grid" }, S.qr.map(card)));
      box.replaceChildren(...parts);
    }
    draw();
    S.qrFresh = [];
    const off = on((k) => {
      if (k.includes("qr") || k.includes("all")) draw();
    });
    const tm = setInterval(draw, 6e4);
    return () => {
      off();
      clearInterval(tm);
    };
  }

  // web/js/s-settings.js
  var s_settings_exports = {};
  __export(s_settings_exports, {
    render: () => render13
  });
  var tab = "";
  function render13(el, ctx) {
    const all = [
      ["hotel", "Hotel", can("MANAGE_SETTINGS")],
      ["billing", "Tax & billing", can("MANAGE_SETTINGS")],
      ["receipt", "Receipt", can("MANAGE_SETTINGS")],
      ["tables", "Tables", can("MANAGE_TABLES")],
      ["qrmenu", "QR menu", can("MANAGE_SETTINGS")],
      ["account", "My account", true],
      ["data", "Data & backup", can("EXPORT_BACKUP") || S.user.isOwner]
    ].filter((x) => x[2]);
    if (!all.some((x) => x[0] === tab)) tab = all[0][0];
    const body = h("div", { class: "stack" });
    const bar2 = h("div");
    el.replaceChildren(h("div", { class: "stack" }, bar2, body));
    function show() {
      bar2.replaceChildren(tabs(all.map((x) => ({ key: x[0], label: x[1] })), tab, (k) => {
        tab = k;
        show();
      }));
      body.replaceChildren({ hotel, billing, receipt, tables, qrmenu, account, data }[tab]());
    }
    const panel = (title, ...kids) => h("section", { class: "panel" }, h("header", null, h("h2", null, title)), h("div", { class: "pad" }, kids));
    const yn = (label, key) => {
      const cb = h("input", { type: "checkbox" });
      cb.checked = S.settings[key] === "true";
      return { el: h("label", { class: "check" }, cb, label), get: () => cb.checked };
    };
    function saveBtn(collect, done) {
      const b = h("button", { class: "btn btn-primary", type: "button" }, "Save changes");
      b.addEventListener("click", () => act(b, async () => {
        const values = collect(), prev = S.settings;
        S.settings = Object.assign({}, prev, Object.fromEntries(Object.entries(values).map(([k, v]) => [k, String(v)])));
        save("saveSettings", { values }).catch((e) => {
          S.settings = prev;
          toast("Settings NOT saved: " + errText(e), "error", 6e3);
        });
        if (done) done();
      }));
      return b;
    }
    function hotel() {
      const f = {
        HOTEL_NAME: field({ label: "Hotel / restaurant name", value: S.settings.HOTEL_NAME, maxlength: 80 }),
        HOTEL_ADDRESS: field({ label: "Address (printed on receipts)", value: S.settings.HOTEL_ADDRESS, maxlength: 160 }),
        HOTEL_PHONE: field({ label: "Phone", value: S.settings.HOTEL_PHONE, maxlength: 40 }),
        CURRENCY: field({ label: "Currency symbol", value: S.settings.CURRENCY, maxlength: 8, hint: "Shown before amounts, e.g. Rs. or $" }),
        DECIMALS: field({ label: "Decimal places", options: ["0", "1", "2"].map((v) => ({ value: v, label: v })), value: S.settings.DECIMALS })
      };
      return panel("Hotel details", h("div", { class: "form-grid" }, Object.values(f).map((x) => x.el)), h("div", null, saveBtn(() => {
        const v = {};
        Object.keys(f).forEach((k) => {
          v[k] = f[k].value();
        });
        v.SETUP_COMPLETE = true;
        return v;
      })));
    }
    function qrmenu() {
      const id = S.hotel && S.hotel.id || "";
      const url = location.origin + location.pathname + "#/menu/" + id;
      const old = !verAtLeast(S.serverVersion, "1.3.0");
      const on1 = yn("Show the menu to customers who scan the QR code", "QR_MENU_ENABLED");
      const on2 = yn("Customers can send orders from the menu (staff accept them first)", "QR_ORDERING_ENABLED");
      const qrBox = h("div", { class: "qr-preview" }, qrSvg(url, 6));
      const name = S.settings.HOTEL_NAME || S.hotel && S.hotel.name || "";
      qrPosterCanvas(url, name, { ordering: S.settings.QR_ORDERING_ENABLED === "true", address: S.settings.HOTEL_ADDRESS, phone: S.settings.HOTEL_PHONE }).then((cv) => {
        qrBox.classList.add("poster");
        qrBox.replaceChildren(h("img", { src: cv.toDataURL("image/png"), alt: "QR menu card preview" }));
      }).catch(() => {
      });
      return h(
        "div",
        { class: "stack" },
        old ? h("div", { class: "band s-warn", role: "alert" }, h("div", null, h("p", null, h("b", null, "Update your hotel script first. "), "The QR menu needs hotel script version 1.3.0 (yours: " + (S.serverVersion || "unknown") + "). Owner → Account & connection → Copy Apps Script, paste it in your hotel sheet's Apps Script, Save, then Deploy → Manage deployments → Edit → New version."))) : null,
        panel(
          "QR menu",
          h("p", { class: "muted" }, "Print this QR code and put it on your tables. Customers scan it with their phone camera to see your menu (no app, no sign-in). If ordering is on, their order appears in “QR orders” with a sound alert, and you accept it before it goes to the kitchen."),
          h("div", { class: "stack" }, on1.el, on2.el),
          h("div", null, saveBtn(() => ({ QR_MENU_ENABLED: on1.get(), QR_ORDERING_ENABLED: on2.get() && on1.get() }), () => setTimeout(show, 50)))
        ),
        panel(
          "Your QR code",
          h(
            "div",
            { class: "qr-setup" },
            qrBox,
            h(
              "div",
              { class: "stack" },
              h("div", null, h("div", { class: "muted small" }, "Menu link"), h("div", { class: "qr-url" }, url)),
              h(
                "div",
                { class: "row-btns" },
                copyButton(url, "Copy link", "Link copied", false),
                h("a", { class: "btn", href: url, target: "_blank", rel: "noopener" }, "Open menu"),
                h("button", { class: "btn", type: "button", onclick: () => downloadQr(url, name) }, "⬇ Download QR"),
                h("button", { class: "btn btn-primary", type: "button", onclick: () => printQrPoster(url, name) }, "\u{1F5A8} Print table card")
              ),
              S.settings.QR_MENU_ENABLED !== "true" ? h("div", { class: "muted small" }, "The QR menu is switched off: customers who scan will see “menu not available” until you switch it on above.") : null
            )
          )
        )
      );
    }
    function billing() {
      const tax = yn("Charge tax", "TAX_ENABLED"), svc = yn("Charge service", "SERVICE_ENABLED"), onSvc = yn("Tax is also charged on the service charge", "TAX_ON_SERVICE");
      const f = {
        TAX_LABEL: field({ label: "Tax name", value: S.settings.TAX_LABEL, maxlength: 20 }),
        TAX_PERCENT: field({ label: "Tax %", type: "number", value: S.settings.TAX_PERCENT, inputmode: "decimal" }),
        SERVICE_PERCENT: field({ label: "Service charge %", type: "number", value: S.settings.SERVICE_PERCENT, inputmode: "decimal" }),
        ROUNDING: field({ label: "Round the bill total to", options: [["0", "No rounding"], ["1", "Nearest 1"], ["5", "Nearest 5"], ["10", "Nearest 10"]].map(([value, label]) => ({ value, label })), value: S.settings.ROUNDING }),
        MAX_DISCOUNT_PERCENT: field({ label: "Largest discount a manager may give (%)", type: "number", value: S.settings.MAX_DISCOUNT_PERCENT, inputmode: "decimal", hint: "The owner is not limited." })
      };
      return panel(
        "Tax, service and discounts",
        h("div", { class: "form-grid" }, tax.el, svc.el, f.TAX_LABEL.el, f.TAX_PERCENT.el, f.SERVICE_PERCENT.el, onSvc.el, f.ROUNDING.el, f.MAX_DISCOUNT_PERCENT.el),
        h("div", { class: "muted small" }, "Order of calculation: items \u2212 discount, then service charge, then tax, then rounding."),
        h("div", null, saveBtn(() => {
          const v = { TAX_ENABLED: tax.get(), SERVICE_ENABLED: svc.get(), TAX_ON_SERVICE: onSvc.get() };
          Object.keys(f).forEach((k) => {
            v[k] = f[k].value();
          });
          return v;
        }))
      );
    }
    function receipt() {
      const f = {
        RECEIPT_SIZE: field({ label: "Paper size", options: [["58mm", "58 mm (small thermal)"], ["80mm", "80 mm (thermal)"], ["A4", "A4 sheet"]].map(([value, label]) => ({ value, label })), value: S.settings.RECEIPT_SIZE }),
        TAX_NUMBER: field({ label: "Tax registration no. (printed)", value: S.settings.TAX_NUMBER, maxlength: 40 }),
        RECEIPT_FOOTER: field({ label: "Footer message", value: S.settings.RECEIPT_FOOTER, maxlength: 160 })
      };
      const test = h("button", { class: "btn", type: "button", onclick: () => {
        const o = { id: "ORD-TEST-0001", tableName: "Table 1", openedAt: "2026-01-01 12:00:00", waiterName: "Sample", items: [{ name: "Sample dish", qty: 2, price: 500, lineTotal: 1e3 }, { name: "Tea", qty: 1, price: 100, lineTotal: 100 }] };
        printReceipt(o, { id: "BIL-TEST", subtotal: 1100, discount: 0, service: 0, tax: 0, roundOff: 0, total: 1100, payments: [{ method: "CASH", amount: 1100 }], paid: 1100, paymentStatus: "PAID" });
      } }, "Print a test receipt");
      return panel(
        "Receipt",
        h("div", { class: "form-grid" }, Object.values(f).map((x) => x.el)),
        h("div", { class: "btnrow" }, saveBtn(() => {
          const v = {};
          Object.keys(f).forEach((k) => {
            v[k] = f[k].value();
          });
          return v;
        }), test),
        h("p", { class: "muted small" }, "Printing opens your browser print window. For a thermal printer, choose it there and set margins to \u201CNone\u201D.")
      );
    }
    function tables() {
      const box = h("div", { class: "stack" });
      function draw() {
        const list = S.tables;
        box.replaceChildren(
          h("div", { class: "btnrow" }, h("button", { class: "btn btn-primary", type: "button", onclick: addMany }, "\uFF0B Add several tables"), h("button", { class: "btn", type: "button", onclick: () => one(null) }, "\uFF0B Add one table")),
          list.length ? h("div", { class: "tablewrap" }, h(
            "table",
            { class: "tbl" },
            h("thead", null, h("tr", null, ["No.", "Name", "Seats", "Section", "Status", ""].map((x) => h("th", null, x)))),
            h("tbody", null, list.map((t) => h("tr", null, h("td", null, t.number), h("td", null, t.name), h("td", null, t.capacity), h("td", null, t.section || "\u2013"), h("td", null, t.active ? t.status : "Hidden"), h("td", { class: "r" }, h("button", { class: "btn btn-small", type: "button", onclick: () => one(t) }, "Edit")))))
          )) : emptyState("No tables yet", "Add your dining tables so waiters can start orders on them.")
        );
      }
      function addMany() {
        const f = { count: field({ label: "How many tables", type: "number", value: "10" }), capacity: field({ label: "Seats per table", type: "number", value: "4" }), section: field({ label: "Section (optional)", value: "", placeholder: "e.g. Hall, Terrace", maxlength: 30 }) };
        openModal({ title: "Add tables", content: h("div", { class: "stack" }, Object.values(f).map((x) => x.el)), actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Add");
          ok.addEventListener("click", async () => {
            const r = await act(ok, () => save("addTables", { count: Number(f.count.value()), capacity: Number(f.capacity.value()), section: f.section.value() }));
            if (r.ok) m.close();
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        } });
      }
      function one(t) {
        const next = S.tables.reduce((m, x) => Math.max(m, x.number), 0) + 1;
        const f = {
          number: field({ label: "Table number", type: "number", value: String(t ? t.number : next) }),
          name: field({ label: "Name", value: t ? t.name : "", maxlength: 30, placeholder: "Table " + (t ? t.number : next) }),
          capacity: field({ label: "Seats", type: "number", value: String(t ? t.capacity : 4) }),
          section: field({ label: "Section", value: t ? t.section : "", maxlength: 30 }),
          active: field({ label: "Shown to staff", options: [{ value: "true", label: "Yes" }, { value: "false", label: "Hidden" }], value: t ? String(t.active) : "true" })
        };
        openModal({ title: t ? "Edit table" : "New table", content: h("div", { class: "form-grid" }, Object.values(f).map((x) => x.el)), actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Save");
          ok.addEventListener("click", async () => {
            const r = await act(ok, () => save("saveTable", { tableId: t ? t.id : "", number: Number(f.number.value()), name: f.name.value(), capacity: Number(f.capacity.value()), section: f.section.value(), active: f.active.value() === "true" }));
            if (r.ok) m.close();
          });
          const del = t ? h("button", { class: "btn btn-danger", type: "button", onclick: async () => {
            if (await confirmDialog("Remove table", "Remove " + t.name + "? It must have no open order.", "Remove", true)) {
              try {
                await save("removeTable", { tableId: t.id });
                m.close();
              } catch (e) {
                toast(errText(e), "error");
              }
            }
          } }, "Remove") : null;
          return [del, h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        } });
      }
      draw();
      offTables = on((k) => {
        if (k.includes("tables") || k.includes("all")) draw();
      });
      return panel("Tables", box);
    }
    let offTables = null;
    function account() {
      const parts = [h("div", { class: "rows" }, [["Name", S.user.name], ["Username", S.user.username || "\u2013"], ["Role", S.user.isOwner ? "Owner" : S.user.role]].map(([k, v]) => h("div", { class: "row" }, h("dt", null, k), h("dd", null, v), h("span"))))];
      if (S.user.isOwner) parts.push(h("p", { class: "muted" }, "The owner password, subscription and Google Sheet connection are managed in the account page."), h("div", null, h("a", { class: "btn", href: "#/portal" }, "Account & connection")));
      else {
        const f = { oldPassword: field({ label: "Current password", type: "password", autocomplete: "current-password", maxlength: 128 }), newPassword: field({ label: "New password", type: "password", autocomplete: "new-password", maxlength: 128, hint: "At least 6 characters." }) };
        const b = h("button", { class: "btn btn-primary", type: "button" }, "Change password");
        b.addEventListener("click", async () => {
          Object.values(f).forEach((x) => x.clear());
          const r = await act(b, async () => {
            const x = await save("changeMyPassword", { oldPassword: f.oldPassword.raw(), newPassword: f.newPassword.raw() }, { queue: false });
            const s = sessionInfo();
            if (s && x.token) {
              s.token = x.token;
              const { store: store2 } = await Promise.resolve().then(() => (init_store(), store_exports));
              store2.setApp(Object.assign({}, s), !!(store2.getApp() && store2.getApp().remember));
            }
            f.oldPassword.input.value = f.newPassword.input.value = "";
          });
          if (!r.ok && r.error && r.error.details && r.error.details.field && f[r.error.details.field]) f[r.error.details.field].setError(r.error.message);
        });
        parts.push(h("div", { class: "form-grid" }, f.oldPassword.el, f.newPassword.el), h("div", null, b));
      }
      return panel("My account", ...parts);
    }
    function data() {
      const b = h("button", { class: "btn", type: "button" }, "Make a backup copy now");
      b.addEventListener("click", async () => {
        const r = await act(b, () => save("backup", {}, { queue: false, timeout: 9e4 }), { done: "Backup made" });
        if (r.ok) {
          const link = h("a", { href: r.value.url, target: "_blank", rel: "noopener" }, r.value.name);
          toast("Backup saved in your Google Drive: " + r.value.name, "ok", 8e3);
          b.after(h("p", { class: "muted small" }, "Last backup: ", link));
        }
      });
      return panel(
        "Your data",
        h("p", null, "All orders, staff and menu are stored in your own Google Sheet. Open it any time from Google Drive."),
        S.user.isOwner || can("EXPORT_BACKUP") ? h("div", null, b) : null,
        h("p", { class: "muted small" }, "A backup is a full copy of the Google Sheet saved in your Drive. Reports can also be exported to CSV from their screens.")
      );
    }
    show();
    return () => {
      if (offTables) offTables();
    };
  }

  // web/js/shell.js
  var SCREENS = [
    { key: "dashboard", label: "Dashboard", icon: "\u25A6", perms: ["VIEW_DASHBOARD"], mod: s_dashboard_exports },
    { key: "tables", label: "Tables", icon: "\u25EB", perms: ["VIEW_TABLES"], mod: s_tables_exports },
    { key: "pos", label: "New order", icon: "\uFF0B", perms: ["CREATE_ORDERS"], mod: s_pos_exports },
    { key: "kitchen", label: "Kitchen", icon: "\u2668", perms: ["VIEW_KITCHEN"], mod: s_kitchen_exports },
    { key: "orders", label: "Orders & bills", icon: "\u2630", perms: ["VIEW_ORDERS"], mod: s_orders_exports },
    { key: "qr", label: "QR orders", icon: "\u25A3", perms: ["CREATE_ORDERS"], mod: s_qr_exports, show: () => S.settings.QR_MENU_ENABLED === "true" && S.settings.QR_ORDERING_ENABLED === "true" },
    { key: "menu", label: "Menu", icon: "\u2756", perms: ["VIEW_MENU"], mod: s_menu_exports },
    { key: "customers", label: "Customers", icon: "\u263A", perms: ["VIEW_CUSTOMERS"], mod: s_people_exports },
    { key: "reservations", label: "Reservations", icon: "\u25F7", perms: ["VIEW_RESERVATIONS"], mod: s_reservations_exports },
    { key: "expenses", label: "Expenses", icon: "\u21A7", perms: ["MANAGE_EXPENSES"], mod: s_expenses_exports },
    { key: "reports", label: "Reports", icon: "\u224B", perms: ["VIEW_SALES", "VIEW_REPORTS"], mod: s_reports_exports },
    { key: "staff", label: "Staff", icon: "\u2687", perms: ["MANAGE_STAFF"], mod: s_staff_exports },
    { key: "activity", label: "Activity log", icon: "\u270E", perms: ["VIEW_ACTIVITY"], mod: s_activity_exports },
    { key: "settings", label: "Settings", icon: "\u2699", perms: null, mod: s_settings_exports }
  ];
  var allowed = () => SCREENS.filter((s) => (!s.perms || canAny(s.perms)) && (!s.show || s.show()));
  var homeScreen = () => {
    const a = allowed();
    return (a.find((s) => s.key === "dashboard") || a.find((s) => s.key === "tables") || a.find((s) => s.key === "kitchen") || a[0] || SCREENS[SCREENS.length - 1]).key;
  };
  async function launch(sess, boot, remember) {
    store.setApp(sess, remember);
    try {
      localStorage.setItem("hotelpos.lasturl", sess.url);
    } catch (e) {
    }
    await start(sess, boot);
  }
  var cleanup = null;
  var offs = [];
  var current = "";
  async function appView(root2, nav2, screen) {
    const app = store.getApp();
    if (!app) {
      nav2("login");
      return;
    }
    onAuthLost((err) => {
      const blocking = ["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"].includes(err.code);
      signOut();
      if (blocking) nav2("blocked", err);
      else nav2("login", { notice: err.code === "ACCOUNT_DISABLED" ? err.message : "Your session ended. Please sign in again." });
    });
    if (!S.ready) {
      mount(root2, h("div", { class: "boot" }, spinner("big"), h("div", null, "Opening " + (app.hotelName || "your hotel") + "\u2026")));
      try {
        await start(app);
      } catch (err) {
        if (err && ["SESSION_INVALID", "ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED"].includes(err.code)) return;
        mount(root2, h(
          "div",
          { class: "boot" },
          h("p", null, err && err.message || "Could not open your hotel."),
          h(
            "div",
            { class: "row-actions" },
            h("button", { class: "btn btn-primary", onclick: () => nav2("app/" + (screen || "")) }, "Try again"),
            store.getOwner() ? h("button", { class: "btn", onclick: () => nav2("portal") }, "Hotel connection") : null,
            h("button", { class: "btn", onclick: () => {
              signOut();
              nav2("login");
            } }, "Sign out")
          )
        ));
        return;
      }
    }
    const list = allowed();
    let item = list.find((s) => s.key === screen);
    if (!item) {
      nav2("app/" + homeScreen());
      return;
    }
    current = item.key;
    setScreen(item.key);
    drawShell(root2, nav2, list, item);
  }
  function drawShell(root2, nav2, list, item) {
    if (cleanup) {
      try {
        cleanup();
      } catch (e) {
      }
      cleanup = null;
    }
    offs.forEach((f) => f());
    offs = [];
    const screenEl = h("div", { class: "screen", id: "screen" });
    const sync = h("div", { class: "sync", role: "status", "aria-live": "polite" });
    const side = h(
      "aside",
      { class: "side" },
      h(
        "div",
        { class: "side-top" },
        h("div", { class: "side-brand" }, "Hotel POS"),
        h("div", { class: "side-hotel" }, S.hotel && S.hotel.name || "")
      ),
      h("nav", { class: "side-nav" }, list.map((s) => h(
        "a",
        { class: "nav-item" + (s.key === item.key ? " on" : ""), href: "#/app/" + s.key, onclick: () => document.body.classList.remove("nav-open") },
        h("span", { class: "ni" }, s.icon),
        s.label,
        s.key === "qr" ? h("span", { class: "nav-badge", hidden: !S.qr.length }, S.qr.length) : null
      ))),
      h(
        "div",
        { class: "side-foot" },
        h("div", { class: "who" }, h("strong", null, S.user.name), h("span", null, S.user.isOwner ? "Owner" : S.user.role.charAt(0) + S.user.role.slice(1).toLowerCase())),
        S.user.isOwner ? h("a", { class: "btn btn-small", href: "#/portal" }, "Account & connection") : null,
        h("button", { class: "btn btn-small", type: "button", onclick: async () => {
          if (S.queued && !await confirmDialog("Unsent changes", S.queued + " change(s) are still waiting to be sent. Signing out now will discard them.", "Sign out anyway", true)) return;
          signOut();
          nav2("login");
        } }, "Sign out")
      )
    );
    const bar2 = h(
      "header",
      { class: "bar" },
      h("button", { class: "burger", type: "button", "aria-label": "Menu", onclick: () => document.body.classList.toggle("nav-open") }, "\u2630"),
      h("h1", null, item.label),
      h("div", { class: "spacer" }),
      sync
    );
    const scrim = h("div", { class: "nav-scrim", onclick: () => document.body.classList.remove("nav-open") });
    mount(root2, h("div", { class: "app" }, side, scrim, h("div", { class: "main" }, bar2, screenEl)));
    function drawSync() {
      sync.className = "sync " + (S.offline ? "off" : S.sync);
      let kids;
      if (S.offline) kids = [h("span", { class: "dot" }), "Offline" + (S.queued ? " \xB7 " + S.queued + " waiting" : "")];
      else if (S.sync === "saving") kids = [spinner(), "Saving\u2026"];
      else if (S.sync === "saved") kids = [tickIcon(), "Saved"];
      else if (S.sync === "error") kids = [h("span", { class: "dot" }), "Not saved"];
      else kids = [h("span", { class: "dot" }), S.queued ? S.queued + " waiting" : "Live"];
      sync.replaceChildren(...kids);
    }
    drawSync();
    offs.push(on((keys) => {
      if (keys.includes("sync") || keys.includes("all")) drawSync();
      if (keys.includes("rejected") && S.rejected) {
        toast(S.rejected, "error", 8e3);
        S.rejected = "";
      }
    }));
    offs.push(on((keys) => {
      if (!keys.includes("tick") && !keys.includes("all") && !keys.includes("menu") && !keys.includes("settings")) return;
      const now = allowed().map((s) => s.key).join();
      if (now !== list.map((s) => s.key).join()) {
        nav2("app/" + (allowed().some((s) => s.key === current) ? current : homeScreen()));
      }
    }));
    const qrAlert = h("div", { class: "qr-alert", hidden: true, role: "status", "aria-live": "polite" });
    root2.querySelector(".app").append(qrAlert);
    let qrAlertT = null;
    offs.push(on((keys) => {
      if (!keys.includes("qr") && !keys.includes("all")) return;
      const b = side.querySelector(".nav-badge");
      if (b) {
        b.textContent = S.qr.length;
        b.hidden = !S.qr.length;
      }
      const fresh = S.qrFresh;
      S.qrFresh = [];
      if (!fresh.length || !can("CREATE_ORDERS") || current === "qr") return;
      const x = fresh[0];
      beep();
      setTimeout(beep, 260);
      qrAlert.replaceChildren(
        h("div", { class: "qa-ic" }, "\u{1F514}"),
        h("div", { class: "qa-t" }, h("strong", null, fresh.length > 1 ? fresh.length + " new QR orders" : "New QR order"), h("span", null, x.name + " \xB7 " + (x.type === "TAKEAWAY" ? "Takeaway" : x.tableName) + " \xB7 " + money(x.subtotal, S.settings))),
        h("button", { class: "btn btn-primary btn-small", type: "button", onclick: () => {
          qrAlert.hidden = true;
          nav2("app/qr");
        } }, "View"),
        h("button", { class: "qa-x", type: "button", "aria-label": "Close", onclick: () => qrAlert.hidden = true }, "\u2715")
      );
      qrAlert.hidden = false;
      clearTimeout(qrAlertT);
      qrAlertT = setTimeout(() => qrAlert.hidden = true, 2e4);
    }));
    const ctx = { nav: (s, arg) => {
      S.handoff = arg || null;
      nav2("app/" + s);
    }, el: screenEl, setTitle: (t) => {
      bar2.querySelector("h1").textContent = t;
    } };
    try {
      cleanup = item.mod.render(screenEl, ctx) || null;
    } catch (e) {
      console.error(e);
      screenEl.append(h("div", { class: "empty" }, h("strong", null, "This screen could not open."), h("p", null, "Please reload the page.")));
    }
  }

  // web/js/auth.js
  var SVGNS = "http://www.w3.org/2000/svg";
  function svgEl(markup, cls) {
    const t = document.createElement("template");
    t.innerHTML = markup.trim();
    const el = t.content.firstChild;
    if (cls) el.setAttribute("class", cls);
    return el;
  }
  var ICONS = {
    crest: '<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3d58e"/><stop offset=".55" stop-color="#d4a24c"/><stop offset="1" stop-color="#9c6b1f"/></linearGradient></defs><circle cx="32" cy="32" r="30" fill="none" stroke="url(#gc)" stroke-width="1.6"/><circle cx="32" cy="32" r="25.5" fill="none" stroke="url(#gc)" stroke-width=".7" opacity=".7"/><path d="M17 40.5h30" stroke="url(#gc)" stroke-width="2.2" stroke-linecap="round"/><path d="M19.5 38.5a12.5 12.5 0 0 1 25 0z" fill="url(#gc)"/><circle cx="32" cy="23.6" r="2.1" fill="url(#gc)"/><path d="M25 45.5h14" stroke="url(#gc)" stroke-width="1.4" stroke-linecap="round" opacity=".8"/></svg>',
    tables: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="5" rx="1.5"/><path d="M7 10v9M17 10v9M4 15h4M16 15h4"/></svg>',
    kitchen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16a8 8 0 0 1 16 0z"/><path d="M3 19h18M12 6.5V8"/></svg>',
    bill: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
    staff: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.6M18 19a5 5 0 0 0-2.6-4.4"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v6c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/></svg>',
    owner: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M5 20V9l7-5 7 5v11M10 20v-5h4v5"/></svg>',
    eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 5.1A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  var icon = (name, cls) => svgEl(ICONS[name], cls || "ic");
  var DEV_NAME = "DevLinks", DEV_URL = "https://devlinks.online", DEV_HOST = "devlinks.online";
  function devCredit(cls) {
    return h(
      "div",
      { class: cls || "dev-credit" },
      h("span", null, "Developed by "),
      h("a", { href: DEV_URL, target: "_blank", rel: "noopener" }, h("strong", null, DEV_NAME)),
      h("span", { class: "sep", "aria-hidden": "true" }, "\u2022"),
      h("a", { href: DEV_URL, target: "_blank", rel: "noopener" }, DEV_HOST)
    );
  }
  /* Adds a show/hide eye button to a password field. */
  function revealable(f) {
    const btn = h("button", { class: "pw-eye", type: "button", "aria-label": "Show password", title: "Show password" }, icon("eye"));
    const wrap = h("div", { class: "pw-wrap" });
    f.input.replaceWith(wrap);
    wrap.append(f.input, btn);
    btn.onclick = () => {
      const show = f.input.type === "password";
      f.input.type = show ? "text" : "password";
      btn.replaceChildren(icon(show ? "eyeOff" : "eye"));
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
      btn.title = show ? "Hide password" : "Show password";
      f.input.focus();
    };
    return f;
  }
  function shell(content, { showAdminLink = true, nav: nav2, eyebrow, admin = false } = {}) {
    const features = admin ? [
      ["shield", "Hotel accounts", "Activate, suspend and renew subscriptions."],
      ["chart", "One console", "Every registered hotel in one place."]
    ] : [
      ["tables", "Tables & orders", "Dine-in, takeaway and live table status."],
      ["kitchen", "Kitchen display", "Tickets reach the kitchen with a sound alert."],
      ["bill", "Billing & receipts", "Direct bill, split payment and instant print."],
      ["staff", "Staff & roles", "Waiter, cashier and kitchen logins."],
      ["chart", "Reports", "Sales, expenses and profit at a glance."]
    ];
    const deco = svgEl('<svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g fill="none" stroke="#d4a24c" stroke-width="1">' + Array.from({ length: 13 }, (_, i) => '<circle cx="600" cy="600" r="' + (60 + i * 46) + '"/>').join("") + '</g><g stroke="#d4a24c" stroke-width=".6">' + Array.from({ length: 12 }, (_, i) => {
      const a = Math.PI + i / 11 * (Math.PI / 2);
      return '<line x1="600" y1="600" x2="' + (600 + Math.cos(a) * 760).toFixed(1) + '" y2="' + (600 + Math.sin(a) * 760).toFixed(1) + '"/>';
    }).join("") + "</g></svg>", "auth-deco");
    return h(
      "div",
      { class: "auth auth-lux" },
      h(
        "aside",
        { class: "auth-brand" },
        deco,
        h(
          "div",
          { class: "lux-top" },
          h(
            "div",
            { class: "lux-logo" },
            icon("crest", "lux-crest"),
            h("div", null, h("div", { class: "brand-mark" }, "Hotel POS"), h("div", { class: "lux-sub" }, admin ? "Provider Console" : "Hospitality Suite"))
          )
        ),
        h(
          "div",
          { class: "lux-mid" },
          h(
            "h2",
            { class: "lux-head" },
            admin ? ["Every hotel, ", h("em", null, "one"), " console."] : ["Run your restaurant with ", h("em", null, "five-star"), " ease."]
          ),
          h("p", { class: "brand-line" }, admin ? "Manage registered hotels, subscriptions and access from a single, secure place." : "Orders, tables, kitchen, billing and staff for hotels and restaurants \u2014 fast on every device, even when the internet drops."),
          h("ul", { class: "lux-feats" }, features.map(([ic, t, d]) => h("li", null, h("span", { class: "lux-ic" }, icon(ic)), h("div", null, h("b", null, t), h("span", null, d))))),
          admin ? null : h(
            "div",
            { class: "lux-badges" },
            h("span", null, icon("bolt"), "Instant"),
            h("span", null, icon("shield"), "Saved on this device"),
            h("span", null, icon("cloud"), "Backed up to Google Sheet")
          )
        ),
        h(
          "div",
          { class: "auth-foot" },
          devCredit(),
          admin ? h("button", { class: "link-button", type: "button", onclick: () => nav2("login") }, "Hotel owner sign-in") : showAdminLink ? h("button", { class: "link-button", type: "button", onclick: () => nav2("admin") }, "Administrator sign-in") : null
        )
      ),
      h(
        "main",
        { class: "auth-main" },
        h(
          "div",
          { class: "auth-card" },
          eyebrow ? h("div", { class: "lux-eyebrow" }, eyebrow) : null,
          h("div", { class: "auth-form" }, content)
        ),
        h("div", { class: "auth-legal" }, h("span", null, "\xA9 " + (/* @__PURE__ */ new Date()).getFullYear() + " Hotel POS"), devCredit("dev-credit dark"))
      )
    );
  }
  function showError(err, fields, slot) {
    slot.replaceChildren();
    const target = err.details && err.details.field && fields[err.details.field];
    if (target) {
      target.setError(err.message);
      target.input.focus();
    } else slot.append(formError(err.message));
  }
  function registerView(nav2) {
    const f = {
      hotelName: field({ label: "Hotel name", name: "hotelName", autocomplete: "organization", maxlength: 80 }),
      ownerName: field({ label: "Owner name", name: "ownerName", autocomplete: "name", maxlength: 60 }),
      username: field({
        label: "Username",
        name: "username",
        autocomplete: "username",
        maxlength: 24,
        hint: "4 to 24 characters. Lowercase letters, numbers and underscore."
      }),
      phone: field({ label: "Phone", name: "phone", type: "tel", autocomplete: "tel", maxlength: 24, inputmode: "tel" }),
      email: field({ label: "Email", name: "email", type: "email", autocomplete: "email", maxlength: 120 }),
      password: field({
        label: "Password",
        name: "password",
        type: "password",
        autocomplete: "new-password",
        maxlength: 128,
        hint: "At least 8 characters, with a letter and a number."
      }),
      confirmPassword: field({ label: "Confirm password", name: "confirmPassword", type: "password", autocomplete: "new-password", maxlength: 128 })
    };
    revealable(f.password);
    revealable(f.confirmPassword);
    const honeypot = h(
      "div",
      { class: "hp", "aria-hidden": "true" },
      h("label", null, "Website", h("input", { name: "website", tabindex: "-1", autocomplete: "off" }))
    );
    const slot = h("div");
    const submit = h("button", { class: "btn btn-primary btn-block btn-lg btn-lux", type: "submit" }, "Register hotel");
    const form = h(
      "form",
      { novalidate: true, onsubmit: async (e) => {
        e.preventDefault();
        Object.values(f).forEach((x) => x.clear());
        slot.replaceChildren();
        const data = {
          hotelName: f.hotelName.value(),
          ownerName: f.ownerName.value(),
          username: f.username.value().toLowerCase(),
          phone: f.phone.value(),
          email: f.email.value(),
          password: f.password.raw(),
          confirmPassword: f.confirmPassword.raw(),
          website: honeypot.querySelector("input").value
        };
        const missing = Object.keys(f).filter((k) => !data[k]);
        if (missing.length) {
          missing.forEach((k) => f[k].setError("This field is required."));
          f[missing[0]].input.focus();
          return;
        }
        if (data.password !== data.confirmPassword) {
          f.confirmPassword.setError("Passwords do not match.");
          f.confirmPassword.input.focus();
          return;
        }
        setBusy(submit, true, "Registering\u2026");
        try {
          const result = await call("registerHotel", data);
          nav2("registered", result);
        } catch (err) {
          if (!(err instanceof ApiError)) {
            console.error(err);
            err = new ApiError("SERVER_ERROR", "Unable to register right now. Please try again.");
          }
          showError(err, f, slot);
        } finally {
          setBusy(submit, false);
        }
      } },
      h(
        "div",
        { class: "form-grid" },
        h("div", { class: "span-2" }, f.hotelName.el),
        f.ownerName.el,
        f.phone.el,
        h("div", { class: "span-2" }, f.email.el),
        h("div", { class: "span-2" }, f.username.el),
        f.password.el,
        f.confirmPassword.el
      ),
      honeypot,
      slot,
      submit
    );
    return shell([
      h(
        "div",
        null,
        h("h1", null, "Register your hotel"),
        h("p", { class: "lead" }, "Create the owner account. You will get a Hotel ID and a Hotel Code, and the administrator will activate your subscription.")
      ),
      form,
      h("p", { class: "auth-alt" }, "Already registered? ", h("button", { class: "link-button", type: "button", onclick: () => nav2("login") }, "Sign in"))
    ], { nav: nav2, eyebrow: "New hotel" });
  }
  function registeredView(result, nav2) {
    const tag = h(
      "div",
      { class: "keytag" },
      h(
        "dl",
        null,
        h(
          "div",
          null,
          h("dt", null, "Hotel ID"),
          h("dd", null, h("span", { class: "big" }, result.hotelId), copyButton(result.hotelId, "Copy", "Hotel ID copied"))
        ),
        h(
          "div",
          null,
          h("dt", null, "Hotel Code (staff use this to sign in)"),
          h("dd", null, h("span", { class: "big" }, result.activationCode), copyButton(result.activationCode, "Copy", "Hotel Code copied"))
        )
      )
    );
    return shell([
      h(
        "div",
        null,
        h("h1", null, result.hotelName + " is registered"),
        h("p", { class: "lead" }, "Keep these two codes. Your account now waits for the administrator to activate it and set your subscription period.")
      ),
      tag,
      h("p", { class: "lead" }, "After the administrator activates your account, you create your own Google Sheet and connect it from your portal. Your orders, staff and menu are saved in that sheet."),
      h("div", null, h("button", { class: "btn btn-primary btn-lux", type: "button", onclick: () => nav2("login") }, "Go to sign in"))
    ], { nav: nav2, eyebrow: "Registration complete" });
  }
  var CODE_KEY = "hotelpos.staffcode";
  var remembered = () => {
    try {
      return JSON.parse(localStorage.getItem(CODE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  };
  async function openApp(nav2, sess, boot, remember, fallback) {
    try {
      await launch(sess, boot, remember);
      nav2("app/" + homeScreen());
    } catch (err) {
      if (fallback) {
        nav2("portal", fallback);
        return;
      }
      throw err;
    }
  }
  function warmUp() {
    try {
      const hotel = localStorage.getItem("hotelpos.lasturl");
      [CONFIG.API_URL, hotel].filter(Boolean).forEach((u) => fetch(u, { mode: "no-cors", cache: "no-store" }).catch(() => {
      }));
    } catch (e) {
    }
  }
  function loginView(nav2, { notice, mode } = {}) {
    warmUp();
    let who = mode === "staff" || !mode && remembered().code && !store.getLastUsername() ? "staff" : "owner";
    const slot = h("div");
    const box = h("div");
    const tabsEl = h("div", { class: "seg wide lux-tabs", role: "group", "aria-label": "Sign in as" });
    function ownerForm() {
      const f = {
        username: field({ label: "Username", name: "username", autocomplete: "username", value: store.getLastUsername(), maxlength: 40 }),
        password: field({ label: "Password", name: "password", type: "password", autocomplete: "current-password", maxlength: 128 })
      };
      revealable(f.password);
      const remember = h("input", { type: "checkbox", id: "remember" });
      remember.checked = true;
      const submit = h("button", { class: "btn btn-primary btn-block btn-lg btn-lux", type: "submit" }, h("span", null, "Sign in"), icon("arrow"));
      return h("form", { novalidate: true, onsubmit: async (e) => {
        e.preventDefault();
        Object.values(f).forEach((x) => x.clear());
        slot.replaceChildren();
        const username = f.username.value().toLowerCase(), password = f.password.raw();
        if (!username) {
          f.username.setError("Enter your username.");
          f.username.input.focus();
          return;
        }
        if (!password) {
          f.password.setError("Enter your password.");
          f.password.input.focus();
          return;
        }
        setBusy(submit, true, "Signing in\u2026");
        try {
          const data = await call("login", { username, password, remember: remember.checked });
          store.setLastUsername(username);
          store.setOwner({ token: data.token, expiresAt: data.tokenExpiresAt }, remember.checked);
          const p = data.profile || {};
          if (p.state === "ACTIVE" && p.appScriptUrl && p.sheetId) {
            submit.textContent = "Opening your hotel\u2026";
            await openApp(nav2, { kind: "owner", token: data.hotelToken, url: p.appScriptUrl, key: "owner:" + p.hotelId, hotelName: p.hotelName }, null, remember.checked, data);
          } else nav2("portal", data);
        } catch (err) {
          if (!(err instanceof ApiError)) {
            console.error(err);
            err = new ApiError("SERVER_ERROR", "Unable to sign in right now. Please try again.");
          }
          if (["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"].includes(err.code)) {
            nav2("blocked", err);
            return;
          }
          slot.append(formError(err.message));
          f.password.input.value = "";
        } finally {
          setBusy(submit, false);
        }
      } }, f.username.el, f.password.el, h("label", { class: "check", for: "remember" }, remember, "Keep me signed in on this device"), submit);
    }
    function staffForm() {
      const mem = remembered();
      const f = {
        hotelCode: field({ label: "Hotel Code", name: "hotelCode", value: mem.code || "", maxlength: 12, hint: "Given to you by your manager, like ABCD-1234.", autocomplete: "off" }),
        username: field({ label: "Username", name: "username", autocomplete: "username", value: mem.user || "", maxlength: 40 }),
        password: field({ label: "Password", name: "password", type: "password", autocomplete: "current-password", maxlength: 128 })
      };
      revealable(f.password);
      const submit = h("button", { class: "btn btn-primary btn-block btn-lg btn-lux", type: "submit" }, h("span", null, "Sign in"), icon("arrow"));
      return h("form", { novalidate: true, onsubmit: async (e) => {
        e.preventDefault();
        Object.values(f).forEach((x) => x.clear());
        slot.replaceChildren();
        const code = f.hotelCode.value().toUpperCase(), username = f.username.value().toLowerCase(), password = f.password.raw();
        for (const k of ["hotelCode", "username", "password"]) {
          if (!(k === "hotelCode" ? code : k === "username" ? username : password)) {
            f[k].setError("This field is required.");
            f[k].input.focus();
            return;
          }
        }
        setBusy(submit, true, "Signing in\u2026");
        try {
          const g = await call("resolveHotel", { hotelCode: code });
          const r = await call("staffLogin", { gateToken: g.gateToken, username, password }, "", g.appScriptUrl);
          try {
            localStorage.setItem(CODE_KEY, JSON.stringify({ code, user: username }));
          } catch (e2) {
          }
          await openApp(nav2, { kind: "staff", token: r.token, url: g.appScriptUrl, expiresAt: r.expiresAt, key: "staff:" + g.hotelId + ":" + username, hotelName: g.hotelName }, r.boot, true, null);
        } catch (err) {
          if (!(err instanceof ApiError)) {
            console.error(err);
            err = new ApiError("SERVER_ERROR", "Unable to sign in right now. Please try again.");
          }
          if (["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"].includes(err.code)) {
            nav2("blocked", err);
            return;
          }
          if (err.code === "HOTEL_NOT_FOUND" || err.code === "RATE_LIMIT") f.hotelCode.setError(err.message);
          else slot.append(formError(err.message));
          f.password.input.value = "";
        } finally {
          setBusy(submit, false);
        }
      } }, f.hotelCode.el, f.username.el, f.password.el, submit);
    }
    function draw() {
      tabsEl.replaceChildren(...[["owner", "Hotel owner", "owner"], ["staff", "Staff", "staff"]].map(([k, l, ic]) => h("button", { class: k === who ? "on" : "", type: "button", "aria-pressed": k === who ? "true" : "false", onclick: () => {
        who = k;
        slot.replaceChildren();
        draw();
      } }, icon(ic), l)));
      box.replaceChildren(who === "owner" ? ownerForm() : staffForm());
    }
    draw();
    return shell([
      h("div", null, h("h1", null, "Sign in to your hotel"), h("p", { class: "lead" }, "Owners sign in with their username. Staff use the Hotel Code from their manager.")),
      notice ? h("div", { class: "notice", role: "status" }, notice) : null,
      tabsEl,
      box,
      slot,
      h("p", { class: "auth-alt" }, "New hotel? ", h("button", { class: "link-button", type: "button", onclick: () => nav2("register") }, "Register your hotel"))
    ], { nav: nav2, eyebrow: "Welcome back" });
  }
  function blockedView(err, nav2) {
    const d = err.details || {};
    const titles = { ACCOUNT_EXPIRED: "Account expired", ACCOUNT_SUSPENDED: "Account suspended", ACCOUNT_NOT_READY: "Account not ready" };
    const lines = [];
    if (err.code === "ACCOUNT_EXPIRED") {
      lines.push(d.expiryDate ? "Your software subscription expired on " + d.expiryDate + "." : err.message);
      lines.push("Your data is safe and nothing has been deleted. Access returns as soon as the administrator extends your subscription.");
    } else if (err.code === "ACCOUNT_SUSPENDED") {
      lines.push("This account has been suspended by the administrator. Your data is safe and nothing has been deleted.");
    } else {
      lines.push(err.message);
    }
    return shell([
      h(
        "div",
        null,
        h("h1", null, titles[err.code] || "Access blocked"),
        d.hotelName ? h("p", { class: "lead" }, d.hotelName) : null
      ),
      h(
        "div",
        { class: "band s-warn", role: "alert" },
        h("div", null, lines.map((l) => h("p", { style: "color:var(--text)" }, l)), h("p", { style: "color:var(--text);font-weight:600;margin-top:10px" }, "Please contact administrator."))
      ),
      h("div", null, h("button", { class: "btn", type: "button", onclick: () => {
        store.clearOwner();
        nav2("login");
      } }, "Back to sign in"))
    ], { nav: nav2, eyebrow: "Account" });
  }

  // web/js/portal.js
  init_store();
  var BLOCKING = ["ACCOUNT_EXPIRED", "ACCOUNT_SUSPENDED", "ACCOUNT_NOT_READY"];
  async function portalView(root2, nav2, initial) {
    const stored = store.getOwner();
    if (!stored) {
      nav2("login", { notice: "Please sign in to continue." });
      return;
    }
    let token = stored.token;
    let hotelToken = initial && initial.hotelToken ? initial.hotelToken : null;
    let profile = initial && initial.profile ? initial.profile : null;
    let conn = { state: "idle", info: null, message: "" };
    let setupCode = null;
    let codeVisible = false;
    let stepsOpen = null;
    let urlDraft = null;
    if (profile) draw();
    else mount(root2, h("div", { class: "loading" }, "Loading your account\u2026"));
    try {
      const fresh = await call("getSession", {}, token);
      profile = fresh.profile;
      hotelToken = fresh.hotelToken;
      draw();
      if (profile.state === "ACTIVE") checkConnection(true);
    } catch (err) {
      if (!handleAuthError(err)) mount(root2, h(
        "div",
        { class: "loading" },
        err instanceof ApiError ? err.message : "Unable to load your account.",
        h("div", { style: "margin-top:12px" }, h("button", { class: "btn", type: "button", onclick: () => nav2("portal") }, "Try again"))
      ));
    }
    function handleAuthError(err) {
      if (err instanceof ApiError && BLOCKING.includes(err.code)) {
        store.clearOwner();
        nav2("blocked", err);
        return true;
      }
      if (err instanceof ApiError && err.code === "SESSION_INVALID") {
        store.clearOwner();
        nav2("login", { notice: err.message });
        return true;
      }
      return false;
    }
    function signOut2() {
      signOut();
      nav2("login");
    }
    async function openDashboard(btn) {
      if (btn) setBusy(btn, true, "Opening\u2026");
      try {
        await launch({ kind: "owner", token: hotelToken, url: profile.appScriptUrl, key: "owner:" + profile.hotelId, hotelName: profile.hotelName }, null, !!(stored && stored.remember));
        nav2("app/" + homeScreen());
      } catch (err) {
        toast(err instanceof ApiError ? err.message : "Could not open the dashboard.", "error", 7e3);
        if (btn) setBusy(btn, false);
      }
    }
    function explain(err) {
      if (!(err instanceof ApiError)) {
        console.error(err);
        return "Unable to test the connection. Please try again.";
      }
      if (["NETWORK", "TIMEOUT", "BAD_RESPONSE", "OFFLINE"].includes(err.code)) {
        return err.code === "OFFLINE" ? err.message : 'Your hotel script did not answer. Check that the URL is the web app URL ending in /exec, and that it was deployed with "Execute as: Me" and "Who has access: Anyone".';
      }
      if (["SESSION_INVALID", "HOTEL_MISMATCH"].includes(err.code)) {
        return "The script does not accept this account. Copy the code again from this page, paste it over the old code, then deploy a New version.";
      }
      return err.message;
    }
    async function checkConnection(quiet) {
      if (!profile.appScriptUrl) {
        conn = { state: "none", info: null, message: "" };
        draw();
        return;
      }
      conn = { state: "checking", info: conn.info, message: "" };
      draw();
      if (!quiet) {
        try {
          const s = await call("getSession", {}, token);
          profile = s.profile;
          hotelToken = s.hotelToken;
        } catch (err) {
          if (handleAuthError(err)) return;
          conn = { state: "fail", info: null, message: explain(err) };
          draw();
          return;
        }
      }
      let hotelInfo = null;
      try {
        const url = profile.appScriptUrl;
        hotelInfo = await call("testConnection", {}, hotelToken, url);
        if (!hotelInfo.schemaReady) {
          await call("initSchema", {}, hotelToken, url);
          hotelInfo = await call("testConnection", {}, hotelToken, url);
          toast("Your Google Sheet is ready. All database tabs were created.", "ok");
        }
      } catch (err) {
        conn = { state: "fail", info: null, message: explain(err) };
        draw();
        return;
      }
      if (hotelInfo.spreadsheetId !== profile.sheetId) {
        try {
          const r = await call("saveSheetInfo", { sheetId: hotelInfo.spreadsheetId }, token);
          profile = r.profile;
        } catch (err) {
          if (handleAuthError(err)) return;
          console.error("saveSheetInfo failed", err);
        }
      }
      conn = { state: "ok", info: hotelInfo, message: "" };
      if (!quiet) toast("Connected to your Google Sheet.", "ok");
      draw();
    }
    async function copyCode(btn) {
      setBusy(btn, true, "Preparing\u2026");
      try {
        if (!setupCode) setupCode = await call("getSetupCode", {}, token);
        await copyText(setupCode.code, "Apps Script copied. Paste it into the Apps Script editor.");
        codeVisible = true;
        stepsOpen = true;
        draw();
      } catch (err) {
        if (handleAuthError(err)) return;
        toast(err instanceof ApiError ? err.message : "Unable to prepare the code. Please try again.", "error");
        setBusy(btn, false);
      }
    }
    function connectionPill() {
      return {
        ok: h("span", { class: "pill ACTIVE" }, "Connected"),
        checking: h("span", { class: "pill IDLE" }, "Checking\u2026"),
        fail: h("span", { class: "pill EXPIRED" }, "Connection failed"),
        none: h("span", { class: "pill NOT_SET" }, "Not connected"),
        idle: h("span", { class: "pill NOT_SET" }, profile.appScriptUrl ? "Not checked" : "Not connected")
      }[conn.state];
    }
    function row(label, value, extra, sub) {
      return h(
        "div",
        { class: "row" },
        h("dt", null, label),
        h("dd", null, value, sub ? h("span", { class: "sub" }, sub) : null),
        extra || h("span")
      );
    }
    function connectionPanel(p) {
      if (p.state !== "ACTIVE") {
        return h(
          "section",
          { class: "panel" },
          h("header", null, h("h2", null, "Google Sheet connection"), h("span", { class: "pill PENDING" }, "Waiting for activation")),
          h("div", { class: "pad" }, h("p", null, "Your Apps Script code is released as soon as the administrator activates your account. Then you create your own Google Sheet and connect it here."))
        );
      }
      const info = conn.info;
      const connected = conn.state === "ok";
      const dbText = info ? "Ready, " + (info.totalTabs ? info.totalTabs - (info.missingTabs ? info.missingTabs.length : 0) : "") + " tabs" : conn.state === "checking" ? "Checking\u2026" : "Not checked";
      const rows = h(
        "dl",
        { class: "body rows" },
        row("Hotel", p.hotelName),
        row("Hotel ID", h("span", { class: "code" }, p.hotelId), copyButton(p.hotelId, "Copy", "Hotel ID copied")),
        row("Database", connected ? "Connected" : dbText, null, connected ? info.spreadsheetName : null),
        row(
          "Google Sheet",
          p.sheetId ? connected ? "Connected" : "Saved" : "Not connected yet",
          p.sheetId ? copyButton(p.sheetId, "Copy Sheet ID", "Sheet ID copied") : null,
          connected ? info.spreadsheetName : null
        ),
        row("Last Sync", info ? fmtStamp(info.lastSync) : "Never"),
        row("Apps Script", connected ? "Connected" : p.appScriptUrl ? "Web app URL saved" : "Not set", null, connected ? "Version " + info.scriptVersion : null)
      );
      const failBox = conn.state === "fail" ? h("div", { class: "pad", style: "padding-bottom:0" }, formError(conn.message)) : null;
      const test = h("button", { class: "btn btn-primary", type: "button", disabled: conn.state === "checking" || !p.appScriptUrl }, "Test connection");
      test.addEventListener("click", () => checkConnection(false));
      const actions = h("div", { class: "pad" }, h(
        "div",
        { class: "actions" },
        test,
        p.sheetUrl ? h("a", { class: "btn", href: p.sheetUrl, target: "_blank", rel: "noopener noreferrer" }, "Open Google Sheet") : null,
        h("button", { class: "btn", type: "button", onclick: () => {
          stepsOpen = true;
          draw();
          document.getElementById("setup-steps")?.scrollIntoView({ block: "start" });
        } }, "Reconnect")
      ));
      const copyBtn = h("button", { class: "btn btn-primary", type: "button" }, "Copy Apps Script");
      copyBtn.addEventListener("click", () => copyCode(copyBtn));
      const urlField = field({
        label: "Web app URL",
        name: "appScriptUrl",
        value: urlDraft !== null ? urlDraft : p.appScriptUrl || "",
        maxlength: 300,
        inputmode: "url",
        placeholder: "https://script.google.com/macros/s/\u2026/exec"
      });
      urlField.input.addEventListener("input", () => {
        urlDraft = urlField.input.value;
      });
      const saveSlot = h("div");
      const save2 = h("button", { class: "btn btn-primary", type: "button" }, "Save and test");
      save2.addEventListener("click", async () => {
        urlField.clear();
        saveSlot.replaceChildren();
        setBusy(save2, true, "Saving\u2026");
        try {
          const r = await call("saveAppScriptUrl", { appScriptUrl: urlField.value() }, token);
          profile = r.profile;
          urlDraft = null;
          await checkConnection(false);
        } catch (err) {
          if (handleAuthError(err)) return;
          if (err.details && err.details.field === "appScriptUrl") urlField.setError(err.message);
          else saveSlot.append(formError(err instanceof ApiError ? err.message : "Unable to save. Please try again."));
          setBusy(save2, false);
        }
      });
      const codeBox = setupCode && codeVisible ? h(
        "div",
        { class: "codebox-wrap" },
        h("textarea", { class: "codebox", readonly: true, spellcheck: "false", "aria-label": "Apps Script code", rows: "10", onfocus: (e) => e.target.select() }, setupCode.code),
        h("p", { class: "hint" }, "Version " + setupCode.version + ", " + setupCode.lines + " lines. It contains your hotel's private key, so never share it.")
      ) : null;
      const open = stepsOpen !== null ? stepsOpen : !connected;
      const steps = h(
        "details",
        { class: "setup", id: "setup-steps", open: open || null },
        h("summary", { onclick: () => {
          stepsOpen = !steps.open;
        } }, connected ? "Reconnect or update the script" : "Connect your Google Sheet"),
        h(
          "ol",
          { class: "steps" },
          h(
            "li",
            null,
            h("b", null, "Create your hotel's Google Sheet."),
            h("p", null, 'Make a new, blank Google Sheet in your own Google account and name it, for example, "' + p.hotelName + ' database". Your orders, staff, menu and sales are all saved in this sheet, and only you own it.'),
            h("div", { class: "actions" }, h("a", { class: "btn", href: "https://sheets.new", target: "_blank", rel: "noopener noreferrer" }, "Create Google Sheet"))
          ),
          h(
            "li",
            null,
            h("b", null, "Open the script editor."),
            h("p", null, "In that sheet choose Extensions, then Apps Script. Select everything in the editor and delete it.")
          ),
          h(
            "li",
            null,
            h("b", null, "Copy the code from here and paste it into the editor."),
            h("p", null, "Press Save (the disk icon). You do not need to change anything in the code."),
            h(
              "div",
              { class: "actions" },
              copyBtn,
              setupCode ? h("button", { class: "btn", type: "button", onclick: () => {
                codeVisible = !codeVisible;
                stepsOpen = true;
                draw();
              } }, codeVisible ? "Hide code" : "Show code") : null
            ),
            codeBox
          ),
          h(
            "li",
            null,
            h("b", null, "Deploy it as a web app."),
            h("p", null, "Press Deploy, then New deployment. Click the gear and choose Web app. Set Execute as to Me and Who has access to Anyone. Press Deploy. When Google asks for permission, choose your account, then Advanced, then Go to project, then Allow.")
          ),
          h(
            "li",
            null,
            h("b", null, "Paste the web app URL here."),
            h("p", null, "Copy the Web app URL that Google shows (it ends in /exec) and paste it below."),
            h("div", { class: "inline-form" }, urlField.el, h("div", { style: "padding-top:26px" }, save2)),
            saveSlot
          ),
          h(
            "li",
            null,
            h("b", null, "Check the result."),
            h("p", null, "The status at the top of this panel should change to Connected. All database tabs are created in your sheet automatically the first time.")
          )
        ),
        h("p", { class: "hint" }, "Changed or re-pasted the code later? Deploy it again with Deploy, Manage deployments, Edit, New version, so the same URL keeps working.")
      );
      return h(
        "section",
        { class: "panel" },
        h("header", null, h("h2", null, "Google Sheet connection"), connectionPill()),
        rows,
        failBox,
        actions,
        h("div", { class: "pad", style: "border-top:1px solid var(--line)" }, steps)
      );
    }
    function statusBand(p) {
      if (p.state === "PENDING") {
        return h(
          "div",
          { class: "band s-pending" },
          h(
            "div",
            null,
            h("h1", null, "Waiting for activation"),
            h("p", null, "The administrator needs to activate your account and set your subscription period. After that you create your own Google Sheet and connect it from this page.")
          ),
          pill("PENDING")
        );
      }
      const soon = p.daysLeft !== null && p.daysLeft <= 14;
      return h(
        "div",
        { class: "band " + (soon ? "s-warn" : "s-ok") },
        h(
          "div",
          null,
          h("h1", null, soon ? "Your subscription ends soon" : "Subscription active"),
          h("p", null, soon ? "Contact the administrator to extend it before " + p.expiryDate + " so your staff are not locked out." : "Everything is running normally.")
        ),
        h("div", { class: "big-num" }, p.expiryDate, h("small", null, "Valid until, " + daysText(p.daysLeft)))
      );
    }
    function changePasswordModal() {
      const f = {
        currentPassword: field({ label: "Current password", name: "currentPassword", type: "password", autocomplete: "current-password", maxlength: 128 }),
        newPassword: field({ label: "New password", name: "newPassword", type: "password", autocomplete: "new-password", maxlength: 128, hint: "At least 8 characters, with a letter and a number." }),
        confirmPassword: field({ label: "Confirm new password", name: "confirmPassword", type: "password", autocomplete: "new-password", maxlength: 128 })
      };
      const slot = h("div");
      openModal({
        title: "Change password",
        content: [f.currentPassword.el, f.newPassword.el, f.confirmPassword.el, slot],
        actions: (m) => {
          const ok = h("button", { class: "btn btn-primary", type: "button" }, "Change password");
          ok.addEventListener("click", async () => {
            Object.values(f).forEach((x) => x.clear());
            slot.replaceChildren();
            if (f.newPassword.raw() !== f.confirmPassword.raw()) {
              f.confirmPassword.setError("Passwords do not match.");
              return;
            }
            setBusy(ok, true, "Saving\u2026");
            try {
              const r = await call("changePassword", {
                currentPassword: f.currentPassword.raw(),
                newPassword: f.newPassword.raw(),
                confirmPassword: f.confirmPassword.raw()
              }, token);
              token = r.token;
              hotelToken = r.hotelToken;
              store.replaceOwnerToken({ token: r.token, expiresAt: r.tokenExpiresAt });
              profile = r.profile;
              m.close();
              toast("Password changed", "ok");
              draw();
            } catch (err) {
              if (handleAuthError(err)) {
                m.close();
                return;
              }
              const target = err.details && err.details.field && f[err.details.field];
              if (target) target.setError(err.message);
              else slot.append(formError(err instanceof ApiError ? err.message : "Unable to change the password. Please try again."));
            } finally {
              setBusy(ok, false);
            }
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), ok];
        }
      });
    }
    function draw() {
      const p = profile;
      mount(
        root2,
        h("header", { class: "topbar" }, h(
          "div",
          { class: "topbar-in" },
          h("span", { class: "brand" }, "Hotel POS"),
          h("span", { class: "where" }, p.hotelName),
          h("span", { class: "spacer" }),
          h("span", { class: "who" }, p.ownerName),
          p.state === "ACTIVE" && p.appScriptUrl && p.sheetId ? (() => {
            const b = h("button", { class: "btn btn-primary", type: "button" }, "Open dashboard");
            b.addEventListener("click", () => openDashboard(b));
            return b;
          })() : null,
          h("button", { class: "btn", type: "button", onclick: signOut2 }, "Sign out")
        )),
        h(
          "main",
          { class: "page narrow" },
          statusBand(p),
          connectionPanel(p),
          h(
            "section",
            { class: "panel" },
            h("header", null, h("h2", null, "Hotel details")),
            h(
              "dl",
              { class: "body rows" },
              row(
                "Hotel Code",
                h("span", { class: "code" }, p.activationCode),
                copyButton(p.activationCode, "Copy", "Hotel Code copied"),
                "Your staff enter this code to sign in."
              ),
              row("Owner", p.ownerName),
              row("Username", p.username),
              row("Email", p.email),
              row("Phone", p.phone),
              row("Registered", p.registrationDate),
              row("Last sign-in", fmtStamp(p.lastLogin) || "This is your first sign-in")
            )
          ),
          h(
            "section",
            { class: "panel" },
            h("header", null, h("h2", null, "Account")),
            h("div", { class: "pad" }, h(
              "div",
              null,
              h("button", { class: "btn", type: "button", onclick: changePasswordModal }, "Change password")
            ))
          )
        )
      );
    }
  }

  // web/js/admin.js
  init_store();
  function adminLoginView(root2, nav2) {
    const f = {
      username: field({ label: "Administrator username", name: "username", autocomplete: "username", maxlength: 40 }),
      password: field({ label: "Password", name: "password", type: "password", autocomplete: "current-password", maxlength: 128 })
    };
    const slot = h("div");
    const submit = h("button", { class: "btn btn-primary btn-block", type: "submit" }, "Sign in");
    const form = h("form", { novalidate: true, onsubmit: async (e) => {
      e.preventDefault();
      slot.replaceChildren();
      Object.values(f).forEach((x) => x.clear());
      if (!f.username.value() || !f.password.raw()) {
        slot.append(formError("Enter the administrator username and password."));
        return;
      }
      setBusy(submit, true, "Signing in\u2026");
      try {
        const r = await call("adminLogin", { username: f.username.value(), password: f.password.raw() });
        store.setAdmin({ token: r.token, expiresAt: r.tokenExpiresAt });
        nav2("admin");
      } catch (err) {
        slot.append(formError(err instanceof ApiError ? err.message : "Unable to sign in. Please try again."));
        f.password.input.value = "";
      } finally {
        setBusy(submit, false);
      }
    } }, f.username.el, f.password.el, slot, submit);
    mount(root2, shell([
      h("div", null, h("h1", null, "Administrator sign-in"), h("p", { class: "lead" }, "For the software provider only.")),
      form
    ], { nav: nav2, admin: true, eyebrow: "Provider" }));
  }
  var pad = (n) => (n < 10 ? "0" : "") + n;
  var fmtUTC = (d) => pad(d.getUTCDate()) + "/" + pad(d.getUTCMonth() + 1) + "/" + d.getUTCFullYear();
  function extendedExpiry(current2, months) {
    const now = /* @__PURE__ */ new Date();
    let base = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(current2 || "");
    if (m) base = Math.max(base, Date.UTC(+m[3], +m[2] - 1, +m[1]));
    const b = new Date(base);
    const y = b.getUTCFullYear(), mo = b.getUTCMonth() + months, d = b.getUTCDate();
    const last2 = new Date(Date.UTC(y, mo + 1, 0)).getUTCDate();
    return fmtUTC(new Date(Date.UTC(y, mo, Math.min(d, last2))));
  }
  async function adminConsoleView(root2, nav2) {
    const session2 = store.getAdmin();
    if (!session2) {
      adminLoginView(root2, nav2);
      return;
    }
    const token = session2.token;
    let data = null;
    let filter2 = "ALL";
    let query = "";
    function signOut2() {
      store.clearAdmin();
      nav2("admin");
    }
    function onAuthError(err) {
      if (err instanceof ApiError && err.code === "SESSION_INVALID") {
        store.clearAdmin();
        toast(err.message, "error");
        nav2("admin");
        return true;
      }
      return false;
    }
    async function load() {
      try {
        data = await call("adminListHotels", {}, token);
        if (root2.dataset.view === "admin") draw();
      } catch (err) {
        if (onAuthError(err)) return;
        if (!(err instanceof ApiError)) console.error("Admin console failed to render", err);
        mount(root2, h(
          "div",
          { class: "loading" },
          err instanceof ApiError ? err.message : "Unable to load hotels.",
          h("div", { style: "margin-top:12px" }, h("button", { class: "btn", type: "button", onclick: load }, "Try again"))
        ));
      }
    }
    const FILTERS = [
      ["ALL", "All hotels", (h2) => true],
      ["ACTIVE", "Active", (h2) => h2.state === "ACTIVE"],
      ["PENDING", "Awaiting activation", (h2) => h2.state === "PENDING"],
      ["SOON", "Expiring soon", (h2) => h2.state === "ACTIVE" && h2.daysLeft !== null && h2.daysLeft <= data.expiringSoonDays],
      ["EXPIRED", "Expired", (h2) => h2.state === "EXPIRED"],
      ["SUSPENDED", "Suspended", (h2) => h2.state === "SUSPENDED"]
    ];
    const countFor = (key) => {
      const s = data.stats;
      return { ALL: s.total, ACTIVE: s.active, PENDING: s.pending, SOON: s.expiringSoon, EXPIRED: s.expired, SUSPENDED: s.suspended }[key];
    };
    function visible() {
      const pred = FILTERS.find((x) => x[0] === filter2)[2];
      const q = query.toLowerCase();
      return data.hotels.filter(pred).filter((x) => !q || [x.hotelName, x.ownerName, x.hotelId, x.username, x.email, x.phone, x.activationCode].some((v) => String(v).toLowerCase().includes(q)));
    }
    function draw() {
      const search = field({ label: "Search hotels", name: "q", value: query, placeholder: "Name, owner, ID, username, email or code" });
      search.input.addEventListener("input", () => {
        query = search.input.value;
        drawTable();
      });
      const tableHost = h("div");
      function drawTable() {
        const list = visible();
        count.textContent = list.length + (list.length === 1 ? " hotel" : " hotels");
        tableHost.replaceChildren(list.length ? h("div", { class: "scroll-x" }, h(
          "table",
          { class: "grid" },
          h("thead", null, h("tr", null, ["Hotel", "Owner", "Status", "Expiry", "Last sign-in"].map((t) => h("th", { scope: "col" }, t)))),
          h("tbody", null, list.map((x) => h(
            "tr",
            {
              tabindex: "0",
              role: "button",
              "aria-label": "Open " + x.hotelName,
              onclick: () => openHotel(x),
              onkeydown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openHotel(x);
                }
              }
            },
            h("td", null, h("span", { class: "name" }, x.hotelName), h("span", { class: "id" }, x.hotelId)),
            h("td", null, x.ownerName, h("span", { class: "id" }, x.username)),
            h("td", null, pill(x.state)),
            h("td", null, x.expiryDate || "Not set", x.daysLeft !== null ? h("span", { class: "id" }, daysText(x.daysLeft)) : null),
            h("td", null, fmtStamp(x.lastLogin) || "Never")
          )))
        )) : h("div", { class: "empty" }, data.hotels.length ? "No hotels match this filter." : "No hotels have registered yet."));
      }
      const count = h("span", { class: "count" });
      mount(
        root2,
        h("header", { class: "topbar" }, h(
          "div",
          { class: "topbar-in" },
          h("span", { class: "brand" }, "Hotel POS"),
          h("span", { class: "where" }, "Provider console"),
          h("span", { class: "spacer" }),
          h("button", { class: "btn", type: "button", onclick: load }, "Refresh"),
          h("button", { class: "btn", type: "button", onclick: signOut2 }, "Sign out")
        )),
        h(
          "main",
          { class: "page" },
          h(
            "div",
            { class: "summary", role: "group", "aria-label": "Filter by status" },
            FILTERS.map(([key, label]) => h(
              "button",
              { type: "button", "aria-pressed": String(filter2 === key), onclick: () => {
                filter2 = key;
                draw();
              } },
              h("b", null, countFor(key)),
              h("span", null, label)
            ))
          ),
          h("div", { class: "toolbar" }, search.el, count),
          h("section", { class: "panel" }, tableHost)
        )
      );
      drawTable();
    }
    function openHotel(x) {
      const f = {
        hotelName: field({ label: "Hotel name", name: "hotelName", value: x.hotelName, maxlength: 80 }),
        ownerName: field({ label: "Owner name", name: "ownerName", value: x.ownerName, maxlength: 60 }),
        email: field({ label: "Email", name: "email", value: x.email, maxlength: 120 }),
        phone: field({ label: "Phone", name: "phone", value: x.phone, maxlength: 24 }),
        expiryDate: field({
          label: "Expiry date",
          name: "expiryDate",
          value: x.expiryDate,
          placeholder: "DD/MM/YYYY, for example 06/10/2026",
          maxlength: 10,
          hint: "Day/Month/Year. The hotel can use the system through this date."
        }),
        status: field({ label: "Status", name: "status", value: x.status, options: [
          { value: "PENDING", label: "Pending" },
          { value: "ACTIVE", label: "Active" },
          { value: "SUSPENDED", label: "Suspended" }
        ] }),
        appScriptUrl: field({ label: "Apps Script web app URL", name: "appScriptUrl", value: x.appScriptUrl, maxlength: 300 }),
        sheetId: field({ label: "Hotel Google Sheet ID", name: "sheetId", value: x.sheetId, maxlength: 80 }),
        notes: field({ label: "Notes (private to you)", name: "notes", type: "textarea", value: x.notes, maxlength: 500 })
      };
      const slot = h("div");
      const quick = h(
        "div",
        { class: "quick" },
        [["+1 month", 1], ["+3 months", 3], ["+1 year", 12]].map(([label, n]) => h("button", { class: "btn btn-small", type: "button", onclick: () => {
          f.expiryDate.input.value = extendedExpiry(f.expiryDate.value() || x.expiryDate, n);
        } }, label))
      );
      const save2 = h("button", { class: "btn btn-primary", type: "button" }, "Save changes");
      const toggle = h("button", { class: "btn " + (x.status === "SUSPENDED" ? "" : "btn-danger"), type: "button" }, x.status === "SUSPENDED" ? "Reactivate" : "Suspend");
      const reset2 = h("button", { class: "btn", type: "button" }, "Reset password");
      const drawer = openModal({ title: x.hotelName, drawer: true });
      const close = () => drawer.close();
      async function apply2(patch, okMsg) {
        slot.replaceChildren();
        Object.values(f).forEach((i) => i.clear());
        try {
          const r = await call("adminUpdateHotel", { hotelId: x.hotelId, patch }, token);
          toast(okMsg + (r.sharedWithOwner === true ? " The hotel sheet was shared with the owner." : ""), "ok");
          close();
          await load();
          return true;
        } catch (err) {
          if (onAuthError(err)) {
            close();
            return false;
          }
          const target = err.details && err.details.field && f[err.details.field];
          if (target) {
            target.setError(err.message);
            target.input.focus();
          } else slot.append(formError(err instanceof ApiError ? err.message : "Unable to save. Please try again."));
          return false;
        }
      }
      save2.addEventListener("click", async () => {
        const patch = {};
        Object.keys(f).forEach((k) => {
          if (f[k].value() !== String(x[k] || "")) patch[k] = f[k].value();
        });
        if (!Object.keys(patch).length) {
          toast("No changes to save.");
          return;
        }
        setBusy(save2, true, "Saving\u2026");
        await apply2(patch, "Changes saved.");
        setBusy(save2, false);
      });
      toggle.addEventListener("click", async () => {
        if (x.status === "SUSPENDED") {
          setBusy(toggle, true, "Working\u2026");
          await apply2({ status: "ACTIVE" }, x.hotelName + " is active again.");
          setBusy(toggle, false);
          return;
        }
        const yes = await confirmDialog("Suspend " + x.hotelName + "?", "The owner and all staff are blocked immediately. Their data is not deleted.", "Suspend", true);
        if (yes) await apply2({ status: "SUSPENDED" }, x.hotelName + " is suspended.");
      });
      reset2.addEventListener("click", () => resetPasswordModal(x));
      const info = (label, value, extra) => h(
        "div",
        { class: "row", style: "grid-template-columns:150px 1fr auto" },
        h("dt", null, label),
        h("dd", null, value),
        extra || h("span")
      );
      drawer.box.append(
        h(
          "header",
          null,
          h("div", null, h("h2", null, x.hotelName), h("p", null, x.hotelId + " \xB7 " + stateLabel(x.state) + (x.daysLeft !== null ? ", " + daysText(x.daysLeft) : ""))),
          h("button", { class: "btn btn-quiet btn-small", type: "button", onclick: close, "aria-label": "Close" }, "Close")
        ),
        h(
          "div",
          { class: "content" },
          h(
            "dl",
            { class: "rows" },
            info("Hotel Code", h("span", { class: "code" }, x.activationCode), copyButton(x.activationCode, "Copy", "Hotel Code copied")),
            info("Username", x.username),
            info("Registered", x.registrationDate),
            info("Last sign-in", fmtStamp(x.lastLogin) || "Never"),
            info("Google Sheet", x.sheetId ? h("a", { href: x.sheetUrl, target: "_blank", rel: "noopener noreferrer" }, "Open sheet") : "Not connected yet", x.sheetId ? copyButton(x.sheetId, "Copy ID", "Sheet ID copied") : null)
          ),
          h(
            "div",
            { class: "form-grid" },
            h("div", { class: "span-2" }, f.hotelName.el),
            f.ownerName.el,
            f.phone.el,
            h("div", { class: "span-2" }, f.email.el),
            h("div", null, f.expiryDate.el, quick),
            f.status.el,
            h("div", { class: "span-2" }, f.appScriptUrl.el),
            h("div", { class: "span-2" }, f.sheetId.el),
            h("div", { class: "span-2" }, f.notes.el)
          ),
          slot
        ),
        h("footer", null, save2, toggle, reset2)
      );
      f.hotelName.input.focus();
    }
    function resetPasswordModal(x) {
      const f = field({
        label: "New password",
        name: "newPassword",
        type: "text",
        maxlength: 128,
        autocomplete: "off",
        hint: "Leave empty to generate a strong temporary password. The owner can change it after signing in."
      });
      const slot = h("div");
      openModal({
        title: "Reset password for " + x.hotelName,
        content: [f.el, slot],
        actions: (m) => {
          const go = h("button", { class: "btn btn-primary", type: "button" }, "Reset password");
          go.addEventListener("click", async () => {
            f.clear();
            slot.replaceChildren();
            setBusy(go, true, "Resetting\u2026");
            try {
              const r = await call("adminResetPassword", { hotelId: x.hotelId, newPassword: f.raw() }, token);
              m.close();
              if (r.temporaryPassword) showTemp(r.temporaryPassword);
              else toast("Password changed. The owner's old sessions were signed out.", "ok");
            } catch (err) {
              if (onAuthError(err)) {
                m.close();
                return;
              }
              if (err.details && err.details.field) f.setError(err.message);
              else slot.append(formError(err instanceof ApiError ? err.message : "Unable to reset the password. Please try again."));
            } finally {
              setBusy(go, false);
            }
          });
          return [h("button", { class: "btn", type: "button", onclick: () => m.close() }, "Cancel"), go];
        }
      });
    }
    function showTemp(pw) {
      openModal({
        title: "Temporary password",
        content: [h("p", null, "Give this to the owner. It is shown only once, and their old sessions have been signed out."), h("div", { class: "temp-pass" }, pw)],
        actions: (m) => [copyButton(pw, "Copy password", "Password copied", false), h("button", { class: "btn btn-primary", type: "button", onclick: () => m.close() }, "Done")]
      });
    }
    mount(root2, h("div", { class: "loading" }, "Loading hotels\u2026"));
    await load();
  }


  // web/js/qr-menu.js
  // Public QR menu: opened by customers from the hotel's QR code (#/menu/HTL-0001). No sign-in.
  function publicMenuView(root2, hotelId) {
    hotelId = String(hotelId || "").toUpperCase();
    document.title = "Menu";
    const KEY = "hotelpos.qm." + hotelId;
    const clean = (v) => {
      const s2 = v === null || v === void 0 ? "" : String(v).trim();
      return /^(null|undefined|nan|false)$/i.test(s2) ? "" : s2;
    };
    const mem = (() => {
      try {
        return JSON.parse(localStorage.getItem(KEY) || "{}") || {};
      } catch (e) {
        return {};
      }
    })();
    const saveMem = () => {
      try {
        localStorage.setItem(KEY, JSON.stringify(mem));
      } catch (e) {
      }
    };
    let link = null, data = null, cart = mem.cart && typeof mem.cart === "object" ? mem.cart : {}, filter = "", statusTimer = null, spy = null;
    const st = { type: mem.type || "DINE_IN", tableId: mem.tableId || "", name: clean(mem.name), phone: clean(mem.phone), notes: "" };
    /* replaceChildren() would print "null" for empty parts: drop them first. */
    const put = (el, ...kids) => el.replaceChildren(...kids.flat(Infinity).filter((x) => x !== null && x !== void 0 && x !== false));
    const page = h("div", { class: "qm" });
    put(root2, page);
    const M2 = (n) => money(n, data ? data.settings : {});
    const IC = {
      pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
      phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
      search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
      bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12H7z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>',
      close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
      check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
      clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
      x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg>'
    };
    const ic = (n, cls) => svgEl(IC[n], "ic " + (cls || ""));
    async function resolve(force) {
      if (!force && link && Date.now() - link.at < 5 * 3600 * 1e3) return link;
      const r = await call("resolveMenu", { hotelId });
      link = { url: r.appScriptUrl, token: r.menuToken, name: clean(r.hotelName), at: Date.now() };
      return link;
    }
    async function pub(action, d, retried) {
      const l = await resolve(false);
      try {
        return await call(action, Object.assign({ token: l.token }, d || {}), "", l.url);
      } catch (e) {
        if (!retried && e instanceof ApiError && e.code === "MENU_LINK_EXPIRED") {
          await resolve(true);
          return pub(action, d, true);
        }
        throw e;
      }
    }
    /* Everything shown to customers goes through clean(), so an empty sheet cell never shows as "null". */
    function tidy(d) {
      d.hotel = { name: clean(d.hotel && d.hotel.name) || (link && link.name) || "Menu", address: clean(d.hotel && d.hotel.address), phone: clean(d.hotel && d.hotel.phone) };
      d.categories = (d.categories || []).map((c) => ({ id: clean(c.id), name: clean(c.name) || "Menu" }));
      d.menu = (d.menu || []).map((m) => ({ id: clean(m.id), name: clean(m.name) || "Item", categoryId: clean(m.categoryId), description: clean(m.description), price: Number(m.price) || 0, img: clean(m.thumbUrl) || clean(m.imageUrl), big: clean(m.imageUrl) || clean(m.thumbUrl), available: m.available !== false, featured: !!m.featured })).filter((m) => m.id);
      d.tables = (d.tables || []).map((t) => ({ id: clean(t.id), name: clean(t.name) || "Table" })).filter((t) => t.id);
      d.settings = d.settings || {};
      return d;
    }
    const lines = () => Object.keys(cart).map((id) => {
      const m = data && data.menu.find((x) => x.id === id);
      return m ? { m, qty: cart[id].qty } : null;
    }).filter((x) => x && x.qty > 0);
    const count = () => lines().reduce((a, l) => a + l.qty, 0);
    const subtotal = () => lines().reduce((a, l) => a + l.qty * l.m.price, 0);
    function setQty(id, q) {
      q = Math.max(0, Math.min(50, q));
      const was = cart[id] ? cart[id].qty : 0;
      if (q) cart[id] = { qty: q };
      else delete cart[id];
      mem.cart = cart;
      saveMem();
      drawBar(q > was);
      page.querySelectorAll('[data-qid="' + id + '"]').forEach((el) => el.replaceWith(qtyCtl(data.menu.find((x) => x.id === id))));
    }
    function qtyCtl(m, big) {
      const q = cart[m.id] ? cart[m.id].qty : 0;
      const cls = big ? " big" : "";
      if (!m.available) return h("span", { class: "qm-sold", "data-qid": m.id }, "Sold out");
      if (!data.ordering) return h("span", { "data-qid": m.id });
      if (!q) return h("button", { class: "qm-add" + cls, type: "button", "data-qid": m.id, "aria-label": "Add " + m.name, onclick: (e) => {
        e.stopPropagation();
        setQty(m.id, 1);
      } }, "Add", h("span", { "aria-hidden": "true" }, "+"));
      return h(
        "div",
        { class: "qm-step" + cls, "data-qid": m.id, onclick: (e) => e.stopPropagation() },
        h("button", { type: "button", "aria-label": "One less", onclick: () => setQty(m.id, q - 1) }, "−"),
        h("span", null, q),
        h("button", { type: "button", "aria-label": "One more", onclick: () => setQty(m.id, q + 1) }, "+")
      );
    }
    function thumb(m, cls) {
      if (m.img) return h("div", { class: cls }, h("img", { src: m.img, alt: "", loading: "lazy", referrerpolicy: "no-referrer", onerror: (e) => {
        e.target.remove();
      } }), h("span", { class: "qm-mono" }, m.name.charAt(0)));
      return h("div", { class: cls + " noimg" }, h("span", { class: "qm-mono" }, m.name.charAt(0)));
    }
    function itemCard(m) {
      return h(
        "article",
        { class: "qm-item" + (m.available ? "" : " off"), tabindex: "0", role: "button", "aria-label": m.name, onclick: () => openItem(m), onkeydown: (e) => {
          if (e.key === "Enter") openItem(m);
        } },
        h(
          "div",
          { class: "qm-item-body" },
          h("h3", null, m.name, m.featured ? h("span", { class: "qm-tag" }, "Popular") : null),
          m.description ? h("p", null, m.description) : null,
          h("div", { class: "qm-price" }, M2(m.price))
        ),
        h("div", { class: "qm-item-side" }, thumb(m, "qm-img"), qtyCtl(m))
      );
    }
    /* Bottom sheet used for the item details and the cart. */
    function sheet(title, content, onClose) {
      const prev = document.activeElement;
      const panel = h("div", { class: "qm-sheet-panel", role: "dialog", "aria-modal": "true", "aria-label": title || "Details" });
      const overlay = h("div", { class: "qm-sheet-overlay" }, panel);
      const api = { close() {
        document.removeEventListener("keydown", onKey);
        overlay.classList.add("closing");
        setTimeout(() => overlay.remove(), 180);
        document.documentElement.classList.remove("qm-lock");
        if (prev && prev.focus) prev.focus();
        if (onClose) onClose();
      }, panel };
      function onKey(e) {
        if (e.key === "Escape") api.close();
      }
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) api.close();
      });
      panel.append(...[
        h("div", { class: "qm-grip", "aria-hidden": "true" }),
        title ? h("header", { class: "qm-sheet-head" }, h("h2", null, title), h("button", { class: "qm-x", type: "button", "aria-label": "Close", onclick: () => api.close() }, ic("close"))) : h("button", { class: "qm-x floating", type: "button", "aria-label": "Close", onclick: () => api.close() }, ic("close")),
        content
      ].filter(Boolean));
      document.addEventListener("keydown", onKey);
      document.documentElement.classList.add("qm-lock");
      document.body.append(overlay);
      return api;
    }
    function openItem(m) {
      let qty = cart[m.id] ? cart[m.id].qty : 1;
      const box = h("div", { class: "qm-detail" });
      const s2 = sheet("", box);
      function draw() {
        put(box, 
          m.big ? h("div", { class: "qm-hero-img" }, h("img", { src: m.big, alt: "", referrerpolicy: "no-referrer", onerror: (e) => e.target.parentNode.remove() })) : null,
          h(
            "div",
            { class: "qm-detail-body" },
            m.featured ? h("span", { class: "qm-tag" }, "Popular") : null,
            h("h2", null, m.name),
            h("div", { class: "qm-price big" }, M2(m.price)),
            m.description ? h("p", null, m.description) : null,
            !m.available ? h("div", { class: "qm-sold big" }, "Sold out right now") : data.ordering ? h(
              "div",
              { class: "qm-detail-actions" },
              h("div", { class: "qm-step big" }, h("button", { type: "button", "aria-label": "One less", onclick: () => {
                qty = Math.max(1, qty - 1);
                draw();
              } }, "−"), h("span", null, qty), h("button", { type: "button", "aria-label": "One more", onclick: () => {
                qty = Math.min(50, qty + 1);
                draw();
              } }, "+")),
              h("button", { class: "qm-send", type: "button", onclick: () => {
                setQty(m.id, qty);
                s2.close();
              } }, (cart[m.id] ? "Update order" : "Add to order") + " \xB7 " + M2(qty * m.price))
            ) : null
          )
        );
      }
      draw();
    }
    const bar = h("div", { class: "qm-bar", hidden: true });
    function drawBar(bump) {
      const n = count();
      bar.hidden = !n || !data || !data.ordering;
      if (bar.hidden) return;
      const btn2 = h(
        "button",
        { class: "qm-bar-btn" + (bump ? " bump" : ""), type: "button", onclick: openCart },
        h("span", { class: "qm-bar-n" }, n),
        h("span", { class: "qm-bar-l" }, "View your order"),
        h("strong", null, M2(subtotal()))
      );
      put(bar, btn2);
    }
    function drawMenu() {
      if (spy) spy.disconnect();
      const q = filter.trim().toLowerCase();
      const cats = data.categories.slice();
      const known = new Set(cats.map((c) => c.id));
      if (data.menu.some((m) => !known.has(m.categoryId))) cats.push({ id: "", name: "More" });
      const inCat = (m, c) => c.id ? m.categoryId === c.id : !known.has(m.categoryId);
      const match = (m) => !q || m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q);
      const shown = cats.map((c) => ({ c, items: data.menu.filter((m) => inCat(m, c) && match(m)) })).filter((x) => x.items.length);
      const chips = h("nav", { class: "qm-chips", "aria-label": "Categories" }, shown.map(({ c }, i) => h("button", { type: "button", class: i === 0 ? "on" : "", "data-chip": c.id, onclick: () => {
        const sec = page.querySelector('[data-cat="' + c.id + '"]');
        if (sec) window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - (sticky.offsetHeight + 6), behavior: "smooth" });
      } }, c.name)));
      const search = h("input", { class: "qm-search", type: "search", placeholder: "Search dishes", value: filter, "aria-label": "Search the menu", oninput: (e) => {
        filter = e.target.value;
        const pos = e.target.selectionStart;
        drawMenu();
        const s2 = page.querySelector(".qm-search");
        s2.focus();
        try {
          s2.setSelectionRange(pos, pos);
        } catch (x) {
        }
      } });
      const sticky = h("div", { class: "qm-sticky" }, h("div", { class: "qm-mini" }, h("b", null, data.hotel.name)), h("label", { class: "qm-search-wrap" }, ic("search", "qm-s-ic"), search), shown.length > 1 ? chips : null);
      const featured = !q ? data.menu.filter((m) => m.featured && m.available) : [];
      const hd = data.hotel;
      const sections = shown.map(({ c, items }) => h("section", { class: "qm-sec", "data-cat": c.id }, h("h2", null, c.name, h("span", null, items.length + (items.length === 1 ? " item" : " items"))), h("div", { class: "qm-list" }, items.map(itemCard))));
      put(page, 
        h(
          "header",
          { class: "qm-hero" },
          h(
            "div",
            { class: "qm-hero-in" },
            h("div", { class: "qm-brand" }, icon("crest", "qm-crest"), h("div", { class: "qm-eyebrow" }, data.ordering ? "Menu \xB7 Order from your table" : "Our menu")),
            h("h1", null, hd.name),
            hd.address ? h("p", { class: "qm-addr" }, ic("pin"), hd.address) : null,
            h(
              "div",
              { class: "qm-hero-row" },
              data.ordering ? h("span", { class: "qm-pill" }, "Dine-in") : null,
              data.ordering ? h("span", { class: "qm-pill" }, "Takeaway") : null,
              hd.phone ? h("a", { class: "qm-pill call", href: "tel:" + hd.phone.replace(/[^0-9+]/g, "") }, ic("phone"), hd.phone) : null
            )
          )
        ),
        sticky,
        featured.length ? h("section", { class: "qm-feat" }, h("div", { class: "qm-feat-h" }, h("h2", null, "Chef’s picks"), h("span", null, "Most loved by our guests")), h("div", { class: "qm-feat-row" }, featured.map((m) => h(
          "div",
          { class: "qm-fcard", role: "button", tabindex: "0", onclick: () => openItem(m) },
          thumb(m, "qm-fimg"),
          h("div", { class: "qm-fbody" }, h("b", null, m.name), h("span", null, M2(m.price))),
          qtyCtl(m)
        )))) : null,
        shown.length ? h("main", { class: "qm-main" }, sections) : h("div", { class: "qm-empty" }, h("b", null, q ? "No dishes match “" + filter + "”" : "The menu is being updated"), h("span", null, q ? "Try another word." : "Please ask a waiter for today’s menu.")),
        h(
          "footer",
          { class: "qm-foot" },
          h("div", { class: "qm-foot-name" }, hd.name),
          hd.address ? h("div", null, hd.address) : null,
          data.ordering ? h("div", { class: "qm-foot-note" }, "Prices include item price only; tax is added at checkout where applicable.") : null,
          h("div", { class: "qm-powered" }, "Powered by ", h("b", null, "Hotel POS")),
          devCredit("dev-credit qm-credit")
        ),
        bar
      );
      drawBar();
      // Highlight the category you are looking at while scrolling.
      if ("IntersectionObserver" in window && shown.length > 1) {
        spy = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const id = en.target.getAttribute("data-cat");
            chips.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.getAttribute("data-chip") === id));
            const on2 = chips.querySelector("button.on");
            if (on2 && chips.scrollTo) chips.scrollTo({ left: on2.offsetLeft - 16, behavior: "smooth" });
          });
        }, { rootMargin: "-40% 0px -55% 0px" });
        page.querySelectorAll(".qm-sec").forEach((sec) => spy.observe(sec));
      }
    }
    window.addEventListener("scroll", () => {
      const s2 = page.querySelector(".qm-sticky");
      if (s2) s2.classList.toggle("stuck", window.scrollY > 150);
    }, { passive: true });
    function field2(label, input, hint) {
      return h("label", { class: "qm-field" }, h("span", null, label), input, hint ? h("small", null, hint) : null);
    }
    function openCart() {
      const box = h("div", { class: "qm-cart" });
      const s2 = sheet("Your order", box);
      const errSlot = h("div");
      function draw() {
        const ls = lines();
        if (!ls.length) {
          s2.close();
          return;
        }
        const t = compute(subtotal(), 0, cfgFrom(data.settings));
        const typeSeg = h("div", { class: "qm-seg", role: "group", "aria-label": "Order type" }, [["DINE_IN", "Dine-in"], ["TAKEAWAY", "Takeaway"]].map(([k, l]) => h("button", { type: "button", class: st.type === k ? "on" : "", "aria-pressed": st.type === k ? "true" : "false", onclick: () => {
          st.type = k;
          draw();
        } }, l)));
        const tableSel = h("select", { onchange: (e) => st.tableId = e.target.value }, h("option", { value: "" }, "Choose your table…"), data.tables.map((tb) => h("option", { value: tb.id }, tb.name)));
        tableSel.value = data.tables.some((x) => x.id === st.tableId) ? st.tableId : "";
        const name = h("input", { type: "text", maxlength: 40, autocomplete: "name", placeholder: "e.g. Ali", value: st.name, oninput: (e) => st.name = e.target.value });
        const phone = h("input", { type: "tel", maxlength: 20, autocomplete: "tel", inputmode: "tel", placeholder: "03xx xxxxxxx", value: st.phone, oninput: (e) => st.phone = e.target.value });
        const notes = h("textarea", { maxlength: 200, rows: 2, placeholder: "e.g. less spicy, no onions", oninput: (e) => st.notes = e.target.value }, st.notes);
        const hp = h("input", { class: "qm-hp", tabindex: "-1", autocomplete: "off", "aria-hidden": "true", name: "website" });
        const send = h("button", { class: "qm-send", type: "button" }, "Place order \xB7 " + M2(t.total));
        send.onclick = async () => {
          put(errSlot, );
          const err = (m) => {
            put(errSlot, h("div", { class: "qm-err", role: "alert" }, m));
            errSlot.scrollIntoView({ block: "center", behavior: "smooth" });
          };
          if (st.type === "DINE_IN" && !st.tableId) return err("Please choose your table.");
          if (st.name.trim().length < 2) return err("Please write your name.");
          if (st.phone.replace(/\D/g, "").length < 7) return err("Please write a valid phone number.");
          const uid = "qm-" + newId("o").slice(2);
          send.disabled = true;
          put(send, h("span", { class: "qm-spin small" }), "Sending your order…");
          try {
            const r = await pub("publicOrder", { uid, type: st.type, tableId: st.type === "DINE_IN" ? st.tableId : "", name: st.name.trim(), phone: st.phone.trim(), notes: st.notes.trim(), website: hp.value, items: ls.map((l) => ({ menuId: l.m.id, qty: l.qty })) });
            const tb = data.tables.find((x) => x.id === st.tableId);
            mem.last = { uid, ref: "R-" + ("qr-" + uid).slice(-6).toUpperCase(), at: Date.now(), total: t.total, count: count(), type: st.type, table: st.type === "DINE_IN" && tb ? tb.name : "", status: r.status || "PENDING", items: ls.map((l) => ({ name: l.m.name, qty: l.qty })) };
            mem.name = st.name.trim();
            mem.phone = st.phone.trim();
            mem.type = st.type;
            mem.tableId = st.tableId;
            cart = {};
            mem.cart = cart;
            st.notes = "";
            saveMem();
            s2.close();
            showStatus();
          } catch (e) {
            err(errText(e));
            send.disabled = false;
            send.textContent = "Place order \xB7 " + M2(t.total);
          }
        };
        put(box, 
          h("div", { class: "qm-lines" }, ls.map((l) => h(
            "div",
            { class: "qm-line" },
            thumb(l.m, "qm-lthumb"),
            h("div", { class: "qm-lname" }, h("b", null, l.m.name), h("span", null, M2(l.m.price))),
            h("div", { class: "qm-step" }, h("button", { type: "button", "aria-label": "One less", onclick: () => {
              setQty(l.m.id, l.qty - 1);
              draw();
            } }, "−"), h("span", null, l.qty), h("button", { type: "button", "aria-label": "One more", onclick: () => {
              setQty(l.m.id, l.qty + 1);
              draw();
            } }, "+"))
          ))),
          h(
            "div",
            { class: "qm-tot" },
            h("div", null, h("span", null, "Subtotal"), h("span", null, M2(t.subtotal))),
            t.service ? h("div", null, h("span", null, "Service charge"), h("span", null, M2(t.service))) : null,
            t.tax ? h("div", null, h("span", null, clean(data.settings.TAX_LABEL) || "Tax"), h("span", null, M2(t.tax))) : null,
            t.roundOff ? h("div", null, h("span", null, "Rounding"), h("span", null, M2(t.roundOff))) : null,
            h("div", { class: "grand" }, h("span", null, "Total"), h("span", null, M2(t.total)))
          ),
          h("div", { class: "qm-form-h" }, "Your details"),
          typeSeg,
          st.type === "DINE_IN" ? field2("Table", tableSel) : null,
          h("div", { class: "qm-two" }, field2("Your name", name), field2("Phone", phone)),
          field2("Note for the kitchen (optional)", notes),
          hp,
          errSlot,
          send,
          h("p", { class: "qm-fine" }, ic("check"), "The restaurant confirms your order. You pay at the counter.")
        );
      }
      draw();
    }
    function showStatus() {
      clearTimeout(statusTimer);
      const o = mem.last;
      if (!o) return drawMenu();
      const s2 = String(o.status || "PENDING");
      const ok = s2 === "ACCEPTED", bad = s2 === "REJECTED";
      const title = ok ? "Order confirmed" : bad ? "Order not accepted" : "Order sent";
      const text = ok ? "The kitchen is preparing your order" + (o.table ? " for " + o.table : "") + ". Enjoy your meal!" : bad ? "Sorry, the restaurant could not accept this order" + (clean(o.reason) ? ": " + clean(o.reason) : ".") + " Please ask a waiter." : "Waiting for the restaurant to confirm. This usually takes a minute — you can keep this page open.";
      const step = (label, state) => h("li", { class: state }, h("span", { class: "dot" }, state === "done" ? ic("check") : state === "bad" ? ic("x") : null), label);
      const hd = data ? data.hotel : { name: "", phone: "" };
      put(page, h(
        "div",
        { class: "qm-status s-" + s2.toLowerCase() },
        h("div", { class: "qm-ring" }, ok ? ic("check") : bad ? ic("x") : ic("clock")),
        h("h1", null, title),
        h("p", null, text),
        h("ol", { class: "qm-steps" }, step("Order sent", "done"), step(bad ? "Not accepted" : "Confirmed by restaurant", ok ? "done" : bad ? "bad" : "now"), step("Being prepared", ok ? "now" : "")),
        h(
          "div",
          { class: "qm-receipt" },
          h("div", { class: "qm-receipt-h" }, h("span", null, "Your order"), h("b", null, clean(o.ref))),
          (o.items || []).map((i) => h("div", { class: "qm-receipt-l" }, h("span", null, i.qty + " \xD7 " + clean(i.name)))),
          h("div", { class: "qm-receipt-f" }, h("span", null, o.type === "TAKEAWAY" ? "Takeaway" : clean(o.table) || "Dine-in"), h("b", null, M2(o.total)))
        ),
        h("button", { class: "qm-send", type: "button", onclick: () => {
          clearTimeout(statusTimer);
          if (!s2.startsWith("PENDING")) delete mem.last;
          saveMem();
          drawMenu();
          window.scrollTo(0, 0);
        } }, s2 === "PENDING" ? "Back to the menu" : "Order something else"),
        hd.phone ? h("a", { class: "qm-link", href: "tel:" + hd.phone.replace(/[^0-9+]/g, "") }, ic("phone"), "Call " + (hd.name || "the restaurant")) : null,
        h("footer", { class: "qm-foot" }, h("div", { class: "qm-powered" }, "Powered by ", h("b", null, "Hotel POS")), devCredit("dev-credit qm-credit"))
      ));
      window.scrollTo(0, 0);
      if (s2 === "PENDING" && Date.now() - o.at < 2 * 3600 * 1e3) {
        statusTimer = setTimeout(async () => {
          if (!page.isConnected || !page.querySelector(".qm-status")) return;
          try {
            const r = await pub("publicOrderStatus", { uid: o.uid });
            o.status = r.status;
            o.reason = r.reason;
            saveMem();
          } catch (e) {
          }
          if (page.isConnected && page.querySelector(".qm-status")) showStatus();
        }, 5e3);
      }
    }
    function skeleton() {
      const bone = (cls) => h("div", { class: "qm-bone " + (cls || "") });
      put(page, 
        h("header", { class: "qm-hero" }, h("div", { class: "qm-hero-in" }, bone("w40 light"), bone("w70 tall light"), bone("w55 light"))),
        h("div", { class: "qm-main skel" }, [1, 2, 3, 4].map(() => h("div", { class: "qm-item" }, h("div", { class: "qm-item-body" }, bone("w70"), bone("w90"), bone("w30")), bone("sq"))))
      );
    }
    async function boot() {
      skeleton();
      try {
        data = tidy(await pub("publicMenu", {}));
        document.title = data.hotel.name + " \xB7 Menu";
        Object.keys(cart).forEach((id) => {
          const m = data.menu.find((x) => x.id === id);
          if (!m || !m.available) delete cart[id];
        });
        if (mem.last && mem.last.status === "PENDING" && Date.now() - mem.last.at < 2 * 3600 * 1e3) showStatus();
        else drawMenu();
      } catch (e) {
        const msg = e && e.code === "MENU_OFF" ? "This restaurant has not switched on its QR menu yet." : errText(e);
        put(page, h("div", { class: "qm-status s-rejected" }, h("div", { class: "qm-ring" }, ic("x")), h("h1", null, "Menu not available"), h("p", null, msg), h("button", { class: "qm-send", type: "button", onclick: boot }, "Try again")));
      }
    }
    boot();
  }

  // web/js/app.js
  var root = document.getElementById("app");
  var carried = null;
  function nav(name, arg) {
    carried = arg === void 0 ? null : arg;
    if (location.hash === "#/" + name) render14();
    else location.hash = "#/" + name;
  }
  function render14() {
    const path = location.hash.replace(/^#\//, "").split("?")[0];
    const [name, sub] = (path || (store.getApp() ? "app" : store.getOwner() ? "portal" : "login")).split("/");
    const arg = carried;
    carried = null;
    root.dataset.view = name;
    window.scrollTo(0, 0);
    switch (name) {
      case "menu":
        root.dataset.view = "menu";
        publicMenuView(root, sub);
        break;
      case "register":
        mount(root, registerView(nav));
        break;
      case "registered":
        arg ? mount(root, registeredView(arg, nav)) : nav("login");
        break;
      case "login":
        mount(root, loginView(nav, arg || {}));
        break;
      case "blocked":
        arg ? mount(root, blockedView(arg, nav)) : nav("login");
        break;
      case "app":
        appView(root, nav, sub || "");
        break;
      case "portal":
        portalView(root, nav, arg);
        break;
      case "admin":
        store.getAdmin() ? adminConsoleView(root, nav) : adminLoginView(root, nav);
        break;
      default:
        nav(store.getApp() ? "app" : store.getOwner() ? "portal" : "register");
    }
  }
  var bar = document.createElement("div");
  bar.className = "offline-bar";
  bar.hidden = navigator.onLine !== false;
  bar.textContent = "You are offline. Orders and kitchen updates are kept on this device and sent when the connection returns.";
  function syncBar() {
    bar.hidden = navigator.onLine !== false;
  }
  window.addEventListener("online", syncBar);
  window.addEventListener("offline", syncBar);
  document.body.prepend(bar);
  window.addEventListener("hashchange", render14);
  // Keeps the website files on this device so it still opens without internet (see sw.js).
  try {
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
      window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {
      }));
    }
  } catch (e) {
  }
  LDB.ready.catch(() => {
  }).then(render14);
})();
