export function Login() {
  return (
    <>

<div className="d-flex position-fixed end-0 justify-content-between ">
<div className="btn-group">
  <button className="btn btn-primary">Home</button>
  <button className="btn btn-secondary">Contact</button>
  <button className="btn btn-success">About</button>
  </div>
</div>

    <div className="container">

      <div className="row align-items-center justify-content-center"style={{height:"100vh"}}>

   <div className="col-12 col-sm-8 col-md-6 col-lg-4">
 <div className="card p-4 shadow-sm">

 
   <div className="form-group">
    <label htmlFor="formGroupExampleInput">Username</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"/>
  </div> <br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select Your Age</label>
    <select className="form-control" id="exampleFormControlSelect1">
        <option value="">Choose Your Age</option>
      <option>13 to 17</option>
      <option>18 to 23</option>
      <option>24 to 32</option>
      <option>32 to 50</option>
      <option>50+</option>
    </select>
  </div>
  <br/>
   <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div><br/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div><br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>  </div>

</div>
    </div> 
</>);
}
