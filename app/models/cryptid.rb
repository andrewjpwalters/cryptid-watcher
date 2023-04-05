class Cryptid < ApplicationRecord
  belongs_to :user
  has_many :posts
  has_many :locations, through: :posts

  validates :description, :image_url, presence: true
  validates :name, presence: true, uniqueness: true
end
