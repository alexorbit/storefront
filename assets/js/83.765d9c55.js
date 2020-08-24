(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{499:function(t,e,s){"use strict";s.r(e);var a=s(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"customization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customization"}},[t._v("#")]),t._v(" Customization 📝")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/docs/customizando.html"}},[t._v("🇧🇷 Tradução em português")])],1),t._v(" "),s("blockquote",[s("p",[t._v("Here we're considering you already heave a deploy created from\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Storefront Starter"),s("OutboundLink")],1),t._v(" and using our default\n"),s("code",[t._v("@ecomplus/storefront-template")]),t._v(". If you're an E-Com Plus merchant, we did it for you 😉")])]),t._v(" "),s("p",[t._v("There are several ways to customize Storefront:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#build-pages-within-cms"}},[t._v("Compose pages through CMS")]),t._v(" (the easier way);")]),t._v(" "),s("li",[s("a",{attrs:{href:"#theme-overwrite-styles"}},[t._v("Theme/overwrite styles")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"#edit-pre-rendered-views"}},[t._v("Editing some EJS (HTML) code from default template")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"#additional-scripts"}},[t._v("Add/import custom JavaScript")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"#replace-vue-components"}},[t._v("Replacing default scripts and Vue components with Webpack aliases")]),t._v(" (PRO 🤘);")])]),t._v(" "),s("p",[t._v("Before starting, it might be useful to run your Storefront deploy on "),s("em",[t._v("localhost")]),t._v(":")]),t._v(" "),s("ol",[s("li",[t._v("Make sure "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" is installed;")]),t._v(" "),s("li",[t._v("Clone your GitHub repo;")]),t._v(" "),s("li",[t._v("Install npm dependencies;")]),t._v(" "),s("li",[t._v("Run serve script;")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ecomplus-stores/my-store\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-store\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])])]),s("h2",{attrs:{id:"build-pages-within-cms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-pages-within-cms"}},[t._v("#")]),t._v(" Build pages within CMS")]),t._v(" "),s("p",[t._v("Access the administrative part (powered by "),s("a",{attrs:{href:"https://www.netlifycms.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify CMS"),s("OutboundLink")],1),t._v(" ❤️)\nof your Storefront deploy at "),s("code",[t._v("https://yourdomain.com/admin/")]),t._v(", after login you'll be able to:")]),t._v(" "),s("ul",[s("li",[t._v("Edit general info and settings such as contact, address and logo:")])]),t._v(" "),s("div",{staticClass:"demo"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/cms-config.png",alt:"CMS config"}})]),t._v(" "),s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/cms-info.png",alt:"CMS info"}})])])])]),t._v(" "),s("ul",[s("li",[t._v("Set your store's identity colors:")])]),t._v(" "),s("img",{staticStyle:{"max-height":"180px"},attrs:{src:"/storefront/assets/img/cms-colors.png",alt:"CMS colors"}}),t._v(" "),s("ul",[s("li",[t._v("Organize all pages adding, moving or removing sections (drag and drop):")])]),t._v(" "),s("img",{staticStyle:{"max-height":"240px"},attrs:{src:"/storefront/assets/img/cms-dd.gif",alt:"CMS drag'n drop"}}),t._v(" "),s("ul",[s("li",[t._v("Add extra HTML, JS or CSS code for each page or entire website:")])]),t._v(" "),s("div",{staticClass:"demo"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/cms-html-section.png",alt:"CMS custom HTML section"}})]),t._v(" "),s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/cms-insert-code.png",alt:"CMS insert code"}})])])])]),t._v(" "),s("ul",[s("li",[t._v("Create or edit extra pages and blog posts;")]),t._v(" "),s("li",[t._v("Plug and customize additional widgets;")])]),t._v(" "),s("h2",{attrs:{id:"theme-overwrite-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-overwrite-styles"}},[t._v("#")]),t._v(" Theme/overwrite styles")]),t._v(" "),s("p",[t._v("We're using "),s("code",[t._v("@ecomplus/storefront-twbs")]),t._v("\n(based on "),s("a",{attrs:{href:"https://getbootstrap.com/docs/4.5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap 4"),s("OutboundLink")],1),t._v(") as CSS/JS foundation,\nfor details check the "),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/"}},[t._v("base UI reference here")]),t._v(".\nYou may also check most important and maintained template\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-template/docs/01-elements.html"}},[t._v("elements selectors")]),t._v(".")],1),t._v(" "),s("ul",[s("li",[t._v("If you just want to add few CSS, do it in the CMS at "),s("em",[t._v("Layout > Insert code > Custom CSS")]),t._v(";")]),t._v(" "),s("li",[t._v("If you're planning to make deeper changes, we recommend to edit SCSS files\n(you can use "),s("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass"),s("OutboundLink")],1),t._v(" or just plain CSS) directly from GitHub\nor locally using your preferred code editor:\n"),s("ol",[s("li",[t._v("Add new or overwrite styles at\n"),s("code",[t._v("/template/scss/custom-css/_styles.scss")]),t._v(";")]),t._v(" "),s("li",[t._v("To replace default template styles you can try setting\n"),s("a",{attrs:{href:"https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap SCSS variables"),s("OutboundLink")],1),t._v("\nat "),s("code",[t._v("/template/scss/_variables.scss")]),t._v(";")]),t._v(" "),s("li",[t._v("Finally, you can also start from scratch editing\n"),s("code",[t._v("/template/scss/_main.scss")]),t._v(" if you don't want to import entire\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/tree/master/%40ecomplus/storefront-template/template/scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("Storefront Template styles"),s("OutboundLink")],1),t._v(",\nfor example to make your own footer styles and prevent\nimporting those ones from our default template\n(perf optim 🚀, not so easy as the previous options);")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("We also encourage to use\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/docs/05-vars.html"}},[t._v("CSS vars")]),t._v("\nalways then possible to make your additional code easily customizable and extensible.")],1)]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Example using CSS vars")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".top-bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--secondary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{staticStyle:{"max-height":"180px"},attrs:{src:"/storefront/assets/img/css-vars.png",alt:"CSS vars example"}})]),t._v(" "),s("p",[t._v("As example you can also check custom SCSS applied\nby some of our additional themes, such as\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/tree/master/%40ecomplus/storefront-template/template/scss/themes/clean-gray",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clean Gray"),s("OutboundLink")],1),t._v("\nand "),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/blob/master/%40ecomplus/storefront-template/template/scss/themes/niche-baby/_variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("Niche Baby"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"edit-pre-rendered-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-pre-rendered-views"}},[t._v("#")]),t._v(" Edit pre-rendered views")]),t._v(" "),s("p",[t._v("In the CMS it's possible to include additional HTML snippets,\nbut to edit default views you should edit\n"),s("a",{attrs:{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS"),s("OutboundLink")],1),t._v(" files at "),s("code",[t._v("/template/pages/")]),t._v(" folder:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("/template/pages/@/meta.ejs")]),t._v(" to customize meta tags\n(specially for SEO purposes):")])]),t._v(" "),s("img",{attrs:{src:"/storefront/assets/img/ejs-meta.png",alt:"EJS meta tags",width:"400"}}),t._v(" "),s("ul",[s("li",[s("code",[t._v("/template/pages/@/sections/")]),t._v(" to get lot of reusable components 📌,\nthose ones renders the pages main content and are used on the CMS drag and drop tool:")])]),t._v(" "),s("img",{attrs:{src:"/storefront/assets/img/ejs-info-bar.png",alt:"EJS info bar",width:"400"}}),t._v(" "),s("ul",[s("li",[s("code",[t._v("/template/pages/@/layout/")]),t._v(" to edit common layout organisms\n(footer, header, menu);")]),t._v(" "),s("li",[s("code",[t._v("/template/pages/app/")]),t._v(" to edit cart/checkout in a superficial way,\njust like insert banners, counters or a product carousel for example;")])]),t._v(" "),s("p",[t._v("Before start editing HTML, it should be useful to check the\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/docs/01-components.html"}},[t._v("components")]),t._v(" and\nCSS utility classes available by default.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("EJS is a simple JS based template language to generate HTML markup,\nof course you can just write plain HTML, but for advanced customization\nwe recommend to check how Storefront\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-framework/docs/01-renderization.html"}},[t._v("renderization")]),t._v("\nworks with EJS.")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("To keep customized stores up to date we still trying to update\nedited EJS files on new Storefront releases, preserving the edited snippets\nbut updating the non-changed parts by checking Git diff 😎")])]),t._v(" "),s("h3",{attrs:{id:"note-for-product-cards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-for-product-cards"}},[t._v("#")]),t._v(" Note for product cards")]),t._v(" "),s("p",[t._v("Some pre-rendered HTML elements are overwritten with JS on client by the\nrespective Vue components, it happens specially with product cards pre-rendered by\n"),s("code",[t._v("/template/pages/@/sections/inc/product-item.ejs")]),t._v(".")]),t._v(" "),s("p",[t._v("In those cases you should use "),s("code",[t._v("data-slot")]),t._v(" attribute to preserve your custom code\nafter hydration, for example:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("buy-button-content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-shopping-bag mr-1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Buy now\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("data-slot")]),t._v(" value must correspond to a\n"),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-slots.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot"),s("OutboundLink")],1),t._v(" name\nof the Vue component, check\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-components/docs/ProductCard.html#slots"}},[s("code",[t._v("<ProductCard>")]),t._v(" slots here")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("PRO TIP")]),t._v(" "),s("p",[t._v("If you need deeper customization, consider creating an Webpack alias to\n"),s("code",[t._v("./html/ProductCard.html")]),t._v(" (check "),s("a",{attrs:{href:"#replace-vue-components"}},[t._v("replacing Vue components")]),t._v(").")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("You don't need to know Vue.js to customize Storefront")]),t._v(",\nVue is awesome and really easy to learn, for advanced customization it'll give you\nlot of productivity, but it's not required at all ✌️")])]),t._v(" "),s("h2",{attrs:{id:"additional-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-scripts"}},[t._v("#")]),t._v(" Additional scripts")]),t._v(" "),s("p",[t._v("By default you can use jQuery 3 (slim), Vue.js 2 and some other\nsmall libraries globally available, for details check\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/docs/06-javascript.html"}},[t._v("base UI included JS")]),t._v(" and\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-template/docs/05-javascript.html"}},[t._v("template JS globals")]),t._v(".")],1),t._v(" "),s("ul",[s("li",[t._v("If you just want to add few JS, do it in the CMS at "),s("em",[t._v("Layout > Insert code")]),t._v("\nadding "),s("code",[t._v("<script>")]),t._v(" tags before "),s("code",[t._v("/body")]),t._v(" or (when really needed) "),s("code",[t._v("/head")]),t._v(",\nyou can also add scripts to specific pages using "),s("em",[t._v("HTML code")]),t._v(" section;")]),t._v(" "),s("li",[t._v("If you're planning to add lot of JS (or ES) code, it's strongly recommended to\nedit JS files at "),s("code",[t._v("/template/js/custom-js/")]),t._v(" folder directly from GitHub or locally using your preferred code editor. You can also create new files and\n"),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[t._v("import"),s("OutboundLink")],1),t._v(" properly;")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When editing "),s("code",[t._v("/template/js/")]),t._v(" files you can use ES6 features without worrying about\nbrowser support, code there will be parsed and minified.")])]),t._v(" "),s("h2",{attrs:{id:"replace-vue-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-vue-components"}},[t._v("#")]),t._v(" Replace Vue components")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Use it with moderation and only when really needed, skip using for things other\nthen explained below, specially if you don't know Webpack very well.")])]),t._v(" "),s("p",[t._v("When easier ways aren't sufficient to make your wanted customization,\nyou can give a try with\n"),s("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 4 aliases"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Generally we recommend to use it only for replacing Vue components\nHTML template 📐, although it would work also for scripts and styles.")]),t._v(" "),s("p",[t._v("You should start getting the original source from\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/tree/master/%40ecomplus/storefront-components/src/html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repo"),s("OutboundLink")],1),t._v(",\ncopy the file you want to replace and paste it inside\n"),s("code",[t._v("/template/js/custom-js/")]),t._v(" folder, edit the new file as needed and then create\na "),s("code",[t._v("storefront.webpack.js")]),t._v(" file at the root of your repository, as example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// storefront.webpack.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./html/ProductCard.html'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/template/js/custom-js/html/ProductCard.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Note that all "),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-components/"}},[t._v("Storefront components")]),t._v(" are\ncomposed by 4 files (Vue/HTML/JS/SCSS), the Vue file always imports the\nHTML one with "),s("code",[t._v("./html/{ComponentName}.html")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);