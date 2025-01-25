function About() {
  return (
    <>
      <div
        id="about"
        className="z-20 flex flex-col md:flex-row items-center justify-center 
        px-4 py-16 md:gap-24 space-y-6 md:space-y-0"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left w-full md:w-auto">
          About Me..
        </h1>
        <p
          className="text-base md:text-m text-center md:text-left 
        px-4 md:p-10 lg:p-16 leading-relaxed max-w-4xl"
        >
          {`I'm a passionate tech enthusiast who thrives on creating impactful
          solutions.`}
          <br />
          With hands-on experience in full-stack development using the
          <b className="text-gray-800"> MERN </b>
          {`stack, I've built dynamic, user-friendly web applications.`}
          <br /> My exploration of{" "}
          <b className="text-gray-800"> data analytics </b>{" "}
          {`has sharpened my
          ability to transform raw data into actionable insights. Currently, I'm
          diving deep into the world of`}
          <b className="text-gray-800"> data science </b>, discovering how to
          uncover hidden patterns in complex datasets.
          <br /> {`At the same time, I'm learning about`}
          <b className="text-gray-800"> AI </b>{" "}
          {`to unlock the potential of
          intelligent systems and push the boundaries of innovation. Always
          curious and driven, I'm excited about tackling challenges that inspire
          growth and creativity.`}
        </p>
      </div>
    </>
  );
}

export default About;
