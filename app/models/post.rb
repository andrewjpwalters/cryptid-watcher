class Post < ApplicationRecord
  belongs_to :user
  belongs_to :cryptid
  belongs_to :location

  validates :comment, presence: true
end
