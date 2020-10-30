import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ShareIcon from '@material-ui/icons/Share';



const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const actions = [
  { icon: <TwitterIcon />, name: "Twitter", url:"https://twitter.com/share?ref_src=twsrc%5Etfw" },
  { icon: <FacebookIcon />, name: "Facebook" },
  { icon: <InstagramIcon />, name: "Instagram" },
  { icon: <PinterestIcon />, name: "Pinterest" },
  { icon: <LinkedInIcon />, name: "LinkedIn" },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        icon={<ShareIcon ShareIcon={<ShareIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.url}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
