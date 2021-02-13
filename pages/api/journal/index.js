import nc from 'next-connect';
import { all } from '../../../../middlewares/index';
import { findUserById } from '../../../../db/index';
import { extractUser } from '../../../../lib/api-helpers';

const handler = nc();

handler.use(all);


// Post route to create journal entry which will be specific to the user, by id. 
handler.post(async (req, res) => {
 //Gabby gonna get back to me real quick
 //This is attached the submit function in the JournalForm
});


export default handler;
