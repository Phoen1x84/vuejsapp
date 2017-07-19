Vue.component('list', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue app',
    groceryList: [
      {id: 0, text: 'item 1'},
      {id: 1, text: 'item 2'},
      {id: 2, text: 'item 3'}
    ]
  }
});
