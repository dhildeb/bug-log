(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-871e8a70"],{"17da":function(t,e,c){"use strict";c.r(e);var b=c("7a23");const n={class:"row border-bottom bg-secondary shadow-sm rounded justify-content-between mt-5"},s=Object(b["g"])("h3",{class:"p-3"}," Notes ",-1),a={class:"p-3"},o={class:"row"},u=Object(b["g"])("div",{class:"col-10"},null,-1),j={class:"col-2 p-5"},O=Object(b["g"])("button",{class:"btn btn-danger"}," Back ",-1);function d(t,e,c,d,i,g){const l=Object(b["w"])("BugDetails"),r=Object(b["w"])("CreateNote"),p=Object(b["w"])("Note"),w=Object(b["w"])("router-link");return Object(b["p"])(),Object(b["d"])("div",{class:d.state.bug.closed?"container no-bug":"container bug"},[d.state.bug.id?(Object(b["p"])(),Object(b["d"])(l,{key:0,bug:d.state.bug},null,8,["bug"])):Object(b["e"])("",!0),Object(b["g"])("div",n,[s,Object(b["g"])("div",a,[Object(b["g"])(r)])]),(Object(b["p"])(!0),Object(b["d"])(b["a"],null,Object(b["v"])(d.state.notes,t=>(Object(b["p"])(),Object(b["d"])(p,{key:t.id,note:t},null,8,["note"]))),128)),Object(b["g"])("div",o,[u,Object(b["g"])("div",j,[Object(b["g"])(w,{to:{name:"Bugs"}},{default:Object(b["C"])(()=>[O]),_:1})])])],2)}var i=c("a1e9"),g=c("5c40"),l=c("83fc"),r=c("2ff5"),p=c("6c02"),w={name:"Details",setup(){const t=Object(p["c"])(),e=Object(i["i"])({bug:Object(g["d"])(()=>l["a"].activeBug),notes:Object(g["d"])(()=>l["a"].notes)});return Object(g["N"])(()=>{e.bug.id||r["a"].getOne(t.params.id)}),{state:e}}};c("7904");w.render=d;e["default"]=w},"5a0b":function(t,e,c){},7904:function(t,e,c){"use strict";c("5a0b")}}]);