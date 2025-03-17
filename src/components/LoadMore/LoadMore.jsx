import PropTypes from 'prop-types';

const LoadMore = ({ onClick }) => {
    return (
      <div className="flex items-center justify-center">
      <button onClick={onClick} className="px-4 py-2 mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">Load more ..</button>
      </div>
    )
  }
  LoadMore.propTypes = {
    onClick: PropTypes.func.isRequired, // onClick should be a required function
  };
  
  
  export default LoadMore