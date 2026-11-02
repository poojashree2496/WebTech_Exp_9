use ProductDB
db.createCollection("products")
db.products.insertMany([
  { productId: "P01", name: "PS5 DualSense Controller", category: "Controller", price: 5990, stock: 12 },
  { productId: "P02", name: "Xbox Wireless Controller", category: "Controller", price: 4590, stock: 0 },
  { productId: "P03", name: "HyperX Cloud II Headset", category: "Headset", price: 7490, stock: 8 },
  { productId: "P04", name: "Logitech G102 Mouse", category: "Mouse", price: 1495, stock: 25 },
  { productId: "P05", name: "Redragon Mouse Pad XL", category: "Accessory", price: 599, stock: 40 },
  { productId: "P06", name: "Razer BlackWidow Keyboard", category: "Keyboard", price: 9999, stock: 5 },
  { productId: "P07", name: "Gaming Chair Pro", category: "Furniture", price: 14999, stock: 0 },
  { productId: "P08", name: "RGB Controller Stand", category: "Accessory", price: 1299, stock: 15 }
])
db.products.find({ category: "Controller" }, { _id: 0, name: 1, price: 1, stock: 1 })
db.products.find({ price: { $gte: 500, $lte: 2000 } }, { _id: 0, name: 1, price: 1 })
db.products.updateOne({ productId: "P03" }, { $inc: { stock: 10 } })
db.products.findOne({ productId: "P03" }, { _id: 0, name: 1, stock: 1 })
db.products.deleteMany({ stock: 0 })
db.products.find({}, { _id: 0, name: 1, price: 1 }).sort({ price: -1 }).limit(5)
