import {useState, useEffect} from 'react';
import JournalForm from "../components/JournalForm"
import { useCurrentUser } from '../hooks/index';
import { all } from '../middlewares/index';
import { extractUser } from '../lib/api-helpers';
import { findUserById} from '../db/index';
import axios from 'axios';
import { TiArrowMaximiseOutline } from 'react-icons/ti';
import {Center,Box, useColorMode, TextArea} from "@chakra-ui/react"
// import JournalEntry from '@/components/JournalEntry';



export default function journal({ user, data }) {
    //console.log('data???', data)
    const [entries, setEntries] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');


    //console.log('current user', currentUser)
    //need a use effect to call the backend and retrieve the journal entries 
    useEffect(() => {
       grabEntries()
    }, [])

    useEffect(() => {
        displayEntry
     }, [])

    

    //using axios
    const grabEntries = async () => {
        //we dont end up sending the get request to the get route. Because 1. you cant pass a body to a get route and 2. current user is available through req.user
        const res = await axios.get("/api/journal/")
        console.log('res on the get', res.data)
        setEntries(res.data)
    }
    //send and cache in your id file
    const deleteEntry = async (id) => {
        const res = await axios.delete("/api/journal/" + id)
       
    }

    //map through my entries to display
    const displayEntry = () => {
        console.log(entry.title)
        {entries.map(entry=>{
            entry.title,
            entry.body
            
        } , 

        )}
    }

    console.log('entries', entries)

    const bgColor = {
        light: "rgba(70, 93, 114, 0.9)",
        dark: "rgba(74, 85, 104, 0.9)",
      };
      const theColor = {
        light: "rgba(70, 93, 114, 0.9)",
        dark: "rgba(43, 70, 115, 0.82)",
      };
      const textColor = { light: "blue.200", dark: "yellow.500" };
      const { colorMode, toggleColorMode } = useColorMode();


    return (
    <div>
     <JournalForm/>
     <br></br>
     <Center> 
        <div>
            <Box
                  border="4px solid rgba(212, 175, 53, 0.6)"
                  borderRadius={16}
                  color={textColor[colorMode]}
                  bgColor={bgColor[colorMode]}
                  mt="8vh"
                  w="2xl" 
                  padding={2}
                  h="56vh"
                >
                {entries.map(entry=>
                <div>
                    <h2>Date: {entry.date}</h2>
                    <br></br>
                    <h2> Title: {entry.title} </h2>
                    <br></br>
                    <p> Journal Entry: {entry.body}</p>
                    <div>
                    <button onClick={()=> deleteEntry(entry._id)}> Delete</button>
                    </div>
                    
                </div>
                )}
 
            </Box>
        </div></Center>
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