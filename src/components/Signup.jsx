// import React from 'react'
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import { Button, Input } from "@material-ui/core";


// function getModalStyle() {
//       const top = 50;
//       const left = 50;
    
//       return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//       };
//     }
    
//     const useStyles = makeStyles((theme) => ({
//       paper: {
//         position: "absolute",
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: "2px solid #000",
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//       },
//     }));

// function Signup() {
//       const classes = useStyles();
//       const [modalStyle] = useState(getModalStyle);

//       const signUp = (event) => {

//       }

//       return (
//             <div>
//                   <Modal open={open} onClose={() => setOpen(false)}>
//         <div style={modalStyle} className={classes.paper}>
//           <form className="app__signup">
//           <center>
//           <img
//             className="app__headerImage"
//             src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
//             alt=""
//           />
//           </center>
//           <Input 
//           type="text"
//           placeholder="username"
//           value={username}
//           onChange={(e)=>setUsername(e.target.value)}
//           />
//           <Input 
//           type="text"
//           placeholder="email"
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
//           />
//           <Input 
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//           />
//           <Button onClick={signUp}>Sign Up</Button>
//           </form>
//         </div>
//       </Modal>
//             </div>
//       )
// }

// export default Signup;
