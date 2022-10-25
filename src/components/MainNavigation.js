import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import PersonAdd from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from "react-router-dom";


function MainNavigation()
{
    const navigate = useNavigate();

    function moveToPage(relativePath)
    {
        navigate(relativePath);
    }

    return <header className={"header"}> 
    <nav>
        <ul>
            <li onClick={event => moveToPage('')}><HomeIcon sx={{ fontSize: 40, color: "white" }}/>Home</li>
            <li onClick={event => moveToPage('/addPlayer')}><PersonAdd sx={{ fontSize: 40, color: "white" }}/>Add Player</li>
            <li onClick={event => moveToPage('/playersList')}><People sx={{ fontSize: 40, color: "white" }}/>Players list</li>
        </ul>
    </nav>
    </header>
} 
export default MainNavigation;