var slide_nmbr = 1;

function showButton()
{
    document.getElementById("prev").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
}

function hideButton()
{
    document.getElementById("prev").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
}




function NextImg()
{

    slide_nmbr++;

    if (slide_nmbr > 4) slide_nmbr = 1;

    var temp = "<img src=\"img/Slider/Slide" + slide_nmbr + ".png\" class=\"img-fluid\"onmouseover=\"showButton()\" onmouseout=\"hideButton()\" /><button id=\"prev\" type=\"button\" onclick=\"PreviousImg()\"onmouseover=\"showButton()\"> < </button><button id=\"next\" type=\"button\" onmouseover=\"showButton()\" onclick=\"NextImg()\"> > </button>";

    document.getElementById("slider").innerHTML = temp;

}


function PreviousImg()
{
        slide_nmbr--;

        if (slide_nmbr <= 0) slide_nmbr = 4;

        var temp = "<img src=\"img/Slider/Slide" + slide_nmbr + ".png\" onmouseover=\"showButton()\" onmouseout=\"hideButton()\" class=\"img-fluid\"/><button id=\"prev\" type=\"button\" onmouseover=\"showButton()\" onclick=\"PreviousImg()\"> < </button><button id=\"next\" type=\"button\" onmouseover=\"showButton()\" onclick=\"NextImg()\"> > </button>";

        document.getElementById("slider").innerHTML = temp;
}
