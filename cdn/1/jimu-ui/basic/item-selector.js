System.register(["jimu-core","jimu-core/emotion","jimu-theme","jimu-ui"],function(e,t){var s={},i={},o={},r={};return{setters:[function(e){s.DataSourceTypes=e.DataSourceTypes,s.Immutable=e.Immutable,s.React=e.React,s.SessionManager=e.SessionManager,s.SupportedItemTypes=e.SupportedItemTypes,s.classNames=e.classNames,s.css=e.css,s.dataSourceUtils=e.dataSourceUtils,s.dateUtils=e.dateUtils,s.defaultMessages=e.defaultMessages,s.esri=e.esri,s.focusElementInKeyboardMode=e.focusElementInKeyboardMode,s.getAppStore=e.getAppStore,s.injectIntl=e.injectIntl,s.lodash=e.lodash,s.moduleLoader=e.moduleLoader,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.proxyUtils=e.proxyUtils,s.requestUtils=e.requestUtils,s.utils=e.utils},function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){o.registerStyles=e.registerStyles,o.withStyles=e.withStyles},function(e){r.AdvancedSelect=e.AdvancedSelect,r.Button=e.Button,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.Icon=e.Icon,r.Link=e.Link,r.Loading=e.Loading,r.LoadingType=e.LoadingType,r.Nav=e.Nav,r.NavItem=e.NavItem,r.NavLink=e.NavLink,r.PanelHeader=e.PanelHeader,r.Popper=e.Popper,r.Select=e.Select,r.TextInput=e.TextInput,r.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={1888:e=>{"use strict";e.exports=o},4073:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m7 11.5 5.354-5.354-.708-.707L7 10.086 4.354 7.439l-.708.707z"></path><path fill="#000" fill-rule="evenodd" d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m15 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0" clip-rule="evenodd"></path></svg>'},9451:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13 4s-2.267-.168-3-.5c-.385-.174-.628-.478-.86-.767C8.837 2.353 8.554 2 8 2s-.837.353-1.14.733c-.232.289-.475.593-.86.767-.734.332-3 .5-3 .5s.077 3.846 1 6c.87 2.03 4 4 4 4s3.13-1.97 4-4c.923-2.154 1-6 1-6m-5 8.791a17 17 0 0 0 1.032-.796c.875-.733 1.713-1.606 2.049-2.389.4-.932.638-2.306.771-3.522.048-.44.081-.845.103-1.18l-.306-.038a16 16 0 0 1-1.065-.167c-.326-.064-.701-.154-.996-.288-.626-.283-1.032-.8-1.25-1.078l-.078-.1c-.214-.26-.248-.24-.258-.234L8 3l-.002-.001c-.01-.006-.044-.025-.258.235l-.079.1c-.217.276-.623.794-1.249 1.077-.295.134-.67.224-.996.288a16 16 0 0 1-1.371.204c.022.336.055.74.103 1.18.133 1.217.372 2.591.771 3.523.336.783 1.174 1.656 2.05 2.389.384.322.749.595 1.031.796" clip-rule="evenodd"></path></svg>'},14321:e=>{"use strict";e.exports=r},14962:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},20800:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13 4s-2.267-.168-3-.5c-.385-.174-.628-.478-.86-.767C8.837 2.353 8.554 2 8 2s-.837.353-1.14.733c-.232.289-.475.593-.86.767-.734.332-3 .5-3 .5s.077 3.846 1 6c.87 2.03 4 4 4 4s.288-.181.713-.49a3.5 3.5 0 0 0 3.916-5.788C12.963 5.862 13 4 13 4m-1.299 3.212c.061-.38.11-.761.151-1.128.048-.44.081-.845.103-1.18l-.306-.038a16 16 0 0 1-1.065-.167c-.326-.064-.701-.154-.996-.288-.626-.283-1.032-.8-1.25-1.078l-.078-.1c-.214-.26-.248-.24-.258-.234L8 3l-.002-.001c-.01-.006-.044-.025-.258.235l-.079.1c-.217.276-.623.794-1.249 1.077-.295.134-.67.224-.996.288a16 16 0 0 1-1.371.204c.022.336.055.74.103 1.18.133 1.217.372 2.591.771 3.523.336.783 1.174 1.656 2.05 2.389.241.202.475.385.685.543a3.5 3.5 0 0 1 4.047-5.327M13 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></path></svg>'},22185:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2V4a2 2 0 0 1 2-2h8a2 2 0 0 0-2-2z"></path><path fill="#000" fill-rule="evenodd" d="M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm5.489 2.938Q10.31 5.759 8.66 6.062a.402.402 0 0 0-.212.68l1.619 1.618a.4.4 0 0 1 0 .569l-1.138 1.138a.4.4 0 0 1-.569 0L6.742 8.448a.402.402 0 0 0-.68.212q-.303 1.65.876 2.829a3.22 3.22 0 0 0 3.532.688l1.588 1.587a.805.805 0 0 0 1.137 0l.57-.569a.805.805 0 0 0 0-1.137l-1.588-1.588a3.22 3.22 0 0 0-.688-3.532" clip-rule="evenodd"></path></svg>'},39524:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062m-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643zM6.244 10.6H5.43zM.961 9.8h4.88c.211 0 .359.19.359.4q0 .207.045.4a1.8 1.8 0 0 0 3.51 0h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755q.045-.194.045-.4c0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356z" clip-rule="evenodd"></path></svg>'},40784:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m5.003 4.404.778.778a.5.5 0 1 0 .707-.707l-2.12-2.122a.5.5 0 0 0-.708.708l.63.63A4.48 4.48 0 0 0 3.307 6.5c0 .515.087 1.01.246 1.47a10 10 0 0 0 1.014-.144 3.5 3.5 0 0 1-.26-1.326c0-.786.26-1.512.697-2.096M7.806 3c-.396 0-.778.066-1.134.188l-.767-.768A4.5 4.5 0 0 1 7.806 2c1.477 0 2.787.711 3.608 1.81q-.346.39-.702.738A3.5 3.5 0 0 0 7.806 3m-1.76 6.525q-.666.188-1.276.296a4.5 4.5 0 0 0 2.536 1.152V13h-1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-1.5v-2.027a4.5 4.5 0 0 0 3.952-5.14 15 15 0 0 1-.958.881 3.5 3.5 0 0 1-5.255 2.811m7.348-6.307a.49.49 0 0 1 .123.691c-3.456 4.73-8.25 5.903-10.712 5.872a.47.47 0 0 1-.453-.523.537.537 0 0 1 .544-.476c2.197.003 6.592-1.072 9.796-5.438a.514.514 0 0 1 .702-.126" clip-rule="evenodd"></path></svg>'},45508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},48799:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#181818" d="M1.998 8.5V16h1V8.5h1v-1h-1V0h-1v7.5h-1v1zM7.998 0v3.5h-1v1h1V16h1V4.5h1v-1h-1V0zM13.998 11.5V0h1v11.5h1v1h-1V16h-1v-3.5h-1v-1z"></path></svg>'},50170:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},54578:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1zM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z"></path></svg>'},56499:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},67386:e=>{"use strict";e.exports=i},76219:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M6 1.5a.5.5 0 1 0-1 0v12.158L1.207 9.06a.5.5 0 1 0-.76.652l4.146 5.008A.8.8 0 0 0 6 14.2zm4 13a.5.5 0 1 0 1 0V2.342l3.794 4.598a.5.5 0 1 0 .759-.652L11.407 1.28A.8.8 0 0 0 10 1.8z" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=s},85007:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.751a2 2 0 0 0-.495-1.317L12.098.683A2 2 0 0 0 10.592 0zm3.325 3.077Q8.388 2.7 9.861 4.172a4.02 4.02 0 0 1 .86 4.416l1.985 1.984c.392.393.392 1.03 0 1.422l-.712.712a1.006 1.006 0 0 1-1.422 0L8.588 10.72a4.02 4.02 0 0 1-4.416-.86Q2.7 8.388 3.077 6.325a.503.503 0 0 1 .85-.265L5.95 8.083a.503.503 0 0 0 .711 0l1.422-1.422a.503.503 0 0 0 0-.71L6.06 3.926a.503.503 0 0 1 .265-.85" clip-rule="evenodd"></path></svg>'},96300:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M15 7.5a.52.52 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.51.51 0 0 1-.73 0L1 7.5l4.743-4.846a.51.51 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527"></path></svg>'},97213:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z" clip-rule="evenodd"></path></svg>'},98427:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15 3.5v9c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5v-9C1 1.567 4.134 0 8 0s7 1.567 7 3.5M2 5.304V6.5C2 7.692 4.615 9 8 9s6-1.308 6-2.5V5.304C12.775 6.32 10.546 7 8 7s-4.775-.68-6-1.696M8 10c2.546 0 4.775-.68 6-1.696V9.5c0 1.192-2.615 2.5-6 2.5s-6-1.308-6-2.5V8.304C3.225 9.32 5.454 10 8 10m6 1.304C12.775 12.32 10.546 13 8 13s-4.775-.68-6-1.696V12.5C2 13.692 4.615 15 8 15s6-1.308 6-2.5zM14 3.5C14 4.692 11.385 6 8 6S2 4.692 2 3.5 4.615 1 8 1s6 1.308 6 2.5" clip-rule="evenodd"></path></svg>'}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{"use strict";a.r(l),a.d(l,{DataBadge:()=>D,ItemCategory:()=>z,ItemDetail:()=>G,ItemList:()=>xe,ItemSelector:()=>Ke,ItemSelectorMode:()=>B,ItemTypeCategory:()=>V,ItemTypes:()=>s.SupportedItemTypes,SortField:()=>R,SortOrder:()=>U,_ItemSelector:()=>qe});var e={};a.r(e),a.d(e,{DataBadge:()=>n,ItemDetail:()=>r,ItemList:()=>i,ItemSelector:()=>o});var t=a(1888),s=a(79244);function i(e){const t=e.theme;return s.css`
    .modal-dialog{
      max-width: auto;
    }

    .two-line-truncate{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
      word-wrap: break-word;
    }

    .loading-container{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .empty-placeholder{
      padding: ${s.polished.rem(16)};
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .empty-placeholder-text, .empty-placeholder-icon{
        display: table;
        margin: 0 auto;
      }
      .empty-placeholder-text{
        color: ${t.sys.color.surface.paperHint};
        font-size: ${s.polished.rem(14)};
        margin-top: 16px;
        text-align: center;
      }
      .empty-placeholder-icon{
        color: ${t.sys.color.surface.paperHint};
      }
    }

    .mt13{
      margin-top: ${s.polished.rem(13)};
    }

    .mt10{
      margin-top: ${s.polished.rem(10)};
    }

    .ds-thumbnail{
      width:  ${s.polished.rem(18)};
      height:  ${s.polished.rem(18)};
      background-color: #0095DB;
      .ds-thumbnail-icon {
        color: #FFFFFF;
      }
    }

    .ds-type{
      font-size: ${s.polished.rem(13)};
      color: ${t.ref.palette.neutral[1100]};
      max-width: ${s.polished.rem(168)};
    }

    .component-item-list{
      width: 100%;
      height: 100%;
      padding: 0;
      position: relative;

      .detail-reference {
        width: 0;
        height: 100%;
        display: inline;
      }

      .list-container{
        overflow-x: hidden;
        overflow-y: auto;
        padding-top: 0.25rem;
      }

      .item-card-container{
        &:hover{
          border-color: transparent !important;
        }
      }

      .item-card-container.item-border-transparent{
        border: ${s.polished.rem(1)} solid transparent;
      }

      .item-badge-container{
        position: absolute;
        top: ${s.polished.rem(8)};
        left: ${s.polished.rem(8)};
      }

      .item-active-icon, .item-part-active-icon{
        position: absolute;
        top: -2px;
        right: -2px;

        .item-active-icon-container, .item-part-active-icon-container{
          width: ${s.polished.rem(26)};
          height: ${s.polished.rem(26)};
          line-height: ${s.polished.rem(26)};
          color: ${t.ref.palette.white};
          background-color: ${t.sys.color.primary.light};
        }

        .item-part-active-icon-container{
          padding: ${s.polished.rem(3)};
        }
      }

      .item-part-active-icon-container{
        .item-part-active-icon-inner-box{
          width: ${s.polished.rem(18)};
          height: ${s.polished.rem(18)};
          background-color: ${t.ref.palette.white};
          >div{
            width: ${s.polished.rem(12)};
            height: ${s.polished.rem(12)};
            border-radius: ${s.polished.rem(1)};
            background-color: ${t.sys.color.primary.light};
          }
        }
      }

      &.all-mode{
        @media only screen and (max-width: 1210px){
          .item-list{
            width: 540px;
          }
        }

        @media only screen and (min-width: 1210px){
          .item-list{
            width: 810px;
          }
        }

        @media only screen and (min-width: 1480px){
          .item-list{
            width: 1080px;
          }
        }

        @media only screen and (min-width: 1750px){
          .item-list{
            width: 1350px;
          }
        }

        @media only screen and (min-width: 2020px){
          .item-list{
            width: 1620px;
          }
        }

        @media only screen and (min-width: 2290px){
          .item-list{
            width: 1890px;
          }
        }

        @media only screen and (min-width: 2560px){
          .item-list{
              width: 2160px;
          }
        }

        @media only screen and (min-width: 2830px){
          .item-list{
              width: 2430px;
          }
        }

        @media only screen and (min-width: 3100px){
          .item-list{
              width: 2700px;
          }
        }

        .item-list{
          display: flex;
          flex-wrap: wrap;
          margin-left: -0.5rem;
          margin-right: -0.5rem;
          overflow: visible;
          min-width: ${s.polished.rem(540)};

          .item{
            width: ${s.polished.rem(240)};
            margin: 0 ${s.polished.rem(15)} ${s.polished.rem(30)} ${s.polished.rem(15)};

            .item-border-color-transparent{
              border: 2px solid transparent;
              .item-card{
                border: 0;
              }
              &:hover{
                border-color: ${t.sys.color.action.selected.default};
                .item-card{
                  border-color: transparent !important;
                }
              }
            }
            .item-border-color-selected{
              border: 2px solid ${t.sys.color.action.selected.default};
              .item-card{
                border-color: transparent !important;
              }
            }
            .item-border-color-disabled{
              border: 2px solid ${t.sys.color.divider.secondary};
              &:hover{
                border-color: ${t.sys.color.divider.secondary};
              }
            }
            .item-background-color-disabled{
              background-color: ${t.sys.color.divider.secondary};
            }

            .item-card-container{
              padding-bottom: 122%;
              position: relative;
              overflow: hidden;

              .item-card{
                position: absolute;
                background-color: ${t.sys.color.secondary.main};

                .item-info-container{
                  padding: ${s.polished.rem(12)};
                }

                .item-info-icon{
                  cursor: pointer;
                  margin-right: -4px;
                }

                .item-sub-label{
                  width: calc(100% - 30px);
                  font-size: ${s.polished.rem(13)};
                  color: ${t.sys.color.surface.overlayText};
                }

                .item-label{
                  font-size: ${s.polished.rem(16)};
                  line-height: ${s.polished.rem(20)};
                  color: ${t.sys.color.surface.overlayText};
                  height: ${s.polished.rem(40)};
                }

                .item-thumbnail{
                  background-size: 100% 100%;
                  background-position: top center;
                  cursor: pointer;
                  height: 56%;
                }
              }
            }
          }
        }
      }

      &.simple-mode{
        .item-list, .item{
          width: 100%;
        }

        .item-border-color-transparent{
          border: 1px solid transparent;
          .item-card{
            border: 0;
          }
          &:hover{
            border-color: ${t.sys.color.action.selected.default};
            .item-card{
              border-color: transparent !important;
            }
          }
        }
        .item-border-color-selected{
          border: 1px solid ${t.sys.color.action.selected.default};
          .item-card{
            border-color: transparent !important;
          }
        }
        .item-border-color-disabled{
          border-color: ${t.sys.color.divider.secondary};
          &:hover{
            border-color: ${t.sys.color.divider.secondary};
          }
        }

        .component-item-detail{
          border: 0 !important;
        }
        .item-detail-page-container{
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          background-color: ${t.ref.palette.neutral[400]};
          .item-detail-container {
            height: calc(100% - 100px);
          }
          .add-btn {
            background-color: ${t.ref.palette.neutral[500]};
            box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
            height: 64px;
            position: absolute;
            bottom: 0;
          }
        }
        .item-card{
          position: relative;
          background-color: ${t.sys.color.surface.overlay};
          color: ${t.sys.color.surface.overlayText};
          border: 1px solid ${t.sys.color.divider.secondary} !important;
          padding: 0;
          .item-line-1{
            padding: 7px;
          }
          .item-line-2 {
            padding: 3px 7px;
            border-top: 1px solid ${t.sys.color.divider.secondary};
            .item-line-2-1 {
              width: calc(100% - 30px)
            }
          }
          .item-badge-container{
            position: absolute;
            top: ${s.polished.rem(8)};
            left: ${s.polished.rem(8)};
          }
          .item-active-icon{
            position: absolute;
            top: -1px;
            right: -1px;
            .item-active-icon-container{
              width: 0;
              height: 0;
              border-top: ${s.polished.rem(12)} ${t.sys.color.action.selected.default} solid;
              border-left: ${s.polished.rem(12)} transparent solid;
              background-color: transparent;
            }
            .item-active-icon-container.item-active-icon-disabled{
              border-top-color: ${t.sys.color.divider.secondary};
            }
          }
          .item-thumbnail{
            width: 40px;
            height: 40px;
            background-size: cover;
            background-position: center;
          }
          .item-label{
            width: calc(100% - 40px);
            font-size: ${s.polished.rem(14)};
            color: ${t.sys.color.surface.overlayText};
          }
          .item-sub-label{
            width: calc(100% - 20px);
            font-size: ${s.polished.rem(13)};
            color: ${t.sys.color.surface.overlayText};
          }
        }
      }

    }

  `}function o(e){const t=e.theme;return s.css`
    .component-item-selector{
      .item-selector-search{
        .search-input::-ms-clear{
          display: none;
        }
      }

      &.all-mode{
        .item-list-container{
          height: calc(100% - 55px);
        }

        .category-container{
          height: calc(100% - 60px);
        }

        .item-selector-search{
          position: relative;
          margin-left: ${s.polished.rem(50)};
        }

        .search-input{
          min-width: ${s.polished.rem(120)};
          input {
            height: 32px;
            line-height: 32px;
          }
        }

        @media only screen and (max-width: 1490px){
          &,.search-input{
            width: 100%;
          }
        }

        @media only screen and (min-width: 1490px){
          &{
            width: auto;
          }
          .search-input{
            width: ${s.polished.rem(400)};
          }
        }

        @media only screen and (max-width: 1000px){
          margin-left: ${s.polished.rem(20)};
        }
      }

      &.simple-mode{
        .item-list-container{
          height: 100%;
        }
        .category-container{
          height: calc(100% - 116px);
        }
        .category-container-with-group-select {
          height: calc(100% - 144px);
        }
        .category-container-without-select{
          height: 100%;
          overflow: hidden;
        }
        .item-selector-search-container {
          width: 100%;
          margin-top: ${s.polished.rem(8)};
          margin-bottom: ${s.polished.rem(16)};
        }
        .item-selector-search {
          overflow: hidden;
          .search-input {
            font-size: ${s.polished.rem(13)};
            input {
              min-width: 0;
            }
          }
        }
      }

      .category-nav{
        .nav-item{
          .nav-link{
            .jimu-nav-link-wrapper{
              font-size: ${s.polished.rem(16)};
            }
          }
        }
        .nav-item.active-tab{
          .nav-link{
            border-bottom: 3px solid ${t.sys.color.primary.light};
            padding: 0;
            .jimu-nav-link-wrapper{
              color: ${t.ref.palette.black};
              font-weight: 500;
            }
          }
        }
      }

      .url-input-hint-label{
        font-size: ${s.polished.rem(12)};
        color: ${t.ref.palette.neutral[900]};
      }

      .font-size-12{
        font-size: ${s.polished.rem(12)};
      }

      .mt-30{
        margin-top: ${s.polished.rem(30)};
      }

      .mb-20{
        margin-bottom: ${s.polished.rem(20)};
      }

      .nav.nav-underline{
        border: 0;
        .nav-item:not(:last-child){
          @media only screen and (max-width: 1100px){
            &{
              margin-right: ${s.polished.rem(10)};
            }
          }
          @media only screen and (min-width: 1100px){
            &{
              margin-right: ${s.polished.rem(25)};
            }
          }
          @media only screen and (min-width: 1300px){
            &{
              margin-right: ${s.polished.rem(40)};
            }
          }
        }
      }

      .item-selector-sort{
        margin-right: -${s.polished.rem(16)};
        .item-selector-sort-by{
          color: ${t.ref.palette.neutral[900]};
          font-size: ${s.polished.rem(13)};
          height: ${s.polished.rem(32)};
          .item-selector-sort-select{
            width: ${s.polished.rem(140)};
            padding: 2px 6px;
            font-size: ${s.polished.rem(13)};
            height: ${s.polished.rem(26)};
          }
        }
      }
    }

  `}function r(e){const t=e.theme;return s.css`
  .component-item-detail{
    background: ${t.ref.palette.neutral[400]};
    overflow: auto;
    padding: 0 16px 16px 16px;
    border-left: 1px solid ${t.ref.palette.neutral[700]};
    border-right: 1px solid ${t.ref.palette.neutral[700]};
    .ml-12{
      margin-left: ${s.polished.rem(12)};
    }
    .container-fluid{
      padding: 0 !important;
    }
    z-index: 3;
    font-size: ${s.polished.rem(14)};
    .small-text{
      font-size: ${s.polished.rem(13)};
    }
    .html-container{
      word-wrap: break-word;
      *{
        font-size: ${s.polished.rem(14)} !important;
        font-weight: normal !important;
        font-family: inherit !important;
        background: ${t.ref.palette.neutral[400]} !important;
      }
      *:not(a):not(a *){
        color: ${t.ref.palette.black} !important;
      }
    }
    .item-header{
      height: 41px;
      border-bottom: 1px solid ${t.ref.palette.neutral[700]};
      height: ${s.polished.rem(45)};
      margin-left: -16px;
      margin-right: -16px;
      .item-header-title{
        font-size: 16px;
        line-height: 41px;
      }
    }
    .item-close{
      cursor: pointer;
      margin-right: -4px;
    }
    .item-img{
      img{
        width: 100%;
      }
    }
    .item-line{
      width: 100%;
      height: 1px;
      border-bottom: 1px solid ${t.ref.palette.neutral[700]};
    }
    .item-detail-title, .item-detail-title:hover, .item-detail-title:focus, .item-detail-title:active{
      text-decoration: underline;
      outline: none;
      box-shadow: 0 0 0 !important;
      border: 0 !important;
      font-size: 16px;
      white-space: normal !important;
      color: ${t.ref.palette.black};
      .item-detail-title-text{
        max-width: 290px;
      }
    }

    .ds-thumbnail{
      width:  ${s.polished.rem(18)};
      height:  ${s.polished.rem(18)};
      background-color: ${t.sys.color.info.main};
    }

    .ds-type{
      font-size: ${s.polished.rem(13)};
      color: ${t.ref.palette.neutral[1100]};
      max-width: ${s.polished.rem(168)};
    }
  }

  `}function n(e){const t=e.theme;return s.css`
    .badge{
      width: ${s.polished.rem(18)};
      height: ${s.polished.rem(18)};
      border-radius: ${s.polished.rem(9)};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 2px;
      svg{
        color: ${t.ref.palette.black};
      }
    }

    .auth{
      background-color: ${t.sys.color.success.dark};
    }

    .living-atlas, .premium, .subscriber{
      background-color: ${t.sys.color.info.main};
    }

  `}var d=a(67386),c=a(14321),p=a(4073),m=a.n(p),h=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const u=e=>{const t=window.SVG,{className:i}=e,o=h(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:m()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var g=a(40784),y=a.n(g),v=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const f=e=>{const t=window.SVG,{className:i}=e,o=v(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:y()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var x=a(9451),b=a.n(x),S=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const w=e=>{const t=window.SVG,{className:i}=e,o=S(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:b()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var j=a(20800),I=a.n(j),N=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const O=e=>{const t=window.SVG,{className:i}=e,o=N(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:I()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var M=function(e,t,s,i){return new(s||(s=Promise))(function(o,r){function a(e){try{n(i.next(e))}catch(e){r(e)}}function l(e){try{n(i.throw(e))}catch(e){r(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(a,l)}n((i=i.apply(e,t||[])).next())})};const C={};class $ extends s.React.PureComponent{constructor(e){super(e),this.__unmounted=!1,this.fetchItemInfo=(e,t,...i)=>M(this,[e,t,...i],void 0,function*(e,t,i=!0){if(!e||!t)return yield Promise.reject(new Error(null));const o=this.getCachePromiseId(e,t);return i&&C[o]||(C[o]=s.requestUtils.requestWrapper(t,i=>M(this,void 0,void 0,function*(){return yield s.esri.restPortal.getItem(e,{portal:s.portalUrlUtils.getPortalRestUrl(t),authentication:i})}))),yield C[o]}),this.getCachePromiseId=(e,t)=>`${t}-${e}`,this.state={item:null}}componentDidMount(){this.__unmounted=!1,!this.props.item&&this.props.itemId&&this.props.portalUrl&&this.fetchItemInfo(this.props.itemId,this.props.portalUrl).then(e=>{this.__unmounted||this.setState({item:e})})}componentDidUpdate(e,t){this.props.item||e.portalUrl===this.props.portalUrl&&e.itemId===this.props.itemId||this.fetchItemInfo(this.props.itemId,this.props.portalUrl,!1).then(e=>{this.__unmounted||this.setState({item:e})},()=>{this.__unmounted||this.setState({item:null})}),this.props.item&&this.setState({item:null})}componentWillUnmount(){this.__unmounted=!0}render(){var e,t;if(!this.props.item&&!this.props.url&&!this.state.item)return null;const i=this.props.item||this.state.item,o=s.proxyUtils.isPremium(i,this.props.url),r=s.proxyUtils.isSubscriber(i,this.props.url),a=(null===(t=null===(e=null==i?void 0:i.contentStatus)||void 0===e?void 0:e.toLowerCase())||void 0===t?void 0:t.indexOf("authoritative"))>-1||r,l="livingatlas"===(null==i?void 0:i.groupDesignations)||r,n=this.props.intl.formatMessage({id:"authoritativeBadgeTooltip",defaultMessage:c.defaultMessages.authoritativeBadgeTooltip}),p=this.props.intl.formatMessage({id:"livingAtlasBadgeTooltip",defaultMessage:c.defaultMessages.livingAtlasBadgeTooltip}),m=this.props.intl.formatMessage({id:"premiumBadgeTooltip",defaultMessage:c.defaultMessages.premiumBadgeTooltip}),h=this.props.intl.formatMessage({id:"subscriberBadgeTooltip",defaultMessage:c.defaultMessages.subscriberBadgeTooltip});return(0,d.jsxs)("div",{className:(0,s.classNames)("h-100 d-flex justify-content-center align-items-center",{[this.props.className]:!!this.props.className}),id:this.props.id,children:[a&&(0,d.jsxs)("div",{className:"auth badge",children:[(0,d.jsx)("span",{className:"sr-only",children:n}),(0,d.jsx)(u,{className:"auth-icon",size:"s",title:n,role:"img"})]}),l&&(0,d.jsxs)("div",{className:"living-atlas badge",children:[(0,d.jsx)("span",{className:"sr-only",children:p}),(0,d.jsx)(f,{className:"living-atlas-icon",size:"s",title:p,role:"img"})]}),o&&(0,d.jsxs)("div",{className:"premium badge",children:[(0,d.jsx)("span",{className:"sr-only",children:m}),(0,d.jsx)(O,{className:"premium-icon",size:"s",title:m,role:"img"})]}),r&&!o&&(0,d.jsxs)("div",{className:"subscriber badge",children:[(0,d.jsx)("span",{className:"sr-only",children:h}),(0,d.jsx)(w,{className:"subscriber-icon",size:"s",title:h,role:"img"})]})]})}}const T=(0,t.withStyles)((0,s.injectIntl)($),"DataBadge"),D=T,L=[s.SupportedItemTypes.GeocodingService,s.SupportedItemTypes.GeometryService,s.SupportedItemTypes.GeoprocessingService,s.SupportedItemTypes.NetworkAnalysisService];function k(e){var t,s;return L.includes(null==e?void 0:e.type)?(null===(s=null===(t=e.url)||void 0===t?void 0:t.replace(/\//g,""))||void 0===s?void 0:s.endsWith("GPServer"))?a(22185):a(85007):a(98427)}const P=s.dataSourceUtils.dataSourceJsonCreator,A=new(0,s.esri.Sanitizer);class F extends s.React.PureComponent{constructor(){super(...arguments),this.__unmount=!1,this.closeBtnRef=s.React.createRef(),this.onKeyDown=e=>{var t,i;"Esc"!==e.key&&"Escape"!==e.key||(e.target===this.closeBtnRef.current?null===(i=(t=this.props).onClose)||void 0===i||i.call(t):(0,s.focusElementInKeyboardMode)(this.closeBtnRef.current))}}render(){if(!this.props.item)return null;const e=s.SessionManager.getInstance().getSessionByUrl(this.props.portalUrl),t=this.props.item.thumbnail&&this.props.portalUrl?(null==e?void 0:e.token)?`${this.props.portalUrl.replace(/\/$/,"")}/sharing/rest/content/items/${this.props.item.id}/info/${this.props.item.thumbnail}?token=${e.token}`:`${this.props.portalUrl.replace(/\/$/,"")}/sharing/rest/content/items/${this.props.item.id}/info/${this.props.item.thumbnail}`:"Web Scene"===this.props.item.type?"https://static.arcgis.com/images/scene.png":"https://static.arcgis.com/images/desktopapp.png",i=this.props.item.id&&this.props.portalUrl?`${this.props.portalUrl.replace(/\/sharing\/rest/,"").replace(/\/$/,"")}/home/item.html?id=${this.props.item.id}`:null,{title:o,owner:r,modified:a,description:l,snippet:n}=this.props.item,p=A.sanitize(l),m=A.sanitize(n),h=this.props.item.id,u=P.createDataSourceJsonByItemInfo(h,this.props.item,this.props.portalUrl),g=s.dataSourceUtils.getDsTypeString(null==u?void 0:u.type,this.props.intl),y=`${h}-desc`;return(0,d.jsx)("div",{className:(0,s.classNames)("h-100",{[this.props.className]:!!this.props.className}),onKeyDown:this.onKeyDown,children:(0,d.jsxs)("div",{className:"h-100 component-item-detail",style:this.props.style,children:[!this.props.hideHeader&&(0,d.jsx)("div",{className:"item-header d-flex justify-content-between",children:(0,d.jsx)(c.PanelHeader,{level:1,className:"p-4",showClose:!!this.props.onClose,onClose:this.props.onClose,closeButtonRef:this.closeBtnRef,title:this.props.intl.formatMessage({id:"details",defaultMessage:c.defaultMessages.details})})}),(0,d.jsxs)("div",{className:"container-fluid",children:[(0,d.jsxs)(c.Link,{to:i,className:"col item-detail-title p-0 flex-column mt-4 d-inline-block",target:"_blank","aria-label":o,"aria-describedby":y,children:[(0,d.jsx)("div",{className:"item-img w-100",children:(0,d.jsx)("img",{src:t,alt:o})}),(0,d.jsx)("div",{className:"mt-2 mb-2 align-self-start",children:(0,d.jsx)("h5",{className:"w-100 text-truncate item-detail-title",title:o,children:o})})]}),(0,d.jsxs)("div",{className:"container-fluid",id:y,children:[(0,d.jsxs)("div",{className:"d-flex align-items-center w-100 mt-1",title:g,children:[(0,d.jsx)("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0 ds-thumbnail",children:(0,d.jsx)(c.Icon,{icon:u?s.dataSourceUtils.getDsIcon(u):k(this.props.item),className:"text-default",size:"12"})}),(0,d.jsx)("div",{className:"flex-grow-1 text-truncate pl-2 ds-type",children:(0,d.jsx)("div",{className:"text-truncate ds-type-name",children:g})})]}),(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("div",{className:"col small-text",children:this.props.intl.formatMessage({id:"ownerIs",defaultMessage:c.defaultMessages.ownerIs},{ownerName:r||""})})}),(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("div",{className:"col small-text",children:this.props.intl.formatMessage({id:"updatedOn",defaultMessage:c.defaultMessages.updatedOn},{updatedDate:s.dateUtils.formatDateValue(a,this.props.intl)})})}),(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("div",{className:"ml-12",children:(0,d.jsx)(T,{item:this.props.item})})}),(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("div",{className:"col item-line"})}),n&&(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("p",{className:"col html-container",dangerouslySetInnerHTML:{__html:m}})}),(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("h6",{className:"col",children:this.props.intl.formatMessage({id:"description",defaultMessage:c.defaultMessages.description})})}),(0,d.jsx)("div",{className:"row mt-2 mb-2",children:(0,d.jsx)("div",{className:"col html-container",dangerouslySetInnerHTML:{__html:p}})})]})]})]})})}}const G=(0,s.injectIntl)((0,t.withStyles)(F,"ItemDetail"));var z,R,U,B,V;!function(e){e.MyContent="MY_CONTENT",e.MyGroup="MY_GROUP",e.MyOrganization="MY_ORGANIZATION",e.Public="PUBLIC",e.LivingAtlas="LIVING_ATLAS",e.Curated="CURATED"}(z||(z={})),function(e){e.Modified="modified",e.Title="title",e.Views="numViews"}(R||(R={})),function(e){e.Desc="desc",e.Asc="asc"}(U||(U={})),function(e){e.Simple="SIMPLE",e.All="ALL"}(B||(B={})),function(e){e.FeatureLayer="Feature Layer",e.TileLayer="Tile Layer",e.MapImageLayer="Map Image Layer",e.ImageryLayer="Imagery Layer",e.SceneLayer="Scene Layer",e.TiledImageryLayer="Tiled Imagery Layer",e.ElevationLayer="Elevation Layer",e.Table="Table",e.LayerFiles="Layer Files",e.WebMap="Web Map",e.Scenes="Scenes",e.GeometricOperations="Geometric Operations",e.Locator="Locator",e.GeoprocessingTasks="Geoprocessing Tasks",e.NetworkAnalysis="Network Analysis",e.GroupLayer="Group Layer",e.OrientedImageryLayer="Oriented Imagery Layer"}(V||(V={}));var _=a(45508),E=a.n(_),W=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const H=e=>{const t=window.SVG,{className:i}=e,o=W(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:E()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var q=a(97213),K=a.n(q),J=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Q=e=>{const t=window.SVG,{className:i}=e,o=J(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:K()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var Y=function(e,t,s,i){return new(s||(s=Promise))(function(o,r){function a(e){try{n(i.next(e))}catch(e){r(e)}}function l(e){try{n(i.throw(e))}catch(e){r(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(a,l)}n((i=i.apply(e,t||[])).next())})};const Z=s.dataSourceUtils.dataSourceJsonCreator;let X=null;class ee extends s.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.onItemClicked=e=>Y(this,void 0,void 0,function*(){if(this.props.selected||this.props.partSelected)this.props.onRemove(e,this.props.item);else if(!this.state.isLoading)if(this.setState({isLoading:!0}),this.props.isSelectable){let t;try{t=yield this.props.isSelectable(this.props.item),t&&this.props.onAdd(e,this.props.item).finally(()=>{this.setState({isLoading:!1})})}catch(e){console.warn("Failed to check whether item is selectable ",e)}t||this.setState({isLoading:!1})}else this.props.onAdd(e,this.props.item).finally(()=>{this.setState({isLoading:!1})})}),this.onItemKeyDown=e=>{e.target!==e.currentTarget||"Enter"!==e.key&&" "!==e.key||this.onItemClicked(e)},this.onToggleDetail=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.onToggleDetail(e,this.props.item)},this.state={dataComponentsUtils:null,isLoading:!1}}componentDidMount(){X||(X=s.moduleLoader.loadModule("jimu-ui/advanced/data-source-selector")),X.then(e=>{const{dataComponentsUtils:t}=e;this.__unmount||this.setState({dataComponentsUtils:t})})}componentWillUnmount(){this.__unmount=!0}render(){if(!this.props.item||!this.state.dataComponentsUtils)return null;const e=this.props.item.id,t=Z.createDataSourceJsonByItemInfo(e,this.props.item,this.props.portalUrl);if(this.props.hideSingleLayer&&((null==t?void 0:t.type)===s.DataSourceTypes.FeatureLayer||(null==t?void 0:t.type)===s.DataSourceTypes.SceneLayer))return null;const i=ie(this.props.item),o=oe(this.props.item),r=re(this.props.item);return(0,d.jsx)("div",{role:"listitem",children:(0,d.jsxs)("div",{className:"item",onClick:this.onItemClicked,onKeyDown:this.onItemKeyDown,role:"checkbox",tabIndex:0,"aria-label":this.props.item.title,"aria-describedby":`${i} ${o} ${r}`,"aria-checked":!!this.props.selected||!!this.props.partSelected&&"mixed","aria-busy":this.state.isLoading||this.props.loading,"aria-live":"polite",children:[this.state.isLoading||this.props.loading&&(0,d.jsx)("span",{className:"sr-only",role:"alert","aria-live":"assertive",children:this.props.intl.formatMessage({id:"loading",defaultMessage:"Loading"})}),this.props.mode===B.Simple?(0,d.jsx)(se,{item:this.props.item,portalUrl:this.props.portalUrl,selected:this.props.selected,partSelected:this.props.partSelected,disableRemove:this.props.disableRemove,disableDetailPopper:this.props.disableDetailPopper,intl:this.props.intl,dsJson:t,onToggleDetail:this.onToggleDetail,ref:this.props.infoBtnRef,isLoading:this.state.isLoading||this.props.loading}):(0,d.jsx)(te,{item:this.props.item,portalUrl:this.props.portalUrl,selected:this.props.selected,partSelected:this.props.partSelected,disableRemove:this.props.disableRemove,disableDetailPopper:this.props.disableDetailPopper,intl:this.props.intl,dsJson:t,onToggleDetail:this.onToggleDetail,ref:this.props.infoBtnRef,isLoading:this.state.isLoading||this.props.loading})]})})}}const te=s.React.forwardRef(({item:e,portalUrl:t,selected:i,partSelected:o,isLoading:r,disableRemove:a,intl:l,dsJson:n,onToggleDetail:p,disableDetailPopper:m},h)=>{var u;const g=s.SessionManager.getInstance().getSessionByUrl(t),y=e.thumbnail&&t?(null==g?void 0:g.token)?`${t.replace(/\/$/,"")}/sharing/rest/content/items/${e.id}/info/${e.thumbnail}?token=${g.token}`:`${t.replace(/\/$/,"")}/sharing/rest/content/items/${e.id}/info/${e.thumbnail}`:"Web Scene"===e.type?"https://static.arcgis.com/images/scene.png":"https://static.arcgis.com/images/desktopapp.png",v=e.id&&t?`${t.replace(/\/sharing\/rest/,"").replace(/\/$/,"")}/home/item.html?id=${e.id}`:null,f=s.dataSourceUtils.getDsTypeString(null==n?void 0:n.type,l),x=ie(e),b=oe(e),S=re(e);return(0,d.jsx)("div",{className:(0,s.classNames)("all-mode-item item-border-color-transparent",{"item-border-color-selected":i||o,"item-border-color-disabled":a}),children:(0,d.jsx)("div",{className:"item-card-container",children:(0,d.jsxs)("div",{className:(0,s.classNames)("h-100 w-100 item-card",{"surface-1":!(null===(u=window.jimuConfig)||void 0===u?void 0:u.isBuilder)}),children:[r&&(0,d.jsx)("div",{className:"loading-container",children:(0,d.jsx)(c.Loading,{type:c.LoadingType.Bar})}),(0,d.jsx)("div",{className:"item-badge-container",children:(0,d.jsx)(T,{item:e,id:S})}),(0,d.jsx)("div",{className:(0,s.classNames)({"item-active-icon":i},{"d-none":!i}),children:(0,d.jsx)("div",{className:(0,s.classNames)("text-center item-active-icon-container",{"item-background-color-disabled":a}),children:(0,d.jsx)(Q,{size:"m"})})}),(0,d.jsx)("div",{className:(0,s.classNames)({"item-part-active-icon":o},{"d-none":!o}),children:(0,d.jsx)("div",{className:(0,s.classNames)("item-part-active-icon-container",{"item-background-color-disabled":a}),children:(0,d.jsx)("div",{className:"item-part-active-icon-inner-box d-flex justify-content-center align-items-center",children:(0,d.jsx)("div",{className:(0,s.classNames)({"item-background-color-disabled":a})})})})}),(0,d.jsx)("div",{className:"w-100 item-thumbnail",style:{backgroundImage:`url(${y})`}}),(0,d.jsxs)("div",{className:"w-100 nav flex-column item-info-container",children:[(0,d.jsx)("div",{className:"two-line-truncate item-label",title:e.title,children:e.title}),(0,d.jsxs)("div",{className:"d-flex align-items-center w-100 mt13",title:f,children:[(0,d.jsx)("div",{className:"d-flex align-items-center justify-content-center flex-shrink-0 ds-thumbnail",children:(0,d.jsx)(c.Icon,{icon:n?s.dataSourceUtils.getDsIcon(n):k(e),className:"ds-thumbnail-icon",size:"12"})}),(0,d.jsx)("div",{className:"flex-grow-1 text-truncate pl-2 ds-type",children:(0,d.jsx)("div",{className:"text-truncate ds-type-name",id:x,children:f})})]}),(0,d.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt10",children:[(0,d.jsxs)("div",{className:"text-truncate item-sub-label",title:e.owner||"",children:[e.owner||"",(0,d.jsx)("span",{className:"sr-only",id:b,children:l.formatMessage({id:"ownerIs",defaultMessage:c.defaultMessages.ownerIs},{ownerName:e.owner||""})})]}),(0,d.jsxs)("div",{className:"mw-50 d-flex align-items-top justify-content-end item-info-icon",title:l.formatMessage({id:"details",defaultMessage:c.defaultMessages.details}),children:[!m&&(0,d.jsx)(c.Button,{type:"tertiary",size:"sm",icon:!0,onClick:p,ref:h,children:(0,d.jsx)(H,{})}),m&&(0,d.jsx)(c.Link,{type:"tertiary",size:"sm",icon:!0,onClick:ae,to:v,target:"_blank",ref:h,children:(0,d.jsx)(H,{})})]})]})]})]})})})}),se=s.React.forwardRef(({item:e,portalUrl:t,selected:i,partSelected:o,isLoading:r,disableRemove:a,intl:l,dsJson:n,onToggleDetail:p,disableDetailPopper:m},h)=>{const u=s.SessionManager.getInstance().getSessionByUrl(t),g=e.thumbnail&&t?(null==u?void 0:u.token)?`${t.replace(/\/$/,"")}/sharing/rest/content/items/${e.id}/info/${e.thumbnail}?token=${u.token}`:`${t.replace(/\/$/,"")}/sharing/rest/content/items/${e.id}/info/${e.thumbnail}`:"Web Scene"===e.type?"https://static.arcgis.com/images/scene.png":"https://static.arcgis.com/images/desktopapp.png",y=e.id&&t?`${t.replace(/\/sharing\/rest/,"").replace(/\/$/,"")}/home/item.html?id=${e.id}`:null,v=s.dataSourceUtils.getDsTypeString(null==n?void 0:n.type,l),f=i||o,x=oe(e);return(0,d.jsx)("div",{className:(0,s.classNames)("w-100 simple-mode-item mb-2 item-border-color-transparent",{"item-border-color-selected":f,"item-border-color-disabled":a}),children:(0,d.jsxs)("div",{className:(0,s.classNames)("w-100 item-card"),children:[r&&(0,d.jsx)("div",{className:"loading-container",children:(0,d.jsx)(c.Loading,{type:c.LoadingType.Bar})}),(0,d.jsx)("div",{className:(0,s.classNames)({"item-active-icon":f},{"d-none":!f}),children:(0,d.jsx)("div",{className:(0,s.classNames)("text-center item-active-icon-container",{"item-active-icon-disabled":a})})}),(0,d.jsxs)("div",{className:"item-line-1 d-flex justify-content-between align-items-center",children:[(0,d.jsx)("div",{className:"item-thumbnail d-flex justify-content-between align-items-center mr-2",style:{backgroundImage:`url(${g})`}}),(0,d.jsx)("div",{className:"two-line-truncate item-label",title:e.title,children:e.title})]}),(0,d.jsxs)("div",{className:"item-line-2 d-flex justify-content-between align-items-center",children:[(0,d.jsxs)("div",{className:"item-line-2-1 d-flex justify-content-start align-items-center",children:[(0,d.jsx)("div",{className:"ds-thumbnail d-flex justify-content-center align-items-center flex-shrink-0 mr-1",title:v,children:(0,d.jsx)(c.Icon,{icon:n?s.dataSourceUtils.getDsIcon(n):k(e),className:"ds-thumbnail-icon",size:"12"})}),(0,d.jsxs)("div",{className:"text-truncate item-sub-label",title:e.owner||"",children:[e.owner||"",(0,d.jsx)("span",{className:"sr-only",id:x,children:l.formatMessage({id:"ownerIs",defaultMessage:c.defaultMessages.ownerIs},{ownerName:e.owner||""})})]})]}),(0,d.jsxs)("div",{title:l.formatMessage({id:"details",defaultMessage:c.defaultMessages.details}),children:[!m&&(0,d.jsx)(c.Button,{type:"tertiary",size:"sm",icon:!0,onClick:p,ref:h,"aria-label":l.formatMessage({id:"details",defaultMessage:c.defaultMessages.details}),children:(0,d.jsx)(H,{})}),m&&(0,d.jsx)(c.Link,{type:"tertiary",size:"sm",icon:!0,onClick:ae,to:y,target:"_blank",ref:h,"aria-label":l.formatMessage({id:"details",defaultMessage:c.defaultMessages.details}),children:(0,d.jsx)(H,{})})]})]})]})})});function ie(e){return`${null==e?void 0:e.id}-type-desc`}function oe(e){return`${null==e?void 0:e.id}-owner-desc`}function re(e){return`${null==e?void 0:e.id}-badge-desc`}function ae(e){var t;e.stopPropagation(),null===(t=e.nativeEvent)||void 0===t||t.stopImmediatePropagation()}var le=a(96300),ne=a.n(le),de=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const ce=e=>{const t=window.SVG,{className:i}=e,o=de(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:ne()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var pe=a(39524),me=a.n(pe),he=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const ue=e=>{const t=window.SVG,{className:i}=e,o=he(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:me()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var ge=function(e,t,s,i){return new(s||(s=Promise))(function(o,r){function a(e){try{n(i.next(e))}catch(e){r(e)}}function l(e){try{n(i.throw(e))}catch(e){r(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(a,l)}n((i=i.apply(e,t||[])).next())})};let ye=null;class ve extends s.React.PureComponent{constructor(e){super(e),this.__unmount=!1,this.pageStart=0,this.pageSize=document?Math.max(3,Math.min(10,Math.ceil((document.body.clientWidth-440)/240)))*Math.ceil((document.body.clientHeight-180)/290):60,this.itemCache=[],this.setItems=(e,t,i,o,r,a,l,n)=>{this.fetchLivingAtlasGroupId().then(d=>{const c=this.getSearchRequestOptions(e,t,i,o,d,r,a,l,n);if(!c)return void this.setState({loaded:!0,items:[]});const p=this.getPortalUrl();s.esri.restPortal.searchItems(c).then(e=>{var t;if(!this.__unmount){const s=null===(t=e.results)||void 0===t?void 0:t.map(e=>Object.assign(Object.assign({},e),{portalUrl:p}));this.setState({loaded:!0,items:n?this.state.items.concat(s):s})}},e=>{this.__unmount||this.setState({loaded:!0,items:[]}),console.error(e)})})},this.getSearchRequestOptions=(e,t,i,o,r,a,l,n,d)=>{var c,p;let m=n?`(${n}) AND`:"";Array.isArray(e)?e.forEach((t,i)=>{let o="";t===s.SupportedItemTypes.FeatureCollection?o+=' AND -typekeywords:("Map Notes" OR "Route Layer")':t!==s.SupportedItemTypes.SceneService||this.props.allowAllSceneService||(o+=' AND typekeywords:("3DObject" OR "Point" OR "Building")'),m+=0===i?` ((type: "${t}"${o})`:` OR (type: "${t}"${o})`,i===e.length-1&&(m+=")")}):m+=` type:"${e}"`,t&&(Array.isArray(t)?t.forEach((e,s)=>{m+=0===s?` AND ((${be[e]})`:` OR (${be[e]})`,s===t.length-1&&(m+=")")}):m+=` AND ${be[t]}`);const h=i;d&&(this.pageStart=this.state.items.length+1);const u=(0,s.getAppStore)().getState(),g=u&&u.user;if(g&&this.props.category===z.MyContent)m+=` AND owner:${g.username}`,l&&(m+=` AND ownerfolder: ${l}`);else if(g&&this.props.category===z.MyOrganization)m+=` AND orgid:${g.orgId}`;else if(g&&this.props.category===z.MyGroup)if((null==a?void 0:a.length)>0){m+=` AND ${"(access:shared OR access:public OR access:org)"} AND (group:(${a.reduce((e,t,s)=>0===s?t:`${e} OR ${t}`,"")}))`}else m=null;else this.props.category===z.LivingAtlas?r?m+=` AND group:${r}`:m=null:this.props.category===z.Curated&&this.props.curatedFilter&&(m+=` AND ${this.props.curatedFilter}`);const y=this.getPortalUrl();if(this.props.category!==z.MyGroup&&this.props.category!==z.LivingAtlas){"org_admin"===(null==g?void 0:g.role)||!1!==(null===(c=(0,s.getAppStore)().getState().portalSelf)||void 0===c?void 0:c.canSearchPublic)||(m+=` AND orgid:${null===(p=(0,s.getAppStore)().getState().portalSelf)||void 0===p?void 0:p.id}`)}return m?{q:m+' AND -type:"Web Mapping Application"',sortField:h,sortOrder:this.props.disableDefaultSortSetting?o:o||"desc",num:this.pageSize,start:this.pageStart,authentication:s.SessionManager.getInstance().getSessionByUrl(y),portal:s.portalUrlUtils.getPortalRestUrl(y)}:null},this.getPortalUrl=()=>{var e,t;if(this.props.category===z.Public){return(null===(t=null===(e=(0,s.getAppStore)().getState())||void 0===e?void 0:e.portalSelf)||void 0===t?void 0:t.isPortal)?"https://www.arcgis.com":this.props.portalUrl}return this.props.portalUrl},this.fetchLivingAtlasGroupId=()=>ge(this,void 0,void 0,function*(){if(ye)return yield ye;const e=(0,s.getAppStore)().getState().portalSelf,t=null==e?void 0:e.livingAtlasGroupQuery;if(t){const e={num:1,start:0,sortField:"title",sortOrder:"asc",q:t,authentication:s.SessionManager.getInstance().getSessionByUrl(this.getPortalUrl())};ye=s.esri.restPortal.searchGroups(e).then(e=>{var t;return null===(t=null==e?void 0:e.results[0])||void 0===t?void 0:t.id})}else ye=Promise.resolve(null);return ye}),this.getWhetherItemSelected=e=>this.props.selectedItems&&this.props.selectedItems.some(t=>t===(null==e?void 0:e.id)),this.getWhetherItemPartSelected=e=>this.props.partSelectedItems&&this.props.partSelectedItems.some(t=>t===(null==e?void 0:e.id)),this.getWhetherItemLoading=e=>this.props.loadingItems&&this.props.loadingItems.some(t=>t===(null==e?void 0:e.id)),this.onScroll=e=>{const t=e.target.clientHeight,s=e.target.scrollHeight-(t+e.target.scrollTop)<=10;this.state.loaded&&s&&(this.setState({loaded:!1}),this.setItems(this.props.itemType,this.props.itemTypeCategory,this.props.sortField,this.props.sortOrder,this.getRealGroupIds(),this.props.folderId,this.props.searchValue,!0))},this.onToggleDetail=(e,t)=>{var s;this.setState({showDetailItem:(null===(s=this.state.showDetailItem)||void 0===s?void 0:s.id)===(null==t?void 0:t.id)?null:t})},this.onToggleDetailPage=e=>{this.setState({showDetailItem:null})},this.onCloseDetailClicked=()=>{(0,s.focusElementInKeyboardMode)(this.showDetailItemRef.current),this.setState({showDetailItem:null})},this.onDetailItemAdd=(e,t)=>ge(this,void 0,void 0,function*(){if(!this.state.isLoading)if(this.props.isSelectable){let s;this.setState({isLoading:!0});try{s=yield this.props.isSelectable(t),s&&this.onAdd(e,t).finally(()=>{this.setState({isLoading:!1})})}catch(e){console.warn("Failed to check whether item is selectable ",e)}s||this.setState({isLoading:!1})}else this.onAdd(e,t).finally(()=>{this.setState({isLoading:!1})})}),this.onAdd=(e,t)=>ge(this,void 0,void 0,function*(){let e;if(this.props.isMultiple){e=(yield this.getItemsByIds(this.props.selectedItems)).concat(t)}else e=[t];return this.props.onSelect&&this.props.onSelect(e,t)}),this.onRemove=(e,t)=>ge(this,void 0,void 0,function*(){if(this.disableRemove(null==t?void 0:t.id))return;let e;if(this.props.isMultiple){e=(yield this.getItemsByIds(this.props.selectedItems)).filter(e=>e.id!==t.id)}else e=[];this.props.onRemove&&this.props.onRemove(e,t)}),this.getItemsByIds=e=>ge(this,void 0,void 0,function*(){if(!e)return[];const t=e.asMutable().map(e=>this.state.items.concat(this.itemCache).find(t=>(null==t?void 0:t.id)===e)).filter(e=>!!e);if(t.length===e.length)return t;const i=e.filter(e=>!t.some(t=>(null==t?void 0:t.id)===e));let o="";i.forEach((e,t)=>{o+=0===t?e:` OR ${e}`});const r=this.getPortalUrl(),a=yield s.esri.restPortal.searchItems({q:o,authentication:s.SessionManager.getInstance().getSessionByUrl(r)}).then(e=>{var t;return null===(t=e.results)||void 0===t?void 0:t.map(e=>Object.assign(Object.assign({},e),{portalUrl:r}))});return this.itemCache=this.itemCache.concat(a),t.concat(a)}),this.showDetailDrillInPage=()=>this.state.showDetailItem&&this.props.mode===B.Simple,this.disableRemove=e=>this.props.disableRemoveItemsSelectedOnMount&&this.selectedItemsOnMount.includes(e),this.showDetailItemRef=s.React.createRef(),this.state={loaded:!1,items:[],showDetailItem:null,isLoading:!1}}componentDidMount(){this.__unmount=!1,this.selectedItemsOnMount=this.props.selectedItems||(0,s.Immutable)([]),this.setItems(this.props.itemType,this.props.itemTypeCategory,this.props.sortField,this.props.sortOrder,this.getRealGroupIds(),this.props.folderId,this.props.searchValue)}componentDidUpdate(e,t){e.portalUrl===this.props.portalUrl&&e.category===this.props.category&&e.isMultiple===this.props.isMultiple&&this.isItemTypeSame(e.itemType,this.props.itemType)&&e.sortField===this.props.sortField&&e.searchValue===this.props.searchValue&&e.sortOrder===this.props.sortOrder&&e.folderId===this.props.folderId&&e.groupId===this.props.groupId&&e.itemTypeCategory===this.props.itemTypeCategory&&e.curatedFilter===this.props.curatedFilter||(this.setState({loaded:!1}),this.pageStart=0,this.contentNode&&(this.contentNode.scrollTop=0),this.setItems(this.props.itemType,this.props.itemTypeCategory,this.props.sortField,this.props.sortOrder,this.getRealGroupIds(),this.props.folderId,this.props.searchValue)),this.state.showDetailItem!==t.showDetailItem&&this.props.afterToggleItemDetail&&this.props.afterToggleItemDetail(this.state.showDetailItem)}componentWillUnmount(){this.__unmount=!0,this.contentNode&&this.contentNode.removeEventListener("scroll",this.onScroll)}isItemTypeSame(e,t){const s=Array.isArray(e),i=Array.isArray(t);return s&&i?e.length===t.length&&e.every(e=>t.some(t=>t===e)):e===t}getRealGroupIds(){return this.props.groupId?[this.props.groupId]:this.getAllGroupIds()}getAllGroupIds(){var e,t;const i=null===(t=null===(e=(0,s.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.user;return((null==i?void 0:i.groups)||[]).map(e=>e.id)}render(){var e;if(!this.props.itemType||!this.props.portalUrl)return null;const t=(0,d.jsx)("div",{className:"item-list",children:this.state.items&&this.state.items.map((e,t)=>{var s;return(0,d.jsx)(ee,{selected:this.getWhetherItemSelected(e),partSelected:this.getWhetherItemPartSelected(e),loading:this.getWhetherItemLoading(e),item:e,portalUrl:this.getPortalUrl(),onAdd:this.onAdd,intl:this.props.intl,infoBtnRef:(null===(s=this.state.showDetailItem)||void 0===s?void 0:s.id)===(null==e?void 0:e.id)?this.showDetailItemRef:null,onRemove:this.onRemove,onToggleDetail:this.onToggleDetail,hideSingleLayer:this.props.hideSingleLayer,mode:this.props.mode,disableRemove:this.disableRemove(null==e?void 0:e.id),isSelectable:this.props.isSelectable,disableDetailPopper:this.props.disableDetailPopper},t)})}),i=(0,d.jsx)(G,{hideHeader:this.props.mode===B.Simple,item:this.state.showDetailItem,portalUrl:this.getPortalUrl(),onClose:this.props.mode!==B.Simple?this.onCloseDetailClicked:void 0}),o=this.getWhetherItemSelected(this.state.showDetailItem),r=this.getWhetherItemPartSelected(this.state.showDetailItem);return(0,d.jsx)("div",{className:(0,s.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className}),children:(0,d.jsxs)("div",{className:(0,s.classNames)("component-item-list",{"all-mode":this.props.mode!==B.Simple,"simple-mode":this.props.mode===B.Simple}),children:[(0,d.jsx)("div",{className:"detail-reference",ref:e=>{this.detailReference=e}}),(0,d.jsxs)("div",{role:"list",className:(0,s.classNames)("w-100 h-100 d-flex flex-wrap justify-content-center align-items-start list-container",{"px-4":this.props.mode===B.Simple}),onScroll:this.onScroll,ref:e=>{this.contentNode=e},children:[t,!this.state.loaded||this.state.items&&0!==this.state.items.length?null:(0,d.jsxs)("div",{className:"empty-placeholder w-100",children:[(0,d.jsx)("div",{className:"empty-placeholder-icon",children:(0,d.jsx)(ue,{size:48})}),(0,d.jsx)("div",{className:"empty-placeholder-text",dangerouslySetInnerHTML:{__html:this.props.intl.formatMessage({id:"noItemFoundWarning",defaultMessage:c.defaultMessages.noItemFoundWarning})}})]})]}),this.props.mode!==B.Simple?(0,d.jsx)(c.Popper,{open:!!this.state.showDetailItem,disablePortal:!this.props.detailReference,reference:this.props.detailReference||this.detailReference,placement:"right-start",className:"h-100",style:{width:"260px"},zIndex:99999,disableOverlayManager:!0,children:i}):(0,d.jsx)("div",{children:this.showDetailDrillInPage()&&(0,d.jsxs)("div",{className:"item-detail-page-container",children:[(0,d.jsxs)(c.Button,{type:"tertiary",size:"sm",onClick:this.onToggleDetailPage,className:"pt-4 pb-0 d-flex",children:[(0,d.jsx)(ce,{autoFlip:!0}),(0,d.jsx)("div",{className:"ml-2",children:this.props.intl.formatMessage({id:"back",defaultMessage:c.defaultMessages.back})})]}),(0,d.jsx)("div",{className:"item-detail-container",children:i}),(0,d.jsxs)("div",{className:"w-100 d-flex justify-content-center align-items-center p-4 add-btn",children:[this.state.isLoading&&(0,d.jsx)("div",{className:"loading-container",children:(0,d.jsx)(c.Loading,{type:c.LoadingType.Bar})}),(0,d.jsx)(c.Button,{type:"primary",className:"w-100 h-100",onClick:o||r?e=>this.onRemove(e,this.state.showDetailItem):e=>this.onDetailItemAdd(e,this.state.showDetailItem),disabled:this.state.isLoading||this.disableRemove(null===(e=this.state.showDetailItem)||void 0===e?void 0:e.id),children:o||r?this.props.intl.formatMessage({id:"remove",defaultMessage:c.defaultMessages.remove}):this.props.intl.formatMessage({id:"add",defaultMessage:c.defaultMessages.add})})]})]})}),!this.state.loaded&&(0,d.jsx)(c.Loading,{type:c.LoadingType.Secondary,width:this.props.mode===B.Simple?30:34,height:this.props.mode===B.Simple?28:32})]})})}}const fe=(0,t.withStyles)((0,s.injectIntl)(ve),"ItemList"),xe=fe,be={[V.FeatureLayer]:'type:("Feature Collection" OR "Feature Service" OR "WFS") -typekeywords:"Table"',[V.SceneLayer]:'type:"Scene Service"',[V.TileLayer]:'type:("WMTS" OR "Map Service" OR "Vector Tile Service") typekeywords:("Hosted" OR "Tiled")',[V.MapImageLayer]:'type:("Map Service" OR "WMS") -typekeywords:("Hosted" OR "Tiled") -type:("Web Map" OR "Web Mapping Application" OR "Shapefile")',[V.ImageryLayer]:'type:"Image Service" -typekeywords:"Elevation 3D Layer" -typekeywords:"Tiled Imagery"',[V.TiledImageryLayer]:'type:"Image Service" typekeywords:"Tiled Imagery"',[V.ElevationLayer]:'type:"Image Service" typekeywords:"Elevation 3D Layer"',[V.Table]:'typekeywords:"Table"',[V.LayerFiles]:'type:("CSV" OR "Shapefile" OR "GeoJson") -type:("Explorer Maps" OR "Map Documents")',[V.WebMap]:'type:"Web Map" -type:"Web Mapping Application"',[V.Scenes]:'type:"Web Scene" -type:"CityEngine Web Scene"',[V.GeometricOperations]:'type:"Geometry Service"',[V.Locator]:'type:"Geocoding Service"',[V.GeoprocessingTasks]:'type:"Geoprocessing Service"',[V.NetworkAnalysis]:'type:"Network Analysis Service"',[V.GroupLayer]:'type:("Group Layer" OR "Feature Collection") -typekeywords:"Singlelayer"',[V.OrientedImageryLayer]:'type:"Feature Service" typekeywords:"OrientedImageryLayer"'};var Se=a(50170),we=a.n(Se),je=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Ie=e=>{const t=window.SVG,{className:i}=e,o=je(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:we()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var Ne=a(54578),Oe=a.n(Ne),Me=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Ce=e=>{const t=window.SVG,{className:i}=e,o=Me(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:Oe()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var $e=a(14962),Te=a.n($e),De=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Le=e=>{const t=window.SVG,{className:i}=e,o=De(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:Te()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var ke=a(48799),Pe=a.n(ke),Ae=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Fe=e=>{const t=window.SVG,{className:i}=e,o=Ae(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:Pe()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var Ge=a(76219),ze=a.n(Ge),Re=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Ue=e=>{const t=window.SVG,{className:i}=e,o=Re(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:ze()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var Be=a(56499),Ve=a.n(Be),_e=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};const Ee=e=>{const t=window.SVG,{className:i}=e,o=_e(e,["className"]),r=(0,s.classNames)("jimu-icon jimu-icon-component",i);return t?(0,d.jsx)(t,Object.assign({className:r,src:Ve()},o)):(0,d.jsx)("svg",Object.assign({className:r},o))};var We=function(e,t,s,i){return new(s||(s=Promise))(function(o,r){function a(e){try{n(i.next(e))}catch(e){r(e)}}function l(e){try{n(i.throw(e))}catch(e){r(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s(function(e){e(t)})).then(a,l)}n((i=i.apply(e,t||[])).next())})},He=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s};class qe extends s.React.PureComponent{constructor(e){var t,i,o;super(e),this.__unmount=!1,this.itemCategories={[z.MyContent]:this.props.intl.formatMessage({id:"myContent",defaultMessage:c.defaultMessages.myContent}),[z.MyGroup]:this.props.intl.formatMessage({id:"myGroup",defaultMessage:c.defaultMessages.myGroup}),[z.MyOrganization]:this.props.intl.formatMessage({id:"myOrganization",defaultMessage:c.defaultMessages.myOrganization}),[z.Public]:this.props.intl.formatMessage({id:"public",defaultMessage:c.defaultMessages.public}),[z.LivingAtlas]:this.props.intl.formatMessage({id:"livingAtlas",defaultMessage:c.defaultMessages.livingAtlas}),[z.Curated]:this.props.intl.formatMessage({id:"curated",defaultMessage:c.defaultMessages.curated})},this.defaultDisplayedItemCategories=[z.MyContent,z.MyGroup,z.MyOrganization,z.Public,z.LivingAtlas],this.sortFields={[R.Modified]:this.props.intl.formatMessage({id:"modified",defaultMessage:c.defaultMessages.modified}),[R.Title]:this.props.intl.formatMessage({id:"title",defaultMessage:c.defaultMessages.title}),[R.Views]:this.props.intl.formatMessage({id:"numViews",defaultMessage:c.defaultMessages.numViews})},this.itemTypeCategories=Object.keys(V).map(e=>({value:V[e],label:V[e]})),this.defaultSelectedFolder={id:null,title:this.props.intl.formatMessage({id:"allMyContent",defaultMessage:c.defaultMessages.allMyContent})},this.rootFolder={id:"root",title:(null===(i=null===(t=(0,s.getAppStore)().getState())||void 0===t?void 0:t.user)||void 0===i?void 0:i.username)||this.props.intl.formatMessage({id:"rootFolder",defaultMessage:c.defaultMessages.rootFolder})},this.defaultFolders=[this.defaultSelectedFolder,this.rootFolder],this.defaultSelectedGroup={id:null,title:this.props.intl.formatMessage({id:"allMyGroupsContent",defaultMessage:c.defaultMessages.allMyGroupsContent})},this.onCategoryIdChange=e=>{this.setState({selectedCategoryId:e})},this.onSearchInputKeyDown=e=>{"Enter"===e.key?this.enterOrSearchIsClicked():this.enterOrSearchIsUnclicked()},this.enterOrSearchIsClicked=()=>{this.setState({isEnterOrSearchIconClicked:!0})},this.enterOrSearchIsUnclicked=()=>{this.setState({isEnterOrSearchIconClicked:!1})},this.setDebounceSearchValue=e=>{this.setState({deferredSearchValue:e})},this.onSearchChange=e=>{this.debounceSetSearchValue(e.target.value),this.setState({searchValue:e.target.value})},this.onSortFieldChange=e=>{const t=e.target.value;this.setState({selectedSortField:t})},this.onFolderChange=e=>{const t=e.target.value,s=this.state.folders.find(e=>e.id===t)||this.defaultSelectedFolder;this.setState({selectedFolder:s})},this.onGroupChange=e=>{const t=e.target.value,s=this.state.groups.find(e=>e.id===t)||this.defaultSelectedGroup;this.setState({selectedGroup:s})},this.onSortOrderChange=()=>{this.setState({selectedSortOrder:this.state.selectedSortOrder===U.Desc?U.Asc:U.Desc})},this.onSelectedItemTypeCategoriesChange=e=>{this.setState({selectedItemTypeCategories:(null==e?void 0:e.length)>0?(0,s.Immutable)(null==e?void 0:e.map(e=>e.value)):null})},this.onItemAdded=(e,t)=>this.props.onSelect(e,t),this.onItemRemoved=(e,t)=>{this.props.onRemove(e,t)},this.afterToggleItemDetail=e=>{var t,s;null===(s=(t=this.props).afterToggleItemDetail)||void 0===s||s.call(t,e),this.props.mode===B.Simple&&this.setState({onlyShowItemDetail:e})},this.GroupSelect=({size:e,groups:t,selectedGroup:s,onGroupChange:i})=>(0,d.jsx)(c.Select,{value:s.id,title:s.title,onChange:i,className:"d-inline-block item-selector-sort-select",size:e,children:t.map(e=>(0,d.jsx)("option",{value:e.id,children:(0,d.jsx)("div",{className:"w-100 text-truncate",title:e.title,children:e.title})},e.id))}),this.customDropdownButtonContent=e=>(0,d.jsx)(Fe,{color:(null==e?void 0:e.length)>0?"var(--sys-color-primary-text)":"var(--sys-color-surface-overlay-text)"}),this.getValidItemTypeCategories=()=>this.itemTypeCategories.filter(e=>this.isItemTypeCategoryValid(e.value)),this.isItemTypeCategoryValid=e=>{var t;return this.props.itemTypeCategory?this.props.itemTypeCategory.includes(e):null===(t=Je[e])||void 0===t?void 0:t.some(e=>{var t;return null===(t=this.props.itemType)||void 0===t?void 0:t.includes(e)})},this.getItemCategoryCustomLabel=e=>(null==e?void 0:e.customLabel)||this.itemCategories[null==e?void 0:e.type],this.debounceSetSearchValue=s.lodash.debounce(e=>{this.setDebounceSearchValue(e)},500),this.state={searchValue:"",deferredSearchValue:"",selectedSortField:e.disableDefaultSortSetting?void 0:R.Modified,selectedSortOrder:e.disableDefaultSortSetting?void 0:U.Desc,isEnterOrSearchIconClicked:!1,selectedCategoryId:(null===(o=this.getShouldBeDisplayedItemCategories()[0])||void 0===o?void 0:o.id)||"",selectedItemTypeCategories:null,selectedFolder:this.defaultSelectedFolder,selectedGroup:this.defaultSelectedGroup,appServices:null,folders:this.defaultFolders,groups:this.getGroups(),onlyShowItemDetail:null}}componentDidMount(){this.__unmount=!1,s.moduleLoader.loadModule("jimu-for-builder/service").then(e=>{this.__unmount||this.setState({appServices:e.appServices},()=>{this.getFolders().then(e=>{this.__unmount||this.setState({folders:e,groups:this.getGroups()})})})})}componentDidUpdate(e){var t;const s=this.getShouldBeDisplayedItemCategories();s.find(e=>e.id===this.state.selectedCategoryId)||this.setState({selectedCategoryId:(null===(t=s[0])||void 0===t?void 0:t.id)||""}),e.itemTypeCategory!==this.props.itemTypeCategory&&this.state.selectedItemTypeCategories&&this.props.itemTypeCategory&&this.setState({selectedItemTypeCategories:this.state.selectedItemTypeCategories.filter(e=>this.props.itemTypeCategory.includes(e))})}componentWillUnmount(){this.__unmount=!0}getShouldBeDisplayedItemCategories(){var e;const t=(0,s.getAppStore)().getState().portalSelf,i=this.props.itemCategoriesInfo||this.defaultDisplayedItemCategories.map(e=>({type:e,customLabel:"",id:e})),o=new Map;(null==t?void 0:t.livingAtlasGroupQuery)||o.set(z.LivingAtlas,!0);const r=(0,s.getAppStore)().getState(),a=r&&r.user,l="org_admin"===(null==a?void 0:a.role)||!1!==(null===(e=(0,s.getAppStore)().getState().portalSelf)||void 0===e?void 0:e.canSearchPublic),n="true"===s.utils.readLocalStorage("restrictEnterpriseOnly");return l&&!n||o.set(z.Public,!0),n&&o.set(z.LivingAtlas,!0),(null==a?void 0:a.username)||o.set(z.MyContent,!0),(null==a?void 0:a.groups)||o.set(z.MyGroup,!0),(null==a?void 0:a.orgId)||o.set(z.MyOrganization,!0),i.filter(e=>!o.get(e.type))}getGroups(){var e,t;const i=null===(t=null===(e=(0,s.getAppStore)())||void 0===e?void 0:e.getState())||void 0===t?void 0:t.user;return(null==i?void 0:i.groups)?[this.defaultSelectedGroup].concat(i.groups.asMutable({deep:!0})):[this.defaultSelectedGroup]}getFolders(){return We(this,void 0,void 0,function*(){var e,t;let s=this.defaultFolders;return(null===(t=null===(e=this.state)||void 0===e?void 0:e.appServices)||void 0===t?void 0:t.getFolders)?this.state.appServices.getFolders({num:1}).then(e=>(s=e?s.concat(e):s,s),e=>(console.log("Getting user content failed: ",e),s)):Promise.resolve(s)})}render(){var e,t,i;const o=this.props.intl.formatMessage({id:"search",defaultMessage:s.defaultMessages.search}),r=this.props.intl.formatMessage({id:"sortBy",defaultMessage:c.defaultMessages.sortBy}),a=this.props.intl.formatMessage({id:"descending",defaultMessage:c.defaultMessages.descending}),l=this.props.intl.formatMessage({id:"ascending",defaultMessage:c.defaultMessages.ascending}),n=this.getShouldBeDisplayedItemCategories(),p=n.find(e=>e.id===this.state.selectedCategoryId)||n[0],{type:m,id:h}=p||{},u=this.props,{className:g}=u,y=He(u,["className"]),v=this.GroupSelect;return(0,d.jsx)("div",{className:(0,s.classNames)("h-100 w-100",{[g]:!!g}),children:(0,d.jsxs)("div",{className:(0,s.classNames)("component-item-selector w-100 h-100",{"all-mode":this.props.mode!==B.Simple,"simple-mode":this.props.mode===B.Simple}),children:[!this.state.onlyShowItemDetail&&(0,d.jsxs)("div",{className:(0,s.classNames)("w-100",{"category-nav d-flex justify-content-between align-items-end":this.props.mode!==B.Simple,"px-4 pt-4":this.props.mode===B.Simple}),children:[this.props.mode===B.Simple?(0,d.jsx)(c.Select,{size:"sm",value:h,title:this.getItemCategoryCustomLabel(p),onChange:e=>{this.onCategoryIdChange(e.target.value)},children:n.map(e=>(0,d.jsx)("option",{value:e.id,children:(0,d.jsx)("div",{className:"w-100 text-truncate",title:this.getItemCategoryCustomLabel(e),children:this.getItemCategoryCustomLabel(e)})},e.id))}):(0,d.jsx)(c.Nav,{underline:!0,children:n.map((e,t)=>(0,d.jsx)(c.NavItem,{title:this.getItemCategoryCustomLabel(e),className:(0,s.classNames)({"active-tab":h===e.id}),children:(0,d.jsx)(c.NavLink,{tag:"button",onClick:()=>{this.onCategoryIdChange(e.id)},active:h===e.id,className:"w-100 text-truncate",children:this.getItemCategoryCustomLabel(e)})},e.type))}),!this.state.onlyShowItemDetail&&this.props.mode===B.Simple&&m===z.MyGroup&&(0,d.jsx)("div",{className:"pt-2",children:(0,d.jsx)(v,{size:"sm",groups:this.state.groups,selectedGroup:this.state.selectedGroup,onGroupChange:this.onGroupChange})}),(0,d.jsxs)("div",{className:"flex-grow-1 d-flex justify-content-end item-selector-search-container",children:[(0,d.jsx)("div",{className:(0,s.classNames)("item-selector-search",{"flex-grow-1":this.props.showItemTypeCategoryFilter,"w-100":this.props.mode===B.Simple&&!this.props.showItemTypeCategoryFilter}),children:(0,d.jsx)(c.TextInput,{"aria-label":o,prefix:(0,d.jsx)(Ie,{size:"m",className:"hint-paper ml-2"}),onKeyDown:this.onSearchInputKeyDown,placeholder:o,size:this.props.mode===B.Simple?"sm":"default",onChange:this.onSearchChange,className:"search-input",value:this.state.searchValue,allowClear:!0})}),this.props.showItemTypeCategoryFilter&&(0,d.jsx)("div",{className:"ml-1",children:(0,d.jsx)(c.AdvancedSelect,{size:this.props.mode===B.Simple?"sm":"default",sortList:!1,isMultiple:!0,hideSearchInput:!0,isEmptyOptionHidden:!0,icon:!0,arrow:!1,variant:"contained",color:(null===(e=this.state.selectedItemTypeCategories)||void 0===e?void 0:e.length)>0?"primary":"default",title:this.props.intl.formatMessage({id:"type",defaultMessage:c.defaultMessages.type}),staticValues:this.getValidItemTypeCategories(),selectedValues:null===(i=null===(t=this.state.selectedItemTypeCategories)||void 0===t?void 0:t.asMutable())||void 0===i?void 0:i.map(e=>({value:e,label:e})),onChange:this.onSelectedItemTypeCategoriesChange,customDropdownButtonContent:this.customDropdownButtonContent})}),this.props.mode===B.Simple&&this.props.enableContentSortInSimpleMode&&(0,d.jsx)("div",{className:"ml-1",children:(0,d.jsxs)(c.Dropdown,{menuItemCheckMode:"singleCheck",children:[(0,d.jsx)(c.DropdownButton,{size:"sm",title:r,icon:!0,arrow:!1,children:(0,d.jsx)(Ue,{})}),(0,d.jsxs)(c.DropdownMenu,{children:[this.state.selectedSortField&&(0,d.jsxs)(s.React.Fragment,{children:[(0,d.jsx)(c.DropdownItem,{onClick:this.onSortOrderChange,className:"px-1 ml-1 w-auto",title:this.state.selectedSortOrder===U.Desc?a:l,"aria-label":this.state.selectedSortOrder===U.Desc?a:l,children:this.state.selectedSortOrder===U.Desc?(0,d.jsx)(Ce,{size:"m"}):(0,d.jsx)(Le,{size:"m"})}),(0,d.jsx)(c.DropdownItem,{divider:!0,className:"mx-0"})]}),(0,d.jsxs)("div",{"aria-label":r,role:"group",css:s.css`
                          .jimu-dropdown-item {
                            &.jimu-dropdown-item-header {
                              color: var(--sys-color-surface-overlay-hint) !important;
                            }
                            &:not(:hover) {
                              color: var(--sys-color-surface-overlay-text);
                            }
                          }
                        `,children:[(0,d.jsx)(c.DropdownItem,{className:"px-2",header:!0,children:r}),(0,d.jsxs)(c.DropdownItem,{className:this.state.selectedSortField?"px-7":"px-2",onClick:()=>{this.setState({selectedSortField:void 0,selectedSortOrder:void 0})},active:!this.state.selectedSortField,children:[!this.state.selectedSortField&&(0,d.jsx)(Ee,{size:12,className:"mr-2"}),this.props.intl.formatMessage({id:"relevance",defaultMessage:c.defaultMessages.relevance})]}),Object.keys(this.sortFields).map((e,t)=>{const s=this.state.selectedSortField===e;return(0,d.jsxs)(c.DropdownItem,{className:s?"px-2":"px-7",onClick:()=>{this.setState({selectedSortField:e,selectedSortOrder:this.state.selectedSortOrder||U.Desc})},active:s,children:[s&&(0,d.jsx)(Ee,{size:12,className:"mr-2"}),this.sortFields[e]]},t)})]})]})]})})]})]}),n.map((e,t)=>{var i,o,n;return(0,d.jsxs)("div",{className:(0,s.classNames)("w-100",{"d-none":e.id!==h,"category-container":!this.state.onlyShowItemDetail,"category-container-without-select":this.state.onlyShowItemDetail,"category-container-with-group-select":e.type===z.MyGroup}),children:[!this.state.onlyShowItemDetail&&this.props.mode!==B.Simple&&(0,d.jsxs)("div",{className:"d-flex justify-content-between mt-30 mb-20",children:[(0,d.jsxs)("div",{children:[m===z.MyContent&&(0,d.jsx)(c.Select,{value:this.state.selectedFolder.id,title:this.state.selectedFolder.title,onChange:this.onFolderChange,className:"d-inline-block item-selector-sort-select",children:this.state.folders.map(e=>(0,d.jsx)("option",{value:e.id,children:(0,d.jsx)("div",{className:"w-100 text-truncate",title:e.title,children:e.title})},e.id))}),m===z.MyGroup&&(0,d.jsx)(v,{size:"default",groups:this.state.groups,selectedGroup:this.state.selectedGroup,onGroupChange:this.onGroupChange})]}),(0,d.jsxs)("div",{className:"d-flex justify-content-between align-items-center item-selector-sort",children:[(0,d.jsxs)("div",{className:"item-selector-sort-by",role:"group","aria-label":r,children:[(0,d.jsx)("div",{className:"d-inline-block mr-2",children:r}),(0,d.jsx)(c.Select,{value:this.state.selectedSortField,title:this.sortFields[R[this.state.selectedSortField]],onChange:this.onSortFieldChange,className:"d-inline-block item-selector-sort-select",children:Object.keys(R).map(e=>(0,d.jsx)("option",{value:R[e],children:this.sortFields[R[e]]},R[e]))})]}),(0,d.jsx)("div",{className:"item-selector-sort-order",children:this.state.selectedSortOrder===U.Desc?(0,d.jsx)(c.Button,{type:"tertiary",icon:!0,onClick:this.onSortOrderChange,title:a,"aria-label":a,children:(0,d.jsx)(Ce,{size:"m"})}):(0,d.jsx)(c.Button,{type:"tertiary",icon:!0,onClick:this.onSortOrderChange,title:l,"aria-label":l,children:(0,d.jsx)(Le,{size:"m"})})})]})]}),(0,d.jsx)("div",{className:"w-100 item-list-container",children:(0,d.jsx)(fe,Object.assign({},y,{category:e.type,groupId:null===(i=this.state.selectedGroup)||void 0===i?void 0:i.id,sortField:this.state.selectedSortField,sortOrder:this.state.selectedSortOrder,folderId:null===(o=this.state.selectedFolder)||void 0===o?void 0:o.id,searchValue:this.state.deferredSearchValue.length>2||0===this.state.deferredSearchValue.length||this.state.isEnterOrSearchIconClicked?this.state.deferredSearchValue:"",onSelect:this.onItemAdded,onRemove:this.onItemRemoved,afterToggleItemDetail:this.afterToggleItemDetail,itemTypeCategory:(null===(n=this.state.selectedItemTypeCategories)||void 0===n?void 0:n.length)?this.state.selectedItemTypeCategories:this.props.itemTypeCategory,curatedFilter:null==p?void 0:p.curatedFilter}))})]},e.id)})]})})}}const Ke=(0,s.injectIntl)((0,t.withStyles)(qe,"ItemSelector")),Je={[V.FeatureLayer]:[s.SupportedItemTypes.FeatureService,s.SupportedItemTypes.FeatureCollection,s.SupportedItemTypes.WFS],[V.SceneLayer]:[s.SupportedItemTypes.SceneService],[V.TileLayer]:[s.SupportedItemTypes.WMTS,s.SupportedItemTypes.MapService,s.SupportedItemTypes.VectorTileService],[V.MapImageLayer]:[s.SupportedItemTypes.MapService,s.SupportedItemTypes.WMS],[V.ImageryLayer]:[s.SupportedItemTypes.ImageService],[V.TiledImageryLayer]:[s.SupportedItemTypes.ImageService],[V.ElevationLayer]:[s.SupportedItemTypes.ImageService],[V.Table]:[s.SupportedItemTypes.FeatureService,s.SupportedItemTypes.FeatureCollection,s.SupportedItemTypes.MapService,s.SupportedItemTypes.CSV],[V.LayerFiles]:[s.SupportedItemTypes.CSV,s.SupportedItemTypes.GeoJSON],[V.WebMap]:[s.SupportedItemTypes.WebMap],[V.Scenes]:[s.SupportedItemTypes.WebScene],[V.GeometricOperations]:[s.SupportedItemTypes.GeometryService],[V.Locator]:[s.SupportedItemTypes.GeocodingService],[V.GeoprocessingTasks]:[s.SupportedItemTypes.GeoprocessingService],[V.NetworkAnalysis]:[s.SupportedItemTypes.NetworkAnalysisService],[V.GroupLayer]:[s.SupportedItemTypes.GroupLayer],[V.OrientedImageryLayer]:[s.SupportedItemTypes.FeatureService]};(0,t.registerStyles)("jimu-ui/basic/item-components/",e)})(),l})())}}});