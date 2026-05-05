function convertTemp() {
    let input = document.getElementById("tempInput").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    // Validation
    if (input === "" || isNaN(input)) {
        result.innerText = "Please enter a valid number!";
        return;
    }

    input = parseFloat(input);
    let output = "";

    if (type === "C") {
        let f = (input * 9/5) + 32;
        let k = input + 273.15;
        output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    } 
    else if (type === "F") {
        let c = (input - 32) * 5/9;
        let k = c + 273.15;
        output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    } 
    else if (type === "K") {
        let c = input - 273.15;
        let f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.innerText = "Result: " + output;
}