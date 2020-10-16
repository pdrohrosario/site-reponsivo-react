import React from 'react';

export default (props) =>(
  <div class="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"> {props.header}</h5>
        
      </div>
      <div class="modal-body">
        {props.children}
      </div>
      
    </div>
  </div>
</div>
)