//  Code style: предложения и словосочетания в скобочках являются целым словом, они не должны быть длинными, от двух до пяти слов.
//   В запятые не входят пробелы. В интерфейсе и так пространство есть.
//   В определениях для предположений используется "пусть", а в утверждениях "если",
//   поскольку "если", как мне кажется, меньше нагружает текст, чем пусть, но при этом оно
//   не подходит для определений.
//   Математика отделяется в слова по кванторам. Потому вокруг кванторов скобочки.
//   По квантору принадлежности разделения нет. Разделение по кванторам существования и всеобщности
//   Поскольку единицы запоминания в формулировках -- кусочки математики, которые вставляем, по смыслу, как это написать.
//   А в кванторных утверждениях то, как они идут по порядку, потому там делю.
// Корректность определения интеграла для множества бесконечной меры. Могут спросить, когда попросят определение интеграла Лебега.
let prob_theory = [
	[
		"Кольца",
		["Пусть", "$R$", "--", "множество", ";", "$R$", "называется", "кольцом", ",",
			"если", "$R \\neq \\varnothing$", ",",
			"$(\\forall A, B \\in R) A \\cap B \\in R \\land A \\triangle B \\in R$",
			"(замкнуто относительно пересечения и симметрической разности, они выступают в качестве умножения и сложения)"
		]
	],


	// TODO: исправить определение
	[
		"Алгебра",
		["Пусть", "$R$", "--", "множество", ";", "$R$", "называется", "кольцом", ",",
			"если", "$R \\neq \\varnothing$", ",",
			"$(\\forall A, B \\in R) A \\cap B \\in R \\land A \\triangle B \\in R$",
			"(замкнуто относительно пересечения и симметрической разности, они выступают в качестве умножения и сложения)"
		]
	],

	// Сигма-алгебра


	// 1. Вероятностное пространство (Ω, F, P). Системы событий: алгебры, σ-алгебры, π- и
	//    λ-системы. Первая теорема о π- и λ-системах. Лемма о существовании наименьшей
	//    алгебры (σ-алгебры, π- или λ-системы), порожденной произвольной системой под-
	//    множеств. Борелевские σ-алгебры в R, Rn, R∞.

	// TODO: дописать все пункты.
	// TODO: написать определение измеримого пространства
	// TODO: написать, нужно ли писать, что $P$ -- вероятностная мера на измеримом пространстве, 
	["Вероятностное пространство",["пусть","$\\Omega$","--","множество","(","произвольное",")",",","$\\mathcal{F}$","--","$\\sigma$-алгебра","из","элементов","$\\mathcal{P}(\\Omega)$","(","подмножеств","$\\Omega$",")",",","$\\mathcal{F}$","не","пусто",",","$P: \\mathcal{F} \\to [0, 1]$",",","$P $","--","$\\sigma$-аддитивная","мера","на","$\\mathcal{F}$",",","$P(\\Omega) = 1$",";","$(\\Omega, \\mathcal{F}, P)$","называется","вероятностным","пространством","(","тройка","из","множества","(","пространства",")","элементарных","исходов",",","множества","событий","и","вероятностной","меры",")"]],

	["Первая теорема о $\\pi$- и $\\lambda$-системах",["если","$\\Omega$","--","множество",",","$\\mathcal{F} \\subset \\mathcal{P}(\\Omega)$","(","множество","из","некоторых","подмножеств","$\\Omega$",")",",","то","$\\mathcal{F}$","является","$\\sigma$-алгеброй","тогда","и","только","тогда",",","когда","является","$\\pi$-","и","$\\lambda$-системой","подмножеств","$\\Omega$"]],

	// Минимальную по включению определить как пересечение всех, доказать, что это лямбда система по утверждению 2.1.

	// 2. Вторая теорема о π- и λ-системах. Следствие из нее.

	["Вторая теорема о $\\pi$- и $\\lambda$-системах",["если","$\\Omega$","--","множество",",","$\\mathcal{M}$","--","$\\pi$--система","подмножеств","$\\Omega$",",","то","$\\sigma(\\mathcal{M})$","$=$","$\\lambda(\\mathcal{M})$","(","минимальные","по","включению","сигма-алгебра","и","лямбда-система","совпадают",")"]],
	["Доказательство",["если","$\\Omega$","--","множество",",","$\\mathcal{M}$","--","$\\pi$-система","подмножеств","$\\Omega$",",","то","$\\sigma(\\mathcal{M})$","$=$","$\\lambda(\\mathcal{M})$","(","минимальные","по","включению","сигма-алгебра","и","лямбда-система","совпадают",")","&br&","1.)","есть","включение","минимальной","$\\lambda$-системы","в","минимальную","$\\sigma$-алгебру","(","условно",",","минимальная","лямбда","система","не","больше","минимальной","$\\sigma$-алгебры",")","&br&","1.1.)","любая","$\\sigma$-алгебра","является","$\\lambda$-системой","(","по","первой","теореме","о","$\\pi$-","и","$\\lambda$-системах",")","&br&","1.2.)","$\\sigma(\\mathcal{M})$","лежит","во","множестве","$\\lambda$-систем","подмножеств","$\\Omega$","&br&","1.3.)","$\\lambda(\\mathcal{M})$","$\\subset$","$\\sigma(\\mathcal{M})$","(","т.к.","наименьшая","по","включению","--","пересечение","всех",",","любой","элемент","$\\lambda(\\mathcal{M})$","лежит","в","во","всех","$\\lambda$-системах",")","&br&","2.)","есть","включение","минимальной","$\\sigma$-алгебры","в","минимальную","$\\lambda$-систему","&br&","2.1.)","минимальная","$\\lambda$-система","является","$\\sigma$-алгеброй","&br&","2.1.1",")","уже","$\\lambda$-система","&br&","2.1.2",")","докажем",",","что","замкнуто","относительно","конечного","пересечения",",","тогда","$\\pi$-система","по","определению","&br&","2.1.2.1",")","рассмотрим","элементы",",","по","которым","замкнуто",":","&br&","$\\mathcal{M}_1$","$=$","$\\{ B \\in \\lambda(\\mathcal{M}) : (\\forall A \\in \\lambda(\\mathcal{M})) \\  A \\cap B \\in \\lambda(\\mathcal{M}) \\}$","&br&","2.1.2.2",")","$\\mathcal{M}_1$","--","$\\lambda$-система","(","TODO",":","доделать",",","попробовать","уменьшить","вложенность",")","&br&","2.1.2.3",")","$\\mathcal{M}_1 \\subset \\lambda(\\mathcal{M})$","по","построению",",","$\\lambda(\\mathcal{M}) \\subset \\mathcal{M}_1$","по","определению","минимальной","по","включению","$\\lambda$-системы","&br&","2.1.3",")","по","первой","теореме","о","$\\pi$-","и","$\\lambda$-системах","получаем","требуемое","&br&","2.2.)","минимальная","$\\sigma$-алгебра","подмножеств","$\\Omega$","--","подмножество","любой","$\\sigma$-алгебры","подмножеств","$\\Omega$","(","условно",",","не","больше",")"]],

	["Следствие из второй теоремы о $\\pi$- и $\\lambda$-системах",["если","$\\Omega$","--","множество",",","$\\mathcal{M}$","--","$\\pi$-система","подмножеств","$\\Omega$",",","$\\mathcal{L}$","--","$\\lambda$-система","подмножеств","$\\Omega$",",","$\\mathcal{M} \\subset \\mathcal{L}$","(","$\\pi$-система","вложена","в","$\\lambda$-систему",")",",","тогда","$\\sigma(\\mathcal{M}) \\subset \\mathcal{L}$"]],
	["Доказательство",["1.)","минимальная","$\\lambda$-система",",","содержащая","$\\mathcal{M}$",",","включена","в","$\\mathcal{L}$",":","&br&","$\\lambda(\\mathcal{M}) \\in \\mathcal{L}$","(","т.к.","минимальна","по","включению",",","не","больше","любой","другой","по","включению",")","&br&","2.)","минимальная","сигма-алгебра","$\\mathcal{M}$","совпадает","с","минимальной","$\\lambda$-системой",":","&br&","$\\sigma(\\mathcal{M})$","$=$","$\\lambda(\\mathcal{M}) \\subset \\mathcal{L}$","(","по","второй","теореме","о","$\\pi$-","и","$\\lambda$-системах",")"]],


	// 3. Независимость событий и систем событий на вероятностном пространстве. Критерий
	//    независимости для конечного набора σ-алгебр. Независимость бесконечного набора
	//    систем событий.

	["Назависимость событий",["пусть","$(\\Omega, \\mathcal{F}, P)$","--","вероятностное","пространство",",","$A, B \\in \\mathcal{F}$","(","события",")",";","$A$","и","$B$","называются","независимыми",",","если","$P(A \\cap B)$","$=$","$P(A) \\cdot P(B)$"]],
	["Независимость событий в совокупности",["пусть","$(\\Omega, \\mathcal{F}, P)$","--","вероятностное","пространство",",","$A_1, A_2, \\ldots, A_n \\in \\mathcal{F}$","(","конечный","набор","событий",")",";","$A_1, \\ldots, A_n$","называются","независимыми","в","совокупности",",","если","$(\\forall k \\in \\mathbb{N} : 1 \\leqslant k \\leqslant n)$","$(\\forall \\{ i_1, \\ldots, i_k \\} \\in \\mathbb{N}^k : 1 \\leqslant i_1 < \\ldots < i_k \\leqslant n)$","$P(A_{i_1} \\cap \\ldots \\cap A_{i_k})$","$=$","$P\\left(A_{i_1}\\right) \\cdot \\ldots \\cdot P(A_{i_k})$","(","вероятность","пересечения","любого","непустого","поднабора","--","произведение","вероятностей",")"]],

	["Независимость систем событий в совокупности",["пусть","$(\\Omega, \\mathcal{F}, P)$","--","вероятностное","пространство",",","$A_1, A_2, \\ldots, A_n \\subset \\mathcal{F}$","(","системы","(","множества",")","событий",")",";","системы","$A_1, \\ldots, A_n$","называются","независимыми","в","совокупности",",","если","для","любых","$A_1$","из","$\\mathcal{M}_1$",",","...,","$A_n$","из","$\\mathcal{M}_n$","события","$A_1, \\ldots, A_n$","независимы","в","совокупности", "(", "для", "формальности", "можно", "сказать", ",", "независимость", "в", "совокупности", "набора", ",", "но", "получается", "не", "красиво", ",", "по-моему)"]],

	// Я бы назвал это критерием независимости пи-систем, т.к. всё-таки для сигма-алгебр
	//   нужно как-то получать подходящие пи-системы.. Не очень напрямую работающий такой
	//   критерий.. Если даже и просто это делается, нужны дополнительные слова.
	// Если мы его где-то используем, наверно, мы конвертируем всё в $\pi$-системы как-то..
	//   Там станет понятно, наверно. Надо добраться.
	["Критерий независимости $\\sigma$-алгебр",["если","$(\\Omega, \\mathcal{F}, P)$","--","вероятностное","пространство",",","$\\mathcal{M}_1$",",","$\\ldots$",",","$\\mathcal{M}_n$","--","$\\pi$-системы","подмножеств","$\\Omega$",",","$\\mathopen{}\\left(\\forall i \\in \\mathopen{}\\left(\\overline{1, n}\\right)\\mathclose{}\\right)\\mathclose{}$","$\\mathcal{M}_i \\in \\mathcal{F}$",",","тогда","$\\mathcal{M}_1$",",","$\\ldots$",",","$\\mathcal{M}_n$","независимы","в","совокупности","тогда","и","только","тогда",",","когда","$\\sigma(\\mathcal{M}_1)$",",","$\\ldots$",",","$\\sigma(\\mathcal{M}_n)$","независимы","в","совокупности"]],
	["Доказательство",["1.)","независимость","минимальных","$\\sigma$-алгебр","влечёт","независимость","самих","множеств","&br&","1.1.)","минимальные","$\\sigma$-алгебры","являются","надмножествами","&br&","1.2.)","выборка","элементов","из","$\\mathcal{M}_1$",",","$\\ldots$",",","$\\mathcal{M}_n$","является","выборкой","из","минимальных","$\\sigma$-алгебр",",","потому","дает","независимые","события","в","совокупности","(","т.к.","является","и","выборкой","элементов","из","минимальных","сигма-алгебр",")","&br&","2.)","обратно","тоже","верно","(","на","лекции","решили","доказать","только","для","двух","систем",")","&br&","2.1",")","TODO",":","доделать."]],

	// TODO: независимость бесконечного набора систем событий.

	// 4. Функция распределения вероятностной меры на (R, B(R)), ее основные свойства. Тео-
	//    рема о взаимно-однозначном соответствии функций распределения и вероятностных
	//    мер на (R, B(R)).

	// Вероятностная мера: пусть (Omega, F) -- измеримое пространство, P - сигма-аддитивная мера; P называется вероятностной мерой, если сигма-аддитивна и P(Omega) = 1.

	["Функция распределения вероятностной меры на $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$",["пусть","$P$","--","вероятностная","мера","на","$(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$","(","вероятностная","мера","на","измеримом","пространстве",")",";","функцией","распределения","вероятностной","меры","$P$","на","$\\mathbb{R}$","называется","$F(x)$","$=$","$P((-\\infty, x])$"]],

	["Свойства функции распределения вероятностной меры",["если","$F$","--","функция","распределения","вероятностной","меры","$P$",",","тогда","$F$","неубывает","на","$\\mathbb{R}$",",","$\\lim_{x \\to -\\infty}$","$F(x)$","$=$","$0$",",","$\\lim_{x \\to +\\infty}$","$F(x)$","$=$","$1$",",","$F$","непрерывна","справа","(","и","непрерывна","слева",",","если","$x$","не","включать","в","определении","$F$",")"]],
	// TODO: доказать. Проверим ..., проверим...

	["Функция распределения на $\\mathbb{R}$",["пусть","$F: \\mathbb{R} \\to \\mathbb{R}$",";","$F$","называется","функцией","распределения","на", "$\\mathbb{R}$", ",","если","$F$","неубывает","на","$\\mathbb{R}$",",","$\\lim_{x \\to -\\infty}$","$F(x)$","$=$","$0$",",","$\\lim_{x \\to +\\infty}$","$F(x)$","$=$","$1$",",","$F$","непрерывна","справа","всюду"]],

	// У лектора эта мера определяется внутри доказательства теоремы о взаимно-однозначном соответствии.
	//   Мы доказываем её свойство, теорема становится большая. Давайте вынесем, объект важный для
	//   доказательства.
	["Полуинтервальная мера функции распределения",["пусть","$F$","--","функция","распределения","на","$\\mathbb{R}$",";","полуинтервальной","мерой","функции","распределения","$F$","называется","$P_0(A) = \\sum_{k = 1}^n (F(b_k) - F(a_k))$",",","где","$A = \\bigsqcup_{k = 1}^n (a_k, b_k]$",",","$-\\infty$","$\\leqslant$","$a_1$","$<$","$b_1$","$<$","$\\ldots$","$<$","$a_n$","$<$","$b_n$","$\\leqslant$","$+\\infty$","(","это","действительно","мера","на","алгебре","конечных","объединений","полуинтервалов",")"]],

	["Свойства полуинтервальной меры",["если","$F$","--","функция","распределения","на","$\\mathbb{R}$",",","то","полуинтервальная","мера","$F$","неотрицательна",",","конечно","аддитивна","(","т.е.","уже","мера",")",",","конечнозначна","и","$\\sigma$-конечна","на","алгебре","конечных","объединений","полуинтервалов"]],
	["Доказательство",["0.)","обозначения","и","вид","элементов","алгебры","&br&","0.1.)","обозначим","алгебру","как","$A$","&br&","0.2.)","обозначим","полуинтервальную","меру","как","$P_0$","(","как","в","определении",")","&br&","0.3.)","элементы","алгебры","представимы","в","виде","дизъюнктных","объединений",":","&br&","$\\bigcup_{k = 1}^n A_k = \\bigsqcup_{k = 1}^n A_k \\setminus (A_1 \\cup \\ldots \\cup A_k)$","&br&","1.)","неотрицательна",",","т.к.","$F$","неубывает","по","определению","&br&","2.)","конечно","аддитивна","по","определению","(","т.е.","уже","мера",":","неотрицательная","конечно-аддитивная","функция","на","полукольце",")",":","&br&","$P_0(A \\sqcup B)$","$=$","$\\sum_{(a, b] \\in A \\sqcup B} (F(b) - F(a))$","$=$","$\\sum_{(a, b] \\in A} (F(b) - F(a))$","$+$","$\\sum_{(a, b] \\in B} (F(b) - F(a))$","(","т.к.","суммируем","по","двум","непересекающимся","множествам",",","если","раскрыть",",","слагаемые","можно","разложить","по","двум","суммам",")","&br&","2.)","значения","конечны","(","т.к.","по","любому","интервалу","значение","конечно",",","даже","по","бесконечному",",","по","аддитивности","получаем","сумму","конечных","чисел",")","&br&","3.)","$\\sigma$-конечна",",","т.е.","&br&","$(\\exists {\\{ A_i \\}}_{i = 1}^\\infty: P_0(A_i) < \\infty)$","$\\bigcup_{i = 1}^\\infty$","$A_i$","$=$","$\\mathbb{R}$","(","достаточно","взять","$A_i$","$=$","$(-i, i]$",")"]],

	["Непрерывность меры (из курса овитм)",["пусть","$R$","--","кольцо",",","$\\mu$","--","конечнозначная","мера","на","$R$",";","$\\mu$","называется","непрерывной",",","если","$(\\forall {\\{ A_i \\}}_{i = 1}^\\infty \\subset R: A_i \\supset A_{i + 1})$","$\\mu(A)$","$=$","$\\lim_{n \\to \\infty}$","$\\mu(A_n)$",",","где","$A$", "$=$", "$\\bigcup_{i = 1}^\\infty$","$A_i$"]],
	["Критерий $\\sigma$-аддитивности конечнозначной меры (из курса овитм)",["Если","$R$","--","кольцо",",","$\\mu$","--","конечнозначная","мера","на","$R$",",","тогда","$\\mu$","непрерывна","тогда","и","только","тогда",",","когда","$\\sigma$-аддитивна"]],
	["Следствие о непрерывности в нуле",["если","$R$","--","кольцо",",","$\\mu$","--","конечнозначная","мера","на","$R$",",","тогда","$\\mu$","непрерывна","в","нуле",",","т.е.","$\\left(\\forall {\\{ A_i \\}}_{i = 1}^\\infty \\subset R: A_i \\supset A_{i + 1} \\land \\bigcup_{i = 1}^\\infty A_i = \\varnothing\\right)$","$\\lim_{n \\to \\infty}$","$\\mu(A_n)$","$=$","$0$",",","тогда","и","только","тогда",",","когда","$\\sigma$-аддитивна","(","доказать","несложно",",","надо","в","кванторах","непрерывность","расписать",",","показать","следствия","в","обе","стороны",",","но","давалось","без","доказательства","на","первой","лекции","со","ссылкой","на","овитм",")"]],

	// Приближение любого элемента алгебры конечных объединений полуинтервалов другим элементом алгебры. 

	["Теорема о взаимно-однозначном соответствии функций распределения и мер на $(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$",["если","$F$","--","функция","распределения","на","$\\mathbb{R}$",",","тогда","существует","единственная","вероятностная","мера","$P$","на","$(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$",",","для","которой","$F$","совпадает","с","функцией","распределения",",","т.е.","$(\\forall x \\in \\mathbb{R})$","$F(x)$","$=$","$P((-\\infty, x])$"]],
	// Вот эту прямо доказать, от начала до конца.

	["Доказательство",["если","$F$","--","функция","распределения","на","$\\mathbb{R}$",",","тогда","существует","единственная","вероятностная","мера","$P$","на","$(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$",",","для","которой","$F$","совпадает","с","функцией","распределения",",","т.е.","$(\\forall x \\in \\mathbb{R})$","$F(x)$","$=$","$P((-\\infty, x])$","&br&","1.)","рассмотрим","алгебру","конечных","дизъюнктных","объединений","полуинтервалов","$\\mathcal{A}$","&br&","1.1.)","любой","элемент","$A$","из","$\\mathcal{A}$","является","конечным","объединением","полуинтервалов",":","&br&","$A$","$=$","$\\bigsqcup_{k = 1}^n (a_k, b_k]$",",","$-\\infty \\leqslant a_1 < b_1 < \\ldots < a_n < b_n \\leqslant +\\infty$","(","по","определению","$\\mathcal{A}$",")","&br&","2.)","зададим","на","$\\mathcal{A}$","меру","$P_0$",",","считая","$F(-\\infty)$","$=$","$0$","и","$F(+\\infty)$","$=$","$1$","по","непрерывности",":","$P_0(A) = \\sum_{k = 1}^n (F(b_k) - F(a_k))$","&br&","2.1.)","мера","$P_0$","конечно","аддитивна","(","по","построению",",","т.к.","для","двух","непересекающихся","элементов","сумма","разложится","на","два","слагаемых","по","отрезком","первого","и","второго","элементов",")","&br&","2.2",")","проверим","счётную","аддитивность","4.)"]],

	/*
	1.) алгебру конечных дизъюнктных объединений полуинтервалов $\mathcal{A}$ порождает борелевскую $\sigma$-алгебру &br&

1.1) минимальную сигма-алгебру, порожденную полуинтервалами &br&

1.2) любая сигма-алгебра, содержащая (в прошлом семестре на овитме была задача, где порождали Борелевскую $\sigma$-алгебру тремя способами) &br&

1.2.) 
*/


	// 5. Классификация вероятностных мер и функций распределения на прямой. Приме-
	//    ры дискретных распределений: равномерное, биномиальное, пуассоновское. Приме-
	//    ры абсолютно непрерывных распределений: равномерное, нормальное, экспоненци-
	//    альное, гамма. Пример сингулярного распределения: “канторова лестница”. Теорема
	//    Лебега о разложении произвольной функции распределения(б/д).

	["Дискретная вероятностная мера",["Пусть","$P$","--","вероятностная","мера","на","$(\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$",";","$P$","называется","дискретной",",","если","существует","конечное","или","счетное","множество","$X \\subset \\mathbb{R}$","такое",",","что","$P(\\mathbb{R} \\smallsetminus X) = 0$","(","вне","множества","вероятность","ноль",")","и","$(\\forall x \\in X)$","$P({x})$","$>$","$0$","(","в","каждой","точке","множества","вероятность","положительна",")"]],
	

	// 6. Вероятностные меры на (Rn, B(Rn)). Многомерная функция распределения, ее основ-
	//    ные свойства. Теорема о построении вероятностной меры на (Rn, B(Rn)) по функ-
	//    ции распределения (б/д). Примеры многомерных функций распределения, плот-
	//    ность многомерного распределения. Теорема Колмогорова о продолжении меры на
	//    (R∞, B(R∞)) (б/д).

	// 7. Случайные элементы, случайные величины и векторы на вероятностном простран-
	//    стве. Критерий измеримости отображения. Следствие: эквивалентные определения
	//    случайных величин и векторов.

	// 8. Характеристики случайной величины и случайного вектора: распределение вероят-
	//    ностей, функция распределения, порожденная σ-алгебра. Классы случайных вели-
	//    чин: простые, дискретные, абсолютно непрерывные и сингулярные. Теорема о при-
	//    ближении случайной величины ξ простыми Fξ-измеримыми случайными величина-
	//    ми.


	// 9. Независимость произвольного набора случайных величин. Критерий независимости
	//    в терминах совместной функции распределения, его обобщение для случайных век-
	//    торов. Теорема о независимости борелевских функций от независимых случайных
	//    векторов. Независимость функций от непересекающихся наборов независимых с.в.
	
	// 10. Теорема о математическом ожидании произведения независимых случайных величин
	//     с конечными математическими ожиданиями (“свойство 10”).

	// 11. Теорема о замене переменных в интеграле Лебега, следствия из нее. Понятие обоб-
	//     щенной плотности вероятностной меры. Теорема о вычисление интеграла Лебега по
	//     вероятностной мере с помощью плотности. Формулы для вычисления математиче-
	//     ских ожиданий функций от случайной величины (вектора) в дискретном и абсолют-
	//     но непрерывном случаях.

	// 12. Прямое произведение вероятностных пространств, лемма о существовании. Теорема
	//     Фубини (б/д).

	// 13. Совместное распределение независимых случайных величин как прямое произведе-
	//     ние. Лемма о свертке распределений. Формула свертки для вычисления плотности
	//     суммы независимых случайных величин.

	// 14. Дисперсия, ковариация и коэффициент корреляции, их основные свойства. След-
	//     ствие для дисперсии суммы независимых случайных величин. Матрица ковариаций
	//     случайного вектора, ее неотрицательная определенность.

	// 15. Виды сходимостей случайных величин: с вероятностью 1 (почти наверное), по ве-
	//     роятности, в среднем порядка p > 0, по распределению. Критерий сходимости с
	//     вероятностью 1. Теорема о взаимоотношении различных видов сходимостей.

	// 16. Достаточное условие сходимости с вероятностью 1. Лемма о наличии подпоследова-
	//     тельности, сходящейся п.н., если вся последовательность сходится по вероятности.
	//     Усиленный закон больших чисел в форме Кантелли. Смысл усиленного закона боль-
	//     ших чисел.

	// 17. Фундаментальность с вероятностью 1 последовательности случайных величин. Кри-
	//     терий Коши для сходимости с вероятностью 1. Неравенство Колмогорова. Теорема
	//     Колмогорова–Хинчина о сходимости почти наверное ряда из случайных величин.

	// 18. Леммы Теплица и Кронекера (б/д). Лемма Бореля – Кантелли. Усиленный закон
	//     больших чисел в форме Колмогорова для независимых одинаково распределенных
	//     случайных величин с ограниченным математическим ожиданием.

	// 19. Слабая сходимость и сходимость в основном вероятностных мер и функций распреде-
	//     ления. Теорема Александрова (б/д). Теорема об эквивалентности слабой сходимости
	//     и сходимости в основном для вероятностных мер и соответствующих им функций
	//     распределения. Следствие для сходимости по распределению случайных величин.

	// 20. Характеристические функции случайных величин, векторов и вероятностных мер.
	//     Вычисление характеристической функции для стандартного нормального распреде-
	//     ления. Основные свойства характеристических функций случайных величин (един-
	//     ственность б/д).

	// 21. Теорема единственности для характеристических функций распределений на (R, B(R)).
	//     Вычисление распределения суммы независимых нормальных случайных величин.
	//     Формула обращения для характеристических функций (б/д).

	// 22. Теорема о производных характеристических функций. Разложение характеристиче-
	//     ской функции в ряд в окрестности нуля. Критерий независимость компонент слу-
	//     чайного вектора в терминах характеристических функций. Неотрицательная опре-
	//     деленность комплекснозначных функций на прямой. Теорема Бохнера – Хинчина
	//     (только док-во необходимости).

	// 23. Плотность и относительная компактность семейств вероятностных мер. Теорема Про-
	//     хорова (док-во только для R).

	// 24. Три леммы о свойствах плотных последовательностей вероятностных мер на прямой.
	//     Теорема непрерывности для характеристических функций.

	// 25. Центральная предельная теорема для независимых одинаково распределенных слу-
	//     чайных величин, следствия из нее. Смысл ЦПТ. Теорема Берри–Эссеена об оценке
	//     скорости сходимости в центральной предельной теореме (б/д).

	// 26. Виды сходимостей случайных векторов, связь с одномерными сходимостями. Тео-
	//     рема о наследовании сходимости. Усиленный закон больших чисел для случайных
	//     векторов. Многомерная центральная предельная теорема (б/д).

	// 27. Лемма Слуцкого. Пример применения: построение асимптотического доверительного
	//     интервала для параметра в схеме Бернулли.

	// 28. Гауссовские случайные векторы (многомерное нормальное распределение). Теорема
	//     о трех эквивалентных определениях. Следствия из нее: основные свойства гауссов-
	//     ских случайных векторов.

	// 29. Условное математическое ожидание случайной величины относительно σ-алгебры.
	//     Теорема о существовании (б/д). Явный вид условного математического ожидания в
	//     случае, если σ-алгебра порождена счетным разбиением.

	// 30. Основные свойства условного математического ожидания (10 штук).
	[
	]

	// 31. Условное математическое ожидание E (ξ|η = y), существование и основные свойства
	//     (б/д). Связь с E(ξ|η). Условное распределение и условная плотность одной случайной
	//     величины относительно другой. Теорема о вычислении условного математического
	//     ожидания с помощью условной плотности. Теорема о достаточном условии суще-
	//     ствования условной плотности.
];