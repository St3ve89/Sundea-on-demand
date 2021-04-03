import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils/testing-library-utils';
import Options from '../Options';

test('displays image for each scoop from the server', async () => {
  render(<Options optionType="scoops" />);

  // find the images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each toppings from the server', async () => {
  render(<Options optionType="toppings" />);

  // find the images
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // confirm alt text of images
  const altText = toppingImages.map((el) => el.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});

test('dont update total if scoops inputs is invalid', async () => {
  render(<Options optionType="scoops" />);

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '-1');

  // make sure scoops subtotal hasnt updated
  const scoopsSubtotal = screen.getByText('Scoops total: £0.00');
  expect(scoopsSubtotal).toBeInTheDocument();
});
