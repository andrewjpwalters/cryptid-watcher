class User < ApplicationRecord
    has_many :locations
    has_many :posts
    has_many :cryptids
    
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
