import React from "react";
import "./Team.scss";

const Team = () => {
  return (
    <div>
      <div class="container">
        <div class="d-flex">
          <div class="card">
            <div class="card-img">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div class="flip-card-back">
                  <img
                    loading="lazy"
                    src="https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="card-body">
              <h3>Rami</h3>
              <small>Web developer</small>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/3973335/pexels-photo-3973335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div class="flip-card-back">
                  <img
                    loading="lazy"
                    src="https://media4.giphy.com/media/l3vR5Sghh85EBCnhC/giphy.gif?cid=ecf05e4786trkpqmnl0q080j0qcgt9dtxdvmr1x8fkvhjljd&rid=giphy.gif&ct=g"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="card-body">
              <h3>John</h3>
              <small>Backend developer</small>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    loading="lazy"
                    src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div class="flip-card-back">
                  <img
                    loading="lazy"
                    src="https://media4.giphy.com/media/3ogmaPGsQOruw/200w.webp?cid=ecf05e47vrhrj4vupwhwn77ymnclehhrb0q3kd7unplgvcfx&rid=200w.webp&ct=g"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="card-body">
              <h3>Sonja</h3>
              <small>UX / UI Designer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
