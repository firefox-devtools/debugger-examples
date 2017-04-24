function ternary() {
  const x = a() ? b() ? c() : d() : e() ;
}

function promises() {
  p().then(r => p())
    .then(r => p())
    .then(r => {
      return p()
    })
}

function p() {
  return Promise.resolve(2);
}

function a() { console.log('a') }
function b() { console.log('b') }
function c() { console.log('c') }
function d() { console.log('d') }
function e() { console.log('e') }
