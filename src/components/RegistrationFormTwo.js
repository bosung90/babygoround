import React, { Component } from 'react';
import { css } from 'react-emotion';
import { colors } from '../common/index';
import { firestore } from 'firebase/config';
import Select from 'cf-select';

class RegistrationFormTwo extends Component {
    state = { equips: [], showTextBox: false }
    handleOnClick() {
        this.setState({
            showTextBox:true,
        })
    }
    componentDidMount() {
        firestore
            .collection('Equipments')
            .get()
            .then(docs => {
                console.log(docs);
                const tempEquip = [];
                docs.forEach(doc => {
                    const equipID = doc.id;
                    const equipData = doc.data(); 
                    equipData.id = equipID;
                    tempEquip.push(equipData);
                })
                this.setState({ equips: tempEquip });
            })
    }
    render() {
        return(
            <div className={ styles.container }>
                <input type="checkbox" onClick={ this.handleOnClick.bind(this) }/>
                <div className={ styles.header }>REQUIRED ITEMS</div>

                <div className={ equip.container }>
                    <Select selector={ state=>({
                        Equipments: state.Equipments
                    }) }>
                        {({ Equipments }) => (
                            <div className={equip.container }>
                                { Equipments }
                            </div> 
                        )}
                    </Select> )
                </div>
            </div>
        )
    }   
}

const styles = {
    container: css({
        display: "flex",
        flexDirection: "column",
        margin: "5% 18%",
    }),
    header: css({
        fontSize: "24px",
        color: colors.PRIMARY,
        borderBottom: `1px solid ${colors.PRIMARY}`
    })
}

const equip =  {
    container: css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    }),
    itemContainer: css({
        display: "flex",
        flexDirection: "row",
        margin: "1em",
        alignItems: "center",
    }),
    itemWrapper: css({
        display: "flex",
        flexDirection: "column",
    }),
    itemLabel: css({
        color: colors.LIGHTGRAY,
        textAlign: "center",
        fontSize: "14px",
        fontFamily: "'Lato', sans-serif",
        fontWeight: "300",
    }),
    item: css({
        margin: "0.25em",
    }),
    checkbox:css({
        height: "1em",
        width: "1em",
        border: "1px solid lightgray",
        cursor: "pointer",
    })
}

export default RegistrationFormTwo;


