import ToursInfos from "../model/tours";

class ToursController{

    // create tour in db
    static async createTour(req,res){
        req.body.user= req.user._id;
        const Tours = await ToursInfos.create(req.body);
        if(!Tours){
       return res.status(404).json({error:"tour not registered"})
        }
        return res 
        .status(200)
        .json({message:'tour created successfully',data:Tours});
    }
    
    // get all tours
    static async getAlltours(req,res){
        const Tours = await ToursInfos.find();
       
        if(!Tours){
       return res.status(404).json({error:"tour not retrieved"})
        }
        return res 
        .status(200)
        .json({message:'successfully retrived tours',data:Tours});
    }
    //get oneUSER
    static async getOneTour(req,res){
        const Tour =await ToursInfos.findById(req.params.id);
        if(!Tour){
            return res.status(404).json({error:"user not found"});
        }
        return res
        .status(200)
        .json({message:'User found',data:Tour});
    }
    // delete onetours
    static async deleteOneTour(req,res){
        const Tour =await ToursInfos.findByIdAndDelete(req.params.id);
        if(!Tour){
            return res.status(404).json({error:"user not found"});
        }
        return res
        .status(200)
        .json({message:'One data deleted',data:Tour});
    }
 
}
export default ToursController;