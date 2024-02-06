const {pool}=require('./dbConfig')


const list = async () => {
  const data = await pool.query(`SELECT * FROM "taskList"`)
  console.log(data.rows)
}
