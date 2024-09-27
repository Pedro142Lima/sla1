
import './App.scss';
import Alterar from './pages/alterar';
import Cadastrar from './pages/buscar';
import Consultar from './pages/consultar';
import Delete from './pages/deletar';
import Nav from './router';

function App() {
  return (
    <div className="App">
      <Consultar/>
      <Cadastrar/>
      <Delete/>
      <Alterar/>
    </div>
  );
}

export default App;
