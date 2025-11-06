import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function Profile() {

  const [profile, setProfile] = useState(null)
  const [folowers, setFollowers] = useState([])
    const [unfollow, setUnfolow] = useState(false)


  useEffect(() => {

    axios.get('http://localhost:3000/profile')
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err))

    axios.get('http://localhost:3000/followers')
      .then((res) => setFollowers(res.data))
      .catch((err) => console.log(err))

  }, [unfollow])

  const handlechange = (e) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleupdate = () => {
    axios.put('http://localhost:3000/profile', profile)
      .then(() => console.log("updated"))
  }

  const handledelete=(id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then(()=>alert("un followed"))
    .then(()=>setUnfolow(!unfollow))
    .catch(err=> console.log(err))
    
  }

  return (
    <>
    <div className="d-flex  m-4 me-5 ">
  <Link className="mt-3 ms-auto btn btn-danger rounded-4" to="/"><i class="bi bi-arrow-left-circle-fill"></i>
Go Back</Link>

</div>
    <div className="d-flex flex-column align-items-center dark justify-content-start py-5">

      {/* Profile Section */}
      {profile ? (
        <div className="text-center  mb-5">
          <img className="rounded-circle dp profiles_pic mb-3" src={profile.profile_pic} alt="dp" />

          <h2>{profile.username}</h2>
<div className="border  border-primary border-3 p-3  rounded-4 w-300 glow" style={{ backgroundColor: "#f8f9fa" }}>
          <input style={{width:"200px"}}
            onChange={handlechange}
            type="text"
            name="username"
            className="form-control text-center mx-auto my-4"
            value={profile.username}
          />

          <input style={{width:"200px"}}
            onChange={handlechange}
            type="text"
            name="profile_pic"
            className="form-control text-center   mx-auto my-4"
            value={profile.profile_pic}
          />
           <button onClick={handleupdate} className="btn btn-primary my-3">Update</button>

</div>
        </div>
      ) : (
        <h2 className="d-flex justify-content-center align-items-center vh-100">Loading...</h2>
      )}

      {/* Followers Section */}
      <div className="">
        
        {folowers.length > 0 ? (
          <>
          <h2 className="text-center">Followers</h2>
          {folowers.map((fs) => (
            <div key={fs.id} className="d-flex  my-4">
              <h5 className="me-4">{fs.username}</h5>
              <button onClick={()=>handledelete(fs.id)} className="btn btn-secondary  ms-auto">Un followed</button>
            </div>
          ))}
        </>) : (
          <p>Followers Loading...</p>
        )}
        </div>
      </div>

    </>
  )
}
