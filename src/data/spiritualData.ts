import { Destination, UpcomingTrip, SpiritualCalendarEvent, SacredRoute, DailySloka } from '../types';

export const SACRED_DESTINATIONS: Destination[] = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    subtitle: 'The Eternal City of Light (Kashi)',
    state: 'Uttar Pradesh',
    category: 'Jyotirlinga',
    rating: 4.9,
    reviewsCount: 14820,
    duration: '3 - 5 Days',
    distanceFromAirport: '24 km from Lal Bahadur Shastri Airport',
    description: 'The spiritual heart of India where the sacred Ganga flows north, whispering ancient chants and liberation (Moksha) across 84 historic stone ghats.',
    fullStory: `Varanasi, or Kashi, is the spiritual epicenter of India, revered as the luminous abode of Lord Shiva. According to sacred tradition, Shiva founded this timeless city upon his trident, and those who take their final breath here achieve immediate liberation (Moksha) from the cycle of rebirth. 

As the holy river Ganga bends northwards toward the Himalayas, its 84 ghats come alive at dawn with the resonant sound of conch shells, Vedic incantations, and classical morning ragas. The recently transformed Kashi Vishwanath Dham corridor connects the sacred sanctum directly to the riverbanks, allowing pilgrims to carry holy Ganga water effortlessly to the inner Jyotirlinga.`,
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1600&q=85',
    tags: ['Ganga Aarti', 'Kashi Vishwanath', 'Assi Ghat', '84 Ghats', 'Sarnath', 'Moksha'],
    bestTimeToVisit: 'October to March (Pleasant climate, festive Dev Deepawali)',
    timings: 'Mangala Aarti: 3:00 AM - 4:00 AM | General Darshan: 4:00 AM - 11:00 PM',
    dressCode: 'Traditional modest attire (Dhoti/Kurta for sanctum rituals, Saree/Salwar Kameez for women)',
    seniorFriendly: true,
    wheelchairAccessible: true,
    audioGuideAvailable: true,
    significance: [
      'Home to Kashi Vishwanath, one of the 12 supreme Jyotirlingas of Lord Shiva',
      'The sacred Manikarnika Ghat, where the eternal flame has burned continuously for millennia',
      'Birthplace of Tulsidas’s Ramcharitmanas and Kabir Das’s mystical poetry',
      'Assi Ghat Subah-e-Banaras morning Vedic chant and classical meditation'
    ],
    rituals: [
      'Subah-e-Banaras Vedic Snan at Assi Ghat at sunrise',
      'Sugam Darshan & Rudrabhishek at Kashi Vishwanath Sanctum',
      'Panchkroshi Yatra parikrama through ancient sacred forest boundaries',
      'Evening Maha Aarti viewing from a traditional wooden boat on Dashashwamedh Ghat'
    ],
    crowdLevel: 'High',
    budgetEstimate: {
      budget: { amount: '₹8,500 - ₹12,000', description: 'Clean dharamsala / guest house, local satvik thalis, shared auto transfers' },
      comfort: { amount: '₹18,000 - ₹28,000', description: '3-4 Star Riverside Haveli, private boat tours, AC cab, VIP Darshan bookings' },
      premium: { amount: '₹45,000 - ₹85,000', description: '5-Star Luxury Heritage Palace (Taj Nadesar / BrijRama), private priest, escorted cruise' }
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival & The Ghats of Varanasi',
        description: 'Immersion into the holy river aura, temple orientation, and the mesmerizing evening Ganga Aarti.',
        activities: [
          { time: '07:00 AM', title: 'Arrival & Riverside Welcome', description: 'Check-in at your riverside haveli, enjoy herbal tulsi chai and morning orientation.', tag: 'Stay' },
          { time: '10:00 AM', title: 'Historic Alleys & Banarasi Weavers', description: 'A slow guided walking tour through the heritage thari lanes and silk looms of Old Kashi.', tag: 'Culture' },
          { time: '02:00 PM', title: 'Satvik Bhog Lunch', description: 'Savor traditional pure satvik kachori-sabzi and famous Banarasi malaiyo / lassi.', tag: 'Dining' },
          { time: '05:30 PM', title: 'Dashashwamedh Sunset Boat Ride', description: 'Private wooden boat cruise along 20 major ghats as dusk descends upon the holy waters.', tag: 'Sightseeing' },
          { time: '06:45 PM', title: 'Grand Ganga Maha Aarti', description: 'Front-row VIP boat seating witnessing 7 priests perform synchronized brass lamp rituals.', tag: 'Sacred Ritual' }
        ]
      },
      {
        day: 2,
        title: 'Kashi Vishwanath & Sacred Sarnath',
        description: 'Brahma Muhurta sacred darshan followed by the peaceful Buddhist heritage site of Sarnath.',
        activities: [
          { time: '04:30 AM', title: 'Kashi Vishwanath Sugam Darshan', description: 'Direct corridor access for early morning sparsh darshan & milk abhishekam.', tag: 'Sanctum' },
          { time: '07:30 AM', title: 'Annapurna & Kal Bhairav Shrines', description: 'Prayers at the Goddess of Nourishment and the Kotwal (protector) of Varanasi.', tag: 'Temples' },
          { time: '11:00 AM', title: 'Sarnath Deer Park & Dhamek Stupa', description: 'Visit where Lord Buddha delivered his first sermon after attaining enlightenment.', tag: 'Heritage' },
          { time: '04:30 PM', title: 'Sankat Mochan Hanuman Temple', description: 'Evening bhajans and auspicious besan laddoos at the ancient temple founded by Goswami Tulsidas.', tag: 'Devotion' }
        ]
      },
      {
        day: 3,
        title: 'Assi Ghat Subah-e-Banaras & Reflection',
        description: 'Sunrise Vedic chanting, yoga by the river, and farewell blessings.',
        activities: [
          { time: '05:30 AM', title: 'Subah-e-Banaras at Assi Ghat', description: 'Witness dawn Surya Namaskar, Vedic chants by young scholars, and live classical flute.', tag: 'Meditation' },
          { time: '08:30 AM', title: 'Holy Ganga Jal Collection & Sankalp', description: 'Seal consecrated Ganga Jal in brass urns with priest’s final travel blessings.', tag: 'Blessing' },
          { time: '11:30 AM', title: 'Check-out & Onward Journey', description: 'Private AC transfer to airport or railway station with blissful memories.', tag: 'Departure' }
        ]
      }
    ],
    packingChecklist: [
      'Modest cotton clothing (Kurta/Pajama, Saree, Dupatta)',
      'Slip-on footwear for easy removal outside temples',
      'Small copper/brass lota for holy water',
      'Hand sanitizer and moist wipes',
      'Comfortable walking socks for stone courtyard darshans'
    ]
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Temple',
    subtitle: 'Abode of Mahadev in the High Himalayas',
    state: 'Uttarakhand',
    category: 'Jyotirlinga',
    rating: 5.0,
    reviewsCount: 19430,
    duration: '4 - 6 Days',
    distanceFromAirport: '225 km from Dehradun Jolly Grant Airport',
    description: 'Standing tall at 3,583 meters against snow-crowned Himalayan peaks, Kedarnath is the most sacred of the Panch Kedar and 12 Jyotirlingas.',
    fullStory: `Perched majestically at an altitude of 3,583 meters near the Chorabari glacier in Uttarakhand, Kedarnath Temple is an architectural marvel of massive grey stone slabs built over a thousand years ago. 

According to Mahabharata lore, the Pandavas sought Shiva’s forgiveness after the Kurukshetra war. Shiva turned into a bull and dove into the earth, with his hump emerging here at Kedarnath. The sanctum houses an irregular triangular rock pedestal worshipped as Sadashiva. Surrounded by the majestic Kedar Dome peak (6,831m), the temple radiates an otherworldly spiritual aura that captivates every pilgrim.`,
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=85',
    tags: ['Char Dham', 'Panch Kedar', 'Jyotirlinga', 'Garhwal Himalayas', 'Trek', 'Snow Peaks'],
    bestTimeToVisit: 'May to June & September to October (Doors open on Akshaya Tritiya, close on Bhai Dooj)',
    timings: 'Temple Opens: 5:00 AM | Evening Aarti: 6:30 PM | Closes: 9:00 PM',
    dressCode: 'Warm woolen layers, windbreakers, modest trekking pants/kurtas',
    seniorFriendly: false,
    wheelchairAccessible: false,
    audioGuideAvailable: false,
    significance: [
      'Highest of the 12 Jyotirlingas of Lord Shiva at 3,583 meters altitude',
      'Key pillar of the holy Chhota Char Dham circuit in Uttarakhand',
      'Survived centuries of glacial movement and the devastating 2013 flash floods miraculously',
      'Ancient Bhairavnath Temple sits guard on the cliff above the main shrine'
    ],
    rituals: [
      'Maha Abhishek performed inside the sanctum at 4:00 AM with butter and bel leaves',
      'Trek from Gaurikund through Jungle Chatti and Lincholi along the Mandakini River',
      'Pooja at Bhairavnath Temple to seek permission before departing Kedarnath Valley',
      'Lighting pure ghee lamps at dusk under the starlit Himalayan sky'
    ],
    crowdLevel: 'Peak',
    budgetEstimate: {
      budget: { amount: '₹12,000 - ₹18,000', description: 'GMVN tent stays / ashrams, shared bus from Haridwar, on-foot trek' },
      comfort: { amount: '₹26,000 - ₹38,000', description: 'Standard hotel in Guptkashi/Sonprayag, pony/doli support, private cab' },
      premium: { amount: '₹65,000 - ₹95,000', description: 'Helicopter shuttle (Phata/Sersi), VIP darshan queue, luxury cottage stay' }
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Haridwar to Guptkashi / Sonprayag',
        description: 'Scenic mountain drive along the roaring Alaknanda and Mandakini rivers via Devprayag.',
        activities: [
          { time: '06:00 AM', title: 'Drive from Haridwar/Rishikesh', description: 'Scenic 7-8 hour drive passing the holy confluence at Devprayag and Rudraprayag.', tag: 'Transit' },
          { time: '04:00 PM', title: 'Arrival at Guptkashi', description: 'Check-in, biometric registration verification, and evening pooja at Vishwanath Temple.', tag: 'Stay' }
        ]
      },
      {
        day: 2,
        title: 'Trek to Sacred Kedarnath Dham',
        description: '16 km trek from Gaurikund through dramatic Himalayan valleys up to the holy sanctum.',
        activities: [
          { time: '05:00 AM', title: 'Sonprayag to Gaurikund Shuttle', description: 'Early morning local jeep transit to Gaurikund base camp and hot spring visit.', tag: 'Transit' },
          { time: '06:30 AM', title: 'Commence Trek / Pony Ride', description: 'Scenic ascent along the Mandakini river with refreshment halts at Bheembali & Lincholi.', tag: 'Trek' },
          { time: '02:30 PM', title: 'Arrival at Kedarnath Base', description: 'First glimpse of the magnificent stone temple framed by snow peaks; GMVN check-in.', tag: 'Arrival' },
          { time: '06:30 PM', title: 'Evening Sandhya Aarti', description: 'Soul-stirring bell resonance and butter lamps glowing against the icy mountain twilight.', tag: 'Aarti' }
        ]
      },
      {
        day: 3,
        title: 'Sanctum Darshan & Descent',
        description: 'Early morning inner sanctum prayers, Bhairavnath darshan, and descent to Sonprayag.',
        activities: [
          { time: '05:00 AM', title: 'Brahma Muhurta Darshan', description: 'Touching the sacred triangular Shivlinga and receiving sanctified vibhuti prasad.', tag: 'Sanctum' },
          { time: '08:00 AM', title: 'Climb to Bhairavnath Temple', description: 'Short 500m hike for panoramic 360-degree views of the entire Kedarnath valley.', tag: 'View' },
          { time: '10:30 AM', title: 'Descent to Gaurikund', description: 'Smooth downhill trek / helicopter return to base camp.', tag: 'Trek' }
        ]
      }
    ],
    packingChecklist: [
      'Heavy thermal wear, waterproof windproof jacket, and woolen beanie',
      'Sturdy trekking shoes with good grip and 4 pairs of dry wool socks',
      'Rain poncho / umbrella (weather changes rapidly in minutes)',
      'Diamox (altitude sickness), pain relief spray, ORS packets, glucose',
      'Power bank (cold drains phone batteries rapidly) & physical Govt ID card'
    ]
  },
  {
    id: 'rameshwaram',
    name: 'Rameshwaram',
    subtitle: 'The Southern Gateway to Sacred Redemption',
    state: 'Tamil Nadu',
    category: 'Jyotirlinga',
    rating: 4.8,
    reviewsCount: 11200,
    duration: '2 - 4 Days',
    distanceFromAirport: '170 km from Madurai International Airport',
    description: 'Set on the peaceful Pamban Island, Rameshwaram is one of the Char Dhams and Jyotirlingas where Lord Rama worshipped Shiva before crossing to Lanka.',
    fullStory: `Rameshwaram Island, connected to mainland Tamil Nadu by the iconic Pamban Sea Bridge, holds immense sanctity in the Ramayana. Here, Lord Rama built a Shivlinga out of sand (Ramalingam) to seek Lord Shiva’s blessings to expiate any sin committed in the battle of Lanka. 

The Ramanathaswamy Temple is celebrated globally for having the longest temple corridor in the world (over 1,200 meters of magnificent sculpted granite pillars). The pilgrimage is renowned for the 22 holy freshwater theerthams (wells) inside the temple complex, where pilgrims receive sacred cleansing bath sprinkles. At the island’s tip lies Dhanushkodi, where the Indian Ocean and Bay of Bengal merge peacefully.`,
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1600&q=85',
    tags: ['Char Dham', 'Jyotirlinga', '22 Theerthams', 'Dhanushkodi', 'Pamban Bridge', 'Ram Setu'],
    bestTimeToVisit: 'October to April (Pleasant coastal breezes, clear sunny skies)',
    timings: 'Morning: 5:00 AM - 1:00 PM | Evening: 3:00 PM - 9:00 PM',
    dressCode: 'Traditional South Indian attire (Dhoti without shirt for men, Saree/Chudidar for women)',
    seniorFriendly: true,
    wheelchairAccessible: true,
    audioGuideAvailable: true,
    significance: [
      'One of the four sacred All-India Char Dham destinations along with Badrinath, Dwarka, and Puri',
      'The southernmost of the 12 Jyotirlingas of Lord Shiva',
      'World’s longest temple corridor with 1,212 intricately sculpted granite pillars',
      'Starting point of the mythical Ram Setu (Adam’s Bridge) at Dhanushkodi Point'
    ],
    rituals: [
      'Agni Theertham sea bath before entering temple gates',
      'Receiving the sacred holy bath from all 22 internal temple theertham wells',
      'Spatika Linga Darshan during early morning 5:00 AM Sayarakshai pooja',
      'Dhanushkodi Sangam bath where Bay of Bengal meets the Indian Ocean'
    ],
    crowdLevel: 'Moderate',
    budgetEstimate: {
      budget: { amount: '₹7,000 - ₹11,000', description: 'Temple trust dharamsala / budget lodge, authentic banana leaf meals' },
      comfort: { amount: '₹16,000 - ₹25,000', description: '3-Star Beach Resort (Daiwik Hotels / Hyatt Place Rameswaram), AC taxi' },
      premium: { amount: '₹35,000 - ₹55,000', description: 'Luxury suites, private theertham assistance, curated sunrise boat excursion' }
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival via Pamban & Temple Theerthams',
        description: 'Cross the scenic ocean bridge, perform the 22 sacred well baths and attend evening pooja.',
        activities: [
          { time: '09:00 AM', title: 'Arrival over Pamban Sea Bridge', description: 'Breathtaking drive across the turquoise ocean channel with views of the historic rail bridge.', tag: 'Transit' },
          { time: '02:00 PM', title: 'Agni Theertham & 22 Well Baths', description: 'Sacred coastal snan followed by guided bath at the 22 sweet-water wells within the temple.', tag: 'Ritual' },
          { time: '05:30 PM', title: 'Ramanathaswamy Temple Darshan', description: 'Walk the majestic 1,200m third corridor and offer prayers at the sanctum sanctorum.', tag: 'Sanctum' }
        ]
      },
      {
        day: 2,
        title: 'Dhanushkodi & Ram Setu Point',
        description: 'Journey to the ghost town at the edge of India, floating stones, and Kalam Memorial.',
        activities: [
          { time: '05:00 AM', title: 'Early Morning Spatika Lingam Darshan', description: 'Witness the luminous crystal lingam pooja performed with milk and sacred vilva leaves.', tag: 'Sanctum' },
          { time: '08:30 AM', title: 'Dhanushkodi & Arichal Munai', description: 'Drive along the narrow sandbar where two oceans meet at the closest point to Sri Lanka.', tag: 'Exploration' },
          { time: '03:00 PM', title: 'Dr. APJ Abdul Kalam National Memorial', description: 'Tribute to India’s beloved People’s President and visionary scientist in his hometown.', tag: 'Heritage' }
        ]
      }
    ],
    packingChecklist: [
      '2 extra sets of traditional cotton clothing for changing after the 22 well baths',
      'Waterproof pouch for phones, money, and vehicle keys',
      'Sun hat and sunglasses for the Dhanushkodi coastal stretch',
      'Hand towel and slip-resistant flip-flops'
    ]
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    subtitle: 'The Sacred Birthplace of Shri Ram',
    state: 'Uttar Pradesh',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 16500,
    duration: '2 - 3 Days',
    distanceFromAirport: '10 km from Maharishi Valmiki International Airport Ayodhya',
    description: 'The historic capital of the Suryavanshi kings along the holy Saryu River, now crowned by the magnificent newly consecrated Ram Janmabhoomi Mandir.',
    fullStory: `Ayodhya is one of the seven holy Moksha-giving cities (Sapta Puri) of Sanatana Dharma. As the beloved birthplace of Bhagwan Shri Ram, the city exudes a festive, divine joy across its tranquil Saryu ghats and newly paved grand avenues. 

The magnificent Ram Janmabhoomi Mandir, built entirely of pink Bansi Paharpur sandstone without iron or steel, stands as a testament to traditional Nagara architecture. Surrounding landmarks like Hanumangarhi, Kanak Bhawan, and the vibrant Saryu Maha Aarti illuminate the eternal Ramayana ethos.`,
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1600&q=85',
    tags: ['Ram Janmabhoomi', 'Hanumangarhi', 'Saryu Aarti', 'Kanak Bhawan', 'Surya Kund', 'Ramayana'],
    bestTimeToVisit: 'October to March & Ram Navami (March/April)',
    timings: 'Shringar Aarti: 6:30 AM | Darshan: 7:00 AM - 11:30 AM & 2:00 PM - 9:30 PM',
    dressCode: 'Traditional Indian attire (Dhoti-Kurta, Kurta-Pajama, Saree, Salwar Suit)',
    seniorFriendly: true,
    wheelchairAccessible: true,
    audioGuideAvailable: true,
    significance: [
      'Birthplace of Lord Rama and capital of the ancient Kosala Kingdom',
      'Magnificent Nagara-style Ram Janmabhoomi Mandir with 392 intricately carved pillars',
      'Hanumangarhi Temple, where Lord Hanuman sits as the eternal guardian of Ayodhya',
      'Sacred Saryu River ghats featuring breathtaking sunset laser shows and Maha Aarti'
    ],
    rituals: [
      'Holy dip at Ram Ki Paidi at the break of dawn',
      'Darshan at Hanumangarhi before proceeding to the Ram Mandir',
      'Parikrama of the inner sanctum of Ram Lalla Virajman',
      'Evening Saryu Maha Aarti at Guptar Ghat'
    ],
    crowdLevel: 'Very High',
    budgetEstimate: {
      budget: { amount: '₹6,500 - ₹9,500', description: 'Clean Dharamsala / Tent City, local e-rickshaws, satvik dining' },
      comfort: { amount: '₹15,000 - ₹24,000', description: '3-Star Hotel / Ayodhya Heritage Stay, pre-booked VIP Darshan passes' },
      premium: { amount: '₹32,000 - ₹50,000', description: 'Luxury Tent City cottages, dedicated tour guide, private Saryu boat' }
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival, Hanumangarhi & Saryu Aarti',
        description: 'Seek blessings of Bajrangbali and witness the illuminated riverfront of Ayodhya.',
        activities: [
          { time: '10:00 AM', title: 'Airport / Station Welcome & Hotel Check-in', description: 'Arrive at Maharishi Valmiki Airport, check-in to your hotel with garland welcome.', tag: 'Arrival' },
          { time: '03:00 PM', title: 'Hanumangarhi 76-Step Temple', description: 'Ascend to the historic hilltop fortress temple and receive blessings of Lord Hanuman.', tag: 'Temple' },
          { time: '06:30 PM', title: 'Saryu River Maha Aarti & Ram Ki Paidi', description: 'Experience the divine synchronized river aarti with thousands of floating earthen diyas.', tag: 'Aarti' }
        ]
      },
      {
        day: 2,
        title: 'Ram Janmabhoomi Darshan & Kanak Bhawan',
        description: 'The monumental darshan of Ram Lalla and the gold-ornamented palace of Mata Sita.',
        activities: [
          { time: '06:30 AM', title: 'Ram Janmabhoomi Mandir Darshan', description: 'Walk the grand Ram Janmabhoomi Path for the soulful darshan of Ram Lalla Virajman.', tag: 'Sanctum' },
          { time: '11:00 AM', title: 'Kanak Bhawan & Sita Rasoi', description: 'Visit the divine palace gifted by Queen Kaikeyi to Sita with melodious continuous kirtan.', tag: 'Heritage' },
          { time: '04:00 PM', title: 'Surya Kund & Guptar Ghat', description: 'Quiet sunset meditation where Lord Rama completed his earthly avatara lila into the Saryu.', tag: 'Peace' }
        ]
      }
    ],
    packingChecklist: [
      'Comfortable walking shoes (long queue walking zones in Mandir complex)',
      'Valid physical Government ID (Aadhaar / Passport) for security check',
      'Small bag (large luggage and electronics are stored in locker rooms outside)',
      'Water bottle and sun umbrella for afternoon walking'
    ]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh & Haridwar',
    subtitle: 'Yoga Capital of the World & Gateway to Gods',
    state: 'Uttarakhand',
    category: 'Ashram',
    rating: 4.9,
    reviewsCount: 13900,
    duration: '3 - 5 Days',
    distanceFromAirport: '18 km from Dehradun Jolly Grant Airport',
    description: 'Where the emerald Ganga leaves the Shivalik Himalayas into the plains, surrounded by ancient yoga ashrams, chanting sadhus, and evening fires.',
    fullStory: `Rishikesh and Haridwar represent the peaceful threshold where the crystal-clear Ganga cascades down from the high Himalayas into the plains of northern India. 

In Haridwar, the holy Har Ki Pauri ghat is marked by the footprint of Lord Vishnu, hosting the world-famous evening Ganga Aarti. Just 25 km upstream, Rishikesh offers a serene sanctuary of meditation caves (like Vashistha Guha), world-renowned yoga ashrams (Parmarth Niketan, Sivananda Ashram), and suspension bridges with panoramic mountain views.`,
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1600100397608-f010e421d3f9?auto=format&fit=crop&w=1600&q=85',
    tags: ['Yoga & Meditation', 'Har Ki Pauri', 'Parmarth Niketan', 'Triveni Ghat', 'Beatles Ashram', 'Himalayas'],
    bestTimeToVisit: 'September to April (Pleasant weather, ideal for meditation and yoga)',
    timings: 'Ashrams: Open all day | Har Ki Pauri Aarti: 6:00 PM | Parmarth Aarti: 5:45 PM',
    dressCode: 'Comfortable modest yoga wear, loose cottons, light shawls for morning meditation',
    seniorFriendly: true,
    wheelchairAccessible: true,
    audioGuideAvailable: true,
    significance: [
      'Har Ki Pauri in Haridwar is one of the 4 sacred locations of the Maha Kumbh Mela',
      'Global epicentre of authentic Yoga, Ayurveda, and Vedic philosophy',
      'Vashistha Cave, where Sage Vashistha meditated over 5,000 years ago',
      'Parmarth Niketan evening Hawan & Ganga Aarti with soulful devotional music'
    ],
    rituals: [
      'Holy snan at Har Ki Pauri during auspicious Brahma Muhurta',
      'Morning Pranayama & Hatha Yoga session on the riverbanks',
      'Participating in the universal Yajna & Ganga Aarti at Parmarth Niketan',
      'Silent meditation inside the natural rock chamber of Vashistha Guha'
    ],
    crowdLevel: 'Moderate',
    budgetEstimate: {
      budget: { amount: '₹6,000 - ₹9,500', description: 'Ashram stay with satvik meals included, walking & local shared autos' },
      comfort: { amount: '₹14,000 - ₹22,000', description: 'Riverside Boutique Hotel / Ayurvedic Resort, daily private yoga master' },
      premium: { amount: '₹40,000 - ₹80,000', description: 'Luxury Wellness Retreat (Ananda in the Himalayas), holistic spa cures' }
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Haridwar Arrival & Har Ki Pauri Aarti',
        description: 'Vedic dip in the holy waters and the grand evening lamp ceremony.',
        activities: [
          { time: '11:00 AM', title: 'Arrival in Haridwar', description: 'Check-in to your riverside ashram or hotel, rest and enjoy sattvic herbal lunch.', tag: 'Arrival' },
          { time: '03:00 PM', title: 'Mansa Devi & Chandi Devi Cable Car', description: 'Ropeway ride to hilltop temples overlooking the sprawling Ganga plains.', tag: 'Temple' },
          { time: '06:00 PM', title: 'Har Ki Pauri Sunset Maha Aarti', description: 'Thousands of floating leaf cups with marigolds and glowing diyas floating into the night.', tag: 'Aarti' }
        ]
      },
      {
        day: 2,
        title: 'Rishikesh Ashrams & Meditation',
        description: 'Spiritual transition into Rishikesh, Parmarth Niketan, and peaceful ashram vibes.',
        activities: [
          { time: '06:30 AM', title: 'Sunrise Yoga by the River', description: 'Pranayama and gentle asana flow led by senior ashram yogis.', tag: 'Yoga' },
          { time: '10:00 AM', title: 'Ram Jhula & Swarg Ashram Trail', description: 'Explore ancient book stalls, Ayurvedic apothecaries, and traditional brassware.', tag: 'Exploration' },
          { time: '05:30 PM', title: 'Parmarth Niketan Hawan & Aarti', description: 'Sing kirtan along with international seekers as the sacred fire lights up the Himalayan dusk.', tag: 'Devotion' }
        ]
      }
    ],
    packingChecklist: [
      'Loose breathable yoga attire and cotton meditation mat / towel',
      'Light shawl or jacket for early morning river breezes',
      'Reusable stainless steel water flask',
      'Slip-on footwear and walking sandals'
    ]
  },
  {
    id: 'madurai',
    name: 'Madurai Meenakshi',
    subtitle: 'The Historic Temple City of the Divine Mother',
    state: 'Tamil Nadu',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 12800,
    duration: '2 - 3 Days',
    distanceFromAirport: '12 km from Madurai International Airport',
    description: 'A 2,500-year-old living cultural capital centered around the colossal Meenakshi Amman Temple with 14 towering sculpted gopurams.',
    fullStory: `Madurai is one of the oldest continuously inhabited cities in the world, often called the Athens of the East. The Meenakshi Sundareswarar Temple is a masterwork of Dravidian architecture, featuring 14 soaring gopurams (gateway towers) adorned with thousands of colorful mythological figures, and the legendary Hall of a Thousand Pillars where each sculpted pillar produces musical tones when tapped.

Every night, an elaborate procession carries Lord Sundareswarar (Shiva) to the bedchamber of Goddess Meenakshi accompanied by brass horns, drums, and Vedic priests.`,
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85',
    tags: ['Meenakshi Amman', 'Dravidian Architecture', '1000 Pillar Hall', 'Night Ceremony', 'Thirumalai Nayakkar'],
    bestTimeToVisit: 'October to March & Chithirai Festival (April)',
    timings: 'Morning: 5:00 AM - 12:30 PM | Evening: 4:00 PM - 10:00 PM',
    dressCode: 'Strict traditional attire (Dhoti/Veshti for men, Saree or Salwar with Dupatta for women)',
    seniorFriendly: true,
    wheelchairAccessible: true,
    audioGuideAvailable: true,
    significance: [
      'The sacred wedding site of Goddess Meenakshi (Parvati) and Lord Sundareswarar (Shiva)',
      'Hall of a Thousand Pillars (Aayiram Kaal Mandapam) with musical acoustic stone pillars',
      'Golden Lotus Pond (Porthamarai Kulam) where ancient Tamil Sangam poets judged classical verses',
      'Nightly Palliyarai (bedchamber) procession at 9:00 PM with sacred royal fanfare'
    ],
    rituals: [
      'Goddess Meenakshi Darshan followed by Sundareswarar Sanctum',
      'Darshan of the Mukkuruni Vinayagar (giant Ganesha deity made of single stone)',
      'Witnessing the night bedchamber palanquin procession',
      'Drinking authentic Madurai Jigarthanda beverage after evening prayers'
    ],
    crowdLevel: 'High',
    budgetEstimate: {
      budget: { amount: '₹6,000 - ₹9,000', description: 'Traditional lodge near West Tower, pure vegetarian South Indian mess dining' },
      comfort: { amount: '₹14,000 - ₹22,000', description: 'Heritage Hotel (Heritage Madurai / Courtyard), AC car and temple guide' },
      premium: { amount: '₹30,000 - ₹48,000', description: 'Luxury pool villa, exclusive priest arrangements, private palace tour' }
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Meenakshi Amman Temple & Night Procession',
        description: 'Immersion in Dravidian stone art and the divine evening wedding ceremony.',
        activities: [
          { time: '02:00 PM', title: 'Arrival & Heritage Check-in', description: 'Check-in to heritage property with fragrant jasmine flower garland greeting.', tag: 'Arrival' },
          { time: '04:30 PM', title: 'Meenakshi Temple & 1000 Pillar Hall', description: 'Explore the architectural wonder, musical pillars, and receive Goddess blessings.', tag: 'Sanctum' },
          { time: '09:00 PM', title: 'Night Palliyarai Procession', description: 'Witness the royal silver palanquin procession accompanied by traditional nadaswaram.', tag: 'Ritual' }
        ]
      },
      {
        day: 2,
        title: 'Thirumalai Nayakkar Palace & Alagar Kovil',
        description: 'Royal Nayak architecture and the sacred Vishnu shrine nestled in the Alagar hills.',
        activities: [
          { time: '08:00 AM', title: 'Thirumalai Nayakkar Palace', description: 'Marvel at the 82-foot-tall stucco pillars blending Dravidian and Islamic architecture.', tag: 'Heritage' },
          { time: '11:00 AM', title: 'Alagar Kovil (Kallazhagar Temple)', description: 'Visit the scenic forest hill temple with pristine natural spring springs.', tag: 'Temple' }
        ]
      }
    ],
    packingChecklist: [
      'Cotton Veshti/Dhoti and Angavastram (strictly mandatory for sanctum entry)',
      'Cotton sarees or non-tight salwar suits with dupattas',
      'Phone locker coins / small cash (phones not allowed in inner sanctum)',
      'Comfortable footwear for city walking'
    ]
  }
];

