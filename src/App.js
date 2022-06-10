import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home.jsx";
import PostPage from "./pages/postPage/PostPage";
import WritePage from "./pages/writePage/WritePage";
import Settings from "./pages/settings/Settings";
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const user = true;
  return (
    <>
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/post" element={ <PostPage />} />
        {user? <Route path="/write" element={ <WritePage />} />:<Route path="/write" element={ <Register />} />}
        {user? <Route path="/settings" element={ <Settings />} />: <Route path="/settings" element={ <Register />} />}
        {user? <Route path="/login" element={ <Home/>} />: <Route path="/login" element={ <Login />} />}
        {user? <Route path="/register" element={ <Home/>} />: <Route path="/register" element={ <Register />} />}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
