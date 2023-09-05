import useAuth from "./useAuth.jsx";

function Home() {
  const loggedIn = useAuth();

  return loggedIn ? <h1>Your Profile</h1> : <h1>Not Authenticated</h1>;
}

export default Home;
