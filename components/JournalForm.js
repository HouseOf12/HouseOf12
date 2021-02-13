import React, {useState} from 'react'
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

const Journal = () => {

//stores the title
const[title, setTitle] = useState("")

//stores the entry
const[body,setBody] = useState("");

//stores the date
const[date, setDate] = useState("")

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

// 

const onSubmit = async (e) =>{
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
    <div>
        <h1 className = "journal_entry_title">Journal Entry:</h1>
        <Editable defaultValue="BODY">
            <EditablePreview />
            <EditableInput />
        </Editable>
    </div>
    )
}

export default Journal
