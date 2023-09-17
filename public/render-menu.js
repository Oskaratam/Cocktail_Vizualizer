import { cocktails, cocktails2 } from "./cocktail-creator.js"
import { setCocktail } from "./index.js";

const cocktailNameMain = document.querySelector('[data-cocktail-name]'),
      cocktailDescription = document.querySelector('[data-cocktail-description]'),
      cocktailMenu = document.querySelector('#cocktailMenu'),
      alcoFreeButton = document.querySelector('#alcoFreeButton'),
      alcoButton = document.querySelector('#alcoButton');


const renderMenu = (cocktailsList) => {
    for (let i = 0; i < cocktailsList.length; i++) {
        const cocktail = cocktailsList[i];
        const menuItem = document.createElement('div');
        const cocktailImage = document.createElement('img');
    
        menuItem.classList.add('menuItem');
        cocktailImage.classList.add('cocktailImage');
        cocktailImage.setAttribute('src', cocktail.imageSource)
    
        cocktailMenu.appendChild(menuItem);
        menuItem.appendChild(cocktailImage);
    
    
        menuItem.addEventListener('click', () => {
            if (document.querySelectorAll('.menuItemPicked').length >= 1){
                document.querySelector('.menuItemPicked').classList.remove('menuItemPicked');
            }
            menuItem.classList.add('menuItemPicked');
            setCocktail(cocktail);
        })
    }
}
renderMenu(cocktails);

const deleteMenu = () => {
    document.querySelectorAll('.menuItem').forEach(item => {item.remove()})
}

alcoFreeButton.addEventListener('click', () => {
    deleteMenu();
    renderMenu(cocktails2);
    setCocktail(cocktails2[0]);
    document.querySelector('.menuItem').classList.add('menuItemPicked');
});


alcoButton.addEventListener('click', () => {
    deleteMenu();
    renderMenu(cocktails);
    setCocktail(cocktails[0]);
    document.querySelector('.menuItem').classList.add('menuItemPicked');
});




