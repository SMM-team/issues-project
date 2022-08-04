import React, { Component } from "react";
import Issue from "./issue";
import { getIssues } from "./issues/get-issues";
class Issues extends Component {
    state = {
        finished: true,
        unFinished: false,
        issues: getIssues(50),
    }

    isFinished = () => {
        let result = this.state.issues.filter((item) => item.isFinished === true);
        return this.setState({ finished: result })
    }
    render() {
        console.log(this.state.finished);
        return (
            <>
                {this.state.issues.map((issue) => (<Issue isFinished={this.isFinished} key={issue.id} issue={issue} />))}
            </>);

    }
}

export default Issues;