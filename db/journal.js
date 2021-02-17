//file that holds functions for connecting to database and creating/editing journal entries
//entry: body, title, date, userId

//creates ids 
import { nanoid } from 'nanoid';

//journal entry get route 
//entries is its own collection, have to grab all the journal entries that have the userId that is equal to the current user: .find() //a function (.forEach, .toArray, etc) needs to be called on the .find BEFORE the .then can be called
export async function getEntries(db, currentUserId) {
    return db
    .collection('journals')
    .find({userId: currentUserId})
    .toArray()
    .then(response => {
        //return the response (entries) to where getEntries is called
        return response;
    })
}

//this function is attached to the post method for journal in api/journal/index
export function insertEntry(db, userId, title, body) {
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

export function deleteEntry(db, id) {
    return db
    .collection('journals')
    .findOneAndDelete({
        _id: id
    })
    .then(res=>{
        console.log("this is deleted")
    })
    
}

