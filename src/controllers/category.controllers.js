import {pool} from '../db/database.js'

export const getCategory = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM category')
        res.json(rows)
    }catch(error){
        res.status(500).json({
            message: "Something goes wrong"
        })
    }
}