const mongoose = require('mongoose');
// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United']        
    },
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        //  ^^^    used airportcodes.org
        default: 'DEN'
    }, 
    flightNo: {
        type: Number,
        required: true,       
        min: 10, 
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getDate();
            // ***need to push date forward one year (how??)
        }
    }, 
}, {
    //add creatAt and updatedAt properties
    timestamps: true
});

//compile shema into model and export
module.exports = mongoose.model('Flight', flightSchema);