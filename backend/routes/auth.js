const router = require ('express').Router();
const passport = require ('passport');
const User = require ('../models/User');

//Logout
router.get('/logout', (req,res)=>{
  req.logout();
  return res.status(200).json({message: 'Successfully log out'})
})

//Login
router.post('/login', passport.authenticate('local'), (req,res)=>{
  User.findById(req.user.id)
  .then(user => {
    return res.status(200).json(user);
  })
  .catch(e=>{
    return res.status(401).json(e)
  })
})

//Signup
router.post('/signup',(req,res)=>{
  User.register(req.body, req.body.password)
  .then(user=>{
    req.login(user,(err)=>{
      if(err)return
      res.status(200).json(req.user)
    })   
  })
  .catch(e=>{
    console.log(e)
    return res.status(401).json(e)
  })
})


module.exports = router;