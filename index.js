
function printValue() {
    const ele = document.querySelector("#select1");
    const ele1 = ele.value;
    const ele2 = document.querySelector("#select2");
    const ele3 = ele2.value;
    const nap =document.querySelector("#select3");
    const nap1 =nap.value;
    const night = document.querySelector("#select4");
    const night1 =night.value;
    document.querySelector('#printValue').textContent = "Wake Up Time:- " + ele1;
    document.querySelector('#nLunch').append(ele3)
    document.querySelector('#nnap').append(nap1);
    document.querySelector('#sleep').append(night1);
}

function displayCurrentTime(){
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() -12 : date.getHours();
    var minutes = date.getMinutes() <10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() <10 ? "0" + date.getSeconds() : date.getSeconds();
    var AM_PM = date.getHours() <= 12 ? "AM" : "PM";


    document.getElementById("nhour").innerHTML = hours + "<br> Hours";
    document.getElementById("nminute").innerHTML = minutes + "<br> Mins";
    document.getElementById("nsecond").innerHTML = seconds + "<br> Secs";
    document.getElementById("nAM_PM").innerHTML = AM_PM;

}
setInterval(displayCurrentTime , 1000);
displayCurrentTime();

// function changeValue(){
//     let ele = document.getElementById("span")
//     ele[0].innerText="java is don";
//     ele[0].style.backgroundColor ="blue";

// }
function change(){
    // let ele = document.getElementsByTagName("h1")
    // ele[0].innerHTML="GRAB ";
    // ele[0].style.backgroundColor ="blue";
    let ele = document.getElementById("change");  // Correct method
     ele.src = 'Tea.jpg';
     ele.width=317;
     ele.height = 205;
}   
function night(){
    let ele = document.getElementById("change");  // Correct method
     ele.src = 'Sleeptime.jpeg';
     ele.width=317;
     ele.height = 205; 
}   
function lunch(){
    let ele = document.getElementById("change");  // Correct method
     ele.src = 'lunch.jpeg';
     ele.width=317;
     ele.height = 205; 
}   
function nap(){
    let ele = document.getElementById("change");  // Correct method
     ele.src = 'nap1.jpg';
     ele.width=317;
     ele.height = 205; 
}   
