import {useState} from 'react'
import {Button, Box, VStack, Image} from "@chakra-ui/react";


const AstroFacts = () => {



    const [badFacts, setBadFacts] = useState([
        {id:1, fact: "Out of 131 serial killers from 30 countries, 19 were pisces. This was the most common sign."},
        {id:2, fact: "Out of 131 serial killers from 30 countries, 17 were scorpios. This was the second most common sign."},
        {id:3, fact:"Don't try to fool a Gemini. They operate with both logic and intuition, so either way you're screwed." },
        {id:4, fact:"If a Virgo gives you their trust, do not break it. They will never trust you again." },
        {id:5, fact:"Out of 131 serial killers from 30 countries, 17 were saggitarius. This was the second most common sign. It is tied with Scorpio." },
        {id:6, fact:"Scorpios have a sadistic side, and they often stalk their victims before killing them. These folks also tend to see themselves as vigilantes." },
        {id:7, fact:" Gemini serial killers tend to be vengeful. Their kills are often dark and include cannibalism, posing bodies, and even strangulation." },
        {id:8, fact:"Notorious Pisces serial killers include The Green River Killer, who might have claimed anywhere between 49 and more than 90 victims." },
        {id:9, fact:"One of the most famous killers ever, Ted Bundy, was a Sagittarius." },
        {id:10, fact:"Aquarius serial killers include Joel Rifkin who might have murdered over 17 people, Luis (The Beast), and Daniel Camargo." },
        {id:11, fact:"Aquarians are all about the revenge crimes. They're charismatic and incredibly manipulative." },
        {id:12, fact:"Leo's are known to have a bad temper. As a fire sign, they're fiesty, and always need to be the centre of attention." },
        {id:13, fact:"The zodiac killer has never been identified." },
        {id:14, fact:"Gemini serial killers tend to go for victims they already know. They include family members and neighbors. " },
        {id:15, fact:"A sinister Sagittarian can be volatile and unforgiving. They also hard to catch in the act." },
        {id:16, fact:"The Aquarian is fairly good-natured until they’re a victim of wrongdoing. When it comes to revenge crimes, Aquarians lead the pack!" },
        {id:17, fact:"The clever and charismatic Aquarius would make a good hustler or hacker. Manipulation is their dark horoscope trait!" },
        {id:18, fact:"Samuel Little was a Gemini, and so was Jeffrey Dahmer." },
        {id:19, fact:"In terms of the traits common among serial killers, many tend to \"be highly charismatic because they have learned and honed the fine art of magnetizing people\"." },
        {id:20, fact:"TRichard Ramirez, famously known as \"the Night Stalker\" was a Pisces." },
        {id:21, fact:"The \"Boston Strangler\" was a Virgo." },
        {id:22, fact:"The most famous Female Serial Killer is Lizzie Borden, she was a cancer. " },
        {id:23, fact:"Ted Bundy once saved a child from drowning." },
        {id:24, fact:"Ted Bundy once worked for a suicide hotline." },
        {id:25, fact:"Many serial killers have partners and families that have no idea."},
        {id:26, fact:"Many serial killers have partners and families that have no idea."},
        {id:27, fact:"John Wayne Gacy, also known as \"The Killer Clown\" buried his victims under the family home. He was a Pisces."},
        {id:28, fact:"Ted Bundy often killed women who looked like his ex."},
        {id:29, fact:"John Wayne Gacy, also known as \"The Killer Clown\" buried his victims under the family home. He was a Pisces."},
        {id:30, fact: "During his 1979 murder trial, Ted Bundy represented himself in court, despite having no legal qualifications. He was a saggitarius."}
    ])




    const [goodFacts, setGoodFacts] = useState([
        {id:1, fact:"According to a study conducted by Pew Research in 2017, more than 30 percent of Americans believe in astrology; and that number is growing." },
        {id:2, fact:"Aries born individuals are a doer and they are driven to complete any task they are assigned." },
        {id:3, fact:"Aries people inherent very good leadership quality in them with no enviousness. Also, they are capable to solve any kind of dispute without anyone’s help." },
        {id:4, fact:"Capricorns have incredible instincts and they can read people’s mind quickly. They can understand people’s true intentions and motivations." },
        {id:5, fact:"Sagittarians Are Twice As Likely to Become Famous."},
        {id:6, fact:"Leos are 40 percent more likely to get a ticket than Libras."},
        {id:7, fact:"Aries Make Up the Bulk of Billionaires."},
        {id:8, fact:"World Leaders Are Most Often Scorpios."},
        {id:9, fact:"Top Athletes Are Frequently Aquarians."},
        {id:10, fact:"A survey from CareerBuilder found that people born under Scorpio, Leo, Cancer, and Taurus signs were the most likely to earn $100,000 or more annually."},
        {id:11, fact:"Tauruses are more sensitive to touch, so if you were born between April 20 and May 20 and are exceptionally ticklish, now you have a reason why."},
        {id:12, fact:"Because of their supposedly dual nature, Geminis have a reputation for frequently quitting their jobs."},
        {id:13, fact:"Aries have a reputation for being accident prone, because of their unbridled nervous energy."},
        {id:14, fact:"The Aquarius is the least common sign, at least in America, because birthdays in the States most commonly fall during summer and early fall months."},
        {id:15, fact:"Aries have a reputation for being accident prone, because of their unbridled nervous energy."},
        {id:16, fact: "More people are born on September 16th than any other day of the year, so if that's your birthday, you're a member of a very large club of Virgos."},
        {id:17, fact: "Despite not having the most common birthday, Scorpio is still the most common sign in America."},
        {id:18, fact: "Aquarius people tend to have perpetually cold hands and feet."},
        {id:19, fact:"Aries, a sign known for its confidence and courage, fosters a lot of of natural born leaders."},
        {id:20, fact: "If you're a Taurus, you're likely a very practical and responsible person."},
        {id:21, fact: "Apart from your ability to actually do your laundry and pay bills on time, Taurus are also very good with money."},
        {id:22, fact: "Taurus rules money and surveys show the Taurus natives are more likely to earn more than 100K a year."},
        {id:23, fact: "Gemini have the ability to learn quickly, adapt, and efficiently exchange ideas with others."},
        {id:24, fact: "Cancers are loyal, tenacious, and highly emotional people mentally. "},
        {id:25, fact: "Cancer natives are ruled by the Moon and tend to have round, moon-like faces. "},
        {id:26, fact: "Leos love to put on a show and traditionally make the best salespeople."},
        {id:27, fact: "Virgo are super hardworking, analytical, and practical."},
        {id:28, fact: "Virgos have always been the highest achieves in school and almost always the top of their class. "},
        {id:29, fact: "Libra are the most fair-minded, and social of the Zodiac."},
        {id:30, fact: "Scorpios are the most passionate of all the signs, often feeling the feels in every aspect of their life — relationships, work, hobbies, etc."}
    ])

    const [gFact, setGFact] = useState([{
        id:0, fact:""
    }])

    const [bFact, setBFact] = useState([{
        id:0, fact:""
    }])



    const returnGoodFact = (event) =>{
        let goodNumber = Math.floor(Math.random() * 30)
        let goodQuote = goodFacts.filter(fact => goodNumber === fact.id)
        let eraseBad =  {   id:0, fact:""} 
        setGFact(goodQuote)
        setBFact(eraseBad)
    }


    


    const returnBadFact = (event) =>{
        let badNumber = Math.floor(Math.random() * 30)
        let badQuote = badFacts.filter(fact => badNumber === fact.id)
        let eraseGood =  {   id:0, fact:""} 
        setBFact(badQuote)
        setGFact(eraseGood)
    }



console.log("goooooood", gFact)

    return (
        <div>
            {/* <h1> hi bitch</h1> */}
            <Box display="flex" justifyContent="center" marginTop="70px"> 
            <Button color="black" onClick={()=>returnGoodFact(event)}> Good Fact</Button>      
            <Button  color="black" onClick={()=>returnBadFact(event)}> Bad Fact</Button>            
            </Box>
            <VStack display="flex" justifyContent="center" marginBottom="100px"> 

            <Image height="50%"  width="50%" marginTop="30px" src="https://media1.giphy.com/media/AszR2sY1ijlw8CCk1o/giphy.gif?cid=ecf05e47y0alza4cyl467t0i2xz757chfw7c2shw42f2tcjf&rid=giphy.gif" />


            <Box width="30%" marginTop="140px" fontSize="1.8vw" position="absolute" color="black">
            {(gFact.fact != "") ? gFact.map(info => info.fact) : "" } 
            </Box>
            <Box  width="30%" marginTop="140px" fontSize="1.8vw"   position="absolute" color="black">
                {(bFact.fact != "") ? bFact.map(info => info.fact) : "" } 
                {/* {bFact.map(info => info.fact)} */}
            </Box>
            </VStack>
        </div>
    )
}

export default AstroFacts
