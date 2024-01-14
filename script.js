var aktualnyJezyk = "polski";
var tlumaczenia = {
    polski: {
        tytul: "Witaj!",
        tekst: "To jest przykładowa strona internetowa."
    },
    angielski: {
        tytul: "Hello!",
        tekst: "This is a sample webpage."
    }
    // Dodaj inne tłumaczenia według potrzeb
};

document.getElementById("zmienJezyk").addEventListener("click", function() {
    if (aktualnyJezyk === "polski") {
        aktualnyJezyk = "angielski";
    } else {
        aktualnyJezyk = "polski";
    }
    
    var tytul = document.getElementById("tytul");
    var tekst = document.getElementById("tekst");
    
    tytul.innerHTML = tlumaczenia[aktualnyJezyk].tytul;
    tekst.innerHTML = tlumaczenia[aktualnyJezyk].tekst;
});
