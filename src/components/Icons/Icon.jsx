// import { heart as IconName1, user asIconName2 } from "@heroicons/react/outline"; // lub solid
import { HeartIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const icons = {
  heart: HeartIcon,
  user: UserIcon,
  cart: ShoppingCartIcon,
  // dodaj więcej ikon
};

export default function Icon({ name, className }) {
  const Component = icons[name];
  return Component ? <Component className={className} /> : null;
}
