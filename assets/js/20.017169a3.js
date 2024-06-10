(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{687:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("在 Rust 中可以通过模块的机制来实现最外层的封装，并且每一个 Rust 文件都可以看作一个模块，模块内的元素可以通过 pub 关键字对外明示")])]),s._v(" "),t("h2",{attrs:{id:"_1-定义模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义模块"}},[s._v("#")]),s._v(" 1.定义模块")]),s._v(" "),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[s._v("ClassName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[s._v("EnumName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_2-使用模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用模块"}},[s._v("#")]),s._v(" 2.使用模块")]),s._v(" "),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// second.rs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[s._v("ClassName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("impl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("i32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("value\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("public_method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from public method"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("private_methods")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("private_methods")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from private methods"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("div",{staticClass:"language-rust line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rust"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("second")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("second"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassName")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("new")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("publish_method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);