export const UPCOMING_TRIPS: UpcomingTrip[] = [
  {
    id: 'trip-kashi-1',
    destinationId: 'varanasi',
    destinationName: 'Kashi Darshan & Dev Deepawali',
    location: 'Varanasi, Uttar Pradesh',
    dates: 'Nov 12 - Nov 15, 2026',
    daysAway: 14,
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
    status: 'Confirmed',
    travelers: '2 Adults, 1 Senior',
    budgetTier: 'Comfort',
    seniorFriendly: true,
    familyMode: true,
    notes: 'Wheelchair assistance booked for Kashi Vishwanath Corridor. Sunset wooden boat reserved at Dashashwamedh Ghat.',
    schedule: [
      {
        day: 1,
        date: 'Nov 12',
        title: 'Arrival & Evening Ganga Aarti',
        highlights: ['Check-in at BrijRama Palace', 'Dashashwamedh VIP Boat Seating', 'Satvik Thali Dinner']
      },
      {
        day: 2,
        date: 'Nov 13',
        title: 'Kashi Vishwanath & Sarnath',
        highlights: ['04:30 AM Sugam Darshan', 'Rudrabhishek Pooja', 'Sarnath Monasteries', 'Sankat Mochan Evening']
      },
      {
        day: 3,
        date: 'Nov 14',
        title: 'Subah-e-Banaras & Dev Deepawali Glow',
        highlights: ['Sunrise Vedic Chant at Assi Ghat', '1 Million Earthen Lamps Lighting', 'Illuminated Riverfront Cruise']
      },
      {
        day: 4,
        date: 'Nov 15',
        title: 'Ganga Jal Blessing & Departure',
        highlights: ['Temple Prasadam Collection', 'Souvenir blessings', 'Airport Transfer']
      }
    ]
  }
];

