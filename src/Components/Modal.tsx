import { useRef, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/Modal.css"
import ModalContent from './ModalContent';

type event = { title: String, date: { start: Date, end: Date }, location: String }

interface IModalProps {
    open: boolean;
    event: event
    handleClose: () => void;
}

export default function ScrollDialog(props: IModalProps) {
    const descriptionElementRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (props.open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.open]);

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"xl"}
                onClose={props.handleClose}
                open={props.open}
                scroll="paper"
            >
                <DialogTitle children={<div><h3>{props.event.title}</h3>
                    <IconButton
                        aria-label="close"
                        onClick={props.handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton></div>} />
                <DialogContent dividers={true}><ModalContent></ModalContent></DialogContent>
            </Dialog>
        </div>
    );
}