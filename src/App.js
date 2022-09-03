import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemCount from "./components/ItemCount";


function App(props) {

  

  return (
    
    <div className='bg-rose-800 h-screen pt-4'> 
     <div className="bg-neutral-50 h-full   mx-9 my-9 ">
      <NavBar></NavBar>
      <Header></Header>
       <ItemCount/>
     </div>
    </div>
  )
}

export default App;
