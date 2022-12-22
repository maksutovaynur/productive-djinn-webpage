import{u as _,_ as f,o as i,c as r,d as p,a as u,b as S,n as l,F as h,r as d,t as $,e as x,p as M,f as z}from"./index-52c759f2.js";class v{constructor(t,s=1,o="Default Title",n="#112299"){this.id=t,this.value=s,this.title=o,this.color=n}}function y(){return"#"+((1<<24)*Math.random()|0).toString(16).padStart(6,"0")}function m(e,t,s){const o=Math.round((e-t)/s);return t+o*s}function C(e,t,s){return e<t&&(e=t),s!==void 0&&e>s&&(e=s),e}function c(e){return Math.PI*e/180}class a{constructor(t,s){this.x=t,this.y=s}diag2(){return this.x*this.x+this.y*this.y}diag(){return Math.sqrt(this.diag2())}scale(t){return new a(t*this.x,t*this.y)}projectOn(t){var s=this.x*t.x+this.y*t.y;return s/=t.diag2(),t.scale(s)}subtract(t){return new a(this.x-t.x,this.y-t.y)}dot(t){return this.x*t.x+this.y*t.y}}class k{constructor(t,s){this.center=t,this.halfSize=s}}const b={props:{id:{required:!0},mainDirection:{type:a,default:null,required:!1}},data(){return{resizeStartAnchor:null}},computed:{cursorStore(){return _()}},emits:["cursor-move","cursor-down","cursor-up"],methods:{onMouseDown(e){var o;this.resizeStartAnchor=this.toRelative(e.clientX,e.clientY);const[t,s]=this.toProjected(this.resizeStartAnchor);this.$emit("cursor-down",t,s),(o=this.cursorStore)==null||o.setCurrentTarget(this),this.cursorStore.root&&(this.cursorStore.root.onmousemove=this.onMouseMove,this.cursorStore.root.onmouseup=this.onMouseUp)},onMouseUp(e){var t;if(this.resizeStartAnchor){const s=this.toRelative(e.clientX,e.clientY).subtract(this.resizeStartAnchor),[o,n]=this.toProjected(s);this.$emit("cursor-up",o,n)}(t=this.cursorStore)==null||t.setCurrentTarget(null),this.resizeStartAnchor=null,this.cursorStore.root&&(this.cursorStore.root.onmousemove=null,this.cursorStore.root.onmouseup=null)},onMouseMove(e){if(!this.resizeStartAnchor)return;const t=this.toRelative(e.clientX,e.clientY).subtract(this.resizeStartAnchor),[s,o]=this.toProjected(t);this.$emit("cursor-move",s,o)},centeredRect(){let e=this.$el.getBoundingClientRect();return console.log(`rect: ${e.left} ${e.top} ${e.right} ${e.bottom}`),new k(new a((e.right+e.left)/2,(e.bottom+e.top)/2),new a((e.right-e.left)/2,(e.bottom-e.top)/2))},toRelative(e,t){let s=this.centeredRect();console.log(`Client pointer=[${e}, ${t}]`),console.log(`centered rect: center=[${s.center.x}, ${s.center.y}] halfSize=[${s.halfSize.x}, ${s.halfSize.y}]`);const o=new a((e-s.center.x)/s.halfSize.x,(t-s.center.y)/s.halfSize.y);return console.log(`relative [${o.x}, ${o.y}]`),o},toProjected(e){if(!this.mainDirection)return[e,new a(0,0)];const t=e.projectOn(this.mainDirection),s=e.subtract(t);return console.log(`Projection [${t.x}, ${t.y}]`),[t,s]}}};function T(e,t,s,o,n,g){return i(),r("div",{class:"resize-eventor-root",onPointerdown:t[0]||(t[0]=(...R)=>g.onMouseDown&&g.onMouseDown(...R))},null,32)}const V=f(b,[["render",T]]),W={class:"inner"},A={props:{id:{type:[String,Number],default:0},title:{type:String,default:"Some Title"},radius:{type:Number,default:1},rotation:{type:Number,default:0},angle:{type:Number,default:90},space:{type:String,default:"1rem"},axWidth:{type:String,default:"0.2rem"},axTicks:{default:()=>[0,10]},color:{type:String,default:"#af0000"},animationSpeed:{type:String,default:"0.5s"}},emits:["update-rotation","update-radius"],mounted(){console.log(`Created sector ${this.title} with radiusScale=${this.radius}`)},data(){return{referenceRadius:0}},methods:{onResize(e,t){console.log(`New Point: ${e.x}, ${e.y}, diag=${e.diag()}`),this.$emit("update-radius",this.id,this.calcNewRadius(e),!1)},onResizeStart(){this.referenceRadius=this.radius},onResizeEnd(e,t){this.$emit("update-radius",this.id,this.calcNewRadius(e),!0),this.referenceRadius=0},calcNewRadius(e){return this.referenceRadius?this.referenceRadius-e.dot(this.direction)*this.resizeCoeff:this.radius}},computed:{halfTan(){return Math.tan(c(this.angle)/2)},halfSin(){return Math.sin(c(this.angle)/2)},axTicksCount(){return this.axTicks.length},axTicksReversed(){return this.axTicks.slice().reverse()},direction(){const e=c(this.rotation);return new a(-Math.sin(e),Math.cos(e))},resizeCoeff(){const e=c(this.rotation%90-45);return Math.cos(e)*Math.sqrt(2)}}},D=p({...A,__name:"WheelSegment",setup(e){return(t,s)=>(i(),r("div",{class:"wheel-segment",style:l({"--anim-speed":e.animationSpeed})},[u("div",{class:"outer",style:l({"--radius":e.radius*50+"%","--rotation":e.rotation,"--space":e.space,"--half-sin":t.halfSin,"--half-tan":t.halfTan,"--color":e.color,"--ax-wd":e.axWidth,"--ax-cnt":t.axTicksCount})},[u("div",W,[S(V,{id:e.id,"main-direction":t.direction,onCursorMove:t.onResize,onCursorDown:t.onResizeStart,onCursorUp:t.onResizeEnd},null,8,["id","main-direction","onCursorMove","onCursorDown","onCursorUp"])])],4),u("div",{class:"axis",style:l({"--rotation":e.rotation,"--angle":e.angle})},[(i(!0),r(h,null,d(t.axTicksReversed,(o,n)=>(i(),r("div",{class:"tick",style:l({"--index":n,"--v":"white"})},$(o),5))),256)),(i(!0),r(h,null,d(t.axTicksCount+2,(o,n)=>(i(),r("div",{class:"tick",style:l({"--index":n+t.axTicksCount,"--c":"transparent"})},"a",4))),256))],4)],4))}});const N=f(D,[["__scopeId","data-v-16ce562b"]]),j={props:{maxValue:{default:10},minValue:{default:1},valueStep:{default:1},space:{type:String,default:"0.5em"},sectors:{type:Object,default:[1,2,3,4,5,6].map(function(e){return new v(e,5.5+4.5*Math.random(),`El #${e}`,y())})}},emits:["change-value"],data(){return{mainRotation:0}},computed:{nitems(){return this.items.length},angle(){return 360/this.nitems},axisTicks(){if(!this.valueStep)return[this.minValue,this.maxValue];let e=[];for(let t=this.minValue;t<=this.maxValue;t+=this.valueStep)e.push(t);return e},items(){return this.sectors.map(e=>this.scaleRadius(e))}},methods:{scaleRadius(e){let t=C(e.value,this.minValue,this.maxValue);return Object.assign({},e),e.value=t,e},calcRotation(e){return e*this.angle+this.mainRotation},rotate(e,t){if(t===void 0&&e){let s=-this.angle*(e.id-1),o=Math.floor((s-this.mainRotation)/360);s-=360*o,o=Math.abs(s-this.mainRotation),o>Math.abs(o-360)&&(s-=360),this.mainRotation=s}else t!==void 0&&(this.mainRotation=m(this.mainRotation+t*this.angle,0,this.angle))},resizeSegment(e,t,s=!0){console.log(`new Radius = ${t}`);let o=(this.maxValue+1)*t-1;s&&(o=m(o,this.minValue,this.valueStep)),console.log(`new vals: ${e}, ${o}`),this.$emit("change-value",e-1,o)},onScroll(e){this.rotate(void 0,Math.sign(e.deltaY))}}},P=p({...j,__name:"Wheel",setup(e){return(t,s)=>(i(),r("div",{class:"wheel",onMousewheel:s[0]||(s[0]=(...o)=>t.onScroll&&t.onScroll(...o))},[(i(!0),r(h,null,d(t.items,(o,n)=>(i(),x(N,{key:o.id,draggable:"false",onUpdateRotation:t.rotate,onUpdateRadius:t.resizeSegment,id:o.id,rotation:t.calcRotation(n),angle:t.angle,space:e.space,radius:(o.value+1)/(e.maxValue+1),title:o.title,color:o.color,"ax-ticks":t.axisTicks},null,8,["onUpdateRotation","onUpdateRadius","id","rotation","angle","space","radius","title","color","ax-ticks"]))),128)),(i(!0),r(h,null,d(t.axisTicks,o=>(i(),r("div",{key:o,class:"overlay",style:l({"--value":o,"--max-value":e.maxValue})},null,4))),128))],32))}});const w=e=>(M("data-v-aa54fc14"),e=e(),z(),e),U={class:"wheel-view"},E=w(()=>u("h1",{class:"wheel-header"},"The Wheel of Balance",-1)),B=w(()=>u("h1",{class:"wheel-footer"},"Some interface here",-1)),I={props:{},data(){return{sectors:[1,2,3,4,5,6].map(function(e){return new v(e,m(5.5+4.5*Math.random(),1,1),`El #${e}`,y())}),mainRotation:0}},methods:{onChangeSectorSize(e,t){this.sectors[e].value=t}}},q=p({...I,__name:"WheelView",setup(e){return(t,s)=>(i(),r("div",U,[E,S(P,{class:"wheel-body",sectors:t.sectors,onChangeValue:t.onChangeSectorSize},null,8,["sectors","onChangeValue"]),B]))}});const Y=f(q,[["__scopeId","data-v-aa54fc14"]]);export{Y as default};
