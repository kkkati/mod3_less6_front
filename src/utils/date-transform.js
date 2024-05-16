export function dateTransform(date, separator = ".") {
  if (date instanceof Date) {
    let dateArray = [
      addZerro(date.getDate()),
      addZerro(date.getMonth() + 1),
      date.getFullYear(),
    ];
    return dateArray.join(separator);
  }
}
//добавление 0 дня однозначных чисел
const addZerro = (n) => {
  if (n < 10) {
    return "0" + n;
  } else return n;
};
