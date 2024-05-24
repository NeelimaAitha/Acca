import React from 'react';

const RequestCallBackModal = () => {
  return (
    <div className="modal fade" id="requestCallBackModal" tabIndex="-1" aria-labelledby="requestCallBackModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="requestCallBackModalLabel">Request Call Back</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Success! We will get back to you soon.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCallBackModal;
