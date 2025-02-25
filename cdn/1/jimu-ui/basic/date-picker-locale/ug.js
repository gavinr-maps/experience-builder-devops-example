System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,a)=>{let n;if("formatting"===(a?.context?String(a.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,i=a?.width?String(a.width):e;n=t.formattingValues[i]||t.formattingValues[e]}else{const e=t.defaultWidth,i=a?.width?String(a.width):t.defaultWidth;n=t.values[i]||t.values[e]}return n[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,a={})=>{const n=a.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;const o=r[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(let a=0;a<t.length;a++)if(e(t[a]))return a;return}(d,(t=>t.test(o))):function(t,e){for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return a;return}(d,(t=>t.test(o)));let u;u=t.valueCallback?t.valueCallback(l):l,u=a.valueCallback?a.valueCallback(u):u;return{value:u,rest:e.slice(o.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,a={})=>{const n=e.match(t.matchPattern);if(!n)return null;const i=n[0],r=e.match(t.parsePattern);if(!r)return null;let o=t.valueCallback?t.valueCallback(r[0]):r[0];o=a.valueCallback?a.valueCallback(o):o;return{value:o,rest:e.slice(i.length)}}}},42132:(t,e)=>{e.formatDistance=void 0;const a={lessThanXSeconds:{one:"\u0628\u0649\u0631 \u0633\u0649\u0643\u06c7\u0646\u062a \u0626\u0649\u0686\u0649\u062f\u06d5",other:"\u0633\u0649\u0643\u06c7\u0646\u062a \u0626\u0649\u0686\u0649\u062f\u06d5 {{count}}"},xSeconds:{one:"\u0628\u0649\u0631 \u0633\u0649\u0643\u06c7\u0646\u062a",other:"\u0633\u0649\u0643\u06c7\u0646\u062a {{count}}"},halfAMinute:"\u064a\u0649\u0631\u0649\u0645 \u0645\u0649\u0646\u06c7\u062a",lessThanXMinutes:{one:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a \u0626\u0649\u0686\u0649\u062f\u06d5",other:"\u0645\u0649\u0646\u06c7\u062a \u0626\u0649\u0686\u0649\u062f\u06d5 {{count}}"},xMinutes:{one:"\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",other:"\u0645\u0649\u0646\u06c7\u062a {{count}}"},aboutXHours:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",other:"\u0633\u0627\u0626\u06d5\u062a {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xHours:{one:"\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",other:"\u0633\u0627\u0626\u06d5\u062a {{count}}"},xDays:{one:"\u0628\u0649\u0631 \u0643\u06c8\u0646",other:"\u0643\u06c8\u0646 {{count}}"},aboutXWeeks:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631\u06be\u06d5\u067e\u062a\u06d5",other:"\u06be\u06d5\u067e\u062a\u06d5 {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xWeeks:{one:"\u0628\u0649\u0631\u06be\u06d5\u067e\u062a\u06d5",other:"\u06be\u06d5\u067e\u062a\u06d5 {{count}}"},aboutXMonths:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631 \u0626\u0627\u064a",other:"\u0626\u0627\u064a {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xMonths:{one:"\u0628\u0649\u0631 \u0626\u0627\u064a",other:"\u0626\u0627\u064a {{count}}"},aboutXYears:{one:"\u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646 \u0628\u0649\u0631 \u064a\u0649\u0644",other:"\u064a\u0649\u0644 {{count}} \u062a\u06d5\u062e\u0645\u0649\u0646\u06d5\u0646"},xYears:{one:"\u0628\u0649\u0631 \u064a\u0649\u0644",other:"\u064a\u0649\u0644 {{count}}"},overXYears:{one:"\u0628\u0649\u0631 \u064a\u0649\u0644\u062f\u0649\u0646 \u0626\u0627\u0631\u062a\u06c7\u0642",other:"\u064a\u0649\u0644\u062f\u0649\u0646 \u0626\u0627\u0631\u062a\u06c7\u0642 {{count}}"},almostXYears:{one:"\u0626\u0627\u0633\u0627\u0633\u06d5\u0646 \u0628\u0649\u0631 \u064a\u0649\u0644",other:"\u064a\u0649\u0644 {{count}} \u0626\u0627\u0633\u0627\u0633\u06d5\u0646"}};e.formatDistance=(t,e,n)=>{let i;const r=a[t];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),n?.addSuffix?n.comparison&&n.comparison>0?i:i+" \u0628\u0648\u0644\u062f\u0649":i}},49501:(t,e,a)=>{e.formatLong=void 0;var n=a(97980);e.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} '\u062f\u06d5' {{time}}",long:"{{date}} '\u062f\u06d5' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}},54299:(t,e)=>{e.formatRelative=void 0;const a={lastWeek:"'\u0626\u200d\u06c6\u062a\u0643\u06d5\u0646' eeee '\u062f\u06d5' p",yesterday:"'\u062a\u06c8\u0646\u06c8\u06af\u06c8\u0646 \u062f\u06d5' p",today:"'\u0628\u06c8\u06af\u06c8\u0646 \u062f\u06d5' p",tomorrow:"'\u0626\u06d5\u062a\u06d5 \u062f\u06d5' p",nextWeek:"eeee '\u062f\u06d5' p",other:"P"};e.formatRelative=(t,e,n,i)=>a[t]},94355:(t,e,a)=>{e.localize=void 0;var n=a(46746);e.localize={ordinalNumber:(t,e)=>String(t),era:(0,n.buildLocalizeFn)({values:{narrow:["\u0628","\u0643"],abbreviated:["\u0628","\u0643"],wide:["\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646","\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0643\u0649\u064a\u0649\u0646"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["1","2","3","4"],wide:["\u0628\u0649\u0631\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643","\u0626\u0649\u0643\u0643\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643","\u0626\u06c8\u0686\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643","\u062a\u06c6\u062a\u0649\u0646\u062c\u0649 \u0686\u0627\u0631\u06d5\u0643"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["\u064a","\u0641","\u0645","\u0627","\u0645","\u0649","\u0649","\u0627","\u0633","\u06c6","\u0646","\u062f"],abbreviated:["\u064a\u0627\u0646\u06cb\u0627\u0631","\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644","\u0645\u0627\u0631\u062a","\u0626\u0627\u067e\u0631\u0649\u0644","\u0645\u0627\u064a","\u0626\u0649\u064a\u06c7\u0646","\u0626\u0649\u064a\u0648\u0644","\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a","\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631","\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631","\u0646\u0648\u064a\u0627\u0628\u0649\u0631","\u062f\u0649\u0643\u0627\u0628\u0649\u0631"],wide:["\u064a\u0627\u0646\u06cb\u0627\u0631","\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644","\u0645\u0627\u0631\u062a","\u0626\u0627\u067e\u0631\u0649\u0644","\u0645\u0627\u064a","\u0626\u0649\u064a\u06c7\u0646","\u0626\u0649\u064a\u0648\u0644","\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a","\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631","\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631","\u0646\u0648\u064a\u0627\u0628\u0649\u0631","\u062f\u0649\u0643\u0627\u0628\u0649\u0631"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["\u064a","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"],short:["\u064a","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"],abbreviated:["\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5","\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5","\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5","\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u062c\u06c8\u0645\u06d5","\u0634\u06d5\u0646\u0628\u06d5"],wide:["\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5","\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5","\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5","\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5","\u062c\u06c8\u0645\u06d5","\u0634\u06d5\u0646\u0628\u06d5"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0649\u0645",night:"\u0643\u0649\u0686\u06d5"},abbreviated:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0649\u0645",night:"\u0643\u0649\u0686\u06d5"},wide:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0649\u0645",night:"\u0643\u0649\u0686\u06d5"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646\u062f\u06d5",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0627\u0645\u062f\u0627",night:"\u0643\u0649\u0686\u0649\u062f\u06d5"},abbreviated:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646\u062f\u06d5",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0627\u0645\u062f\u0627",night:"\u0643\u0649\u0686\u0649\u062f\u06d5"},wide:{am:"\u0626\u06d5",pm:"\u0686",midnight:"\u0643",noon:"\u0686",morning:"\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646\u062f\u06d5",afternoon:"\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646",evening:"\u0626\u0627\u062e\u0634\u0627\u0645\u062f\u0627",night:"\u0643\u0649\u0686\u0649\u062f\u06d5"}},defaultFormattingWidth:"wide"})}},29843:(t,e,a)=>{e.match=void 0;var n=a(20640),i=a(2528);e.match={ordinalNumber:(0,i.buildMatchPatternFn)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(\u0628|\u0643)/i,wide:/^(\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0645\u0649\u064a\u0644\u0627\u062f\u0649\u062f\u0649\u0646 \u0643\u0649\u064a\u0649\u0646)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0628\u06c7\u0631\u06c7\u0646/i,/^\u0643\u0649\u064a\u0649\u0646/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0686[1234]/i,wide:/^\u0686\u0627\u0631\u06d5\u0643 [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[\u064a\u0641\u0645\u0626\u0627\u0645\u0626\u200d\u0626\u0627\u0633\u06c6\u0646\u062f]/i,abbreviated:/^(\u064a\u0627\u0646\u06cb\u0627\u0631|\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644|\u0645\u0627\u0631\u062a|\u0626\u0627\u067e\u0631\u0649\u0644|\u0645\u0627\u064a|\u0626\u0649\u064a\u06c7\u0646|\u0626\u0649\u064a\u0648\u0644|\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a|\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631|\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631|\u0646\u0648\u064a\u0627\u0628\u0649\u0631|\u062f\u0649\u0643\u0627\u0628\u0649\u0631)/i,wide:/^(\u064a\u0627\u0646\u06cb\u0627\u0631|\u0641\u06d0\u06cb\u0649\u0631\u0627\u0644|\u0645\u0627\u0631\u062a|\u0626\u0627\u067e\u0631\u0649\u0644|\u0645\u0627\u064a|\u0626\u0649\u064a\u06c7\u0646|\u0626\u0649\u064a\u0648\u0644|\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a|\u0633\u0649\u0646\u062a\u06d5\u0628\u0649\u0631|\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631|\u0646\u0648\u064a\u0627\u0628\u0649\u0631|\u062f\u0649\u0643\u0627\u0628\u0649\u0631)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u064a/i,/^\u0641/i,/^\u0645/i,/^\u0627/i,/^\u0645/i,/^\u0649\u200d/i,/^\u0649\u200d/i,/^\u0627\u200d/i,/^\u0633/i,/^\u06c6/i,/^\u0646/i,/^\u062f/i],any:[/^\u064a\u0627\u0646/i,/^\u0641\u06d0\u06cb/i,/^\u0645\u0627\u0631/i,/^\u0626\u0627\u067e/i,/^\u0645\u0627\u064a/i,/^\u0626\u0649\u064a\u06c7\u0646/i,/^\u0626\u0649\u064a\u0648\u0644/i,/^\u0626\u0627\u06cb/i,/^\u0633\u0649\u0646/i,/^\u0626\u06c6\u0643/i,/^\u0646\u0648\u064a/i,/^\u062f\u0649\u0643/i]},defaultParseWidth:"any"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[\u062f\u0633\u0686\u067e\u062c\u0634\u064a]/i,short:/^(\u064a\u06d5|\u062f\u06c8|\u0633\u06d5|\u0686\u0627|\u067e\u06d5|\u062c\u06c8|\u0634\u06d5)/i,abbreviated:/^(\u064a\u06d5|\u062f\u06c8|\u0633\u06d5|\u0686\u0627|\u067e\u06d5|\u062c\u06c8|\u0634\u06d5)/i,wide:/^(\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5|\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5|\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5|\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5|\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5|\u062c\u06c8\u0645\u06d5|\u0634\u06d5\u0646\u0628\u06d5)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u064a/i,/^\u062f/i,/^\u0633/i,/^\u0686/i,/^\u067e/i,/^\u062c/i,/^\u0634/i],any:[/^\u064a/i,/^\u062f/i,/^\u0633/i,/^\u0686/i,/^\u067e/i,/^\u062c/i,/^\u0634/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(\u0626\u06d5|\u0686|\u0643|\u0686|(\u062f\u06d5|\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646) ( \u0626\u06d5\u200d|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646|\u0626\u0627\u062e\u0634\u0649\u0645|\u0643\u0649\u0686\u06d5))/i,any:/^(\u0626\u06d5|\u0686|\u0643|\u0686|(\u062f\u06d5|\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646) ( \u0626\u06d5\u200d|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646|\u0626\u0627\u062e\u0634\u0649\u0645|\u0643\u0649\u0686\u06d5))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0626\u06d5/i,pm:/^\u0686/i,midnight:/^\u0643/i,noon:/^\u0686/i,morning:/\u0626\u06d5\u062a\u0649\u06af\u06d5\u0646/i,afternoon:/\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u0649\u064a\u0649\u0646/i,evening:/\u0626\u0627\u062e\u0634\u0649\u0645/i,night:/\u0643\u0649\u0686\u06d5/i}},defaultParseWidth:"any"})}}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}var n={};return(()=>{var t=n;t.ug=void 0;var e=a(42132),i=a(49501),r=a(54299),o=a(94355),d=a(29843);t.ug={code:"ug",formatDistance:e.formatDistance,formatLong:i.formatLong,formatRelative:r.formatRelative,localize:o.localize,match:d.match,options:{weekStartsOn:0,firstWeekContainsDate:1}}})(),n})())}}}));