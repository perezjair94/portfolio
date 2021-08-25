import Image from 'next/image'

export default function SocialLink({ link, source }) {
  return (
    <div>
      <a href={link} target="_blank">
        <Image 
          src={source} 
          height={30}
          width={30}
        />
      </a>
    </div>
  )
}