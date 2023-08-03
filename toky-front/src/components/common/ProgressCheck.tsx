export function ProgressCheck(targetDate: Date) {
  const currentDate = new Date();
  const notOver = currentDate <= targetDate ? true : false;
  return notOver;
}
