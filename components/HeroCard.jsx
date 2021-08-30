export default function HeroCard({ link, title, children }) {
  return (
    <a href={link} target="_blank">
      <div className="border hover:border-black rounded-md p-6 mb-3">
          <h2 className="font-semibold text-xl">
            <div className="flex">
              <span>{title}</span>
            </div>
          </h2>
        <p className="font-light mt-1">{children}</p>
      </div>
    </a>
  )
}