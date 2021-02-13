import axios from 'axios';
import {useEffect, useState} from 'react'




const Natalchart = () => {
    const [chart, setChart] = useState([])

    useEffect(() => {
       grabNatal()
      }, []);

    const grabNatal = () => {
        var userId = "615745";
        var apiKey = "758b876f8345a5b798e2f02e38e7c7ab";
        const natalData = axios
        .post("https://json.astrologyapi.com/v1/western_horoscope",
        {
            day: '25',
            month: '12',
            year: '1988',
            hour: '10',
            min: '12',
            lat: '25.123',
            lon: '82.34',
            tzone: '5.5',
          },
          {headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
            }})
          .then((natalData) => setChart([natalData]))
    }
    console.log(chart)
    
    return (
        <div>
            
        </div>
    )
}


export default Natalchart