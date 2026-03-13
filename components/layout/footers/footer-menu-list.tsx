import Link from "next/link";

interface Props {
    data: Array<{ label: string; href: string }>;
}

const FooterMenuList = ({ data }: Props) => {
    return (
        <>
            {data?.map((item, i) => (
                <li key={i}>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))}
        </>
    );
};

export default FooterMenuList;
