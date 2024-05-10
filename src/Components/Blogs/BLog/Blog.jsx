import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddBookmarks, handleMarkAsRead }) => {
      const { id, author, author_img, cover, posted_date, reading_time, title, hashtags } = blog;

      return (
            <div className='pb-9 mb-9'>
                  {/* Cover Photo */}
                  <img className='w-full mb-8 rounded-lg' src={cover} alt="Blog Cover" />

                  <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                        {/* Author Information */}
                        <div className='flex justify-center mb-4 md:mb-0 items-center gap-6'>
                              <img className='w-16' src={author_img} alt="Author Image" />
                              <div>
                                    <h3 className='text-2xl font-bold'>{author}</h3>
                                    <p className='text-[gray] font-semibold'>{posted_date}</p>
                              </div>
                        </div>
                        {/* read time && Bookmark icon */}
                        <div className='flex justify-center items-center gap-2'>
                              <h1 className='text-[gray] text-xl font-medium'>{reading_time} min read</h1>

                              {/* Bookmark Icon */}
                              <button onClick={() => handleAddBookmarks(blog)} className='text-2xl'><FaRegBookmark></FaRegBookmark></button>
                        </div>
                  </div>


                  {/* Title */}
                  <h2 className='lg:text-4xl text-2xl text-center md:text-start font-bold text-[#111] mb-4'>{title}</h2>

                  {/* HashTag */}
                  <div className='mb-5 text-center md:text-start'>
                        {
                              hashtags.map((hashtag, index) => <a className='text-[gray] text-xl font-medium mr-4' key={hashtag + index}>#<span>{hashtag}</span></a>)
                        }
                  </div>
                  {/* Mark as read */}
                  <div onClick={() => handleMarkAsRead(reading_time, id)} className='flex justify-center md:justify-start'>
                        <a href="#" className='underline text-center text-xl font-semibold text-[#6047EC] mb-7'>Mark as read</a>
                  </div>

            </div>
      );
};

Blog.propTypes = {
      blog: PropTypes.object.isRequired,
      handleAddBookmarks: PropTypes.func,
      handleMarkAsRead: PropTypes.func
}

export default Blog;