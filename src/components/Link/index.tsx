/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
  activeClassName?: string;
  className?: string;
  href: string;
}

const CustomLink = ({
  children,
  activeClassName = '',
  className = '',
  href,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
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
