class Post < ApplicationRecord
  belongs_to :user
  belongs_to :cryptid
  belongs_to :location
end
