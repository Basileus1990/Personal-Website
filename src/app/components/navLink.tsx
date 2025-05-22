import Link from "next/link";

interface NavLinkProps {
    name: string;
    href: string;
}

export default function NavLink({ name, href }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="hover:bg-gray-600 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
            {name}
        </Link>
    );
}