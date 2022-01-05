import PropTypes from 'prop-types';
import { ProfileHead, ProfileList } from './SocialProfile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
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
    views: PropTypes.array,
    likes: PropTypes.array,
};

export default Profile;
