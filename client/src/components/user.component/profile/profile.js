
import { useContext } from "react";
import { Context } from "../../layout/layout";
import ProfileForm from "./profileForm";
import ProfileTop from "./profileTop";
export default function Profile() {

  const isBook = useContext(Context);
  return (
    <div>
      <ProfileTop isBook={isBook} />
      <ProfileForm isBook={isBook} />
    </div>
  );
}
