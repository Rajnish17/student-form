import React from 'react'

const Classes = () => {
  return (
    <div>
      <h2>Enter Your Details Here</h2>

  <div>
    <h3>Enter Class Details</h3>
     Class 
  <select name='class'>
    <option value="">Please choose</option>
    <option value="10th">10th</option>
    <option value="12th">12th</option>
    <option value="B.Tech.">Bachelor of Technology(B. Tech.)</option>
  </select>
  </div>

  <div>
   Student Name:-<input type="text" placeholder='Enter Student Name' />
  </div>
  <div>
  Student Age:-<input type="number" placeholder='Enter age' />
  </div>
  <div>
  Grade:-<select name='grade'>
    <option value="">Grade</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  </div>

  {/* //Teacher Details */}
   <div>
    <h2>Teacher Details</h2>
    <div>Teacher Name:-
      <input type="text"  placeholder='Enter Teacher Name'/>
    </div>
    <div>Subject:-
      <input type="text"  placeholder='Enter Subject'/>
    </div>


   </div>



    </div>
  )
}

export default Classes