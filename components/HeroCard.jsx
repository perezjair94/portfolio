export default function HeroCard({ link, title, children }) {
  return (
    <div className="border rounded-md p-6 mb-3">
      <a href={link} target="_blank">
        <h2 className="font-semibold text-xl">
          <div className="flex">
            <span>{title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </h2>
      </a>
      <p className="font-light mt-1">{children}</p>
    </div>
  )
}