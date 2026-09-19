import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
    
    {

        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'users'
        },

        title:{
            type:String,
            default:'untitled'
        },
        
        body:{
            type:String,
            required:true
        },

        category:{
            type:String,
            required:true,
            trim:true
        },

        images:[{type:String}],

        isPinned:{
            type:boolean,
            default:false
        }
        
    },

    { timestamps: true }

);

const notesModel = mongoose.model('notes',notesSchema);

export default notesModel;

