/*
    - cautarea documentelor/subdocumentelor/elementelor din vector folosind find() cu diverse optiuni
    pentru cautari in vectori/subdocumente, proiectia atributelor, valori null sau attribute inexistente, 
    sortari
*/

// Verificare serie_motor prin regex
db.Masini.find(
    {
        "serie_motor": {$regex: "^[0-9]{2}-[0-9]{5}-[0-9]{6}$"}
    },
    {
        "_id": true, "serie_motor": true, "marca": true, "model": true
    }
).pretty();

// Primele 2 cele mai noi masini
db.Masini.find(
    {},
    {
        "_id": true, "serie_motor": true, "marca": true, "model": true, "an_fabricatie": true
    }
)
.sort({"an_fabricatie": -1})
.limit(2)
.pretty();

// A 2 a cea mai veche masina
db.Masini.find(
    {},
    {
        "_id": true, "serie_motor": true, "marca": true, "model": true, "an_fabricatie": true
    }
)
.sort({"an_fabricatie": 1})
.limit(1)
.skip(1)
.pretty();

// Reprezentantele care au masina specifica
db.Reprezentante.find(
    {
        "masini": {$all: ["VIN000VDS000VIS02"]}
    },
    {
        "_id": false, "angajati": false
    }
)
.pretty();

// Afisare achizitii mai mici de 40000.00 si care sunt de la reprezentanta Volkswagen SRL descrescator
db.Achizitii.find(
    {
        $and: [{"pret": {$lt: 40000.00}}, {"nume_reprezentanta": "Volkswagen SRL"}]
    },
    {
        "_id": false
    }
)
.sort({"pret": -1})
.pretty();

/*
    - crearea indecsilor necesari si afisarea utilizarii acestora
*/

// Index pentru cautarea in collectia Masini
db.Masini.createIndex(
    {
        "_id": "text", "serie_motor": "text", "marca": "text", "model": "text"
    },
    {
        "name": "vin_serie_motor_marca_model"
    }
);

// db.Masini.dropIndex("vin_serie_motor_marca_model");

db.Masini.getIndexes();

db.Masini
.find(
    { 
        $text: { 
            $search: "F11" 
        }
    }
);

// Index pentru cautarea in collectia Reprezentante
db.Reprezentante.createIndex(
    {
        "nume": "text", 
        "localitate": "text", 
        "angajati.nume_angajat": "text",
        "angajati.calificare": "text",
        "masini": "text"
    },
    {
        "name": "nume_localitate_angajati_masini"
    }
);

// db.Reprezentante.dropIndex("nume_localitate_angajati_masini");

db.Reprezentante.getIndexes();

db.Reprezentante
.find(
    { 
        $text: { 
            $search: "Iasi" 
        }
    }
);

// Index pentru cautarea in collectia Achizitii
db.Achizitii.createIndex(
    {
        "vin": "text",
        "nume_reprezentanta": "text",
        "nume_angajat_reprezentanta": "text"
    },
    {
        "name": "vin_nume_reprezentanta_nume_angajat_reprezentanta"
    }
);

// db.Achizitii.dropIndex("vin_nume_reprezentanta_nume_angajat_reprezentanta");

db.Achizitii.getIndexes();

db.Achizitii
.find(
    { 
        $text: { 
            $search: "Volkswagen" 
        }
    }
);

/*
    - cautare paginata pentru unele operatii de cautare (ca parametri se paseaza numarul de
    documente pe pagina si numarul paginii)
*/

var numarul_paginii = 0;
var numarul_de_documente_pe_pagina = 2;

db.Achizitii
.find({}, {"_id": false, "nume_angajat_reprezentanta": false})
.sort({"pret": 1})
.skip(numarul_paginii * numarul_de_documente_pe_pagina)
.limit(numarul_de_documente_pe_pagina)
.pretty();

db.Masini
.find({})
.sort({"an_fabricatie": -1})
.skip(numarul_paginii * numarul_de_documente_pe_pagina)
.limit(numarul_de_documente_pe_pagina)
.pretty();

db.Reprezentante
.find({}, {"_id": false, "angajati": false, "masini": false})
.skip(numarul_paginii * numarul_de_documente_pe_pagina)
.limit(numarul_de_documente_pe_pagina)
.pretty();