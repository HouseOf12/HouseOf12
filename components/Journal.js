import React from 'react'
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

const Journal = () => {


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
