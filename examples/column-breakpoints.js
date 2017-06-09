function ternary() {
  const x = a() ? b() ? c() : d() : e();
}


function params() {
  2 + a(b(), c())
}

function calls() {
  2 + x.d().e().f();
}


function promises() {
  debugger;
  2 + 2;
  p().then(r => p()).then(r => p()).then(r => {
    return p();
  });
}

function p() {
  return Promise.resolve(2);
}

function a() {
  console.log('a');
}
function b() {
  console.log('b');
}
function c() {
  console.log('c');
}

const x = {
  d: () => x,
  e: () => x,
  f: () => x,
}
