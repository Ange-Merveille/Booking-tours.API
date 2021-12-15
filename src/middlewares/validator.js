import {check,validationResult}from "express-validator";
class Validator{
    static ValidatorInput=(req,res,next)=>{
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage= errors.errors.map((err) =>err.msg);
        return res.status(400).json({message: errorMessage});

    }
    return next();
    }
    static newAccountRules(){
        return[
        check("email","email is invalid").trim().isEmail(),
        check("password","password is not strong").trim().isStrongPassword(),
        check("lastName","last Name should be valid").trim().isAlpha(),
        check("firstName","first Name should be valid").trim().isAlpha(),
        check("gender","gender should be among male,female,other,not-say").trim().isIn(["male","female","other","not-say"]),
    
        ];
    }
    static newTourRules(){
        return[
        check("title","title is invalid").trim().isString(),
        check("description","description should be valid").trim().isString(),
        check("price","price  should be valid").trim().isCurrency(),
        check("phone","phone should be valid").trim(). isNumeric(),
        check("dueDate"," due date should be valid").trim(). isDate(),
        check("dateScheduled","due date should be valid").trim(). isDate(),
        ];
    }
    

    

}
export default Validator;