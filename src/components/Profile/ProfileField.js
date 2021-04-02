const ProfileField = ({ property, value }) => {
  return (
    <div className="d-flex justify-content-start">
      <p className="text-muted font-weight-bold">{property}</p>
      <p className="ml-2 font-weight-bold">{value}</p>
    </div>
  );
};

export default ProfileField;
