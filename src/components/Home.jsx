function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center h-screen z-0">
          <img src="../../public/header.jpg" alt="background image" />
        </div>
        <div className="absolute top-80 left-40 z-10">
          <h1 className="text-5xl font-bold">Hi!</h1>
          <h1 className="text-5xl font-semibold text-blue-800">{`I'm Kumar Akashdeep`}</h1>
          <p className="absolute left-1 text-2xl text-neutral-700 font-thin">{`I'm a Full Stack Developer, AI Enthusiast `}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
