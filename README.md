# 发包

> 给项目发布一个NPM包让其他项目组使用我们写的组件

我们一般不会把项目所有的文件都发到NPM中，我们只发部分文件，我们可以建立 `.npmignore` 文件，把不需要的文件排除。

```
docs
node_modules
public
src/assets
src/App
src/main
```

其他项目组可以安装我们的组件
```
npm install a-ui
```

使用即可

```
import HelloWorld from 'a-ui/src/components/HelloWorld.vue'
```

## 如果不想写这么长的路径，可以使用按需加载

```
import { HelloWorld } from 'a-ui'
```
还需借助babel插件来完成，这个文件的路径规则有要求，比较麻烦，可忽略


# 给项目建立文档

先创建我们的项目
```
vue create my-app
```
安装创建文档的npm包vuepress
```
npm install vuepress
```
在当前目录建立文件夹
```
docs
  .vuepress
    config.js
    enhanceApp.js
  README.md
```
更多说明可以参考官方文档：https://vuepress.vuejs.org/zh/guide/basic-config.html

在enhanceApp.js配置
```js
import BaseUI from '../../src/list'

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(BaseUI)
}
```
我们导入BaseUI来自项目的src/list.js，文件的内容如下
```js
import HelloWorld from './components/HelloWorld.vue';

const components = [
  HelloWorld
]


const install = function(Vue) {
  components.forEach(component => {
    console.log(component.name)
    Vue.component(component.name, component);
  })
}

export default {
  install,
  HelloWorld
}
```
将所有的组件聚合提供给vuepress使用


README.md是文档文件，在里面写好来文档，就可以部署到gh-pages分支里面了
```
git subtree push --prefix docs/.vuepress/dist origin gh-pages
```