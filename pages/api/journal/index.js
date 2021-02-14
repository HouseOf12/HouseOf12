import nc from 'next-connect';
import { all } from '../../../middlewares/index';
import { insertEntry } from '../../../db/journal';

const handler = nc();

handler.use(all);


// Post route to create journal entry which will be specific to the user, by id. 
//Notes: 
    //in here we will want to grab the info out of req.body by setting variables or using destructuring
    //then you call the relevant imported function from db folder and pass in the database and then the data/info (via the variables)
    //Note: req.db is available to us via the code in database.js
handler.post(async (req, res) => {
    //req.body has userId, title, and body
    const { userId, title, body} = req.body; //using desconstruction 
    //OR written like this
    // let userId = req.body.userId;
    // let title = req.body.title;
    // let body = req.body.body;

    //call the insertEntry function that does an insert to the database and pass in/ expects: db, userId, title, body
    //insertEntry(req.db, userId, title, body)
    const entry = await insertEntry(req.db, userId, title, body)
});


export default handler;
