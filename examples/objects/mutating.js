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

function domElements() {
  const button = document.querySelector("button");
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

function singleLines() {

  debugger

  for (var i=0; i<4; i++) {
    console.log("hi");
  }

  for (var z=0; z<4; z++) { console.log("hi"); }


  let x = 0;

  while(x < 4) {console.log("hi"); x++;}

  let y = 0;
  while(y < 4) {
    console.log("hi"); y++;
  }
}

function scopes() {
  const a = "a";
  const b = "b";
  const obj = { foo: "foo val" };
  obj.foo = "foo val2";

  function firstScope(c) {
    const a = "local A";
    b + b;
    obj.bar = "bar val";
    debugger;
  }

  if (true) {
    let a = "";
    b;
  }

  debugger;
  firstScope("c var");
}

function outOfScope(b) {
  const a = "bogus A";
}

function HTMLElements() {
  const button = document.querySelector("button");

  debugger;
}
