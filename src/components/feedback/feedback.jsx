import { Component } from "react";
import { AddFeedback } from "components/AddFeedback/AddFeedback";
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section";
export class FeedBack extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  

  onIncrement = (e) => {
    const event = e.target.textContent
    this.setState((prevState )=> ({
      [event]: prevState[event] + 1,
    }));
  };
  
  countTotalFeedback = () => {

     return  this.state.good + this.state.bad + this.state.neutral  
  }


  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100 / this.countTotalFeedback()).toFixed()
   
}
    

  render() {
    
    return (
<div>
        <Section title="Left your feedback">
          <AddFeedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onIncrement} />
 </Section>

      <Section title="Statistics">
        {this.countTotalFeedback()?<Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} /> : <p>There is no feedback</p>}
         
      </Section>
     
  </div>      
    )}

}