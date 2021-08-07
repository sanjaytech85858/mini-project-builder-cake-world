var layer1 = document.getElementById("layer1")
var layer2 = document.getElementById("layer2")
var layer3 = document.getElementById("layer3")
var layer4 = document.getElementById("layer4")
var layer5 = document.getElementById("layer5")

var candle = document.getElementById("candle")
var chocCost = document.getElementById('chocBill')
var strawCost = document.getElementById('strawBill')
var butterCost = document.getElementById('butterBill')
var vanCost = document.getElementById('vannilaBill')
var redCost = document.getElementById('redBill')


var layer = 0;

var bill = 0
var chocBill = 0
var strawBill = 0
var butterBill = 0
var vanBill = 0
var redBill = 0

function addChocolate() {
    // document.getElementById('chocBtn').disabled=true

    chocBill += 300
    bill += 300
    chocCost.innerHTML = "Chocolate ................. " + chocBill
    console.log(chocBill)

    layer++;

    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'brown';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'brown';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'brown';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'brown';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'brown';
            candle.style.visibility = 'visible';
            break;

        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    console.log(bill);

}

function addStrawberry() {
    bill += 100
    strawBill += 100
    layer++;
    strawCost.innerHTML = "Strawberry ................. " + strawBill

    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#fc5a8d';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#fc5a8d';

            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#fc5a8d';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#fc5a8d';

            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#fc5a8d';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }

    console.log(bill);
}

function addButterscotch() {
    bill += 200
    butterBill += 200
    layer++;
    butterCost.innerHTML = "ButterScotch ................. " + butterBill
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#D48827';

            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#D48827';

            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#D48827';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#D48827';

            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#D48827';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }

    console.log(bill);
}

function addVannila() {
    bill += 250;
    vanBill += 250;
    layer++;
    vanCost.innerHTML = "Vannila ................. " + vanBill
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'white';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'white';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'white';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'white';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'white';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    console.log(bill);

}

function addRedvelvet() {
    bill += 350;
    redBill += 350
    layer++;
    redCost.innerHTML = "RedVelvet ................. " + redBill
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#800000';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#800000';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#800000';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#800000';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#800000';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    console.log(bill);
}

function buy() {
    document.getElementById('chocBtn').disabled = true;
    document.getElementById('strawBtn').disabled = true;
    document.getElementById('butterBtn').disabled = true;
    document.getElementById('vanBtn').disabled = true;
    document.getElementById('redBtn').disabled = true;

    candle.style.visibility = 'visible'
    if (layer == 1) {
        candle.style.top = '55%'
    }
    else if (layer == 2) {
        candle.style.top = '46%'
    }
    else if (layer == 3) {
        candle.style.top = '38%'
    }
    else if (layer == 4) {
        candle.style.top = '30%'
    }

    var total = document.getElementById('total')
    total.innerHTML = "TOTAL ...................... " + bill
}
