import { useState } from 'react'
import './index.scss'

import axios from 'axios'



export default function Delete() {
    const [id, setId]= useState('')
    

    async function salvar() {
        

        const url = `http://localhost:5001/deletar/${id}`;
        let resp = await axios.delete(url);

        alert('Carro removido da lista. Id: ' + resp.data.id);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> Deletar </h1>


            <div className='form'>
                <div>
                    <label>Id:</label>
                    <input type='text' value={id} onChange={e => setId(e.target.value)} />
                </div>
               
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}

 