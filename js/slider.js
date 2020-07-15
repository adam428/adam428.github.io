var slide_nmbr = 1;


function change_imgNXT()
{

    slide_nmbr++;

    if (slide_nmbr > 4) slide_nmbr = 1;

    var temp = "<img src=\"img/Slider/slide" + slide_nmbr + ".jpg\" class=\"col-md-8 offset-2\"/>";

    document.getElementById("gallery").innerHTML = temp;

}


function change_imgPRVS()
{
        slide_nmbr--;

        if (slide_nmbr <= 0) slide_nmbr = 4;

        var temp = "<img src=\"img/Slider/slide" + slide_nmbr + ".jpg\" class=\"col-md-8 offset-2\"/>";

        document.getElementById("gallery").innerHTML = temp;
}
