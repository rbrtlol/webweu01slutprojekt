var bildAntal = 1;

showDiv(bildAntal);

function changeImage(m) {
    showDiv(bildAntal = bildAntal + m);
}

function showDiv(n) {
    var i;
    var bildArray = document.getElementsByClassName("receptBilder");
    if (n > bildArray.length) {
        bildAntal = 1;
    }
    if (n < 1) {
        bildAntal = bildArray.length;
    }
    for (i = 0; i < bildArray.length; i++) {
        bildArray[i].style.display = "none";
    }
   bildArray[bildAntal - 1].style.display = "block";
}