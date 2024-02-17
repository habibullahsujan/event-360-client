export const getEvents = async () => {
  return await fetch(
    "https://event-360-backend-kappa.vercel.app/api/v1/events"
  ).then((res) => res.json());
};
