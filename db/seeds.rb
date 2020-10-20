# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all

user1 = User.create!(
    email: 'AndysBFF1000@gmail.com',
    username: 'FriendInMe',
    password: 'pass123'
)

user2 = User.create!(
    email: 'BLightyear2000@starcommand.gov',
    username: 'FizzBuzzLightyear',
    password: 'pass123'
)


pin_1 = Pin.create!(
    title: 'Echo Park',
    description: 'Neato',
    author_id: user1.id
)

pin_2 = Pin.create!(
    title: 'Seed',
    description: 'Seeding!',
    author_id: user2.id
)

pin_3 = Pin.create!(
    title: 'Humbrrd',
    description: 'frtfrftrftrtfrtfrtfrt',
    author_id: user1.id
)

pin_4 = Pin.create!(
    title: 'swan',
    description: 'majestic <3',
    author_id: user2.id
)

pin_1.photo.attach(io: File.open("./app/assets/images/echopark.jpg"), filename: "echopark.jpg")

pin_2.photo.attach(io: File.open("./app/assets/images/seed.jpg"), filename: "seed.jpg")

pin_3.photo.attach(io: File.open("./app/assets/images/hmb.jpg"), filename: "hmb.jpg")

pin_4.photo.attach(io: File.open("./app/assets/images/swan.jpg"), filename: "swan.jpg")

p "Created #{Pin.count} pins"