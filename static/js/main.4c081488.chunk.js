(this["webpackJsonpclick-game"]=this["webpackJsonpclick-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"clicked":false,"id":1,"name":"Gene","image":"./images/gene1.jpeg"},{"clicked":false,"id":2,"name":"Gene","image":"./images/gene2.jpeg"},{"clicked":false,"id":3,"name":"Gene","image":"./images/gene3.jpeg"},{"clicked":false,"id":4,"name":"Gene","image":"./images/gene4.jpeg"},{"clicked":false,"id":5,"name":"Gene","image":"./images/gene5.jpeg"},{"clicked":false,"id":6,"name":"Gene","image":"./images/gene6.jpeg"},{"clicked":false,"id":7,"name":"Gene","image":"./images/gene7.jpeg"},{"clicked":false,"id":8,"name":"Gene","image":"./images/gene8.jpeg"},{"clicked":false,"id":9,"name":"Gene","image":"./images/gene9.jpeg"},{"clicked":false,"id":10,"name":"Gene","image":"./images/gene10.jpeg"},{"clicked":false,"id":11,"name":"Gene","image":"./images/gene11.jpeg"},{"clicked":false,"id":12,"name":"Gene","image":"./images/gene12.jpeg"}]')},,,,,,,,function(e,a,n){e.exports=n(18)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),t=n.n(i),c=n(3),s=n.n(c),r=(n(14),n(4)),l=n(5),o=n(7),g=n(6),m=n(8);n(15);var d=function(e){return t.a.createElement("div",{className:"img-container"},t.a.createElement("span",{onClick:function(){e.clickCard(e.id),e.randomize()}},t.a.createElement("img",{src:e.image,className:"img-fluid",alt:"Responsive",style:{width:"300px",height:"250px"}})))},f=(n(16),n(1));n(17);var h=function(e){return t.a.createElement("div",{className:"wrapper"},e.children)},u=function(e){function a(){var e,n;Object(r.a)(this,a);for(var i=arguments.length,t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(t)))).state={genewilders:f,score:0,highScore:0},n.clickGene=function(e){console.log(e);var a=n.state.genewilders.map((function(a){if(a.id===e&&!0===a.clicked)n.state.score>n.state.highScore&&n.setState({highScore:n.state.score}),n.resetGame();else if(a.id===e&&!1===a.clicked){var i=n.state.score;a.clicked=!0,n.setState({score:i+1})}return console.log(i),a}));n.setState({genewilders:a})},n.randomize=function(){for(var e=n.state.genewilders.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),i=[n.state.genewilders[a],n.state.genewilders[e]];n.state.genewilders[e]=i[0],n.state.genewilders[a]=i[1]}n.setState({genewilders:f})},n.resetGame=function(){n.setState({score:0,images:n.randomize(n.state.genewilders)})},n}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return t.a.createElement("div",null,t.a.createElement("div",{className:"scoreContainer"},t.a.createElement("h3",{className:"score"},"Score: ",this.state.score,"/12"),t.a.createElement("h3",{className:"score"},"High Score: ",this.state.highScore)),t.a.createElement(h,null,this.state.genewilders.map((function(a){return t.a.createElement(d,{image:a.image,clickCard:e.clickGene,clicked:e.state.genewilders.clicked,randomize:e.randomize,id:a.id,key:a.id})}))))}}]),a}(t.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4c081488.chunk.js.map