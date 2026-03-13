const clickBtn = document.querySelector(".click-btn")

console.log(clickBtn)

clickBtn.addEventListener("click", function () {
    document.querySelector(".title").textContent = "JavaScript массивдери (Array) — бул бир өзгөрмөдө бир нече маанини (маалыматты) иреттелген тизме түрүндө сактоого мүмкүндүк берген атайын объекттик түзүлүш. Алар 0дөн башталган индекстер менен нумератцияланат, динамикалык түрдө өзгөрө алат жана ар кандай маалымат түрлөрүн (сандар, саптар, башка массивдер) камтый алат"
})



const colorBtn = document.querySelector(".color-btn")

console.log(colorBtn)

colorBtn.addEventListener("click", function () {
    document.querySelector(".color-title").textContent = "Методы массивов в JavaScript — это встроенные функции для управления данными, разбитые на мутирующие (меняют исходный массив: push, pop, shift, unshift, splice, sort, reverse) и немутирующие (возвращают новый: map, filter, reduce, slice, concat). Основные методы для итерации — forEach и map, а для поиска — find и includes." 
})