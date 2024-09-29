import { scrollTo } from "@/lib/utils";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

const LinkMobile = ({ item, setOpen }: { item: string, setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    scrollTo(item.toLowerCase())
    setOpen(false)
  }
  return (
    <Button
      onClick={handleClick}
      variant="link"
    >
      {item}
    </Button>
  )
}

export default LinkMobile