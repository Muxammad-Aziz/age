// Определение возраста

let age = prompt('Сколько вам лет')

if (age >= 0 && age < 10) {
    alert("Ребёнок")
}  else if (age >= 11 && age <= 16)
    alert('Подросток')
 else if (age >= 17 && age <= 44) {
    alert('Молодёж')
} else if (age >= 45 && age <= 59) {
    alert('Средный')
} else if (age >= 60 && age <= 74) {
    alert('Пожилой')
} else if (age >= 75 && age <= 100) {
    alert('Старый')
}