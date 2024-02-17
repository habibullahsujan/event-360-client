export const getRecentEvents = async () => {
  return await fetch("https://event-360-backend-kappa.vercel.app/api/v1/recent-events").then((res) =>
    res.json()
  );
};
