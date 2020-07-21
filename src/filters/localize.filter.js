import store from '../store'
import ru from '../locales/ru'
import en from '../locales/en'

const loc = {
  'ru-RU': ru,
  'en-US': en
};

export default function localizeFilter(key) {
  console.log(key);
  const locale = store.getters.info.locale || 'ru-RU';
  return loc[locale][key] || `[Localize err]: key ${key} not found`
}
