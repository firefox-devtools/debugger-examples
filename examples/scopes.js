function scopes() {
  const a = 'a';
  const b = 'b';
  const obj = {foo: 'foo val'};
  obj.foo = 'foo val2';

  function firstScope(c) {
    const a = 'local A';
    b + b;
    obj.bar = 'bar val';
    debugger;
  }

  if (true) {
    let a = '';
    b;
  }

  debugger;
  firstScope('c var');
}

function outOfScope(b) {
  const a = 'bogus A';
}
