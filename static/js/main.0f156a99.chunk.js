(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(60)},50:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),s=a(8),i=a.n(s),l=a(10),u=a(3),d=a(4),m=a(7),h=a(5),f=a(6),p=a(11),b=a.n(p),v="https://api.dataatwork.org/v1",w=c.a.createContext(),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={findedJobs:[],lastJobSelected:{},show:!1},a.findJobs=Object(l.a)(i.a.mark(function e(){var t,n,c,r=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,b.a.get("".concat(v,"/jobs/autocomplete?contains=").concat(t));case 3:n=e.sent,c=n.data,a.setState({findedJobs:c});case 6:case"end":return e.stop()}},e,this)})),a.findJob=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(v,"/jobs/").concat(t));case 2:n=e.sent,c=n.data,console.log("SelectedJob =>",c),a.setState({lastJobSelected:c});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.show=function(e){return a.setState({show:e})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={state:this.state,findJobs:this.findJobs,findJob:this.findJob,show:this.show};return c.a.createElement(w.Provider,{value:e},this.props.children)}}]),t}(n.Component),x=(a(50),a(2)),g=function(e){var t=e.count,a=void 0===t?0:t,n=e.iconName;return c.a.createElement("button",{className:"badge__icon"},c.a.createElement("i",{className:"fas fa-"+n}),0!==a?c.a.createElement("span",{className:"badge__counter"},a):null)},O=a(23),j=a.n(O),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={originalWidth:0},a.onFocus=function(){a.setState({originalWidth:2*a.width}),a.context.show(!0)},a.handleChange=function(e){a.onSearch(e.target.value)},a.onSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.length>0&&a.context.findJobs(e)},a.clickOption=function(e,t){a.context.findJob(t),a.context.show(!1)},a.searchList=function(){return a.context.state.findedJobs.map(function(e){return c.a.createElement("li",{key:e.uuid,onClick:function(t){return a.clickOption(t,e.uuid)},className:"search__item"},e.suggestion)})},a.width=e.width,a.placeholderText=e.placeholderText,a.onSearch=j()(a.onSearch.bind(Object(x.a)(Object(x.a)(a))),500),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({originalWidth:this.width})}},{key:"render",value:function(){return c.a.createElement("div",{className:"search-box"},c.a.createElement("div",{className:"search__wrapper bg-white flex"},c.a.createElement("input",{style:{width:this.context.state.show?this.state.originalWidth+"px":this.width+"px"},className:"search__input rounded p-2",type:"text",placeholder:this.placeholderText,onFocus:this.onFocus,onChange:this.handleChange}),c.a.createElement("div",{className:"w-auto flex justify-end items-center p-2"},c.a.createElement("i",{className:"fas fa-search"}))),c.a.createElement("div",{className:"search__dropdown",style:{display:this.context.state.show?"block":"none"}},c.a.createElement("nav",{className:"search__nav"},c.a.createElement("ul",{className:"search__list list-reset"},this.searchList()))))}}]),t}(n.Component);N.contextType=w;var k=N,y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).setWrapperRef=function(e){a.wrapperRef=e},a.handleClickOutside=function(e){a.wrapperRef&&!a.wrapperRef.contains(e.target)&&a.context.show(!1)},a.setWrapperRef=a.setWrapperRef.bind(Object(x.a)(Object(x.a)(a))),a.handleClickOutside=a.handleClickOutside.bind(Object(x.a)(Object(x.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){return c.a.createElement("nav",{ref:this.setWrapperRef,className:"navigation flex items-center justify-between flex-wrap"},c.a.createElement("div",{className:"flex items-center flex-no-shrink"},c.a.createElement("span",{className:"font-semibold tracking-normal text-white"},"React Frontend Test")),c.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},c.a.createElement("div",{className:"flex-grow"}),c.a.createElement("div",null,c.a.createElement("ul",{className:"list-reset flex items-center navigation__options"},c.a.createElement("li",{className:"mr-4"},c.a.createElement(k,{placeholderText:"Search...",width:200})),c.a.createElement("li",{className:"mr-4"},c.a.createElement(g,{count:10,iconName:"bell"})),c.a.createElement("li",{className:"mr-4"},c.a.createElement(g,{count:7,iconName:"envelope"})),c.a.createElement("li",{className:"mr-4"},c.a.createElement(g,{iconName:"user"}))))))}}]),t}(n.Component);y.contextType=w;var J=y,_=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("header",{className:"header bg-blue-darkest"},c.a.createElement("div",{className:"container mx-auto"},c.a.createElement(J,null))),c.a.createElement("main",{className:"main text-center py-6"},c.a.createElement("div",{className:"container"},c.a.createElement("code",null,"Selected Option: ",JSON.stringify(this.context.state.lastJobSelected)))))}}]),t}(n.Component);_.contextType=w;var S=_,C=function(){return c.a.createElement(E,null,c.a.createElement(S,null))};C.contextType=E;var W=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.0f156a99.chunk.js.map