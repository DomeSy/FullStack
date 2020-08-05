export const mixins = {
  methods: {
    foo: function(){
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}
