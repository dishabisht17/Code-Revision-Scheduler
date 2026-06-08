import { ProblemProvider } from "./context/ProblemContext";


import Dashboard from "./pages/Dashboard";
function App(){
  return (
    <ProblemProvider>
      <div className="min-h-screen" style ={{background : "linear-gradient(135deg, #667eea 0% , #764ba2 50%, #f093fb 100%)"}}>
        <div className ="max-w-6xl mx-auto p-6">
        <header className="text-white text-center py-4 text-2xl font-bold mb-6">
        Code Revision Scheduler
  </header>
          <Dashboard/>
        </div>
      </div>
      
      
      
    </ProblemProvider>
  )
}
export default App