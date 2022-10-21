import { useEffect,useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import {ImCircleUp} from 'react-icons/im';


const useStyles=makeStyles((theme)=>
({
        toTop:
        {
            zIndex:2,
            position:'fixed',
            bottom: '2vh',
            fontSize:'5vh',
            color:'#5c8ce6',
            right: "5%"          
        } 
    }
))

function ScrollToTop()
{


const classes = useStyles();
const [isVisible, setIsVisible]=useState(false)

const toggleVisibility=()=>{
    if(window.scrollY>300)
        setIsVisible(true) 
    else
        setIsVisible(false) 
}

const scrollToTop=()=>{
window.scrollTo({
    top:0,
    behavior:'smooth'
})
}

useEffect(()=>
{
 window.addEventListener('scroll',toggleVisibility) 
 
 return()=>{
     window.removeEventListener('scroll',toggleVisibility)
 }
},[])

    return (
    <div>
        {isVisible &&
        <ImCircleUp style={{cursor:"pointer"}} onClick={scrollToTop} className={classes.toTop}></ImCircleUp>
        }
    </div>
    )
} 
export default ScrollToTop;