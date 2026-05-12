/* ===== 초등 5학년 (Level 5 + 6B + 6A) ===== */
TESTS.grade5 = { name: "초등 5학년", levels: ["5","6B","6A"], questions: [
// --- Level 5 (14문항) ---
{id:1,level:"5",chapter:"명사",topic:"셀 수 있는/없는 명사",
 stem:"다음 중 셀 수 없는(uncountable) 명사는?",
 choices:["cat","book","sugar","pen","chair"],answer:3,
 analysis:{1:"셀 수 있는 명사를 셀 수 없다고 판단",2:"셀 수 있는 명사를 셀 수 없다고 판단",4:"셀 수 있는 명사를 셀 수 없다고 판단",5:"셀 수 있는 명사를 셀 수 없다고 판단"}},

{id:2,level:"5",chapter:"명사",topic:"복수형",
 stem:"'tooth'의 복수형은?",
 choices:["tooths","toothes","teeths","teeth","toothies"],answer:4,
 analysis:{1:"불규칙 명사에 -s 규칙 적용",2:"불규칙 명사에 -es 규칙 적용",3:"올바른 복수형에 -s를 다시 붙임",5:"존재하지 않는 형태"}},

{id:3,level:"5",chapter:"명사",topic:"셀 수 없는 명사의 수량 표현",
 stem:"빈칸에 알맞은 것은? 'two ___ of water'",
 choices:["cup","cups","glass","glasses","waters"],answer:4,
 analysis:{1:"단위명사를 복수로 만들지 않음",2:"단위명사는 맞지만 glass가 더 자연스러움",3:"단위명사를 복수로 만들지 않음",5:"물에 직접 -s를 붙임"}},

{id:4,level:"5",chapter:"관사",topic:"부정관사 a/an",
 stem:"빈칸에 알맞은 것은? 'He is ___ European student.'",
 choices:["a","an","the","(없음)","one"],answer:1,
 analysis:{2:"철자가 모음이지만 발음이 자음([j])인 경우 규칙 미이해",3:"처음 언급에 정관사 사용",4:"관사 필요성 미인지",5:"수사와 관사 혼동"}},

{id:5,level:"5",chapter:"대명사",topic:"주격/목적격",
 stem:"빈칸에 알맞은 것은? 'Tom and ___ are friends.'",
 choices:["me","my","I","mine","myself"],answer:3,
 analysis:{1:"주어 자리에 목적격 사용",2:"주어 자리에 소유격 사용",4:"주어 자리에 소유대명사 사용",5:"주어 자리에 재귀대명사 사용"}},

{id:6,level:"5",chapter:"대명사",topic:"소유대명사",
 stem:"빈칸에 알맞은 것은? 'This bag is ___.' (그녀의 것)",
 choices:["she","her","hers","she's","herself"],answer:3,
 analysis:{1:"주격을 소유 의미로 사용",2:"소유격(her+명사)을 단독 사용",4:"she's(=she is)와 혼동",5:"재귀대명사와 혼동"}},

{id:7,level:"5",chapter:"대명사",topic:"비인칭주어 It",
 stem:"빈칸에 알맞은 것은? '___ is 3 o'clock.'",
 choices:["This","That","It","There","Time"],answer:3,
 analysis:{1:"시간 표현에 지시대명사 사용",2:"시간 표현에 지시대명사 사용",4:"There is와 혼동",5:"명사를 주어로 사용"}},

{id:8,level:"5",chapter:"be동사",topic:"현재형",
 stem:"빈칸에 알맞은 것은? 'My parents ___ teachers.'",
 choices:["am","is","are","was","be"],answer:3,
 analysis:{1:"복수 주어에 1인칭 am 사용",2:"복수 주어에 단수 is 사용",4:"현재인데 과거형 사용",5:"원형을 그대로 사용"}},

{id:9,level:"5",chapter:"be동사",topic:"과거형",
 stem:"빈칸에 알맞은 것은? 'The movie ___ really fun.'",
 choices:["were","was","is","are","been"],answer:2,
 analysis:{1:"단수 주어에 were 사용",3:"과거인데 현재형 사용",4:"단수 주어에 are 사용",5:"과거분사를 단독 사용"}},

{id:10,level:"5",chapter:"There+be동사",topic:"There+be",
 stem:"빈칸에 알맞은 것은? 'There ___ a lot of snow last winter.'",
 choices:["is","are","was","were","has"],answer:3,
 analysis:{1:"과거인데 현재형 사용(단수)",2:"과거인데 현재형 사용(복수)",4:"snow는 셀 수 없는 명사(단수 취급)",5:"There+be에 have/has 사용"}},

{id:11,level:"5",chapter:"일반동사",topic:"3인칭 단수",
 stem:"빈칸에 알맞은 것은? 'My mom ___ breakfast every morning.'",
 choices:["make","makes","making","maked","is make"],answer:2,
 analysis:{1:"3인칭 단수 -s 미적용",3:"진행형과 혼동",4:"불규칙 동사에 -ed 적용(make→made)",5:"일반동사에 be동사 사용"}},

{id:12,level:"5",chapter:"일반동사",topic:"현재형 부정문",
 stem:"빈칸에 알맞은 것은? 'We ___ like spicy food.'",
 choices:["doesn't","don't","aren't","isn't","not"],answer:2,
 analysis:{1:"복수 주어에 doesn't(3인칭 단수) 사용",3:"일반동사 부정에 be동사 사용",4:"일반동사 부정에 be동사 사용",5:"do 없이 not만 사용"}},

{id:13,level:"5",chapter:"일반동사",topic:"과거형",
 stem:"빈칸에 알맞은 것은? 'She ___ to the park yesterday.'",
 choices:["go","goes","goed","went","going"],answer:4,
 analysis:{1:"과거인데 현재 원형 사용",2:"과거인데 현재 3인칭 단수 사용",3:"불규칙 동사에 -ed 적용",5:"과거인데 진행형 사용"}},

{id:14,level:"5",chapter:"일반동사",topic:"과거 의문문",
 stem:"다음 중 올바른 과거 부정문은?",
 choices:["She didn't went home.","She didn't go home.","She doesn't went home.","She not go home.","She did not goes home."],answer:2,
 analysis:{1:"didn't 뒤에 원형 미사용",3:"과거인데 doesn't 사용",4:"did 없이 not만 사용",5:"did not 뒤에 원형 미사용"}},

// --- Level 6B (13문항) ---
{id:15,level:"6B",chapter:"진행형",topic:"현재진행형",
 stem:"빈칸에 알맞은 것은? 'The baby ___ right now.'",
 choices:["sleeps","sleep","is sleeping","was sleeping","sleeping"],answer:3,
 analysis:{1:"현재 진행 상황인데 단순 현재 사용",2:"주어에 맞지 않는 원형 사용",4:"현재인데 과거진행형 사용",5:"be동사 없이 -ing만 사용"}},

{id:16,level:"6B",chapter:"진행형",topic:"현재진행형 부정문",
 stem:"다음 중 올바른 현재진행형 부정문은?",
 choices:["She doesn't reading.","She isn't reading.","She don't reading.","She not reading.","She is doesn't reading."],answer:2,
 analysis:{1:"진행형 부정에 doesn't 사용",3:"진행형 부정에 don't 사용",4:"be동사 없이 not만 사용",5:"doesn't와 is를 함께 사용"}},

{id:17,level:"6B",chapter:"진행형",topic:"과거진행형",
 stem:"빈칸에 알맞은 것은? 'When I came home, my brother ___ games.'",
 choices:["plays","played","is playing","was playing","were playing"],answer:4,
 analysis:{1:"과거 진행인데 현재형 사용",2:"과거 진행이 아닌 단순 과거 사용",3:"과거인데 현재진행 사용",5:"단수 주어에 were 사용"}},

{id:18,level:"6B",chapter:"미래형",topic:"will",
 stem:"빈칸에 알맞은 것은? 'I ___ you tomorrow.'",
 choices:["call","called","will call","calling","am call"],answer:3,
 analysis:{1:"미래인데 현재 원형 사용",2:"미래인데 과거형 사용",4:"미래인데 -ing만 사용",5:"be동사를 잘못 사용"}},

{id:19,level:"6B",chapter:"미래형",topic:"be going to",
 stem:"빈칸에 알맞은 것은? 'He ___ study abroad next year.'",
 choices:["is going to","are going to","going to","will going","is go to"],answer:1,
 analysis:{2:"3인칭 단수에 are 사용",3:"be동사 누락",4:"will과 going을 함께 사용",5:"going 대신 원형 사용"}},

{id:20,level:"6B",chapter:"미래형",topic:"will 의문문",
 stem:"다음 중 올바른 의문문은?",
 choices:["Will you helps me?","Will you help me?","Do you will help me?","Are you will help me?","You will help me?"],answer:2,
 analysis:{1:"will 뒤에 원형 미사용",3:"will 의문에 Do 사용",4:"will 의문에 Are 사용",5:"도치 없이 평서문 어순"}},

{id:21,level:"6B",chapter:"형용사",topic:"형용사의 위치",
 stem:"다음 중 올바른 문장은?",
 choices:["I want cold something.","I want something cold.","I cold want something.","I want something coldly.","Cold I want something."],answer:2,
 analysis:{1:"-thing/-one 뒤에 형용사를 배치해야 하는 규칙 미인지",3:"형용사를 동사 앞에 배치",4:"형용사 대신 부사 사용",5:"형용사를 문장 맨 앞에 배치"}},

{id:22,level:"6B",chapter:"형용사",topic:"수와 양을 나타내는 형용사",
 stem:"빈칸에 알맞은 것은? 'There are ___ apples in the box.'",
 choices:["much","a little","a few","little","many water"],answer:3,
 analysis:{1:"셀 수 있는 명사에 much 사용",2:"셀 수 있는 명사에 a little 사용",4:"셀 수 있는 명사에 little 사용",5:"apples는 셀 수 있는 명사인데 water로 혼동"}},

{id:23,level:"6B",chapter:"부사",topic:"부사의 형태와 역할",
 stem:"빈칸에 알맞은 것은? 'He runs very ___.'",
 choices:["fast","fastly","faster","fastest","fasting"],answer:1,
 analysis:{2:"fast는 형용사와 부사 형태가 같음(-ly 불필요)",3:"비교급을 일반 수식에 사용",4:"최상급을 일반 수식에 사용",5:"존재하지 않는 형태"}},

{id:24,level:"6B",chapter:"부사",topic:"빈도부사",
 stem:"빈도부사의 올바른 위치는? 'He is ___ late for school.'",
 choices:["He never is late.","He is late never.","He is never late.","Never he is late.","He late is never."],answer:3,
 analysis:{1:"빈도부사를 be동사 앞에 배치",2:"빈도부사를 문장 끝에 배치",4:"빈도부사를 문장 맨 앞에 배치",5:"어순 완전히 오류"}},

{id:25,level:"6B",chapter:"진행형",topic:"진행형 ing 변환",
 stem:"'swim'의 현재분사(-ing형)는?",
 choices:["swiming","swimming","swimmming","swims","swimeing"],answer:2,
 analysis:{1:"단모음+단자음 → 자음 겹침 규칙 미적용",3:"자음을 3번 겹침",4:"-ing가 아닌 -s 형태",5:"존재하지 않는 형태"}},

{id:26,level:"6B",chapter:"미래형",topic:"will vs be going to",
 stem:"빈칸에 알맞은 것은? 'Look at the clouds! It ___ rain.'",
 choices:["will","is going to","rains","rained","raining"],answer:2,
 analysis:{1:"근거 있는 예측에는 be going to가 더 적절",3:"미래인데 현재형 사용",4:"미래인데 과거형 사용",5:"be동사 없이 -ing만 사용"}},

{id:27,level:"6B",chapter:"형용사",topic:"형용사 종류",
 stem:"다음 중 형용사인 것은?",
 choices:["quickly","happiness","careful","carefully","care"],answer:3,
 analysis:{1:"부사를 형용사로 혼동(-ly 접미사)",2:"명사를 형용사로 혼동(-ness 접미사)",4:"부사를 형용사로 혼동",5:"동사/명사를 형용사로 혼동"}},

// --- Level 6A (13문항) ---
{id:28,level:"6A",chapter:"조동사",topic:"can",
 stem:"빈칸에 알맞은 것은? 'She ___ speak three languages.'",
 choices:["cans","can","is can","can to","could to"],answer:2,
 analysis:{1:"조동사에 -s를 붙임",3:"조동사 앞에 be동사 사용",4:"can 뒤에 to를 사용",5:"could 뒤에 to를 사용"}},

{id:29,level:"6A",chapter:"조동사",topic:"may",
 stem:"빈칸에 알맞은 것은? '___ I use your phone?'",
 choices:["Do","Am","May","Does","Are"],answer:3,
 analysis:{1:"허가를 구하는 표현에 Do 사용",2:"허가를 구하는 표현에 Am 사용",4:"허가를 구하는 표현에 Does 사용",5:"허가를 구하는 표현에 Are 사용"}},

{id:30,level:"6A",chapter:"조동사",topic:"must, have to",
 stem:"빈칸에 알맞은 것은? 'You ___ wear a uniform at school.'",
 choices:["must","must to","musts","can","may"],answer:1,
 analysis:{2:"must 뒤에 to를 사용",3:"조동사에 -s를 붙임",4:"의무가 아닌 능력의 의미",5:"의무가 아닌 허가의 의미"}},

{id:31,level:"6A",chapter:"조동사",topic:"조동사 부정문",
 stem:"다음 중 올바른 부정문은?",
 choices:["You must not run here.","You not must run here.","You don't must run here.","You mustn't to run.","You doesn't must run."],answer:1,
 analysis:{2:"not의 위치 오류",3:"조동사 부정에 don't 사용",4:"mustn't 뒤에 to 사용",5:"조동사 부정에 doesn't 사용"}},

{id:32,level:"6A",chapter:"전치사",topic:"장소를 나타내는 전치사",
 stem:"빈칸에 알맞은 것은? 'I live ___ Seoul.'",
 choices:["at","on","in","to","from"],answer:3,
 analysis:{1:"도시에 at 사용(건물/주소에 적합)",2:"도시에 on 사용(표면에 적합)",4:"거주를 나타내는데 to(방향) 사용",5:"거주를 나타내는데 from(출발) 사용"}},

{id:33,level:"6A",chapter:"전치사",topic:"위치를 나타내는 전치사",
 stem:"빈칸에 알맞은 것은? 'The picture is ___ the wall.'",
 choices:["in","at","on","to","by"],answer:3,
 analysis:{1:"벽에 붙은 것에 in(내부) 사용",2:"벽에 붙은 것에 at(지점) 사용",4:"벽에 붙은 것에 to(방향) 사용",5:"접촉이 아닌 근처를 나타내는 by 사용"}},

{id:34,level:"6A",chapter:"전치사",topic:"시간을 나타내는 전치사",
 stem:"빈칸에 알맞은 것은? 'I get up ___ 7 o'clock.'",
 choices:["in","on","at","to","by"],answer:3,
 analysis:{1:"시각에 in(기간) 사용",2:"시각에 on(요일/날짜) 사용",4:"시각에 to 사용",5:"시각에 by(~까지) 사용"}},

{id:35,level:"6A",chapter:"의문사",topic:"who, what, where",
 stem:"빈칸에 알맞은 의문사는? '___ is your favorite color?'",
 choices:["Who","Where","What","When","How"],answer:3,
 analysis:{1:"사물에 who(사람) 사용",2:"색상에 where(장소) 사용",4:"색상에 when(시간) 사용",5:"색상에 how(방법) 사용"}},

{id:36,level:"6A",chapter:"의문사",topic:"when, how, why",
 stem:"빈칸에 알맞은 의문사는? '___ did you come to school?' — 'By bus.'",
 choices:["When","Where","Why","How","What"],answer:4,
 analysis:{1:"교통수단 답변에 when(시간) 사용",2:"교통수단 답변에 where(장소) 사용",3:"교통수단 답변에 why(이유) 사용",5:"교통수단 답변에 what 사용"}},

{id:37,level:"6A",chapter:"의문사",topic:"what+명사, how+형용사",
 stem:"빈칸에 알맞은 것은? '___ is your brother?'  — 'He is 12 years old.'",
 choices:["How many","How much","How old","What age","How long"],answer:3,
 analysis:{1:"나이에 how many 사용",2:"나이에 how much 사용",4:"의미는 통하나 올바른 표현 아님",5:"나이에 how long 사용"}},

{id:38,level:"6A",chapter:"품사",topic:"명사, 대명사",
 stem:"다음 밑줄 친 단어의 품사는? 'She loves <u>music</u>.'",
 choices:["동사","형용사","명사","부사","대명사"],answer:3,
 analysis:{1:"목적어를 동사로 혼동",2:"목적어를 형용사로 혼동",4:"목적어를 부사로 혼동",5:"일반 명사를 대명사로 혼동"}},

{id:39,level:"6A",chapter:"품사",topic:"동사, 형용사, 부사",
 stem:"다음 밑줄 친 단어의 품사는? 'He <u>carefully</u> opened the box.'",
 choices:["명사","형용사","동사","부사","전치사"],answer:4,
 analysis:{1:"-ly 부사를 명사로 혼동",2:"-ly 부사를 형용사로 혼동",3:"부사를 동사로 혼동",5:"부사를 전치사로 혼동"}},

{id:40,level:"6A",chapter:"품사",topic:"전치사",
 stem:"다음 밑줄 친 단어의 품사는? 'The cat is <u>under</u> the table.'",
 choices:["명사","형용사","동사","부사","전치사"],answer:5,
 analysis:{1:"전치사를 명사로 혼동",2:"전치사를 형용사로 혼동",3:"전치사를 동사로 혼동",4:"전치사를 부사로 혼동"}}
]};
