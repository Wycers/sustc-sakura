# Sustc-Sakura

> 基于Vue.js Nuxt.js Vuetify.js的南科大课程表抓取网站

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
之后将静态文件部署到任意一个静态主机即可XD

后端应用请查阅sustc-sakura-spider以及sustc-sakura-console

For detailed explanation on how things work, check out the [Nuxt.js](https://github.com/nuxt/nuxt.js) and [Vuetify.js](https://vuetifyjs.com/) documentation.

工作原理

1. 服务器将根据用户提供的账号密码登陆CAS。
2. 登录教务系统，抓取学期理论课表。
3. 使用课表内容生成ics文件并提供下载。

特性

1. 响应式设计：对移动端设备提供适配的页面布局。
2. 国际化：提供多种语言，切合SUSTech的校情。
3. 安全：使用https防止个人信息泄露。

未经测试的部分

1. 安卓设备兼容性未知。
2. Windows设备兼容性无法保证。（部分Windows设备可能因为设备自身原因，导入的所有时间均提前一小时）

……

如果你遇到了任何BUG，抱歉以及烦请将BUG的情况发送至11711918@mail.sustc.edu.cn，我将尽力尽快修复BUGqwq

本项目的开发离不开以下项目的贡献

1. Nuxt.js — Vue.js 通用应用框架
2. Vue.js — 渐进式 JavaScript 框架
3. Vuetify.js — Vue.js 的 Material Design 组件框架
4. Gin — Golang HTTP web框架
5. GORM — 极好的 Golang ORM 库
6. Goland — Jetbrains 家的大法XD
