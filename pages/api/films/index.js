//import Database from '../../../database/db'

const AllFilms = async (req, res) => {
  const db = new Database()
  const allFilms = await db.getAll()
  const length = allFilms.length
  const id = req.query.id
  /* const film = allFilms.find(film => film.id === id) */
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    allFilms,
    length
    }))
}


export default AllFilms
