/* eslint-disable quotes */
import 'reflect-metadata';
import { injectable } from 'inversify';
import { INasaDao } from '@setup/interfaces';

@injectable()
export class NasaDao implements INasaDao {
    async getNasaObject(): Promise<any> {
        return {
            copyright: 'Damian Peach',
            date: '2021-09-19',
            explanation:
                "On Saturn, the rings tell you the season. On Earth, Wednesday marks an equinox, the time when the  Earth's equator tilts directly toward the Sun. Since Saturn's grand rings orbit along the planet's equator, these rings appear most prominent -- from the direction of the Sun -- when the spin axis of Saturn points toward the Sun. Conversely, when Saturn's spin axis points to the side, an equinox occurs and the edge-on rings are hard to see from not only the Sun -- but Earth. In the featured montage, images of Saturn between the years of 2004 and 2015 have been superposed to show the giant planet passing from southern summer toward northern summer. Saturn was as close as it can get to planet Earth last month, and this month the ringed giant is still bright and visible throughout much of the night",
            hdurl: 'https://apod.nasa.gov/apod/image/2109/saturn2004to2015_peach_2504.jpg',
            media_type: 'image',
            service_version: 'v1',
            title: 'Rings and Seasons of Saturn',
            url: 'https://apod.nasa.gov/apod/image/2109/saturn2004to2015_peach_960.jpg',
        };
    }
}
