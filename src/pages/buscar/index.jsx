import { useState } from 'react'
import './index.scss'

import axios from 'axios'



export default function Cadastrar() {
    const [modelo, setModelo]= useState('')
    const [ano, setAno]= useState(0)
    const [marca, setMarca]= useState('')
    const [cor, setCor]= useState('')
    const [placa, setPlaca]= useState('')



    async function salvar() {
        const paramCorpo = {
            "modelo": modelo,
            "ano": ano,
            "marca": marca,
            "cor": cor,
            "placa": placa
        }

        const url = 'http://localhost:5001/inserir';
        let resp = await axios.post(url, paramCorpo);

        alert('Carro adicionada na lista. Id: ' + resp.data.novoID);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Modelo:</label>
                    <input type='text' value={modelo} onChange={e => setModelo(e.target.value)} />
                </div>
                <div>
                    <label>Ano:</label>
                    <input type='number' value={ano} onChange={e => setAno(e.target.value)}/>
                </div>
                <div>
                    <label>Marca:</label>
                    <input type='text' value={marca} onChange={e => setMarca(e.target.value)} />
                </div>
                <div>
                    <label>Cor</label>
                    <input type='text' value={cor} onChange={e => setCor(e.target.value)} />
                </div>
                <div>
                    <label>placa</label>
                    <input type='text' value={placa} onChange={e => setPlaca(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}