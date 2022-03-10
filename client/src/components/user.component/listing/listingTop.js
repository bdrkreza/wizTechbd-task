import { useState } from "react";
import { Card } from "react-bootstrap";
import { GrFormClose, GrGallery } from "react-icons/gr";
export default function ListingTop({ setPicture }) {
  const [imgPreview, setImgPreview] = useState(null);


  const handleImageChange = (e) => {
    const selected = e.target.files[0];
  
    if (selected) {
      setPicture(selected);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgPreview(reader.result);
      });
      reader.readAsDataURL(selected);
    }
  };


  return (
    <Card>
      <hr className="mt-5" />
      <div className="ms-5">
        <h1>Gallery</h1>
        <span className="fs-4 ms-2">main image</span>
        <div className="d-flex flex-column">
          <GrFormClose
            onClick={() => [setPicture(null), setImgPreview(null)]}
            style={{ marginLeft: "90px", fontSize: "30px" }}
          />
          <img
            src={imgPreview}
            className="rounded-circle"
            width="100"
            alt="Avatar"
          />
        </div>
      </div>

      <div className="ms-5 mt-5 mb-5">
        <h5>Gallery images</h5>
        <input
          id="fileUpload"
          accept="image"
          style={{ display: "none" }}
          type="file"
          onChange={handleImageChange}
        />
        <label
          htmlFor="fileUpload"
          style={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        >
          <GrGallery className="fs-1 ms-3" />
        </label>
      </div>
    </Card>
  );
}
