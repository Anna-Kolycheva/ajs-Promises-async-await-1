import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => saving, // saving объект класса GameSaving
  (error) => error);
