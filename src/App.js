// Import our components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form"

// import React Hooks
import {useState, useEffect} from "react"

// Import React Router Components
import { Route, Switch, Link } from "react-router-dom";



function App(props) {
  //////////////////
  // State & Other Variables
  //////////////////

  //api url
  const url ="https://gacapstoneproject.herokuapp.com/items/"

  // state to hold list of items
  const [posts, setPosts] = useState([])
    const nullItem = {
      subject: "",
      notes: "",
    }
// const state to hold item for editing
const [targetItem, setTargetItem] = useState(nullItem)

    ///////////////
  // Functions
  ////////////////
  const getItems = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  // Function to add item from form data
    const addItems = async (newItem) => {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
   
    }

    const getTargetItem = (item) => {
      setTargetItem(item);
      props.history.push("/edit");
    }
  
    const updateItem = async (item) => {
      const response = await fetch(url + item.id + "/", {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item),
      });
  
      // get updated list of item
      getItems()
    }


// Function to edit item on form submission
const deleteItem = async (item) => {
  const response = await fetch(url + item.id + "/", {
    method: "delete",
  });

  // get updated list of items
  getItems();
  props.history.push("/");
};


  ///////////////
  // useEffects
  ///////////////
  //make the api call when the component loads only the first time
  useEffect(() => {
    getItems()
  }, [])

  /////////////////
  // Returned JSX
  /////////////////

  return (
    <div className="text-center">
      {/* <h1 className="flex justify-center m-10 font-extrabold">Keep Learning</h1> */}
      <div className="flex flex-wrap justify-center">
      <div className="w-6/12 sm:w-4/12 px-5">
      <img src="/images/never_stop_learning.png" alt="never-stop-learning"/>
      </div>
      </div>

      {/* <Link to="/new"><button style={button}>Create New Item</button></Link> */}

      <div className="flex flex-wrap justify-center pb-5">
      <Link to="/new">
      <button className="felx content-center	h-15 px-9 m-2 text-2xl text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Create New Item</button>
      </Link>
      </div>

      <Switch>
  {/* INDEX PAGE */}
      <Route
        exact
        path="/"
        render={(rp) => {
          return <AllPosts 
          {...rp} 
          posts={posts}
          />
        }}
        />

  {/* SHOW PAGE  */}
        <Route
          path="/post/:id"
          render={(rp) => {
            return <SinglePost 
            {...rp}
            posts={posts}
            edit={getTargetItem}
            deleteItem={deleteItem}
            />
          }}
        />

  {/* NEW AND EDIT FORM PAGES */}``
        <Route
          path="/new"
          render={(rp) => {
            return <Form {...rp} 
            initialItem={nullItem}
            handleSubmit={addItems}
            buttonLabel="Add to my List"
          />;
          }}
        />
        <Route
          path="/edit"
          render={(rp) => {
            return <Form {...rp} 
            initialItem={targetItem}
            handleSubmit={updateItem}
            buttonLabel="Edit"
            />;
          }}
        />

      </Switch>
    </div>
  );
}

export default App;