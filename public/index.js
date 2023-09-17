/* 
1.create a div (with class to add transition) for each ingredient and add to the proper content div
2.set a height with %
3.add a proper name (html element with class) for each div
4.set a color with # code
5.delete all divs before setting again
*/

import { cocktails } from "./cocktail-creator.js";


const searchIcon = document.querySelector('#searchIcon'),
    searchInput = document.querySelector('#searchInput'),
    cocktailNameMain = document.querySelector('[data-cocktail-name]'),
    cocktailDescription = document.querySelector('[data-cocktail-description]'),
    ingredientList = document.querySelector('#ingredientList');


//SET MAIN INFO 
const setCocktail = (cocktail) => {
        cocktailNameMain.innerHTML = cocktail.name;
        cocktailDescription.innerHTML = cocktail.description;

        document.querySelectorAll('[data-type-content="cocktail"]').forEach (content => {
            content.classList.add('invisible')
        })

        document.querySelectorAll('[data-type-image="cocktail"]').forEach (content => {
            content.classList.add('invisible')
        })
        const glass = document.getElementById(`${cocktail.glass}`);
        glass.classList.remove('invisible');

        const glassContent = document.getElementById(glass.dataset.inside);
        glassContent.classList.remove('invisible');

        console.log(cocktail.mainIngredients[0])

        //Main animation

        if (document.querySelectorAll('.ingredientBox').length >= 1) {
            document.querySelectorAll('.ingredientBox').forEach(box => {
                box.remove();
            })
        }

        for (let i = 0; i < cocktail.mainIngredients.length; i++) {
            const ingredientBox = document.createElement('div');
            ingredientBox.classList.add('ingredientBox');
            glassContent.appendChild(ingredientBox);

            setTimeout(() => {
                ingredientBox.style.transition = "height 1.5s";
                ingredientBox.style.height = `${cocktail.mainIngredients[i][2]}%`;
            }, 100)

            const ingredientName = document.createElement('h5');
            ingredientName.classList.add('ingredientName');
            ingredientName.innerHTML = cocktail.mainIngredients[i][0];
            ingredientBox.appendChild(ingredientName);

            ingredientBox.style.backgroundColor = `#${cocktail.mainIngredients[i][1]}`;
        }


        //Set ingredients

        if (document.querySelectorAll('.ingredientListItem').length >= 1) {
            document.querySelectorAll('.ingredientListItem').forEach(item => {
                item.remove();
            })
        }

        for(let i = 0; i < cocktail.mainIngredients.length; i++) {
            const ingredientListItem = document.createElement('h4');
            ingredientListItem.classList.add('ingredientListItem');
            ingredientListItem.innerHTML = `${cocktail.mainIngredients[i][0]} / ${cocktail.mainIngredients[i][2]}%`;

            ingredientList.appendChild(ingredientListItem);
        }

        for(let i = 0; i < cocktail.extraIngredients.length; i++) {
            const ingredientListItem = document.createElement('h4');
            ingredientListItem.classList.add('ingredientListItem');
            ingredientListItem.innerHTML = cocktail.extraIngredients[i];

            ingredientList.appendChild(ingredientListItem);
        }
}



    
//SEARCH A DRINK
searchIcon.addEventListener('click', async() => {
    const search = searchInput.value;
    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.drinks === null){
            console.log('DRINK NOT FOUND')
        } else {
            const coctail = data.drinks[0]
            coctailName.innerHTML = coctail.strDrink;
            cocktailDescription.innerHTML = coctail.strInstructions;
        }

    } catch (error) {
        console.error(error);
    }
})

export { setCocktail }
