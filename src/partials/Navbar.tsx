import { NavbarTwoColumns } from '@/components/NavbarTwoColumns/NavbarTwoColumns';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { NavMenuItem } from '@/components/NavMenuItem/NavMenuItem';
import { Section } from '@/components/Section/Section';

import cubeicon from '../images/cubeicon.png';

const Navbar = () => (
  <Section noPadding>
    <NavbarTwoColumns>
      <a href="/" className="flex items-center gap-2 p-2 text-xl font-bold">
        <img src={cubeicon} alt="cube icon" className="h-10 w-10" />
        Leeto's Portfolio
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
