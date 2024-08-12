import { FormContainer } from "./FormContainer";
import { Input } from "../FormElements/Input";

export function ProfilePicture({ image, onChange }) {
  return (
    <section className="edit-block">
      <FormContainer extraClasses="edit-picture_form">
        <div className="profile-picture-container">
          {image ? (
            <img src={image} alt="user" className="profile-picture" />
          ) : (
            <div className="profile-picture-placeholder"></div>
          )}
        </div>
        <div className="edit-block_form-desc">
          <h2 className="edit-block_title">Profile Picture</h2>
          <p>
            Adding a photo to your CV can be a great way to personalize your application and make a
            positive first impression. When uploading your photo, make sure it is a clear and recent
            headshot that shows your face in a professional manner.
            <b>start filling your application with your personal information</b>, good luck!
          </p>
          <Input id="cvProfilePicture" type="file" onChange={onChange} />
        </div>
      </FormContainer>
    </section>
  );
}
