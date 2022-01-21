// @ts-nocheck TODO: remove this

const NavLink = ({to, children}) => {
	return (
		<a href={to} className='whitespace-nowrap'>
			{children}
		</a>
	)
}

export default NavLink;
