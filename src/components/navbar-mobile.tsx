"use client"

import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { data } from "@/data/data"
import LinkMobile from "./link-mobile"
import { useState } from "react"

const NavbarMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button className="flex lg:hidden" variant="outline" size="icon">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-card max-w-[250px] flex items-center flex-col">
        <SheetHeader>
          <SheetTitle>{data.name}</SheetTitle>
        </SheetHeader>
        <div className="flex items-center flex-col gap-4">
          {
            data.navbar.links.map((item, index) => (
              <LinkMobile item={item} setOpen={setOpen} key={index} />
            ))
          }
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMobile