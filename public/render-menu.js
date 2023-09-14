import { coctails } from "./coctail-creator.js"
import { setCoctail } from "./index.js";

const coctailNameMain = document.querySelector('[data-coctail-name]'),
      coctailDescription = document.querySelector('[data-coctail-description]'),
      coctailMenu = document.querySelector('#coctailMenu');


const renderMenu = () => {
    for (let i = 0; i < coctails.length; i++) {
        const coctail = coctails[i];
        const menuItem = document.createElement('div');
        const coctailImage = document.createElement('img');
    
        menuItem.classList.add('menuItem');
        coctailImage.classList.add('coctailImage');
        coctailImage.setAttribute('src', coctail.imageSource)
    
        coctailMenu.appendChild(menuItem);
        menuItem.appendChild(coctailImage);
    
    
        menuItem.addEventListener('click', () => {
            if (document.querySelectorAll('.menuItemPicked').length >= 1){
                document.querySelector('.menuItemPicked').classList.remove('menuItemPicked');
            }
            menuItem.classList.add('menuItemPicked');
            setCoctail(coctail);
        })
    }
}
renderMenu();

/* Coctail {name: 'Mojito', imageSoure: './img/coctails/mojito.jpg', description: 'Mix this classic cocktail for a party using fresh …ite rum, sugar, zesty lime and cooling soda water', glass: 'highGlass', mainIngredients: Array(3), …}
description
: 
"Mix this classic cocktail for a party using fresh mint, white rum, sugar, zesty lime and cooling soda water"
extraIngredients
: 
(3) ['1 tsp granulated sugar', '10 fresh mint leaves', 'Ice cubes']
glass
: 
"highGlass"
imageSoure
: 
"./img/mojito.jpg"
mainIngredients
: 
Array(3)
0
: 
(3) ['Soda Water', 'F8F8F8', 50]
1
: 
(3) ['White Rum', 'F5F5F5', 35]
2
: 
(3) ['Lime Juice', '63E211', 15]
length
: 
3
[[Prototype]]
: 
Array(0)
name
: 
"Mojito"

*/