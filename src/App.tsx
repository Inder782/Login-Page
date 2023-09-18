function App() {
  return (
    <div className="  flex  items-center bg-cover min-h-screen justify-center" style={{ backgroundImage: 'url("/src/assets/Firefly with starts galaxies and planets 69329.jpg")'}}>
      
      <div className=" text-center backdrop-blur-2xl w-1/5 h-1/2 border-2 border-sky-500 rounded-lg font-mono text-xl font-bold text-white">
        <h1 className="flex justify-center mt-4">Let's Login</h1>
        <p className="mt-7 text">Username</p>
        <input className="rounded-full w-80 text-center mt-5 text-black" type="text" placeholder="Enter UserName here"></input>
        <p className="mt-6">Password</p>
        <input  className=" rounded-full w-80 text-center mt-5 text-black" type="password" placeholder="Password"></input>
        <br/>
        <button className="bg-indigo-500 shadow-indigo-500/50 border-4 rounded-full w-56 shadow-2xl mt-9">Login</button>
        <p className="mt-9 text-left mx-7"> Already a user?</p>
        <button className="  bg-blue-500 shadow-blue-500/50 border-4 rounded-full w-40 shadow-2xl mt-6 my-5 ml-44 ">Sign Up</button>
      </div>
    </div>
  );
}

export default App;
