/* ===== 초등 4학년 (Level 5 + 6B) ===== */
TESTS.grade4 = { name: "초등 4학년", levels: ["5","6B"], questions: [
// --- Level 5: Ch01 명사 (4문항) ---
{id:1,level:"5",chapter:"명사",topic:"명사의 의미와 종류",
 stem:"다음 중 '사람'을 나타내는 명사는?",
 choices:["desk","teacher","milk","Seoul","running"],answer:2,
 analysis:{1:"사물 명사를 사람으로 혼동",3:"물질명사를 사람으로 혼동",4:"고유명사(장소)를 사람으로 혼동",5:"동명사를 명사로 혼동"}},

{id:2,level:"5",chapter:"명사",topic:"셀 수 있는 명사",
 stem:"다음 중 셀 수 있는(countable) 명사는?",
 choices:["water","music","apple","homework","money"],answer:3,
 analysis:{1:"물질명사를 셀 수 있다고 판단",2:"추상명사를 셀 수 있다고 판단",4:"homework는 셀 수 없는 명사",5:"money는 셀 수 없는 명사"}},

{id:3,level:"5",chapter:"명사",topic:"복수형: 규칙변화",
 stem:"'box'의 올바른 복수형은?",
 choices:["boxs","boxes","boxies","boxen","box"],answer:2,
 analysis:{1:"-es 규칙을 모르고 단순히 -s만 붙임",3:"-y를 -ies로 바꾸는 규칙을 잘못 적용",4:"불규칙 변화(ox→oxen)와 혼동",5:"복수형을 만들지 않음"}},

{id:4,level:"5",chapter:"명사",topic:"복수형: 불규칙변화",
 stem:"'child'의 올바른 복수형은?",
 choices:["childs","childes","childrens","children","childn"],answer:4,
 analysis:{1:"불규칙 명사에 규칙(-s)을 적용",2:"불규칙 명사에 -es를 적용",3:"이미 복수형인데 -s를 다시 붙임",5:"존재하지 않는 형태를 추측"}},

// --- Level 5: Ch02 관사 (3문항) ---
{id:5,level:"5",chapter:"관사",topic:"부정관사",
 stem:"빈칸에 알맞은 것은? 'I have ___ umbrella.'",
 choices:["a","an","the","some","(없음)"],answer:2,
 analysis:{1:"모음 발음 앞 an 규칙을 모름",3:"처음 언급하는 것에 the를 사용",4:"단수 명사에 some 사용",5:"관사가 필요없다고 판단"}},

{id:6,level:"5",chapter:"관사",topic:"정관사",
 stem:"빈칸에 알맞은 것은? 'I bought a book. ___ book is interesting.'",
 choices:["A","An","The","Some","This"],answer:3,
 analysis:{1:"이미 언급된 명사에 부정관사 사용",2:"an의 쓰임을 잘못 이해",4:"some은 복수/불가산에 사용",5:"지시대명사와 정관사를 혼동"}},

{id:7,level:"5",chapter:"관사",topic:"관사 선택",
 stem:"빈칸에 알맞은 것은? 'She is ___ honest girl.'",
 choices:["a","an","the","(없음)","one"],answer:2,
 analysis:{1:"h가 묵음일 때 모음 발음 규칙 미적용",3:"특정하지 않은 대상에 the 사용",4:"보어로 쓰인 명사에 관사 필요",5:"수사와 관사 혼동"}},

// --- Level 5: Ch03 대명사 (4문항) ---
{id:8,level:"5",chapter:"대명사",topic:"인칭대명사: 주격",
 stem:"빈칸에 알맞은 것은? '___ are students.'",
 choices:["I","He","We","Me","Us"],answer:3,
 analysis:{1:"주어가 복수인데 단수 1인칭 사용",2:"복수 be동사(are)와 단수 주어 불일치",4:"목적격을 주어 자리에 사용",5:"목적격을 주어 자리에 사용"}},

{id:9,level:"5",chapter:"대명사",topic:"인칭대명사: 목적격",
 stem:"빈칸에 알맞은 것은? 'Please help ___.'",
 choices:["I","my","me","mine","myself"],answer:3,
 analysis:{1:"주격을 목적어 자리에 사용",2:"소유격을 목적어 자리에 사용",4:"소유대명사를 목적어로 사용",5:"재귀대명사를 일반 목적어로 사용"}},

{id:10,level:"5",chapter:"대명사",topic:"소유격, 소유대명사",
 stem:"빈칸에 알맞은 것은? 'This is ___ book.' (나의)",
 choices:["I","me","my","mine","myself"],answer:3,
 analysis:{1:"주격을 소유격 자리에 사용",2:"목적격을 소유격 자리에 사용",4:"소유대명사를 명사 앞에 사용(mine은 단독 사용)",5:"재귀대명사를 소유격으로 혼동"}},

{id:11,level:"5",chapter:"대명사",topic:"지시대명사",
 stem:"멀리 있는 여러 개를 가리킬 때 쓰는 지시대명사는?",
 choices:["this","that","these","those","it"],answer:4,
 analysis:{1:"가까운 것/단수를 가리키는 대명사",2:"먼 것이지만 단수",3:"가까운 것/복수를 가리키는 대명사",5:"비인칭 주어와 혼동"}},

// --- Level 5: Ch04 be동사 (6문항) ---
{id:12,level:"5",chapter:"be동사",topic:"현재형",
 stem:"빈칸에 알맞은 것은? 'She ___ a nurse.'",
 choices:["am","are","is","was","be"],answer:3,
 analysis:{1:"1인칭(I) 전용 be동사를 3인칭에 사용",2:"복수/2인칭 be동사를 3인칭 단수에 사용",4:"현재 상태인데 과거형 사용",5:"원형을 그대로 사용(시제 미적용)"}},

{id:13,level:"5",chapter:"be동사",topic:"현재형 부정문",
 stem:"다음 중 올바른 부정문은?",
 choices:["She not is happy.","She is not happy.","She does not happy.","She don't happy.","She no is happy."],answer:2,
 analysis:{1:"not의 위치를 잘못 배치(be동사 앞)",3:"be동사 부정에 do/does를 사용",4:"be동사 부정에 don't를 사용",5:"no를 부정어로 잘못 사용"}},

{id:14,level:"5",chapter:"be동사",topic:"현재형 의문문",
 stem:"다음 중 올바른 의문문은?",
 choices:["You are happy?","Are you happy?","Do you are happy?","Does you happy?","Is you happy?"],answer:2,
 analysis:{1:"주어-동사 도치를 하지 않음",3:"be동사 의문문에 Do를 사용",4:"be동사 의문문에 Does를 사용",5:"주어(you)에 맞지 않는 is 사용"}},

{id:15,level:"5",chapter:"be동사",topic:"과거형",
 stem:"빈칸에 알맞은 것은? 'They ___ at school yesterday.'",
 choices:["are","is","was","were","be"],answer:4,
 analysis:{1:"과거인데 현재형 사용",2:"복수 주어에 단수 be동사 사용",3:"복수 주어(they)에 was 사용",5:"원형을 사용(시제 미적용)"}},

{id:16,level:"5",chapter:"be동사",topic:"과거형 부정문",
 stem:"빈칸에 알맞은 것은? 'He ___ at home last night.'",
 choices:["wasn't","weren't","isn't","didn't be","not was"],answer:1,
 analysis:{2:"단수 주어에 weren't 사용",3:"과거인데 현재형 부정 사용",4:"be동사 부정에 did를 사용",5:"not의 위치 오류"}},

{id:17,level:"5",chapter:"be동사",topic:"과거형 의문문",
 stem:"다음 중 올바른 과거 의문문은?",
 choices:["Did she was tired?","Was she tired?","Were she tired?","Is she tired yesterday?","She was tired?"],answer:2,
 analysis:{1:"be동사 의문문에 Did를 사용",3:"단수 주어에 Were 사용",4:"yesterday와 현재형 시제 불일치",5:"도치 없이 평서문 어순 사용"}},

// --- Level 5: Ch05 There+be (2문항) ---
{id:18,level:"5",chapter:"There+be동사",topic:"현재형과 과거형",
 stem:"빈칸에 알맞은 것은? 'There ___ two cats on the sofa.'",
 choices:["is","are","has","have","was"],answer:2,
 analysis:{1:"복수 명사(cats)에 단수 is 사용",3:"There+be 구문에 have/has 사용",4:"There+be 구문에 have 사용",5:"현재 상황인데 과거형 사용"}},

{id:19,level:"5",chapter:"There+be동사",topic:"부정문과 의문문",
 stem:"다음 중 올바른 문장은?",
 choices:["There don't a park here.","There isn't a park here.","There not is a park here.","There hasn't a park here.","There no is a park here."],answer:2,
 analysis:{1:"There+be 부정에 don't 사용",3:"not의 위치 오류",4:"There+be 부정에 hasn't 사용",5:"no의 위치 오류"}},

// --- Level 5: Ch06 일반동사 (6문항) ---
{id:20,level:"5",chapter:"일반동사",topic:"일반동사의 종류",
 stem:"다음 중 일반동사가 아닌 것은?",
 choices:["run","eat","is","play","study"],answer:3,
 analysis:{1:"일반동사를 be동사로 혼동",2:"일반동사를 be동사로 혼동",4:"일반동사를 be동사로 혼동",5:"일반동사를 be동사로 혼동"}},

{id:21,level:"5",chapter:"일반동사",topic:"3인칭 단수형",
 stem:"빈칸에 알맞은 것은? 'She ___ to school every day.'",
 choices:["go","goes","gos","going","gone"],answer:2,
 analysis:{1:"3인칭 단수 -s/-es 규칙 미적용",3:"-es 철자 규칙 오류",4:"진행형과 혼동",5:"과거분사와 혼동"}},

{id:22,level:"5",chapter:"일반동사",topic:"현재형",
 stem:"빈칸에 알맞은 것은? 'They ___ soccer after school.'",
 choices:["plays","playing","play","is play","played"],answer:3,
 analysis:{1:"복수 주어에 3인칭 단수형(-s) 사용",2:"현재시제에 진행형 사용",4:"일반동사 앞에 be동사 사용",5:"현재 습관인데 과거형 사용"}},

{id:23,level:"5",chapter:"일반동사",topic:"현재형 부정문",
 stem:"다음 중 올바른 부정문은?",
 choices:["He not likes pizza.","He doesn't likes pizza.","He don't like pizza.","He doesn't like pizza.","He no like pizza."],answer:4,
 analysis:{1:"do/does 없이 not만 사용",2:"doesn't 뒤에 원형 미사용(-s 유지)",3:"3인칭 단수에 don't 사용",5:"no를 부정어로 잘못 사용"}},

{id:24,level:"5",chapter:"일반동사",topic:"과거형",
 stem:"빈칸에 알맞은 것은? 'I ___ a movie last night.'",
 choices:["watch","watches","watching","watched","was watch"],answer:4,
 analysis:{1:"과거인데 현재형 원형 사용",2:"과거인데 3인칭 단수 현재형 사용",3:"과거인데 진행형 사용",5:"일반동사 과거에 be동사 사용"}},

{id:25,level:"5",chapter:"일반동사",topic:"과거형 부정문/의문문",
 stem:"다음 중 올바른 과거 의문문은?",
 choices:["Did you went to school?","Did you go to school?","Do you went to school?","Were you go to school?","You did go to school?"],answer:2,
 analysis:{1:"Did 뒤에 원형 미사용(과거형 유지)",3:"과거인데 Do 사용",4:"일반동사 의문에 be동사 사용",5:"도치 없이 평서문 어순 사용"}},

// --- Level 6B: Ch07 진행형 (4문항) ---
{id:26,level:"6B",chapter:"진행형",topic:"현재진행형",
 stem:"빈칸에 알맞은 것은? 'Look! She ___ now.'",
 choices:["sings","singing","is singing","is sing","sing"],answer:3,
 analysis:{1:"진행형이 아닌 현재 단순형 사용",2:"be동사 없이 -ing만 사용",4:"-ing를 붙이지 않음",5:"현재 원형 사용"}},

{id:27,level:"6B",chapter:"진행형",topic:"현재진행형 부정문/의문문",
 stem:"다음 중 올바른 현재진행형 의문문은?",
 choices:["Does he reading?","Is he reading?","Does he is reading?","He is reading?","Do he reading?"],answer:2,
 analysis:{1:"진행형 의문에 Does 사용",3:"Does와 is를 함께 사용",4:"도치 없이 평서문 어순",5:"진행형 의문에 Do 사용"}},

{id:28,level:"6B",chapter:"진행형",topic:"과거진행형",
 stem:"빈칸에 알맞은 것은? 'I ___ TV at 9 last night.'",
 choices:["watch","watched","am watching","was watching","were watching"],answer:4,
 analysis:{1:"과거 진행인데 현재 원형 사용",2:"단순 과거와 과거진행 구분 못함",3:"과거인데 현재진행형 사용",5:"1인칭 단수에 were 사용"}},

{id:29,level:"6B",chapter:"진행형",topic:"과거진행형 부정문/의문문",
 stem:"다음 중 올바른 문장은?",
 choices:["They wasn't playing.","They weren't playing.","They didn't playing.","They not were playing.","They don't were playing."],answer:2,
 analysis:{1:"복수 주어에 wasn't 사용",3:"진행형 부정에 didn't 사용",4:"not의 위치 오류",5:"do와 be동사를 함께 사용"}},

// --- Level 6B: Ch08 미래형 (4문항) ---
{id:30,level:"6B",chapter:"미래형",topic:"will",
 stem:"빈칸에 알맞은 것은? 'It ___ tomorrow.'",
 choices:["rains","rained","will rain","will rains","is rain"],answer:3,
 analysis:{1:"미래인데 현재형 사용",2:"미래인데 과거형 사용",4:"will 뒤에 원형 미사용(-s 붙임)",5:"be동사를 잘못 사용"}},

{id:31,level:"6B",chapter:"미래형",topic:"will 부정문/의문문",
 stem:"다음 중 올바른 will 부정문은?",
 choices:["She willn't come.","She won't come.","She will not comes.","She don't will come.","She not will come."],answer:2,
 analysis:{1:"won't 축약형을 모름",3:"will not 뒤에 원형 미사용",4:"will 부정에 don't 사용",5:"not의 위치 오류"}},

{id:32,level:"6B",chapter:"미래형",topic:"be going to",
 stem:"빈칸에 알맞은 것은? 'We ___ visit our grandma this weekend.'",
 choices:["going to","are going to","are go to","will going","go to"],answer:2,
 analysis:{1:"be동사 없이 going to만 사용",3:"going 대신 원형 go 사용",4:"will과 going을 함께 사용",5:"be going to 구문 미사용"}},

{id:33,level:"6B",chapter:"미래형",topic:"be going to 부정문/의문문",
 stem:"다음 중 올바른 의문문은?",
 choices:["Are you going to swim?","Do you going to swim?","Will you going to swim?","You are going to swim?","Is you going to swim?"],answer:1,
 analysis:{2:"be going to 의문에 Do 사용",3:"will과 be going to를 혼합",4:"도치 없이 평서문 어순",5:"주어(you)에 맞지 않는 Is 사용"}},

// --- Level 6B: Ch09 형용사 (4문항) ---
{id:34,level:"6B",chapter:"형용사",topic:"형용사의 종류",
 stem:"다음 중 형용사가 아닌 것은?",
 choices:["tall","beautiful","slowly","big","happy"],answer:3,
 analysis:{1:"형용사를 부사로 혼동",2:"형용사를 부사로 혼동",4:"형용사를 부사로 혼동",5:"형용사를 부사로 혼동"}},

{id:35,level:"6B",chapter:"형용사",topic:"형용사의 위치",
 stem:"다음 중 올바른 문장은?",
 choices:["She has a red bag.","She has a bag red.","She has red a bag.","Red she has a bag.","She red has a bag."],answer:1,
 analysis:{2:"형용사를 명사 뒤에 배치(불어식 어순)",3:"형용사를 관사와 명사 사이가 아닌 곳에 배치",4:"형용사를 문장 맨 앞에 배치",5:"형용사를 주어와 동사 사이에 배치"}},

{id:36,level:"6B",chapter:"형용사",topic:"수와 양을 나타내는 형용사",
 stem:"빈칸에 알맞은 것은? 'I don't have ___ money.'",
 choices:["many","much","a lot","few","a"],answer:2,
 analysis:{1:"셀 수 없는 명사(money)에 many 사용",3:"부정문에서 a lot은 어색",4:"셀 수 없는 명사에 few 사용",5:"셀 수 없는 명사에 부정관사 사용"}},

{id:37,level:"6B",chapter:"형용사",topic:"형용사 활용",
 stem:"빈칸에 알맞은 것은? 'The soup smells ___.'",
 choices:["good","well","goodly","nicely","greatly"],answer:1,
 analysis:{2:"감각동사 뒤에 부사를 사용(형용사가 맞음)",3:"good에 -ly를 붙임(존재하지 않는 형태)",4:"감각동사 뒤에 부사를 사용",5:"감각동사 뒤에 부사를 사용"}},

// --- Level 6B: Ch10 부사 (3문항) ---
{id:38,level:"6B",chapter:"부사",topic:"부사의 형태",
 stem:"형용사 'quick'의 부사형은?",
 choices:["quick","quicker","quickly","more quick","quickful"],answer:3,
 analysis:{1:"형용사 원형을 그대로 부사로 사용",2:"비교급을 부사로 혼동",4:"부사 형성에 more를 사용",5:"존재하지 않는 접미사 사용"}},

{id:39,level:"6B",chapter:"부사",topic:"부사의 쓰임",
 stem:"빈칸에 알맞은 것은? 'She sings ___.'",
 choices:["beautiful","beautifully","beauty","more beautiful","beautifuler"],answer:2,
 analysis:{1:"동사를 수식하는 자리에 형용사 사용",3:"명사를 부사 자리에 사용",4:"비교급을 일반 수식에 사용",5:"존재하지 않는 비교급 형태"}},

{id:40,level:"6B",chapter:"부사",topic:"빈도부사",
 stem:"빈도부사의 올바른 위치는? 'She ___ gets up early.'",
 choices:["always","She gets always up early.","Always she gets up early.","She gets up always early.","She gets up early always."],answer:1,
 analysis:{2:"빈도부사를 일반동사 뒤에 배치",3:"빈도부사를 문장 맨 앞에 배치",4:"빈도부사를 구동사 사이에 배치",5:"빈도부사를 문장 맨 뒤에 배치"}}
]};
