import NavLink from './nav-link';
import { useMeCustomer } from 'medusa-react';
import { useMemo } from 'react';

const NavLinkAccount = () => {
	const authenticationStatus = useMeCustomer();
	const to = useMemo(() => authenticationStatus ? '/account' : '/login', [authenticationStatus]);
	const text = useMemo(() => authenticationStatus ? 'account' : 'login', [authenticationStatus]);

	return <NavLink to={to}>{text}</NavLink>;

};

export default NavLinkAccount;
