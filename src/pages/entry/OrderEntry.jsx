import { useOrderDetails } from '../../hooks/useOrderDetails';
import Options from './Options';

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  return (
    <>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </>
  );
}
