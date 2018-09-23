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
                                        <Select selector={item.imageURL != "na"}>
                                            <div>
                                                <div>
                                                    <img src={item.imageURL} />
                                                    <div>{item.type}</div>
                                                </div>
                                            </div>
                                            <div className={count.container}>

                                            </div>
                                        </Select>
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

    })
}

const equip = {
    container:css({
        display: "flex",
        flexDirection: "row",
        
    })
}

export default Inventory;