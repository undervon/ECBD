/*
    - inserarea datelor multiple
    si
    - modificarea si stergerea documentelor individuale
*/

/*
    Masini
*/

/*
    Insert
*/
try {
    db.Masini.insert(
        {
            "_id": "VIN000VDS000VIS01",
            "serie_motor": "11-11111-111111",
            "marca": "BMW",
            "model": "Seria 5 F11",
            "an_fabricatie": new Date("2011-12-12"),
            "combustibil": "Benzina",
            "motor": {
                "capacitate_cilindrica": 1997,
                "putere": 245,
                "cuplu": 350
            },
            "hybrid": false
        }
    );
}
catch(e) {
    print(e);
}

try {
    db.Masini.insertMany(
    [
        {
            "_id": "VIN000VDS000VIS02",
            "serie_motor": "22-22222-222222",
            "marca": "Audi",
            "model": "A6 B8",
            "an_fabricatie": new Date("2012-07-22"),
            "combustibil": "Diesel",
            "motor": {
                "capacitate_cilindrica": 1996,
                "putere": 184,
                "cuplu": 320
            },
            "hybrid": false
        },
        {
            "_id": "VIN000VDS000VIS03",
            "serie_motor": "33-33333-333333",
            "marca": "Seat",
            "model": "Ibiza",
            "an_fabricatie": new Date("2003-01-11"),
            "combustibil": "Benzina",
            "motor": {
                "capacitate_cilindrica": 1197,
                "putere": 64,
                "cuplu": 55
            },
            "hybrid": false
        },
        {
            "_id": "VIN000VDS000VIS04",
            "serie_motor": "44-44444-44444",
            "marca": "Volkswagen",
            "model": "Passat B6",
            "an_fabricatie": new Date("2005-07-07"),
            "combustibil": "Diesel",
            "motor": {
                "capacitate_cilindrica": 2004,
                "putere": 144,
                "cuplu": 240
            },
            "hybrid": false
        }
    ]);
}
catch(e) {
    print(e);
}

/*
    Update
*/
db.Masini.update(
    {
        "_id": "VIN000VDS000VIS02"
    },
    {
        $set: {
            "motor.capacitate_cilindrica": 2004
        }
    }
);

db.Masini.updateMany(
    {
        "an_fabricatie": { 
            $gte: new Date("2010-01-01")
        }
    },
    {
        $set: {
            "hybrid": true
        }
    }
);

/*
    Delete
*/
db.Masini.deleteOne(
    {
        "_id": "VIN000VDS000VIS03"
    }
);

db.Masini.deleteMany(
    {
        "combustibil" : "Diesel"
    }
);

db.Masini.remove({});


/*
    Reprezentante
*/

/*
    Insert
*/
db.Reprezentante.insertOne(
    {
        "nume": "BMW APAN Motors SRL",
        "localitate": "Iasi",
        "angajati": [
            {
                "nume_angajat": "Silviu Butnaru",
                "calificare": "Software Engineer",
                "marca_specializata": "BMW ALPINA"
            },
            {
                "nume_angajat": "Vlad Paraschiv",
                "calificare": "Mechanical Engineer",
                "marca_specializata": "Saab"
            }
        ],
        "masini": [
            "VIN000VDS000VIS01"
        ]
    }
);

db.Reprezentante.insertMany([
    {
        "nume": "Volkswagen SRL",
        "localitate": "Iasi",
        "angajati": [
            {
                "nume_angajat": "Marian-Ilie Butnaru",
                "calificare": "Software Engineer",
                "marca_specializata": "Volkswagen"
            },
            {
                "nume_angajat": "Alberto-Ionut Toscariu",
                "calificare": "Software Engineer",
                "marca_specializata": "Audi"
            },
            {
                "nume_angajat": "Catalin Zara",
                "calificare": "Software Engineer",
                "marca_specializata": "Seat"
            }
        ],
        "masini": [
            "VIN000VDS000VIS02",
            "VIN000VDS000VIS03",
            "VIN000VDS000VIS04"
        ]
    },
    {
        "nume": "Mercedes-Benz SRL",
        "localitate": "Bucuresti",
        "angajati": [
            {
                "nume_angajat": "Alexandru Baltariu",
                "calificare": "Mechanical Engineer",
                "marca_specializata": "Mercedes-Benz"
            }
        ],
        "masini": []
    }
]);

