import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ options }) => {
      // console.log(options);
      const { name, membership, features, price } = options;
      return (
            <div className='bg-emerald-600 text-center rounded-xl p-6 text-white flex flex-col'>

                  <div>
                        <span className='text-5xl font-bold'>{price}</span>
                        <span className='text-xl'>/month</span>
                  </div>
                  <h1 className='text-2xl font-medium'>{name}</h1>
                  <h3 className='text-xl mb-6'>Membership: <span className='text-2xl font-medium'>{membership}</span></h3>
                  <div className='flex-grow'>
                        {
                              features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                        }
                  </div>

                  <button className='btn btn-neutral mt-8 w-full'>Purchase</button>

            </div>
      );
};

PriceOption.propTypes = {
      options: PropTypes.object
}

export default PriceOption;