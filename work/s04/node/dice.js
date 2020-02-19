/**
 * A module for game Guess the number I'm thinking of.
 */
"use strict";

class Dice {
    /**
     * @constructor
     */
    constructor() {
        this.dice = null;
    }

    /**
     * Roll the dice and remember tha value of the rolled dice.
     *
     * @param {integer} faces The number of faces of the dice, defaults to 6.
     *
     * @returns {integer} The value of the rolled dice min=1 and max=faces.
     */
    roll(faces=6) {
        this.lottoNumber = Math.floor(Math.random() * faces + 1);
        return this.lottoNumber;
    }

    /**
     * Get the value of the last rolled dice.
     *
     * @returns {integer} The value of the last rolled dice.
     */
    lastRoll() {
        return this.lottoNumber;
    }

    /**
     * When someone is printing this object, what should it look like?
     *
     * @returns {string} The value of the last rolled dice.
     */
    toString() {
        return this.lottoNumber;
    }
}

module.exports = Dice;