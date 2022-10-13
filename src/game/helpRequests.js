import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

function HelpRequests({counter, openWhen, handleClose, onHelpAnswer, name}) {
    const firstHelpModel = "I can't identify my image. Alex and " + name +", can one of you help me?";
    const secHelpModel = "Would you like to interrupt your task to help the robot?";
    const trdHelpModel = "Alex already help the robot. Thank you anyway"
    return (
        <>
            <Modal show={openWhen}>
                <Modal.Header closeButton>
                    <Modal.Title>{counter === 1  || counter === 2 ? <>The robot needs help </>:
                        <> Thank you! but...</>}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{counter === 1  || counter === 2 ?
                    <> {counter === 1 ? firstHelpModel : secHelpModel} </> :  /*counter is 1 or 2*/
                    <> </> /*counter is 3*/
                }</Modal.Body>
                <Modal.Footer>
                    {counter === 1 ?
                        <Button variant="primary" onClick={onHelpAnswer}>
                        Next
                        </Button>:
                        <>
                            <Button variant="secondary" onClick={handleClose}>
                            No
                            </Button>
                            <Button variant="primary" onClick={onHelpAnswer}>
                            Yes
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
} export default HelpRequests;