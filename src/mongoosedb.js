const mongoose = require('mongoose');

const user = 'root_';
const pass = 'pass_root';
const database = 'todo_sample';
const serverName = 'cluster0.r6tg2cs.mongodb.net';

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }
            )
            .then((res) => console.log(`Connection Succesful ${res}`))
            .catch((err) => console.log(`Error in DB connection in ${err}`))
    },

}

// mongodb+srv://<username>:<password>@cluster0.r6tg2cs.mongodb.net/?retryWrites=true&w=majority
