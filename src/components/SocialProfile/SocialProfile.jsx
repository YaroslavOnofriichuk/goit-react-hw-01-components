import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ProfileHead = styled.div`
    width: 240px;
    border: 2px solid black;

    img {
        display: block;
        margin: 20px auto 20px auto;
        width: 150px;
        height: 150px;
        border-radius: 100%;
    }

    p {
        text-align: center;
        margin-bottom: 10px;
    }
`;

const ProfileList = styled.ul`
    display: flex;
    /* width: 200px; */
    padding-inline-start: 0px;

    li {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        text-align: center;
        width: 77px;
        font-size: 15px;
    }
`;

const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <div>
            <ProfileHead>
                <img src={avatar} alt="User avatar" />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </ProfileHead>

            <ProfileList>
                <li>
                    <span>Followers </span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views </span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes </span>
                    <span>{stats.likes}</span>
                </li>
            </ProfileList>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};

export default Profile;
