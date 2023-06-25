import React, { useState } from 'react';


const RequestForm = () =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [addressOne, setAddressOne] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState ('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')
    const [comments, setComments] = useState('')

    let handleChange =(e) =>{
        setFirstName(e.target.value);
        setLastName(e.target.value);
        setEmail(e.target.value);
        setAddressOne(e.target.value);
        setAddressTwo(e.target.value);
        setCity(e.target.value);
        setState(e.target.value);
        setZip(e.target.value);
        setCountry(e.target.value);
        setNumber(e.target.value);
        setComments(e.target.value);
    }



    return (
        <>
        <h1>Virtual request Form</h1>
        ----------------------------------------------------------------
        <br />
        <form>
            <label>First name:
            <input 
            type='text'
            value={firstName}
            onChange={handleChange}
            />
            </label>

            <label>Last name:
            <input 
            type='text'
            value={lastName}
            onChange={handleChange}
            size={30}
            />
            </label>
            <br />  
            <br />
            <label>Email:
            <input 
            type='text'
            value={email}
            onChange={handleChange}
            size={50}
            />
            <br />
            <br />
            </label>
            <label>Street Address:
            <input 
            type='text'
            value={addressOne}
            onChange={handleChange}
            size={50}
            />
            </label>
            <br />
            <br />
            <label>Street Address 2:
            <input 
            type='text'
            value={addressTwo}
            onChange={handleChange}
            size={50}
            />
            </label>
            <br />
            <br />
            <label>City:
            <input 
            type='text'
            value={city}
            onChange={handleChange}
            />
            </label>
            <label>State/Province:
            <input 
            type='text'
            value={state}
            onChange={handleChange}
            />
            <br />
            <br />
            </label>
            <label>Postal/Zip code:
            <input 
            type='text'
            value={zip}
            onChange={handleChange}
            />
            </label>
            <label>Country:
            <input 
            type='text'
            value={country}
            onChange={handleChange}
            />
            </label>
            <br />
            <br />
            <label>Phone Number:
            <input
            type='text'
            value={number}
            onChange={handleChange}
            />
            </label>
            <br />
            <br />
            <label>Comments:
            <input 
            type='text'
            value={comments}
            onChange={handleChange}
            size={100}
            />
            </label>
            

        </form>
        </>
    )
}

export default RequestForm