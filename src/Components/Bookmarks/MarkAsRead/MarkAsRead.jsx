import PropTypes from 'prop-types';

const MarkAsRead = ({ markAsRead }) => {
      return (
            <div>
                  <h3 className="text-[#6047EC] text-2xl font-bold py-5 px-10 bg-[#6047ec1a] rounded-lg">Spent time on read : <span>{markAsRead}</span> min</h3>
            </div>
      );
};

MarkAsRead.propTypes = {
      markAsRead: PropTypes.number
}

export default MarkAsRead;