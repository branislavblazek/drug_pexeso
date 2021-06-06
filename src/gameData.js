import Alkohol from './images/alkohol.png';
import Amfetamin from './images/amfetamin.jpg';
import Analgetika from './images/analgetika.jpg';
import Extaza from './images/extaza.jpg';
import Halucinogen from './images/halucinogen.jpg';
import Heroin from './images/heroin.jpg';
import Hypnotika from './images/hypnotika.jpg';
import Kofein from './images/kofein.jpg';
import Kokain from './images/kokain.jpg';
import Krek from './images/krek.jpg';
import Krokodil from './images/krokodil.png';
import LSD from './images/lsd.jpg';
import Marihuana from './images/marihuana.jpg';
import Nikotin from './images/nikotin.jpg';
import Opium from './images/opium.png';
import Pervitin from './images/pervitin.jpg';
import Salvia from './images/salvia.jpg';
import Sedativa from './images/sedativa.jpg';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const data = [
    {
        id: 'alkohol-name',
        pair: 'alkohol-image',
        value: 'Alkohol',
    },
    {
        id: 'alkohol-image',
        pair: 'alkohol-name',
        value: Alkohol,
    },
    {
        id: 'amfetamin-name',
        pair: 'amfetamin-image',
        value: 'Amfetamín',
    },
    {
        id: 'amfetamin-image',
        pair: 'amfetamin-name',
        value: Amfetamin,
    },
    {
        id: 'analgetika-name',
        pair: 'analgetika-image',
        value: 'Analgetika',
    },
    {
        id: 'analgetika-image',
        pair: 'analgetika-name',
        value: Analgetika,
    },
    {
        id: 'extaza-name',
        pair: 'extaza-image',
        value: 'Extáza',
    },
    {
        id: 'extaza-image',
        pair: 'extaza-name',
        value: Extaza,
    },
    {
        id: 'halucinogen-name',
        pair: 'halucinogen-image',
        value: 'Halucinogén',
    },
    {
        id: 'halucinogen-image',
        pair: 'halucinogen-name',
        value: Halucinogen,
    },
    {
        id: 'heroin-name',
        pair: 'heroin-image',
        value: 'Heroín',
    },
    {
        id: 'heroin-image',
        pair: 'heroin-name',
        value: Heroin,
    },
    {
        id: 'hypnotika-name',
        pair: 'hypnotika-image',
        value: 'Hypnotiká',
    },
    {
        id: 'hypnotika-image',
        pair: 'hypnotika-name',
        value: Hypnotika,
    },
    {
        id: 'kofein-name',
        pair: 'kofein-image',
        value: 'Kofein',
    },
    {
        id: 'kofein-image',
        pair: 'kofein-name',
        value: Kofein,
    },
    {
        id: 'kokain-name',
        pair: 'kokain-image',
        value: 'Kokain',
    },
    {
        id: 'kokain-image',
        pair: 'kokain-name',
        value: Kokain,
    },
    {
        id: 'krek-name',
        pair: 'krek-image',
        value: 'Krek',
    },
    {
        id: 'krek-image',
        pair: 'krek-name',
        value: Krek,
    },
    {
        id: 'krokodil-name',
        pair: 'krokodil-image',
        value: 'Krokodíl',
    },
    {
        id: 'krokodil-image',
        pair: 'krokodil-name',
        value: Krokodil,
    },
    {
        id: 'lsd-name',
        pair: 'lsd-image',
        value: 'LSD',
    },
    {
        id: 'lsd-image',
        pair: 'lsd-name',
        value: LSD,
    },
    {
        id: 'marihuana-name',
        pair: 'marihuana-image',
        value: 'Marihuana',
    },
    {
        id: 'marihuana-image',
        pair: 'marihuana-name',
        value: Marihuana,
    },
    {
        id: 'nikotin-name',
        pair: 'nikotin-image',
        value: 'Nikotín',
    },
    {
        id: 'nikotin-image',
        pair: 'nikotin-name',
        value: Nikotin,
    },
    {
        id: 'opium-name',
        pair: 'opium-image',
        value: 'Opium',
    },
    {
        id: 'opium-image',
        pair: 'opium-name',
        value: Opium,
    },
    {
        id: 'pervitin-name',
        pair: 'pervitin-image',
        value: 'Pervitín',
    },
    {
        id: 'pervitin-image',
        pair: 'pervitin-name',
        value: Pervitin,
    },
    {
        id: 'salvia-name',
        pair: 'salvia-image',
        value: 'Šalvia',
    },
    {
        id: 'salvia-image',
        pair: 'salvia-name',
        value: Salvia,
    },
    {
        id: 'sedativa-name',
        pair: 'sedativa-image',
        value: 'Sedatíva',
    },
    {
        id: 'sedativa-image',
        pair: 'sedativa-name',
        value: Sedativa,
    },
];

export const shuffled = shuffle(data);