module.exports = function toReadable(number) {
    if (number == 0) {
        return "zero"
    }
    let i = "";
    let y = (number - (number % 100)) / 100;
    if (number >= 100) {
        if (y == 1) {
            i = "one"
        } else if (y == 2) {
            i = "two"
        } else if (y == 3) {
            i = "three"
        } else if (y == 4) {
            i = "four"
        } else if (y == 5) {
            i = "five"
        } else if (y == 6) {
            i = "six"
        } else if (y == 7) {
            i = "seven"
        } else if (y == 8) {
            i = "eight"
        } else if (y == 9) {
            i = "nine"
        }
        i = i + " hundred ";
    }
    number = number - (y * 100);
    let z = (number - (number % 10)) / 10;
    if (number >= 20) {
        switch (z) {
            case 2: i = i + "twenty"; break;
            case 3: i = i + "thirty"; break;
            case 4: i = i + "forty"; break;
            case 5: i = i + "fifty"; break;
            case 6: i = i + "sixty"; break;
            case 7: i = i + "seventy"; break;
            case 8: i = i + "eighty"; break;
            case 9: i = i + "ninety"; break;
        }
        i = i + " ";
    } else if (number >= 10) {
        let t = [
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
        ]
        i = i + t[number - 10];
    }
    if (number >= 20 && number % 10 > 0 || number < 10) {
        i = i + [
            "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
        ][number % 10]
    }
    return i.trim();



}
