import Link from "next/link";
import type { FC } from "react";

interface NavListProps {}

const NavList: FC<NavListProps> = ({}) => {
  return (
    <ul>
      <li>
        <Link href="#">How it works</Link>
      </li>
      <li>
        <Link href="#">Design Gallery</Link>
      </li>
      <li>
        <Link href="#">Architects</Link>
      </li>
      <li>
        <Link href="#">Articles</Link>
      </li>
    </ul>
  );
};
export default NavList;
