import React from "react"
import {Link} from "react-router-dom"

const SinglePost = ({posts, match, edit, deleteItem}) => {

    const id = parseInt(match.params.id)
    const post = posts.find((post) => post.id === id )



    return (
        <div className="text-center bg-slate-100 rounded-3xl m-30 m-auto w-4/5">
            <h1 className="font-medium">{post?.subject}</h1>
            <h2>{post?.notes}</h2>
            <button className="mr-1.5" onClick={(event) => edit(post)}>Edit</button>
            <button className="mr-1.5" onClick={(event) => deleteItem(post)}>Delete</button>

            <Link to="/">
                <button className="mr-1.5">Go back</button>
            </Link>
        </div>
    )
}

export default SinglePost