import React from 'react'

const Student = () => {
  return (
    <div className='Main-Conatiner'>
      <h2>Student Details</h2>

      <div>
        Name <input type="text" placeholder='Enter Your Name' />
      </div>
  
      <div>
        Age:-<input type="Number" placeholder='Enter Your Age' />
      </div>

      <div>
        FeMale<input type="radio" value={"Female"} name='gender' />
        </div>

        <div>
        Male<input type="radio" value={"male"} name='gender' />
      </div>

      <div>
  Grade:-<select name='grade'>
    <option value="">Grade</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  </div>

  <div>
    <h2>Contact Details</h2>

    <div>
        Email <input type="text" placeholder='Enter Your Email' />
      </div>

      <div>
        Phone <input type="text" placeholder='Enter Your Phone no' />
      </div>
  </div>
  

  <div className="address-deatils">
 <h2>Address Details</h2>
 <div>
  City<input type="text" placeholder='Enter your city name' />
</div>
 <div>
  State<input type="text" placeholder='Enter your State name' />
</div>
 <div>
  PinCode<input type="Number" placeholder='Enter your PinCode' />
</div>
 
  </div>



      <div>
        <button>Signup</button>
      </div>




    </div>
  )
}

export default Student