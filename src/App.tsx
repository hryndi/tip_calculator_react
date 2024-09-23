import UserInput from "./UserInput"
import CountedOutput from "./CountedOutput"

function App() {

  return (
    <>
    <div className="bg-grayischCyan-400 min-h-svh flex justify-center items-center flex-col font-spaceMono gap-4" >
      <img src="logo.svg" alt="app-logo" />
      <main className="w-8/12 p-5 bg-white rounded-xl border border-black flex gap-6 max-sm:flex-col ">
        <UserInput />
        <CountedOutput />
      </main>
    </div>
    </>
  )
}

export default App
