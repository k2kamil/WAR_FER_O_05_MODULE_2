String.prototype.upperLower = function () {
    let currentText = this.split(" ");
    let newText = [];
​
    currentText.forEach(function (value) {
        let partialText = "";
​
        for (let i = 0; i < value.length; i++) {
            if (i % 2 == 0) {
                partialText += value.charAt(i).toUpperCase();
            } else {
                partialText += value.charAt(i).toLowerCase();
            }
        }
​
        newText.push(partialText);
    });
​
    return newText.join(" ");
}