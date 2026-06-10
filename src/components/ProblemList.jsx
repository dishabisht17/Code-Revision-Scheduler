  import {useState} from "react"
  import {useProblems} from "../context/ProblemContext"

export default function ProblemList(){
    const {problems, deleteProblem} = useProblems()
    const [searchQuery , setSearchQuery] = useState("")
    const[filterDifficulty, setFilterDifficulty] = useState("All")
    const filteredProblems = problems.filter (p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesDifficulty = filterDifficulty === "All" || p.difficulty === filterDifficulty
        return matchesSearch && matchesDifficulty
    })
    return (
     
        <div className ="bg-white rounded-lg p-6 shadow mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-700"> All Problems</h2>
              <div className = "flex gap-2 mb-4">
        <input value ={searchQuery}
        onChange = {(e)=> setSearchQuery(e.target.value)}
        placeholder = "Search problems..."
        className=" border border-gray-300 rounded p-2 flex-1 focus:outline-none focus:border-blue-500"
        />
        <select value= {filterDifficulty}
        onChange ={(e) => setFilterDifficulty(e.target.value)}
        className="border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
>
<option value ="All">All</option>
<option value ="Easy">Easy</option>
<option value ="Medium">Medium</option>
    <option value ="Hard">Hard</option>
    
</select>
</div>
            {filteredProblems.length ===0 ? (
                <p className = "text-gray-400  text-center">No Problems added yet</p>
            ) :(
            filteredProblems.map((problem) =>(
                <div key = {problem.id} className="border border-gray-200 rounded-lg p-4 mb-3 flex justify-between items-center">
                    <div>
                    <h3 className ="font-bold text-gray-800">{problem.title}</h3>
<p className ="text-sm text-gray-500">{problem.topic} • {problem.pattern}  </p>

                    </div>
                    <div className="flex items-center gap-4">
                    <span className = {`text-xs px-2 py-1 rounded-full font-medium 
                    ${problem.difficulty ==='Easy' ? 'bg-green-100 text-green-700' :''}
                    ${problem.difficulty ==='Medium' ? 'bg-yellow-100 text-yellow-700' :''}
                    ${problem.difficulty ==='Hard' ? 'bg-red-100 text-red-700' :''}
                    `}>
                        {problem.difficulty}
                        </span>
   {problem.revisionHistory.length >0 && ( 
    <span className={`text-xs px-2 py-1 rounded-full font-medium
      ${problem.revisionHistory.at(-1).recall ==='Easy'? 'bg-green-100 text-green-700' :''}
${problem.revisionHistory.at(-1).recall ==='Medium'? 'bg-yellow-100 text-yellow-700' :''}
${problem.revisionHistory.at(-1).recall ==='Hard'? 'bg-orange-100 text-orange-700' :''}
${problem.revisionHistory.at(-1).recall ==='Forgot'? 'bg-red-100 text-red-700' :''}

        `}>
            Last:{problem.revisionHistory.at(-1).recall}
        </span>
   )}
                        <button
                        onClick ={()=> deleteProblem(problem.id)}
                        className="text-red-400 hover:text-red-600 text-sm">X</button>
                        </div>
                        </div>
            ))
        )}
        </div>
         );
        }
         