const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    
    const numRandom = req.query.cant
    let random = []

    for (let i = 0; i < 100; i++) {
        let result = Math.floor(Math.random() * numRandom)
        random.push(result)
    }

    res.send(random)
})


module.exports = router
