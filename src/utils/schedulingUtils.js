const INTERVALS = [1, 3, 7, 15, 30]
export function getNextIntervalDays(intervalIndex, recallQuality) {
    let newIndex = intervalIndex
    switch (recallQuality) {
        case "Easy":
            newIndex += 2
            break
        case "Medium":
            newIndex += 1
            break
        case "Hard":
            break
        case "Forgot":
            newIndex = 0
            break
        default:
            newIndex = intervalIndex

    }
    if (newIndex < 0) newIndex = 0
    if (newIndex > 4) newIndex = 4

    return {
        days : INTERVALS[newIndex],
        index :  newIndex
    }

}

export function getNextRevisionDate(lastDate, days) {
    //  console.log("lastDate:",lastDate,"days:",days)
    const [year,month,day] = lastDate.trim().split('-').map(Number)

    const date = new Date(year ,month-1,day +days)
    const y = date.getFullYear()
    const m = String(date.getMonth() +1).padStart(2,'0')
    const d = String(date.getDate()).padStart(2,'0')
    // console.log("date:",date)
    
    // date.setDate(date.getDate() + days)
    return `${y}-${m}-${d}`
}


