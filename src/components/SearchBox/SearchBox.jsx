import css from './SearchBox.module.css';
const SearchBox = () => {
  return (
    <>
      <div className={css.container}>
        <p className={css.p}>Find contacts by name</p>
        <input type="text" />
      </div>
    </>
  );
};

export default SearchBox;
