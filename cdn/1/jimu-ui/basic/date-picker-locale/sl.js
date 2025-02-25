System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const o=e.width?String(e.width):t.defaultWidth;return t.formats[o]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,o)=>{let n;if("formatting"===(o?.context?String(o.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=o?.width?String(o.width):e;n=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=o?.width?String(o.width):t.defaultWidth;n=t.values[a]||t.values[e]}return n[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,o={})=>{const n=o.width,a=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const r=i[0],u=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(let o=0;o<t.length;o++)if(e(t[o]))return o;return}(u,(t=>t.test(r))):function(t,e){for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&e(t[o]))return o;return}(u,(t=>t.test(r)));let l;l=t.valueCallback?t.valueCallback(c):c,l=o.valueCallback?o.valueCallback(l):l;return{value:l,rest:e.slice(r.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,o={})=>{const n=e.match(t.matchPattern);if(!n)return null;const a=n[0],i=e.match(t.parsePattern);if(!i)return null;let r=t.valueCallback?t.valueCallback(i[0]):i[0];r=o.valueCallback?o.valueCallback(r):r;return{value:r,rest:e.slice(a.length)}}}},7631:(t,e)=>{e.formatDistance=void 0;const o={lessThanXSeconds:{present:{one:"manj kot {{count}} sekunda",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"},past:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundama",few:"manj kot {{count}} sekundami",other:"manj kot {{count}} sekundami"},future:{one:"manj kot {{count}} sekundo",two:"manj kot {{count}} sekundi",few:"manj kot {{count}} sekunde",other:"manj kot {{count}} sekund"}},xSeconds:{present:{one:"{{count}} sekunda",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"},past:{one:"{{count}} sekundo",two:"{{count}} sekundama",few:"{{count}} sekundami",other:"{{count}} sekundami"},future:{one:"{{count}} sekundo",two:"{{count}} sekundi",few:"{{count}} sekunde",other:"{{count}} sekund"}},halfAMinute:"pol minute",lessThanXMinutes:{present:{one:"manj kot {{count}} minuta",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"},past:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minutama",few:"manj kot {{count}} minutami",other:"manj kot {{count}} minutami"},future:{one:"manj kot {{count}} minuto",two:"manj kot {{count}} minuti",few:"manj kot {{count}} minute",other:"manj kot {{count}} minut"}},xMinutes:{present:{one:"{{count}} minuta",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"},past:{one:"{{count}} minuto",two:"{{count}} minutama",few:"{{count}} minutami",other:"{{count}} minutami"},future:{one:"{{count}} minuto",two:"{{count}} minuti",few:"{{count}} minute",other:"{{count}} minut"}},aboutXHours:{present:{one:"pribli\u017eno {{count}} ura",two:"pribli\u017eno {{count}} uri",few:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"},past:{one:"pribli\u017eno {{count}} uro",two:"pribli\u017eno {{count}} urama",few:"pribli\u017eno {{count}} urami",other:"pribli\u017eno {{count}} urami"},future:{one:"pribli\u017eno {{count}} uro",two:"pribli\u017eno {{count}} uri",few:"pribli\u017eno {{count}} ure",other:"pribli\u017eno {{count}} ur"}},xHours:{present:{one:"{{count}} ura",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"},past:{one:"{{count}} uro",two:"{{count}} urama",few:"{{count}} urami",other:"{{count}} urami"},future:{one:"{{count}} uro",two:"{{count}} uri",few:"{{count}} ure",other:"{{count}} ur"}},xDays:{present:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"},past:{one:"{{count}} dnem",two:"{{count}} dnevoma",few:"{{count}} dnevi",other:"{{count}} dnevi"},future:{one:"{{count}} dan",two:"{{count}} dni",few:"{{count}} dni",other:"{{count}} dni"}},aboutXWeeks:{one:"pribli\u017eno {{count}} teden",two:"pribli\u017eno {{count}} tedna",few:"pribli\u017eno {{count}} tedne",other:"pribli\u017eno {{count}} tednov"},xWeeks:{one:"{{count}} teden",two:"{{count}} tedna",few:"{{count}} tedne",other:"{{count}} tednov"},aboutXMonths:{present:{one:"pribli\u017eno {{count}} mesec",two:"pribli\u017eno {{count}} meseca",few:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"},past:{one:"pribli\u017eno {{count}} mesecem",two:"pribli\u017eno {{count}} mesecema",few:"pribli\u017eno {{count}} meseci",other:"pribli\u017eno {{count}} meseci"},future:{one:"pribli\u017eno {{count}} mesec",two:"pribli\u017eno {{count}} meseca",few:"pribli\u017eno {{count}} mesece",other:"pribli\u017eno {{count}} mesecev"}},xMonths:{present:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} meseci",other:"{{count}} mesecev"},past:{one:"{{count}} mesecem",two:"{{count}} mesecema",few:"{{count}} meseci",other:"{{count}} meseci"},future:{one:"{{count}} mesec",two:"{{count}} meseca",few:"{{count}} mesece",other:"{{count}} mesecev"}},aboutXYears:{present:{one:"pribli\u017eno {{count}} leto",two:"pribli\u017eno {{count}} leti",few:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"},past:{one:"pribli\u017eno {{count}} letom",two:"pribli\u017eno {{count}} letoma",few:"pribli\u017eno {{count}} leti",other:"pribli\u017eno {{count}} leti"},future:{one:"pribli\u017eno {{count}} leto",two:"pribli\u017eno {{count}} leti",few:"pribli\u017eno {{count}} leta",other:"pribli\u017eno {{count}} let"}},xYears:{present:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"},past:{one:"{{count}} letom",two:"{{count}} letoma",few:"{{count}} leti",other:"{{count}} leti"},future:{one:"{{count}} leto",two:"{{count}} leti",few:"{{count}} leta",other:"{{count}} let"}},overXYears:{present:{one:"ve\u010d kot {{count}} leto",two:"ve\u010d kot {{count}} leti",few:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"},past:{one:"ve\u010d kot {{count}} letom",two:"ve\u010d kot {{count}} letoma",few:"ve\u010d kot {{count}} leti",other:"ve\u010d kot {{count}} leti"},future:{one:"ve\u010d kot {{count}} leto",two:"ve\u010d kot {{count}} leti",few:"ve\u010d kot {{count}} leta",other:"ve\u010d kot {{count}} let"}},almostXYears:{present:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"},past:{one:"skoraj {{count}} letom",two:"skoraj {{count}} letoma",few:"skoraj {{count}} leti",other:"skoraj {{count}} leti"},future:{one:"skoraj {{count}} leto",two:"skoraj {{count}} leti",few:"skoraj {{count}} leta",other:"skoraj {{count}} let"}}};e.formatDistance=(t,e,n)=>{let a="",i="present";n?.addSuffix&&(n.comparison&&n.comparison>0?(i="future",a="\u010dez "):(i="past",a="pred "));const r=o[t];if("string"==typeof r)a+=r;else{const t=function(t){switch(t%100){case 1:return"one";case 2:return"two";case 3:case 4:return"few";default:return"other"}}(e);void 0!==r.one?a+=r[t].replace("{{count}}",String(e)):a+=r[i][t].replace("{{count}}",String(e))}return a}},30890:(t,e,o)=>{e.formatLong=void 0;var n=o(97980);e.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"EEEE, dd. MMMM y",long:"dd. MMMM y",medium:"d. MMM y",short:"d. MM. yy"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})}},54540:(t,e)=>{e.formatRelative=void 0;const o={lastWeek:t=>{switch(t.getDay()){case 0:return"'prej\u0161njo nedeljo ob' p";case 3:return"'prej\u0161njo sredo ob' p";case 6:return"'prej\u0161njo soboto ob' p";default:return"'prej\u0161nji' EEEE 'ob' p"}},yesterday:"'v\u010deraj ob' p",today:"'danes ob' p",tomorrow:"'jutri ob' p",nextWeek:t=>{switch(t.getDay()){case 0:return"'naslednjo nedeljo ob' p";case 3:return"'naslednjo sredo ob' p";case 6:return"'naslednjo soboto ob' p";default:return"'naslednji' EEEE 'ob' p"}},other:"P"};e.formatRelative=(t,e,n,a)=>{const i=o[t];return"function"==typeof i?i(e):i}},29684:(t,e,o)=>{e.localize=void 0;var n=o(46746);e.localize={ordinalNumber:(t,e)=>Number(t)+".",era:(0,n.buildLocalizeFn)({values:{narrow:["pr. n. \u0161t.","po n. \u0161t."],abbreviated:["pr. n. \u0161t.","po n. \u0161t."],wide:["pred na\u0161im \u0161tetjem","po na\u0161em \u0161tetju"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["1. \u010det.","2. \u010det.","3. \u010det.","4. \u010det."],wide:["1. \u010detrtletje","2. \u010detrtletje","3. \u010detrtletje","4. \u010detrtletje"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["n","p","t","s","\u010d","p","s"],short:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","\u010det.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"ve\u010d.",night:"no\u010d"},wide:{am:"dop.",pm:"pop.",midnight:"polno\u010d",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"ve\u010der",night:"no\u010d"}},defaultWidth:"wide",formattingValues:{narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zve\u010d.",night:"pono\u010di"},wide:{am:"dop.",pm:"pop.",midnight:"opolno\u010di",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zve\u010der",night:"pono\u010di"}},defaultFormattingWidth:"wide"})}},64038:(t,e,o)=>{e.match=void 0;var n=o(20640),a=o(2528);e.match={ordinalNumber:(0,a.buildMatchPatternFn)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,n.buildMatchFn)({matchPatterns:{abbreviated:/^(pr\. n\. \u0161t\.|po n\. \u0161t\.)/i,wide:/^(pred Kristusom|pred na[s\u0161]im [s\u0161]tetjem|po Kristusu|po na[s\u0161]em [s\u0161]tetju|na[s\u0161]ega [s\u0161]tetja)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|na[s\u0161]em)/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[\u010dc]et\.?/i,wide:/^[1234]\. [\u010dc]etrtletje/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"wide"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[npts\u010dc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[c\u010d]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[c\u010d]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[c\u010d]etrtek|petek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[c\u010d]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[c\u010d]/i,/^pe/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[c\u010d]i?)|o?pold(\.|ne)|z?ve[c\u010d](\.|er)|(po)?no[c\u010d]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},defaultParseWidth:"any"})}}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}var n={};return(()=>{var t=n;t.sl=void 0;var e=o(7631),a=o(30890),i=o(54540),r=o(29684),u=o(64038);t.sl={code:"sl",formatDistance:e.formatDistance,formatLong:a.formatLong,formatRelative:i.formatRelative,localize:r.localize,match:u.match,options:{weekStartsOn:1,firstWeekContainsDate:1}}})(),n})())}}}));