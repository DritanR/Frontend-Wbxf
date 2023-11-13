import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";


function App({subjectName}) {
  return (
    <div className="App">
      <Navbar />
      <Dashboard subjectName={subjectName}/>
    </div>
  );
}

export default App;
