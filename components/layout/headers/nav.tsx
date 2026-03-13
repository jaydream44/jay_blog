import navigation from "@/data/navigation";
import { DropdownType } from "@/types/navigation";
import Link from "next/link";

const renderDropdown = (dropdown: DropdownType[]) => {
    return (
        <ul className="sub-menu">
            {dropdown.map((item, i) => (
                <li
                    key={i}
                    className={item.dropdown ? "menu-item-has-children" : ""}
                >
                    <Link
                        className={item.dropdown ? "no-border" : ""}
                        href={item.href || "#"}
                    >
                        {item.label}
                    </Link>
                    {item.dropdown && renderDropdown(item.dropdown)}
                </li>
            ))}
        </ul>
    );
};

const Nav = () => {
    return (
        <>
            <nav className="main-menu menu-style1 d-none d-lg-block">
                <ul>
                    {navigation?.map((item, i) =>
                        item.dropdown ? (
                            <li key={i} className="menu-item-has-children">
                                <Link href="#">{item.label}</Link>
                                {renderDropdown(item.dropdown)}
                            </li>
                        ) : (
                            <li key={i}>
                                <Link href={item.href || "#"}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </>
    );
};

export default Nav;
