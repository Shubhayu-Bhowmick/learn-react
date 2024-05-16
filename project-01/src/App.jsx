import { useState , useRef } from "react"


function App() {

  const [color, setColor] = useState('bg-white');
  const focus = useRef([]);



  const changeColor = (e) => {
     let newColor = e.target.value;
     //console.log(e.target);
     setColor(`bg-${newColor}`);
     //console.log(focus.current.value);
    //  console.log(focus.current[1]);
    //  console.log(e.target);
     focus.current.forEach((item) => {
      //console.log(item);


      if(item===e.target){
        console.log(item.value);
      }


      //console.log(item)
      // if(item == e.target)
      // console.log(focus.current[key].value);
     })
  }


  return (
    <div className={`flex justify-center items-end p-28 h-screen ${color}`}>
    <div className="flex flex-row px-3 py-2 bg-orange-500 w-1/3 justify-around rounded-full">
    <button
      ref={el => focus.current[0] = el}
      value="black"
      type="button"
      className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
      onClick={changeColor}
    >
      Black
    </button>

    <button
      ref={el => focus.current[1] = el}
      value="red-600"
      type="button"
      className="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80"
      onClick={changeColor}
    >
      Red
    </button>

    <button
      ref={el => focus.current[2] = el}
      value="blue-700"
      type="button"
      className="rounded-full bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700/80"
      onClick={changeColor}
    >
      Blue
    </button>

    <button
      ref={el => focus.current[3] = el}
      value="green-600"
      type="button"
      className="rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80"
      onClick={changeColor}
    >
      Green
    </button>


    
</div>
</div>

  )
}

export default App
