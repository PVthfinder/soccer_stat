(this.webpackJsonpfootball_stats=this.webpackJsonpfootball_stats||[]).push([[0],{25:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(18),s=a.n(r),i=(a(25),a(3)),o=a(2),l=a(20),u=a(4);var j=function(e,t){var a=t.type,c=t.payload;switch(a){case"SET_COMPETITIONS":var n=c.search?c.data.filter((function(e){return e.area.name.toLowerCase().includes(c.search)})):c.data;return Object(u.a)(Object(u.a)({},e),{},{competitions:c.data,filteredCompetitions:n});case"SET_MATCHES":var r=c.search?c.data.filter((function(e){return!!e.homeTeam.name&&e.homeTeam.name.toLowerCase().includes(c.search)||!!e.awayTeam.name&&e.awayTeam.name.toLowerCase().includes(c.search)})):c.data;return Object(u.a)(Object(u.a)({},e),{},{matches:c.data,filteredMatches:r});case"SET_TEAMS":var s=c.search?c.data.filter((function(e){return e.name.toLowerCase().includes(c.search)})):c.data;return Object(u.a)(Object(u.a)({},e),{},{teams:c.data,filteredTeams:s});case"SET_SEARCH_VALUE":return Object(u.a)(Object(u.a)({},e),{},{searchValue:c});case"SET_YEAR":return Object(u.a)(Object(u.a)({},e),{},{year:c});case"SET_DATE_FROM":return Object(u.a)(Object(u.a)({},e),{},{dateFrom:c});case"SET_DATE_TO":return Object(u.a)(Object(u.a)({},e),{},{dateTo:c});default:return e}},d=a(0),h=Object(c.createContext)(),m={competitions:[],filteredCompetitions:[],matches:[],filteredMatches:[],teams:[],filteredTeams:[],searchValue:"",year:"",dateFrom:"",dateTo:""},b=function(e){var t=e.children,a=Object(c.useReducer)(j,m),n=Object(l.a)(a,2),r=n[0],s=n[1],i=Object(o.g)().search,u=new URLSearchParams(i);return r.setCompetitions=function(e,t){s({type:"SET_COMPETITIONS",payload:{data:e,search:t}})},r.setMatches=function(e,t){s({type:"SET_MATCHES",payload:{data:e,search:t}})},r.setTeams=function(e,t){s({type:"SET_TEAMS",payload:{data:e,search:t}})},r.setSearchValue=function(e){s({type:"SET_SEARCH_VALUE",payload:e})},r.setYear=function(e){s({type:"SET_YEAR",payload:e})},r.setDateFrom=function(e){s({type:"SET_DATE_FROM",payload:e})},r.setDateTo=function(e){s({type:"SET_DATE_TO",payload:e})},r.getUrlSearchValue=function(e){return i.includes(e)?u.get(e):""},Object(d.jsx)(h.Provider,{value:r,children:t})},O=a(9),p=a.n(O),f=a(11),x="a5306cc96e8f45358412f4a05bebec95",v="https://api.football-data.org/v2/",g=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"competitions"),{headers:{"X-Auth-Token":x}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,c,n,r,s=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"",c=s.length>2&&void 0!==s[2]?s[2]:"",n=s.length>3&&void 0!==s[3]?s[3]:"",e.next=5,fetch("".concat(v,"competitions/").concat(t,"/matches?season=").concat(a,"&dateFrom=").concat(c,"&dateTo=").concat(n),{headers:{"X-Auth-Token":x}});case 5:return r=e.sent,e.next=8,r.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"teams"),{headers:{"X-Auth-Token":x}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,c,n=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:"",e.next=3,fetch("".concat(v,"competitions/").concat(t,"/teams?season=").concat(a),{headers:{"X-Auth-Token":x}});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,c,n,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:"",c=r.length>2&&void 0!==r[2]?r[2]:"",e.next=4,fetch("".concat(v,"teams/").concat(t,"/matches?dateFrom=").concat(a,"&dateTo=").concat(c),{headers:{"X-Auth-Token":x}});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var E=function(e){var t=e.id,a=(e.code,e.area),c=e.name,n=e.currentSeason;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("span",{className:"card-title grey-text text-darken-4",children:c}),Object(d.jsx)("p",{children:a.name}),Object(d.jsx)("p",{children:n?"Start: ".concat(n.startDate," - End: ").concat(n.endDate):null})]}),Object(d.jsxs)("div",{className:"card-action",children:[Object(d.jsx)(i.b,{to:"/competition/".concat(t,"/matches"),className:"btn",children:"Matches"}),Object(d.jsx)(i.b,{to:"/competition/".concat(t,"/teams"),className:"btn right",children:"Teams"})]})]})};var k=function(){var e=Object(c.useContext)(h),t=e.competitions,a=e.filteredCompetitions,n=e.setCompetitions,r=e.getUrlSearchValue,s=Object(o.g)().search;return Object(c.useEffect)((function(){g().then((function(e){return n(e.competitions,r("searchValue"))}))}),[s]),t.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(V,{}),a.length?Object(d.jsx)("div",{className:"list",children:a.map((function(e){return Object(d.jsx)(E,Object(u.a)({},e),e.id)}))}):Object(d.jsx)("h4",{children:"Sorry, nothing found..."})]}):Object(d.jsx)(A,{})};var C=function(e){var t=e.id,a=e.area,c=e.name,n=e.crestUrl,r=e.website,s="";return s=n&&""!==n?n:"https://via.placeholder.com/300x200",Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(d.jsx)("img",{className:"activator",src:s,alt:c})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("span",{className:"card-title grey-text text-darken-4",children:c}),Object(d.jsx)("p",{children:a.name}),Object(d.jsx)("a",{href:r,className:"team-link",children:"Link on official website"})]}),Object(d.jsx)("div",{className:"card-action",children:Object(d.jsx)(i.b,{to:"/team/".concat(t,"/matches"),className:"btn",children:"Matches"})})]})};var w=function(){var e=Object(c.useContext)(h),t=e.teams,a=e.filteredTeams,n=e.setTeams,r=e.setYear,s=e.setSearchValue,i=e.getUrlSearchValue,l=Object(o.h)().id,j=Object(o.g)(),m=j.pathname,b=j.search;return Object(c.useEffect)((function(){m.includes("competition")?N(l,i("year")).then((function(e){return n(e.teams,i("searchValue"))})):m.includes("teams")&&y().then((function(e){return n(e.teams,i("searchValue"))})),r(i("year")),s(i("searchValue"))}),[l,b]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L,{}),t.length?a.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(V,{}),m.includes("competition")?Object(d.jsx)(M,{}):null,Object(d.jsx)("div",{className:"list",children:a.map((function(e){return Object(d.jsx)(C,Object(u.a)({},e),e.id)}))})]}):Object(d.jsx)("h4",{children:"Sorry, information is not available..."}):Object(d.jsx)(A,{})]})};var F=function(e){var t,a,c=e.utcDate,n=e.status,r=e.score,s=e.homeTeam,i=e.awayTeam,o="",l="";return"FINISHED"===n&&(o=r.fullTime.homeTeam,l=r.fullTime.awayTeam),Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsx)("span",{className:"card-title grey-text text-darken-4",children:"".concat(null!==(t=s.name)&&void 0!==t?t:"not defined yet"," ").concat(o," : \n                    ").concat(l," ").concat(null!==(a=i.name)&&void 0!==a?a:"not defined yet")}),Object(d.jsx)("p",{children:c.split("T")[0]}),Object(d.jsx)("p",{children:n})]})})};var _=function(){var e=Object(c.useContext)(h).filteredMatches,t=Object(o.g)().pathname;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(V,{}),e?e.length?Object(d.jsxs)(d.Fragment,{children:[t.includes("competition")?Object(d.jsx)(M,{}):null,Object(d.jsx)(D,{}),Object(d.jsx)("div",{className:"list",children:e.map((function(e){return Object(d.jsx)(F,Object(u.a)({},e),e.id)}))})]}):Object(d.jsx)("h4",{children:"Sorry, nothing found..."}):Object(d.jsx)(A,{})]})};var A=function(){return Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"indeterminate"})})};var V=function(){var e=Object(c.useContext)(h),t=e.searchValue,a=e.setSearchValue,n=Object(o.g)().pathname,r=Object(o.f)().push,s=n.includes("competitions")?"area":"team name",i=function(){r({pathname:n,search:"?searchValue=".concat(t)})};return Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("input",{placeholder:"search by ".concat(s),type:"search",name:"search",className:"validate",onKeyDown:function(e){"Enter"===e.key&&i()},value:t,onChange:function(e){a(e.target.value)}}),Object(d.jsx)("button",{className:"btn search-btn",onClick:i,children:"Search"})]})};var M=function(){for(var e=Object(c.useContext)(h),t=e.year,a=e.setYear,n=Object(o.g)().pathname,r=Object(o.f)().push,s=[],i=(new Date).getFullYear(),l=1920;l<=i;l++)s.push(l);return Object(d.jsx)("div",{className:"input-field",children:Object(d.jsxs)("select",{name:"select",value:t,onChange:function(e){return t=e.target.value,r({pathname:n,search:"?year=".concat(t)}),void a(t);var t},children:[Object(d.jsx)("option",{value:"",disabled:!0,children:"Choose year"}),s.map((function(e,t){return Object(d.jsx)("option",{value:"".concat(e),children:e},t)}))]})})};var D=function(){var e=Object(c.useContext)(h),t=e.dateFrom,a=e.dateTo,n=e.setDateFrom,r=e.setDateTo,s=Object(o.g)().pathname,i=Object(o.f)().push;return Object(d.jsxs)("div",{className:"date-filter",children:[Object(d.jsx)("label",{className:"filter-label",htmlFor:"date-from",children:"From"}),Object(d.jsx)("input",{type:"date",id:"date-from",className:"datepicker",onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("label",{className:"filter-label",htmlFor:"date-to",children:"To"}),Object(d.jsx)("input",{type:"date",id:"date-to",className:"datepicker",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)("button",{className:"btn filter-btn",onClick:function(){i({pathname:s,search:"?dateFrom=".concat(t,"&dateTo=").concat(a)})},children:"Apply"})]})};var L=function(){var e=Object(o.f)().goBack;return Object(d.jsx)("button",{className:"btn back-btn",onClick:e,children:"Back"})};var R=function(){return Object(d.jsx)("h1",{children:"Page not found..."})};var U=function(){return Object(d.jsxs)("div",{className:"main-links",children:[Object(d.jsx)(i.b,{to:"/competitions",className:"main-link",children:"Watch all competitions"}),Object(d.jsx)(i.b,{to:"/teams",className:"main-link",children:"Watch all teams"})]})};var Y=function(){var e=Object(c.useContext)(h),t=e.filteredMatches,a=e.setMatches,n=e.setYear,r=e.setSearchValue,s=e.getUrlSearchValue,i=Object(o.h)().id,l=Object(o.g)(),u=l.pathname,j=l.search;return Object(c.useEffect)((function(){u.includes("competition")?T(i,s("year"),s("dateFrom"),s("dateTo")).then((function(e){return a(e.matches,s("searchValue"))})):u.includes("team")&&(S(i,s("dateFrom"),s("dateTo")).then((function(e){return a(e.matches,s("searchValue"))})),n(s("year")),r(s("searchValue")))}),[i,j]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L,{}),t?Object(d.jsx)(_,{}):Object(d.jsx)("h4",{children:"Sorry, nothing found..."})]})};var I=function(){return Object(d.jsx)("nav",{className:"deep-purple lighten-1",children:Object(d.jsx)("div",{className:"nav-wrapper",children:Object(d.jsx)(i.b,{to:"/",className:"brand-logo",children:"SoccerStat"})})})};var H=function(){return Object(d.jsx)("footer",{className:"page-footer deep-purple darken-4",children:Object(d.jsx)("div",{className:"footer-copyright",children:Object(d.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text | AlexD",Object(d.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/PVthfinder",target:"_blank",rel:"noreferrer",children:"My GitHub"})]})})})};a(33);var P=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{basename:"soccer_stat",children:[Object(d.jsx)(I,{}),Object(d.jsx)(b,{children:Object(d.jsx)("main",{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:U}),Object(d.jsx)(o.a,{path:"/competitions",component:k}),Object(d.jsx)(o.a,{path:"/teams",component:w}),Object(d.jsx)(o.a,{path:"/competition/:id/matches",component:Y}),Object(d.jsx)(o.a,{path:"/competition/:id/teams",component:w}),Object(d.jsx)(o.a,{path:"/team/:id/matches",component:Y}),Object(d.jsx)(o.a,{component:R})]})})}),Object(d.jsx)(H,{})]})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ff5548cd.chunk.js.map