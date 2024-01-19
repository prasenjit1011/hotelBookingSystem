import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Menu(){
    const navigate  = useNavigate();

    return (
        <div className="headerSection">
            <div className="adminPageTtitle">
                <img src={'/hotel.png'} className="hotellogo" onClick={()=>{navigate('/')}} style={{cursor:"pointer"}} />
            </div>
            <button className="logout btn" onClick={()=>{navigate('/admin/dashboard')}}>Admin</button>
        </div>
    );
}