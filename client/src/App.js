import { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import NavBar from "./NavBar";
import Login from "./Login"
import New from "./New"
import PostList from "./PostList"
import CryptidList from "./CryptidList";
import Home from "./Home";
import { Container } from "react-bootstrap";


function App() {
  const { user, setUser } = useContext(UserContext)
  const [cryptids, setCryptids] = useState([])
  const [locations, setLocations] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  useEffect(() => {
    fetch("/cryptids")
      .then((r) => r.json())
      .then((data) => setCryptids(data));
  }, [posts]);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((data) => setLocations(data));
  }, []);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  function handleAddLocation(newLocation) {
    setLocations([...locations, newLocation])
  };

  function handleAddCryptid(newCryptid) {
    setCryptids([...cryptids, newCryptid])
  };

  function handleAddPost(newPost) {
    setPosts([...posts, newPost])
  };

  function handleDeletePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts)
  };

  function handleUpdatePost(updatedPost) {
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost
      } else {
        return post
      }
    })
    setPosts(updatedPosts)
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/new">
            <New onAddCryptid={handleAddCryptid} onAddLocation={handleAddLocation} />
          </Route>
          <Route exact path="/cryptids">
            <CryptidList cryptids={cryptids} />
          </Route>
          <Route exact path="/posts">
            <PostList
              posts={posts}
              cryptids={cryptids}
              locations={locations}
              onAddPost={handleAddPost}
              onDeletePost={handleDeletePost}
              onUpdatePost={handleUpdatePost} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;