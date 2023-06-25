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
	// 1. Вероятностное пространство (Ω, F, P). Системы событий: алгебры, σ-алгебры, π- и
	//    λ-системы. Первая теорема о π- и λ-системах. Лемма о существовании наименьшей
	//    алгебры (σ-алгебры, π- или λ-системы), порожденной произвольной системой под-
	//    множеств. Борелевские σ-алгебры в R, Rn, R∞.

	// 2. Вторая теорема о π- и λ-системах. Следствие из нее.

	// 3. Независимость событий и систем событий на вероятностном пространстве. Критерий
	//    независимости для конечного набора σ-алгебр. Независимость бесконечного набора
	//    систем событий.

	// 4. Функция распределения вероятностной меры на (R, B(R)), ее основные свойства. Тео-
	//    рема о взаимно-однозначном соответствии функций распределения и вероятностных
	//    мер на (R, B(R)).

	// 5. Классификация вероятностных мер и функций распределения на прямой. Приме-
	//    ры дискретных распределений: равномерное, биномиальное, пуассоновское. Приме-
	//    ры абсолютно непрерывных распределений: равномерное, нормальное, экспоненци-
	//    альное, гамма. Пример сингулярного распределения: “канторова лестница”. Теорема
	//    Лебега о разложении произвольной функции распределения(б/д).

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