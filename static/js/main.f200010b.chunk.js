(this["webpackJsonptu-propia-aventura"]=this["webpackJsonptu-propia-aventura"]||[]).push([[0],{17:function(e,a,o){},18:function(e,a,o){},30:function(e,a,o){"use strict";o.r(a);var n=o(1),s=o.n(n),t=o(12),i=o.n(t),r=(o(17),o.p,o(18),o(2)),c=o(3),l=o(5),u=o(4),d=o(0),p=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){return Object(r.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"opciones",children:[Object(d.jsxs)("div",{className:"opcion",children:[Object(d.jsx)("button",{className:"botones",onClick:this.props.handleClick,id:"A",children:"A"}),Object(d.jsx)("h2",{children:this.props.opcionA})]}),Object(d.jsxs)("div",{className:"opcion",children:[Object(d.jsx)("button",{className:"botones",onClick:this.props.handleClick,id:"B",children:"B"}),Object(d.jsx)("h2",{children:this.props.opcionB})]})]})}}]),o}(n.Component),b=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(){return Object(r.a)(this,o),a.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"historial",children:[Object(d.jsxs)("h3",{children:["Selecci\xf3n anterior: ",this.props.seleccionAnterior]}),Object(d.jsx)("h4",{children:"Historial de opciones elegidas: "}),Object(d.jsx)("span",{children:this.props.elecciones})]})}}]),o}(n.Component),h=o(6),m=o.n(h),j=o(7),v=[],f=function(e){Object(l.a)(o,e);var a=Object(u.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=a.call(this,e)).handleClick=function(e){var a=e.target.id;n.state.escenario>=7?m.a.fire({title:"Gracias por so\xf1ar!",text:"Vuelve pronto...",confirmButtonColor:"#30a830",confirmButtonText:"Seguir so\xf1ando",showDenyButton:!0,denyButtonText:"Repositorio GitHub",denyButtonColor:"#333333"}).then((function(e){e.isConfirmed?(m.a.fire({title:"Reiniciando el sue\xf1o...",icon:"success"}),setTimeout((function(){return window.location.reload()}),1500)):e.isDenied&&(m.a.fire({title:"Viajando al repositorio",icon:"success"}),setTimeout((function(){return window.location="https://github.com/NickoAcu/tu-propia-aventura"}),500))})):"A"===a&&"A"!==n.state.seleccionAnterior?n.setState({escenario:n.state.escenario+1,seleccionAnterior:"A"}):"A"===a&&"A"===n.state.seleccionAnterior?n.setState({escenario:n.state.escenario+2}):"B"===a&&"A"===n.state.seleccionAnterior?n.setState({escenario:n.state.escenario+3,seleccionAnterior:"B"}):"B"===a&&n.setState({escenario:n.state.escenario+2,seleccionAnterior:"B"}),console.log(v)},n.state={escenario:0,seleccionAnterior:""},n}return Object(c.a)(o,[{key:"componentDidMount",value:function(){m.a.fire({title:"Bienvenido a tu propia aventura!",text:"Tus desiciones afectaran el final de tu historia, elige sabiamente...",confirmButtonColor:"#30a830",confirmButtonText:"Comenzar"})}},{key:"componentDidUpdate",value:function(e,a){a.escenario!==this.state.escenario&&v.push(this.state.seleccionAnterior)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("div",{className:"background"}),Object(d.jsxs)("div",{className:"layout",children:[Object(d.jsx)("h1",{className:"historia",children:j[this.state.escenario].historia}),Object(d.jsx)(p,{handleClick:this.handleClick,opcionA:j[this.state.escenario].opciones.a,opcionB:j[this.state.escenario].opciones.b}),Object(d.jsx)(b,{seleccionAnterior:this.state.seleccionAnterior,elecciones:v.map((function(e,a){return Object(d.jsx)("li",{children:e},a)}),j[this.state.escenario].id)})]})]})}}]),o}(n.Component);var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,31)).then((function(a){var o=a.getCLS,n=a.getFID,s=a.getFCP,t=a.getLCP,i=a.getTTFB;o(e),n(e),s(e),t(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),g()},7:function(e){e.exports=JSON.parse('[{"id":"1","historia":"Un d\xeda como cualquiera te vas a dormir, lo siguiente que sabes es que te despertas en el medio de un bosque.","opciones":{"a":"Pedir ayuda a los gritos.","b":"Mirar a mi alrededor."}},{"id":"2a","historia":"Instant\xe1neamente entras en p\xe1nico por lo bizarro de la situaci\xf3n y gritas: -Aiiudaaaa. Nadie responde. Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"2b","historia":"Miras a tu alrededor y ves solo \xe1rboles, plantas y hongos, Detr\xe1s de un \xe1rbol enfrente tuyo se asoma lo que parece ser una bola de pelo de 2 metros.","opciones":{"a":"Te levant\xe1s y camin\xe1s lentamente hacia atr\xe1s.","b":"Te levant\xe1s y sal\xeds corriendo."}},{"id":"3a","historia":"Lento y sin sacarle la mirada de encima te vas alejando de la cosa peluda. Ves que de golpe se mueve y empieza a correr hacia vos, no distinguis que es pero salis corriendo. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"3b","historia":"Al levantarte ves que se mueve y empieza a correr hacia vos, no distingu\xeds que \xe9s pero sal\xeds corriendo pensando que puede ser un oso. Escuchas de golpe un grito proveniente de la cosa peluda: -Esperaaa!!","opciones":{"a":"Le haces caso y esperas.","b":"Mira si voy a esperar, sigo corriendo."}},{"id":"4a","historia":"Paras de correr y al darte vuelta con algo de miedo ves que lo que te persegu\xeda se detiene, te quedas sin palabras al ver que es un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"4b","historia":"El miedo no deja tu cuerpo y hace bien as\xed que segu\xeds corriendo, sin darte cuenta te tropezas con una piedra y quedas de cara con lo que te persegu\xeda, lo que ves es rid\xedculo, un oso gigante con la cara de una se\xf1ora muy maquillada que te dice; -Si quer\xe9s llorar, llora pero est\xe1s en un sue\xf1o mi amor.","opciones":{"a":"Me r\xedo en la cara del oso-se\xf1ora.","b":"Me pongo a bailar."}},{"id":"5a","historia":"Te empezas a reir como nunca, y de una forma bastante molesta la verdad. El oso-se\xf1ora se cansa de vos y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN.","b":"FIN."}},{"id":"5b","historia":"Por alguna raz\xf3n decid\xeds ponerte a bailar, el oso-se\xf1ora no entiende porqu\xe9, los animales del bosque no entienden porqu\xe9, yo que escribo esto no entiendo porqu\xe9, nadie entiende porqu\xe9. El oso-se\xf1ora se cansa de tu bailecito y te da una s\xf3lida bofetada en la cara con su brazo de 60kg que te tuerce el cuello y te despierta instant\xe1neamente. FIN.","opciones":{"a":"FIN","b":"FIN"}}]')}},[[30,1,2]]]);
//# sourceMappingURL=main.f200010b.chunk.js.map