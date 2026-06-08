import { createContext, useState, useContext } from "react"
import { saveProblems, loadProblems } from "../utils/storageUtils"
import { getNextIntervalDays, getNextRevisionDate } from "../utils/schedulingUtils"

const ProblemContext = createContext()

export function ProblemProvider({ children }) {
  const [problems, setProblems] = useState(loadProblems())

 
function addProblem(formData) {
console.log("formData.dateSolved:", formData.dateSolved)
const nextRev = getNextRevisionDate(formData.dateSolved,1)
      
    const newProblem = {
        id : crypto.randomUUID(),
        title : formData.title,
        topic: formData.topic,
        difficulty : formData.difficulty,
        pattern : formData.pattern,
        notes : formData.notes,
       tags : formData.tags,
      dateSolved : formData.dateSolved,
      intervalIndex :0,
      revisionCount : 0,
      lastRevisionDate : formData.dateSolved,
      nextRevisionDate: getNextRevisionDate(formData.dateSolved,1),
      
      revisionHistory : []


    }
    

    const updated = [...problems, newProblem]
    setProblems(updated)
    saveProblems(updated)
}

function updateProblem(problemId , recallQuality){

  const today = new Date().toISOString().split('T')[0]
  const updated =  problems.map(problem =>{
    if(problem.id != problemId ) return problem
    const {days, index} = getNextIntervalDays(problem.intervalIndex, recallQuality)
    const nextDate = getNextRevisionDate(today,days)
  
   
    return {
...problem,
intervalIndex : index,
revisionCount : problem.revisionCount +1,
lastRevisionDate : today,
nextRevisionDate : nextDate,
revisionHistory : [...problem.revisionHistory,{
  date : today,
  recall : recallQuality,
  nextDate : nextDate
}]


}
  })
  setProblems(updated)
saveProblems(updated)
}
 function deleteProblem(problemId) {
      const updated  = problems.filter(p=> p.id !==  problemId)
      setProblems(updated)
      saveProblems(updated)
    }
  return (
    <ProblemContext.Provider value={{problems,addProblem, updateProblem, deleteProblem}}>
      {children}
    </ProblemContext.Provider>
  )
}

export function useProblems() {
  return useContext(ProblemContext)
}

