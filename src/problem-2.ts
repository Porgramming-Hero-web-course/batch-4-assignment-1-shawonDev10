type numArray = number[];

function removeDuplicates(values: numArray): numArray {
    const duplicatesRemoved: numArray = [];
    values.forEach((value) => {
        if (!duplicatesRemoved.includes(value)) {
            duplicatesRemoved.push(value);
        };
    });
    return duplicatesRemoved;
};