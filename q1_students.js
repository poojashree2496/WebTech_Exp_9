use CollegeDB
db
db.createCollection("students")
show collections
db.students.insertOne({ rollNo: 101, name: "Arun", department: "CSE", age: 20, mark: 85, game: "Valorant" })
db.students.insertMany([
  { rollNo: 102, name: "Priya", department: "IT", age: 21, mark: 92, game: "Minecraft" },
  { rollNo: 103, name: "Kumar", department: "CSE", age: 19, mark: 78, game: "Call of Duty" },
  { rollNo: 104, name: "Divya", department: "ECE", age: 20, mark: 88, game: "GTA V" },
  { rollNo: 105, name: "Ravi", department: "CSE", age: 22, mark: 67, game: "FIFA 25" },
  { rollNo: 106, name: "Pooja", department: "CSE", age: 19, mark: 95, game: "Valorant" }
])
db.students.find({}, { _id: 0 })
db.students.findOne({ rollNo: 103 }, { _id: 0 })
db.students.find({ mark: { $gt: 80 } }, { _id: 0, rollNo: 1, name: 1, mark: 1 })
db.students.updateOne({ rollNo: 101 }, { $set: { mark: 90 } })
db.students.findOne({ rollNo: 101 }, { _id: 0, name: 1, mark: 1 })
db.students.deleteOne({ rollNo: 105 })
db.students.find({}, { _id: 0, rollNo: 1, name: 1, mark: 1 })
