import React, { Component } from 'react';
import { css } from 'react-emotion';
import { colors } from '../common/index'

class Success extends Component {

    render() {
        return(
            <div>
                <div className={style.container}>
                    <img className={style.image} alt="check" src={(require('../images/checked.svg'))}/>
                    <div className={style.header}>SUCCESS</div>
                    <div className={style.text}>You have successfully registered to BabyGoRound</div>
                        <button type="submit" className={style.profileButton}>
                        Profile Page
                        </button>
                </div>
            </div>
        )
    }
}

const style = {
    container: css({
        // marginTop: this is an example
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }),
    header: css({
        marginTop: '1em',
        fontSize: '24px',
        color: colors.PRIMARY,
    }),
    text: css({
        marginTop: '0.5em',
        fontSize: '16px',
        color: colors.LIGHTGRAY,
    }),
    image: css({
        marginTop: '5em',
    }),
    profileButton: css({
        marginTop: '3.5em',
        width: '240px',
        height: '50px',
        borderRadius: '5px',
        fontSize: '20px',
        color: colors.PRIMARY,
        borderColor: colors.PRIMARY,
    })
}

export default Success;