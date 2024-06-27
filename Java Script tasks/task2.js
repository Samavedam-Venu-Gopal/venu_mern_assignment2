var f = () => {
    let a = document.getElementById("in").value;
    let b = new Array();
    for (let i = 0; i < a.length; i++) b.push(a[i]);
    b = b.sort();
    let c = "";
    for (let i = 0; i < a.length; i++) c += b[i];
    let d = document.getElementById("res");
    d.innerHTML = c;
  };
  