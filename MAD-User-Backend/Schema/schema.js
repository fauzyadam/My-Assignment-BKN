  import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const UserSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true,
    min:"1996-01-01",
    max:"2022-01-01"
  },
  school: {
    type: String,
    required: true
  },
});


const UserModel = model('User',UserSchema);
export default UserModel;
