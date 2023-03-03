import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function App() {


const initialValue = {
  nomeCompletob: '',
  estadoCivilb: '',
  nacionalidadeb: '',
  naturalidadeb: '',
  dataDeNascimentob: '',
  cpfb: '',
  profissaob: '',
  documentoIdentificacaob: '',
  numeroDocumentob: '',
  orgaoExpeditorb: '',
  enderecoPessoalb: '',
  numeroEnderecoPessoalb: '',
  complementoPessoalb: '',
  bairroPessoalb: '',
  cepb: '',
  cidadeEstadoPessoalb: '',
  emailPessoalb: '',
  telefoneFixoPessoalb: '',
  celularPessoalb: '',
  razaoSocialb: '',
  nomeFantasiab: '',
  cnpjb: '',
  numeroInscricaob: '',
  numeroSedeb: '',
  complementoSedeb: '',
  bairroSedeb: '',
  cepSedeb: '',
  cidadeEstadoSedeb: '',
  emailProfissionalb: '',
  dataDeAbertura: '',
  quantidadePessoasOcupadasb: '',
  ramoDaAtividadeb: '',
  numeroDaPastab: '',
  validadeAlvarab: '',
  areaM2Funcionamentob: '',
  numeroInscricaoMunicipalb:'',
  dataDeEmissaoBombeirosb:'',
  dataDeValidadeBombeirosb:'',
  areaM2Bombeirosb:'',
  dataDeValidadeVigilanciab:'',
  inscricaoVigilanciaSanitariab:'',
  dataDeEmissaoLicencaAmbientalb:'',
  dataDeValidadeLicencaAmbientalb:'',
  tipoContratob:'',
  baixadab:'',
}

const [values, setValues] = useState(initialValue);


function onChange(ev) {

  const {name, value} = ev.target;

  console.log({name, value});

  setValues({ ...values, [name]: value });
  
};

function onSubmit(ev){
  ev.preventDefault();
                      
  if (window.confirm("Você deseja realmente registrar este associado?")) {
     
    Axios.post('http://localhost:3005/api/registerAssociate', values)
    .then((response) => {


    });

    window.alert(values.nomeCompletob + " registrado com sucesso!")

  } else {

  }
}


return(

<div className="App bg-gray-800">

    

<form  action="#" onSubmit={onSubmit} method="POST" className="block p-4 rounded-lg justify-self-center mx-auto shadow-2xl bg-white max-w-2xl">

<div className="mb-5">
<h1 className="text-xl text-center text-black font-bold">Dados Pessoais</h1>
</div>

<div className="grid grid-cols-3 gap-6">





<div className="col-span-3">
  <label htmlFor="nomeCompletoI" className="form-label inline-block mb-2 text-gray-700">Nome completo</label>
  <input type="text"
    name="nomeCompletob"
    required
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="nomeCompletoI"
    onChange={onChange}
    placeholder="Nome Completo"
  />
</div>

<div className="col-span-3">
  <label htmlFor="estadoCivilI" className="form-label inline-block mb-2 text-gray-700">Estado Civil</label>
  <input type="text"
    name="estadoCivilb"
    required
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="estadoCivilI"
    onChange={onChange}
    placeholder="Estado Civil"
  />
</div>


<div className="col-span-3">
  <label htmlFor="nacionalidadeI" className="form-label inline-block mb-2 text-gray-700">
    Nacionalidade</label>
    <input type="text"
       name="nacionalidadeb"
       required
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
       id="nacionalidadeI"
       onChange={onChange}
       placeholder="Nacionalidade"
     />
</div>

<div className="col-span-3">
<label htmlFor="naturalidadeI" className="form-label inline-block mb-2 text-gray-700">
  Naturalidade</label>
  <input type="text"
     name='naturalidadeb'
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="naturalidadeI"
     onChange={onChange}
     placeholder="Naturalidade"
   />
</div> 



<div className="col-span-3">
<label htmlFor="dataDeNascimentoI" className="form-label inline-block mb-2 text-gray-700">
  Data de Nascimento</label>
  <input type="date"
     name="dataDeNascimentob"
     max="2004-12-12"
     min="1910-05-01"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="dataDeNascimentoI"
     onChange={onChange}
     placeholder="Data de Nascimento"
   />
</div>



<div className="col-span-2">
<label htmlFor="cpfI" className="form-label inline-block mb-2 text-gray-700">
  CPF</label>
  <input type="text"
     name='cpfb'
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cpfI"
     onChange={onChange}
     placeholder="CPF"
   />
</div>



<div className="col-span-3">
<label htmlFor="profissaoI" className="form-label inline-block mb-2 text-gray-700">
  Profissão</label>
  <input type="text"
     name="profissaob"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="profissaoI"
     onChange={onChange}
     placeholder="Profissão"
   />
</div>



<div className="col-span-3">
<label htmlFor="documentoIdentificacaoI" className="form-label inline-block mb-2 text-gray-700">
  Documento de identificação</label>
  <input type="text"
     name="documentoIdentificacaob"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="documentoIdentificacaoI"
     onChange={onChange}
     placeholder="Doc. de Identificação"
   />
</div>



<div className="col-span-3">
<label htmlFor="numeroDocumentoI" className="form-label inline-block mb-2 text-gray-700">
  Nº do Documento</label>
  <input type="text"
     name="numeroDocumentob"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroDocumentoI"
     onChange={onChange}
     placeholder="Número do Documento"
   />
</div>



<div className="col-span-3">
<label htmlFor="orgaoExpeditorI" className="form-label inline-block mb-2 text-gray-700">
  Orgão Expeditor</label>
  <input type="text"
     name="orgaoExpeditorb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="orgaoExpeditorI"
     onChange={onChange}
     placeholder="Orgão Expeditor"
   />
</div>



<div className="col-span-3">
<label htmlFor="enderecoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Endereço</label>
  <input type="text"
     name="enderecoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="enderecoPessoalI"
     onChange={onChange}
     placeholder="Endereço Pessoal"
   />
</div>



<div className="col-span-3">
<label htmlFor="numeroEnderecoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Nº Endereço</label>
  <input type="text"
     name="numeroEnderecoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroEnderecoPesssoalI"
     onChange={onChange}
     placeholder="Número Endereço"
   />
</div>



<div className="col-span-3">
<label htmlFor="complementoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Complemento</label>
  <input type="text"
     name="complementoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="complementoPessoalI"
     onChange={onChange}
     placeholder="Complemento Endereço"
   />
</div>



<div className="col-span-3">
<label htmlFor="bairroPessoalI" className="form-label inline-block mb-2 text-gray-700">
  Bairro</label>
  <input type="text"
     name="bairroPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="bairroPessoalI"
     onChange={onChange}
     placeholder="Bairro"
   />
</div>



<div className="col-span-3">
<label htmlFor="cepI" className="form-label inline-block mb-2 text-gray-700">
  CEP</label>
  <input type="text"
     name="cepb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cepI"
     onChange={onChange}
     placeholder="CEP"
   />
</div>


<div className="col-span-3">
<label htmlFor="cidadeEstadoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  cidade e estado pessoal</label>
  <input type="text"
     name="cidadeEstadoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cidadeEstadoPessoalI"
     onChange={onChange}
     placeholder="Cidade e estado pessoal"
   />
</div>



<div className="col-span-3">
<label htmlFor="emailPessoalI" className="form-label inline-block mb-2 text-gray-700">
  e-mail pessoal</label>
  <input type="text"
     name="emailPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="emailPessoalI"
     onChange={onChange}
     placeholder="E-mail pessoal"
   />
</div>



<div className="col-span-3">
<label htmlFor="telefoneFixoPessoalI" className="form-label inline-block mb-2 text-gray-700">
  telefone fixo pessoal</label>
  <input type="text"
     name="telefoneFixoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="telefoneFixoPessoalI"
     onChange={onChange}
     placeholder="Telefone fixo pessoal"
   />
</div>




<div className="col-span-3">
<label htmlFor="celularPessoalI" className="form-label inline-block mb-2 text-gray-700">
  celular pessoal</label>
  <input type="tel"
     name="celularPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="celularPessoalI"
      maxLength="15"
     onChange={onChange}
     placeholder="Celular pessoal"
   />
</div>
<br></br>
<div className="mb-5">
<h1 className="text-xl text-center text-black font-bold">Dados Profissonal</h1>
</div>
<div className="col-span-3">
<label htmlFor="razaoSocialI" className="form-label inline-block mb-2 text-gray-700">
  Razão Social</label>
  <input type="text"
     name="razaoSocialb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="razaoSocialI"
     onChange={onChange}
     placeholder="Razão social"
   />
</div>


<div className="col-span-3">
<label htmlFor="nomeFantasiaI" className="form-label inline-block mb-2 text-gray-700">
  Nome Fantasia</label>
  <input type="text"
     name="nomeFantasiab"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="nomeFantasiaI"
     onChange={onChange}
     placeholder="Nome fantasia"
   />
</div>

<div className="col-span-3">
<label htmlFor="cnpjI" className="form-label inline-block mb-2 text-gray-700">
  CNPJ</label>
  <input type="text"
     name="cnpjb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cnpjI"
     onChange={onChange}
     placeholder="__.___.___/____-__"
   />
</div>

<div className="col-span-3">
<label htmlFor="numeroInscricaoI" className="form-label inline-block mb-2 text-gray-700">
  Número de Inscrição</label>
  <input type="text"
     name="numeroInscricaob"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroInscricaoI"
     onChange={onChange}
     placeholder="Número de inscrição"
   />
</div>

<div className="col-span-3">
<label htmlFor="enderecoSedeI" className="form-label inline-block mb-2 text-gray-700">
  Endereço Sede</label>
  <input type="text"
     name="enderecoSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="enderecoSedeI"
     onChange={onChange}
     placeholder="Endereço sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="numeroSedeI" className="form-label inline-block mb-2 text-gray-700">
  Número Sede</label>
  <input type="text"
     name="numeroSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroSedeI"
     onChange={onChange}
     placeholder="Número sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="complementoSedeI" className="form-label inline-block mb-2 text-gray-700">
  Complemento Sede</label>
  <input type="text"
     name="complementoSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="complementoSedeI"
     onChange={onChange}
     placeholder="Complemento sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="bairroSedeI" className="form-label inline-block mb-2 text-gray-700">
  Bairro Sede</label>
  <input type="text"
     name="bairroSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="bairroSedeI"
     onChange={onChange}
     placeholder="Bairro sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="cepSedeI" className="form-label inline-block mb-2 text-gray-700">
  CEP Sede</label>
  <input type="text"
     name="cepSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cepSedeI"
     onChange={onChange}
     placeholder="CEP sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="cidadeEstadoSedeI" className="form-label inline-block mb-2 text-gray-700">
  Cidade e Estado da Sede</label>
  <input type="text"
     name="cidadeEstadoSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cidadeEstadoSedeI"
     onChange={onChange}
     placeholder="Cidade e estado da sede"
   />
</div>


<div className="col-span-3">
<label htmlFor="emailProfissionalI" className="form-label inline-block mb-2 text-gray-700">
  Email Profissional</label>
  <input type="text"
     name="emailProfissionalb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="emailProfissionalI"
     onChange={onChange}
     placeholder="Email profissional"
   />
</div>

<div className="col-span-3">
<label htmlFor="dataDeAberturaI" className="form-label inline-block mb-2 text-gray-700">
  Data de abertura</label>
  <input type="date"
     name="dataDeAberturab"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="dataDeAberturaI"
     onChange={onChange}
     placeholder="Data de Abertura"
   />
</div>

<div className="col-span-3">
<label htmlFor="quantidadePessoasOcupadasI" className="form-label inline-block mb-2 text-gray-700">
  Quantidade de Pessoas Ocupadas</label>
  <input type="text"
     name="quantidadePessoasOcupadasb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="quantidadePessoasOcupadasI"
     onChange={onChange}
     placeholder="Quantidade de pessoas ocupadas"
   />
</div>

<div className="col-span-3">
<label htmlFor="ramoDaAtividadeI" className="form-label inline-block mb-2 text-gray-700">
  Ramo da Atividade</label>
  <input type="text"
     name="ramoDaAtividadeb"
     required
     className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     id="ramoDaAtividadeI"
     onChange={onChange}
     placeholder="Ramo da atividade"
   />
</div>

<div className="col-span-3">
  <label htmlFor="numeroDaPastab" className="form-label inline-block mb-2 text-gray-700">Número da Pasta</label>
  <input type="text"
    name="numeroDaPastab"
    required
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="numeroDaPastaI"
    onChange={onChange}
    placeholder="Número da Pasta"
  />
</div>

<br></br>

<div className="mb-5">
<h1 className="text-black font-bold text-center text-xl whitespace-nowrap">Pasta de Documentos</h1>
</div>

<br></br>

<h1 className="text-black text-center font-bold whitespace-nowrap">Alvará de Funcionamento - </h1>


<div className="col-span-3">
  <label htmlFor="validadeAlvarab" className="form-label inline-block mb-2 text-gray-700">Validade</label>
  <input type="text"
    name="validadeAlvarab"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="validadeAlvaraI"
    onChange={onChange}
    placeholder="Validade Alvará"
  />
</div>
<div className="col-span-3">
  <label htmlFor="areaM2Funcionamentob" className="form-label inline-block mb-2 text-gray-700">
    Área M²
  </label>
  <input type="text"
    name="areaM2Funcionamentob"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="areaM2FuncionamentoI"
    onChange={onChange}
    placeholder="Área M²"
  />
</div>
<div className="col-span-3">
  <label htmlFor="numeroInscricaoMunicipalb" className="form-label inline-block mb-2 text-gray-700">
    Número da Inscrição Municipal
  </label>
  <input type="text"
    name="numeroInscricaoMunicipalb"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="numeroInscricaoMunicipalI"
    onChange={onChange}
    placeholder="Número de Inscrição Municipal"
  />
</div>


<h1 className="text-black mt-10 text-center font-bold whitespace-nowrap">Certificado Conformidade Corpo de Bombeiros - </h1>

<div className="col-span-3">
  <label htmlFor="dataDeEmissaoBombeirosb" className="form-label inline-block mb-2 text-gray-700">
    Data de Emissão
  </label>
  <input type="date"
    name="dataDeEmissaoBombeirosb"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeEmissaoBombeirosI"
    onChange={onChange}
    placeholder="Data de Emissão"
  />
</div>
<div className="col-span-3">
  <label htmlFor="dataDeValidadeBombeirosb" className="form-label inline-block mb-2 text-gray-700">
    Data de Validade
  </label>
  <input type="date"
    name="dataDeValidadeBombeirosb"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeValidadeBombeirosI"
    onChange={onChange}
    placeholder="Data de Validade"
  />
</div>

<div className="col-span-3">
  <label htmlFor="areaM2Bombeirosb" className="form-label inline-block mb-2 text-gray-700">
    Área M²
  </label>
  <input type="text"
    name="areaM2Bombeirosb"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="areaM2BombeirosI"
    onChange={onChange}
    placeholder="Área M²"
  />
</div>

<h1 className="text-black mt-10 text-center font-bold whitespace-nowrap">Alvará de Vigilância Sanitária - </h1>

<div className="col-span-3">
  <label htmlFor="dataDeValidadeVigilanciab" className="form-label inline-block mb-2 text-gray-700">
    Data de Validade da Vigilância Sanitária
  </label>
  <input type="date"
    name="dataDeValidadeVigilanciab"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeValidadeVigilanciaI"
    onChange={onChange}
    placeholder="Data de Validade"
  />
</div>

<div className="col-span-3">
  <label htmlFor="inscricaoVigilanciaSanitariab" className="form-label inline-block mb-2 text-gray-700">
    Inscrição Vigilância Sanitária
  </label>
  <input type="text"
    name="inscricaoVigilanciaSanitariab"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="inscricaoVigilanciaSanitariaI"
    onChange={onChange}
    placeholder="Inscrição Vigilância Sanitária"
  />
</div>

<h1 className="text-black mt-10 text-center font-bold whitespace-nowrap">Licença Ambiental - </h1>


<div className="col-span-3">
  <label htmlFor="dataDeEmissaoLicencaAmbientalb" className="form-label inline-block mb-2 text-gray-700">
    Data de Emissão
  </label>
  <input type="date"
    name="dataDeEmissaoLicencaAmbientalb"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeEmissaoLicencaAmbientalI"
    onChange={onChange}
    placeholder="Data de Emissão da Licença Ambiental"
  />
</div>

<div className="col-span-3">
  <label htmlFor="dataDeValidadeLicencaAmbientalb" className="form-label inline-block mb-2 text-gray-700">
    Data de Validade da Licença Ambiental
  </label>
  <input type="date"
    name="dataDeValidadeLicencaAmbientalb"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeValidadeLicencaAmbientalI"
    onChange={onChange}
    placeholder="Data de Validade da Licença Ambiental"
  />
</div>

<h1 className="text-black mt-10 text-center font-bold whitespace-nowrap">Contrato de Imóvel - </h1>


<div className="col-span-3">
  <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-gray-700">
    Tipo de Contrato
  </label>
  <input type="text"
    name="tipoContratob"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="tipoContratoI"
    onChange={onChange}
    placeholder="Tipo de Contrato"
  />
</div>

<h1 className="text-black mt-10 text-center font-bold whitespace-nowrap">Declaração de Baixa de Inscrição Municipal  - </h1>


<div className="col-span-3">
  <label htmlFor="baixadab" className="form-label inline-block mb-2 text-gray-700">
    Baixada
  </label>
  <input type="text"
    name="baixadab"
    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    id="baixadaI"
    onChange={onChange}
    placeholder="Baixada"
  />
</div>






<div className="col-span-3">
        <button type="submit" className="group bg-blue-600 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
              <g>
              <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
              <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
              </g>
              </svg>

						</span>
					  <h2 className="text-white">Concluir Registro</h2>
				</button>
  </div>

</div>
</form>

</div>
)

}

export default App;

