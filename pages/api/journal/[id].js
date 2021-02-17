import nc from 'next-connect';
import { all } from '../../../middlewares/index';
import {deleteEntry} from '../../../db/journal'


const handler = nc();

handler.use(all);




handler.delete(async(req,res)=> {
    
    const id = req.query.id
    const entry = await deleteEntry(req.db, id) 

})

export default handler