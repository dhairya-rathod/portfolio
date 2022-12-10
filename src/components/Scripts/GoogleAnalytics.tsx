import Script from "next/script";
import React from "react";

import { GTAG } from "../../constants";

const GoogleAnalytics = React.memo(() => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${GTAG}', {
					page_path: window.location.pathname,
				});
				`}
      </Script>
    </>
  );
});

GoogleAnalytics.displayName = "GoogleAnalytics";

export default GoogleAnalytics;
