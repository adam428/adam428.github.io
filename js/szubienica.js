var haslo;

var ile_skuch=0;
var dlugosc;

var haslo1 = "";


function startGame()
{
    haslo = document.getElementById("password").value;

    if(haslo!="") {
        dlugosc = haslo.length;
        haslo = haslo.toUpperCase();

        for (i = 0; i < dlugosc; i++) {
            if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
            else haslo1 = haslo1 + "-";
        }


        document.getElementById("startPage").innerHTML = '<div id="plansza" class="col-xs-12 text-center my-5 font-weight-bold"></div> <div id="szubienica" class="col-md-6 p-0"><img class="img-fluid" src="img/szubienica/s0.png" alt=""/></div><div id="alfabet" class="col-md-6 p-0"></div><div style="clear:both;"></div>\n';
        wypisz_haslo();
        start();
    }

    else return alert("Podaj poprawne hasło");
}




function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{

    var tresc_diva ="";

    for (i=0; i<=34; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;


    wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}



function sprawdz(nr)
{
    var trafiona = false;

    for(i=0; i<dlugosc; i++)
    {
        if (haslo.charAt(i) == litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona = true;
        }
    }

    if(trafiona == true)
    {
        var element = "lit" + nr;

        document.getElementById(element).style.color = "#00C000";

        wypisz_haslo();
    }

    else
    {
        var element = "lit" + nr;
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).setAttribute("onclick", ";");


        ile_skuch++;
        var obraz = "img/szubienica/s"+ ile_skuch + ".png";
        document.getElementById("szubienica").innerHTML = '<img class="img-fluid" src="'+obraz+'" alt="" />';
    }

    if(haslo==haslo1)
    {
        document.getElementById("alfabet").innerHTML = "Nice ! Hasło: "+haslo+" jest poprawne"+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }

    if(ile_skuch>=9)
    {
        document.getElementById("alfabet").innerHTML = "Oof ! Nie udało Ci się odgadnąć hasła: "+haslo+'<br /><br /><span class="reset1" onclick="location.reload()">JESZCZE RAZ?</span>';
    }

}

