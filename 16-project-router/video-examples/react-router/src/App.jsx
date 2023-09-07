import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
import Blog from "./Blog.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <h2>Browser Router!</h2>
        <NavBar />
        <Route path="/home">
          <h3>Route 1</h3>
          {/* <a href="/2">Go to route 2...</a> */}
        </Route>
        <Route path="/blog">
          <h3>Route 2</h3>
          <Blog />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
