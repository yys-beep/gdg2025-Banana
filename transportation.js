
const buttonList = document.querySelectorAll(".transport-button");
let lastClick;

function setColor(index){
    console.log(buttonList[index].style.backgroundColor);
    if(buttonList[index].style.backgroundColor === "rgb(6, 62, 105)"){
        buttonList[index].style.backgroundColor = "rgb(117, 191, 240)";
        buttonList[index].style.color = "black";
    }
    else{
        buttonList[index].style.backgroundColor = "rgb(6, 62, 105)";
        buttonList[index].style.color = "white";
    }
}

function toggleTransportPerlis() {
    const transport = document.getElementById('transportationPerlis');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(0);
}

function toggleTransportKedah() {
    const transport = document.getElementById('transportationKedah');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(1);
}

function toggleTransportPenang() {
    const transport = document.getElementById('transportationPenang');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(2);
}

function toggleTransportKelantan() {
    const transport = document.getElementById('transportationKelantan');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(3);
}

function toggleTransportTerengganu() {
    const transport = document.getElementById('transportationTerengganu');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(4);
}

function toggleTransportPerak() {
    const transport = document.getElementById('transportationPerak');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(5);
}

function toggleTransportSelangor() {
    const transport = document.getElementById('transportationSelangor');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(6);
}

function toggleTransportNegeriSembilan() {
    const transport = document.getElementById('transportationNegeriSembilan');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(7);
}

function toggleTransportMelaka() {
    const transport = document.getElementById('transportationMelaka');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(8);
}

function toggleTransportPahang() {
    const transport = document.getElementById('transportationPahang');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(9);
}

function toggleTransportJohor() {
    const transport = document.getElementById('transportationJohor');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(10);
}

function toggleTransportSabah() {
    const transport = document.getElementById('transportationSabah');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(11);
}

function toggleTransportSarawak() {
    const transport = document.getElementById('transportationSarawak');
    transport.style.display = (transport.style.display === 'block') ? 'none' : 'block';
    setColor(12);
}
