import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
      
      return (
            <div>
                  <h3 className="text-[#111] text-lg font-semibold p-4 rounded-lg mb-4 bg-white">{bookmark?.title}</h3>
            </div>
      );
};

Bookmark.propTypes = {
      bookmark: PropTypes.object,
}

export default Bookmark;