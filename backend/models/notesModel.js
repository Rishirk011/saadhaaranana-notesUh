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
            default:''
        },

        category:{
            type:String,
            trim:true,
            default:'General'
        },

        images:[String],

        isPinned:{
            type:Boolean,
            default:false
        }
        
    },

    { timestamps: true }

);

const notesModel = mongoose.model('notes',notesSchema);

export default notesModel;

