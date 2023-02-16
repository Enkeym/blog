import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, [cat]);

  /* const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg"
    },
  ] */

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu