/* eslint-disable quotes */
import 'reflect-metadata';
import { injectable } from 'inversify';
import { IMovieDao } from '@setup/interfaces';

@injectable()
export class MovieDao implements IMovieDao {
    async getNasaMovies(): Promise<any[]> {
        return [
            {
                adult: false,
                backdrop_path: '/dZsC1wAyOXfQMe2DjMhKlITMahm.jpg',
                genre_ids: [99],
                id: 706614,
                original_language: 'en',
                original_title: 'NASA & SpaceX: Journey to the Future',
                overview:
                    'A film crew was granted unprecedented access to NASA and to SpaceX headquarters, giving viewers a rare glimpse inside Launch Control and firsthand accounts from SpaceX founder and chief engineer Elon Musk, Bridentstine and the astronauts flying the mission: Bob Behnken and Doug Hurley.',
                popularity: 2.999,
                poster_path: '/oHqKd2jwRgL4BsgOqCv01hekvme.jpg',
                release_date: '2020-05-25',
                title: 'NASA & SpaceX: Journey to the Future',
                video: false,
                vote_average: 7.1,
                vote_count: 6,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 142087,
                original_language: 'en',
                original_title: 'NASA: 25 Years',
                overview: 'A collection of NASA films, from Project Mercury to the Space Shuttle.',
                popularity: 1.542,
                poster_path: '/jRK0BSOZagc0MdafNXTPXRgkHcx.jpg',
                release_date: '1983-01-01',
                title: 'NASA: 25 Years',
                video: false,
                vote_average: 8,
                vote_count: 2,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [99],
                id: 25240,
                original_language: 'en',
                original_title: 'NASA DREAMTiME',
                overview:
                    'A short 9 minute documentary, part of the DREAMTiME project, a commercial high-definition television (HDTV) system was flown on the Space Shuttle.  Most of the footage was shot during the STS-99 Mission on Space Shuttle Endeavour (OV-105)',
                popularity: 0.6,
                poster_path: null,
                release_date: '2001-01-01',
                title: 'NASA DREAMTiME',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: '/2wxL66qY94ZCLscd0msHoOBJnPj.jpg',
                genre_ids: [18, 10751],
                id: 350547,
                original_language: 'bs',
                original_title: 'Naša svakodnevna priča',
                overview:
                    "Family Susic lives everyday Bosnian story. Father Muhamed (63) is employed in a reputable company; mother Marija (60) is retired. Son Sasa (35), who spent the war in Army of Bosnia and Herzegovina, lives with his parents, while their daughter Senada (40) lives in Slovenia. Their life begins to fall apart because of father's dissatisfaction after his company is sold on the stock exchange, Sasa's negligent attitude towards work and family, Marija's breast cancer diagnose. When problems begin to line up Muhamed and Sasa realize that actually only family is important, that it is man's last oasis",
                popularity: 0.84,
                poster_path: '/zH2wbnociUzlhleSQ61HDFD401.jpg',
                release_date: '2015-09-02',
                title: 'Our Everyday Life',
                video: false,
                vote_average: 7,
                vote_count: 1,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [99],
                id: 516752,
                original_language: 'en',
                original_title: 'NASA: A Space Odyssey Vol. 2',
                overview:
                    'Chronicles the story of NASA. From the legacy of Gemini and those first breathtaking walks in space to playing golf on the moon and to everyday life in space where little things can present the most amusing problems -- like eating breakfast!',
                popularity: 0.933,
                poster_path: '/24CDWcMdvdJhzRyWAPVfOnziSFS.jpg',
                release_date: '2001-01-01',
                title: 'NASA: A Space Odyssey Vol. 2',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: '/qsVekwcPR62aM0cYZ2e8eQNipgO.jpg',
                genre_ids: [],
                id: 510202,
                original_language: 'en',
                original_title: 'NASA: Water On Mars',
                overview:
                    "NASA Press conference of September 28, 2015: New findings from NASA's Mars Reconnaissance Orbiter (MRO) provide the strongest evidence yet that liquid water flows intermittently on present-day Mars.",
                popularity: 0.6,
                poster_path: '/nxqTuMCqcdCVjP8bQi0iKlGF9Zq.jpg',
                release_date: '2015-01-01',
                title: 'NASA: Water On Mars',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [10770, 99],
                id: 574480,
                original_language: 'hr',
                original_title: 'Tvornica je naša!',
                overview:
                    'How to fight the incompetent, overnight licensed bankruptcy trustees and corrupted new owners of Croatian ITAS Prvomajska metal factory, whose goal is to destroy once profitable company and lay off all the workers? The ITAS workers solution was this – occupy it! All this is happening in Croatia, after the bloody war between ex-socialist Yugoslavian countries.',
                popularity: 0.6,
                poster_path: '/exwrGE96cFz2WcWw5GGtRbhnIaj.jpg',
                release_date: '2017-05-01',
                title: 'The Factory is Ours!',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [99],
                id: 369467,
                original_language: 'en',
                original_title: 'SYNTHESIS: NASA DATA VISUALIZATIONS',
                overview:
                    "When we feel The Earth beneath our feet, see it with our eyes, hear it when the wind blows, we perceive only the most obvious filaments of a far more complex place. Only with exquisite machines--spacecraft in orbit and powerful computers on the ground--can humanity begin to uncover the elegant nature of our complex home.  Presented here are a collection of data visualizations based on observations gathered by a fleet of spacecraft. In various depictions we see the currents of the world's oceans, changes in temperature and land cover over time, and precipitation as it cycles energy and water around our living planet.  But The Earth is only one part of a dynamic sphere, and with its companion The Moon nearby, we cannot hlep but remeber that our whole planet travels in a wider ocean. This video presents Earth's Moon with data gathered by the remarkable Lunar Reconnaissance Orbiter, an advanced probe designed to map our planetary companion in unprecedented detail.",
                popularity: 0.6,
                poster_path: null,
                release_date: '2015-01-01',
                title: 'SYNTHESIS: NASA DATA VISUALIZATIONS',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [99],
                id: 574347,
                original_language: 'de',
                original_title: 'Operation Mondlandung - Die NASA und die Ex-Nazis',
                overview: '',
                popularity: 1.114,
                poster_path: '/ytOYFqKHwM1kgZIw2nssJSonDqz.jpg',
                release_date: '2019-01-06',
                title: 'Operation Mondlandung - Die NASA und die Ex-Nazis',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 304033,
                original_language: 'en',
                original_title: 'Alien Contact: NASA Exposed',
                overview:
                    'Whistleblowers claim NASA not only knows about alien visitations but that they are in contact with extraterrestrials.',
                popularity: 0.6,
                poster_path: '/cFJ63qtCUkX9n5sWtdv7X37WRef.jpg',
                release_date: '2014-11-14',
                title: 'Alien Contact: NASA Exposed',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [10751, 99, 36],
                id: 346036,
                original_language: 'en',
                original_title: 'NASA 50 Years of Space Exploration',
                overview:
                    'Enjoy the epic story of NASA space exploration. This comprehensive edition takes you on an adventure showcasing the most thrilling moments in U.S. Space exploration, while also examining the heartbreaking events when tragedy struck.  It’s all here…. From the amazing flight of John Glenn in Friendship 7 to The “Eagle has landed” historic mission to the moon, and Skylab and more.  A Brilliant combination of adventure, science, history  - perfect for the whole family.',
                popularity: 0.6,
                poster_path: null,
                release_date: '2003-06-23',
                title: 'NASA 50 Years of Space Exploration',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 135109,
                original_language: 'en',
                original_title: 'NASA: The American Space Odyssey',
                overview:
                    'The complete NASA Historical Film Library included on thirty individual volumes. Some include introductions by the Astronauts themselves. See individual volumes for details.',
                popularity: 0.6,
                poster_path: null,
                release_date: '1971-04-12',
                title: 'NASA: The American Space Odyssey',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 436092,
                original_language: 'en',
                original_title: 'NASA: The First 25 Years',
                overview:
                    "This is the gripping and dynamic story of the USA's first 25 years of efforts to conquer the worlds beyond earth.",
                popularity: 0.6,
                poster_path: null,
                release_date: '1987-01-01',
                title: 'NASA: The First 25 Years',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: '/aq2ZaLNaOqROIJjwwsYJ53dAlN.jpg',
                genre_ids: [],
                id: 623794,
                original_language: 'en',
                original_title: 'NASA Going Nowhere Since 1958',
                overview:
                    'NASA Going Nowhere Since 1958: A simple film that explores NASA and its history with the Presidents of the United States.',
                popularity: 0.6,
                poster_path: '/exyBrpRrABWasWl4tUoereLesTB.jpg',
                release_date: '2019-07-20',
                title: 'NASA Going Nowhere Since 1958',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [99],
                id: 516753,
                original_language: 'en',
                original_title: 'NASA: A Space Odyssey Vol. 3',
                overview:
                    'What if other life was out there? Join us as we try to answer that most-asked question.l With millions of stars the possibility is more than that, it is a very high probability! Follow Pioneer 10 as is flies by our largest planet, the massive giant Jupiter, and learn the message Pioneer 10 carries as it leaves our solar system.. just in case!',
                popularity: 0.629,
                poster_path: '/plFlimWCNq2oGEeAwwFJzNgOAJH.jpg',
                release_date: '2001-01-01',
                title: 'NASA: A Space Odyssey Vol. 3',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [99],
                id: 516751,
                original_language: 'en',
                original_title: 'NASA: A Space Odyssey Vol. 1',
                overview:
                    'This is the story of the National Aeronautic Space Administration from the first Gemini mission to the space shuttle - a race for space which became the pinnacle of human achievement in the 20th century. From the incredible rescue of Apollo 13 to routine satellite launches from the space shuttle, come with us on a journey through history to distant galaxies, black holes and the origin of the universe itself.',
                popularity: 0.6,
                poster_path: '/taISSpJEenLWKeFwGSvBO5D7Vee.jpg',
                release_date: '2001-01-01',
                title: 'NASA: A Space Odyssey Vol. 1',
                video: false,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 712632,
                original_language: 'en',
                original_title: 'NASA Aeronautics and Space Reports 1965',
                overview:
                    "NASA's Aeronautics and Space Reports for 1965 features 12 monthly reports (#1 through #12) that cover a wide variety of topics. Each of the reports is around 4 1/2 minutes long, with a longer recap in the December report.",
                popularity: 0.6,
                poster_path: '/bZdYe3rBWqZ1vahOGC8SlyMhaZh.jpg',
                release_date: '2006-01-01',
                title: 'NASA Aeronautics and Space Reports 1965',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 712638,
                original_language: 'en',
                original_title: 'NASA Aeronautics and Space Reports 1966',
                overview:
                    "NASA's Aeronautics and Space Reports for 1966 features 12 monthly reports (#13 through #24) that cover a wide variety of topics. Each of the reports is around 4 1/2 minutes long, with a longer recap in the December report.",
                popularity: 0.6,
                poster_path: '/r0tnZUxA7njnFqsggbFQBIAUbH4.jpg',
                release_date: '2006-01-01',
                title: 'NASA Aeronautics and Space Reports 1966',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 712640,
                original_language: 'en',
                original_title: 'NASA Aeronautics and Space Reports 1967',
                overview:
                    "NASA's Aeronautics and Space Reports for 1967 features 13 monthly reports (#25 through #37) that cover a wide variety of topics. Each of the reports is around 4 1/2 minutes long, with a longer recap in the December report. In 1967 a longer report was produced in October for Langley's 50th Anniversary and a special report was produced on the first flight of the Saturn V, Apollo 4.",
                popularity: 0.6,
                poster_path: '/n2LFMYG7wPffqaL19aR4kAVL5iI.jpg',
                release_date: '2006-01-01',
                title: 'NASA Aeronautics and Space Reports 1967',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 712641,
                original_language: 'en',
                original_title: 'NASA Aeronautics and Space Reports 1968',
                overview:
                    "NASA's Aeronautics and Space Reports for 1968 features 12 monthly reports (#38 through #49) that cover a wide variety of topics. Each of the reports is around 4 1/2 minutes long, with a longer recap in the December report.",
                popularity: 0.6,
                poster_path: '/uv1tRqwTpymtHwul2PIa7vzfl9K.jpg',
                release_date: '2006-01-01',
                title: 'NASA Aeronautics and Space Reports 1968',
                video: true,
                vote_average: 0,
                vote_count: 0,
            },
        ];
    }
}