import SearchIcon from "@mui/icons-material/Search";
import "./search.scss";

const Search = () => {
  return (
    <section className="search-form-container">
      <form action="">
        <input type="search" placeholder="search here..." id="search-box" />
        <label htmlFor="search-box">
          <SearchIcon />
        </label>
      </form>
    </section>
  );
};

export default Search;
