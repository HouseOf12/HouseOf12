import {useState, useEffect} from 'react';
import JournalForm from "../components/JournalForm"
import { useCurrentUser } from '../hooks/index';
import { all } from '../middlewares/index';
import { extractUser } from '../lib/api-helpers';
import { findUserById } from '../db/index';


export default function journal({ user }) {
    const [entries, setEntries] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');


    //console.log('current user', currentUser)
    //need a use effect to call the backend and retrieve the journal entries 
    useEffect(() => {
       
       grabEntries()

    }, [])

    //function to call the backend and retrieve journal entries
    const grabEntries = async () => {
        //we dont end up sending the get request to the get route. Because 1. you cant pass a body to a get route and 2. current user is available through req.user
        //const userId = user._id;
        
        //below is the alternative route linked to api/journal/[user]
        //const res = await fetch("/api/journal/" + userId,{
        const res = await fetch("/api/journal/",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
            //body: JSON.stringify(userId)  
        })
        if (res.status === 201) {
            console.log('response from get entry call', res)
            const entriesObj = await res.json();
            console.log('are we getting the entries?', entriesObj)
            mutate(entriesObj);
        } else {
            setErrorMsg(await res.text());
        }
    }


    return (
        <div>

        
            <JournalForm/>
        </div>
    )
}

//function that is able to grab and return the user to the functional component 
//this function getServerSideProps is part of Next.js data fetching and will be run before component loads
export async function getServerSideProps(context) {
    await all.run(context.req, context.res);
    const user = extractUser(await findUserById(context.req.db, context.req.user._id));
    if (!user) context.res.statusCode = 404;
    return { props: { user } };
  }