import Image from 'next/image'

interface ThemeImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  className?: string
  fill?: boolean
}

export default function ThemeImage({ 
  lightSrc, 
  darkSrc, 
  alt, 
  className = "",
  fill = false 
}: ThemeImageProps) {
  return (
    <>
      <Image
        src={lightSrc}
        alt={`${alt} (light mode)`}
        fill={fill}
        className={`${className} block dark:hidden`}
      />
      <Image
        src={darkSrc}
        alt={`${alt} (dark mode)`}
        fill={fill}
        className={`${className} hidden dark:block`}
      />
    </>
  )
}