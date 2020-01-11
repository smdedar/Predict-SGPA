function getData(){
    var psno = parseInt(document.getElementById("psno").value);        //previous semester no
    var pscgpa = parseFloat(document.getElementById("pscgpa").value);     //previous semester cgpa
    var ccgpa = parseFloat(document.getElementById("ccgpa").value);      //current cgpa

    predict(psno,pscgpa,ccgpa);
}

function predict(psno,pscgpa,ccgpa){
    var a = psno*pscgpa;
    //console.log(a);
    var b = (psno+1)*ccgpa;
    //console.log(b);
    var c = b-a;
    var d ="SGPA : " +c.toFixed(2);
    //console.log(d);
    document.getElementById("psgpa").value=d;
    document.getElementById("predict").hidden=false;
}