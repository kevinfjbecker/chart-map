// src: https://stackoverflow.com/questions/4187032/get-list-of-data-attributes-using-javascript-jquery#5915585

function getDataAttributes(el) {
  var data = {};
  [].forEach.call(el.attributes, function (attr) {
    if (/^data-/.test(attr.name)) {
      var camelCaseName = attr.name.substr(5).replace(/-(.)/g, function ($0, $1) {
        return $1.toUpperCase();
      });
      data[camelCaseName] = attr.value;
    }
  });
  return data;
}
