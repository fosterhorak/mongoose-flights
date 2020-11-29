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
            let today = new Date().getDate();
            let thisMonth = new Date().getMonth();
            let thisYear = new Date().getFullYear();
            let nextYear = thisYear + 1;
            //console.log(`${thisMonth}/${today}/${nextYear}`);
            return (`${thisMonth}/${today}/${nextYear}`);
        }
    },
    destinations:  [destinationSchema]
}, {
    //add creatAt and updatedAt properties
    timestamps: true
});

//compile shema into model and export
module.exports = mongoose.model('Flight', flightSchema);