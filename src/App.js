import Profile from "./components/Profile/Profile";
// import Section from "./components/Section/Section";
import StatList from "./components/StatList/StatList";
import user from "./user.json";
import data from "./data.json";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <StatList stats={data} />
    </div>
  );
}
