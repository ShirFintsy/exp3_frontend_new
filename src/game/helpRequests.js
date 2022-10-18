import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

function HelpRequests({counter, openWhen, handleClose, onHelpAnswer, name}) {
    const firstHelpModel = "I can't identify my image. Alex and " + name +", can one of you help me?";
    const secHelpModel = "Would you like to interrupt your task to help the robot?";
    const trdHelpModel = "Alex is already helping the robot. Thank you anyway"
    return (
        <>
            <Modal show={openWhen}>
                <Modal.Header closeButton>
                    <Modal.Title>{counter === 1  || counter === 2 ? <>The robot needs help </>:
                        <> Thank you, but...</>}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{counter === 1  || counter === 2 ?
                    <> {counter === 1 ? firstHelpModel : secHelpModel} </> :  /*counter is 1 or 2*/
                    <> {trdHelpModel}</> /*counter is 3*/
                }</Modal.Body>
                <Modal.Footer>
                    {counter !== 2 ?
                        <Button variant="primary" onClick={onHelpAnswer}>
                        Next
                        </Button>:
                        <>
                            <Button variant="primary" onClick={handleClose}>
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