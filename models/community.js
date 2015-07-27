var mongoose = require('mongoose');

var CommunityModel = mongoose.model('community',{
        name:{
            type:String,
            unique: true,
            required:true
        },
    description:{
        type: String
    },
    memberCount:{
        type: Number
    },
    adminUname:{
        type: String,
        unique: true,
        required: true
    },
    createdDate:{
        type: Date,
        required: true
    },
    displayPics:{
        type:String
    }});




module.exports =  CommunityModel;