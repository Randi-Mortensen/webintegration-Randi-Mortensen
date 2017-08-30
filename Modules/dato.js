var format = require('date-format');
function sub(tal1, tal2) { return tal1 - tal2; }

module.exports = {
    sum: function (tal1, tal2) {
        return tal1 + tal2;
    },
    sub,
    dato: format.asString('hh:mm:ss dd-MM-yyyy', new Date())
};