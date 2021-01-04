function findAllPermutations(str){
    if (str.length === '') return ''
    if (str.length === 1) return str

    let results = []

    for(let i = 0; i < str.length; i++){
        const currentChar = str[i]
        const remainingChars = str.slice(0, i) + str.slice(i + 1)

        for(let j = 0; j < findAllPermutations(remainingChars).length; j++){
            results.push(currentChar + findAllPermutations(remainingChars)[j])
        }
    }

    return results
}