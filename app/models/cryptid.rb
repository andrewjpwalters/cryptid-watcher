class Cryptid < ApplicationRecord
  belongs_to :user
  has_many :posts
  has_many :users, through: :posts

  validates :name, :description, :image_url, presence: true
end
