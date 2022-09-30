//code your solution here
const record = [
    { year: "2013", result: "N/A"},
    { year: "2014", result: "L"},
    { year: "2015", result: "W"},
]

function superbowlWin(record) {
    let dub = record.find((arr) => arr.result === "W") 
    //return (dub)
    if(dub){
        return dub.year
    }
    // else{
    //     return undefined
    // }

}
