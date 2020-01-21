const { User, Post, Comment } = require('./models');

const seed = async () => {
  await User.destroy({ where: {} })

  const admin = await User.create({
    username: "cheetoh",
    password_digest: "$2b$11$J/T6HO7/IHF7TXgu4elqfO.YW6PJIOS9lQdmTQ789Sg7GUPkIer.O"
  })

  await Post.destroy({ where: {} })

  const post1 = await Post.create({
    username: "cheetoh",
    image_url: "https://res.cloudinary.com/briandanger/image/upload/v1572575048/IMG_8563_gmlvnv.jpg",
    caption: "George is the kind of cat who played college football in Nebraska and would have gone pro, but he got a bum knee on that last drive against Kansas St., and now he's just a pet cat living at some guy's apartment in West Harlem. He shits in a box.",
    location: "New York, NY",
    likes: 0
  })
  const post2 = await Post.create({
    username: "cheetoh",
    image_url: "https://res.cloudinary.com/briandanger/image/upload/v1572927794/58078382291__7DC053AA-2438-49A6-A11D-4AC6D3876709_lepde8.jpg",
    caption: "Maebe is the kind of cat who has 'resting bitch face' by choice, cause she's bad as hell and she doesn't care who knows it. This chainsmoking heartbreaker will crush your dreams, a 5th of hooch, and take huge dump in a box in the closet.",
    location: "New York, NY",
    likes: 0
  })
  const post3 = await Post.create({
    username: "cheetoh",
    image_url: "https://res.cloudinary.com/dw9l1orzh/image/upload/v1572968444/signal-2019-01-08-233128_onaedv.jpg",
    caption: "S'Mores is the most fraidiest of all cats",
    location: "New York, NY",
    likes: 0
  })

  await admin.addPost([post1, post2, post3])

  await Comment.destroy({ where: {} })

  const comment1 = await Comment.create({
    username: 'Ash Money',
    comment: 'Sick cheetoh photo'
  })

  await post1.addComment(comment1)

  process.exit();
  
}

seed();