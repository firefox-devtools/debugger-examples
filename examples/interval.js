(function arrScope() {
  var arr = [];
  var i = 0;
  setInterval(function intervalScope() {
    arr.push(i++);
    debugger
  },30)
}
)()
