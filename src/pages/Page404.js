import notFound from '../assets/images/404.png';

const Page404 = () => {
  return (
    <>
      <img className="mt-4 rounded mx-auto d-block" src={notFound}></img>
      <h3 className="mt-4 text-center">
        You should log in if you want to use our app's features.
      </h3>
    </>
  );
};

export default Page404;
