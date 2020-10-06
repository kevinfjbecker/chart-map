
// src: https://gist.github.com/dtomasi/9327f704398be8d8ff5d0ab560b95641

function camelToKebab(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}


function kebabToCamel(input) {
    return input.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
