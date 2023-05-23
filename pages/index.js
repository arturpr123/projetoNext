import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'

export default function Home() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('/api/usuarios')
      .then((resposta) => resposta.json())
      .then(data => {
        setUsuarios(data);
        console.log(data);
      })
  })



  const adicionar = () => {
    
  }

  const formulario = (evento) => {
    evento.preventDefault()
    let usuario = {
      nome: evento.target[0].value,
      email: evento.target[1].value,
      senha: evento.target[2].value,
      idade: evento.target[3].value
    }

    const requisicao = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    }

    fetch('/api/usuarios', requisicao )
      .then((resposta) => resposta.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <>
      <Head>
        <title>Cadastro de Usuário</title>
      </Head>
      <main className={styles.main}>
        <button onClick={(evento) => adicionar()}>Novo Usuário</button>

        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>nome</td>
              <td>email</td>
              <td>idade</td>
            </tr>
          </thead>
          <tbody>
            {/*Aqui tem que ficar dinâmico.*/}
            {usuarios.map(usuario => (
            <tr>
              <td>{usuario.ID}</td>
              <td>{usuario.NOME}</td>
              <td>{usuario.EMAIL}</td>
              <td>{usuario.IDADE}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </main>



      <form className={styles.formulario}  class='formulario' onSubmit={formulario} >
        <br />
        <input type="text" name="nome" placeholder="Nome de usuário:" />
        <br />
        <br />
        <input type="email" name="email" placeholder="E-mail:" />
        <br />
        <br />
        <input type="text" name="idade" placeholder="Idade:" />
        <br />
        <br />
        <button onClick={adicionar}>Enviar</button>
      </form>
    </>
  )
}
