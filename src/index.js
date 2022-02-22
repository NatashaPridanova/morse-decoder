const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arrBinLetters = [];
    let arrDecoded = [];

    for (let i = 0; i < expr.length; i += 10) {
        arrBinLetters.push(expr.substring(i, i + 10));
    }

    arrBinLetters.forEach((item) => {
        if (item === '**********') { arrDecoded.push(' ') };

        let arrBinTwoChars = [];
        let arrMorse = [];

        for (let i = 0; i < item.length; i += 2) {
            arrBinTwoChars.push(item.substring(i, i + 2));
        }

        arrBinTwoChars.forEach((x) => {
            if (x === '10') { arrMorse.push('.') } else if (x === '11') { arrMorse.push('-') } else { arrMorse.push('') }
        });

        for (key in MORSE_TABLE) {
            if (arrMorse.join('') === key) { arrDecoded.push(MORSE_TABLE[key]); break; }
        }
    })
    return arrDecoded.join('');
}

module.exports = {
    decode
}