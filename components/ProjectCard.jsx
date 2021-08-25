export default function ProjectCard({ title, link, image }) {
  return (
    <div className="bg-gray-100 text-white rounded-md">
      <div>
        <a href={link} target="_blank">
          <div className="relative">
            <div className="absolute h-full w-full z-40">
              <div style={{ backdropFilter: 'blur(5px)' }} className="h-full rounded-md bg-black bg-opacity-20 opacity-0 hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <span className="font-semibold text-xl">{title}</span>
                  <svg className="h-5 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
            <div 
              className="relative w-full h-60 rounded-md opacity-95" 
              style={{ 
                background: `url(/images/experience/${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </a>
      </div>
    </div>
  )
}