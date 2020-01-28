webpackJsonp([1],{"7EvL":function(t,s,e){"use strict";t.exports=function(t,s,e,a){return new i(t,s,e,a)};var i=function(t,s,e,i){this.deriv=s,this.y=t,this.n=this.y.length,this.dt=i,this.t=e,this._ctor=this.y.constructor,this._w=new this._ctor(this.n),this._k1=new this._ctor(this.n),this._k2=new this._ctor(this.n),this._k3=new this._ctor(this.n),this._k4=new this._ctor(this.n)};i.prototype.step=function(){this.deriv(this._k1,this.y,this.t);for(var t=0;t<this.n;t++)this._w[t]=this.y[t]+this._k1[t]*this.dt*.5;this.deriv(this._k2,this._w,this.t+.5*this.dt);for(t=0;t<this.n;t++)this._w[t]=this.y[t]+this._k2[t]*this.dt*.5;this.deriv(this._k3,this._w,this.t+.5*this.dt);for(t=0;t<this.n;t++)this._w[t]=this.y[t]+this._k3[t]*this.dt;this.deriv(this._k4,this._w,this.t+this.dt);var s=this.dt/6;for(t=0;t<this.n;t++)this.y[t]+=s*(this._k1[t]+2*this._k2[t]+2*this._k3[t]+this._k4[t]);return this.t+=this.dt,this},i.prototype.steps=function(t){for(var s=0;s<t;s++)this.step();return this}},JD12:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},a,!1,function(t){e("odoK")},null,null).exports,n=e("/ocq"),o=e("UlOv"),d=e("7EvL"),c={extends:o.a,props:{labels:{type:Array,default:function(){return[]}},chartconfig:{type:Object,default:function(){}}},data:function(){return{options:{elements:{point:{radius:0}},scales:{yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!0,color:"#2d2d2d",zeroLineColor:"#2d2d2d"}}],xAxes:[{gridLines:{display:!1}}]},legend:{display:!1,position:"bottom",labels:{padding:20,fontColor:"#fff",filter:function(t,s){return!t.text.includes("IC")}}},responsive:!0,maintainAspectRatio:!1},gradient:null}},mounted:function(){var t=function(t,s){for(var e=d([.999,.001,0],function(e,i,a){var r=i[0],n=i[1],o=(i[2],-t*r*n),d=t*r*n-s*n,c=s*n;e[0]=o,e[1]=d,e[2]=c},0,1),i=[],a=[],r=[],n=[],o=0;o<=1e4;o+=100)e.step(),i.push(e.t),a.push(e.y[0]),r.push(e.y[1]),n.push(e.y[2]);return{days:i,susceptibles:a,infectious:r,recovered:n}},s=t(.33,.1),e=t(.547,.1),i=t(.273,.1);this.recoveredGradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),this.recoveredGradient.addColorStop(0,"#56C1FF"),this.recoveredGradient.addColorStop(1,"#6047B5"),this.recoveredCIGradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),this.recoveredCIGradient.addColorStop(0,"#56C1FF11"),this.recoveredCIGradient.addColorStop(1,"#6047B511"),this.infectiousGradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),this.infectiousGradient.addColorStop(0,"#FAE232"),this.infectiousGradient.addColorStop(1,"#FF644E"),this.infectiousCIGradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),this.infectiousCIGradient.addColorStop(0,"#FAE23211"),this.infectiousCIGradient.addColorStop(1,"#FF644E11"),this.susceptibleGradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),this.susceptibleGradient.addColorStop(0,"#88FA4E"),this.susceptibleGradient.addColorStop(1,"#00A89D"),this.susceptibleCIGradient=this.$refs.canvas.getContext("2d").createLinearGradient(0,0,20,500),this.susceptibleCIGradient.addColorStop(0,"#88FA4E11"),this.susceptibleCIGradient.addColorStop(1,"#00A89D11"),this.renderChart({labels:s.days,datasets:[{label:"IC",fill:"+1",pointBackgroundColor:"transparent",borderWidth:2,data:i.susceptibles,backgroundColor:this.susceptibleCIGradient,borderColor:this.susceptibleCIGradient},{label:"Susceptible",fill:!1,pointBackgroundColor:"transparent",hoverBorderWidth:5,borderWidth:3,data:s.susceptibles,backgroundColor:this.susceptibleGradient,borderColor:this.susceptibleGradient},{label:"IC",fill:"-1",pointBackgroundColor:"transparent",borderWidth:2,data:e.susceptibles,backgroundColor:this.susceptibleCIGradient,borderColor:this.susceptibleCIGradient},{label:"IC",fill:!0,pointBackgroundColor:"transparent",borderWidth:2,data:i.infectious,backgroundColor:this.infectiousCIGradient,borderColor:this.infectiousCIGradient},{label:"Infectious",fill:!1,pointBackgroundColor:"transparent",borderWidth:3,data:s.infectious,backgroundColor:this.infectiousGradient,borderColor:this.infectiousGradient},{label:"IC",fill:!0,pointBackgroundColor:"transparent",borderWidth:2,data:e.infectious,backgroundColor:this.infectiousCIGradient,borderColor:this.infectiousCIGradient},{label:"IC",fill:"+1",pointBackgroundColor:"transparent",borderWidth:2,data:i.recovered,backgroundColor:this.recoveredCIGradient,borderColor:this.recoveredCIGradient},{label:"Recovered",fill:!1,pointBackgroundColor:"transparent",borderWidth:3,data:s.recovered,backgroundColor:this.recoveredGradient,borderColor:this.recoveredGradient},{label:"IC",fill:"-1",pointBackgroundColor:"transparent",borderWidth:2,data:e.recovered,backgroundColor:this.recoveredCIGradient,borderColor:this.recoveredCIGradient}]},this.options)}},l={name:"VueChartJS",components:{LineChart:e("VU/8")(c,null,!1,null,null,null).exports}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container"},[e("h3",{staticClass:"is-size-3 has-text-white has-text-weight-bold"},[t._v("Epidemic Transmision Dynamics")]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("h5",{staticClass:"is-size-5 has-text-white has-text-weight-light"},[t._v("Stochastic SIR epidemic model for 2019-nCov")]),t._v(" "),e("div",{staticClass:"synx-gray-background fig-padding"},[e("line-chart",{attrs:{id:"srichart"}}),t._v(" "),t._m(0)],1)])]),t._v(" "),e("div",{staticClass:"columns has-text-white"},[e("div",{staticClass:"column"},[e("h6",{staticClass:"is-size-6 has-text-white has-text-weight-bold"},[t._v("SRI Model")]),t._v(" "),e("div",{staticClass:"math-fig"},[e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"S(t)",expression:"'S(t)'"}]}),t._v(" are those susceptible but not yet infected with the disease.\n        ")]),t._v(" "),e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"I(t)",expression:"'I(t)'"}]}),t._v(" is the number of infectious individuals.\n        ")]),t._v(" "),e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"R(t)",expression:"'R(t)'"}]}),t._v(" are those individuals who have recovered from the disease and now have immunity to it.\n        ")])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"math-fig"},[e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"R_0 = \\frac{\\beta}{\\gamma} = 3.3",expression:"'R_0 = \\\\frac{\\\\beta}{\\\\gamma} = 3.3'"}]}),t._v(", "),e("span",{directives:[{name:"katex",rawName:"v-katex",value:"(95\\% CI:2.73 - 5.47)",expression:"'(95\\\\% CI:2.73 - 5.47)'"}]}),t._v(".\n        ")])]),t._v(" "),e("h6",{staticClass:"is-size-6 has-text-white has-text-weight-bold"},[t._v("Derivates")]),t._v(" "),e("div",{staticClass:"math-fig"},[e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"\\frac{dS}{dt} = -\\beta S I",expression:"'\\\\frac{dS}{dt} = -\\\\beta S I'"}]})]),t._v(" "),e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"\\frac{dI}{dt} = +\\beta S I - \\gamma I",expression:"'\\\\frac{dI}{dt} = +\\\\beta S I - \\\\gamma I'"}]})]),t._v(" "),e("p",{staticClass:"desc"},[e("span",{directives:[{name:"katex",rawName:"v-katex",value:"\\frac{dR}{dt} = \\gamma I",expression:"'\\\\frac{dR}{dt} = \\\\gamma I'"}]})])])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"columns is-vcentered legends"},[s("div",{staticClass:"column"}),this._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-s-border-wrap"},[s("div",{staticClass:"legend"},[this._v("Susceptible")])])]),this._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-i-border-wrap"},[s("div",{staticClass:"legend"},[this._v("Infectious")])])]),this._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"legend-r-border-wrap"},[s("div",{staticClass:"legend"},[this._v("Recovered")])])]),this._v(" "),s("div",{staticClass:"column"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{},[this._v("\n      Basic reproduction number taken from "),s("a",{attrs:{href:"https://www.biorxiv.org/content/10.1101/2020.01.23.916395v1",target:"_blank"}},[this._v("Preliminary estimation of the basic reproduction number of novel coronavirus (2019-nCoV) in China, from 2019 to 2020: A data-driven analysis in the early phase of the outbreak →")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer-border-wrap"},[e("footer",{staticClass:"footer synx-dark-background"},[e("div",{staticClass:"content has-text-centered has-text-light"},[e("p",[t._v("\n          Made with 🦠 at "),e("a",{attrs:{href:"https://synx.ai",target:"_blank"}},[t._v("Synx")]),t._v(" by "),e("a",{attrs:{href:"https://github.com/carlosrivera",target:"_blank"}},[t._v("Carlos Rivera")]),t._v(". The source code is licensed\n          "),e("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(". The website content\n          is licensed "),e("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n        ")])])])])}]},u=e("VU/8")(l,h,!1,null,null,null).exports;i.a.use(n.a);var v=new n.a({routes:[{path:"/",name:"Index",component:u}]}),p=e("4F9W");e("nYE2");i.a.use(p.a),e("JD12"),i.a.config.productionTip=!1,new i.a({el:"#app",router:v,components:{App:r},template:"<App/>"})},nYE2:function(t,s){},odoK:function(t,s){},uslO:function(t,s,e){var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return e(r(t))}function r(t){var s=i[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.d71fff21fd8d8d22da64.js.map