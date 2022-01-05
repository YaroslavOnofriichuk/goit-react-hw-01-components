import PropTypes from 'prop-types';
import { Section, H2 } from './Statistics.styled';

const Statistics = props => {
    return (
        <Section>
            {props.title && <H2>{props.title}</H2>}

            <ul>
                {props.stats.map(prop => (
                    <li key={prop.id}>
                        <span>{prop.label} </span>
                        <span>{prop.percentage}%</span>
                    </li>
                ))}
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
