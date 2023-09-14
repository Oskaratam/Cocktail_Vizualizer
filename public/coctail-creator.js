const ingredientsColors = {
    "whiteRum": "F5F5F5",
    "sodaWater": "F8F8F8",
    "limeJuice": "63E211",
    "pineappleJuice": "F8CA0F",
    "coconutCream": "E6DFC3",
    "espresso": "462B02",
    "bourbon": "CB7A00",
    "syrup": "6C470F",
    "berries": "7F0CCF",
    "raspberryLiqueur": "A40721",
    "lemonJuice": "FFFB83",
    "blueCuracao": "6B6CCC",
    "vodka": "FCF9F5",
    "coffeeLiquer": "381B01"
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


coctails.push(new Coctail("Old Fashioned", "./coctails/old-fashioned.jpg", "Try this twist on an old fashioned cocktail, with a double shot of espresso accompanying the classic flavours of bourbon and Angostura bitters",
"oldGlass", [[ "Double shot espresso", ingredientsColors.espresso, 50 ], [ "Bourbon", ingredientsColors.bourbon, 40 ], [ "Brown-sugar Syrup", ingredientsColors.syrup, 10]],
["2 dashes Angostura bitters", "Orange zest"]))

coctails.push(new Coctail("Pina Colada", "./coctails/pina-colada.jpg", "A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal",
"highGlass", [ [ "Pineaplle Juice", ingredientsColors.pineappleJuice, 50], [ "White Rum", ingredientsColors.whiteRum, 25], ["Coconut Cream", ingredientsColors.coconutCream, 25]],
["Wedge of pineapple"]))

coctails.push(new Coctail("Witch's Brew", "./coctails/witch.jpg", "Get some berries bubbling in your cauldron and add some edible glitter to this spooky purple cocktail, made with vodka, liqueur and curacao",
"coctailGlass", [ [ "Vodka", ingredientsColors.vodka, 30  ], [" Raspberry Liqueur", ingredientsColors.raspberryLiqueur, 25 ], [ "Lemon Juice", ingredientsColors.lemonJuice, 20 ],
[ "Cooked Berries", ingredientsColors.berries, 15 ], ["Blue Curacao", ingredientsColors.blueCuracao, 10] ], ["4 cocktail cherries"] ))

coctails.push(new Coctail("Mojito", "./coctails/mojito.jpg", "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water",
"highGlass", [ ["Soda Water", ingredientsColors.sodaWater, 50], [ "White Rum", ingredientsColors.whiteRum, 35], [ "Lime Juice", ingredientsColors.limeJuice, 15], ],
["1 tsp granulated sugar", "10 fresh mint leaves", "Ice cubes"]))

coctails.push(new Coctail("Espresso Martini", "./coctails/espresso-martini.jpg", "Learn how to make this classic coffee cocktail. Our easy recipe uses freshly brewed espresso, a dash of coffee liqueur and a simple sugar syrup.",
"coctailGlass", [ ["Vodka", ingredientsColors.vodka, 33], [ "Sugar Syrup", ingredientsColors.syrup, 33 ], [ "Espresso", ingredientsColors.espresso, 17 ], ["Coffee liquer", ingredientsColors.coffeeLiquer, 17] ],
["Ice"] ))





export { coctails };