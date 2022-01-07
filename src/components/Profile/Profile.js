import PropTypes from "prop-types";
import {
  UserName,
  Avatar,
  ProfileCard,
  Tag,
  Location,
  Label,
  Quantity,
  Description,
  StatisticList,
  StatisticListItem,
} from "./Profile.styled";

export default function Profile({ username, avatar, tag, location, stats }) {
  const { followers, views, likes } = stats;
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatisticList>
        <StatisticListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatisticListItem>
        <StatisticListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatisticListItem>
        <StatisticListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatisticListItem>
      </StatisticList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
