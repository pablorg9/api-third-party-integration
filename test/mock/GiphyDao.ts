import 'reflect-metadata';
import { injectable } from 'inversify';
import { IGiphyDao } from '@setup/interfaces';

@injectable()
export class GiphyDao implements IGiphyDao {
    async getImg(_imgName: string): Promise<any> {
        return {
            type: 'gif',
            id: 'gkgwQkzP3lN5u',
            url: 'https://giphy.com/gifs/nasa-nasagif-gkgwQkzP3lN5u',
            slug: 'nasa-nasagif-gkgwQkzP3lN5u',
            bitly_gif_url: 'http://gph.is/2gSzOZC',
            bitly_url: 'http://gph.is/2gSzOZC',
            embed_url: 'https://giphy.com/embed/gkgwQkzP3lN5u',
            username: 'nasa',
            source: 'http://www.youtube.com/watch?v=DRyc7Ljf-2M',
            title: 'Nasa Logo GIF by NASA',
            rating: 'g',
            content_url: '',
            source_tld: 'www.youtube.com',
            source_post_url: 'http://www.youtube.com/watch?v=DRyc7Ljf-2M',
            is_sticker: 0,
            import_datetime: '2016-12-16 17:03:45',
            trending_datetime: '2021-07-29 15:09:11',
            images: {
                original: {
                    height: '270',
                    width: '480',
                    size: '93534',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.gif&ct=g',
                    mp4_size: '12728',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.mp4&ct=g',
                    webp_size: '112380',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.webp&ct=g',
                    frames: '31',
                    hash: '21341c1d9c515cc1f1f885e582a81058',
                },
                downsized: {
                    height: '270',
                    width: '480',
                    size: '93534',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.gif&ct=g',
                },
                downsized_large: {
                    height: '270',
                    width: '480',
                    size: '93534',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.gif&ct=g',
                },
                downsized_medium: {
                    height: '270',
                    width: '480',
                    size: '93534',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.gif&ct=g',
                },
                downsized_small: {
                    height: '270',
                    width: '480',
                    mp4_size: '14593',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy-downsized-small.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy-downsized-small.mp4&ct=g',
                },
                downsized_still: {
                    height: '270',
                    width: '480',
                    size: '93534',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy_s.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy_s.gif&ct=g',
                },
                fixed_height: {
                    height: '200',
                    width: '356',
                    size: '55462',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200.gif&ct=g',
                    mp4_size: '8159',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200.mp4&ct=g',
                    webp_size: '78924',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200.webp&ct=g',
                },
                fixed_height_downsampled: {
                    height: '200',
                    width: '356',
                    size: '23835',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200_d.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200_d.gif&ct=g',
                    webp_size: '18050',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200_d.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200_d.webp&ct=g',
                },
                fixed_height_small: {
                    height: '100',
                    width: '178',
                    size: '16363',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100.gif&ct=g',
                    mp4_size: '4097',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100.mp4&ct=g',
                    webp_size: '35256',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100.webp&ct=g',
                },
                fixed_height_small_still: {
                    height: '100',
                    width: '178',
                    size: '3706',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100_s.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100_s.gif&ct=g',
                },
                fixed_height_still: {
                    height: '200',
                    width: '356',
                    size: '9803',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200_s.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200_s.gif&ct=g',
                },
                fixed_width: {
                    height: '113',
                    width: '200',
                    size: '19046',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200w.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200w.gif&ct=g',
                    mp4_size: '4721',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200w.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200w.mp4&ct=g',
                    webp_size: '40254',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200w.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200w.webp&ct=g',
                },
                fixed_width_downsampled: {
                    height: '113',
                    width: '200',
                    size: '8461',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200w_d.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200w_d.gif&ct=g',
                    webp_size: '9308',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200w_d.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200w_d.webp&ct=g',
                },
                fixed_width_small: {
                    height: '57',
                    width: '100',
                    size: '6133',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100w.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100w.gif&ct=g',
                    mp4_size: '2859',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100w.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100w.mp4&ct=g',
                    webp_size: '14948',
                    webp: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100w.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100w.webp&ct=g',
                },
                fixed_width_small_still: {
                    height: '57',
                    width: '100',
                    size: '1919',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/100w_s.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=100w_s.gif&ct=g',
                },
                fixed_width_still: {
                    height: '113',
                    width: '200',
                    size: '4194',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/200w_s.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=200w_s.gif&ct=g',
                },
                looping: {
                    mp4_size: '105429',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy-loop.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy-loop.mp4&ct=g',
                },
                original_still: {
                    height: '270',
                    width: '480',
                    size: '15411',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy_s.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy_s.gif&ct=g',
                },
                original_mp4: {
                    height: '270',
                    width: '480',
                    mp4_size: '12728',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy.mp4&ct=g',
                },
                preview: {
                    height: '270',
                    width: '480',
                    mp4_size: '14593',
                    mp4: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy-preview.mp4?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy-preview.mp4&ct=g',
                },
                preview_gif: {
                    height: '270',
                    width: '480',
                    size: '34511',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy-preview.gif?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy-preview.gif&ct=g',
                },
                preview_webp: {
                    height: '270',
                    width: '480',
                    size: '42294',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/giphy-preview.webp?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=giphy-preview.webp&ct=g',
                },
                '480w_still': {
                    height: '270',
                    width: '480',
                    size: '93534',
                    url: 'https://media2.giphy.com/media/gkgwQkzP3lN5u/480w_s.jpg?cid=1e8c76a31dj90yf845wq1slt8jx57vp7q0acueh8qbgm0xng&rid=480w_s.jpg&ct=g',
                },
            },
            user: {
                avatar_url: 'https://media4.giphy.com/avatars/nasa/qdYbkaOy9oHJ.jpg',
                banner_image: 'https://media4.giphy.com/channel_assets/nasa/u6o2u5HRqBlZ.jpg',
                banner_url: 'https://media4.giphy.com/channel_assets/nasa/u6o2u5HRqBlZ.jpg',
                profile_url: 'https://giphy.com/nasa/',
                username: 'nasa',
                display_name: 'NASA',
                description:
                    'Explore the universe and discover our home planet through GIFs on the official NASA account',
                instagram_url: 'https://instagram.com/NASA',
                website_url: 'http://www.nasa.gov',
                is_verified: true,
            },
            analytics_response_payload:
                'e=Z2lmX2lkPWdrZ3dRa3pQM2xONXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZThjNzZhMzFkajkweWY4NDV3cTFzbHQ4ang1N3ZwN3EwYWN1ZWg4cWJnbTB4bmcmY3Q9Zw',
            analytics: {
                onload: {
                    url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWdrZ3dRa3pQM2xONXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZThjNzZhMzFkajkweWY4NDV3cTFzbHQ4ang1N3ZwN3EwYWN1ZWg4cWJnbTB4bmcmY3Q9Zw&action_type=SEEN',
                },
                onclick: {
                    url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWdrZ3dRa3pQM2xONXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZThjNzZhMzFkajkweWY4NDV3cTFzbHQ4ang1N3ZwN3EwYWN1ZWg4cWJnbTB4bmcmY3Q9Zw&action_type=CLICK',
                },
                onsent: {
                    url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWdrZ3dRa3pQM2xONXUmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD0xZThjNzZhMzFkajkweWY4NDV3cTFzbHQ4ang1N3ZwN3EwYWN1ZWg4cWJnbTB4bmcmY3Q9Zw&action_type=SENT',
                },
            },
        };
    }
}
