import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react'

const News = () => {
    // initial state of retrograde
    const [retrograde, setRetrograde] = useState([])

         
    //func that runs the api code
        useEffect(() => {
           retro()
          }, []);


    //how to get todays date
    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
    console.log(month, date, year)



    const retro = () =>{
        axios.get(`https://mercuryretrogradeapi.com?date=${year}-${month}-${date}`,{
        })
        .then((response)=>{
           setRetrograde(response.data)
     })
    .catch((error) => {
      console.error(error)
    })
    } 

    console.log("this is the celebs", retrograde)




    return (
        <div color="white">
            <h1> Is Mercury is Retrograde? </h1>
            <h2>
                {(retrograde.is_retrograde ===true)? "Yes": "No" }
            </h2>       
        </div>
    )
}


export default News
