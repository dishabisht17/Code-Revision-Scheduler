import {useProblems} from "../context/ProblemContext"
export default function ProblemList(){
    const {problems, deleteProblem} = useProblems()
    return (
        <div className ="bg-white rounded-lg p-6 shadow mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-700"> All Problem</h2>
            {problems.length ===0 && (
                <p className = "text-gray-400  text-center">No Problems added yet</p>
            )}
            {problems.map(problem =>(
                <div key = {problem.id} className="border border-gray-200 rounded-lg p-4 mb-3 flex justify-between items-center">
                    <div>
                    <h3 className ="font-bold text-gray-800">{problem.title}</h3>
<p className ="text-sm text-gray-500">{problem.topic} • {problem.pattern}  </p>

                    </div>
                    <div className="flex items-center gap-20">
                    <span className = {`text-xs px-2 py-1 rounded-full font-medium 
                    ${problem.difficulty ==='Easy' ? 'bg-green-100 text-green-700' :''}
                    ${problem.difficulty ==='Medium' ? 'bg-yellow-100 text-yellow-700' :''}
                    ${problem.difficulty ==='Hard' ? 'bg-red-100 text-red-700' :''}
                    `}>
                        {problem.difficulty}
                        </span>
                        <button
                        onClick ={()=> deleteProblem(problem.id)}
                        className="text-red-400 hover:text-red-600 text-sm">X</button>
                        </div>
                        </div>
            ))}
        </div>
    )

}