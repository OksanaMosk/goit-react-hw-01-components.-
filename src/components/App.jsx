import  Profile  from './Profile/Profile'
import  Statistics  from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import  TransactionHistory  from './TransactionHistory/TransactionHistory'
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import css from './App.module.css'
export const App = () => {
  return (
    <div className={css.container}>
      <Profile
  username={user.username}
  tag={user.tag}
  location= {user.location}
  avatar={user.avatar}
  stats= {user.stats}
    followers= {user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
      
      <Statistics stats={data}/>

      <FriendList items={friends}/>
      
      <TransactionHistory items={transactions}/>

    </div>
  );
};
