function EggTimer () {

}

EggTimer.prototype.boil = function (minutes) {
    var timenow = minutes*60;
    var boilEgg = setInterval (function() {
        var sek = timenow % 60;
        var min = Math.floor (timenow/60);
        timenow = timenow -10;

        if (min => 2 && min <= 4) {
            console.log("Pozostały " + min + " minuty i " + sek + " sekund");
        }
        if (min == 1) {
            console.log("Pozostała 1 minuta i " + sek + " sekund");
        }
        if ((0 == min && sek < 60 && sek > 0) || min > 4) {
            console.log("Pozostało " + min + " minut i " + sek + " sekund");
        }
        if (min == 0 && sek == 0) {
            console.log("Ugotowane - Czas minął");
            clearInterval(boilEgg);
        }
    }, 10000);

}



