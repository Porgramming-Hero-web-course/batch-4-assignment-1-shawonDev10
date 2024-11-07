function countWordOccurrences(sentence: string, word: string): number {
    const regexp = new RegExp(word, "gi");
    const finds = sentence.match(regexp);
    return finds?.length ?? 0;
};
