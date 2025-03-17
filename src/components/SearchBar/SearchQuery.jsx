import PropTypes from "prop-types";

const SearchQuery = (props) => {
  
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for movies..."
        onChange={(ev)=>props.onTextChange(ev.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};
// Define prop types for the component
SearchQuery.propTypes = {
  onTextChange: PropTypes.func.isRequired,
};

export default SearchQuery;