export const SPIRITUAL_CALENDAR_EVENTS: SpiritualCalendarEvent[] = [
  {
    id: 'event-diwali',
    title: 'Diwali Mahotsav & Lakshmi Pooja',
    subtitle: 'Festival of Divine Lights & Prosperity',
    date: 'Nov 01, 2026',
    month: 'NOV',
    day: '01',
    crowdLevel: 'High',
    type: 'Mahotsav',
    badgeText: 'Festive Peak',
    description: 'Celebration of Lord Rama’s victorious return to Ayodhya and Goddess Lakshmi’s auspicious advent. Temples illuminated with lakhs of ghee lamps.',
    location: 'Ayodhya, Varanasi, Mathura & All Shrines',
    recommendedRituals: ['Deep Daan along riverbanks', 'Lakshmi-Ganesh Panchamrit Pooja', 'Shree Sukta Chanting'],
    muhurat: 'Pradosh Kaal: 05:36 PM - 08:11 PM'
  },
  {
    id: 'event-dev-deepawali',
    title: 'Kartik Purnima (Dev Deepawali)',
    subtitle: 'Night the Gods Descend on Kashi Ghats',
    date: 'Nov 15, 2026',
    month: 'NOV',
    day: '15',
    crowdLevel: 'Peak',
    type: 'Purnima',
    badgeText: 'Sacred High',
    description: 'Over 1 million earthen lamps illuminate all 84 ghats of Varanasi to celebrate Lord Shiva’s victory over the demon Tripurasura.',
    location: 'Varanasi (Dashashwamedh to Assi Ghats)',
    recommendedRituals: ['Brahma Muhurta Ganga Snan', 'Offering 108 oil lamps to the river', 'Maha Rudra Chanting'],
    muhurat: 'Purnima Tithi: Full Night from 06:19 AM'
  },
  {
    id: 'event-gita-jayanti',
    title: 'Gita Jayanti & Mokshada Ekadashi',
    subtitle: 'Advent of the Bhagavad Gita at Kurukshetra',
    date: 'Dec 21, 2026',
    month: 'DEC',
    day: '21',
    crowdLevel: 'Moderate',
    type: 'Jayanti',
    badgeText: 'Auspicious',
    description: 'The sacred day Lord Krishna delivered the immortal Bhagavad Gita discourse to Arjuna on the battlefield of Kurukshetra.',
    location: 'Kurukshetra, Vrindavan & ISKCON Centers',
    recommendedRituals: ['Complete 18-chapter Gita Parayana', 'Ekadashi Fasting', 'Tulsi Arpanam to Krishna'],
    muhurat: 'Ekadashi Parana: 07:11 AM - 09:14 AM'
  },
  {
    id: 'event-maha-shivratri',
    title: 'Maha Shivratri Mahotsav',
    subtitle: 'The Great Night of Lord Shiva & Divine Union',
    date: 'Feb 26, 2027',
    month: 'FEB',
    day: '26',
    crowdLevel: 'Peak',
    type: 'Mahotsav',
    badgeText: 'Most Sacred',
    description: 'The supreme night of Lord Shiva’s cosmic dance (Tandava) and sacred wedding to Goddess Parvati across all 12 Jyotirlingas.',
    location: 'Varanasi, Somnath, Ujjain, Kedarnath, Rameshwaram',
    recommendedRituals: ['4 Prahar Continuous Abhishek', 'Bilvapatra Offering', 'All-night Jaagran with Om Namah Shivaya'],
    muhurat: 'Nishita Kaal Puja: 12:08 AM - 12:59 AM'
  }
];

