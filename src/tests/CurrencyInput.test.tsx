import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CurrencyInput } from '../components/CurrencyInput';
import CurrencyProvider from '../context/CurrencyContext';

const AllTheProviders = (props: { children: JSX.Element[] | JSX.Element }) => {
  return <CurrencyProvider>{props.children}</CurrencyProvider>;
};
function renderCurrencyInput() {
  return render(<CurrencyInput />, {
    wrapper: AllTheProviders,
  });
}

describe('CurrencyInput value', () => {
  it('snapshot tested', () => {
    const { asFragment } = renderCurrencyInput();
    expect(asFragment()).toMatchSnapshot();
  });
  // eslint-disable-next-line testing-library/no-render-in-setup
  beforeEach(() => renderCurrencyInput());

  it('render header', () => {
    const input = screen.getByTestId('currency-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(null);
  });

  it('change event give number value', () => {
    const input = screen.getByTestId('currency-input');
    userEvent.type(input, '123');
    expect(input).toHaveValue(123);
  });
});
