import { Logo, Section, Nav, Connect } from '../../shared';
import Search from '../search';

function Navbar({ handleOpenSidebar }) {
  return (
    <Section className={`bg-white w-[100%] border-b-[1px] border-[#00000010]`}>
      <Nav>
        <div className={`py-2 flex justify-between items-center`}>
          <Logo />

          <div className={`flex justify-between items-center`}>
            <div className={`hidden md:block mr-8`}>
              <Search />
            </div>
            <Connect content={'Connect'} />
            <i
              onClick={() => handleOpenSidebar()}
              className={`md:hidden ml-8 text-2xl text-black ri-menu-add-line`}
            ></i>
          </div>
        </div>
      </Nav>
    </Section>
  );
}

export default Navbar;
