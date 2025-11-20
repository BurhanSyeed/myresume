import React, { useState } from "react";
import image1 from "../img/p6.jpg";
import image2 from "../img/p7.jpg";
import image3 from "../img/p8.jpg";
import image4 from "../img/p10.jpg";
import image5 from "../img/p11.jpg";
import image6 from "../img/p12.jpg";
function Service() {
  const margin = {
    marginTop: "150px",
  };
  const img = {
    width: "90%",
    height: "90%",
    marginTop: "50px",
    //    transition : 'opacity 0.5s ease-in-out',  // Adjust the transition properties as needed
    //       opacity: isHovered ? 0.7 : 1,
    // boxShadow: '10px 10px 10px rgba(128, 153, 194, 0.4) inset',
    // boxShadow: '10px 10px 5px rgba(128, 153, 194, 0.4)',
  };
  const imgStyle = {
    marginTop: "50px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px", // Set the height of your image container
  };
  const [isHovered, setIsHovered] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);

  };

  const handleMouseLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };
  const sortImage = (e) => {
     if(e.target.id === 'website') 
     {
     let images =  [image1, image2, image3, image4, image5, image6]
     images.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
     }
  };
  const cardContentStyle = {
    opacity: "100%",
    transition: "opacity 0.3s ease", // Adjust the duration and easing function as needed
  };

  return (
    <>
      <div className="container">
        <div className="row" style={margin}>
          <div className="col-lg-4 col-md-3">
            <h2>Latest Works</h2>
            <span>
              <hr style={{ width: "60%" }} />
            </span>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-lg-4 col-md-4">
            <button
              className="btn btn-sm"
              style={{
                color: "white",
                marginRight: "10px",
                backgroundColor: "rgba(128, 153, 194)",
              }}
              id="website"
              onClick={sortImage}
            >
              WEBSITES
            </button>
            <button
              className="btn btn-sm"
              style={{
                color: "white",
                marginRight: "10px",
                backgroundColor: "rgba(128, 153, 194)",
              }}
              id="design"
            >
              DESIGN
            </button>
          </div>
        </div>
        <div className="row">
          {[image1, image2, image3, image4, image5, image6].map(
            (image, index) => (
              <div className="col-lg-4 col-md-4 ml-1">
                <div
                  key={index}
                  style={{
                    ...imgStyle,
                    backgroundImage: `url(${image})`,
                    backgroundColor: isHovered[index]
                      ? "rgba(26, 115, 246, 0.7)"
                      : "rgba(26, 115, 246, 1)",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {isHovered[index] && (
                    <div
                      className="card"
                      style={{
                        height: "300px",
                        backgroundColor: "rgba(128, 153, 194,0.7)",
                      }}
                    >
                      <div className="card-body" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                       
                          <h1 className="text-white" >Project {index + 1}</h1>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Service;
