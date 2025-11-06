import axios from "axios"
import { useEffect, useState } from "react"

export  function Suggestions() {

  const[profile,setProfile]=useState(null)
  const[suggesstion,setSuggestions]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/profile').
    then((res)=>res.json()).
    then((pro_data)=>{
      return setProfile(pro_data)
    }).catch((err)=>{
      console.log(err);
      
    })

     fetch('http://localhost:3000/suggestions').
    then((res)=>res.json()).
    then((sugges_data)=>{
      return setSuggestions(sugges_data)
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])

const handleupdate=(id,username)=>{
axios.post('http://localhost:3000/followers',{"id":id,"username":username})
.then(alert("Followed"))
.catch(err=>console.log(err))
}

  

  return (
    <div > 
<div className="m-4 w-75">
  {profile ?
  <div className="d-flex">
  <img className="  me-2 rounded-circle dp" src={profile.profile_pic} alt="image of instagram"/>
   <h5 className=" mt-1 switch_font">{profile.username}</h5>
   <small className="ms-auto text-primary">Switch</small>
</div>:<h2>Loading..</h2>}

<div className="mt-4 d-flex ">
  <p>Suggested For You</p>
  <b className="ms-auto">See All</b>
</div>
           {/*Profile */}
    
 <div> 
     
   {suggesstion.length>0 ? (suggesstion.map((s)=>{
    return(<div key={s.id} className="sugges_map my-3 d-flex">
      <img  className=" me-2 rounded-circle dp" src={s.profile_pic}/>
      
      <h5 className=" mt-1 switch_font">{s.username}</h5>
      <small onClick={()=>handleupdate(s.id,s.username)} className=" text-primary ms-auto">Follow</small>
       </div> 
      )
   })
  ):<h2 className="d-flex justify-content-center align-items-center vh-100">Loading...</h2>}
</div>

    </div> 
    </div>
    
  )}
