import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // Remove User from Storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}