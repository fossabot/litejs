let $core = {
    isArray: function (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    },
    isBoolean: function (value) {
        return value === !!value
    },
    isDate: function (value) {

    },
    isFunction: function (value) {

    },
    isNumber: function (value) {
        return typeof value === 'number' && isFinite(value);
    },
    isObject: function (value) {

    },
    isString: function (value) {
        return value === value + ''
    },
    extend: function (dist, src) {

    },
    copy: function (value) {
        return JSON.parse(JSON.stringify(value));
    },
    hello: function () {
        console.log('hello world');
    }
};
export default $core;