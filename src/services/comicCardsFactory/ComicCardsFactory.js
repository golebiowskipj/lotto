import throttle from 'lodash.throttle';

import card1bg from './images/bgs/1/card1bg.jpg';
import card2bg from './images/bgs/2/card2bg.jpg';
import card3bg from './images/bgs/3/card3bg.jpg';
import card4bg from './images/bgs/4/card4bg.jpg';
import card5bg from './images/bgs/5/card5bg.jpg';
import card6bg from './images/bgs/6/card6bg.jpg';
import card1bgm from './images/bgs/1/card1bgm.jpg';
import card2bgm from './images/bgs/2/card2bgm.jpg';
import card3bgm from './images/bgs/3/card3bgm.jpg';
import card4bgm from './images/bgs/4/card4bgm.jpg';
import card5bgm from './images/bgs/5/card5bgm.jpg';
import card6bgm from './images/bgs/6/card6bgm.jpg';
import card1cloud1 from './images/clouds/1/card1cloud1.svg';
import card1cloud2 from './images/clouds/1/card1cloud2.svg';
import card1cloud3 from './images/clouds/1/card1cloud3.svg';
import card1cloud4 from './images/clouds/1/card1cloud4.svg';
import card2cloud1 from './images/clouds/2/card2cloud1.svg';
import card2cloud2 from './images/clouds/2/card2cloud2.svg';
import card2cloud3 from './images/clouds/2/card2cloud3.svg';
import card3cloud1 from './images/clouds/3/card3cloud1.svg';
import card3cloud2 from './images/clouds/3/card3cloud2.svg';
import card3cloud3 from './images/clouds/3/card3cloud3.svg';
import card4cloud1 from './images/clouds/4/card4cloud1.svg';
import card4cloud2 from './images/clouds/4/card4cloud2.svg';
import card4cloud3 from './images/clouds/4/card4cloud3.svg';
import card4cloud4 from './images/clouds/4/card4cloud3.svg';
import card5cloud1 from './images/clouds/5/card5cloud1.svg';
import card5cloud2 from './images/clouds/5/card5cloud2.svg';
import card5cloud3 from './images/clouds/5/card5cloud3.svg';
import card5cloud4 from './images/clouds/5/card5cloud3.svg';
import card6cloud1 from './images/clouds/6/card6cloud1.svg';
import card6cloud2 from './images/clouds/6/card6cloud2.svg';
import card6cloud3 from './images/clouds/6/card6cloud3.svg';
import card6cloud4 from './images/clouds/6/card6cloud3.svg';

const aZ = 'zartownis';
const aM = 'marzycielka';
const aK = 'kierownik';
class ComicCardData  {
    constructor(stage, height, background, actors, dialogues) {
        this.stage = stage;
        this.height = height;
        this.background = background;
        this.actors = actors;
        this.dialogues = dialogues;
    }
}

const card1 = new ComicCardData(
    1, 
    671, 
    card1bg, 
    [
        {id:1, name: aK},
        {id:2, name: aZ},
        {id:3, name: aM}
    ], 
    [
        {id: 1, actorId: 1, cloudImg: card1cloud1, cloudText: 'Za chwilę wejdziemy do świata kul… kultowych gier LOTTO.' },
        {id: 2, actorId: 2, cloudImg: card1cloud2, cloudText: 'I to mnie kręci!' },
        {id: 3, actorId: 3, cloudImg: card1cloud3, cloudText: 'A mnie rozmarza…' },
        {id: 4, actorId: 1, cloudImg: card1cloud4, cloudText: 'Zarejestrujmy się i zakręćmy po kody promocyjne!' },
    ]
);

const card2 = new ComicCardData(
    2, 
    671, 
    card2bg, 
    [
        {id:1, name: aK},
        {id:2, name: aM},
        {id:3, name: aZ}
    ], 
    [
        {id: 1, actorId: 1, cloudImg: card2cloud1, cloudText: 'Teraz zaangażujcie obie półkule mózgowe. Ustalcie hasło i sześciocyfrowy kod PIN.' },
        {id: 2, actorId: 2, cloudImg: card2cloud2, cloudText: 'PIN będzie potrzebny w kontakcie z Obsługą Klienta. Zapiszę go w bezpiecznym miejscu. Może znów dodzwonię się do tego miłego pana…' },
        {id: 3, actorId: 3, cloudImg: card2cloud3, cloudText: 'He, he, albo do tej PIN-up girl…' },
    ]
);

