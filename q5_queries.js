use CollegeDB
db.students.find({ mark: { $gte: 75 } }, { _id: 0, name: 1, mark: 1 })
db.students.find({ age: { $lt: 21 } }, { _id: 0, name: 1, age: 1 })
db.students.find({ department: { $in: ["CSE", "IT"] } }, { _id: 0, name: 1, department: 1 })
db.students.find({}, { _id: 0, name: 1, mark: 1 }).sort({ mark: -1 }).limit(3)
db.students.updateMany({ department: "CSE" }, { $inc: { mark: 2 } })
db.students.find({ department: "CSE" }, { _id: 0, name: 1, mark: 1 })
show dbs
