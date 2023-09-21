// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7QhWD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c767fc22f18de3a7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7SwCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setCocktail", ()=>setCocktail);
var _fuseJs = require("fuse.js");
var _fuseJsDefault = parcelHelpers.interopDefault(_fuseJs);
const searchIcon = document.querySelector("#searchIcon"), searchInput = document.querySelector("#searchInput"), cocktailNameMain = document.querySelector("[data-cocktail-name]"), cocktailDescription = document.querySelector("[data-cocktail-description]"), ingredientList = document.querySelector("#ingredientList");
//SET MAIN INFO 
const setCocktail = (cocktail)=>{
    cocktailNameMain.innerHTML = cocktail.name;
    cocktailDescription.innerHTML = cocktail.description;
    document.querySelectorAll('[data-type-content="cocktail"]').forEach((content)=>{
        content.classList.add("invisible");
    });
    document.querySelectorAll('[data-type-image="cocktail"]').forEach((content)=>{
        content.classList.add("invisible");
    });
    const glass = document.getElementById(`${cocktail.glass}`);
    glass.classList.remove("invisible");
    const glassContent = document.getElementById(glass.dataset.inside);
    glassContent.classList.remove("invisible");
    //Main animation
    if (document.querySelectorAll(".ingredientBox").length >= 1) document.querySelectorAll(".ingredientBox").forEach((box)=>{
        box.remove();
    });
    for(let i = 0; i < cocktail.mainIngredients.length; i++){
        const ingredientBox = document.createElement("div");
        ingredientBox.classList.add("ingredientBox");
        glassContent.appendChild(ingredientBox);
        setTimeout(()=>{
            ingredientBox.style.transition = "height 1.5s";
            ingredientBox.style.height = `${cocktail.mainIngredients[i][2]}%`;
        }, 100);
        const ingredientName = document.createElement("h5");
        ingredientName.classList.add("ingredientName");
        ingredientName.innerHTML = cocktail.mainIngredients[i][0];
        ingredientBox.appendChild(ingredientName);
        ingredientBox.style.backgroundColor = `#${cocktail.mainIngredients[i][1]}`;
    }
    //Set ingredients
    if (document.querySelectorAll(".ingredientListItem").length >= 1) document.querySelectorAll(".ingredientListItem").forEach((item)=>{
        item.remove();
    });
    for(let i = 0; i < cocktail.mainIngredients.length; i++){
        const ingredientListItem = document.createElement("h4");
        ingredientListItem.classList.add("ingredientListItem");
        ingredientListItem.innerHTML = `${cocktail.mainIngredients[i][0]} / ${cocktail.mainIngredients[i][2]}%`;
        ingredientList.appendChild(ingredientListItem);
    }
    for(let i = 0; i < cocktail.extraIngredients.length; i++){
        const ingredientListItem = document.createElement("h4");
        ingredientListItem.classList.add("ingredientListItem");
        ingredientListItem.innerHTML = cocktail.extraIngredients[i];
        ingredientList.appendChild(ingredientListItem);
    }
};
let cocktails, cocktails2;
fetch("http://localhost:3000/cocktails").then((res)=>res.json()).then((data)=>{
    cocktails = data[0];
    cocktails2 = data[1];
});
//SEARCH A DRINK
searchIcon.addEventListener("click", async ()=>{
    const searchString = searchInput.value;
    const allCocktails = cocktails.concat(cocktails2);
    const searchOptions = {
        keys: [
            "name"
        ]
    };
    const fuse = new (0, _fuseJsDefault.default)(allCocktails, searchOptions), result = fuse.search(searchString), foundCocktail = result[0].item;
    document.querySelector(".menuItemPicked")?.classList.remove("menuItemPicked");
    setCocktail(foundCocktail);
});

},{"fuse.js":"4xnao","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xnao":[function(require,module,exports) {
/**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Fuse);
function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
    return value == null ? "" : baseToString(value);
}
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number";
}
// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
    return typeof value === "object";
}
// Checks if `value` is object-like.
function isObjectLike(value) {
    return isObject(value) && value !== null;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isBlank(value) {
    return !value.trim().length;
}
// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
    return value == null ? value === undefined ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key)=>`Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max)=>`Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name)=>`Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key)=>`Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
    constructor(keys){
        this._keys = [];
        this._keyMap = {};
        let totalWeight = 0;
        keys.forEach((key)=>{
            let obj = createKey(key);
            totalWeight += obj.weight;
            this._keys.push(obj);
            this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
        });
        // Normalize weights so that their sum is equal to 1
        this._keys.forEach((key)=>{
            key.weight /= totalWeight;
        });
    }
    get(keyId) {
        return this._keyMap[keyId];
    }
    keys() {
        return this._keys;
    }
    toJSON() {
        return JSON.stringify(this._keys);
    }
}
function createKey(key) {
    let path = null;
    let id = null;
    let src = null;
    let weight = 1;
    let getFn = null;
    if (isString(key) || isArray(key)) {
        src = key;
        path = createKeyPath(key);
        id = createKeyId(key);
    } else {
        if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
        const name = key.name;
        src = name;
        if (hasOwn.call(key, "weight")) {
            weight = key.weight;
            if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
        path = createKeyPath(name);
        id = createKeyId(name);
        getFn = key.getFn;
    }
    return {
        path,
        id,
        weight,
        src,
        getFn
    };
}
function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj, path, index)=>{
        if (!isDefined(obj)) return;
        if (!path[index]) // If there's no path left, we've arrived at the object we care about.
        list.push(obj);
        else {
            let key = path[index];
            const value = obj[key];
            if (!isDefined(value)) return;
            // If we're at the last value in the path, and if it's a string/number/bool,
            // add it to the list
            if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value));
            else if (isArray(value)) {
                arr = true;
                // Search each item in the array.
                for(let i = 0, len = value.length; i < len; i += 1)deepGet(value[i], path, index + 1);
            } else if (path.length) // An object. Recurse further.
            deepGet(value, path, index + 1);
        }
    };
    // Backwards compatibility (since path used to be a string)
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
}
const MatchOptions = {
    // Whether the matches should be included in the result set. When `true`, each record in the result
    // set will include the indices of the matched characters.
    // These can consequently be used for highlighting purposes.
    includeMatches: false,
    // When `true`, the matching function will continue to the end of a search pattern even if
    // a perfect match has already been located in the string.
    findAllMatches: false,
    // Minimum number of characters that must be matched before a result is considered a match
    minMatchCharLength: 1
};
const BasicOptions = {
    // When `true`, the algorithm continues searching to the end of the input even if a perfect
    // match is found before the end of the same input.
    isCaseSensitive: false,
    // When true, the matching function will continue to the end of a search pattern even if
    includeScore: false,
    // List of properties that will be searched. This also supports nested properties.
    keys: [],
    // Whether to sort the result list, by score
    shouldSort: true,
    // Default sort function: sort by ascending score, ascending index
    sortFn: (a, b)=>a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
const FuzzyOptions = {
    // Approximately where in the text is the pattern expected to be found?
    location: 0,
    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
    // (of both letters and location), a threshold of '1.0' would match anything.
    threshold: 0.6,
    // Determines how close the match must be to the fuzzy location (specified above).
    // An exact letter match which is 'distance' characters away from the fuzzy location
    // would score as a complete mismatch. A distance of '0' requires the match be at
    // the exact location specified, a threshold of '1000' would require a perfect match
    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    distance: 100
};
const AdvancedOptions = {
    // When `true`, it enables the use of unix-like search commands
    useExtendedSearch: false,
    // The get function to use when fetching an object's properties.
    // The default will search nested paths *ie foo.bar.baz*
    getFn: get,
    // When `true`, search will ignore `location` and `distance`, so it won't matter
    // where in the string the pattern appears.
    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
    ignoreLocation: false,
    // When `true`, the calculation for the relevance score (used for sorting) will
    // ignore the field-length norm.
    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
    ignoreFieldNorm: false,
    // The weight to determine how much field length norm effects scoring.
    fieldNormWeight: 1
};
var Config = {
    ...BasicOptions,
    ...MatchOptions,
    ...FuzzyOptions,
    ...AdvancedOptions
};
const SPACE = /[^ ]+/g;
// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
    const cache = new Map();
    const m = Math.pow(10, mantissa);
    return {
        get (value) {
            const numTokens = value.match(SPACE).length;
            if (cache.has(numTokens)) return cache.get(numTokens);
            // Default function is 1/sqrt(x), weight makes that variable
            const norm = 1 / Math.pow(numTokens, 0.5 * weight);
            // In place of `toFixed(mantissa)`, for faster computation
            const n = parseFloat(Math.round(norm * m) / m);
            cache.set(numTokens, n);
            return n;
        },
        clear () {
            cache.clear();
        }
    };
}
class FuseIndex {
    constructor({ getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}){
        this.norm = norm(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
    }
    setSources(docs = []) {
        this.docs = docs;
    }
    setIndexRecords(records = []) {
        this.records = records;
    }
    setKeys(keys = []) {
        this.keys = keys;
        this._keysMap = {};
        keys.forEach((key, idx)=>{
            this._keysMap[key.id] = idx;
        });
    }
    create() {
        if (this.isCreated || !this.docs.length) return;
        this.isCreated = true;
        // List is Array<String>
        if (isString(this.docs[0])) this.docs.forEach((doc, docIndex)=>{
            this._addString(doc, docIndex);
        });
        else // List is Array<Object>
        this.docs.forEach((doc, docIndex)=>{
            this._addObject(doc, docIndex);
        });
        this.norm.clear();
    }
    // Adds a doc to the end of the index
    add(doc) {
        const idx = this.size();
        if (isString(doc)) this._addString(doc, idx);
        else this._addObject(doc, idx);
    }
    // Removes the doc at the specified index of the index
    removeAt(idx) {
        this.records.splice(idx, 1);
        // Change ref index of every subsquent doc
        for(let i = idx, len = this.size(); i < len; i += 1)this.records[i].i -= 1;
    }
    getValueForItemAtKeyId(item, keyId) {
        return item[this._keysMap[keyId]];
    }
    size() {
        return this.records.length;
    }
    _addString(doc, docIndex) {
        if (!isDefined(doc) || isBlank(doc)) return;
        let record = {
            v: doc,
            i: docIndex,
            n: this.norm.get(doc)
        };
        this.records.push(record);
    }
    _addObject(doc, docIndex) {
        let record = {
            i: docIndex,
            $: {}
        };
        // Iterate over every key (i.e, path), and fetch the value at that key
        this.keys.forEach((key, keyIndex)=>{
            let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
            if (!isDefined(value)) return;
            if (isArray(value)) {
                let subRecords = [];
                const stack = [
                    {
                        nestedArrIndex: -1,
                        value
                    }
                ];
                while(stack.length){
                    const { nestedArrIndex, value } = stack.pop();
                    if (!isDefined(value)) continue;
                    if (isString(value) && !isBlank(value)) {
                        let subRecord = {
                            v: value,
                            i: nestedArrIndex,
                            n: this.norm.get(value)
                        };
                        subRecords.push(subRecord);
                    } else if (isArray(value)) value.forEach((item, k)=>{
                        stack.push({
                            nestedArrIndex: k,
                            value: item
                        });
                    });
                }
                record.$[keyIndex] = subRecords;
            } else if (isString(value) && !isBlank(value)) {
                let subRecord = {
                    v: value,
                    n: this.norm.get(value)
                };
                record.$[keyIndex] = subRecord;
            }
        });
        this.records.push(record);
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        };
    }
}
function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
    });
    myIndex.setKeys(keys.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
}
function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
    const { keys, records } = data;
    const myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
    });
    myIndex.setKeys(keys);
    myIndex.setIndexRecords(records);
    return myIndex;
}
function computeScore$1(pattern, { errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) return accuracy;
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
    return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i = 0;
    for(let len = matchmask.length; i < len; i += 1){
        let match = matchmask[i];
        if (match && start === -1) start = i;
        else if (!match && start !== -1) {
            end = i - 1;
            if (end - start + 1 >= minMatchCharLength) indices.push([
                start,
                end
            ]);
            start = -1;
        }
    }
    // (i-1 - start) + 1 => i - start
    if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([
        start,
        i - 1
    ]);
    return indices;
}
// Machine word size
const MAX_BITS = 32;
function search(text, pattern, patternAlphabet, { location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation } = {}) {
    if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    const patternLen = pattern.length;
    // Set starting location at beginning text and initialize the alphabet.
    const textLen = text.length;
    // Handle the case when location > text.length
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    // Highest score beyond which we give up.
    let currentThreshold = threshold;
    // Is there a nearby exact match? (speedup)
    let bestLocation = expectedLocation;
    // Performance: only computer matches when the minMatchCharLength > 1
    // OR if `includeMatches` is true.
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    // A mask of the matches, used for building the indices
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    // Get all exact matches, here for speed up
    while((index = text.indexOf(pattern, bestLocation)) > -1){
        let score = computeScore$1(pattern, {
            currentLocation: index,
            expectedLocation,
            distance,
            ignoreLocation
        });
        currentThreshold = Math.min(score, currentThreshold);
        bestLocation = index + patternLen;
        if (computeMatches) {
            let i = 0;
            while(i < patternLen){
                matchMask[index + i] = 1;
                i += 1;
            }
        }
    }
    // Reset the best location
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for(let i = 0; i < patternLen; i += 1){
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from the match location we can stray
        // at this error level.
        let binMin = 0;
        let binMid = binMax;
        while(binMin < binMid){
            const score = computeScore$1(pattern, {
                errors: i,
                currentLocation: expectedLocation + binMid,
                expectedLocation,
                distance,
                ignoreLocation
            });
            if (score <= currentThreshold) binMin = binMid;
            else binMax = binMid;
            binMid = Math.floor((binMax - binMin) / 2 + binMin);
        }
        // Use the result from this iteration as the maximum for the next.
        binMax = binMid;
        let start = Math.max(1, expectedLocation - binMid + 1);
        let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
        // Initialize the bit array
        let bitArr = Array(finish + 2);
        bitArr[finish + 1] = (1 << i) - 1;
        for(let j = finish; j >= start; j -= 1){
            let currentLocation = j - 1;
            let charMatch = patternAlphabet[text.charAt(currentLocation)];
            if (computeMatches) // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
            matchMask[currentLocation] = +!!charMatch;
            // First pass: exact match
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
            // Subsequent passes: fuzzy match
            if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            if (bitArr[j] & mask) {
                finalScore = computeScore$1(pattern, {
                    errors: i,
                    currentLocation,
                    expectedLocation,
                    distance,
                    ignoreLocation
                });
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (finalScore <= currentThreshold) {
                    // Indeed it is
                    currentThreshold = finalScore;
                    bestLocation = currentLocation;
                    // Already passed `loc`, downhill from here on in.
                    if (bestLocation <= expectedLocation) break;
                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        const score = computeScore$1(pattern, {
            errors: i + 1,
            currentLocation: expectedLocation,
            expectedLocation,
            distance,
            ignoreLocation
        });
        if (score > currentThreshold) break;
        lastBitArr = bitArr;
    }
    const result = {
        isMatch: bestLocation >= 0,
        // Count exact matches (those with a score of 0) to be "almost" exact
        score: Math.max(0.001, finalScore)
    };
    if (computeMatches) {
        const indices = convertMaskToIndices(matchMask, minMatchCharLength);
        if (!indices.length) result.isMatch = false;
        else if (includeMatches) result.indices = indices;
    }
    return result;
}
function createPatternAlphabet(pattern) {
    let mask = {};
    for(let i = 0, len = pattern.length; i < len; i += 1){
        const char = pattern.charAt(i);
        mask[char] = (mask[char] || 0) | 1 << len - i - 1;
    }
    return mask;
}
class BitapSearch {
    constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation } = {}){
        this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) return;
        const addChunk = (pattern, startIndex)=>{
            this.chunks.push({
                pattern,
                alphabet: createPatternAlphabet(pattern),
                startIndex
            });
        };
        const len = this.pattern.length;
        if (len > MAX_BITS) {
            let i = 0;
            const remainder = len % MAX_BITS;
            const end = len - remainder;
            while(i < end){
                addChunk(this.pattern.substr(i, MAX_BITS), i);
                i += MAX_BITS;
            }
            if (remainder) {
                const startIndex = len - MAX_BITS;
                addChunk(this.pattern.substr(startIndex), startIndex);
            }
        } else addChunk(this.pattern, 0);
    }
    searchIn(text) {
        const { isCaseSensitive, includeMatches } = this.options;
        if (!isCaseSensitive) text = text.toLowerCase();
        // Exact match
        if (this.pattern === text) {
            let result = {
                isMatch: true,
                score: 0
            };
            if (includeMatches) result.indices = [
                [
                    0,
                    text.length - 1
                ]
            ];
            return result;
        }
        // Otherwise, use Bitap algorithm
        const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
        let allIndices = [];
        let totalScore = 0;
        let hasMatches = false;
        this.chunks.forEach(({ pattern, alphabet, startIndex })=>{
            const { isMatch, score, indices } = search(text, pattern, alphabet, {
                location: location + startIndex,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                includeMatches,
                ignoreLocation
            });
            if (isMatch) hasMatches = true;
            totalScore += score;
            if (isMatch && indices) allIndices = [
                ...allIndices,
                ...indices
            ];
        });
        let result = {
            isMatch: hasMatches,
            score: hasMatches ? totalScore / this.chunks.length : 1
        };
        if (hasMatches && includeMatches) result.indices = allIndices;
        return result;
    }
}
class BaseMatch {
    constructor(pattern){
        this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
    }
    search() {}
}
function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
}
// Token: 'file
class ExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "exact";
    }
    static get multiRegex() {
        return /^="(.*)"$/;
    }
    static get singleRegex() {
        return /^=(.*)$/;
    }
    search(text) {
        const isMatch = text === this.pattern;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
// Token: !fire
class InverseExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "inverse-exact";
    }
    static get multiRegex() {
        return /^!"(.*)"$/;
    }
    static get singleRegex() {
        return /^!(.*)$/;
    }
    search(text) {
        const index = text.indexOf(this.pattern);
        const isMatch = index === -1;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
// Token: ^file
class PrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "prefix-exact";
    }
    static get multiRegex() {
        return /^\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^\^(.*)$/;
    }
    search(text) {
        const isMatch = text.startsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                this.pattern.length - 1
            ]
        };
    }
}
// Token: !^fire
class InversePrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "inverse-prefix-exact";
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
        return /^!\^(.*)$/;
    }
    search(text) {
        const isMatch = !text.startsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
// Token: .file$
class SuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "suffix-exact";
    }
    static get multiRegex() {
        return /^"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^(.*)\$$/;
    }
    search(text) {
        const isMatch = text.endsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                text.length - this.pattern.length,
                text.length - 1
            ]
        };
    }
}
// Token: !.file$
class InverseSuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "inverse-suffix-exact";
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
        return /^!(.*)\$$/;
    }
    search(text) {
        const isMatch = !text.endsWith(this.pattern);
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [
                0,
                text.length - 1
            ]
        };
    }
}
class FuzzyMatch extends BaseMatch {
    constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation } = {}){
        super(pattern);
        this._bitapSearch = new BitapSearch(pattern, {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
        });
    }
    static get type() {
        return "fuzzy";
    }
    static get multiRegex() {
        return /^"(.*)"$/;
    }
    static get singleRegex() {
        return /^(.*)$/;
    }
    search(text) {
        return this._bitapSearch.searchIn(text);
    }
}
// Token: 'file
class IncludeMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return "include";
    }
    static get multiRegex() {
        return /^'"(.*)"$/;
    }
    static get singleRegex() {
        return /^'(.*)$/;
    }
    search(text) {
        let location = 0;
        let index;
        const indices = [];
        const patternLen = this.pattern.length;
        // Get all exact matches
        while((index = text.indexOf(this.pattern, location)) > -1){
            location = index + patternLen;
            indices.push([
                index,
                location - 1
            ]);
        }
        const isMatch = !!indices.length;
        return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices
        };
    }
}
// ❗Order is important. DO NOT CHANGE.
const searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
];
const searchersLen = searchers.length;
// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = "|";
// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item)=>{
        let query = item.trim().split(SPACE_RE).filter((item)=>item && !!item.trim());
        let results = [];
        for(let i = 0, len = query.length; i < len; i += 1){
            const queryItem = query[i];
            // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
            let found = false;
            let idx = -1;
            while(!found && ++idx < searchersLen){
                const searcher = searchers[idx];
                let token = searcher.isMultiMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    found = true;
                }
            }
            if (found) continue;
            // 2. Handle single query matches (i.e, once that are *not* quoted)
            idx = -1;
            while(++idx < searchersLen){
                const searcher = searchers[idx];
                let token = searcher.isSingleMatch(queryItem);
                if (token) {
                    results.push(new searcher(token, options));
                    break;
                }
            }
        }
        return results;
    });
}
// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([
    FuzzyMatch.type,
    IncludeMatch.type
]);
/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */ class ExtendedSearch {
    constructor(pattern, { isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance } = {}){
        this.query = null;
        this.options = {
            isCaseSensitive,
            includeMatches,
            minMatchCharLength,
            findAllMatches,
            ignoreLocation,
            location,
            threshold,
            distance
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
        return options.useExtendedSearch;
    }
    searchIn(text) {
        const query = this.query;
        if (!query) return {
            isMatch: false,
            score: 1
        };
        const { includeMatches, isCaseSensitive } = this.options;
        text = isCaseSensitive ? text : text.toLowerCase();
        let numMatches = 0;
        let allIndices = [];
        let totalScore = 0;
        // ORs
        for(let i = 0, qLen = query.length; i < qLen; i += 1){
            const searchers = query[i];
            // Reset indices
            allIndices.length = 0;
            numMatches = 0;
            // ANDs
            for(let j = 0, pLen = searchers.length; j < pLen; j += 1){
                const searcher = searchers[j];
                const { isMatch, indices, score } = searcher.search(text);
                if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                        const type = searcher.constructor.type;
                        if (MultiMatchSet.has(type)) allIndices = [
                            ...allIndices,
                            ...indices
                        ];
                        else allIndices.push(indices);
                    }
                } else {
                    totalScore = 0;
                    numMatches = 0;
                    allIndices.length = 0;
                    break;
                }
            }
            // OR condition, so if TRUE, return
            if (numMatches) {
                let result = {
                    isMatch: true,
                    score: totalScore / numMatches
                };
                if (includeMatches) result.indices = allIndices;
                return result;
            }
        }
        // Nothing was matched
        return {
            isMatch: false,
            score: 1
        };
    }
}
const registeredSearchers = [];
function register(...args) {
    registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
    for(let i = 0, len = registeredSearchers.length; i < len; i += 1){
        let searcherClass = registeredSearchers[i];
        if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
    }
    return new BitapSearch(pattern, options);
}
const LogicalOperator = {
    AND: "$and",
    OR: "$or"
};
const KeyType = {
    PATH: "$path",
    PATTERN: "$val"
};
const isExpression = (query)=>!!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
const isPath = (query)=>!!query[KeyType.PATH];
const isLeaf = (query)=>!isArray(query) && isObject(query) && !isExpression(query);
const convertToExplicit = (query)=>({
        [LogicalOperator.AND]: Object.keys(query).map((key)=>({
                [key]: query[key]
            }))
    });
// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
    const next = (query)=>{
        let keys = Object.keys(query);
        const isQueryPath = isPath(query);
        if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
        if (isLeaf(query)) {
            const key = isQueryPath ? query[KeyType.PATH] : keys[0];
            const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
            if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
            const obj = {
                keyId: createKeyId(key),
                pattern
            };
            if (auto) obj.searcher = createSearcher(pattern, options);
            return obj;
        }
        let node = {
            children: [],
            operator: keys[0]
        };
        keys.forEach((key)=>{
            const value = query[key];
            if (isArray(value)) value.forEach((item)=>{
                node.children.push(next(item));
            });
        });
        return node;
    };
    if (!isExpression(query)) query = convertToExplicit(query);
    return next(query);
}
// Practical scoring function
function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result)=>{
        let totalScore = 1;
        result.matches.forEach(({ key, norm, score })=>{
            const weight = key ? key.weight : null;
            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
        });
        result.score = totalScore;
    });
}
function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) return;
    matches.forEach((match)=>{
        if (!isDefined(match.indices) || !match.indices.length) return;
        const { indices, value } = match;
        let obj = {
            indices,
            value
        };
        if (match.key) obj.key = match.key.src;
        if (match.idx > -1) obj.refIndex = match.idx;
        data.matches.push(obj);
    });
}
function transformScore(result, data) {
    data.score = result.score;
}
function format(results, docs, { includeMatches = Config.includeMatches, includeScore = Config.includeScore } = {}) {
    const transformers = [];
    if (includeMatches) transformers.push(transformMatches);
    if (includeScore) transformers.push(transformScore);
    return results.map((result)=>{
        const { idx } = result;
        const data = {
            item: docs[idx],
            refIndex: idx
        };
        if (transformers.length) transformers.forEach((transformer)=>{
            transformer(result, data);
        });
        return data;
    });
}
class Fuse {
    constructor(docs, options = {}, index){
        this.options = {
            ...Config,
            ...options
        };
        this.options.useExtendedSearch;
        this._keyStore = new KeyStore(this.options.keys);
        this.setCollection(docs, index);
    }
    setCollection(docs, index) {
        this._docs = docs;
        if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
        this._myIndex = index || createIndex(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        });
    }
    add(doc) {
        if (!isDefined(doc)) return;
        this._docs.push(doc);
        this._myIndex.add(doc);
    }
    remove(predicate = ()=>false) {
        const results = [];
        for(let i = 0, len = this._docs.length; i < len; i += 1){
            const doc = this._docs[i];
            if (predicate(doc, i)) {
                this.removeAt(i);
                i -= 1;
                len -= 1;
                results.push(doc);
            }
        }
        return results;
    }
    removeAt(idx) {
        this._docs.splice(idx, 1);
        this._myIndex.removeAt(idx);
    }
    getIndex() {
        return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
        const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
        let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
        computeScore(results, {
            ignoreFieldNorm
        });
        if (shouldSort) results.sort(sortFn);
        if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
        return format(results, this._docs, {
            includeMatches,
            includeScore
        });
    }
    _searchStringList(query) {
        const searcher = createSearcher(query, this.options);
        const { records } = this._myIndex;
        const results = [];
        // Iterate over every string in the index
        records.forEach(({ v: text, i: idx, n: norm })=>{
            if (!isDefined(text)) return;
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) results.push({
                item: text,
                idx,
                matches: [
                    {
                        score,
                        value: text,
                        norm,
                        indices
                    }
                ]
            });
        });
        return results;
    }
    _searchLogical(query) {
        const expression = parse(query, this.options);
        const evaluate = (node, item, idx)=>{
            if (!node.children) {
                const { keyId, searcher } = node;
                const matches = this._findMatches({
                    key: this._keyStore.get(keyId),
                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                });
                if (matches && matches.length) return [
                    {
                        idx,
                        item,
                        matches
                    }
                ];
                return [];
            }
            const res = [];
            for(let i = 0, len = node.children.length; i < len; i += 1){
                const child = node.children[i];
                const result = evaluate(child, item, idx);
                if (result.length) res.push(...result);
                else if (node.operator === LogicalOperator.AND) return [];
            }
            return res;
        };
        const records = this._myIndex.records;
        const resultMap = {};
        const results = [];
        records.forEach(({ $: item, i: idx })=>{
            if (isDefined(item)) {
                let expResults = evaluate(expression, item, idx);
                if (expResults.length) {
                    // Dedupe when adding
                    if (!resultMap[idx]) {
                        resultMap[idx] = {
                            idx,
                            item,
                            matches: []
                        };
                        results.push(resultMap[idx]);
                    }
                    expResults.forEach(({ matches })=>{
                        resultMap[idx].matches.push(...matches);
                    });
                }
            }
        });
        return results;
    }
    _searchObjectList(query) {
        const searcher = createSearcher(query, this.options);
        const { keys, records } = this._myIndex;
        const results = [];
        // List is Array<Object>
        records.forEach(({ $: item, i: idx })=>{
            if (!isDefined(item)) return;
            let matches = [];
            // Iterate over every key (i.e, path), and fetch the value at that key
            keys.forEach((key, keyIndex)=>{
                matches.push(...this._findMatches({
                    key,
                    value: item[keyIndex],
                    searcher
                }));
            });
            if (matches.length) results.push({
                idx,
                item,
                matches
            });
        });
        return results;
    }
    _findMatches({ key, value, searcher }) {
        if (!isDefined(value)) return [];
        let matches = [];
        if (isArray(value)) value.forEach(({ v: text, i: idx, n: norm })=>{
            if (!isDefined(text)) return;
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) matches.push({
                score,
                key,
                value: text,
                idx,
                norm,
                indices
            });
        });
        else {
            const { v: text, n: norm } = value;
            const { isMatch, score, indices } = searcher.searchIn(text);
            if (isMatch) matches.push({
                score,
                key,
                value: text,
                norm,
                indices
            });
        }
        return matches;
    }
}
Fuse.version = "6.6.2";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.parseQuery = parse;
register(ExtendedSearch);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["7QhWD","7SwCM"], "7SwCM", "parcelRequire4dac")

//# sourceMappingURL=index.f18de3a7.js.map
