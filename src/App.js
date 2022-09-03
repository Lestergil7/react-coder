import NavBar from "./components/NavBar";
import Header from "./components/Header";
import {useState} from 'react';
import ItemCount from "./components/ItemCount";


function App() {

  const [counter,SetCounter] = useState(0)
    
  const handleClick =()=>{
      SetCounter(counter + 1);
      console.log('Hiciste click')
  }

  return (
    
    <div className='bg-rose-800 h-screen pt-4'> 
     <div className="bg-neutral-50 h-full   mx-9 my-9 ">
      <NavBar></NavBar>
      <Header></Header>

      <div className='flex'>
        <strong>Contador: {counter}</strong>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleClick}> Boton</button>
    </div>

     </div>
    </div>
  )
}

export default App;
