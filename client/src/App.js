import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import NavBar from "./NavBar";
import Login from "./Login"
import New from "./New"
import PostList from "./PostList"
import CryptidList from "./CryptidList";
import Home from "./Home";


function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/new">
            <New />
          </Route>
          <Route exact path="/cryptids">
            <CryptidList />
          </Route>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;