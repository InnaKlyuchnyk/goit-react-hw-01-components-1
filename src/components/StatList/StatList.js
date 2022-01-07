import PropTypes from "prop-types";

export default function StatList({ title, stats }) {
  return (
    <section className="statistics">
      {title && '<h2 className="title">{title}</h2>'}
      <ul className="stat-list">
        {stats.map((stat) => (
          <li className="stat" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
