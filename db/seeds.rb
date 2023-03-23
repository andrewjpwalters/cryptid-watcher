# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding!"

User.create(username: "dave123", password_digest: "123")
User.create(username: "caitlin345", password_digest: "123")
User.create(username: "steveo456", password_digest: "123")

Cryptid.create(name: "Mothman", description: "Mothy with glowing red eyes", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mothman_Artist%27s_Impression.png/1280px-Mothman_Artist%27s_Impression.png", user_id: 1)
Cryptid.create(name: "Bigfoot", description: "Big, hairy, big feet", image_url: "https://upload.wikimedia.org/wikipedia/en/9/99/Patterson%E2%80%93Gimlin_film_frame_352.jpg", user_id: 2)
Cryptid.create(name: "Jersey Devil", description: "A devil from Jersey", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jersey_Devil.svg/1024px-Jersey_Devil.svg.png", user_id: 3)

Location.create(name: "Point Pleasant", user_id: 1)
Location.create(name: "Six Rivers National Forest", user_id: 2)
Location.create(name: "Pine Barrens", user_id: 3)

Post.create(comment: "Spotted at 3 pm", user_id: 1, cryptid_id: 1, location_id: 1)
Post.create(comment: "Spotted on the ridge", user_id: 2, cryptid_id: 2, location_id: 2)
Post.create(comment: "Had dinner with it.", user_id: 3, cryptid_id: 3, location_id: 3)
Post.create(comment: "Saw the red eyes from a treetop.", user_id: 1, cryptid_id: 1, location_id: 1)
Post.create(comment: "Shook hands with him. Very friendly guy.", user_id: 2, cryptid_id: 2, location_id: 2)
Post.create(comment: "Ate all my cake.", user_id: 3, cryptid_id: 3, location_id: 3)



puts "Done seeding!"