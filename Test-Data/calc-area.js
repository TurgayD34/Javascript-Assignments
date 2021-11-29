// Case1
// triangleOne: base = 10cm, height = 13cm
// triangleTwo: base = 16,5cm, height = 20,3cm

function triangleOne(){
    let base = Number(document.getElementById("num1").value);
    let height = Number(document.getElementById('num2').value);
    // Local
    area1 = (base * height) / 2;
    // Global
    document.getElementById("first-triangle").innerHTML = area1 + " cm^2"
}

function triangleTwo(){
    let base = Number(document.getElementById("num3").value);
    let height = Number(document.getElementById('num4').value);

    area2 = (base * height) / 2;
    document.getElementById("second-triangle").innerHTML = area2 + " cm^2"
}

function compare(){
    if(area1 > area2){
        document.getElementById("compare") = area1 + " is greater than " + area2;
    }
    else{
        document.getElementById("compare") = area2 + " is greater than " + area1;
    }
}
