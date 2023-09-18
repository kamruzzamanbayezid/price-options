import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Features = ({ feature }) => {
      // console.log(feature);
      return (
            <div>
                  <ul className='flex gap-2 justify-center items-center'>
                        <AiFillCheckCircle></AiFillCheckCircle>
                        <li>{feature}</li>
                  </ul>
            </div>
      );
};

Features.propTypes = {
      feature: PropTypes.object
}

export default Features;