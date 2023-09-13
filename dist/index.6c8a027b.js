var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire4dac;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequire4dac=n),/* 
1.connect with coctail api and fetch data
2.store ingredients and its color
3.create function to set a coctail by ingredient count and size
*/n("8wGQK");const r=document.querySelector("#searchIcon"),c=document.querySelector("#searchInput"),l=document.querySelector("[data-coctail-name]"),i=document.querySelector("[data-coctail-description]");document.querySelector("#coctailMenu"),//SEARCH A DRINK
r.addEventListener("click",async()=>{let e=c.value,t=`https://thecocktaildb.com/api/json/v1/1/search.php?s=${e}`;try{let e=await fetch(t),o=await e.json();if(console.log(o),null===o.drinks)console.log("DRINK NOT FOUND");else{let e=o.drinks[0];l.innerHTML=e.strDrink,i.innerHTML=e.strInstructions}}catch(e){console.error(e)}});//# sourceMappingURL=index.6c8a027b.js.map

//# sourceMappingURL=index.6c8a027b.js.map
