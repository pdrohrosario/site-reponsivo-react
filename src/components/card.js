import React from 'react';

export default (props) =>(
  <div classNAme="card border-secondary">
    <div className="card-header">
      {props.header}
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>
)