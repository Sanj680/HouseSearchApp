import logo from "./GloboLogo.png"
import {Component} from "react"
class Header extends Component{ // class component way of rendering header
    render(){
        return(
            <header className="row">
            <div className="col-md-5">
                     <img src ={logo} className ="logo" alt ="logo" />
                 </div>
                 <div className ="col-md-7 mt-5 subtitle">
                    {this.props.subtitle}
            </div>
         </header> 

        )
    }
}

//const Header =({subtitle,title}) =>(  //arrow function returning jsx has a root node . We are passing subtitle as a prop. Functional component way of rendering header
   // <header className="row">
       //<div className="col-md-5">
              //  <img src ={logo} className ="logo" alt ="logo" />
           // </div>
            //<div className ="col-md-7 mt-5 subtitle">
              // {subtitle}
      // </div>
   // </header>
//)

export default Header