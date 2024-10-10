import{_ as n,c as r,j as i,a as s,G as a,w as l,B as k,o as p}from"./chunks/framework.hw62c6vD.js";const A=JSON.parse('{"title":"_urlFileType","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Functions/UrlFileType.md","filePath":"docs/Functions/UrlFileType.md","lastUpdated":1722784533000}'),d={name:"docs/Functions/UrlFileType.md"};function E(y,t,g,F,o,c){const h=k("ContainerBox"),e=k("CodeBox");return p(),r("div",null,[t[4]||(t[4]=i("h1",{id:"urlfiletype",tabindex:"-1"},[s("_urlFileType "),i("a",{class:"header-anchor",href:"#urlfiletype","aria-label":'Permalink to "_urlFileType"'},"​")],-1)),a(h,{title:"介绍"},{desc:l(()=>t[0]||(t[0]=[s(" 为了限制用户上传文件 ")])),_:1}),a(h,{title:"基础用法",noGap:""},{desc:l(()=>t[1]||(t[1]=[s(" 判断时，内部自动将后缀名全小写进行判断 ")])),default:l(()=>[t[3]||(t[3]=i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"_urlFileType"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文件.213.JPEG'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'zip'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'7z'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'rar'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//false")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"_urlFileType"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'文件.213.7z'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", ["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'zip'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'7z'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'rar'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]); "),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//true")])])])],-1)),a(e,null,{codes:l(()=>t[2]||(t[2]=[i("div",{class:"language-ts vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"ts"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@description"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 检查URL的文件类型是否与给定的类型匹配。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," url"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 文件的URL。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," * "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@param"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," type"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," 要检查的文件类型。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," const"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," _urlFileType"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," ("),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"url"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"type"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"[]) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  return"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," type."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"includes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(url."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replace"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"."),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"+"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D","--shiki-light-font-weight":"bold","--shiki-dark-font-weight":"bold"}},"\\."),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"''"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toLowerCase"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"};")])])])],-1)])),_:1})]),_:1})])}const C=n(d,[["render",E]]);export{A as __pageData,C as default};