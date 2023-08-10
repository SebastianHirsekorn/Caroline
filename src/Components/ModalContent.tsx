import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, FormControlLabel, Switch, Typography } from '@mui/material';
import "../styles/Modal.css"
import IEvent from '../DataObjects/IEvent';


interface IModalContentProps {
  event: IEvent
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BasicGrid(props: IModalContentProps) {
  const [showImages, setShowImages] = useState<boolean>(false);

  const date: string = props.event.date.start.getDate() + "." + props.event.date.start.getMonth() + "." + props.event.date.start.getFullYear() + " - " + props.event.date.end.getDate() + "." + props.event.date.end.getMonth() + "." + props.event.date.end.getFullYear();


  const handleSwitchChange = (event: React.SyntheticEvent, checked: boolean) => {
    setShowImages(checked);
  }

  return (
    <Container>
      <div className='ModalContentContainer'>
        <div className='ModalDataContainer'>
          <img className='ModalImage' src={`../media/${props.event.img}.jpg`}></img>
          <FormControlLabel control={<Switch defaultChecked onChange={(event: React.SyntheticEvent, checked: boolean) => handleSwitchChange(event, checked)} />} label="Gallery" />
          <div className='ModalLabelContainer'><p>Location:</p><p>{props.event.location}</p></div>
          <div className='ModalLabelContainer'><p>Date:</p><p>{date}</p></div>
        </div>
        <div className='ModalEntryContainer'>
          {showImages ?
            (<>
              <Typography className="ContentHeader" variant='h3' sx={{ marginBottom: "0.25em" }}>Gallery</Typography>
              {props.event.eventEntries.length > 0 ? (props.event.eventEntries.map((entry, index) => (
                <Paper className='entryContainer' elevation={5} key={index}>
                  <Typography variant="h5">{(index + 1) + ". " + entry.title}</Typography>
                  <Typography variant='body1'>{entry.desc}</Typography>
                </Paper>
              ))) : (<Paper className='entryContainer' elevation={5}><Typography variant="h5">No entry yet!</Typography></Paper>)}
            </>) :
            (<>
              <Typography className="ContentHeader" variant='h3' sx={{ marginBottom: "0.25em" }}>Timeline</Typography>
              {props.event.eventEntries.length > 0 ? (props.event.eventEntries.map((entry, index) => (
                <Paper className='entryContainer' elevation={5} key={index}>
                  <Typography variant="h5">{(index + 1) + ". " + entry.title}</Typography>
                  <Typography variant='body1'>{entry.desc}</Typography>
                </Paper>
              ))) : (<Paper className='entryContainer' elevation={5}><Typography variant="h5">No entry yet!</Typography></Paper>)}
            </>)}
        </div>
      </div>
    </Container >
  );
}