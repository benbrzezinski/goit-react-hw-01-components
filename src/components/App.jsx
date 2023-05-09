import user from '../json/user';
import Profile from './Profile/Profile';
import data from '../json/data';
import Statistics from './Statistics/Statistics';

const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </>
);

export default App;
