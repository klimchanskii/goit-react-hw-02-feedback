import React from 'react';
import { Text } from './Statisics.styled';
export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    console.log(positivePercentage);
   return (<div>
         
          <p><Text >Good:</Text>{good}</p>
          <p><Text >Bad:</Text >{bad}</p>
          <p><Text >Neutral:</Text >{neutral}</p>
          
          <p><Text >Total:</Text >{total}</p>
      
          <p><Text >Positive Feedback:</Text >{positivePercentage >=0 && positivePercentage }%</p>
        </div>)
}