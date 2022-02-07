import React from "react"
import { Link } from "react-router-dom"

const Post = ({post}) => {

    return <div className="py-1 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-2xl w-3/4">

    <div className="flex">
        {/* IMAGE */}
    <img src="/images/brain.png" alt="icon" className="round-t-lg h-60 w-1/4"/>

    {/* CONTENTS */}
    <div className="p-8 w-3/4">
            {/* <h2 className="text-xl font-extrabold mb-5">header</h2> */}
        <Link to={`/post/${post.id}`}>
          <h3 className="text-indigo-600 font-medium text-left md:text-left">{post.subject}</h3>
       </Link>
      {/* <h4 className="lg:text-4xl text-left">{post.details}</h4> */}
    </div>

    </div>

    <footer className="bg-gray-200 rounded-b-lg text-right py-4 text-xs text-gray-500"></footer>
    </div>

</div>

}

export default Post