import{_ as n,c as d,j as i,a as s,G as a,w as h,B as l,o as p}from"./chunks/framework.hw62c6vD.js";const A=JSON.parse('{"title":"_isPhone","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Functions/IsPhone.md","filePath":"docs/Functions/IsPhone.md","lastUpdated":1726059906000}'),r={name:"docs/Functions/IsPhone.md"};function o(E,t,g,y,F,c){const k=l("ContainerBox"),e=l("CodeBox");return p(),d("div",null,[t[3]||(t[3]=i("h1",{id:"isphone",tabindex:"-1"},[s("_isPhone "),i("a",{class:"header-anchor",href:"#isphone","aria-label":'Permalink to "_isPhone"'},"​")],-1)),a(k,{title:"介绍"},{desc:h(()=>t[0]||(t[0]=[s(" 判断是否移动端访问 ")])),_:1}),a(k,{title:"基础用法",noGap:""},{desc:h(()=>t[1]||(t[1]=[i("p",null,[s("返回"),i("code",null,"Boolean"),s("值")],-1),i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"console."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(_isPhone);")])])])],-1)])),default:h(()=>[a(e,null,{codes:h(()=>t[2]||(t[2]=[i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," _isPhone"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (() "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," width"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," screen.width;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," height"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," screen.height;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," aspectRatio"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," width "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," height "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"?"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," width "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," height "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," height "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," width;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," isPad"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," aspectRatio "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," &&"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," aspectRatio "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"<"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1.7"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"mobile"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"Android"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"|"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#DBEDFF"}},"iPhone"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"i"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(navigator.userAgent) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," !"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"isPad;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})();")])])])],-1)])),_:1})]),_:1})])}const C=n(r,[["render",o]]);export{A as __pageData,C as default};
