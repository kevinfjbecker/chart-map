function castKeyValues(o) {
  var data = JSON.parse(JSON.stringify(o));
  Object.keys(data).forEach(function(key){
    if(isStringNumeric(data[key])) {
      data[key] = stringToNumber(data[key]);
    }
    if(isStringBoolean(data[key])) {
      data[key] = stringToBoolean(data[key]);
    }
  });
  return data;
}

function isStringBoolean(s) {
  return s === "true" || s === "false";
}

function stringToBoolean(s) {
  return s === "true";
}

function isStringNumeric(s) {
  return !isNaN(s);
}

function stringToNumber(s) {
  return +s;
}
