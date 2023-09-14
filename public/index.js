/* 
1.create a div (with class to add transition) for each ingredient and add to the proper content div
2.set a height with %
3.add a proper name (html element with class) for each div
4.set a color with # code
5.delete all divs before setting again
*/

import { coctails } from "./coctail-creator.js";


const searchIcon = document.querySelector('#searchIcon'),
    searchInput = document.querySelector('#searchInput'),
    coctailNameMain = document.querySelector('[data-coctail-name]'),
    coctailDescription = document.querySelector('[data-coctail-description]'),
    coctailMenu = document.querySelector('#coctailMenu');


//SET MAIN INFO 
const setCoctail = (coctail) => {
        coctailNameMain.innerHTML = coctail.name;
        coctailDescription.innerHTML = coctail.description;

        document.querySelectorAll('[data-type-content="coctail"]').forEach (content => {
            content.classList.add('invisible')
        })

        document.querySelectorAll('[data-type-image="coctail"]').forEach (content => {
            content.classList.add('invisible')
        })
        const glass = document.getElementById(`${coctail.glass}`);
        glass.classList.remove('invisible');

        const glassContent = document.getElementById(glass.dataset.inside);
        glassContent.classList.remove('invisible');

        console.log(coctail.mainIngredients[0])

        //Main animation

        if (document.querySelectorAll('.ingredientBox').length >= 1) {
            document.querySelectorAll('.ingredientBox').forEach(box => {
                box.remove();
            })
        }




        for (let i = 0; i < coctail.mainIngredients.length; i++) {
            const ingredientBox = document.createElement('div');
            ingredientBox.classList.add('ingredientBox');
            glassContent.appendChild(ingredientBox);

            setTimeout(() => {
                ingredientBox.style.transition = "height 1.5s";
                ingredientBox.style.height = `${coctail.mainIngredients[i][2]}%`;
            }, 100)

            const ingredientName = document.createElement('h5');
            ingredientName.classList.add('ingredientName');
            ingredientName.innerHTML = coctail.mainIngredients[i][0];
            ingredientBox.appendChild(ingredientName);

            ingredientBox.style.backgroundColor = `#${coctail.mainIngredients[i][1]}`;
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
            coctailDescription.innerHTML = coctail.strInstructions;
        }

    } catch (error) {
        console.error(error);
    }
})

export { setCoctail }
