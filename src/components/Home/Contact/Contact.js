import React from 'react';
import img from '../../../images/traveler.jpg';

const Contact = ()=>{
    return(

        <div className='container mb-4 mt-4'>
            <h2 className='text-warning fw-bold'>Get In Touch</h2>
            <hr className="bg-warning w-25 mx-auto"/>

            <div className='row'>
                <div className='col-12 col-md-6'>
                <img src={img} className='img-fluid' alt='pic'/>


                </div>
                <div className='col-12 col-md-6'>
                <form>
  <div class="form-row">
    <div class="form-group ">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group ">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    
  </div>
  
  <button type="submit" class="btn btn-warning text-white fw-bold">Submit</button>
</form>

                </div>

            </div>
        </div>
    );
};
export default Contact;