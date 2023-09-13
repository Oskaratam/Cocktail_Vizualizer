/* 
1.connect with coctail api and fetch data
2.store ingredients and its color
3.create function to set a coctail by ingredient count and size
*/

import { coctails } from "./coctail-creator.js";


const searchIcon = document.querySelector('#searchIcon'),
    searchInput = document.querySelector('#searchInput'),
    coctailName = document.querySelector('[data-coctail-name]'),
    coctailDescription = document.querySelector('[data-coctail-description]'),
    coctailMenu = document.querySelector('#coctailMenu');




    
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
            coctailDescription.innerHTML = coctail.strInstructions;
        }

    } catch (error) {
        console.error(error);
    }
})

