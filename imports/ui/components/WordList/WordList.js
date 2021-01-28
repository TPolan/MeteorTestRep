import React from 'react';
import {Chip, Grid} from "@material-ui/core";

const WordList = props => {

    const mappedWords = props.words.map((word, index) => {
        return (
            <Chip
                label={word}
                item
                key={index + word}
                style={{width: '25%'}}
            />
        )
    })

    return (
        <Grid container justify={"space-around"} alignContent={"space-around"}>
            {mappedWords}
        </Grid>
    )
}

export default WordList;