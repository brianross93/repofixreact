(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(40)},15:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r),c=(a(15),a(1)),l=a(2),o=a(4),m=a(3),u=a(5);a(17);var d=function(){return s.a.createElement("div",{class:"card bg-dark text-white"},s.a.createElement("img",{src:"https://blog.doist.com/wp-content/uploads/2016/05/Banner_image@2x-2.png",class:"card-img",alt:"..."}))};var p=function(){return s.a.createElement("div",{class:"card-group"},s.a.createElement("div",{class:"card"},s.a.createElement("img",{src:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_539953664_213316.jpg",class:"card-img-top",alt:"..."}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},"Increase Sales and Productivity"),s.a.createElement("p",{class:"card-text"},"Using the Swimlane Tool, you can immediately improve sales as customers clamore for your stuff"))),s.a.createElement("div",{class:"card"},s.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/51j8k8QXNtL._SY445_SX342_QL70_ML2_.jpg",class:"card-img-top",alt:"..."}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},"The Cashman"),s.a.createElement("p",{class:"card-text"},"Benny Cashman has personally reccomended this product"))),s.a.createElement("div",{class:"card"},s.a.createElement("img",{src:"https://getnave.com/blog/wp-content/uploads/2018/11/increase-productivity-by-250.png.",class:"card-img-top",alt:"..."}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},"Increase Productivity"),s.a.createElement("p",{class:"card-text"},"Be all you can be with the tools of productivity."),s.a.createElement("p",{class:"card-text"},s.a.createElement("small",{class:"text-muted"},"Last updated 3 mins ago")))))};var h=function(){return s.a.createElement("div",{class:"p-5 text-center bg-light"},s.a.createElement("h1",{class:"mb-3"},"The Ultimate Productivity Tool"),s.a.createElement("h4",{class:"mb-3"},"The Superior Swimlane"),s.a.createElement("a",{class:"btn btn-primary",href:"#shipping-requests",role:"button"},"Click Here To Go To The Swimlane"))};var g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link "+("home"===this.props.selectedTab?"active":""),onClick:function(){return e.props.onClick("home")},id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"home"===this.props.selectedTab},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link "+("shipping-requests"===this.props.selectedTab?"active":""),onClick:function(){return e.props.onClick("shipping-requests")},id:"shipping-requests-tab","data-toggle":"tab",href:"#shipping-requests",role:"tab","aria-controls":"shipping-requests","aria-selected":"shipping-requests"===this.props.selectedTab},"Shipping Requests")))}}]),t}(s.a.Component),b=a(9),v=a.n(b),f=(a(30),a(32),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=["Card"];return"backlog"===this.props.status?e.push("Card-grey"):"in-progress"===this.props.status?e.push("Card-blue"):"complete"===this.props.status&&e.push("Card-green"),s.a.createElement("div",{className:e.join(" "),"data-id":this.props.id,"data-status":this.props.status},s.a.createElement("div",{className:"Card-title"},this.props.name))}}]),t}(s.a.Component)),E=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.clients.map(function(e){return s.a.createElement(f,{key:e.id,id:e.id,name:e.name,description:e.description,status:e.status})});return s.a.createElement("div",{className:"Swimlane-column"},s.a.createElement("div",{className:"Swimlane-title"},this.props.name),s.a.createElement("div",{className:"Swimlane-dragColumn",ref:this.props.dragulaRef},e))}}]),t}(s.a.Component)),k=(a(36),function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getClients();return a.state={clients:{backlog:n.filter(function(e){return!e.status||"backlog"===e.status}),inProgress:n.filter(function(e){return e.status&&"in-progress"===e.status}),complete:n.filter(function(e){return e.status&&"complete"===e.status})}},a.swimlanes={backlog:s.a.createRef(),inProgress:s.a.createRef(),complete:s.a.createRef()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getClients",value:function(){return[["1","Stark, White and Abbott","Cloned Optimal Architecture","in-progress"],["2","Wiza LLC","Exclusive Bandwidth-Monitored Implementation","complete"],["3","Nolan LLC","Vision-Oriented 4Thgeneration Graphicaluserinterface","backlog"],["4","Thompson PLC","Streamlined Regional Knowledgeuser","in-progress"],["5","Walker-Williamson","Team-Oriented 6Thgeneration Matrix","in-progress"],["6","Boehm and Sons","Automated Systematic Paradigm","backlog"],["7","Runolfsson, Hegmann and Block","Integrated Transitional Strategy","backlog"],["8","Schumm-Labadie","Operative Heuristic Challenge","backlog"],["9","Kohler Group","Re-Contextualized Multi-Tasking Attitude","backlog"],["10","Romaguera Inc","Managed Foreground Toolset","backlog"],["11","Reilly-King","Future-Proofed Interactive Toolset","complete"],["12","Emard, Champlin and Runolfsdottir","Devolved Needs-Based Capability","backlog"],["13","Fritsch, Cronin and Wolff","Open-Source 3Rdgeneration Website","complete"],["14","Borer LLC","Profit-Focused Incremental Orchestration","backlog"],["15","Emmerich-Ankunding","User-Centric Stable Extranet","in-progress"],["16","Willms-Abbott","Progressive Bandwidth-Monitored Access","in-progress"],["17","Brekke PLC","Intuitive User-Facing Customerloyalty","complete"],["18","Bins, Toy and Klocko","Integrated Assymetric Software","backlog"],["19","Hodkiewicz-Hayes","Programmable Systematic Securedline","backlog"],["20","Murphy, Lang and Ferry","Organized Explicit Access","backlog"]].map(function(e){return{id:e[0],name:e[1],description:e[2],status:e[3]}})}},{key:"renderSwimlane",value:function(e,t,a){return s.a.createElement(E,{name:e,clients:t,dragulaRef:a})}},{key:"componentDidMount",value:function(){var e=[this.swimlanes.backlog.current,this.swimlanes.inProgress.current,this.swimlanes.complete.current];v()([e[0],e[1],e[2]]).on("drop",function(e,t,a,n){console.log(typeof n),Object.is(n,null)?alert("Please do not add a card to the bottom"):null!==n.getAttribute("data-status")&&(e.setAttribute("data-status",n.getAttribute("data-status")),e.setAttribute("class",n.getAttribute("class")))})}},{key:"render",value:function(){return s.a.createElement("div",{className:"Board"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},this.renderSwimlane("Backlog",this.state.clients.backlog,this.swimlanes.backlog)),s.a.createElement("div",{className:"col-md-4"},this.renderSwimlane("In Progress",this.state.clients.inProgress,this.swimlanes.inProgress)),s.a.createElement("div",{className:"col-md-4"},this.renderSwimlane("Complete",this.state.clients.complete,this.swimlanes.complete)))))}}]),t}(s.a.Component)),y=(a(38),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={selectedTab:"home"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"renderShippingRequests",value:function(){return s.a.createElement(k,null)}},{key:"renderNavigation",value:function(){var e=this;return s.a.createElement(g,{onClick:function(t){return e.changeTab(t)},selectedTab:this.state.selectedTab})}},{key:"renderTabContent",value:function(){switch(this.state.selectedTab){case"home":default:return s.a.createElement("div",null,s.a.createElement(h,null),s.a.createElement(d,null),s.a.createElement("br",null),s.a.createElement(p,null));case"shipping-requests":return this.renderShippingRequests()}}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},this.renderNavigation(),s.a.createElement("div",{className:"App-body"},this.renderTabContent()))}},{key:"changeTab",value:function(e){this.setState({selectedTab:e})}}]),t}(n.Component));i.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.a76874dc.chunk.js.map