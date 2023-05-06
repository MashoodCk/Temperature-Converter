

function convert() {

    let cTemp, kTemp, fTemp;

    let Temp = document.getElementById("t").value;
    Temp = parseFloat(Temp);


    var x = document.getElementById("c");
    var y = document.getElementById("f");
    var z = document.getElementById("k");



    if (x.checked) {

        fTemp = (Temp * 1.8) + 32;
        document.getElementById("Temp1").innerHTML = fTemp.toFixed(2) + " °F";

        kTemp = Temp + 273.15;
        document.getElementById("Temp2").innerHTML = kTemp.toFixed(2) + " K";


    }

    else if (y.checked) {

        cTemp = [(Temp - 32) * 5] / 9;
        document.getElementById("Temp1").innerHTML = cTemp.toFixed(2) + " °C";

        kTemp = (Temp - 32) * 5 / 9 + 273.15;
        document.getElementById("Temp2").innerHTML = kTemp.toFixed(2) + " K";


    }

    else if (z.checked) {

        cTemp = Temp - 273.15;
        document.getElementById("Temp1").innerHTML = cTemp.toFixed(2) + " °C";

        fTemp = (Temp - 273.15) * 9 / 5 + 32;
        document.getElementById("Temp2").innerHTML = fTemp.toFixed(2) + " °F";
    }


    else {
        document.getElementById("Temp1").innerHTML = "Enter the temperature and unit correctly";
    }




}

