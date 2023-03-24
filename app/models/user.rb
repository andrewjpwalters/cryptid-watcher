class User < ApplicationRecord
    has_many :locations
    has_many :posts
    has_many :cryptids, through: :posts
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
