import { Filter } from '@mui/icons-material';
import css from './SearchBox.module.css';
const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.p}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
