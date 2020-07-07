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