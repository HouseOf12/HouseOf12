import { Table, Thead, Tbody,Tfoot, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import axios from 'axios';
import {useEffect, useState} from 'react'

// Houses have a house number and a sign
// Platents have a name and the sign 
// Compare sign from planets, find match in houses and return


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
          .then((natalData) => {
              console.log("HEYYYYYYYY", natalData.data)
              setChart(natalData.data)
          })
            
    }
    console.log("THIS IS THE CHART",chart)
    
    
    return (
        
        
           <Table w="24">
        <Thead>
            <Tr>
            <Th>Planet</Th>
            <Th>Sign</Th>
            <Th isNumeric>House</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
            <Td>{chart.planets[0].name}</Td>
            <Td>{chart.planets[0].sign}</Td>
            <Td isNumeric>{chart.planets[0].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[1].name}</Td>
            <Td>{chart.planets[1].sign}</Td>
            <Td isNumeric>{chart.planets[1].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[2].name}</Td>
            <Td>{chart.planets[2].sign}</Td>
            <Td isNumeric>{chart.planets[2].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[3].name}</Td>
            <Td>{chart.planets[3].sign}</Td>
            <Td isNumeric>{chart.planets[3].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[4].name}</Td>
            <Td>{chart.planets[4].sign}</Td>
            <Td isNumeric>{chart.planets[4].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[5].name}</Td>
            <Td>{chart.planets[5].sign}</Td>
            <Td isNumeric>{chart.planets[5].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[6].name}</Td>
            <Td>{chart.planets[6].sign}</Td>
            <Td isNumeric>{chart.planets[6].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[7].name}</Td>
            <Td>{chart.planets[7].sign}</Td>
            <Td isNumeric>{chart.planets[7].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[8].name}</Td>
            <Td>{chart.planets[8].sign}</Td>
            <Td isNumeric>{chart.planets[8].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[9].name}</Td>
            <Td>{chart.planets[9].sign}</Td>
            <Td isNumeric>{chart.planets[9].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[10].name}</Td>
            <Td>{chart.planets[10].sign}</Td>
            <Td isNumeric>{chart.planets[10].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[11].name}</Td>
            <Td>{chart.planets[11].sign}</Td>
            <Td isNumeric>{chart.planets[11].house}</Td>
            </Tr>
            <Tr>
            <Td>{chart.planets[12].name}</Td>
            <Td>{chart.planets[12].sign}</Td>
            <Td isNumeric>{chart.planets[12].house}</Td>
            </Tr>
        </Tbody>
        <Tfoot>
            <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
            </Tr>
        </Tfoot>
        </Table>
        
    )
}


export default Natalchart