// import React,{Component} from 'react';
// import {Route} from "react-router-dom";
// import {connect} from 'react-redux';
// class Rerender extends Component{
//     state = {
//         name : this.props.list.length > 0 ? this.props.list[this.state.index].name : "",
//     Description : this.props.list.length > 0 ? this.props.list[this.state.index].description : "",
//     Skills : this.props.list.length > 0 ? this.props.list[this.state.index++].skills : "",
//     index : 0
//     }
//     render(){
//         return(
//             <React.Fragment>
//                      {console.log("Reacehd", this.props.list)}
//      <div style={styles.all}>
//         <div><Route render = {({history})=>(
//           <button style = {styles.button} onClick={()=>{history.push('/Add_Profile')}}>Add profile</button>
//         )}/>
        
//         </div>
       
//         <div style = {styles.comp}>
//         <img style={styles.img} src={login_img} alt="Logo" width="10%" height="10%" className="mon1" ></img>
//       <h1 style={styles.h1}>{this.props.list}</h1>
//       <h1 style={styles.h11}>{this.state.Description}</h1>
//       <button style={styles.btn}>Edit Profile</button>
//        <ul style ={styles.ul}>
//          <li><h1>Skills</h1></li>
//          <li><p>{this.state.Skills}</p></li>
//          <li><button type="submit" style = {styles.btn1}>Edit Skills</button></li>
//        </ul>
//         </div>
//         </div>
//        </React.Fragment>
           
//         );
//     }
// }

// const mapStateToProps = state  => ({
//     list: state.cardReducer.addProileList
//   });
//   export default connect( mapStateToProps,null)(Rerender);
  
  
  
//   const styles = {
//     img : {
//       marginLeft : "5%",
//       marginTop : "3%",
//       borderRadius : "30%"
//     },
//     h1 : {
//       marginLeft : "7.5%",
//       marginTop : "3%",
//       fontSize : "22px"
//     },
//     h11 : {
//       marginLeft : "20%",
//       marginTop : "-15%",
//       fontSize : "22px"
//     },
//     ul:{
//       listStyleType: "none",
//       marginLeft : "35%",
//       marginTop : "-25%"
//     },
//     btn:{
//       marginLeft : "21%",
//       marginTop : "7%",
//       backgroundColor: "#8CAA38",
//       color : "white",
//       fontSize : "10px",
//       border : "none",
//       borderRadius : "5px",
//       padding: "7px 30px"
//     },
//     comp : {
//       marginLeft: "35%",
//       marginTop : "3%"
//     },
//     button : {
//       marginLeft : "37%",
//       marginTop : "5%",
//       backgroundColor: "#8CAA38",
//       color : "white",
//       fontSize : "10px",
//       border : "none",
//       borderRadius : "5px",
//       padding: "7px 13%"
//     },
//     btn1 : {
//       backgroundColor: "#8CAA38",
//       color : "white",
//       fontSize : "10px",
//       border : "none",
//       borderRadius : "5px",
//       padding: "7px 30px"
//     },
//     all : {
//       backgroundImage: "url(60621.jpg)"
//     }
    
//   }
  
  
  