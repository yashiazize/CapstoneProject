import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const RequestDetails = () => {


  return (
    <section className="detailsContainer">
      <div className="detailsButtons">
        <Link to={"/travelpackages"}>
          <button>Go Back</button>
        </Link>
      </div>
      <h4>Requests</h4>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title"> </h3>
              <p className="card-text">Event Type: </p>
              <p className="card-text">
                Chef:
              </p>
              <p className="card-text">Cuisine: </p>
              <p className="card-text">
                Date & Time:{" "}
              </p>
              <p>Address:</p>
              <p className="card-text"></p>
              <div className="detailsButtons">
                <Link >
                  <button>Edit</button>
                </Link>
                <button >Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDetails;
