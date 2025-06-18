import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdressLink from "../AdressLink.jsx";
import PlaceGallery from "../PlaceGallery.jsx";
import BookingDates from "../BookingDates.jsx";


export default function BookingPage() {
  const { id } = useParams();
  const [booking , setBooking] = useState(null);
  useEffect(() => {
    if(id)
    {
    axios.get('/bookings').then(response => {
      const foundBooking = response.data.find(({_id}) => _id === id )
      if(foundBooking)
      {
        setBooking(foundBooking)
      }
    })
    }

  }, [id])

  if(!booking)
  {
    return '';
  }

  return (
  <div className="my-8">
    <h1 className="text-3xl">{booking.place.title}</h1>
    <AdressLink className="my-2 block">{booking.place.address}</AdressLink>
    <div className="bg-gray-500 p-6 my-6 rounded-2xl flex items-center justify-between">
      <div>
      <h1 className="text-2xl mb-4">You'r Booking Information</h1>
      <BookingDates booking={booking}/>
      </div>
      <div className="bg-primary p-6 text-white rounded-2xl">
        <div>Total Price</div>
        <div className="text-3xl">&#8377; {booking.price}</div>
      </div>
    </div>
    <PlaceGallery place={booking.place} />  
  </div>
  )
}
 