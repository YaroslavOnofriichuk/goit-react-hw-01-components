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

export { ProfileHead, ProfileList };
