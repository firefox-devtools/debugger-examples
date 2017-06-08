function oneIIFE() {
  var ugh = [];
  var i = 0;

  (function () {
    (function() {
     ugh.push(i++);
     debugger;
    })()
  })()

  debugger;
}

function twoIIFEs() {
  var ugh = [];
  var i = 0;

  (function () {
    (function() {
     ugh.push(i++);
     debugger;
   })();

    (function() {
     ugh.push(i++);
     debugger;
   })();

  })()


  debugger;
}

function twoDeepIIFEs() {
  var ugh = [];
  var i = 0;

  (function () {
    (function() {
     ugh.push(i++);
     debugger;
   })()
  })();

  (function () {
    (function() {
     ugh.push(i++);
     debugger;
   })()
  })();

}

function intervals() {
  var running = true
  var arr = [];
  var i = 0;
  setInterval(function() {
    arr.push(i++);
    if (running) {
      debugger
    }
  },30)
}

function timeouts() {
  (function() {
    var arr = [];
    var i = 0;
    setTimeout(function() {
      arr.push(i++);
      debugger
    },5)

    setTimeout(function() {
      arr.push(i++);
      debugger
    },15)

  })()
}

function calls() {
  var ugh = [];
  var i = 0;
  function foo() {
    ugh.push(i++);
    debugger
  }

  foo()
  foo()
}
