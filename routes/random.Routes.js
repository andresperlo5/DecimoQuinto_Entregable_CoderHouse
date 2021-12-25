const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    
    const numRandom = req.query.cant
    let random = []
    let unicosElementos = []
    let vecesRepetidos = []
    let contador = 1
    let obj = []

    for (let i = 0; i < 100; i++) {
        let result = Math.floor(Math.random() * numRandom)
        random.push(result)
    }

    for(let i = 0; i< random.sort().length; i++){
        if(random[i+1] === random[i]){
           contador++
        }else{
            unicosElementos.push(random[i])
            vecesRepetidos.push(contador)
            contador = 1
        }
    }

    for(let j = 0; j < unicosElementos.length; j++){
          obj.push(`${unicosElementos[j]}: se repite ${vecesRepetidos[j]} `) 
    }

    res.json({obj})
})


module.exports = router
