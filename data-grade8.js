/* ===== 중학 2학년 (Level 8B + 9) ===== */
TESTS.grade8 = { name: "중학 2학년", levels: ["8B","9"], questions: [
// --- Level 8B (22문항) ---
{id:1,level:"8B",chapter:"대명사",topic:"부정대명사: each, every",
 stem:"빈칸에 알맞은 것은?\n___ student has a textbook.",
 choices:["Each","All","Both","Many","Some"],answer:1,
 analysis:{2:"All+복수동사와의 차이 미이해",3:"Both+복수동사와의 차이 미이해",4:"Many+복수동사와의 차이 미이해",5:"Some+복수동사와의 차이 미이해"}},

{id:2,level:"8B",chapter:"대명사",topic:"부정대명사: some, others",
 stem:"빈칸에 알맞은 것은?\nSome students like math. ___ prefer science.",
 choices:["Another","Other","Others","The another","The other"],answer:3,
 analysis:{1:"복수 대상에 another(단수) 사용",2:"Other 단독 사용(대명사로 쓸 때 -s 필요)",4:"the another는 존재하지 않는 형태",5:"불특정 다수에 the other 사용"}},

{id:3,level:"8B",chapter:"대명사",topic:"재귀대명사 관용표현",
 stem:"빈칸에 알맞은 것은?\nHelp ___ to some cake.",
 choices:["you","your","yours","yourself","yourselves"],answer:4,
 analysis:{1:"관용표현(help oneself)에 주격 사용",2:"관용표현에 소유격 사용",3:"관용표현에 소유대명사 사용",5:"단수 상대에 복수 재귀대명사 사용"}},

{id:4,level:"8B",chapter:"시제",topic:"현재완료: 경험",
 stem:"빈칸에 알맞은 것은?\nI have never ___ Chinese food.",
 choices:["try","tried","trying","tries","to try"],answer:2,
 analysis:{1:"have 뒤에 원형 사용(과거분사 필요)",3:"have 뒤에 -ing 사용",4:"have 뒤에 3인칭 형태 사용",5:"have 뒤에 to부정사 사용"}},

{id:5,level:"8B",chapter:"시제",topic:"현재완료: 계속",
 stem:"빈칸에 알맞은 것은?\nShe has lived here ___ 2015.",
 choices:["for","since","from","during","in"],answer:2,
 analysis:{1:"특정 시점에 for(기간) 사용",3:"현재완료에 from 사용",4:"현재완료에 during 사용",5:"현재완료에 in 사용"}},

{id:6,level:"8B",chapter:"시제",topic:"현재완료: 완료",
 stem:"빈칸에 알맞은 것은?\nHe has already ___ his homework.",
 choices:["finish","finishing","finished","finishes","to finish"],answer:3,
 analysis:{1:"have 뒤에 원형 사용",2:"have 뒤에 -ing 사용",4:"have 뒤에 3인칭 형태 사용",5:"have 뒤에 to부정사 사용"}},

{id:7,level:"8B",chapter:"시제",topic:"현재완료 의문문",
 stem:"다음 중 올바른 현재완료 의문문은?",
 choices:["Did you have finished?","Have you finished?","Do you have finished?","Are you have finished?","You have finished?"],answer:2,
 analysis:{1:"현재완료 의문에 Did 사용",3:"현재완료 의문에 Do 사용",4:"현재완료 의문에 Are 사용",5:"도치 없이 평서문 어순"}},

{id:8,level:"8B",chapter:"조동사",topic:"should, had better",
 stem:"빈칸에 알맞은 것은?\nYou had better ___ late again.",
 choices:["not be","not to be","don't be","to not be","be not"],answer:1,
 analysis:{2:"had better 뒤에 to 사용",3:"had better 부정에 don't 사용",4:"to부정사와 혼동",5:"not의 위치 오류"}},

{id:9,level:"8B",chapter:"조동사",topic:"used to",
 stem:"빈칸에 알맞은 것은?\nI ___ play soccer every day when I was young.",
 choices:["use to","used to","was used to","am used to","using to"],answer:2,
 analysis:{1:"used의 -d 누락",3:"수동태(be used to+명사)와 혼동",4:"현재형 수동(be used to)과 혼동",5:"존재하지 않는 형태"}},

{id:10,level:"8B",chapter:"to부정사",topic:"형용사적 용법",
 stem:"빈칸에 알맞은 것은?\nI need a pen ___.",
 choices:["write","to write with","to writing","for write","written"],answer:2,
 analysis:{1:"to 없이 원형 사용",3:"to+ing(존재하지 않음)",4:"for 뒤에 원형 사용",5:"과거분사를 명사 수식에 사용"}},

{id:11,level:"8B",chapter:"to부정사",topic:"too~to / enough to",
 stem:"다음 문장과 같은 의미는?\nShe is so kind that she helps everyone.",
 choices:["She is too kind to help.","She is kind enough to help everyone.","She is enough kind to help.","She is kind to help enough.","She is too kind enough."],answer:2,
 analysis:{1:"too~to는 '너무~해서 못하다'(반대 의미)",3:"enough의 위치 오류(형용사 뒤에 위치)",4:"enough의 위치 오류",5:"too와 enough를 함께 사용"}},

{id:12,level:"8B",chapter:"동명사",topic:"동명사 관용표현",
 stem:"빈칸에 알맞은 것은?\nI look forward to ___ you.",
 choices:["see","seeing","saw","seen","to see"],answer:2,
 analysis:{1:"to 뒤에 원형 사용(여기서 to는 전치사)",3:"to 뒤에 과거형 사용",4:"to 뒤에 과거분사 사용",5:"to 뒤에 to부정사 사용(이중 to)"}},

{id:13,level:"8B",chapter:"동명사",topic:"동명사와 to부정사",
 stem:"빈칸에 알맞은 것은?\nI stopped ___ when the teacher came in.",
 choices:["talk","to talk","talking","talked","talks"],answer:3,
 analysis:{1:"stop 뒤에 원형 사용",2:"stop to talk은 '말하기 위해 멈추다'(의미 다름)",4:"stop 뒤에 과거형 사용",5:"stop 뒤에 3인칭 형태 사용"}},

{id:14,level:"8B",chapter:"접속사",topic:"so~that~",
 stem:"빈칸에 알맞은 것은?\nHe was ___ tired that he fell asleep.",
 choices:["too","very","so","enough","such"],answer:3,
 analysis:{1:"too~that 구문은 존재하지 않음(too~to)",2:"very~that 구문은 존재하지 않음",4:"enough~that 구문은 존재하지 않음",5:"such는 명사구 앞에 사용"}},

{id:15,level:"8B",chapter:"접속사",topic:"if, unless",
 stem:"빈칸에 알맞은 것은?\nI will go out ___ it rains.",
 choices:["if","unless","because","although","when"],answer:2,
 analysis:{1:"비가 오면 나가는 것은 논리적으로 맞지 않음",3:"조건이 아닌 원인",4:"'비록'의 의미(양보)",5:"'~할 때'의 의미(시간)"}},

{id:16,level:"8B",chapter:"접속사",topic:"though, although",
 stem:"빈칸에 알맞은 것은?\n___ he is rich, he is not happy.",
 choices:["Because","If","Although","So","But"],answer:3,
 analysis:{1:"양보가 아닌 원인",2:"양보가 아닌 조건",4:"양보가 아닌 결과",5:"종속접속사 자리에 등위접속사 사용"}},

{id:17,level:"8B",chapter:"접속사",topic:"either A or B",
 stem:"빈칸에 알맞은 것은?\nEither you ___ he has to go.",
 choices:["and","but","or","nor","with"],answer:3,
 analysis:{1:"Either와 and 조합(불가)",2:"Either와 but 조합(불가)",4:"neither와 nor 조합을 혼동",5:"Either와 with 조합(불가)"}},

{id:18,level:"8B",chapter:"수동태",topic:"수동태 시제",
 stem:"빈칸에 알맞은 것은?\nThis bridge ___ 100 years ago.",
 choices:["built","was built","is built","has built","were built"],answer:2,
 analysis:{1:"be동사 없이 과거분사만 사용",3:"과거인데 현재 수동태 사용",4:"수동태가 아닌 능동태 현재완료 사용",5:"단수 주어에 were 사용"}},

{id:19,level:"8B",chapter:"수동태",topic:"4형식 수동태",
 stem:"다음 문장의 수동태는?\nShe gave me a book.",
 choices:["I was given a book by her.","A book was gave to me.","I was gave a book.","Me was given a book.","A book given to me by her."],answer:1,
 analysis:{2:"give의 과거분사 형태 오류(gave→given)",3:"give의 과거분사 형태 오류",4:"목적격(Me)을 주어로 사용",5:"be동사 누락"}},

{id:20,level:"8B",chapter:"분사",topic:"감정 분사",
 stem:"빈칸에 알맞은 것은?\nThe news was ___ to everyone.",
 choices:["surprised","surprising","surprise","surprisingly","surprises"],answer:2,
 analysis:{1:"사물 주어에 -ed 분사 사용(사람에게 적합)",3:"동사 원형을 형용사로 사용",4:"부사를 보어로 사용",5:"동사 3인칭 형태를 보어로 사용"}},

{id:21,level:"8B",chapter:"분사",topic:"분사구문: 때",
 stem:"다음 문장을 분사구문으로 바꾸면?\nWhen she heard the news, she cried.",
 choices:["When hearing the news, she cried.","Heard the news, she cried.","Hearing the news, she cried.","She hearing the news, cried.","To hear the news, she cried."],answer:3,
 analysis:{1:"접속사를 남김(분사구문에서는 생략)",2:"능동인데 과거분사 사용",4:"주어를 분사구문에 포함",5:"to부정사로 변환"}},

{id:22,level:"8B",chapter:"수동태",topic:"조동사 수동태",
 stem:"빈칸에 알맞은 것은?\nThis work must ___ by tomorrow.",
 choices:["finish","finished","be finished","be finish","finishing"],answer:3,
 analysis:{1:"수동태 구조 미적용(원형만 사용)",2:"must 뒤에 과거분사만 사용",4:"be 뒤에 원형 사용(과거분사 필요)",5:"must 뒤에 -ing 사용"}},

// --- Level 9 (18문항) ---
{id:23,level:"9",chapter:"시제",topic:"과거완료",
 stem:"빈칸에 알맞은 것은?\nWhen I arrived, the train ___.",
 choices:["left","has left","had left","was left","leaves"],answer:3,
 analysis:{1:"대과거를 표현하지 못함(단순 과거)",2:"과거보다 이전 시점에 현재완료 사용",4:"능동인데 수동태 사용",5:"과거인데 현재형 사용"}},

{id:24,level:"9",chapter:"시제",topic:"과거완료: 경험",
 stem:"빈칸에 알맞은 것은?\nShe said she ___ never been to Europe before.",
 choices:["has","have","had","was","did"],answer:3,
 analysis:{1:"과거 시점 기준인데 현재완료(has) 사용",2:"3인칭 단수에 have 사용",4:"과거완료에 was 사용",5:"과거완료에 did 사용"}},

{id:25,level:"9",chapter:"시제",topic:"시간/조건 부사절 현재시제",
 stem:"빈칸에 알맞은 것은?\nWhen he ___ tomorrow, Ill tell him.'",
 choices:["will come","comes","will comes","came","coming"],answer:2,
 analysis:{1:"시간 부사절에서 미래 대신 현재시제 사용 규칙 미이해",3:"will 뒤에 -s를 붙임",4:"미래인데 과거형 사용",5:"be동사 없이 -ing 사용"}},

{id:26,level:"9",chapter:"조동사",topic:"조동사+have+p.p.",
 stem:"빈칸에 알맞은 것은?\nShe must ___ the bus. Shes late.'",
 choices:["miss","missed","have missed","be missed","missing"],answer:3,
 analysis:{1:"과거 추측에 원형 사용",2:"must 뒤에 과거형 사용",4:"능동인데 수동태 사용",5:"must 뒤에 -ing 사용"}},

{id:27,level:"9",chapter:"to부정사",topic:"원형부정사",
 stem:"빈칸에 알맞은 것은?\nI saw her ___ the street.",
 choices:["to cross","crossing","crossed","to crossing","crosses"],answer:2,
 analysis:{1:"지각동사 뒤에 to부정사 사용",3:"지각동사 뒤에 과거분사 사용(수동 의미)",4:"to+ing(존재하지 않음)",5:"지각동사 뒤에 3인칭 형태 사용"}},

{id:28,level:"9",chapter:"to부정사",topic:"to부정사의 수동태",
 stem:"빈칸에 알맞은 것은?\nShe wants ___ by everyone.",
 choices:["to love","to loved","to be loved","to loving","to been loved"],answer:3,
 analysis:{1:"수동 의미인데 능동태 사용",2:"to 뒤에 과거형 사용",4:"to 뒤에 -ing 사용",5:"존재하지 않는 형태"}},

{id:29,level:"9",chapter:"동명사",topic:"동명사의 의미상 주어",
 stem:"빈칸에 알맞은 것은?\nDo you mind ___ opening the window?",
 choices:["I","me","my","mine","myself"],answer:3,
 analysis:{1:"동명사 의미상 주어에 주격 사용",2:"동명사 의미상 주어에 목적격 사용(구어체에서는 가능)",4:"동명사 의미상 주어에 소유대명사 사용",5:"동명사 의미상 주어에 재귀대명사 사용"}},

{id:30,level:"9",chapter:"관계대명사",topic:"계속적 용법",
 stem:"빈칸에 알맞은 것은?\nI met Tom, ___ is a doctor.",
 choices:["that","who","which","whom","whose"],answer:2,
 analysis:{1:"계속적 용법에 that 사용 불가",3:"사람에 which 사용",4:"주격 자리에 whom(목적격) 사용",5:"소유격 whose는 부적합"}},

{id:31,level:"9",chapter:"관계대명사",topic:"전치사+관계대명사",
 stem:"빈칸에 알맞은 것은?\nThis is the house ___ which I lived.",
 choices:["at","on","in","to","by"],answer:3,
 analysis:{1:"집에 at 사용(구체적 주소에 적합)",2:"집에 on 사용",4:"거주에 to 사용",5:"거주에 by 사용"}},

{id:32,level:"9",chapter:"관계대명사",topic:"복합관계대명사",
 stem:"빈칸에 알맞은 것은?\n___ happens, I will support you.",
 choices:["Whatever","Whoever","However","Wherever","Whenever"],answer:1,
 analysis:{2:"사람이 아닌 사건/상황에 Whoever 사용",3:"방법/정도에 However 사용",4:"장소에 Wherever 사용",5:"시간에 Whenever 사용"}},

{id:33,level:"9",chapter:"관계부사",topic:"관계부사와 선행사 생략",
 stem:"빈칸에 알맞은 것은?\nThis is ___ I was born.",
 choices:["where","which","that","what","when"],answer:1,
 analysis:{2:"장소 관계부사 자리에 관계대명사 사용",3:"장소 관계부사 자리에 that 사용",4:"장소 관계부사 자리에 what 사용",5:"장소에 when(시간) 사용"}},

{id:34,level:"9",chapter:"분사",topic:"독립분사구문",
 stem:"빈칸에 알맞은 것은?\nThe weather ___ nice, we went on a picnic.",
 choices:["is","was","being","been","be"],answer:3,
 analysis:{1:"분사구문에 현재형 동사 사용",2:"분사구문에 과거형 동사 사용",4:"분사구문에 과거분사 사용",5:"분사구문에 원형 사용"}},

{id:35,level:"9",chapter:"가정법",topic:"가정법 과거",
 stem:"빈칸에 알맞은 것은?\nIf I ___ a bird, I could fly.",
 choices:["am","was","were","be","is"],answer:3,
 analysis:{1:"가정법에 직설법 현재 사용",2:"가정법 과거에서 be동사는 항상 were",4:"가정법에 원형 사용",5:"1인칭에 is 사용"}},

{id:36,level:"9",chapter:"가정법",topic:"가정법 과거완료",
 stem:"빈칸에 알맞은 것은?\nIf I had studied harder, I ___ the exam.",
 choices:["will pass","would pass","would have passed","passed","had passed"],answer:3,
 analysis:{1:"가정법 과거완료에 will 사용",2:"가정법 과거완료에 would+원형 사용(과거 사실 반대이므로 have p.p. 필요)",4:"가정법에 단순 과거 사용",5:"가정법에 과거완료만 사용(would 필요)"}},

{id:37,level:"9",chapter:"일치와 화법",topic:"시제의 일치",
 stem:"빈칸에 알맞은 것은?\nHe said that he ___ busy.",
 choices:["is","was","has been","will be","be"],answer:2,
 analysis:{1:"주절이 과거인데 시제 일치 미적용",3:"현재완료를 종속절에 사용",4:"미래형을 종속절에 사용",5:"원형을 종속절에 사용"}},

{id:38,level:"9",chapter:"일치와 화법",topic:"평서문 화법전환",
 stem:"직접화법을 간접화법으로 바꾸면?\nShe said, \"I am happy.\"",
 choices:["She said that I am happy.","She said that she was happy.","She said that she is happy.","She said she am happy.","She said that I was happy."],answer:2,
 analysis:{1:"인칭 전환 미적용(I→she)",3:"시제 일치 미적용(am→was)",4:"인칭/시제 모두 미적용",5:"인칭 전환 미적용"}},

{id:39,level:"9",chapter:"특수구문",topic:"강조구문",
 stem:"빈칸에 알맞은 것은?\nIt was Tom ___ broke the window.",
 choices:["who","which","what","whom","whose"],answer:1,
 analysis:{2:"사람 강조에 which 사용",3:"강조구문에 what 사용(불가)",4:"주격인데 whom(목적격) 사용",5:"강조구문에 whose 사용(불가)"}},

{id:40,level:"9",chapter:"특수구문",topic:"도치구문",
 stem:"빈칸에 알맞은 것은?\nNever ___ I seen such a beautiful sunset.",
 choices:["did","have","was","do","am"],answer:2,
 analysis:{1:"현재완료인데 did 사용",3:"현재완료인데 was 사용",4:"현재완료인데 do 사용",5:"현재완료인데 am 사용"}}
]};
