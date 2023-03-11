import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import AuthContext from "../../store/auth-context"
import styles from "./Auth.module.css"
import SignUp from "./SignUp"

const Auth = (props) => {

    const authContext = useContext(AuthContext)

    return <Modal 
                show={authContext.showAuth} 
                onHide={authContext.setShowAuth}
                centered
                >
        <Modal.Header className={styles.modalHeader} closeButton />
        <Modal.Body>
            <SignUp />
        </Modal.Body>
        <Modal.Footer className="justify-content-center pb-4">
                    <h6 className="text-secondary text-center my-2">
                        Already a member?
                    </h6>
                    <Button variant="link" className={styles.linkBtn + " text-primary p-0 mx-0"}>
                        Sign in
                    </Button>
        </Modal.Footer>
    </Modal>
}

export default Auth