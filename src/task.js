import React from 'react';
import ReactDom from 'react-dom';





function Welcome(props){
    if(props.show){
    return(
        <div>
            <h1>WELCOME</h1>
            <button type='button'>Logout</button>
        </div>
    )
    }
    else{
        return <h1>error</h1>
    }
}


class Loginpage extends React.Component{
    constructor(props){
        super(props);
        // this.loginclick=this.loginclick.bind(this);
        this.namehandler=this.namehandler.bind(this);
        this.passhandler=this.namehandler.bind(this);

        this.state={username:'',password:'',show:false}
        
    }
    // loginclick()
    // {
        
    //     if(this.state.username==='a')
    //     {
    //         this.setState({show:true})
    //         const a=this.state.show;
    //         return  (
                        
    //     }
    //     else
    //     {
    //         this.setState({show:false})
    //         return 
    //     }
    // }

    namehandler=(e)=>{
        e.preventDefault();
        // console.log(e.target.value)
        // const text=e.target.value;    
        this.setState({username:e.target.value})
        
    }
    passhandler=(e)=>{
        // console.log(e.target.value)
        e.preventDefault();
        this.setState({password:e.target.value})   
    }

    // validation=()=>{
    //     console.log('welcome',this);

        
    // }
    
    render(){
            
   

        let show;
        
        return(
            <div>
                 
            <h1>LOGIN</h1>
            status is {this.state.username}
            <form style={{color : 'red' }} >
               Username:<br></br> 
               <input type='text' placeholder='write name here' onChange={this.namehandler} />
               <br></br>
               Password:<br></br>  <input type='Password' placeholder='write password here' onChange={this.passhandler}/> 
               <br></br>   
              
               {/* <input type='Submit' placeholder='Login' />  */}
            </form>
            {/* <button onClick={this.loginclick}>login</button> */}
        </div>
            
        )
    }
}

// function Validation(props){
//     const  show=props.show;
//     if(show){
//       return  <Welcome/>
//     }
//     else{
//         alert('something went wrong')
//     }
    
// }
// class Main extends React.Component{

//     render() {
//         return(
//             <Loginpage show={}/>
//         )
//     }
// }
 
// export default Loginpage;

