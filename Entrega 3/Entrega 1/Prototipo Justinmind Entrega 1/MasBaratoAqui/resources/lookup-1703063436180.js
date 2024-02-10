(function(window, undefined) {
  var dictionary = {
    "eea6426b-e965-49b9-b7e5-f30ee9af3bae": "gestionar_producto",
    "29003b89-ea8d-4be4-b53e-fa631be19ffb": "ayuda",
    "986446cb-95fb-4658-98a6-a4c9e26c488d": "perfil_usuario",
    "d0b85296-d696-49c1-9a2f-50daf841474f": "reseñas",
    "2139e45b-c6f2-431c-8513-d4999926c5ed": "modificar_producto",
    "a95354ba-f227-4c63-88e5-261d64710693": "comparar_producto",
    "d5e917cc-e11b-4da9-bdd3-cce32d2b442a": "ver_tiendas",
    "f5557a5d-5e71-463a-ba0f-a47752085ad4": "menu",
    "4f216654-79c8-4d59-83d6-6555e197e731": "eliminar",
    "f25da46b-4e93-4b65-959a-3d3feafe09a6": "buscar_producto",
    "39a55690-a2e9-4b1f-b305-9b800d5a3763": "ofertas",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "login",
    "aa0d4191-b495-47c0-9900-93c8cb8645d6": "agregar_producto",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);