import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { ContactsContainer, Container } from './ContactPage.styled';

export default function ContactsPage() {
  return (
    <Container>
      <PhoneBook />
      <ContactsContainer>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </ContactsContainer>
    </Container>
  );
}
