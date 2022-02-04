export const getDate = (date: string) => {
    let parseDate = new Date(date);
    let day = parseDate.getDay() < 10 ? '0' + parseDate.getDay() : parseDate.getDay();
    let month = parseDate.getMonth() < 10 ? '0' + parseDate.getMonth() : parseDate.getMonth();

    return `${day}.${month}.${parseDate.getFullYear()} г.`;
};
