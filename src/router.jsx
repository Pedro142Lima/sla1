import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Cadastrar from './pages/buscar'
import Consultar from './pages/consultar'


export default function Nav () {
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App/>} />
            <Route path='/buscar' element={<Cadastrar/>}/>
            <Route path='/consultar' element={<Consultar/>}/>
        </Routes>
    </BrowserRouter>
}