const formatDate = (date: string): string => {
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(Date.parse(date));
  return formattedDate;
};
export default formatDate;
