var lengthOfLongestSubstring = function(s) {
    let oldCharacters = [];
    let max = 0;

    let newSToTest = [];
 
    for(let i = 0; i < s.length; i++){
        for (let j = i; j < s.length; j++) {
            newSToTest.push(s[j]);
        }

        for(let z = 0; z < newSToTest.length; z++){
            if(!oldCharacters.includes(newSToTest[z])){
                oldCharacters.push(newSToTest[z]);
            } else {
                break;
            }
            if(oldCharacters.length > max){
                max = oldCharacters.length;
            }
        }

        oldCharacters = [];
        newSToTest = [];
    }
    return max;
};

console.log(lengthOfLongestSubstring(" "));