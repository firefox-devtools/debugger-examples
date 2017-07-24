function sequencePrint(from, to) {
  var buffer = [];
  for (var current = from; current <= to; current++) {
    buffer.push(current);
  }
  return buffer.join(',');
}
