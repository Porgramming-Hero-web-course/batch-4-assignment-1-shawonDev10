function countWordOccurrences(sentence: string, word: string): number {
    const removeSpecialCharacter = sentence.replace(/[^\w\s]/gi, '')
    const splitSentence: string[] = removeSpecialCharacter.toUpperCase().split(" ");
    const upperCaseWord: string = word.toUpperCase();
    let matchWords: number = 0;

    splitSentence.forEach(value => {
        if (value === upperCaseWord) {
            matchWords = matchWords + 1;
        };
    });
    return matchWords;
};