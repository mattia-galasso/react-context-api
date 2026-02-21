import imageError404 from "../assets/img/404_error_IMG.png";

export default function NotFoundPage() {
  return (
    <>
      <div className="notFoundBox py-5">
        <div className="errorImage">
          <img src={imageError404} alt="404 Page Not Found" />
        </div>

        <div className="my-5 alert alert-danger">
          <h1 className="text-center">404 - Page Not Found</h1>
        </div>
      </div>
    </>
  );
}
