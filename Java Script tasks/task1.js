function f() {
    var a = document.getElementById("in").value;
    var b = parseInt(a);
    var s = 0;
    while (b > 0) {
      var r = b % 10;
      s *= 10;
      s += r;
      b = parseInt(b / 10);
    }
    var c = document.getElementById("res");
    c.innerHTML = s;
  }
  