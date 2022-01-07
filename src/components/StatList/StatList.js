import PropTypes from "prop-types";
import {
  Statistics,
  Title,
  StatisticList,
  StatisticListItem,
  Label,
  Percentage,
} from "./StatList.styled";

export default function StatList({ title, stats }) {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <StatisticList>
        {stats.map((stat) => (
          <StatisticListItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatisticListItem>
        ))}
      </StatisticList>
    </Statistics>
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
