(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{399:function(t,a,n){"use strict";n.r(a);var s=n(45),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),n("p",[t._v("Altair comes with the ability to be extended via plugins. These allow you customize the functionality provided by Altair to be able to do even more than what is directly available in Altair.")]),t._v(" "),n("p",[t._v("Plugins can be added by adding them to the "),n("code",[t._v("plugin.list")]),t._v(" options in the settings. Alternatively, you can discover available plugins to use from the plugin manager and add the plugin from there (which does the same thing).")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/H0eqhvy.png",alt:"plugin manager icon"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/8zTpbTq.png",alt:"plugin manager"}})]),t._v(" "),n("p",[t._v("Adding plugins to the settings uses the following format:")]),t._v(" "),n("p",[n("code",[t._v("<plugin-source>:<plugin-name>@<version>::[<opt>]->[<opt-value>]")])]),t._v(" "),n("p",[n("strong",[t._v("Plugin source:")]),t._v(" Altair supports several sources for plugins: "),n("code",[t._v("[npm](https://www.npmjs.com/)")]),t._v(" (default), "),n("code",[t._v("[github](https://github.com/)")]),t._v(" and "),n("code",[t._v("url")]),t._v(". Released plugins should be available in npm so all plugins are sourced from npm by default. If you specify the source as "),n("code",[t._v("url")]),t._v(", then you need to specify an "),n("code",[t._v("opt")]),t._v(" for the url such as "),n("code",[t._v("[url]->[http://localhost:8080]")]),t._v(". If you specify the source as "),n("code",[t._v("github")]),t._v(", then you need to specify an "),n("code",[t._v("opt")]),t._v(" for the repo to be used such as "),n("code",[t._v("[repo]->[imolorhe/altair]")])]),t._v(" "),n("p",[n("strong",[t._v("Plugin name:")]),t._v(" Every plugin must have a name, used to uniquely identify the plugin. Every plugin name must begin with "),n("code",[t._v("altair-graphql-plugin-")]),t._v(" else Altair would throw an error.")]),t._v(" "),n("p",[n("strong",[t._v("Version:")]),t._v(" You can choose to specify the version of the plugin you want to use. If no version is specified, Altair defaults to use the latest version of the plugin available.")]),t._v(" "),n("p",[n("strong",[t._v("Extra options:")]),t._v(" Depending on the plugin source specified, you can specify extra options as required. All options follow the format "),n("code",[t._v("[opt]->[value]")]),t._v(". For example, "),n("code",[t._v("[repo]->[imolorhe/altair]")]),t._v(".")]),t._v(" "),n("p",[t._v("In its simplest form, you can retrieve a plugin by specifying only the plugin name, then the default version (latest) and source (npm) are used. The following are valid examples of ways to use plugins:")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# loads "altair-graphql-plugin-graphql-explorer" plugin from npm using the latest version')]),t._v("\naltair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("graphql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("graphql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("explorer\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# loads "altair-graphql-plugin-some-plugin" plugin from the localhost URL. Version is ignored')]),t._v("\nurl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("altair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("graphql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("some"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plugin@0.0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8002")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# loads "altair-graphql-plugin-json-to-csv" plugin from github from the specified repo')]),t._v("\ngithub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("altair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("graphql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("csv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("repo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isaachvazquez/altair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("graphql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("csv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);