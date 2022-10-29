import React from 'react';
import { List,Button } from './AddFeedback.styled';

export const AddFeedback = ({ options, onLeaveFeedback }) => {

   return (<List>
{
        options.map((option, index) => {
            return (
                <li key={index}>
                <Button type="button" onClick={onLeaveFeedback}>{ option}</Button></li>
           
       )
   }
    
   )}

    </List>)
    
    
}