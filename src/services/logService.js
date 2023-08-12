import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn: "https://d462160dfc2d440fa77e84a4f27c7689@o4505585064345600.ingest.sentry.io/4505587258884096",
    integrations: [
      new Sentry.BrowserTracing({
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost", "https:yourserver.io/api/"],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}
function log(error) {
  Sentry.captureException(error);
}

export default { init, log };
