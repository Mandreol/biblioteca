export default function useCurrentDate() {
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  let currentDate = getCurrentDate();

  return currentDate;
}
