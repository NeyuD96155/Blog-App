import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 lg:px-20">
          {/* About Section */}
          <div>
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          {/* Follow Us Section */}
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="https://github.com/NeyuD96155">
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          {/* Legal Section */}
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          {/* New Column Section - Example: Resources */}
          <div>
            <Footer.Title title="Resources" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Documentation</Footer.Link>
              <Footer.Link href="#">API Reference</Footer.Link>
              <Footer.Link href="#">Community Forum</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            © 2022 Flowbite™. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
