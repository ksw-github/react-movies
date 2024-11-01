function About() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <img src="/133204551.png" alt="ksw-github" className="rounded-full shadow-md" />
      <h1 className="text-4xl font-bold p-5">KimSeoWoo</h1>
      <div className="flex items-center space-x-2">
        <i className="fab fa-github text-2xl"></i>
        <a href="https://github.com/ksw-github" className="group" target="_blank" rel="noopener noreferrer">
          ksw-github
        </a>
      </div>
    </div>
  );
}

export default About;