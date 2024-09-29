import { data } from "@/data/data"
import Link from "./link"
import NextLink from "next/link"
import NavbarMobile from "./navbar-mobile"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 bg-card border-b border-b-border z-50">
      <div className="container px-4 mx-auto flex items-center justify-between py-5 ">
        <NextLink href="/" className="flex items-center gap-4">
          <Image src="/logo.webp" alt="Logo" height={50} width={50} />
          <p className="text-4xl font-extrabold text-primary">
            {data.name}
          </p>
        </NextLink>
        <nav className="hidden lg:flex gap-4">
          {
            data.navbar.links.map((item, index) => (
              <Link item={item} key={index} />
            ))
          }
        </nav>
        <NavbarMobile />
      </div>
    </header>
  )
}

export default Navbar