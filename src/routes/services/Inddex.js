const { GetAllServices, GetAllCategory } = require('../../api/service')

const serviceRouter = require('express').Router()

serviceRouter.get('/service',GetAllServices).get('/service/category',GetAllCategory)
module.exports = serviceRouter