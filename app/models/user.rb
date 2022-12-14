class User < ApplicationRecord
    has_secure_password
    has_many :blogs, dependent: :destroy
    has_many :tags, through: :blogs
    has_many :reviews
    
end
