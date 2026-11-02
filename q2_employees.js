use EmployeeDB
db.createCollection("employees")
db.employees.insertMany([
  { empId: "E01", name: "Karthik", department: "Game Development", salary: 65000, experience: 5 },
  { empId: "E02", name: "Sneha", department: "Game Design", salary: 38000, experience: 2 },
  { empId: "E03", name: "Rahul", department: "Game Development", salary: 52000, experience: 4 },
  { empId: "E04", name: "Anitha", department: "QA Testing", salary: 30000, experience: 1 },
  { empId: "E05", name: "Vikram", department: "Esports", salary: 45000, experience: 3 }
])
db.employees.find({}, { _id: 0 })
db.employees.find({ salary: { $gt: 40000 } }, { _id: 0, name: 1, salary: 1 })
db.employees.updateOne({ empId: "E02" }, { $set: { salary: 42000 } })
db.employees.find({}, { _id: 0, name: 1, salary: 1 }).sort({ salary: -1 })
db.employees.countDocuments({ department: "Game Development" })
