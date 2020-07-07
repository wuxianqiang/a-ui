# a-ui

## 安装
```
npm install a-ui
```

## 使用

```
import HelloWorld from 'a-ui/src/components/HelloWorld.vue'
```

## 如果不想写这么长的路径，可以使用按需加载

```
import { HelloWorld } from 'a-ui'
```
还需借助babel插件来完成

```
```

通常你想把自己的组件写完然后给别的项目组使用，通常是发个NPM包的形式进行共享

按需加载对路径有要求，需要单独处理·