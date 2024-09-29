"use client"

import { scrollTo } from "@/lib/utils";
import { Button } from "./ui/button";

const Link = ({ item }: { item: string }) => {
  return (
    <Button
      onClick={() => scrollTo(item.toLowerCase())}
      variant="link"
      className="text-secondary-foreground hover:text-primary hover:scale-110 transition-all duration-300 underline"
    >
      {item}
    </Button>
  )
}

export default Link