import NavLink from './nav-link';

const NavLinkLogo = () => {
	return (
		 <NavLink to='/'>
			 <picture>
				 {/* TODO: if height shrinks heaps logo gets small when shouldn't */}
				 {/* TODO: use tailwind breakpoints here */}
				 <source media='(min-width: 640px)' srcSet='images/logo/large.png'/>
				 <source media='(min-width: 1px)' srcSet='images/logo/small.png'/>
				 <img className='h-full'/>
			 </picture>
		 </NavLink>
	)
}

export default NavLinkLogo;
