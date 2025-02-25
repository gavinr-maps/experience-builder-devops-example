System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={68613:(t,e)=>{e.getDefaultOptions=function(){return a},e.setDefaultOptions=function(t){a=t};let a={}},65027:(t,e,a)=>{e.isSameWeek=function(t,e,a){const n=(0,i.startOfWeek)(t,a),r=(0,i.startOfWeek)(e,a);return+n==+r};var i=a(23480)},97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,a)=>{let i;if("formatting"===(a?.context?String(a.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,n=a?.width?String(a.width):e;i=t.formattingValues[n]||t.formattingValues[e]}else{const e=t.defaultWidth,n=a?.width?String(a.width):t.defaultWidth;i=t.values[n]||t.values[e]}return i[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,a={})=>{const i=a.width,n=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],r=e.match(n);if(!r)return null;const s=r[0],d=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],o=Array.isArray(d)?function(t,e){for(let a=0;a<t.length;a++)if(e(t[a]))return a;return}(d,(t=>t.test(s))):function(t,e){for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return a;return}(d,(t=>t.test(s)));let m;m=t.valueCallback?t.valueCallback(o):o,m=a.valueCallback?a.valueCallback(m):m;return{value:m,rest:e.slice(s.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,a={})=>{const i=e.match(t.matchPattern);if(!i)return null;const n=i[0],r=e.match(t.parsePattern);if(!r)return null;let s=t.valueCallback?t.valueCallback(r[0]):r[0];s=a.valueCallback?a.valueCallback(s):s;return{value:s,rest:e.slice(n.length)}}}},39914:(t,e)=>{function a(t){return(e,a)=>{if(1===e)return a?.addSuffix?t.one[0].replace("{{time}}",t.one[2]):t.one[0].replace("{{time}}",t.one[1]);{const i=e%10==1&&e%100!=11;return a?.addSuffix?t.other[0].replace("{{time}}",i?t.other[3]:t.other[4]).replace("{{count}}",String(e)):t.other[0].replace("{{time}}",i?t.other[1]:t.other[2]).replace("{{count}}",String(e))}}}e.formatDistance=void 0;const i={lessThanXSeconds:a({one:["maz\u0101k par {{time}}","sekundi","sekundi"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),xSeconds:a({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekund\u0113m"]}),halfAMinute:(t,e)=>e?.addSuffix?"pusmin\u016btes":"pusmin\u016bte",lessThanXMinutes:a({one:["maz\u0101k par {{time}}","min\u016bti","min\u016bti"],other:["maz\u0101k nek\u0101 {{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),xMinutes:a({one:["1 {{time}}","min\u016bte","min\u016btes"],other:["{{count}} {{time}}","min\u016bte","min\u016btes","min\u016btes","min\u016bt\u0113m"]}),aboutXHours:a({one:["apm\u0113ram 1 {{time}}","stunda","stundas"],other:["apm\u0113ram {{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xHours:a({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stund\u0101m"]}),xDays:a({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dien\u0101m"]}),aboutXWeeks:a({one:["apm\u0113ram 1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["apm\u0113ram {{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),xWeeks:a({one:["1 {{time}}","ned\u0113\u013ca","ned\u0113\u013cas"],other:["{{count}} {{time}}","ned\u0113\u013ca","ned\u0113\u013cu","ned\u0113\u013cas","ned\u0113\u013c\u0101m"]}),aboutXMonths:a({one:["apm\u0113ram 1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["apm\u0113ram {{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),xMonths:a({one:["1 {{time}}","m\u0113nesis","m\u0113ne\u0161a"],other:["{{count}} {{time}}","m\u0113nesis","m\u0113ne\u0161i","m\u0113ne\u0161a","m\u0113ne\u0161iem"]}),aboutXYears:a({one:["apm\u0113ram 1 {{time}}","gads","gada"],other:["apm\u0113ram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:a({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:a({one:["ilg\u0101k par 1 {{time}}","gadu","gadu"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:a({one:["gandr\u012bz 1 {{time}}","gads","gada"],other:["vair\u0101k nek\u0101 {{count}} {{time}}","gads","gadi","gada","gadiem"]})};e.formatDistance=(t,e,a)=>{const n=i[t](e,a);return a?.addSuffix?a.comparison&&a.comparison>0?"p\u0113c "+n:"pirms "+n:n}},57339:(t,e,a)=>{e.formatLong=void 0;var i=a(97980);e.formatLong={date:(0,i.buildFormatLongFn)({formats:{full:"EEEE, y. 'gada' d. MMMM",long:"y. 'gada' d. MMMM",medium:"dd.MM.y.",short:"dd.MM.y."},defaultWidth:"full"}),time:(0,i.buildFormatLongFn)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.buildFormatLongFn)({formats:{full:"{{date}} 'plkst.' {{time}}",long:"{{date}} 'plkst.' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}},77381:(t,e,a)=>{e.formatRelative=void 0;var i=a(65027);const n=["sv\u0113tdien\u0101","pirmdien\u0101","otrdien\u0101","tre\u0161dien\u0101","ceturtdien\u0101","piektdien\u0101","sestdien\u0101"],r={lastWeek:(t,e,a)=>{if((0,i.isSameWeek)(t,e,a))return"eeee 'plkst.' p";return"'Pag\u0101ju\u0161\u0101 "+n[t.getDay()]+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'\u0160odien plkst.' p",tomorrow:"'R\u012bt plkst.' p",nextWeek:(t,e,a)=>{if((0,i.isSameWeek)(t,e,a))return"eeee 'plkst.' p";return"'N\u0101kamaj\u0101 "+n[t.getDay()]+" plkst.' p"},other:"P"};e.formatRelative=(t,e,a,i)=>{const n=r[t];return"function"==typeof n?n(e,a,i):n}},68741:(t,e,a)=>{e.localize=void 0;var i=a(46746);e.localize={ordinalNumber:(t,e)=>Number(t)+".",era:(0,i.buildLocalizeFn)({values:{narrow:["p.m.\u0113","m.\u0113"],abbreviated:["p. m. \u0113.","m. \u0113."],wide:["pirms m\u016bsu \u0113ras","m\u016bsu \u0113r\u0101"]},defaultWidth:"wide"}),quarter:(0,i.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","tre\u0161ais ceturksnis","ceturtais ceturksnis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmaj\u0101 ceturksn\u012b","otraj\u0101 ceturksn\u012b","tre\u0161aj\u0101 ceturksn\u012b","ceturtaj\u0101 ceturksn\u012b"]},defaultFormattingWidth:"wide",argumentCallback:t=>t-1}),month:(0,i.buildLocalizeFn)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","j\u016bn.","j\u016bl.","aug.","sept.","okt.","nov.","dec."],wide:["janv\u0101ris","febru\u0101ris","marts","apr\u012blis","maijs","j\u016bnijs","j\u016blijs","augusts","septembris","oktobris","novembris","decembris"]},defaultWidth:"wide",formattingValues:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","mart\u0101","apr.","maijs","j\u016bn.","j\u016bl.","aug.","sept.","okt.","nov.","dec."],wide:["janv\u0101r\u012b","febru\u0101r\u012b","mart\u0101","apr\u012bl\u012b","maij\u0101","j\u016bnij\u0101","j\u016blij\u0101","august\u0101","septembr\u012b","oktobr\u012b","novembr\u012b","decembr\u012b"]},defaultFormattingWidth:"wide"}),day:(0,i.buildLocalizeFn)({values:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["sv\u0113td.","pirmd.","otrd.","tre\u0161d.","ceturtd.","piektd.","sestd."],wide:["sv\u0113tdiena","pirmdiena","otrdiena","tre\u0161diena","ceturtdiena","piektdiena","sestdiena"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["sv\u0113td.","pirmd.","otrd.","tre\u0161d.","ceturtd.","piektd.","sestd."],wide:["sv\u0113tdien\u0101","pirmdien\u0101","otrdien\u0101","tre\u0161dien\u0101","ceturtdien\u0101","piektdien\u0101","sestdien\u0101"]},defaultFormattingWidth:"wide"}),dayPeriod:(0,i.buildLocalizeFn)({values:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bts",afternoon:"p\u0113cpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"r\u012bts",afternoon:"p\u0113cpusdiena",evening:"vakars",night:"nakts"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bt\u0101",afternoon:"dien\u0101",evening:"vakar\u0101",night:"nakt\u012b"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"r\u012bt\u0101",afternoon:"p\u0113cpusd.",evening:"vakar\u0101",night:"nakt\u012b"},wide:{am:"am",pm:"pm",midnight:"pusnakt\u012b",noon:"pusdienlaik\u0101",morning:"r\u012bt\u0101",afternoon:"p\u0113cpusdien\u0101",evening:"vakar\u0101",night:"nakt\u012b"}},defaultFormattingWidth:"wide"})}},37841:(t,e,a)=>{e.match=void 0;var i=a(20640),n=a(2528);e.match={ordinalNumber:(0,n.buildMatchPatternFn)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,i.buildMatchFn)({matchPatterns:{narrow:/^(p\.m\.\u0113|m\.\u0113)/i,abbreviated:/^(p\. m\. \u0113\.|m\. \u0113\.)/i,wide:/^(pirms m\u016bsu \u0113ras|m\u016bsu \u0113r\u0101)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^m/i]},defaultParseWidth:"any"}),quarter:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|j\u0101)|otra(is|j\u0101)|tre\u0161a(is|j\u0101)|ceturta(is|j\u0101)) ceturksn(is|\u012b)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]},defaultParseWidth:"wide",valueCallback:t=>t+1}),month:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|j\u016bn\.|j\u016bl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janv\u0101r(is|\u012b)|febru\u0101r(is|\u012b)|mart[s\u0101]|apr\u012bl(is|\u012b)|maij[s\u0101]|j\u016bnij[s\u0101]|j\u016blij[s\u0101]|august[s\u0101]|septembr(is|\u012b)|oktobr(is|\u012b)|novembr(is|\u012b)|decembr(is|\u012b))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^j\u016bn/i,/^j\u016bl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(sv\u0113td\.|pirmd\.|otrd.\|tre\u0161d\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(sv\u0113tdien(a|\u0101)|pirmdien(a|\u0101)|otrdien(a|\u0101)|tre\u0161dien(a|\u0101)|ceturtdien(a|\u0101)|piektdien(a|\u0101)|sestdien(a|\u0101))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.buildMatchFn)({matchPatterns:{narrow:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|dien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/,abbreviated:/^(am|pm|pusn\.|pusd\.|r\u012bt(s|\u0101)|p\u0113cpusd\.|vakar(s|\u0101)|nakt(s|\u012b))/,wide:/^(am|pm|pusnakt(s|\u012b)|pusdienlaik(s|\u0101)|r\u012bt(s|\u0101)|p\u0113cpusdien(a|\u0101)|vakar(s|\u0101)|nakt(s|\u012b))/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|p\u0113c)/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"})}},23480:(t,e,a)=>{e.startOfWeek=function(t,e){const a=(0,n.getDefaultOptions)(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=(0,i.toDate)(t),d=s.getDay(),o=(d<r?7:0)+d-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s};var i=a(61576),n=a(68613)},61576:(t,e)=>{e.toDate=function(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}var i={};return(()=>{var t=i;t.lv=void 0;var e=a(39914),n=a(57339),r=a(77381),s=a(68741),d=a(37841);t.lv={code:"lv",formatDistance:e.formatDistance,formatLong:n.formatLong,formatRelative:r.formatRelative,localize:s.localize,match:d.match,options:{weekStartsOn:1,firstWeekContainsDate:4}}})(),i})())}}}));