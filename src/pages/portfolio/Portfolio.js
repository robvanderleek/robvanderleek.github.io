import React from "react";
import CreateIssueBranch from "./CreateIssueBranch";
import CicdBuzz from "./CicdBuzz";
import Patching from "./Patching";

export default function Portfolio() {
    return (
        <div style={{marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Patching/>
            <CreateIssueBranch/>
            <CicdBuzz/>
        </div>
    );
}