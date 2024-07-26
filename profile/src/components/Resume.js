import React, { Component } from "react";
import ResumeLocation from "../assets/Resume.pdf";

class Resume extends Component {
  render() {
    return (
      <a href={ResumeLocation} target="_blank" rel="noreferrer">
        You can click here to see a copy of my resume and learn more about my
        work experience.
      </a>
    );
  }
}
export default Resume;
