import React from 'react';

const PostCard = ({post}) => {   
    return (
        
             <div className="card-body shadow-md bg-sky-200 hover:bg-gray-500 duration-500 hover:text-white hover:shadow-lg bg-gradient-to-r from-gray-500 to-transparent">
                <h2 className="card-title text-yellow-500  ">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary hover:bg-yellow-600 border-none">Buy Now</button>
                </div>
            </div>
    );
};

export default PostCard;