(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{322:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(5),a=n(10),o=(n(1),n(341)),i={},c={unversionedId:"generated-config/named-operations-object",id:"generated-config/named-operations-object",isDocsHomePage:!1,title:"named-operations-object",description:"Installation",source:"@site/docs/generated-config/named-operations-object.md",slug:"/generated-config/named-operations-object",permalink:"/docs/generated-config/named-operations-object",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/named-operations-object.md",version:"current"},p=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>identifierName</code>",id:"identifiername",children:[]}]}],l={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("img",{alt:"named-operations-object plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/named-operations-object?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",{className:"admonition admonition-shell"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(r.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/named-operations-object\n")))),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("h3",{id:"identifiername"},Object(o.b)("inlineCode",{parentName:"h3"},"identifierName")),Object(o.b)("p",null,"type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"namedOperations")),Object(o.b)("p",null,"Allow you to customize the name of the exported identifier"),Object(o.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - named-operations-object\n config:\n   identifierName: ListAllOperations\n")))}d.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(1),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,u=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);