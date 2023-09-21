
import Fuse from 'fuse.js';


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

let cocktails, cocktails2;
fetch("http://localhost:3000/cocktails").then(res => res.json()).then(data => {
    cocktails = data[0];
    cocktails2 = data[1];
})


    
//SEARCH A DRINK
searchIcon.addEventListener('click', async() => {
    const searchString = searchInput.value;
    const allCocktails = cocktails.concat(cocktails2);
    const searchOptions = {
        keys: ['name']
    }
    const fuse = new Fuse(allCocktails, searchOptions),
        result = fuse.search(searchString),
        foundCocktail = result[0].item;

    document.querySelector('.menuItemPicked')?.classList.remove('menuItemPicked');
    setCocktail(foundCocktail);    
})

export { setCocktail }
