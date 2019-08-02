let rel1 = {
    cost: 0,
    tupleCount: 10
}


let rel2 = {
    cost: 0,
    tupleCount: 20
}


let rel3 = {
    cost: 0,
    tupleCount: 30
}


let rel4 = {
    cost: 0,
    tupleCount: 40
}


let listOfRelations = [rel1, rel2, rel3, rel4];


function returnCost(listOfRels) {
    let cost = (listOfRels[0].tupleCount * listOfRels[1].tupleCount) + (listOfRels[0].tupleCount * listOfRels[1].tupleCount * listOfRels[2].tupleCount) + (listOfRels[0].tupleCount * listOfRels[1].tupleCount * listOfRels[2].tupleCount * listOfRels[3].tupleCount);
    return cost;
}

function returnCost2(listOfRels) {
    let tcost = 1;
    let cost = 0;
    for (let i = 1; i < listOfRels.length; i++) {
        for (let j = i; j >= 0; j--) {
            tcost = tcost * listOfRels[j].tupleCount;
        }
        cost = cost + tcost;
    }
    return cost
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;


    // While there remain elements to shuffle...
    while (0 !== currentIndex) {


        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }


    return array;
}


function get5Values() {
    let listOfCostsRec = [];
    //let listOfCostsNew = [];
    for (let i = 0; i < 5; i++) {
        listOfRelations = shuffle(listOfRelations);
        listOfCostsRec.push(returnCost(listOfRelations));
        //listOfCostsNew.push(returnCost2(listOfRelations));
    }
    let minCostRec = Math.min(...listOfCostsRec);
    //let minCostNew = Math.min(...listOfCostsNew);

    //console.log(minCostNew);
    console.log(minCostRec);
}


get5Values();