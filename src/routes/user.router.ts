import express from 'express'
import { login, register } from '../controller/user.controller'

const router = express.Router()

//Criar novo usuário
router.post('/register', register)

//Recupera um usuário
router.post('/login', login)

export default router
