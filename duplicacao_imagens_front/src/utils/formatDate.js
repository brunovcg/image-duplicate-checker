export const formatDate = (date) => {
  let data = new Date(date);

  let day = data.getDate().toString().padStart(2, "0");
  let month = (data.getMonth() + 1).toString().padStart(2, "0");
  let year = data.getFullYear();

  return `${day}/${month}/${year}`;
};
