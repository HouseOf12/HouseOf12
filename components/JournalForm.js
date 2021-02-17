import React, {useState} from 'react'
import { Editable, EditableInput, EditablePreview, Button, FormLabel, Input} from "@chakra-ui/react"
import { useCurrentUser } from '../hooks/index';
const Journal = () => {
    //grab the current user so you can pass the id to the backend post call in onSubmit
    const [currentUser] = useCurrentUser();
    const [errorMsg, setErrorMsg] = useState('');
    //stores the title
    const[title, setTitle] = useState("")
    //stores the entry
    const[body, setBody] = useState("");
    // Stores the title in our title state
    const handleChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };
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
        console.log('RES FROM ENTRY POST', res)
        //this code never runs
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
                <Button colorScheme='blue' onClick={(e) => handleSubmit(e)}>Save</Button>
            </Editable>
        </div>
        )
}
export default Journal
