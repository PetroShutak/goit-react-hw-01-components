import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatItem } from '../StatItem/StatItem';

export function Statistics ({ title, stats })  {
    return (
        <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.stat_list}>
    {stats.map(({ id, label, percentage }) => (
      <li key={id} className={css.item}>
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



