import React, { Component } from "react";
import ResumeLocation from "./assets/Resume.pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <a href={ResumeLocation}>click</a>
      </div>
    );
  }
}
export default Resume;
