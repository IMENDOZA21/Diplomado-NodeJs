const express = require('express');
const tasksService = require('./../services/tasks.service');

const router = express.Router();


router.get('/',tasksService.getTasks);
router.get('/:id',tasksService.getById);
router.post('/',tasksService.create);
router.put('/:id',tasksService.update);
router.delete('/:id',tasksService.deleteById);


module.exports = router;




