import React, { Component } from 'react';
import { css } from 'react-emotion';

class RegistrationFormOne extends Component {
    handleSubmit() {
        //Submit on the button something will happen

        //Execution

        console.log("Submit has been pressed");
    }
    render() {
        return(
            <div className={ styles.container }>
                <form onSubmit={ this.handleSubmit.bind(this) } className={ styles.wrapper }>
                <h4 className={ styles.header }>USER INFORMATION</h4>
                    <div className={ styles.formGroup }>
                        <label className={ styles.label } for="name">First Name</label>
                        <input className={ styles.input } type="text" name="fname" placeholder="John"/>
                    </div>

                    <div className={ styles.formGroup }>
                        <label className={ styles.label } for="name">Last Name</label>
                        <input className={ styles.input } type="text" name="lname" placeholder="Doe"/>
                    </div>

                    <div className={ styles.formGroup }>
                        <label className={ styles.label } for="tel">Phone Number</label>
                        <input className={ styles.input } type="number" name="tel" min="1000000000" max="9999999999" placeholder="6041234567"/>
                    </div>

                    <div className={ styles.formGroup }>
                        <label className={ styles.label } for="date">Date of Birth</label>
                        <input className={ styles.input } type="date" name="dobP" placeholder="YYYY/MM/DD"/>                        
                    </div>

                    <div className={ styles.formGroup }>
                        <label className={ styles.label } for="email">Email Address</label>
                        <input className={ styles.input } type="email" name="email" placeholder="John_Doe@gmail.com"/>
                    </div>                                            

                    <div className={ styles.radioContainer }>
                        <h4>Sociographic</h4>
                        <h5>Check information that applies to your situation</h5>
                        <div className={ styles.radioWrapper}>
                            <div className={ styles.radioGroup }>
                                <input type="checkbox" id="u19" name="socio" value="u19" />
                                <label className={ styles.radioInput } for="u19">Under 19</label>                                                            
                            </div>
                            <div className={ styles.radioGroup }>
                                <input type="checkbox" id="unemployed" name="socio" value="unemployed" />
                                <label className={ styles.radioInput } for="unemployed">Unemployed</label>
                            </div>
                            <div className={ styles.radioGroup }>
                                <input type="checkbox" id="new" name="socio" value="new" />
                                <label className={ styles.radioInput } for="new">New to Canada</label>
                            </div>
                            <div className={ styles.radioGroup }>
                                <input type="checkbox" id="SN" name="socio" value="SN" />
                                <label className={ styles.radioInput } for="SN">Special Needs</label>
                            </div>
                            <div className={ styles.radioGroup }>
                                <input type="checkbox" id="homeless" name="socio" value="homeless" />
                                <label className={ styles.radioInput } for="homeless">Homeless</label>
                            </div>
                            <div className={ styles.radioGroup }>
                                <input type="checkbox" id="other" name="socio" value="other"/>
                                <label className={ styles.radioInput } for="other">Other</label>
                                <input type="text" id="otherValue" name="other" />
                            </div>
                        </div>
                    </div>                                                
                    <div>
                        <h4 className={ styles.header }>BABY INFORMATION</h4>
                        <div className={ styles.formGroup }>
                            <label className={ styles.label } for="bdob">Baby's date of birth</label>
                            <input className={ styles.input } type="date" name="bdob" placeholder="yyyy/mm/dd"/>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const styles = {
    container: css({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }),
    wrapper: css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "500px"
    }),
    input: css({
        flex: "1",
        height: "25px", 
    }),
    label: css({
        fontSize: "18px",
        width: "25%",
        textAlign: "right",
        marginRight: "1em",
        justifyContent: "center"
    }),
    formGroup: css({
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        margin: "0.25em",
    }),
    header:css({
        paddingBottom: "1em",
        borderBottom: "1px solid black"
    }),
    radioGroup:css({
        flex: "30%",
        margin: "0.5em 0 0.5em 0"
    }),
    radioWrapper: css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }),
    radioContainer: css({
        display: "flex",
        flexDirection: "column",
    }),
    radioInput: css({
        marginLeft: "1em",
    })
  }

export default RegistrationFormOne;