import "babel-polyfill";

console.log("hi");

// example where we rename properties
function funny(a = 2) {
  debugger;
  const obj = {
    funny() {
      console.log("YO", funny);
    }
  };
}
//
// function arrow() {
//   (a => {
//     debugger;
//   })(1);
// }
//

var slowest = async function() {
  return Promise.resolve();
};

var slower = async function() {
  await slowest();
  console.log("yo");
  await slowest();
  return Promise.resolve();
};

var asyncExample = async function() {
  let a = 2;

  await slower();
  let b = 2;

  debugger;
  await slower();
};

const l = ["a"];

function forOf() {
  debugger;
  let a = 4;
  for (const x of l) {
    setTimeout(() => {
      debugger;
      x;
    });
  }

  for (const x of l);
  for (const x of l);
  for (const x of l);
  for (const x of l);
  for (const x of l);
}

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

function nestedProperty() {
  const { props: { a, b, c } } = { props: { a: 2, b: 3, c: 4 } };
  debugger;
}

// function dest2() {
//   let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// }

// window[a ? "start" : "end"]
// slow();
// dest();

window.funny = funny;
window.nestedProperty = nestedProperty;
window.asyncExample = asyncExample;
window.forOf = forOf;
