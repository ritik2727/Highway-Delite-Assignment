import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'
import Colors from '../components/Colors'

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
   
      <Typography variant='h4' style={{color:'black',marginBottom:'1.5em'}}>Shipping</Typography>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' style={{marginBottom:'1em'}}>
          <Form.Label >Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city' style={{marginBottom:'1em'}}>
          <Form.Label >City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode' style={{marginBottom:'1em'}}>
          <Form.Label >Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country' style={{marginBottom:'1em'}}>
          <Form.Label >Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' style={{backgroundColor:'blue'}}>
          Placeorder
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen