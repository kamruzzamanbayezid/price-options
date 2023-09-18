import PropTypes from 'prop-types';

const Navbar = ({ route }) => {
      // console.log(route);
      return (
            <div>
                  <li className='mr-20 p-2 w-full font-medium hover:bg-slate-500 hover:text-white md:rounded-xl text-white mb-2'><a href={route.path}>{route.name}</a></li>
            </div>
      );
};

Navbar.propTypes = {
      route: PropTypes.object
}

export default Navbar;