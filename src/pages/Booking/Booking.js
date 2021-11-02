import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useProduct from '../../hooks/useProduct';

const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const { tours } = useProduct();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const findTour = tours.find(tour => tour._id === id)
        findTour.email = user.email;
        findTour.status = 'pending';

        console.log(findTour)
        fetch('http://localhost:5000/addOrder', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(findTour)
        })

    };

    // handle add to cart or booking
    // const handleAddToCart = () => {

    // }
    return (
        <div>
            <h2>Confirm bookings{id}</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("d")} />
                    <input {...register("lastName")} />
                    <input type="number" {...register("age")} />
                    <button type="submit">Confirm Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;