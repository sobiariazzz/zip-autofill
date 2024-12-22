function autofill() {
    let cityName = "";
    let zip = document.getElementById("code").value;
    if(zip === "12345"){
        cityName = "Karachi";
    }
    else if (zip === "2468"){
        cityName = "Swat";
    }
    else {
        cityName = "";
    }
    document.getElementById("city").value = cityName;
}