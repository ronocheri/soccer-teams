import React from "react";
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import axios from 'axios';
import ScrollToTop from "./ScrollToTop";

const url="https://localhost:7076/Lecturer/GetLectureres";
var DUMMY_DATA=[];


function AllPlayers()
{
const[waiting,setWaiting]=useState(true);
const [query, setQuery] = useState("")


 const fetchData= async(url)=>{
  // console.log(url);
   const response= await axios(url).catch((err) => console.log(err));
 
 if(response) //success
 {
     const data = response.data;
    // console.log(data);
     if(data.length>0)
     {
       DUMMY_DATA=data;
         setWaiting(false);
     }
     else{
         console.log("error! couldn't retrieve any lecturer");
     }
 }
 else
 {
     console.log("error! couldn't retrieve any lecturer");
 }
 } 

fetchData(url);


  function senEmail(e)
  {
      //console.log(e.target.querySelector('input'))
      var emailInput=e.target.querySelector('input');
      var userEmail=emailInput.value;
      //console.log(userEmail)
      e.preventDefault();
      window.open('mailto:'+userEmail);

  }
    return(
      <div >
        <div className={"centered"}>
        <input placeholder="Fillter by language"  onChange={event => setQuery(event.target.value)} style={{width:"200px"}}></input>
        </div>
      <table className={"table table-hover"}>
        <tbody>
        
        
        {DUMMY_DATA.filter(lecturer => {
          if (query === '') 
          {
            return true;
          } 
          else if (lecturer.languages!=null)
          {
            for (const language of lecturer.languages)
            {
            if(language.name.toLowerCase().includes(query.toLowerCase())) 
              {
                return true;
              }              
            }
            return false;
          }

//fillter by name

    // if (query === '') 
    // {
    //   return lecturer;
    // } 
    // else if (lecturer.name.toLowerCase().includes(query.toLowerCase())) 
    // {
    //   return lecturer;
    // }
    // return null;
    
  }).map((lecturer)=>{

          return (
            <tr key={lecturer.id}>
            <td  style={{width:"100%", textAlign:"center"}}>
            <h3>{lecturer.name}</h3>
            <img src={process.env.PUBLIC_URL+"assets/lecturer.png"} alt={lecturer.name} style={{height:"200px"}} />
            <p><b>Email:</b> {lecturer.email}</p>
             <p><b>Languages:</b></p>
             {lecturer.languages && lecturer.languages.map((language)=>
             <p key={language.id}>{language.name}</p>
             )}

             <form onSubmit={senEmail}>
               <label hidden>name</label>
               <input type="text" name="name" defaultValue={lecturer.name} hidden/>

               <label hidden>Email</label>
               <input type="email" name="user_email" defaultValue={lecturer.email} hidden/>

               <div className="centered">
                {/* <textarea  id='mesToSend' type="text" name="message" placeholder='Write a message...' style={{minHeight:"50px"}}/> */}
                <Button aria-label="email" type="submit">
                    <EmailIcon sx={{ fontSize: 35 }}/>
                  </Button>
                </div>
             </form>
             </td>
             </tr>
            )
      })}
      </tbody>
      </table>
      <ScrollToTop/>
    </div>
      );
}
export default AllPlayers;