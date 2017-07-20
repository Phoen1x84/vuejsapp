import Vue from 'vue';

Vue.component('my-banner', {
  props: ['text', 'background'],
  template: '<div>{{text}}</div>'
});

var banner = new Vue({
  el: '.banner',
  data: {
    text: 'banner text',
  }
});
