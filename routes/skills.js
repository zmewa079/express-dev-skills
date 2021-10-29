import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index) 
router.get('/:id', skillsCtrl.show)


export {
  router
}
