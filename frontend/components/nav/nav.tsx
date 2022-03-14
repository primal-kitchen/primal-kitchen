// @ts-nocheck TODO: remove this

import NavLink from './nav-link';
import NavLinkAccount from './nav-link-account';
import React, { useCallback, useState } from 'react';
import NavLinkLogo from './nav-link-logo';
import BodyClamp from '../utilities/body-clamp';
import Icon, { Colour, IconName } from '../general/icon';

const NAV_ID = 'nav';

const Nav = () => {
	const useSelectedStore = () => ({selectedStore: 'wellington'});

	const {selectedStore} = useSelectedStore();
	const [showingMenu, setShowingMenu] = useState(false);
	const toggleShowingMenu = useCallback(() => setShowingMenu(showingMenu => !showingMenu), [setShowingMenu]);

	const NavLinkAboutUs = () => <NavLink to='/about-us'>About us</NavLink>;
	const NavLinkOrderMeals = () => <NavLink to='/'>Order meals</NavLink>;
	const NavLinkSelectStore = () => <NavLink>{selectedStore ?? 'Select store'}</NavLink>;
	const NavLinkShoppingCart = () =>
		<NavLink to='/cart'>
			<Icon iconName={IconName.SHOPPING_CART} colour={Colour.WHITE}/>
		</NavLink>;
	const NavLinkMenuToggle = () =>
		<div onClick={toggleShowingMenu}>
			<NavLink>
				<Icon iconName={showingMenu ? IconName.MENU_CLOSE : IconName.MENU_OPEN} colour={Colour.WHITE}/>
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
		<div className='bg-dark-grey sticky top-0 z-10 min-h-[35px]' id={NAV_ID}>
			<BodyClamp>
				<nav className='w-full bg-dark-grey text-white'>
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
						// TODO: height calc should be based off of nav css variables
						<div
							className='bg-dark-grey h-[calc(95vh-1rem)] flex flex-col items-center justify-center gap-8 overscroll-contain'>
							<NavLinks/>
						</div>
					}
				</nav>
			</BodyClamp>
		</div>
	);
};

export default Nav;
export {
	NAV_ID,
};
