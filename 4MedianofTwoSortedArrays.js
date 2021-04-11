/**by Farith Comas */
var findMedianSortedArrays = function(nums1, nums2) {
    let newNums = nums1;
    for(let i = 0; i < nums2.length; i++){
         newNums.push(nums2[i]);
    }

    newNums.sort(function(a,b){return a - b});

    console.log(newNums);
    
    let sum = 0;
    let median;
    let positions = 0;
    
    if(newNums.length % 2 == 0){
        console.log("test:" + newNums);
        positions = [newNums.length/2, (newNums.length/2) + 1];
        median = (parseFloat(newNums[positions[0] - 1]) + parseFloat(newNums[positions[1] - 1]))/2;
    } else {
        positions = [Math.ceil(newNums.length/2) - 1];
        median = newNums[positions];
    }

    console.log(positions);
    console.log(median);
    
};

console.log(findMedianSortedArrays([3],[-2,-1]));