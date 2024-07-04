const Banner = () => {
  return (
    <section className="py-5">
      <div className="container px-lg-5">
        <div className="p-2 p-lg-3 bg-light rounded-3">
          <div className="m-2 m-lg-3">
            <h1 className="display-5">A Warm Welcome!</h1>
            <p className="fs-5 title-p">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a className="btn btn-primary btn-lg" href="#!">
              Call to action!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
