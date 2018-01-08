import "babel-polyfill";

console.log("hi");

function funny(a = 2) {
  debugger;
  const obj = {
    funny() {
      console.log("YO", funny);
    }
  };
}

function arrow() {
  (a => {
    debugger;
  })(1);
}

var slower = async function() {
  return Promise.resolve();
};

var slow = async function() {
  let a = 2;

  await slower();
  let b = 2;

  debugger;
  await slower();
};

// class Foo {
//   [(a => {
//     debugger;
//     Foo = 3;
//     console.log(Foo, a);
//     return a;
//   })()]() {
//     console.log("hi");
//   }
// }
//
// // --- referencing FOOs from different scopes
// class Foo {
//   bar() {
//     console.log(Foo);
//   }
// }
//
// Foo = function() {};
//
// const obj = new Foo();

function dest() {
  const { props: { a, b, c } } = { props: { a: 2, b: 3, c: 4 } };
  debugger;
}

// function dest2() {
//   let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// }

// window[a ? "start" : "end"]
window.funny = funny;
// slow();
dest2();
