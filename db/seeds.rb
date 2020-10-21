# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

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

# pin_2 = Pin.create!(
#     title: 'Seed',
#     description: 'Seeding!',
#     author_id: user2.id
# )

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

pin_5 = Pin.create!(
    title: 'alley',
    description: 'some good pubs down these ways',
    author_id: user1.id
)

pin_6 = Pin.create!(
    title: 'clean',
    description: 'elegant',
    author_id: user1.id
)

pin_7 = Pin.create!(
    title: 'behind sign',
    description: 'tourtists go "ooooooh"',
    author_id: user1.id
)

pin_8 = Pin.create!(
    title: 'no a flip!',
    description: 'no kneepads?',
    author_id: user2.id
)

pin_9 = Pin.create!(
    title: 'thinking and drinking',
    description: 'no beer? no issue here!',
    author_id: user1.id
)
pin_10 = Pin.create!(
    title: 'you are here',
    description: 'venice',
    author_id: user2.id
)

pin_11 = Pin.create!(
    title: 'the wheels on the bus',
    description: 'go flup flup flup',
    author_id: user1.id
)

pin_12 = Pin.create!(
    title: 'Water. fish?',
    description: 'no fish here',
    author_id: user2.id
)

pin_13 = Pin.create!(
    title: 'Smoking is cool',
    description: 'Makes you feel like James Bond',
    author_id: user1.id
)

pin_14 = Pin.create!(
    title: 'catch a show',
    description: 'i like to crowd surf',
    author_id: user2.id
)

pin_15 = Pin.create!(
    title: 'conversation and cafination',
    description: 'beans, water, sugar, cream',
    author_id: user1.id
)

pin_16 = Pin.create!(
    title: 'is this your floor?',
    description: 'no where to go but up... and down',
    author_id: user2.id
)

pin_17 = Pin.create!(
    title: 'downtown dena',
    description: 'parking is cheap here',
    author_id: user2.id
)

pin_18 = Pin.create!(
    title: 'is this a dog?',
    description: 'does it go "woof"?',
    author_id: user1.id
)

pin_19 = Pin.create!(
    title: 'lunge, poke, perry!',
    description: 'a good time',
    author_id: user2.id
)

pin_20 = Pin.create!(
    title: 'work station',
    description: 'Ryan Acosta, Cal Poly Pomona, Philosophy, BA - 2016',
    author_id: user1.id
)

pin_21 = Pin.create!(
    title: 'walk of fame',
    description: 'find your favorite name in entertainment',
    author_id: user2.id
)

pin_22 = Pin.create!(
    title: 'room setup',
    description: 'work work work',
    author_id: user2.id
)

pin_23 = Pin.create!(
    title: 'hollywood dell',
    description: 'hill from the sill',
    author_id: user2.id
)

pin_24 = Pin.create!(
    title: 'cityscape',
    description: 'it all looks so far away',
    author_id: user2.id
)

pin_25 = Pin.create!(
    title: 'house',
    description: 'fire',
    author_id: user2.id
)

pin_26 = Pin.create!(
    title: "get in, loser. we're going ferris wheeling!",
    description: 'fire',
    author_id: user1.id
)

pin_27 = Pin.create!(
    title: "home of the rich and famous",
    description: 'and shitty parking',
    author_id: user2.id
)

pin_28 = Pin.create!(
    title: "roses",
    description: 'caroliiiine!',
    author_id: user1.id
)

pin_29 = Pin.create!(
    title: "lazy caturday",
    description: 'meow',
    author_id: user1.id
)

pin_30 = Pin.create!(
    title: "here at the pier",
    description: 'catch a breeze',
    author_id: user2.id
)

pin_31 = Pin.create!(
    title: "rush hour tastes sour",
    description: 'and smells of stress',
    author_id: user1.id
)

pin_32 = Pin.create!(
    title: "not pawnee",
    description: 'and not the home of lil sebastion',
    author_id: user2.id
)

pin_33 = Pin.create!(
    title: "summoning season",
    description: 'whisper something',
    author_id: user1.id
)

pin_34 = Pin.create!(
    title: "who has the fake blood",
    description: "your characters motivation is that they're dead",
    author_id: user1.id
)

pin_35 = Pin.create!(
    title: "tarantino's theater, the new bev",
    description: "'Dirty movies have premiers?'",
    author_id: user1.id
)


