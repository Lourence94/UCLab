var keystone = require('keystone');
var Service = keystone.list('Service');
var request = require('request');

const ass = {
	"list" : {
		"layers": [
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"default": "Неважно",
								"id": "flatClass",
								"label": "Класс жилья",
								"type": "select",
								"value": [
									"Неважно",
									"Эконом",
									"Бизнес",
									"Элитное"
								]
							},
							{
								"default": "Неважно",
								"id": "flatStructureLegalStatus",
								"label": "Конструктивно правовое-состояние",
								"type": "select",
								"value": [
									"Неважно",
									"Строящееся",
									"Новостройка",
									"Вторичное"
								]
							},
							{
								"default": "Неважно",
								"id": "typeHouse",
								"label": "Тип дома",
								"type": "select",
								"value": [
									"Неважно",
									"Кирпичный",
									"Деревянный",
									"Монолитный",
									"Блочеый",
									"Панельный"
								]
							},
							{
								"default": "Студия",
								"id": "roomCount",
								"label": "Количество комнат",
								"type": "select",
								"value": [
									"Студия",
									"1",
									"2",
									"3",
									"4",
									"5",
									"6+",
									"Свободная планировка"
								]
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность дома"
							},
							{
								"inputs": [
									{
										"id": "numFloorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "numFloorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этаж"
							},
							{
								"inputs": [
									{
										"id": "flatSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "500",
										"min": "10",
										"type": "input"
									},
									{
										"id": "flatSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Общая площадь квартиры"
							},
							{
								"inputs": [
									{
										"id": "flatPriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "flatSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							}
						],
						"extended": [
							{
								"inputs": [
									{
										"id": "numPart",
										"inputType": "number",
										"label": "Число долей",
										"max": "5",
										"min": "1",
										"type": "input"
									},
									{
										"id": "partOf",
										"inputType": "number",
										"label": "Из",
										"max": "5",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Число долей"
							},
							{
								"id": "countOwner",
								"inputType": "number",
								"label": "Число собственников",
								"max": "5",
								"min": "1",
								"type": "input"
							},
							{
								"default": "Неважно",
								"id": "flatEncumbranceStatus",
								"label": "Тип обремекения",
								"type": "select",
								"value": [
									"Неважно",
									"Аренда",
									"Ипотека",
									"Другое"
								]
							},
							{
								"inputs": [
									{
										"id": "flatLifeSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "500",
										"min": "10",
										"type": "input"
									},
									{
										"id": "flatLifeSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Жилая площадь"
							},
							{
								"inputs": [
									{
										"id": "flatKitchenSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "100",
										"min": "10",
										"type": "input"
									},
									{
										"id": "flatKitchenSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "100",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь кухни"
							},
							{
								"default": "Неважно",
								"id": "flatBathroom",
								"label": "Санузел",
								"type": "select",
								"value": [
									"Неважно",
									"Совмещенный",
									"Раздельный"
								]
							},
							{
								"default": "Неважно",
								"id": "flatCountBathroom",
								"label": "Число санузлов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatBalcony",
								"label": "Санузел",
								"type": "select",
								"value": [
									"Неважно",
									"Балкон",
									"Лоджия"
								]
							},
							{
								"default": "Неважно",
								"id": "flatCountBalcony",
								"label": "Число балконов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Косметический",
									"Капитальный",
									"Евро"
								]
							},
							{
								"default": "Неважно",
								"id": "flatHeating",
								"label": "Отопление",
								"type": "select",
								"value": [
									"Неважно",
									"Автономное",
									"Централизованное"
								]
							},
							{
								"inputs": [
									{
										"id": "flatCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "2",
										"type": "input"
									},
									{
										"id": "flatCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							},
							{
								"default": "Неважно",
								"id": "flatWindowView",
								"label": "Вид из окна",
								"type": "select",
								"value": [
									"Неважно",
									"Во двор",
									"На улицу",
									"Оба варианта"
								]
							},
							{
								"id": "flatDoors",
								"label": "Межкомнатные двери",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatFurniture",
								"label": "Мебель",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatKitchenSet",
								"label": "Кухонный гарнитур",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatInternet",
								"label": "Интернет",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatPhone",
								"label": "Телефон",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatCableTv",
								"label": "Кабельное ТВ",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatConditioner",
								"label": "Кабельное ТВ",
								"type": "checkbox",
								"value": "false"
							},
							{
								"inputs": [
									{
										"id": "flatYearBuiltMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "flatYearBuiltMax",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год постройки"
							},
							{
								"inputs": [
									{
										"id": "flatYearExploitationMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "flatYearExploitationMax",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год ввода в эксплуатацию"
							},
							{
								"id": "flatLift",
								"label": "Лмфт",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatServiceLift",
								"label": "Грузовой лифт",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "flatCountLift",
								"label": "Число лифтов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3",
									"4+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatParking",
								"label": "Парковка",
								"type": "select",
								"value": [
									"Неважно",
									"Наземная",
									"Подземная",
									"Многоуровневая",
									"На крыше"
								]
							},
							{
								"id": "flatConcierge",
								"label": "Консьерж",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatSecurity",
								"label": "Охрана",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "flatSaleType",
								"label": "Тип продажи",
								"type": "select",
								"value": [
									"Неважно",
									"Свободная",
									"Альтернативная",
									"Воможна ипотека"
								]
							},
							{
								"inputs": [
									{
										"class": "datepicker",
										"id": "flatFromDate",
										"inputType": "text",
										"label": "C",
										"type": "input"
									},
									{
										"id": "flatToDate",
										"inputType": "number",
										"label": "По",
										"type": "input"
									}
								],
								"label": "Дата подачи объявления"
							}
						]
					}
				],
				"layerName": "Квартиры"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"default": "Неважно",
								"id": "flatClass",
								"label": "Класс жилья",
								"type": "select",
								"value": [
									"Неважно",
									"Эконом",
									"Бизнес",
									"Элитное"
								]
							},
							{
								"default": "Неважно",
								"id": "flatStructureLegalStatus",
								"label": "Конструктивно правовое-состояние",
								"type": "select",
								"value": [
									"Неважно",
									"Строящееся",
									"Новостройка",
									"Вторичное"
								]
							},
							{
								"default": "Неважно",
								"id": "typeHouse",
								"label": "Тип дома",
								"type": "select",
								"value": [
									"Неважно",
									"Кирпичный",
									"Деревянный",
									"Монолитный",
									"Блочеый",
									"Панельный"
								]
							},
							{
								"default": "Студия",
								"id": "roomCount",
								"label": "Количество комнат",
								"type": "select",
								"value": [
									"Студия",
									"1",
									"2",
									"3",
									"4",
									"5",
									"6+",
									"Свободная планировка"
								]
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность дома"
							},
							{
								"inputs": [
									{
										"id": "numFloorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "numFloorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этаж"
							},
							{
								"inputs": [
									{
										"id": "flatSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "500",
										"min": "10",
										"type": "input"
									},
									{
										"id": "flatSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Общая площадь квартиры"
							},
							{
								"inputs": [
									{
										"id": "roomSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "100",
										"min": "10",
										"type": "input"
									},
									{
										"id": "roomSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "100",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь комнаты"
							},
							{
								"inputs": [
									{
										"id": "flatPriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "flatSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							}
						],
						"extended": [
							{
								"inputs": [
									{
										"id": "numPart",
										"inputType": "number",
										"label": "Число долей",
										"max": "5",
										"min": "1",
										"type": "input"
									},
									{
										"id": "partOf",
										"inputType": "number",
										"label": "Из",
										"max": "5",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Число долей"
							},
							{
								"id": "countOwner",
								"inputType": "number",
								"label": "Число собственников",
								"max": "5",
								"min": "1",
								"type": "input"
							},
							{
								"default": "Неважно",
								"id": "flatEncumbranceStatus",
								"label": "Тип обремекения",
								"type": "select",
								"value": [
									"Неважно",
									"Аренда",
									"Ипотека",
									"Другое"
								]
							},
							{
								"inputs": [
									{
										"id": "flatLifeSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "500",
										"min": "10",
										"type": "input"
									},
									{
										"id": "flatLifeSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Жилая площадь"
							},
							{
								"inputs": [
									{
										"id": "flatKitchenSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "100",
										"min": "10",
										"type": "input"
									},
									{
										"id": "flatKitchenSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "100",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь кухни"
							},
							{
								"default": "Неважно",
								"id": "flatBathroom",
								"label": "Санузел",
								"type": "select",
								"value": [
									"Неважно",
									"Совмещенный",
									"Раздельный"
								]
							},
							{
								"default": "Неважно",
								"id": "flatCountBathroom",
								"label": "Число санузлов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatBalcony",
								"label": "Санузел",
								"type": "select",
								"value": [
									"Неважно",
									"Балкон",
									"Лоджия"
								]
							},
							{
								"default": "Неважно",
								"id": "flatCountBalcony",
								"label": "Число балконов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Косметический",
									"Капитальный",
									"Евро"
								]
							},
							{
								"default": "Неважно",
								"id": "flatHeating",
								"label": "Отопление",
								"type": "select",
								"value": [
									"Неважно",
									"Автономное",
									"Централизованное"
								]
							},
							{
								"inputs": [
									{
										"id": "flatCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "2",
										"type": "input"
									},
									{
										"id": "flatCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							},
							{
								"default": "Неважно",
								"id": "flatWindowView",
								"label": "Вид из окна",
								"type": "select",
								"value": [
									"Неважно",
									"Во двор",
									"На улицу",
									"Оба варианта"
								]
							},
							{
								"id": "flatDoors",
								"label": "Межкомнатные двери",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatFurniture",
								"label": "Мебель",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatKitchenSet",
								"label": "Кухонный гарнитур",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatInternet",
								"label": "Интернет",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatPhone",
								"label": "Телефон",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatCableTv",
								"label": "Кабельное ТВ",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatConditioner",
								"label": "Кондиционер",
								"type": "checkbox",
								"value": "false"
							},
							{
								"inputs": [
									{
										"id": "flatYearBuiltMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "flatYearBuiltMax",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год постройки"
							},
							{
								"inputs": [
									{
										"id": "flatYearExploitationMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "flatYearExploitationMax",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год ввода в эксплуатацию"
							},
							{
								"id": "flatLift",
								"label": "Лмфт",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatServiceLift",
								"label": "Грузовой лифт",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "flatCountLift",
								"label": "Число лифтов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3",
									"4+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatParking",
								"label": "Парковка",
								"type": "select",
								"value": [
									"Неважно",
									"Наземная",
									"Подземная",
									"Многоуровневая",
									"На крыше"
								]
							},
							{
								"id": "flatConcierge",
								"label": "Консьерж",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "flatSecurity",
								"label": "Охрана",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "flatSaleType",
								"label": "Тип продажи",
								"type": "select",
								"value": [
									"Неважно",
									"Свободная",
									"Альтернативная",
									"Воможна ипотека"
								]
							},
							{
								"inputs": [
									{
										"class": "datepicker",
										"id": "flatFromDate",
										"inputType": "text",
										"label": "C",
										"type": "input"
									},
									{
										"id": "flatToDate",
										"inputType": "number",
										"label": "По",
										"type": "input"
									}
								],
								"label": "Дата подачи объявления"
							}
						]
					}
				],
				"layerName": "Комнаты"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"default": "Неважно",
								"id": "houseClass",
								"label": "Класс жилья",
								"type": "select",
								"value": [
									"Неважно",
									"Эконом",
									"Бизнес",
									"Элитное"
								]
							},
							{
								"inputs": [
									{
										"id": "housePriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "houseSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"default": "Неважно",
								"id": "typeHouse",
								"label": "Тип дома",
								"type": "select",
								"value": [
									"Неважно",
									"Кирпичный",
									"Деревянный",
									"Монолитный",
									"Блочеый",
									"Панельный"
								]
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность"
							},
							{
								"default": "1",
								"id": "roomCount",
								"label": "Количество комнат",
								"type": "select",
								"value": [
									"1",
									"2",
									"3",
									"4",
									"5",
									"6+"
								]
							},
							{
								"inputs": [
									{
										"id": "houseSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "500",
										"min": "10",
										"type": "input"
									},
									{
										"id": "houseSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Общая площадь дома"
							},
							{
								"inputs": [
									{
										"id": "landSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "50",
										"min": "10",
										"type": "input"
									},
									{
										"id": "landSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "50",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь участка"
							}
						],
						"extended": [
							{
								"inputs": [
									{
										"id": "houseLifeSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "500",
										"min": "10",
										"type": "input"
									},
									{
										"id": "houseLifeSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Жилая площадь"
							},
							{
								"inputs": [
									{
										"id": "houseKitchenSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "100",
										"min": "10",
										"type": "input"
									},
									{
										"id": "houseKitchenSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "100",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь кухни"
							},
							{
								"inputs": [
									{
										"id": "houseCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "2",
										"type": "input"
									},
									{
										"id": "houseCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							},
							{
								"default": "Неважно",
								"id": "houseBathroom",
								"label": "Санузел",
								"type": "select",
								"value": [
									"Неважно",
									"Совмещенный",
									"Раздельный"
								]
							},
							{
								"default": "Неважно",
								"id": "houseCountBathroom",
								"label": "Число санузлов",
								"type": "select",
								"value": [
									"Неважно",
									"1",
									"2",
									"3+"
								]
							},
							{
								"default": "Неважно",
								"id": "flatBalcony",
								"label": "Балкон",
								"type": "select",
								"value": [
									"Неважно",
									"Балкон",
									"Лоджия"
								]
							},
							{
								"default": "Неважно",
								"id": "houseHeating",
								"label": "Отопление",
								"type": "select",
								"value": [
									"Неважно",
									"Газовое",
									"Угольное",
									"Электричество"
								]
							},
							{
								"id": "houseElectricity",
								"label": "Электричество",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseGas",
								"label": "Газ",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseSewage",
								"label": "Канализация",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseWater",
								"label": "Водоснабжение",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseInternet",
								"label": "Интернет",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "housePhone",
								"label": "Телефон",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseCableTv",
								"label": "Кабельное ТВ",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "bathhouse",
								"label": "Баня",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseGarage",
								"label": "Гараж",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseSwimmingPool",
								"label": "Бассейн",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "houseSecurity",
								"label": "Охрана",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "typeLand",
								"label": "Тип участка",
								"type": "select",
								"value": [
									"Неважно",
									"Фермерское хозяйство",
									"Садоводство",
									"Застройка"
								]
							},
							{
								"default": "Неважно",
								"id": "houseRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Косметический",
									"Капитальный",
									"Евро"
								]
							},
							{
								"id": "houseOtherBuild",
								"label": "Другие постройки",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "houseEncumbranceStatus",
								"label": "Тип обремекения",
								"type": "select",
								"value": [
									"Неважно",
									"Аренда",
									"Ипотека",
									"Другое"
								]
							},
							{
								"default": "Неважно",
								"id": "houseSaleType",
								"label": "Тип продажи",
								"type": "select",
								"value": [
									"Неважно",
									"Свободная",
									"Альтернативная",
									"Воможна ипотека"
								]
							},
							{
								"inputs": [
									{
										"id": "houseYearBuiltMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "houseYearBuiltMax",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год постройки"
							},
							{
								"inputs": [
									{
										"id": "houseYearExploitationMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "houseYearExploitationMin",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год ввода в эксплуатацию"
							},
							{
								"id": "countOwner",
								"inputType": "number",
								"label": "Число собственников",
								"max": "5",
								"min": "1",
								"type": "input"
							}
						]
					}
				],
				"layerName": "Дома"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "landPriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "landPriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"inputs": [
									{
										"id": "landSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "50",
										"min": "10",
										"type": "input"
									},
									{
										"id": "landSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "50",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь участка"
							},
							{
								"id": "landElectricity",
								"label": "Электричество",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "landGas",
								"label": "Газ",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "landSewage",
								"label": "Канализация",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "landWater",
								"label": "Водоснабжение",
								"type": "checkbox",
								"value": "false"
							},
							{
								"default": "Неважно",
								"id": "typeLand",
								"label": "Тип участка",
								"type": "select",
								"value": [
									"Неважно",
									"Фермерское хозяйство",
									"Садоводство",
									"Застройка"
								]
							},
							{
								"default": "Неважно",
								"id": "landEncumbranceStatus",
								"label": "Тип обремекения",
								"type": "select",
								"value": [
									"Неважно",
									"Аренда",
									"Аренда",
									"Ипотека",
									"Другое"
								]
							}
						],
						"extended": []
					}
				],
				"layerName": "Земельный участок"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "officePriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "officePriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность"
							},
							{
								"inputs": [
									{
										"id": "numFloorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "numFloorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этаж"
							},
							{
								"inputs": [
									{
										"id": "officeCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "2",
										"type": "input"
									},
									{
										"id": "officeCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							},
							{
								"inputs": [
									{
										"id": "officeSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "1000",
										"min": "10",
										"type": "input"
									},
									{
										"id": "officeSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "1000",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь"
							}
						],
						"extended": [
							{
								"default": "Неважно",
								"id": "officeEntrance",
								"label": "Вход",
								"type": "select",
								"value": [
									"Неважно",
									"Cвободный",
									"По пропускам"
								]
							},
							{
								"default": "Неважно",
								"id": "officeRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Офисная отделка",
									"Под чистовую отделку",
									"Требуется кап.ремонт",
									"Требуется косметический ремонт"
								]
							},
							{
								"default": "Неважно",
								"id": "officePlanning",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Открытая",
									"Кабинетная"
								]
							},
							{
								"default": "Неважно",
								"id": "officeParking",
								"label": "Парковка",
								"type": "select",
								"value": [
									"Неважно",
									"Наземная",
									"Подземная",
									"Многоуровневая",
									"На крыше"
								]
							},
							{
								"id": "officeSecurity",
								"label": "Охрана",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "officeInternet",
								"label": "Интернет",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "officePhone",
								"label": "Телефон",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "officeFurniture",
								"label": "Мебель",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "officeConditioner",
								"label": "Кондиционер",
								"type": "checkbox",
								"value": "false"
							}
						]
					}
				],
				"layerName": "Офисы"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "tradePriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "tradePriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность"
							},
							{
								"inputs": [
									{
										"id": "numFloorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "numFloorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этаж"
							},
							{
								"inputs": [
									{
										"id": "tradeSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "10000",
										"min": "10",
										"type": "input"
									},
									{
										"id": "tradeSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "10000",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь"
							},
							{
								"inputs": [
									{
										"id": "tradeCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "2",
										"type": "input"
									},
									{
										"id": "tradeCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							}
						],
						"extended": [
							{
								"default": "Неважно",
								"id": "tradeSpecialization",
								"label": "Специализация помещения",
								"type": "select",
								"value": [
									"Неважно",
									"Кафе",
									"Минимаркет",
									"Офис продаж",
									"Другое"
								]
							},
							{
								"default": "Неважно",
								"id": "tradeEntrance",
								"label": "Вход",
								"type": "select",
								"value": [
									"Неважно",
									"Общий с улицы",
									"Общий со двора",
									"Отдельный с улицы",
									"Отдельный со двора"
								]
							},
							{
								"default": "Неважно",
								"id": "tradeRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Офисная отделка",
									"Под чистовую отделку",
									"Требуется кап.ремонт",
									"Требуется косметический ремонт"
								]
							},
							{
								"id": "tradeSecurity",
								"label": "Охрана",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "tradeInternet",
								"label": "Интернет",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "tradePhone",
								"label": "Телефон",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "tradeFurniture",
								"label": "Мебель",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "tradeConditioner",
								"label": "Кондиционер",
								"type": "checkbox",
								"value": "false"
							}
						]
					}
				],
				"layerName": "Торговые помещения"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "stockPriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "stockPriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность"
							},
							{
								"inputs": [
									{
										"id": "numFloorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "numFloorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этаж"
							},
							{
								"inputs": [
									{
										"id": "stockSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "10000",
										"min": "10",
										"type": "input"
									},
									{
										"id": "stockSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "10000",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь"
							},
							{
								"inputs": [
									{
										"id": "stockCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "10",
										"min": "2",
										"type": "input"
									},
									{
										"id": "stockCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "10",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							}
						],
						"extended": [
							{
								"default": "Неважно",
								"id": "stockCrane",
								"label": "Кран",
								"type": "select",
								"value": [
									"Неважно",
									"Мостовой кран",
									"Кран-балка",
									"ЖД кран",
									"Козловой кран"
								]
							},
							{
								"default": "Неважно",
								"id": "stockGate",
								"label": "Ворота",
								"type": "select",
								"value": [
									"Неважно",
									"На пандусе",
									"Докового типа",
									"На нулевой отметке"
								]
							},
							{
								"default": "Неважно",
								"id": "stockEntrance",
								"label": "Вход",
								"type": "select",
								"value": [
									"Неважно",
									"Cвободный",
									"По пропускам"
								]
							},
							{
								"default": "Неважно",
								"id": "stockTypeContract",
								"label": "Тип договора",
								"type": "select",
								"value": [
									"Неважно",
									"Продажа",
									"Перекупка прав аренды"
								]
							},
							{
								"default": "Неважно",
								"id": "stockRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Типовой ремонт",
									"Требуется капитальный ремонт",
									"Требуется"
								]
							},
							{
								"default": "Неважно",
								"id": "stockParking",
								"label": "Парковка",
								"type": "select",
								"value": [
									"Неважно",
									"На территории",
									"Для грузового транспорта",
									"Для легковесного транспорта"
								]
							}
						]
					}
				],
				"layerName": "Склады"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "premisesPriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									},
									{
										"id": "premisesPriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "500000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"inputs": [
									{
										"id": "floorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "floorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этажность"
							},
							{
								"inputs": [
									{
										"id": "numFloorRangeMin",
										"inputType": "number",
										"label": "От",
										"max": "30",
										"min": "1",
										"type": "input"
									},
									{
										"id": "numFloorRangeMax",
										"inputType": "number",
										"label": "До",
										"max": "30",
										"min": "1",
										"type": "input"
									}
								],
								"label": "Этаж"
							},
							{
								"inputs": [
									{
										"id": "premisesSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "10000",
										"min": "10",
										"type": "input"
									},
									{
										"id": "premisesSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "10000",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Площадь"
							},
							{
								"inputs": [
									{
										"id": "tradeCellingHeightMin",
										"inputType": "number",
										"label": "От",
										"max": "5",
										"min": "2",
										"type": "input"
									},
									{
										"id": "premisesCellingHeightMax",
										"inputType": "number",
										"label": "До",
										"max": "5",
										"min": "3",
										"type": "input"
									}
								],
								"label": "Высота потолков"
							}
						],
						"extended": [
							{
								"default": "Неважно",
								"id": "premisesSpecialization",
								"label": "Специализация помещения",
								"type": "select",
								"value": [
									"Неважно",
									"Кафе",
									"Минимаркет",
									"Офис продаж",
									"Другое"
								]
							},
							{
								"default": "Неважно",
								"id": "premisesEntrance",
								"label": "Вход",
								"type": "select",
								"value": [
									"Неважно",
									"Общий с улицы",
									"Общий со двора",
									"Отдельный с улицы",
									"Отдельный со двора"
								]
							},
							{
								"default": "Неважно",
								"id": "premisesRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Типовой ремонт",
									"Дизайнерский",
									"Под чистовую"
								]
							},
							{
								"default": "Неважно",
								"id": "premisesTypeContract",
								"label": "Тип договора",
								"type": "select",
								"value": [
									"Неважно",
									"Продажа",
									"Перекупка прав аренды"
								]
							}
						]
					}
				],
				"layerName": "Помещения"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "garagePriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "50000",
										"type": "input"
									},
									{
										"id": "garagePriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "50000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"default": "Гараж",
								"id": "garageType",
								"label": "Тип",
								"type": "select",
								"value": [
									"Гараж",
									"Бокс",
									"Машиноместо"
								]
							},
							{
								"default": "Неважно",
								"id": "garageTypeBuild",
								"label": "Тип гаража",
								"type": "select",
								"value": [
									"Неважно",
									"Встроенный",
									"Капитальный"
								]
							},
							{
								"default": "Неважно",
								"id": "garageStatus",
								"label": "Статус",
								"type": "select",
								"value": [
									"Неважно",
									"Собственность",
									"Кооператив",
									"По договоренности"
								]
							}
						],
						"extended": [
							{
								"default": "Неважно",
								"id": "garageParking",
								"label": "Парковка",
								"type": "select",
								"value": [
									"Неважно",
									"Наземная",
									"Подземная",
									"Многоуровневая",
									"На крыше"
								]
							},
							{
								"id": "gsk",
								"inputType": "text",
								"label": "Название ГСК",
								"type": "input"
							},
							{
								"default": "Неважно",
								"id": "garageHeating",
								"label": "Отопление",
								"type": "select",
								"value": [
									"Неважно",
									"Газовое",
									"Угольное",
									"Электричество"
								]
							},
							{
								"id": "garageElectricity",
								"label": "Электричество",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "garageFireSystem",
								"label": "Система пожаротушения",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "garageSecurity",
								"label": "Охрана",
								"type": "checkbox",
								"value": "false"
							}
						]
					}
				],
				"layerName": "Гаражи"
			},
			{
				"filters": [
					{
						"brief": [
							{
								"id": "address",
								"inputType": "text",
								"label": "Адресс",
								"type": "input"
							},
							{
								"inputs": [
									{
										"id": "buildingPriceMin",
										"inputType": "number",
										"label": "От",
										"max": "20000000",
										"min": "50000",
										"type": "input"
									},
									{
										"id": "buildingPriceMax",
										"inputType": "number",
										"label": "До",
										"max": "20000000",
										"min": "50000",
										"type": "input"
									}
								],
								"label": "Ценовой диапазон"
							},
							{
								"inputs": [
									{
										"id": "buildingSquareMin",
										"inputType": "number",
										"label": "От",
										"max": "5000",
										"min": "10",
										"type": "input"
									},
									{
										"id": "buildingSquareMax",
										"inputType": "number",
										"label": "До",
										"max": "500",
										"min": "10",
										"type": "input"
									}
								],
								"label": "Общая площадь"
							},
							{
								"default": "Неважно",
								"id": "buildingSpecialization",
								"label": "Специализация помещения",
								"type": "select",
								"value": [
									"Неважно",
									"Кафе",
									"Минимаркет",
									"Офис продаж",
									"Другое"
								]
							},
							{
								"default": "Неважно",
								"id": "buildingClass",
								"label": "Класс",
								"type": "select",
								"value": [
									"Неважно",
									"A+",
									"A",
									"B+",
									"B",
									"C",
									"D"
								]
							}
						],
						"extended": [
							{
								"inputs": [
									{
										"id": "buildingYearBuiltMin",
										"inputType": "number",
										"label": "От",
										"max": "2017",
										"min": "1970",
										"type": "input"
									},
									{
										"id": "buildingYearBuiltMax",
										"inputType": "number",
										"label": "До",
										"max": "2017",
										"min": "1970",
										"type": "input"
									}
								],
								"label": "Год постройки"
							},
							{
								"default": "Неважно",
								"id": "buildingLine",
								"label": "Линия домов",
								"type": "select",
								"value": [
									"Неважно",
									"Первая",
									"Вторая"
								]
							},
							{
								"default": "Неважно",
								"id": "buildingEntrance",
								"label": "Вход",
								"type": "select",
								"value": [
									"Неважно",
									"Общий с улицы",
									"Общий со двора",
									"Отдельный с улицы",
									"Отдельный со двора"
								]
							},
							{
								"default": "Неважно",
								"id": "buildingRepair",
								"label": "Ремонт",
								"type": "select",
								"value": [
									"Неважно",
									"Типовой ремонт",
									"Дизайнерский",
									"Под чистовую"
								]
							},
							{
								"default": "Неважно",
								"id": "buildingTypeContract",
								"label": "Тип догора",
								"type": "select",
								"value": [
									"Неважно",
									"Продажа",
									"Перекупка прав аренды"
								]
							},
							{
								"id": "buildingFurniture",
								"label": "Мебель",
								"type": "checkbox",
								"value": "false"
							},
							{
								"id": "buildingParking",
								"label": "Парковка",
								"type": "checkbox",
								"value": "false"
							}
						]
					}
				],
				"layerName": "Здание"
			}
		]
	}
}

module.exports = function (req, res) {
	res.json(ass)
};
