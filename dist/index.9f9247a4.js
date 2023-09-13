const ingredientsColors = {
    "whiteRum": "F5F5F5",
    "sodaWater": "F8F8F8",
    "limeJuice": "63E211"
};
const coctails = [];
class Coctail {
    constructor(name, imageSource, description, glass, mainIngredients, extraIngredients){
        this.name = name;
        this.imageSoure = imageSource;
        this.description = description;
        this.glass = glass;
        this.mainIngredients = mainIngredients;
        this.extraIngredients = extraIngredients;
    }
}
coctails.push(new Coctail("Mojito", "./img/mojito.jpg", "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water", "highGlass", [
    [
        "Soda Water",
        ingredientsColors.sodaWater,
        50
    ],
    [
        "White Rum",
        ingredientsColors.whiteRum,
        35
    ],
    [
        "Lime Juice",
        ingredientsColors.limeJuice,
        15
    ]
], [
    "1 tsp granulated sugar",
    "10 fresh mint leaves",
    "Ice cubes"
]));
console.log(coctails[0]);

//# sourceMappingURL=index.9f9247a4.js.map
