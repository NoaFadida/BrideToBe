import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import History from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import Assessment from '@material-ui/icons/Assessment';
import EventBusy from '@material-ui/icons/EventBusy';
import Add from '@material-ui/icons/PostAdd';
import './Menu.scss';

const styles = theme => ({

});

function ListItemComposition(props) {
  const { classes } = props;
    return (
      <div className='menu-container'>
      <MenuList>
      <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Edit Profile" />
        </MenuItem>
{/*         
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <NewMeeting />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="New Meeting" />
        </MenuItem> */}
       
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <EditIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Edit Future Meetings" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <History />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="View All Meetings" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <EventBusy />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Add Unaviable Dates" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Add />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Set Types Of Meetings" />
        </MenuItem>
        
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Assessment />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Statistical Information" />
        </MenuItem>
        
      </MenuList>
      </div>
  );
}

ListItemComposition.propTypes = {
    classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(ListItemComposition);