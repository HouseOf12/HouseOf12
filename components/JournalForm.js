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

// Stores the date in our date state
const onChangeDate = (e) => {
    const date = e.target.value
    setDate(date)
};



return (
    <div>
        <h1 className = "journal_entry_title">Journal Entry:</h1>
        <Editable defaultValue="Write Journal Entry Here!">
            <EditablePreview />
            <EditableInput />
        </Editable>
    </div>
    )
}

export default Journal
