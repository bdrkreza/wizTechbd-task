import { Card } from "react-bootstrap";
import { GrFormClose, GrGallery } from "react-icons/gr";
export default function ListingTop() {
  return (
    <Card>
      <hr className="mt-5" />
      <div className="ms-5">
      <h1>Gallery</h1>
        <span className="fs-4 ms-2">main image</span>
        <div className="d-flex flex-column" >
            <GrFormClose style={{marginLeft:'90px' ,fontSize:"30px"}}  />
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            width="100"
            alt="Avatar"
          />
        </div>
      </div>

      <div className="ms-5 mt-5 mb-5">
          <h5 >Gallery images</h5>
          <GrGallery className="fs-1 ms-3"/>
      </div>
    </Card>
  );
}
