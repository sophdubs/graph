export const sort = function(nums) {
    let moves=[];
    let swapped;

    function bubbleSort(arr) {
        swapped = false;
        let end = arr.length -1;
        for (let i = 0; i < end; i++) {
            if (parseInt(arr[i].innerHTML) > parseInt(arr[i+1].innerHTML)) {
                swapped = true;
                moves.push([arr[i].innerHTML, arr[i+1].innerHTML])

                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        end --;
    }
    do {
        bubbleSort(nums);
    } while (swapped);
    return moves; 
}