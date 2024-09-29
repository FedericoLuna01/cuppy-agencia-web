import { data } from "@/data/data"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t-border border-t">
      <div className="container px-4 mx-auto py-5  text-center">
        <p className="text-sm text-muted-foreground">
          Copyright © {currentYear} {data.name} | Todos los derechos reservados | Diseño y desarrollo {" "}
          <a
            className="text-accent-foreground font-medium underline hover:text-primary transition-all duration-100"
            href="https://cuppyagenciaweb.com"
            target="_blank"
          >
            Cuppy agencia web
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer