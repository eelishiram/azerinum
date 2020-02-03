var assets = require('./assets');
function fullConversion(value) {
    if ((typeof value === "number") && Math.floor(value) === value)
        value = value.toString();
    let number = value.split('').join('');
    let word = '';
    let step = 0;
    let len = number.length
    for(var i = 0; i < (3 - len % 3) % 3; ++ i)
        number = '0' + number;
    len = number.length
    let numSections = ~~(len / 3)
    for(var i = 0; i < numSections; ++ i) {
        let commaSection = number.substring(i * 3, i * 3 + 3);
        let stage = numSections - i - 1;
        let currentSection = commaConversion(commaSection);

        if(currentSection == '')
            continue;
        
        if(stage == 1 && currentSection.trim() == assets.BIR) 
            currentSection = '';

        word += currentSection + assets.higher[stage];
    }
    if(word == '')
        return assets.SIFIR
    return word;
}

function commaConversion(section){
    let word = '';
    for (var i = 0; i < section.length; i++) {
        let number = section[i];
        if (i % 3 == 2) {
            word = word + assets.teklik[number];
        } else if (i % 3 == 1) {
            word = word + assets.onluq[number];
        } else {
            let tek = (number == 1) ? '' : assets.teklik[number];
            let suffix = (number == 0) ? '' : assets.YUZ;
            word = tek + suffix + word; 
        }
    }
    return word;
}

function getUnitSafeSection(section, counter){
    return counter == 1 && section.trim() == BIR ? '' : section;
}


exports.numToAz = fullConversion;