// Set Up Variable
let txt = "";

// Set Up Object Array
const METALS = [
    {
        "name": "Lithium",
        "symbol": "Li",
        "atomic_number": 3
    },

    {
        "name": "Sodium",
        "symbol": "Na",
        "atomic_number": 11
    },

    {
        "name": "Magnesium",
        "symbol": "Mg",
        "atomic_number": 12
    },

    {
        "name": "Aluminium",
        "symbol": "Al",
        "atomic_number": 13
    },

    {
        "name": "Potassium",
        "symbol": "K",
        "atomic_number": 19
    },

    {
        "name": "Calcium",
        "symbol": "Ca",
        "atomic_number": 20
    }
];

// Apply For Loop to Access Object Arrays
for (let i=0; i<METALS.length; i++) {
    txt += `<strong>${METALS[i]["name"]}</strong> has the symbol 
    ${METALS[i]["symbol"]}.  Its atomic number is ${METALS[i]["atomic_number"]}. <br>`;
}

// Display Information in the Browser Window
document.getElementById("info").innerHTML = txt;