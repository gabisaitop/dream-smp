const pool = require('../../db')
const getStreamer = "SELECT username, age, to_char(date_born, 'dd mon yyyy') as date_born, to_char(date_joined, 'dd mon yyyy') as date_joined, location, description, networth, pronouns, sub_count, photo, link FROM streamers WHERE username = $1;"
const getAllStreamers = "SELECT username, age, to_char(date_born, 'dd mon yyyy') as date_born, to_char(date_joined, 'dd mon yyyy') as date_joined, location, description, networth, pronouns, sub_count, photo, link FROM streamers"

const getDataStreamer = (req,res) =>{
    const username = req.params.username

    pool.query(getStreamer, [username], (error,results) =>{
        const noFound = !results.rows.length
        if (noFound){
            res.status(420).send('Não achei esse streamer')
        }

        else{
            pool.query(getStreamer, [username], (error,results) =>{
                if (error) throw error
                res.status(200).json(results.rows)
            })
        }
    })
}

const getDataAllStreamers = (req,res) =>{

    pool.query(getAllStreamers, (error,results) =>{
        if (error) throw error
        res.status(200).json(results.rows)
    })

}

module.exports = {
    getDataStreamer,
    getDataAllStreamers
}