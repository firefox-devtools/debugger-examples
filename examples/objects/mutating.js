function mutating() {
  const badNames = {
    foo: function foo() {},
    bar: function() {}
  };

  let mutating = { a: 2 };
  debugger;

  mutating.a = 3;
  mutating.b = "foo";
  debugger;
}

function kitchenSink() {
  const badNames = {
    foo: function foo() {},
    bar: function() {}
  };

  const bool = true;
  function fnc(a, b, c) {
    2;
  }

  const arr = [1, 2, 3];
  debugger;
}