export const SACRED_ROUTES: SacredRoute[] = [
  {
    id: 'char-dham-circuit',
    title: 'Chhota Char Dham Circuit',
    subtitle: 'Yamunotri • Gangotri • Kedarnath • Badrinath',
    totalDays: '10 - 12 Days',
    stopsCount: 4,
    difficulty: 'Moderate',
    season: 'May - Jun & Sep - Oct',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    stops: [
      { name: 'Yamunotri', day: 2, description: 'Source of the Yamuna & Divya Shila pooja', altitude: '3,293 m' },
      { name: 'Gangotri', day: 4, description: 'Bhagirath Shila & origin of Mother Ganga', altitude: '3,100 m' },
      { name: 'Kedarnath', day: 7, description: 'Highest Jyotirlinga in snow-peaked valley', altitude: '3,583 m' },
      { name: 'Badrinath', day: 10, description: 'Abode of Lord Vishnu near Mana border', altitude: '3,300 m' }
    ],
    highlights: ['Sacred Himalayan River Confluences', 'Thermal Hot Springs Bath', 'Mana - India’s First Village'],
    transportMode: 'Private AC Tempo Traveler / Helicopter Packages'
  },
  {
    id: 'jyotirlinga-trail',
    title: 'Western Jyotirlinga Odyssey',
    subtitle: 'Mahakaleshwar • Omkareshwar • Somnath • Nageshwar',
    totalDays: '7 - 8 Days',
    stopsCount: 4,
    difficulty: 'Easy',
    season: 'Year-Round (Best Oct - Mar)',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    stops: [
      { name: 'Mahakaleshwar (Ujjain)', day: 1, description: 'Dakshinmukhi Jyotirlinga & 4:00 AM Bhasma Aarti' },
      { name: 'Omkareshwar', day: 3, description: 'Island shrine shaped like sacred Om on Narmada' },
      { name: 'Somnath (Gujarat)', day: 5, description: 'The eternal seaside first Jyotirlinga' },
      { name: 'Dwarka & Nageshwar', day: 7, description: 'Lord Krishna’s kingdom and sacred darshan' }
    ],
    highlights: ['Live Bhasma Aarti attendance', 'Narmada Parikrama boat crossing', 'Sound & Light seaside spectacle'],
    transportMode: 'Express Train & Private AC Taxi'
  },
  {
    id: 'south-temple-trail',
    title: 'Grand Dravidian Temple Trail',
    subtitle: 'Madurai • Rameshwaram • Kanchipuram • Thanjavur',
    totalDays: '6 - 7 Days',
    stopsCount: 5,
    difficulty: 'Easy',
    season: 'Oct - Mar',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    stops: [
      { name: 'Kanchipuram', day: 1, description: 'City of 1,000 temples and Ekambareswarar' },
      { name: 'Thanjavur Brihadisvara', day: 3, description: 'UNESCO Big Temple of the Chola Dynasty' },
      { name: 'Madurai Meenakshi', day: 5, description: 'Goddess Meenakshi & 1000 pillar hall' },
      { name: 'Rameshwaram', day: 6, description: '22 theerthams and Ram Setu point' }
    ],
    highlights: ['Chola stone engineering masterworks', 'Sacred 22 well baths', 'Night palanquin ceremonies'],
    transportMode: 'Private AC Chauffeur Sedan'
  }
];

