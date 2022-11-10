// Code style: предложения и словосочетания в скобочках являются целым словом, они не должны быть длинными, от двух до пяти слов.
//   В запятые не входят пробелы. В интерфейсе и так пространство есть.
//   В определениях для предположений используется "пусть", а в утверждениях "если",
//   поскольку "если", как мне кажется, меньше нагружает текст, чем пусть, но при этом оно
//   не подходит для определений.
//   Математика отделяется в слова по кванторам. Потому вокруг кванторов скобочки.
//   По квантору принадлежности разделения нет. Разделение по кванторам существования и всеобщности
//   Поскольку единицы запоминания в формулировках -- кусочки математики, которые вставляем, по смыслу, как это написать.
//   А в кванторных утверждениях то, как они идут по порядку, потому там делю.
// Корректность определения интеграла для множества бесконечной меры. Могут спросить, когда попросят определение интеграла Лебега.
analysis_3sem = [
	// Определение интеграла Лебега для ограниченных функций
	// Определение интеграла Лебега для неотрицательных функций
	// Определение интеграла Лебега для произвольных функций
	[
		"Основная теорема об интеграле Лебега от ограниченных функций",
		["если", "мера", "$E$", "конечна", ",", "$f$", "измерима", "и", "ограничена",
			"на", "$E$", ",", "тогда", "$f$", "интегрируема", "по", "Лебегу", "на", "$E$", "и",
			"$\\int\\limits_E f(x) d\\mu(x) = \\lim\\limits_{\\Delta(Q) \\to 0} S(Q, f, \\{ t_i \\})$",
			"(интеграл равен пределу интегральных сумм)",
			";", "равенство", "означает", ",", "что", "выполнено", "утверждение",
			"$(\\forall \\varepsilon > 0)$", "$(\\exists \\delta > 0)$",
			"$(\\forall Q, \\Delta(Q) < \\delta)$",
			"$(\\forall \\{ t_i \\}, t_i \\in E_i)$",
			"$\\left| \\int\\limits_E f(x) d\\mu(x) - \\sum\\limits_{i = 1}^n f(t_i) \\mu(E_i) \\right| < \\varepsilon$"
		]
	],
	[
		"Основная теорема об интеграле Лебега от неограниченных неотрицательных функций",
		["если", "мера", "$E$", "конечна", ",", "$f$", "измеримая", ",", "неограниченная",
			"и", "неотрицательная", "на", "$E$", ",", "тогда", "$f$", "интегрируема", "по",
			"Лебегу", "на", "$E$", "и",
			"$\\int\\limits_E f(x) d\\mu(x) = \\lim\\limits_{\\Delta(Q) \\to 0} S(Q, f, \\{ t_i \\})$",
			"(интеграл равен пределу интегральных сумм)"
		]
	],
	[
		"Линейность интеграла Лебега",
		["если", "мера", "$E$", "конечна", ",", "$f_1$", "и", "$f_2$", "суммируемы", "на",
			"$E$", ",", "$c_1, c_2 \\in \\mathbb{R}$", ",", "тогда",
			"$с_1 f_1 + c_2 f_2$", "тоже", "суммируема", "на", "$E$", "и",
			"$\\int\\limits_E (c_1 f_1(x) + c_2 f_2(x)) d\\mu(x) = c_1 \\int\\limits_E f_1(x) d\\mu(x) + c_2 \\int\\limits_E f_2(x) d\\mu(x)$"
		]
	],
	[
		"Монотонность интеграла Лебега",
		["если", "мера", "$E$", "конечна", ",", "$f_1$", "и", "$f_2$", "суммируемы", "на",
			"$E$", ",", "$(\\forall x \\in E)$", "$f_1(x) \\leqslant f_2(x)$", "тогда",
			"$\\int\\limits_E f_1(x) d\\mu(x) \\leqslant \\int\\limits_E f_2(x) d\\mu(x)$"
		]
	],
	[
		"Теорема Лебега о переходе к пределу в интеграле Лебега",
		["если", "мера", "$E$", "конечна", ",", "$\\{f_n\\}_{n = 1}^\\infty$", "измеримы",
			"на", "$E$", ",", "$\\lim\\limits_{n \\to \\infty} f_n(x) = f(x)$",
			"почти", "всюду", "на", "$E$", "(поточечный предел почти всюду)", ",",
			"$|f_m(x)| \\leqslant F(x)$", "для", "любого", "$m \\in \\mathbb{N}$",
			"почти", "всюду", "на", "$E$", ",", "$F$", "суммируема", "на", "$E$", ",",
			"тогда", "$f$", "суммируема", "на", "$E$", "и",
			"$\\int\\limits_E f(x) d\\mu(x) = \\lim\\limits_{m \\to \\infty} \\int\\limits_E f_m(x) d\\mu(x)$"
		]
	],
	[
		"Теорема Леви о монотонной сходимости",
		["если", "мера", "$E$", "конечна", ",", "$\\{f_n\\}_{n = 1}^\\infty$", "измеримы", "и", "неотрицательны",
			"на", "$E$", ",", "$\\{f_m(x)\\}_{m = 1}^\\infty$", "неубывающая", "почти", "всюду", "на",
			"$E$", ",", "тогда",
			"$\\int\\limits_E \\lim\\limits_{m \\to \\infty} f_m(x) d\\mu(x) = \\lim\\limits_{m \\to \\infty} \\int\\limits_E f_m(x) d\\mu(x)$"
		]
	],
	[
		"Теорема Фату",
		["если", "мера", "$E$", "конечна", ",", "$\\{f_n\\}_{n = 1}^\\infty$", "измеримы",
			"на", "$E$", ",", "$f_m(x) \\geqslant 0$", "для", "любого", "$m \\in \\mathbb{N}$",
			"почти", "всюду", "на", "E", ",", "$\\lim\\limits_{m \\to \\infty} f_m(x) = f(x)$",
			"почти", "всюду", "на", "E", ",", "тогда",
			"$\\int\\limits_E f(x) d\\mu(x) \\leqslant \\underline{\\lim}\\limits_{m \\to \\infty} \\int\\limits_E f_m(x) d\\mu(x)$"
		]
	],
	[
		"Корректность определения интеграла Лебега по множеству бесконечной меры",
		["если", "$\\mu(E) = +\\infty$", ",", "$f$", "измерима", "и", "неотрицательна",
			"на", "$E$", ",", "тогда", "для", "любых", "двух", "неубывающих",
			"последовательностей", "множеств", "конечной", "меры",
			"$\\{ E_m \\}_{m = 1}^\\infty$", ",", "$\\{ E_m' \\}_{m = 1}^\\infty$", ",",
			"для", "которых", "верно", ",", "что",
			"$\\lim\\limits_{m \\to \\infty} E_m = \\lim\\limits_{m \\to \\infty} E'_m = E$",
			",",
			"$\\lim\\limits_{m \\to \\infty} \\int\\limits_{E_m} f(x) d\\mu(x) = \\lim\\limits_{m \\to \\infty} \\int\\limits_{E'_m} f(x) d\\mu(x)$"
		]
	],
	
]