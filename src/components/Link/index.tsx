/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';

interface LinkProps {
  activeClassName?: string;
  className?: string;
  href: string;
}

const CustomLink: React.FC<LinkProps> = ({
  children,
  activeClassName = '',
  className = '',
  href,
  ...props
}) => {
  const { asPath } = useRouter();

  const childClassName =
    asPath === href ? `${className} ${activeClassName}`.trim() : className;

  return (
    <Link href={href} {...props}>
      <a className={childClassName}>{children}</a>
    </Link>
  );
};

export default CustomLink;
