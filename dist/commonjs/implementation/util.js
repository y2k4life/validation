"use strict";
function isString(value) {
    return toString.call(value) === '[object String]';
}
exports.isString = isString;