export const DAILY_SLOKAS: DailySloka[] = [
  {
    id: 'sloka-1',
    sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
    transliteration: 'Oṃ Tryambakaṃ Yajāmahe Sugandhiṃ Puṣṭi-Vardhanam |\nUrvārukam-Iva Bandhanān Mṛtyor-Mukṣīya Māmṛtāt ||',
    translation: 'We worship the Three-Eyed Lord Shiva, who is fragrant and nourishes all beings. As the ripe cucumber is freed from its stem, may He liberate us from death for the sake of immortality.',
    source: 'Rigveda (7.59.12) / Maha Mrityunjaya Mantra',
    deity: 'Lord Shiva',
    significance: 'Chanting this supreme mantra bestows spiritual protection, longevity, mental clarity, and dispels fear of the unknown.'
  },
  {
    id: 'sloka-2',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: 'Karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo \'stv akarmaṇi ||',
    translation: 'You have a right only to work, but never to the fruits of work. Let not the fruit of action be your motive, nor let your attachment be to inaction.',
    source: 'Bhagavad Gita (Chapter 2, Verse 47)',
    deity: 'Lord Krishna',
    significance: 'The core philosophy of Nishkama Karma (selfless action), bringing profound equanimity in every endeavor.'
  },
  {
    id: 'sloka-3',
    sanskrit: 'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\nविश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम्।',
    transliteration: 'Śāntākāraṁ Bhujaga-śayanaṁ Padma-nābhaṁ Sureśaṁ\nViśvādhāraṁ Gagana-sadṛśaṁ Megha-varṇaṁ Śubhāṅgam |',
    translation: 'Salutations to Lord Vishnu, of tranquil form, resting on the cosmic serpent, with a lotus in His navel, the Lord of gods, the foundation of the universe, boundless as the sky.',
    source: 'Vishnu Stuti',
    deity: 'Lord Vishnu',
    significance: 'Meditating on this form invokes deep inner peace, cosmic balance, and steadfast serenity amidst life’s currents.'
  }
];

export const destinationsData = SACRED_DESTINATIONS;
export const upcomingTripsData = UPCOMING_TRIPS;
export const dailySlokasData = DAILY_SLOKAS;
export const spiritualCalendarData = SPIRITUAL_CALENDAR_EVENTS;
export const sacredRoutesData = SACRED_ROUTES;

