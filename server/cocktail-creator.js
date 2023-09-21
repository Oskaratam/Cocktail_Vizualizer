
const express = require('express');
const app = express(),
    cors = require('cors');

app.use(express.json());
app.use(cors());



const ingredientsColors = {
    "whiteRum": "F5F5F5",
    "sodaWater": "F8F8F8",
    "limeJuice": "4FC30C",
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
    "coffeeLiquer": "642600",
    "orangeJuice": "FF8B16",
    "gingerAle": "F9D107",
    "cranberryJuice": "FF2222",
    "peachSchnapps": "FFC4FA",
    "cream": "F8F5E0",
    "irishCream": "EEE26B",
    "cola": "3c3024"
}

const cocktails = [],
    cocktails2 = [];

class Cocktail {
    constructor (name,  imageSource, description, glass, mainIngredients, extraIngredients) {
        this.name = name;
        this.imageSource = imageSource;
        this.description = description;
        this.glass = glass;
        this.mainIngredients = mainIngredients;
        this.extraIngredients = extraIngredients;
    }
}


cocktails.push(new Cocktail("Old Fashioned", "./cocktails/old-fashioned.jpg", "Try this twist on an old fashioned cocktail, with a double shot of espresso accompanying the classic flavours of bourbon and Angostura bitters",
"oldGlass", [[ "Espresso", ingredientsColors.espresso, 50 ], [ "Bourbon", ingredientsColors.bourbon, 40 ], [ "Sugar Syrup", ingredientsColors.syrup, 10]],
["Angostura bitters", "Orange zest"]))

cocktails.push(new Cocktail("Pina Colada", "./coctails/pina-colada.jpg", "A tropical blend of rich coconut cream, white rum and tangy pineapple – serve with an umbrella for kitsch appeal",
"highGlass", [ [ "Pineaplle Juice", ingredientsColors.pineappleJuice, 50], [ "White Rum", ingredientsColors.whiteRum, 25], ["Coconut Cream", ingredientsColors.coconutCream, 25]],
["Wedge of pineapple"]))

cocktails.push(new Cocktail("Witch's Brew", "./cocktails/witch.jpg", "Get some berries bubbling in your cauldron and add some edible glitter to this spooky purple cocktail, made with vodka, liqueur and curacao",
"cocktailGlass", [ [ "Vodka", ingredientsColors.vodka, 30  ], [" Raspberry Liqueur", ingredientsColors.raspberryLiqueur, 25 ], [ "Lemon Juice", ingredientsColors.lemonJuice, 20 ],
[ "Cooked Berries", ingredientsColors.berries, 15 ], ["Blue Curacao", ingredientsColors.blueCuracao, 10] ], ["4 cocktail cherries"] ))

cocktails.push(new Cocktail("Sex On The Beach", "./cocktails/sex.jpg", "Combine vodka with peach schnapps and cranberry juice to make a classic sex on the beach cocktail. Garnish with cocktail cherries and orange slices",
"highGlass", [ ["Orange Juice", ingredientsColors.orangeJuice, 40], ["Vodka", ingredientsColors.vodka, 25 ], ["Cranberry Juice", ingredientsColors.cranberryJuice, 20], ["Peach Schnapps", ingredientsColors.peachSchnapps, 15 ]], ["Ice"] ))

cocktails.push(new Cocktail("Espresso Martini", "./cocktails/espresso-martini.jpg", "Learn how to make this classic coffee cocktail. Our easy recipe uses freshly brewed espresso, a dash of coffee liqueur and a simple sugar syrup.",
"cocktailGlass", [ ["Vodka", ingredientsColors.vodka, 33], [ "Sugar Syrup", ingredientsColors.syrup, 33 ], [ "Espresso", ingredientsColors.espresso, 17 ], ["Coffee liquer", ingredientsColors.coffeeLiquer, 17] ],
["Ice"] ))

cocktails.push(new Cocktail("Mudslide", "./cocktails/mudslide.jpg", "Share this creamy adults-only drink with the chocolate lover in your life. For extra indulgence, grate over some chocolate before serving",
"oldGlass", [["Double Cream", ingredientsColors.cream, 30], ["Irish Cream", ingredientsColors.irishCream, 20 ], ["Vodka", ingredientsColors.vodka, 20], ["Coffee Liquer", ingredientsColors.coffeeLiquer, 20], ["Chocolate", "884218", 10]],[]))


cocktails.push(new Cocktail("Cuba Libre", "./cocktails/cuba.jpg", "A classic Cuban cocktail of rum, cola, lime and ice. Pour into a tall glass for the ultimate refreshing long cocktail",
"highGlass", [["Cola", ingredientsColors.coffeeLiquer, 50], ["Rum", ingredientsColors.bourbon, 30], ["Lime Juice", ingredientsColors.limeJuice, 20]], ["Ice"]))

cocktails.push(new Cocktail("Mojito", "./cocktails/mojito.jpg", "Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water",
"highGlass", [ ["Soda Water", ingredientsColors.sodaWater, 50], [ "White Rum", ingredientsColors.whiteRum, 35], [ "Lime Juice", ingredientsColors.limeJuice, 15], ],
["1 tsp granulated sugar", "10 fresh mint leaves", "Ice cubes"]))





///////////////////////////////////////////////////////////////

cocktails2.push(new Cocktail("Fruity mocktail", "./cocktails/fruity.jpg", "Make this fruit-flavoured mocktail with grenadine and orange juice to serve as a non-alcoholic drink option at a family party. It's more fun with grape and blueberry stirrers that double as a snack",
"highGlass", [ ["Orange Juice", ingredientsColors.orangeJuice, 70], ["Grenadine", ingredientsColors.raspberryLiqueur, 20 ], ["Sparkling Water", ingredientsColors.sodaWater, 10]], []))

cocktails2.push(new Cocktail("Shirley Temple", "./cocktails/temple.jpg", "Combine lime juice, ginger ale and grenadine to make this sweet, refreshing non-alcoholic drink. Finish off the mocktail with a maraschino cherry to garnish",
"highGlass", [["Ginger Ale", ingredientsColors.gingerAle, 65 ], ["Lime Juice", ingredientsColors.limeJuice, 25], ["Grenadine", ingredientsColors.raspberryLiqueur, 10] ], [] ))






app.get('/cocktails', (req, res) => {
    const response = [cocktails, cocktails2];
    res.json(response);
})



app.listen(3000);