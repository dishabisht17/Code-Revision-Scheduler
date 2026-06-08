import { useProblems } from "../context/ProblemContext";
export default function Analytics(){
    const {problems} = useProblems()
    const forgotByTopic ={}
    problems.forEach(problem =>{
        problem.revisionHistory?.forEach(entry=>{
            if(entry.recall === "Forgot"){
                if(!forgotByTopic[problem.topic]){
                forgotByTopic[problem.topic]=0
                }
                forgotByTopic[problem.topic]+=1        
              }
        })
    })
     let totalEntries = 0
 let successEntries = 0
 problems.forEach(problem => {
    problem.revisionHistory?.forEach(entry => {
        totalEntries +=1
        if(entry.recall === "Easy" ||entry.recall === "Medium"){
            successEntries +=1

        }
    })
  
 })
   const successRate =  totalEntries ===0?0: Math.round((successEntries/ totalEntries)*100)
    return(
        <div className="bg-white/80 background-blur-sm rounded-lg p-6  shadow mb-6">
            <h2 className = "text-xl font-bold mb-4 text-gray-700">Analytics </h2>
            <h3 className="font-bold text-gray-600  mb-2">Most Forgotten Topics</h3>
            {Object.entries(forgotByTopic).map(([topic,count])=>(
                <div key = {topic} className="flex justify-between border-b py-2">
                    <span>{topic}</span>
                    <span className="text-red-500  font-bold">{count} times forgot </span>
                    </div>  
            ))}
           <div className="mt-4">
            <h3 className="font-bold text-gray-600 mb-2">Recall Success Rate </h3>
        <p className="text-3xl font-bold text-blue-600">{successRate}</p>
           </div>
        </div>
    )
}

