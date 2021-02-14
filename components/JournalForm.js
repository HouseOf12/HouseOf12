import React, {useState} from 'react'
import Head from 'next/head';
import { Editable, EditableInput, EditablePreview, Button} from "@chakra-ui/react"



// Rename to journalForm?
// This form already displays the journal entry once you "click to edit"
const Journal = () => {

//stores the title
const[title, setTitle] = useState("")

//stores the entry
const[body,setBody] = useState("")

// Stores the title in our title state
const onChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
};

// Stores the body in our body state
const onChangeBody = (e) => {
    const body = e.target.value;
    setBody(body);
};

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
        if (res.status === 201) {
            const userObj = await res.json();
            mutate(userObj);
        } else {
            setErrorMsg(await res.text());
        }
}




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
}

export default Journal
