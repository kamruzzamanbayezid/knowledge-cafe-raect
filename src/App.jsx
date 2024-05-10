
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleAddBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog])
  };

  const handleMarkAsRead = (reading_time, id) => {
    setMarkAsRead(markAsRead + reading_time)

    const remaining = bookmarks?.filter(bookmark => bookmark?.id !== id);
    setBookmarks(remaining);
  }

  return (
    <div className='max-w-7xl mx-auto  p-4 lg:p-0'>
      <Header></Header>

      <div className='flex flex-col lg:flex-row justify-between gap-5'>
        <Blogs
          handleAddBookmarks={handleAddBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          markAsRead={markAsRead}
        ></Bookmarks>
      </div>

    </div>
  )
}

export default App
