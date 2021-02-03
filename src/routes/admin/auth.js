const express = require('express')
const { signup, signin } = require('../../controllers/admin/auth')
const { isRequestValidate, validateSignupRequest, validateSigninRequest } = require('../../validators/auth')
const router = express.Router()


router.get('/admin/signin',validateSigninRequest,isRequestValidate, signin)
router.post('/admin/signup',validateSignupRequest, isRequestValidate, signup)



module.exports = router