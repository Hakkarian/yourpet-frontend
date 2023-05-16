import { FormSearch, InputSearch, ButtonIcon } from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <FormSearch>
      <InputSearch
        placeholder="Search"
        // onChange={event => setSearchQuery(event.target.value)}
        // value={searchQuery}
        // searchQuery={searchQuery.trim()}
      />
      <ButtonIcon type="submit">
        {/* <img
            onClick={handleSubmit}
            src={search}
          alt="search"
          width="24"
          height="24"
        /> */}
        {/* {searchQuery && (
        <img
          onClick={handlerReset}
          src={deleteQuery}
          alt="delete"
          width="24"
          height="24"
        />
         )} */}
      </ButtonIcon>
    </FormSearch>
  );
};
