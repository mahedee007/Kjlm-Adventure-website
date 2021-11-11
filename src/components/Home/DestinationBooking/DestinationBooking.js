import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router';
import { useForm } from "react-hook-form";
import useTours from '../../../hooks/useTours';
import useAuth from '../../../hooks/useAuth';

const DestinationBooking = () => {
    const {destinationId} = useParams();
    const [destinations] = useTours();
    const [details, setDetails]= useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/myBooking';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    useEffect(()=>{
        const matchDestination = destinations.find(singleDestination=>singleDestination._id===destinationId);
        setDetails(matchDestination);
    },[destinationId,destinations]);

    const onSubmit = (data) => {
        data.status= "Pending";
        fetch('https://damp-dusk-34912.herokuapp.com/bookDestination', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
              alert("Booked Successfully!");
              reset();
              history.push(redirect_uri);
        });
    };



    return (
        <div className="row w-75 mt-5 mb-5 mx-auto g-5">
            <div className="col-lg-6 col-sm-12 mt-4 mb-5">
                <div className="container shadow card border-0 p-2">
                    <img src={details?.img} className="card-img-top w-100"  alt=""/>
                    <div className="card-body h-100">
                        <h5 className="card-title text-danger">{details?.Title}</h5>
                        <p className="card-text text-start text-secondary">{details?.Description}</p>
                        <div className="d-flex justify-content-between">
                            <p className="card-text text-danger fw-bold">{details?.Price}/ Per Person</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 container mt-4 mb-5 shadow p-3 mx-auto">
                <h1 className="mt-3 text-center text-warning">Booking Form</h1>
                <div className="w-50 mx-auto mt-3 mb-5">
                    <div className="border-0 d-flex justify-content-center align-items-center">
                        <div className="mx-auto">
                           <form onSubmit={handleSubmit(onSubmit)}>
                                {
                                   details?.Title &&  <input
                                   {...register("title")}
                                   defaultValue={details?.Title}
                                   placeholder="Title"
                                   className="p-3 m-3 w-100 border border-warning rounded"
                                   />
                                }
                               <br />
                               <input
                                {...register("name")}
                                defaultValue={user.displayName}
                                placeholder="Name"
                                className="p-3 m-3 w-100 border border-warning rounded"
                                />
                               <br />
                               <input
                                {...register("email")}
                                defaultValue={user.email}
                                placeholder="Email"
                                className="p-3 m-3 w-100 border border-warning rounded"
                                />
                               <br />
                               <input
                               {...register("date", { required: true })}
                               type="date"
                               className="p-3 m-3 w-100 border border-warning rounded"
                               />
                                <br/>
                               <select {...register("gender")} className="p-3 m-3 w-100 border border-warning rounded">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                              </select>
                              <br/>
                              <input
                              {...register("city", { required: true })}
                              placeholder="City"
                              className="p-3 m-3 w-100 border border-warning rounded"
                              />
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

export default DestinationBooking;