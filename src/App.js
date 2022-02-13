import "./css/App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import RecommendedVideos from "./Components/RecommendedVideos";
import SearchPage from "./Components/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/watch/:videoId">
            <VideoPlayer />
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
