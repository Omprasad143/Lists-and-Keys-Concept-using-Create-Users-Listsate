import userProfile from  './components/userProfile/index.js'

import './App.css'

const userDetails = [
    {
    
    uniqueNo: 1,
    imageUrl = "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",

    name = "Omprasad",
    role = "Software Developer",

} ,


 {

     uniqueNo: 2,
    imageUrl = "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",

    name = "Anji",
    role = "Software Developer",

} ,
 {

     uniqueNo: 3,
    imageUrl = "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",

    name = "Sai",
    role = "Software Developer",

} ,
 {

     uniqueNo: 3,
    imageUrl = "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",

    name = "Rammohan",
    role = "Software Developer",

} ,
]
const App = () => <userProfile userDetails = {userDetails}/>

<div className = "list-container">
    <h1 className = "title">Users List</h1>


    <ul>
        {userDetailsList.map(eachItem => (

        <userProfile userDetails= {eachItem}  key={eachItem.uniqueNo}/>
         ))}
    </ul>
</div>

export default App
