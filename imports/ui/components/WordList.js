import React, {useEffect, useState} from 'react';
import {Chip, Grid} from "@material-ui/core";

const WordList = props => {

    const mappedWords = props.words.map((item, index) => {
        return (
            <Chip
                label={item}
                item
                key={index + item}
                style={{width: '25%'}}
            />
        )
    })

    return (
        <Grid container justify={"space-around"}>
            {mappedWords}
        </Grid>
    )
}

export default WordList;