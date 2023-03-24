class Cryptid < ApplicationRecord
  belongs_to :user

  validates :name, :description, :image_url, presence: true
end
