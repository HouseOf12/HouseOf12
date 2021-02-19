# House of 12 


# Concept 
This application provides all of your astrological desires in one place. 

# Technologies
React, MongoDB, NextJS, and Chakra

## User Story
As a user: 
* Be able to enter information on the natal chart page and view their personalized natal chart
* Be able to navigate to the matchmaking page and enter a potential lover's astrology information to see if they are compatible. 
* Be able to sign in to their profile and see their specific zodiac statistics, such as their daily, weekly, and monthly horoscopes. Lunar moon information.
* Be able to keep a journal about their dreams. 

##  Third Party APIS 
https://astrologyapi.com

https://mercuryretrogradeapi.com/about.html


## ERD:
![Screen Shot 2021-02-18 at 6 18 14 PM](https://user-images.githubusercontent.com/69171194/108434525-cd596680-7215-11eb-9d24-0cdc54e7d8f0.png)


### Wireframe:
# Landing/Home Page
<img width="1347" alt="Screen Shot 2021-02-18 at 7 20 38 PM" src="https://user-images.githubusercontent.com/69171194/108439052-87ed6700-721e-11eb-8416-c0a6ef946dec.png">

# Signup for Natal Chart
<img width="1347" alt="Screen Shot 2021-02-18 at 7 24 27 PM" src="https://user-images.githubusercontent.com/69171194/108439287-f500fc80-721e-11eb-80bd-6d3485b659de.png">

# Personalized Profile Page
<img width="1347" alt="Screen Shot 2021-02-18 at 7 25 57 PM" src="https://user-images.githubusercontent.com/69171194/108439442-45785a00-721f-11eb-9486-b6e0086a681c.png">

# Matchmaking
<img width="1347" alt="Screen Shot 2021-02-18 at 7 25 57 PM" src="https://user-images.githubusercontent.com/69171194/108439442-45785a00-721f-11eb-9486-b6e0086a681c.png">

# Personality Report
<img width="1347" alt="Screen Shot 2021-02-18 at 7 30 09 PM" src="https://user-images.githubusercontent.com/69171194/108439672-bcadee00-721f-11eb-9720-8cd49351b0d2.png">

# Transit
<img width="1347" alt="Screen Shot 2021-02-18 at 7 30 09 PM" src="https://user-images.githubusercontent.com/69171194/108439672-bcadee00-721f-11eb-9720-8cd49351b0d2.png">




# Final Product Pages:

# Landing/Home Page

# Signup for Natal Chart

# Profile Page

# Matchmaking

# Personality Report

# Transit


### Routes:

CRUD| Route | Function
---------------- | ----------------- | ------------------

POST | api/users/users | Register new user
POST | api/user/login | Login user
PUT | api/user/index | Edit password
GET | api/journal/index | Retrieve user's journal entries
DELETE | api/journal/[id] | Deletes journal entry



## Models/Schema
We don't really have any models but this is the criteria we pass in for each user

User | name, password, day, month, year, hour, minute, lat, lon


## Unsolved Problems/Major Hurdles
Need to refresh page for journal entry to show, or to show deletion.



