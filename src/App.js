import logo from './logo.svg';
import './App.css';
import FullName from './Profile/Component/FullName';
import Bio from './Profile/Component/Bio';
import Profession from './Profile/Component/Profession';

function App() {
  const name="Dhouha Sagga"
  const bio="Student"
  const profession="FullStack Js"
  const handlealert=(x)=>alert(x);
  const img=[{img:"me.jpg"}]
  return (
   
    <div style={{background:"beige" , border:"2px solid black", width:"550px", height:"500px", margin:"2% 30%"}}>
   <FullName name={name} />
   <Bio bio={bio} handlealert={handlealert} img={img}/>
   <Profession profession={profession}/>
    </div>

  );
}

export default App;
