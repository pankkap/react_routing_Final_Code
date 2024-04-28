import { Link, Route, Routes } from "react-router-dom";
import LatestPosts from "./LatestPosts";
import OldestPosts from "./OldestPosts";
import LikesPosts from "./LikesPosts";
import DisLikesPosts from "./DislikesPosts";


export default function Posts() {
  return (
    <div>
      <h1 className="text-primary text-center">List of Posts</h1>
      <ul className="nav justify-content-center nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="latest">
            LATEST
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="oldest">
            OLDEST
          </Link>
        </li>
        <li>
        <Link className="nav-link" to="likepost">
            LIKES
          </Link>
          
        </li>
        <li>
        <Link className="nav-link" to="dislikepost">
            DISLIKES
          </Link>
        </li>
        
      </ul>
      <Routes>
        <Route path="/latest" element={<LatestPosts/>}></Route>
        <Route path="/oldest" element={<OldestPosts/>}></Route>
        <Route path="/likepost" element={<LikesPosts/>}></Route>
        <Route path="/dislikepost" element={<DisLikesPosts/>}></Route>
    </Routes>
    </div>
  );
}
