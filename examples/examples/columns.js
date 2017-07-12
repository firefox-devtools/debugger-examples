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

  async function ppp() {
    return new Promise(resolve => {
      resolve();
    });
  }

  ppp()
    .then(function inner(res) {
      return ppp();
    })
    .then(res => ppp())
    .then(ppp());
}
