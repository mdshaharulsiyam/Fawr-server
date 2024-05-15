const service = require("../../models/service")

const GetAllServices = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {}
    if (category !== 'all') filter.category = `${category}`
    const result = await service.find(filter).limit(6)
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}
const GetAllCategory = async (req, res) => {
  try {
    const result = await service.aggregate([
      {
        $group: {
          _id: "$category"
        }
      }
    ])
    res.send(result)
  } catch (error) {
    res.send(error)
  }
}


module.exports = { GetAllServices, GetAllCategory }