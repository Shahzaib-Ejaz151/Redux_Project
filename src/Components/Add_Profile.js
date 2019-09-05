import React,{Component} from 'react';
import { addCard } from "../Actions/card_action";
import { connect } from "react-redux";
import Background from '../Components/60621.jpg';
class Add_Profile extends Component {
    state = {
        name : "",
        Description : "",
        skill1 : "",
        skill2 : "",
        skill3 : ""
    }
render(){
    return(
   <React.Fragment>
       <div style={styles.main}>
       <ul style = {styles.ul}>
          <li ><input onChange = {e => this.setState({name : e.target.value})} type="text" placeholder = "Enter Your Name" style={styles.li}></input></li>
          <li ><input onChange = {e => this.setState({Description : e.target.value})} type="text" placeholder = "Enter Your Description" style={styles.li}></input></li>
          <li ><input onChange = {e => this.setState({skill1 : e.target.value})} type="text" placeholder = "Enter Your Skill-1" style={styles.li}></input></li>
          <li ><input onChange = {e => this.setState({skill2 : e.target.value})} type="text" placeholder = "Enter Your Skill-2" style={styles.li}></input></li>
          <li ><input onChange = {e => this.setState({skill3 : e.target.value})} type="text" placeholder = "Enter Your Skill-3" style={styles.li}></input></li>
          <li>          
              <button onClick={() => {
                this.props.addCard(
                  {
                    name : this.state.name,
                    description : this.state.Description,
                    skill1 : this.state.skill1,
                    skill2 : this.state.skill2,
                    skill3 : this.state.skill3
                  }
                );
                this.props.history.goBack();
              }} type = "submit" style = {styles.btn}>Save Profile</button></li>
      </ul>
       </div>   
   </React.Fragment>
    );
}
}
export default connect(
    null,
    { addCard }
  )(Add_Profile);
  
const styles = {
    main : {
        backgroundImage: "url(" + { Background } + ")"
    },
    ul : {
        listStyleType : "none",
        marginLeft : "30%"
    },
    li : {
        width : "50%",
        padding : "1%",
        margin : "1%"
    },
    btn : {
        width : "52.5%",
        padding : ".7%",
        margin : "1%",
        backgroundColor : "#8CAA38",
        color : "white",
        borderRadius : "5px",
        fontSize : "13px",
        border : "none"
    }
} 