# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Book.create([
    {title: 'Born To Run', author: 'Bruce Springsteen', genre: 'Autobiography'},
    {title: 'Casino', author: 'Nicholas Pileggi', genre: 'Crime'},
])

book_a = Book.create({title: '1776', author: 'David McCullough', genre: 'History'})

book_a.reviews.create({content: "Great Book", reviewer: "Mike"})