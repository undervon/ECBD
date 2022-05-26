/*
    Folosirea Map-Reduce pentru operatii (similare sau nu cu operatiile implementate cu
    aggregate)
*/

// Media achizitiilor in functie de reprezentanta
function mapFunction() {
    var key = this.nume_reprezentanta;
    var value = {count: 1, pret: this.pret};
    emit(key, value);
}

function reduceFunction(key, value) {
    var returnValue = {count: 0, pret: 0};
    for (var i = 0; i < value.length; ++i) {
        returnValue.count += value[i].count;
        returnValue.pret += value[i].pret;
    }

    return returnValue;
}

function finalizeFunction(key, value) {
    return {
        total_achizitii: value.pret,
        numar_achizitii: value.count,
        medie_pret: value.pret / value.count
    };
}

db.Achizitii.mapReduce(
    mapFunction,
    reduceFunction,
    {
        finalize: finalizeFunction, 
        out: {
            merge: "MapReduceResult1"
        }
    },
);

db.MapReduceResult1.find().sort({"value.medie_pret": -1}).pretty();