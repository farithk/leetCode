/**by Farith Comas */
var twoSum = function(nums, target) {
    let positions = [];
    
    if(nums.length >= 2 && nums.length <= 1000 && target >= Math.pow(-10, 9) && target <= Math.pow(10, 9)){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] >= Math.pow(-10, 9) && nums[i] <= Math.pow(10, 9)){
                for(let j = i + 1; j < nums.length; j++){
                    //console.log(nums[i] + nums[j]);
                    if((nums[i] + nums[j]) === target){
                        positions = [i, j];
                    }
                }
            }
        }
    }
   
    
    return positions;
};

console.log(twoSum([2,7,11,15], 9));