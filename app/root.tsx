import { Outlet, Scripts } from "@remix-run/react";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Frontend for the socker."
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>Socker-fe</title>
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <div id="root">
          <Outlet />
          <Scripts />
        </div>
      </body>
    </html>
  );
}
