/* Definiert den Text in der HTML */
var text = document.getElementById("rdmtxt");

/* Vordefinierung der Variabel */
var maxlines;
var data = bauchbindendata;

/* Generiert eine zufällige Nummer aus dem Array */
function rdmnumber(maxlines) {
    var number = Math.floor(Math.random() * maxlines) + 1;
    return(number)
};

/* Legt den Text in der HTML fest */
function rdmline(data) {
    maxlines = data.length - 1;
    text.innerHTML = data[rdmnumber(maxlines)];
};

/* Init */
rdmline(data);
