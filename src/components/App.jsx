import React, { Component } from 'react';
import FeedBackOptions from './FeedBack/FeedBackOptions';
import Section from './Section/Section'
import Statistic from './Statistics/Statistic';
import Nostat from './Notify/Notify';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  }

  onLeaveFeedback = (e) => {
    const count = e.target.name;
    this.setState(prevState => ({
      [count]: prevState[count] + 1
    }))
  };
  totalCount = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  positivePercent = () => {
    const { Good, Bad, Neutral } = this.state
    let positivePercent = 0
    const finalPositivePercentage = Math.floor((Good / (Bad + Neutral + Good)) * 100)
    if (finalPositivePercentage > 0) {
      positivePercent = finalPositivePercentage
    }
    return positivePercent;
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const totalFinds = this.totalCount();
    const positivePercent = this.positivePercent();
    
    return (
			<>
        <Section title="Please leave feedback">
          <FeedBackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
          {totalFinds === 0 ? (
            <Nostat text="No feedback"/>
          ) : <Statistic
            text="Statistics"
            Good={Good}
            Neutral={Neutral}
            Bad={Bad}
            total={totalFinds}
            positivePercent={positivePercent}
          />
          }
          </Section>
			</>
		);
  }
}
