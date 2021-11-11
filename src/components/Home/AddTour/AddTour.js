import React from 'react';
import { useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";


const AddTour = () => {
    const history = useHistory();
    const redirect_uri = '/destinatons';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch('https://damp-dusk-34912.herokuapp.com/destinations', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{alert("Tour Added Successfully!");
          reset();
          history.push(redirect_uri);});
    };


    return (
        <div className="mx-auto w-75 mt-5 mb-5">
             <div className="container shadow mt-3 mb-5 p-3">
                <h1 className="mt-5 text-center text-warning fw-bold">Add a new Tour</h1>
                <div className="w-25 mx-auto mt-3 mb-3">
                    <div className="border-0 d-flex justify-content-center align-items-center">
                        <div className="mx-auto">
                           <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                {...register("Title")}
                                placeholder="Title"
                                className="p-3 m-3 w-100 border border-warning rounded"
                                />
                               <br />
                               <input
                                {...register("img")}
                                type="url"
                                placeholder="Image URL"
                                className="p-3 m-3 w-100 border border-warning rounded"
                                />
                               <br />
                               <input
                                {...register("Description")}
                                type="text"
                                placeholder="Details"
                                className="p-3 m-3 w-100 border border-warning rounded"
                                />
                               <br />
                               <input
                               {...register("Price")}
                               placeholder="Price"
                               className="p-3 m-3 w-100 border border-warning rounded"
                               />
                               <br />
                               
                               
                              <br />
                              {errors.exampleRequired && <span>This field is required</span>}
                              <input type="submit" value="Confirm Booking" className="btn btn-warning text-white w-100  rounded m-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTour;