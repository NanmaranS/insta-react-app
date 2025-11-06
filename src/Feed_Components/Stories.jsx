import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export  function Stories() {
  const[stories,setStories]=useState([])
  const nav=useNavigate()
  useEffect(()=>{
fetch('http://localhost:3000/story')
.then((res)=>res.json())
.then((json_data)=>setStories(json_data))
.catch((err)=>console.log(err));



  },[])
    const total = stories.length 

  return (
   
    <div className=" d-flex p-3">
      <div className="d-none">  
</div>
       {stories.length>0 ? (stories.map((story)=>{
        return(
        
        <div key={story.id} onClick={()=> {nav(`story/${ story.id}/${total}`)}}>
          <div className="story-ring mx-2">
        <img className="  dps rounded-circle" src={story.user.profile_pic} alt="Dp Loading..."/>
                </div> 

        <p className="text-truncate " style={{width:"50px"}}>{story.user.username}</p> 
        </div>
        )
      })
    ):
        <h2 className="ms-5"> Story Loading</h2> 
  }
    </div>
  )
}
