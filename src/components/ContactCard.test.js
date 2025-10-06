import { render, screen } from '@testing-library/react';
import ContactCard from './ContactCard';

const contact = {
  id: 1,
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031',
  website: 'leanne.biz',
};

describe('ContactCard', () => {
  it('renders contact name', () => {
    render(<ContactCard contact={contact} onClick={() => {}} />);
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  });

  it('renders contact email', () => {
    render(<ContactCard contact={contact} onClick={() => {}} />);
    expect(screen.getByText((content) => content.includes('Sincere@april.biz'))).toBeInTheDocument();
  });

  it('renders contact phone', () => {
    render(<ContactCard contact={contact} onClick={() => {}} />);
    expect(screen.getByText((content) => content.includes('1-770-736-8031'))).toBeInTheDocument();
  });
});
