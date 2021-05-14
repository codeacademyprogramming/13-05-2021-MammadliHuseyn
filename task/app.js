const reservedKeys = [
    ones = ["sıfır", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"],
    tens = ["empty", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"],
    hundreds = "yüz",
    thousands = "min",
    millions = "milyon"
]

const getAzeTranslationOfNumber = (number) => {
    if (number === 0)
        return reservedKeys[0][0];
    let numArr = number.toString().split('').reverse();
    let revArrGroup = groupArr(numArr, 3);
    let output = ``;


    revArrGroup.forEach((arr, i) => {
        if (i > 0)
            output += ` ${reservedKeys[i + 2]} `;

        arr.forEach((digit, j) => {
            if (j > 1 && j < 4) {
                if (digit == '1') {
                    output += ` ${reservedKeys[j]} `;
                }
                else {
                    output += `${reservedKeys[j]} ${reservedKeys[0][digit]} `;
                }
            }
            else if (digit != 0)
                output += ` ${reservedKeys[j][digit]} `;
        });
    });

    output = output.trim().split(' ').reverse().join(" ");
    output.trim();

    output = output.replace(" empty ", "");
    output = output.replace("bir  min", "min");
    return output;
}

function groupArr(data, n) {
    let group = [];
    for (let i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
    while (group[0].lastIndexOf('0') != -1) {
        if (group[0].lastIndexOf('0') == group[0].length - 1)
            group[0].pop();
        else
            break;
    }
    if (group[1])
        while (group[1].lastIndexOf('0') != -1) {
            if (group[1].lastIndexOf('0') == group[1].length - 1)
                group[1].pop();
            else
                break;
        }
    return group;
}

console.log(getAzeTranslationOfNumber(105));