import Link from 'next/link';
import axios from "axios";
import React, { useEffect, useState } from 'react';

function ShowAssociate(){

    const [ip, setIP] = useState('');
    
    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      setIP(res.data.IPv4)
    }
    
    useEffect( () => {
      //passing getData method to the lifecycle method
      getData()
  
    }, [])

    const [assc, setAssociate ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/api/searchAssociate")
        .then(response => {
            setAssociate(response.data);
        })

      },[]);

    return( 
           
        <div className="App">
            <p className="text-md">Testes</p>
            <h1>{ip}</h1>
            <br></br>
            <div className="grid grid-cols-3 justify-center">
            {assc.map((ascData, index) => {
                return(
                <div key={index} className="block justify-center max-w-2xl p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h1 className="text-2xl text-center">{ascData.dadosProfissionais?.nomeFantasia}</h1>
                    <b className="">ID do Associado: {ascData.associateId}</b>
                    <br></br>
                    <b className="">Pasta: {ascData.numeroDaPasta}</b>
                    <hr></hr>
                    <div>
                    <b className="text-2xl">Dados Pessoais</b>
                    <br></br>
                    <b className="text-md">Nome: <b className="font-normal">{ascData.dadosPessoais?.nomeCompleto}</b></b>
                    <br></br>
                    <b className="text-md">Estado Civil: <b className="font-normal">{ascData.dadosPessoais?.estadoCivil}</b></b>
                    <br></br>
                    <b className="text-md">Nacionalidade: <b className="font-normal">{ascData.dadosPessoais?.nacionalidade}</b></b>
                    <br></br>
                    <b className="text-md">Naturalidade: <b className="font-normal">{ascData.dadosPessoais?.naturalidade}</b></b>
                    <br></br>
                    <b className="text-md">Data de Nascimento: <b className="font-normal">{ascData.dadosPessoais?.dataDeNascimento}</b></b>
                    <br></br>
                    <b className="text-md">CPF: <b className="font-normal">{ascData.dadosPessoais?.cpf}</b></b>
                    <br></br>
                    <b className="text-md">Documento de Identificação: <b className="font-normal">{ascData.dadosPessoais?.documentoIdentificao}</b></b>
                    <br></br>
                    <b className="text-md">Número Documento: <b className="font-normal">{ascData.dadosPessoais?.nuemroDocumento}</b></b>
                    <br></br>
                    <b className="text-md">Orgão Expeditor: <b className="font-normal">{ascData.dadosPessoais?.orgaoExpeditor}</b></b>
                    <br></br>
                    <b className="text-md">Endereço Pessoal: <b className="font-normal">{ascData.dadosPessoais?.enderecoPessoal}</b></b>
                    <br></br>
                    <b className="text-md">Número do Endereço Pessoal: <b className="font-normal">{ascData.dadosPessoais?.numeroEnderecoPessoal}</b></b>
                    <br></br>
                    <b className="text-md">Complemento Pessoal: <b className="font-normal">{ascData.dadosPessoais?.complementoPessoal}</b></b>
                    <br></br>
                    <b className="text-md">Bairro Pessoal: <b className="font-normal">{ascData.dadosPessoais?.bairroPessoal}</b></b>
                    <br></br>
                    <b className="text-md">CEP: <b className="font-normal">{ascData.dadosPessoais?.cep}</b></b>
                    <br></br>
                    <b className="text-md">Cidade Estado Pessoal: <b className="font-normal">{ascData.dadosPessoais?.cidadeEstadoPessoal}</b></b>
                    <br></br>
                    <b className="text-md">Email Pessoal: <b className="font-normal">{ascData.dadosPessoais?.emailPessoal}</b></b>
                    <br></br>
                    <b className="text-md">Telefone Fixo Pessoal: <b className="font-normal">{ascData.dadosPessoais?.telefoneFixoPessoal}</b></b>
                    <br></br>
                    <b className="text-md">Celular Pessoal: <b className="font-normal">{ascData.dadosPessoais?.celularPessoal}</b></b>
                    <br></br>
                    </div>
                    <br></br>
                    <div>
                    <hr></hr>
                    <b className="text-2xl">Dados Profissionais</b>
                    <br></br>
                    <b className="text-md">Razão Social: <b className="font-normal">{ascData.dadosProfissionais?.razaoSocial}</b></b>
                    <br></br>
                    <b className="text-md">Nome Fantasia: <b className="font-normal">{ascData.dadosProfissionais?.nomeFantasia}</b></b>
                    <br></br>
                    <b className="text-md">CNPJ: <b className="font-normal">{ascData.dadosProfissionais?.cnpj}</b></b>
                    <br></br>
                    <b className="text-md">Número Inscrição: <b className="font-normal">{ascData.dadosProfissionais?.numeroInscricao}</b></b>
                    <br></br>
                    <b className="text-md">Endereço Sede: <b className="font-normal">{ascData.dadosProfissionais?.enderecoSede}</b></b>
                    <br></br>
                    <b className="text-md">Número Sede: <b className="font-normal">{ascData.dadosProfissionais?.numeroSede}</b></b>
                    <br></br>
                    <b className="text-md">Complemento Sede: <b className="font-normal">{ascData.dadosProfissionais?.complementoSede}</b></b>
                    <br></br>
                    <b className="text-md">Bairro Sede: <b className="font-normal">{ascData.dadosProfissionais?.bairroSede}</b></b>
                    <br></br>
                    <b className="text-md">CEP Sede: <b className="font-normal">{ascData.dadosProfissionais?.cepSede}</b></b>
                    <br></br>
                    <b className="text-md">Cidade Estado Sede: <b className="font-normal">{ascData.dadosProfissionais?.cidadeEstadoSede}</b></b>
                    <br></br>
                    <b className="text-md">Email Profissional: <b className="font-normal">{ascData.dadosProfissionais?.emailProfissional}</b></b>
                    <br></br>
                    <b className="text-md">Data de Abertura: <b className="font-normal">{ascData.dadosProfissionais?.dataDeAbertura}</b></b>
                    <br></br>
                    <b className="text-md">Quantidades de Pessoas Ocupadas: <b className="font-normal">{ascData.dadosProfissionais?.quantidadePessoasOcupadas}</b></b>
                    <br></br>
                    <b className="text-md">Ramo da Atividade: <b className="font-normal">{ascData.dadosProfissionais?.ramoDaAtividade}</b></b>
                    <br></br>
                    </div>
                <br></br>
                </div>
                );
            })}
            </div>

        </div>

    )

}


export default ShowAssociate;