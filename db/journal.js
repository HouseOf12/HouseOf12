//file that holds functions for connecting to database and creating/editing journal entries
//entry: body, title, date, userId

//creates ids 
import { nanoid } from 'nanoid';

//this function is attached to the post method for journal in api/journal/index
export async function insertEntry(db, userId, title, body) {
    return db
    .collection('journals')
    .insertOne({
        _id: nanoid(),
        userId,
        title,
        body,
        date: Date()
    })
    .then(({ ops }) => {
        console.log('successful entry created', ops);
        //ops is an array in the repsonse object, ops at 0 is the object that object of the entry that was just put into the db
        return ops[0];
    })
}

//insertOne response is a very large, to see what was added, go into ops (comes from response)
