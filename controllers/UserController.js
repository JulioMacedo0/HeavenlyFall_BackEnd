const express = require('express');

const User = require('../model/user');

const router = express.Router();

router.post('/save', async (req, res) => {
    const { user } = req.body;
    const { points } = req.body;
    const player = await User.findOne({ user })
    let userSaved = null
    console.log(req.body)
    try {
        if(player && points > player.points ){
          userSaved = await User.findOneAndUpdate({user}, {points})

        }else if(!player){
             userSaved =  await User.create(req.body);
    
        }
       
        return res.send({ userSaved });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed ' + err });
  
    }
});

module.exports = app => app.use('/user', router)