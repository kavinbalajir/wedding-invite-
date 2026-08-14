/** Wedding invitation content */

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const site = {
  couple: {
    bride: 'Kavin',
    groom: 'Priya',
    monogramLogo: publicAsset('nd-logo-envelope.png'),
  },
  wedding: {
    /** Countdown target — centre of muhurtham window */
    targetISO: '2026-09-13T08:30:00',
    reception: {
      dateISO: '2026-09-13T18:00:00',
      dateDisplay: '13 September 2026',
      timeDisplay: '6:00 PM onwards',
      label: 'Reception',
    },
    muhurtham: {
      dateDisplay: '14 September 2026',
      timeDisplay: '6:00 AM – 7:00 AM',
      label: 'Muhurtham',
    },
  },
  envelope: {
    sealColor: '#c2410c',
    sealLogo: publicAsset('logo-seal.png'),
    animations: {
      initialFadeInDuration: 1.1,
      sealClickToFadeOutDelay: 950,
      flapOpeningDuration: 1.35,
      fadeOutDuration: 1.15,
      hoverLiftDistance: 8,
      containerScaleOnOpen: 1.015,
      containerScaleDuration: 1.3,
    },
  },
  audio: {
    backgroundMusic: publicAsset(
      'mangalyam-tantunanena-lyrical-just-married-sanjith-hegde-c-r-bobby-b-aj_DHDXVlxD.mp3',
    ),
    volume: 0.16,
    fadeInDuration: 2600,
  },
  /** Full-bleed hero (temple) — file in /public */
  hero: {
    image: publicAsset('temple-background.png'),
    tagline: "We're getting married",
  },
  /** Subtle full-page texture behind invitation content — kolam / pattern PNG in /public */
  invitation: {
    backgroundImage: publicAsset('bg-rose-kolam.png'),
  },
  scrollStory: {
    brideApproach: publicAsset('bride-1left-cutout.png'),
    groomApproach: publicAsset('groom-1left-cutout.png'),
    garlandMoment: publicAsset('bride-groom-center-cutout.png'),
    finalMoment: publicAsset('bride-groom-center2-cutout.png'),
    celebrationSound: publicAsset('party-popper.wav'),
  },
  venue: {
    name: 'Jai Sakthi Mahal',
    addressLine: 'Samathur, Z.Kottampatti',
    city: 'Pollachi',
    region: 'Tamil Nadu',
    image: publicAsset('wedding-hall.png'),
    coordinates: {
      latitude: 10.6086,
      longitude: 77.0147,
    },
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=10.6086,77.0147',
    /** Google Maps embed (no API key) */
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=10.6086,77.0147&hl=en&z=17&output=embed',
    description:
      'Join us at Jai Sakthi Mahal in Samathur, Z.Kottampatti, Pollachi — a gracious setting for our reception and wedding celebrations with family and friends.',
  },
  featuredSections: [
    {
      id: 1,
      title: 'Reception',
      description:
        'An evening of warmth, music, and togetherness as we begin the celebrations with everyone we love.',
      image: publicAsset('reception.png'),
      imagePositionClass: 'object-center',
    },
    {
      id: 2,
      title: 'Traditions',
      description:
        'Sacred rituals and blessings woven into every moment of our Tamil wedding.',
      image: publicAsset('traditions.png'),
      imagePositionClass: 'object-center',
    },
    {
      id: 3,
      title: 'New beginnings',
      description:
        'Two families, one journey — we can’t wait to share this joy with you.',
      image: publicAsset('beginnings.png'),
      imagePositionClass: 'object-top',
    },
  ],
  eventSchedule: [
    {
      id: 1,
      time: '13 Sept · 5:00 – 6:00 PM',
      title: 'Mappilai Alaipu',
      description: 'Welcoming the groom and his family',
      image: publicAsset('mappilai-azhaipu.png'),
    },
    {
      id: 2,
      time: '13 Sept · 6:00 PM',
      title: 'Reception',
      description: '6:00 PM onwards — dinner & celebrations',
      /** Diya — lamps & auspicious light for the evening celebration */
      image: publicAsset('reception-logo.png'),
      calendarEventId: 'reception',
    },
    {
      id: 3,
      time: '15 Sept · 5:00 – 6:00 AM',
      title: 'Kasi Yatrai',
      description: 'A joyful traditional wedding ritual',
      image: publicAsset('kasi-yatra.png'),
    },
    {
      id: 4,
      time: '13 Sept · 6:00 – 7:00 AM',
      title: 'Muhurtham',
      description: 'Auspicious wedding ceremony',
      /** Om — sacred symbol for the wedding ceremony (replaces generic chapel) */
      image: publicAsset('muhurtham.png'),
      calendarEventId: 'muhurtham',
    },
  ],
  calendarEvents: [
    {
      id: 'reception',
      title: 'Kavin & Priya Reception',
      startUtc: '20260913T123000Z',
      endUtc: '20260913T173000Z',
      description:
        'Reception celebration for Kavin and Priya. Dinner and celebrations from 6:00 PM onwards.',
      filename: 'Kavin-Priya-reception.ics',
    },
    {
      id: 'muhurtham',
      title: 'Kavin & Priya Muhurtham',
      startUtc: '20260914T023000Z',
      endUtc: '20260914T033000Z',
      description:
        'Auspicious wedding ceremony for Kavin and Priya.',
      filename: 'Kavin-Priya-muhurtham.ics',
    },
  ],
  translations: {
    welcome:
      'We joyfully invite you to celebrate our wedding. Your presence will make our day complete as we take our vows surrounded by family and friends.',
    countdown: 'Countdown to muhurtham',
    countdownSubtitle: '14 September 2026 · 6:00 AM – 7:00 AM',
    getDirections: 'Open in Google Maps',
    scrollText: 'Scroll',
    mapHeading: 'Venue location',
    withLove: 'With love & blessings',
    copyright:
      'Kavin <span class="text-gold-600">&</span> Priya',
  },
  rsvp: {
    heading: 'RSVP',
    message:
      'Share your details and send your RSVP to us.',
    sheetSubmitUrl:
      'https://script.google.com/macros/s/AKfycbwqteJaQM25K0xL1Yr0zv_V4Fq8H-rAhMgr-zKowZvh09stngcucYc8AuNgE8tvsszS/exec',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/1ePXQi7ZEviYgmrxOeiER4FT6Es7Ek9QUUuNYlZt1dhg/edit?usp=sharing',
    phoneDisplay: '7904072605',
    whatsappLink:
      'https://wa.me/9159470727?text=Hi%20Kavin%2C%20I%20would%20like%20to%20RSVP%20for%20the%20wedding.',
  },
} as const
