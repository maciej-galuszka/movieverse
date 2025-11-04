import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="text-white">
      <p>dashboard</p>
      <p>
        <Link to="movies">---movies</Link>
      </p>
      <p>
        <Link to="watched">---watched</Link>
      </p>
      <p>
        <Link to="profile">---profile link</Link>
      </p>
    </div>
  );
}

export default Dashboard;
