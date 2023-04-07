export class Cypher{

    constructor(){
        this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'
        this.capsAlphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }

    ceasarCypher(text, shiftKey){
        return cypherText
    }
    /**
     * 
     * @param {*} charIndex Index of character in text to be encrypted
     * @param {*} cypherKey Ceaser cypher shift key
     * @returns Alphabet string index for the encrypted character
     */
    #getCypherIndex(charIndex, cypherKey){
        return (charIndex + cypherKey) % 26
    }

    /**
     * 
     * @param {*} char 
     * Check if character is capital
     */
    #isCapital(char){
        return this.capsAlphabet.includes(char)
    }
    /**
     * 
     * @param {*} char 
     * Check if character is an alphabet character
     */
    #isLetter(char){
        return this.alphabet.includes(char.toLowerCase()) 
    }

}