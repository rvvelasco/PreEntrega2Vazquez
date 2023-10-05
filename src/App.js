import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a CompuSHOP"}/>
    </div>
  );
}

export default App;
