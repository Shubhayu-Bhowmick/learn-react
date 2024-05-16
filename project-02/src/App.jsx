import {useState,  useCallback, useRef, useEffect} from 'react';

function App() {
   
  const [password, setpassword] = useState("");
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Length, setLength] = useState(4);

  const createPass = useCallback(() => {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str+= "0123456789";
    if (charAllowed) str+= "!@#$%^&*<>.?/|:;";
    let chr = "";

    for (let index = 0; index < Length; index++) {
      let num = Math.floor(Math.random()*str.length);
      chr += str.charAt(num);
    }
    
    setpassword(chr);
    
  }, [numAllowed, charAllowed, Length])

  useEffect(() => {createPass()}, [numAllowed,charAllowed, Length, createPass])

  function copyPass() {
    window.navigator.clipboard.writeText(password);
  }
  
 
  return (
    <>
    <div className=" bg-slate-950 h-screen flex items-center justify-center">
      <div className="bg-emerald-950 border-2 border-lime-200 flex flex-col h-fit px-5 py-5 rounded-md">
        <input type="text" className="w-96 h-10 p-2 font-normal rounded-sm" placeholder="Your password" value={password}/>
        <button className="bg-blue-400 w-full p-1 mx-auto my-3 rounded-sm" onClick={copyPass}>Copy</button>
        <label className="text-lime-200">Length :
        <input type="range" min="0" max="10" value={Length} onChange={(e) => {setLength(e.target.value)}}/>
        </label>
        <label className="text-lime-200">
          Num : 
        <input type='checkbox' onClick={() => {setnumAllowed(!numAllowed)}}/>
        </label>
        <label className="text-lime-200">
          Special Chars : 
        <input type='checkbox' onChange={() => {setcharAllowed(!charAllowed)}}/>
        </label>
        </div>
    </div>
    </>
  )
}

export default App
