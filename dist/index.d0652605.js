var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire4dac;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},e.parcelRequire4dac=n);var o=n("8wGQK");document.querySelector("[data-coctail-name]"),document.querySelector("[data-coctail-description]");const c=document.querySelector("#coctailMenu");for(let e=0;e<o.coctails.length;e++){let t=o.coctails[e],a=document.createElement("div"),n=document.createElement("h5"),l=document.createElement("img");n.classList.add("coctailName"),n.innerHTML=`${t.name}`,a.classList.add("menuItem"),l.classList.add("coctailImage"),l.setAttribute("src",`${t.imageSource}`),c.appendChild(a),a.appendChild(n),a.appendChild(l)}/* Coctail {name: 'Mojito', imageSoure: './img/coctails/mojito.jpg', description: 'Mix this classic cocktail for a party using fresh …ite rum, sugar, zesty lime and cooling soda water', glass: 'highGlass', mainIngredients: Array(3), …}
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

*///# sourceMappingURL=index.d0652605.js.map

//# sourceMappingURL=index.d0652605.js.map
