export function saveProblems(problems){
localStorage.setItem("problems",JSON.stringify(problems))
}
export function loadProblems(){
    const data = localStorage.getItem("problems")
    if( data === null) return []
     return JSON.parse(data)
}
