// @ts-nocheck TODO: remove this

import NavLink from './nav-link';
import NavLinkAccount from './nav-link-account';

const Nav = () => {
	const useSelectedStore = () => ({selectedStore: 'wellington'});

	const {selectedStore} = useSelectedStore();

	return (
		<nav className='w-full p-2 bg-background text-white flex items-center justify-end gap-4'>
			<div className='mr-auto'>
				<NavLink>
					<img src='/logo.png' style={{maxHeight: '50px'}}/>
				</NavLink>
			</div>
			<NavLink>{selectedStore ?? 'Select store'}</NavLink>
			<NavLink to='/'>Order meals</NavLink>
			<NavLink to='/about-us'>About us</NavLink>
			<NavLinkAccount/>
			<NavLink>Cart</NavLink>
		</nav>
	);
};

export default Nav;
