(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{674:function(s,t,a){"use strict";a.r(t);var n=a(3),e=function(s){s.options.__data__block__={flowchart_382ee166:"st=>start: 执行栈\n e=>end: 结束\n op1=>operation: 预解释\n op2=>operation: 入栈\n op3=>operation: 出栈\n\n st->op1->e\n op1->op2->e\n op2->op3->e"}},r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"六-同步编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-同步编程"}},[s._v("#")]),s._v(" 六.同步编程")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("ul",[t("li",[s._v("创建执行环境")]),s._v(" "),t("li",[s._v("执行前预解释")]),s._v(" "),t("li",[s._v("执行中入栈、出栈")])])]),s._v(" "),t("FlowChart",{attrs:{id:"flowchart_382ee166",code:s.$dataBlock.flowchart_382ee166,preset:"vue"}}),t("h2",{attrs:{id:"_1-执行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行环境"}},[s._v("#")]),s._v(" 1.执行环境")]),s._v(" "),t("p",[t("code",[s._v("js")]),s._v("代码会在一个"),t("code",[s._v("栈")]),s._v("中执行代码，这个"),t("code",[s._v("栈")]),s._v("称为"),t("code",[s._v("执行栈")]),s._v("，由于"),t("code",[s._v("栈")]),s._v("的特性为"),t("code",[s._v("先进后出")]),s._v("，所以同步代码会首先进入"),t("code",[s._v("栈")]),s._v("底、在代码执行的过程中，如果遇到要执行的函数会再次进栈，重复上述过程，直到没有入栈代码")]),s._v(" "),t("p",[s._v("然后"),t("code",[s._v("栈")]),s._v("顶代码执行完后就出"),t("code",[s._v("栈")]),s._v("，直到整个"),t("code",[s._v("栈")]),s._v("没有代码，至此代码执行完成")]),s._v(" "),t("h2",{attrs:{id:"_2-预解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-预解释"}},[s._v("#")]),s._v(" 2.预解释")]),s._v(" "),t("p",[s._v("js 是单线程，同步代码会从上往下执行，但代码在进入"),t("code",[s._v("执行栈")]),s._v("前会先将代码扫描一遍，会将声明的变量放到代码块的最前面即"),t("code",[s._v("变量提升")]),s._v("，此过程称为"),t("code",[s._v("预解释")])]),s._v(" "),t("p",[t("code",[s._v("var")]),s._v(" 声明的代码会被提前到"),t("code",[s._v("作用域")]),s._v("顶部")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a:"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("不会报错")]),s._v(" "),t("p",[s._v("实际执行顺序")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a:"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\na "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("5.var、变量提升")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在全局作用域中，带var和不带var的关系")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//区别：带var的可以进行预解释，所以在赋值的前面执行不会报错；不带var的是不能进行预解释，在前面执行会报错")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--\x3eundefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//VM229:1 Uncaught ReferenceError: num2 is not defined")]),s._v("\nnum2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//关系：num2 = 12--\x3e相当于给window增加了一个叫做num2的属性名，属性值是12")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//var num = 12 --\x3e首先它相当于给全局作用域增加了一个全局变量num,但是不仅如此，它也相当于给windwo增加了一个属性名num,属性值是12")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nnum2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//私有作用域中出现一个变量不是私有的，则往上级作用域查找，如果上级作用域没有则继续向上查找，一直找到window为止，如果window下也没有")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--\x3e我们是获取值：console.log(total) --\x3e报错了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//--\x3e我们是设置值：total = 100 --\x3e相当于给window增加了一个属性名total，属性值是100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log(total)")]),s._v("\n  total "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//js中如果不进行任何特殊处理的情况下，上面的代码报错，下面的代码都不在执行")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h2",{attrs:{id:"_3-入栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-入栈"}},[s._v("#")]),s._v(" 3.入栈")]),s._v(" "),t("h3",{attrs:{id:"_3-1-作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-作用域"}},[s._v("#")]),s._v(" 3.1 作用域")]),s._v(" "),t("p",[s._v("代码进入执行栈前会创建一个"),t("code",[s._v("执行上下文")]),s._v("，就是当前执行栈中要执行的代码执行时所需要的一些信息，可以查询当前要执行的代码中某些变量的值，这些值就存储在当前"),t("code",[s._v("作用域")]),s._v("中")]),s._v(" "),t("h3",{attrs:{id:"_3-2-作用域链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-作用域链"}},[s._v("#")]),s._v(" 3.2 作用域链")]),s._v(" "),t("p",[s._v("当函数有多层嵌套时，通过一层一层压栈后，最里面的函数先执行，如果所需要的变量在当前作用域中没有找到就会顺着作用域向上查找上一个作用域，直到找到最顶层的作用域，这种层层查找形成的链状现象称为"),t("code",[s._v("作用域链")])]),s._v(" "),t("h3",{attrs:{id:"_3-3-变量赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-变量赋值"}},[s._v("#")]),s._v(" 3.3 变量赋值")]),s._v(" "),t("p",[s._v("代码从上往下执行，当需要查询变量时，先去当前的"),t("code",[s._v("作用域")]),s._v("中查找，当遇到有要执行的"),t("code",[s._v("函数")]),s._v("时，会重复上述动作，进行入栈操作")]),s._v(" "),t("h2",{attrs:{id:"_4-出栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-出栈"}},[s._v("#")]),s._v(" 4.出栈")]),s._v(" "),t("p",[s._v("当代码执行完成后，当前"),t("code",[s._v("作用域")]),s._v("内没有变量被其他地方使用就会出栈，如果有被使用，变量就会"),t("code",[s._v("常驻内存")]),s._v("中，形成了"),t("code",[s._v("不销毁的作用域")]),s._v("，这个过程称为"),t("code",[s._v("闭包")])])],1)}),[],!1,null,null,null);"function"==typeof e&&e(r);t.default=r.exports}}]);