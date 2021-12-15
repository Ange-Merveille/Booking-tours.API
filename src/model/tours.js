import mongoose from 'mongoose';
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
            images:[
            {
                type:String,
            },
            ],
       
           
        },
    
        {
            timestamps: true,  // means it has been stored
        }
        
)



const tour = mongoose.model('Tour',tourSchema)
export default tour;


