import{_ as n,c as e,I as h,w as a,j as i,a as s,D as t,o as E}from"./chunks/framework.sZ3o6f-S.js";const m=JSON.parse('{"title":"_formatSecondsToChinese","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Functions/FormatSecondsToChinese.md","filePath":"docs/Functions/FormatSecondsToChinese.md","lastUpdated":1722784533000}'),r={name:"docs/Functions/FormatSecondsToChinese.md"},p=i("h1",{id:"formatsecondstochinese",tabindex:"-1"},[s("_formatSecondsToChinese "),i("a",{class:"header-anchor",href:"#formatsecondstochinese","aria-label":'Permalink to "_formatSecondsToChinese"'},"​")],-1),d=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/** "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@description"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 将秒数格式化成中文")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," second"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 秒数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," const"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," _formatSecondsToChinese"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"second"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," number"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  //计算小时、分钟和剩余秒数")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," hour"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Math."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"floor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(second "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 3600"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," minute"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Math."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"floor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((second "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 3600"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 60"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," remainingSecond"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," second "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 60"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," timeParts"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [];")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (hour "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    timeParts."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"hour"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}小时`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (minute "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    timeParts."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"minute"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}分`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"!"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"hour "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"&&"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," !"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"minute) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    return"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," `${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"remainingSecond"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}秒`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  if"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (remainingSecond "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 0"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    timeParts."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"push"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"`${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"remainingSecond"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"}秒`"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," timeParts."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"join"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'""'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")])])])],-1);function g(y,o,F,c,C,D){const k=t("ContainerBox"),l=t("CodeBox");return E(),e("div",null,[p,h(k,{title:"介绍"},{desc:a(()=>[s(" 将秒数格式化成中文 ")]),_:1}),h(k,{title:"基础用法"},{default:a(()=>[h(l,null,{codes:a(()=>[d]),_:1})]),_:1})])}const B=n(r,[["render",g]]);export{m as __pageData,B as default};