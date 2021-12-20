import mongoose from 'mongoose';
import { nextTick } from 'process';
const tourSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
   
    {
        
            title: String,
            description: String,
            seats: String,
            available: String,
            dateScheduled: String,
            dueDate: String,
            phone: String,
            price: String,
            user:{
                type:mongoose.Schema.ObjectId,
                ref:'User',

            },
            images:[
            {
                type:String,
            },
            ],
       
           
        },
    
        {
            timestamps: true,  // means it has been stored
        }
        
);
tourSchema.pre(/^find/,function (next){
    this.populate({path:"user",
    select:"lastName email address"});
    next()
} 
    
)



const tour = mongoose.model('Tour',tourSchema)
export default tour;


