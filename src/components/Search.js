
import React, {useState, useEffect} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import axios from 'axios'
import PlaceCard from './PlaceCard'
import styled from 'styled-components'

const Search = () => {
  const [address, setAddress] = useState("");
  // const [coordinates, setCoordinates] = useState({lat: null, lng: null});
  const [type, setType] = useState("");
  // const [urlInput, setUrlInput] = useState("");
  const [placeID, setPlaceID] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  

  const convertString = (str) => {
    let address = str.split(",");
    let arr = address[0].split(" ");
    return arr.join("%20");
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    
    console.log(value);
    // setCoordinates(latLng);
    setType(results[0].types[0]);
    // setUrlInput(convertString(value));
    // console.log(convertString(value));
    console.log(results);
    setPlaceID(results[0].place_id);
    console.log("place id ", results[0].place_id);
    setAddress(value);

  };



  useEffect(()=>{
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=photo,name,rating,formatted_phone_number,formatted_address&key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        console.log("axios results", res, placeID);
        setName(res.data.result.name);
        setFormattedAddress(res.data.result.formatted_address);
        let photoRef = res.data.result.photos[0].photo_reference;
        return photoRef;
      })
      .then(ref => {
        axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${process.env.REACT_APP_API_KEY}`)
        .then (res=> {
          setImgUrl(res.config.url);
          
        
        })
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  }, [address])




  return(
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({getInputProps, suggestions, getSuggestionItemProps, loading})=><div>

            {/* <p>Lattitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}


          <Input {...getInputProps({placeholder: "Type address"})}/>
          <div>
            {loading ? <div>...loading</div>: null}
            {suggestions.map((suggestion)=>{
              const style = {
                backgroundColor: suggestion.active ? "blue" : "#fff"
              };
              return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
            })}
          </div>
          <div style={{width: '100%'}}>
            {placeID && <PlaceCard type={type} imgUrl={imgUrl} name={name} formattedAddress={formattedAddress}/>}
          </div>
        </div>}
      </PlacesAutocomplete>
    </div>
  )
}

export default Search

const Input = styled.input`
    height: 40px;
    border: none;
    width: 75%;
    padding: 4%;
    font-size: 1rem;
    background: #F0F0F0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;
const Button = styled.button`
    height: 40px;
    width: 25%;
    border: none;
    background: #0A1331;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;
