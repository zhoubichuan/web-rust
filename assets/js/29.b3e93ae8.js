(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{696:function(a,t,s){"use strict";s.r(t);var _=s(3),r=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"八-内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八-内存管理"}},[a._v("#")]),a._v(" 八.内存管理")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("前言")]),a._v(" "),t("p",[a._v("JavaScript 的内存管理是自动进行的，在创建变量(对象，字符串等)时自动进行了内存分配，之后在代码执行，使用变量时占用这个内存，当不再使用变量后就内存会被回收，释放掉。在 JavaScript 中，这个过程被称为垃圾回收机制。")])]),a._v(" "),t("h2",{attrs:{id:"_1-生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-生命周期"}},[a._v("#")]),a._v(" 1.生命周期")]),a._v(" "),t("h3",{attrs:{id:"_1-1-分配内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-分配内存"}},[a._v("#")]),a._v(" 1.1 分配内存")]),a._v(" "),t("h3",{attrs:{id:"_1-2-使用内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-使用内存"}},[a._v("#")]),a._v(" 1.2 使用内存")]),a._v(" "),t("h3",{attrs:{id:"_1-3-释放内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-释放内存"}},[a._v("#")]),a._v(" 1.3 释放内存")]),a._v(" "),t("h2",{attrs:{id:"_2-内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存结构"}},[a._v("#")]),a._v(" 2.内存结构")]),a._v(" "),t("p",[t("code",[a._v("JavaScript 引擎的")]),a._v("内存结构可以粗略分为两个部分：栈(Stack)、堆(Heap)")]),a._v(" "),t("h3",{attrs:{id:"_2-1-栈-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-栈-stack"}},[a._v("#")]),a._v(" 2.1 栈(Stack)")]),a._v(" "),t("p",[a._v("主要用于存放基本类型和变量类型的指针。栈内存自动分配大小相对固定的内存空间，并由系统自动释放。")]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-所有权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-所有权"}},[a._v("#")]),a._v(" 2.1.1 所有权")]),a._v(" "),t("ul",[t("li",[a._v("rust 中每一个值被称为"),t("code",[a._v("所有权")]),a._v("的变量")]),a._v(" "),t("li",[a._v("值，有且只有一个所有权")]),a._v(" "),t("li",[a._v("当所有者（变量）离开作用域时，这个值被丢弃，内存被释放")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-堆-heap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-堆-heap"}},[a._v("#")]),a._v(" 2.2 堆(Heap)")]),a._v(" "),t("p",[a._v("主要用于存放对象类型数据，如对象，数组，函数等等。堆内存是动态分配内存，内存大小不一，也不会自动释放。")]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-移动"}},[a._v("#")]),a._v(" 2.1.1 移动")]),a._v(" "),t("ul",[t("li",[a._v("在有一些编程语言，两个变量会指向同一块堆内存区域，但"),t("code",[a._v("rust")]),a._v("不会")]),a._v(" "),t("li",[a._v("Rust 在这里会直接让 name1 失效，避免两个指针指向同一块堆内存。因为 Rust 会自动释放内存，这样可以避免当两个变量超出作用域时，导致重复的内存释放问题。将 name1 赋值给 name2，这个操作叫做移动，name1 移动到了 name2，移动后，name1 自动失效")]),a._v(" "),t("li",[a._v("克隆可以将堆上内存的变量赋值给另一个变量不触发移动")])]),a._v(" "),t("h2",{attrs:{id:"_3-回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-回收算法"}},[a._v("#")]),a._v(" 3.回收算法")]),a._v(" "),t("h3",{attrs:{id:"_3-1-所有权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-所有权"}},[a._v("#")]),a._v(" 3.1 所有权")])])}),[],!1,null,null,null);t.default=r.exports}}]);