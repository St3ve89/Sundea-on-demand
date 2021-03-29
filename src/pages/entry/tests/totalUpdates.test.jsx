import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('update scoop subtotal when scoop change', async () => {
  render(<Options optionType="scoops" />);

  // make sure total starts out: £0.00
  const scoopSubtotal = screen.getByText('Scoops total: £', {
    exact: false,
  });

  expect(scoopSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');
  expect(scoopSubtotal).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check the subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });

  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');
  expect(scoopSubtotal).toHaveTextContent('6.00');
});

test('update toppings subtotal when topping change', async () => {
  render(<Options optionType="toppings" />);

  const toppingSubtotal = screen.getByText('Toppings total: £', {
    exact: false,
  });

  expect(toppingSubtotal).toHaveTextContent('0.00');

  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });
  userEvent.click(cherriesCheckbox);
  expect(toppingSubtotal).toHaveTextContent('1.50');

  const hotFudgeCheckbox = await screen.findByRole('checkbox', {
    name: 'Hot fudge',
  });

  userEvent.click(hotFudgeCheckbox);
  expect(toppingSubtotal).toHaveTextContent('3.00');
  userEvent.click(cherriesCheckbox);
  expect(toppingSubtotal).toHaveTextContent('1.50');
});
