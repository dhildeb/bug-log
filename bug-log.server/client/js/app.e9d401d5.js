(function(t){function e(e){for(var c,n,s=e[0],i=e[1],d=e[2],u=0,l=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);b&&b(e);while(l.length)l.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],c=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var c={},n={app:0},o={app:0},r=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0de941":"b277c9f3","chunk-52b7d8f0":"43f47bae","chunk-7bdd8267":"ca9b4f62","chunk-871e8a70":"2f84d7c3"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-52b7d8f0":1,"chunk-7bdd8267":1,"chunk-871e8a70":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var c="css/"+({}[t]||t)+"."+{"chunk-2d0de941":"31d6cfe0","chunk-52b7d8f0":"6e6bdf3a","chunk-7bdd8267":"e030fb2e","chunk-871e8a70":"ee11e2a9"}[t]+".css",o=i.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var d=r[s],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===c||u===o))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){d=l[s],u=d.getAttribute("data-href");if(u===c||u===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete n[t],b.parentNode.removeChild(b),a(r)},b.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){n[t]=0})));var c=o[t];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,a){c=o[t]=[e,a]}));e.push(c[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var l=new Error;d=function(e){u.onerror=u.onload=null,clearTimeout(b);var a=o[t];if(0!==a){if(a){var c=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+n+")",l.name="ChunkLoadError",l.type=c,l.request=n,a[1](l)}o[t]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(a,c,function(e){return t[e]}.bind(null,c));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bug-log/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var b=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ac":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={key:0,class:"mdi mdi-bug red","aria-hidden":"true"},o={class:"col-3 border bg-light shadow-sm rounded p-1 d-none d-md-block"},r={class:"col-3 border bg-light shadow-sm rounded p-1 d-md-none"},s={class:"col-3 border bg-light shadow-sm rounded p-1"};function i(t,e,a,i,d,u){const l=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(l,{to:{name:"Details",params:{id:a.bug.id}},class:"col-4 click border bg-light shadow-sm rounded p-1 text-red",style:{"text-decoration":a.bug.closed?"line-through":""},onClick:i.setActive},{default:Object(c["C"])(()=>[a.bug.closed?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("i",n)),Object(c["f"])(" "+Object(c["y"])(a.bug.title),1)]),_:1},8,["to","style","onClick"]),Object(c["g"])("div",o,Object(c["y"])(void 0!==a.bug.creator?a.bug.creator.name:a.bug.creatorId),1),Object(c["g"])("div",r,Object(c["y"])(void 0!==a.bug.creator?i.state.name[0]:a.bug.creatorId),1),Object(c["g"])("div",{class:"col-2 border bg-light shadow-sm rounded p-1",style:{color:a.bug.closed?"red":"green"}},Object(c["y"])(a.bug.closed?"closed":"open"),5),Object(c["g"])("div",s,Object(c["y"])(`${i.state.date[1]} ${i.state.date[2]} ${i.state.date[3]}`),1)],64)}var d=a("a1e9"),u=a("83fc"),l={props:{bug:{type:Object,required:!0}},setup(t){const e=Object(d["i"])({date:new Date(t.bug.updatedAt).toString().split(" "),name:t.bug.creator.name.split("@")});return{state:e,setActive(){u["a"].activeBug=t.bug}}}};a("1573");l.render=i;e["default"]=l},"0455":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-87e3a940");Object(c["s"])("data-v-87e3a940");const o=Object(c["g"])("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#create-note-modal"}," add note ",-1),r={class:"modal fade",id:"create-note-modal",tabindex:"-1","aria-labelledby":"create-note-modalLabel","aria-hidden":"true"},s={class:"modal-dialog"},i={class:"modal-content"},d=Object(c["g"])("div",{class:"modal-header bg-secondary"},[Object(c["g"])("h5",{class:"modal-title",id:"create-note-modalLabel"}," New Note "),Object(c["g"])("button",{type:"button",title:"close",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),u={class:"modal-body"},l={class:"form-group"},b=Object(c["g"])("label",{class:"sr-only",for:"note title"},null,-1),g=Object(c["g"])("button",{type:"submit",class:"btn btn-primary"}," create note ",-1),p=Object(c["g"])("div",{class:"modal-footer"},[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1);Object(c["q"])();const O=n((t,e,a,n,O,f)=>(Object(c["p"])(),Object(c["d"])(c["a"],null,[o,Object(c["g"])("div",r,[Object(c["g"])("div",s,[Object(c["g"])("div",i,[d,Object(c["g"])("div",u,[Object(c["g"])("form",{onSubmit:e[2]||(e[2]=Object(c["E"])((...t)=>n.createNote&&n.createNote(...t),["prevent"]))},[Object(c["g"])("div",l,[b,Object(c["D"])(Object(c["g"])("textarea",{class:"w-75","onUpdate:modelValue":e[1]||(e[1]=t=>n.state.newNote.body=t),type:"text",placeholder:"Note here...",required:""},null,512),[[c["A"],n.state.newNote.body]])]),g],32)]),p])])])],64)));var f=a("a1e9"),j=a("83fc"),m=a("1157"),v=a.n(m),h=a("63a6"),y=a("5d40"),w=a("6c02"),k={setup(){const t=Object(w["c"])(),e=Object(f["i"])({newNote:{creator:j["a"].account,bug:t.params.id}});return{state:e,async createNote(){try{await h["a"].createNote(e.newNote),v()("#create-note-modal").modal("hide"),e.newNote.body=""}catch(t){y["a"].toast(t.message)}}}}};k.render=O,k.__scopeId="data-v-87e3a940";e["default"]=k},"0d77":function(t,e,a){},1519:function(t,e,a){},1573:function(t,e,a){"use strict";a("0d77")},2447:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-ad6341c4");Object(c["s"])("data-v-ad6341c4");const o=Object(c["g"])("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#create-bug-modal"}," Report Bug ",-1),r={class:"modal fade",id:"create-bug-modal",tabindex:"-1","aria-labelledby":"create-bug-modalLabel","aria-hidden":"true"},s={class:"modal-dialog"},i={class:"modal-content"},d=Object(c["g"])("div",{class:"modal-header bg-secondary"},[Object(c["g"])("h5",{class:"modal-title",id:"create-bug-modalLabel"}," Report Bug "),Object(c["g"])("button",{type:"button",title:"close",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),u={class:"modal-body"},l={class:"form-group"},b=Object(c["g"])("label",{class:"sr-only",for:"bug title"},null,-1),g={class:"form-group"},p=Object(c["g"])("label",{class:"sr-only",for:"bug description"},null,-1),O=Object(c["g"])("button",{type:"submit",class:"btn btn-primary"}," Report Bug ",-1),f=Object(c["g"])("div",{class:"modal-footer"},[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1);Object(c["q"])();const j=n((t,e,a,n,j,m)=>(Object(c["p"])(),Object(c["d"])(c["a"],null,[o,Object(c["g"])("div",r,[Object(c["g"])("div",s,[Object(c["g"])("div",i,[d,Object(c["g"])("div",u,[Object(c["g"])("form",{onSubmit:e[3]||(e[3]=Object(c["E"])((...t)=>n.createBug&&n.createBug(...t),["prevent"]))},[Object(c["g"])("div",l,[b,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.state.newBug.title=t),type:"text",placeholder:"Title here...",required:""},null,512),[[c["A"],n.state.newBug.title]])]),Object(c["g"])("div",g,[p,Object(c["D"])(Object(c["g"])("textarea",{class:"w-75","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.newBug.description=t),type:"textArea",rows:"4",placeholder:"Description here...",required:""},null,512),[[c["A"],n.state.newBug.description]])]),O],32)]),f])])])],64)));var m=a("a1e9"),v=a("83fc"),h=a("1157"),y=a.n(h),w=a("2ff5"),k=a("5d40"),B=a("6c02"),C={setup(){const t=Object(B["d"])(),e=Object(m["i"])({newBug:{creator:v["a"].account}});return{state:e,async createBug(){try{const a=await w["a"].createBug(e.newBug);v["a"].activeBug=a,e.newBug.title="",e.newBug.description="",y()("#create-bug-modal").modal("hide"),t.push({path:"/bug/"+a.id})}catch(a){k["a"].toast(a.message)}}}}};C.render=j,C.__scopeId="data-v-ad6341c4";e["default"]=C},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("bc3a"),n=a.n(c),o=a("8c89");const r=n.a.create({baseURL:o["b"],timeout:8e3})},"2f65":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={class:"row bg-secondary shadow-sm rounded pt-2 mt-3"},o={class:"col-5"},r={key:0,class:"mdi mdi-bug red","aria-hidden":"true"},s={class:"col-3 options"},i={key:0,class:"dropdown click text-light",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",title:"options"},d=Object(c["g"])("h1",null,"...",-1),u={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l=Object(c["g"])("button",{class:"text-warning dropdown-item","data-toggle":"modal","data-target":"#edit-bug-modal"}," edit bug ",-1),b={class:"row shadow rounded border"},g={class:"col-12 text-center"},p={class:"p-3 border-bottom text-wrap"},O={class:"col-10 ml-5 text-wrap"};function f(t,e,a,f,j,m){const v=Object(c["w"])("EditBug");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",n,[Object(c["g"])("div",o,[f.state.bug.closed?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("i",r)),Object(c["f"])(" "+Object(c["y"])(void 0!==f.state.bug.creator?f.state.bug.creator.name:f.state.bug.creatorId),1)]),Object(c["g"])("h6",{class:"col-4",style:{color:f.state.bug.closed?"red":"green"}},Object(c["y"])(f.state.bug.closed?"closed":"open"),5),Object(c["g"])("div",s,[f.state.account.id!==f.state.bug.creator.id||f.state.bug.closed?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("div",i,[d])),Object(c["g"])("div",u,[Object(c["g"])("button",{class:"text-danger dropdown-item",onClick:e[1]||(e[1]=(...t)=>f.closeBug&&f.closeBug(...t))}," close bug "),l])])]),Object(c["g"])("div",b,[Object(c["g"])("div",g,[Object(c["g"])("h2",p,Object(c["y"])(f.state.bug.title),1)]),Object(c["g"])("div",O,[Object(c["g"])("p",null,Object(c["y"])(f.state.bug.description),1)])]),Object(c["g"])(v,{bug:f.state.bug},null,8,["bug"])],64)}var j=a("a1e9"),m=a("5d40"),v=a("2ff5"),h=a("5c40"),y=a("83fc"),w=a("6c02"),k={props:{bug:{type:Object,required:!0}},setup(t){const e=Object(w["c"])(),a=Object(j["i"])({account:Object(h["d"])(()=>y["a"].account),bug:Object(h["d"])(()=>y["a"].activeBug)});return Object(h["N"])(()=>{e.params.id&&v["a"].getNotes(e.params.id)}),{state:a,async closeBug(){try{await m["a"].confirmAction("You cannot undo a close, do you wish to continue?")&&(await v["a"].closeBug(t.bug.id),m["a"].toast("bug successfully closed","success"))}catch(e){m["a"].toast(e.message)}}}}};a("9adc");k.render=f;e["default"]=k},"2ff5":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("83fc"),n=a("2b20");class o{async getAll(t=""){const e=await n["a"].get("api/bugs/"+t);c["a"].bugs=e.data}async getOne(t){const e=await n["a"].get("api/bugs/"+t);c["a"].activeBug=e.data}async getNotes(t){const e=await n["a"].get("api/bugs/"+t+"/notes");c["a"].notes=e.data}async createBug(t){const e=await n["a"].post("api/bugs",t);return c["a"].bugs.push(e.data),e.data}async editBug(t,e){const a=await n["a"].put("api/bugs/"+t,e);c["a"].activeBug=a.data}async closeBug(t){const e=await n["a"].delete("api/bugs/"+t);c["a"].activeBug=e.data;const a=c["a"].bugs.findIndex(e=>e.id===t);c["a"].bugs.splice(a,1,e.data)}}const r=new o},3723:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={class:"row border my-2 shadow-sm rounded"},o={key:0,class:"col-md-3 col-10 p-4 d-flex flex-column border-bottom"},r={class:"col-md-8 order-md-1 order-3 p-5"};function s(t,e,a,s,i,d){return Object(c["p"])(),Object(c["d"])("div",n,[a.note.creator?(Object(c["p"])(),Object(c["d"])("div",o,[Object(c["g"])("img",{class:"rounded-circle",src:a.note.creator.picture,alt:"profile"},null,8,["src"]),Object(c["g"])("span",null,Object(c["y"])(a.note.creator.name),1)])):Object(c["e"])("",!0),Object(c["g"])("div",r,[Object(c["g"])("p",null,' "'+Object(c["y"])(a.note.body)+'" ',1)]),s.state.account.id===a.note.creator.id?(Object(c["p"])(),Object(c["d"])("i",{key:1,title:"Delete Note",class:"col-1 order-md-3 click mdi mdi-trash-can align-self-center",onClick:e[1]||(e[1]=(...t)=>s.deleteNote&&s.deleteNote(...t))})):Object(c["e"])("",!0)])}var i=a("a1e9"),d=a("63a6"),u=a("5d40"),l=a("5c40"),b=a("83fc"),g={props:{note:{type:Object,required:!0}},setup(t){const e=Object(i["i"])({account:Object(l["d"])(()=>b["a"].account)});return{state:e,async deleteNote(){try{if(await u["a"].confirmAction("are you sure you want to delete this note?")){const e=await d["a"].deleteNote(t.note.id);u["a"].toast(e,"success")}}catch(e){u["a"].toast(e.message)}}}}};a("55be");g.render=s;e["default"]=g},"38c5":function(t,e,a){},"41cb":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var c=a("6c02"),n=a("8816");function o(t){return()=>a("a2f9")(`./${t}.vue`)}const r=[{path:"/",name:"Home",component:o("HomePage")},{path:"/bugs",name:"Bugs",component:o("BugsPage")},{path:"/bug/:id",name:"Details",component:o("DetailsPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:n["a"]}],s=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:r})},4359:function(t,e,a){},"55be":function(t,e,a){"use strict";a("1519")},"56d7":function(t,e,a){"use strict";a.r(e);a("5363"),a("1157"),a("4989");var c=a("7a23");function n(t,e,a,n,o,r){const s=Object(c["w"])("Navbar"),i=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(s)]),Object(c["g"])("main",null,[Object(c["g"])(i)])],64)}var o=a("83fc"),r={name:"App",setup(){return{appState:Object(c["b"])(()=>o["a"])}}};a("dd38");r.render=n;var s=r;function i(t){const e=a("ccc2");e.keys().forEach(a=>{const c=e(a),n=c.default||c,o=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,n)})}var d=a("41cb");const u=Object(c["c"])(s);i(u),u.use(d["a"]).mount("#app")},"5d40":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("3d20"),n=a.n(c);class o{static async confirmAction(t="Are you sure?",e="You won't be able to revert this!",a="warning",c="Yes, delete it!"){try{const o=await n.a.fire({title:t,text:e,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c});return!!o.isConfirmed}catch(o){return!1}}static toast(t="Warning!",e="warning",a="top-end",c=1500,o=!0){n.a.fire({title:t,icon:e,position:a,timer:c,timerProgressBar:o,toast:!0,showConfirmButton:!1})}}},"63a6":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("83fc"),n=a("2b20");class o{async createNote(t){const e=await n["a"].post("api/notes/",t);c["a"].notes.push(e.data)}async deleteNote(t){return await n["a"].delete("api/notes/"+t),c["a"].notes=c["a"].notes.filter(e=>e.id!==t),"Note successfully deleted"}}const r=new o},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var c=a("7a23");const n=Object(c["t"])({user:{},account:{},bugs:[],activeBug:{},notes:[]})},"8c89":function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return s}));const c=window.location.origin.includes("localhost"),n=c?"http://localhost:3000":"",o="dhild.us.auth0.com",r="https://codeworks-dummy.com",s="58l4DWwD0mqroCiyV32WXJBHi1fdWMjD"},"90df":function(t,e,a){"use strict";a("4359")},"9adc":function(t,e,a){"use strict";a("f35a")},"9d8d":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-a8dfcaf6");Object(c["s"])("data-v-a8dfcaf6");const o={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r=Object(c["g"])("i",{class:"mdi mdi-bug mr-2"},null,-1),s=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},d={class:"navbar-nav mr-auto"},u={class:"nav-item"},l=Object(c["f"])(" Home "),b={class:"nav-item"},g=Object(c["f"])(" Bugs "),p={class:"navbar-text pl-5"},O={key:1,class:"dropdown"},f={class:"mx-3"},j=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(c["q"])();const m=n((t,e,a,m,v,h)=>{const y=Object(c["w"])("router-link"),w=Object(c["w"])("CreateBug");return Object(c["p"])(),Object(c["d"])("nav",o,[r,s,Object(c["g"])("div",i,[Object(c["g"])("ul",d,[Object(c["g"])("li",u,[Object(c["g"])(y,{to:{name:"Home"},class:"nav-link"},{default:n(()=>[l]),_:1})]),Object(c["g"])("li",b,[Object(c["g"])(y,{to:{name:"Bugs"},class:"nav-link"},{default:n(()=>[g]),_:1})])]),m.state.account.id?(Object(c["p"])(),Object(c["d"])(w,{key:0})):Object(c["e"])("",!0),Object(c["g"])("span",p,[m.user.isAuthenticated?(Object(c["p"])(),Object(c["d"])("div",O,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>m.state.dropOpen=!m.state.dropOpen)},[Object(c["g"])("img",{src:m.user.picture,alt:"user photo",height:"40",class:"rounded-circle"},null,8,["src"]),Object(c["g"])("span",f,Object(c["y"])(m.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:m.state.dropOpen}],onClick:e[4]||(e[4]=t=>m.state.dropOpen=!1)},[Object(c["g"])(y,{to:{name:"Account"}},{default:n(()=>[j]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>m.logout&&m.logout(...t))}," logout ")],2)])):(Object(c["p"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>m.login&&m.login(...t))}," Login "))])])])});var v=a("b012"),h=a("83fc"),y={name:"Navbar",setup(){const t=Object(c["t"])({dropOpen:!1,account:Object(c["b"])(()=>h["a"].account)});return{state:t,user:Object(c["b"])(()=>h["a"].user),async login(){v["a"].loginWithPopup()},async logout(){v["a"].logout({returnTo:window.location.origin})}}}};a("90df");y.render=m,y.__scopeId="data-v-a8dfcaf6";e["default"]=y},a2f9:function(t,e,a){var c={"./AccountPage.vue":["e542","chunk-7bdd8267"],"./BugsPage.vue":["85f4","chunk-2d0de941"],"./DetailsPage.vue":["17da","chunk-871e8a70"],"./HomePage.vue":["78a7","chunk-52b7d8f0"]};function n(t){if(!a.o(c,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=c[t],n=e[0];return a.e(e[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",t.exports=n},b012:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var c=a("8816"),n=a("83fc"),o=a("8c89"),r=a("41cb");function s(t,e){if(o["d"]);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const i={log(){s("log",arguments)},error(){s("error",arguments)},warn(){s("warn",arguments)},assert(){s("assert",arguments)},trace(){s("trace",arguments)}};var d=a("2b20");class u{async getAccount(){try{const t=await d["a"].get("/account");n["a"].account=t.data}catch(t){i.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const l=new u;var b=a("8e27");let g=!1,p=[];const O={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class f{constructor(t=o["b"]){this.socket=Object(b["io"])(t||o["b"]),this.on(O.connected,this.onConnected).on(O.authenticated,this.onAuthenticated).on(O.error,this.onError)}on(t,e){return this.socket.on(t,e.bind(this)),this}onConnected(t){i.log("[SOCKET_CONNECTION]",t),g=!0}onAuthenticated(t){i.log("[SOCKET_AUTHENTICATED]",t);const e=[...p];p=[],e.forEach(t=>{this.emit(t.action,t.payload)})}authenticate(t){this.socket.emit(O.authenticate,t)}onError(t){i.error("[SOCKET_ERROR]",t)}emit(t,e){if(!g)return i.log("[ENQUEING_ACTION]",{action:t,payload:e}),p.push({action:t,payload:e});this.socket.emit(t,e)}}var j=a("5d40");class m extends f{constructor(){super(),this.on("error",this.onError)}onError(t){i.error("[SOCKET_ERROR]",t),j["a"].toast(t.message,"error")}}const v=new m,h=Object(c["b"])({domain:o["e"],clientId:o["c"],audience:o["a"],useRefreshTokens:!0,onRedirectCallback:t=>{r["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});async function y(t){if(!h.isAuthenticated)return t;const e=1e3*h.identity.exp,a=e<Date.now(),c=e<Date.now()+432e5;return a?await h.loginWithPopup():c&&await h.getTokenSilently(),d["a"].defaults.headers.authorization=h.bearer,v.authenticate(h.bearer),t}h.on(h.AUTH_EVENTS.AUTHENTICATED,(async function(){d["a"].defaults.headers.authorization=h.bearer,d["a"].interceptors.request.use(y),n["a"].user=h.user,await l.getAccount(),v.authenticate(h.bearer)}))},ccc2:function(t,e,a){var c={"./Bug.vue":"01ac","./BugDetails.vue":"2f65","./CreateBug.vue":"2447","./CreateNote.vue":"0455","./EditBug.vue":"d2ea","./Note.vue":"3723","./navbar.vue":"9d8d"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}n.keys=function(){return Object.keys(c)},n.resolve=o,t.exports=n,n.id="ccc2"},d2ea:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-539a1a6a");Object(c["s"])("data-v-539a1a6a");const o={class:"modal fade",id:"edit-bug-modal",tabindex:"-1","aria-labelledby":"edit-bug-modalLabel","aria-hidden":"true"},r={class:"modal-dialog"},s={class:"modal-content"},i=Object(c["g"])("div",{class:"modal-header bg-secondary"},[Object(c["g"])("h5",{class:"modal-title",id:"edit-bug-modalLabel"}," Edit Bug "),Object(c["g"])("button",{type:"button",title:"close",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),d={class:"modal-body"},u={class:"form-group"},l=Object(c["g"])("label",{class:"sr-only",for:"bug title"},null,-1),b={class:"form-group"},g=Object(c["g"])("label",{class:"sr-only",for:"bug description"},null,-1),p=Object(c["g"])("button",{type:"submit",class:"btn btn-primary"}," Submit Changes ",-1),O=Object(c["g"])("div",{class:"modal-footer"},[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ")],-1);Object(c["q"])();const f=n((t,e,a,n,f,j)=>(Object(c["p"])(),Object(c["d"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("div",s,[i,Object(c["g"])("div",d,[Object(c["g"])("form",{onSubmit:e[3]||(e[3]=Object(c["E"])((...t)=>n.editBug&&n.editBug(...t),["prevent"]))},[Object(c["g"])("div",u,[l,Object(c["D"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.state.newBug.title=t),type:"text",placeholder:"Title here..."},null,512),[[c["A"],n.state.newBug.title]])]),Object(c["g"])("div",b,[g,Object(c["D"])(Object(c["g"])("textarea",{class:"w-75","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.newBug.description=t),type:"text",placeholder:"Description here..."},null,512),[[c["A"],n.state.newBug.description]])]),p],32)]),O])])])));var j=a("a1e9"),m=a("1157"),v=a.n(m),h=a("5d40"),y=a("2ff5"),w=a("83fc"),k={props:{bug:{type:Object,required:!0}},setup(t){const e=Object(j["i"])({newBug:{title:w["a"].activeBug.title,description:w["a"].activeBug.description}});return{state:e,async editBug(){try{y["a"].editBug(t.bug.id,e.newBug),v()("#edit-bug-modal").modal("hide")}catch(a){h["a"].toast(a.message)}}}}};k.render=f,k.__scopeId="data-v-539a1a6a";e["default"]=k},dd38:function(t,e,a){"use strict";a("38c5")},f35a:function(t,e,a){}});