const express = require('express')

module.exports = function(server) {
    //URL das rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}