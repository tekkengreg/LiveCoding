const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Test');
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', () => {
        console.log("connected")

        var DummySchema = mongoose.Schema({
            
        }, {
                strict: false
            });

        var Dummy = mongoose.model('dog', DummySchema);

        Dummy.find()
            .$where(function () {
                return this.name === "yaha"
            })
            .cursor()
            .on('data', function (doc) { console.log(doc); })
            .on('end', function () { console.log('Done!'); });

    });