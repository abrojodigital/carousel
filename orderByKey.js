const employees = [
  {id : 1, nombre : 'Juan', apellido : 'Perez', edad : 30},
  {id : 2, nombre : 'Pedro', apellido : 'Perez', edad : 25},
  {id : 3, nombre : 'Maria', apellido : 'Perez', edad : 35},
  {id : 4, nombre : 'Juana', apellido : 'Perez', edad : 25},
  {id : 5, nombre : 'Juana', apellido : 'Perez', edad : 25},
  {id : 6, nombre : 'Juana', apellido : 'Perez', edad : 25},
]

const orderEmployeesByKey = (key) => {
  return employees.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
    return 0;
    }
  }
  )
}
console.log(orderEmployeesByKey('nombre'));
