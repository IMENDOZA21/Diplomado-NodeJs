const express = require('express');
const usersService = require('./../services/user.service');

const router = express.Router();


router.get('/',usersService.getUsers);
router.get('/:id',usersService.getById);
router.post('/',usersService.create);
router.put('/:id',usersService.update);
router.delete('/:id',usersService.deleteById);


module.exports = router;




