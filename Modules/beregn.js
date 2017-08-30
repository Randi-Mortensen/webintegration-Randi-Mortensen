// module.exports = {
//     sum: function (tal1, tal2) {
//         return tal1 + tal2;
//     },
//     sub: function (tal1, tal2) {
//         return tal1 - tal2;

//     }
// }

// module.exports = {
//     BMI: function (weight, height) {
//         var result = "";
//         var bmi = weight / (height * height) * 10000;
//         if (bmi < 20) {
//             result = "undervægtig";
//         }
//         else if (bmi < 24) {
//             result = "normalvægtig";
//         }

//         return result + " (bmi: " + bmi + ")";
//     }
// }

var format = require('date-format');

function sub(tal1, tal2) {
    return tal1 - tal2;
}

module.exports = {
    sum: function (tal1, tal2) {
        return tal1 + tal2;
    },
    sub,
    dato: format.asString('hh:mm:ss.SSS', new Date()),
};