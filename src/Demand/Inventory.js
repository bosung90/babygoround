import React, { Component } from 'react';
import { css } from 'react-emotion';
import Select from 'cf-select';
import { colors } from '../common/index';

class Inventory extends Component {
    render() {
        return(
            <div className={ styles.container }>
                <div className={styles.header}>
                    Items in demand
                </div>
                <div className={equip.container}>
                    <Select selector={state => state.User}>
                        { User => {
                            if(!User) return <div>Loading</div>
                            console.log(User);
                            return(
                                User.requestedEquipmentItems.map((item, index) => {
                                    console.log(item);
                                }))
                        }

                        }
                    </Select>


                    <Select selector={state=>state.Equipments}>
                        {Equipments =>  {
                            if(!Equipments) return <div>Loading</div>;
                            const equipment = Object.values(Equipments)
                            return (
                                equipment.map((item, index) => {
                                    return(
                                        <div className={ equip.wrapper }>
                                            <Select selector={item.imageURL !== "na" || item === "loading"}>
                                                <div className={equip.imageContainer}>
                                                    <img src={item.imageURL} />
                                                </div>
                                                <div className={count.container}>
                                                    { item.count }
                                                </div>
                                            </Select>
                                        </div>
                                    )
                                })
                            )

                        }}
                    </Select>
                </div>
            </div>
        )
    }
}

const styles = {
    container:css({
        display: "flex",
        flexDirection: "column",
        margin: "0 18%" 
    }),
    header: css({
        fontSize: '24px',
        color: colors.PRIMARY,
        borderBottom: `1px solid ${colors.PRIMARY}`,
        marginTop: "3em"
      }),
}

const count = {
    container:css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        border: "1px solid lightgray",
        color: "lightgray"
    })
}

const equip = {
    container:css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin:"2em 4em 0 4em"
    }),
    wrapper:css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }),
    imageContainer: css({
        display: "flex",
        flexDirection: "row",
        minWidth: "100px",
        height: "100px",
        justifyContent: "center",
        margin: "1em"
    })
}

export default Inventory;