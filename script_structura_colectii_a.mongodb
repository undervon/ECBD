/*
    Structura colectiilor

    Colectii:
    - Masini
    - Reprezentante
    - Achizitii
*/

/*
    Masini:
    {
        "_id": <VIN> (String),
        "serie_motor": (String)),
        "marca": (String),
        "model": (String),
        "an_fabricatie": (Date),
        "combustibil": (String),
        "motor": {
            "capacitate_cilindrica": (Integer),
            "putere": (Integer),
            "cuplu": (Integer)
        },
        "hybrid": (Boolean)
    }
*/
db.createCollection("Masini", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "serie_motor", "marca", "model", "an_fabricatie", "combustibil", "motor", "hybrid"],
            properties: {
                _id: {
                    bsonType: "string",
                    description: "The VIN, must be a string and is required"
                },
                serie_motor: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                marca: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                model: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                an_fabricatie: {
                    bsonType: "date",
                    description: "Most be a date and is required"
                },
                combustibil: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                motor: {
                    bsonType: "object",
                    required: ["capacitate_cilindrica", "putere", "cuplu"],
                    properties: {
                        capacitate_cilindrica: {
                            bsonType: "int",
                            description: "Most be a integer and is required"
                        },
                        putere: {
                            bsonType: "int",
                            description: "Most be a integer and is required"
                        },
                        cuplu: {
                            bsonType: "int",
                            description: "Most be a integer and is required"
                        },
                    }
                },
                hybrid: {
                    bsonType: "bool",
                    description: "Most be a integer and is required"
                }
            }
        }
    }
});


/*
    Reprezentante:
    {
        "nume": (String),
        "localitate": (String),
        "angajati": [
            {
                "nume_angajat": (String),
                "calificare": (String),
                "marca_specializata": (String)
            },

            {
                "nume_angajat": (String),
                "calificare": (String),
                "marca_specializata": (String)
            },

            ...
        ],
        "masini": ["_id": <VIN> (String), "_id": <VIN> (String), ...]
    }
*/
db.createCollection("Reprezentante", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nume", "localitate", "angajati", "masini"],
            properties: {
                nume: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                localitate: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                angajati: {
                    bsonType: "array",
                    description: "Most be a array and is required",
                    items: {
                        required: ["nume_angajat", "calificare", "marca_specializata"],
                        properties: {
                            nume_angajat: {
                                bsonType: "string",
                                description: "Most be a string and is required"
                            },
                            calificare: {
                                bsonType: "string",
                                description: "Most be a string and is required"
                            },
                            marca_specializata: {
                                bsonType: "string",
                                description: "Most be a string and is required"
                            },
                        }
                    }
                },
                masini: {
                    bsonType: "array",
                    description: "Most be a array and is required",
                    items: {
                        bsonType: "string",
                        description: "Most be a string and is required"
                    }
                }
            }
        }
    }
});

/*
    Achizitii:
    {
        "vin": (String),
        "nume_reprezentanta": (String),
        "nume_angajat_reprezentanta": (String),
        "data_achizitie": (Date),
        "pret": (Double)
    }
*/
db.createCollection("Achizitii", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["vin", "nume_reprezentanta", "nume_angajat_reprezentanta", "data_achizitie", "pret"],
            properties: {
                vin: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                nume_reprezentanta: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                nume_angajat_reprezentanta: {
                    bsonType: "string",
                    description: "Most be a string and is required"
                },
                data_achizitie: {
                    bsonType: "date",
                    description: "Most be a date and is required"
                },
                pret: {
                    bsonType: "double",
                    description: "Most be a double and is required"
                },
            }
        }
    }
});