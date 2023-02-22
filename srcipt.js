function countValues() {
    let inputValues = document.getElementById("input-values").value;
    let valuesArray = inputValues.split(",");
    let counts = {};
    for (let i = 0; i < valuesArray.length; i++) {
        let value = valuesArray[i].trim();
        if (counts[value]) {
            counts[value]++;
        } else {
            counts[value] = 1;
        }
    }
    let result = "";
    for (let value in counts) {
        result += value + ": " + counts[value] + "<br>";
    }
    document.getElementById("count-result").innerHTML = result;
}

function reverseNumber() {
    let inputNumber = document.getElementById("input-number").value;
    let reversedNumber = "";
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        reversedNumber += inputNumber.charAt(i);
    }
    document.getElementById("reverse-result").innerHTML = reversedNumber;
}

function convertKmToMm(km) {
    return km * 1000000;
}	