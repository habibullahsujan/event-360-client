export const getServices = async () => {
  return await fetch("https://event-360-backend-kappa.vercel.app/api/v1/services").then((res) =>
    res.json()
  );
};
