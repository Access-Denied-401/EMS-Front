import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import Avatar from '@material-ui/core/Avatar';
// import TextField from '@material-ui/core/TextField';
import './admin-add-user.scss';


// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 200,
//   },
//   root: {
//     maxWidth: 345,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//   },
// }));


function AdminAddUser(props) {
  // const classNamees = useStyles();
  return (
    <>
      <div className="row">
        <div className="col-sm-4 text-center abc">
          <form action="#!">
            <p className="h4 mb-4 text-left">User's Informations</p>
            <label for="mail" className="in">Email</label>
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Enter Username" />
            <label for="pass" className="in">Password</label>
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Enter Password" />
            <label for="mail" className="in">Birthdate</label>
            <input type="date" className="form-control mb-4" placeholder="Enter BD" />
            <label for="pass" className="in">Position</label>
            <input type="text" className="form-control mb-4" placeholder="Enter Position" />
            <label for="mail" className="in">Role</label>
            <input type="text" className="form-control mb-4" placeholder="Enter Role" />
            <div className="d-flex justify-content-left">
              <div>
              </div>
            </div>
            <button className="btn btn-info btn-block " type="submit">ADD NEW USER</button>
          </form>
        </div>
        <div className="col-sm-8 xyz text-center" > <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i>
          <h2 className="account-text">Create New User Account</h2>
        </div>
      </div>
      {/* <br></br>            <br></br>            <br></br>            <br></br>
      <h1 classNameName='newemployee'>New Employee</h1>
      <div>
        <form classNameName={classNamees.container}>
          <FormControl classNameName={classNamees.formControl}>
            <div classNameName = 'card'>

              <Card classNameName={classNamees.root}>
                <CardActionArea>
                  <br></br>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" classNameName={classNamees.large} />
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
      </div> */}
    </>
  );
}

export default AdminAddUser;