const stringUtils = {
    capitalize(str) {
        return str.toUpperCase();
    },
    
    lower(str) {
        return str.toLowerCase();
    },
    
    
    countWords(str) {
        return str.trim().length;
    },
    
    
};

module.exports = stringUtils;