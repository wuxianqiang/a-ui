## a-ui

这是一个Vue的组件，组件没有编译，里面都是vue文件

单独引入某个组件
```
import { BaseButton } from 'a-ui/lib/BaseButton'
```

组件都在lib里面

可以配置按需加载，需要babel插件支持
```
import { BaseButton } from 'a-ui'
```
安装babel插件，npm install babel-plugin-import --save-dev，然后修改 .babelrc 文件
```
[
  "import",
    {
      "libraryName": "a-ui", // 执向你的组件库名称
      "camel2DashComponentName": false,  // default: true 取消大小写转化
    }
]
```