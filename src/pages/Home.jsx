import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
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
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      img: "https://vsegda-pomnim.com/uploads/posts/2022-04/1651203901_1-vsegda-pomnim-com-p-ochen-mnogo-fruktov-foto-1.jpg",
    },
  ]; */

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
