//file that holds functions for connecting to database and creating/editing journal entries
//entry: body, title, date, userId

//creates ids 
import { nanoid } from 'nanoid';

export async function insertEntry(db, {title, body, userId}) {
    return db
    .collection('journals')
    .insertOne({
        _id: nanoid(),
        userId,
        title,
        body
    })
    .then((error, response) => {
        console.log('ERROR FROM INSERT JOURNAL ENTRY', error);
        console.log('RESPONSE FROM INSERT JOURNAL ENTRY', response);
        return response;
    } )
}
