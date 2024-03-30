import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { Container } from './ContactPage.styled';

export default function ContactsPage() {
  return (
    <Container>
      <PhoneBook />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </Container>
  );
}
