import React, { useEffect, useState } from 'react';
import PostCard from '../postCard/PostCard';
import { json } from 'react-router-dom';
import { data } from 'autoprefixer';

const About = () => {
    const [posts, setPosts] =useState([])   
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));

    },[])
    return (
        <div className="card gap-5 shadow-xl top-5  grid md:grid-cols-2  lg:grid-cols-3 px-5 ">
            {
                posts.map(post => <PostCard 
                key={post.id}
                post={post}
                ></PostCard>)
            }
           
        </div>
    );
};

export default About;