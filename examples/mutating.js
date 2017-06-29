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

  var obj = { a: { b: { c: 3 } } };
  obj.a.b.c;

  const arr = [1, 2, 3];
  debugger;
}

function singleLines() {
  debugger;

  for (var i = 0; i < 4; i++) {
    console.log("hi");
  }

  for (var z = 0; z < 4; z++) {
    console.log("hi");
  }

  let x = 0;

  while (x < 4) {
    console.log("hi");
    x++;
  }

  let y = 0;
  while (y < 4) {
    console.log("hi");
    y++;
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

function shadowing() {
  function keysFunc(keys) {
    keys;
    debugger;
  }

  function mkeysFunc(mkeys) {
    mkeys;
    debugger;
  }

  function locFunc(location) {
    location;
    debugger;
  }

  function lengthFunc(length) {
    length;
    debugger;
  }

  function assignFunc(assign) {
    assign;
    debugger;
  }

  keysFunc("cool");
  lengthFunc("cool");
  mkeysFunc("cool");
  locFunc("cool");
  assignFunc("cool");
}

function cryptoShadowing() {
  window.crypto.subtle
    .generateKey(
      {
        name: "ECDH",
        namedCurve: "P-256" //can be "P-256", "P-384", or "P-521"
      },
      true, //whether the key is extractable (i.e. can be used in exportKey)
      ["deriveKey", "deriveBits"] //can be any combination of "deriveKey" and "deriveBits"
    )
    .then(function(myKeys) {
      debugger;
      console.log("app key", myKeys);
      APP_PUBLIC_KEY = myKeys.publicKey;
      APP_PRIVATE_KEY = myKeys.privateKey;
    });
}

function columns() {
  function aaa() {
    console.log("aaa");
  }
  function bbb() {
    console.log("bbb");
  }
  function ccc() {
    console.log("ccc");
  }

  const obj = {
    aaa: function() {
      console.log("aaa");
      return obj;
    },
    bbb: function() {
      console.log("bbb");
      return obj;
    },
    ccc: function() {
      console.log("ccc");
      return obj;
    }
  };

  aaa(bbb(), ccc());
  aaa(bbb(), ccc());

  obj.aaa().bbb().ccc();

  obj.aaa().bbb().ccc();
}
