System.register(["jimu-core","jimu-ui","jimu-ui/basic/sql-expression-runtime","jimu-ui/basic/list-tree","jimu-ui/advanced/data-source-selector"],(function(e){var t,s,i,a,l;return{setters:[function(e){t=e},function(e){s=e},function(e){i=e},function(e){a=e},function(e){l=e}],execute:function(){e(function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=988)}({0:function(e,s){e.exports=t},1:function(e,t){e.exports=s},129:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M7.185 0c.105 0 .195.118.232.24l.013.062.245 1.567c.294.145.588.29.85.465l.19.138 1.53-.603c.154-.05.264-.016.332.031l.036.03 1.224 2.11c.051.1.06.201-.01.302l-.05.06-1.286 1.025c.061.181.061.362.061.603 0 .181-.034.328-.052.467l-.01.136 1.409.965c.105.052.12.192.083.307l-.022.055-1.224 2.11c-.053.104-.195.163-.312.14l-.056-.019-1.53-.603a4.796 4.796 0 01-.82.494l-.22.109-.245 1.568c0 .103-.135.207-.25.234L7.246 12H4.798c-.157 0-.27-.089-.298-.19l-.253-1.619c-.293-.145-.587-.29-.85-.465l-.19-.138-1.53.603c-.153.05-.264.017-.332-.03l-.036-.03L.085 8.02c-.05-.101-.06-.202.01-.302l.051-.06 1.286-1.026c-.061-.18-.061-.362-.061-.603 0-.18.034-.328.051-.466l.01-.137-1.286-.965c-.104-.103-.164-.25-.14-.329L1.247 1.99c.102-.1.204-.16.342-.141l.087.02 1.469.603.419-.281c.135-.09.268-.17.407-.236l.214-.086.245-1.628c0-.103.135-.207.25-.234L4.738 0h2.448zm-.658 1h-1.2l-.243 1.627-.586.192a1.42 1.42 0 00-.3.154l-.503.335-.441.29-1.439-.593-.59 1.017 1.207.905v.5c0 .088-.003.147-.013.228l-.044.31a.577.577 0 00-.004.065l.005.26.005.027.223.66L1.258 8.05l.581 1.001 1.536-.604.45.356c.162.126.334.226.712.416l.618.304.23 1.476h1.274l.23-1.476.751-.371c.206-.106.342-.182.453-.258l.126-.091.451-.356 1.506.595.587-1.01-1.272-.872v-.607l.009-.117.048-.341.003-.035v-.18l-.003-.098-.004-.034-.225-.665 1.345-1.073-.581-1.002-1.535.605-.451-.355-.126-.092a5.312 5.312 0 00-.59-.326l-.614-.303L6.527 1zM6 3.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="#000" fill-rule="nonzero"></path></svg>'},17:function(e,t){e.exports=i},176:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M.5 9a.5.5 0 01-.5-.5V1a1 1 0 011-1h6.5a.5.5 0 010 1H1v7.5a.5.5 0 01-.5.5zM3 3v8h8V3H3zm0-1h8a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" fill="#000" fill-rule="nonzero"></path></svg>'},311:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 9v6H0V9h16zm-1 1H1v4h14v-4zM4 11v2H2v-2h2zM16 1v6H0V1h16zm-1 1H1v4h14V2zM4 3v2H2V3h2z" fill="#FFF" fill-rule="evenodd"></path></svg>'},312:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M5.5 14A1.5 1.5 0 004 15.5v27A1.5 1.5 0 005.5 44h57a1.5 1.5 0 001.5-1.5v-27l-.007-.144A1.5 1.5 0 0062.5 14h-57zm57 1a.5.5 0 01.5.5v27a.5.5 0 01-.5.5h-57a.5.5 0 01-.5-.5v-27a.5.5 0 01.5-.5h57z" fill="#363636"></path><path fill="#363636" d="M8 18h4v4H8zM38 18h4v4h-4zM33 18h1v22h-1zM14 18h4v4h-4zM44 18h4v4h-4zM20 18h4v4h-4zM50 18h4v4h-4zM26 18h4v4h-4zM56 18h4v4h-4zM8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM44 30h4v4h-4zM50 30h4v4h-4zM20 30h4v4h-4zM26 30h4v4h-4zM56 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4zM14 36h4v4h-4zM44 36h4v4h-4zM20 36h4v4h-4zM8 24h4v4H8zM38 24h4v4h-4z"></path><path fill="#6A6A6A" d="M14 24h4v4h-4z"></path><path fill="#363636" d="M44 24h4v4h-4zM20 24h4v4h-4zM50 24h4v4h-4zM26 24h4v4h-4zM56 24h4v4h-4z"></path><rect fill="#6A6A6A" x="4" y="4" width="60" height="8" rx="1"></rect></g></svg>'},313:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M5.5 14A1.5 1.5 0 004 15.5v27A1.5 1.5 0 005.5 44h57a1.5 1.5 0 001.5-1.5v-27l-.007-.144A1.5 1.5 0 0062.5 14h-57zm57 1a.5.5 0 01.5.5v27a.5.5 0 01-.5.5h-57a.5.5 0 01-.5-.5v-27a.5.5 0 01.5-.5h57z" fill="#363636"></path><path fill="#363636" d="M8 18h4v4H8zM38 18h4v4h-4zM33 18h1v22h-1zM14 18h4v4h-4zM44 18h4v4h-4zM20 18h4v4h-4zM50 18h4v4h-4zM26 18h4v4h-4zM56 18h4v4h-4zM8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM20 30h4v4h-4zM26 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4zM14 36h4v4h-4zM20 36h4v4h-4zM8 24h4v4H8zM38 24h4v4h-4z"></path><path fill="#6A6A6A" d="M14 24h4v4h-4z"></path><path fill="#363636" d="M44 24h4v4h-4z"></path><path d="M54.5 41a6.5 6.5 0 110-13 6.5 6.5 0 110 13zm0-11.782a5.281 5.281 0 100 10.563 5.281 5.281 0 000-10.563zm2.64 5.891H54.5a.61.61 0 01-.61-.61v-3.656a.61.61 0 011.219 0v3.048h2.031a.608.608 0 110 1.218z" fill="#6A6A6A"></path><path fill="#363636" d="M20 24h4v4h-4zM26 24h4v4h-4z"></path><rect fill="#6A6A6A" x="4" y="4" width="60" height="8" rx="1"></rect></g></svg>'},314:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M5.5 14A1.5 1.5 0 004 15.5v27A1.5 1.5 0 005.5 44h57a1.5 1.5 0 001.5-1.5v-27l-.007-.144A1.5 1.5 0 0062.5 14h-57zm57 1a.5.5 0 01.5.5v27a.5.5 0 01-.5.5h-57a.5.5 0 01-.5-.5v-27a.5.5 0 01.5-.5h57z" fill="#363636"></path><path fill="#363636" d="M8 18h4v4H8z"></path><path fill="#6A6A6A" d="M38 18h4v4h-4z"></path><path fill="#363636" d="M33 18h1v22h-1zM14 18h4v4h-4z"></path><path fill="#6A6A6A" d="M44 18h4v4h-4z"></path><path fill="#363636" d="M20 18h4v4h-4z"></path><path fill="#6A6A6A" d="M50 18h4v4h-4z"></path><path fill="#363636" d="M26 18h4v4h-4z"></path><path fill="#6A6A6A" d="M56 18h4v4h-4z"></path><path fill="#363636" d="M8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM44 30h4v4h-4zM20 30h4v4h-4zM50 30h4v4h-4zM26 30h4v4h-4zM56 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4z"></path><path fill="#6A6A6A" d="M14 36h4v4h-4z"></path><path fill="#363636" d="M44 36h4v4h-4z"></path><path fill="#6A6A6A" d="M20 36h4v4h-4z"></path><path fill="#363636" d="M8 24h4v4H8z"></path><path fill="#6A6A6A" d="M38 24h4v4h-4z"></path><path fill="#363636" d="M14 24h4v4h-4z"></path><path fill="#6A6A6A" d="M44 24h4v4h-4z"></path><path fill="#363636" d="M20 24h4v4h-4zM50 24h4v4h-4zM26 24h4v4h-4zM56 24h4v4h-4z"></path><rect fill="#6A6A6A" x="4" y="4" width="28" height="8" rx="1"></rect><rect fill="#6A6A6A" x="36" y="4" width="28" height="8" rx="1"></rect></g></svg>'},315:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M5.5 14A1.5 1.5 0 004 15.5v27A1.5 1.5 0 005.5 44h57a1.5 1.5 0 001.5-1.5v-27l-.007-.144A1.5 1.5 0 0062.5 14h-57zm57 1a.5.5 0 01.5.5v27a.5.5 0 01-.5.5h-57a.5.5 0 01-.5-.5v-27a.5.5 0 01.5-.5h57z" fill="#363636"></path><path fill="#363636" d="M8 18h4v4H8z"></path><path fill="#6A6A6A" d="M38 18h4v4h-4z"></path><path fill="#363636" d="M33 18h1v22h-1zM14 18h4v4h-4z"></path><path fill="#6A6A6A" d="M44 18h4v4h-4z"></path><path fill="#363636" d="M20 18h4v4h-4z"></path><path fill="#6A6A6A" d="M50 18h4v4h-4z"></path><path fill="#363636" d="M26 18h4v4h-4z"></path><path fill="#6A6A6A" d="M56 18h4v4h-4z"></path><path fill="#363636" d="M8 30h4v4H8zM38 30h4v4h-4zM14 30h4v4h-4zM20 30h4v4h-4zM26 30h4v4h-4zM8 36h4v4H8zM38 36h4v4h-4z"></path><path fill="#6A6A6A" d="M14 36h4v4h-4zM20 36h4v4h-4z"></path><path fill="#363636" d="M8 24h4v4H8z"></path><path fill="#6A6A6A" d="M38 24h4v4h-4z"></path><path fill="#363636" d="M14 24h4v4h-4z"></path><path fill="#6A6A6A" d="M44 24h4v4h-4zM54.5 41a6.5 6.5 0 110-13 6.5 6.5 0 110 13zm0-11.782a5.281 5.281 0 100 10.563 5.281 5.281 0 000-10.563zm2.64 5.891H54.5a.61.61 0 01-.61-.61v-3.656a.61.61 0 011.219 0v3.048h2.031a.608.608 0 110 1.218z"></path><path fill="#363636" d="M20 24h4v4h-4zM26 24h4v4h-4z"></path><rect fill="#6A6A6A" x="4" y="4" width="28" height="8" rx="1"></rect><rect fill="#6A6A6A" x="36" y="4" width="28" height="8" rx="1"></rect></g></svg>'},316:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.732 9.4l1.43 1.215a2.794 2.794 0 01-.507 4.602c-2.21 1.153-4.63 1.033-7.26-.362l-.293-.16a.2.2 0 01.087-.374c1.847-.11 2.771-.888 2.771-2.334 0-1.063.299-1.96 1.18-2.59.88-.631 1.832-.457 2.592.003zm-1.945.761c-.56.472-.825 1.055-.825 1.826 0 1.22-1.19 2.713-1.987 2.713 1.3.517 3.745.799 5.212-.368.174-.139.383-.251.531-.425a1.793 1.793 0 00-.205-2.53l-1.43-1.214a1.003 1.003 0 00-1.296-.002zM15.55.251c.45.355.58.988.307 1.495L11.696 9.49a1.967 1.967 0 01-2.958.622l-.996-.788a2.018 2.018 0 01-.12-3.054l6.42-5.959a1.158 1.158 0 011.509-.06zm-.84.798l-6.42 5.96a1.01 1.01 0 00.06 1.527l.997.787a.984.984 0 001.479-.31l4.162-7.745a.182.182 0 00-.047-.229.177.177 0 00-.23.01z" fill="#FFF" fill-rule="evenodd"></path></svg>'},317:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#363636" fill-rule="nonzero" x="32" y="24" width="15" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="49" y="24" width="15" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="4" y="24" width="26" height="8" rx="1"></rect><rect fill="#6A6A6A" x="4" y="4" width="19" height="8" rx="1"></rect><rect fill="#6A6A6A" fill-rule="nonzero" x="4" y="14" width="34" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="45" y="4" width="15" height="8" rx="1"></rect><rect fill="#6A6A6A" x="25" y="4" width="18" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="40" y="14" width="24" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="4" y="34" width="24" height="8" rx="1"></rect></g></svg>'},318:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M63 14a1 1 0 011 1v28a1 1 0 01-1 1H5a1 1 0 01-1-1V15a1 1 0 011-1h58zm0 1H5v28h58V15z" fill="#363636" fill-rule="nonzero"></path><path fill="#6A6A6A" fill-rule="nonzero" d="M16 20h44v2H16zM13.055 19.16l-2.662 2.623-1.448-1.433a.56.56 0 00-.783 0 .546.546 0 000 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.158l2.951-2.906a.546.546 0 000-.775.56.56 0 00-.783 0zM13.055 27.16l-2.662 2.623-1.448-1.433a.56.56 0 00-.783 0 .546.546 0 000 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.158l2.951-2.906a.546.546 0 000-.775.56.56 0 00-.783 0zM13.055 35.16l-2.662 2.623-1.448-1.433a.56.56 0 00-.783 0 .546.546 0 000 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.158l2.951-2.906a.546.546 0 000-.775.56.56 0 00-.783 0zM16 28h44v2H16zM16 36h44v2H16z"></path><rect fill="#6A6A6A" fill-rule="nonzero" x="4" y="4" width="60" height="8" rx="2"></rect><path fill="#181818" d="M55 6h6l-3 4zM7 7h46v2H7z"></path></g></svg>'},319:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><defs><filter id="a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.415686 0 0 0 0 0.415686 0 0 0 0 0.415686 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M63 14a1 1 0 011 1v28a1 1 0 01-1 1H5a1 1 0 01-1-1V15a1 1 0 011-1h58zm0 1H5v28h58V15z" fill="#363636" fill-rule="nonzero"></path><path fill="#6A6A6A" fill-rule="nonzero" d="M16 20h44v2H16z"></path><g filter="url(#a)"><path d="M13.055 19.16l-2.662 2.623-1.448-1.433a.56.56 0 00-.783 0 .546.546 0 000 .776l1.733 1.715c.117.116.325.168.498.158.173.007.381-.046.494-.158l2.951-2.906a.546.546 0 000-.775.56.56 0 00-.783 0z" fill="#999" fill-rule="nonzero"></path></g><path fill="#363636" fill-rule="nonzero" d="M16 28h44v2H16zM16 36h44v2H16z"></path><rect fill="#6A6A6A" fill-rule="nonzero" x="4" y="4" width="60" height="8" rx="2"></rect><path fill="#181818" d="M55 6h6l-3 4zM7 7h46v2H7z"></path></g></svg>'},320:function(e,t){e.exports='<svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#363636" fill-rule="nonzero" x="32" y="24" width="15" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="49" y="24" width="15" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="4" y="24" width="26" height="8" rx="1"></rect><rect fill="#6A6A6A" x="4" y="4" width="19" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="4" y="14" width="34" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="45" y="4" width="15" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="25" y="4" width="18" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="40" y="14" width="24" height="8" rx="1"></rect><rect fill="#363636" fill-rule="nonzero" x="4" y="34" width="24" height="8" rx="1"></rect></g></svg>'},321:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13.132 5.853c.476 0 .888.079 1.238.237.35.158.637.373.86.645.224.272.392.593.504.963.112.37.168.767.168 1.192v3.38c0 .26.007.535.021.824.014.288.04.525.077.71h-1.19a5.604 5.604 0 01-.111-1.11h-.042a2.733 2.733 0 01-.916.963c-.369.229-.805.343-1.309.343-.26 0-.534-.04-.818-.122a2.225 2.225 0 01-.776-.4 2.165 2.165 0 01-.581-.735c-.154-.305-.23-.68-.23-1.127 0-.587.134-1.053.405-1.396a2.56 2.56 0 011.063-.783c.438-.18.933-.297 1.483-.351.55-.055 1.105-.082 1.665-.082v-.212c0-.577-.15-1.004-.448-1.282-.298-.277-.695-.416-1.189-.416-.373 0-.725.084-1.056.253a2.687 2.687 0 00-.833.645l-.7-.98c.327-.359.726-.642 1.197-.849.471-.207.977-.31 1.518-.31zM5.554 2l4.253 11.56H8.24l-1.007-2.842h-4.7l-.994 2.841H0L4.295 2h1.26zm9.089 8.114h-.322c-.326 0-.664.017-1.014.05-.35.032-.667.097-.952.195-.284.098-.52.245-.706.441-.187.196-.28.457-.28.784 0 .228.04.419.12.571.078.152.183.278.314.376.13.098.275.166.434.204.158.038.321.057.49.057.615 0 1.088-.215 1.42-.645.33-.43.496-.971.496-1.625v-.408zm-9.76-6.236l-1.861 5.42h3.707l-1.846-5.42z" fill="#FFF" fill-rule="nonzero"></path></svg>'},322:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M2.5 10a.5.5 0 110 1h-2a.5.5 0 110-1h2zm9 0a.5.5 0 110 1h-6a.5.5 0 110-1h6zm-9-3a.5.5 0 010 1h-2a.5.5 0 010-1h2zm9 0a.5.5 0 110 1h-6a.5.5 0 010-1h6zm-9-3a.5.5 0 010 1h-2a.5.5 0 010-1h2zm9 0a.5.5 0 110 1h-6a.5.5 0 010-1h6zm-9-3a.5.5 0 010 1h-2a.5.5 0 010-1h2zm9 0a.5.5 0 110 1h-6a.5.5 0 010-1h6z" fill="#000"></path></g></svg>'},323:function(e,t){e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z"></path><path d="M11.5 10a.5.5 0 110 1H.5a.5.5 0 110-1h11zm-8-3a.5.5 0 010 1h-3a.5.5 0 010-1h3zm8-3a.5.5 0 110 1H.5a.5.5 0 010-1h11zm-8-3a.5.5 0 010 1h-3a.5.5 0 010-1h3z" fill="#000"></path></g></svg>'},36:function(e,t){e.exports=a},38:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},46:function(e,t){e.exports=l},67:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32"><path d="M16.492 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 21.333a2 2 0 11.001 3.999 2 2 0 01-.001-3.999zm0-2.666a2 2 0 01-2-2v-8a2 2 0 114 0v8a2 2 0 01-2 2z"></path></svg>'},676:function(e,t,s){var i={"./style_date_picker.svg":312,"./style_date_time_picker.svg":313,"./style_double_date_picker.svg":314,"./style_double_date_time_picker.svg":315,"./style_icon.svg":316,"./style_multiple_pill_wrap_selector.svg":317,"./style_multiple_select.svg":318,"./style_simple_select.svg":319,"./style_unique_pill_wrap_selector.svg":320};function a(e){var t=l(e);return s(t)}function l(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=l,e.exports=a,a.id=676},78:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.598L14.308.29a.991.991 0 011.402 1.402L9.402 8l6.308 6.308a.991.991 0 01-1.402 1.402L8 9.402 1.692 15.71A.991.991 0 01.29 14.308L6.598 8 .29 1.692A.991.991 0 011.692.29L8 6.598z" fill="#000" fill-rule="nonzero"></path></svg>'},88:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.5H.75a.75.75 0 110-1.5h6.5V.75A.75.75 0 018 0z" fill="#000" fill-rule="evenodd"></path></svg>'},92:function(e,t){e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 13a.5.5 0 010-1h4a.5.5 0 010 1h-4zM0 8.5a.5.5 0 00.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zM.5 5a.5.5 0 010-1h11a.5.5 0 010 1H.5zM.5 1a.5.5 0 110-1h15a.5.5 0 010 1H.5z" fill="#000"></path></svg>'},93:function(e,t){e.exports='<svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.5 0a.5.5 0 000 1h4a.5.5 0 000-1h-4zM0 4.5A.5.5 0 01.5 4h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM.5 8a.5.5 0 000 1h11a.5.5 0 000-1H.5zM.5 12a.5.5 0 000 1h15a.5.5 0 000-1H.5z" fill="#000"></path></svg>'},988:function(e,t,s){"use strict";s.r(t),s.d(t,"SqlExpressionBuilder",(function(){return _})),s.d(t,"SqlExpressionBuilderPopup",(function(){return P})),s.d(t,"Sort",(function(){return $}));var i={};s.r(i),s.d(i,"SqlExpressionBuilder",(function(){return l})),s.d(i,"SqlExpressionClause",(function(){return o})),s.d(i,"SqlExpressionClauseSet",(function(){return n})),s.d(i,"InputEditorTypeSelector",(function(){return r})),s.d(i,"Sort",(function(){return p}));var a=s(0);function l(e){return a.css`
    &.use-scroll{
      height: 100%;
      .sql-expression-builder{
          height: 100%;
          .sql-expression-container{
            height: 100%;
            .builder-btn-container{
              padding-right: 2px;
            }
            .sql-expression-list{
              padding-right: 2px;
              height: calc(100% - 43px);
              overflow-y: auto;
            }
          }
      }
    }

    .sql-expression-builder {
      padding: 5px;
      .no-data-tip{
        text-align: center;
      }

      .builder-btn-container{
        display: flex;
        margin: 0 0 15px 0;
        .add-button-container{
          margin-left: auto;
        }
      }
      .add-button-container{
        display: flex;
      }
    }
    
    &.small-mode,
    &.medium-mode{
      .sql-expression-builder .sql-expression-clause{
        display: block;
        .clause-controllers-container{
          width: 100%;
          margin-left: 0;
        }

      }
    }

    &.small-mode{ /* 350px */
      .sql-expression-builder{
        padding: 0;
        .sql-expression-container{
          min-width: 300px;
          overflow-x: auto;
          .builder-btn-container{
            margin-bottom: 10px;
          }
          .sql-expression-single{
            padding: 0.25rem 1rem 0.5rem 1rem;
            margin-bottom: 0.5rem;
            .clause-main-container{
              display: block !important;

              .clause-field-and-operator{
                margin: 0.5rem 0 !important;
                justify-content: space-between;
                .clause-field-container, .clause-operator-container{
                  margin: 0;
                  width: calc(50% - 0.25rem);
                }
              }
              .clause-style-container{
                width: 100%;
                margin: 0.5rem 0 !important;
              }
            }
          }
          .sql-expression-set{
            .btn-container{
              padding: 0.5rem 1rem 0.5rem 1rem;
            }
            .sql-expression-single{
              margin-bottom: 0;
            }
          }
          .add-button-container{
            align-content: space-between;
            .jimu-btn{
              width: calc(50% - 7px);
            }
          } 
        }
      }
    }
    &.medium-mode{ /* 350px - 614px */
      .sql-expression-builder{
        .clause-field-container,
        .clause-operator-container{
          width: 123px;
        }
        .clause-style-container{
        }
      }
    }
    &.large-mode{ /* 915px */
      .sql-expression-builder{
        .clause-field-container,
        .clause-operator-container{
          width: 150px;
        }
        .clause-style-container{
          width: 380px;
        }
      }
    }

  `}function o(e){const t=e.theme;return a.css`
    .sql-expression-single {
      background-color: ${t.colors.palette.light[400]};
      padding: 13px 5px;
      margin-bottom: 0.5rem;

      .sql-expression-clause{
        display: flex;

        .clause-main-container{
          display: flex;
          .clause-field-and-operator{
            display: flex;
            .clause-field-container,
            .clause-operator-container{
              margin: 0 4px;
            }
          }

          .clause-style-container{
            display: flex;
            flex-grow: 1;
            margin: 0 4px;
            .source-type-selector{
              margin-right: 8px;
              .jimu-btn{
                border: none;
              }
            }
          }
        }
  
        .clause-controllers-container{
          width: 150px;
          margin-left: 12px;
          margin-right: 1px;
          display: flex;
          justify-content: flex-end;
  
          .case-sensitive-btn, .more-input-setting-btn, .duplicate-btn, .delete-btn{
            margin: 0 2px;
            .jimu-badge{
              border-color: ${t.colors.black};
            }
          }
  
          .case-sensitive-btn.disabled, .case-sensitive-btn.disabled:hover, .case-sensitive-btn:disabled:hover{
            background: ${t.colors.secondary};
            background-color: ${t.colors.palette.light[400]};
            border: none;
          }
          .case-sensitive-btn:disabled .jimu-icon, .more-input-setting-btn:disabled .jimu-icon{
            opacity: 0.5;
          }
  
          /*temp for beta2*/
          .more-input-setting-btn-active,
          .dropdown-active {
            background-color: ${t.colors.primary} !important;
            color: ${t.colors.black} !important;
          }
        }
      }
  
      .ask-for-value-container{
        margin-top: 1.5rem;
        margin-left: 8px;
        .ask-for-value-radio{
          display: flex;
          margin: 10px 0;
        }
        .ask-for-value-options{
          margin-left: 20px;
          .ask-for-value-item{
            .ask-for-value-item-label{
              color: ${t.colors.palette.dark[400]};
              margin-bottom: 3px;
            }
          }
          .ask-for-value-middle-item{
            margin: 0 0.1rem;
          }
        }
      }
    }
  `}function n(e){const t=e.theme;return a.css`
    .sql-expression-set {
      margin-bottom: 0.5rem;
      background-color: ${t.colors.palette.light[400]};

      .btn-container{
        .jimu-btn{
          font-size: 12px;
        }
        display: flex;
        padding: 11px 5px 11px 10px;

        .and-or-container{
          margin: 0;
        }
        .add-button-container{
          margin-left: auto;
          margin-right: 0.125rem;
        }
      }

      .sql-expression-single{
        margin: 0;
        border-top: 2px solid ${t.colors.palette.light[300]};
        border-bottom: 2px solid ${t.colors.palette.light[300]};
      }
      .sql-expression-single:last-child{
        border-bottom: none;
      }

    }

  `}const r=e=>{const t=e.theme;return a.css`
    .style-button{
    }
    .style-warning{
      color: ${t.colors.palette.warning[500]};
    }
    .style-popper{
      .style-popper-content{
        width: 180px;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        max-height: 300px;
        height: auto;
        overflow: auto;

        .style-item{
          margin: 5px;
          padding: 0;
          background-color: ${t.colors.palette.light[200]};

          &.active {
            outline: 2px solid ${t.colors.palette.primary[500]};
          }
        }
      }

    }
  `},p=e=>{const t=e.theme,s=t.colors,{emptyHintTopSpaceSize:i}=e,l=i?a.polished.rem(i-16):a.polished.rem(70);return a.css`
    width:100%;
    .sort-title {
        margin-bottom: 20px;
        color: ${s.black};
        font-size: 16px;
    }
    .delete-all-button {
        cursor: pointer;
    }
    .jimu-tree-item__body {
        margin-bottom: 10px;
        background: ${s.palette.light[500]};
        padding: 10px 10px 10px 0;
        box-shadow: 0 0 0 2px ${a.polished.rgba(s.white,.3)};
        flex: 1;
    }
    .multi-sort-select-con {
        & {
            display: flex;
            align-items: center;
            flex: 1;
        }
        .sort-field-selector {
            background:${s.palette.secondary[200]};
            border-radius: 2px;
            flex: 1;
            width: 0
        }

        .delete-button {
            cursor: pointer;
            text-align:right;
            margin-left: ${a.polished.rem(6)};
        }
        .delete-button svg {
            margin-right:0;
        }
    }
    .delete-sort-con {
        & {
            margin-left:5px;
        }
        .sort-button-l {
            border-radius: 2px 0 0 2px;
            border-right:none;
        }
        .sort-button-r {
            border-radius: 0px 2px 2px 0px;
            border-left:none;
        }
        .sort-button {
            border-color: ${t.border.color};
        }
        svg {
            margin-right:0;
        }
    }
    .add-option .add-option-button{
        & {
            width:100%;
            font-size:14px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: ${a.polished.rem(16)};
        }
        svg {
            margin-right:0;
            margin-right:5px;
        }
    }
    .no-sort-remind {
        margin: ${l} auto 0;
        color: ${s.palette.light[800]};
        font-size: 13px;
        text-align: center;
    }
  `};var h=s(1),c=s(46),d=s(17);class u extends a.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}),this.onChange=e=>{this.props&&this.props.onChange(e.target.value)}}render(){const e=this.props.list?this.props.list:this.props.value?[this.props.value]:[];return a.React.createElement(h.Select,{value:this.props.value||"",onChange:this.onChange,size:"sm"},e.map((e,t)=>{const s=this.i18nMessage(Object(d.getCamelCase)(e));return a.React.createElement("option",{key:t,value:e,label:s},s)}))}}const g=Object(a.injectIntl)(u),m=s(311);class v extends a.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}),this.onTypeSelect=e=>{e!==this.props.sourceType&&this.props.onSelect(e)},this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})},this.state={isOpen:!1}}render(){return Object(a.jsx)("div",{className:"source-type-selector"},Object(a.jsx)(h.Dropdown,{activeIcon:!0},Object(a.jsx)(h.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"primary",title:this.i18nMessage("sourceType"),onClick:this.toggle,"data-toggle":"dropdown"},Object(a.jsx)(h.Icon,{icon:m,className:"text-dark dropdown-icon",size:16})),Object(a.jsx)(h.DropdownMenu,{showArrow:!0,strategy:"fixed",appendToBody:!1},Object(a.jsx)(h.DropdownItem,{header:!0},this.i18nMessage("sourceType")),this.props.list&&Object.keys(this.props.list).map((e,t)=>Object(a.jsx)(h.DropdownItem,{key:t,onClick:()=>{this.onTypeSelect(e)},active:this.props.sourceType===e},this.i18nMessage(Object(d.getCamelCase)(e)))))))}}var b=Object(a.injectIntl)(v);const x=s(67),y=[{name:"flip",enabled:!0}];class f extends a.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}),this.onTypeSelect=(e,t)=>{if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),t!==this.state.inputEditorType){if([d.ClauseInputEditor.UniquePillWrapSelector,d.ClauseInputEditor.MultiplePillWrapSelector].includes(t))if(this.props.codedValues)this.changeValueOptionByInputType(t,this.props.codedValues.length);else{const e={where:"(1=1)",returnGeometry:!1,outFields:[this.props.fieldName],returnDistinctValues:!0};this.props.dataSource.queryCount(e,{scope:a.QueryScope.InConfigView,widgetId:"check_count"}).then(e=>{this.changeValueOptionByInputType(t,e.count)})}else this.changeValueOptionByInputType(t)}else this.setState({isWarningShown:!1})},this.changeValueOptionByInputType=(e,t)=>{if(t&&t>20)this.setState({isWarningShown:!0});else{this.setState({inputEditorType:e});a.lodash.debounce(()=>{this.props.onSelect(e),this.toggle()},200)()}},this.toggle=()=>{this.setState({isWarningShown:!1,isOpen:!this.state.isOpen})},this.state={isOpen:!1,isWarningShown:!1,inputEditorType:this.props.inputEditorType}}componentDidUpdate(e,t){e.inputEditorType!==this.props.inputEditorType&&this.setState({inputEditorType:this.props.inputEditorType})}render(){return Object(a.jsx)("div",{className:Object(a.classNames)("d-flex style-type-selector align-items-center",this.props.className)},Object(a.jsx)("div",{className:"style-button",ref:e=>this.styleBtnRef=e},Object(a.jsx)(h.Button,{size:"sm",className:"pl-3 pr-3 text-nowrap",type:"primary",onClick:this.toggle,"aria-label":this.i18nMessage("chooseStyle")},this.i18nMessage("chooseStyle"))),this.state.isWarningShown&&Object(a.jsx)("div",{className:"style-warning ml-2"},Object(a.jsx)(h.Icon,{icon:x,size:14,className:"mr-2"}),this.i18nMessage("invalidStyleWarnning")),Object(a.jsx)(h.Popper,{strategy:"fixed",disablePortal:!0,reference:this.styleBtnRef,open:this.state.isOpen,toggle:this.toggle,showArrow:!0,a11yVersion:-1,className:this.props.className,modifiers:y},Object(a.jsx)("div",{className:"style-popper"},Object(a.jsx)("div",{className:"style-popper-content"},this.props.list.map((e,t)=>{const i=this.i18nMessage(Object(d.getCamelCase)(e));return Object(a.jsx)(h.Tooltip,{title:i,placement:"bottom",key:t},Object(a.jsx)(h.Button,{icon:!0,type:"tertiary","aria-label":i,onClick:t=>this.onTypeSelect(t,e),className:Object(a.classNames)("style-item",{active:this.state.inputEditorType===e})},Object(a.jsx)(h.Icon,{className:"thumbnail",width:68,height:48,options:{currentColor:!1},icon:s(676)(`./style_${e.toLowerCase()}.svg`)})))})))))}}var j=a.themeUtils.withStyles(Object(a.injectIntl)(f),"InputEditorTypeSelector");const O=s(129),M=s(176),C=s(78),z=s(321),S=s(322),w=s(323),A=[a.ClauseSourceType.SingleSelectFromUnique,a.ClauseSourceType.MultipleSelectFromUnique];class T extends a.React.PureComponent{constructor(e){super(e),this.getFieldObj=()=>{const e=this.props.dataSource.getSchema().fields;this.fieldObj=this.props.clause.jimuFieldName?Object(a.Immutable)(e[this.props.clause.jimuFieldName]):null},this._updateTwoStates=(e,t,s)=>{this._updateCaseSensitiveState(e,t),this._updateAskForValueState(e,t),s&&this.setState({rerender:!this.state.rerender})},this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}),this.isCascadeSupported=()=>A.includes(this.props.clause.valueOptions.sourceType),this.getOperatorsByField=e=>{let t=[];return e&&e.type&&(t=Object(d.getOperatorsByShortType)(e.type,this.props.isHosted)),t},this.deleteClause=()=>{this.props.onChange(null)},this.toggleCaseSensitive=()=>{this.onChanged({caseSensitive:!this.props.clause.caseSensitive})},this.duplicateClause=()=>{this.props.onChange(this.props.clause,!0)},this.toggleValueLabelPanel=()=>{this.setState({isValueLabelPanelShown:!this.state.isValueLabelPanelShown})},this.getLabel=()=>{let e="";if(this.props.clause.operator){const t=this.i18nMessage(Object(d.getCamelCase)(this.props.clause.operator));e=Object(d.getClauseLabel)(this.props.clause,this.fieldObj,t)}return e},this.onAskForValueOptsChange=e=>{const t=Object.assign({},this.props.clause.askForValueOptions,e);this.onChanged({askForValueOptions:t})},this.onLabelBlur=(e,t)=>{if(t&&""===e)return this.labelRef=null,void this.onChanged({displayLabel:null});const s=this.i18nMessage(Object(d.getCamelCase)(this.props.clause.operator)),i=e===Object(d.getClauseDefaultLabel)(this.props.clause,this.fieldObj,s)?null:e;t?this.onChanged({displayLabel:i}):this.onAskForValueOptsChange({label:i})},this.onLabelChange=e=>{""===e&&this.setState({rerender:!this.state.rerender})},this.setValueLabelStatus=e=>{let t={displayType:e,askForValueOptions:null,displayLabel:null};if(e===a.ClauseDisplayType.UseAskForValue)t.askForValueOptions=this.getAskForValueOptions();else{const e=this.props.clause.valueOptions,s=this.displayTypeList[e.sourceType][0];if(e.inputEditor!==s){const e=Object.assign({},this.props.clause.valueOptions,{inputEditor:s});t=Object.assign({},t,{valueOptions:e})}}this.onChanged(t)},this.getAskForValueOptions=(e=!1)=>({label:null,display:a.ClauseLabelDisplay.Block,hint:"",cascade:e||this.isCascadeSupported()?a.ClauseCascade.None:null}),this.onFieldChange=e=>{const t=e[0];if(!t)return;this.fieldObj=Object(a.Immutable)(t);const s=this._updateOptionsByField(t);this._updateTwoStates(this.operatorList[0],s.sourceType),this.onChanged({jimuFieldName:t.jimuName,operator:this.operatorList[0],caseSensitive:!1,displayType:a.ClauseDisplayType.None,askForValueOptions:null,displayLabel:null,valueOptions:s})},this._updateOptionsByField=(e,t)=>(this.operatorList=this.getOperatorsByField(e),t=t||this.operatorList[0],this._updateOptionsByOperator(e,t,e.jimuName)),this.onOperatorChange=e=>{const t=this._updateOptionsByOperator(this.fieldObj,e,this.fieldObj.jimuName);this._updateTwoStates(e,t.sourceType);const s=this.shouldOpenAskForValueAutomatically(t.sourceType);this.onChanged({operator:e,caseSensitive:!1,displayType:s?a.ClauseDisplayType.UseAskForValue:a.ClauseDisplayType.None,askForValueOptions:s?this.getAskForValueOptions(s):null,displayLabel:null,valueOptions:t})},this._updateOptionsByOperator=(e,t,s)=>{const i=Object(d.getDisplayTypes)(this.props.mode,e,t,this.props.dataSource,s);return this.displayTypeList=i.displayTypes,this.codedValues=i.codedValues,Object(d.getDefaultClauseValObj)(i.defaultSourceType,i.defaultInputEditorType)},this.onValueOptsChange=e=>{e.inputEditor!==this.props.clause.valueOptions.inputEditor&&(e.inputEditor=this.props.clause.valueOptions.inputEditor),this.onChanged({valueOptions:e})},this.isUniqueOrMultipleOnOutputDS=e=>{const t=this.props.dataSource.getDataSourceJson().isOutputFromWidget,s=[a.ClauseSourceType.SingleSelectFromUnique,a.ClauseSourceType.MultipleSelectFromUnique].includes(e);return t&&s},this.isOutputDsAndNoCodedValuesWhenUniqueOrMultiple=e=>this.isUniqueOrMultipleOnOutputDS(e)&&!this.codedValues,this.shouldOpenAskForValueAutomatically=e=>[a.ClauseSourceType.SingleSelectFromPredefined,a.ClauseSourceType.MultipleSelectFromPredefined].includes(e)||this.isUniqueOrMultipleOnOutputDS(e),this.onSourceTypeSelect=e=>{let t="";Object.keys(this.displayTypeList).some(s=>{if(s===e)return t=this.displayTypeList[s][0],!0}),this._updateAskForValueState(this.props.clause.operator,e);const s=Object(d.getDefaultClauseValObj)(e,t),i=this.shouldOpenAskForValueAutomatically(e);this.onChanged({valueOptions:s,displayType:i?a.ClauseDisplayType.UseAskForValue:a.ClauseDisplayType.None,askForValueOptions:i?this.getAskForValueOptions(i):null,displayLabel:null})},this.onInputTypeSelect=e=>{this.onChanged({valueOptions:Object.assign({},this.props.clause.valueOptions,{inputEditor:e})})},this.getValueOptions=()=>{const e=this.props.clause.valueOptions;if(this.displayTypeList&&this.displayTypeList[e.sourceType]){const t=this.displayTypeList[e.sourceType][0];if(this.fieldObj.type===a.JimuFieldType.Date&&e.sourceType===a.ClauseSourceType.UserInput)return e;if(e.inputEditor!==t)return Object.assign({},e,{inputEditor:t})}return e},this.getControllers=(e,t)=>{const s=!this.props.isHosted&&t&&e.caseSensitive;return Object(a.jsx)("div",{className:"clause-controllers-container"},this.state.supportCaseSensitive&&Object(a.jsx)(h.Button,{className:"case-sensitive-btn",onClick:this.toggleCaseSensitive,icon:!0,size:"sm",type:"tertiary",disabled:!(!this.props.isHosted&&t),title:this.i18nMessage("caseSensitive"),"aria-label":this.i18nMessage("caseSensitive"),"aria-checked":s},Object(a.jsx)(h.Badge,{dot:!0,color:"primary",hideBadge:!s},Object(a.jsx)(h.Icon,{size:12,icon:z}))),this.props.mode===a.SqlExpressionMode.All&&Object(a.jsx)(h.Button,{type:"tertiary",onClick:this.toggleValueLabelPanel,icon:!0,size:"sm",className:Object(a.classNames)("more-input-setting-btn",{"more-input-setting-btn-active":this.state.isValueLabelPanelShown}),title:this.i18nMessage("moreInputSettings"),"aria-label":this.i18nMessage("moreInputSettings"),"aria-checked":e.displayType!==a.ClauseDisplayType.None,"aria-expanded":this.state.isValueLabelPanelShown},Object(a.jsx)(h.Badge,{dot:!0,color:"primary",hideBadge:e.displayType===a.ClauseDisplayType.None},Object(a.jsx)(h.Icon,{size:12,icon:O}))),Object(a.jsx)(h.Button,{type:"tertiary",onClick:this.duplicateClause,icon:!0,size:"sm",className:"duplicate-btn",title:this.i18nMessage("duplicate"),"aria-label":this.i18nMessage("duplicate")},Object(a.jsx)(h.Icon,{size:12,icon:M})),Object(a.jsx)(h.Button,{type:"tertiary",onClick:this.deleteClause,icon:!0,size:"sm",className:"delete-btn",title:this.i18nMessage("deleteClause"),"aria-label":this.i18nMessage("deleteClause")},Object(a.jsx)(h.Icon,{size:12,icon:C})))},this.isPredefinedWithNoValues=e=>{var t;return[a.ClauseSourceType.SingleSelectFromPredefined,a.ClauseSourceType.MultipleSelectFromPredefined].includes(e.valueOptions.sourceType)&&(!e.valueOptions.value||0===(null===(t=e.valueOptions.value)||void 0===t?void 0:t.length))},this.onChanged=e=>{let t=Object.assign({},this.props.clause,e),s=!0;if(this.isPredefinedWithNoValues(t)?s=!1:null!==t.askForValueOptions||t.operator.includes("BLANK")||(s=!(null===t.valueOptions.value||t.valueOptions.value.filter(e=>null===e||null===(null==e?void 0:e.value)).length>0)),s!==t.valueOptions.isValid){const e=Object(d.getDefaultClauseValObj)(t.valueOptions.sourceType,t.valueOptions.inputEditor,t.valueOptions.value,s);t=Object.assign({},t,{valueOptions:e})}this.props.onChange(t)},this.state={rerender:!1,supportCaseSensitive:!1,supportAskForValue:!1,isValueLabelPanelShown:!1},this._isMounted=!1,this.getFieldObj(),this.labelRef=null,this.codedValues=this.props.clause&&this.fieldObj?this.getCodedValues():null}getCodedValues(){return Object(d.getInputEditorListByOperatorAndSourceType)(this.props.clause.operator,this.props.clause.valueOptions.sourceType,this.props.dataSource,this.fieldObj.jimuName).codedValues}componentDidMount(){this._isMounted=!1,this.props.clause.operator&&(this._updateOptionsByField(this.fieldObj,this.props.clause.operator),this._updateTwoStates(this.props.clause.operator,this.props.clause.valueOptions.sourceType,!0))}componentDidUpdate(e,t){if(this._isMounted)return;const s=this.props.clause.jimuFieldName!==e.clause.jimuFieldName,i=this.props.clause.operator!==e.clause.operator;if(s&&(this.getFieldObj(),this.operatorList=this.getOperatorsByField(this.fieldObj)),s||i){const e=Object(d.getDisplayTypes)(this.props.mode,this.fieldObj,this.props.clause.operator,this.props.dataSource,this.fieldObj.jimuName);this.displayTypeList=e.displayTypes,this.codedValues=e.codedValues,this._updateTwoStates(this.props.clause.operator,this.props.clause.valueOptions.sourceType,!0)}}componentWillMount(){this._isMounted=!0}_updateCaseSensitiveState(e,t){const s=Object(d.isCaseSensitiveSupportedByOperatorAndSourceType)(e,t);this.setState({supportCaseSensitive:s})}_updateAskForValueState(e,t){const s=Object(d.isAskForValueSupportedByOperatorAndSourceType)(e,t);this.setState({supportAskForValue:s})}render(){var e,t,s,i,l,o;const{clause:n}=this.props,r=this.getLabel(),p=""===(null===(e=this.labelRef)||void 0===e?void 0:e.value)?"":r,u=!n.operator||!n.operator.includes("BLANK"),m=this.shouldOpenAskForValueAutomatically(null===(t=n.valueOptions)||void 0===t?void 0:t.sourceType);return Object(a.jsx)("div",{className:this.props.className?this.props.className:""},Object(a.jsx)("div",{className:"sql-expression-single"},Object(a.jsx)("div",{className:"sql-expression-clause"},this.props.sizeMode!==d.SqlExpressionSizeMode.Large&&this.getControllers(n,u),Object(a.jsx)("div",{className:"w-100 clause-main-container"},Object(a.jsx)("div",{className:"clause-field-and-operator"},Object(a.jsx)("div",{className:"clause-field-container"},Object(a.jsx)(c.FieldSelector,{dataSources:[this.props.dataSource],getDefaultField:e=>{!this.fieldObj&&this.onFieldChange([e])},onChange:this.onFieldChange,selectedFields:this.fieldObj?Object(a.Immutable)([this.fieldObj.jimuName]):null,isDataSourceDropDownHidden:!0,isSearchInputHidden:!0,useDropdown:!0,dropdownProps:{size:"sm"}})),Object(a.jsx)("div",{className:"clause-operator-container"},Object(a.jsx)(g,{onChange:this.onOperatorChange,value:n.operator,list:this.operatorList}))),Object(a.jsx)("div",{className:"clause-style-container"},u&&Object(a.jsx)(b,{onSelect:this.onSourceTypeSelect,list:this.displayTypeList,sourceType:n.valueOptions.sourceType}),u&&Object(a.jsx)(d.InputEditorRender,{onChange:this.onValueOptsChange,dataSource:this.props.dataSource,codedValues:this.codedValues,valueOptions:this.getValueOptions(),fieldObj:this.fieldObj,runtime:!1,isSmallSize:this.props.sizeMode===d.SqlExpressionSizeMode.Small})),this.props.sizeMode===d.SqlExpressionSizeMode.Large&&this.getControllers(n,u))),this.state.isValueLabelPanelShown&&Object(a.jsx)("div",{className:"ask-for-value-container"},Object(a.jsx)("div",{className:"ask-for-value-radio d-flex mr-4"},Object(a.jsx)(h.Label,{check:!0},Object(a.jsx)(h.Radio,{style:{cursor:"pointer"},className:"mr-2 align-text-bottom",onChange:e=>this.setValueLabelStatus(a.ClauseDisplayType.None),checked:n.displayType!==a.ClauseDisplayType.UseAskForValue,disabled:m}),this.i18nMessage("unAskForValues"))),n.displayType!==a.ClauseDisplayType.UseAskForValue&&Object(a.jsx)("div",{className:"ask-for-value-options d-flex align-items-center mt-2"},Object(a.jsx)(h.Label,{check:!0},Object(a.jsx)(h.Checkbox,{style:{cursor:"pointer"},className:"mr-2",checked:n.displayType===a.ClauseDisplayType.UseLabel,onChange:e=>this.setValueLabelStatus(e.target.checked?a.ClauseDisplayType.UseLabel:a.ClauseDisplayType.None)}),this.i18nMessage("displayLabel")),n.displayType===a.ClauseDisplayType.UseLabel&&Object(a.jsx)("div",{className:"ml-2 w-25"},Object(a.jsx)(h.TextInput,{"aria-label":this.i18nMessage("displayLabel"),type:"text",value:p,ref:e=>this.labelRef=e,onChange:e=>this.onLabelChange(e.target.value),size:"sm",onBlur:e=>this.onLabelBlur(e.target.value,!0)}))),Object(a.jsx)("div",{className:"d-flex align-items-center"},this.state.supportAskForValue&&Object(a.jsx)("div",{className:"ask-for-value-radio d-flex"},Object(a.jsx)(h.Label,{check:!0},Object(a.jsx)(h.Radio,{style:{cursor:"pointer"},className:"mr-2 align-text-bottom",onChange:()=>this.setValueLabelStatus(a.ClauseDisplayType.UseAskForValue),checked:n.displayType===a.ClauseDisplayType.UseAskForValue,disabled:m}),this.i18nMessage("askForValues"))),this.state.supportAskForValue&&n.displayType===a.ClauseDisplayType.UseAskForValue&&this.displayTypeList&&this.displayTypeList[n.valueOptions.sourceType].length>1&&!this.isOutputDsAndNoCodedValuesWhenUniqueOrMultiple(n.valueOptions.sourceType)&&Object(a.jsx)("div",{className:"ask-for-value-item ask-for-value-middle-item ml-5"},Object(a.jsx)(j,{onSelect:this.onInputTypeSelect,inputEditorType:n.valueOptions.inputEditor,list:this.displayTypeList[n.valueOptions.sourceType],fieldName:null===(s=this.fieldObj)||void 0===s?void 0:s.name,codedValues:this.codedValues,dataSource:this.props.dataSource}))),this.state.supportAskForValue&&n.displayType===a.ClauseDisplayType.UseAskForValue&&Object(a.jsx)("div",{className:"ask-for-value-options d-flex"},Object(a.jsx)(h.Label,{className:"ask-for-value-item col-md-3 p-1"},Object(a.jsx)("div",{className:"ask-for-value-item-label"},this.i18nMessage("label")),Object(a.jsx)("div",{className:"d-flex"},Object(a.jsx)(h.TextInput,{type:"text",value:r,size:"sm",onChange:e=>{this.onLabelBlur(e.target.value)}}),Object(a.jsx)(h.ButtonGroup,{className:"label-display-buttons pl-1"},Object(a.jsx)(h.Button,{onClick:()=>{this.onAskForValueOptsChange({display:a.ClauseLabelDisplay.Block})},icon:!0,size:"sm",disabled:""===r,title:this.i18nMessage("inlineLabel"),"aria-label":this.i18nMessage("inlineLabel"),type:(null===(i=n.askForValueOptions)||void 0===i?void 0:i.display)===a.ClauseLabelDisplay.Block?"primary":"default"},Object(a.jsx)(h.Icon,{size:16,icon:w,autoFlip:!0})),Object(a.jsx)(h.Button,{onClick:()=>{this.onAskForValueOptsChange({display:a.ClauseLabelDisplay.Inline})},icon:!0,size:"sm",disabled:""===r,title:this.i18nMessage("separateLabel"),"aria-label":this.i18nMessage("separateLabel"),type:(null===(l=n.askForValueOptions)||void 0===l?void 0:l.display)&&(null===(o=n.askForValueOptions)||void 0===o?void 0:o.display)!==a.ClauseLabelDisplay.Inline?"default":"primary"},Object(a.jsx)(h.Icon,{size:16,icon:S,autoFlip:!0}))))),Object(a.jsx)(h.Label,{className:"ask-for-value-item ask-for-value-middle-item col-md-3 p-1"},Object(a.jsx)("div",{className:"ask-for-value-item-label"},this.i18nMessage("hint")),Object(a.jsx)(h.TextInput,{type:"text",value:n.askForValueOptions?n.askForValueOptions.hint:"",size:"sm",onBlur:e=>{this.onAskForValueOptsChange({hint:e.target.value})}})),this.isCascadeSupported()&&Object(a.jsx)(h.Label,{className:"ask-for-value-item col-md-5 p-1"},Object(a.jsx)("div",{className:"ask-for-value-item-label",title:this.i18nMessage("cascade")},this.i18nMessage("cascade")),Object(a.jsx)(h.Select,{size:"sm",value:n.askForValueOptions?n.askForValueOptions.cascade:a.ClauseCascade.None,onChange:e=>{this.onAskForValueOptsChange({cascade:e.target.value})}},Object(a.jsx)("option",{key:0,value:a.ClauseCascade.None},this.i18nMessage("noneCascadeTip")),Object(a.jsx)("option",{key:1,value:a.ClauseCascade.Previous},this.i18nMessage("previousCascadeTip")),Object(a.jsx)("option",{key:2,value:a.ClauseCascade.All},this.i18nMessage("allCascadeTip"))))))))}}var k=a.themeUtils.withStyles(Object(a.injectIntl)(T),"SqlExpressionClause");const N=s(88),L=s(176),V=s(78);class B extends a.React.PureComponent{constructor(e){super(e),this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}),this.addClause=e=>{e=a.Immutable.set(e,"__id",Object(a.uuidv1)()),this.onChange({parts:this.props.clauseSet.parts.concat(e)})},this.duplicateClauseSet=()=>{this.props.onChange(this.props.clauseSet,!0)},this.deleteClauseSet=()=>{this.props.onChange(null)},this.changeAndOR=e=>{this.onChange({logicalOperator:e})},this.onClauseChange=(e,t,s)=>{if(s)return void this.addClause(e);const i=this.props.clauseSet.parts,l={};null===e&&2===i.length&&(l.logicalOperator=a.ClauseLogic.And),2===i.length&&2===i.filter(e=>""===e.jimuFieldName).length?(l.parts=Object(d.getClauseArrayByChange)(i,e,"clause_set_clause_0"),e.__id=e.__id+"-2",l.parts=Object(d.getClauseArrayByChange)(l.parts,e,"clause_set_clause_1")):l.parts=Object(d.getClauseArrayByChange)(i,e,t),this.onChange(l)},this.onChange=e=>{const t=Object.assign({},this.props.clauseSet,e);this.props.onChange(t)},this.LogicalOperator=null}render(){const{logicalOperator:e,parts:t}=this.props.clauseSet,s=t||Object(a.Immutable)([]);return Object(a.jsx)("div",{className:this.props.className?this.props.className:""},0===s.length?null:Object(a.jsx)("div",{className:"sql-expression-set"},Object(a.jsx)("div",{className:"btn-container"},s.length<2?null:Object(a.jsx)(h.ButtonGroup,{className:"and-or-container"},Object(a.jsx)(h.Button,{"aria-label":this.i18nMessage("and"),"aria-checked":e===a.ClauseLogic.And,onClick:()=>{this.changeAndOR(a.ClauseLogic.And)},size:"sm",type:e===a.ClauseLogic.And?"primary":"secondary"},this.i18nMessage("and")),Object(a.jsx)(h.Button,{"aria-label":this.i18nMessage("or"),"aria-checked":e===a.ClauseLogic.Or,onClick:()=>{this.changeAndOR(a.ClauseLogic.Or)},className:"ml-0",size:"sm",type:e===a.ClauseLogic.Or?"primary":"secondary"},this.i18nMessage("or"))),Object(a.jsx)("div",{className:"add-button-container"},Object(a.jsx)(h.Button,{type:"tertiary",onClick:e=>this.addClause(Object(d.getDefaultSingleClause)()),className:"mr-1",icon:!0,size:"sm",title:this.i18nMessage("addClause"),"aria-label":this.i18nMessage("addClause")},Object(a.jsx)(h.Icon,{icon:N,size:12})),Object(a.jsx)(h.Button,{type:"tertiary",onClick:e=>this.duplicateClauseSet(),className:"mr-1",icon:!0,size:"sm",title:this.i18nMessage("duplicate"),"aria-label":this.i18nMessage("duplicate")},Object(a.jsx)(h.Icon,{icon:L,size:12})),Object(a.jsx)(h.Button,{type:"tertiary",onClick:this.deleteClauseSet,icon:!0,size:"sm",title:this.i18nMessage("deleteClauseSet"),"aria-label":this.i18nMessage("deleteClauseSet")},Object(a.jsx)(h.Icon,{icon:V,size:12})))),s.map((e,t)=>Object(a.jsx)(k,{key:e.__id,clause:e,isHosted:this.props.isHosted,mode:this.props.mode,sizeMode:this.props.sizeMode,dataSource:this.props.dataSource,onChange:(e,s)=>this.onClauseChange(e,"clause_set_clause_"+t,s)}))))}}var F=a.themeUtils.withStyles(Object(a.injectIntl)(B),"SqlExpressionClauseSet");const I=s(88);class D extends a.React.PureComponent{constructor(e){var t;super(e),this.getDataSource=()=>{const e=this.props.dataSource;return e.dataViewId===a.CONSTANTS.SELECTION_DATA_VIEW_ID?e.getMainDataSource():e},this.i18nMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}),this.addClauseByType=(e,t)=>{t||(t=e?Object(d.getDefaultSingleClause)():Object(d.getDefaultClauseSet)(),t=this.getPartsArray(Object(a.Immutable)([t]),"add")[0]);const s=this.state.partsArray.concat(t);this.setState({partsArray:s});const i=s.length<2?{parts:s,logicalOperator:a.ClauseLogic.And}:{parts:s};this.onChange(i)},this.changeAndOR=e=>{this.onChange({logicalOperator:e})},this.onClauseChange=(e,t,s)=>{if(s){const t=this.getPartsArray(Object(a.Immutable)([e]),"update")[0];return void this.addClauseByType(e.type===a.ClauseType.Single,t)}const i=Object(d.getClauseArrayByChange)(this.state.partsArray,e,t);this.setState({partsArray:i}),this.onChange({parts:i})},this.onChange=e=>{let t=this.props.expression||Object(a.Immutable)({logicalOperator:a.ClauseLogic.And,parts:[]});if(e.parts){const s=this.getPartsArray(e.parts,"remove");t=t.set("parts",s)}e.logicalOperator&&(t=t.set("logicalOperator",e.logicalOperator));const s=a.dataSourceUtils.getArcGISSQL(t,this.getDataSource());s.sql===t.sql&&s.displaySQL===t.displaySQL||(t=t.set("sql",s.sql).set("displaySQL",s.displaySQL)),this.props.onChange&&this.props.onChange(t)},this.getPartsArray=(e,t)=>e.map(e=>{var s;if((e=this._getNewClauseOrClauseSet(e,t).clause).type===a.ClauseType.Set){let i=!1;const a=null===(s=(e=e).parts)||void 0===s?void 0:s.map(e=>{const s=this._getNewClauseOrClauseSet(e,t);return i=s.isUpdated||i,s.clause});i&&(e=e.set("parts",a))}return e}),this._getNewClauseOrClauseSet=(e,t)=>{let s=!0;return"remove"===t?e=a.Immutable.without(e,"__id"):"update"===t?e=a.Immutable.set(e,"__id",Object(a.uuidv1)()):e.__id?s=!1:e=a.Immutable.set(e,"__id",Object(a.uuidv1)()),{clause:e,isUpdated:s}},this.onResize=e=>{let t=d.SqlExpressionSizeMode.Medium;e<600?t=d.SqlExpressionSizeMode.Small:e>900&&(t=d.SqlExpressionSizeMode.Large),this.setState({sizeMode:t})},this.toggle=()=>{this.setState({isOpen:!this.state.isOpen})};const s=this.getDataSource();s&&(this.isHosted=a.dataSourceUtils.isHostedService(s.url)),this.state={sizeMode:d.SqlExpressionSizeMode.Large,isOpen:!1,partsArray:this.getPartsArray((null===(t=this.props.expression)||void 0===t?void 0:t.parts)||Object(a.Immutable)([]),"add")}}render(){var e;const t=(null===(e=this.props.expression)||void 0===e?void 0:e.logicalOperator)||a.ClauseLogic.And,s=this.props.mode?this.props.mode:a.SqlExpressionMode.All,i=this.getDataSource();return Object(a.jsx)("div",{className:Object(a.classNames)(this.props.className,{"use-scroll":!this.props.noScrollForList,"small-mode":this.state.sizeMode===d.SqlExpressionSizeMode.Small,"medium-mode":this.state.sizeMode===d.SqlExpressionSizeMode.Medium,"large-mode":this.state.sizeMode===d.SqlExpressionSizeMode.Large})},Object(a.jsx)(h.QueryScopeContext.Provider,{value:{scope:this.props.queryScope||a.QueryScope.InConfigView,widgetId:this.props.widgetId}},Object(a.jsx)("div",{style:this.props.style,className:"sql-expression-builder"},i?Object(a.jsx)("div",{className:"sql-expression-container"},Object(a.jsx)("div",{className:"builder-btn-container",style:{justifyContent:this.state.partsArray.length<2?"flex-end":"space-between"}},this.state.partsArray.length<2?null:Object(a.jsx)(h.ButtonGroup,{className:"and-or-container"},Object(a.jsx)(h.Button,{"aria-label":this.i18nMessage("and"),"aria-checked":t===a.ClauseLogic.And,onClick:()=>{this.changeAndOR(a.ClauseLogic.And)},className:"ml-0",type:t===a.ClauseLogic.And?"primary":"default"},this.i18nMessage("and")),Object(a.jsx)(h.Button,{"aria-label":this.i18nMessage("or"),"aria-checked":t===a.ClauseLogic.Or,onClick:()=>{this.changeAndOR(a.ClauseLogic.Or)},className:"ml-0",type:t===a.ClauseLogic.Or?"primary":"default"},this.i18nMessage("or"))),this.state.sizeMode===d.SqlExpressionSizeMode.Small?Object(a.jsx)(h.Dropdown,{activeIcon:!0},Object(a.jsx)(h.DropdownButton,{"aria-label":this.i18nMessage("add"),arrow:!1,size:"sm",type:"default","data-toggle":"dropdown",onClick:this.toggle},Object(a.jsx)(h.Icon,{icon:I,className:"text-dark dropdown-icon",size:12}),this.i18nMessage("add")),Object(a.jsx)(h.DropdownMenu,{alignment:"end",strategy:"fixed",appendToBody:!1},Object(a.jsx)(h.DropdownItem,{"aria-label":this.i18nMessage("clause"),onClick:()=>this.addClauseByType(!0)},this.i18nMessage("clause")),Object(a.jsx)(h.DropdownItem,{"aria-label":this.i18nMessage("clauseSet"),onClick:()=>this.addClauseByType()},this.i18nMessage("clauseSet")))):Object(a.jsx)("div",{className:"add-button-container"},Object(a.jsx)(h.Button,{className:"pl-5 pr-5","aria-label":this.i18nMessage("addClause"),onClick:()=>this.addClauseByType(!0)},Object(a.jsx)(h.Icon,{icon:I,className:"mr-1",size:12}),this.i18nMessage("addClause")),Object(a.jsx)(h.Button,{className:"ml-2 pl-5 pr-5","aria-label":this.i18nMessage("addClauseSet"),onClick:()=>this.addClauseByType()},Object(a.jsx)(h.Icon,{icon:I,className:"mr-1",size:12}),this.i18nMessage("addClauseSet")))),Object(a.jsx)("div",{className:"sql-expression-list"},Object(a.jsx)(a.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.onResize}),0===this.state.partsArray.length?Object(a.jsx)("div",{className:"no-data-tip"},this.i18nMessage("noClauseTip")):this.state.partsArray.map((e,t)=>e.type===a.ClauseType.Single?Object(a.jsx)(k,{key:e.__id,clause:e,isHosted:this.isHosted,mode:s,sizeMode:this.state.sizeMode,dataSource:i,onChange:(e,s)=>this.onClauseChange(e,"clause_"+t,s)}):Object(a.jsx)(F,{key:e.__id,clauseSet:e,isHosted:this.isHosted,mode:s,sizeMode:this.state.sizeMode,dataSource:i,onChange:(e,s)=>this.onClauseChange(e,"clause_set_"+t,s)})))):Object(a.jsx)("div",{className:"no-data-tip"},this.i18nMessage("noDataTip")))))}}var _=a.themeUtils.withStyles(Object(a.injectIntl)(D),"SqlExpressionBuilder"),H=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(s[i[a]]=e[i[a]])}return s};const q=s(67);class E extends a.React.PureComponent{constructor(e){super(e),this.externalDsStyle={maxWidth:"960px"},this.handleToggle=e=>{if(void 0===e)return;this.setState({isOpen:!1});const{toggle:t,isOpen:s}=this.props;void 0!==s&&t&&t(e)},this.handleOkBtn=()=>{Object(d.isSqlExpressionValid)(this.state.expression)?this.handleToggle(!0):this.setState({isValid:!1})},this.handleCancelBtn=()=>{this.setState({isValid:!0,expression:this.props.expression}),this.handleToggle(!1)},this.onModalClose=()=>{this.props.expression!==this.state.expression&&this.props.onChange&&this.props.onChange(this.state.expression)},this.i18nMessage=e=>{const{intl:t}=this.props;return t?t.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}):""},this.onChange=e=>{this.setState({isValid:!0,expression:e})},this.state={isValid:!0,isOpen:!!e.isOpen,expression:this.props.expression}}componentDidUpdate(e,t){this.props.expression!==e.expression&&this.setState({expression:this.props.expression})}render(){let{isOpen:e}=this.props;e=void 0===e?this.state.isOpen:e;const t=this.props.intl.formatMessage({id:"ok",defaultMessage:a.defaultMessages.ok}),s=this.props.intl.formatMessage({id:"cancel",defaultMessage:a.defaultMessages.cancel}),i=this.props,{expression:l}=i,o=H(i,["expression"]);return Object(a.jsx)("div",null,Object(a.jsx)(h.Modal,{onClosed:this.onModalClose,backdrop:"static",centered:!0,isOpen:e,toggle:()=>this.handleToggle(void 0),className:"sql-expression-builder-modal",contentClassName:"border-0 h-100",style:this.externalDsStyle,returnfocusafterclose:"true",size:"lg"},Object(a.jsx)(h.ModalHeader,{tag:"h4",toggle:this.handleCancelBtn},this.i18nMessage("builderName")),Object(a.jsx)(h.ModalBody,null,Object(a.jsx)("div",null,Object(a.jsx)(_,Object.assign({},o,{expression:this.state.expression,noScrollForList:!0,onChange:this.onChange})))),Object(a.jsx)(h.ModalFooter,null,Object(a.jsx)("div",{className:"m-0 w-100 d-block"},!this.state.isValid&&Object(a.jsx)("div",{style:{color:this.props.theme.colors.palette.danger[700],fontSize:this.props.theme.sizes[3],marginTop:"-32px",marginBottom:"8px"}},Object(a.jsx)(h.Icon,{icon:q,size:18,color:this.props.theme.colors.palette.danger[700],className:"mr-2"}),this.i18nMessage("sqlExprIncomplete")),Object(a.jsx)("div",{className:"d-flex"},Object(a.jsx)(h.Button,{"aria-label":t,type:"primary",onClick:this.handleOkBtn,className:"ml-auto mr-2",style:{minWidth:"64px"}},t),Object(a.jsx)(h.Button,{"aria-label":s,type:"secondary",onClick:this.handleCancelBtn,style:{minWidth:"64px"}},s))))))}}var P=a.themeUtils.withTheme(Object(a.injectIntl)(E)),R=s(36);class U extends a.React.PureComponent{constructor(e){super(e),this.onOptionChange=(e,t,s)=>{const i=this.deepClone(this.props.value);i[e][t]=s,this.props.onSortButtonClick?this.props.onSortButtonClick(i,e):this.props.onChange(i,e)},this.onSelectChange=(e,t)=>{const s=e[0];if(!s)return;const i=this.deepClone(this.props.value),a=s.name;i[t].jimuFieldName=a,this.props.onSelect?this.props.onSelect(i,t):this.props.onChange(i,t)},this.addOption=()=>{const e=Array.isArray(this.props.value),t=this.deepClone(this.state.option),s=e?this.deepClone(this.props.value):[];s.push(t),this.props.onAddOption?this.props.onAddOption(s):this.props.onChange(s)},this.delecteOption=e=>{const t=this.deepClone(this.props.value);t.splice(e,1),this.props.onDelete?this.props.onDelete(t):this.props.onChange(t)},this.deepClone=e=>{const t=Array.isArray(e)?[]:{};for(const s in e){const i=("object"==typeof e[s]||"function"==typeof e[s])&&null!==e[s];t[s]=i?this.deepClone(e[s]):e[s]}return t},this.createOptionElement=(e,t,i)=>{const l=this.props.value[i].jimuFieldName?Object(a.Immutable)([this.props.value[i].jimuFieldName]):Object(a.Immutable)([]),o=()=>this.onOptionChange(i,"order",t.order==a.OrderRule.Asc?a.OrderRule.Desc:a.OrderRule.Asc);return Object(a.jsx)("div",{className:"multi-sort-select-con"},this.props.useDataSource&&Object(a.jsx)("div",{className:"sort-field-selector text-truncate"},Object(a.jsx)(c.FieldSelector,{useDataSources:e,onChange:(e,t)=>{this.onSelectChange(e,i)},selectedFields:l,isSearchInputHidden:!0,isDataSourceDropDownHidden:!0,useDropdown:!0})),Object(a.jsx)("div",{className:"delete-sort-con"},t.order==a.OrderRule.Asc&&Object(a.jsx)("div",{className:"delete-button",title:this.nls("ascending"),onClick:o},Object(a.jsx)(h.Icon,{size:"12",icon:s(93),className:"sort-arrow-down-icon"})),t.order==a.OrderRule.Desc&&Object(a.jsx)("div",{className:"delete-button",title:this.nls("decending"),onClick:o},Object(a.jsx)(h.Icon,{size:"12",icon:s(92),className:"sort-arrow-down-icon"}))),Object(a.jsx)("div",{className:"delete-button",title:this.nls("deleteOption"),onClick:()=>{this.delecteOption(i)}},Object(a.jsx)(h.Icon,{size:"12",icon:s(38),className:"sort-arrow-down-icon"})))},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:h.defaultMessages[e]}):e,this.onDataSourceCreated=e=>{},this.state={option:{jimuFieldName:"",order:a.OrderRule.Asc}}}render(){const{value:e}=this.props,t=this.props.intl.formatMessage({id:"invalidExpression",defaultMessage:h.defaultMessages.invalidExpression});return Object(a.jsx)("div",{className:Object(a.classNames)("multi-sort",{[this.props.className]:!!this.props.className})},Object(a.jsx)("div",{className:"add-option"},Object(a.jsx)(h.Button,{className:"add-option-button",onClick:this.addOption,title:this.props.intl.formatMessage({id:"addSortBtntext",defaultMessage:h.defaultMessages.addSortBtntext})},Object(a.jsx)(h.Icon,{size:"12",icon:s(88),className:"sort-arrow-down-icon"}),this.props.intl.formatMessage({id:"addSortBtntext",defaultMessage:h.defaultMessages.addSortBtntext}))),Object(a.jsx)(a.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated},s=>Array.isArray(this.props.value)?Object(a.jsx)(R.List,{className:"setting-ui-unit-list",itemsJson:e.asMutable({deep:!0}).map((e,t)=>({itemStateDetailContent:e,itemKey:""+t})),dndEnabled:!0,onDidDrop:(e,t)=>{const{itemJsons:[,s]}=t.props;this.props.onChange(s.map(e=>e.itemStateDetailContent))},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:R.TreeItemActionType.RenderOverrideItem,children:[{name:R.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:R.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:R.TreeItemActionType.RenderOverrideItemBody,children:[{name:R.TreeItemActionType.RenderOverrideItemDragHandle},{name:R.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,t)=>{var s;const{itemJsons:i}=t.props,l=i[0],o=i[1];return this.createOptionElement(Object(a.Immutable)([null===(s=this.props.useDataSource)||void 0===s?void 0:s.asMutable({deep:!0})]),l.itemStateDetailContent,o.indexOf(l))}}):t),Array.isArray(e)&&0==e.length&&Object(a.jsx)("div",{className:"no-sort-remind"},Object(a.jsx)("div",null,this.props.intl.formatMessage({id:"noSortRemindText",defaultMessage:h.defaultMessages.noSortRemindText})),Object(a.jsx)("div",null,this.props.intl.formatMessage({id:"pleaceAddOne",defaultMessage:h.defaultMessages.pleaceAddOne}))))}}const $=a.themeUtils.withStyles(Object(a.injectIntl)(U),"Sort");a.ThemeManager.getInstance().registerJimuThemeStyleModule("jimu-ui/advanced/sql-expression-builder/",{componentStyles:i})}}))}}}));