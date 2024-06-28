import React, { useState } from 'react'

const EmployeeList= () => {



 const [adddata , setadddat]=useState(false);
 const [userdata , setuserdata]=useState({
  name:null,
  address:null,
  salary:null,
 })

  return (
      

    <>
     <div className="d-flex justify-content-end p-4">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => setadddat(true)} >
        Add Employee data+
        </button>
      </div>
   
       <div className={`modal fade ${adddata && 'show d-block'}`} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee data add</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setadddat(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" placeholder='Enter Employee Name' className="form-control" id="empty" onChange={(e) => setuserdata((prev) => ({ ...prev, name: e.target.value }))} />
            </div>
            <div className="modal-body">
              <input type="text" placeholder='Enter Employee Address' className="form-control" id="empty" onChange={(e) => setuserdata((prev) => ({ ...prev, address: e.target.value }))} />
            </div>
            <div className="modal-body">
              <input type="text" placeholder='Enter Employee Salary' className="form-control" id="empty" onChange={(e) => setuserdata((prev) => ({ ...prev, salary: e.target.value }))} />
            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setadddat(false)}>Close</button>
              <button type="button" className="btn btn-primary" >Add</button>
            </div>
          </div>
        </div>
      </div>

    <h1 className='d-flex justify-content-center mb-5 mt-5'>
      Employee Data List
    </h1>
  
  
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col ">Name </th>
      <th scope="col">Address</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button className='btn btn-primary'>Edit</button><button  className='btn btn-warning'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button className='btn btn-primary'>Edit</button><button  className='btn btn-warning'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td><button className='btn btn-primary'>Edit</button><button  className='btn btn-warning'>Delete</button></td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default EmployeeList