function arrays() {
  localStorage[1] = "a test";
  localStorage[2] = "a";
  localStorage[200000] = "another test";
  let data = JSON.parse(JSON.stringify(localStorage));

  let mixed = {
    "10": 10,
    "11": 10,
    "1": 1,
    "2": 2,
    "3": 2,
    a: "test 1",
    b: "test 2",
    aa: "test 11"
  };

  let sparse = [];
  sparse[1] = "a test";
  sparse[2] = "a";
  sparse[200] = "another test";
  data = JSON.parse(JSON.stringify(sparse));
  console.log(data);

  // Put breakpoint here

  let full = [];
  for (i = 0; i < 50000; i++) {
    full.push(3);
    full.push([3, 2]);
    full.push({ a: 2 });
    full.push(1);
    full.push(3);
    full.push([3, 2]);
    full.push({ a: 2 });
  }
  debugger;
}
