(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(5),r=n(10),i=(n(1),n(341)),o={id:"codegen-config",title:"codegen.yml"},c={unversionedId:"getting-started/codegen-config",id:"getting-started/codegen-config",isDocsHomePage:!1,title:"codegen.yml",description:"Having a config file fits well when we have a large amount of options to provide in order to generate some code. This can happen mostly in large scale projects where the GraphQL schema is pretty complex and we would like to generate a lot of different formats.",source:"@site/docs/getting-started/codegen-config.md",slug:"/getting-started/codegen-config",permalink:"/docs/getting-started/codegen-config",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/codegen-config.md",version:"current",sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"`schema` field",permalink:"/docs/getting-started/schema-field"}},p=[{value:"Available Options",id:"available-options",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"CLI Flags",id:"cli-flags",children:[]},{value:"Debug Mode",id:"debug-mode",children:[]},{value:"Other ways to provide configuration",id:"other-ways-to-provide-configuration",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Having a config file fits well when we have a large amount of options to provide in order to generate some code. This can happen mostly in large scale projects where the GraphQL schema is pretty complex and we would like to generate a lot of different formats."),Object(i.b)("p",null,"To pass configuration to GraphQL Codegen, you need to simply create a ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," or ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.json")," file and run the codegen."),Object(i.b)("p",null,"The CLI will automatically detect the defined config file and will generate code accordingly. In addition, you can also define a path to your config file with the ",Object(i.b)("inlineCode",{parentName:"p"},"--config")," options, like so:"),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"yarn graphql-codegen --config ./path/to/config.yml"))),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(i.b)("inlineCode",{parentName:"h5"},"npm"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"npx graphql-codegen --config ./path/to/config.yml"))),Object(i.b)("p",null,"Here's an example for a possible config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ndocuments: ./src/**/*.graphql\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(i.b)("p",null,"An example for a very large config file can be seen ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/blob/master/dev-test/codegen.yml"}),"here"),"."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"YAML Config Validation & auto-complete")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you are using VSCode as your IDE, make sure to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"}),"install the YAML plugin"),", this will add validation and auto-complete for available plugins, plugins config and general structure of the ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," file!"))),Object(i.b)("h2",{id:"available-options"},"Available Options"),Object(i.b)("p",null,"Here are the supported options that you can define in the config file (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/utils/plugins-helpers/src/types.ts#L92"}),"source code"),"):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/schema-field#root-level"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"schema")," (required)"))," - A URL to your GraphQL endpoint, a local path to ",Object(i.b)("inlineCode",{parentName:"p"},".graphql")," file, a glob pattern to your GraphQL schema files, or a JavaScript file that exports the schema to generate code from. This can also be an array which specifies multiple schemas to generate code from. You can read more about the supported formats ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/schema-field#available-formats"}),"here"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/documents-field#root-level"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"documents")))," - Array of paths or glob patterns for files which export GraphQL documents using a ",Object(i.b)("inlineCode",{parentName:"p"},"gql")," tag or a plain string; for example: ",Object(i.b)("inlineCode",{parentName:"p"},"./src/**/*.graphql"),". You can also provide this options with a string instead of an array, in case you're dealing with a single document. You can read more about the supported formats ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/documents-field#available-formats"}),"here"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"generates")," (required)")," - A map where the key represents an output path for the generated code and the value represents a set of options which are relevant for that specific file. Below are the possible options that can be specified:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"generates.plugins")," (required)")," - A list of plugins to use when generating the file. Templates are also considered as plugins and they can be specified in this section. A full list of supported plugins can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugins/index"}),"here"),". You can also point to a custom plugin in a local file (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-codegen/index"}),"Custom Plugins"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/schema-field#output-file-level"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"generates.schema")))," - Same as root ",Object(i.b)("inlineCode",{parentName:"p"},"schema"),", but applies only for the specific output file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/documents-field#output-file-level"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"generates.documents")))," - Same as root ",Object(i.b)("inlineCode",{parentName:"p"},"documents"),", but applies only for the specific output file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/config-field#output-level"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"generates.config")))," - Same as root ",Object(i.b)("inlineCode",{parentName:"p"},"config"),", but applies only for the specific output file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"generates.overwrite"))," - Same as root ",Object(i.b)("inlineCode",{parentName:"p"},"overwrite"),", but applies only for the specific output file.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/require-field"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"require")))," - A path to a file which defines custom Node.JS ",Object(i.b)("inlineCode",{parentName:"p"},"require()")," handlers for custom file extensions. This is essential if the code generator has to go through files which require other files in an unsupported format (by default). See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/jamestalmage/df922691475cff66c7e6"}),"more information"),". Note that values that specified in your ",Object(i.b)("inlineCode",{parentName:"p"},".yml")," file will get loaded after loading the ",Object(i.b)("inlineCode",{parentName:"p"},".yml")," file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/config-field#root-level"}),Object(i.b)("strong",{parentName:"a"},Object(i.b)("inlineCode",{parentName:"strong"},"config")))," - Options that we would like to provide to the specified plugins. The options may vary depends on what plugins you specified. Read the documentation of that specific plugin for more information. You can read more about how to pass configuration to plugins ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/config-field"}),"here"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"overwrite"))," - A flag to overwrite files if they already exist when generating code (",Object(i.b)("inlineCode",{parentName:"p"},"true")," by default).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"watch"))," - A flag to trigger codegen when there are changes in the specified GraphQL schemas. You can either specify a boolean to turn it on/off or specify an array of glob patterns to add custom files to the watch.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"silent"))," - A flag to suppress printing errors when they occur.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"errorsOnly"))," - A flag to suppress printing anything except errors.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"hooks"))," - Specifies scripts to run when events are happening in the codegen's core. You can read more about lifecycle hooks ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/lifecycle-hooks"}),"here"),". You can specify this on your root configuration or on each output.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"pluginLoader"))," - If you are using the programmatic API in a browser environment, you can override this configuration to load your plugins in a way different than ",Object(i.b)("inlineCode",{parentName:"p"},"require"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"pluckConfig"))," - Allows you to override the configuration for ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-tag-pluck"),", the tool that extracts your GraphQL operations from your code files."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"pluckConfig.modules"))," - An array of ",Object(i.b)("inlineCode",{parentName:"p"},"{ name: string, identifier: string }")," that will be used to track down your ",Object(i.b)("inlineCode",{parentName:"p"},"gql")," usages and imports. Use this if your code files imports ",Object(i.b)("inlineCode",{parentName:"p"},"gql")," from another library or you have a custom ",Object(i.b)("inlineCode",{parentName:"p"},"gql")," tag. ",Object(i.b)("inlineCode",{parentName:"p"},"identifier")," is the named export, so don't provide it if the tag function is imported as default.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"pluckConfig.gqlMagicComment"))," - Configures the magic GraphQL comments to look for. The default is ",Object(i.b)("inlineCode",{parentName:"p"},"/* GraphQL */"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"pluckConfig.globalGqlIdentifierName"))," - Overrides the name of the default GraphQL name identifier."))))),Object(i.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"You can use environment variables in your ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml")," file::"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: ${SCHEMA_PATH}\ndocuments: ./src/**/*.graphql\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(i.b)("p",null,"You can load an ",Object(i.b)("inlineCode",{parentName:"p"},".env")," file by adding the ",Object(i.b)("inlineCode",{parentName:"p"},"-r dotenv/config")," option to your CLI command."),Object(i.b)("p",null,"You can specify a default value in case an environment variable is missing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: ${SCHEMA_PATH:schema.graphql}\n")),Object(i.b)("h2",{id:"cli-flags"},"CLI Flags"),Object(i.b)("p",null,"The Codegen also supports several CLI flags that allow you to override the default behaviour specified in your ",Object(i.b)("inlineCode",{parentName:"p"},".yml")," config file:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"--config")," (",Object(i.b)("inlineCode",{parentName:"strong"},"-c"),")")," - Specifies the codegen config file to use.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"--watch")," (",Object(i.b)("inlineCode",{parentName:"strong"},"-w"),")")," - Overrides the ",Object(i.b)("inlineCode",{parentName:"p"},"watch")," config to true. You can also specify a glob expression to create a custom watch list.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"--silent")," (",Object(i.b)("inlineCode",{parentName:"strong"},"-s"),")")," - Overrides the ",Object(i.b)("inlineCode",{parentName:"p"},"silent")," config to true.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"--errors-only")," (",Object(i.b)("inlineCode",{parentName:"strong"},"-e"),")")," - Overrides the ",Object(i.b)("inlineCode",{parentName:"p"},"errorsOnly")," config to true.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"--require")," (",Object(i.b)("inlineCode",{parentName:"strong"},"-r"),")")," - Specifies ",Object(i.b)("inlineCode",{parentName:"p"},"require.extensions")," before loading the ",Object(i.b)("inlineCode",{parentName:"p"},".yml")," file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"--overwrite")," (",Object(i.b)("inlineCode",{parentName:"strong"},"-o"),")")," - Overrides the ",Object(i.b)("inlineCode",{parentName:"p"},"overwrite")," config to true."))),Object(i.b)("h2",{id:"debug-mode"},"Debug Mode"),Object(i.b)("p",null,"You can set the ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," in order to tell the codegen to print debug information."),Object(i.b)("p",null,"You can set the ",Object(i.b)("inlineCode",{parentName:"p"},"VERBOSE")," environment variable to ",Object(i.b)("inlineCode",{parentName:"p"},"1")," in order to tell the codegen to print more information regarding the CLI output (",Object(i.b)("inlineCode",{parentName:"p"},"listr"),")."),Object(i.b)("h2",{id:"other-ways-to-provide-configuration"},"Other ways to provide configuration"),Object(i.b)("p",null,"GraphQL-Codegen is using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/davidtheclark/cosmiconfig"}),Object(i.b)("inlineCode",{parentName:"a"},"cosmiconfig"))," library to manage configuration loading."),Object(i.b)("p",null,"That means, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.yml"),", but also ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"codegen.js")," will work. You can also specify the entire configuration under a key called ",Object(i.b)("inlineCode",{parentName:"p"},'"codegen"')," in your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("p",null,"For more information, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/davidtheclark/cosmiconfig#cosmiconfig"}),"please refer to ",Object(i.b)("inlineCode",{parentName:"a"},"cosmiconfig")," documentation"),"."),Object(i.b)("p",null,"GraphQL-Codgen is also integratable with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-config.com/"}),"`GraphQL-Config"),", so you can specify ",Object(i.b)("inlineCode",{parentName:"p"},".graphqlrc")," as your configuration file."))}b.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var a=n(1),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,g=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.a.createElement(g,c(c({ref:t},l),{},{components:n})):r.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);