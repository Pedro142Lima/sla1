import { useState } from 'react'
import './index.scss'

import axios from 'axios'



export default function Consultar() {
    const [listaNegra, setListaNegra] = useState([]);
    const [placa, setPlaca] = useState('')
    const [id, setid] = useState('')


    async function buscar() {
        const url = `http://localhost:5001/buscar/${placa} ` ;
        let resp = await axios.get(url);
        console.log(resp.data)
        setListaNegra(resp.data);
    }

    
    async function buscarAll() {
        const url = `http://localhost:5001/buscarAll ` ;
        let resp = await axios.get(url);
        console.log(resp.data)
        setListaNegra(resp.data);
    }

    async function deletar() {

        const url = `http://localhost:5001/deletar/${id}`;
        let resp = await axios.delete(url);

    }

    const apagar = (index) => {
        let apagar = listaNegra.filter((_, i) => i !== index)
        setListaNegra(apagar)

    }

   function duas(){
    deletar()
    apagar()
   }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>
            <input type="text" onChange={e => setPlaca(e.target.value)} />
            
            <button onClick={buscar}>Buscar pela placa</button>
            <button onClick={buscarAll}>Buscar todos</button>
         
            <table>
                <thead>
                    <tr>
                
                        <th>ID</th>
                        <th>Modelo</th>
                        <th>ano</th>
                        <th>marca</th>
                        <th>cor</th>
                        <th>placa</th>
                    
                    </tr>
                </thead>

                <tbody>
                    {listaNegra.map((item,index) => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.modelo}</td>
                            <td>{item.ano}</td>
                            <td>{item.marca}</td>
                            <td>{item.cor}</td>
                            <td>{item.placa}</td>
                            <button onClick={duas}>deletar</button>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}