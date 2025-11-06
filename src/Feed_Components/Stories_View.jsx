import { useEffect, useState } from "react"
import { useParams,Link, useNavigate } from "react-router-dom"

export  function Stories_View() {
  const [story,setStory]=useState(null)
  const {id,total}=useParams()
const nav=useNavigate()
  useEffect(()=>{
fetch(`http://localhost:3000/story/${id}`)
.then((res)=>res.json())
.then((json_data)=>setStory(json_data))
.catch((err)=>console.log(err));
  },[id])

  if(id>total || id<=0 ){
nav('/')
  }
  return (
    <div >
      {story ? (<div  className="d-flex justify-content-center align-items-center">
       <Link to={`http://localhost:5173/story/${ Number(id)-1}/${total}`}><i  className="bi bi-arrow-left-circle-fill"></i></Link> 
        <img className="vh-100" src={`/${story.image}`}/>
     <Link to={`http://localhost:5173/story/${Number(id)+1}/${total}`} ><i className="bi bi-arrow-right-circle-fill"></i></Link> 

         </div> ): <div> Story Loading..</div>}


    </div>
  )
}
