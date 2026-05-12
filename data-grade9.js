/* ===== 중학 3학년 (Level 9 only) ===== */
TESTS.grade9 = { name: "중학 3학년", levels: ["9"], questions: [
{id:1,level:"9",chapter:"시제",topic:"과거완료",
 stem:"빈칸에 알맞은 것은? 'After she ___ dinner, she watched TV.'",
 choices:["has","had had","have had","having","has had"],answer:2,
 analysis:{1:"과거완료에 has 사용",3:"과거완료에 have had 사용",4:"과거완료에 -ing 사용",5:"과거 기준에 현재완료 사용"}},

{id:2,level:"9",chapter:"시제",topic:"과거완료: 경험",
 stem:"빈칸에 알맞은 것은? 'He ___ never traveled abroad before that trip.'",
 choices:["has","have","had","was","did"],answer:3,
 analysis:{1:"과거 기준에 현재완료(has) 사용",2:"3인칭에 have 사용",4:"과거완료에 was 사용",5:"과거완료에 did 사용"}},

{id:3,level:"9",chapter:"시제",topic:"과거완료: 완료",
 stem:"빈칸에 알맞은 것은? 'By the time I got there, the concert ___.'",
 choices:["started","has started","had started","starts","was starting"],answer:3,
 analysis:{1:"대과거를 단순 과거로 표현",2:"과거 기준에 현재완료 사용",4:"과거인데 현재형 사용",5:"과거진행은 완료 의미 표현 불가"}},

{id:4,level:"9",chapter:"시제",topic:"과거완료 부정문",
 stem:"다음 중 올바른 문장은?",
 choices:["She hadn't saw him before.","She hadn't seen him before.","She didn't had seen him.","She hasn't seen him before that.","She not had seen him."],answer:2,
 analysis:{1:"had 뒤에 과거형 사용(과거분사 필요)",3:"did와 had를 함께 사용",4:"과거 기준에 현재완료 사용",5:"not의 위치 오류"}},

{id:5,level:"9",chapter:"시제",topic:"시간/조건 부사절",
 stem:"빈칸에 알맞은 것은? 'If it ___ tomorrow, we will cancel the trip.'",
 choices:["will rain","rains","rained","would rain","is going to rain"],answer:2,
 analysis:{1:"조건절에 will 사용(직설법 미래 불가)",3:"미래인데 과거형 사용",4:"가정법과 혼동",5:"조건절에 be going to 사용(불가)"}},

{id:6,level:"9",chapter:"조동사",topic:"조동사+have+p.p.",
 stem:"빈칸에 알맞은 것은? 'You should ___ earlier.' (과거 후회)",
 choices:["come","came","have come","be coming","coming"],answer:3,
 analysis:{1:"과거 후회에 원형 사용(현재 충고)",2:"should 뒤에 과거형 사용",4:"과거 후회에 진행형 사용",5:"should 뒤에 -ing 사용"}},

{id:7,level:"9",chapter:"조동사",topic:"조동사+have+p.p.",
 stem:"빈칸에 알맞은 것은? 'He can't ___ the truth.' (과거 추측 부정)",
 choices:["tell","told","have told","telling","to tell"],answer:3,
 analysis:{1:"과거 추측에 원형 사용",2:"can't 뒤에 과거형 사용",4:"can't 뒤에 -ing 사용",5:"can't 뒤에 to부정사 사용"}},

{id:8,level:"9",chapter:"to부정사",topic:"목적격 보어: to부정사",
 stem:"빈칸에 알맞은 것은? 'My parents want me ___ hard.'",
 choices:["study","to study","studying","studied","studies"],answer:2,
 analysis:{1:"want+목적어 뒤에 원형 사용",3:"want+목적어 뒤에 -ing 사용",4:"want+목적어 뒤에 과거형 사용",5:"want+목적어 뒤에 3인칭 형태 사용"}},

{id:9,level:"9",chapter:"to부정사",topic:"원형부정사: 사역동사",
 stem:"빈칸에 알맞은 것은? 'She made her son ___ the room.'",
 choices:["to clean","cleaning","clean","cleaned","cleans"],answer:3,
 analysis:{1:"사역동사(make) 뒤에 to부정사 사용",2:"사역동사 뒤에 -ing 사용",4:"사역동사 뒤에 과거분사 사용",5:"사역동사 뒤에 3인칭 형태 사용"}},

{id:10,level:"9",chapter:"to부정사",topic:"to부정사의 시제",
 stem:"빈칸에 알맞은 것은? 'He seems ___ rich when he was young.'",
 choices:["to be","to been","to have been","being","to being"],answer:3,
 analysis:{1:"주절보다 이전 시제에 단순 to부정사 사용",2:"존재하지 않는 형태",4:"seem 뒤에 동명사 사용",5:"to+ing(존재하지 않음)"}},

{id:11,level:"9",chapter:"to부정사",topic:"독립부정사",
 stem:"빈칸에 알맞은 것은? '___, he is honest.'",
 choices:["To be frank","Being frank","Frank to be","Be to frank","Frankly to be"],answer:1,
 analysis:{2:"독립부정사에 동명사 사용",3:"어순 오류",4:"어순 오류",5:"어순 오류"}},

{id:12,level:"9",chapter:"동명사",topic:"동명사의 부정형",
 stem:"빈칸에 알맞은 것은? 'He apologized for ___ on time.'",
 choices:["not being","being not","not be","don't being","isn't being"],answer:1,
 analysis:{2:"not의 위치 오류(동명사 앞에 위치)",3:"전치사 뒤에 원형 사용",4:"동명사 부정에 don't 사용",5:"동명사 부정에 isn't 사용"}},

{id:13,level:"9",chapter:"동명사",topic:"동명사의 수동태",
 stem:"빈칸에 알맞은 것은? 'She doesn't like ___.'",
 choices:["being criticized","be criticized","been criticized","criticizing being","to being criticized"],answer:1,
 analysis:{2:"동명사 수동에 be 원형 사용",3:"동명사 수동에 been 사용",4:"어순 오류",5:"to+being(존재하지 않음)"}},

{id:14,level:"9",chapter:"관계대명사",topic:"계속적 용법",
 stem:"빈칸에 알맞은 것은? 'She passed the exam, ___ made her parents happy.'",
 choices:["that","who","which","what","whom"],answer:3,
 analysis:{1:"계속적 용법에 that 사용 불가",2:"선행사가 절(문장 내용)인데 who 사용",4:"관계대명사 자리에 what 사용(불가)",5:"주격 자리에 whom 사용"}},

{id:15,level:"9",chapter:"관계대명사",topic:"전치사+관계대명사",
 stem:"빈칸에 알맞은 것은? 'The person ___ whom I spoke was very kind.'",
 choices:["for","with","to","by","on"],answer:3,
 analysis:{1:"speak에 for 사용",2:"speak에 with 사용(가능하지만 to가 더 적합)",4:"speak에 by 사용",5:"speak에 on 사용"}},

{id:16,level:"9",chapter:"관계대명사",topic:"복합관계대명사",
 stem:"빈칸에 알맞은 것은? 'You can invite ___ you want.'",
 choices:["whatever","whoever","wherever","whenever","however"],answer:2,
 analysis:{1:"사람에 whatever(사물) 사용",3:"사람에 wherever(장소) 사용",4:"사람에 whenever(시간) 사용",5:"사람에 however(방법) 사용"}},

{id:17,level:"9",chapter:"관계부사",topic:"관계부사/선행사 생략",
 stem:"빈칸에 알맞은 것은? 'I remember the day ___ we first met.'",
 choices:["where","which","when","what","how"],answer:3,
 analysis:{1:"시간 선행사에 where 사용",2:"관계부사 자리에 관계대명사 사용(전치사 필요)",4:"관계부사 자리에 what 사용",5:"시간 선행사에 how 사용"}},

{id:18,level:"9",chapter:"관계부사",topic:"복합관계부사",
 stem:"빈칸에 알맞은 것은? '___ difficult it may be, don't give up.'",
 choices:["Whatever","Whoever","Wherever","Whenever","However"],answer:5,
 analysis:{1:"정도에 Whatever 사용",2:"정도에 Whoever 사용",3:"정도에 Wherever 사용",4:"정도에 Whenever 사용"}},

{id:19,level:"9",chapter:"분사",topic:"독립분사구문",
 stem:"빈칸에 알맞은 것은? '___ considered, his plan is the best.'",
 choices:["All things","All things being","All things are","Things all","Being all things"],answer:1,
 analysis:{2:"being이 생략된 형태가 더 자연스러움",3:"분사구문에 동사 사용(불가)",4:"어순 오류",5:"어순 오류"}},

{id:20,level:"9",chapter:"가정법",topic:"without+가정법 과거",
 stem:"빈칸에 알맞은 것은? 'Without water, we ___ survive.'",
 choices:["can't","couldn't","won't","don't","aren't"],answer:2,
 analysis:{1:"가정법에 직설법(can't) 사용",3:"가정법에 won't 사용",4:"가정법에 don't 사용",5:"가정법에 aren't 사용"}},

{id:21,level:"9",chapter:"가정법",topic:"without+가정법 과거완료",
 stem:"빈칸에 알맞은 것은? 'Without your help, I ___ failed.'",
 choices:["would","would have","had","will have","have"],answer:2,
 analysis:{1:"과거 사실 반대에 would+원형 사용",3:"가정법에 had 단독 사용",4:"과거에 will have 사용",5:"가정법에 have 사용"}},

{id:22,level:"9",chapter:"가정법",topic:"혼합가정법",
 stem:"빈칸에 알맞은 것은? 'If I had studied medicine, I ___ a doctor now.'",
 choices:["will be","would be","would have been","am","was"],answer:2,
 analysis:{1:"가정법에 will 사용",3:"현재 결과에 과거완료 형태 사용",4:"가정법에 직설법 사용",5:"가정법에 과거형만 사용"}},

{id:23,level:"9",chapter:"가정법",topic:"if의 생략",
 stem:"다음 중 올바른 문장은?",
 choices:["Were I you, I would accept it.","Was I you, I would accept it.","I were you, I would accept it.","If were I you, I would accept it.","Were I you, I will accept it."],answer:1,
 analysis:{2:"가정법에서 was 대신 were 사용",3:"도치 미적용",4:"if와 도치를 동시 사용(불가)",5:"가정법에 will 사용"}},

{id:24,level:"9",chapter:"일치와 화법",topic:"시제의 일치",
 stem:"빈칸에 알맞은 것은? 'She told me that she ___ come the next day.'",
 choices:["will","would","can","shall","may"],answer:2,
 analysis:{1:"간접화법에서 will→would 전환 미적용",3:"will이 아닌 can으로 전환",4:"will이 아닌 shall로 전환",5:"will이 아닌 may로 전환"}},

{id:25,level:"9",chapter:"일치와 화법",topic:"수의 일치",
 stem:"빈칸에 알맞은 것은? 'Neither Tom nor his friends ___ coming.'",
 choices:["is","are","was","has","am"],answer:2,
 analysis:{1:"neither A nor B에서 B(friends, 복수)에 일치시켜야 함",3:"현재인데 과거형 사용",4:"진행형에 has 사용",5:"3인칭에 am 사용"}},

{id:26,level:"9",chapter:"일치와 화법",topic:"평서문 화법전환",
 stem:"직접화법→간접화법: 'He said, \"I will help you.\"'",
 choices:["He said that he will help me.","He said that I would help you.","He said that he would help me.","He said he will help you.","He said that he helped me."],answer:3,
 analysis:{1:"시제 일치 미적용(will→would)",2:"인칭 전환 오류(I→he, you→me)",4:"시제와 인칭 모두 미전환",5:"would help가 아닌 helped로 전환"}},

{id:27,level:"9",chapter:"일치와 화법",topic:"의문문 화법전환",
 stem:"직접화법→간접화법: 'She asked, \"Do you like coffee?\"'",
 choices:["She asked do I like coffee.","She asked if I liked coffee.","She asked that I liked coffee.","She asked if did I like coffee.","She asked whether do I like coffee."],answer:2,
 analysis:{1:"간접의문문 형태 미적용",3:"의문문에 that 사용(if/whether 필요)",4:"간접의문문에 did 사용(평서문 어순 필요)",5:"간접의문문에 do 사용"}},

{id:28,level:"9",chapter:"일치와 화법",topic:"명령문 화법전환",
 stem:"직접화법→간접화법: 'She said to me, \"Study hard.\"'",
 choices:["She told me study hard.","She told me to study hard.","She said me to study hard.","She told to me study hard.","She told me that study hard."],answer:2,
 analysis:{1:"to 누락",3:"said 뒤에 직접 목적어 사용(told 필요)",4:"told 뒤에 to+목적어 사용(어순 오류)",5:"명령문에 that절 사용"}},

{id:29,level:"9",chapter:"특수구문",topic:"강조구문",
 stem:"빈칸에 알맞은 것은? 'It was yesterday ___ I met her.'",
 choices:["when","which","that","what","where"],answer:3,
 analysis:{1:"강조구문에 when 사용",2:"강조구문에 which 사용",4:"강조구문에 what 사용",5:"강조구문에 where 사용"}},

{id:30,level:"9",chapter:"특수구문",topic:"부정구문",
 stem:"다음 중 '거의 ~않다'의 의미인 것은?",
 choices:["I always study.","I hardly study.","I hard study.","I usually study.","I mostly study."],answer:2,
 analysis:{1:"always(항상)는 부정이 아님",3:"hard(열심히)는 hardly(거의~않다)와 다름",4:"usually(보통)는 부정이 아님",5:"mostly(대부분)는 부정이 아님"}},

{id:31,level:"9",chapter:"특수구문",topic:"도치구문",
 stem:"빈칸에 알맞은 것은? 'Not only ___ he smart, but he is also kind.'",
 choices:["does","is","was","did","has"],answer:2,
 analysis:{1:"be동사 문장인데 does 사용",3:"현재인데 과거형 사용",4:"be동사 문장인데 did 사용",5:"be동사 문장인데 has 사용"}},

{id:32,level:"9",chapter:"가정법",topic:"I wish 가정법",
 stem:"빈칸에 알맞은 것은? 'I wish I ___ taller.'",
 choices:["am","was","were","be","will be"],answer:3,
 analysis:{1:"가정법에 직설법 현재 사용",2:"가정법에서 be동사는 were(was도 구어체 가능이나 were가 정확)",4:"가정법에 원형 사용",5:"가정법에 will 사용"}},

{id:33,level:"9",chapter:"시제",topic:"과거완료진행형",
 stem:"빈칸에 알맞은 것은? 'She ___ for two hours when he arrived.'",
 choices:["waited","was waiting","has been waiting","had been waiting","waits"],answer:4,
 analysis:{1:"과거완료진행에 단순 과거 사용",2:"과거완료진행에 과거진행 사용",3:"과거 기준에 현재완료진행 사용",5:"과거인데 현재형 사용"}},

{id:34,level:"9",chapter:"to부정사",topic:"목적격보어: 원형부정사",
 stem:"빈칸에 알맞은 것은? 'I let him ___ my car.'",
 choices:["to use","using","use","used","uses"],answer:3,
 analysis:{1:"사역동사(let) 뒤에 to부정사 사용",2:"사역동사 뒤에 -ing 사용",4:"사역동사 뒤에 과거형 사용",5:"사역동사 뒤에 3인칭 형태 사용"}},

{id:35,level:"9",chapter:"관계부사",topic:"복합관계부사",
 stem:"빈칸에 알맞은 것은? '___ you go, I will follow you.'",
 choices:["Whatever","Whoever","However","Wherever","Whenever"],answer:4,
 analysis:{1:"장소에 Whatever 사용",2:"장소에 Whoever 사용",3:"장소에 However 사용",5:"장소에 Whenever 사용"}},

{id:36,level:"9",chapter:"분사",topic:"with+목적어+분사",
 stem:"빈칸에 알맞은 것은? 'She sat with her eyes ___.'",
 choices:["close","closed","closing","to close","closes"],answer:2,
 analysis:{1:"with+목적어 뒤에 원형 사용",3:"눈이 감긴 상태(수동)인데 능동(-ing) 사용",4:"with 구문에 to부정사 사용",5:"with 구문에 3인칭 형태 사용"}},

{id:37,level:"9",chapter:"일치와 화법",topic:"수의 일치",
 stem:"빈칸에 알맞은 것은? 'The number of students ___ increasing.'",
 choices:["are","is","were","have","has been"],answer:2,
 analysis:{1:"The number of는 단수 취급인데 are(복수) 사용",3:"현재인데 과거형 사용",4:"The number of는 단수인데 have 사용",5:"진행형에는 is가 필요(has been은 현재완료)"}},

{id:38,level:"9",chapter:"특수구문",topic:"도치",
 stem:"다음 중 올바른 도치 문장은?",
 choices:["Seldom he goes out.","Seldom does he go out.","Seldom he does go out.","Seldom goes he out.","He seldom does go out."],answer:2,
 analysis:{1:"부정어 도치 미적용",3:"도치 어순 오류",4:"도치 어순 오류",5:"도치 미적용(강조 형태)"}},

{id:39,level:"9",chapter:"가정법",topic:"as if 가정법",
 stem:"빈칸에 알맞은 것은? 'He talks as if he ___ everything.'",
 choices:["knows","knew","has known","knowing","know"],answer:2,
 analysis:{1:"가정법에 직설법 현재 사용",3:"가정법에 현재완료 사용",4:"가정법에 -ing 사용",5:"가정법에 원형 사용"}},

{id:40,level:"9",chapter:"특수구문",topic:"강조",
 stem:"빈칸에 알맞은 것은? 'I ___ love this song!' (강조)",
 choices:["am","very","do","much","have"],answer:3,
 analysis:{1:"일반동사 강조에 be동사 사용",2:"동사 강조에 very 사용(부사)",4:"동사 강조에 much 사용",5:"일반동사 강조에 have 사용"}}
]};
