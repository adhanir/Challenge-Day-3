var x, y, hasil;
x = 0;
y = 1;
hasil = y;
for (var i = 1; i < 100; i++) {
  document.write(hasil + "<br/>");
  hasil = x + y;
  x = y;
  y = hasil;
}
