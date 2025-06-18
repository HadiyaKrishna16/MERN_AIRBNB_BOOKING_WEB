import Perks from "../Perks.jsx";
import PhotosUploader from "../PhotosUploader.jsx";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNavigation from "../AccountNavigation.jsx";

export default function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setChekIn] = useState("");
  const [checkOut, setChekOut] = useState("");
  const [maxGuests, setMaxGusest] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setChekIn(data.checkIn);
      setChekOut(data.checkOut);
      setMaxGusest(data.maxGuest);
      setPrice(data.price);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = { title,address,addedPhotos,description,perks,extraInfo,checkIn,checkOut,maxGuests,price};
    
    if(id)
    {
      //update
      await axios.put("/places", {
        id, ...placeData
        
      });
  
      setRedirect(true);

    }else {
      await axios.post("/places", placeData);
      setRedirect(true);

    }
    
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNavigation />
      <form onSubmit={savePlace}>
        {preInput(
          "Title",
          "Title For Your Place. Should Be Short and Catchy as in Advertiesment"
        )}
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
          placeholder="Title, For Example: My Lovely Apt."
        />

        {preInput("Address", "Address To This Place.")}
        <input
          type="text"
          value={address}
          onChange={(ev) => {
            setAddress(ev.target.value);
          }}
          placeholder="Address"
        />

        {preInput("Photos", "More = Better")}

        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput("Description", "Description Of Page ")}
        <textarea
          value={description}
          onChange={(ev) => {
            setDescription(ev.target.value);
          }}
        />

        {preInput("Perks", "Select All The Perks of Your Place")}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        {preInput("Extra Info", "Room Rules, ETC....")}
        <textarea
          value={extraInfo}
          onChange={(ev) => {
            setExtraInfo(ev.target.value);
          }}
        />

        {preInput(
          "Check In&Out Times",
          "Add Check In and Out Times, Remember to Have Some time window for cleaning The Room Between Guests"
        )}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in Time</h3>
            <input
              type="text"
              value={checkIn}
              onChange={(ev) => {
                setChekIn(ev.target.value);
              }}
              placeholder="14"
            />
          </div>

          <div>
            <h3 className="mt-2 -mb-1">Check Out Time</h3>
            <input
              type="text"
              value={checkOut}
              onChange={(ev) => {
                setChekOut(ev.target.value);
              }}
              placeholder="11"
            />
          </div>

          <div>
            <h3 className="mt-2 -mb-1">Max Number Of Guests</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(ev) => {
                setMaxGusest(ev.target.value);
              }}
            />
          </div>

          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input
              type="number"
              value={price}
              onChange={(ev) => {
                setPrice(ev.target.value);
              }}
            />
          </div>

        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}
