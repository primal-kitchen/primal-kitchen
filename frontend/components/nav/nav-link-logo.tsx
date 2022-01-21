import NavLink from './nav-link';

const NavLinkLogo = () => {
	return (
		<NavLink to='/'>
			<picture>
				<source media='(min-width: 640px)' srcSet='logo-large.png'/>
				<source media='(min-width: 1px)' srcSet='logo-small.png'/>
				<img className='h-[50px] object-cover'/>
			</picture>
		</NavLink>
	)
}

export default NavLinkLogo;
