import React, { Component } from 'react';
import { css } from 'react-emotion';
import { colors } from '../common/index';
import { firestore } from 'firebase/config';
import Select from 'cf-select';

class RegistrationFormTwo extends Component {
    render() {
        return(
            <div className={ styles.container }>
                <div className={ styles.header }>REQUIRED ITEMS</div>
                    {/* { equipList } */}
                    <div className={equip.container}>
                        <Select selector={state=>state.Equipments}>
                            {Equipments =>  {
                                if(!Equipments) return <div>Loading</div>;
                                const equipment = Object.values(Equipments)
                                return (
                                    equipment.map((item, index) => {
                                        return(
                                            <Select selector={item.imageURL != "na"}>
                                                <div className={equip.itemContainer}>
                                                    <div className={ equip.wrapper }>
                                                        <img src={item.imageURL} />
                                                        <div className={ equip.itemLabel }>{item.type}</div>
                                                    </div>
                                                </div>
                                                <input type="checkbox" className={ equip.checkbox } onChange={(e) => this.setState({ [item.type]: e.target.checked }) }/>
                                            </Select>
                                        )
                                    })
                                )
                                console.log(Equipments);
                                console.log(equipment);

                            }}
                        </Select>
                    </div>
                    <div>
                        <div className={ styles.header }>Summary</div>
                            <div style={{display:"flex", flexDirection:"row", }}>
                            <Select selector={this.state !== null}>
                                { this.state !== null ? Object.keys(this.state).map((item, index) => {
                                    return(
                                        <Select>
                                            <div>{this.state[item] === true ? item : ""}</div>
                                        </Select>
                                    )
                                }): "Please select your items"}
                            </Select>
                            </div>
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
        width: "100px",
        height: "100px"
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


