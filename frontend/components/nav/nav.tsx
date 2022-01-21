// @ts-nocheck TODO: remove this

import NavLink from './nav-link';
import NavLinkAccount from './nav-link-account';
import { useCallback, useLayoutEffect, useState } from 'react';
import NavLinkLogo from './nav-link-logo';

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
		</NavLink>
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
		</>

	return (
		<nav className='w-full p-2 bg-dark-grey text-white z-10'>
			<div className='flex items-center justify-end gap-8 m-auto max-w-screen-xl'>
				<div className='mr-auto'>
					<NavLinkLogo/>
				</div>
				<div className='hidden lg:contents'>
					<NavLinks />
				</div>
				<div className='lg:hidden'>
					<NavLinkMenuToggle/>
				</div>
			</div>
			{
				showingMenu &&
				// top-auto is the important class here
				<div className='bg-dark-grey h-screen w-screen fixed top-auto left-0 z-0 flex flex-col items-center justify-center gap-8'>
					<NavLinks />
				</div>
			}
		</nav>
	);
};

export default Nav;
