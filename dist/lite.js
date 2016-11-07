/*lite js*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Lite = factory());
}(this, (function () { 'use strict';

var $core = {
    isArray: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },
    isNumber: function (obj) {
        return typeof obj === 'number' && isFinite(obj);
    },
    isString: function (obj) {
        return obj === obj + ''
    },
    isBoolean: function (obj) {
        return obj === !!obj
    },
    date: {
        add: function(){},
        format: function(){}
    },
    extend: function(){

    },
    hello: function(){
        console.log('hello world');
    }
};

return $core;

})));
