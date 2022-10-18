let houses = require('./db.json')
let houseIndex = 4

module.exports = {

    getHouse: (req, res) => {
        res.send(houses)
    },
    deleteHouse: (req, res) => {
        let deleteId = req.params.id
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.send(houses)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body

    let newHouse = {
        id: houseIndex,
        address,
        price,
        imageURL,
    }
    houseIndex++
    houses.push(newHouse)
    res.send(houses)
    },
    updateHouse: (req, res) => {
      let type = req.body.type
      let id = req.params.id
      let index = houses.findIndex(element => element.id === +id)
      
      if (type === 'plus') {
        houses[index].price += 10000
      } else if (type === 'minus') {
        houses[index].price -= 10000
      } else {
        res.sendStatus(400)
      }
      res.send(houses)
    },
    

}