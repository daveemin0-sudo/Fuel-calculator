function calculate() {
    let price = document.getElementById("price").value;
    let distance = document.getElementById("distance").value;
    let consumption = document.getElementById("consumption").value;

    if (price === "" || distance === "" || consumption === "") {
        document.getElementById("result").innerText = "Fill all fields!";
        return;
    }

    let fuelNeeded = distance / consumption;
    let totalCost = fuelNeeded * price;

    document.getElementById("result").innerText =
        "Fuel Needed: " + fuelNeeded.toFixed(2) + "L | Cost: ₦" + totalCost.toFixed(2);
}