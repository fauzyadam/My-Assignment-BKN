import dotenv from 'dotenv';
import express from 'express';
import UserModel from './Schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());

const PORT =  process.env.PORT || 5000 ;

const db = process.env.DB_URL;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

app.get('/',(req, res) =>{
    res.json({
        message: 'Welcome to users backend API'
    })
})
// Get all users
app.get('/users',async(req, res) =>{

const allUsers = await UserModel.find({});
if(allUsers){
//sucess
return res.status(200).json({
    message:'Users fetched successfully',
    data: allUsers
})
}else // error
{
    return res. status(500).json({
        message:'Sorrys!, unable to fetch users'
    })
}
});

app.post('/user', async(req, res)=>{
    //  const { firstName, lastName, dateOfBirth, school} =req.body
     const newUser = await UserModel.create(req.body)
              if(newUser){
                    //success
                    return res.status(200).json({
                        message: 'User  has been created ',
                        data:newUser
                    })
                }else{
                    return res.status(500).json({
                        message:'Error creating User'
                    })

                }
                });
    

app.listen(PORT, () => { 
console.log(`listening on port ${PORT}`);
})
