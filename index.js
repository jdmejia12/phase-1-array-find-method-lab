

function superbowlWin(inventory){
 
    let winningYear = inventory.find(recordYear => recordYear.result === 'W');
    return !!winningYear ? winningYear.year : undefined
}
 
// array1.filter(element => element > 10);
// console.log(record.find(superbowlWin))
