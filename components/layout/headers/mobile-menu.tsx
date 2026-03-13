"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Collapse } from "react-collapse";
import navigation from "@/data/navigation";
import { NavigationType } from "@/types/navigation";
import { social } from "@/data/data";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const toggleMenu = (label: string) => {
        setOpenMenus((prev) => {
            const newState = Object.keys(prev).reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: false,
                }),
                {}
            );

            return {
                ...newState,
                [label]: !prev[label],
            };
        });
    };

    const renderMenuItem = (item: NavigationType) => {
        const isMenuOpen = openMenus[item.label] || false;

        return (
            <li
                key={item.label}
                className={`menu-item-has-children ${
                    isMenuOpen ? "active" : ""
                }`}
            >
                {item.dropdown ? (
                    <>
                        <button
                            onClick={() => toggleMenu(item.label)}
                            className="menu-link"
                        >
                            {item.label}
                            <i
                                className={`ri-arrow-${
                                    isMenuOpen ? "up" : "down"
                                }-s-line`}
                            />
                        </button>
                        <Collapse isOpened={isMenuOpen}>
                            <ul className="sub-menu">
                                {item.dropdown.map((subItem) => (
                                    <li key={subItem.label}>
                                        <Link
                                            href={subItem.href || "#"}
                                            onClick={onClose}
                                        >
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Collapse>
                    </>
                ) : (
                    <Link href={item.href || "#"} onClick={onClose}>
                        {item.label}
                    </Link>
                )}
            </li>
        );
    };

    return (
        <>
            <div
                className={`quanto-menu-wrapper ${
                    isOpen ? "quanto-body-visible" : ""
                }`}
            >
                <div className="quanto-menu-area text-center">
                    <div className="quanto-menu-mobile-top">
                        <div className="mobile-logo">
                            <Link href="/" onClick={onClose}>
                                <Image
                                    src="/images/logo-1.svg"
                                    alt="logo"
                                    width={120}
                                    height={20}
                                    priority
                                />
                            </Link>
                        </div>
                        <button
                            className="quanto-menu-toggle mobile"
                            onClick={onClose}
                        >
                            <i className="ri-close-line" />
                        </button>
                    </div>
                    <div className="quanto-mobile-menu">
                        <ul>{navigation.map(renderMenuItem)}</ul>
                    </div>
                    <div className="quanto-mobile-menu-btn">
                        <div className="sidebar-wrap">
                            <h6>27 Division St, New York,</h6>
                            <h6>NY 10002, USA</h6>
                        </div>
                        <div className="sidebar-wrap">
                            <h6>
                                <Link href="tel:1800123654987">
                                    +1 800 123 654 987
                                </Link>
                            </h6>
                            <h6>
                                <Link href="mailto:quanto.agency@mail.com">
                                    quanto.agency@mail.com
                                </Link>
                            </h6>
                        </div>
                        <div className="social-btn style-3">
                            {/* social media start */}
                            {social.map((item, i) => (
                                <Link key={i} href={item.href}>
                                    <span className="link-effect">
                                        <span className="effect-1">
                                            <i className={item.iconClass} />
                                        </span>
                                        <span className="effect-1">
                                            <i className={item.iconClass} />
                                        </span>
                                    </span>
                                </Link>
                            ))}
                            {/* social media end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
