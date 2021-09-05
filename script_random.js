var getValue = function (arg) {
  var value = "";
  var Argument = "Aku suka kamu";
  var Argumentlen = Argument.length;

  for (var i = 0; i <= length; i++) {
    value += Argument.charAt(Math.floor(Math.random() * Argumentlen));
  }
  return value;
};
console.log(getValue(2));
