import NavLink from './nav-link';

const NavLinkLogo = () => {
	return (
		 <NavLink to='/'>
			 <picture>
				 {/* TODO: use tailwind breakpoints here */}
				 <source media='(min-width: 640px)' srcSet='logo-large.png'/>
				 <source media='(min-width: 1px)' srcSet='logo-small.png'/>
				 <img className='h-full'/>
			 </picture>
		 </NavLink>
	)
}

export default NavLinkLogo;
