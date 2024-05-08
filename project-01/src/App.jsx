import { useState } from "react"


function App() {

  const [color, setColor] = useState('bg-white');


  return (
    <div className={`flex justify-center items-end p-28 h-screen ${color}`}>
    <div className="flex flex-row px-3 py-2 bg-orange-500 w-1/3 justify-around rounded-full">
    <button
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
      onClick={() => {setColor(() => {return 'bg-black'})}}
    >
      Button text
    </button>

    <button
      type="button"
      className="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80"
      onClick={() => {setColor(() => {return 'bg-red-600'})}}
    >
      Button text
    </button>

    <button
      type="button"
      className="rounded-full bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700/80"
      onClick={() => {setColor(() => {return 'bg-blue-700'})}}
    >
      Button text
    </button>

    <button
      type="button"
      className="rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80"
      onClick={() => {setColor(() => {return 'bg-green-600'})}}
    >
      Button text
    </button>


    
</div>
</div>

  )
}

export default App
