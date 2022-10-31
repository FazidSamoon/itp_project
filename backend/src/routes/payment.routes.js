import Express from 'express'

const paymentRoutes = Express.Router()

paymentRoutes.post("/" , createPayment)

export default paymentRoutes