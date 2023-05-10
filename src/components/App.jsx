import Profile from './Profile/Profile';
import user from '../json/user';
import Statistics from './Statistics/Statistics';
import data from '../json/data';
import FriendList from './FriendList/FriendList';
import friends from '../json/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions';

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
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
