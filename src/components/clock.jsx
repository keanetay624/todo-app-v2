import React, { Component } from "react";
import "../CSS_Files/app.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    const CURRENT_DATE_TIME = new Date();
    this.state = {
      day: CURRENT_DATE_TIME.getDay(),
      hours: CURRENT_DATE_TIME.getHours(),
      mins: CURRENT_DATE_TIME.getMinutes(),
    };
  }

  componentDidMount() {
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    this.setState({
      day: new Date().getDay(),
      hours: new Date().getHours(),
      mins: new Date().getMinutes(),
    });
  }

  handleDay(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Invalid day";
    }
  }

  handleHours(hours) {
    return hours === 12
      ? hours
      : hours < 10
      ? "0" + hours
      : hours < 22
      ? "0" + (hours -= 12)
      : (hours -= 12);
  }

  handleMins(mins) {
    return mins < 10 ? "0" + mins : mins;
  }

  render() {
    return (
      <div
        id="clock-container"
        className="d-flex flex-column align-items-center"
      >
        <div className="test-class">
          <span className="test-class">
            {this.handleHours(this.state.hours)}
          </span>
          <span className="test-class" id="blinker">
            :
          </span>
          <span className="test-class">
            {" "}
            {this.handleMins(this.state.mins)}
          </span>
          <span className="test-class">
            {this.state.hours < 12 ? "AM" : "PM"}
          </span>
        </div>
        {/* #TODO: Extract Date Component */}
        <p className="date test-class">
          <em>{this.handleDay(this.state.day)}</em>
        </p>
      </div>
    );
  }
}

export default Clock;
