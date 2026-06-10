import {useState} from "react"
import {useProblems} from "../context/ProblemContext"

export default function AddProblemForm(){
    const {addProblem} = useProblems()
    const today = new Date().toISOString().split('T')[0]
    const [formData, setFormData] = useState({
        title: "",
        topic : "",
        difficulty :"",
        pattern :"",
        notes : "",
        tags : "",
        dateSolved : today

    })

    function handleChange(e){
       
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
function handleSubmit(){
    if(!formData.title.trim()){
        alert("Please enter a Title")
        return
    }
     if(!formData.difficulty){
        alert("Please select Difficulty")
        return
    }
     if(!formData.dateSolved){
        alert("Please select a Date")
        return
    }
     if(!formData.topic.trim()){
        alert("Please enter a Topic")
        return
    }
     if(!formData.pattern.trim()){
        alert("Please enter a Pattern")
        return
    }
    
    addProblem(formData)
    setFormData ({
        title : "",
        topic : "",
        difficulty : "",
        pattern : "",
        notes : "",
        tags : "",
        dateSolved : today,
    })
}
    return (
        <div className="bg-white/80  backdrop-blur-sm rounded-lg p-6 shadow mb-6 ">
        <h2 className = "text-xl font-bold mb-4 text-gray-700"> Add Problems</h2>
        <input 
        name="title"
        value ={formData.title}
         onChange={handleChange}
         placeholder = "Problem Title"
         className = "border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500"
         />
         <input 
         name = "topic"
         value ={formData.topic}
         onChange = {handleChange}
         placeholder = "Topic "
         className = "border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500"
         />
         <input 
         name = "pattern"
         value = {formData.pattern}
         onChange= {handleChange}
         placeholder = "Pattern"
         className ="border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500 "
         />
         <input
         name = "notes"
         value = {formData.notes}
         onChange = {handleChange}
         placeholder = "Notes"
         className = "border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500 "
         
         />

         <input
         name = "tags"
         value = {formData.tags}
         onChange = {handleChange}
         placeholder = "Tags"
         className = "border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500 "
    />
        <input
         type = "date"
         name = "dateSolved"
         value = {formData.dateSolved}
         onChange = {handleChange} 
         onClick={(e) => e.target.showPicker() }
         placeholder = "Date"
         className = "border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500"
         />
         <select 
          name = "difficulty"
          value = {formData.difficulty}
          onChange = {handleChange}
          className = "border  border-gray-500 rounded p-2 w-full mb-3 focus:outline-none focus:border-blue-500"
          >
  <option value = "">Select Difficulty</option>
<option value = "Easy">Easy</option>
<option value = "Medium">Medium</option>

  <option value = "Hard">Hard</option>
          </select>
          <button 
          onClick = {handleSubmit}
          className = "bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700"
>
    Add Problem
</button>
        </div>
    )
}