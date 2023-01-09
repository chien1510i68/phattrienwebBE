const AccountModel = require("../models/Account");
// const Account = require("../models/Account");

class LoginController {
  // Get method
  create(req, res, next) {
    res.render("account/login");
  }
  
  // Post method 
  authorization(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    AccountModel.findOne({
      email : email,
      password : password
    })
    .then((data) =>{
      if(data){
        console.log("Dang nhap thanh cong ");
          if(data.roll == 1){
            console.log("Ban la user")
             res.redirect("/")
          }else{
            console.log("Ban khong la user")
            
          }

      }else{
        console.log("Dang nhap that bai ");
        res.redirect("/login/create")
        
      }
    })
   
  }
  
}
module.exports = new LoginController();
