import { useState } from "react";
import ListingForm from "./listingForm";
import ListingTop from "./listingTop";

export default function Listing() {
  const [userInfo, setUserInfo] = useState({});
  const [picture, setPicture] = useState(null);
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
      event.persist();
      const newFormData = new FormData();
      newFormData.append("image", picture);
      newFormData.append("clinicname", userInfo.clinicName);
      newFormData.append("address1", userInfo.address1);
      newFormData.append("address2", userInfo.address2);
      newFormData.append("zip", userInfo.zip);
      newFormData.append("city", userInfo.city);
      newFormData.append("country", userInfo.country);
      newFormData.append("landLine1", userInfo.landLine1);
      newFormData.append("landLine2", userInfo.landLine2);
      newFormData.append("text", userInfo.description.value);
      newFormData.append("payment", userInfo.cash);

      fetch("http://localhost:5000/booking", {
        method: "POST",
        body: newFormData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("Create service successfully");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ListingTop setPicture={setPicture} />
      <ListingForm
        onChangeValue={onChangeValue}
        handleSubmit={handleSubmit}
        userInfo={userInfo}
      />
    </div>
  );
}
