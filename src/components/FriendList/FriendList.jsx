import PropTypes from 'prop-types';
import './FriendList.css';
// {/* <ul class="friend-list">
//   <!-- Довільна кіл-сть FriendListItem -->
// </ul>

// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li> */}
export function FriendList ({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status"></span>
          <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}
