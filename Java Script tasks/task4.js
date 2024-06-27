var f = () => {
    const c = new Date();
    var d = document.getElementById("res");
    d.innerHTML = c.getDate() + "/" + c.getUTCMonth() + "/" + c.getFullYear();
  };
  
  var f1 = () => {
    const c = new Date();
    var d = document.getElementById("res1");
    d.innerHTML = c;
  };
  