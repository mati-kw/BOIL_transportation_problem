function compute(){
    let demandArray = [];
    let purchaseCostsArray = [];
    let supplyArray = [];
    let salesPricesArray = [];
    let transportCostsArray = [[], [], []];

    const demand = document.getElementsByClassName("demand")

    for (let i = 0; i < demand.length; i++) {
        if (!isNaN(parseInt(demand[i].value))) {
            demandArray.push(parseInt(demand[i].value));
        } else {
            alert(`Demand table filled not properly at: ${i + 1}`);
            return;
        }
    }

    console.log("Podaż:")
    console.log(demandArray);

    const purchaseCosts = document.getElementsByClassName("purchaseCost");

    for (let i = 0; i < purchaseCosts.length; i++) {
        if (!isNaN(parseInt(purchaseCosts[i].value))) {
            purchaseCostsArray.push(parseInt(purchaseCosts[i].value));
        } else {
            alert(`Purchase cost table filled not properly at: ${i + 1}`);
            return;
        }
    }

    console.log("Koszty zakupu: ")
    console.log(purchaseCostsArray)

    const supply = document.getElementsByClassName("supply");

    for (let i = 0; i < supply.length; i++) {
        if (!isNaN(parseInt(supply[i].value))) {
            supplyArray.push(parseInt(supply[i].value));
        } else {
            alert(`Supply table filled not properly at: ${i + 1}`);
            return;
        }
    }

    console.log("Popyt:")
    console.log(supplyArray)

    const salesPrices = document.getElementsByClassName("sellingPrice")
    for (let i = 0; i < salesPrices.length; i++) {
        if (!isNaN(parseInt(salesPrices[i].value))) {
            salesPricesArray.push(parseInt(salesPrices[i].value));
        } else {
            alert(`Selling price table filled not properly at: ${i + 1}`);
            return;
        }
    }

    console.log("Koszty sprzedaży:")
    console.log(salesPricesArray);

    const transportCosts = document.getElementsByClassName("transportCost");

    let counter = 0;
    while (counter < transportCosts.length) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (!isNaN(parseInt(transportCosts[counter].value))) {
                    transportCostsArray[i][j] = parseInt(transportCosts[counter].value);
                    counter++;
                } else {
                    alert(`Transport cost table filled not properly at: ${i + 1}, ${j + 1}`);
                    counter++;
                    return;
                }
            }
        }
    }

    console.log("transport cost:")
    console.log(transportCostsArray);
}

export {compute};