async function thing(inc) {
  return new Promise(resolve => {
    console.log("doing something", inc);
    setTimeout(resolve, 50);
  });
}

async function async() {
  console.log("start");
  await thing(1);
  await thing(2);
  console.log("done");
}
