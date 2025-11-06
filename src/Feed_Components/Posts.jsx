import { useEffect, useState } from "react"

export  function Posts() {

const[posts,setPost]=useState([])
useEffect(()=>{
fetch('http://localhost:3000/posts').
then((res)=> res.json()).
then((data)=>{
return setPost(data)
}).
catch((err)=>{
return console.log(err);

})

},[])

  return (
    <>
   <div className="d-flex justify-content-center">
<div>{posts.map((sd)=>{
  return( <div key={sd.id}> 
  <div className="mb-3"  >
  <div className="d-flex">
  <img className=" me-2 rounded-circle dp" src={sd.user.profile_pic} alt="image of instagram"/>
   <h5 >{sd.user.username}</h5>
</div>
  </div>
  <img  className="post_inst" src={sd.image} alt="post not loaded"/>
<div className="mt-2 ">
  <i className="bi bi-heart"></i>
  <i className="bi bi-chat"></i>
  <i className="bi bi-send"></i>
</div >
<div className="">
  <b><p>200 Likes</p></b>
  <p>{sd.caption}</p>
</div>
  </div>

  )
})} </div> 

 </div>
 </>
  )
}
