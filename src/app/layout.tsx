import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import "leaflet/dist/leaflet.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CV - Marko Djokic</title>
        <meta name="google-site-verification" content="-22KjBq1bKGqdKFUCev4t_pvEOnnv9fKm1QIqX-lfTo" />
        <meta name="description" content="Portfolio CV Marko Đokić Software Engineer React .NET Vue.js Nuxt Next Dev Developer Frontend Backend" />
        <meta name="keywords" content="Portfolio CV Marko Đokić Software Engineer React .NET Vue.js Nuxt Next Dev Developer Frontend Backend" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.markodjokic.dev/" />
        <meta property="og:title" content="Portfolio CV Marko Đokić Software Engineer React .NET Vue.js Nuxt Next Dev" />
        <meta property="og:description" content="Portfolio CV Marko Đokić Software Engineer React .NET Vue.js Nuxt Next Dev Developer Frontend Backend" />
        <meta property="og:image" content="https://www.slepsluzbaangel.com/_next/image?url=%2Fstatic%2Fimages%2Fimage2.png&w=2048&q=75" />
        <meta property="og:url" content="https://www.slepsluzbaangel.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Slep sluzba" />
        <meta name="twitter:description" content="Slep sluzba Angel Pozarevac 069 660 620." />
        <meta name="twitter:image" content="https://www.slepsluzbaangel.com/_next/image?url=%2Fstatic%2Fimages%2Fimage2.png&w=2048&q=75" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Slep sluzba",
              description: "Slep sluzba Angel Pozarevac 069 660 620.",
              url: "https://www.slepsluzbaangel.com/",
              telephone: "+38169660620",
              address: {
                "@type": "PostalAddress",
                "streetAddress": "8 marta 4A",
                "addressLocality": "Požarevac",
                "postalCode": "12000",
                "addressCountry": "RS"
              },
            }),
          }}
        />
      </head>
      <body >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar></ResponsiveAppBar>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
