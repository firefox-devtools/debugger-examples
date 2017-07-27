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

  var windowy = {
    history: {},
    location: { a: 3 }
  };

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

(function() {
  const funcs = [
    "arrays",
    "mutating",
    "domElements",
    "kitchenSink",
    "singleLines",
    "scopes",
    "outOfScope",
    "HTMLElements",
    "shadowing",
    "cryptoShadowing",
    "columns",
    "promises",
    "oneIIFE",
    "twoIIFEs",
    "twoDeepIIFEs",
    "intervals",
    "timeouts"
  ];
  funcs.forEach(funcName => {
    const func = window[funcName];

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    const link = document.createElement("a");
    link.className = "example-link";
    link.innerText = funcName;
    link.onclick = func;

    const menuitem = document.createElement("a");
    menuitem.innerText = funcName;
    menuitem.onclick = func;

    code.innerText = func.toString();
    code.className = "javascript hljs";
    pre.appendChild(code);
    document.querySelector("#codes").appendChild(link);
    document.querySelector("#codes").appendChild(pre);

    document.querySelector("#sidebar-items").appendChild(menuitem);

    if (window.hljs) {
      hljs.highlightBlock(code);
    }
  });
})();
