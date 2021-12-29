import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Li = styled.li`
    margin-bottom: 10px;
    border: 2px solid black;
    width: 240px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

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
