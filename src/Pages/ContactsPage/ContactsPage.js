import { statusUserError } from 'Redux/Auth/authSelectors';
import { resetError } from 'Redux/Auth/authSlice';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactsPage() {
  const error = useSelector(statusUserError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error !== null) toast.error(`Error loading contacts: ${error}`);
    dispatch(resetError());
  }, [dispatch, error]);

  return (
    <div>
      <h1>Phone Boook</h1>
      <PhoneBook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
