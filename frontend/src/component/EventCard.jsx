import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Carousel from "react-bootstrap/Carousel";

function EventCard() {
  return (
    <div>
      <TextField label="Name" variant="outlined" />
      <Button variant="contained">Submit</Button>

      <Carousel>
        <Carousel.Item>
          <img src="https://cdn.shopify.com/s/files/1/1279/9999/files/casinosupply-340619-poker-game-table-Image1a.jpg?v=1739814466" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="" alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="" alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default EventCard;