# pin_1.photo.attach(io: open("url - link to image in bucket : OpenUrl-.... "), filename: "echopark.jpg")
pin_1.photo.attach(io: File.open("./app/assets/images/pins/echopark.jpg"), filename: "echopark.jpg")
pin_3.photo.attach(io: File.open("./app/assets/images/pins/hmb.jpg"), filename: "hmb.jpg")
pin_4.photo.attach(io: File.open("./app/assets/images/pins/swan.jpg"), filename: "swan.jpg")
pin_5.photo.attach(io: File.open("./app/assets/images/pins/alley.jpg"), filename: "alley.jpg")
pin_6.photo.attach(io: File.open("./app/assets/images/pins/white.jpg"), filename: "white.jpg")
pin_7.photo.attach(io: File.open("./app/assets/images/pins/behind_sign.jpg"), filename: "behind_sign.jpg")
pin_8.photo.attach(io: File.open("./app/assets/images/pins/veniceskate.jpg"), filename: "veniceskate.jpg")
pin_9.photo.attach(io: File.open("./app/assets/images/pins/booze.jpg"), filename: "booze.jpg")
pin_10.photo.attach(io: File.open("./app/assets/images/pins/venice.jpg"), filename: "venice.jpg")
pin_11.photo.attach(io: File.open("./app/assets/images/pins/bus.jpg"), filename: "bus.jpg")
pin_12.photo.attach(io: File.open("./app/assets/images/pins/venice_c.jpg"), filename: "venice_c.jpg")
pin_13.photo.attach(io: File.open("./app/assets/images/pins/cigs.jpg"), filename: "cigs.jpg")
pin_14.photo.attach(io: File.open("./app/assets/images/pins/theat.jpg"), filename: "theat.jpg")
pin_15.photo.attach(io: File.open("./app/assets/images/pins/coffee.jpg"), filename: "coffee.jpg")
pin_16.photo.attach(io: File.open("./app/assets/images/pins/stairs.jpg"), filename: "stairs.jpg")
pin_17.photo.attach(io: File.open("./app/assets/images/pins/dena2.jpg"), filename: "dena2.jpg")
pin_18.photo.attach(io: File.open("./app/assets/images/pins/silverlake.jpg"), filename: "silverlake.jpg")
pin_19.photo.attach(io: File.open("./app/assets/images/pins/fencing.jpg"), filename: "fencing.jpg")
pin_20.photo.attach(io: File.open("./app/assets/images/pins/setup2.jpg"), filename: "setup2.jpg")
pin_21.photo.attach(io: File.open("./app/assets/images/pins/hollywoodblvd.jpg"), filename: "hollywoodblvd.jpg")
pin_22.photo.attach(io: File.open("./app/assets/images/pins/setup1.jpg"), filename: "setup1.jpg")
pin_23.photo.attach(io: File.open("./app/assets/images/pins/hollywooddell.jpg"), filename: "hollywooddell.jpg")
pin_24.photo.attach(io: File.open("./app/assets/images/pins/scape.jpg"), filename: "scape.jpg")
pin_25.photo.attach(io: File.open("./app/assets/images/pins/house.jpg"), filename: "house.jpg")
pin_26.photo.attach(io: File.open("./app/assets/images/pins/santamonica.jpg"), filename: "santamonica.jpg")
pin_27.photo.attach(io: File.open("./app/assets/images/pins/hWood.jpg"), filename: "hWood.jpg")
pin_28.photo.attach(io: File.open("./app/assets/images/pins/roses.jpg"), filename: "roses.jpg")
pin_29.photo.attach(io: File.open("./app/assets/images/pins/kit3.jpg"), filename: "kit3.jpg")
pin_30.photo.attach(io: File.open("./app/assets/images/pins/pier.jpg"), filename: "pier.jpg")
pin_31.photo.attach(io: File.open("./app/assets/images/pins/LAfreeway.jpg"), filename: "LAfreeway.jpg")
pin_32.photo.attach(io: File.open("./app/assets/images/pins/pasadena.jpg"), filename: "pasadena.jpg")
pin_33.photo.attach(io: File.open("./app/assets/images/pins/moonoverla.jpg"), filename: "moonoverla.jpg")
pin_34.photo.attach(io: File.open("./app/assets/images/pins/movie.jpg"), filename: "movie.jpg")
pin_35.photo.attach(io: File.open("./app/assets/images/pins/newbev.jpg"), filename: "newbev.jpg")




p "Created #{Pin.count} pins"