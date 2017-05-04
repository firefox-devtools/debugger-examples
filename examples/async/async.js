function foo() {
  return Promise.resolve();
}

function simple() {
  foo.then(
    foo().then(
      foo().then(() => {
        console.log('hi');
      })
    )
  );
}
