import tnw from './img/tnw.jpg';
import plugged from './img/plugged.jpg';
import neural from './img/neural.jpg';
import shift from './img/shift.jpg';
import growthQuarters from './img/growth-quarters.jpg';
import hardfork from './img/hardfork.jpg';
import houseTalent from './img/house-talent.jpg';
import finance from './img/future-finance.jpg';
import readme from './img/readme.jpg';
import dutchDisruptors from './img/dutch-disruptors.jpg';

const headerNews = [
  {
    name: 'GENERAL',
    items: [
      {
        heading: 'Latest',
        description: 'The latest tech news',
        image: tnw,
      },
    ],
  },
  {
    name: 'CHANNELS',
    items: [
      {
        heading: 'Plugged',
        description: 'Your sardonic source for consumer tech stories',
        image: plugged,
      },
      {
        heading: 'Neural',
        description: 'Human-centric AI news and analysis',
        image: neural,
      },
      {
        heading: 'Shift',
        description: 'Driving the future of sustainable mobility',
        image: shift,
      },
      {
        heading: 'Growth Quarters',
        description: 'No-nonsense stories about startup growth',
        image: growthQuarters,
      },
      {
        heading: 'Hard Fork',
        description: 'Inside money, markets, and Big Tech',
        image: hardfork,
      },
      {
        heading: 'House of Talent',
        description: 'The hottest new jobs in tech',
        image: houseTalent,
      },
    ],
  },
  {
    name: 'SPONSORED CHANNELS',
    items: [
      {
        heading: 'Future of Finance',
        description: 'Help build the bank of the future',
        image: finance,
      },
      {
        heading: 'Read Me',
        description: 'Coding for Public Service',
        image: readme,
      },
      {
        heading: 'Dutch Disruptors',
        description: 'Small country, big ideas',
        image: dutchDisruptors,
      },
    ],
  },
];

export default headerNews;
