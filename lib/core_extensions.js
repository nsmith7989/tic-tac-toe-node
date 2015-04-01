/**
 * Checks if all values of the array are the same
 * @returns {boolean}
 */
Array.prototype.allSame = function() {
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== this[0]) {
            return false;
        }
    }
    return true;
};

/**
 * Flatten array one level
 * @returns {flattened array}
 */
Array.prototype.flatten = function() {
    return this.reduce((a,b) => a.concat(b));
};

Array.prototype.transpose = function() {
    return Object.keys(this[0]).map((c) => this.map(function (r) { return r[c]; }));
};

Array.prototype.allEmpty = function() {

    for (let elem = 0; elem < this.length; elem++) {
        if (this[elem] !== '') {
            return false;
        }
    }

    return true;
};

Array.prototype.shuffle = function() {

    var currentIndex = this.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;

};