(this["webpackJsonpbit-show"]=this["webpackJsonpbit-show"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=(a(28),a(29),a(30),a(1)),l=a(2),o=a(4),u=a(3),m=a(5),h=a(11),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper blue"},c.a.createElement(h.b,{to:"/"}," ",c.a.createElement("span",{className:"brand-logo center"},"BIT SHOW"))))}}]),t}(c.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.showInfo,t=e.id,a=e.picture,n=e.title,r=e.rating;return a||(a={medium:"http://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg"}),c.a.createElement("div",{className:"col s12 m6 xl3"},c.a.createElement(h.b,{to:"/".concat(t)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:a.medium,alt:""}),c.a.createElement("span",{className:"btn-floating halfway-fab waves-effect waves-light blue center"},"  ",r)),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},n)))))}}]),t}(c.a.Component),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).onInputHandler=function(e){var t=e.target.value,n=a.props.onSearch;a.setState({query:t}),n(t)},a.state={query:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper white"},c.a.createElement("form",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{id:"search",type:"search",placeholder:"Search Show",required:!0,onChange:this.onInputHandler,value:this.state.query}),c.a.createElement("label",{className:"label-icon",htmlFor:"search"},c.a.createElement("i",{className:"material-icons"},"search")),c.a.createElement("i",{className:"material-icons"},"close")))))}}]),t}(c.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sk-cube-grid"},c.a.createElement("div",{className:"sk-cube sk-cube1"}),c.a.createElement("div",{className:"sk-cube sk-cube2"}),c.a.createElement("div",{className:"sk-cube sk-cube3"}),c.a.createElement("div",{className:"sk-cube sk-cube4"}),c.a.createElement("div",{className:"sk-cube sk-cube5"}),c.a.createElement("div",{className:"sk-cube sk-cube6"}),c.a.createElement("div",{className:"sk-cube sk-cube7"}),c.a.createElement("div",{className:"sk-cube sk-cube8"}),c.a.createElement("div",{className:"sk-cube sk-cube9"}))}}]),t}(c.a.Component),f=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"get",value:function(e){return fetch(e).then((function(e){return e.json()}))}}]),e}());var E=function e(t){var a=t.id,n=t.name,c=t.image,r=t.rating,s=t.genres,l=t.summary;Object(i.a)(this,e),this.id=a,this.title=n,this.picture=c,this.rating=r.average,this.genres=s,this.summary=l},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).searchShows=function(e){(function(e){var t="http://api.tvmaze.com/search/shows?q=".concat(e);return f.get(t)})(e).then((function(e){a.setState({searchShows:e.map((function(e){return new E(e.show)})),isLoaded:!0})}))},a.state={shows:[],searchShows:[],isLoaded:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.get("http://api.tvmaze.com/shows").then((function(t){t.length=50,e.setState({shows:t.map((function(e){return new E(e)})),isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.shows,a=e.searchShows,n=t;return a.length&&(n=a),c.a.createElement("div",{className:"row"},c.a.createElement(p,{onSearch:this.searchShows}),this.state.isLoaded?n.map((function(e){return c.a.createElement(b,{showInfo:e,key:e.id})})):c.a.createElement(v,null))}}]),t}(c.a.Component),j=a(10),g=function e(t){Object(i.a)(this,e),this.id=t.person.id,this.name=t.person.name,this.picture=t.person.image.medium},N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("span",{className:"genre grey lighten-1"},this.props.genre)}}]),t}(c.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.actor,t=e.name,a=e.picture;return c.a.createElement("div",{className:"col s4 m4 xl2"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:a,alt:""}),c.a.createElement("span",{className:"card-title"},t))))}}]),t}(c.a.Component);var w=function(e,t){for(var a=e.length,n="",c=0;c<a;c++){for(var r=e,s=0;s<t.length;s++)0===e.indexOf(t[s])?r=r.substr(t[s].length,a):-1!==e.indexOf(t[s])&&(r=r.substr(0,r.indexOf(t[s]))+r.substr(r.indexOf(t[s])+t[s].length,a));n=r}return n},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={show:{},actors:[],isLoaded:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(e){var t="http://api.tvmaze.com/shows/".concat(e,"?embed=cast");return f.get(t)})(this.props.match.params.id).then((function(t){var a=t._embedded.cast;a.length=6,e.setState({isLoaded:!0,show:new E(t),actors:a.map((function(e){return new g(e)}))})}))}},{key:"render",value:function(){var e=this.state.show,t=e.picture,a=e.title,n=e.genres,r=void 0===n?[]:n,s=e.summary,i=void 0===s?"":s,l=this.state.actors;return this.state.isLoaded?(t||(t={medium:"http://static.tvmaze.com/uploads/images/medium_portrait/0/305.jpg"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6 xl5"},c.a.createElement("div",{className:"card single"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:t.medium,alt:""})))),c.a.createElement("div",{className:"col s12 m6 xl6 offset-xl1"},c.a.createElement("h3",{className:"card-title"},a),r.map((function(e){return c.a.createElement(N,{genre:e})})),c.a.createElement("div",{className:"about"},w(i,["<p>","</p>","<b>","</b>"])),"   "),c.a.createElement("div",{className:"col s12 m12 xl12"},c.a.createElement("div",{className:"row"},l.map((function(e){return c.a.createElement(k,{actor:e,key:e.id})})))))):c.a.createElement(v,null)}}]),t}(c.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/",component:O}),c.a.createElement(j.a,{path:"/:id",component:y})))}}]),t}(c.a.Component);var x=function(){return(new Date).getFullYear()},C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"page-footer blue"},c.a.createElement("div",{className:"footer-copyright"},c.a.createElement("div",{className:"container"},"\xa9 ",x()," Copyright Text")))}}]),t}(c.a.Component),L=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App container"},c.a.createElement(d,null),c.a.createElement(S,null),c.a.createElement(C,null))}}]),t}(c.a.Component));s.a.render(c.a.createElement(h.a,null,c.a.createElement(L,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.80884a41.chunk.js.map