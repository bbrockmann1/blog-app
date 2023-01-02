puts "Seeding users..."
# Seeds for users.
user1 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar: Faker::Avatar.image)
user2 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar: Faker::Avatar.image)
user3 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar: Faker::Avatar.image)
user4 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar: Faker::Avatar.image)
user5 = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password, avatar: Faker::Avatar.image)
user6 = User.create(first_name: 'Robert', last_name: 'Brockmann', email: 'test', password: '1234', avatar: Faker::Avatar.image)

puts "Seeding tags..."
# Seeds for tags.
Tag.create(category: "Fashion")
Tag.create(category: "Travel")
Tag.create(category: "Music")
Tag.create(category: "DIY")
Tag.create(category: "Sports")
Tag.create(category: "Lifestyle")
Tag.create(category: "Finance")
Tag.create(category: "Politics")
Tag.create(category: "Parenting")
Tag.create(category: "Business")
Tag.create(category: "Movies")
Tag.create(category: "Tech")
Tag.create(category: "Development")
Tag.create(category: "Gaming")
Tag.create(category: "Auto")


puts "seeding blogs..."
# Seeds for posts.
blog1 = Blog.create!(title: Faker::Book.title, content: Faker::Hipster.paragraph(sentence_count: 4), user_id: user1.id, review_id: nil, tag_id: Tag.all.sample.id)
blog2 = Blog.create!(title: Faker::Book.title, content: Faker::Hipster.paragraph(sentence_count: 4), user_id: user2.id, review_id: nil, tag_id: Tag.all.sample.id)
blog3 = Blog.create!(title: Faker::Book.title, content: Faker::Hipster.paragraph(sentence_count: 4), user_id: user3.id, review_id: nil, tag_id: Tag.all.sample.id)
blog4 = Blog.create!(title: Faker::Book.title, content: Faker::Hipster.paragraph(sentence_count: 4), user_id: user4.id, review_id: nil, tag_id: Tag.all.sample.id)
blog5 = Blog.create!(title: Faker::Book.title, content: Faker::Hipster.paragraph(sentence_count: 4), user_id: user5.id, review_id: nil, tag_id: Tag.all.sample.id)
blog6 = Blog.create!(title: Faker::Book.title, content: Faker::Hipster.paragraph(sentence_count: 10), user_id: user6.id, review_id: nil, tag_id: Tag.all.sample.id)
blog7 = Blog.create!(title: 'The McRib is Back', content: Faker::Hipster.paragraph(sentence_count: 10), user_id: user6.id, review_id: nil, tag_id: Tag.all.sample.id)

puts "Seeding reviews..."
# Seeds for reviews.
review1 = Review.create!(comment: Faker::Hipster.sentence, rating: rand(1..5), blog_id: blog1.id, user_id: user1.id)
review2 = Review.create!(comment: Faker::Hipster.sentence, rating: rand(1..5), blog_id: blog2.id, user_id: user2.id)
review3 = Review.create!(comment: Faker::Hipster.sentence, rating: rand(1..5), blog_id: blog3.id, user_id: user3.id)
review4 = Review.create!(comment: Faker::Hipster.sentence, rating: rand(1..5), blog_id: blog4.id, user_id: user4.id)
review5 = Review.create!(comment: Faker::Hipster.sentence, rating: rand(1..5), blog_id: blog5.id, user_id: user5.id)

puts "Updating blogs..."
# Updating blog reviews
blog1.update(review_id: review1.id)
blog2.update(review_id: review2.id)
blog3.update(review_id: review3.id)
blog4.update(review_id: review4.id)
blog5.update(review_id: review5.id)

puts "Completed!"
