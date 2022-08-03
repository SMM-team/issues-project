import React from "react";
import ReactDOM from "react-dom/client";
import "./components/issue.scss";
import './components/issue'
import Issues from "./components/issues";
const root = ReactDOM.createRoot(document.getElementById("root"));
const issueIcon = <svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>

root.render(
    <>

        <div className="container">
            <div className="issue">
                <div className="card">
                    <div className="card-header">
                        {issueIcon} <h2>Open</h2>
                        <h2>All</h2>
                        <button >Completed</button>
                        <button>NoCompleted</button>
                    </div>
                    <Issues />
                </div>
            </div>
        </div>


    </>


);
