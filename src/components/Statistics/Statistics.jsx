import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Section = styled.section`
    width: 240px;

    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        background-color: Cyan;
        color: white;
    }
`;

const H2 = styled.h2`
    text-align: center;
`;

const Statistics = props => {
    return (
        <Section>
            {props.title && <H2>{props.title}</H2>}

            <ul>
                <li>
                    <span>{props.stats[0].label} </span>
                    <span>{props.stats[0].percentage}%</span>
                </li>
                <li>
                    <span>{props.stats[1].label} </span>
                    <span>{props.stats[1].percentage}%</span>
                </li>
                <li>
                    <span>{props.stats[2].label} </span>
                    <span>{props.stats[2].percentage}%</span>
                </li>
                <li>
                    <span>{props.stats[3].label} </span>
                    <span>{props.stats[3].percentage}%</span>
                </li>
                <li>
                    <span>{props.stats[4].label} </span>
                    <span>{props.stats[4].percentage}%</span>
                </li>
            </ul>
        </Section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default Statistics;
