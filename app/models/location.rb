class Location < ApplicationRecord
  belongs_to :user
  has_many :posts
  has_many :cryptids, through: :posts

  validates :name, presence: true
end
