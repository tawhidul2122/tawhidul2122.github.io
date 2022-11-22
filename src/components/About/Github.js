import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
       <strong>Github Preview</strong> 
      </h1>
      <GitHubCalendar
        username="tawhidul2122"
        blockSize={12}
        blockMargin={5}
        color="#24e034"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
