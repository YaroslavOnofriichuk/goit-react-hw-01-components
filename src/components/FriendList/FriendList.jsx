import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friend: PropTypes.object,
};

export default FriendList;
