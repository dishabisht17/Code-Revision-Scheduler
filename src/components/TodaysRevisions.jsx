import { useProblems } from "../context/ProblemContext";
import RecallButtons from "./RecallButtons";
export default function TodaysRevisions(){
const {problems} = useProblems()
const today = new Date().toISOString().split('T')[0]


const todaysProblems = problems.filter(problem => problem.nextRevisionDate <= today)

return (
    <div className ="bg-white/80 backgound-blur-sm rounded-lg p-6 shadow mb-6 h-fit">
        <h2 className ="text-xl  font-bold mb-4 text-gray-700">Today's Revisions</h2>
         {todaysProblems.length === 0 && (<p className = "text-gray-400 etxt-center">No revision due Today</p>)}
        {todaysProblems.map(problem => (
            <div key = {problem.id} className =" border border-gray-200 rounded lg p-4 mb-3 bg-white">
        <div className = "flex justify-between items-start mb-3">
            <div>
        <h3 className=" font-bold text-gray-800" >{problem.title}</h3 >
        <p className="text-sm text-gray-500">{problem.topic} • {problem.pattern} </p>
        </div>
          <span className ={`text-xs px-2 py-1 rounded-full font-medium
            
            ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : ''}

            ${problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : ''}
            ${problem.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : ''}
          `}>
            {problem.difficulty}
            </span>
          </div>

 
 <RecallButtons problemId={problem.id} />    
          </div>
        ))}

   </div>
)
}