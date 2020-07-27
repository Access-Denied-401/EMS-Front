import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },	
  root: {
    maxWidth: 345,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
}));
  

function AdminAddUser (props) {
  const classes = useStyles();      
  return(
    <>
      <br></br>            <br></br>            <br></br>            <br></br>
      <h1 className='newemployee'>New Employee</h1>
      <div>
        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <div className = 'card'>

              <Card className={classes.root}>
                <CardActionArea>
                  <br></br>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                  <br></br>
                  <TextField
                    id="standard-read-only-input"
                    label="Employee Name"
                    defaultValue=''
                    InputProps={{
                      readOnly: false,
                    }}
                  />

                  <TextField
                    id="standard-read-only-input"
                    label="E-mail"
                    defaultValue=""
                    InputProps={{
                      readOnly: false,
                    }}
                  />

                  <TextField
                    id="standard-read-only-input"
                    label="Password"
                    defaultValue=""
                    InputProps={{
                      readOnly: false,
                    }}
                  />

                  <TextField
                    id="standard-read-only-input"
                    label="Position"
                    defaultValue=""
                    InputProps={{
                      readOnly: false,
                    }}
                  />

                  <TextField
                    id="standard-read-only-input"
                    label="Role"
                    defaultValue=""
                    InputProps={{
                      readOnly: false,
                    }}
                  />

                  <TextField
                    id="standard-read-only-input"
                    label="Birthdate"
                    defaultValue=""
                    InputProps={{
                      readOnly: false,
                    }}
                  />

                </CardActionArea>
              </Card>

            </div>
            <Button variant="contained">
                Add New User
            </Button>
          </FormControl>
        </form>
      </div>
    </>
  );
}

export default AdminAddUser;