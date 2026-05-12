/* ===== 초등 6학년 (Level 6B + 6A + 7) ===== */
TESTS.grade6 = { name: "초등 6학년", levels: ["6B","6A","7"], questions: [
// --- Level 6B (14문항) ---
{id:1,level:"6B",chapter:"진행형",topic:"현재진행형",
 stem:"빈칸에 알맞은 것은? 'Be quiet! The baby ___.'",
 choices:["sleeps","sleep","is sleeping","was sleeping","slept"],answer:3,
 analysis:{1:"현재 진행 상황에 단순 현재 사용",2:"주어에 맞지 않는 원형 사용",4:"현재인데 과거진행형 사용",5:"현재인데 과거형 사용"}},

{id:2,level:"6B",chapter:"진행형",topic:"현재진행형 부정문",
 stem:"다음 중 올바른 문장은?",
 choices:["They aren't watching TV.","They don't watching TV.","They doesn't watching TV.","They not are watching TV.","They aren't watch TV."],answer:1,
 analysis:{2:"진행형 부정에 don't 사용",3:"진행형 부정에 doesn't 사용",4:"not의 위치 오류",5:"-ing 누락"}},

{id:3,level:"6B",chapter:"진행형",topic:"과거진행형",
 stem:"빈칸에 알맞은 것은? 'She ___ a book at 8 last night.'",
 choices:["reads","read","is reading","was reading","were reading"],answer:4,
 analysis:{1:"과거 진행인데 현재형 사용",2:"단순 과거와 과거진행 구분 못함",3:"과거인데 현재진행형 사용",5:"단수 주어에 were 사용"}},

{id:4,level:"6B",chapter:"미래형",topic:"will",
 stem:"빈칸에 알맞은 것은? 'We ___ a party next Saturday.'",
 choices:["have","had","will have","having","are have"],answer:3,
 analysis:{1:"미래인데 현재 원형 사용",2:"미래인데 과거형 사용",4:"be동사 없이 -ing만 사용",5:"be동사를 잘못 사용"}},

{id:5,level:"6B",chapter:"미래형",topic:"will 부정문",
 stem:"다음 중 올바른 문장은?",
 choices:["He won't comes.","He won't come.","He willn't come.","He doesn't will come.","He not will come."],answer:2,
 analysis:{1:"won't 뒤에 원형 미사용",3:"축약형 오류",4:"will 부정에 doesn't 사용",5:"not의 위치 오류"}},

{id:6,level:"6B",chapter:"미래형",topic:"be going to",
 stem:"빈칸에 알맞은 것은? 'They ___ move to Busan.'",
 choices:["going to","are going to","is going to","are go to","will going to"],answer:2,
 analysis:{1:"be동사 누락",3:"복수 주어에 is 사용",4:"going이 아닌 원형 go 사용",5:"will과 be going to 혼합"}},

{id:7,level:"6B",chapter:"형용사",topic:"형용사의 쓰임",
 stem:"빈칸에 알맞은 것은? 'The food tastes ___.'",
 choices:["deliciously","delicious","more deliciously","very deliciously","deliciousness"],answer:2,
 analysis:{1:"감각동사 뒤에 부사 사용",3:"감각동사 뒤에 비교급 부사 사용",4:"감각동사 뒤에 부사 사용",5:"명사를 보어로 사용"}},

{id:8,level:"6B",chapter:"형용사",topic:"수와 양",
 stem:"빈칸에 알맞은 것은? 'I have ___ friends.'",
 choices:["much","a little","many","a lot","little"],answer:3,
 analysis:{1:"셀 수 있는 명사에 much 사용",2:"셀 수 있는 명사에 a little 사용",4:"a lot 단독은 부사(a lot of가 필요)",5:"셀 수 있는 명사에 little 사용"}},

{id:9,level:"6B",chapter:"부사",topic:"부사의 형태",
 stem:"빈칸에 알맞은 것은? 'She danced ___.'",
 choices:["beautiful","beautifully","beauty","beautifuler","more beautiful"],answer:2,
 analysis:{1:"동사 수식에 형용사 사용",3:"명사를 부사 자리에 사용",4:"존재하지 않는 비교급 형태",5:"비교급을 일반 수식에 사용"}},

{id:10,level:"6B",chapter:"부사",topic:"빈도부사",
 stem:"다음 중 빈도부사의 위치가 올바른 문장은?",
 choices:["She plays usually tennis.","She usually plays tennis.","Usually she plays tennis often.","She plays tennis usually.","Plays she usually tennis."],answer:2,
 analysis:{1:"빈도부사를 일반동사 뒤에 배치",3:"빈도부사를 2개 사용",4:"빈도부사를 문장 끝에 배치",5:"어순 완전히 오류"}},

{id:11,level:"6B",chapter:"진행형",topic:"진행형 vs 단순시제",
 stem:"빈칸에 알맞은 것은? 'I ___ coffee every morning.'",
 choices:["am drinking","drink","drinking","was drinking","drinks"],answer:2,
 analysis:{1:"습관에 진행형 사용",3:"be동사 없이 -ing만 사용",4:"습관에 과거진행 사용",5:"1인칭에 3인칭 단수 -s 사용"}},

{id:12,level:"6B",chapter:"미래형",topic:"will 의문문",
 stem:"다음 중 올바른 의문문은?",
 choices:["Will it snows tomorrow?","Will it snow tomorrow?","Does it will snow?","It will snow tomorrow?","Is it will snow?"],answer:2,
 analysis:{1:"will 뒤에 원형 미사용",3:"will 의문에 Does 사용",4:"도치 없이 평서문 어순",5:"will 의문에 Is 사용"}},

{id:13,level:"6B",chapter:"형용사",topic:"형용사 종류",
 stem:"다음 중 형용사인 것은?",
 choices:["run","quickly","friendly","happily","swim"],answer:3,
 analysis:{1:"동사를 형용사로 혼동",2:"-ly 부사를 형용사로 혼동",4:"-ly 부사를 형용사로 혼동",5:"동사를 형용사로 혼동"}},

{id:14,level:"6B",chapter:"부사",topic:"부사의 쓰임",
 stem:"빈칸에 알맞은 것은? 'He speaks English very ___.'",
 choices:["good","well","goodly","best","better"],answer:2,
 analysis:{1:"부사 자리에 형용사 사용(good→well)",3:"존재하지 않는 형태",4:"최상급을 일반 수식에 사용",5:"비교급을 일반 수식에 사용"}},

// --- Level 6A (13문항) ---
{id:15,level:"6A",chapter:"조동사",topic:"can",
 stem:"다음 중 올바른 문장은?",
 choices:["She can plays the piano.","She can play the piano.","She cans play the piano.","She can to play the piano.","She is can play the piano."],answer:2,
 analysis:{1:"can 뒤에 원형 미사용(-s 유지)",3:"조동사에 -s 붙임",4:"can 뒤에 to 사용",5:"can 앞에 be동사 사용"}},

{id:16,level:"6A",chapter:"조동사",topic:"may",
 stem:"빈칸에 알맞은 것은? 'It ___ rain this afternoon.'",
 choices:["may","mays","may to","maybe","is may"],answer:1,
 analysis:{2:"조동사에 -s 붙임",3:"may 뒤에 to 사용",4:"부사 maybe와 혼동",5:"may 앞에 be동사 사용"}},

{id:17,level:"6A",chapter:"조동사",topic:"must, have to",
 stem:"'must'와 같은 의미의 표현은?",
 choices:["have to","want to","need","like to","going to"],answer:1,
 analysis:{2:"의무가 아닌 희망의 의미",3:"need는 유사하지만 정확한 대체 아님",4:"의무가 아닌 선호의 의미",5:"의무가 아닌 미래의 의미"}},

{id:18,level:"6A",chapter:"조동사",topic:"조동사 의문문",
 stem:"다음 중 올바른 의문문은?",
 choices:["Can you to swim?","Can you swim?","Do you can swim?","Are you can swim?","You can swim?"],answer:2,
 analysis:{1:"can 뒤에 to 사용",3:"can 의문에 Do 사용",4:"can 의문에 Are 사용",5:"도치 없이 평서문 어순"}},

{id:19,level:"6A",chapter:"전치사",topic:"장소 전치사",
 stem:"빈칸에 알맞은 것은? 'She is waiting ___ the bus stop.'",
 choices:["in","on","at","to","by"],answer:3,
 analysis:{1:"특정 지점에 in(내부) 사용",2:"특정 지점에 on(위) 사용",4:"대기에 to(방향) 사용",5:"의미는 통하지만 at이 정확"}},

{id:20,level:"6A",chapter:"전치사",topic:"시간 전치사",
 stem:"빈칸에 알맞은 것은? 'My birthday is ___ March.'",
 choices:["at","on","in","to","by"],answer:3,
 analysis:{1:"월에 at(시각) 사용",2:"월에 on(날짜/요일) 사용",4:"월에 to 사용",5:"월에 by 사용"}},

{id:21,level:"6A",chapter:"전치사",topic:"위치 전치사",
 stem:"빈칸에 알맞은 것은? 'The cat is ___ the box.' (상자 안에)",
 choices:["on","at","in","under","behind"],answer:3,
 analysis:{1:"안에 있는데 on(위) 사용",2:"안에 있는데 at(지점) 사용",4:"안에 있는데 under(아래) 사용",5:"안에 있는데 behind(뒤) 사용"}},

{id:22,level:"6A",chapter:"의문사",topic:"who, what",
 stem:"빈칸에 알맞은 의문사는? '___ broke the window?' — 'Tom did.'",
 choices:["What","Where","Who","When","How"],answer:3,
 analysis:{1:"사람에 what 사용",2:"사람에 where 사용",4:"사람에 when 사용",5:"사람에 how 사용"}},

{id:23,level:"6A",chapter:"의문사",topic:"when, why",
 stem:"빈칸에 알맞은 것은? '___ are you late?' — 'Because I missed the bus.'",
 choices:["When","Where","What","How","Why"],answer:5,
 analysis:{1:"이유 답변에 when 사용",2:"이유 답변에 where 사용",3:"이유 답변에 what 사용",4:"이유 답변에 how 사용"}},

{id:24,level:"6A",chapter:"의문사",topic:"how+형용사",
 stem:"빈칸에 알맞은 것은? '___ is this building?' — 'It's 50 meters tall.'",
 choices:["How many","How much","How long","How tall","How far"],answer:4,
 analysis:{1:"높이에 how many 사용",2:"높이에 how much 사용",3:"높이에 how long(길이/시간) 사용",5:"높이에 how far(거리) 사용"}},

{id:25,level:"6A",chapter:"품사",topic:"명사, 대명사",
 stem:"다음 밑줄 친 단어의 품사는? '<u>They</u> went to school.'",
 choices:["명사","동사","형용사","부사","대명사"],answer:5,
 analysis:{1:"대명사를 명사로 혼동",2:"주어를 동사로 혼동",3:"주어를 형용사로 혼동",4:"주어를 부사로 혼동"}},

{id:26,level:"6A",chapter:"품사",topic:"동사, 형용사, 부사",
 stem:"다음 밑줄 친 단어의 품사는? 'She is <u>very</u> kind.'",
 choices:["명사","형용사","동사","부사","전치사"],answer:4,
 analysis:{1:"부사를 명사로 혼동",2:"형용사 수식어를 형용사로 혼동",3:"부사를 동사로 혼동",5:"부사를 전치사로 혼동"}},

{id:27,level:"6A",chapter:"조동사",topic:"조동사 부정문",
 stem:"다음 중 올바른 부정문은?",
 choices:["She can't speaks French.","She can't speak French.","She doesn't can speak French.","She can not to speak.","She don't can speak French."],answer:2,
 analysis:{1:"can't 뒤에 원형 미사용",3:"조동사 부정에 doesn't 사용",4:"can not 뒤에 to 사용",5:"조동사 부정에 don't 사용"}},

// --- Level 7 (13문항) ---
{id:28,level:"7",chapter:"문장의 종류",topic:"명령문",
 stem:"다음 중 올바른 명령문은?",
 choices:["You open the door.","Opens the door.","Open the door.","You are open the door.","Do open the door you."],answer:3,
 analysis:{1:"명령문에 주어(You) 사용",2:"명령문에 -s 붙임",4:"명령문에 be동사 사용",5:"어순 오류"}},

{id:29,level:"7",chapter:"문장의 종류",topic:"제안문",
 stem:"다음 중 올바른 제안문은?",
 choices:["Let's go swimming.","Let's going swimming.","Let's goes swimming.","Let's to go swimming.","Let we go swimming."],answer:1,
 analysis:{2:"Let's 뒤에 -ing 사용",3:"Let's 뒤에 3인칭 단수형 사용",4:"Let's 뒤에 to 사용",5:"Let's 대신 Let we 사용"}},

{id:30,level:"7",chapter:"문장의 종류",topic:"감탄문",
 stem:"빈칸에 알맞은 것은? '___ beautiful the flowers are!'",
 choices:["What","What a","How","How a","Very"],answer:3,
 analysis:{1:"형용사 앞에 What 사용",2:"형용사 앞에 What a 사용",4:"How 뒤에 관사 사용",5:"감탄문 형식 미이해"}},

{id:31,level:"7",chapter:"비교급과 최상급",topic:"비교급",
 stem:"빈칸에 알맞은 것은? 'She is ___ than her sister.'",
 choices:["tall","taller","tallest","more tall","most tall"],answer:2,
 analysis:{1:"비교급이 아닌 원형 사용",3:"최상급을 비교급 자리에 사용",4:"짧은 형용사에 more 사용",5:"짧은 형용사에 most 사용"}},

{id:32,level:"7",chapter:"비교급과 최상급",topic:"최상급",
 stem:"빈칸에 알맞은 것은? 'He is ___ student in the class.'",
 choices:["the smartest","the smarter","smartest","the most smart","the smartiest"],answer:1,
 analysis:{2:"최상급이 아닌 비교급 사용",3:"최상급에 the 누락",4:"짧은 형용사에 most 사용",5:"존재하지 않는 형태"}},

{id:33,level:"7",chapter:"접속사",topic:"and, or, but",
 stem:"빈칸에 알맞은 것은? 'I like pizza, ___ I don't like pasta.'",
 choices:["and","or","but","so","because"],answer:3,
 analysis:{1:"대조가 아닌 병렬의 의미",2:"대조가 아닌 선택의 의미",4:"대조가 아닌 결과의 의미",5:"대조가 아닌 원인의 의미"}},

{id:34,level:"7",chapter:"접속사",topic:"when, before, after",
 stem:"빈칸에 알맞은 것은? '___ I got home, it started to rain.'",
 choices:["Before","After","Because","But","Or"],answer:2,
 analysis:{1:"시간 순서 혼동(집에 도착한 후 비가 옴)",3:"시간이 아닌 원인 접속사 사용",4:"부사절에 등위접속사 사용",5:"부사절에 등위접속사 사용"}},

{id:35,level:"7",chapter:"접속사",topic:"because, so, if",
 stem:"빈칸에 알맞은 것은? 'I stayed home ___ I was sick.'",
 choices:["so","if","because","but","and"],answer:3,
 analysis:{1:"원인이 아닌 결과 접속사 사용",2:"원인이 아닌 조건 접속사 사용",4:"원인이 아닌 대조 접속사 사용",5:"원인이 아닌 병렬 접속사 사용"}},

{id:36,level:"7",chapter:"to부정사",topic:"명사적 용법",
 stem:"빈칸에 알맞은 것은? 'I want ___ a doctor.'",
 choices:["be","to be","being","been","am"],answer:2,
 analysis:{1:"to 없이 원형만 사용",3:"to부정사 자리에 동명사 사용",4:"과거분사를 사용",5:"be동사 현재형을 사용"}},

{id:37,level:"7",chapter:"to부정사",topic:"형용사적 용법",
 stem:"빈칸에 알맞은 것은? 'I need something ___.'",
 choices:["drink","to drink","drinking","drank","drinks"],answer:2,
 analysis:{1:"to 없이 원형 사용",3:"-thing 뒤 수식에 동명사 사용",4:"과거형을 수식에 사용",5:"3인칭 단수형을 수식에 사용"}},

{id:38,level:"7",chapter:"to부정사",topic:"부사적 용법",
 stem:"빈칸에 알맞은 것은? 'She went to the library ___ books.'",
 choices:["to borrow","borrowing","borrow","borrowed","for borrow"],answer:1,
 analysis:{2:"목적을 나타내는 자리에 동명사 사용",3:"to 없이 원형 사용",4:"과거형을 목적에 사용",5:"for 뒤에 원형 사용(for borrowing이 맞음)"}},

{id:39,level:"7",chapter:"동명사",topic:"동명사의 형태와 역할",
 stem:"빈칸에 알맞은 것은? '___ is my hobby.'",
 choices:["Read","To reading","Reading","Reads","Readed"],answer:3,
 analysis:{1:"주어 자리에 원형 사용",2:"to+ing 형태(존재하지 않음)",4:"주어 자리에 3인칭 형태 사용",5:"존재하지 않는 과거형"}},

{id:40,level:"7",chapter:"동명사",topic:"목적어로 쓰이는 동명사와 to부정사",
 stem:"빈칸에 알맞은 것은? 'I enjoy ___.'",
 choices:["to swim","swim","swimming","swam","swims"],answer:3,
 analysis:{1:"enjoy는 동명사만 목적어로 취함(to부정사 불가)",2:"원형을 목적어로 사용",4:"과거형을 목적어로 사용",5:"3인칭 형태를 목적어로 사용"}}
]};
