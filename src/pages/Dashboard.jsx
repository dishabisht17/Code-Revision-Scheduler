import { useProblems } from "../context/ProblemContext";
import TodaysRevisions from "../components/TodaysRevisions";
import ProblemList from "../components/ProblemList";
import AddproblemForm from "../components/AddProblemForm"
import Analytics from "./Analytics";
export default function Dashboard(){ 
    const {problems}  = useProblems()
    const totalProblems = problems.length
    const today = new Date().toISOString().split('T')[0]
    const dueTodayCount = problems.filter(p=>p.nextRevisionDate <= today).length
    let todaysRevisions = 0
    problems.forEach(p => {
        p.revisionHistory?.forEach(entry=> {
            if(entry.date === today) todaysRevisions +=1
        })
    });

    return (
        <div>
        <div className=" grid grid-cols-3 gap-2 mb-4 md:gap-4 md:mb-6 ">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow text-center ">
       
        
            <p className = "text-gray-500 text-sm">Total Problems</p>
            <p className="text-3xl font-bold text-blue-600">{totalProblems}</p>
            </div>
            <div className ="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow text-center">
                <p className = "text-gray-500 text-sm">Due Today</p>
                <p className="text-3xl font-bold text-orange-500  "> {dueTodayCount} </p> 
                 </div>
                 <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow text-center">
                   <p className = "text-gray-500 text-sm">Today Revisions</p>
<p className ="text-3xl font-bold text-green-500">{todaysRevisions}</p>
           </div>
           </div>
           <div  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6  items-start">
            <div className="flex flex-col gap-6">
           <AddproblemForm/>
           <ProblemList />
            </div>
            <TodaysRevisions/>
</div>
            <Analytics />
        </div>
    )
}