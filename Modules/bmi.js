module.exports = {
    BMI: function (weight, height) {
        var result = "";
        var bmi = weight / (height * height) * 10000;
        if (bmi < 20) {
            result = "undervægtig";
        }
        else if (bmi < 24) {
            result = "normalvægtig";
        }

        return result + " (bmi: " + bmi + ")";
    }
}