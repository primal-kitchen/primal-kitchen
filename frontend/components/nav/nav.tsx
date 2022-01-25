// @ts-nocheck TODO: remove this

import NavLink from './nav-link';
import NavLinkAccount from './nav-link-account';
import { useCallback, useLayoutEffect, useState } from 'react';
import NavLinkLogo from './nav-link-logo';
import BodyClamp from '../utilities/body-clamp';

const Nav = () => {
	const useSelectedStore = () => ({selectedStore: 'wellington'});

	const {selectedStore} = useSelectedStore();
	const [showingMenu, setShowingMenu] = useState(false);
	const toggleShowingMenu = useCallback(() => setShowingMenu(showingMenu => !showingMenu), [setShowingMenu]);

	const NavLinkAboutUs = () => <NavLink to='/about-us'>About us</NavLink>;
	const NavLinkOrderMeals = () => <NavLink to='/'>Order meals</NavLink>;
	const NavLinkSelectStore = () => <NavLink>{selectedStore ?? 'Select store'}</NavLink>;
	const NavLinkShoppingCart = () =>
		<NavLink>
			<img src='shopping-cart.svg'/>
		</NavLink>;
	const NavLinkMenuToggle = () =>
		<div onClick={toggleShowingMenu}>
			<NavLink>
				<img src={showingMenu ? 'menu-close.svg' : 'menu-open.svg'}/>
			</NavLink>
		</div>;
	const NavLinks = () =>
		<>
			<NavLinkSelectStore/>
			<NavLinkAboutUs/>
			<NavLinkAccount/>
			<NavLinkOrderMeals/>
			<NavLinkShoppingCart/>
		</>;

	return (
		// shitty solution with the double coloring to do with clamping i cbf explaining
		<nav className='bg-dark-grey sticky top-0 min-h-[35px]'>
			<BodyClamp className='m-auto bg-dark-grey text-white'>
				<div className='flex items-center justify-end gap-8 h-[5vh] m-2'>
					<div className='mr-auto h-full'>
						<NavLinkLogo/>
					</div>
					<div className='hidden lg:contents'>
						<NavLinks/>
					</div>
					<div className='lg:hidden'>
						<NavLinkMenuToggle/>
					</div>
				</div>
				{
					// TODO: bug if window sized down then menu opened, then resized up can't close window...
					showingMenu &&
					// top-auto is the important class here
					<div
						className='bg-dark-grey h-[95vh] flex flex-col items-center justify-center gap-8'>
						<NavLinks/>
					</div>
				}
			</BodyClamp>
		</nav>
	);
};

export default Nav;
