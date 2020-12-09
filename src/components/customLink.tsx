import Link from 'next/link'

interface CustomLinkProps {
  href: string
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  )
}

export default CustomLink
