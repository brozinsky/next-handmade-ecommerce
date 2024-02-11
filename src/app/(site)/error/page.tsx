"use client";
const ErrorPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-500">
        <b>Error: </b>
      </p>
    </div>
  );
};

export default ErrorPage;
