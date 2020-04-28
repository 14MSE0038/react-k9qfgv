import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Person from './Person/Person';
// import Radium from 'radium';
import styled from 'styled-components';


const StyledButton=styled.button`
     margin:5px;
     padding:3px;
     color:white;
    background-color:${props=>props.alternate?'red':'green'};//Dynamically added color
     border-radius:6px;
     border-color:${props=>props.alternate?'red':'green'};
     cursor:pointer;

     &:hover{
       background-color:${props=>props.alternate?'salmon':'lightgreen'};
       color:'black'
     }

`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      // count:1
      //Here should be anything not only number
      persons:[
        {id:'1',name:'Nehru', age:'23'},
        {id:'2',name:'Raji',age:'23'},
        {id:'3',name:'Kumar',age:'23'}],
        showPerson:false
    };
  }

  userNameChangedHandler=(event,id)=>{
    // this.setState({
    // {name:event.target.value}
    // persons:[
    //   {name:event.target.value, age:'23'},
    //     {name:event.target.value,age:'23'},
    //     {name:event.target.value,age:'23'}
    // ]
    
    // })
   const personsIndex=this.state.persons.findIndex(p=>{
     return p.id===id;
   });
   const person={...this.state.persons[personsIndex]};
   person.name=event.target.value

   const persons=[...this.state.persons]
   persons[personsIndex]=person
   this.setState({persons:persons})


  };
  // countIncrementHandler=()=>{
  //   // let val=this.state.count;
  //   // val=val+1;
  //   this.setState({count:this.state.count+1})
  // console.log(this.state.count)
  // };

  switchNameHandler=()=>{
    //Don't do this this.state.persons[0].name=Nehrukumar

    this.setState({persons:[
      {name:'Nehrukumar', age:23},
      {name:'RajiLakshmi', age:23},
      {name:'Nehrukumar', age:23}
    ]})
  };

  deletePersonHandler=(personIndex)=>{
    // const deletePerson=this.state.persons.slice();
    const deletePerson=[...this.state.persons]; //Spread operator is more advance one , it's pass the list of argument
    deletePerson.splice(personIndex,1);
    this.setState({persons:deletePerson})
  };
  
againChangeNameHandler=()=>{
  this.setState({
    persons:[
        {name:'Nehru', age:'23'},
        {name:'Raji',age:'23'},
        {name:'Kumar',age:'23'}
    ]})
};

toggleDetailsHandler=()=>{
  // console.log("clicked");
  const doesShowPerson = this.state.showPerson;
  this.setState({showPerson:!doesShowPerson});
  // console.log(this.state.showPerson);

};
  render() {
  //  const style={
  //   margin:'5px',
  //   padding:'3px',
  //   color:'white',
  //   background:'black',
  //   borderRadius:'10px',
  //   borderColor:'black',
  //   cursor:'pointer',
  //   ':hover':{
  //     backgroundColor:'white',
  //     color:'black'
  //   }
  //  };
    let detailsPersons=null;
      
    if(this.state.showPerson){
            detailsPersons=(
        // <div>
          // <p>Nehru</p>
          // {
          //   this.state.persons.map(singlePerson=>{
          //     return    
          //     <Person
          //       Username={singlePerson.name}
          //       age={singlePerson.age}
          //     />
          //   }
          
          //   )}</div>
        <div>
        {this.state.persons.map((singlePerson , index)=>{
          return (
              <Person 
                click={()=>this.deletePersonHandler(index)}
                Username={singlePerson.name} 
                age={singlePerson.age}
                key={singlePerson.id}

                changed={(event)=>{this.userNameChangedHandler(event, singlePerson.id)}}
                // click={()=>{this.deletePersonHandler.bind(this,index)}}
                
                />)
        })}</div>
        //   <div>
        //  <Person 
        //  Username={this.state.persons[0].name} 
        //  age={this.state.persons[0].age}
        //  click={this.againChangeNameHandler}
        //  changed={this.UserNameChangedHandler}
        //  />

        //  <Person 
        //  Username={this.state.persons[1].name} 
        //  age={this.state.persons[1].age}
        //  changed={this.UserNameChangedHandler}>My Hobbies:"Sometime Hurt the Nehru heart"</Person>

        //  <Person 
        //  Username={this.state.persons[2].name} 
        //  age={this.state.persons[2].age}
        //  changed={this.UserNameChangedHandler} 
        //  />
        //   <button onClick={this.countIncrementHandler}>Count</button>
        //   <button onClick={this.switchNameHandler}>Switch Name</button>
        //   </div>
          
      );
      //Radiums Use of CSS Property.
      // style.background="red";
      // style.borderColor="red";
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }

    // const classes=['red','bold'].join(' ');//class level css dymanic styling
    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');//classes is ['red']
    }
    if(this.state.persons.length <=1){
      classes.push('bold');// classes is ['red','bold']
    }
    // if(this.state.persons.length===0){
    //   classes.every(' ');
    // }
    return (
      <div>
        <Hello name={this.state.name} />
        <p className={classes.join(' ')}>
          Start editing to see some magic happen :)

        </p>
         <StyledButton alternate={this.state.showPerson} onClick={this.toggleDetailsHandler}
          >Toggle Details</StyledButton>

        {detailsPersons}

      </div>
          
      //   {this.state.showPerson ===true?
      //   <div>
      //    <Person 
      //    Username={this.state.persons[0].name} 
      //    age={this.state.persons[0].age}
      //    click={this.againChangeNameHandler}
      //    changed={this.UserNameChangedHandler}
      //    />

      //    <Person 
      //    Username={this.state.persons[1].name} 
      //    age={this.state.persons[1].age}
      //    changed={this.UserNameChangedHandler}>My Hobbies:"Sometime Hurt the Nehru heart"</Person>

      //    <Person 
      //    Username={this.state.persons[2].name} 
      //    age={this.state.persons[2].age}
      //    changed={this.UserNameChangedHandler} 
      //    />
      //     <button onClick={this.countIncrementHandler}>Count</button>
      //   <div>
      //     <button onClick={this.switchNameHandler}>Switch Name</button>
      //     </div>
      //     </div>:null}
         
      // </div>
    );
  }
}

render(<App />, document.getElementById('root'));



// {   <div>
//             <Person Username="Nehru" age='23'>I'm Loving rajii more then me</Person>          
//             <Person Username='Raji' age={'23'}>My Hobbies:"Hurting people hearts"</Person>
//             <Person Username="Kuamr" age='23'/>
//           </div>}