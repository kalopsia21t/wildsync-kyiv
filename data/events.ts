export type EventT = {
  slug: string;
  title: string;
  img: string;
  date: string;
  location: {
    title: string;
    link: string;
  };
  posterAuthor: string;
  description: {
    uk: string;
    en: string;
  };
  lineup: string;
};

export const events: EventT[] = [
  {
    slug: "wildsync-26-09-2026-namir",
    title: "Wildsync 26/09/2026 (Namir)",
    img: "/posters/26_09_2026_Namir.jpg",
    date: "26 September 2026",
    location: {
      title: "Namir",
      link: "https://www.instagram.com/barna.namir",
    },
    lineup: "Strictly b2b Nast-X, Nikitah, Siedin",
    posterAuthor: " Dima Phase",
    description: {
      uk: "Київ. Велика Житомирська увага, Jungle! Wildsync відкриває осінній сезон черговою фірмовою вечіркою! В цей раз до лайнапу приєднається Nikitah з ексклюливним вініловим селекшном Bass музики, яка буде домінувати на відкритому танцполі, тож будьте готові відчути повільний грув та безкопромісний кач на свіжому повітрі. З боку резидентів Strictly b2b Nast-x здійснять Jungle Race по двогодинному треку різноманітного саунду, який задасть настрій і темп вечірки. Абсолютна імпровізація і стильний top notch селекшн! Непередбачуваний DJ Siedin зібрав потужний арсенал платівок, який не залишить вільного місця на танцполі, вражаючий ефект під час його сету знайомий багатьом! Вхід: 200 uah",
      en: "Kyiv. Velyka Zhytomirska, attention, Jungle! Wildsync opens the autumn season with a brand new party! This time Nikitah joins the lineup with an exclusive vinyl selection of Bass music that will dominate the open dance floor, so be ready to feel the slow groove and seamless flow in the fresh air. From the residents, Strictly b2b Nast-x will perform a Jungle Race over a two-hour track of diverse sounds that will set the mood and pace for the evening. Absolute improvisation and stylish top-notch selection! The unpredictable DJ Siedin has gathered a powerful arsenal of records that will leave no free space on the dance floor, and his set effects are familiar to many! Entry: 200 uah"
    }
  },
  {
    slug: "wildsync-15-08-2026-namir",
    title: "Wildsync 15/08/2026 (Namir)",
    img: "/posters/15_08_2026_Namir.jpg",
    date: "15 August 2026",
    location: {
      title: "Namir",
      link: "https://www.instagram.com/barna.namir",
    },
    lineup: "Strictly, D White, Krueger",
    posterAuthor: " Mark Sieriakov",
    description: {
      uk: "Wildsync презентує фірмову вечірку в «Намірі. Турбомікс Dub, Halftime, Jungle та Tekno, створений досвідченими діджеями й селекторами, які знають, як тримати тиск на танцполі. Тож не пропусти свій потяг у джунглі, а саундтрек ми вже підготували!",
      en: "Wildsync presents a brand new party at «Namir». Turbo-mix of Dub, Halftime, Jungle and Tekno, created by experienced DJs and selectors who know how to keep the pressure on the dance floor. So don't miss your train into the jungle, and we've already prepared the soundtrack!"
    }
  },
  {
    slug: "wildsync-05-07-2026-namir",
    title: "Wildsync 05/07/2026 (Namir)",
    img: "/posters/05_07_2026_Namir.png",
    date: "5 July 2026",
    location: {
      title: "Namir",
      link: "https://www.instagram.com/barna.namir",
    },
    posterAuthor: "Mark Sieriakov",
    lineup: "Maze Of Death b2b Siedin, Roi_S, Strictly",
    description: {
      uk: "В Барній Намір крю збирається на довгоочікуваний массів, в програмі хардкорна еклектика - від ліквід фанку та рагга джанглу до хеппі хардкору і фрітекно. See ya ✌️ ",
      en: "In Barna Namir, the crew gathers for a long-awaited massive, with a hardcore eclecticism program - from liquid funk and ragga jungle to happy hardcore and freetekno. See ya ✌️ "
    },
  },
  {
    slug: "wildsync-24-04-2026-namir",
    title: "Wildsync 24/04/2026 (Namir)",
    img: "/posters/24_04_2026_Namir.jpg",
    date: "24 April 2026",
    location: {
      title: "Namir",
      link: "https://www.instagram.com/barna.namir",
    },
    posterAuthor: "Mark Sieriakov",
    lineup: "Strictly, Omen",
    description: {
      uk: "Якщо цей постер зачепив, значить варто запам’ятати дату. 24 квітня вечірка Wildsync у «Намірі». 4 години Jungle та Drum’n’Bass з вінілу від Strictly та Omen з гостьовим сетом. Не витрачай час на нудні бари, залітай на звук джунглів у центрі БЖ.",
      en: "If this poster caught your attention, it means you should remember the date. On April 24th, Wildsync returns to «Namir». 4 hours of Jungle and Drum’n’Bass from vinyl by Strictly and Omen with a guest set. Don't waste time at boring bars, dive into the sound of the jungle in the heart of Kyiv."
    }
  },
  {
    slug: "rumble-in-the-jungle-14-03-2026-kosoy-zhuk",
    title: "Rumble in the Jungle 14/03/2026 (Kosoy Zhuk)",
    img: "/posters/14_03_2026_Kosoy_Juke.jpg",
    date: "14 March 2026",
    location: {
      title: "Kosoy Zhuk",
      link: "https://www.instagram.com/kosoy_zhuk",
    },
    posterAuthor: "Anabeoz",
    lineup: "Maze Of Death, Strictly",
    description: {
      uk: "What’s gwarnin!? Пані та панове, джангл двіжи в барі Косой Жук це завжди пожежа, і цієї суботи я та Андрій Strictly збираємся пограти для вас свої рідкісні знахідки та круті новинки. Запрошуємо вас завітати на mass і зарядитись енергією справжнього андерграунду.",
      en: "What’s gwarnin!? Ladies and gentlemen, parties at Kosoy Zhuk is always a fire, and this Saturday I and Andrew Strictly are gathering to play some rare finds and cool new releases for you. We invite you to come to the party and charge up with the energy of the real underground."
    },
  },
  {
    slug: "wildsync-17-01-2026-namir",
    title: "Wildsync 17/01/2026 (Namir)",
    img: "/posters/17_01_2026_Namir.jpg",
    date: "17 January 2026",
    location: {
      title: "Namir",
      link: "https://www.instagram.com/barna.namir",
    },
    posterAuthor: "Mark Sieriakov",
    lineup: "Strictly, Nast-X",
    description: {
      uk: "Wildsync знову збирає рейв-спільноту! Оригінальний і ексклюзівний вініловий селекшн від Strictly та Nast-X. Фірмовий Jungle & Drum’n’Bass тейковер — гучно, щільно і по-справжньому.",
      en: "Wildsync brings the rave community together again! An original and exclusive vinyl selection from Strictly and Nast-X. The brand new Jungle & Drum’n’Bass — loud, dense and authentically."
    },
  },
  {
    slug: "wildsync-04-10-2025-hvlv",
    title: "Wildsync 04/10/2025 (HVLV)",
    img: "/posters/04_10_2025_HVLV.jpg",
    date: "04 October 2025",
    location: {
      title: "HVLV",
      link: "https://www.instagram.com/hvlv.music",
    },
    posterAuthor: "Dima Phase",
    lineup: "P.one, Strictly, Siedin",
    description: {
      uk: "Wildsync повертається з фірмовим Jungle та Drum’n’Bass тейковером від трьох резидентів: Strictly, Siedin та P.One, кожен з яких представить унікальний селекшн стилю від раннього Hardcore до сучасного Jungle продакшену. У цих хлопців є потужна зброя на вінілі, якої нема ні в кого в радіусі 1000 кілометрів, тож не пропусти!",
      en: "Wildsync returns with a brand new Jungle and Drum’n’Bass from three residents: Strictly, Siedin and P.One, each presenting a unique selection style from early Hardcore to modern Jungle production. These guys have a powerful arsenal on vinyl that you won't find anywhere else within a 1000-kilometer radius, so don't miss out!"
    }
  },
  {
    slug: "wildsync-10-08-2025-hvlv",
    title: "Wildsync 10/08/2025 (HVLV)",
    img: "/posters/10_08_2025_HVLV.JPG",
    date: "10 August 2025",
    location: {
      title: "HVLV",
      link: "https://www.instagram.com/hvlv.music",
    },
    posterAuthor: "Max Kowalski",
    lineup: "Maze of Death b2b P.one, Vanya Bios, Strictly, Siedin",
    description: {
      uk: "Рейв-спільното, зустрічаємось на танцях під круті вінілові селекції від досвідчених джанглістів! Vanya Bios — діджей і промоутер із Дніпра, який розпочав свій шлях у 1999 році. З перших днів був відданим шанувальником ламаних ритмів. У 2002-му здобув 2 місце на чемпіонаті Scratch Master Ukraine, а згодом активно гастролював Україною та Східною Європою. У 2011 році взяв творчу паузу, що тривала 12 років, переїхавши за кордон. У 2023-му повернувся до України й вирішив знову зануритися в музичну діяльність, поєднуючи організацію вечірок із благодійністю та зборами донатів на ЗСУ. Як і в нульових, Іван віддає перевагу вінیлу та похмурим ламаним жанрам — халфтайм, техстеп, дíповий джангл і драм-н-бейс. Maze of Death — дíджей та вíнíловий дíґер родом із Херсона. Maze — завзятий джанглíст, про його колекцíю плат³вок із джанглом ходять чутки в дíджейських чатах Києва. Виступав із сетами в Mezzanine, HVLV, Otel’, а також записував м³кси для Gasoline Radio та 20ft Radio, у яких шоукейсив р³зноман³тний хардкорний саунд. P.one — київський дíджей і продюсер. Його стиль — поєднання джазового інтел³дженту та грувового джамп-апу другої половини 90-х. Вíн збирає плат³вки виключно з олдскулом, а його сети — це справжня подорож до золотої ери драм-н-бейсу. Siedin — досв³дчений джангл³ст родом із Луганська, який переїхав до Києва у 2014 роц³. М³кси Тол³ка — це поєднання олдскульної класики 1994–95 рок³в із нюскульним продакшеном, витриманим у найкращих традиц³ях. Тол³к — справжн³й бадман, який майстерно м³ксує пекельний рагга-джангл із раритетними грувами та атмосферним звучанням. Strictly — продюсер, дíджей і резидент 20ft Radio. Останн²й рел²з Андр²я на Scared Money — один із найгучн²ших цього року в українському джангл³ та драм-н-бейс³. Strictly полюбляє похмурий саунд техстепу, драмфанку та даркового рагга-джангла. В²д його сету варто оч²кувати м²кс жанр²в і епох хардкорно¿ музики, а також ексклюзивний матер²ал на дабплейтах.",
      en: "Rave community, let's meet up for dancing with the cool vinyl selections from experienced jungle DJs! Vanya Bios is a DJ and promoter from Dnipro who started his journey in 1999. From the beginning he was dedicated to the love of warped rhythms. In 2002 he won second place at the Scratch Master Ukraine championship and later actively toured Ukraine and Eastern Europe. In 2011 he took a creative break that lasted 12 years before moving abroad. In 2023 he returned to Ukraine and decided to dive back into music activity by combining party organization with charity and fundraising for the Ukrainian Army (ZSU). Like in his early days, Ivan favors vinyl and gloomy warped genres—half-time, techstep, deep jungle and drum & bass sounds. Maze of Death is a DJ and vinyl collector from Kherson. Maze is a dedicated jungle DJ whose record collection is talked about in Kyiv's DJ chats. He has performed with sets at Mezzanine, HVLV and Otel', as well as recording mixes for Gasoline Radio and 20ft Radio where he showcases diverse hardcore soundscape elements P.one is a Kiev-based DJ and producer whose style combines jazz sophistication with groovy jump-up vibes from the second half of the '90s.He collects records exclusively from the oldschool era,and his sets are a true journey to the golden age of drum & bass.Siedin is an experienced jungle DJ from Lugansk who moved to Kyiv in 2014.Mixes by Tolik are a combination of oldschool classics from 1994–95 and modern production techniques rooted in the best traditions.Tolik is a real badman who masterfully mixes hellish ragga-jungle with rare grooves and atmospheric soundscapes.Strictly is a producer,DJ,and resident of 20ft Radio.His latest release on Scared Money is one of the loudest tracks this year in Ukrainian jungle and drum & bass.Strictly loves gloomy techstep,dramatic funk,and dark ragga-jungle sounds.From his sets you can expect a mix of genres and eras from hardcore music,and exclusive material on dubplates."
    }
  },
  {
    slug: "balcony_wildsync-20-06-2025-mezzanine",
    title: "Balcony x Wildsync 20/06/2025 (Mezzanine)",
    img: "/posters/20_06_2025_Mezzanine.png",
    date: "20 June 2025",
    location: {
      title: "Mezzanine",
      link: "https://www.instagram.com/mezzanine_kyiv",
    },
    posterAuthor: "Max Kowalski",
    lineup: "P.one, Siedin",
    description: {
      uk: "Зустрічаємось серед подільських джунглів аби насолодитись атмосферним ламаним саундом від резидентів Wildsync. Відкриє вечір P.ONE з селекцією олдскульного інтеледжента та атмосферного драмнбейса кінця 90х. За ним SIEDIN, дрифтуючи на хвилях низьких частот, закрутить вас у справжню тропічну лихоманку.",
      en: "Let's meet up among the jungle vibes to enjoy the atmospheric warped sounds from Wildsync residents. The evening will be opened by P.ONE with a selection of oldschool intellect and atmospheric drum & bass from the end of the 90s. Followed by SIEDIN, drifting on waves of low frequencies, he will take you on a real tropical fever."
    }
  },
  {
    slug: "wildsync-10-05-2025-mezzanine",
    title: "Wildsync 10/05/2025 (Mezzanine)",
    img: "/posters/10_05_2025_Mezzanine.jpg",
    date: "10 May 2025",
    location: {
      title: "Mezzanine",
      link: "https://www.instagram.com/mezzanine_kyiv",
    },
    posterAuthor: "Max Kowalski",
    lineup: "Maze of Death, Strictly, Siedin",
    description: {
      uk: "Цього разу в лайнапі Strictly — селектор та продюсер, один з найдосвідченіших представників локальної джангл сцени, який нещодавно відзначився релізом на британському лейблі Scared Money. Його фірмовий стиль — це суміш джангла, драмфанка та техстепа. Компанію йому складе Siedin з підбіркою хардкор брейкбіта та Maze з діповим зануренням в рагга і дарксайд.",
      en: "This time in the lineup is Strictly — a selector and producer, one of the most experienced representatives of the local jungle scene, who recently made a name for himself with a release on the British label Scared Money. His signature style is a mix of jungle, drum & bass, and techstep. He will be joined by Siedin with a hardcore breakbeat selection and Maze with a deep dive into reggae and darkside."
    }
  },
  {
    slug: "wildsync-15-02-2025-mezzanine",
    title: "Wildsync 15/02/2025 (Mezzanine)",
    img: "/posters/15_02_2025_Mezzanine.jpeg",
    date: "15 February 2025",
    location: {
      title: "Mezzanine",
      link: "https://www.instagram.com/mezzanine_kyiv",
    },
    posterAuthor: "Max Kowalski",
    lineup: "Maze Of Death, Siedin, P.one, Igor Zadorozhniy",
    description: {
      uk: "Приготуйся до справжньої подорожі в часі разом з WILDSYNC, де сирий та невимушений вайб олдскульного джанглу поєднуються з сучасним драм’н’бейсом і разом набувають нових форм; де звуки змінюють реальність і разом зі світлом перетворюють простір на рухоме полотно.",
      en: "Get ready for a real journey through time with WILDSYNC, where the raw and unpolished vibe of oldschool jungle merges with modern drum & bass, creating new forms; where sounds transform reality and together with the light turn the space into a moving canvas."
    }
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug) || null;
}

export function isUpcomingEvent(date: string): boolean {
  return new Date(date).getTime() >= Date.now();
}
