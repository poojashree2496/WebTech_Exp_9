use LibraryDB
db.createCollection("books")
db.books.insertMany([
  { bookId: "B01", title: "Masters of Doom", author: "David Kushner", category: "Gaming History", price: 450 },
  { bookId: "B02", title: "Blood, Sweat, and Pixels", author: "Jason Schreier", category: "Game Industry", price: 550 },
  { bookId: "B03", title: "The Art of Game Design", author: "Jesse Schell", category: "Game Design", price: 1200 },
  { bookId: "B04", title: "Press Reset", author: "Jason Schreier", category: "Game Industry", price: 600 },
  { bookId: "B05", title: "Game Programming Patterns", author: "Robert Nystrom", category: "Programming", price: 900 }
])
db.books.find({ author: "Jason Schreier" }, { _id: 0, title: 1, author: 1 })
db.books.find({ category: "Game Industry" }, { _id: 0, title: 1, category: 1 })
db.books.updateOne({ bookId: "B03" }, { $set: { price: 1100 } })
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ title: 1 })
db.books.countDocuments()
