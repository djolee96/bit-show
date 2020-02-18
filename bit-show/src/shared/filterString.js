function filterString(string, ArrayOfText/*array of strings to remove from string*/) {
    const stringLength = string.length
    let newString = ""

    for (let i = 0; i < stringLength; i++) {
        let iterationString = string
        for (let index = 0; index < ArrayOfText.length; index++) {
            if (string.indexOf(ArrayOfText[index]) === 0) {
                iterationString = iterationString.substr(ArrayOfText[index].length, stringLength)
            }
            else if (string.indexOf(ArrayOfText[index]) != -1) {
                iterationString = iterationString.substr(0, iterationString.indexOf(ArrayOfText[index])) + iterationString.substr((iterationString.indexOf(ArrayOfText[index]) + ArrayOfText[index].length), stringLength)
            }
            else {
                iterationString = iterationString
            }
        }
        newString = iterationString
    }
    return newString

}
export default filterString