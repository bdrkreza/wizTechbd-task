import { useState } from "react";
import { Card } from "react-bootstrap";

export default function ProfileForm({isBook}) {



  const [userInfo, setUserInfo] = useState({});

  console.log(userInfo);
  const onChangeValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      
    const dataSubmit = {
      ...userInfo,
      description: userInfo.description.value
    };

    console.log(dataSubmit);
    } catch (error) {
      throw error;
    }
  };
  return (
    <Card className="p-5 text-capitalize">
      <div>
        <h4>Clinic Locations </h4>
        <span>location 1</span>
      </div>
      <form className="row g-3 mt-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Clinic name
          </label>
          <input
            onChange={onChangeValue}
            style={{ width: "50%" }}
            defaultValue={isBook.clinicname}
            type="text"
            name="clinicName"
            className="form-control"
            placeholder="1234 Main St"
            required
          />
        </div>
        <br />
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            address
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.address1}
            type="text"
            name="address"
            className="form-control"
            id="inputEmail4"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            address 2nd line
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.address2}
            type="text"
            name="address2"
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.zip}
            type="text"
            name="zip"
            className="form-control"
            id="inputZip"
          />
        </div>
        <div className="col-md-5">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.city}
            type="text"
            name="city"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-5">
          <label for="inputState" className="form-label">
            country
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.country}
            type="text"
            name="country"
            className="form-control"
            id="inputState"
          />
        </div>

        <div className="col-6">
          <label for="inputAddress" className="form-label">
            landLine
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.landLine1}
            name="landLine1"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Landline 1"
          />
        </div>
        <div className="col-6">
          <label for="inputAddress2" className="form-label">
            second Landline
          </label>
          <input
            onChange={onChangeValue}
            defaultValue={isBook.landLine2}
            type="text"
            name="landLine2"
            className="form-control"
          />
        </div>
        <Card className="mt-4" dangerouslySetInnerHTML={{ __html: isBook.text}}  />
      </form>
    </Card>
  );
}
