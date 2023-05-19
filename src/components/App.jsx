import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#B4AFAF',
        backgroundColor: '#F6F6F6',
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        {/* <Statistics title="Upload stats" stats={data} /> */}
        <Statistics stats={data} />
      </div>
    </div>
  );
};
