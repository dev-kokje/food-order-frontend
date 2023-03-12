import { useContext, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { ArrowLeftShort } from "react-bootstrap-icons"
import AuthContext from "../../store/auth-context"
import styles from "./Auth.module.css"
import ResetPassword from "./ResetPassword"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const Auth = (props) => {

    const [action, setAction] = useState('signup')
    const authContext = useContext(AuthContext)

    const changeAction = (val) => {
        if(action !== val) {
            setAction(val)
        }
    }

    return <Modal 
                show={authContext.showAuth} 
                onHide={authContext.setShowAuth}
                centered
                >
        <Modal.Header className={styles.modalHeader} closeButton />
        <Modal.Body>
            {
                action === 'signup' && <SignUp />
            }
            {
                action === 'signin' && <SignIn changeAction={changeAction} />
            }
            {
                action === 'resetPassword' && <ResetPassword />
            }
        </Modal.Body>
        <Modal.Footer className="justify-content-center pb-4">
            <h6 className="text-secondary text-center my-2">
                {
                    action === 'signup' && 'Already a member?'
                }
                {
                    action === 'signin' && 'Don\'t have an account?'
                }
                {
                    action === 'resetPassword' && <span><ArrowLeftShort /> Back to</span>
                }
            </h6>
            {
                action !== 'signin' &&
                <Button variant="link" onClick={() => changeAction('signin')} className={styles.linkBtn + " text-primary p-0 mx-0"}>
                    Sign in
                </Button>
            }
            {
                action === 'signin' &&
                <Button variant="link" onClick={() => changeAction('signup')} className={styles.linkBtn + " text-primary p-0 mx-0"}>
                    Sign up
                </Button>
            }
        </Modal.Footer>
    </Modal>
}

export default Auth