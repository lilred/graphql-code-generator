(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(5),r=n(10),o=(n(1),n(341)),p={id:"typescript-apollo-client-helpers",title:"Apollo-Client Helpers"},i={unversionedId:"plugins/typescript-apollo-client-helpers",id:"plugins/typescript-apollo-client-helpers",isDocsHomePage:!1,title:"Apollo-Client Helpers",description:"This plugin generates helpers for improving the integration of TypeScript and Apollo-Client, based on your schema.",source:"@site/docs/plugins/typescript-apollo-client-helpers.md",slug:"/plugins/typescript-apollo-client-helpers",permalink:"/docs/plugins/typescript-apollo-client-helpers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-apollo-client-helpers.md",version:"current",sidebar:"sidebar",previous:{title:"TypedDocumentNode",permalink:"/docs/plugins/typed-document-node"},next:{title:"TypeScript GraphQL-Request",permalink:"/docs/plugins/typescript-graphql-request"}},l=[{value:"How to use?",id:"how-to-use",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This plugin generates helpers for improving the integration of TypeScript and Apollo-Client, based on your schema."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: this plugin generates code that intended for ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-client")," @ ",Object(o.b)("inlineCode",{parentName:"p"},"> v3")," only.")),Object(o.b)("p",null,"This plugin generates fully-typed ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," and Type-Policies for Apollo-Client."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields"}),"You can read more about type-policies in Apollo Cache here"))),Object(o.b)("h3",{id:"how-to-use"},"How to use?"),Object(o.b)("p",null,"Start by add this plugin to your configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"schema: my-schema.graphql\ngenerates:\n  apollo-helpers.ts:\n    plugins:\n      - typescript-apollo-client-helpers\n")),Object(o.b)("p",null,"Then, use the generated TypeScript ",Object(o.b)("inlineCode",{parentName:"p"},"type")," as your signature for ",Object(o.b)("inlineCode",{parentName:"p"},"typePolicies"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { TypedTypePolicies } from './apollo-helpers';\n\nconst typePolicies: TypedTypePolicies = {\n  // Keys in this object will be validated against the typed on your schema\n  Product: {\n    keyFields: ['id'], // Values in this field will be validated against the available fields from the Product type\n  },\n  Person: {\n    keyFields: ['name', 'email'],\n  },\n  Book: {\n    // This entire definition is typed, based on available types and fields\n    fields: {\n      tags: {\n        merge: false,\n      },\n    },\n  },\n};\n\nconst cache = new InMemoryCache({\n  typePolicies,\n});\n")),Object(o.b)("p",null,Object(o.b)("h2",{parentName:"p"},"Installation"),Object(o.b)("img",{alt:"typescript-apollo-client-helpers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-apollo-client-helpers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(o.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(o.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(o.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-apollo-client-helpers\n")))),Object(o.b)("h2",{parentName:"p"},"API Reference"),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",{parentName:"p"},"Will use ",Object(o.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"requireKeyFields")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",{parentName:"p"},"Remove optional sign from all ",Object(o.b)("inlineCode",{parentName:"p"},"keyFields")," fields."),Object(o.b)("h3",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"h3"},"requirePoliciesForAllTypes")),Object(o.b)("p",{parentName:"p"},"type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("p",{parentName:"p"},"Remove optional sign from all generated keys of the root TypePolicy.")))}s.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(1),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(p,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},c),{},{components:n})):r.a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);