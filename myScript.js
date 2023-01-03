function calculace() {
    let cena = 0;
    let nasobeni = 0;
    let cenaVybava1 = 0;
    let cenaVybava2 = 0;
    let cenaVybava3 = 0;
    let cenaVybava4 = 0;
    let cenaVybavaCelkem = 0;
    let barva = 0;
    let e = document.getElementById("znacka");
    let cena1 = e.value;
    let ZakaznikNabidka = document.getElementById("zakaznikNabidka").value;
    var num = e.options[e.selectedIndex].text;
    cena = cena1;
    /*
    
    */
    for (i = 0; i < 3; i++) {
      if (document.fp.elements[i].checked) {
        barva = parseFloat(document.fp.elements[i].value);
      }
    }
    cena = cena * barva;
    if (document.querySelector("#vybava1").checked) {
      cenaVybava1 = parseInt(document.querySelector("#vybava1").value);
      cenaVybavaCelkem = cenaVybavaCelkem + cenaVybava1;
    }
    if (document.querySelector("#vybava2").checked) {
      cenaVybava2 = parseInt(document.querySelector("#vybava2").value);
      cenaVybavaCelkem = cenaVybavaCelkem + cenaVybava2;
    }
    if (document.querySelector("#vybava3").checked) {
      cenaVybava3 = parseInt(document.querySelector("#vybava3").value);
      cenaVybavaCelkem = cenaVybavaCelkem + cenaVybava3;
    }
  
    let cenaSvybava = cena + cenaVybava1 + cenaVybava2 + cenaVybava3;
    let tuning = 0;
    if (document.querySelector("#vybava4").checked) {
      cenaVybava4 = parseFloat(document.querySelector("#vybava4").value);
      tuning = parseFloat(cena1) * cenaVybava4;
    }
    CelkovaCena = cenaVybavaCelkem + cena + tuning;
    
    //cenaSvybava = cenaSvybava * cenaVybava4;
    document.querySelector("#celkemSum").value = CelkovaCena;
    
    let odhad = parseInt(document.querySelector("#zakaznikNabidka").value);
    //document.querySelector("#email").innerHTML = odhad;
    let odpoved = "";
    if (CelkovaCena > 0) {
      if (CelkovaCena < odhad) {
        odpoved = "Zakaznik ma dost penez";
      } else if (CelkovaCena > odhad) {
        odpoved = "Zakaznik nema dost penez chybi mu: " + parseInt(CelkovaCena-odhad);
      } else if (CelkovaCena == odhad) {
        odpoved = "Zakaznik ma penez tak akorat";
      }
    } else {
      document.querySelector("#odpoved").innerHTML = "Neni co porovnavat";
      odpoved = "<";
    }
    document.querySelector("#odpoved").value = odpoved;
}
function odesli() {
    let email = document.querySelector("#inpemail").value;
    if (email.includes("@")) {
      alert("Valid");
      document.querySelector("#inpemail").value = "Posláno";
    } else {
      alert("Invalid");
      document.querySelector("#inpemail").value = "Invalid email";
    }
  }
  
  