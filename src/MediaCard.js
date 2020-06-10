import React from "react";

export default function MediaCard({ title, body, imageURL }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 class="text-dark h2 font-weight-bolder styled-font text-left">
            {title}
          </h2>
        </div>
        <div className="card-body">
          <div class="row">
            <div class="col-8">
              <p class="text-dark text-left">{body}</p>
            </div>
            <div class="col-4">
              <img src={imageURL} alt="react" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