const card3 = new ComicCardData(
    3, 
    470, 
    card3bg, 
    [
        {id:1, name: aK},
        {id:2, name: aZ},
    ], 
    [
        {id: 1, actorId: 1, cloudImg: card3cloud1, cloudText: 'Wpisujemy teraz PESEL, serię i numer dowodu osobistego...' },
        {id: 2, actorId: 2, cloudImg: card3cloud2, cloudText: 'Nie no, w kulki sobie lecisz!' },
        {id: 3, actorId: 1, cloudImg: card3cloud3, cloudText: 'Wstęp tylko dla pełnoletnich. Sorry za zapory.' },
    ]
);

const card4 = new ComicCardData(
    4, 
    671, 
    card4bg, 
    [
        {id:1, name: aZ},
        {id:2, name: aM},
        {id:3, name: aK},
    ], 
    [
        {id: 1, actorId: 1, cloudImg: card4cloud1, cloudText: 'To może jeszcze numer konta mam podać?' },
        {id: 2, actorId: 3, cloudImg: card4cloud2, cloudText: 'Dokładnie tak ☺' },
        {id: 3, actorId: 2, cloudImg: card4cloud3, cloudText: 'Ach… bo na to konto prześlecie środki z wygranej…' },
        {id: 3, actorId: 3, cloudImg: card4cloud4, cloudText: 'To też. I jeszcze tak nas zobowiązuje ustawa o przeciwdziałaniu praniu pieniędzy i finansowaniu terroryzmu.' },
    ]
);

const card5 = new ComicCardData(
    5, 
    640, 
    card5bg, 
    [
        {id:1, name: aK},
        {id:2, name: aZ},
        {id:3, name: aM},
    ], 
    [
        {id: 1, actorId: 1, cloudImg: card5cloud1, cloudText: 'Prosimy Was o ustawienie limitów gry – czasowego i kwotowego.' },
        {id: 2, actorId: 2, cloudImg: card5cloud2, cloudText: 'Teraz to mnie wkręcasz.' },
        {id: 3, actorId: 3, cloudImg: card5cloud3, cloudText: 'Ach, to jest cool pomysł! Przy takim wyborze gier łatwo zapomnieć o całym świecie.' },
        {id: 3, actorId: 2, cloudImg: card5cloud4, cloudText: 'To co? Turlamy się już do gry?' },
    ]
);

const card6 = new ComicCardData(
    6, 
    728, 
    card6bg, 
    [
        {id:1, name: aK},
        {id:2, name: aM},
        {id:3, name: aZ},
    ], 
    [
        {id: 1, actorId: 1, cloudImg: card6cloud1, cloudText: 'Zakręcony jesteś spektakula… rnie. Jeszcze moment kul… kulminacyjny. Potwierdźcie, że środki na grę pochodzą z legalnego źródła. Np. z umowy o pracę.' },
        {id: 2, actorId: 2, cloudImg: card6cloud2, cloudText: 'Albo o dzieło. Tak mam w mojej wymarzonej pracy!' },
        {id: 3, actorId: 3, cloudImg: card6cloud3, cloudText: 'Ja mam własną działalność – standuper… Ludzie turlają się ze śmiechu.' },
        {id: 3, actorId: 1, cloudImg: card6cloud4, cloudText: 'Wszystko jasne. Na koniec zaznaczcie właściwe zgody i wkręcamy się do gry!' },
    ]
);


const height = window.innerHeight - 49 - 91; 


const card1m = {...card1, background: card1bgm, height: height}
const card2m = {...card2, background: card2bgm, height: 523}
const card3m = {...card3, background: card3bgm, height: 523}
const card4m = {...card4, background: card4bgm, height: 523}
const card5m = {...card5, background: card5bgm, height: 523}
const card6m = {...card6, background: card6bgm, height: 523}

// 90vw   h/w = 1.6
export  const comicCards = [card1, card2, card3, card4, card5, card6];
export const comicCardsm = [card1m, card2m, card3m, card4m, card5m, card6m];

// Cheatsheet
// ComicCard.propTypes = {
//     data: PropTypes.shape(
//         {
//             stage: PropTypes.number.isRequired,
//             height: PropTypes.number.isRequired,
//             background: PropTypes.string.isRequired,
//             actors: PropTypes.arrayOf(PropTypes.shape({
//                 id: PropTypes.number.isRequired,
//                 name: PropTypes.string.isRequired
//             })),
//             dialogues: PropTypes.arrayOf(PropTypes.shape({
//                 id: PropTypes.number.isRequired,
//                 actorId: PropTypes.number.isRequired,
//                 cloudImg: PropTypes.string.isRequired,
//                 cloudText: PropTypes.string.isRequired
//             }))
//         }
//     )
// }