/*
    Update
*/
db.Reprezentante.updateMany(
    {
        "localitate": "Iasi"
    },
    {
        $set: {
            "localitate": "Brasov",
            "masini": [
                "VIN000VDS000VIS01",
                "VIN000VDS000VIS04"
            ]
        }
    }
);

/*
    Delete
*/
db.Reprezentante.deleteMany(
    {
        "localitate": "Iasi"
    }
);

db.Reprezentante.remove({});


/*
    Achizitii
*/
/*
    Insert
*/
db.Achizitii.insert(
    {
        "vin": "VIN000VDS000VIS01",
        "nume_reprezentanta": "BMW APAN Motors SRL",
        "nume_angajat_reprezentanta": "Silviu Butnaru",
        "data_achizitie": new Date(),
        "pret": 12345.99
    }
);

db.Achizitii.insertMany([
    {
        "vin": "VIN000VDS000VIS02",
        "nume_reprezentanta": "Volkswagen SRL",
        "nume_angajat_reprezentanta": "Marian-Ilie Butnaru",
        "data_achizitie": new Date(),
        "pret": 23456.99
    },
    {
        "vin": "VIN000VDS000VIS03",
        "nume_reprezentanta": "Volkswagen SRL",
        "nume_angajat_reprezentanta": "Catalin Zara",
        "data_achizitie": new Date(),
        "pret": 34567.99
    },
    {
        "vin": "VIN000VDS000VIS04",
        "nume_reprezentanta": "Volkswagen SRL",
        "nume_angajat_reprezentanta": "Alberto-Ionut Toscariu",
        "data_achizitie": new Date(),
        "pret": 456789.99
    }
]);

/*
    Update
*/
db.Achizitii.updateOne(
    {
       "vin": "VIN000VDS000VIS01" 
    },
    {
        $set: {
            "pret": 99999.99
        }
    }
);

/*
    Delete
*/
db.Achizitii.deleteMany(
    {
        "pret": {
            $lte: 50000.00
        }
    }
);

db.Achizitii.remove({});

/*
    - operatii de tip “bulk” pentru insert/update/delete
*/

/*
    Masini
*/
db.Masini.bulkWrite([
    {
        insertOne: {
            "document":
            {
                "_id": "VIN000VDS000VIS05",
                "serie_motor": "55-55555-555555",
                "marca": "Volkswagen",
                "model": "Golf 6",
                "an_fabricatie": new Date("2010-04-02"),
                "combustibil": "Diesel",
                "motor": {
                    "capacitate_cilindrica": 1996,
                    "putere": 144,
                    "cuplu": 200
                },
                "hybrid": false
            }
        }
    },
    {
        updateOne:
        {
            "filter": {
                "_id": "VIN000VDS000VIS04"
            },
            "update": {
                $set: {
                    "combustibil": "Benzina",
                    "hybrid": true
                }
            }
        }
    },
    {
        deleteOne:
        {
            "filter": {
                "_id": "VIN000VDS000VIS02"
            }
        }
    }
]);


/*
    Reprezentante
*/
db.Reprezentante.bulkWrite([
    {
        updateOne:
        {
            "filter": {
                "nume": "BMW APAN Motors SRL"
            },
            "update": {
                $set: {
                    "localitate": "Bacau",
                    "angajati": [
                        {
                            "nume_angajat": "Marian-Ilie Butnaru",
                            "calificare": "Software Engineer",
                            "marca_specializata": "Volkswagen"
                        },
                        {
                            "nume_angajat": "Alberto-Ionut Toscariu",
                            "calificare": "Software Engineer",
                            "marca_specializata": "Audi"
                        }
                    ]
                }
            }
        }
    },
    {
        deleteMany:
        {
            "filter": {
                "localitate": "Iasi"
            }
        }
    }
]);

/*
    Achizitii
*/
db.Achizitii.bulkWrite([
    {
        insertOne: {
            "document":
            {
                "vin": "VIN000VDS000VIS05",
                "nume_reprezentanta": "Mercedes-Benz SRL",
                "nume_angajat_reprezentanta": "Alexandru Baltariu",
                "data_achizitie": new Date(),
                "pret": 333333.99
            }
        }
    },
    {
        deleteOne:
        {
            "filter": {
                "_id" : ObjectId("627f6829fe926a7890804553")
            }
        }
    }
]);