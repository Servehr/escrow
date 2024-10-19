

export default function Images() 
{

    return (
      <>
          <img 
              className='bg-gray-100 rounded-md'
              src='https://img.freepik.com/premium-photo/cool-black-guy-having-video-call-with-friends-home-interior_116547-44671.jpg?w=1300'
          />

          <div 
              className='mt-10'  
          >  
            <div 
                  className="flex gap-5 px-1 md:p-1 mt-3 mb-5 pb-5 rounded-md mx-auto px-2 md:px-6 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none"
            >
              {
                  [1,2,3,4,5,6,7,8].map((num, index) => {
                    return (
                        <img 
                              key={index+num}
                              className='w-[160px] h-[120px] bg-gray-100 rounded-md mb-5'
                              src='https://img.freepik.com/free-photo/business-student-having-online-videocall-meeting-conference_482257-19218.jpg'
                        />
                      )
                  })
              }
              <div className='py-3'></div>
            </div>
          </div>  
      </>
    )
    
}
