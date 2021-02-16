import {useState, useEffect} from 'react';
import JournalForm from "../components/JournalForm"
import { useCurrentUser } from '../hooks/index';
import { all } from '../middlewares/index';
import { extractUser } from '../lib/api-helpers';
import { findUserById } from '../db/index';
import axios from 'axios';
import { TiArrowMaximiseOutline } from 'react-icons/ti';


export default function journal({ user, data }) {
    //console.log('data???', data)
    const [entries, setEntries] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');


    //console.log('current user', currentUser)
    //need a use effect to call the backend and retrieve the journal entries 
    useEffect(() => {
       
       grabEntries()

    }, [])

    //using axios
    const grabEntries = async () => {
        //we dont end up sending the get request to the get route. Because 1. you cant pass a body to a get route and 2. current user is available through req.user
        const res = await axios.get("/api/journal/")
        console.log('res on the get', res.data)
        setEntries(res.data)
    }

    console.log('entries', entries)


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

// export async function getServerSideProps(context) {
//     await all.run(context.req, context.res);
//     const res = await axios.get("/api/journal")

//     console.log('gimme the response', res.body)
    
//     // if (!data) {
//     //     return {
//     //     notFound: true,
//     //     }
//     // }

//     return {
//         props: {res}, // will be passed to the page component as props
//     }
// }