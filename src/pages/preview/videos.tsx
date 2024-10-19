

export default function Videos() 
{

    return (
      <>
          {/* <h1>Videos</h1> */}
          {/* https://www.youtube.com/watch?v=8Jgui5G8yGQ */}
          {/* <div className="w-full"> */}
        <div className="bg-black relative">
          <iframe  className="w-full h-[600px] absolute pin-x pin-t" 
                  src="https://www.youtube.com/watch?v=8Jgui5G8yGQ" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen></iframe>
                  </div>
                  {/* </div> */}
      </>
    )
}
