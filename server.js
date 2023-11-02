const express = require('express');
const appRoute = require('./routes/route.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({origin:'*'}));
app.use(express.json());

/** routes */
app.use('/api', appRoute);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
// })
module.exports= app;