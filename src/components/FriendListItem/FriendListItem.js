import {
  OneFriend,
  Status,
  FriendImg,
  FriendName,
} from "./FriendListItem.styled";

export default function FriendListItem({ avatar, name, status, id }) {
  return (
    <OneFriend key={id}>
      <Status status={status} a={5}></Status>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </OneFriend>
  );
}
