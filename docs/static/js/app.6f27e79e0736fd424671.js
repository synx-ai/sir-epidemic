webpackJsonp([1],{"7EvL":function(t,e,s){"use strict";t.exports=function(t,e,s,i){return new a(t,e,s,i)};var a=function(t,e,s,a){this.deriv=e,this.y=t,this.n=this.y.length,this.dt=a,this.t=s,this._ctor=this.y.constructor,this._w=new this._ctor(this.n),this._k1=new this._ctor(this.n),this._k2=new this._ctor(this.n),this._k3=new this._ctor(this.n),this._k4=new this._ctor(this.n)};a.prototype.step=function(){this.deriv(this._k1,this.y,this.t);for(var t=0;t<this.n;t++)this._w[t]=this.y[t]+this._k1[t]*this.dt*.5;this.deriv(this._k2,this._w,this.t+.5*this.dt);for(t=0;t<this.n;t++)this._w[t]=this.y[t]+this._k2[t]*this.dt*.5;this.deriv(this._k3,this._w,this.t+.5*this.dt);for(t=0;t<this.n;t++)this._w[t]=this.y[t]+this._k3[t]*this.dt;this.deriv(this._k4,this._w,this.t+this.dt);var e=this.dt/6;for(t=0;t<this.n;t++)this.y[t]+=e*(this._k1[t]+2*this._k2[t]+2*this._k3[t]+this._k4[t]);return this.t+=this.dt,this},a.prototype.steps=function(t){for(var e=0;e<t;e++)this.step();return this}},JD12:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},i,!1,function(t){s("ZiV1")},null,null).exports,n=s("/ocq"),o=s("UlOv"),l=s("7EvL"),c=function(t){var e=function(e,s){for(var a=[(t.population-(t.currentInfected+t.currentDeaths+t.currentRecovered))/t.population,t.currentInfected/t.population,(t.currentDeaths+t.currentRecovered)/t.population],i=(Number(t.population),l(a,function(a,i,r){var n=i[0],o=i[1],l=(i[2],Number(t.population),-e*n*o),c=e*n*o-s*o,d=s*o;a[0]=l,a[1]=c,a[2]=d},0,1)),r=[],n=[],o=[],c=[],d=[],u=0;u<=Number(t.days);u+=1)i.step(),r.push(i.t),n.push(i.y[0]),o.push(i.y[1]),c.push(i.y[2]),d.push(t.capacity*(t.population/1e3));return{days:r,susceptibles:n.map(function(e){return(e*t.population).toFixed(0)}),infectious:o.map(function(e){return(e*t.population).toFixed(0)}),recovered:c.map(function(e){return(e*t.population).toFixed(0)}),capacity:d}},s=e(Number(t.r0),1-t.deathRate/100),a=e(Number(t.r0_worst),1-t.deathRate/100),i=e(Number(t.r0_best),1-t.deathRate/100);t.recoveredGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.recoveredGradient.addColorStop(0,"#56C1FF"),t.recoveredGradient.addColorStop(1,"#6047B5"),t.recoveredCIGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.recoveredCIGradient.addColorStop(0,"#56C1FF11"),t.recoveredCIGradient.addColorStop(1,"#6047B511"),t.infectiousGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.infectiousGradient.addColorStop(0,"#FAE232"),t.infectiousGradient.addColorStop(1,"#FF644E"),t.infectiousCIGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.infectiousCIGradient.addColorStop(0,"#FAE23211"),t.infectiousCIGradient.addColorStop(1,"#FF644E11"),t.susceptibleGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.susceptibleGradient.addColorStop(0,"#88FA4E"),t.susceptibleGradient.addColorStop(1,"#00A89D"),t.susceptibleCIGradient=t.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),t.susceptibleCIGradient.addColorStop(0,"#88FA4E11"),t.susceptibleCIGradient.addColorStop(1,"#00A89D11"),t.renderChart({labels:s.days,datasets:[{label:"Capacity",fill:!1,pointBackgroundColor:"transparent",borderWidth:2,borderDash:[10,10],data:a.capacity,backgroundColor:"#ffffffff",borderColor:"#ffffffff"},{label:"IC",fill:"+1",pointBackgroundColor:"transparent",borderWidth:2,data:i.susceptibles,backgroundColor:t.susceptibleCIGradient,borderColor:t.susceptibleCIGradient},{label:"Susceptible",fill:!1,pointBackgroundColor:t.susceptibleGradient,pointHitRadius:8,borderWidth:3,data:s.susceptibles,backgroundColor:t.susceptibleGradient,borderColor:t.susceptibleGradient},{label:"IC",fill:"-1",pointBackgroundColor:"transparent",borderWidth:2,data:a.susceptibles,backgroundColor:t.susceptibleCIGradient,borderColor:t.susceptibleCIGradient},{label:"IC",fill:!0,pointBackgroundColor:"transparent",borderWidth:2,data:i.infectious,backgroundColor:t.infectiousCIGradient,borderColor:t.infectiousCIGradient},{label:"Infectious",fill:!1,pointBackgroundColor:t.infectiousGradient,pointHitRadius:8,borderWidth:3,data:s.infectious,backgroundColor:t.infectiousGradient,borderColor:t.infectiousGradient},{label:"IC",fill:!0,pointBackgroundColor:"transparent",borderWidth:2,data:a.infectious,backgroundColor:t.infectiousCIGradient,borderColor:t.infectiousCIGradient},{label:"IC",fill:"+1",pointBackgroundColor:"transparent",borderWidth:2,data:i.recovered,backgroundColor:t.recoveredCIGradient,borderColor:t.recoveredCIGradient},{label:"Recovered",fill:!1,pointBackgroundColor:t.recoveredGradient,pointHitRadius:8,borderWidth:3,data:s.recovered,backgroundColor:t.recoveredGradient,borderColor:t.recoveredGradient},{label:"IC",fill:"-1",pointBackgroundColor:"transparent",borderWidth:2,data:a.recovered,backgroundColor:t.recoveredCIGradient,borderColor:t.recoveredCIGradient}]},t.options)},d={extends:o.a,props:{labels:{type:Array,default:function(){return[]}},chartconfig:{type:Object,default:function(){}},r0:{type:String,default:function(){return"2.2"}},r0_best:{type:String,default:function(){return"1.4"}},r0_worst:{type:String,default:function(){return"3.9"}},population:{type:String,default:function(){return"129200000"}},days:{type:String,default:function(){return"100"}},currentInfected:{type:String,default:function(){return"16"}},currentDeaths:{type:String,default:function(){return"0"}},currentRecovered:{type:String,default:function(){return"1"}},deathRate:{type:String,default:function(){return"3.4"}},capacity:{type:String,default:function(){return"1"}}},data:function(){return{options:{elements:{point:{radius:0}},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0,color:"#2d2d2d",zeroLineColor:"#2d2d2d"},scaleLabel:{display:!0,labelString:"Population %",fontFamily:"Avenir, Helvetica, Arial, sans-serif"}}],xAxes:[{gridLines:{display:!1},scaleLabel:{display:!0,labelString:"Days transcurred since outbreak",fontFamily:"Avenir, Helvetica, Arial, sans-serif",padding:10}}]},legend:{display:!1,position:"bottom",labels:{padding:20,fontColor:"#fff",filter:function(t,e){return!t.text.includes("IC")}}},responsive:!0,maintainAspectRatio:!1},gradient:null}},watch:{r0:function(){c(this)},r0_best:function(){c(this)},r0_worst:function(){c(this)},population:function(){c(this)},days:function(){c(this)},currentDeaths:function(){c(this)},currentInfected:function(){c(this)},currentRecovered:function(){c(this)},deathRate:function(){c(this)},capacity:function(){c(this)}},mounted:function(){c(this)}},u={name:"VueChartJS",components:{LineChart:s("VU/8")(d,null,!1,null,null,null).exports},data:function(){return{r0:"2.2",r0_best:"1.4",r0_worst:"3.9",population:"129200000",days:"99",currentInfected:"16",currentDeaths:"0",currentRecovered:"1",deathRate:"3.4",capacity:"1"}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-wrapper"},[s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h3",{staticClass:"is-size-3 has-text-white has-text-weight-bold"},[t._v("Epidemic Transmision Dynamics")]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h5",{staticClass:"is-size-5 has-text-white has-text-weight-light"},[t._v("Stochastic SIR epidemic model for COVID19")]),t._v(" "),s("div",{staticClass:"dark-border-wrap"},[s("div",{staticClass:"synx-gray-background fig-padding"},[s("line-chart",{attrs:{id:"srichart",r0:t.r0,r0_best:t.r0_best,r0_worst:t.r0_worst,population:t.population,days:t.days,currentDeaths:t.currentDeaths,currentInfected:t.currentInfected,currentRecovered:t.currentRecovered,deathRate:t.deathRate,capacity:t.capacity}}),t._v(" "),t._m(0)],1)])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.r0,expression:"r0"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.r0},on:{input:function(e){e.target.composing||(t.r0=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("R0 (mean)")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.r0_best,expression:"r0_best"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.r0_best},on:{input:function(e){e.target.composing||(t.r0_best=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("R0 (best)")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.r0_worst,expression:"r0_worst"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.r0_worst},on:{input:function(e){e.target.composing||(t.r0_worst=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("R0 (worst)")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.population,expression:"population"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.population},on:{input:function(e){e.target.composing||(t.population=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Population")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.days,expression:"days"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:"",oninput:"javascript: if (this.value > 365) this.value = 365; if (this.value < 1) this.value = 1;"},domProps:{value:t.days},on:{input:function(e){e.target.composing||(t.days=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Days (1 - 365)")])])])])]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentInfected,expression:"currentInfected"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.currentInfected},on:{input:function(e){e.target.composing||(t.currentInfected=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Current Infected")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDeaths,expression:"currentDeaths"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.currentDeaths},on:{input:function(e){e.target.composing||(t.currentDeaths=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Current Deaths")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentRecovered,expression:"currentRecovered"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.currentRecovered},on:{input:function(e){e.target.composing||(t.currentRecovered=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Current Recovered")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.deathRate,expression:"deathRate"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.deathRate},on:{input:function(e){e.target.composing||(t.deathRate=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Death Rate")])])])]),t._v(" "),s("div",{staticClass:"column is-one-fifth"},[s("form",{staticClass:"login-form"},[s("div",{staticClass:"control-material is-primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.capacity,expression:"capacity"}],staticClass:"material-input has-text-centered",attrs:{type:"number",required:""},domProps:{value:t.capacity},on:{input:function(e){e.target.composing||(t.capacity=e.target.value)}}}),t._v(" "),s("span",{staticClass:"material-highlight"}),t._v(" "),s("span",{staticClass:"bar"}),t._v(" "),s("label",[t._v("Beds per 1000 habitants")])])])])]),t._v(" "),s("div",{staticClass:"columns has-text-white"},[s("div",{staticClass:"column"},[s("h6",{staticClass:"is-size-6 has-text-white has-text-weight-bold"},[t._v("SRI Model")]),t._v(" "),s("div",{staticClass:"math-fig"},[s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"S(t)",expression:"'S(t)'"}]}),t._v(" are those susceptible but not yet infected with the disease.\n            ")]),t._v(" "),s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"I(t)",expression:"'I(t)'"}]}),t._v(" is the number of infectious individuals.\n            ")]),t._v(" "),s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"R(t)",expression:"'R(t)'"}]}),t._v(" are those individuals who have recovered from the disease and now have immunity to it.\n            ")])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"math-fig"},[s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"R_0 = \\frac{\\beta}{\\gamma} = 2.2",expression:"'R_0 = \\\\frac{\\\\beta}{\\\\gamma} = 2.2'"}]}),t._v(", "),s("span",{directives:[{name:"katex",rawName:"v-katex",value:"(95\\% CI:1.4 - 3.9)",expression:"'(95\\\\% CI:1.4 - 3.9)'"}]}),t._v(".\n            ")])]),t._v(" "),s("h6",{staticClass:"is-size-6 has-text-white has-text-weight-bold"},[t._v("Derivates")]),t._v(" "),s("div",{staticClass:"math-fig"},[s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"\\frac{dS}{dt} = -\\beta S I",expression:"'\\\\frac{dS}{dt} = -\\\\beta S I'"}]})]),t._v(" "),s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"\\frac{dI}{dt} = +\\beta S I - \\gamma I",expression:"'\\\\frac{dI}{dt} = +\\\\beta S I - \\\\gamma I'"}]})]),t._v(" "),s("p",{staticClass:"desc"},[s("span",{directives:[{name:"katex",rawName:"v-katex",value:"\\frac{dR}{dt} = \\gamma I",expression:"'\\\\frac{dR}{dt} = \\\\gamma I'"}]})])])])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-vcentered legends"},[s("div",{staticClass:"column"}),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-s-border-wrap"},[s("div",{staticClass:"legend"},[t._v("Susceptible")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-i-border-wrap"},[s("div",{staticClass:"legend"},[t._v("Infectious")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-r-border-wrap"},[s("div",{staticClass:"legend"},[t._v("Recovered")])])]),t._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-c-border-wrap"},[s("div",{staticClass:"legend"},[t._v("Capacity")])])]),t._v(" "),s("div",{staticClass:"column"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{},[this._v("\n          Default basic reproduction number taken from "),e("a",{attrs:{href:"https://www.biorxiv.org/content/10.1101/2020.01.23.916395v1",target:"_blank"}},[this._v("Preliminary estimation of the basic reproduction number of novel coronavirus (2019-nCoV) in China, from 2019 to 2020: A data-driven analysis in the early phase of the outbreak →")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-border-wrap"},[s("footer",{staticClass:"footer synx-dark-background"},[s("div",{staticClass:"content has-text-centered has-text-light"},[s("p",[t._v("\n          Made with 🦠 at "),s("a",{attrs:{href:"https://synx.ai",target:"_blank"}},[t._v("Synx")]),t._v(" by "),s("a",{attrs:{href:"https://github.com/carlosrivera",target:"_blank"}},[t._v("Carlos Rivera")]),t._v(". The source code is licensed\n          "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(". The website content\n          is licensed "),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n        ")]),t._v(" "),s("img",{staticClass:"footer-logo",attrs:{src:"static/synx-logo.svg"}})])])])}]},v=s("VU/8")(u,p,!1,null,null,null).exports;a.a.use(n.a);var h=new n.a({routes:[{path:"/",name:"Index",component:v}]}),m=s("4F9W"),f=(s("nYE2"),s("Z3T5"));a.a.use(f.a,{config:{id:"UA-106564167-1"}},h),a.a.use(m.a),s("JD12"),a.a.config.productionTip=!1,new a.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},ZiV1:function(t,e){},nYE2:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return s(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.6f27e79e0736fd424671.js.map