function calc() {

  // Блок констант
  const price_of_one_primary_document = 150;
  const russian_citizens_cost = 1200;
  const foreign_citizens_cost = 1500;

  const varios_VAT = 1.2;
  const leasing = 1.2;
  const transactions_with_securities = 1.2;
  const exist2_marketplaces = 1.2;
  const over_2_marketplaces = 1.5;
  const over_10_product = 1.5;
  const universalism = 1.5;
  const alcohl = 1.5;
  const branches = 1.5;
  const export_import_currency = 2;
  const foreign_economic_activity = 3;

  // ИП
  const ip6 = 1500;
  const ip15 = 3000;
  const ip_osno = 4000;

  // ООО
  const ooo6 = 2500;
  const ooo15 = 3000;
  const ooo_osno = 4000;

  // Начали считать ...

  // Устанавливаем значение Базовая стоимость
  var tots = +document.getElementById("type_of_taxation_system").value;
  if (document.getElementById("type_of_bussines_entity").value == 0) {
    if (tots == 1) {
      var base_cost = ip6;
    } else if (tots == 2) {
      var base_cost = ip15;
    } else if (tots == 3) {
      var base_cost = ip_osno;
    }
  } else {
    if (tots == 1) {
      var base_cost = ooo6;
    } else if (tots == 2) {
      var base_cost = ooo15;
    } else if (tots == 3) {
      var base_cost = ooo_osno;
    }
  }

  // Формируем из Базовой цены значение Эффективная цена применяя коефициенты услуг
  var effective_prise = document.getElementById("is_varios_VAT").checked ? base_cost * varios_VAT : base_cost;
  effective_prise *= document.getElementById("is_leasing").checked ? leasing : 1;
  effective_prise *= document.getElementById("is_transactions_with_securities").checked ? transactions_with_securities : 1;
  effective_prise *= document.getElementById("is_2_marketplaces").checked ? exist2_marketplaces : 1;
  effective_prise *= document.getElementById("is_over_2_marketplaces").checked ? over_2_marketplaces : 1;
  effective_prise *= document.getElementById("is_over_10_product").checked ? over_10_product : 1;
  effective_prise *= document.getElementById("is_universalism").checked ? universalism : 1;
  effective_prise *= document.getElementById("is_alcohl").checked ? alcohl : 1;
  effective_prise *= document.getElementById("is_branches").checked ? branches : 1;
  effective_prise *= document.getElementById("is_export_import_currency").checked ? export_import_currency : 1;
  effective_prise *= document.getElementById("is_foreign_economic_activity").checked ? foreign_economic_activity : 1;

  // Формируем полную цену с учетом количества первичных документов и работников обоих типов
  var total_cost = effective_prise; 
  total_cost += +document.getElementById("quantity_of_primary_accounting_document").value * price_of_one_primary_document;
  total_cost += +document.getElementById("number_of_russian_citizens").value * russian_citizens_cost;
  total_cost += +document.getElementById("number_of_foreign_citizens").value * foreign_citizens_cost;

  // Вывод округляем до сотен рублей в меньшую сторону. 99 округлится как 0
  result.innerHTML = Math.floor(total_cost/100)*100;
}