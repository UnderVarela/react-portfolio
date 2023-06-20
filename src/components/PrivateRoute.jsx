import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../context/UserContext';

export function PrivateRoute ({ children }) {
    const context = useContext(UserContext)
    return children
}

export default PrivateRoute