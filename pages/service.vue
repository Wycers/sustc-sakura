<template lang="pug">
v-container
  div.headline 工作原理
  ol.content
    li 服务器将根据用户提供的账号密码登陆CAS。
    li 登录教务系统，抓取学期理论课表。
    li 使用课表内容生成ics文件并提供下载。

  div.headline 特性
  ol.content
    li 响应式设计：对移动端设备提供适配的页面布局。
    li 国际化：提供多种语言，切合SUSTech的校情。
    li 安全：使用https防止个人信息泄露。

  div.headline 未经测试的部分
  ol.content
    li 安卓设备兼容性未知。(目前已知华为自带浏览器好像会出问题XD)
    li Windows设备兼容性无法保证。（部分Windows设备可能因为设备自身原因，导入的所有时间均提前一小时）

  p.content ……
  p.content
    b 如果你遇到了任何BUG，抱歉以及烦请将BUG的情况发送至<code>11711918@mail.sustc.edu.cn</code>，我将尽力尽快修复BUG qwq
  div.headline 本项目的开发离不开以下项目的贡献
  ol.content
    li Nuxt.js — Vue.js 通用应用框架
    li Vue.js — 渐进式 JavaScript 框架
    li Vuetify.js — Vue.js 的 Material Design 组件框架
    li Gin — Golang HTTP web框架
    li GORM — 极好的 Golang ORM 库
    li Goland — Jetbrains 家的大法XD

</template>

<style>
ol {
  padding-left: 2em;
  padding-top: .5em;
  padding-bottom: .5em;
  display: inline-block!important;
}
</style>
