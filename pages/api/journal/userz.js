import nc from 'next-connect';
import { all } from '../../../middlewares/index';
import { getEntries } from '../../../db/journal';

const handler = nc();

handler.use(all);

//Get route to retrieve all the journal entries associated with the current user
handler.get(async (req, res) => {
    console.log('hitting route?')
    console.log('the request', req.user)
    let currentUserId = req.user._id;
    
    //call getEntries function from the db/journal and pass in the database and the currentUserId
    const entries = await getEntries(req.db, currentUserId)
    console.log('my entries', entries)
})

export default handler;