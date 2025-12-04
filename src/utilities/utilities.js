const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER = '0123456789';
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export function generatePassword(length, conditions) {
    let charPool = ''
    const confirmedChar = [];

    if (conditions['Include Uppercase Letters']) {
        charPool += UPPERCASE;
        confirmedChar.push(randomChar(UPPERCASE))
    }
    if (conditions['Include Lowercase Letters']) {
        charPool += LOWERCASE;
        confirmedChar.push(randomChar(LOWERCASE))
    }
    if (conditions['Include Numbers']) {
        charPool += NUMBER;
        confirmedChar.push(randomChar(NUMBER))
    }
    if (conditions['Include Symbols']) {
        charPool += SYMBOLS;
        confirmedChar.push(randomChar(SYMBOLS))
    }
    if(!(conditions['Include Symbols']||conditions['Include Symbols']||conditions['Include Lowercase Letters']||conditions['Include Uppercase Letters'])){
        charPool+=NUMBER;
        charPool+=LOWERCASE;
    }
    let unSuffledPassword = [...confirmedChar];
    for (let i = 0; i < length - confirmedChar.length; i++) {
        unSuffledPassword.push(randomChar(charPool))
    }
    return sufflePassword(unSuffledPassword)

}

function sufflePassword(unSuffledPassword) {
    unSuffledPassword
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    return unSuffledPassword
}

function randomChar(str) {
    const idx = Math.floor(Math.random() * str.length)
    return str[idx]
}