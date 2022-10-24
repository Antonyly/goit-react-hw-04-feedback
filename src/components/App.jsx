import { useState} from 'react';
import FeedBackOptions from './FeedBack/FeedBackOptions';
import Section from './Section/Section'
import Statistic from './Statistics/Statistic';
import Nostat from './Notify/Notify';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const onLeaveFeedback = (e) => {
      const count = e.target.name;
      if (count === 'good') {
        return setGood(p => p + 1);
      };

      if (count === 'neutral') {
        return setNeutral(p => p + 1);
      };

      if (count === 'bad') {
        return setBad(p => p + 1);
      };
  };
  const totalCount = () => {
    // const { Good, Neutral, Bad } = this.state;
    return good + neutral + bad;
  };
  const positivePercent = () => {
    // const { Good, Bad, Neutral } = this.state
    let positivePercent = 0
    const finalPositivePercentage = Math.floor((good / (bad + neutral + good)) * 100)
    if (finalPositivePercentage > 0) {
      positivePercent = finalPositivePercentage
    }
    return positivePercent;
  };
    
    return (
			<>
        <Section title="Please leave feedback">
          <FeedBackOptions options={Object.keys({good, neutral, bad})} onLeaveFeedback={onLeaveFeedback} />
          { totalCount() === 0 ? (
            <Nostat text="No feedback"/>
          ) : <Statistic
            text="Statistics"
            Good={good}
            Neutral={neutral}
            Bad={bad}
            total={totalCount()}
            positivePercent={positivePercent()}
          />
          }
          </Section>
			</>
		);
  // }

}
