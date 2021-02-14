import React, {useState} from 'react'
<<<<<<< HEAD
import Head from 'next/head';
import { Editable, EditableInput, EditablePreview, Button} from "@chakra-ui/react"
=======
import { Editable, EditableInput, EditablePreview, Button, FormLabel, Input} from "@chakra-ui/react"
import { useCurrentUser } from '../hooks/index';

>>>>>>> 10c642899e207687346173d4f35f55228301663f



// Rename to journalForm?
// This form already displays the journal entry once you "click to edit"
const Journal = () => {
    //grab the current user so you can pass the id to the backend post call in onSubmit
    const [currentUser] = useCurrentUser();

    const [errorMsg, setErrorMsg] = useState('');

<<<<<<< HEAD
//stores the entry
const[body,setBody] = useState("")
=======
    //stores the title
    const[title, setTitle] = useState("")

    //stores the entry
    const[body, setBody] = useState("");
>>>>>>> 10c642899e207687346173d4f35f55228301663f


    // Stores the title in our title state
    const handleChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

<<<<<<< HEAD
// The button should handle both the submittal of the new entry, and if the 
// user wants edit their journal entry. 

const handleSubmit = async (e) =>{
    e.preventDefault()
    const entry = {
        title: title,
        body: body
    }
    const res = await fetch("/api/journal",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(entry)  
    })
=======
    // Stores the body in our body state
    const handleChangeBody = (e) => {
        const body = e.target.value;
        setBody(body);
    };


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const entry = {
            userId: currentUser._id,
            title: title,
            body: body
        }
        console.log('entry info', entry)
        const res = await fetch("/api/journal",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(entry)  
        })
>>>>>>> 10c642899e207687346173d4f35f55228301663f
        if (res.status === 201) {
            const entryObj = await res.json();
            mutate(entryObj);
        } else {
            setErrorMsg(await res.text());
        }
    }


    return (
        <div>
            <h1 className = "journal_entry_title">Journal Entry:</h1>
            <Editable >
                <EditablePreview />
                {/* <EditableInput onChange={(e) => onChangeTitle(e)} />
                <EditableInput onChange={(e) => onChangeBody(e)} /> */}

                <FormLabel>Title</FormLabel>
                <Input type="text" onChange={(e) => handleChangeTitle(e)}/>

                <FormLabel>Write your entry</FormLabel>
                <Input type="text" onChange={(e) => handleChangeBody(e)} />

<<<<<<< HEAD
return (
    <>
    <Head>
        <title>Dream Journal</title>
        </Head>
    <div>
        
        <h1 className = "journal_entry_title">Journal Entry:</h1>
        
        <Editable defaultValue="Click to Journal">
            <EditablePreview />
            <EditableInput />
            <br></br>
            <br></br>
            <Button colorScheme="teal" variant="outline">Submit</Button>
        </Editable>
    </div>
    </>
    )
=======
                <Button colorScheme='blue' onClick={(e) => handleSubmit(e)}>Save</Button>
                
            </Editable>
            
        </div>
        )
>>>>>>> 10c642899e207687346173d4f35f55228301663f
}

export default Journal
