import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import DropdownModal from './components/DropdownModal';
import { BrowserRouter } from 'react-router-dom';
import AppModal from './components/AppModal';
import StorePage from './pages/StorePage';
import CartPromo from './components/CartPromo';

describe('DropdownModal', () => {
  it('Not renders dropdown modal', () => {
    render(
      <BrowserRouter>
        <DropdownModal setModalIsOpen={function(){}} modalOpen={false} sortBy={''} setSortBy={function(){}}/>
      </BrowserRouter>
    );
    const modal = screen.queryByTestId('dropdownModal');
    expect(modal).not.toBeInTheDocument();
  })
  it('Render dropdown', () => {
    render(
      <BrowserRouter>
        <DropdownModal setModalIsOpen={function(){}} modalOpen={true} sortBy={''} setSortBy={function(){}}/>
      </BrowserRouter>
    );
    const modal = screen.getByTestId('dropdownModal');
    expect(modal).toBeInTheDocument();
  })
})

describe('Offer modal', () => {
  it('Not renders modal', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppModal isOpen={false} orderAccepted={false} setIsOpen={function(){}} setOrderAccepted={function(){}}/>
        </Provider>
      </BrowserRouter>
    );
    const modal = screen.queryByTestId('appModal');
    expect(modal).not.toBeInTheDocument();
  })
  it('Renders modal', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppModal isOpen={true} orderAccepted={false} setIsOpen={function(){}} setOrderAccepted={function(){}}/>
        </Provider>
      </BrowserRouter>
    );
    const modal = screen.getByTestId('appModal');
    expect(modal).toBeInTheDocument();
  })
  it('Not renders modal not accepted', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppModal isOpen={true} orderAccepted={false} setIsOpen={function(){}} setOrderAccepted={function(){}}/>
        </Provider>
      </BrowserRouter>
    );
    const modal = screen.queryByTestId('appModalAccepted');
    expect(modal).not.toBeInTheDocument();
  })
  it('Rrenders modal not accepted', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppModal isOpen={true} orderAccepted={true} setIsOpen={function(){}} setOrderAccepted={function(){}}/>
        </Provider>
      </BrowserRouter>
    );
    const modal = screen.getByTestId('appModalAccepted');
    expect(modal).toBeInTheDocument();
  })
})

describe('Copy link button', () => {
  it('To be in document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <StorePage/>
        </BrowserRouter>
      </Provider>
    )
    const copyLink = screen.getByText(/copy/i);
    expect(copyLink).toBeInTheDocument();
  })
})

describe('Promocodes', () => {
  it('Promos to be in document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartPromo totalSale={8} activePromos={[]} setActivePromos={function(){}} setTotalSale={function(){}}/>
        </BrowserRouter>
      </Provider>
    )
    const promo = screen.getByTestId('promo');
    expect(promo).toBeInTheDocument();
  })
  it('Get promo in promocodes', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartPromo totalSale={8} activePromos={[]} setActivePromos={function(){}} setTotalSale={function(){}}/>
        </BrowserRouter>
      </Provider>
    )
    const promo = screen.getByPlaceholderText(/Enter promo/i);
    fireEvent.input(promo, {
      target: {value: 'LC'}
    })
    const findedPromo = screen.getByTestId('findedPromo');
    expect(findedPromo).toBeInTheDocument();
  })
  it('Not found promo', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartPromo totalSale={8} activePromos={[]} setActivePromos={function(){}} setTotalSale={function(){}}/>
        </BrowserRouter>
      </Provider>
    )
    const promo = screen.getByPlaceholderText(/Enter promo/i);
    fireEvent.input(promo, {
      target: {value: 'asdasdasdasd'}
    })
    const findedPromo = screen.queryByTestId('findedPromo');
    expect(findedPromo).not.toBeInTheDocument();
  })
})