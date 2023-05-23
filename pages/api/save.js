// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openDb from '../../database/setupDatabase'
export default async function handler(req, res) {
  // GET - MOSTRAR TODOS
  const db = await openDb();
  const createUser = await db.prepare("INSERT INTO users (nome, email, idade) VALUES ( ?, ?, ?)")
  const runCreate = await createUser.run('CHICO', 'francisco@gmail.com', 30 )

  // await runCreate.finalize()
  
  res.status(200).json("Salvo com sucesso!")
}
