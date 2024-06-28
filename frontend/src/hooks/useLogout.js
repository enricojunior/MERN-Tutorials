import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        // Remove User from Storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}
}