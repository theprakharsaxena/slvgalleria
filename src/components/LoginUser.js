import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LoginUser(textColor) {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>...</div>;
  }
  console.log("USER", user);
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button className="text-white">
          {!isAuthenticated ? (
            <FaUserAlt style={{ color: `${textColor}` }}/>
          ) : (
            <img src={user ? user.picture : ""} className="w-8 rounded-full border-2 border-black hover:border-pink-500"/>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-pink-900 text-white shadow-lg focus:outline-none">
          <div className="py-1">
            {!isAuthenticated ? (
              <Menu.Item>
                {({ active }) => (
                  // <Link
                  //   to="/log-in"
                  //   className={classNames(
                  //     active ? 'bg-white text-black' : '',
                  //     'block px-4 py-2 text-sm'
                  //   )}
                  // >
                  //   Log In
                  // </Link>

                  <button
                    className={classNames(
                      active ? "text-black" : "",
                      "block px-4 py-2 text-sm w-full"
                    )}
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                )}
              </Menu.Item>
            ) : (
              <Menu.Item>
                {({ active }) => (
                  // <Link
                  //   to="/sign-up"
                  //   className={classNames(
                  //     active ? "bg-white text-black" : "",
                  //     "block px-4 py-2 text-sm"
                  //   )}
                  // >
                  //   Sign Up
                  // </Link>
                  <button
                    className={classNames(
                      active ? "text-black" : "",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                )}
              </Menu.Item>
            )}
            <Menu.Item>
              {({ active }) => (
                // <Link
                //   to="/sign-up"
                //   className={classNames(
                //     active ? "bg-white text-black" : "",
                //     "block px-4 py-2 text-sm"
                //   )}
                // >
                //   Sign Up
                // </Link>
                <button
                  className={classNames(
                    active ? "text-black" : "",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Become a Seller
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
