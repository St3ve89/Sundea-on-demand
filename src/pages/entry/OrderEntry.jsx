import React from 'react';
import { useOrderDetails } from '../../hooks/useOrderDetails';
import Button from 'react-bootstrap/Button';
import Options from './Options';

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();

  const orderDisabled = orderDetails.totals.scoops === '£0.00';

  return (
    <>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase('review')}>
        Order Sundae!
      </Button>
    </>
  );
}
