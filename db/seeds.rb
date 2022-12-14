puts "Seeding..."

# Seeds for users.
30.times {User.create(
                      first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password: Faker::Internet.password,
                      avatar: Faker::Avatar.image
)}

# Seeds for posts.
50.times {Blog.create(
                      title: Faker::Book.title,
                      content: Faker::Hipster.paragraph(sentence_count: 4),
                      user_id: rand(1..30),
                      review_id: rand(1..30),
                      tag_id: rand()
)}

# Seeds for reviews.
30.times {Review.create(
                        comment: Faker::Hipster.sentence,
                        rating: rand(1..5),
                        blog_id: rand(1..50),
                        user_id: rand(1..16)
)}

# Seeds for tags.
Tag.create([
    {
        category: "Fashion"
    },
    {
        category: "Travel"
    },
    {
        category: "Music"
    },
    {
        category: "Fitness"
    },
    {
        category: "DIY"
    },
    {
        category: "Sports"
    },
    {
        category: "Lifestyle"
    },
    {
        category: "Finance"
    },
    {
        category: "Politics"
    },
    {
        category: "Parenting"
    },
    {
        category: "Business"
    },
    {
        category: "Movies"
    },
    {
        category: "Tech"
    },
    {
        category: "Development"
    },
    {
        category: "Gaming"
    },
    {
        category: "Auto"
    }
])

puts "Completed."