export class Cypher{

    constructor(){
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
        this.capsAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    ceasarCypher(text, shiftKey){
        let cypherText = ''
        for(let i = 0; i < text.length; i ++){
            // Get ceasar cypher index
            const index = this.#getCypherIndex(i, shiftKey)

            //check if character is letter or not
            if(this.#isLetter(text[i])){
                //If is letter check if is uppercase
                if(this.#isCapital(text[i]))
                    cypherText += this.capsAlphabet[index]//Get letter from caps
                else
                    cypherText += this.alphabet[index]//get small letter
            }
            //Character is not letter
            else
                cypherText += text[i]
        }
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