/* ===== 중학 1학년 (Level 7B + 7A + 8B) ===== */
TESTS.grade7 = { name: "중학 1학년", levels: ["7B","7A","8B"], questions: [
// --- Level 7B (14문항) ---
{id:1,level:"7B",chapter:"인칭대명사",topic:"인칭대명사",
 stem:"빈칸에 알맞은 것은?\nMy sister and I went shopping. ___ bought a new dress.",
 choices:["I","Me","She","We","Us"],answer:4,
 analysis:{1:"복수 주어(My sister and I)를 단수로 이해",2:"주어 자리에 목적격 사용",3:"복수 주어를 3인칭 단수로 이해",5:"주어 자리에 목적격 사용"}},

{id:2,level:"7B",chapter:"be동사",topic:"be동사 현재형",
 stem:"빈칸에 알맞은 것은?\nThe students ___ in the classroom now.",
 choices:["am","is","are","was","were"],answer:3,
 analysis:{1:"복수 주어에 1인칭 am 사용",2:"복수 주어에 단수 is 사용",4:"현재인데 과거형 사용(단수)",5:"현재인데 과거형 사용(복수)"}},

{id:3,level:"7B",chapter:"be동사",topic:"be동사 과거형",
 stem:"빈칸에 알맞은 것은?\nThe weather ___ very cold yesterday.",
 choices:["is","are","was","were","be"],answer:3,
 analysis:{1:"과거인데 현재형 사용",2:"단수 주어에 are 사용",4:"단수 주어에 were 사용",5:"원형 그대로 사용"}},

{id:4,level:"7B",chapter:"be동사",topic:"There is/are",
 stem:"빈칸에 알맞은 것은?\nThere ___ three books on the table.",
 choices:["is","has","are","have","was"],answer:3,
 analysis:{1:"복수 명사에 is 사용",2:"There+be에 have/has 사용",4:"There+be에 have 사용",5:"현재인데 과거형 사용"}},

{id:5,level:"7B",chapter:"일반동사",topic:"현재형",
 stem:"빈칸에 알맞은 것은?\nHe always ___ his teeth before bed.",
 choices:["brush","brushs","brushes","brushing","is brush"],answer:3,
 analysis:{1:"3인칭 단수 -es 규칙 미적용",2:"-es 철자 규칙 오류(-sh로 끝나면 -es)",3:"올바른 답",4:"단순 현재에 진행형 사용",5:"일반동사에 be동사 사용"}},

{id:6,level:"7B",chapter:"일반동사",topic:"현재형 부정문/의문문",
 stem:"다음 중 올바른 문장은?",
 choices:["She don't know the answer.","She doesn't knows the answer.","She doesn't know the answer.","She isn't know the answer.","She not knows the answer."],answer:3,
 analysis:{1:"3인칭 단수에 don't 사용",2:"doesn't 뒤에 원형 미사용",4:"일반동사 부정에 be동사 사용",5:"do/does 없이 not만 사용"}},

{id:7,level:"7B",chapter:"일반동사",topic:"과거형 규칙변화",
 stem:"'study'의 과거형은?",
 choices:["studyed","studed","studied","studyied","studding"],answer:3,
 analysis:{1:"자음+y → -ied 규칙 미적용",2:"철자 오류",4:"존재하지 않는 형태",5:"-ing 형태와 혼동"}},

{id:8,level:"7B",chapter:"일반동사",topic:"과거형 불규칙변화",
 stem:"'teach'의 과거형은?",
 choices:["teached","teaching","tought","taught","teach"],answer:4,
 analysis:{1:"불규칙 동사에 -ed 규칙 적용",2:"과거형이 아닌 진행형",3:"철자 오류(tought→taught)",5:"과거형 변화 미적용"}},

{id:9,level:"7B",chapter:"의문사",topic:"Who, What",
 stem:"빈칸에 알맞은 것은?\n___ did you have for lunch?",
 choices:["Who","Where","What","When","How"],answer:3,
 analysis:{1:"음식에 who(사람) 사용",2:"음식에 where(장소) 사용",4:"음식에 when(시간) 사용",5:"음식에 how(방법) 사용"}},

{id:10,level:"7B",chapter:"명사",topic:"셀 수 있는 명사",
 stem:"다음 중 복수형이 올바른 것은?",
 choices:["sheeps","mouses","women","childs","foots"],answer:3,
 analysis:{1:"sheep은 단복수 동형",2:"mouse→mice (불규칙)",4:"child→children (불규칙)",5:"foot→feet (불규칙)"}},

{id:11,level:"7B",chapter:"관사",topic:"부정관사 a(n)",
 stem:"빈칸에 알맞은 것은?\nShe is ___ university student.",
 choices:["a","an","the","(없음)","one"],answer:1,
 analysis:{2:"university는 [juː]로 시작(자음 발음) → a가 맞음",3:"특정하지 않은 대상에 the 사용",4:"관사 필요성 미인지",5:"수사와 관사 혼동"}},

{id:12,level:"7B",chapter:"형용사",topic:"형용사의 역할",
 stem:"빈칸에 알맞은 것은?\nThe movie was ___.",
 choices:["excite","exciting","excitingly","excited","excitement"],answer:2,
 analysis:{1:"형용사가 아닌 동사 원형 사용",3:"보어 자리에 부사 사용",4:"사물 주어에 -ed 감정분사 사용(사람에게 적합)",5:"명사를 보어로 사용"}},

{id:13,level:"7B",chapter:"부사",topic:"빈도부사",
 stem:"다음 중 빈도부사의 위치가 올바른 문장은?",
 choices:["She late is never.","She is never late.","Never she is late.","Is she never late.","She never is late."],answer:2,
 analysis:{1:"어순 완전 오류",3:"빈도부사를 문장 맨 앞에 배치",4:"의문문 형태로 변환",5:"빈도부사를 be동사 앞에 배치"}},

{id:14,level:"7B",chapter:"시제",topic:"현재/과거/미래",
 stem:"빈칸에 알맞은 것은?\nShe ___ to Japan next month.",
 choices:["goes","went","will go","going","is go"],answer:3,
 analysis:{1:"미래인데 현재형 사용",2:"미래인데 과거형 사용",4:"be동사 없이 -ing만 사용",5:"be동사를 잘못 사용"}},

// --- Level 7A (13문항) ---
{id:15,level:"7A",chapter:"조동사",topic:"can",
 stem:"빈칸에 알맞은 것은?\nShe ___ play the violin when she was five.",
 choices:["can","could","was can","could to","cans"],answer:2,
 analysis:{1:"과거인데 현재형 can 사용",3:"be동사+can 조합(불가)",4:"could 뒤에 to 사용",5:"조동사에 -s 붙임"}},

{id:16,level:"7A",chapter:"조동사",topic:"must",
 stem:"빈칸에 알맞은 것은?\nYou ___ drive without a license.",
 choices:["must","must not","don't must","not must","mustn't to"],answer:2,
 analysis:{1:"금지인데 의무로 해석",3:"조동사 부정에 don't 사용",4:"not의 위치 오류",5:"mustn't 뒤에 to 사용"}},

{id:17,level:"7A",chapter:"to부정사",topic:"명사적 용법: 주어",
 stem:"빈칸에 알맞은 것은?\n___ is important for health.",
 choices:["Exercise","To exercise","Exercising","Exercised","Exercises"],answer:2,
 analysis:{1:"명사 원형도 가능하지만 to부정사가 더 적합한 문맥",3:"동명사도 가능하지만 to exercise가 더 자연스러움",4:"과거분사를 주어로 사용",5:"3인칭 동사형을 주어로 사용"}},

{id:18,level:"7A",chapter:"to부정사",topic:"가주어 It",
 stem:"다음 중 올바른 문장은?",
 choices:["It is easy learn English.","It is easy to learn English.","To learn English it is easy.","It easy is to learn English.","Is it easy learn English."],answer:2,
 analysis:{1:"to 누락",3:"가주어 It 구문의 어순 오류",4:"어순 오류",5:"의문문 형태로 변환"}},

{id:19,level:"7A",chapter:"to부정사",topic:"부사적 용법: 목적",
 stem:"빈칸에 알맞은 것은?\nI went to the store ___ milk.",
 choices:["buy","to buy","buying","bought","for buy"],answer:2,
 analysis:{1:"to 없이 원형 사용",3:"목적에 동명사 사용",4:"과거형을 목적에 사용",5:"for 뒤에 원형 사용(for buying이 맞음)"}},

{id:20,level:"7A",chapter:"동명사",topic:"동명사의 역할",
 stem:"빈칸에 알맞은 것은?\nShe is good at ___.",
 choices:["cook","to cook","cooking","cooks","cooked"],answer:3,
 analysis:{1:"전치사 뒤에 원형 사용",2:"전치사(at) 뒤에 to부정사 사용",4:"전치사 뒤에 3인칭 형태 사용",5:"전치사 뒤에 과거형 사용"}},

{id:21,level:"7A",chapter:"접속사",topic:"and, but, or, so",
 stem:"빈칸에 알맞은 것은?\nIt was raining, ___ we stayed home.",
 choices:["but","or","and","so","because"],answer:4,
 analysis:{1:"결과가 아닌 대조의 의미",2:"결과가 아닌 선택의 의미",3:"결과가 아닌 병렬의 의미",5:"because는 원인절에 사용(어순이 다름)"}},

{id:22,level:"7A",chapter:"접속사",topic:"when, while",
 stem:"빈칸에 알맞은 것은?\n___ I was sleeping, the phone rang.",
 choices:["During","For","While","Because","If"],answer:3,
 analysis:{1:"During은 전치사(접속사 아님)",2:"For은 이유/기간의 전치사",4:"시간이 아닌 원인 접속사",5:"시간이 아닌 조건 접속사"}},

{id:23,level:"7A",chapter:"접속사",topic:"because",
 stem:"빈칸에 알맞은 것은?\nHe was late ___ the bus was delayed.",
 choices:["so","but","because","and","or"],answer:3,
 analysis:{1:"원인이 아닌 결과(어순 반대)",2:"원인이 아닌 대조",4:"원인이 아닌 병렬",5:"원인이 아닌 선택"}},

{id:24,level:"7A",chapter:"전치사",topic:"시간: in, on, at",
 stem:"빈칸에 알맞은 것은?\nWe have a meeting ___ Monday morning.",
 choices:["in","at","on","to","by"],answer:3,
 analysis:{1:"요일에 in 사용",2:"요일에 at 사용",4:"요일에 to 사용",5:"요일에 by 사용"}},

{id:25,level:"7A",chapter:"전치사",topic:"장소: in, on, at",
 stem:"빈칸에 알맞은 것은?\nThere is a fly ___ the ceiling.",
 choices:["in","at","on","under","behind"],answer:3,
 analysis:{1:"천장 표면에 in 사용",2:"천장 표면에 at 사용",4:"천장 아래에 있는 것이 아닌 붙어 있음",5:"천장 뒤에 있지 않음"}},

{id:26,level:"7A",chapter:"문장 종류",topic:"감탄문",
 stem:"빈칸에 알맞은 것은?\n___ a wonderful day it is!",
 choices:["How","How a","What","What a","Very"],answer:4,
 analysis:{1:"명사구 앞에 How 사용",2:"How 뒤에 관사 사용",3:"단수 셀 수 있는 명사 앞에 a 누락",5:"감탄문 형식 미이해"}},

{id:27,level:"7A",chapter:"문장의 형태",topic:"5형식",
 stem:"다음 중 5형식 문장은?",
 choices:["She is happy.","I gave her a book.","We call him Tom.","He runs fast.","They went home."],answer:3,
 analysis:{1:"2형식(S+V+C)을 5형식으로 혼동",2:"4형식(S+V+IO+DO)을 5형식으로 혼동",4:"1형식(S+V)을 5형식으로 혼동",5:"1형식(S+V)을 5형식으로 혼동"}},

// --- Level 8B (13문항) ---
{id:28,level:"8B",chapter:"대명사",topic:"부정대명사: one, another, the other",
 stem:"빈칸에 알맞은 것은?\nI have two dogs. One is white, and ___ is black.",
 choices:["another","other","the other","others","the others"],answer:3,
 analysis:{1:"둘 중 나머지 하나에 another(셋 이상) 사용",2:"other 단독 사용(관사 필요)",4:"둘 중 나머지에 others(복수) 사용",5:"둘 중 하나에 the others(복수) 사용"}},

{id:29,level:"8B",chapter:"시제",topic:"현재완료",
 stem:"빈칸에 알맞은 것은?\nI ___ in Seoul for 10 years.",
 choices:["live","lived","have lived","am living","was living"],answer:3,
 analysis:{1:"계속을 나타내는 for와 현재 단순 사용",2:"과거형은 현재까지 계속됨을 못 나타냄",4:"현재진행은 for 10 years와 부자연스러움",5:"과거진행은 현재까지 계속됨을 못 나타냄"}},

{id:30,level:"8B",chapter:"시제",topic:"현재완료: 경험",
 stem:"빈칸에 알맞은 것은?\nHave you ever ___ to Japan?",
 choices:["go","went","gone","been","going"],answer:4,
 analysis:{1:"have 뒤에 원형 사용",2:"have 뒤에 과거형 사용",3:"gone은 가버린 상태(been이 경험에 적합)",5:"have 뒤에 -ing 사용"}},

{id:31,level:"8B",chapter:"시제",topic:"현재완료 부정문",
 stem:"다음 중 올바른 현재완료 부정문은?",
 choices:["She hasn't finish yet.","She hasn't finished yet.","She didn't have finished.","She not has finished.","She haven't finished."],answer:2,
 analysis:{1:"have/has 뒤에 원형 사용(과거분사 필요)",3:"did와 have를 함께 사용",4:"not의 위치 오류",5:"3인칭 단수에 haven't 사용"}},

{id:32,level:"8B",chapter:"조동사",topic:"should, had better",
 stem:"빈칸에 알맞은 것은?\nYou ___ see a doctor.",
 choices:["should","should to","should be","don't should","should must"],answer:1,
 analysis:{2:"should 뒤에 to 사용",3:"should 뒤에 be 불필요",4:"should 부정에 don't 사용",5:"조동사를 2개 연속 사용"}},

{id:33,level:"8B",chapter:"to부정사",topic:"형용사적 용법",
 stem:"빈칸에 알맞은 것은?\nI have a lot of homework ___.",
 choices:["do","to do","doing","done","for do"],answer:2,
 analysis:{1:"to 없이 원형 사용",3:"명사 수식에 동명사 사용",4:"과거분사를 명사 뒤에 사용",5:"for 뒤에 원형 사용"}},

{id:34,level:"8B",chapter:"to부정사",topic:"too~to / enough to",
 stem:"빈칸에 알맞은 것은?\nHe is too young ___ drive.",
 choices:["for","to","that","enough","so"],answer:2,
 analysis:{1:"too~to 구문에 for 사용",3:"too~to 구문에 that 사용",4:"enough는 too와 함께 사용하지 않음",5:"too~to 구문에 so 사용"}},

{id:35,level:"8B",chapter:"동명사",topic:"동명사와 to부정사",
 stem:"빈칸에 알맞은 것은?\nShe finished ___ her report.",
 choices:["write","to write","writing","written","writes"],answer:3,
 analysis:{1:"finish 뒤에 원형 사용",2:"finish는 to부정사를 목적어로 취하지 않음",4:"과거분사를 목적어로 사용",5:"3인칭 형태를 목적어로 사용"}},

{id:36,level:"8B",chapter:"접속사",topic:"if, unless",
 stem:"빈칸에 알맞은 것은?\n___ you study hard, you will fail.",
 choices:["If","Unless","Because","When","While"],answer:2,
 analysis:{1:"If you study hard → 열심히 하면 실패(논리 모순)",3:"조건이 아닌 원인",4:"조건이 아닌 시간",5:"조건이 아닌 동시 시간"}},

{id:37,level:"8B",chapter:"접속사",topic:"both A and B",
 stem:"빈칸에 알맞은 것은?\n___ Tom and Jerry are my friends.",
 choices:["Both","Either","Neither","Not only","Whether"],answer:1,
 analysis:{2:"Either는 or와 함께 사용",3:"Neither는 nor와 함께 사용",4:"Not only는 but also와 함께 사용",5:"Whether는 or과 함께 사용"}},

{id:38,level:"8B",chapter:"수동태",topic:"능동태와 수동태",
 stem:"다음 문장의 수동태는?\nTom broke the window.",
 choices:["The window broke by Tom.","The window was broke by Tom.","The window was broken by Tom.","The window is broken by Tom.","The window broken by Tom."],answer:3,
 analysis:{1:"be동사 누락",2:"break의 과거분사 형태 오류(broke→broken)",4:"과거 능동태를 현재 수동태로 변환",5:"be동사 완전 누락"}},

{id:39,level:"8B",chapter:"분사",topic:"현재분사와 과거분사",
 stem:"빈칸에 알맞은 것은?\nThe movie was very ___.",
 choices:["bored","boring","bore","boredom","boringly"],answer:2,
 analysis:{1:"사물 주어에 -ed 감정분사 사용(사람에게 적합)",3:"동사 원형을 형용사로 사용",4:"명사를 보어로 사용",5:"부사를 보어로 사용"}},

{id:40,level:"8B",chapter:"분사",topic:"분사구문",
 stem:"빈칸에 알맞은 것은?\n___ the door, she entered the room.",
 choices:["Open","Opened","Opening","To opening","She opening"],answer:3,
 analysis:{1:"분사가 아닌 원형 사용",2:"능동인데 과거분사 사용",4:"to+ing 형태(존재하지 않음)",5:"분사구문에 주어 포함"}}
]};
