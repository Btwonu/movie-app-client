import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

// Components
import ProfileCard from '../components/Profile/ProfileCard';

const Profile = () => {
  // const [] = useState();
  // const { user } = useAuth();
  const [collections, setCollections] = useState([]);
  const [loadingCollections, setLoadingCollections] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchError = () => {
    //   return axios({ url: '/' });
    // };

    // fetchError()
    //   .then((res) => {
    //     // setError();
    //   })
    //   .catch((err) => {
    //     let { status, message } = err.response.data;
    //   });

    setLoadingCollections(true);

    axios({
      method: 'get',
      url: `/users/profile`,
    }).then((user) => {
      setCollections(user.data.createdCollections);
      setLoadingCollections(false);
    });
  }, []);

  return (
    <ProfileCard
      avatarUrl=""
      loadingCollections={loadingCollections}
      collections={collections}
    />
  );
};

export default Profile;
