
function max(arr) {
    let bigest
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>bigest) {
            bigest= arr[i]
        }
    }

}

function min(arr) {
    let smalest
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<bigest) {
            smalest= arr[i]
        }
    }
}

function mean(arr) {
    let sum
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        
    }
    return sum / arr.length
    // Ledtråd: Börja med att räkna ut summan av alla element
}
