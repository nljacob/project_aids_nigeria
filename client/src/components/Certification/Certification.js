import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import certAnswers from '../../certAnswers.json'
import "./Certification.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom'


class Certification extends React.Component {

    state = {
        certAnswers: certAnswers,
        selectedOption: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        sponsorFirstName: "",
        sponsorLastName: "",
        sponsorImageLink: "",
        sponsorEmail: "",
        sponsorRolePosition: "",
        sponsorAboutMe: "",
        sponsorAboutMySchool: "",
        sponsorWhyInterested: "",
        sponsorTestScore: "",
        submitFlag: false,
        redirect: false
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

      checkFieldErrorMessage(field){
          let formControl = "form-control";
        switch(field){

            case "sponsorFirstName":
            if(!this.state.sponsorFirstName && this.state.submitFlag){
                formControl = "form-control error-focus"; 
             }
            break;

            case "sponsorLastName":
            if(!this.state.sponsorLastName && this.state.submitFlag){
                formControl = "form-control error-focus"; 
             }
             break;

             case "sponsorImageLink":
             if(!this.state.sponsorImageLink && this.state.submitFlag){
                 formControl = "form-control error-focus"; 
              }
              break;

              case "sponsorEmail":
              if(!this.state.sponsorEmail && this.state.submitFlag){
                  formControl = "form-control error-focus"; 
               }
               break;

               case "sponsorRolePosition":
               if(!this.state.sponsorRolePosition && this.state.submitFlag){
                   formControl = "form-control error-focus"; 
                }
                break;

                case "sponsorAboutMe":
                if(!this.state.sponsorAboutMe && this.state.submitFlag){
                    formControl = "form-control error-focus"; 
                 }
                 break;

                 case "sponsorAboutMySchool":
                 if(!this.state.sponsorAboutMySchool && this.state.submitFlag){
                     formControl = "form-control error-focus"; 
                  }
                  break;

                  case "sponsorWhyInterested":
                  if(!this.state.sponsorWhyInterested && this.state.submitFlag){
                      formControl = "form-control error-focus"; 
                   }
                   break;
                   
                    default:
                    formControl = "form-control";
            }

        return formControl;
   }
    
    inputFieldValidation() {
        if (!this.state.sponsorFirstName||!this.state.sponsorLastName||!this.state.sponsorImageLink||!this.state.sponsorEmail||!this.state.sponsorRolePosition||!this.state.sponsorAboutMe||!this.state.sponsorAboutMySchool||!this.state.sponsorWhyInterested)
        {
            return(false);
        }
        else {
            return(true);
        }
    }

    checkAnswers = (event) => {
        // console.log("The entire state: " , this.state);
        event.preventDefault();
        this.setState({
            submitFlag : true
        });
        // call validate function
        let validationFlag = this.inputFieldValidation()
        if (validationFlag){
            var runningScore = 0;
            for (var i = 0; i < 10; i++) {
                if (this.state.selectedOption[i] === certAnswers[i]){
                    runningScore++;
                }
            }
            // console.log("Running score before setting state: " + runningScore);
            this.setState({
                sponsorTestScore: runningScore
            }, () => {
                // console.log("I guess the state has been set?");
                API
                .saveApplication(
                    this.state.sponsorFirstName,
                    this.state.sponsorLastName,
                    this.state.sponsorImageLink,
                    this.state.sponsorEmail,
                    this.state.sponsorRolePosition,
                    this.state.sponsorAboutMe,
                    this.state.sponsorAboutMySchool,
                    this.state.sponsorWhyInterested,
                    this.state.sponsorTestScore
                )
                .then(res => {
                this.setState({
                    selectedOption: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    sponsorFirstName: "",
                    sponsorLastName: "",
                    sponsorImageLink: "",
                    sponsorEmail: "",
                    sponsorRolePosition: "",
                    sponsorAboutMe: "",
                    sponsorAboutMySchool: "",
                    sponsorWhyInterested: "",
                    sponsorTestScore: "",
                    redirect: true
                });
                // this.props.history.replace('/thankyou');
                // if (this.state.redirect) {
                //     return <Redirect to ='/thankyou' />
                // }
                }).catch(err => {
                console.log(err);
                });
                // console.log("The entire state: " , this.state);
                // console.log("Test score in the state:" , this.state.sponsorTestScore);
                // console.log("Test score in the state at the end:" , this.state.sponsorTestScore);
            });

        }
    }

    handleOptionChange =  (param) => (changeEvent) => {
        var tempArray = [];
        tempArray = this.state.selectedOption;
        tempArray[param] = changeEvent.target.value;
        this.setState({
          selectedOption: tempArray
        });
        // console.log("change event target: " + changeEvent.target.value)
      }

    render() {
        
        const {redirect} = this.state;
         console.log(redirect);
        if (redirect) {
            return <Redirect to='/thankyou' />
        }
        
        return (
            <div className="certification-page">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h3>Welcome to the Certification page!</h3> 
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Interested in starting a PAN club at your school?</h5>
                        <p>Our goal at PAN is to share accurate information about AIDS/HIV.  One way we do this is by screening potential club sponsors with a basic application and certification test.  Any adult at your school (teacher, administrator, counselor, etc...) who is willing to sponsor the club is eligible to complete our PAN application and certification test.  The application is our way of getting to know you and your school, so please use this as an opportunity to shine!  Tell us about all the great things your school already does, and why you are interested in bringing PAN to your school site.  Then you will be asked to read through part of our curriculum, and demonstrate your understanding by passing our certification test.  This ensures that the club sponsor has a basic understanding of our curriculum from which to build as the club grows.  Once we receive your application and test score we will contact you to discuss our training process and other certification details.  Thank you for your interest in PAN!  We look forward to working with you soon!</p>
                    </div>
                </div>

                <h5>Curriculum</h5>
                <ul>
                    <li><a id="red" target="_blank" rel="noopener noreferrer" href="https://www.avert.org/about-hiv-aids/what-hiv-aids">What are HIV and AIDS?</a></li>
                    <li><a id="red" target="_blank" rel="noopener noreferrer" href="https://www.avert.org/hiv-transmission-prevention/how-you-get-hiv">How do you get HIV?</a></li>
                </ul>
                <br />

                <h5>Application and Certification Test</h5>

                {/* Add new fields (first name, last name, email address) so we can keep this info with their score in the database */}
    
                <form>
                <div className="form-group">
                    First Name: <br/> <input 
                    className = {this.checkFieldErrorMessage("sponsorFirstName")}
                        type="text" 
                        name="sponsorFirstName" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorFirstName}
                        /> 
                         {(!this.state.sponsorFirstName && this.state.submitFlag ) ? <div className="error-text">Firstname required</div> : " "}
                        </div>
                        <div className="form-group">
                    Last Name: <br/>
                     <input 
                     className = {this.checkFieldErrorMessage("sponsorLastName")}
                        type="text" 
                        name="sponsorLastName"
                        onChange={this.handleInputChange}
                        value={this.state.sponsorLastName} 
                        /> 
                       {(!this.state.sponsorLastName && this.state.submitFlag ) ? <div className="error-text">Lastname required</div> : " "}
                        </div>
                        <div className="form-group">
                    Photo: <br/> <input
                    className = {this.checkFieldErrorMessage("sponsorImageLink")}
                        type="text" 
                        name="sponsorImageLink" 
                        placeholder="image link for profile"
                        onChange={this.handleInputChange}
                        value={this.state.sponsorImageLink}
                        /> 
                        {(!this.state.sponsorImageLink && this.state.submitFlag ) ? <div className="error-text">Image URL required</div> : " "}
                        </div>
                        <div className="form-group">
                    Email Address: <br/> <input 
                    className = {this.checkFieldErrorMessage("sponsorEmail")}
                        type="email" 
                        name="sponsorEmail" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorEmail}
                        />
                        {(!this.state.sponsorEmail && this.state.submitFlag ) ? <div className="error-text">Email required</div> : " "}
                        </div>
                        <div className="form-group">
                    Role/Position: <br/> <input 
                    className = {this.checkFieldErrorMessage("sponsorRolePosition")}
                        type="text" 
                        name="sponsorRolePosition" 
                        placeholder="teacher, counselor, ..."
                        onChange={this.handleInputChange}
                        value={this.state.sponsorRolePosition}
                        /> 
                        {(!this.state.sponsorRolePosition && this.state.submitFlag ) ? <div className="error-text">Enter a role/position</div> : " "}
                        </div>
                        <div className="form-group">
                    About Me: <br/> <textarea 
                    className = {this.checkFieldErrorMessage("sponsorAboutMe")}
                        rows="4" 
                        cols="100" 
                        name="sponsorAboutMe" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorAboutMe}
                        /> 
                        {(!this.state.sponsorAboutMe && this.state.submitFlag ) ? <div className="error-text">Field required</div> : " "}
                        </div>
                        <div className="form-group">
                    About My School: <br/> <textarea
                    className = {this.checkFieldErrorMessage("sponsorAboutMySchool")} 
                        rows="4" 
                        cols="100" 
                        name="sponsorAboutMySchool" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorAboutMySchool}
                        /> 
                        {(!this.state.sponsorAboutMySchool && this.state.submitFlag ) ? <div className="error-text">Field required</div> : " "}
                        </div>
                        <div className="form-group">
                    Why we are interested in starting a PAN club: <br/> <textarea 
                     className = {this.checkFieldErrorMessage("sponsorWhyInterested")}
                     rows="4" 
                        cols="100" 
                        name="sponsorWhyInterested" 
                        onChange={this.handleInputChange}
                        value={this.state.sponsorWhyInterested}
                        /> 
                        {(!this.state.sponsorWhyInterested && this.state.submitFlag ) ? <div className="error-text">Field required</div> : " "}
                        </div>

                    <br/>

                    <h5>
                        <strong>Question #1: </strong>
                        Which of the following is NOT a true statement?
                        
                    </h5>
                    <fieldset className = "form-group">
                        <div className="form-check">
                        <input type="radio" name="Question1" value="a" checked={this.state.selectedOption[0] === 'a'} onChange={this.handleOptionChange(0)}/>AIDS is not a virus but a set of symptoms (or syndrome) caused by the HIV virus. <br/>
                        <input type="radio" name="Question1" value="b" checked={this.state.selectedOption[0] === 'b'} onChange={this.handleOptionChange(0)}/>HIV can be spread through the air, toilet seats, and from mosquito bites. <br/>
                        <input type="radio" name="Question1" value="c" checked={this.state.selectedOption[0] === 'c'} onChange={this.handleOptionChange(0)}/>One of the main ways to get HIV is through unprotected sex. <br/>
                        <input type="radio" name="Question1" value="d" checked={this.state.selectedOption[0] === 'd'} onChange={this.handleOptionChange(0)}/>A mother infected with HIV can pass the virus to her baby. <br/>
                        </div>
                        {(!this.state.selectedOption[0] && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                    </fieldset>
    
                    <h5>
                        <strong>Question #2: </strong>
                        HIV is a virus that _______.
                    </h5>
                    <fieldset  className = "form-group">
                    <div className="form-check">
                        <input type="radio" name="Question2" value="a" checked={this.state.selectedOption[1] === 'a'} onChange={this.handleOptionChange(1)}/>Stands for Human Illness Virus<br/>
                        <input type="radio" name="Question2" value="b" checked={this.state.selectedOption[1] === 'b'} onChange={this.handleOptionChange(1)}/>Does not progress based on age, health, and background <br/>
                        <input type="radio" name="Question2" value="c" checked={this.state.selectedOption[1] === 'c'} onChange={this.handleOptionChange(1)}/>If left untreated, will take 30 years before damaging the immune system so severely it can no longer defend itself <br/>
                        <input type="radio" name="Question2" value="d" checked={this.state.selectedOption[1] === 'd'} onChange={this.handleOptionChange(1)}/>Attacks the immune system <br/>
                    </div>
                    {(!this.state.selectedOption[1] && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                    </fieldset>
    
                    <h5>
                        <strong>Question #3: </strong>
                        There are a number of ways you can protect yourself from HIV.  Which of the following is NOT one of these ways?
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">
                        <input type="radio" name="Question3" value="a" checked={this.state.selectedOption[2] === 'a'} onChange={this.handleOptionChange(2)}/>Use a condom every time you have vaginal, anal, or oral sex <br/>
                        <input type="radio" name="Question3" value="b" checked={this.state.selectedOption[2] === 'b'} onChange={this.handleOptionChange(2)}/>Avoid sharing needles, syringes and other injecting equipment <br/>
                        <input type="radio" name="Question3" value="c" checked={this.state.selectedOption[2] === 'c'} onChange={this.handleOptionChange(2)}/>Use Lambskin or Novelty condoms <br/>
                        <input type="radio" name="Question3" value="d" checked={this.state.selectedOption[2] === 'd'} onChange={this.handleOptionChange(2)}/>Ask your healthcare professional if the blood product you are receiving (blood transfusion, organ or tissue transplant) has been tested for HIV <br/>
                   </div>
                   {(!this.state.selectedOption[2] && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                    </fieldset>
    
                    <h5>
                        <strong>Question #4: </strong>
                        Another way to protect yourself from HIV is _______.
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">

                        <input type="radio" name="Question4" value="a" checked={this.state.selectedOption[3] === 'a'} onChange={this.handleOptionChange(3)}/>with PrEP.  This is a preparation of herbal remedies. <br/>
                        <input type="radio" name="Question4" value="b" checked={this.state.selectedOption[3] === 'b'} onChange={this.handleOptionChange(3)}/>with PrEP.  This is a course of HIV drugs available in some countries which if taken consistently as advised by your healthcare professional prevents HIV infection through sex <br/>
                        <input type="radio" name="Question4" value="c" checked={this.state.selectedOption[3] === 'c'} onChange={this.handleOptionChange(3)}/>by taking a multivitamin every day <br/>
                        <input type="radio" name="Question4" value="d" checked={this.state.selectedOption[3] === 'd'} onChange={this.handleOptionChange(3)}/>by wearing mosquito repellent any time you go outside<br/>

                    </div>
                    {(!this.state.selectedOption[3] && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                    </fieldset>
    
                    <h5>
                        <strong>Question #5: </strong>
                        The HIV virus destroys this type of cell:
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">

                        <input type="radio" name="Question5" value="a" checked={this.state.selectedOption[4] === 'a'} onChange={this.handleOptionChange(4)}/>A type of white blood cell called a monocyte cell <br/>
                        <input type="radio" name="Question5" value="b" checked={this.state.selectedOption[4] === 'b'} onChange={this.handleOptionChange(4)}/>A type of red blood cell called a Macrophage cell <br/>
                        <input type="radio" name="Question5" value="c" checked={this.state.selectedOption[4] === 'c'} onChange={this.handleOptionChange(4)}/>A type of red blood cell called a Lymphocyte cell <br/>
                        <input type="radio" name="Question5" value="d" checked={this.state.selectedOption[4] === 'd'} onChange={this.handleOptionChange(4)}/>A type of white blood cell called a T-helper cell. <br/>
                   </div>
                   {(!this.state.selectedOption[4] && this.state.submitFlag ) ? <div className="error-text">This field is required</div> : " "}
                    </fieldset>
    
                    <h5>
                        <strong>Question #6: </strong>
                        As HIV destroys more CD4 cells and makes more copies of itself, it _______.
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">

                        <input type="radio" name="Question6" value="a" checked={this.state.selectedOption[5] === 'a'} onChange={this.handleOptionChange(5)}/>Boosts a person's immune system <br/>
                        <input type="radio" name="Question6" value="b" checked={this.state.selectedOption[5] === 'b'} onChange={this.handleOptionChange(5)}/>Causes blood disease <br/>
                        <input type="radio" name="Question6" value="c" checked={this.state.selectedOption[5] === 'c'} onChange={this.handleOptionChange(5)}/>Breaks down a person's immune system <br/>
                        <input type="radio" name="Question6" value="d" checked={this.state.selectedOption[5] === 'd'} onChange={this.handleOptionChange(5)}/>Causes liver disease <br/>

                   </div>
                    </fieldset>
    
                    <h5>
                        <strong>Question #7: </strong>
                        Which of the following is NOT true?  If you are pregnant and living with HIV, _______.
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">

                        <input type="radio" name="Question7" value="a" checked={this.state.selectedOption[6] === 'a'} onChange={this.handleOptionChange(6)}/>The virus in your blood could pass into your baby's body <br/>
                        <input type="radio" name="Question7" value="b" checked={this.state.selectedOption[6] === 'b'} onChange={this.handleOptionChange(6)}/>The virus in your blood could be passed to the baby through breastfeeding  <br/>
                        <input type="radio" name="Question7" value="c" checked={this.state.selectedOption[6] === 'c'} onChange={this.handleOptionChange(6)}/>Taking HIV treatment virtually eliminates the risk of passing the virus to the baby <br/>
                        <input type="radio" name="Question7" value="d" checked={this.state.selectedOption[6] === 'd'} onChange={this.handleOptionChange(6)}/>There is no need to discuss this with your doctor as HIV cannot be passed from mother to baby <br/>

                   </div>
                    </fieldset>
    
                    <h5>
                        <strong>Question #8: </strong>
                        A person is said to have AIDS when _______.
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">

                        <input type="radio" name="Question8" value="a" checked={this.state.selectedOption[7] === 'a'} onChange={this.handleOptionChange(7)}/>They contract HIV <br/>
                        <input type="radio" name="Question8" value="b" checked={this.state.selectedOption[7] === 'b'} onChange={this.handleOptionChange(7)}/>Their immune system is too weak to fight off infection, and they develop certain defining symptoms and illnesses <br/>
                        <input type="radio" name="Question8" value="c" checked={this.state.selectedOption[7] === 'c'} onChange={this.handleOptionChange(7)}/>They have HIV and liver disease concurrently <br/>
                        <input type="radio" name="Question8" value="d" checked={this.state.selectedOption[7] === 'd'} onChange={this.handleOptionChange(7)}/>Their immune system is so strong it does more harm than good <br/>

                   </div>
                    </fieldset>
    
                    <h5>
                        <strong>Question #9: </strong>
                        AIDS stands for: 
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">
                        <input type="radio" name="Question9" value="a" checked={this.state.selectedOption[8] === 'a'} onChange={this.handleOptionChange(8)}/>Acquired Immune Deficiency Syndrome <br/>
                        <input type="radio" name="Question9" value="b" checked={this.state.selectedOption[8] === 'b'} onChange={this.handleOptionChange(8)}/>Auto Immune Deficiency Syndrome <br/>
                        <input type="radio" name="Question9" value="c" checked={this.state.selectedOption[8] === 'c'} onChange={this.handleOptionChange(8)}/>Adult Immune Deficiency Syndrome <br/>
                        <input type="radio" name="Question9" value="d" checked={this.state.selectedOption[8] === 'd'} onChange={this.handleOptionChange(8)}/>Adenine Immune Deficiency Syndrome <br/>
                   </div>
                    </fieldset>
    
                    <h5>
                        <strong>Question #10: </strong>
                        Healthcare workers should _______.
                    </h5>
                    <fieldset  className = "form-group">
                    <div className = "form-check">

                        <input type="radio" name="Question10" value="a" checked={this.state.selectedOption[9] === 'a'} onChange={this.handleOptionChange(9)}/>Avoid treating patients with HIV/AIDS <br/>
                        <input type="radio" name="Question10" value="b" checked={this.state.selectedOption[9] === 'b'} onChange={this.handleOptionChange(9)}/>Take a multivitamin every day to avoid contracting HIV <br/>
                        <input type="radio" name="Question10" value="c" checked={this.state.selectedOption[9] === 'c'} onChange={this.handleOptionChange(9)}/>Wear protection (like gloves and goggles), wash hands after contact with blood and other bodily fluids, and safely dispose of sharp equipment <br/>
                        <input type="radio" name="Question10" value="d" checked={this.state.selectedOption[9] === 'd'} onChange={this.handleOptionChange(9)}/>Avoid getting pregnant while treating a patient with HIV/AIDS <br/>

                   </div>
                    </fieldset>
                    <br />
                    <button type="button" className="btn btn-info" onClick={this.checkAnswers} id="Submit Button">Submit</button>
                </form>
    
            </div>
        </div>
        )
    }
}

export default Certification;