function hitungLuas(){
    var p = document.getElementById("sisi-luas").value;

    console.log(p)

    let rluas = "L = S x S"
    let x = " x ";  //
    var luas = p * p;

    var result1 = "Luas: " + luas

    document.getElementById("rumus-luas").innerHTML = rluas

    document.getElementById("perhitungan-luas").innerHTML = p + x + p

    document.getElementById("output-luas").innerHTML = result1

  }

  function hitungKeliling(){
    var l = document.getElementById("sisi-keliling").value;

    console.log(l)

    let rkeliling = "K = 4 x S"
    let y = "4 x  ";  //
    var keliling = 4 * l 

    var result2 = "Keliling: " + keliling

    document.getElementById("rumus-keliling").innerHTML = rkeliling

    document.getElementById("perhitungan-keliling").innerHTML = y + l

    document.getElementById("output-keliling").innerHTML = result2
  }

  // window.location.reload()