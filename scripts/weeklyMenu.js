const noJosik = "조식은 제공하지 않습니다";
const noSuksik = '석식은 제공하지 않습니다';
const noHoliday = "휴일에는 제공하지 않습니다";

const weekly_giksik = [
  // 일요일
  [
    // 조식
    [
      ['제육떡조림', '쌀밥', '땡초어묵국', '마늘쫑멸치볶음', 'SELF 계란후라이', '숙주나물', '배추김치'],
      [noJosik]
    ],
    // 중식
    [
      ['묵은지찜닭', '쌀밥', '수제비국', '감자버터오븐구이', '명엽채볶음', '도시락김', '열무김치'],
      [noHoliday]
    ],
    // 석식
    [
      ['닭개장 + 양념사리', '쌀밥', '해물완자전 + 케찹', '브로콜리맛살볶음', '무말랭이지', '배추김치'],
      [noSuksik]
    ]
  ],

  // 월요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 화요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 수요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 목요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 금요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 토요일
  [
    // 조식
    [
      [],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ]
]

const weekly_haksik = [
  // 일요일
  [
    // 조식
    [
      [noHoliday],
      [noHoliday]
    ],
    // 중식
    [
      [noHoliday],
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday],
      [noHoliday]
    ]
  ],

  // 월요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 화요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 수요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 목요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 금요일
  [
    // 조식
    [
      [noJosik],
      [noJosik]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [],
      [noSuksik]
    ]
  ],

  // 토요일
  [
    // 조식
    [
      [noHoliday],
      [noHoliday]
    ],
    // 중식
    [
      [],
      []
    ],
    // 석식
    [
      [noHoliday],
      [noHoliday]
    ]
  ]
]

const weekly_kyosik = [
  // 일요일
  [
    // 조식
    [
      [noHoliday]
    ],
    // 중식
    [
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday]
    ]
  ],

  // 월요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 화요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 수요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 목요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 금요일
  [
    // 조식
    [
      [noJosik]
    ],
    // 중식
    [
      []
    ],
    // 석식
    [
      []
    ]
  ],

  // 토요일
  [
    // 조식
    [
      [noHoliday]
    ],
    // 중식
    [
      [noHoliday]
    ],
    // 석식
    [
      [noHoliday]
    ]
  ]
]

// const today, day, hour are already defined in timeInfo.js
// 아침 : 전날 20:00 ~ 10:00시 점심 :10:00~14:00 저녁: 14:00 ~ 20:00
let eatDay = day;
if (hour >= 20) eatDay = (eatDay + 1) % 7;

let eatHour = 0;
if (10 < hour && hour < 14) eatHour = 1;
else if(14 < hour && hour < 20) eatHour = 2;

// 긱식 업데이트
const giksik = document.querySelector('.giksik').querySelectorAll('.menu');
for(let place = 0; place < 2; place++) {

  for(let i = 0, menuLen = weekly_giksik[eatDay][eatHour][place].length; i < menuLen; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(weekly_giksik[eatDay][eatHour][place][i]));
    giksik[place].appendChild(li);
  }
}

// 학식 업데이트
const haksik = document.querySelector('.haksik').querySelectorAll('.menu');
for(let place = 0; place < 2; place++) {

  for(let i = 0, menuLen = weekly_haksik[eatDay][eatHour][place].length; i < menuLen; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(weekly_haksik[eatDay][eatHour][place][i]));
    haksik[place].appendChild(li);
  }
}

// 교식 업데이트
const kyosik = document.querySelector('.kyosik').querySelectorAll('.menu');
for(let place = 0; place < 1; place++) {

  for(let i = 0, menuLen = weekly_kyosik[eatDay][eatHour][place].length; i < menuLen; i++) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(weekly_kyosik[eatDay][eatHour][place][i]));
    kyosik[place].appendChild(li);
  }
}
