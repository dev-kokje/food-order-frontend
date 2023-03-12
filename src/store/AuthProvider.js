import { useReducer } from "react"
import AuthContext from "./auth-context"

const defaultAuthState = {
    showAuth: false
}

const authReducer = (state, action) => {
    if(action.type === 'TOGGLE_AUTH_FORM') {
        return {
            showAuth: !state.showAuth
        }
    }

    return defaultAuthState
}

const AuthProvider = (props) => {

    const [authState, dispatchAuthAction] = useReducer(authReducer, defaultAuthState)

    const authFormDisplayHandler = () => {
        dispatchAuthAction({type: 'TOGGLE_AUTH_FORM'})
    }

    const authContext = {
        showAuth: authState.showAuth,
        setShowAuth: authFormDisplayHandler
    }

    return <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthProvider