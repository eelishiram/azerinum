const BIR = 'bir';
const teklik = ['', BIR + ' ', 'iki ', 'uc ', 'dord ', 'besh ', 'alti ', 'yeddi ', 'sekkiz ', 'doqquz '];
const onluq = ['', 'on ', 'iyirmi ', 'otuz ', 'qirx ', 'elli ', 'altmish ', 'yetmish ', 'seksen ', 'doxsan '];
const higher = ['', 'min ', 'milyon ', 'milyard ', 'trilyon ', 'kattrilyon ', 'kentrilyon ', 'sekstilyon ', 'septilyon '];


function fullConversion(str) {
    let number = str.split('').reverse().join('');
    let word = '';
    let step = 0;
    while(number.length > 0){
        let distance = number.length > 3 ? 3 : number.length;
        let commaSection = number.substring(0, distance);

        let convertedCommaSection = commaConversion(commaSection);
        let safeCommaSection = step == 1 && convertedCommaSection.trim() == BIR ? '' : convertedCommaSection;
        let prefix = convertedCommaSection.trim().length == 0 ? '' : higher[step];

        word = safeCommaSection + prefix + word;

        number = number.substring(distance);
        step++;
    }
    return word.trim();
}

function commaConversion(section){
    let word = '';
    for (var i = 0; i < section.length; i++) {
        let number = section[i];
        if (i % 3 == 0) {
            word = teklik[number] + word;
        } else if (i % 3 == 1) {
            word = onluq[number] + word;
        } else {
            let tek = (number == 1) ? '' : teklik[number];
            let suffix = (number == 0) ? '' : 'yuz ';
            word = tek + suffix + word;
        }
    }
    return word;
}

function getUnitSafeSection(section, counter){
    return counter == 1 && section.trim() == BIR ? '' : section;
}


exports.numToAz = fullConversion;