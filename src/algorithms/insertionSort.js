export const sort = function(nums) {
    let moves = [];
    const length = nums.length;

    for (let i = 1; i < length; i++) {
        let key = nums[i];
        let j = i - 1;
        while (j >= 0 && parseInt(nums[j].innerHTML) > parseInt(key.innerHTML)) {
            moves.push([nums[j].innerHTML, key.innerHTML]);
            nums[j+1] = nums[j];
            j = j-1;
        }
        nums[j+1] = key;
    }
    return moves;
}
