import React, {useState} from 'react'
import { Editable, EditableInput, EditablePreview, Button, FormLabel, Input, Center, Box, useColorMode, Text} from "@chakra-ui/react"
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

    // const dream = () =>{
    //     axios.get(`https://mercuryretrogradeapi.com?date=${year}-${month}-${date}`,{
    //     })
    //     .then((response)=>{
    //        setRetrograde(response.data)
    //  })
    // .catch((error) => {
    //   console.error(error)
    // })
    // } 

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
          <Box
                textAlign="center"
                as="h3"
                fontFamily="body"
                fontSize="lg"
                fontWeight="light"
                mt="2"
                color={textColor[colorMode]}
                wrap
                >
               Dream Journal
               <Center>
            <Editable >
                <EditablePreview />

                <FormLabel>Title</FormLabel>
                <Input type="text" onChange={(e) => handleChangeTitle(e)}/>
                <FormLabel>Write your entry</FormLabel>
                <Input type="text" onChange={(e) => handleChangeBody(e)} />
                <Button colorScheme='blue' onClick={(e) => handleSubmit(e)}>Save</Button>
            </Editable>
        </Center>

        




                </Box>
      
        </div>
        )
}
export default Journal
