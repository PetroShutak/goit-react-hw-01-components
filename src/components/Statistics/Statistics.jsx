import PropTypes from 'prop-types';
import './Statistics.css';
import { StatItem } from './StatItem';

export function Statistics ({ title, stats })  {
    return (
        <section className="statistics">
  <h2 className="title">{title}</h2>
  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <li key={id} className="item">
        <StatItem label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
</section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};



