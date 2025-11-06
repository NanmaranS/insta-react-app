import images from "../assets/Insta-Text.jpeg";
import { Profile } from "../Feed_Components/Profile";
import { useNavigate } from "react-router-dom"

export  function SideBar() {
      const nav=useNavigate()

  return (<div className="position-fixed">


  <div className="sidebar d-flex font flex-column gap-4 m-3 mt-4 ">

  
 <img className="insta_text"src={images}/>
 <div><i className="bi bi-house-fill"></i>Home</div>
 <div><i className="bi bi-search"></i>Search</div>
 <div><i className="bi bi-compass"></i>Explore</div>
  <div><i className="bi bi-play-btn"></i>Reels</div>
    <div><i className="bi bi-chat"></i>Message</div>
    <div><i className="bi bi-heart"></i>Notification</div>
    <div><i className="bi bi-plus-square"></i>Create</div>
    <div  onClick={()=>{nav('/profile')}} className="d-flex "> <i className="bi bi-person-circle"></i>
    <div>Profile</div>
  </div>
  
  </div>
  

  <div className= " font d-flex flex-column gap-4 position-fixed bottom-0  mb-4 m-3">
    <div><i className="bi bi-threads"></i>Thread</div>
    <div><i className="bi bi-list"></i>More</div>
    
    </div>
    
   </div>)
}
