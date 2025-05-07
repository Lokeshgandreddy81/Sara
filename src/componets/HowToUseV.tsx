const HowToUseV = () => {
    return (
      <>
        <div className="py-24 relative bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-5" id="Tutorial">
            <div className="aspect-video relative" >
 
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube-nocookie.com/embed/x_dhgg1xI_4?si=rkrWCmsDwnnfIbsu&amp;start=93&autoplay=1&mute=1&controls=0&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-xl p-4 sm:p-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              How to Use SARA AI ?
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl text-center">
              Watch this quick guide to understand the platform better
            </p>
            <a href="https://youtu.be/kulGpku0nCgc" target="_blank" rel="noopener noreferrer">
              <button className="mt-6 sm:mt-8 bg-white/20 hover:bg-white/50 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center hover:text-black">
                Watch Tutorial
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
          </div>
            </div>
            <p className='left-align text-[#1f1f1f] dark:text-[#1f1f1f]'>BackGround Video Credits : <a href='https://www.youtube.com/@8kEarth' target='_blank'className='text-white dark:text-black'>8K video</a></p>
          </div>
        </div>
      
      </>
    )
}
export default HowToUseV