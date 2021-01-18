//API base url
const baseUrl = "https://api.rawg.io/api/";

//Getting time for updating api's content
const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getDay = () => {
  const day = new Date().getDate;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Getting all
const currentDay = getDay();
const currentMonth = getMonth();
const currentYear = new Date().getFullYear;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games, upcoming, new games
const popularGames = `games?key=53e768ce51944b93acfc4d76d3f0f19d&dates=${lastYear}-${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate}-${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear}-${currentDate}&ordering=-released&page_size=10`;
export const popularGamesUrl = () => `${baseUrl}${popularGames}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcomingGames}`;
export const newGamesUrl = () => `${baseUrl}${newGames}`;

//Game details
export const gameDetailsUrl = (game_id) => `${baseUrl}games/${game_id}`;
