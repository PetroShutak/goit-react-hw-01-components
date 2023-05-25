import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  const itemClassName = isOnline
    ? `${css.item} ${css.online}`
    : `${css.item} ${css.offline}`;
  return (
    <li className={itemClassName}>
      <span className={isOnline ? css.statusOnline : css.statusOffline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
