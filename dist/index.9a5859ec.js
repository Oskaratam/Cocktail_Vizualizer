var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},n=e.parcelRequire4dac;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in c){var n=c[e];delete c[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){c[e]=t},e.parcelRequire4dac=n);var o=n("8wGQK"),l=n("g5KvZ");document.querySelector("[data-coctail-name]"),document.querySelector("[data-coctail-description]");const d=document.querySelector("#coctailMenu");(()=>{for(let e=0;e<o.coctails.length;e++){let t=o.coctails[e],c=document.createElement("div"),n=document.createElement("img");c.classList.add("menuItem"),n.classList.add("coctailImage"),n.setAttribute("src",t.imageSource),d.appendChild(c),c.appendChild(n),c.addEventListener("click",()=>{document.querySelectorAll(".menuItemPicked").length>=1&&document.querySelector(".menuItemPicked").classList.remove("menuItemPicked"),c.classList.add("menuItemPicked"),(0,l.setCoctail)(t)})}})();/* Coctail {name: 'Mojito', imageSoure: './img/coctails/mojito.jpg', description: 'Mix this classic cocktail for a party using fresh …ite rum, sugar, zesty lime and cooling soda water', glass: 'highGlass', mainIngredients: Array(3), …}
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

*///# sourceMappingURL=index.9a5859ec.js.map

//# sourceMappingURL=index.9a5859ec.js.map
