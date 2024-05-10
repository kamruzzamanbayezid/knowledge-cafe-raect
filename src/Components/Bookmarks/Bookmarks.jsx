
import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
import MarkAsRead from './MarkAsRead/MarkAsRead';

const Bookmarks = ({ bookmarks, markAsRead }) => {

      return (
            <>
                  <div className="lg:w-1/3 ">

                        {/* mark as read */}
                        <MarkAsRead
                              markAsRead={markAsRead}
                        ></MarkAsRead>

                        <div className='bg-[#6047ec1a] h-fit mt-6 rounded-lg p-7 '>
                              <h2 className="text-[#111] text-2xl font-bold mb-4">Bookmarked Blogs : {bookmarks?.length}</h2>
                              {
                                    bookmarks?.map((bookmark, index) => <Bookmark
                                          key={index}
                                          bookmark={bookmark}
                                          markAsRead={markAsRead}
                                    ></Bookmark>)
                              }
                        </div>
                  </div>
            </>
      );
};

Bookmarks.propTypes = {
      bookmarks: PropTypes.array,
      markAsRead: PropTypes.number,
}


export default Bookmarks;