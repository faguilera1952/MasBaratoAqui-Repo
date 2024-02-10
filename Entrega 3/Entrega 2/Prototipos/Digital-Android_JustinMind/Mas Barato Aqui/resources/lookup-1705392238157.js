(function(window, undefined) {
  var dictionary = {
    "c52277cc-4d80-4f49-9584-bdd22603227c": "Buscar_producto_inicio",
    "5eb37c7f-4468-421f-96ea-9e0c8f06cb71": "Agregar_Producto",
    "f5550d5d-e708-4b5d-8e66-6f28073a9883": "Perfil_usuario",
    "419b63bc-b2cb-4801-8050-d01d2828ed2b": "Buscar_producto_resultado",
    "81f7013e-8be0-45fb-94e7-ad1c95cc491c": "Añadir_Reseña",
    "a672f0d8-552a-4e95-b77a-14a5e8ed7a85": "Gestionar_Producto",
    "000e99cf-ae24-497c-8865-cbb270a9bdc4": "Modificar_Producto",
    "706fd6d0-bc31-4c27-a614-f0847c512882": "Ver_Tienda",
    "3115093c-65cd-47f3-bd03-01878a64817d": "Producto",
    "2bd09be0-5b2b-4042-839e-358932ffb0c2": "Eliminar_Producto",
    "82f8fc53-d3a0-42a1-bba5-ee9169533251": "Login",
    "0f908da4-a879-4440-a8e4-73cf4c05fe8f": "Menu",
    "777bd5c3-715f-413b-b6cd-8c7546228cca": "Ayuda",
    "04385b1e-dc03-45fe-ac56-315d901cc940": "Ofertas",
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