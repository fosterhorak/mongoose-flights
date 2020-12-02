const mongoose = require('mongoose');
// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
        //  ^^^    used airportcodes.org
    }, 
    arrival: {
        type: Date
    }
}, {
    //add creatAt and updatedAt properties
    timestamps: true
});

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
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let c = new Date(year +1, month, day);
            return c;
        }
    },
    destinations:  [destinationSchema]
}, {
    //add creatAt and updatedAt properties
    timestamps: true
});

//compile shema into model and export
module.exports = mongoose.model('Flight', flightSchema);