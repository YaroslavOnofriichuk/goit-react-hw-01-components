import PropTypes from 'prop-types';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import Li from './FriendListItem.styled';

const FriendListItem = ({ friend }) => {
    return (
        <Li>
            {friend.isOnline === true ? (
                <span>
                    <AiOutlineCheck />
                </span>
            ) : (
                <span>
                    <AiOutlineClose />
                </span>
            )}
            <img src={friend.avatar} alt="User avatar" width="48" />
            <span>{friend.name}</span>
        </Li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
};

export default FriendListItem;
