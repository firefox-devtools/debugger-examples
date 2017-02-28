function mutating() {

  const badNames = {
    foo: function foo() {},
    bar: function() {}
  }

  let mutating = { a: 2 }
  debugger

  mutating.a = 3;
  mutating.b = 'foo'
  debugger;
}
