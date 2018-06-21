function mutateMyStrings(stringOne, stringTwo) {
    let a = stringOne.split('');
    let b = stringTwo.split('');
    let concatnation = stringOne.concat('\n');
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            a[i] = b[i];
            concatnation = concatnation.concat(`${a.join('')}\n`);
        }
    }
    return concatnation;
}