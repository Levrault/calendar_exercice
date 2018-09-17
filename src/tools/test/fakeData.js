/**
 * Return a fake data store, use to test container
 * @param  {Object} state
 * @return {Object}
 */
export default function getFakeData (state) {
  return {
    day: {
      selected: ''
    },
    year: {
      data: [
        {
          year: 2018,
          months: [
            {
              name: 'January',
              chronology: 1,
              numberOfDays: 31,
              firstDayIndex: 1,
              calendarId: '576c020e2bfc5849',
              id: 'a4e8a03dbe54ca7d',
              events: []
            },
            {
              name: 'February',
              chronology: 2,
              numberOfDays: 28,
              firstDayIndex: 3,
              calendarId: '576c020e2bfc5849',
              id: '0b54aaf1844478e4',
              events: [
                {
                  monthId: '0b54aaf1844478e4',
                  name: 'hello',
                  color: '#EEEEEE',
                  day: 8,
                  id: '05af70ab81cc3a40'
                },
                {
                  monthId: '0b54aaf1844478e4',
                  name: 'hello',
                  color: '#546E7A',
                  day: 19,
                  id: '8b058e6f439a8985'
                }
              ]
            },
            {
              name: 'March',
              chronology: 3,
              numberOfDays: 31,
              firstDayIndex: 1,
              calendarId: '576c020e2bfc5849',
              id: '9867bbc8528ec87c',
              events: [
                {
                  monthId: '9867bbc8528ec87c',
                  name: 'test',
                  color: '#546E7A',
                  day: 5,
                  id: 'c663ab91d37d099e'
                },
                {
                  monthId: '9867bbc8528ec87c',
                  name: 'test',
                  color: '#EEEEEE',
                  day: 18,
                  id: '22642e550f57c9b1'
                }
              ]
            },
            {
              name: 'April',
              chronology: 4,
              numberOfDays: 30,
              firstDayIndex: 6,
              calendarId: '576c020e2bfc5849',
              id: '758f36c35a3f08c6',
              events: []
            },
            {
              name: 'May',
              chronology: 5,
              numberOfDays: 31,
              firstDayIndex: 1,
              calendarId: '576c020e2bfc5849',
              id: 'c7b5ce150171382f',
              events: []
            },
            {
              name: 'June',
              chronology: 6,
              numberOfDays: 30,
              firstDayIndex: 4,
              calendarId: '576c020e2bfc5849',
              id: 'e9b5a92ec5c77bef',
              events: []
            },
            {
              name: 'July',
              chronology: 7,
              numberOfDays: 31,
              firstDayIndex: 4,
              calendarId: '576c020e2bfc5849',
              id: 'eb7e48693ccfc9f7',
              events: []
            },
            {
              name: 'August',
              chronology: 8,
              numberOfDays: 31,
              firstDayIndex: 2,
              calendarId: '576c020e2bfc5849',
              id: 'cf7993603246d889',
              events: []
            },
            {
              name: 'September',
              chronology: 9,
              numberOfDays: 30,
              firstDayIndex: 7,
              calendarId: '576c020e2bfc5849',
              id: '46ff218e56dbc865',
              events: []
            },
            {
              name: 'October',
              chronology: 10,
              numberOfDays: 31,
              firstDayIndex: 4,
              calendarId: '576c020e2bfc5849',
              id: '52990e2886f30a77',
              events: []
            },
            {
              name: 'November',
              chronology: 11,
              numberOfDays: 30,
              firstDayIndex: 5,
              calendarId: '576c020e2bfc5849',
              id: '6d2fa4cdcf03e916',
              events: []
            },
            {
              name: 'December',
              chronology: 12,
              numberOfDays: 31,
              firstDayIndex: 1,
              calendarId: '576c020e2bfc5849',
              id: 'a4cedf8e58f298bc',
              events: []
            }
          ],
          id: '576c020e2bfc5849'
        },
        {
          year: 2019,
          months: [
            {
              name: 'January',
              chronology: 1,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: 'af878be78aeee9c7',
              events: []
            },
            {
              name: 'February',
              chronology: 2,
              numberOfDays: 29,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '8356b3066e8cf9c3',
              events: []
            },
            {
              name: 'March',
              chronology: 3,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '019d9adf3c9ebb06',
              events: []
            },
            {
              name: 'April',
              chronology: 4,
              numberOfDays: 30,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '85ad7b7071a78b1e',
              events: []
            },
            {
              name: 'May',
              chronology: 5,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: 'db223015005ce86d',
              events: []
            },
            {
              name: 'June',
              chronology: 6,
              numberOfDays: 30,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: 'b2566ed4bcba6820',
              events: []
            },
            {
              name: 'July',
              chronology: 7,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '5f3fd4713fae0987',
              events: []
            },
            {
              name: 'August',
              chronology: 8,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: 'e66816d8710ca814',
              events: []
            },
            {
              name: 'September',
              chronology: 9,
              numberOfDays: 30,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '4e5cabad6755f803',
              events: []
            },
            {
              name: 'October',
              chronology: 10,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '67d3f5d9f6ab6896',
              events: []
            },
            {
              name: 'November',
              chronology: 11,
              numberOfDays: 30,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '4a617b1b6665c81b',
              events: []
            },
            {
              name: 'December',
              chronology: 12,
              numberOfDays: 31,
              firstDayIndex: 3,
              calendarId: 'c0a0beff37bc58d0',
              id: '5541788e5c448934',
              events: []
            }
          ],
          id: 'c0a0beff37bc58d0'
        }
      ],
      loading: false,
      error: null,
      current: {
        year: 2018,
        months: [
          {
            name: 'January',
            chronology: 1,
            numberOfDays: 31,
            firstDayIndex: 1,
            calendarId: '576c020e2bfc5849',
            id: 'a4e8a03dbe54ca7d',
            events: []
          },
          {
            name: 'February',
            chronology: 2,
            numberOfDays: 28,
            firstDayIndex: 3,
            calendarId: '576c020e2bfc5849',
            id: '0b54aaf1844478e4',
            events: [
              {
                monthId: '0b54aaf1844478e4',
                name: 'hello',
                color: '#EEEEEE',
                day: 8,
                id: '05af70ab81cc3a40'
              },
              {
                monthId: '0b54aaf1844478e4',
                name: 'hello',
                color: '#546E7A',
                day: 19,
                id: '8b058e6f439a8985'
              }
            ]
          },
          {
            name: 'March',
            chronology: 3,
            numberOfDays: 31,
            firstDayIndex: 1,
            calendarId: '576c020e2bfc5849',
            id: '9867bbc8528ec87c',
            events: [
              {
                monthId: '9867bbc8528ec87c',
                name: 'test',
                color: '#546E7A',
                day: 5,
                id: 'c663ab91d37d099e'
              },
              {
                monthId: '9867bbc8528ec87c',
                name: 'test',
                color: '#EEEEEE',
                day: 18,
                id: '22642e550f57c9b1'
              }
            ]
          },
          {
            name: 'April',
            chronology: 4,
            numberOfDays: 30,
            firstDayIndex: 6,
            calendarId: '576c020e2bfc5849',
            id: '758f36c35a3f08c6',
            events: []
          },
          {
            name: 'May',
            chronology: 5,
            numberOfDays: 31,
            firstDayIndex: 1,
            calendarId: '576c020e2bfc5849',
            id: 'c7b5ce150171382f',
            events: []
          },
          {
            name: 'June',
            chronology: 6,
            numberOfDays: 30,
            firstDayIndex: 4,
            calendarId: '576c020e2bfc5849',
            id: 'e9b5a92ec5c77bef',
            events: []
          },
          {
            name: 'July',
            chronology: 7,
            numberOfDays: 31,
            firstDayIndex: 4,
            calendarId: '576c020e2bfc5849',
            id: 'eb7e48693ccfc9f7',
            events: []
          },
          {
            name: 'August',
            chronology: 8,
            numberOfDays: 31,
            firstDayIndex: 2,
            calendarId: '576c020e2bfc5849',
            id: 'cf7993603246d889',
            events: []
          },
          {
            name: 'September',
            chronology: 9,
            numberOfDays: 30,
            firstDayIndex: 7,
            calendarId: '576c020e2bfc5849',
            id: '46ff218e56dbc865',
            events: []
          },
          {
            name: 'October',
            chronology: 10,
            numberOfDays: 31,
            firstDayIndex: 4,
            calendarId: '576c020e2bfc5849',
            id: '52990e2886f30a77',
            events: []
          },
          {
            name: 'November',
            chronology: 11,
            numberOfDays: 30,
            firstDayIndex: 5,
            calendarId: '576c020e2bfc5849',
            id: '6d2fa4cdcf03e916',
            events: []
          },
          {
            name: 'December',
            chronology: 12,
            numberOfDays: 31,
            firstDayIndex: 1,
            calendarId: '576c020e2bfc5849',
            id: 'a4cedf8e58f298bc',
            events: []
          }
        ],
        id: '576c020e2bfc5849'
      },
      min: 2018,
      max: 2019
    },
    eventForm: {
      success: false,
      loading: false,
      error: null,
      color: '#EEEEEE',
      name: '',
      monthId: '',
      day: 0
    },
    events: {
      '0b54aaf1844478e4': [
        {
          monthId: '0b54aaf1844478e4',
          name: 'hello',
          color: '#EEEEEE',
          day: 8,
          id: '05af70ab81cc3a40'
        },
        {
          monthId: '0b54aaf1844478e4',
          name: 'hello',
          color: '#546E7A',
          day: 19,
          id: '8b058e6f439a8985'
        }
      ],
      '9867bbc8528ec87c': [
        {
          monthId: '9867bbc8528ec87c',
          name: 'test',
          color: '#546E7A',
          day: 5,
          id: 'c663ab91d37d099e'
        },
        {
          monthId: '9867bbc8528ec87c',
          name: 'test',
          color: '#EEEEEE',
          day: 18,
          id: '22642e550f57c9b1'
        }
      ]
    },
    router: {
      location: {
        pathname: '/',
        search: '',
        hash: ''
      },
      action: 'POP'
    }
  };
}

