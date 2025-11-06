import {Feed} from "../Feed_Components/Feed";
import { SideBar } from "./SideBar";
import {Suggestions} from "../Suggest_Components/Suggestions";

export function Home() {
  return (
    <>
<div className="d-flex vh-100">
  <div className="w-20 "><SideBar/></div>
  <div className="w-50 "><Feed/></div>
  <div className="w-30 "><Suggestions/></div>

  </div>    
    </>
  )
}

