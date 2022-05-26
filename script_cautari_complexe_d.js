/*
    - folosirea cursorilor pentru find() pentru procesari suplimentare
*/

// Masini
// Afisare masini care nu sunt hybrid si au capacitatea cilindrica < 2000 cm^3
var cursorMasini = db.Masini.find().pretty();
// cursorMasini.forEach(printjson);

var listMasini = []
while (cursorMasini.hasNext()) {
    masina = cursorMasini.next();
    if (masina.hybrid == false && masina.motor.capacitate_cilindrica < 2000) {
        var vinMarcaModel = masina._id + ": " + masina.marca + " " + masina.model;
        listMasini.push(vinMarcaModel);
    }
}

listMasini.forEach(printjson);

// Reprezentante
var cursorReprezentante = db.Reprezentante.find().pretty();
// cursorReprezentante.forEach(printjson);

// Afisare angajat cu ce calificare are si marca pentru care este specializat
while (cursorReprezentante.hasNext()) {
    var reprezentanta = cursorReprezentante.next();
    reprezentanta.angajati.forEach((angajat) => {
        var numeAngajatCalificare = angajat.nume_angajat + " (" + angajat.calificare + ")";
        var marcaSpecializare = angajat.marca_specializata;

        printjson(numeAngajatCalificare + " - " + marcaSpecializare);
    });
}

// Achizitii
var cursorAchizitii = db.Achizitii.find().pretty();
// cursorAchizitii.forEach(printjson);

// Calcul total vanzari
var totalPreturi = 0;
while (cursorAchizitii.hasNext()) {
    var achizitie = cursorAchizitii.next();
    totalPreturi += achizitie.pret;
}

printjson("Total = " + totalPreturi);

/*
    - folosirea frameworkului aggregate (operatori de tip group, push/addFields, project, unwind,
    sort, limit) si conceptul de pipeline pentru inlantuirea operatorilor
*/

// Media achizitiilor in functie de reprezentanta
db.Achizitii.aggregate([
    {
        $group: {
            _id: "$nume_reprezentanta",
            total_achizitii: {$sum: "$pret"},
            numar_achizitii: {$sum: 1}
        }
    },
    {
        $addFields: {
            medie_pret: {$divide: ["$total_achizitii", "$numar_achizitii"]}
        }
    },
    {
        $sort: {
            medie_pret: -1
        }
    },
    {
        $limit: 3
    }
]);

// Afisare fiecare angajat in parte de la fiecare reprezentanta
db.Reprezentante.aggregate([
    {
        $project: {
            "_id": false,
            "masini": false
        }
    },
    {
        $unwind: {path: "$angajati"}
    }
]);