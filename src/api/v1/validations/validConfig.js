const isConfigValid = (obj1, obj2) => {
    let isValid = true;
    Object.keys(obj1).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
            isValid = false;
        }
    });

    if (isValid === false) {
        return false;
    }

    Object.keys(obj1).forEach((key) => {
        Object.keys(obj1[key]).forEach((nestedKey) => {
            if (!Object.prototype.hasOwnProperty.call(obj2[key], nestedKey)) {
                isValid = false;
            }
        });
    });
    return isValid;
};

module.exports = { isConfigValid };
