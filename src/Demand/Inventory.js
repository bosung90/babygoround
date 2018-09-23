import React, { Component } from 'react';
import { css } from 'react-emotion';
import Select from 'cf-select';

class Inventory extends Component {
    render() {
        return(
            <div className={ styles.container }>
                <div className={equip.container}>
                    <Select selector={state=>state.Equipments}>
                        {Equipments =>  {
                            if(!Equipments) return <div>Loading</div>;
                            const equipment = Object.values(Equipments)
                            return (
                                equipment.map((item, index) => {
                                    return(
                                        <div className={ equip.wrapper }>
                                            <Select selector={item.imageURL !== "na"}>
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
                            console.log(Equipments);
                            console.log(equipment);

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
    })
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
        flexWrap: "wrap"
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
        justifyContent: "center"
    })
}

export default Inventory;