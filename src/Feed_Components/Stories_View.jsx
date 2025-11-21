import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

export function Stories_View() {
  const [story, setStory] = useState(null)
  const { id, total } = useParams()
  const nav = useNavigate()

  // Navigate home if id is invalid
  useEffect(() => {
    if (Number(id) <= 0 || Number(id) > Number(total)) {
      nav('/')
    }
  }, [id, total, nav])

  // Fetch story data
  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then(res => res.json())
      .then(json_data => setStory(json_data))
      .catch(err => console.log(err))
  }, [id])

  if (!story) return <div>Story Loading..</div>

  return (
    <div className="d-flex justify-content-center align-items-center">
      {/* Previous story / home if first */}
      <Link to={Number(id) > 1 ? `/story/${Number(id) - 1}/${total}` : `/`}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </Link>

      {/* Story image */}
      <img className="vh-100 mx-3" src={`/${story.image}`} alt="Story" />

      {/* Next story / home if last */}
      <Link to={Number(id) < Number(total) ? `/story/${Number(id) + 1}/${total}` : `/`}>
        <i className="bi bi-arrow-right-circle-fill"></i>
      </Link>
    </div>
  )
}
