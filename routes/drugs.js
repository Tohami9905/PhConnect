import express from 'express'
const router = express.Router()
import {getDrugs,getDrug} from '../controller/drugs.js'


router.get('/',getDrugs)
router.get('/:id',getDrug)
export default router;
