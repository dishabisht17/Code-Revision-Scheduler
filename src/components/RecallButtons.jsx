import { useProblems } from "../context/ProblemContext"
export default function RecallButtons({ problemId }) {
    const { updateProblem } = useProblems()
    return (
        <div className="flex gap-2">
            <button onClick={() => updateProblem(problemId, "Easy")}
                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover: bg-green-600">Easy

            </button>
            <button onClick={() => updateProblem(problemId, "Medium")}
            className ="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover: bg-yellow-600"
            >Medium</button>
            <button onClick={() => updateProblem(problemId, "Hard")}
            className = "bg-red-500 text-white px-3 py-1 rounded text-sm hover: bg-red-600"
            >Hard</button>
            <button onClick={() => updateProblem(problemId, "Forgot")}
            className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover: bg-orange-600"
            >Forgot</button>
        </div>
    )
}