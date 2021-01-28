import React from 'react';

const useTranslateNumbers = (start, end) => {

    const wordArray = [];

    for (let i = start; i <= end; i++) {
            if (i % 3===0 && i % 5 ===0) {
                wordArray.push('RobotICT');
            } else if (i % 5 ===0) {
                wordArray.push('ICT');
            } else if (i % 3===0 ) {
                wordArray.push('Robot');
            } else {
                console.log(i);
            }
    }

    return wordArray
}

export default useTranslateNumbers;