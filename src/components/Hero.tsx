import Container from "./Container";

import { Carousel } from "antd";

const Hero = () => {
  return (
    <Container>
      <div className="w-full h-full overflow-hidden shadow-md rounded-xl">
        <Carousel autoplay>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1617696618050-b0fef0c666af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              alt="carousel1"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              alt="carousel2"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1626721105368-a69248e93b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              alt="carousel3"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Hero;
