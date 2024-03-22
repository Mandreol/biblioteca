import BookSearch from '../organism/BookSearch';
import '../../styles/layOuts/principalLayOut.css';
import SelectedBooksList from '../organism/SelectedBooksList';
import PrincipalHeader from '../organism/PrincipalHeader';
import ReadBooks from '../organism/ReadBooks';
import ReadingBooks from '../organism/ReadingBooks';

const PrincipalLayOut = () => {
  return (
    <main>
      <PrincipalHeader />
      <div className='container'>
        <BookSearch />
        <SelectedBooksList />

        <ReadingBooks />
        <ReadBooks />
      </div>
    </main>
  );
};

export default PrincipalLayOut;
