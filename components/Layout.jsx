import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Jair Pérez",
    description: `Portfolio Jair Pérez`,
    image: "/photo.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://oquendo.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://oquendo.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jair Pérez" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@perezjair94" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {children}
    </div>
  );
}
