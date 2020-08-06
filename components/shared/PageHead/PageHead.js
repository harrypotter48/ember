import Head from "next/head";

const PageHead = ({ metadata }) => {
  const { title, description = process.env.APPNAME, path = "/" } = metadata;
  const pageTitle = title
    ? `${title} – ${process.env.APPNAME}`
    : `${process.env.APPNAME}`;

  // const thumbnailUrl = `https://screens.myserver.com/?url=${config.appUrl}${path.slice(1)}${(path.includes('?') ? '&' : '?')}thumbnail=true`
  const iconUrl = "/icon.png";
  const fonts = [["Source Sans Pro", "300,400,700"]];

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="en" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      {fonts.map((font) => (
        <link
          key={font[0]}
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${`${font[0].replace(
            / /g,
            "+"
          )}${font[1] ? ":" + font[1] : ""}`}&display=swap`}
        />
      ))}

      <meta property="og:site_name" content={process.env.APPNAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={"en_US"} />

      <link rel="apple-touch-icon" href={iconUrl} />

      {/*
        <meta property='og:image' content={thumbnailUrl} />
        <link rel='apple-touch-startup-image' href='' />
        <link rel='canonical' href={websiteUrl} />
        <meta property='og:url' content={websiteUrl} />
      */}
    </Head>
  );
};

export default PageHead;
