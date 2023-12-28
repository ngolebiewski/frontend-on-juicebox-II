import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import BlogCard from './BlogCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('./api/post');
      setAllPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log(allPosts);
  }, [allPosts]); // Add allPosts as a dependency

  return (
    <>
      <Navigation />
      <div className="all-posts-container">
        <BlogCard allPosts={allPosts} />
      </div>
      
    </>
  );
}

export default App;