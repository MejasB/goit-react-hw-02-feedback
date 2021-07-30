import { React, Component } from "react";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Notification from "./components/notification/Notification";
import Section from "./components/section/Section";
import Statistics from "./components/statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  onLeaveFeedback = (event) => {
    const option = event.target.dataset.option;
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  getTotal() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  getTotalPercentage() {
    return this.getTotal() !== 0
      ? Math.round((this.state.good / this.getTotal()) * 100)
      : 0;
  }

  render() {
    const total = this.getTotal();
    const percentage = this.getTotalPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              options={this.options}
              feedback={this.state}
              total={total}
              positivePercentage={percentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
