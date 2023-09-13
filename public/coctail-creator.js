const ingredientsColors = {
    "whiteRum": "F5F5F5",
    "sodaWater": "F8F8F8",
    "limeJuice": "63E211",
    "pineappleJuice": "F8CA0F",
    "coconutCream": "E6DFC3",
    "espresso": "462B02",
    "bourbon": "CB7A00",
    "syrup": "6C470F"
}

const coctails = [];

class Coctail {
    constructor (name,  imageSource, description, glass, mainIngredients, extraIngredients) {
        this.name = name;
        this.imageSource = imageSource;
        this.description = description;
        this.glass = glass;
        this.mainIngredients = mainIngredients;
        this.extraIngredients = extraIngredients;
    }
}


coctails.push(new Coctail("Mojito", "./coctails/mojito.jpg", "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water",
"highGlass", [ ["Soda Water", ingredientsColors.sodaWater, 50], [ "White Rum", ingredientsColors.whiteRum, 35], [ "Lime Juice", ingredientsColors.limeJuice, 15], ],
["1 tsp granulated sugar", "10 fresh mint leaves", "Ice cubes"]))

coctails.push(new Coctail("Old Fashioned", "./coctails/old-fashioned.jpg", "Try this twist on an old fashioned cocktail, with a double shot of espresso accompanying the classic flavours of bourbon and Angostura bitters",
"oldGlass", [[ "Double shot espresso", ingredientsColors.espresso, 50 ], [ "Bourbon", ingredientsColors.bourbon, 40 ], [ "Brown-sugar Syrup", ingredientsColors.syrup, 10]],
["2 dashes Angostura bitters", "orange zest"]))

coctails.push(new Coctail("Pina Colada", "./coctails/pina-colada.jpg", "A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal",
"highGlass", [ [ "Pineaplle Juice", ingredientsColors.pineappleJuice, 50], [ "White Rum", ingredientsColors.whiteRum, 25], ["Coconut Cream", ingredientsColors.coconutCream, 25]],
["wedge of pineapple"]))


export { coctails };